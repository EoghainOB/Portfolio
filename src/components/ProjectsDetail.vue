<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carouselItem">{{ slide }}</div>
    </Slide>
    <template #addons>
      <Navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ProjectDetails",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      768: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
});
</script>

<style>
.carouselItem {
  min-height: 200px;
  width: 100%;
  background-color: #e7e7e7;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

@media only screen and (min-width: 768px) {
  .carousel__slide {
    padding: 10px;
  }
}
</style>
