<template>
  <div class="contactBlock">
    <div class="contactContent">
      <h1>Contact?</h1>
      <div class="contactGroup">
        <div class="contactDetails">
          <div class="link" id="github">
            <div>
              <img src="@/components/logos/github.svg" alt="GitHub" />
            </div>
            <div><p>github.com/EoghainOB</p></div>
          </div>
          <div class="link" id="linkedin">
            <div>
              <img src="@/components/logos/linkedin.svg" alt="LinkedIn" />
            </div>
            <div><p>linkedin.com/in/eoghain-o-briain</p></div>
          </div>
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
.contactContent {
  padding-top: 20px;
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
@media only screen and (min-width: 768px) {
  .contactDetails {
    display: flex;
  }
  .link {
    padding-right: 50px;
  }
  #github {
    border-right: solid 1px #404040;
    border-bottom: none;
  }
  #linkedin {
    padding-left: 30px;
  }
}
</style>
