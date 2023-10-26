<template>
  <div class="projectsBlock">
    <div class="projectsContent">
      <h1>Projects.</h1>
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
h1 {
  color: white;
  margin: 0px;
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
</style>
