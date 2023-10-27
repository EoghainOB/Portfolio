<template>
  <div class="mainSite">
    <div class="returnLink">
      <router-link to="/">
        <h2>Return to home</h2>
      </router-link>
    </div>
    <div class="projectTitle">
      <div>
        <h1>Projects.</h1>
      </div>
    </div>
    <ProjectsList />
    <Contact />
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "ProjectsView",
  components: {
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

.projectTitle,
.returnLink {
  margin-left: 15px;
  margin-right: 15px;
}

.returnLink {
  width: fit-content;
}

@media only screen and (min-width: 768px) {
  .expTrain {
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
