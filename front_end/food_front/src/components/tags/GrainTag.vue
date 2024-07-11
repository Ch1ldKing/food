<template>
  <span
    class="grain-tag rounded tag"
    p="x-2"
    border="~ wheat"
    :class="[
      active ? 'bg-wheat-dark opacity-90 text-wheat-light' : 'bg-wheat-light opacity-20 text-wheat-dark'
    ]"
    @click="$emit('click')"
  >  <!-- 引入了图片，暂时每种分类只有一个，之后可以区分 -->
    <img src="@/assets/food_img/Bread.png" alt="Grain Image" class="grain-img" />
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
.grain-tag {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #F5DEB3; /* 使用小麦颜色的边框 */
  border-radius: 0.25rem;
  cursor: pointer; /* 鼠标指针变为手型 */
  transition: background-color 0.3s, color 0.3s; /* 添加过渡效果 */
}
  
.grain-tag.active {
  background-color: #DEB887; /* 选中时使用深小麦颜色 */
  color: #FAF3E0; /* 选中时的文本颜色 */
}

.grain-tag:hover {
  background-color: #F5DEB3; /* 鼠标悬停时使用浅小麦颜色 */
}
  
.grain-img {
  width: 16px; /* 缩小图片 */
  height: 16px; /* 缩小图片 */
  margin-right: 8px; /* 缩小图片与文本之间的间距 */
}
  
  /* 颜色变量 */
  .bg-wheat-light {
    background-color: #FAF3E0;
  }
  
  .bg-wheat-dark {
    background-color: #DEB887;
  }
  
  .text-wheat-light {
    color: #FAF3E0;
  }
  
  .text-wheat-dark {
    color: #8B4513;
  }
  </style>
  