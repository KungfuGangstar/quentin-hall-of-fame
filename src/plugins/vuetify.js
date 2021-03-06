import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light:{
                primary: '#5B5C79',
                secondary: '#91BACC',
                accent: '#D8EBF1',
                info: '#5B5C79'

            }
        }
    },
    iconfont: 'mdi'
  });
