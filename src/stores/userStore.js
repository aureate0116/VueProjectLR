import { defineStore } from "pinia";
import axios from "axios";
// import VueAxios from "vue-axios";
const { VITE_API_PATH } = import.meta.env;

const userStore = defineStore("user", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
    isLogin: false,
  }),
  actions: {
    login() {
      axios
        .post(`${VITE_API_PATH}/login`, this.user)
        .then((res) => {
          //紀錄 token
          //   const { accessToken } = res.data;
          //   const now = new Date();
          //   const expiresIn = 60 * 60; //設定1小時過期
          //   const expirationDate = new Date(now.getTime() + expiresIn * 1000);

          //   //紀錄 cookie
          //   document.cookie = `userToken=${accessToken};expires=${expirationDate}; path=/`;

          localStorage.setItem("accessToken", `${res.data.accessToken}`);
          localStorage.setItem("userEmail", res.data.user.email);

          this.isLogin = true;
          console.log(res);
          location.href = "/";
          //this.$router.go(-1);
        })
        .catch((err) => {
          alert("您輸入的帳號密碼有誤");
          localStorage.clear();
          console.log(err);
          this.user.email = "";
          this.user.password = "";
          //   this.userEmail = "";
        });
    },
  },
});

export default userStore;
