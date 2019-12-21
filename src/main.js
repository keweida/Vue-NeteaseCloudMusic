import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import '../src/assets/css/fonts/iconfont.css'
import './libs/rem'
import 'vant/lib/index.css'

import { Icon } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Divider } from 'vant'
import { Image } from 'vant'

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Divider)
Vue.use(Image)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
