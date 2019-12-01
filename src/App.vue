<template>
  <v-app class="main">
    <top-navigation />

    <!--<drawer />-->

    <v-content class="home">
      <router-view />
    </v-content>

    <v-footer
      color="grey"
      height="200px"
    >
      <v-row>
        <v-col cols="6" style="padding-top: 0">
          <ul class="footer__list">
            <li style="display:flex; align-items: center">
              <v-img
                :src="require('@/assets/logo.png')"
                class="mr-5 icon"
                contain
                height="48"
                width="48"
                max-width="48"
              />
              MEDIAMALCOLM
            </li>
            <li>mediamalcolm</li>
            <li>Kitchen, ON</li>
            <li>mediamalcolm@outlook.com</li>
            <li>519.580.3378</li>
          </ul>
        </v-col>
        <v-col cols="6">
          <ul class="footer__list">
            <li>FOLLOW MEDIAMALCOLM</li>
            <li>
              <v-btn text icon href="https://www.facebook.com/mediamalcolm/">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn text icon href="https://www.instagram.com/mediamalcolm/">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn text icon href="https://www.twitter.com/mediamalcolm/">
                <v-icon>mdi-twitter-box</v-icon>
              </v-btn>
              <v-btn text icon href="https://www.youtube.com/channel/UCwLSVBtWxcsKXij5C2XyFoA?view_as=subscriber">
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
  import Drawer from '@/components/navigation/Drawer'
  import TopNavigation from '@/components/navigation/TopNavigation'

  export default {
    name: 'App',
    components: {
      Drawer,
      TopNavigation,
    },
    data () {
      return {
      //
      }
    },
  }
</script>

<style scoped>
  .main {
    background-color: white;
    font-family: "Gill Sans";
  }

  .footer__list {
    list-style: none;
  }
</style>
