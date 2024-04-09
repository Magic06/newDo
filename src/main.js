import Vue from 'vue'
import App from './App.vue'
//三级联动的组件---全局组件
import TypeNav from '@/components/TypeNav';
import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import "swiper/css/swiper.css";
import Carsousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button, MessageBox } from 'element-ui';
//统一引入
import * as API from '@/api';

import VueLazyload from 'vue-lazyload';
import lazyload from '@/assets/1.gif';

Vue.use(VueLazyload, {
  loading: lazyload
});
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(Button.name, Button);


Vue.config.productionTip = false

import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
});

import "@/plugins/validate";
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //
  //
  router,
  store
}).$mount('#app')
