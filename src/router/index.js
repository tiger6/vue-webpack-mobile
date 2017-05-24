import Vue from 'vue'
import Router from 'vue-router'
const HomeView = resolve => require(['@/views/home'], resolve)
const DetailView = resolve => require(['@/views/bookDetail'], resolve)
import {
	routerMode
} from '../common/env'

Vue.use(Router)

export default new Router({
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	routes: [{
		path: '/',
		name: 'Home',
		component: HomeView
	}, {
		path: '/Detail/:id',
		name: 'Detail',
		component: DetailView
	}, {
		path: "*",
		redirect: '/'
	}],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})