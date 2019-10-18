<template>
  <div>
    <transition name="fade">
      <div v-if="showArticle === null">
        <banner />
        <feed />
      </div>
    </transition>
    <!--TODO:  Make this into a separate page instead.-->
    <transition name="fade">
      <div v-if="showArticle !== null">
        <Article />
      </div>
    </transition>
  </div>
</template>

<script>
  import Feed from '@/components/home/Feed'
  import Banner from '@/components/home/Banner'
  import Article from '@/components/home/Article'

  export default {
    name: 'Home',

    components: {
      Feed,
      Banner,
      Article,
    },
    computed: {
      showArticle () {
        return this.$store.getters.showArticle
      },
    },

  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-leave, .fade-enter-to {
    opacity: 1;
  }
</style>
