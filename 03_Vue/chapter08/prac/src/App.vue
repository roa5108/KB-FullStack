<template>
  <div id="app">
    <Gallery />
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    Gallery,
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
}
</style>
