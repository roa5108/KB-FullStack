<template>
  <div class="gallery-list">
    <GalleryListItem v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import GalleryListItem from './GalleryListItem.vue';

export default {
  name: 'GalleryList',
  components: { GalleryListItem },
  inject: ['images'],
};
</script>

<style scoped>
.gallery-list {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
