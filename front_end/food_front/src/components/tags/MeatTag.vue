<template>
    <span
      class="meat-tag rounded tag"
      p="x-2"
      border="~ red-200 dark:red-800"
      :class="[
        active ? 'bg-red-600 opacity-90' : 'bg-red-300 opacity-20',
        active ? 'text-red-100' : 'text-red-800 dark:text-red-200'
      ]"
       @click="$emit('click')"
    >   <!-- 引入了图片，暂时每种分类只有一个，之后可以区分 -->
    <img src="@/assets/food_img/Raw_Porkchop.png" alt="Meat Image" class="meat-img" />
      <slot />
    </span>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{
    active: boolean
  }>()
  </script>
  

  <!--   CSS start here -->
  <style scoped>
  .meat-tag {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 2px solid #FF6347; /* 使用红色的边框 */
    border-radius: 0.25rem;
    cursor: pointer; /* 鼠标指针变为手型 */
  }
  
  .meat-tag.active {
    background-color: #FF6347; /* 激活时使用红色 */
  }
  
  .meat-tag:hover {
    background-color: #FF6347; /* 鼠标悬停时使用红色 */
  }
  
  .meat-img {
    width: 20px;
    height: 20px;
    margin-right: 10px; /* 图片与文本之间的间距 */
  }
  
  /* 颜色变量 */
  .bg-red-light {
    background-color: #FFCCCC;
  }
  
  .bg-red-dark {
    background-color: #CC0000;
  }
  
  .text-red-light {
    color: #FFCCCC;
  }
  
  .text-red-dark {
    color: #800000;
  }
  </style>
  