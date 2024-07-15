<template>
  <span
    class="vegetable-tag rounded tag"
    p="x-2"
    border="~ green-200 dark:green-800"
    :style="tagStyle"
    :class="[ 
      active ? 'bg-wheat-dark opacity-90 text-wheat-light' : 'bg-wheat-light opacity-20 text-wheat-dark'
    ]"
    @click="$emit('click')"
  >  
    <!-- 动态选择图片 -->
    <img 
      :src="getImageSrc(name)" 
      alt="Veg Image" 
      class="vegetable-img floating-img" 
      :class="{ 'active': active , 'grain-img-active': active}" 
      :style="imgStyle"
    />
    <slot />
  </span>
</template>
  
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { computed } from 'vue';

  import CarrotImage from '@/assets/food_img/carrot.png';
  import PotatoImage from '@/assets/food_img/potato.png';
  import OnionImage from '@/assets/food_img/Garlic.png';
  import TomatoImage from '@/assets/food_img/tomato.webp';
  import PepperImage from '@/assets/food_img/Cave_Carrot.png';
  import CucumberImage from '@/assets/food_img/Salad.png';
  import EggplantImage from '@/assets/food_img/Eggplant.png';
  import ZucchiniImage from '@/assets/food_img/Leek.png';
  import LettuceImage from '@/assets/food_img/Kale.png';
  import SweetPotatoImage from '@/assets/food_img/SPotato.png';
  import SproutsImage from '@/assets/food_img/Artichoke.png';
  import CauliflowerImage from '@/assets/food_img/Cauliflower.png';
  import BroccoliImage from '@/assets/food_img/Fiddlehead_Fern.png';
  import CabbageImage from '@/assets/food_img/Bok_Choy.png';

  import CornImage from '@/assets/food_img/Corn.png';
  import PeaImage from '@/assets/food_img/Green_Bean.png';
  import MushroomsImage from '@/assets/food_img/Mushroom.png';
  import PumpkinImage from '@/assets/food_img/Pumpkin.png';
  import AsparagusImage from '@/assets/food_img/Wild_Horseradish.png';
  import TofuImage from '@/assets/food_img/Cheese.png';


  import AppleImage from '@/assets/food_img/Apple.webp';
  import LemonImage from '@/assets/food_img/Lemon.webp';
  import OrangeImage from '@/assets/food_img/Blood_Orange.webp';
  import BananaImage from '@/assets/food_img/Banana.webp';
  import PineappleImage from '@/assets/food_img/Pineapple.webp';
  import BerriesImage from '@/assets/food_img/Blackberry.png';


  // 赋予属性，是否选中
  const props = defineProps<{
    active: boolean,
    name: string
  }>()

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

  /* 根据名称选择图片 */
  const getImageSrc = (name: string) => {
  switch (name) {
    case 'Carrot': return CarrotImage;
    case 'Potato': return PotatoImage;
    case 'Onion': return OnionImage;
    case 'Tomato': return TomatoImage;
    case 'Pepper': return PepperImage;
    case 'Cucumber': return CucumberImage;
    case 'Eggplant': return EggplantImage;
    case 'Zucchini': return ZucchiniImage;
    case 'Lettuce': return LettuceImage;
    case 'Sweet Potato': return SweetPotatoImage;
    case 'Sprouts': return SproutsImage;
    case 'Cauliflower': return CauliflowerImage;
    case 'Broccoli': return BroccoliImage;
    case 'Cabbage': return CabbageImage;
    case 'Asparagus': return AsparagusImage;

    case 'Beans': return PeaImage;

    case 'Corn': return CornImage;
    case 'Pea': return PeaImage;
    case 'Mushrooms': return MushroomsImage;
    case 'Tofu': return TofuImage;
    case 'Pumpkin': return PumpkinImage;

    case 'Apple': return AppleImage;
    case 'Lemon': return LemonImage;
    case 'Orange': return OrangeImage;

    case 'Banana': return BananaImage;
    case 'Pineapple': return PineappleImage;
    case 'Berries': return BerriesImage;

    // 添加更多的图片映射...
    default: return '';
  }
};

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
  
.vegetable-tag {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #32CD32; /* 使用小麦颜色的边框 */
  border-radius: 1rem; /* 增加边框圆角半径 */
  cursor: pointer; /* 鼠标指针变为手型 */
  transition: background-color 0.3s, color 0.3s, padding 0.3s; /* 添加过渡效果 */
  position: relative; /* 为了让图片可以相对定位 */
}

.vegetable-img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-left: 0px; /* 设置 margin-left 以减少空隙 */
  transition: width 0.3s, height 0.3s, transform 1s;
  position: relative;
  left: 0px; /* 向左移动图片 */
}
  
.vegetable-img.active {
  transform: translateY(1200px) translateX(-80%); /* 移动到屏幕底部，水平居中 */
}
    
  /* 颜色变量 */
  .bg-wheat-light {
    background-color: #90EE90;
  }
  
  .bg-wheat-dark {
    background-color: #006400;
  }
  
  .text-wheat-light {
    color: #90EE90;
  }
  
  .text-wheat-dark {
    color: #006400;
  }
  </style>
  