import { defineStore } from "pinia";
import axios from "axios";

const { VITE_API_PATH } = import.meta.env;

const userStore = defineStore("user", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
    // isLogin: false,
    // userInfo: null,
    // userId: localStorage.getItem("userId"),
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

          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("userId", res.data.user.id);

          //this.isLogin = true;
          console.log(res.data);
          //location.href = "/VueProjectLR";
          window.history.back();
          setTimeout(() => location.reload(), 100); // 延遲 100ms 刷新頁面

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
    // getUserData() {
    //   axios
    //     .get(`${VITE_API_PATH}/users?id=${this.userId}`, {
    //       Authorization: `Bearer ${this.accessToken}`,
    //     })
    //     .then((res) => {
    //       this.userInfo = res.data[0];
    //       this.isLogin = true;
    //       //console.log("this.userInfo", this.userInfo);
    //     })
    //     .catch(() => {
    //       //console.log(err);
    //     });
    //   return this.userInfo;
    // },
  },
});

export default userStore;
