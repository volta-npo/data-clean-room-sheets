export const PRODUCT_ROLES = ['Data steward', 'Schema reviewer', 'Privacy reviewer', 'Automation analyst'];

export const PRODUCT_PERSONAS = ['Data steward', 'Schema reviewer', 'Privacy reviewer', 'Automation analyst', 'Owner trainer', 'Implementation pod lead'];

export const PRODUCT_INTEGRATIONS = [
  'CSV schema import',
  'Missingness report',
  'Duplicate detection export',
  'PII minimization checklist',
];

export const PRODUCT_ANALYTICS = [
  'Missingness by column',
  'Duplicate candidate count',
  'Allowed-value error rate',
  'PII risk score',
];

export const PRODUCT_KPIS = ['Rows cleaned', 'Schema coverage', 'PII minimization score', 'Duplicate resolution rate', 'Allowed-value compliance', 'Error report closure'];

export const PRODUCT_WORKFLOWS = [
  'Schema import preview',
  'Data quality profiler',
  'PII minimization workflow',
  'Error report export',
];

export const PRODUCT_ONBOARDING = ['Import spreadsheet schema', 'Profile missingness and duplicates', 'Map allowed values and formats', 'Review PII minimization plan', 'Generate error report', 'Train owner on clean-room export'];

export const PRODUCT_GUARDS = [
  'Block automation with unresolved PII',
  'Flag required-column gaps',
  'Require provenance notes for every dataset',
];

export const PRODUCT_EXPANSION = ['Monthly data-quality monitoring', 'Department schema library', 'Privacy review retainer', 'Automation-ready export pipeline'];

export const PRODUCT_DATA_MODEL = ['Dataset', 'Column schema', 'Allowed value', 'PII flag', 'Duplicate group', 'Cleaning error'];

export const PRODUCT_SUCCESS_SIGNALS = ['PII minimization is reviewed', 'Allowed values are documented', 'Error reports are actionable', 'Export excludes unsafe columns'];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    personas: PRODUCT_PERSONAS,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    kpis: PRODUCT_KPIS,
    workflows: PRODUCT_WORKFLOWS,
    onboarding: PRODUCT_ONBOARDING,
    guards: PRODUCT_GUARDS,
    expansion: PRODUCT_EXPANSION,
    dataModel: PRODUCT_DATA_MODEL,
    successSignals: PRODUCT_SUCCESS_SIGNALS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
