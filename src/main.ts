import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


//创建实例
const app = createApp(App)

//element-plus
app.use(ElementPlus).use(router).use(createPinia()).mount("#app");
