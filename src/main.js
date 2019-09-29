import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

const requireComponent = require.context('./components', true, /\.vue$/)

// register global components
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
