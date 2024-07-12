<template>
  <span
    class="grain-tag rounded tag"
    p="x-2"
    border="~ wheat"
    :style="tagStyle"
    :class="[
      active ? 'bg-wheat-dark opacity-90 text-wheat-light' : 'bg-wheat-light opacity-20 text-wheat-dark'
    ]"
    @click="$emit('click')"
  >
    <!-- 动态选择图片 -->
    <img 
      :src="getImageSrc(name)" 
      alt="Grain Image" 
      class="grain-img floating-img" 
      :class="{ 'active': active , 'grain-img-active': active}" 
      :style="imgStyle"
    />
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import RiceImage from '@/assets/food_img/rice.png';
import WheatImage from '@/assets/food_img/Wheat.png';
import QuinoaImage from '@/assets/food_img/Quinoa.png';
import OatImage from '@/assets/food_img/Oat.png';
import NoodlesImage from '@/assets/food_img/Noodles.png';


// 引入更多的图片...

const props = defineProps<{
  active: boolean,
  name: string
}>()

/* 根据名称选择图片 */
const getImageSrc = (name: string) => {
  switch (name) {
    case 'Rice': return RiceImage;
    case 'Wheat': return WheatImage;
    case 'Quinoa': return QuinoaImage;
    case 'Oat': return OatImage;
    case 'Noodles': return NoodlesImage;
    // 添加更多的图片映射...
    default: return '';
  }
};

const tagStyle = computed(() => {
  return props.active ? {
    paddingLeft: '0rem',
    paddingRight: '0.6rem'
  } : {
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem'
  };
});

const imgStyle = computed(() => {
  return props.active ? {
    marginLeft: '-15px' // active 状态下减少左边的空隙
  } : {
    marginLeft: '5px' // 平常状态下保持正常
  };
});
</script>

<style scoped>
.grain-tag {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #F5DEB3; /* 使用小麦颜色的边框 */
  border-radius: 1rem; /* 增加边框圆角半径 */
  cursor: pointer; /* 鼠标指针变为手型 */
  transition: background-color 0.3s, color 0.3s, padding 0.3s; /* 添加过渡效果 */
  position: relative; /* 为了让图片可以相对定位 */
}
.grain-img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-left: 0px; /* 设置 margin-left 以减少空隙 */
  transition: width 0.3s, height 0.3s, transform 1s;
  position: relative;
  left: 0px; /* 向左移动图片 */
}
.grain-img.active {
  transform: translateY(500px)translateX(-50%); /* 图片跳出父容器 */
 
}
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





  