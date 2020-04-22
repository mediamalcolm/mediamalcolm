<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card color="white" style="padding: 1% 10% 0 10%" flat>
    <v-card-title class="lighten-2" primary-title>
      {{article ? article.title : ''}}
    </v-card-title>

    <div style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center;">
      <div
        v-for="image in article.images"
        :key="image"
        :style="'flex: 0 0' + galleryCols + '; width:' + galleryCols + ';padding:10px;max-height:1000px;max-width:700px'"
      >
        <v-card flat tile>
          <v-img
            :src="require(`@/assets/${image}`)"
            :lazy-src="require(`@/assets/${image}`)"
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
      </div>
    </div>

    <v-card-text>
      {{article ? article.description : ''}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'GalleryLayout',
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
    computed: {
      galleryCols() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '100%';
          case 'sm': return '100%';
          case 'md':
            if (this.article.images.length > 1) {
              return '50%'
            }
            else {
              return '100%';
            }
          case 'lg':
          case 'xl':
            if (this.article.images.length >= 3) {
              return '33.3%'
            }
            else {
              return `${100/this.article.images.length}%`;
            }
          default: return '33.3%';
        }
      }
    }

  }
</script>

<style scoped>

</style>
