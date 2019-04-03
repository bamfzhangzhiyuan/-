
import Home from "../pages/Home/Home.vue"

import Discern from "../pages/discern/index.vue"

import Personal from "../pages/personal/index.vue"

import Shopcar from "../pages/shopcar/index.vue"

import Things from "../pages/things/index.vue"

import Notfound from "../pages/Notfound/index.vue"

import ThingsMain from "../pages/things/main.vue"

import ThingsJudge from "../pages/things/judge.vue"

import First from "../pages/things/firstType.vue"

import Second from "../pages/things/secondType.vue"

import Third from "../pages/things/thirdType.vue"

import Search from "../pages/search/search.vue"
export default [
  {
    path:"/home",
    component:Home,
    meta:{
      isshow:true
    }
  },
  {
    path:"/discern",
    component:Discern,
    meta:{
      isshow:true
    }
  },
  {
    path:"/personal",
    component:Personal,
  },
  {
    path:"/shopcar",
    component:Shopcar,
    meta:{
      isshow:true
    }
  },
  {
    path:"/things",
    component:Things,
    meta:{
      isshow:true
    },
    children:[
      {
        path:"/things/main",
        component:ThingsMain,
        meta:{
          isshow:true
        },
      },
      {
        path:"/things/judge",
        component:ThingsJudge,
        meta:{
          isshow:true
        },
        children:[
          {
            path:"/things/judge/first",
            component:First,
            meta:{
              isshow:true
            },
          },
          {
            path:"/things/judge/second",
            component:Second,
            meta:{
              isshow:true
            },
          },
          {
            path:"/things/judge/third",
            component:Third,
            meta:{
              isshow:true
            },
          },
          {
            path:"",
            redirect:"/things/judge/first"
          }
        ]
      },
      {
        path:"",
        redirect:"/things/main"
      }
    ]
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"*",
    component:Home
  }
]
