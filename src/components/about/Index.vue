<template>
  <v-container>
    <div class="text-center section__header" style="margin-top: 3rem">~ About mediamalcolm ~</div>

    <div class="section">
      <div class="section__subheader">~ Jordan Malcolm ~</div>
      <div class="section--left-border test">
        <v-img
          :src="require('@/assets/Banner.jpg')"
          contain
          height="30%"
          width="30%"
          style="margin-bottom: 1rem"
        />
      </div>
    </div>

    <div class="section">
      <div class="section__subheader">~ Always On The Go ~</div>
        <div class="paragraph">
          <div class="section--left-border mb-5 mt-5">
            Hello. I am Jordan Malcolm. It’s a pleasure to meet you!
          </div><br>
          <div class="align--right section--right-border mb-5">
            I am a dedicated and hard-working individual who is determined to help your business or brand stand out.
          </div><br>
          <div class="section--left-border mb-5">
            Currently, I am based in Kitchener, Ontario, however, I can produce content for anyone who seeks it.
          </div><br>
          <div class="section__subheader">At mediamalcolm, I offer various types of digital media services:</div>
          <div class="section--left-border mb-5 mt-5">
            Short Videos for Promotion
          </div><br>
          <div class="align--right section--right-border mb-5">
            Typography Videos for Business
          </div><br>
          <div class="section--left-border mb-5">
            Music Videos for Entertainment
          </div><br>
          <div class="align--right section--right-border mb-5">
            Crisp Audio for Radio
          </div><br>

          <div class="section--left-border mb-5">
            Working on your behalf, I will learn about your business/brand, your customers, and your competition (Keeping all sensitive information confidential, of course). Then I will apply that knowledge to produce content that meets your objectives.
          </div><br>
          <div class="align--right section--right-border mb-5">
            I have earned my diplomas in Radio Broadcast and Broadcasting Performance and Digital Media from Conestoga College. All my work is done with professional level equipment. I consider myself an editing master and will format all work to the highest standard.
          </div><br>
          <div class="section--left-border mb-5">
            Your project is important to me. I look forward to helping with your project!
          </div><br>
        </div>
    </div>

    <div class="section text-center">
      <div class="section__header" style="margin-top: 3rem">~ Need a video? ~</div>
      <v-btn color="primary" to="/contact">Tell me about your project idea now</v-btn>
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
  }

  .section__header {
    font-size: 2.125rem;
  }

  .section__subheader {
    font-size: 2rem;
  }

  .paragraph {
    font-size: 1.1rem;
  }

  .align--right {
    text-align: right;
  }
</style>
