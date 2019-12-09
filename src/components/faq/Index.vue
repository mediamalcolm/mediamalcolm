<template>
  <v-container>
    <div class="section section--left-border section--margin-top">
      <div class="text-center question">
        ~ What type of products are available from mediamalcolm? ~
      </div>
      <div class="paragraph">
        mediamalcom provides a variety of multi media services, varying from audio to video.

        <br>For more information, send an email from the <router-link to="contact">contact</router-link> page.
      </div>
    </div>
    <div class="section section--right-border">
      <div class="text-center question">
        ~ What programs does mediamalcolm use to edit? ~
      </div>
      <div class="paragraph">
        mediamalcolm uses a variety of softwares, but the focus is mainly on using Adobe Premiere Pro and Adobe After Effects for video along with Adobe Audition for sound.      </div>
    </div>
    <div class="section text-center">
      <div>
        ~ Have a question? ~
      </div>
      <v-btn color="primary" to="/contact">Ask me anything.</v-btn>
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
    font-family: inherit;
    margin-top: 5%;
  }

  .section--margin-top {
    margin-top: 5%;
  }

  .section:last-child {
    margin-bottom: 50%;
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

  .question {
    margin-bottom: 20px;
  }

  .paragraph {
    font-size: 1.1rem;
  }
</style>
