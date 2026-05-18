# Expenses Calendar

A small **React** app that looks like a **thermal receipt** on a calendar: pick a day, log spending in **₹**, and skim the month without leaving the metaphor.

---

## Why it exists

Most expense trackers feel like spreadsheets. This one leans into a **single visual idea**—receipt + printer—so the UI stays memorable and lightweight. Data lives **in your browser** (`localStorage`); there is no account or backend.

---

## What you can do

| Area | Behavior |
|------|----------|
| **Month grid** | Navigate with **« »** or **swipe** (horizontal) on touch devices. |
| **Day detail** | After the print intro, **today** is pre-selected; the day card shows **entries or an empty state** with day total. |
| **Entries** | Store name, category, line items + amounts; **monthly total** and **category breakdown** modal. |
| **Context** | **Indian holidays** (reference dates) and **₹** throughout. |
| **Fun** | Holiday confetti, optional fortune under the barcode. |

---

## Stack

- **React 18** + **Vite 5**
- **PWA** hooks (`manifest`, service worker) for install / offline shell  
  *Icons in the manifest may need real assets for polished install tiles.*

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (with this repo’s `base`, paths live under **`/expenses-calendar/`**).

If `vite --host` errors on your machine (network interface enumeration), bind loopback only:

```bash
npx vite --host 127.0.0.1
```

**Build & preview**

```bash
npm run build
npm run preview
```

**Deploy (GitHub Pages)**

```bash
npm run deploy
```

Ensure `base` in `vite.config.js` matches your Pages path (e.g. `/<repo-name>/`).

---

## Project layout

```
├── index.html          # Entry + PWA registration
├── src/
│   ├── main.jsx
│   └── receipt-calendar.jsx   # UI + calendar + expenses state
├── public/
│   ├── favicon.svg     # Emoji 🖨️ (favicon)
│   ├── manifest.json
│   └── sw.js
└── vite.config.js
```

---

## Design notes

- **Receipt first:** typography and layout favour the thermal-ticket read order (header → grid → line items → totals → footer).
- **Clarity over novelty:** primary actions stay obvious; decorative copy stays out of the critical path.
- **Local-first:** clearing site data clears expenses—export / backup is a sensible future addition if you depend on history.

---

## License

Use and modify freely for personal projects; add a license file if you redistribute as a package.
