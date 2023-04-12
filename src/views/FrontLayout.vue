<script>
import { RouterView, RouterLink } from "vue-router";
// const { VITE_API_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import userStore from "../stores/userStore";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
  data() {
    return {
      searchbarContent: "",
      searchText: "",
      isLoading: false,
      // user: "",
    };
  },
  components: {
    RouterView,
    RouterLink,
    LoadingComponent,
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  watch: {},
  created() {},
  methods: {
    ...mapActions(userStore, ["login", "logout", "getUserData"]),
    goHome() {
      if (this.$route.name !== "home") {
        this.$router.push({ path: "/" });
      }
    },
    searchResources() {
      if (this.searchbarContent) {
        this.searchText = this.searchbarContent;
        this.$router.push({
          path: `/resource-list/search=${this.searchText}`,
        });
      }
      this.searchbarContent = "";
    },
  },
  mounted() {
  },
};
</script>

<template>
  <loading-component :is-loading="isLoading" />
  <div
    class="container-fluid p-0 bg-white min-vh-100 d-flex flex-column justify-content-between"
  >
    <header class="container-fluid p-lg-0">
      <div class="container p-lg-0">
        <nav class="navbar navbar-expand-lg navbar-light py-4">
          <div class="container-fluid p-0 d-lg-flex align-items-center">
            <router-link
              class="navbar-brand mt-lg-2"
              :to="{ path: '/' }"
              @click="goHome"
            ></router-link>
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
              class="collapse navbar-collapse mt-3 d-lg-flex justify-content-end"
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
              </ul>
              <ul class="navbar-nav d-lg-flex align-items-lg-center mx-lg-3">
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
                      v-model="searchbarContent"
                      @keyup.enter="searchResources()"
                      @keydown.enter="searchResources()"
                    />
                  </div>
                </li>
              </ul>
              <!-- 登入前 -->
              <div v-if="isLogin === false || !userInfo">
                <ul class="navbar-nav beforeLogin">
                  <li class="nav-item d-flex">
                    <router-link
                      class="nav-link btn btn-primary mx-lg-2 px-2 text-white"
                      to="/login"
                      >登入</router-link
                    >
                    <router-link
                      class="nav-link btn btn-secondary mx-lg-2 mx-2 px-2 text-white"
                      to="/signup"
                      >註冊</router-link
                    >
                  </li>
                </ul>
              </div>
              <!-- 登入後 -->

              <div v-else class="desktopMenu">
                <ul
                  v-if="userInfo"
                  class="afterLogin justify-content-end navbar-nav d-lg-flex align-items-lg-center lh-1"
                >
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
                      >
                        {{
                          userInfo &&
                          userInfo.firstName &&
                          userInfo.firstName[0]
                            ? userInfo.firstName[0].toUpperCase()
                            : ""
                        }}
                      </span>
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="accountMenu">
                      <li>
                        <ul class="accountMenu">
                          <li>
                            <router-link
                              class="dropdown-item"
                              :to="`/user-home/user-resources`"
                              >我的資源</router-link
                            >
                          </li>
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

    <footer class="footer container-fluid py-5 p-lg-5 bg-primary">
      <div
        class="container d-flex flex-md-row flex-column justify-content-between align-items-center"
      >
        <ul class="navbar-nav d-flex flex-row flex-wrap justify-content-start">
          <li class="nav-item me-md-5 mb-3 mb-md-0">
            <router-link class="footer-brand" to="/"></router-link>
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
