import Rate from './src/Rate.vue'

function install(Vue) {
	Vue.component(Rate.name, Rate)
	global.Rate = Rate
}

export {
	Rate
}

// Plugin
const plugin = {
	install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(plugin)
}
