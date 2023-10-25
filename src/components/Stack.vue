<template>
  <div class="stackBlock">
    <div class="stackBody">
      <div class="stackLogos">
        <div class="sectionTitle">
          <h1>Stack</h1>
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/javascript.svg" alt="JavaScript" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/typescript.svg" alt="TypeScript" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/html5.svg" alt="HTML5" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/css3.svg" alt="CSS3" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/nodejs.svg" alt="NodeJS" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/react.svg" alt="React" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/vue.svg" alt="VueJS" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/angular.svg" alt="Angular" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/express.svg" alt="Express" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/mongodb.svg" alt="MongoDB" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/postgres.svg" alt="PostgreSQL" />
        </div>
        <div class="logoDiv">
          <img src="@/components/logos/figma.svg" alt="Figma" />
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
  background: linear-gradient(0deg, #4f4f4f, #919191);
  padding-left: 15px;
  padding-right: 15px;
}

.sectionTitle {
  width: 100%;
}

.sectionTitle h1 {
  margin: 0px;
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
