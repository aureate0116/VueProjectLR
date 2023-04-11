import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const { VITE_API_PATH } = import.meta.env;

const userStore = defineStore("user", {
  state: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  actions: {
    login() {
      const router = useRouter();

      axios
        .post(`${VITE_API_PATH}/login`, this.user)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("userId", res.data.user.id);

          router.push({ path: "/" });
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
  },
});

export default userStore;
