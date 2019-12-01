<template>
  <v-container>
    <v-row>
      <v-tabs centered color="primary" style="padding: 12px; border-radius: 3px">
        <v-tab @click="handleFilter('')">All</v-tab>
        <v-tab @click="handleFilter('Portfolio')">Portfolio</v-tab>
        <v-tab @click="handleFilter('Travel')">Travel</v-tab>
        <v-tab @click="handleFilter('Video')">Video</v-tab>
        <v-tab @click="handleFilter('Audio')">Audio</v-tab>
        <v-tab @click="handleFilter('Photo')">Photo</v-tab>
      </v-tabs>
    </v-row>
    <v-row>
    <transition-group name="list" tag="feed-card" mode="out-in" style="display: flex;flex-flow: row wrap;margin: 0 auto;position: relative">
      <feed-card
        v-for="(article, i) in articles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
        @click="handleClick"
      />
    </transition-group>
  </v-row>
    <v-dialog v-model="openDialog" width="90%">
      <VideoLayout :article="currentArticle"/>
    </v-dialog>
  </v-container>
</template>

<script>
  import FeedCard from '@/components/portfolio/FeedCard'
  import VideoLayout from "../layout/VideoLayout";

  export default {
    name: 'Feed',

    components: {
      VideoLayout,
      FeedCard,
    },

    data: () => ({
      layout: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12],
      articles: [],
      openDialog: false,
      currentArticle: null,
    }),

    methods: {
      handleFilter(filter) {
        if (filter === '') {
          this.articles = this.$store.getters.articles;

        }
        else {
          this.articles = this.$store.getters.filteredArticles(filter);
        }
      },
      handleClick(article) {
        this.openDialog = true;
        this.currentArticle = article;
      },
    },
    mounted() {
      this.articles = this.$store.getters.articles;
    },

  }
</script>

<style scoped>
  .list-enter-active {
    transition: all .7s;
  }

  .list-leave-active {
    transition: all .1s;
    opacity: 0;
    transform: translateY(0);
    position: absolute;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
  }

  .list-move {
    transition: all .7s ease;
  }
</style>
