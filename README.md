# Tekken 8 – Alisa Guide

An interactive, bilingual (German/English) **Tekken 8 Alisa guide** – playable directly in your browser, no download or install needed.

**▶ Play it here:** https://kominostyle.github.io/AlisaGuide/

## Features

- **Full roster (41 characters)** as a matchup picker (portrait + name), laid out as one continuous roster: Base → Season 1 → 2 → 3, newest last.
- **Built-in frame data for every character** (6,374 moves). Every opponent move is tappable and opens a sheet with Hit level · Startup · On Block · On Hit · CH · Damage · Tags.
- **Per-move "Punish" readout** – derived from the on-block value, it shows how Alisa punishes the move (df+2 / uf+4 launch, 3,2, jab, or while-standing for lows).
- **Split matchup sections**: What hurts · Duck between strings (with the exact hit to duck + while-standing launch) · Sidestep (homing warnings) · Launch-punishable · Alisa's plan.
- **Alisa's full movelist & guide** (fundamentals, loops, combos, punishers, chainsaw/DES, mindset and more).
- **Structured coaching sections**: a Heat-system breakdown, a full stance guide (DES / SBT / DBT / BKP), anti-Alisa knowledge checks & frame traps, and punisher/combo references — with review badges marking anything not yet lab-confirmed for the target patch.
- Language toggle (DE/EN), built around keyboard notation.

## Development

A static [Vite](https://vitejs.dev/) app — no backend, no database. All guide data is compiled from YAML into build-time virtual modules, so the browser bundle ships only finished JSON (no YAML/Zod parser reaches the client).

```bash
npm ci                 # install dependencies
npm run dev            # local dev server
npm run typecheck      # TypeScript check
npm run content:check  # validate all content (frame data, matchups, moves, stances, …)
npm run build          # production build to dist/
npm run preview        # preview the production build
```

**Target game version:** Tekken 8 Season 3, **Ver. 3.01.01**. Advice comes from our own canonical local content; anything drawn from an external reference that has not been re-verified for this patch is shown with a **needs lab check** / **manual-review** badge and kept out of the canonical advice.

**Deploy:** pushing to `main` runs the [GitHub Pages workflow](.github/workflows/deploy-pages.yml) (typecheck → content check → build → deploy). The site base path is `/AlisaGuide/`.

## Data & credits

Frame data comes from the **[TekkenDocs](https://tekkendocs.com/)** project / **[Wavu Wiki](https://wavu.wiki/)** and is used with attribution. Frame values reflect the current patch (Season 3, **Ver. 3.01.01**). Wavu content is licensed under **CC BY-SA 4.0**.

Tekken™ and all characters are property of Bandai Namco. This is a non-commercial fan project.

## License

The original code, design, and content of this project are released under the **Source Available Collaboration License** (see [`LICENSE`](LICENSE)) © 2026 Komino Style.

In short: viewing, running locally for testing, and contributing via pull requests is allowed – commercial use, redistribution, mirroring, or hosting your own public copy only with prior written permission.

The embedded **frame data** (TekkenDocs / Wavu Wiki) is excluded from this and remains under its original **CC BY-SA 4.0** license with attribution.
