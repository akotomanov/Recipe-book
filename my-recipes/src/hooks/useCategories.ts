import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/meals';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: Infinity,
  });
}
