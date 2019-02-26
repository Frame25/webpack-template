import './index.sass'
import comp from '../../components/comp'
import Vue from 'vue'

document.getElementById('comp').appendChild((new (Vue.extend(comp))).$mount().$el)