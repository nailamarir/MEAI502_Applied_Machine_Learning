# Lecture 2 — Linear Regression

**Two files, same 65 slides, same content — only the theme differs:**

| File | Background | Use it for |
|---|---|---|
| `MEAI502_Lecture02_Linear_Regression.html` | **Dark** | Projecting in a darkened lecture hall |
| `MEAI502_Lecture02_Linear_Regression_Light.html` | **White** | Printing, handouts, bright rooms, screen sharing |

Both are self-contained single files — no external images, no network needed.

Rebuilt from `Ressource/Lec2 LinearReg (2) (2).pptx` in the same dark presentation
style as Lecture 1.

## Controls

| Key | Action |
|-----|--------|
| `→` `←` / `Space` | Next / previous slide |
| `R` | **Reveal the answer** on quiz slides — including the worked solution |
| `N` | Toggle speaker notes (presenter panel) |
| `F` | Fullscreen |
| `Home` / `End` | First / last slide |

The left rail jumps between the eight sections. Every slide carries speaker
notes with delivery guidance, anticipated student questions, and the reasoning
behind each design choice. Answers stay hidden until you press `R`, so you can
poll the room first.

## Structure

| Slides | Section | Content |
|--------|---------|---------|
| 1–10 | SETUP | Title, the four notions, housing example, notation, quiz 1 |
| 11–15 | MODEL | Supervised learning diagram, hypothesis *h*, what θ₀ and θ₁ do, quiz 2 |
| 16–23 | COST | Which line? · the error term · why squared · building *J* · the objective · loss vs cost |
| 24–33 | INTUITION | Simplify to θ₁ · data space vs parameter space · θ₁ = 1, 0.5, 0 · quiz 3 · the parabola · the bowl · contour plots |
| 34–44 | DESCENT | The idea · update rule · learning rate α · too small/too large · simultaneous update · the sign argument · quiz 4 · stopping rules |
| 45–50 | TOGETHER | The two halves joined · the derivatives · the full algorithm · convexity · watch it learn |
| 51–58 | MULTIPLE | Many features · *n* vs *m* · quiz 5 · multivariate hypothesis · the *x*₀ = 1 trick · gradient descent generalised |
| 59–65 | NEXT | Recap · what carries forward · Lab 2 preview · reflection · contact |

## Colour

Each section carries its own accent hue, applied to the heading, the left rail,
rules and highlights — **blue** SETUP, **green** MODEL, **gold** COST,
**violet** INTUITION, **coral** DESCENT, **teal** TOGETHER, **indigo** MULTIPLE.
The outline on slide 3 shows all eight at once, so students can place themselves
without reading the rail.

The light version uses the same eight hues, darkened for contrast against white.
The inline SVG diagrams are recoloured too, since SVG attributes cannot inherit
CSS variables. The two dark code panels on the simultaneous-update slide stay
dark in both versions — they read as code blocks on white.

## The teaching spine

The lecture is built on **four notions** introduced on slide 6 and closed on
slide 50: *dataset · model and parameters · cost function · learning algorithm*.
The speaker notes return to them repeatedly, because they are the frame every
later algorithm in the course fits into.

**The hardest slide is 26** — the distinction between *data space* (a plot of
<var>h</var> against <var>x</var>) and *parameter space* (a plot of <var>J</var>
against θ). The notes flag it as the one idea that, on its own, justifies the
lecture. Slide 50 pays it off with both views of a single training run
side by side.

**The most important quiz is slide 30**, where students compute <var>J</var>(0)
by hand. It is the first time they use the cost function as a tool rather than
watch it being used. Pressing `R` shows the full working, not just the letter.

## Quizzes

Five, all from your original deck, with distractors preserved:

| Slide | Question | Answer |
|-------|----------|--------|
| 10 | What is <var>y</var><sup>(3)</sup>? | B — 315 |
| 15 | Read θ₀ and θ₁ off the line | B — θ₀ = 0.5, θ₁ = 1 |
| 30 | What is <var>J</var>(0)? | D — 14/6 ≈ 2.33 |
| 43 | One GD step at a local optimum? | A — θ₁ unchanged |
| 54 | What is <var>x</var>₁<sup>(4)</sup>? | A — 852 |

The speaker notes treat each wrong option as a **diagnostic** — they say what
a student who picks it has misunderstood, and what to re-teach.

## Figures

**34 figures from the original PPTX are embedded** — the Portland housing
scatter, the training-set tables, the θ₁ = 0.5 and θ₁ = 0 intuition pairs, the
cost surface and contour plots (with Ng's own handwritten annotations), the
convex/non-convex surface comparison, the gradient descent rule panels, and the
multivariate notation notes.

The five **animated GIFs** in the original are embedded as their most
informative single frame — the convergence/divergence pair on slide 40 and the
two-panel training run on slide 50 are the two that matter most. The originals
are still in `Ressource/` if you want to project them moving.

TIFFs were converted, everything was recompressed, and all of it is base64-encoded
inside the single HTML file — **no external image files, no network needed.**

Four diagrams are drawn as **inline SVG** in the deck's own colours, because
the PPTX had no usable figure for them:

- Slide 12 — the supervised learning flow (training set → algorithm → <var>h</var> → prediction)
- Slide 14 — what θ₀ and θ₁ each do to the line
- Slide 19 — one example's error, drawn on the data
- Slide 42 — the sign of the derivative, both cases

## What changed from the original PPTX

**Removed** — the duplicated title slide, the empty section placeholders, and
the repeated notation slide (old slides 9 and 65 were identical).

**Added** — material the original assumed you would say aloud:

- **Slide 14** — what θ₀ and θ₁ *mean* (intercept and slope, in dollars per square foot)
- **Slide 18** — the idea, unpacked into three questions before the formula appears
- **Slide 19** — the error term for a single example, drawn
- **Slide 20** — *why squared*, as a table: cancellation, differentiability, outlier sensitivity, and the MAE trade-off
- **Slide 23** — loss vs cost function
- **Slide 39** — α as a **hyperparameter**, and the parameter/hyperparameter distinction
- **Slide 44** — stopping rules: what "repeat until convergence" actually means in code
- **Slide 42** — the sign argument, both cases in one figure
- **Slide 62** — what carries forward to Weeks 4, 5, 8, 9, 12, 13
- **Slide 65** — a closing reflection on loss choice as an ethical decision

**Preserved** — the original teaching sequence exactly: the four notions, the
housing example, the notation build, the simplification to θ₁, the three
worked values of <var>J</var>, the contour plots, the gradient descent
derivation, the convexity argument, and the move to multiple features. All five
original quiz questions are intact, with their original distractors.

## Alignment

- **Textbook:** Burkov, *The Hundred-Page Machine Learning Book* — Chapter 3.1
- **Syllabus:** Week 2, "Supervised learning: linear regression"
- **Lab:** Lab 2 (data collection and understanding) is previewed on slide 63;
  Lab 3 fits this model to the data students collect
- **Back-references:** Lab 1 (the lifecycle, Stages 1–3) on slides 6, 7, 29, 52;
  Lab 1 part 2 (`StandardScaler`, baselines) on slides 29, 33, 47, 59
- **Forward references:** Weeks 3, 4, 5, 8, 9, 12 and 13 are marked on the slides
  and explained in the notes
