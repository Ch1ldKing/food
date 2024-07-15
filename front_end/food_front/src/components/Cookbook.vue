<template>
    <div>
        <el-container>
            <el-main class="main-content">
                <div v-if="loading" class="loading-container">
                    <div class="loading-text">Cooking...</div>
                </div>
                <div v-else class="button-container">
                    <button v-for="(recipe, index) in recipes.slice(0, 5)" :key="index" class="cute-button">
                        {{ index + 1 }}: {{ recipe.recipe }}
                    </button>
                    <button @click="navigateToSearch" class="cute-button">Button6: Goodbye! 👋</button>
                    <button id="007" class="cute-button">Button7: Goodbye! 👋</button>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, toRefs, computed } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useFoodStore } from '@/stores/foodStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Cookbook',
    setup() {
        const recipeStore = useRecipeStore();
        const foodStore = useFoodStore();
        const loading = ref(true);
        const router = useRouter();

        const ingredients = computed(() => foodStore.selectedFoods.map(food => food.name));
        console.log(ingredients.value);

        // Fetch recipes when the component is mounted
        onMounted(async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            await recipeStore.fetchRecipes(ingredients.value); // 示例ingredients
            loading.value = false; // 数据加载完成后隐藏进度条
        });
        const { recipes } = toRefs(recipeStore);

        // 编程导航到搜索页面
        const navigateToSearch = () => {
            router.push({ name: 'Search' });
        };

        return {
            recipes,
            loading,
            navigateToSearch,
        };
    },
});
</script>

<style scoped>
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
}

.loading-text {
    font-family: 'Pixel', sans-serif;
    font-size: 24px;
    color: #ffffff;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 0;
    width: 100%;
}

.main-content {

    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 0px;

}

.cute-button {
    width: 90%;
    max-width: 300px;
    /* 你可以根据需要调整 */
    height: 60px;
    /* 固定高度 */
    margin: 9px 0;
    /* 按钮之间的间距 */
    padding: 10px;
    font-size: 16px;
    color: #000000;
    background-color: #eff1f1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.2;
    /* 调整行高 */
}

.cute-button span {
    display: block;
    width: 100%;
}

</style>
