import { createApp } from "vue";
import App from "./components/App.vue";
import TheHeader from "./components/TheHeader";
import './theme.css';


// App -> AppNews -> AppNewsList
// App -> AppNewsList

const app = createApp(App);

// global
app.component("the-header", TheHeader);


app.mount("#app");
