export const FETCH_CATEGORIES_EXISTING = "FETCH_CATEGORIES_EXISTING";

export function fetchCategoriesExisting({ categories }) {
  return {
    type: FETCH_CATEGORIES_EXISTING,
    categories
  }
}


