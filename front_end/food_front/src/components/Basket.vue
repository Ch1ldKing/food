<template>
    <div class="basket-container" @click="goToLastPage">
      <p class="basket-text">Basket</p>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToLastPage = () => {
    router.push({ name: 'linked' }); // 使用路由名称进行跳转
  };
  </script>
  
  <style scoped>
  .basket-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 20px;
    cursor: pointer; /* 添加手型光标 */
  }
  
  .basket-text {
    font-size: 14px; /* 调整字体大小 */
    color: #4CAF50; /* 设置字体颜色 */
  }
  </style>
  
  