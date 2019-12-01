<template>
  <v-container>
    <div class="section section--left-border section--margin-top">
      <div class="text-center question">
        ~ What type of products are available from mediamalcolm? ~
      </div>
      <div class="body-1">
        Mediamalcom provides a variety of multi media services, varying from audio to video.

        <br>For more information, send an email from the <router-link to="contact">contact</router-link> page.
      </div>
    </div>
    <div class="section section--right-border">
      <div class="text-center question">
        ~ What programs do you use to edit media? ~
      </div>
      <div class="body-1">
        I use a variety of softwares, but I mainly focus on using Adobe premiere, Adobe After Effects and, Adobe Audition for sound.
      </div>
    </div>
    <div class="section section--left-border">
      <div class="text-center question">
        ~ What are your qualifications as a multi media professional? ~
      </div>
      <div class="body-1">
        I have graduated from Radio Broadcast, a 2 year diploma certificate program from Conestoga College and am currently continuing education in a 1 year post grad certificate for Broadcasting performance and Digital Media.

        Additionally, I am working part-time at 570 News Kitchener as a Board Operator.
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style scoped>
  .section {
    margin-bottom: 10%;
    font-size: 2.125rem;
  }

  .section--margin-top {
    margin-top: 5%;
  }

  .question {
    margin-bottom: 20px;
  }

  .section {
    font-family: inherit;
    margin-top: 5%;
  }

  .section--left-border {
    border-left: 2px solid #bf1e1e;
    padding-left: 20px;
  }

  .section--right-border {
    border-right: 2px solid #bf1e1e;
    padding-right: 20px;
    text-align: right;
  }
</style>
