import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import './styles/base.css';
import './styles/index.css';
new Vue({
  render: (h) => h(App),
}).$mount('#app');
