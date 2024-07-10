<template>
    <div class="food-pot-page">
      <div class="container">
        <FoodList @food-selected="handleFoodSelected" />
        <Pot :selectedFood="selectedFood" />
      </div>
    </div>
  </template>
  
  <script>
  import FoodList from '@/components/FoodList.vue';
  import Pot from '@/components/Pot.vue';

  
  export default {
    components: {
      FoodList,
      Pot,
    },
    data() {
      return {
        selectedFood: null,
      };
    },
    methods: {
      handleFoodSelected(food) {
        this.selectedFood = food;
      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  