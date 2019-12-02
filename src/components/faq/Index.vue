<template>
  <v-container>
    <div class="section section--left-border section--margin-top">
      <div class="text-center question">
        ~ What type of products are available from mediamalcolm? ~
      </div>
      <div class="body-1">
        mediamalcom provides a variety of multi media services, varying from audio to video.

        <br>For more information, send an email from the <router-link to="contact">contact</router-link> page.
      </div>
    </div>
    <div class="section section--right-border">
      <div class="text-center question">
        ~ What programs does mediamalcolm use to edit? ~
      </div>
      <div class="body-1">
        mediamalcolm uses a variety of softwares, but the focus is mainly on using Adobe Premiere Pro and Adobe After Effects for video along with Adobe Audition for sound.      </div>
    </div>
    <div class="section section--left-border">
      <div class="text-center question">
        ~ What are mediamalcolm's qualifications as a multi media professional? ~
      </div>
      <div class="body-1">
        Jordan Malcolm, founder of mediamalcolm graduated from Radio Broadcast, a two year diploma certificate program from Conestoga College.
        He is currently working part-time at 570 News Kitchener as a Board Operator for sports programming and morning talk shows.
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
</style>
