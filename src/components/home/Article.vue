<template>
  <v-container>
    <VideoLayout />
  </v-container>
</template>

<script>
  // TODO: Need to make this more generic so that About.vue can use this component too. Make the showArticle computed,
  // TODO: be a prop instead or use a slot. The close button will also need to change.
  import VideoLayout from '@/components/layout/VideoLayout.vue';
  export default {
    name: 'Article',
    components: {VideoLayout},
    compoents: {
      VideoLayout,
    },
  }

</script>

<style scoped>

</style>
