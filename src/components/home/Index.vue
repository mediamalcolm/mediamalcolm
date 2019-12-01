<template>
  <div>
    <Banner />
    <!--<v-container class="blog">-->
      <!--<BlogPost v-for="post in data" :data="post" :key="post" class="blog-post"/>-->
    <!--</v-container>-->
  </div>
</template>

<script>
  import Banner from '@/components/home/Banner'
  import BlogPostData from '@/data/blog-post-data.json'
  import BlogPost from '@/components/home/BlogPost'

  export default {
    name: 'Home',

    components: {
      Banner,
      BlogPost,
    },
    data() {
      return {
        data: BlogPostData,
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
