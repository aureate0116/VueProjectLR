<script>
const { VITE_API_PATH } = import.meta.env;

import LoadingComponent from "@/components/LoadingComponent.vue";
import StarComponent from "@/components/StarComponent.vue";

import Swal from "sweetalert2";

export default {
  data() {
    return {
      isLoading: false,
      //userId: this.$route.query.userid,
      //routerUserId: this.$route.params.userAccountId,
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
        })
        .catch(() => {});
    },
    removeResourceItem(bookmarkId) {
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
              })
              .catch(() => {});
          }
        })
        .catch(() => {});
    },
  },
  created() {
    this.getUserData();
    this.getUserBookmarks();
  },
  mounted() {},
};
</script>
<template>
  <loading-component :is-loading="isLoading" />
  <div class="container my-8 pb-5">
    <div class="mt-4">
      <!-- title -->
      <div class="row border-bottom pb-2">
        <div class="col-2 d-none d-xl-block"></div>

        <div class="col-1 d-none d-md-block"></div>
        <!--圖片-->
        <div class="col-6 col-xl-4 col-md-5 text-center">資源項目</div>
        <div class="col-6 col-xl-4 col-md-5 text-center">操作</div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>

      <div class="row">
        <div class="col userResourcesList">
          <div
            v-for="resourceItem in userBookmarksData"
            :key="resourceItem.resourceId"
            class="row py-1 my-3 d-flex align-items-center itemRow"
          >
            <div class="col-2 d-none d-xl-block"></div>

            <div
              class="col-1 d-none d-md-block"
              v-if="resourceItem.resource.imgUrl != ''"
            >
              <router-link
                :to="`/resource/${resourceItem.resource.id}`"
                target="_blank"
              >
                <img
                  :src="`./images/resources_cover/${resourceItem.resource.imgUrl}`"
                  :alt="resourceItem.resource.title"
              /></router-link>
            </div>
            <div class="col-1 d-none d-md-block" v-else>
              <router-link
                :to="`/resource/${resourceItem.resource.id}`"
                target="_blank"
              >
                <img
                  :src="`./images/resources_cover/noimgCover.jpg`"
                  :alt="resourceItem.resource.title"
                />
              </router-link>
            </div>
            <div class="col-xl-4 col-5 col-md-5">
              <h4 class="fs-7 ellipsis">
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
                class="d-flex align-items-center justify-content-center flex-md-row"
              >
                <router-link
                  class="btn btnHover btn-outline-primary my-lg-2 mx-lg-1"
                  role="button"
                  :to="`/resource/${resourceItem.resource.id}`"
                  >查看評論</router-link
                >

                <a
                  :href="resourceItem.resource.url"
                  target="_blank"
                  type="button"
                  class="btn btnHover btn-outline-secondary my-2 mx-2"
                  >資源網站</a
                >

                <a
                  role="button"
                  @click="removeResourceItem(resourceItem.id)"
                  class="btn my-2 mx-1 text-secondary d-none d-md-block"
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
  </div>
</template>
