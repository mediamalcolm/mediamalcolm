<template>
  <div>
    <Banner />
    <Feed />
  </div>
</template>

<script>
  import Feed from '@/components/home/Feed'
  import Banner from '@/components/home/Banner'

  export default {
    name: 'Home',

    components: {
      Feed,
      Banner,
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
