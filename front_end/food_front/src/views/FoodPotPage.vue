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
import potImage from '@/assets/food_img/bowl.png'

const category = ref('vegetable')

const handleFoodSelected = (food) => {
  console.log('Selected food:', food)
}
</script>

<template>
  <div class="food-pot-page">
    <div class="container">
      <h2>Choose your ingredients</h2>
      <FoodList category="vegetable" @food-selected="handleFoodSelected" />
      <FoodList category="meat" @food-selected="handleFoodSelected" />
      <FoodList category="grain" @food-selected="handleFoodSelected" />
    </div>
    <div class="pot-container"> 
      <Pot />
    </div>
    <div class="pot-image-container">
      <img :src="potImage" alt="Pot Image" class="pot-image" />
    </div>
  </div>
</template>


<style>
.food-pot-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.pot-container {
  margin-top: 20px;
}

@media (max-width: 600px) {
  .food-pot-page {
    flex-direction: column;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>