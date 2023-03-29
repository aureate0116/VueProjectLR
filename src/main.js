import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
// import LoadingComponent from "@/components/LoadingComponent.vue";
// import StarComponent from "@/components/StarComponent.vue";

import Swal from "sweetalert2";

import "./assets/all.scss";
import "@/assets/utils/_loading.scss";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
// app.component("loading-component", LoadingComponent);
// app.component("star-component", StarComponent);

app.component("sweet-alert", Swal);

app.mount("#app");
