<template>
  <div class="common-layout">
    <el-container>
      <el-main>Main
        <FoodList />
      </el-main>
      <el-footer :style="{height: '20px', backgroundColor: '#f5f5f5', lineHeight: '50px', textAlign: 'center' }">Footer
        <Pot>  </Pot>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Pot from '../components/Pot.vue';
import FoodList from '@/components/FoodList.vue'

export default defineComponent({
    components: {
        Pot,
        FoodList
    },
    setup() {
        const showPot = ref(true); // 控制 Pot 组件的显示
        return {
            showPot
        };
    }
});
</script>

<style scoped>
/* 这里定义过渡效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>
