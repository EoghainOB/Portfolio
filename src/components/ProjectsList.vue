<template>
  <div class="projectPage">
    <div class="projectBlock">
      <div
        class="projectContent"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="projectDetailBlock">
          <div class="projectImage">
            <img :src="project.image" alt="project.title" />
          </div>
          <div class="projectText">
            <div class="projectTitle">
              <h3>{{ project.title }}</h3>
            </div>
            <div class="projectDescription">
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
    </div>
  </div>
</template>

<script>
import { projects as allProjects } from "../data/projects";

export default {
  name: "ProjectsList",
  components: { allProjects },
  data: () => ({
    projects: allProjects.slice().reverse(),
  }),
};
</script>

<style scoped>
.projectPage {
  margin-left: 15px;
  margin-right: 15px;
}

h2 {
  color: white;
  margin: 0px;
  font-size: 1.2em;
}

.projectBlock {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  gap: 1em;
}

.projectDetailBlock {
  background-color: #e7e7e7;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 100%;
}

.projectText {
  padding: 15px;
}

.projectTitle h3 {
  font-weight: bold;
  margin: 0px;
}
.projectImage img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.stack {
  display: flex;
  gap: 0.6em;
}

.stack img {
  height: 25px;
}

.projectLinks a {
  color: black;
  font-weight: bold;
}

@media only screen and (min-width: 768px) {
  .projectContent {
    width: 48.7%;
  }

  .stack {
    display: flex;
    gap: 0.6em;
  }

  .stack img {
    height: 30px;
  }
}
@media only screen and (min-width: 829px) {
  .projectContent {
    width: 49%;
  }
}
</style>
