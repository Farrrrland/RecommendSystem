import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import router_func from './common/router'
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios;
Vue.prototype.$router_func = router_func;
Vue.config.productionTip = false
Vue.use(ElementUI)

// axios.get('/api/test')
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// 每次页面切换时判断是否需要登录权限
router.beforeEach((to, from, next) => {
  const isLogin = to.meta.isLogin
  // 判断该路由是否需要登录权限
  if (isLogin == true) {
    // 验证登录
    if (window.sessionStorage.getItem('login') == 'true') {
      console.log(window.sessionStorage.getItem('usr'))
      console.log(window.sessionStorage.getItem('login'))
      next()
    } else {
      console.log("未登录：" + window.sessionStorage.getItem('login'))
      next('/login')
    }
  }
  else if (isLogin == 'loginPage') {
    // 避免重复登录
    if (window.sessionStorage.getItem('login') == 'true') {
      alert('您已登录，请勿重复登陆')
      next('/Home')
    } else {
      next()
    }
  }
  else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
