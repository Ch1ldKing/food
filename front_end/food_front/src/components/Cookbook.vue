<template>
    <div>
        <el-container>
            <el-main class="main-content">
                <div v-if="!isIngredientsEmpty">
                    <div class="button-container">
                        <button v-for="(recipe, index) in recipes.slice(0, 5)" :key="index" class="cute-button" @click="navigateToMenu(recipe.id)">
                            {{ recipe.recipe }}
                        </button>
                        <button @click="navigateToChat" class="cute-button">✨️ Want something new with AI?</button>
                        <button @click="navigateToSearch" class="cute-button">For all recipes</button>
                    </div>
                </div>
                <div v-else>
                    <div class="button-container">
                        <button @click="navigateToSelect" class="cute-button">😋 Add ingredients first</button>
                    </div>
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
        const router = useRouter();

        // Fetch recipes when the component is mounted
        
        const { recipes } = toRefs(recipeStore);

        const isIngredientsEmpty = computed(() => foodStore.selectedFoods.length === 0);

        // 编程导航到搜索页面
        const navigateToSearch = () => {
            router.push({ name: 'Search' });
        };

        const navigateToChat = () => {
            router.push({ name: 'Chat' });
        };

        const navigateToSelect = () => {
            router.push({ name: 'FoodPotPage' });
        };

        const navigateToMenu = (id: number) => {
            console.log(id);
            router.push({ name: 'Menu' , params: { id } });
        };

        return {
            recipes,
            isIngredientsEmpty,
            navigateToSearch,
            navigateToChat,
            navigateToSelect,
            navigateToMenu,
        };
    },
});
</script>

<style scoped>


.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 0;
    width: 100%;
}

.main-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 0px;
    overflow-y: auto; /* 添加滚动 */
    height: calc(100vh - 100px); /* 适应视口高度 */
    padding-bottom: 300px; /* 确保主内容在底部有足够的空间 */
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
