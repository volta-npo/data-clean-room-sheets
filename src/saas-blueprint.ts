export const PRODUCT_ROLES = [
  'Data steward',
  'Schema reviewer',
  'Privacy reviewer',
  'Automation analyst',
];

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

export const PRODUCT_WORKFLOWS = [
  'Schema import preview',
  'Data quality profiler',
  'PII minimization workflow',
  'Error report export',
];

export const PRODUCT_GUARDS = [
  'Block automation with unresolved PII',
  'Flag required-column gaps',
  'Require provenance notes for every dataset',
];

export function createProductSaasBlueprint(config, domain) {
  return {
    product: config.title,
    northStar: config.metric,
    roles: PRODUCT_ROLES,
    integrations: PRODUCT_INTEGRATIONS,
    analytics: PRODUCT_ANALYTICS,
    workflows: PRODUCT_WORKFLOWS,
    guards: PRODUCT_GUARDS,
    modules: config.modules,
    artifacts: domain.artifacts
  };
}
