<template>
  <header>
    <HeaderMenu />
  </header>
  <div class="content">
    <HomeView />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  name: "App",
  components: {
    HeaderMenu,
    HomeView,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap");

body {
  display: block;
  margin: 0;
  padding: 0;
  background-color: #2f2f2f;
}

header {
  background-color: rgb(0, 0, 0);
}

h1,
h2,
h3,
a,
h4,
h5,
input,
button,
p {
  font-family: "Titillium Web", sans-serif;
  text-decoration: none;
  font-weight: normal;
}

p {
  font-size: 1.2em;
}
</style>
