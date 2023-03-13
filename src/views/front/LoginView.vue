<script>
// const { VITE_API_PATH } = import.meta.env;

import { mapState, mapActions } from "pinia";
import userStore from "../../stores/userStore";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["login"]),
  },
  watch: {
    user() {
      console.log("user", this.user);
    },
  },
  mounted() {
    // console.log("user", this.user);
  },
};
</script>

<template>
  <div ref="LoginView" class="login container p-5 p-lg-8 p-md-4">
    <form action="./login.html" method="post">
      <h3 class="fs-7 my-3">會員登入</h3>
      <div class="form-floating mb-3">
        <input
          type="email"
          id="loginAccount"
          placeholder="您的帳號"
          class="form-control"
          v-model="user.email"
          name="email"
        />
        <span class="message account fs-8 text-danger"></span>
        <label for="loginAccount" class="text-gray">您的帳號(電子信箱)</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          id="loginPw"
          placeholder="密碼"
          class="form-control"
          v-model="user.password"
          name="password"
        />
        <span class="message password fs-8 text-danger"></span>
        <label for="loginPw" class="text-gray">密碼</label>
      </div>

      <div class="mt-6">
        <button
          type="submit"
          @click.prevent="login"
          class="btn btn-primary text-white"
        >
          登入
        </button>
        <!-- <p class="fs-8 text-gray my-3">
          <a href="#"> 忘記密碼 </a> | <a href="./signup.html"> 免費註冊</a>
        </p> -->
      </div>
    </form>
  </div>
</template>
