<template>
  <header>
    <HeaderMenu headertext="Projects." />
  </header>
  <div class="mainSite">
    <div class="returnLink">
      <router-link to="/">
        <h2>&lt; Return to home</h2>
      </router-link>
    </div>
    <ProjectsList />
    <Contact />
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import Contact from "../components/Contact.vue";
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  name: "ProjectsView",
  components: {
    HeaderMenu,
    ProjectsList,
    Contact,
  },
};
</script>

<style scoped>
h1,
h2 {
  color: white;
  margin: 0px;
}

h2 {
  border-bottom: solid 2px white;
}

.mainSite {
  max-width: 1100px;
  margin: auto;
}
.returnLink {
  width: fit-content;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px 0px;
}

@media only screen and (min-width: 768px) {
  .expTrain {
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
