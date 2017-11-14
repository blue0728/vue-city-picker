
## Install
```
npm install vue-city-bspicker --save

```

## Info

`vue-city-bspicker` 使用了 `[vue-bspicker]`(https://github.com/blue0728/vue-picker)  `better-scroll`  [@ustbhuangyi](https://github.com/ustbhuangyi)，非常感谢

## API

`vue-city-bspicker`  支持自定义 `city-data` 数据

```js
<vue-city-picker :data="data" ref="picker" @select="select"></vue-city-picker>

var province = [{
  value: 110000,
  text: '北京市自定义',
  parentId: 0
}]

var city = [{
  value: 110100,
  text: '市辖区',
  parentId: 110000
}]

var area = [{
  value: 110101,
  text: '东城区',
  parentId: 110100
}]

var data = [province, city, area]

```


## Usage

```js

    <button @click="show">点击</button>
    <vue-city-picker ref="picker" @select="select"></vue-city-picker>

import vueCityPicker from 'vue-city-bspicker'

var app = new Vue({
  el: '#app',
  components: {
    vueCityPicker
  },
  methods: {
    show: function(){
        this.$refs['picker'].show();
    },
    select: function(){
        console.log(arguments)
    }
  },
  data: function(){
    return {
    } 
  }
})
```

## demo

`/demo/index.html`
