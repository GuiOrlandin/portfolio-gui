# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Gui Portfolio  
**Direction:** Premium / Recruiter — Modern Dark Cinema + Scroll Storytelling  
**Category:** Portfolio/Personal  
**Design Dials:** Variance 7/10 | Motion 7/10 | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette (Dark Cinema)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background | `#0C0E14` | `--bg` |
| Elevated | `#141824` | `--bg-elevated` |
| Surface | `#1A1F2E` | `--bg-card` |
| Primary text | `#E8EAF0` | `--text` |
| Muted text | `#9AA3B5` | `--text-muted` |
| Accent/CTA | `#3B82F6` | `--accent` |
| Accent dim | `rgba(59, 130, 246, 0.14)` | `--accent-dim` |
| Border | `rgba(148, 163, 184, 0.14)` | `--border` |
| On accent | `#0C0E14` | `--on-accent` |

**Notes:** Cool-tinted near-black (not `#000`). Single blue accent. No neon glow, no purple gradients.

### Typography

- **Heading:** Archivo (display)
- **Body:** Space Grotesk
- **Scale:** fluid `clamp()`; hero name is the brand signal
- **Google Fonts:** Archivo + Space Grotesk via `next/font`

### Spacing

Spacious: section vertical rhythm `clamp(4rem, 12vh, 8rem)`; content max ~72rem; horizontal padding `1.5rem` → `2rem`.

### Style

**Modern Dark Cinema + Motion-Driven Minimalism**

- Full-bleed atmospheric hero (gradient mesh, not flat)
- No card-grid CV layout
- Motion: hero stagger, scroll reveals, one optional sticky case
- Always respect `prefers-reduced-motion`

### Page Pattern

**Scroll-Triggered Storytelling**

1. Hero (brand + headline + CTA)
2. Hook (problem / positioning)
3. Featured work (2–3 case studies)
4. Trajectory (timeline)
5. How I work (stack in context)
6. Climax CTA (contact)

### Anti-Patterns

- ❌ Soft UI card stacks / LinkedIn dump
- ❌ Emoji icons
- ❌ Horizontal scroll on mobile
- ❌ Excess pin sections (>1–2)
- ❌ Purple neon glow aesthetic
- ❌ Instant state changes (use 150–300ms)

### Pre-Delivery Checklist

- [ ] SVG icons only
- [ ] `cursor-pointer` on clickables
- [ ] Contrast ≥ 4.5:1 body text
- [ ] Visible focus rings
- [ ] `prefers-reduced-motion`
- [ ] 375 / 768 / 1024 / 1440
