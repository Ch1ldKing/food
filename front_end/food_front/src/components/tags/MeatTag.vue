<template>
    <span
      class="meat-tag rounded tag"
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
      class="meat-img floating-img" 
      :class="{ 'active': active , 'grain-img-active': active}" 
      :style="imgStyle"
    />
    <slot />
  </span>
</template>


  
  <script lang="ts" setup>
    import { ref } from 'vue';
    import { computed } from 'vue';
    import ChickenImage from '@/assets/food_img/Chicken.png';
    import BeefImage from '@/assets/food_img/beef.png';
    import PorkImage from '@/assets/food_img/Raw_Porkchop.png';
    import LambImage from '@/assets/food_img/Goat.png';
    import TurkeyImage from '@/assets/food_img/Golden_Chicken.png';
    import BaconImage from '@/assets/food_img/bacon.webp';
    import SausageImage from '@/assets/food_img/Bread.png';
    import SalmonImage from '@/assets/food_img/Salmon.png';
    import ShrimpImage from '@/assets/food_img/Shrimp.png';
    import CrabImage from '@/assets/food_img/Crab.png';
    import ScallopsImage from '@/assets/food_img/Clam.png';
    import CodImage from '@/assets/food_img/Tuna.png';
    import EggImage from '@/assets/food_img/egg.png';
    import MilkImage from '@/assets/food_img/Milk.png';
    
  const props = defineProps<{
    active: boolean,
    name: string
  }>()

  /* 根据名称选择图片 */
const getImageSrc = (name: string) => {
  switch (name) {
    case 'Chicken': return ChickenImage;
    case 'Beef': return BeefImage;
    case 'Pork': return PorkImage;
    case 'Lamb': return LambImage;
    case 'Turkey': return TurkeyImage;
    case 'Bacon': return BaconImage;
    case 'Sausage': return SausageImage;
    case 'Salmon': return SalmonImage;
    case 'Shrimp': return ShrimpImage;
    case 'Crab': return CrabImage;
    case 'Scallops': return ScallopsImage;
    case 'Cod': return CodImage;
    case 'Egg': return EggImage;
    case 'Milk': return MilkImage;
    // 添加更多的图片映射...
    default: return '';
  }
};

  /* 计算tag左右的空隙 */
  const tagStyle = computed(() => {
  return props.active ? {
    paddingLeft: '0rem',
    paddingRight: '0.6rem'
  } : {
    paddingLeft: '0.6rem',
    paddingRight: '0.6rem'
  };
});

/* 定义计算属性 tagStyle 和 imgStyle */
const imgStyle = computed(() => {
  return props.active ? {
    marginLeft: '-15px' // active 状态下减少左边的空隙
  } : {
    marginLeft: '5px' // 平常状态下保持正常
  };
});

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
  transition: background-color 0.3s, color 0.3s, padding 0.3s; /* 添加过渡效果 */
  position: relative; /* 为了让图片可以相对定位 */
}

.meat-img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-left: 0px; /* 设置 margin-left 以减少空隙 */
  transition: width 0.3s, height 0.3s, transform 1s;
  position: relative;
  left: 0px; /* 向左移动图片 */
  }
  
.meat-img.active {
  transform: translateY(900px) translateX(-50%); /* 移动到屏幕底部，水平居中 */
}
  
/*   .meat-tag:hover {
    background-color: #FF6347;} /* 鼠标悬停时使用红色  */
  
  
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
  