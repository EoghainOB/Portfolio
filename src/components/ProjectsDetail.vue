<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(project, index) in projects" :key="index">
      <div class="carouselItem">
        <div class="carouselBlock">
          <div class="cardImage">
            <img :src="project.image" alt="" />
          </div>
          <div class="cardText">
            <div class="cardTitle">
              <h3>{{ project.title }}</h3>
            </div>
            <div class="cardDescription">
              <p>{{ project.description }}</p>
            </div>
            <div class="stack">
              <div v-for="tech in project.stack" :key="tech">
                <img :src="`/logos/${tech}.svg`" :alt="tech" />
              </div>
            </div>
            <div class="projectLinks">
              <p v-if="project.workingUrl">
                <b
                  ><a :href="project.workingUrl" target="_blank"
                    >> View working project</a
                  ></b
                >
              </p>
              <p v-if="project.repoURL">
                <b
                  ><a :href="project.repoURL" target="_blank"
                    >> GitHub repo page</a
                  ></b
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import { projects } from "../data/projects";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ProjectDetails",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    projects,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      768: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      900: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
    projects,
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
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.carousel__pagination {
  padding: 0;
}

:root {
  --vc-clr-primary: #ffffff;
  --vc-clr-secondary: #7e7e7e;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  display: none;
}

.carousel__icon {
  fill: black;
}

.carouselBlock {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.carouselBlock img {
  width: 100%;
}

.cardText {
  padding: 15px;
}

.cardText h3 {
  font-weight: bold;
  margin: 0px;
}

.cardText p {
  font-size: 0.9em;
}

.cardImage img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.carousel__track {
  background-color: rgb(69 69 69);
}
.stack {
  display: flex;
  gap: 0.5em;
}

.stack img {
  height: 25px;
}

.projectLinks a {
  color: black;
  font-weight: bold;
}

@media only screen and (min-width: 768px) {
  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    display: block;
  }
}
</style>
