# Lecture 1 — Introduction to Machine Learning

**File:** `MEAI502_Lecture01_Introduction_to_ML.html` (50 slides, self-contained, open in any browser)

Rebuilt from `Lec1Chap1.pptx` in the dark presentation style used by
CS3081 (AI) and CS4085 (Deep Learning).

## Controls

| Key | Action |
|-----|--------|
| `→` `←` / `Space` | Next / previous slide |
| `R` | **Reveal the answer** on quiz and activity slides |
| `N` | Toggle speaker notes (presenter panel) |
| `F` | Fullscreen |
| `Home` / `End` | First / last slide |

The left rail jumps between the eight sections. Every slide carries speaker
notes with delivery guidance, timings, likely student questions, and precision
caveats. Answers stay hidden until you press `R`, so you can poll the room first.

## Structure

| Slides | Section | Content |
|--------|---------|---------|
| 1–10 | WHAT | Title, **“AI is the new electricity”**, outline, six everyday examples, industry examples, Samuel's definition, programming vs learning |
| 11–15 | WHY NOW | Four enablers, applications, history timeline, milestones |
| 16–18 | SCOPE | AI vs ML vs DL, the nested-circles diagram |
| 19–22 | DEFINE | Mitchell's E/T/P, checkers example, spam quiz |
| 23–37 | PARADIGMS | ML taxonomy, supervised, unsupervised, reinforcement learning |
| 38–42 | TODAY | **New** — generative AI, foundation models, transfer learning |
| 43–46 | PRACTICE | ML lifecycle, two quizzes |
| 47–50 | NEXT | Recap, reflection, Week 2 preview, contact |

## The opening examples (slides 7–8)

These follow the spoken narration in order, so you can talk straight down them:

**Slide 7 — six things students used today.** Web search (“How do I make a
sushi roll?”), photo tagging on Instagram/Snapchat, streaming recommendations
(“You watched Star Wars — what next?”), voice to text (“Hey Siri…”, “OK Google,
Indian restaurants near me”), spam filtering (“Congratulations, you've won a
million dollars”), and face unlock.

**Slide 8 — three industrial applications.** Wind-turbine power generation,
diagnostic support in hospitals, and computer-vision defect inspection on an
assembly line. This is the pivot from *convenient* to *consequential* — the
speaker notes carry the framing: if a music recommendation is wrong you skip
the song; if a diagnosis is wrong someone is harmed.

Both slides end on the same landing point as the narration: *it's the science
of getting computers to learn without being explicitly programmed* — which is
Samuel's definition on slide 9.

## Opening

**Slide 2 is the hook:** Andrew Ng's *“AI is the new electricity.”* Deliver the
quote, pause, then unpack the analogy — electricity was a general-purpose
technology that transformed every industry in turn, and machine learning is
doing the same. Ask the room to name a Saudi industry and find the ML in it.
Full delivery guidance, including the honest limits of the analogy, is in the
speaker notes (press `N`).

## Figures

**33 figures from the original PPTX are embedded** in the file — the AI/ML/DL
nested-circles diagram, the ML taxonomy trees, the seventy-year history
timeline, the Andrew Ng housing-price and tumour-classification plots, the
clustering scatter, the classification-types chart, the Arthur Samuel portrait,
the E+T+P formula graphic, and the application photographs (genomics, social
networks, data centres, astronomy, market segmentation).

Light-background figures sit on white plates so they read cleanly against the
dark slides; dark artwork is used full-bleed as section backdrops. Everything
is base64-encoded inside the single HTML file — **no external image files, no
network needed.**

A few concepts had no usable figure in the PPTX (voice input, face unlock, wind
turbines, diagnostics, factory inspection) and the training loop was only ever
four text boxes. Those are drawn as **inline SVG** in the deck's own colours, so
they scale to any projector without going soft.

## What changed from the original PPTX

**Removed** — every French-language slide. The original duplicated four slides
in French (old slides 9, 23, 26, and the French labels on the training-phase
diagrams 32–34). All content is now English only.

**Added** — a new section (slides 32–36) covering material the original predates:

- Discriminative vs generative models
- Self-supervised learning, and how LLMs are actually trained
- Foundation models: pretrain → adapt → deploy, and the cost asymmetry
- Transfer learning: feature extraction, fine-tuning, and prompting
- A "what has and hasn't changed" table — making the point that overfitting,
  evaluation and data bias did **not** go away

Smaller additions: algorithms as a fourth enabler (the original listed three),
SVMs and Transformers on the history timeline, anomaly detection under
unsupervised learning, multi-class/multi-label classification, and a six-phase
ML lifecycle replacing the original's single "phases of ML" slide.

**Preserved** — the original teaching sequence, Samuel's and Mitchell's
definitions, the flower/arithmetic contrast, the training loop, the
checkers example, and all five original quiz questions.

## Alignment

- **Textbook:** Burkov, *The Hundred-Page Machine Learning Book* — Chapters 1–2
- **Syllabus:** Week 1, "Introduction to the course and background of machine
  learning and its application"
- **CLOs:** CLO2 (identify what learning technique a problem requires)
- Forward references to Weeks 2, 4, 9, 10, 11, 12 and 13 are marked on the slides
