import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

const opts = {};

export default new Vuetify({
    icons: {
      iconfont: 'md', // Utiliser Material Design Icons
    },
  });
