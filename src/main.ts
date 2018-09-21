import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, LocaleProvider } from 'ant-design-vue';
import VueI18n from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getLanguage } from './utils/locales';
import messages from './locales/messages';
import 'ant-design-vue/dist/antd.less';

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// TODO ADD ANTDESIGN COMPONENTS HERE
Vue.component(Button.name, Button);
Vue.component(LocaleProvider.name, LocaleProvider);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
