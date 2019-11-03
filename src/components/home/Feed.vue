<template>
  <v-container>
    <v-row>
      <v-tabs centered color="primary" background-color="#FFF2CF" style="padding: 12px; border-radius: 3px">
        <v-tab @click="handleFilter('')">All</v-tab>
        <v-tab @click="handleFilter('Portfolio')">Portfolio</v-tab>
        <v-tab @click="handleFilter('Travel')">Travel</v-tab>
        <v-tab @click="handleFilter('Video')">Video</v-tab>
        <v-tab @click="handleFilter('Audio')">Audio</v-tab>
        <v-tab @click="handleFilter('Photo')">Photo</v-tab>

      </v-tabs>
    </v-row>
    <v-row>
      <feed-card
        v-for="(article, i) in articles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>
  </v-container>
</template>

<script>
  import FeedCard from '@/components/home/FeedCard'

  export default {
    name: 'Feed',

    components: {
      FeedCard,
    },

    data: () => ({
      layout: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12],
      articles: [],
    }),

    methods: {
      handleFilter(filter) {
        if (filter === '') {
          this.articles = this.$store.getters.articles;

        }
        else {
          this.articles = this.$store.getters.filteredArticles(filter);
        }
      }
    },
    mounted() {
      this.articles = this.$store.getters.articles;
    },

  }
</script>
