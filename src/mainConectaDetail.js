import Vue from 'vue'
import components from './components/02_conectaDetail';

//
// Stylesheet
//
import './styles/main.scss'


//
// Global Components
//
components.forEach((component) => {
  Vue.component(component.name, component)
})


//
// Plugins
//

//
// Start
//
const rootDetail = new Vue({
  el: '#vue-containerDetail'
})

console.log("vue-container detail just built")
