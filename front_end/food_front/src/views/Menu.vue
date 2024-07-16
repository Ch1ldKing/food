<template>
  <div class="menu-container">
    <div class="header">
      <button class="button" @click="goToRecipe('https://www.food.com/recipe/bourbon-chicken-45809')">
        Click To Jump
        <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
          <path
            clip-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="separator">
      <span class="recommended-menu">Recommended Menu</span>
    </div>
    <div class="vertical-container">
      <button
        class="item"
        v-for="(recipe, index) in recipes"
        :key="index"
        @click="goToRecipe(recipe.link)"
      >
        <span>{{ recipe.name }}</span>
      </button>
    </div>
    <div class="footer">
      <button class="button" @click="goBack">
        Return
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      recipes: [
        { name: "Bourbon Chicken", link: "https://www.food.com/recipe/bourbon-chicken-45809" },
        { name: "Best Banana Bread", link: "https://www.food.com/recipe/best-banana-bread-2886" },
        { name: "Crock-Pot Chicken With Black Beans & Cream Cheese", link: "https://www.food.com/recipe/crock-pot-chicken-with-black-beans-cream-cheese-89204" },
        { name: "Creamy Cajun Chicken Pasta", link: "https://www.food.com/recipe/creamy-cajun-chicken-pasta-39087" },
        { name: "Best Ever Banana Cake With Cream Cheese Frosting", link: "https://www.food.com/recipe/best-ever-banana-cake-with-cream-cheese-frosting-67256" }
      ],
    };
  },
  methods: {
    goToRecipe(link) {
      window.location.href = link;
    },
    goBack() {
      window.history.back();
    }
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin: 20px;
}

.separator {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 20px 0;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
}

.recommended-menu {
  padding: 0 10px;
  font-weight: bold;
}

.vertical-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

.item {
  width: 90%;
  max-width: 300px;
  height: 60px;
  margin: 9px 0;
  padding: 10px;
  font-size: 16px;
  color: #000000;
  background-color: #eff1f1;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  cursor: pointer;
  box-sizing: border-box;
}

.footer {
  margin-top: 20px;
}

.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
</style>
