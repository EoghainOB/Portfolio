<template>
  <div class="profileBlock">
    <div class="profileImage">
      <img src="/images/eoghain.jpg" alt="Eoghain" />
    </div>
    <div class="profileText">
      <h2>
        Hi, I'm <span class="invert">Eoghain O’Briain</span>, originally from
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
  object-position: top -25px left 0px;
  object-fit: cover;
  border-top: solid 2px white;
  border-bottom: solid 2px white;
}

.profileText {
  margin-left: 15px;
  margin-right: 15px;
}

@media only screen and (min-width: 768px) {
  .profileBlock {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .profileImage {
    height: 440px;
  }

  h2 {
    font-size: xx-large;
    line-height: 50px;
    padding: 20px 0px;
    border-top: solid 2px white;
    border-bottom: solid 2px white;
  }

  .profileImage img {
    height: 100%;
    width: 400px;
    object-position: top 0px left 0px;
    margin-right: 20px;
    border-radius: 10px;
    border-top: none;
    border-bottom: none;
  }
}

@media only screen and (min-width: 768px) {
  .profileBlock {
    margin-left: 15px;
    margin-right: 15px;
  }
  .profileText {
    margin-right: 0px;
  }
}
</style>
