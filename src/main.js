import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import shitu1 from './views/shitu1.vue'
import shitu2 from './views/shitu2.vue'
import shitu3 from './views/shitu3.vue'
import shitu4 from './views/shitu4.vue'
import shitu5 from './views/shitu5.vue'
import shitu6 from './views/shitu6.vue'
import shitu2·1 from './views/shitu2·1'
const shitu7 = () => import('./views/shitu7.vue')







const router = new VueRouter({
  routes:[{
    path:'/shitu1.vue',
    component:shitu1
  },{
    path:'/shitu2.vue',
    component:shitu2
  },{
    path:'/shitu3.vue',
    component:shitu3
  },{
    path:'/shitu4.vue',
    component:shitu4
  },{
    path:'/shitu5.vue',
    component:shitu5
  },{
    path:'/shitu6.vue',
    component:shitu6
  },{
    path:'/shitu2·1',
    component:shitu2·1
  },{
    path:'/shitu7.vue',
    component:shitu7
  }]
})



Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
