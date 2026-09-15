(function () {
  var startTime = Date.now();
  var statusEl = document.getElementById("status");
  var frame = document.getElementById("lesson-frame");
  var totalSlides = 50;
  var lastSlideSeen = 1;
  var completed = false;
  var finished = false;

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function findApi(win) {
    var depth = 0;
    while (win && depth < 20) {
      try {
        if (win.API_1484_11) return { type: "2004", api: win.API_1484_11 };
        if (win.API) return { type: "1.2", api: win.API };
        if (win.parent && win.parent !== win) win = win.parent;
        else break;
      } catch (e) {
        break;
      }
      depth += 1;
    }
    return null;
  }

  var runtime = findApi(window);

  function callApi(method, arg1, arg2) {
    if (!runtime || !runtime.api || typeof runtime.api[method] !== "function") return "";
    try {
      if (arguments.length === 1) return runtime.api[method]();
      if (arguments.length === 2) return runtime.api[method](arg1);
      return runtime.api[method](arg1, arg2);
    } catch (e) {
      return "";
    }
  }

  function initialize() {
    if (!runtime) {
      setStatus("No LMS API found. Running in standalone mode.");
      return;
    }

    if (runtime.type === "2004") {
      callApi("Initialize", "");
      callApi("SetValue", "cmi.completion_status", "incomplete");
      callApi("SetValue", "cmi.success_status", "unknown");
      callApi("Commit", "");
    } else {
      callApi("LMSInitialize", "");
      callApi("LMSSetValue", "cmi.core.lesson_status", "incomplete");
      callApi("LMSCommit", "");
    }
    setStatus("Connected to LMS.");
  }

  function setLocation(slide) {
    if (!runtime) return;
    if (runtime.type === "2004") callApi("SetValue", "cmi.location", String(slide));
    else callApi("LMSSetValue", "cmi.core.lesson_location", String(slide));
  }

  function markComplete() {
    if (!runtime || completed) return;
    completed = true;
    if (runtime.type === "2004") {
      callApi("SetValue", "cmi.completion_status", "completed");
      callApi("SetValue", "cmi.success_status", "passed");
      callApi("Commit", "");
    } else {
      callApi("LMSSetValue", "cmi.core.lesson_status", "completed");
      callApi("LMSCommit", "");
    }
    setStatus("Completion recorded.");
  }

  function formatScorm12Time(ms) {
    var secs = Math.floor(ms / 1000);
    var hh = Math.floor(secs / 3600);
    var mm = Math.floor((secs % 3600) / 60);
    var ss = secs % 60;
    return String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
  }

  function finish() {
    if (finished) return;
    finished = true;
    if (!runtime) return;
    setLocation(lastSlideSeen);
    if (lastSlideSeen >= totalSlides) markComplete();
    if (runtime.type === "2004") {
      callApi("SetValue", "cmi.session_time", "PT" + Math.floor((Date.now() - startTime) / 1000) + "S");
      callApi("Commit", "");
      callApi("Terminate", "");
    } else {
      callApi("LMSSetValue", "cmi.core.session_time", formatScorm12Time(Date.now() - startTime));
      callApi("LMSCommit", "");
      callApi("LMSFinish", "");
    }
  }

  function readSlideNumber() {
    try {
      var hash = frame.contentWindow.location.hash || "";
      var match = hash.match(/^#s(\d+)$/);
      if (!match) return;
      var slide = parseInt(match[1], 10);
      if (!Number.isFinite(slide)) return;
      lastSlideSeen = Math.max(lastSlideSeen, Math.min(totalSlides, slide));
      setLocation(lastSlideSeen);
      if (lastSlideSeen >= totalSlides) markComplete();
      else setStatus("Tracking progress: slide " + lastSlideSeen + " of " + totalSlides + ".");
    } catch (e) {
      setStatus(runtime ? "Connected to LMS." : "No LMS API found. Running in standalone mode.");
    }
  }

  initialize();
  frame.addEventListener("load", function () {
    readSlideNumber();
    window.setInterval(readSlideNumber, 1000);
  });
  window.addEventListener("beforeunload", finish);
  window.addEventListener("pagehide", finish);
})();
