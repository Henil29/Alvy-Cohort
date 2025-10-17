# Alvy — Fashion Brand UI (React + Vite + Tailwind)

A responsive landing experience for a fashion brand with multiple sections: animated navbar, hero overlays, services grid, various feature sections, scroll-driven marquee, social cards, blog cards, newsletter banner, and a multi-column footer.

## ✨ Features
- Responsive Navbar with mobile drawer, cart badge, and CTA
- Hero with positioned overlays (headline, subtext, actions)
- Services/Grid sections with icons and CTAs
- Scroll-driven horizontal marquee (vertical scroll ➜ horizontal movement)
- Social cards grid with top-left icons and top-right arrow button (`Tenth.jsx`)
- Blog cards with image overlay action, label pill, and read-more row (`Twelfth.jsx`)
- Newsletter banner with separate desktop / tablet / mobile layouts (`Thirteenth.jsx`)
- Footer with left brand panel, three link columns, and bottom bar (`Footer.jsx`)
- Custom font via `@font-face` and Tailwind arbitrary family

## 🧰 Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4
- lucide-react (icons)
- motion (for future spring/easing)
- ESLint 9

## 🚀 Quick Start
1. Install dependencies
	- Windows PowerShell
	```powershell
	npm install
	```
2. Run the dev server
	```powershell
	npm run dev
	```
3. Build for production
	```powershell
	npm run build
	```
4. Preview the production build
	```powershell
	npm run preview
	```

## 📂 Project Structure
```
src/
  components/
	 Navbar.jsx         # Responsive navbar
  Hero.jsx             # Hero with overlays
  Second.jsx           # Services grid (spans per breakpoint)
  Fifth.jsx            # CTA/arrow treatment
  Seventh.jsx          # Full-viewport slides mapping
  Eighth.jsx           # Yellow CTA section
  Ninth.jsx            # Infinite marquee (scroll Y ➜ scroll X)
  Tenth.jsx            # Social cards grid
  Twelfth.jsx          # Blog card grid (desktop/md/sm variants)
  Thirteenth.jsx       # Newsletter banner (desktop/md/sm variants)
  Footer.jsx           # Multi-column footer with bottom bar
  index.css            # Tailwind + fonts
  main.jsx, App.jsx    # App wiring
```

## 🔧 Styling & Conventions
- Tailwind 4 utilities with arbitrary values (e.g., `font-['font1']`).
- Cards use subtle borders (`border-white/10`), rounded corners, and dark tones.
- Hover underlines in the footer are limited to text width using a child `span` with `::after`.
- Buttons use `cursor-pointer` for consistent affordance.

## 📸 Sections Overview (selected)
- `Tenth.jsx`: Icon top-left, arrow button top-right, title/desc aligned to the bottom.
- `Twelfth.jsx`: Image with center overlay arrow + label pill; title/desc; read-more row.
- `Thirteenth.jsx`: Newsletter with three responsive layouts (lg grid, md compact, sm stacked).
- `Footer.jsx`: Left brand panel, right link grid (row-span), bottom bar aligned under left.

## 🧪 Linting
Run ESLint locally:
```powershell
npm run lint
```

## 📝 Notes
- If a hover underline spans the full column, ensure the underline is placed on an inline `span` inside the `li`.
- If a button doesn’t show a hand cursor, add `cursor-pointer` or check for `pointer-events: none` on parent overlays.
