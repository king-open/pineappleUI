import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'

Vue.component('j-button', Button)
Vue.component('j-icon', Icon)

new Vue({
  el: '#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
  }
})
