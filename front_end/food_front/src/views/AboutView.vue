<template>
  <div class="about">
    <Graph />
    <h1>Testing CSS DEMO</h1>
  </div>
</template>


<script>
import Graph from '../components/Graph.vue';


export default {
  name: 'App',
  components: {
    Graph
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
