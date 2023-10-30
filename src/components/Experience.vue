<template>
  <div class="experienceBlock">
    <h1>Experienced.</h1>
    <div class="jobList">
      <h2><b>Jan ‘23 – June ‘23</b></h2>
      <p>
        <b>Full Stack JavaScript developer / Consultant</b><br />School of
        Applied Technology<br />
        <i>Amsterdam, The Netherlands</i>
      </p>
    </div>
    <div class="jobList">
      <h2><b>Sept ‘08 – Aug ‘22</b></h2>
      <p>
        <b>Founder</b><br />Red RC - Daily sports news site<br />
        <i>Overveen, The Netherlands</i>
      </p>
    </div>
    <div class="jobList">
      <h2><b>Apr ‘00 – Aug ‘08</b></h2>
      <p>
        <b>Graphic Designer / Marketing Manager</b><br />Serpent Model Racing
        Cars b.v<br />
        <i>Cruquius, The Netherlands</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
h1 {
  color: #2f2f2f;
  margin: 0px;
}
.experienceBlock {
  background-color: white;
  padding: 15px;
  margin: 8px;
  border-radius: 10px;
  padding-bottom: 30px;
}

.experienceBlock h2,
p {
  margin-bottom: 0px;
}

.experienceBlock h2 {
  width: fit-content;
  color: white;
  background-color: #2f2f2f;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}
.experienceBlock p {
  margin-top: 0px;
}

@media only screen and (min-width: 768px) {
  .experienceBlock {
    width: 50%;
    margin: 0px;
    margin-right: 8px;
  }
}
</style>
