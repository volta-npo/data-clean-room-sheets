export const domain = {
    "kind": "data-cleaner",
    "title": "Data Clean Room Sheets",
    "purpose": "A purpose-built data cleaner interface for spreadsheet templates for cleaning small-business data before any automation or analysis.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Dataset schema",
    "metricLabels": [
        "Data Readiness",
        "Missingness",
        "Format Validity"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "BrightPath Tutoring Studio",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "datasets passing readiness checks",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Source/provenance captured",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Cleaned CSV",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Source/provenance captured",
        "Required columns mapped",
        "Allowed values defined",
        "Date formats checked",
        "Currency formats checked",
        "Duplicates flagged",
        "PII minimization reviewed",
        "Clean CSV exported"
    ],
    "artifacts": [
        "Cleaned CSV",
        "Error report",
        "Schema JSON"
    ],
    "checks": [
        "Required columns present",
        "Allowed values enforced",
        "Provenance required"
    ],
    "sampleClient": "BrightPath Tutoring Studio"
};
//# sourceMappingURL=domain.js.map