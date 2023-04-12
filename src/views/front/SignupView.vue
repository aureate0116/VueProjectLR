<script>
const { VITE_API_PATH } = import.meta.env;
import { defineRule } from "vee-validate";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      usersData: [],
      lastName: "",
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  watch: {},
  methods: {
    getUserList() {
      this.$http
        .get(`${VITE_API_PATH}/users`)
        .then((res) => {
          this.usersData = res.data;
        })
        .catch(() => {});
    },
    signUp() {
      this.$http
        .post(`${VITE_API_PATH}/users`, {
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.email,
          password: this.password,
          role: "user",
          title: "",
          experiences: "",
          links: { websiteUrl: "" },
        })
        .then(() => {
          //console.log(res);
          Swal.fire({
            text: `註冊成功`,
            icon: "success",
            iconColor: "#4AA9B6",
            showCancelButton: true,
            confirmButtonColor: "#4AA9B6",
            cancelButtonColor: "#F8B436",
            confirmButtonText: "立即登入",
            cancelButtonText: "回首頁",
            allowOutsideClick: false,
            backdrop: `rgba(122, 122, 122, 0.6)  `,
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/login");
            } else {
              window.location.href = "/";
            }
          });
        });
    },
  },
  created() {
    defineRule("isEmailExist", (value) => {
      const hasTheEmail = this.usersData.some((user) => user.email === value);
      if (hasTheEmail) {
        return "此信箱已註冊過";
      } else {
        return true;
      }
    });
    defineRule("confirmPw", (value) => {
      if (value === "" || value !== this.password) {
        return "輸入密碼不一致";
      }
      return true;
    });
  },
  mounted() {
    this.getUserList();
  },
};
</script>

<template>
  <div class="signup container p-5 p-lg-8 p-md-4">
    <v-form class="signUpForm" v-slot="{ errors }" @submit="signUp()">
      <h3 class="my-3 text-center text-primary fw-bold">會員註冊</h3>
      <div class="form-floating mb-3">
        <v-field
          type="text"
          id="signupLastName"
          placeholder="姓"
          class="form-control signupInput"
          :class="{ 'is-invalid': errors['姓'] }"
          name="姓"
          rules="required"
          v-model="lastName"
        ></v-field>
        <error-message name="姓" class="invalid-feedback"></error-message>

        <!-- <span class="message lastname fs-8 text-danger"></span> -->
        <label for="signupLastName" class="text-gray">姓</label>
      </div>

      <div class="form-floating mb-3">
        <v-field
          type="text"
          id="signupfirstName"
          placeholder="名字"
          class="form-control signupInput"
          :class="{ 'is-invalid': errors['名字'] }"
          rules="required"
          name="名字"
          v-model="firstName"
        ></v-field>
        <error-message name="名字" class="invalid-feedback"></error-message>
        <label for="signupfirstName" class="text-gray">名字</label>
      </div>

      <div class="form-floating mb-3">
        <v-field
          type="email"
          id="signupMail"
          placeholder="電子信箱"
          class="form-control signupInput"
          :class="{ 'is-invalid': errors['信箱'] }"
          rules="email|required|isEmailExist"
          name="信箱"
          v-model="email"
        ></v-field>
        <error-message name="信箱" class="invalid-feedback"></error-message>
        <label for="signupMail" class="text-gray">電子信箱</label>
      </div>
      <div class="form-floating mb-3">
        <v-field
          type="password"
          id="signupPw"
          placeholder="密碼"
          class="form-control signupInput"
          :class="{ 'is-invalid': errors['密碼'] }"
          :rules="{
            required: true,
            min: 6,
          }"
          name="密碼"
          v-model="password"
        ></v-field>
        <error-message name="密碼" class="invalid-feedback"></error-message>
        <label for="signupPw" class="text-gray">密碼</label>
      </div>

      <div class="form-floating mb-3">
        <v-field
          type="password"
          id="signupPwConfirm"
          placeholder="確認密碼"
          class="form-control signupInput"
          :class="{ 'is-invalid': errors['確認密碼'] }"
          rules="confirmPw"
          name="確認密碼"
          v-model="confirmPassword"
        ></v-field>
        <error-message name="確認密碼" class="invalid-feedback"></error-message>
        <!-- <span class="message confirmpw fs-8 text-danger"></span> -->
        <label for="signupPwConfirm" class="text-gray">確認密碼</label>
      </div>

      <div class="mt-6 text-center">
        <button type="submit" id="btnSignUp" class="btn btn-primary text-white">
          註冊
        </button>
        <p class="fs-8 text-gray my-3">
          點擊「註冊」即表示你同意我們的使用條款及私隱政策。<br />
          已經註冊 ?
          <router-link to="login" class="text-primary"> 立即登入</router-link>
        </p>
      </div>
    </v-form>
  </div>
</template>
