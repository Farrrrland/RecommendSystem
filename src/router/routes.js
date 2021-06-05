import home from '@/components/home'
import user from '@/components/DynamicView/user'
import info from '@/components/DynamicView/info'
import upload from '@/components/upload'
import login from '@/components/login'
import register from '@/components/register'
import testpage from '@/components/testpage'
import changePwd from '@/components/changePwd'
import collection from '@/components/collection'
import recommend from '@/components/recommend'


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
      path: '/user/:uid', 
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
      path: '/register', 
      name: 'register', 
      component: register,
      meta: {
        isLogin: false
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
    },
    { 
      path: '/testpage', 
      name: 'testpage', 
      component: testpage,
      meta: {
        isLogin: false
      }
    },
    { 
      path: '/changePwd', 
      name: 'changePwd', 
      component: changePwd,
      meta: {
        isLogin: true
      }
    },
    {
        path: '/collection',
        name: 'collection',
        component: collection,
        meta: {
            isLogin: true
        }
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: recommend,
        meta: {
            isLogin: true
        }
    },
    { 
      path: '/info/:fid', 
      name: 'info', 
      component: info,
      meta: {
        isLogin: false
      }
    }
]