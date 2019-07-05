import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/display",
			name: "display",
			component: () => import("./view/display.vue")
		}
	]
})
