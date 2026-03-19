export interface Ingredient {
  name: string;
  measure: string;
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Meal {
  id: string;
  title: string;
  image: string;
  category: string;
  area: string;
  instructions: string;
  description: string;
  tags: string[];
  youtubeUrl: string | null;
  ingredients: Ingredient[];
  difficulty: Difficulty;
  estimatedTime: number;
  spicyLevel: number;
}

export interface MealSummary {
  id: string;
  title: string;
  image: string;
}
