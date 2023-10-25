<template>
  <div class="contactBlock">
    <div class="contacContent">
      <h1>Contact?</h1>
      <div class="contactDetails">
        <div class="link" id="github">
          <div>
            <img src="@/components/logos/github.svg" alt="GitHub" />
          </div>
          <div><p>github.com/EoghainOB</p></div>
        </div>
        <div class="link">
          <div>
            <img src="@/components/logos/linkedin.svg" alt="LinkedIn" />
          </div>
          <div><p>linkedin.com/in/eoghain-o-briain</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
h1,
p {
  color: white;
  margin: 0px;
}
.contactBlock {
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 30px;
}
.contacContent {
  max-width: 1100px;
  padding-top: 20px;
  margin: auto;
}
.contactDetails {
  width: 100%;
}
.link {
  display: flex;
  align-items: center;
  padding: 5px 0px;
}
.contactDetails img {
  height: 50px;
  margin: 0px 10px;
}

#github {
  border-bottom: solid 1px #404040;
}
</style>
