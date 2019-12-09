<template>
  <v-container>
    <div class="text-center section__header" style="margin-top: 3rem">~ About mediamalcolm ~</div>

    <div class="section">
      <div class="section__subheader">~ Jordan Malcolm ~</div>
      <div class="section--left-border test">
        <v-img
          :src="require('@/assets/articles/Banner.jpg')"
          contain
          height="30%"
          width="30%"
          style="margin-bottom: 1rem"
        />
      </div>
    </div>

    <div class="section">
      <div class="section__subheader">~ Always On The Go ~</div>
      <div class="section--margin-bottom">
        <div class="paragraph">
          <div class="section--left-border mb-5 mt-5">
            Hello. I am Jordan Malcolm. It’s a pleasure to meet you.
          </div><br>
          <div class="align--right section--right-border mb-5">
            I am a dedicated and hard-working individual who is determined to master many different programs within a computer. Here is what I’m all about.
          </div><br>
          <div class="section--left-border mb-5">
          I am running mediamalcolm as an independent business owner and I offer various types of digital media services. The main focus is to help a business strive with the production of high quality content for their brand.
          </div><br>
          <div class="align--right section--right-border mb-5">
          Although based in Kitchener, Ontario, I am able to produce content for anyone who seeks it.
          </div><br>
          <div class="section--left-border mb-5">
          I have earned my diploma in Radio Broadcast from Conestoga College and currently have plans to earn my diploma in Broadcasting Performance and Digital Media. But it’s my enormous passion for editing and producing content that properly aligns with the client’s brand that differentiates me from other digital media professionals.
          </div><br>
          <div class="align--right section--right-border mb-5">
          Working on your behalf, I will learn about your business/brand, your customers, and your competition (Keeping all sensitive information confidential, of course). Then I will apply that knowledge to produce content that meets your objectives.
          </div><br>
          <div class="section--left-border mb-5">
          You’ll get a positive experience, personalized service and benefits of the high quality equipment mediamalcolm offers. Your project is important to me, and I look forward to developing content for you as your digital media agency.
          </div>
        </div>
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
