import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import LoadingComponent from "@/components/LoadingComponent.vue";
// import TimeStamp from "@/components/TimeStamp.vue";

// import resourcesStore from "@/stores/resourcesStore";

import "./assets/all.scss";

const app = createApp(App);

// app.use(Bootstrap);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
// app.use(resourcesStore);
app.component("loading-component", LoadingComponent);

app.mount("#app");
