<template>
  <!--
    <div class="pot">
      <img src="@/assets/food_img/bowl.png" alt="Pot" class="pot-image" />
      <transition name="shake">
        <div v-if="selectedFood" class="food-in-pot">-->
  <!-- 换逻辑，同foodlist -->
  <!--
  <img :src="food.image" :alt="food.name" class="food-image" />
  {{ selectedFood.name }}
  </div>
  </transition>
  </div>-->
  <template>
    <div class="pot">
      <img src="@/assets/food_img/bowl.png" alt="Pot" class="pot-image" />
      <!-- <div v-for="food in potFoods" :key="food.id" class="food-in-pot">
        {{ food.name }}
      </div> -->
    </div>
  </template>
</template>
  
  <!-- <script>
  export default {
    props: {
      selectedFood: Object
    }
  };

  //另一种方法引入图片
  import carrotImage from '@/assets/food_img/carrot.png';
  import potatoImage from '@/assets/food_img/potato.png';
  import tomatoImage from '@/assets/food_img/tomato.webp';
  </script> -->

  <script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useFoodStore } from '@/stores/foodStore';

  const foodStore = useFoodStore();
  const potFoods = ref([]);

  // Watch for changes in active foods
  watch(() => foodStore.foods, (newFoods) => {
    potFoods.value = newFoods.filter(food => food.active);
  });
  </script>

  <style scoped>
  .pot {
    position: relative;
  }

  .pot-image {
    width: 100px;
    height: 100px;
  }

  .food-in-pot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .food-image {
    width: 50px;
    /* 根据需要调整大小 */
    height: auto;
  }

  .shake-enter-active,
  .shake-leave-active {
    animation: shake 0.5s;
  }

  @keyframes dropIn {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    25% {
      transform: translate(-50%, -50%) rotate(-5deg);
    }

    50% {
      transform: translate(-50%, -50%) rotate(5deg);
    }

    75% {
      transform: translate(-50%, -50%) rotate(-5deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
</style>
  