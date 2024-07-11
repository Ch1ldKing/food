<template>
  <span
    class="vegetable-tag rounded tag"
    p="x-2"
    border="~ green-200 dark:green-800"
    :class="[
      active ? 'bg-green-600 opacity-90' : 'bg-green-300 opacity-20',
      active ? 'text-green-100' : 'text-green-800 dark:text-green-200'
    ]"
    @click="$emit('click')"
  >  <!-- 引入了图片，暂时每种分类只有一个，之后可以区分 -->
    <img src="@/assets/food_img/Bok_Choy.png" alt="Vegetable Image" class="vegetable-img" />
    <slot />
  </span>
</template>
  
  
  <script lang="ts" setup>
  // 赋予属性，是否选中
  const props = defineProps<{
    active: boolean
  }>()
  </script>
  
  <!--   CSS start here -->
  <style scoped>
  .vegetable-tag {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 2px solid #32CD32; /* 使用绿色的边框 */
    border-radius: 0.25rem;
    cursor: pointer; /* 鼠标指针变为手型 */
  }
  
  .vegetable-tag.active {
    background-color: #32CD32; /* 激活时使用绿色 */
  }
  
  .vegetable-tag:hover {
    background-color: #32CD32; /* 鼠标悬停时使用绿色 */
  }
  
  .vegetable-img {
    width: 20px;
    height: 20px;
    margin-right: 10px; /* 图片与文本之间的间距 */
  }
  
  /* 颜色变量 */
  .bg-green-light {
    background-color: #90EE90;
  }
  
  .bg-green-dark {
    background-color: #006400;
  }
  
  .text-green-light {
    color: #90EE90;
  }
  
  .text-green-dark {
    color: #006400;
  }
  </style>
  