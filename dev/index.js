let rate = require('../src/Rate.vue')

module.exports = {
	component: rate,
	install(Vue) {
		Vue.component(rate.default.name, rate.default)
	}
}
