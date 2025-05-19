### Migration to Semantic HTML + PicoCSS

This document tracks the end-to-end migration of the personal site/blog from a bespoke **Layout25** SCSS stack to **PicoCSS** (class-less) with semantic HTML.

**How to use this document**  
When you (human or AI) pick up a task, scan this file to understand where it sits in the sequence.  Update the checklist, commit code, and push.  Keep commits small & focused.  If you discover new blockers, append them as sub-tasks under the appropriate phase.

#### Current stack (pre-migration)
* Static-site generator: **Eleventy (11ty)**.  See `eleventy.config.js` for build & passthrough rules.
* Layout & styles: `_layouts/layout25.html` plus many `layout25-*` classes defined in `_assets/css/layout25.scss`.
* Colour themes: custom Light / Dark / System classes (set on `<html>` by inline JS inside `_includes/theme.liquid`).
* Font: Google Fonts (Lato).  
* Asset pipeline: Sass → compiled CSS gets copied from `_assets/css` ➜ `/css` via Eleventy passthrough.

#### Target state (post-migration)
* Semantic HTML tags (`header`, `nav`, `main`, `section`, `article`, etc.) throughout templates.
* PicoCSS (classic flavour) as the **only** base stylesheet, committed locally as `/_assets/css/pico.min.css`.
* Custom styles live in `site-overrides.scss` (lightweight, Pico-friendly overrides).
* Theme toggler keeps existing HTML/JS but now flips `data-theme="light|dark"` on `<html>` instead of the old class names.
* All `layout25-*` classes and their SCSS definitions are deleted.
* Lato and bespoke colour tokens are removed in favour of Pico defaults.

#### Architectural decisions
* Stylesheet architecture: **PicoCSS classic** is vendored (`_assets/css/pico.min.css`) and served before a compiled **site-overrides.css** that contains all custom Sass tweaks.
* Build pipeline: Sass (`.scss`) files in `_assets/css` continue to compile to `/css` via Eleventy's passthrough; no additional bundler is introduced.
* Theme management: the existing SVG button sets `document.documentElement.dataset.theme = 'light' | 'dark' | ''` — an empty value lets the OS preference take control (System mode). No `classList` toggling remains.
* Mark-up convention: every template should rely on semantic HTML elements (`header`, `nav`, `main`, `section`, `article`, `figure`, etc.). Custom utility classes should be avoided; if unavoidable they belong in `site-overrides.scss`.
* Layout helpers: use Pico's `.container`, `.grid`, `.col` helpers for page structure. Legacy `layout25-*` classes are prohibited.
* Fonts & colours: default Pico font stack and colour palette are adopted. Any future brand colour overrides go in Sass variables inside `site-overrides.scss`.
* File retention: keep `_layouts/layout25.html` filename for routing stability during migration; internal code will shed the `layout25-*` names.
* Source control: each numbered task should be completed in a separate branch/PR when practical to preserve an auditable history.

---
## Task List & Phases
Use the checklist below.  Each numbered sub-task should map to one PR/commit whenever practical and reference exact file paths.

### PHASE 0 – Housekeeping
0.1  Download latest `pico.min.css` (classic) → commit to `_assets/css/pico.min.css`  
0.2  Create empty `_assets/css/site-overrides.scss`; ensure it's compiled to `/css/site-overrides.css`  
0.3  Delete Google-Fonts `<link …Lato…>` from `_includes/head.liquid`

### PHASE 1 – Global `<head>` switch
1.1  In `_includes/head.liquid` replace `<link rel="stylesheet" href="/css/layout25.css">` with:  
```
<link rel="stylesheet" href="/css/pico.min.css">
<link rel="stylesheet" href="/css/site-overrides.css">
```
1.2  Remove any leftover `--color-*` CSS variables defined inline/legacy.

### PHASE 2 – Theme Toggler
2.1  `_includes/theme.liquid`: keep markup; in the script swap class-based logic for `html.dataset.theme = ...`  
2.2  Delete `_assets/css/_theme-toggle.scss` + its `@import` in `layout25.scss`.

### PHASE 3 – Template Refactor
3.1  `_layouts/layout25.html` ➜ rewrite using Pico's `.container` and semantic tags; drop `layout25-*` wrapper classes.  
3.2  `_includes/navigation.liquid` ➜ use `<header>`, `<nav><ul><li>`; remove custom classes.  
3.3  `_includes/posts-list.liquid` ➜ rebuild list with Pico `.grid`, `.col-2`, `.col`. Keep two-column date+title layout.  
3.4  `pages/home.html`, `pages/blog.html` ➜ strip old section classes; rely on Pico defaults.

