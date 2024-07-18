<template>
  <div @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" class="app">
    <transition name="fade" mode="out-in">
      <router-view :key="currentRouteKey" />
    </transition>
    <div class="dots">
      <span v-for="(route, index) in routes" :key="index" :class="{ active: currentIndex === index }"></span>
    </div>
    <button class="home-button" @click="navigateHome">
      <img src="@/assets/home.png" alt="Home" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const touchStartX = ref(0);
    const touchEndX = ref(0);
    const touchStartTime = ref(0);
    const currentIndex = ref(0);
    const transitionName = ref('fade'); // 动态过渡名称

    const routes = [
      { path: '/', name: 'FoodPotPage' },
      { path: '/cooking', name: 'Cooking' },
      { path: '/search', name: 'Search' },
      { path: '/linked', name: 'Linked' }
    ];

    const updateCurrentIndex = function () {
      currentIndex.value = routes.findIndex(function (r) {
        return r.path === route.path;
      });
    };

    onMounted(function () {
      updateCurrentIndex();
    });

    watch(route, function () {
      updateCurrentIndex();
    });

    const onTouchStart = function (event: TouchEvent) {
      touchStartX.value = event.touches[0].clientX;
      touchEndX.value = event.touches[0].clientX;
      touchStartTime.value = Date.now();
    };

    const onTouchMove = function (event: TouchEvent) {
      touchEndX.value = event.touches[0].clientX;
    };

    const onTouchEnd = function () {
      const distance = touchEndX.value - touchStartX.value;
      console.log(distance);
      const timeElapsed = Date.now() - touchStartTime.value;

      if (Math.abs(distance) > 130 && timeElapsed < 500) {
        if (distance > 0) {
          transitionName.value = 'fade'; // 从右入镜
          prevPage();
        } else {
          transitionName.value = 'fade'; // 从左入镜
          nextPage();
        }
      }

      touchStartX.value = 0;
      touchEndX.value = 0;
      touchStartTime.value = 0;
    };

    const nextPage = function () {
      if (currentIndex.value < routes.length - 1) {
        router.push(routes[currentIndex.value + 1].path);
      }
    };

    const prevPage = function () {
      if (currentIndex.value > 0) {
        router.push(routes[currentIndex.value - 1].path);
      }
    };

    const navigateHome = function () {
      router.push({ name: 'FoodPotPage' });
    };

    const currentRouteKey = computed(() => route.path);

    return {
      routes,
      currentIndex,
      currentRouteKey,
      transitionName,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      navigateHome
    };
  }
});
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-top: 20px; /* 调整页面顶部填充以增加间距 */
}

.dots {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.dots span {
  width: 8px;
  height: 8px;
  background: rgb(88, 187, 229);
  border-radius: 50%;
}

.dots span.active {
  background: rgb(11, 69, 127);
}

.home-button {
  position: absolute;
  top: -15px; /* 调整按钮距离顶部的距离 */
  right: 8px; /* 调整按钮距离右侧的距离 */
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.home-button img {
  width: 30px; /* 调整图标宽度 */
  height: 30px; /* 调整图标高度 */
  transition: transform 0.3s ease;
}

.home-button:hover img {
  transform: scale(1.1); /* 悬停时放大 */
}

.home-button:active {
  transform: scale(0.9); /* 点击时缩小 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 点击时添加阴影 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
