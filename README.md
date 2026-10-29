# Lactate case learning site

A static, de-identified teaching companion for laboratory medicine. The page preserves six sections: Case recap, Method explorer, Clinical correlation, Knowledge check, Take-home summary and References.

## Run and build

No dependencies or build step are required. From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 . Stop the temporary server when finished.

The public files are `index.html`, `style.css`, `app.js`, `data.js` and `vercel.json`. Serve them as static files. Vercel uses framework `null`, with this directory as the output.

## Content

- Seven representative time points share one data array for chart, slider and native table.
- Method tabs use roving tab focus with Left/Right and Home/End keys.
- Evidence filters distinguish observations/derived calculations, inferences and unknowns.
- Five single-answer questions show an explanation for every option and source links.
- Answers exist only in page memory. There is no login, analytics, storage, external font, CDN or network submission.

## Evidence boundaries

References identify textbook chapters, actual manufacturer-authored IFU exemplars, primary papers, and material read only as abstracts. The reporter confirmed the local model as DxC 700 AU. Its LOx/POD method is supported by the original methodology study and AU IFU exemplar. Local reagent/version/lot remains unconfirmed. The older SYNCHRON LACT IFU also describes LOx/POD for DxC 600/800; it is not a substitute for this instrument's IFU. The assay literature supports method-specific susceptibility; linear dilution and clinical plausibility do not independently establish specificity.

CVVH-B is a bicarbonate medicine name. CRRT was planned/ordered in supplied records; delivered treatment was not verified. No dialysis-response claim is made.

## Privacy and publication

Only relative day/time, an older adult man, necessary laboratory values and paraphrased teaching content are public. Do not add patient names, dates of birth, chart/bed/order numbers, exact admission dates, raw records, PACS images, source attachments, textbook scans, credentials, or private audit notes. Source records remain outside this repository.

A prior repository revision contained stronger claims and exact case dates. This branch corrects current public content without rewriting Git history. Do not publish additional original data while reviewing.

## Review status

Prepared on VPS for content and browser review. A successful Git commit alone does not mean Vercel deployment or production validation occurred. The coordinating task owns publication and records the verified production URL separately.
