<template>
  <v-app-bar
    app
    flat
    color="black"
    class="nav"
  >
    <v-container
      class="mx-auto py-0"
    >
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="icon"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="handleIconClick"
        />

        <span style="color:white; cursor: pointer" @click="handleIconClick">mediamalcolm</span>

        <!--Social media links-->
        <span class="hidden-sm-and-down">
        <v-btn text icon href="https://www.facebook.com/mediamalcolm/" color="white" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.instagram.com/mediamalcolm/" color="white" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.twitter.com/mediamalcolm/" color="white" target="_blank">
          <v-icon>mdi-twitter-box</v-icon>
        </v-btn>
        <v-btn text icon href="https://www.youtube.com/channel/UCwLSVBtWxcsKXij5C2XyFoA?view_as=subscriber" color="white" target="_blank">
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        </span>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          :text="link.text !== 'Contact'"
          dark
          :color="link.text === 'Contact' ? 'primary' : null"
          style="margin: 5px"
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-container>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
      color="white"
    />
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
