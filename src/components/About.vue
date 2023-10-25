<template>
  <div class="profileBlock">
    <div class="profileImage">
      <img src="@/components/images/110406695.jpeg" alt="Eoghain" />
    </div>
    <div class="profileText">
      <h2>
        My name is <span class="invert">Eoghain O’Briain</span> and I am
        originally from Ireland and now living in the Netherlands. I am a
        <span class="invert">fullstack</span> and
        <span class="invert">frontend developer</span>. With 20 years experience
        as a business owner and as a
        <span class="invert">graphic designer</span>, I have been creating
        websites for over two decades and made the decision to transition to the
        tech industry in 2022 as part of a career change.
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
  width: 100%;
  height: 220px;
  object-position: top -35px left 0px;
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
</style>
