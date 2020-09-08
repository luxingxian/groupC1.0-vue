import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import index from '@/components/index'
import add_perTraveller from '@/components/add_perTraveller'
import booking from '@/components/booking'
import comment from '@/components/comment'
import edit_perTraveller from '@/components/edit_perTraveller'
import List_houses from '@/components/List_houses'
import login from '@/components/login'
import myCollect from '@/components/myCollect'
import personalCenter from '@/components/personalCenter'
import perTraveller from '@/components/perTraveller'
import realName from '@/components/realName'
import rili from '@/components/rili'
import serachHotel from '@/components/serachHotel'
import commentList from '@/components/commentList'
import refundDetail from '@/components/refundDetail'
import myOrderList from '@/components/myOrderList'
import submitOrder from '@/components/submitOrder'
import order_detail from '@/components/order_detail'

Vue.use(Router)
Vue.use(VueAxios,axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/add_perTraveller',
      name: 'add_perTraveller',
      component: add_perTraveller
    },
    {
      path: '/booking',
      name: 'booking',
      component: booking
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/commentList',
      name: 'commentList',
      component: commentList
    },
    {
      path: '/edit_perTraveller',
      name: 'edit_perTraveller',
      component: edit_perTraveller
    },
    {
      path: '/List_houses',
      name: 'List_houses',
      component: List_houses
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myCollect',
      name: 'myCollect',
      component: myCollect
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/perTraveller',
      name: 'perTraveller',
      component: perTraveller
    },
    {
      path: '/realName',
      name: 'realName',
      component: realName
    },
    {
      path: '/rili',
      name: 'rili',
      component: rili
    },
    {
      path: '/serachHotel',
      name: 'serachHotel',
      component: serachHotel
    },
    {
      path: '/refundDetail',
      name: 'refundDetail',
      component: refundDetail
    },{
      path: '/myOrderList',
      name: 'myOrderList',
      component: myOrderList
    },{
      path: '/submitOrder',
      name: 'submitOrder',
      component: submitOrder
    },{
    	 path: '/order_detail',
      name: 'order_detail',
      component: order_detail
    }
  ]
})
