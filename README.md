# Portfolio

Personal portfolio site built with React, TypeScript, and MUI. The design leans into a terminal-inspired theme with sharp lines, monospace accents, and animated type.

**Stack**
- React 18
- TypeScript
- MUI
- Webpack
- Framer Motion

**Local Development**
1. `npm install`
2. `npm start`

**Build**
1. `npm run build`

**Test**
1. `npm test -- --watchAll=false`

**Deploy**
1. `npm run deploy`

**Update Resume**
1. Replace the PDF at `src/assets/JeanPierre_Sfeir_Resume.pdf`.
2. The download button in `src/components/sections/SummarySection.tsx` uses this file.

**Edit Content**
- Summary copy and about-me text live in `src/components/sections/SummarySection.tsx` and `src/const/constants.tsx`.
- Work experience and skills live in `src/const/constants.tsx`.
- Contact links live in `src/const/constants.tsx` under `contactLinks`.

**Notes**
- This project uses `HashRouter`, so routes are hash-based on GitHub Pages.
