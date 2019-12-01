<template>
  <v-app class="main">
    <top-navigation />

    <!--<drawer />-->

    <v-content id="home">
      <router-view />
    </v-content>
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
  }
</style>
