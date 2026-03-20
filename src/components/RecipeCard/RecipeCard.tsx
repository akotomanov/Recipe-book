import { memo } from 'react';
import { LazyImage } from '../ui/LazyImage';
import { InfoChip } from '../ui/InfoChip';
import { SpicyScale } from '../ui/SpicyScale';
import { HeartIcon, ClockIcon, ChefHatIcon } from '../icons';
import { useFavoritesStore } from '../../stores/favorites';
import type { Meal, MealSummary } from '../../types/meal';

interface RecipeCardFullProps {
  meal: Meal;
}

interface RecipeCardSummaryProps {
  meal: MealSummary;
}

function FavoriteButton({ meal }: { meal: MealSummary }) {
  const isFavorite = useFavoritesStore((s) => s.isFavorite(meal.id));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(meal);
      }}
      className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-[0px_6px_16px_rgba(0,0,0,0.15)] transition-transform active:scale-110"
      aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
    >
      <HeartIcon filled={isFavorite} className="size-6 text-primary-deep-berry" />
    </button>
  );
}

export const RecipeCardFull = memo(function RecipeCardFull({ meal }: RecipeCardFullProps) {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative pb-1">
        <LazyImage src={meal.image} alt={meal.title} className="h-[203px] w-full rounded-[16px]" />
        <FavoriteButton meal={{ id: meal.id, title: meal.title, image: meal.image }} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 pr-1">
          <InfoChip icon={<ClockIcon className="size-5 text-secondary-dark-slate" />} label={`${meal.estimatedTime}m`} variant="blue" />
          <InfoChip icon={<ChefHatIcon className="size-5 text-secondary-dark-slate" />} label={meal.difficulty} variant="purple" />
          <div className="flex-1 flex justify-end">
            <SpicyScale level={meal.spicyLevel} />
          </div>
        </div>

        <h3 className="font-extrabold text-2xl leading-8 tracking-[-0.6px] text-secondary-dark-slate">
          {meal.title}
        </h3>
        <p className="text-sm font-semibold leading-5 text-neutral-2">
          {meal.description}
        </p>
      </div>
    </article>
  );
});

export const RecipeCardSummary = memo(function RecipeCardSummary({ meal }: RecipeCardSummaryProps) {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative pb-1">
        <LazyImage src={meal.image} alt={meal.title} className="h-[203px] w-full rounded-[16px]" />
        <FavoriteButton meal={meal} />
      </div>
      <h3 className="font-extrabold text-2xl leading-8 tracking-[-0.6px] text-secondary-dark-slate">
        {meal.title}
      </h3>
    </article>
  );
});
