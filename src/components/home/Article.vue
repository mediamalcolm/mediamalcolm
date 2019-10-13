<template>
  <v-container>
    <v-card color="primary" style="padding: 25px">
      <span v-html="article.data" />
      <v-card-actions>
        <v-btn
          color="secondary"
          @click="handleClose"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Article',
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
