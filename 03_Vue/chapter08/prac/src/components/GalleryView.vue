<template>
  <div class="gallery-view">
    <img
      :src="selectedImage.src"
      :alt="selectedImage.alt"
      class="large-image"
    />
  </div>
</template>

<script>
export default {
  name: 'GalleryView',
  props: {
    selectedImage: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.gallery-view {
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.large-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
