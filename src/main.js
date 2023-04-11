import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import VeeValidatePlugin from "./plugins/VeeValidatePlugin";

import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import Swal from "sweetalert2";

import "./assets/all.scss";
import "@/assets/utils/_loading.scss";

/********vee-validate******** */
// import * as VeeValidate from "vee-validate";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, length, min, numeric } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "./locale/zh_TW.json";

defineRule("required", required);
defineRule("email", email);
defineRule("length", length);
defineRule("min", min);
defineRule("numeric", numeric); // 須為數字
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
  validateOnInput: true,
});
setLocale("zh_TW");

/********vee-validate******** */

const app = createApp(App);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
// app.use(VeeValidatePlugin);

app.component("sweet-alert", Swal);
app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
