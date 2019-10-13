import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#CBAA5C',
        secondary: '#083759',
      },
    },
    iconfont: 'mdi',
  },
}

export default new Vuetify(opts)
