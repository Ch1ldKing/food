<template>
    <span
      class="meat-tag rounded tag"
      p="x-2"
      border="~ wheat"
      :class="[
        active ? 'bg-wheat-dark opacity-90 text-wheat-light' : 'bg-wheat-light opacity-20 text-wheat-dark'
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
  padding: 0.3rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #FF6347;; /* 使用小麦颜色的边框 */
  border-radius: 1rem; /* 增加边框圆角半径 */
  cursor: pointer; /* 鼠标指针变为手型 */
  transition: background-color 0.3s, color 0.3s; /* 添加过渡效果 */
}
  
  .meat-tag.active {
    background-color: #FF6347; /* 激活时使用红色 */
    color: #FAF3E0; /* 选中时的文本颜色 */
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
  .bg-wheat-light {
    background-color: #FFCCCC;
  }
  
  .bg-wheat-dark {
    background-color: #CC0000;
  }
  
  .text-wheat-light {
    color: #FFCCCC;
  }
  
  .text-wheat-dark {
    color: #800000;
  }
  </style>
  