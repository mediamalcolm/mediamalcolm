import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#BF1E1E',
        secondary: '#D6AE3C',
      },
    },
    iconfont: 'mdi',
  },
}

export default new Vuetify(opts)