### PHASE 4 – Styles Cleanup
4.1  Delete entire `_assets/css/layout25.scss`.  
4.2  Migrate keepers (avatar circle, tabular-nums for dates, etc.) into `site-overrides.scss`.

### PHASE 5 – Remove Dead Assets
5.1  Delete `_assets/css/_theme-toggle.scss` and any other unused partials.  
5.2  Ensure `/css/layout25.css` no longer generated.

### PHASE 5A – UI Refinement (Pico-polish)

5A.1  Typography, rhythm & container (`_assets/css/site-overrides.scss`)
   • Update root variables:
     ```scss
     :root {
       /* Base type scale & spacing (slightly larger than Pico defaults) */
       --font-size: 18px;
       --line-height: 1.7;
       --typography-spacing-vertical: 1.75rem; /* distance between paragraphs & headings */
       --block-spacing-vertical: 2.5rem;       /* distance between major sections */
     }

     /* Widen reading measure */
     body > .container {
       max-width: 800px;
     }
     ```
   • **Delete** any global `a { text-decoration: none; }` rule – keep Pico's native link underlines.  
   • Keep the `--border-radius: 0` override only if square buttons are required; otherwise remove it.

5A.2  Navigation (`_includes/navigation.liquid` + SCSS)
   • Strip **all** inline `style="…"` attributes and *all* `col-*` classes – Pico's grid will auto-size.  
   • Mark-up:
     ```html
     <header>
       <div class="grid">
         <figure class="profile-image">
           <img src="/images/dp.jpeg" alt="{{ site.author.name }}">
         </figure>
         <div>
           <h1>{{ site.author.name }}</h1>
           <nav>
             <ul>
               <li><a href="/">Home</a></li>
               <!-- …other links… -->
             </ul>
           </nav>
         </div>
       </div>
     </header>
     ```
   • SCSS:
     ```scss
     header .profile-image {
       text-align: center;
       margin-bottom: var(--typography-spacing-vertical);
     }
     header nav ul {
       display: flex;
       gap: var(--spacing);
       list-style: none;
       margin: 0;
     }
     @media (max-width: 600px) {
       header nav ul {
         gap: calc(var(--spacing) * 0.75);
       }
     }
     ```

5A.3  Posts list (`_includes/posts-list.liquid` + SCSS)
   • Replace the `<ul><li>` structure with semantic articles:
     ```html
     <article class="post-item grid">
       <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%b %Y' }}</time>
       <div>
         <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
         {% if post.data.draft %}<span class="badge draft">Draft</span>{% endif %}
       </div>
     </article>
     ```
   • SCSS:
     ```scss
     .post-item {
       --grid-spacing-horizontal: var(--spacing);
       margin-bottom: var(--typography-spacing-vertical);
     }
     .post-item time {
       font-variant-numeric: tabular-nums;
     }
     ```

5A.4  Home & Blog pages (`pages/home.html`, `pages/blog.html`)
   • Purge all inline styles.  
   • Rely on semantic sections and Pico's default spacing.  
   • Any bespoke tweaks belong in `site-overrides.scss`.

5A.5  Colour system overrides (optional)
   • Start with Pico's palette and override only what's required:
     ```scss
     [data-theme="light"] {
       --primary: #0066cc;
       --primary-hover: #004499;
       --secondary: #666666; /* custom secondary for muted links */
       --muted-color: #666666;
       --h1-color: #333333;
       --h2-color: #444444;
     }
     ```
   • Ensure AA contrast; revisit values during QA.

5A.6  Responsive tweaks
   • Navigation break-point handled in SCSS above.  
   • Verify layouts down to 320 px; adjust `--grid-spacing-horizontal` or collapse grids if necessary.

### PHASE 6 – QA
6.1  Run `npm run build` locally; verify:  
   • Light/Dark/System switching  
   • Home, Blog, individual posts, yearly archive pages render correctly  
6.2  Tweak `site-overrides.scss` as needed.

### PHASE 7 – Wrap-up
7.1  Commit: "Migrate UI to semantic HTML + PicoCSS"  
7.2  Grep repo for `layout25` and delete remaining references.  
7.3  Close migration issue.

---
