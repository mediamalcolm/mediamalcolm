<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
    right
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">

            <!--Logo-->
            <v-list-item-avatar style="margin-right: 0">
              <v-img
              :src="require('@/assets/logo.png')"
              class="mr-5 icon"
              contain
              height="48"
              width="48"
              max-width="48"
            />
            </v-list-item-avatar>

            MEDIAMALCOLM
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>

      <v-divider></v-divider>
      <span class="draw__footer">
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
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      },
    },
  }
</script>

<style>
  .draw__footer {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
