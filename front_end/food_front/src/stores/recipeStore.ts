import { defineStore } from 'pinia';
import recipeService from '@/api/recipeService';


export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Array<{ id: number, recipe: string, ingredients: string, comment: number, url: string,}>,
  }),
  actions: {
    async fetchRecipes(ingredients) {
      try {
        const response = await recipeService.getRecipesByIngredients(ingredients);
        this.recipes = response.data.map(recipe => ({
          ...recipe,
        }));
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    },
  },
});
