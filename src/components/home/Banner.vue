<template>
  <v-card dark>
    <v-img
      class="grey lighten-2"
      height="90%"
      width="100%"
      :src="require('@/assets/articles/Banner.jpg')"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            <b>MEDIAMALCOLM</b>
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            The art of the Malcolm
          </div>
          <v-btn
            color="primary"
            depressed
            round
            to="/about"
          >
            About Me
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>
