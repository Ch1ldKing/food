import { defineStore } from 'pinia';
import foodService from '@/api/foodService';

export const useFoodStore = defineStore('food', {


  state: () => ({
    foods: [] as Array<{ id: number, name: string, category: string, active: boolean, _isToggling: boolean }>,
    selectedFoods: [] as Array<{ id: number, name: string, category: string }> //用于存储选中的食材
  }),


  actions: {
    async fetchFoods() {
      try {
        const response = await foodService.getFoods();
        this.foods = response.data.map(food => ({
          ...food,
          active: false, // 添加 active 属性并初始化为 false
          _isToggling: false // 初始化 _isToggling 为 false
        }));
      } catch (error) {
        console.error('Failed to fetch foods:', error);
      }
    },

    toggleFoodActive(food) {
      const targetFood = this.foods.find(f => f.id === food.id);
      if (targetFood) {
        targetFood.active = !targetFood.active;
        //targetFood._isToggling = targetFood.active; // 同步 _isToggling 与 active
      }
    },
    addFoodToSelected(food) { // 新增
      if (!this.selectedFoods.find(f => f.id === food.id)) {
        this.selectedFoods.push({ id: food.id, name: food.name, category: food.category });
      }
    }
  },

  
  getters: {
    getFoodsByCategory: (state) => (category: string) => {
      return state.foods.filter(food => food.category === category);
    }
  }
});

