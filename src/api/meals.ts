import { fetchApi } from './client';
import type {
  ApiMealsResponse,
  ApiFilterResponse,
  ApiCategoriesResponse,
  ApiMealFull,
  ApiMealSummary,
  ApiCategory,
} from '../types/api';

export async function searchMealsByName(query: string): Promise<ApiMealFull[]> {
  const data = await fetchApi<ApiMealsResponse>(`search.php?s=${encodeURIComponent(query)}`);
  return data.meals ?? [];
}

export async function getMealById(id: string): Promise<ApiMealFull | null> {
  const data = await fetchApi<ApiMealsResponse>(`lookup.php?i=${id}`);
  return data.meals?.[0] ?? null;
}

export async function getMealsByCategory(category: string): Promise<ApiMealSummary[]> {
  const data = await fetchApi<ApiFilterResponse>(`filter.php?c=${encodeURIComponent(category)}`);
  return data.meals ?? [];
}

export async function getCategories(): Promise<ApiCategory[]> {
  const data = await fetchApi<ApiCategoriesResponse>('categories.php');
  return data.categories;
}
