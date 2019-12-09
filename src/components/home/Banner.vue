<template>
  <div class="banner">
    <video autoplay muted loop class="banner__video" height="100%">
      <source :src="require('@/assets/WebsiteBackgroundcompressed.mp4')" type="video/mp4">
    </video>
    <div class="banner__text banner__header" :style="'font-size:' + bannerHeaderFontSize">
      ALWAYS ON THE GO<br>
    </div>
    <div class="banner__text banner__subheader" :style="'font-size:' + bannerSubHeaderFontSize">
      <i>with mediamalcolm</i>
    </div>
    <div class="banner__text banner__subtext" :style="'width:' + bannerSubTextWidth">
      mediamalcolm is a digital media agency that specializes in producing professional content for our clients – from simple videos for social media, to sound production for high quality voiceovers, audio touch-ups, and even radio commercials – We are always on the go and we want you get a taste of what mediamalcolm is all about.
    </div>
    <v-btn class="banner__text banner__cta" color="primary" :style="'top:' + bannerCTATop" to="contact">
      Schedule a free consultation
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    components: {},
    data () {
      return {
        //
      }
    },
    computed: {
      bannerHeaderFontSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '2rem';
          case 'sm': return '3rem';
          case 'md': return '4rem';
          case 'lg': return '4rem';
          case 'xl': return '4rem';
          default: return '4rem';
        }
      },
      bannerSubHeaderFontSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '1.5rem';
          case 'sm': return '2rem';
          case 'md': return '2.125rem';
          case 'lg': return '2.125rem';
          case 'xl': return '2.125rem';
          default: return '2.125rem';
        }
      },
      bannerSubTextWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '75%';
          case 'sm': return '75%';
          case 'md': return '75%';
          case 'lg': return '50%';
          case 'xl': return '50%';
          default: return '50%';
        }
      },
      bannerCTATop () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '600px;';
          case 'sm': return '500px;';
          case 'md': return '450px;';
          case 'lg': return '450px;';
          case 'xl': return '450px;';
          default: return '450px;';
        }
      },
    }
  }
</script>

<style>
  .banner {
    position: relative;
  }

  .banner__video {
    position: relative;
    z-index: 0;
  }

  .banner__text {
    left: 10%;
    position: absolute;
    z-index: 1;
  }

  .banner__header {
    top: 150px;
    color: white;
  }

  .banner__subheader {
    top: 225px;
    color: #bf1e1e;
  }

  .banner__subtext {
    top: 300px;
    color: white;
    font-size: 1.25rem;
  }

  .banner__cta {
    top: 450px;
  }

</style>
