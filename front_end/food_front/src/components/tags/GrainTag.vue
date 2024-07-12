<template>
  <span
    class="grain-tag rounded tag"
    p="x-2"
    border="~ wheat"
    :class="[
      active ? 'bg-wheat-dark opacity-90 text-wheat-light' : 'bg-wheat-light opacity-20 text-wheat-dark'
    ]"
    @click="$emit('click')"
  >
    <!-- 引入了图片，暂时每种分类只有一个，之后可以区分 -->
    <img 
      src="@/assets/food_img/Bread.png" 
      alt="Grain Image" 
      class="grain-img floating-img" 
      :class="{ 'active': active , 'grain-img-active': active}" 
    />
    <slot />

  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  active: boolean
}>()

</script>

<!-- CSS start here -->
<style scoped>
.grain-tag {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #F5DEB3; /* 使用小麦颜色的边框 */
  border-radius: 1rem; /* 增加边框圆角半径 */
  cursor: pointer; /* 鼠标指针变为手型 */
  transition: background-color 0.3s, color 0.3s; /* 添加过渡效果 */
  position: relative; /* 为了让图片可以相对定位 */
}
  
.grain-img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  transition: width 0.3s, height 0.3s, transform 1s;
  position: relative;
  left: 0px; /* 向左移动图片 */
}

.grain-img.active {
  transform: translateY(500px)translateX(-50%); /* 图片跳出父容器 */
 
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




  