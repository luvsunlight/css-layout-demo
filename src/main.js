import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { Button, Menu, Icon, Card, Divider } from "ant-design-vue"

Vue.use(Button)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Divider)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
