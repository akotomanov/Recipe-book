import { useFavoritesStore } from '../stores/favorites';
import { useMealById } from '../hooks/useMealById';
import { RecipeCardFull } from '../components/RecipeCard/RecipeCard';
import { RecipeCardSkeleton } from '../components/RecipeCard/RecipeCardSkeleton';
import { EmptyState } from '../components/ui/EmptyState';
import type { Meal } from '../types/meal';

function EnrichedCard({ id }: { id: string }) {
  const { data: meal, isLoading } = useMealById(id);

  if (isLoading) return <RecipeCardSkeleton />;
  if (!meal) return null;

  return <RecipeCardFull meal={meal as Meal} />;
}

export function FavoritesPage() {
  const favorites = useFavoritesStore((s) => s.favorites);

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favourites yet"
        description="Tap the heart on any recipe to save it here."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-12 px-6 lg:px-20 py-3 lg:py-6">
      {favorites.map((fav) => (
        <EnrichedCard key={fav.id} id={fav.id} />
      ))}
    </div>
  );
}
