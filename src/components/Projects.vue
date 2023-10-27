<template>
  <div class="projectsBlock">
    <div class="projectsContent">
      <div class="projectTitle">
        <div>
          <h1>Projects.</h1>
        </div>
        <div>
          <router-link to="/projects">
            <h2>View all</h2>
          </router-link>
        </div>
      </div>
      <ProjectsDetail />
    </div>
  </div>
</template>

<script>
import ProjectsDetail from "./ProjectsDetail.vue";

export default {
  name: "Projects",
  components: { ProjectsDetail },
};
</script>

<style scoped>
h1,
h2 {
  color: white;
  margin: 0px;
}
h2 {
  font-size: 1.2em;
  border-bottom: solid 2px white;
}

.projectsBlock {
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 30px;
}
.projectsContent {
  max-width: 1100px;
  padding-top: 20px;
  margin: auto;
}
.projectTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (min-width: 768px) {
  h2 {
    font-size: 1.4em;
    border-bottom: solid 2px white;
  }
}
</style>
