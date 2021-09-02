import { createApp } from 'vue'
import App from './App.vue'
console.log(import.meta.env.VITE_VAR1)
console.log(import.meta.env.VITE_VAR2)
console.log(import.meta.env.VITE_VAR3)

createApp(App).mount('#app')
