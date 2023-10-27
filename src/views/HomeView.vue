<template>
  <header>
    <HeaderMenu headertext="Welcome." />
  </header>
  <div class="mainSite">
    <About />
    <Stack />
    <Projects />
    <div class="expTrain">
      <Experience />
      <Trained />
    </div>
    <Contact />
  </div>
</template>

<script>
import About from "../components/About.vue";
import Stack from "../components/Stack.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import Trained from "../components/Trained.vue";
import Contact from "../components/Contact.vue";
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  name: "HomeView",
  components: {
    HeaderMenu,
    About,
    Stack,
    Projects,
    Experience,
    Trained,
    Contact,
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
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
