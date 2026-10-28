# Lactate 319.8 mg/dL — case learning site

Static teaching site for the 2026/11/02 Laboratory Medicine morning-meeting case report
(a 76-year-old man with HBV-related Child C cirrhosis, recurrent HCC, refractory shock, and a
terminal central-laboratory lactate of 319.8 mg/dL).

## What it is

A single self-contained page (`index.html`) — no build step, no framework, no external CDN,
no tracking, no cookies, no login.

- **Case recap** — de-identified timeline and the original consult question (Chinese, verbatim).
- **Method explorer** — tabbed comparison of Beckman AU OSR6193, Roche cobas LACT2,
  Abbott Alinity Lactic Acid2, the LDH-UV reference method, and glycolate cross-reactivity.
- **Clinical correlation** — anion gap / lactate table, osmolal gap, and an explicit split between
  established fact, reasonable inference, and still-unverified items.
- **Knowledge check** — 4 multiple-choice questions with explanations and sources.
- **Take-home** and **References** with verifiable links.

## Run locally

```bash
python3 -m http.server 8000    # then open http://localhost:8000
```

## Deploy

Any static host works. This copy is published with GitHub Pages from the `main` branch root.
A Vercel deployment was not performed because no Vercel account/token was available in the build
environment (see the case folder's `99-notes.md`).

## Data protection

- No patient name, chart number, date of birth, or exact admission dates that could identify the
  patient beyond age/sex and clinical facts.
- No source PDFs, no textbook scans, no PACS screenshots (the supplied screenshots carried a name
  and chart number in the overlay, so they were excluded).
- Numbers on the site match the laboratory summary report used for the presentation.

## Caveat

Teaching material only — **not** a clinical decision tool.
