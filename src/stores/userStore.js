import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

const { VITE_API_PATH } = import.meta.env;

const userStore = defineStore("user", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
    userId: localStorage.getItem("userId"),
    accessToken: localStorage.getItem("accessToken"),
    isLogin: localStorage.getItem("isLogin") === "true",
    // userInfo: {},
    userInfo: (() => {
      const userInfoString = localStorage.getItem("userInfo");
      return userInfoString ? JSON.parse(userInfoString) : {};
    })(),
    //userInfo: null,
    isLoading: false,
  }),
  actions: {
    login() {
      axios
        .post(`${VITE_API_PATH}/login`, this.user)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("userId", res.data.user.id);
          this.userId = res.data.user.id;
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("userInfo", JSON.stringify(res.data.user));

          this.userInfo = res.data.user;

          router.push({ path: "/" });
          this.isLogin = true;

          this.getUserData(() => {
            this.isLoading = false;
          });
          this.user.email = "";
          this.user.password = "";
        })
        .catch(() => {
          Swal.fire({
            text: `您輸入的帳號密碼有誤`,
            icon: "info",
            iconColor: "#4AA9B6",
            confirmButtonColor: "#4AA9B6",
            confirmButtonText: "確認",
          });
          localStorage.clear();
          this.user.email = "";
          this.user.password = "";
        });
    },
    logout() {
      this.isLogin = false;
      this.userInfo = "";
      router.push("/");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("userId", "");
      localStorage.setItem("isLogin", "false");
      localStorage.setItem("userInfo", "");
    },
    getUserData(callback) {
      this.isLoading = true;

      axios
        .get(`${VITE_API_PATH}/users?id=${this.userId}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .then((res) => {
          this.userInfo = res.data[0];
          if (callback) {
            callback();
          }
        })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});

export default userStore;
