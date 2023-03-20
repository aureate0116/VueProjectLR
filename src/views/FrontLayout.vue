<script>
import { RouterView, RouterLink } from "vue-router";
const { VITE_API_PATH } = import.meta.env;
import { mapActions } from "pinia";
import userStore from "../stores/userStore";

export default {
  data() {
    return {
      isLogin: false,
      userInfo: null,
      userId: localStorage.getItem("userId"),
      accessToken: localStorage.getItem("accessToken"),
    };
  },
  components: {
    RouterView,
    RouterLink,
  },
  computed: {},
  watch: {
    userInfo() {
      if (this.userInfo === null || this.userInfo === undefined) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
  },
  created() {
    this.getUserData();
  },
  methods: {
    ...mapActions(userStore, ["login"]),
    getUserData() {
      this.$http
        .get(`${VITE_API_PATH}/users?id=${this.userId}`, {
          Authorization: `Bearer ${this.accessToken}`,
        })
        .then((res) => {
          this.userInfo = res.data[0];
          this.isLogin = true;
        })
        .catch(() => {
          //console.log(err);
        });
    },
    logout() {
      this.isLogin = false;
      this.$router.push("/");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("userId", "");
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="container-fluid p-0 bg-white">
    <header class="container-fluid p-lg-0">
      <div class="container p-lg-0">
        <nav class="navbar navbar-expand-lg navbar-light py-4">
          <div class="container-fluid p-0 d-lg-flex align-items-center">
            <router-link class="navbar-brand mt-lg-2" to="/"></router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse mt-3 mt-lg-0 d-lg-flex justify-content-end"
              id="navbarContent"
            >
              <ul class="navbar-nav d-lg-flex align-items-lg-center">
                <li class="nav-item position-relative">
                  <a
                    class="nav-link dropdown-toggle text-black"
                    href="#"
                    id="resourceBrowse"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >探索資源</a
                  >
                  <ul
                    class="dropdown-menu position-absolute start-0"
                    aria-labelledby="resourceBrowse"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="/VueProjectLR#/resource-list/JavaScript"
                        >JavaScript</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/VueProjectLR#/resource-list/HTML&CSS"
                        >HTML/CSS</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/VueProjectLR#/resource-list/Python"
                        >Python</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-black" href="#">探索學習路徑</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">募集中的資源</a>
                </li>
                <li class="nav-item text-black">
                  <div
                    class="bg-light input-group input-group-sm rounded-3 my-3"
                  >
                    <a class="btn lh-1" href="#" role="button">
                      <span class="material-icons material-icons-outlined"
                        >search</span
                      ></a
                    >
                    <input
                      class="border-0 bg-light form-control"
                      type="text"
                      placeholder="JavaScript"
                    />
                  </div>
                </li>
              </ul>

              <!-- 登入前 -->
              <div v-if="isLogin === false">
                <ul class="navbar-nav beforeLogin ms-lg-3">
                  <li class="nav-item d-flex">
                    <router-link
                      class="nav-link btn btn-primary mx-lg-2 px-2 text-white"
                      to="/login"
                      >登入</router-link
                    >
                    <!-- <router-link
                      class="nav-link btn btn-secondary mx-lg-2 mx-2 px-2 text-white"
                      to="/signup"
                      >註冊</router-link
                    > -->
                  </li>
                </ul>
              </div>
              <!-- 登入後 -->
              <div v-else class="desktopMenu ms-lg-3">
                <ul
                  class="afterLogin justify-content-end navbar-nav d-lg-flex align-items-lg-center lh-1"
                >
                  <li class="nav-item">
                    <!-- <span class="material-icons text-danger">notifications</span> -->
                    <!-- <span class="material-icons material-icons-outlined text-dark">notifications_none</span> -->
                  </li>

                  <li class="nav-item dropdown create">
                    <!-- <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="createItem"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span
                        class="material-icons material-icons-outlined text-dark"
                      >
                        add
                      </span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="createItem">
                      <li><a class="dropdown-item" href="#">新增資源</a></li>
                      <li><a class="dropdown-item" href="#">新增募集</a></li>
                    </ul> -->
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle accountMenuImg"
                      href="#"
                      id="accountMenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span
                        class="userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"
                        >{{ userInfo.firstName[0].toUpperCase() }}</span
                      >
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="accountMenu">
                      <li>
                        <ul class="accountMenu">
                          <!-- <li>
                            <router-link
                              class="dropdown-item"
                              :to="`/user-home/user-profile/${userInfo.id}`"
                              >個人資料</router-link
                            >
                          </li> -->
                          <li>
                            <router-link
                              class="dropdown-item"
                              :to="`/user-home/user-resources/${userInfo.id}`"
                              >我的資源</router-link
                            >
                          </li>
                          <!-- <li>
                            <a class="dropdown-item" href="#">我的募集</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">我的學習</a>
                          </li>
                          <li><a class="dropdown-item" href="#">設定</a></li> -->
                        </ul>
                      </li>
                      <li>
                        <a
                          role="button"
                          class="dropdown-item logOut"
                          @click.prevent="logout"
                          >登出</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="container-fluid p-lg-0">
      <main>
        <router-view></router-view>
      </main>
    </div>

    <footer class="footer container-fluid mt-auto py-5 p-lg-5 bg-primary">
      <div
        class="container d-flex flex-md-row flex-column justify-content-between align-items-center"
      >
        <ul class="navbar-nav d-flex flex-row flex-wrap justify-content-start">
          <li class="nav-item me-3 me-md-5 mb-3 mb-md-0">
            <router-link class="footer-brand" to="/"></router-link>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-white">關於我們</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-white">聯絡我們</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-white">常見問題</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link text-white">隱私權政策</a>
          </li>
          <li class="nav-item me-2"><a class="nav-link text-white"></a></li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-2">
            <a class="nav-link text-white fs-8">僅學習作品用無商業用途</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
