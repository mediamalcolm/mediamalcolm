<template>
  <v-container>
    <v-card flat style="margin: 3rem 0 5rem 0">
      <v-card-title class="display-2"><i>WORK</i></v-card-title>
      <v-card-text style="border-left: 2px solid #bf1e1e; margin-left: 1rem">
        See all of our past exercises along with all of our recent projects for our clients.
      </v-card-text>
    </v-card>
    <v-row>
        <v-tabs background-color="transparent" centered class="mb-5">
          <v-tab
            v-for="category in categories"
            :key="category"
            @click="category === 'All' ? handleFilter('') : handleFilter(category)"
          >
            {{category}}
          </v-tab>
        </v-tabs>
    </v-row>

    <v-row>
      <transition-group
        tag="v-row"
        name="fade-transition"
        style="display: flex; flex-wrap: wrap; width: 100%"
      >
        <div
          v-for="article in articles"
          :key="article.title"
          class="feed-card__wrapper"
          :style="'flex: 0 0' + feedCardSize + '; width:' + feedCardSize"
        >
          <feed-card
            :value="article"
            @click="handleClick"
          />

        </div>
      </transition-group>

      <v-dialog v-model="openDialog" width="90%" @click:outside="handleDialogClose">
        <v-card>
          <v-btn icon text @click="handleDialogClose">
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
          <VideoLayout v-if="currentArticle.layout === 'video'" :article="currentArticle"/>
          <GalleryLayout v-if="currentArticle.layout === 'gallery'" :article="currentArticle"/>
          <AudioLayout v-if="currentArticle.layout === 'audio'" :article="currentArticle"/>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  import FeedCard from '@/components/work/FeedCard'
  import VideoLayout from "../layout/VideoLayout";
  import GalleryLayout from '../layout/GalleryLayout'
  import AudioLayout from '../layout/AudioLayout'


  export default {
    name: 'Feed',

    components: {
      VideoLayout,
      FeedCard,
      GalleryLayout,
      AudioLayout,
    },

    data: () => ({
      categories: ['All', 'Video', 'Audio', 'Photo', 'Portfolio'],
      articles: [],
      openDialog: false,
      currentArticle: { layout: null },
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
      handleDialogClose() {
        this.openDialog = false;
        this.currentArticle = { layout: null };
      }
    },
    computed: {
      feedCardSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '100%';
          case 'sm': return '100%';
          case 'md': return '50%';
          case 'lg': return '33.3%';
          case 'xl': return '33.3%';
          default: return '33.3%';
        }
      }
    },
    mounted() {
      this.articles = this.$store.getters.articles;
    },

  }
</script>

<style scoped>
  .feed-card__wrapper {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
    padding: 20px
  }

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
</style>
