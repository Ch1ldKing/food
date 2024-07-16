<template>
  <div @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" class="app">
    <transition name="fade" mode="out-in">
      <router-view :key="currentRouteKey" />
    </transition>
    <div class="dots">
      <span v-for="(route, index) in routes" :key="index" :class="{ active: currentIndex === index }"></span>
    </div>
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

      { path: '/', name: 'FootPotPage' },

      { path: '/cooking', name: 'Cooking' },

      { path: '/search', name: 'Search' },

      { path:'/mode', nanme: 'Mode'}

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
      const timeElapsed = Date.now() - touchStartTime.value;

      // 仅在滑动距离大于50像素且持续时间小于500毫秒时触发页面切换
      if (Math.abs(distance) > 50 && timeElapsed < 500) {
        console.log('touchStartX', touchStartX.value);
        console.log('touchEndX', touchEndX.value);
        if (distance > 0) {
          transitionName.value = 'fade'; // 从右入镜
          prevPage();
        } else {
          transitionName.value = 'fade'; // 从左入镜
          nextPage();
        }
      }

      // 重置触摸参数
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

    const currentRouteKey = computed(() => route.path);

    return {
      routes,
      currentIndex,
      currentRouteKey,
      transitionName,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    };
  }
});
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.dots {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.dots span {
  width: 8px;
    /* 缩小点的大小 */
    height: 8px;
    /* 缩小点的大小 */
    background: lightgreen;
    /* 浅绿色背景 */
    border-radius: 50%;
}

.dots span.active {
  background: black;
}

/* 过渡效果定义 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
  /* 修改此处的时间为你需要的持续时间 */
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}
</style>
