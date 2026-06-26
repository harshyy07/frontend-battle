# DataMatrix Intelligence Core 🚀

**Frontend Battle Round 1 Submission**

A hyper-optimized, visually stunning SaaS landing page built to strictly adhere to the brutal constraints of the Frontend Battle Hackathon Round 1. 

Live Demo: [Vercel Deployment Link Here]

---

## 🏆 The Hackathon Constraints & How We Crushed Them

This project was built from the ground up to achieve a perfect 100% score against the Round 1 grading rubric. We explicitly avoided the "easy path" to maximize the technical evaluation score.

### 1. The "Zero Dependency" Rule (Score: 25%)
**Constraint:** Absolute ban on Framer Motion, GSAP, Radix, Lottie, and heavy UI component libraries.
**Our Solution:** 
Every single complex animation and interactive component is built entirely from scratch using pure vanilla Javascript, standard React Hooks, and CSS tailwind utilities.
- The glowing cursor? Pure DOM ref mutation.
- The animated Data Pipeline? Custom overlapping SVG paths with native CSS `@keyframes` and stroke-dashoffset rendering.
- The 3D tilting Bento Grid? Raw `MouseEvent` tracking with pure CSS `transform: rotate3d()`.

### 2. State Isolation Guardrail (Score: 20%)
**Constraint:** High-frequency updates cannot trigger React component tree re-renders (zero DevTools paint flashing).
**Our Solution:** 
We bypassed React state entirely for our high-frequency components:
1. **Pricing Toggles:** Uses `useRef` to directly manipulate DOM node `innerHTML` and `classList` when switching between Monthly/Annual pricing. 
2. **Custom Hardware Cursor:** Bypasses `useState` completely. Captures native window `mousemove` events and applies `translate3d(x, y, 0)` directly to the cursor `ref`, forcing hardware-accelerated GPU rendering with 0% React overhead.

### 3. Motion Choreography Protocol (Score: 15%)
**Constraint:** Strict adherence to predefined animation timings (`150ms-200ms` micro, `300ms-400ms` macro, `<500ms` orchestration).
**Our Solution:**
We enforced a strict Tailwind styling architecture:
- All buttons and hovers: `duration-200 ease-out`
- Expanding accordion panels: `duration-300 ease-in-out`
- Entry sequences (Dashboard Mockup, Hero Text): Hard-capped at `duration-500 ease-out` to perfectly fit within the initial load window constraint.

### 4. Aesthetics & Theming (Score: 20%)
**Constraint:** Use only 5 specific brand hex codes and 2 specific fonts (JetBrains Mono & Inter).
**Our Solution:**
- `tailwind.config.js` was locked down to only generate Nocturnal Expedition (`#0D1F2D`), Arctic Powder (`#F1F6F4`), Forsythia (`#FFC801`), Mystic Mint (`#D9E8E2`), and Deep Saffron (`#FF9932`). 
- Utilized premium CSS techniques like Glassmorphism (`backdrop-blur-2xl`), deep layering (`drop-shadow`, `mix-blend-screen`), and interactive Parallax tracking to create a "God-Tier" UI using only the allowed colors.

### 5. SEO & Semantic Architecture (Score: 10%)
**Constraint:** Flawless Semantic HTML5 and basic ARIA setup.
**Our Solution:**
- Strict usage of `<main>`, `<header>`, `<section>`, `<footer>`, `<article>`.
- Fully implemented `aria-label`, `role="list"`, `role="listitem"`, and valid `tabIndex={0}` keydown events for full keyboard navigation inside the expanding Features and Pricing sections.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite + Oxc Linter
- **Styling:** Tailwind CSS (Strict Config)
- **Animations:** 100% Vanilla JS + CSS3

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Run strict linter (Oxlint)
npm run lint

# Build for production
npm run build
```
