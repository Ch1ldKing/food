<template>
    <div class="basket-container">
      <img :src="basketImage" alt="Basket" class="basket-image" />
    </div>
  </template>
  
  <script setup>
  import basketImage from '@/assets/food_img/basket.png'
  </script>
  
  <style scoped>
  .basket-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    /* 可以根据需要调整宽度和高度 */
  }
  
  .basket-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  