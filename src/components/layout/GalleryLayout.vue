<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card color="white" style="padding: 0 25px 0 25px" flat>
    <v-card-title class="lighten-2" primary-title>
      {{article ? article.title : ''}}
    </v-card-title>

    <v-container fluid>
      <v-row>
        <v-col
          v-for="image in article.images"
          :key="image"
          class="d-flex child-flex"
          cols="4"
        >
          <v-card flat tile class="d-flex">
            <v-img
              :src="require(`@/assets/articles/${image}`)"
              :lazy-src="require(`@/assets/articles/${image}`)"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
