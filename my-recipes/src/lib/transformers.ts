import type { ApiMealFull } from '../types/api';
import type { Ingredient, Difficulty, Meal } from '../types/meal';

export function extractIngredients(meal: ApiMealFull): Ingredient[] {
  const ingredients: Ingredient[] = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim() ?? '';
    if (name) {
      ingredients.push({ name, measure });
    }
  }
  return ingredients;
}

export function deriveDifficulty(ingredientCount: number): Difficulty {
  if (ingredientCount <= 5) return 'Easy';
  if (ingredientCount <= 10) return 'Medium';
  return 'Hard';
}

export function estimateCookingTime(ingredientCount: number, category: string): number {
  const baseTimes: Record<string, number> = {
    Dessert: 45,
    Seafood: 25,
    Pasta: 30,
    Breakfast: 20,
    Starter: 20,
    Side: 20,
  };
  const base = baseTimes[category] ?? 35;
  const extra = Math.max(0, ingredientCount - 5) * 3;
  return base + extra;
}

export function deriveSpicyLevel(tags: string[], category: string): number {
  const tagStr = tags.join(' ').toLowerCase();
  if (tagStr.includes('spicy')) return 3;
  if (tagStr.includes('hot')) return 2;
  const spicyCategories: Record<string, number> = {
    Miscellaneous: 1,
    Beef: 1,
    Lamb: 1,
  };
  return spicyCategories[category] ?? 0;
}

export function truncateDescription(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '...';
}

export function transformApiMealToMeal(apiMeal: ApiMealFull): Meal {
  const ingredients = extractIngredients(apiMeal);
  const tags = apiMeal.strTags?.split(',').map((t) => t.trim()).filter(Boolean) ?? [];

  return {
    id: apiMeal.idMeal,
    title: apiMeal.strMeal,
    image: apiMeal.strMealThumb,
    category: apiMeal.strCategory,
    area: apiMeal.strArea,
    instructions: apiMeal.strInstructions,
    description: truncateDescription(apiMeal.strInstructions),
    tags,
    youtubeUrl: apiMeal.strYoutube || null,
    ingredients,
    difficulty: deriveDifficulty(ingredients.length),
    estimatedTime: estimateCookingTime(ingredients.length, apiMeal.strCategory),
    spicyLevel: deriveSpicyLevel(tags, apiMeal.strCategory),
  };
}
