import home from '@/components/home'
import user from '@/components/user'
import upload from '@/components/upload'

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
      }
]