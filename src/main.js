import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import LoadingComponent from "@/components/LoadingComponent.vue";
import Swal from "sweetalert2";

import "./assets/all.scss";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.component("loading-component", LoadingComponent);
app.component("sweet-alert", Swal);

app.mount("#app");
