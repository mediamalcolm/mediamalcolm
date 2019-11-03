<template>
  <v-container>
    <VideoLayout />
  </v-container>
</template>

<script>
  // TODO: Need to make this flexible to other layouts. Add a prop to determine which layout to use.
  import VideoLayout from '@/components/layout/VideoLayout.vue';
  export default {
    name: 'Article',
    components: {
      VideoLayout,
    },
  }

</script>

<style scoped>

</style>
