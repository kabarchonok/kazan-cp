import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#30cd97',
        secondary: '#b0bec5',
        accent: '#35b2a9',
        error: '#b71c1c',
      },
    },
  },
});
