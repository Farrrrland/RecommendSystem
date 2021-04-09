import home from '@/components/home'
import user from '@/components/user'
import upload from '@/components/upload'
import login from '@/components/login'

export default [
    {
      path: '/', 
      name: 'home', 
      component: home 
    },
    { 
      path: '/home', 
      name: 'home', 
      component: home 
    },
    { 
      path: '/user', 
      name: 'user', 
      component: user
    },
    { 
      path: '/upload', 
      name: 'upload', 
      component: upload
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      // meta 中的 isLogin 标志表示是否需要登录
      meta: {
        isLogin: false
      }
    }
]