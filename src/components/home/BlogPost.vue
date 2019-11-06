<template>
  <v-card color="#FFF2CF" class="section">
    <div class="text-center blog-title display-1">
      ~ {{data.title}} | {{data.date}} ~
    </div>
    <div class="text-center blog-title headline">
      {{data.subtitle}}
    </div>
    <div class="carousel">
      <v-carousel cycle>
        <v-carousel-item
          v-for="(image, $index) in data.image"
          :key="$index"
          :src="require(`@/assets/${image}`)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-card-text class="body-1 text-center">
      <span v-html="data.text"></span>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "BlogPost",
    props: {
      data: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

  .carousel {
    padding: 5% 15% 5% 15%;
  }

  .blog-title {
    padding: 5% 10% 0 10%;
  }
</style>
