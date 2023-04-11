import * as VeeValidate from "vee-validate";
//自定義規則 defineRule
// import { defineRule } from "@vee-validate/rules";
import * as VeeValidateRules from "@vee-validate/rules";
// import VeeValidateI18n from "@vee-validate/i18n";
import { loadLocaleFromURL } from "@vee-validate/i18n";

import zhTW from "../locale/zh_TW.json";

export default {
  install: async (app) => {
    app.component("VForm", VeeValidate.Form);
    app.component("VField", VeeValidate.Field);
    app.component("ErrorMessage", VeeValidate.ErrorMessage);

    //加入定義規則
    Object.keys(VeeValidateRules).forEach((rule) => {
      VeeValidate.defineRule(rule, VeeValidateRules[rule]);
    });

    // 讀取外部的資源
    // VeeValidateI18n.loadLocaleFromURL(zhTW);

    // 等待 Promise resolve 後再進行 VeeValidate 設定
    const i18nMessages = await loadLocaleFromURL(zhTW);

    VeeValidate.configure({
      generateMessage: VeeValidate.localize(i18nMessages),
      validateOnInput: true,
    });

    app.use(VeeValidate);
  },
};
