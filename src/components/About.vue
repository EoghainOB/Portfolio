<template>
  <div class="profileBlock">
    <div class="profileImage">
      <img src="/images/eoghain.jpg" alt="Eoghain" />
    </div>
    <div class="profileText">
      <h2>
        Hi, I'm <span class="invert">Eoghain O’Briain</span>. Originally from
        Ireland I now live in the Netherlands. I'm a passionate
        <span class="invert">full-stack</span> and
        <span class="invert">front-end developer</span> with demonstrable
        experience as a <span class="invert">business owner</span> and a
        <span class="invert">graphic designer</span>. My diverse background
        equips me with excellent troubleshooting skills, critical and creative
        thinking and a meticulous <span class="invert">eye for detail</span>.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
h2 {
  font-size: x-large;
  color: white;
}

.invert {
  color: black;
  background-color: white;
  padding: 0px 5px;
}

.profileImage img {
  width: 104%;
  height: 240px;
  object-position: center;
  object-fit: cover;
  border-top: solid 2px white;
  border-bottom: solid 2px white;
}

.profileText {
  margin-left: 15px;
  margin-right: 15px;
}
@media only screen and (min-width: 425px) {
  .profileImage img {
    object-position: top -80px left 0px;
  }
}
@media only screen and (min-width: 525px) {
  .profileImage img {
    object-position: top -110px left 0px;
  }
}
@media only screen and (min-width: 610px) {
  .profileImage img {
    object-position: top -140px left 0px;
  }
}
@media only screen and (min-width: 768px) {
  .profileBlock {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 2.9vw;
    line-height: 4.5vw;
    padding: 20px 0px;
    border-top: solid 2px white;
    border-bottom: solid 2px white;
  }
  .profileImage {
    height: 100%;
  }
  .profileImage img {
    width: 325px;
    height: 371px;
    object-fit: cover;
    object-position: top 0px left -64px;
    margin-right: 20px;
    border-radius: 10px;
    border-top: none;
    border-bottom: none;
  }
  .profileBlock {
    margin-left: 15px;
    margin-right: 15px;
  }
  .profileText {
    margin-right: 0px;
  }
}
@media only screen and (min-width: 1100px) {
  h2 {
    font-size: xx-large;
    line-height: 50px;
  }
  .profileImage {
    height: 440px;
  }
  .profileImage img {
    width: 400px;
    height: 100%;
    object-position: top 0px left -60px;
  }
}
</style>
