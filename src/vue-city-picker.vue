<style scoped>

</style>
<template>
	<vue-picker :selected-index="selectedIndex" @select="handleSelect" :data="linkageData"
          ref="picker" :title="title" @change="handleChange" :cancelTxt="cancelTxt" :confirmTxt="confirmTxt"></vue-picker>	
</template>
<script>

	import BScroll from 'better-scroll';
	import vuePicker from './vue-picker.js'
	import {province, city, area} from './city-data.js'

  	const COMPONENT_NAME = 'vue-city-picker'	


	export default{
		name: COMPONENT_NAME,
		components: {
			vuePicker
		},
		props: {
	      	title: {
	        	type: String,
	        	default: '请选择'
	      	},
	      	cancelTxt: {
	        	type: String,
	        	default: '取消'
	      	},
	      	confirmTxt: {
	        	type: String,
	        	default: '确认'
	      	},
	      	selectedIndex: {
		        type: Array,
		        default() {
		          return [0,0,0]
		        }
		    },
		    data: {
		        type: Array,
		        default() {
		          return []
		        }
		    }
	    },
	    computed: {
	      	linkageData: function() {
	      		let resultData = [];

	      		if(this.data.length == 0){

				 	const provinceList = province;

		      		const cityList = city.filter((item) => {
					 	return item.parentId === provinceList[this.tempIndex[0]].value
					})

					const areaList = area.filter((item) => {
						return item.parentId === cityList[this.tempIndex[1]].value
					})

					resultData = [provinceList, cityList, areaList]
	      			
	      		}else{
	      			resultData = this.data;
	      		}
		        return resultData
	      	}
	    },

		data: function(){
			return {
		        tempIndex: [0, 0, 0]
		    }
		},
		watch: {
	        linkageData: function() {
	        	this.$refs.picker.refresh()
	        }
	    },
		methods: {
			show: function() {
	        	this.$refs.picker.show()
	      	},
	      	handleSelect: function() {
	      		console.log(arguments)
		        this.$emit('select', ...arguments)
		    },
	      	handleChange: function(i, newIndex){
	      		if (newIndex !== this.tempIndex[i]) {
		          	for (let j = 2; j > i; j--) {
		            	this.tempIndex.splice(j, 1, 0)
		            	this.$refs.picker.scrollTo(j, 0)
		          	}
		          	this.tempIndex.splice(i, 1, newIndex)
		          	console.log(this.tempIndex)
		        }
	      	}
		}
	}
</script>