<template>
  <v-app-bar
    app
    flat
    color="black"
    class="nav"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      class="mx-auto py-0"
    >
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5 icon"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="handleIconClick"
        />
        <span style="color:white; cursor: pointer" @click="handleIconClick">MEDIAMALCOLM</span>
        <v-btn text icon href="https://www.facebook.com/mediamalcolm/" color="white">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.instagram.com/mediamalcolm/" color="white">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.twitter.com/mediamalcolm/" color="white">
          <v-icon>mdi-twitter-box</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.youtube.com/channel/UCwLSVBtWxcsKXij5C2XyFoA?view_as=subscriber" color="white">
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          text
          dark
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      handleIconClick() {
        this.$router.push({name: 'home'});
      },
    },
  }
</script>

<style scoped>
  .nav {
    opacity: 0.9;
  }
  .icon:hover {
    cursor: pointer;
  }
</style>
