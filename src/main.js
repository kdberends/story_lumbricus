import Vue from 'vue'
import App from "./App.vue"
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/bootstrap-vue'
/*
import Vuent from "vuent"
import 'vuent/dist/vuent.css'
*/
//import Vuetify from './plugins/vuetify'



//Vue.use(Vuetify)




/*
import * as math from 'mathjs'
let a = math.dotPow(4, [0, 1, 2])
let b = math.dotPow(2, [0, 1, 2])
let c = [1, 0.125, 0]
console.log(a)
console.log(b)

console.log(math.sum(math.dotMultiply(c,math.dotMultiply(a, b))))

console.log('koen')
*/
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
	//render: h => h(App)
})//.$mount("#app")

