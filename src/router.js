import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/display",
			name: "display",
			component: () => import("./view/display.vue")
		},
		{
			path: "/position",
			name: "position",
			component: () => import("./view/position.vue")
		},
		{
			path: "/float",
			name: "float",
			component: () => import("./view/float.vue")
		},
		{
			path: "/flex",
			name: "flex",
			component: () => import("./view/flex.vue")
		},
		{
			path: "/grid",
			name: "grid",
			component: () => import("./view/grid.vue")
		},
		{
			path: "/align",
			name: "align",
			component: () => import("./view/align.vue")
		},
		{
			path: "/margin",
			name: "margin",
			component: () => import("./view/margin.vue")
		}
	]
})
