export const DATA = {
  "updated": "2026-10-29",
  "timeline": [
    {
      "day": "Day 0",
      "title": "腹脹與下肢水腫就醫",
      "text": "背景為 HBV 相關失代償肝硬化與復發 HCC。初次乳酸 12.1 mg/dL，Na 118 mEq/L，Cr 0.75 mg/dL。"
    },
    {
      "day": "Day 11",
      "title": "上消化道出血合併低血壓",
      "text": "咖啡色胃管引流與收縮壓 79 mmHg；接受輸液、輸血與抑酸治療。出血來源未經胃鏡確認。"
    },
    {
      "day": "Day 16",
      "title": "意識惡化與急性腎損傷",
      "text": "Ammonia 212 µg/dL，Cr 3.06 mg/dL。病程記錄肝性腦病，並懷疑 HRS 與低血容量共同影響。"
    },
    {
      "day": "Day 23",
      "title": "影像顯示腫瘤進展",
      "text": "MRI 報告描述約 10 cm 融合性肝腫瘤、右側門靜脈與肝靜脈栓塞、大量腹水與腹膜病灶；此為影像判讀。"
    },
    {
      "day": "Day 24",
      "title": "嗆咳後再度休克",
      "text": "BP 62/37 mmHg，開始升壓劑與廣效抗生素。其後有大量血性胃管引流與血便，臨床考慮感染及出血。"
    },
    {
      "day": "Day 25–26",
      "title": "乳酸上升與多器官衰竭",
      "text": "氣管插管、多種升壓劑及 bicarbonate 處方可見於紀錄。CRRT 曾獲建議並備藥，但實際啟用與完成量未獲證實。"
    },
    {
      "day": "Day 26",
      "title": "末期檢驗與結局",
      "text": "乳酸 319.8 mg/dL，AST 6290 U/L，ALT 3014 U/L，INR 3.5。病程記錄難治性休克及死亡。"
    }
  ],
  "series": [
    {
      "label": "Day 24 · 22:05",
      "hours": 0,
      "lactate": 23.4,
      "ph": 7.188,
      "na": 138,
      "cl": 103,
      "hco3": 8.5
    },
    {
      "label": "Day 25 · 02:56",
      "hours": 4.85,
      "lactate": 46.4,
      "ph": 7.208,
      "na": 149,
      "cl": 101,
      "hco3": 17.6
    },
    {
      "label": "Day 25 · 11:49",
      "hours": 13.733333,
      "lactate": 117.9,
      "ph": 7.49,
      "na": 166,
      "cl": 102,
      "hco3": 31.4
    },
    {
      "label": "Day 25 · 17:12",
      "hours": 19.116667,
      "lactate": 145,
      "ph": 7.482,
      "na": 169,
      "cl": 100,
      "hco3": 31.6
    },
    {
      "label": "Day 25 · 22:34",
      "hours": 24.483333,
      "lactate": 219.1,
      "ph": 7.428,
      "na": 168,
      "cl": 99,
      "hco3": 26.7
    },
    {
      "label": "Day 26 · 04:40",
      "hours": 30.583333,
      "lactate": 232.2,
      "ph": 7.275,
      "na": 163,
      "cl": 97,
      "hco3": 19.5
    },
    {
      "label": "Day 26 · 11:50",
      "hours": 37.75,
      "lactate": 319.8,
      "ph": 7.405,
      "na": 173,
      "cl": 93,
      "hco3": 28.5
    }
  ],
  "methods": [
    {
      "id": "au",
      "name": "DxC 700 AU",
      "heading": "DxC 700 AU：LOx/POD 原理已確認，試劑版次仍待核",
      "status": "院內機型由報告者補充；本地試劑版次與 lot 仍待核",
      "description": "報告者補充院內機型為 Beckman Coulter DxC 700 AU。該型原始研究的方法表與所讀 AU OSR6193 IFU 範例，均支持乳酸經 H₂O₂ / peroxidase 光度反應測定。這不能確認當時試劑版本與批號。",
      "rows": [
        [
          "已確認的原理",
          "DxC 700 AU 的乳酸方法為 LOx/POD 路徑；所讀 OSR6193 範例使用 4-AAP 與 TOOS 呈色。"
        ],
        [
          "不要只看 DxC 名稱",
          "舊 SYNCHRON LACT B01249AN 對 UniCel DxC 600/800 也描述 LOx/POD。它不是本例 700 AU 的對應 IFU，不能互套干擾與性能數字，更不能僅憑 DxC 名稱判作 NAD 方法。"
        ],
        [
          "干擾測試有邊界",
          "2022 AU IFU 範例的 bilirubin 測試至 8 mg/dL。本例末期曾為 13.2 mg/dL，不能外推為無影響，亦不能由黃疸旗標推定偏差方向。"
        ],
        [
          "本例還缺的查核",
          "試劑/lot、有效範圍、原始訊號與稀釋倍數仍未核。「Recheck」不等於已完成自動稀釋或排除干擾；AU480 研究結果也不等於本例已驗證。"
        ]
      ],
      "sources": [
        "R4",
        "R10",
        "R12",
        "R13"
      ]
    },
    {
      "id": "roche",
      "name": "Roche cobas",
      "heading": "LACT2：原理相同，干擾反應仍可不同",
      "status": "已讀 c 701/702 的 LACT2 V13.0；本地配置待核",
      "description": "所查方法書使用 lactate oxidase 產生 H₂O₂，再由 peroxidase 偶聯呈色。該版 IFU 提醒 glycolate 可使結果升高，且反應可能隨試劑批號改變。",
      "rows": [
        [
          "方法書的適用範圍",
          "LACT2，05171881500 V13.0，cobas c 701/702。不能直接當作其他 cobas 型號的性能保證。"
        ],
        [
          "與 AU 比對的意義",
          "不同試劑可能對交叉反應物有不同反應。結果一致仍可能共有偏差，結果不同也須排除方法偏差、基質與採檢時間因素。"
        ],
        [
          "檢體與處理",
          "該版列 fluoride/oxalate 或 fluoride/heparin 血漿與及時分離要求；實際檢體仍須依本地 IFU 核對。"
        ],
        [
          "需要補的資料",
          "確認本院機型、試劑版次與 lot，再設計同時/同檢體的方法比較。"
        ]
      ],
      "sources": [
        "R5",
        "R8"
      ]
    },
    {
      "id": "abbott",
      "name": "Abbott Alinity c",
      "heading": "Alinity c Lactic Acid2：也是 LOx/POD 光度法",
      "status": "已讀 2022 原廠俄文譯本；院內實際配置待核",
      "description": "所讀 Lactic Acid2 方法書以 LOx 產生 H₂O₂，再由 POD、TODB 與 4-AAP 形成染料，在 604 nm 定量。這是 Alinity c 生化試劑，不是 i-STAT Alinity 血氣卡匣。",
      "rows": [
        [
          "本次對應文件",
          "Lactic Acid2，04U26，807336R01 / B4U26R，June 2022。文件為原廠撰寫的俄文譯本鏡像。"
        ],
        [
          "對 glycolate 的提醒",
          "該版干擾表中有 glycolate 相關正偏差資料，不能稱 Alinity c 對 glycolate 安全或完全不受影響。"
        ],
        [
          "跨平台比較的限制",
          "同樣 LOx/POD 不代表各配方與批號的交叉反應程度相同；ARCHITECT 舊研究不能代替這份 IFU。"
        ],
        [
          "本例仍待核對",
          "院內實際是否使用 Lactic Acid2、對應料號、版本、lot 與本次比對檢體條件仍未確認。"
        ]
      ],
      "sources": [
        "R6",
        "R9"
      ]
    },
    {
      "id": "ldh",
      "name": "LDH / UV",
      "heading": "不同酵素路徑可補充查證，但仍須驗證",
      "status": "可選的第二方法，並非無條件的真值",
      "description": "LDH 方法讓 L-lactate 與 NAD⁺ 反應產生 NADH，以 340 nm 訊號定量。這與 lactate oxidase / H₂O₂ 的路徑不同。",
      "rows": [
        [
          "理論上的用途",
          "選擇對疑似干擾物有不同且已評估反應的方法，可能有助區分乳酸訊號與交叉反應。"
        ],
        [
          "不能做的保證",
          "不能宣稱所有 LDH 方法都不受 glycolate 或其他物質影響。Henry 的不同章節與方法資料仍提示須逐一核實干擾。"
        ],
        [
          "實務限制",
          "需有適當檢體、校正、品管、報告範圍及方法比較資料。原理不同本身不代表結果一定正確。"
        ]
      ],
      "sources": [
        "R1",
        "R2",
        "R8"
      ]
    },
    {
      "id": "gap",
      "name": "Lactate gap",
      "heading": "Lactate gap 比的是方法，並非動脈與靜脈",
      "status": "調查線索，不能單獨確診毒物暴露",
      "description": "在時間與檢體條件可比較的前提下，觀察已知對干擾物反應不同的測定方法是否出現不一致。數值差異必須連同分析偏差、精密度與基質一起判讀。",
      "rows": [
        [
          "為何會有差距",
          "部分 assay 的酵素/反應條件會對 glycolate 或 glyoxylate 產生額外訊號；不同平台與批號的反應程度可不同。"
        ],
        [
          "沒有差距時",
          "共同偏差或相近的交叉反應仍可能存在，所以沒有 gap 不能排除干擾。"
        ],
        [
          "稀釋結果的限制",
          "交叉反應物也可能隨檢體等比例稀釋；線性回收不能單獨證明訊號全部來自 L-lactate。"
        ],
        [
          "下一步",
          "核對反應曲線、有效範圍與檢體處理，並依臨床疑慮選用已評估的第二方法或直接毒物檢測。"
        ]
      ],
      "sources": [
        "R7",
        "R8",
        "R9",
        "R10"
      ]
    }
  ],
  "correlations": [
    {
      "kind": "fact",
      "title": "低血壓與乳酸上升均有紀錄",
      "text": "BP 62/37 mmHg、出血、升壓劑及逐步升高的中央實驗室乳酸是提供資料中的觀察。這與原始「無休克」提問情境不同。",
      "sources": [
        "CASE"
      ]
    },
    {
      "kind": "fact",
      "title": "高乳酸可與接近正常的 pH 同時存在",
      "text": "Day 26 11:50：乳酸 319.8 mg/dL，pH 7.405，cHCO₃⁻ 28.5 mmol/L，Na 173 mEq/L。數字描述的是不同面向，pH 不能代替乳酸測定。",
      "sources": [
        "CASE",
        "R3"
      ]
    },
    {
      "kind": "fact",
      "title": "AG 是衍生估算，不能辨認酸的身分",
      "text": "峰值時以 Na − Cl − 血氣 cHCO₃⁻ 計算：173 − 93 − 28.5 = 51.5 mEq/L，不含 K。Na/Cl 與血氣來自不同檢驗項目，這並非直接量到的陰離子身分。",
      "sources": [
        "CASE",
        "R3"
      ]
    },
    {
      "kind": "inference",
      "title": "低灌流加上清除下降，很可能共同貢獻",
      "text": "休克、重度肝病與 AKI 支持乳酸生成增加、利用/清除受損可同時發生。但目前不能分配每個機轉的比例，也不能證明全部 35.5 mmol/L 均是真 L-lactate。",
      "sources": [
        "R1",
        "R2",
        "CASE"
      ]
    },
    {
      "kind": "inference",
      "title": "肝損傷時序與 hypoxic injury 相容",
      "text": "低血壓之後 AST 由 74 升至 6290 U/L，支持低灌流相關肝損傷。缺少終末 LDH、完整暴露與毒物檢測，不能單靠 AST/ALT 比值排除其他原因。",
      "sources": [
        "CASE",
        "R3"
      ]
    },
    {
      "kind": "inference",
      "title": "Bicarbonate 處方支持外源鹼/鈉負荷的可能",
      "text": "提供紀錄列出 sodium bicarbonate，包括商品名稱 CVVH-B。這可作為 pH、cHCO₃⁻ 與 Na 變化的候選解釋，實際給藥量與出入量仍須核對。",
      "sources": [
        "CASE",
        "R3"
      ]
    },
    {
      "kind": "unknown",
      "title": "CRRT 是否實際開始，尚未確認",
      "text": "有 CRRT 建議、同意與備藥資料，缺少機器運行及護理執行紀錄。CVVH-B 是 bicarbonate 藥品名稱，不能據此宣稱已施行 CVVH 或解讀透析反應。",
      "sources": [
        "CASE"
      ]
    },
    {
      "kind": "unknown",
      "title": "終末 osmolal gap 無法重建",
      "text": "同時期 measured serum osmolality 與 ethanol 結果未見於提供紀錄。早期低鈉時的 osmolality 不能移到末期使用，原提問 OG 39 也不能當作這組病程的實測值。",
      "sources": [
        "CASE",
        "R3",
        "R11"
      ]
    },
    {
      "kind": "unknown",
      "title": "第二方法、原始訊號與直接毒物確認仍缺",
      "text": "Recheck 註記不足以確認稀釋倍數、特異性或回收率。實際 assay/lot、反應曲線、可報告範圍與適當直接毒物結果是主要缺口。",
      "sources": [
        "CASE",
        "R7",
        "R8"
      ]
    },
    {
      "kind": "unknown",
      "title": "腫瘤代謝、B₁ 缺乏等機轉未在本例證實",
      "text": "肝病、實體腫瘤、ethanol redox 改變與 thiamine 缺乏可構成教學鑑別。本例不能把它們全數視為已發生，更不能假設肝臟乳酸清除率等於零。",
      "sources": [
        "R1",
        "R2",
        "CASE"
      ]
    }
  ],
  "quiz": [
    {
      "title": "情境與病例",
      "stem": "原始照會稱「無休克、OG 39」，但提供病程記載反覆低血壓，且缺少終末 serum osmolality。報告應如何處理？",
      "options": [
        {
          "text": "把照會中的 OG 39 直接填入病例表格",
          "why": "OG 39 是未核實情境數字，不能覆蓋沒有實測結果的病例欄位。"
        },
        {
          "text": "分開呈現已核事實與原始問題，保留矛盾並條件式回答",
          "why": "正確。病例敘述依原始紀錄；原始疑問仍可作教學情境，但不能將其背景當作此病人的既定事實。"
        },
        {
          "text": "刪掉照會問題，只保留一個最順暢的故事",
          "why": "這會遺漏本次要回答的分析學問題。應揭露差異並解釋它如何改變推理。"
        },
        {
          "text": "乳酸數字接近，就代表所有來源必定屬於同一狀態",
          "why": "數值接近不能證明身分、時間或臨床背景一致。資料來源仍須核對。"
        }
      ],
      "answer": 1,
      "sources": [
        "CASE"
      ]
    },
    {
      "title": "pH 與乳酸",
      "stem": "末期 lactate 319.8 mg/dL、pH 7.405，且有 bicarbonate 處方。哪一項判讀最合理？",
      "options": [
        {
          "text": "正常 pH 可排除高乳酸",
          "why": "pH 是多種酸鹼作用的淨結果，不能代替乳酸濃度。混合異常或外源鹼可使 pH 接近正常。"
        },
        {
          "text": "319.8 mg/dL 等於 319.8 mmol/L",
          "why": "單位不能直接互換。以本頁換算，319.8 ÷ 9.008 約為 35.5 mmol/L。"
        },
        {
          "text": "高乳酸可與正常 pH 並存，仍須評估混合酸鹼狀態與分析品質",
          "why": "正確。此時存在顯著 hyperlactatemia；pH 沒有酸血症，不足以判斷乳酸訊號真假或排除其他酸鹼作用。"
        },
        {
          "text": "只要 pH 正常，就已證明 glycolate 干擾",
          "why": "正常 pH 不是任何特定干擾物的確認方法。"
        }
      ],
      "answer": 2,
      "sources": [
        "R1",
        "R3",
        "CASE"
      ]
    },
    {
      "title": "稀釋查核",
      "stem": "教學假設：同一個 lactate assay 在容許範圍內稀釋後回收一致。這能證明什麼？",
      "options": [
        {
          "text": "已證明全部訊號都來自 L-lactate",
          "why": "交叉反應物可能與乳酸一起等比例稀釋，保持線性並不代表訊號只有一種來源。"
        },
        {
          "text": "支持目前條件下的比例性，但不能單獨排除交叉反應",
          "why": "正確。稀釋查核是分析品質的一部分，須合併試劑特異性、反應曲線、第二方法或直接檢測。"
        },
        {
          "text": "已證明病人完全沒有 ethylene glycol 暴露",
          "why": "分析比例性不是暴露史或毒物檢測，不能排除中毒。"
        },
        {
          "text": "所有血氣與中央生化平台一定都會得到相同結果",
          "why": "不同 assay、批號與偵測條件可有不同的干擾反應。"
        }
      ],
      "answer": 1,
      "sources": [
        "R8",
        "R10"
      ]
    },
    {
      "title": "Lactate gap 的意義",
      "stem": "哪個做法最符合用 lactate gap 調查分析干擾的概念？",
      "options": [
        {
          "text": "把不同時點的動脈與靜脈乳酸差，直接稱為毒物干擾",
          "why": "時間與採檢部位造成的生理差異會混入結果；這不是本頁所說的方法間 lactate gap。"
        },
        {
          "text": "只比較同一平台重跑兩次是否相同",
          "why": "重複性不能代表方法特異性，同一 assay 的交叉反應可重複出現。"
        },
        {
          "text": "以可比較時點/檢體，在干擾反應已有資料的方法間比較，再綜合判讀",
          "why": "正確。方法間差異是線索，還需考慮偏差、精密度、基質與毒物確認，不能只用一個固定差值確診。"
        },
        {
          "text": "兩法完全一致就排除所有干擾",
          "why": "兩法可能共有偏差。沒有 gap 不能保證沒有交叉反應。"
        }
      ],
      "answer": 2,
      "sources": [
        "R7",
        "R8",
        "R9"
      ]
    },
    {
      "title": "Osmolal gap 的特異性",
      "stem": "教學假設：ethanol 納入計算後，OG 仍為 39 mOsm/kg。哪一項正確？",
      "options": [
        {
          "text": "OG 39 可單獨確診 methanol 或 ethylene glycol 中毒",
          "why": "OG 不具病因專一性。其他未測溶質與 AKA 也可能升高，仍須結合病史、時點與適當直接檢測。"
        },
        {
          "text": "OG 39 完全不可能出現在 alcoholic ketoacidosis",
          "why": "Hayman 2024 的選定 AKA 回溯病例系列中，部分病人的 OG 超過 40。這也不能反過來診斷本例 AKA。"
        },
        {
          "text": "應把毒性醇類、AKA 及其他未測溶質放入鑑別，依時點與檢測區分",
          "why": "正確。OG 39 是調查訊號而非單獨診斷。晚期毒性醇類代謝後 OG 也可能下降，因此正常 OG 同樣不能獨立排除。"
        },
        {
          "text": "以尿液 osmolality 取代 serum osmolality 就能確認",
          "why": "Serum OG 必須以血清實測與計算滲透壓比較。尿液數字不能直接代用。"
        }
      ],
      "answer": 2,
      "sources": [
        "R3",
        "R11"
      ]
    }
  ],
  "references": [
    {
      "id": "CASE",
      "title": "Provided case records",
      "citation": "去識別化原始病程與檢驗結果。公開版僅保留必要摘要、相對日序及數值，不提供原始病歷、影像或可識別附件。",
      "scope": "病例證據，並非外部研究。原始照會情境與病程存在差異。"
    },
    {
      "id": "R1",
      "title": "Tietz · lactate principles",
      "citation": "Rifai N, Chiu RWK, Young I, Burnham CD, Wittwer CT, editors. Tietz Textbook of Laboratory Medicine. 7th ed. Elsevier; 2023. Ch 35, pp 353.e14–353.e15.",
      "scope": "已查原章：乳酸生成/利用、LDH 與 LOx 測定。書中一般方法不代表本院配置。"
    },
    {
      "id": "R2",
      "title": "Henry · physiology and methods",
      "citation": "McPherson RA, Pincus MR, editors. Henry’s Clinical Diagnosis and Management by Laboratory Methods. 24th ed. Elsevier; 2022. Ch 17, pp 242–243; Ch 28, p 461.",
      "scope": "已查原章：lactic acidosis、Box 17.3、LD/NADH。不同方法的干擾仍需逐一驗證。"
    },
    {
      "id": "R3",
      "title": "Pocket Medicine · acid–base and liver tests",
      "citation": "Sabatine MS, editor. Pocket Medicine: The Massachusetts General Hospital Handbook of Internal Medicine. 9th ed. Wolters Kluwer; 2026 copyright. Acid–Base Disturbances; Abnormal Liver Tests.",
      "scope": "已查本題相關章：混合酸鹼、AG/OG、極高轉胺酶鑑別；一般原理不代表本例病因已獲確認。"
    },
    {
      "id": "R4",
      "title": "Beckman · AU OSR6193 IFU exemplar",
      "citation": "Beckman Coulter. LACTATE OSR6193. AU/DxC AU. Instructions for Use BLOSR6X93 13. November 2022. Portuguese (Continental).",
      "href": "https://www.biosystemsne.com.br/files/product/1715002634071-osr6193bula.pdf",
      "scope": "已讀原廠撰寫之 7 頁 IFU 鏡像。支持此版 LOx/POD/TOOS 原理及有限濃度干擾測試，院內實用版次未確認。"
    },
    {
      "id": "R5",
      "title": "Roche · LACT2 IFU",
      "citation": "Roche Diagnostics. Lactate Gen.2 (LACT2). 05171881500 V13.0, 2024-09. cobas c 701/702.",
      "href": "https://elabdoc-prod.roche.com/eLD/api/downloads/b539af2a-b374-ef11-2691-005056a772fd?countryIsoCode=be",
      "scope": "已讀方法書：LOx/POD、glycolate 及批號相關限制。不能外推所有 cobas 型號。"
    },
    {
      "id": "R6",
      "title": "Abbott · Alinity c Lactic Acid2 IFU exemplar",
      "citation": "Abbott. Lactic Acid2 for Alinity c. 04U26/04U2620, 807336R01, B4U26R. June 2022. Russian translation.",
      "scope": "已讀原廠撰寫 IFU 的俄文譯本鏡像。p 2 原理及 p 8 干擾表；本地料號/版本未確認，不以 i-STAT 代替。",
      "href": "https://docs.nevacert.ru/files/med_reestr_v2/79431_instruction.pdf"
    },
    {
      "id": "R7",
      "title": "Brindley · assay-dependent gap",
      "citation": "Brindley PG, Butler MS, Cembrowski G, Brindley DN. Falsely elevated point-of-care lactate measurement after ingestion of ethylene glycol. CMAJ. 2007;176(8):1097–1099. doi:10.1503/cmaj.061288.",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1839775/",
      "scope": "已讀全文。病例與平台加標研究，結果限於測過的方法，Beckman LX20 並非 AU。"
    },
    {
      "id": "R8",
      "title": "Tintu · multicentre interference study",
      "citation": "Tintu A, Rouwet E, Russcher H. Interference of ethylene glycol with (L)-lactate measurement is assay-dependent. Ann Clin Biochem. 2013;50(Pt 1):70–72. doi:10.1258/acb.2012.012052. PMID:23129723.",
      "href": "https://pubmed.ncbi.nlm.nih.gov/23129723/",
      "scope": "依摘要。31 家醫院、20 種分析儀；不能概括為所有 LOx 方法必有同等干擾。"
    },
    {
      "id": "R9",
      "title": "Graïne · platform comparison",
      "citation": "Graïne H, Toumi K, Roullier V, Capeau J, Lefèvre G. Interference of ethylene glycol on lactate assays. Ann Biol Clin (Paris). 2007;65(4):421–424. PMID:17627925.",
      "href": "https://pubmed.ncbi.nlm.nih.gov/17627925/",
      "scope": "依摘要。glycolate 與 glyoxylate 結果不同，舊平台不能代替新代 IFU。"
    },
    {
      "id": "R10",
      "title": "Rohr · glycolic acid and lactate assays",
      "citation": "Rohr D, Ali M. Technical Note: Glycolic Acid Exacerbates the Analytical Performance of Lactate Assay. Ann Clin Lab Sci. 2021;51(4):584–586. PMID:34452901.",
      "href": "https://www.annclinlabsci.org/content/51/4/584.full",
      "scope": "已讀全文。特定試劑/加標範圍，不能證明本例無干擾；不沿用文內有疑義的 ABL800 方法分類。"
    },
    {
      "id": "R11",
      "title": "Hayman · osmol gaps in AKA",
      "citation": "Hayman CV, Pires KD, Cohen ET, Biary R, Su MK, Hoffman RS. Elevated osmol gaps in patients with alcoholic ketoacidosis. Clin Toxicol (Phila). 2024;62(10):609–614. doi:10.1080/15563650.2024.2397053. PMID:39222325.",
      "href": "https://pubmed.ncbi.nlm.nih.gov/39222325/",
      "scope": "依摘要。55 例回溯病例系列，20% 的 OG >40，存在選擇/紀錄限制，不能據此診斷本例 AKA。"
    },
    {
      "id": "R12",
      "title": "Bush · DxC 700 AU methodology",
      "citation": "Bush VJ, Smola C, Schmitt P. Evaluation of the Beckman Coulter DxC 700 AU chemistry analyzer. Pract Lab Med. 2020;18:e00148 (published online 2019-11-20). doi:10.1016/j.plabm.2019.e00148.",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6909053/",
      "scope": "已讀全文方法表 Table 1：DxC 700 AU 的乳酸列為 H₂O₂/peroxidase 路徑；NAD/NADH 是表中 Siemens Vista 500 比較方法，非對舊 DxC 的判定。此文不是本例干擾驗證。"
    },
    {
      "id": "R13",
      "title": "Beckman · SYNCHRON is a different reagent/platform",
      "citation": "Beckman Coulter. SYNCHRON LACT A95550. Chemistry Information Sheet B01249AN. March 2020. UniCel DxC 600/800.",
      "href": "https://www.beckmancoulter.com/download/file/phxB01249AN-EN_US/B01249AN?type=pdf",
      "scope": "已讀原廠方法與適用平台：同為 LOx/POD，但不是 DxC 700 AU 的對應試劑文件；此處僅用來防止平台/試劑混淆。"
    }
  ]
};
