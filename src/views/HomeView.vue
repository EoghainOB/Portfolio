<template>
  <div class="mainSite">
    <About />
    <Stack />
    <Projects />
    <div class="expTrain">
      <Experience />
      <Trained />
    </div>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Stack from "../components/Stack.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import Trained from "../components/Trained.vue";

export default {
  name: "HomeView",
  components: {
    About,
    Stack,
    Projects,
    Experience,
    Trained,
  },
};
</script>

<style>
.mainSite {
  max-width: 1100px;
  margin: auto;
}

@media only screen and (min-width: 768px) {
  .expTrain {
    display: flex;
  }
}
</style>
