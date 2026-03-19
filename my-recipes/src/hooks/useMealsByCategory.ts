import { useQuery } from '@tanstack/react-query';
import { getMealsByCategory } from '../api/meals';
import type { MealSummary } from '../types/meal';

export function useMealsByCategory(category: string | null) {
  return useQuery<MealSummary[]>({
    queryKey: ['meals', 'category', category],
    queryFn: async () => {
      const raw = await getMealsByCategory(category!);
      return raw.map((m) => ({ id: m.idMeal, title: m.strMeal, image: m.strMealThumb }));
    },
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  });
}
