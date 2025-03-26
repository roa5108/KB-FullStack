<template>
  <img
    :src="image.src"
    :alt="image.alt"
    class="thumbnail"
    @click="updateSelectedImage(image)"
  />
</template>

<script>
export default {
  name: 'GalleryListItem',
  props: {
    image: { type: Object, required: true },
  },
  inject: ['updateSelectedImage'],
};
</script>

<style scoped>
.thumbnail {
  width: 100px;
  height: 100px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
}

.thumbnail:hover {
  transform: scale(1.1);
}
</style>
