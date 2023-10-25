<template>
  <div class="headerBlock">
    <div class="headerContent"><h1>Welcome</h1></div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
};
</script>

<style scoped>
.headerBlock {
  max-width: 1100px;
  margin: auto;
}

.headerContent {
  text-align: center;
  margin-top: 0px;
  margin-left: 15px;
  margin-right: 15px;
}

.headerContent h1 {
  font-size: 4em;
  color: white;
  margin: 0px;
}

@media only screen and (min-width: 768px) {
  .headerContent {
    text-align: left;
  }
}
</style>
