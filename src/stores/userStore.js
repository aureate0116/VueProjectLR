import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env;

const userStore = defineStore("user", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
    //route: null,
  }),
  actions: {
    login() {
      axios
        .post(`${VITE_API_PATH}/login`, this.user)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("userId", res.data.user.id);

          //location.href = "/VueProjectLR";
          window.location.href = "/";
          //window.history.back();
          setTimeout(() => location.reload(), 100); // 延遲 100ms 刷新頁面
        })
        .catch((err) => {
          Swal.fire({
            text: `您輸入的帳號密碼有誤`,
            icon: "info",
            iconColor: "#4AA9B6",
            confirmButtonColor: "#4AA9B6",
            confirmButtonText: "確認",
          });
          localStorage.clear();
          console.log(err);
          this.user.email = "";
          this.user.password = "";
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
