<template>
  <div class="trainingBlock">
    <h1>Qualified.</h1>
    <div class="trainingList">
      <h2><b>Sept ‘22 - Dec ‘22</b></h2>
      <p>
        <b>Full Stack JavaScript Diploma</b><br />School of Applied
        Technology<br />
        <i>Amsterdam, The Netherlands</i>
      </p>
    </div>
    <div class="trainingList">
      <h2><b>Sept ‘96 - June ‘99</b></h2>
      <p>
        <b>Studied Media Production & Management</b><br />Senior College
        Ballyfermot (BCFE)<br />
        <i>Dublin, Ireland</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trained",
};
</script>

<style scoped>
h1 {
  color: #2f2f2f;
  margin: 0px;
}

.trainingBlock {
  background-color: #f1f1f1;
  padding: 15px;
  margin: 8px;
  border-radius: 10px;
  padding-bottom: 30px;
}

.trainingBlock h2,
p {
  margin-bottom: 0px;
}
.trainingBlock h2 {
  width: fit-content;
  color: #f1f1f1;
  background-color: #2f2f2f;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}
.trainingBlock p {
  margin-top: 0px;
}

@media only screen and (min-width: 768px) {
  .trainingBlock {
    width: 50%;
    margin: 0px;
    margin-left: 8px;
  }
}
</style>
