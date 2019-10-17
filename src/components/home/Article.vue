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
  // TODO: Need to make this more generic so that About.vue can use this component too. Make the showArticle computed,
  // TODO: be a prop instead or use a slot. The close button will also need to change.
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
