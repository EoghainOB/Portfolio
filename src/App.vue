<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap");

body {
  display: block;
  margin: 0;
  padding: 0;
  background-color: #2f2f2f;
  background-image: url("/images/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 15%;
  background-size: cover;
}

header {
  background: linear-gradient(150deg, #3c3c3c, #000000);
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
  font-size: 1.1em;
}

h3 {
  font-size: 1.5em;
}

@media only screen and (min-width: 768px) {
  body {
    background-position: center;
    background-size: 100vw;
  }
}
</style>
