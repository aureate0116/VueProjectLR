import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import Bootstrap from "bootstrap";
import axios from "axios";
import VueAxios from "vue-axios";

// import VueLoading from "vue3-loading-overlay";
// import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import "./assets/all.scss";

const app = createApp(App);

// app.use(Bootstrap);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
// app.component("VueLoading", VueLoading);

app.mount("#app");
