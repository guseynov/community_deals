export enum DealFilter {
  AllCategories = "all-categories",
}

export enum DealFilterParam {
  Query = "q",
  Category = "category",
}

export const MAX_DEAL_QUERY_LENGTH = 120;

export function normalizeDealQuery(value: string | null | undefined): string {
  return (value ?? "").slice(0, MAX_DEAL_QUERY_LENGTH);
}

export function resolveDealCategory(
  value: string | null | undefined,
  categories: string[],
): string {
  return value && categories.includes(value)
    ? value
    : DealFilter.AllCategories;
}
