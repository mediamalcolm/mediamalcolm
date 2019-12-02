<template>
  <v-container>
    <div class="text-center header" style="margin-top: 3rem">~ About mediamalcolm ~</div>

    <div class="section section--left-border test">
      <v-img
        :src="require('@/assets/articles/Banner.jpg')"
        class="mr-5 icon"
        contain
        height="30%"
        width="30%"
      />
    </div>
    <div class="section section--right-border section--margin-bottom">
      <div class="body-1">
        Jordan is a dedicated and hard-working individual who is determined to master many different programs within a
        computer. When it comes to audio/video production and video editing, he is always up for a challenge.
        He has graduated from the 2-year Radio Broadcast program at Conestoga College and is currently attending
        the Broadcasting Performance and Digital Media program. During his time at Conestoga, he has found a passion
        for editing and producing content.  He is looking forward to learn and perfect his skills in the 1-year post
        grad at Conestoga. He believes his imagination can help him produce anything.
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
    font-family: inherit;
    margin-top: 5%;
  }

  .section:last-child {
    margin-bottom: 50%;
  }

  .section--margin-bottom {
    margin-bottom: 10%;
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

  .header {
    font-size: 2.125rem;
  }
</style>
