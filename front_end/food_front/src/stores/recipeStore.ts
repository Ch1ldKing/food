import { defineStore } from 'pinia';
import recipeService from '@/api/recipeService';


export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Array<{ id: number, recipe: string, ingredients: string, comment: number, url: string,}>,
    chatRecipes: [] as Array<{ dishName:string, process:string }> 
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
    setChatRecipes(recipes) {
      this.chatRecipes = recipes;
    },
    async fetchChatRecipe(ingredients) {
      try {
        const data = await recipeService.getChatRecipe(ingredients);
        this.setChatRecipes([data]);
      } catch (error) {
        console.error('Failed to fetch chat recipe:', error);
      }
    },
  },
});
