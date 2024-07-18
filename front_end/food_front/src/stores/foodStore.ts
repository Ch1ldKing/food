import { defineStore } from 'pinia';
import foodService from '@/api/foodService';

export const useFoodStore = defineStore('food', {


  state: () => ({
    foods: [] as Array<{ id: number, name: string, category: string, active: boolean, _isToggling: boolean }>,
    selectedFoods: [] as Array<{ id: number, name: string, category: string }>, //用于存储选中的食材,
    linkedIngredients: [] as Array<string> 
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

        // 恢复选中状态
        this.selectedFoods.forEach(selectedFood => {
          const food = this.foods.find(f => f.id === selectedFood.id);
          if (food) {
            food.active = true;
          }
        });
      } catch (error) {
        console.error('Failed to fetch foods:', error);
      }
    },

    toggleFoodActive(food) {
      const targetFood = this.foods.find(f => f.id === food.id);
      if (targetFood) {
        targetFood.active = !targetFood.active;
        if (targetFood.active) {
          this.addFoodToSelected(targetFood);
        } else {
          this.removeFoodFromSelected(targetFood);
        }
        console.log('选中的食材数组：', this.selectedFoods);
        //targetFood._isToggling = targetFood.active; // 同步 _isToggling 与 active
      }
    },
    addFoodToSelected(food) {
      if (!this.selectedFoods.find(f => f.id === food.id)) {
        this.selectedFoods.push({ id: food.id, name: food.name, category: food.category });
        
      }
    },

    removeFoodFromSelected(food) {
      this.selectedFoods = this.selectedFoods.filter(f=>f.id !== food.id);
      
    },
    
    //关联食材
    async fetchLinkedIngredients(ingredient1: string, ingredient2: string) {
      try {
        const response = await foodService.getLinkedIngredients({ ingredient1, ingredient2 });
        this.linkedIngredients = response.data;
        console.log('linkedIngredients:', this.linkedIngredients);
      } catch (error) {
        console.error('Failed to fetch linked ingredients:', error);
      }
    }


    
  },

  
  getters: {
    getFoodsByCategory: (state) => (category: string) => {
      return state.foods.filter(food => food.category === category);
    }
  }
});

