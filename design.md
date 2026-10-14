<!-- Hallmark · pre-emit critique: P5 H4 E5 S5 R5 V4 -->
# TIU — shared design system

The approved world home is the visual reference. Preserve its coast photograph,
dark green atmosphere, ivory text, mint accent and Korean typography. Extend this
system across the site rather than selecting a new theme for each page.

## Genre and macrostructure family

- World home: Photographic, with the existing cinematic scene and left-aligned copy.
- Game overview: the existing command dashboard and optional globe introduction.
- Guides: Long Document; a readable sequence followed by reference material.
- Records and reference: Catalogue; search, categories and accessible disclosures.
- Navigation: two primary areas, World and Game, with a contextual index in a native
  disclosure. The wordmark and primary areas occupy the same positions on every page.
- Footer: inline area links. Page-specific record identifiers can remain secondary.

## Palette and typography

[tokens.css](tokens.css) owns the semantic colors, fonts and spacing. Colors are
expressed in OKLCH and reproduce the previously approved RGB palette:
paper #080f0d, surface #101b16, ink #edf2e9, muted #acbab0, accent #78d7a6.

Display and body use Noto Sans KR, upright, with bold display headings. Share Tech
Mono is reserved for identifiers and short technical labels. No additional faces.
At small widths, localized headings may use a smaller display size and shorter
phrases. Japanese punctuation must remain with its sentence. Record titles may
wrap naturally; navigation and action labels remain on one line.

## Space, images and shared controls

Use the named 4-point spacing scale for new shared components. Keep the existing
20px minimum content gutter and 1240px maximum reading frame. Real game art and
screenshots retain their intrinsic aspect ratios. No replacement stock imagery.

Primary actions use a mint outline and dark green fill; secondary actions use a
muted outline. Focus rings are immediate and visible. Native details/summary is
used for reference records, field missions and the global index. Closed records
are compact rows, not empty fixed-height cards. Short screen terms use definitions.

## Copy and motion

The released Android game is the primary play destination; the browser demo is
secondary. Preserve canonical record text and distinguish it from friendly guide
copy. Decorative English section kickers are optional, not a universal pattern.

Local search and filters update immediately with a result count and recoverable
empty state. Preserve selected categories across language changes. No loading
ceremony for local operations.

Globe animation runs only while visible and connected. Skip, ACCESS completion,
DOM removal and page exit clean up scheduled frames. Reduced motion uses a still
frame and immediate entry. Other shared interactions have no spatial animation.

## Exports

Runtime source: [tokens.css](tokens.css). The following adapters are documentation
for reuse; this static site does not depend on Tailwind or shadcn/ui.

### Tailwind v4

```css
@theme inline {
  --color-paper: var(--bg);
  --color-ink: var(--text);
  --color-accent: var(--green);
  --font-display: var(--font-body);
  --font-sans: var(--font-body);
  --spacing-page: var(--space-page-gutter);
}
```

### DTCG

```json
{
  "color": {
    "paper": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.031373, 0.058824, 0.05098] } },
    "ink": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.929412, 0.94902, 0.913725] } },
    "accent": { "$type": "color", "$value": { "colorSpace": "srgb", "components": [0.470588, 0.843137, 0.65098] } }
  },
  "font": { "body": { "$type": "fontFamily", "$value": ["Noto Sans KR", "sans-serif"] } },
  "space": { "medium": { "$type": "dimension", "$value": { "value": 24, "unit": "px" } } }
}
```

### shadcn/ui

```css
:root {
  --background: var(--color-paper);
  --foreground: var(--color-ink);
  --card: var(--color-paper-2);
  --card-foreground: var(--color-ink);
  --primary: var(--color-accent);
  --primary-foreground: var(--color-accent-ink);
  --muted-foreground: var(--color-muted);
  --border: var(--color-rule);
  --input: var(--color-rule-strong);
  --ring: var(--color-focus);
  --radius: 0;
}
```
