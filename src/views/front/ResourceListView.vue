<script>
import { mapState, mapActions } from "pinia";
import resourcesStore from "../../stores/resourcesStore";
import LoadingComponent from "@/components/LoadingComponent.vue";
import StarComponent from "@/components/StarComponent.vue";

export default {
  data() {
    return {
      isLoading: true,

      topic: this.$route.params.resTopic,
      topicsResData: [], //保留該主題的資料
      foundationTabClassify: "初階",
      renderList: [], //渲染清單
      filterGroup: {
        type: ["文章", "書籍", "線上課程", "實體課程", "第三方技術網站"],
        level: ["初階", "中階", "高階"],
        price: ["免費", "付費", "部分付費"],
        lang: ["繁體中文", "簡體中文", "英文", "多語系"],
      },
      checkObj: {
        type: [],
        level: [],
        price: [],
        lang: [],
      },
      sortRenderList: "heightRate",
    };
  },
  watch: {
    "checkObj.type": function (newVal) {
      console.log("newVal", newVal);
      this.filterResources();
      console.log("renderList", this.renderList);
    },
    "checkObj.level": function (newVal) {
      console.log("newVal", newVal);
      this.filterResources();
      // console.log(await this.filterResources());
      console.log("renderList", this.renderList);
    },
    "checkObj.price": function (newVal) {
      console.log("newVal", newVal);
      this.filterResources();
      // console.log(await this.filterResources());
      console.log("renderList", this.renderList);
    },
    "checkObj.lang": function (newVal) {
      console.log("newVal", newVal);
      this.filterResources();
      // console.log(await this.filterResources());
      console.log("renderList", this.renderList);
    },
    sortRenderList(newValue) {
      if (newValue === "new") {
        this.sortRenderList = "new";
      } else {
        this.sortRenderList = "heightRate";
      }
      this.filterResources();
    },
    "$router.params": {
      handler() {
        this.topic = this.$route.params.resTopic;
        this.getResources();
        console.log("路由參數發生變化: ", this.$route.params.resTopic);
      },
      deep: true,
    },
    //resourcesData
    // topic(newVal) {
    //   console.log(this.topic);
    //   this.topic = newVal;

    //   this.topicsResData = this.resourcesData.filter((value) => {
    //     return (
    //       value.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") ===
    //       this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    //     );
    //   });

    //   this.foundationTabData = this.topicsResData
    //     .filter((value) => {
    //       return value.level === "初階 ";
    //     })
    //     .slice(0, 6);

    //   this.renderList = [...this.topicsResData];
    //   if (
    //     this.renderList === undefined ||
    //     this.foundationTabData === undefined
    //   ) {
    //     this.isLoading = true;
    //   } else {
    //     this.isLoading = false;
    //   }
    //   this.$router.push({ path: this.$route.path });
    // },
    resourcesData(newValue) {
      this.topicsResData = newValue.filter((value) => {
        return (
          value.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") ===
          this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        );
      });

      this.foundationTabData = this.topicsResData
        .filter((value) => {
          return value.level === "初階 ";
        })
        .slice(0, 6);

      this.renderList = [...this.topicsResData];
      if (
        this.renderList === undefined ||
        this.foundationTabData === undefined
      ) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    },
    // topic(newValue, oldValue) {
    //   if (newValue !== oldValue) {
    //     this.getResources();
    //     console.log(this.topic);
    //     this.updateData(newValue);
    //   }
    // },
    // resourcesData(newValue) {
    //   this.updateData(newValue);
    // },
  },
  methods: {
    ...mapActions(resourcesStore, [
      "getResources",
      "getComments",
      "getAverageScore",
      //"getfoundationTabData",
    ]),
    // updateData() {
    //   this.topicsResData = this.resourcesData.filter((value) => {
    //     return (
    //       value.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") ===
    //       this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    //     );
    //   });

    //   this.foundationTabData = this.topicsResData
    //     .filter((value) => {
    //       return value.level === "初階 ";
    //     })
    //     .slice(0, 6);

    //   this.renderList = [...this.topicsResData];
    //   if (
    //     this.renderList === undefined ||
    //     this.foundationTabData === undefined
    //   ) {
    //     this.isLoading = true;
    //   } else {
    //     this.isLoading = false;
    //   }
    // },
    changeTabData(item) {
      this.foundationTabClassify = item;
    },
    filterResources() {
      // console.log("filterResources is called");
      // console.log(this.checkObj);
      // console.log(typeof this.topicsResData, this.topicsResData);

      this.renderList = this.topicsResData.filter((resItem) => {
        let hasType = true;
        let hasLevel = true;
        let hasPrice = true;
        let checkLang = true;

        if (this.checkObj.type.length > 0) {
          hasType = this.checkObj.type.includes(resItem.type);
        }
        if (this.checkObj.level.length > 0) {
          hasLevel = this.checkObj.level.includes(resItem.level);
        }
        if (this.checkObj.price.length > 0) {
          hasPrice = this.checkObj.price.includes(resItem.price);
        }

        checkLang = resItem.lang.some((str) => {
          console.log(str);
          if (this.checkObj.lang.length === 0) {
            return true;
          }
          return this.checkObj.lang.includes(str);
        });
        return hasType && hasLevel && hasPrice && checkLang;
      });

      if (this.sortRenderList === "heightRate") {
        this.renderList = this.renderList.sort((a, b) => {
          return b.averageScore - a.averageScore;
        });
      } else if (this.sortRenderList === "new") {
        this.renderList = this.renderList.sort((a, b) => {
          return b.id - a.id;
        });
      }

      return this.renderList;
    },
    clearFilter() {
      this.checkObj.type.splice(0, this.checkObj.type.length);
      this.checkObj.level.splice(0, this.checkObj.level.length);
      this.checkObj.price.splice(0, this.checkObj.price.length);
      this.checkObj.lang.splice(0, this.checkObj.lang.length);
      this.filterResources();
    },
  },
  components: {
    LoadingComponent,
    StarComponent,
  },
  computed: {
    ...mapState(resourcesStore, [
      "resourcesData",
      "commentsData",
      "resourcesObj",
    ]),
    foundationTabData() {
      return this.topicsResData
        .filter((value) => {
          if (this.foundationTabClassify === "初階") {
            return value.level === this.foundationTabClassify;
          } else if (this.foundationTabClassify === "免費") {
            return value.price === this.foundationTabClassify;
          } else {
            return this.topicsResData;
          }
        })
        .slice(-6);
    },
  },
  created() {},
  mounted() {
    this.getResources();
    if (this.topic === null || this.topic === undefined) {
      this.$router.push("/");
    }

    document.title = "Eng!neer 程式學習資源網" + this.topic;
  },
};
</script>

