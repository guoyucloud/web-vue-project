import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import manager from './views/manager-index'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
	return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/welcome',
			name: 'welcome',
			component: () => import('./views/welcome.vue'),
			meta: {
				title: '欢迎页',
				notCache: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/login.vue'),
			meta: {
				title: '登录',
				notCache: true
			}
		},
		{
			path: '/',
			component: index,
			redirect: '/home',
			meta: {
				title: '框架',
				notCache: true
			},
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import('./views/home/home.vue'),
					meta: {
						title: '首页',
						notCache: true
					}
				},
				{
					path: '/artic_list',
					name: 'artic_list',
					component: () => import('./views/artic-list/artic-list.vue'),
					meta: {
						title: '文章列表',
						notCache: true
					}
				},
				{
					path: '/artic_content',
					name: 'artic_content',
					component: () => import('./views/artic-content/artic-content.vue'),
					meta: {
						title: '文章内容',
						notCache: true
					}
				},
				{
					path: '/resume',
					name: 'resume',
					component: () => import('./views/resume/resume.vue'),
					meta: {
						title: '个人简历',
						notCache: true
					}
				}
			]
		},
		{
			path: '/manager',
			component: manager,
			meta: {
				title: '管理控制台框架',
				notCache: true
			},
			children: [
				{
					path: '/manager',
					name: 'views_manager_user',
					component: () => import('./views/views-manager-user/views-manager-user.vue'),
					meta: {
						title: '用户管理',
						notCache: true
					}
				},
				{
					path: '/manager/add_artic',
					name: 'views_manager_add_artic',
					component: () => import('./views/views-manager-add-artic/views-manager-add-artic.vue'),
					meta: {
						title: '新建文章',
						notCache: true
					}
				},
				{
					path: '/manager/artic_list',
					name: 'views_manager_artic_list',
					component: () => import('./views/views-manager-artic-list/views-manager-artic-list.vue'),
					meta: {
						title: '文章管理',
						notCache: true
					}
				},
				{
					path: '/manager/data_statistics',
					name: 'views_manager_data_statistics',
					component: () => import('./views/views-manager-data-statistics/views-manager-data-statistics.vue'),
					meta: {
						title: '数据统计',
						notCache: true
					}
				}
			]
		}
	]
})
