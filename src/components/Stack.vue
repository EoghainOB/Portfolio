<template>
  <div class="stackBlock">
    <div class="stackBody">
      <div class="stackLogos">
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
        I possess a comprehensive skill set as a developer, with knowledge of
        <span class="invert">JavaScript</span> and
        <span class="invert">TypeScript</span>. I'm well-versed in popular
        front-end frameworks like <span class="invert">React</span>,
        <span class="invert">Angular</span> and
        <span class="invert">Vue.js</span>, and have a strong command of
        back-end technologies, including <span class="invert">Node.js</span> and
        <span class="invert">Express</span>. Proficient in web fundamentals like
        <span class="invert">HTML5</span> and <span class="invert">CSS3</span>,
        I also bring database understanding, working with
        <span class="invert">MongoDB</span> and
        <span class="invert">PostgreSQL</span>. My skill set extends to
        <span class="invert">UX/UI design</span>, building and consuming
        <span class="invert">RESTful APIs</span>, and utilizing essential
        developer tools such as <span class="invert">Postman</span>,
        <span class="invert">Git</span>, <span class="invert">Jira</span>, and
        <span class="invert">Figma</span>. Additionally, I'm experienced in
        Test-Driven Development (TDD) using
        <span class="invert">Mocha</span> and <span class="invert">Jest</span>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stack",
};
</script>

<style scoped>
.stackBody {
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(255, 255, 255, 0.1);
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

.invert {
  border-bottom: solid 2px #7b7b7b;
  padding: 0px 3px;
}

@media only screen and (min-width: 470px) {
  .stackLogos img {
    height: 74px;
  }
}

@media only screen and (min-width: 535px) {
  .stackLogos img {
    height: 86px;
  }
}
@media only screen and (min-width: 596px) {
  .stackLogos img {
    height: 66px;
  }
}
@media only screen and (min-width: 680px) {
  .stackLogos img {
    height: 80px;
  }
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
  .stackLogos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 25px;
  }

  .logoDiv {
    display: flex;
    flex: 0 0 12%;
    padding: 16px;
    justify-content: center;
    align-items: center;
  }

  .stackLogos img {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }

  .stackBlock {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
