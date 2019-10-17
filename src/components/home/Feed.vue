<template>
  <v-container>
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
    }),

    computed: {
      articles () {
        return this.$store.getters.articles
      },
    },

  }
</script>
