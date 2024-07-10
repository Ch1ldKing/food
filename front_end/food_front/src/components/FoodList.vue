<template>
    <div class="food-list">
      <div
        v-for="food in foods"
        :key="food.id"
        class="food-item"
        @click="selectFood(food)"
      >
        {{ food.name }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        foods: [
          { id: 1, name: 'Carrot' },
          { id: 2, name: 'Potato' },
          { id: 3, name: 'Tomato' },
          // 更多食材
        ]
      };
    },
    methods: {
      selectFood(food) {
        this.$emit('food-selected', food);
      }
    }
  };
  </script>
  
  <style scoped>
  .food-list {
    display: flex;
    flex-direction: column;
  }
  .food-item {
    cursor: pointer;
    margin: 10px 0;
  }
  </style>
  