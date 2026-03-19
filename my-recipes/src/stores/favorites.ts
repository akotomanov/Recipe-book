import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MealSummary } from '../types/meal';

interface FavoritesState {
  favorites: MealSummary[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (meal: MealSummary) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: (id: string) => get().favorites.some((f) => f.id === id),
      toggleFavorite: (meal: MealSummary) => {
        const exists = get().favorites.some((f) => f.id === meal.id);
        set({
          favorites: exists
            ? get().favorites.filter((f) => f.id !== meal.id)
            : [...get().favorites, meal],
        });
      },
    }),
    { name: 'my-recipes-favorites' },
  ),
);
