<template>
  <v-card color="#FFF2CF" style="padding: 25px">
    <iframe
      style="min-height:500px;width:100%"
      frameborder="0"
      :src="article.url"
      allowfullscreen="true"
    ></iframe>
    <!--Description of video-->
    <v-card-text>
      {{ article.description }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        @click="handleClose"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'VideoLayout',
    computed: {
      article () {
        return this.$store.getters.showArticle
      },
    },
    methods: {
      handleClose () {
        this.$store.commit('setShowArticle', null)
      },
    },
  }
</script>

<style scoped>

</style>
