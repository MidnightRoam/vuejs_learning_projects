import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "@/translatePlugin";



const app = createApp(App)

const ru = {
    app: {
        title: 'Как работают плагины во Vue?',
        button: 'Переключить язык'
    }
}

const en = {
    app: {
        title: 'How plugins works in Vue?',
        button: 'Switch language'
    }
}

app.use(translatePlugin, {ru, en})

app.mount('#app')