<template>
  <loading-component :is-loading="isLoading" />
  <!-- banner-->
  <div class="container-fluid px-3 py-5 p-lg-0 bg-primary">
    <div class="bannerBlock container p-0 p-lg-8 p-md-4">
      <h2 class="text-white text-center">{{ topic }}</h2>
    </div>
  </div>
  <!-- foundation 入門推薦 -->
  <div class="container py-5 p-lg-8">
    <ul
      class="nav nav-pills mb-3 d-flex align-items-center"
      id="pills-tab2"
      role="tablist"
    >
      <li><h3 class="fs-5 mb-0 fw-bold me-4">入門推薦</h3></li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: '初階' === foundationTabClassify }"
          data-bs-toggle="pill"
          type="button"
          role="tab"
          aria-controls="pills-fundation"
          aria-selected="true"
          @click="changeTabData('初階')"
        >
          初階
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: '免費' === foundationTabClassify }"
          data-bs-toggle="pill"
          type="button"
          role="tab"
          aria-controls="pills-freeItem"
          aria-selected="false"
          @click="changeTabData('免費')"
        >
          免費
        </button>
      </li>
    </ul>

    <div class="tab-content border border-primary p-3 p-md- rounded-3">
      <!--start tab-pane 1-->
      <div
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="resourceType1-tab"
      >
        <div class="row">
          <div
            class="col-md-6 col-lg-4"
            v-for="resourceItem in foundationTabData"
            :key="resourceItem.id"
          >
            <div class="d-flex p-2 align-items-center">
              <div class="row">
                <div class="col-6" v-if="resourceItem.imgUrl != ''">
                  <img
                    :src="
                      '/VueProjectLR/images/resources_cover/' +
                      resourceItem.imgUrl
                    "
                    :alt="resourceItem.title"
                  />
                </div>
                <div class="col-6" v-else>
                  <img
                    :src="`/VueProjectLR/images/resources_cover/noimgCover.jpg`"
                    :alt="resourceItem.title"
                  />
                </div>
                <div class="col-6">
                  <h4 class="ellipsis fs-7">
                    <router-link
                      :to="`/resource/${resourceItem.id}`"
                      target="_blank"
                    >
                      {{ resourceItem.title }}
                    </router-link>
                  </h4>

                  <star-component
                    :commentSum="resourceItem.commentSum"
                    :averageScore="resourceItem.averageScore"
                  ></star-component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end tab-pane 1-->
    </div>
  </div>
  <!-- end  foundation  -->

  <!-- filterList -->
  <div class="filterList container py-5 p-lg-8 pt-lg-4 d-lg-flex border-bottom">
    <h3 class="fs-5 fw-bold mb-4 d-lg-none">篩選</h3>

    <div
      class="filter bg-white rounded-3 p-4 me-lg-4 d-flex flex-wrap flex-lg-column flex-column justify-content-between justify-content-lg-start flex-sm-row"
    >
      <div
        class="filterGroup border-bottom mb-3 pb-3"
        v-for="(items, group) in filterGroup"
        :key="group"
      >
        <h3 class="fs-6">
          {{
            group === "type"
              ? "資源性質"
              : group === "level"
              ? "適用等級"
              : group === "price"
              ? "價格"
              : group === "lang"
              ? "語系"
              : group
          }}
        </h3>
        <div v-for="(item, index) in items" :key="index">
          <div class="input-group filterItem">
            <input
              type="checkbox"
              class="me-2"
              :id="item"
              :value="item"
              v-model="checkObj[group]"
            />
            <label :for="item" class="me-2">{{ item }}</label>
          </div>
        </div>
      </div>
    </div>
    <!--filterList-->

    <div class="resourceList">
      <div
        class="row d-lg-flex align-items-center mb-5 mb-lg-0 justify-content-between"
      >
        <div class="col-md-5 fs-8 mb-3 mb-md-0">
          <span class="resultNumber me-3">
            {{ renderList.length }} 個結果
          </span>
          <a role="button" id="clearFilterBtn" @click="clearFilter()">
            <span
              v-if="
                checkObj.type.length ||
                checkObj.level.length ||
                checkObj.price.length ||
                checkObj.lang.length
              "
              class="clearBtnText text-primary"
              >清除篩選條件</span
            >
            <span v-else class="clearBtnText text-primary"></span>
          </a>
        </div>
        <!-- <div class="col-lg-5 "></div> -->
        <div class="col-md-3 d-flex align-items-end">
          <div class="input-group">
            <select
              class="form-select form-select-sm"
              id="resourceSort"
              v-model="sortRenderList"
            >
              <option value="heightRate">最高評價</option>
              <option value="new">最新</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 資源列表 -->
      <div class="row">
        <div class="col resourceItem" v-if="renderList.length === 0">
          沒有符合條件的項目
        </div>
        <div class="col resourceItem" v-else>
          <div
            class="row my-3 d-flex align-items-center"
            v-for="resourceItem in renderList"
            :key="resourceItem.id"
          >
            <!-- 圖片 -->
            <div class="col-2" v-if="resourceItem.imgUrl != ''">
              <router-link :to="`/resource/${resourceItem.id}`">
                <img
                  :src="
                    '/VueProjectLR/images/resources_cover/' +
                    resourceItem.imgUrl
                  "
                  :alt="resourceItem.title"
              /></router-link>
            </div>
            <div class="col-2" v-else>
              <router-link :to="`/resource/${resourceItem.id}`">
                <img
                  :src="`/VueProjectLR/images/resources_cover/noimgCover.jpg`"
                  :alt="resourceItem.title"
                />
              </router-link>
            </div>
            <!-- 標題 + 星星 -->
            <div class="col-7">
              <h4 class="ellipsis fs-7">
                <router-link
                  :to="`/resource/${resourceItem.id}`"
                  target="_blank"
                >
                  {{ resourceItem.title }}
                </router-link>
              </h4>
              <star-component
                :commentSum="resourceItem.commentSum"
                :averageScore="resourceItem.averageScore"
              ></star-component>
            </div>
            <div class="col-3">
              <div class="d-flex">
                <router-link
                  target="_blank"
                  role="button"
                  :to="`/resource/${resourceItem.id}`"
                  class="btn btnHover btn-outline-primary w-100"
                >
                  查看評論
                </router-link>
              </div>
            </div>
          </div>
          <!--end row-->
        </div>
      </div>

      <!-- <div class="d-flex justify-content-center">
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
    <!--resourceList-->
  </div>
  <!-- end filterList -->

  <!-- releative -->
  <div class="hotTopic relatedContainer container py-5 p-lg-8">
    <h3 class="fs-5 fw-bold mb-4">相關主題</h3>
    <div class="row relatedTopic" v-if="topic === 'JavaScript'">
      <div class="col">
        <div class="topicItem text-center my-2 p-3 rounded-3">
          <router-link to="/resource-list/HTML&CSS" target="_blank">
            <h4 class="fw-bold">HTML/CSS</h4></router-link
          >
        </div>
      </div>
      <div class="col">
        <div class="topicItem text-center my-2 p-3 rounded-3">
          <router-link to="/resource-list/Python">
            <h4 class="fw-bold">Python</h4></router-link
          >
        </div>
      </div>
    </div>
    <div class="row relatedTopic" v-else-if="topic === 'HTML/CSS'">
      <div class="col">
        <div class="topicItem text-center my-2 p-3 rounded-3">
          <router-link to="/resource-list/JavaScript" target="_blank">
            <h4 class="fw-bold">JavaScript</h4></router-link
          >
        </div>
      </div>
    </div>
    <div class="row relatedTopic" v-else>
      <div class="col">
        <div class="topicItem text-center my-2 p-3 rounded-3">
          <router-link to="/resource-list/JavaScript" target="_blank">
            <h4 class="fw-bold">JavaScript</h4></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- end releative -->
</template>
