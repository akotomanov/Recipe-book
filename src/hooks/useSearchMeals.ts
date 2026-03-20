import { useQuery } from '@tanstack/react-query';
import { searchMealsByName } from '../api/meals';
import { transformApiMealToMeal } from '../lib/transformers';
import type { Meal } from '../types/meal';

export function useSearchMeals(query: string, enabled = true) {
  return useQuery<Meal[]>({
    queryKey: ['meals', 'search', query],
    queryFn: async () => {
      const raw = await searchMealsByName(query);
      return raw.map(transformApiMealToMeal);
    },
    enabled,
    staleTime: 5 * 60 * 1000,
  });
}
