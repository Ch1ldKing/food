<script setup>
import Pot from '@/components/Pot.vue';

// export default {
//   components: {
//     FoodList,
//     Pot,
//   },
//   data() {
//     return {
//       selectedFood: null,
//     };
//   },
//   methods: {
//     handleFoodSelected(food) {
//       this.selectedFood = food;
//     },
//   },
// };
import { ref } from 'vue'
import FoodList from '@/components/FoodList.vue'

const category = ref('vegetable')

const handleFoodSelected = (food) => {
  console.log('Selected food:', food)
}
</script>

<template>
  <div class="food-lists-container">
    <h2>Vegetables</h2>
    <FoodList :category="'vegetable'" />
  </div>
  <div class="food-lists-container">
    <h2>Meats</h2>
    <FoodList :category="'meat'" />
  </div>
  <div class="food-lists-container">
    <h2>Grains</h2>
    <FoodList :category="'grain'" />
  </div>
  <Pot :selectedFood="selectedFood" />
</template>


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

.food-lists-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>