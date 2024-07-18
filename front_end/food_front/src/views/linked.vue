<template>
  <el-container>
    <el-header>
      <h2 class="h2head">😉 Buy these ingredients 😉</h2>
    </el-header>
    <el-main>
      <div class="linked-page">
        <div class="bubble" v-for="(food, index) in foods" :key="index" :style="{ animationDelay: `${index * 0.5}s` }"
          @click="handleClick(index)" :class="{ active: activeIndex === index }">
          <div class="bubble-content">
            <img :src="food.image" :alt="food.name" />
            <p>{{ food.name }}</p>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>


<!-- code  -->
<script setup>
import { ref, toRefs, onMounted } from 'vue';
import { useFoodStore } from '@/stores/foodStore';

const foodStore = useFoodStore();
const { selectedFoods } = toRefs(foodStore);

// 设定需要展示的关键词,在这里改数组
const selectedKeywords = selectedFoods.value.map(food => food.name);
const displayKeywords = []; // 普通字符串数组

// 定义 ingredients，选取selectedKeywords的前两个值，如果不足两个则设置默认值
const ingredient1 = selectedKeywords[0] || 'crab';
const ingredient2 = selectedKeywords[1] || 'null';

// 映射对象，将标准化后的关键词和图片路径绑定
const keywordToImageMap = {
  tomato: () => import('@/assets/food_img/tomato.webp'),
  potato: () => import('@/assets/food_img/potato.png'),
  rice: () => import('@/assets/food_img/rice.png'),
  wheat: () => import('@/assets/food_img/Wheat.png'),
  quinoa: () => import('@/assets/food_img/Quinoa.png'),
  oat: () => import('@/assets/food_img/Oat.png'),
  noodles: () => import('@/assets/food_img/Noodles.png'),
  /* 肉类 */
  chicken: () => import('@/assets/food_img/Chicken.png'),
  beef: () => import('@/assets/food_img/beef.png'),
  pork: () => import('@/assets/food_img/Raw_Porkchop.png'),
  lamb: () => import('@/assets/food_img/Goat.png'),
  turkey: () => import('@/assets/food_img/Golden_Chicken.png'),
  bacon: () => import('@/assets/food_img/bacon.webp'),
  sausage: () => import('@/assets/food_img/Bread.png'),
  salmon: () => import('@/assets/food_img/Salmon.png'),
  shrimp: () => import('@/assets/food_img/Shrimp.png'),
  crab: () => import('@/assets/food_img/Crab.png'),
  scallops: () => import('@/assets/food_img/Clam.png'),
  cod: () => import('@/assets/food_img/Tuna.png'),
  egg: () => import('@/assets/food_img/egg.png'),
  milk: () => import('@/assets/food_img/Milk.png'),
  /*   菜和水果 */
  carrot: () => import('@/assets/food_img/carrot.png'),
  onion: () => import('@/assets/food_img/Garlic.png'),
  pepper: () => import('@/assets/food_img/Cave_Carrot.png'),
  cucumber: () => import('@/assets/food_img/Salad.png'),
  eggplant: () => import('@/assets/food_img/Eggplant.png'),
  zucchini: () => import('@/assets/food_img/Leek.png'),
  lettuce: () => import('@/assets/food_img/Kale.png'),
  sweetpotato: () => import('@/assets/food_img/SPotato.png'),
  sprouts: () => import('@/assets/food_img/Artichoke.png'),
  cauliflower: () => import('@/assets/food_img/Cauliflower.png'),
  broccoli: () => import('@/assets/food_img/Fiddlehead_Fern.png'),
  cabbage: () => import('@/assets/food_img/Bok_Choy.png'),
  corn: () => import('@/assets/food_img/Corn.png'),
  pea: () => import('@/assets/food_img/Green_Bean.png'),
  mushrooms: () => import('@/assets/food_img/Mushroom.png'),
  pumpkin: () => import('@/assets/food_img/Pumpkin.png'),
  asparagus: () => import('@/assets/food_img/Wild_Horseradish.png'),
  tofu: () => import('@/assets/food_img/Cheese.png'),
  apple: () => import('@/assets/food_img/Apple.webp'),
  lemon: () => import('@/assets/food_img/Lemon.webp'),
  orange: () => import('@/assets/food_img/Blood_Orange.webp'),
  banana: () => import('@/assets/food_img/Banana.webp'),
  pineapple: () => import('@/assets/food_img/Pineapple.webp'),
  berries: () => import('@/assets/food_img/Blackberry.png'),
  beans: () => import('@/assets/food_img/Green_Bean.png'),
};

// 函数将关键词标准化为小写
const normalizeKeyword = (keyword) => keyword.toLowerCase();

// 动态生成foods数组，仅包含需要展示的关键词
const foods = ref([]);

// 初始化 foods 数组和加载图片在 fetchAndSetLinkedIngredients 中完成

const activeIndex = ref(null);


const fetchAndSetLinkedIngredients = async () => {
  await foodStore.fetchLinkedIngredients(ingredient1, ingredient2);
  // 使用普通数组方法更新 displayKeywords
  displayKeywords.push(...foodStore.linkedIngredients);

  // 动态生成foods数组，仅包含需要展示的关键词
  foods.value = await Promise.all(displayKeywords.map(async keyword => {
    const imageLoader = keywordToImageMap[normalizeKeyword(keyword)];
    let image = null;
    if (imageLoader) {
      image = await imageLoader().then(module => module.default).catch(() => null);
    }
    return {
      name: keyword,
      image: image
    };
  }));
};

const getImageSrc = (keyword) => {
  const imageLoader = keywordToImageMap[normalizeKeyword(keyword)];
  if (imageLoader) {
    return imageLoader().then(module => module.default).catch(() => null);
  }
  return null;
};

onMounted(() => {
  fetchAndSetLinkedIngredients();
});


// 处理点击事件
const handleClick = (index) => {
  activeIndex.value = index;
  setTimeout(() => {
    activeIndex.value = null;
  }, 300); // 恢复初始状态的时间
};
</script>

<style>
/* 设置父容器样式，使其居中对齐 */
.linked-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* 居中对齐 */
  align-items: center;
  /* 垂直居中 */
  gap: 20px;
  /* 项目之间的间距 */
  margin-top: 80px;
  /* 顶部边距 */
}

/* 每个气泡的样式 */
.bubble {
  display: grid;
  place-items: center;
  background: #e3edf7;
  padding: 1.4em;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: transform 0.5s;
}

.h2head {
  text-align: center;
  margin-top: 30px;
}

/* 气泡内容的样式 */
.bubble-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #039be5;
  /* 设置文字颜色为蓝色 */
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-weight: 700;
  /* 设置文字加粗 */

}


/* 图片样式 */
.bubble img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

/* 激活状态的气泡样式 */
.bubble.active {
  transform: scale(1.1);

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(0.5em);
}
</style>