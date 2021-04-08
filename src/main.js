import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import router_func from './common/router'

Vue.prototype.$axios = axios;
Vue.prototype.$router_func = router_func;
Vue.config.productionTip = false

// axios.get('/api/test')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
