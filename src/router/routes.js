import home from '@/components/home'
import user from '@/components/user'
import upload from '@/components/upload'
import login from '@/components/login'

export default [
    {
      path: '/', 
      redirect: '/home'
    },
    { 
      path: '/home', 
      name: 'home', 
      component: home,
      meta: {
        isLogin: false
      }
    },
    { 
      path: '/user', 
      name: 'user', 
      component: user,
      meta: {
        isLogin: true
      }
    },
    { 
      path: '/upload', 
      name: 'upload', 
      component: upload,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      // meta 中的 isLogin 标志表示是否需要登录
      meta: {
        isLogin: 'loginPage'
      }
    }
]