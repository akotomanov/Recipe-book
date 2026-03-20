import { useEffect, useCallback, useState, useMemo } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { ITEMS_PER_PAGE } from '../lib/constants';
import type { Meal, MealSummary } from '../types/meal';
import { RecipeCardFull, RecipeCardSummary } from './RecipeCard/RecipeCard';
import { RecipeCardSkeleton } from './RecipeCard/RecipeCardSkeleton';

interface RecipeGridProps {
  meals?: Meal[];
  summaries?: MealSummary[];
  isLoading: boolean;
}

const observerOptions: IntersectionObserverInit = { rootMargin: '200px' };

export function RecipeGrid({ meals, summaries, isLoading }: RecipeGridProps) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const { ref: sentinelRef, isIntersecting } = useIntersection(observerOptions);

  const items = meals ?? summaries ?? [];
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
    }
  }, [isIntersecting, hasMore, loadMore]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [meals, summaries]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-12 px-6 lg:px-20 py-3 lg:py-6">
        {Array.from({ length: 6 }, (_, i) => (
          <RecipeCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 px-6">
        <p className="text-sm font-semibold text-neutral-2">No recipes found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-12 px-6 lg:px-20 py-3 lg:py-6">
      {visibleItems.map((item) =>
        meals ? (
          <RecipeCardFull key={item.id} meal={item as Meal} />
        ) : (
          <RecipeCardSummary key={item.id} meal={item as MealSummary} />
        ),
      )}
      {hasMore && <div ref={sentinelRef} className="h-1 col-span-full" />}
    </div>
  );
}
