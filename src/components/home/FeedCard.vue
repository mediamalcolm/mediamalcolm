<template>
  <v-col :cols="size" :class="classes">
    <v-card
      :height="value.prominent ? 450 : 350"
      color="#FFF2CF"
      dark
      style="padding:5px"
      @click="handleClick"
    >
      <v-img :src="value.cardImage" height="100%" gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
        <v-row v-if="!value.prominent" class="fill-height text-right ma-0">
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ value.date ? value.date : '' }}
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      classes () {
        return {
          'md6': this.size === 2,
          'md4': this.size === 3,
        }
      },
    },
    methods: {
      handleClick () {
        // this.$store.commit('setArticle', this.value);
        // this.$router.push({ name:'article', params: { id: this.value.title }});
        this.$emit('click', this.value);
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
