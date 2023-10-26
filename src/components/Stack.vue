<template>
  <div class="stackBlock">
    <div class="stackBody">
      <div class="stackLogos">
        <!-- <div class="sectionTitle">
          <h1>Stack</h1>
        </div> -->
        <div class="logoDiv">
          <img src="/logos/javascript.svg" alt="JavaScript" />
        </div>
        <div class="logoDiv">
          <img src="/logos/typescript.svg" alt="TypeScript" />
        </div>
        <div class="logoDiv">
          <img src="/logos/html5.svg" alt="HTML5" />
        </div>
        <div class="logoDiv">
          <img src="/logos/css3.svg" alt="CSS3" />
        </div>
        <div class="logoDiv">
          <img src="/logos/nodejs.svg" alt="NodeJS" />
        </div>
        <div class="logoDiv">
          <img src="/logos/react.svg" alt="React" />
        </div>
        <div class="logoDiv">
          <img src="/logos/vue.svg" alt="VueJS" />
        </div>
        <div class="logoDiv">
          <img src="/logos/angular.svg" alt="Angular" />
        </div>
        <div class="logoDiv">
          <img src="/logos/expresswhite.svg" alt="Express" />
        </div>
        <div class="logoDiv">
          <img src="/logos/mongodb.svg" alt="MongoDB" />
        </div>
        <div class="logoDiv">
          <img src="/logos/postgres.svg" alt="PostgreSQL" />
        </div>
        <div class="logoDiv">
          <img src="/logos/figma.svg" alt="Figma" />
        </div>
      </div>
    </div>
    <div class="stackText">
      <p>
        JavaScript, TypeScript, React, Angular, Vue.js, Node.js, Express, HTML5,
        CSS3, Databases incl. MongoDB and PostgreSQL, UX/UI, RESTful APIs and
        general dev tools such as Postman, Git, Jira, Figma and TDD (Mocha &
        Jest).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stack",
};
</script>

<style>
.stackBody {
  /* background: linear-gradient(200deg, #4f4f4f, #919191); */
  padding-left: 15px;
  padding-right: 15px;
  /* border: dashed 2px white; */
  background-color: rgb(255, 255, 255, 0.1);
}

.sectionTitle {
  width: 100%;
}

.sectionTitle h1 {
  margin: 0px;
  color: white;
}

.stackLogos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 25px;
}

.stackLogos img {
  height: 60px;
  padding: 14px;
}

.stackText {
  padding: 15px;
  background-color: #636363;
}

.stackText p {
  margin: 0px;
  color: white;
}

.logoDiv {
  display: flex;
  flex-grow: 4;
}

@media only screen and (min-width: 768px) {
  .stackBody {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .stackText {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .stackLogos img {
    height: 130px;
    padding: 20px;
  }
  .stackBlock {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
