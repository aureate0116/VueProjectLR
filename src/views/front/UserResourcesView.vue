<script>
const { VITE_API_PATH } = import.meta.env;

import LoadingComponent from "@/components/LoadingComponent.vue";
import StarComponent from "@/components/StarComponent.vue";

import Swal from "sweetalert2";

// import { mapState } from "pinia";
// import userStore from "../../stores/userStore";

export default {
  data() {
    return {
      isLoading: false,
      //userId: this.$route.query.userid,
      routerUserId: this.$route.params.userAccountId,
      userInfo: null,
      userId: localStorage.getItem("userId"),
      accessToken: localStorage.getItem("accessToken"),
      userBookmarksData: [],
    };
  },
  components: {
    LoadingComponent,
    StarComponent,
  },
  computed: {},
  methods: {
    getUserData() {
      this.$http
        .get(`${VITE_API_PATH}/users/${this.userId}`)
        .then((res) => {
          this.userInfo = res.data[0];
          this.isLogin = true;
          if (this.routerUserId != this.userId) {
            this.$router.push("/");
            //console.log("登入資訊與用戶存取頁不符");
          }
          // console.log("this.userInfo", this.userInfo.id);
          // console.log("this.userId", this.userId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserBookmarks() {
      this.$http
        .get(
          `${VITE_API_PATH}/bookmarks?_expand=resource&&userId=${this.userId}`
        )
        .then((res) => {
          this.userBookmarksData = res.data;
          //console.log("userBookmarksData", this.userBookmarksData);
        })
        .catch(() => {
          //console.log(err);
        });
    },
    removeResourceItem(bookmarkId) {
      //console.log(bookmarkId);
      Swal.fire({
        title: "您確定要取消收藏嗎?",
        icon: "warning",
        iconColor: "#F8B436",
        showCancelButton: true,
        confirmButtonColor: "#4AA9B6",
        cancelButtonColor: "#F8B436",
        confirmButtonText: "是",
        cancelButtonText: "否",
      })
        .then((result) => {
          if (result.isConfirmed && typeof Storage !== "undefined") {
            this.$http
              .delete(`${VITE_API_PATH}/bookmarks/${bookmarkId}`, {
                Authorization: `Bearer ${this.accessToken}`,
              })
              .then(() => {
                Swal.fire({
                  title: "已成功取消收藏",
                  confirmButtonColor: "#4AA9B6",
                });
                this.getUserBookmarks();
                //console.log(res.data);
              })
              .catch(() => {
                // if (err.request.status === 403) {
                //   this.$router.push(`/user-resources/${this.userId}`);
                // } else if (err.response.status === 401) {
                //   localStorage.clear();
                // }
                //console.log(err);
              });
          }
        })
        .catch(() => {
          //console.log(err);
        });
    },
  },
  created() {
    this.getUserData();
    this.getUserBookmarks();
  },
  mounted() {
    //console.log("userId", this.userId);
    //console.log("userId-userinfo", userStore.userinfo);
  },
};
</script>
<template>
  <loading-component :is-loading="isLoading" />
  <div class="container my-8 pb-5">
    <div class="mt-4">
      <div class="row">
        <div class="col-lg-4 col-md-6 col">
          <div class="mb-lg-5 mb-md-3 d-flex justify-content-between">
            <select
              class="form-select form-select-sm me-1"
              aria-label=".form-select-sm example"
            >
              <option selected>所有資源</option>
              <option value="1">建立的資源</option>
              <option value="2">收藏的資源</option>
            </select>
            <select
              class="form-select form-select-sm me-1"
              aria-label=".form-select-sm example"
            >
              <option selected>資源主題</option>
              <!-- <option value="1">(我收藏的資源主題)</option>
              <option value="2">(其他我收藏的資源)</option> -->
            </select>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col">
          <div class="d-flex align-items-center">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="selectAll"
            />
            <label class="form-check-label fs-8 mx-1" for="selectAll"
              >全選</label
            >
            <button class="btn btn-light fs-8 mx-1 text-dark">刪除</button>
          </div>
        </div>
        <div class="col-lg-4"></div>
        <div class="col-lg-2 fs-7">
          <div class="input-group mb-5">
            <select class="form-select form-select-sm" id="inputGroupSelect01">
              <option value="heightRate" selected>最高評價</option>
              <option value="new">最新</option>
            </select>
          </div>
        </div>
      </div>
      <!-- title -->
      <div class="row border-bottom">
        <div class="col-1 d-none d-xl-block"></div>
        <div class="col-2 col-md-1 d-flex justify-content-center">置頂</div>
        <div class="col-1 d-none d-md-block"></div>
        <!--圖片-->
        <div class="col-4 col-xl-4 col-md-5 text-center">資源項目</div>
        <div class="col-6 col-xl-4 col-md-5 text-center">操作</div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>

      <div class="row">
        <div class="col userResourcesList">
          <div
            v-for="resourceItem in userBookmarksData"
            :key="resourceItem.resourceId"
            class="row my-3 d-flex align-items-center itemRow"
          >
            <div class="col-1 d-none d-xl-block"></div>
            <div class="col-2 col-md-1 d-flex justify-content-center">
              <span class="material-icons-outlined fs-7 text-seondary"
                >push_pin</span
              >
              <!-- <span class="material-icons">push_pin</span> -->
            </div>

            <div
              class="col-1 d-none d-md-block"
              v-if="resourceItem.resource.imgUrl != ''"
            >
              <router-link
                :to="`/resource/${resourceItem.resource.id}`"
                target="_blank"
              >
                <img
                  :src="
                    '/VueProjectLR/images/resources_cover/' +
                    resourceItem.resource.imgUrl
                  "
                  :alt="resourceItem.resource.title"
              /></router-link>
              <!-- <img src="./assets/images/icon_image.png" alt="" /> -->
            </div>
            <div class="col-1 d-none d-md-block" v-else>
              <router-link
                :to="`/resource/${resourceItem.resource.id}`"
                target="_blank"
              >
                <img
                  :src="`/VueProjectLR/images/resources_cover/noimgCover.jpg`"
                  :alt="resourceItem.resource.title"
                />
              </router-link>
            </div>
            <div class="col-xl-4 col-4 col-md-5">
              <h4 class="fs-7">
                <router-link
                  class="text-dark"
                  :to="`/resource/${resourceItem.resource.id}`"
                  target="_blank"
                >
                  {{ resourceItem.resource.title }}
                </router-link>
              </h4>

              <star-component
                :commentSum="resourceItem?.resource.commentSum"
                :averageScore="resourceItem?.resource.averageScore.toString()"
              ></star-component>
            </div>
            <!-- 操作 -->
            <div class="col-xl-4 col-6 col-md-5">
              <div
                class="d-flex align-items-center justify-content-center flex-column flex-md-row"
              >
                <router-link
                  class="btn btnHover btn-outline-primary my-lg-2 mx-lg-1"
                  type="button"
                  :to="`/resource/${resourceItem.resource.id}`"
                  >查看評論</router-link
                >

                <a
                  :href="resourceItem.resource.url"
                  target="_blank"
                  type="button"
                  class="btn btnHover btn-outline-secondary my-2 mx-1"
                  >資源網站</a
                >

                <a
                  role="button"
                  @click="removeResourceItem(resourceItem.id)"
                  class="btn my-2 mx-1 text-secondary"
                >
                  <span class="fs-6 material-icons btnRemove"
                    >bookmark_remove</span
                  ></a
                >
              </div>
            </div>
            <div class="col-1 d-none d-xl-block"></div>
          </div>
          <!--end row-->
        </div>
      </div>
    </div>
    <!--end-->

    <!-- pagination -->
    <!-- <div class="d-flex justify-content-end my-5">
        <nav aria-label="Page navigation me-auto">
            <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            </ul>
        </nav>
    </div> -->
  </div>
</template>
