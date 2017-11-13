import VueCityPicker from './vue-city-picker.vue'

const CityPicker = {
	install: function(Vue, options) {
		Vue.component(VueCityPicker.name, VueCityPicker)
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(CityPicker)
}

export default VueCityPicker