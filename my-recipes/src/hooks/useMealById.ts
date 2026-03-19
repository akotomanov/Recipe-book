import { useQuery } from '@tanstack/react-query';
import { getMealById } from '../api/meals';
import { transformApiMealToMeal } from '../lib/transformers';
import type { Meal } from '../types/meal';

export function useMealById(id: string | null) {
  return useQuery<Meal | null>({
    queryKey: ['meals', 'detail', id],
    queryFn: async () => {
      const raw = await getMealById(id!);
      return raw ? transformApiMealToMeal(raw) : null;
    },
    enabled: !!id,
    staleTime: 30 * 60 * 1000,
  });
}
