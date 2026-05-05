---
name: nolo-vault-design
description: Use this skill to generate well-branded interfaces and assets for Nolo Vault, an Italian editorial verticale on premium NoLo (no/low-alcohol) drinks — for production code or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Key sources of truth:

- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all design tokens (colors, type scale, spacing, radii)
- `assets/logo/` — lockup, monogram, favicon (SVG)
- `assets/icons/` — botanical category icons + UI icons (1.2px stroke, hand-drawn feel)
- `ui_kits/website/` — high-fidelity click-thru: Home, Article (Tier 2 review), Database, Newsletter
- `preview/` — single-concept reference cards (colors, type, components)

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. Always link `colors_and_type.css` and use `--nv-*` tokens — never hard-code colors. If working on production code (Astro / Vercel / Notion / Beehiiv stack), copy assets and read the rules here to become an expert in designing with this brand.

**Non-negotiable rules**

- Background is **`#F5F2ED`** (avorio caldo). Never pure white.
- One accent only: **`#C4531A`** (arancio bruciato). Used for kicker, Vault Pick, score, CTA. Nothing else has color.
- Display = **Barlow Condensed 800 UPPERCASE** with `-0.02em` tracking. Body = **DM Sans 400/500**.
- Typographic scale contrast is **extreme** — 60–128px display next to 10–11px caption. No timid in-between sizes.
- Score is treated as display type. `tabular-nums`, `-0.04em`, accent color.
- Database block **inverts the palette** (`#1A1A18` bg, accent score) as a mode-change signal.
- Borders **1px solid `#1A1A18`**. Border-radius max **2–4px**. **No shadows.** No gradients.
- **No emoji**, ever, anywhere. No icon fonts. Use the SVG icons in `assets/icons/`.
- Italian copy. Curatorial, never wellness-coachy. No "scopri", no exclamation marks in titles, no "tu" address.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask some clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
