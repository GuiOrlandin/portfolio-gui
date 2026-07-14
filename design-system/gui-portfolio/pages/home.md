# Home Page Overrides

> **PROJECT:** Gui Portfolio  
> Overrides Master for the storytelling landing.

---

## Layout

- **Max width content:** 72rem (~1152px)
- **Hero:** full-bleed, min-height ~100dvh, brand name dominant
- **Sections:** Hook → Featured cases → Trajectory → Craft → Contact climax
- **No** masonry project grid on home (archive lives on `/projetos`)

## Color

- Dark cinema throughout; chapter intensity via opacity/emphasis, not rainbow chapters
- Accent reserved for CTAs and active states

## Motion

1. Hero load stagger (name, line, CTAs)
2. Scroll reveal on chapters (Intersection Observer)
3. Soft image parallax / fade on featured case only  
Respect `prefers-reduced-motion` → instant visibility

## CTAs

- Hero: Ver trabalho (anchor `#trabalho`) + Contato / LinkedIn
- End: primary contact block
