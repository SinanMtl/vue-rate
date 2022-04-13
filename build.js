import Rate from './src/Rate.vue'

function install(Vue, options = {}) {
	Vue.component(options.name || Rate.name || "rate", Rate)
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
