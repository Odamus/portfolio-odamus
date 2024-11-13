import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomeView from './views/HomeView.vue'
import Competences from './views/Competences.vue'
import Contact from './views/Contact.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './views/Projets.vue'
import PieddePage from './views/PieddePage.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')