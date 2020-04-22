<template>
  <v-card color="white" style="padding: 1% 10% 0 10%" flat>
    <v-card-title class="lighten-2" primary-title>
      {{article ? article.title : ''}}
    </v-card-title>

    <iframe
      style="min-height:500px;width:100%"
      frameborder="0"
      :src="article ? article.url : ''"
      allowfullscreen="true"
    ></iframe>

    <v-card-text>
      {{article ? article.description : ''}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'VideoLayout',
    props: {
      article: {
        type: Object,
        required: true,
      },
    },

  }
</script>

<style scoped>

</style>
