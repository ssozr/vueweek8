import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import AllRules from '@vee-validate/rules';

import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import Swiper from 'swiper'
import * as VeeValidate from 'vee-validate';

VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');

import './assets/all.scss'
Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
  });


const app = createApp(App)
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
