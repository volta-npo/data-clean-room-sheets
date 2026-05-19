export const config = {
  "number": 39,
  "slug": "data-clean-room-sheets",
  "title": "Data Clean Room Sheets",
  "category": "AI & Automation",
  "tagline": "Spreadsheet templates for cleaning small-business data before any automation or analysis.",
  "persona": "Finance, marketing, and AI students handling messy client data.",
  "gap": "Messy spreadsheets break automations and produce bad insights.",
  "niche": "Low-tech data readiness for local businesses.",
  "metric": "datasets passing readiness checks",
  "modules": [
    "Contact cleanup sheet",
    "Sales data schema",
    "Error flag columns",
    "Privacy handling notes"
  ],
  "theme": {
    "accent": "#7c3aed",
    "accent2": "#c4b5fd",
    "emoji": "\u26a1",
    "metricLabel": "Automation safety",
    "workflow": [
      "Define workflow boundary",
      "Identify data and failure risks",
      "Require human review",
      "Export safe implementation plan"
    ],
    "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "contact-cleanup-sheet",
      "label": "Contact cleanup sheet",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify contact cleanup sheet with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "sales-data-schema",
      "label": "Sales data schema",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify sales data schema with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "error-flag-columns",
      "label": "Error flag columns",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify error flag columns with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "privacy-handling-notes",
      "label": "Privacy handling notes",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify privacy handling notes with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Data Clean Room Sheets and capture baseline evidence.",
      "Complete the contact cleanup sheet workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "BrightPath Tutoring Studio",
    "chapter": "El Paso",
    "studentLead": "Volta Student Lead",
    "notes": "Responsible automation project to reduce admin time without exposing student data. Data Clean Room Sheets sample.",
    "evidencePrefix": "Data Clean Room Sheets",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
