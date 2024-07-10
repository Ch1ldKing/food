<template>
    <div class="food-list">
      <div
        v-for="food in foods"
        :key="food.id"
        class="food-item"
        @click="selectFood(food)"
      >
<!-- 换逻辑 -->
      <img :src="food.image" :alt="food.name" class="food-image" />
        {{ food.name }}
      </div>
    </div>
  </template>
  <script>

//另一种方法引入
  import carrotImage from '@/assets/carrot.png';
  import potatoImage from '@/assets/potato.png';
  import tomatoImage from '@/assets/tomato.webp';

  export default {
    data() {
      return {
        foods: [
          { id: 1, name: 'Carrot', image: carrotImage },
          { id: 2, name: 'Potato', image: potatoImage },
          { id: 3, name: 'Tomato', image: tomatoImage },
          // 更多食材向下
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

<!-- CSS向下 ////////////////////////////////////////////////-->
  <style scoped>
  .food-list {
    display: flex;
    flex-direction: column;
  }
  .food-item {
    cursor: pointer;
    margin: 10px 0;
  }

  .food-item img {
  width: 30px; /* 根据需要调整大小 */
  height: auto;
  display: block;
  margin: 0 auto;
}

  
  </style>
  