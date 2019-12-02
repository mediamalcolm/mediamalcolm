<template>
  <div>
    <Banner />
  </div>
</template>

<script>
  import Banner from '@/components/home/Banner'
  export default {
    name: 'Home',

    components: {
      Banner,
    },
    data() {
      return {
      }
    }

  }
</script>

<style scoped>
  .blog {
    margin-top: 2em;
  }

  .blog-post {
    margin-bottom: 2em;
  }
</style>
