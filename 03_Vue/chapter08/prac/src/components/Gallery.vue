<template>
  <div class="gallery-container">
    <!-- GalleryView에 selectedImage를 prop으로 전달 -->
    <GalleryView :selectedImage="selectedImage" />
    <GalleryList />
  </div>
</template>

<script>
import { ref } from 'vue';
import GalleryView from './GalleryView.vue';
import GalleryList from './GalleryList.vue';

export default {
  name: 'Gallery',
  components: { GalleryView, GalleryList },
  setup() {
    const images = ref([
      { id: 1, src: './cat1.jpg', alt: 'Image 1' }, // public 폴더에서 이미지 불러오기
      { id: 2, src: './cat2.jpg', alt: 'Image 2' },
      { id: 3, src: './cat3.jpg', alt: 'Image 3' },
      { id: 4, src: './cat4.jpg', alt: 'Image 4' },
      { id: 5, src: './cat5.jpg', alt: 'Image 5' },
      { id: 6, src: './cat6.jpg', alt: 'Image 6' },
      { id: 7, src: './cat7.jpg', alt: 'Image 7' },
      { id: 8, src: './cat8.jpg', alt: 'Image 8' },
    ]);

    const selectedImage = ref(images.value[0]); // 첫 번째 이미지 기본 선택

    const updateSelectedImage = (image) => {
      selectedImage.value = image;
    };

    return { images, selectedImage, updateSelectedImage };
  },
  provide() {
    return {
      images: this.images,
      updateSelectedImage: this.updateSelectedImage,
    };
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
