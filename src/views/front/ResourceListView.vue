<script>
import { mapState, mapActions } from "pinia";
import resourcesStore from "../../stores/resourcesStore";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
  data() {
    return {
      isLoading: true,
      topic: this.$route.query.topic, //取得路由中 ?topic= 值
      topicsResData: [], //保留該主題的資料
      foundationTabData: [], //tab 內的資料
      filterRenderList: [],
    };
  },
  methods: {
    ...mapActions(resourcesStore, [
      "getResources",
      "getComments",
      "getAverageScore",
    ]),
    changeTabData(blockItem) {
      if (blockItem === "fundation") {
        this.foundationTabData = this.topicsResData
          .filter((value) => {
            return value.level === "初階";
          })
          .slice(-6);
      } else if (blockItem === "freeItem") {
        this.foundationTabData = this.topicsResData
          .filter((value) => {
            return value.price === "免費";
          })
          .slice(-6);
      } else if (blockItem === "langTC") {
        this.foundationTabData = this.topicsResData
          .filter((value) => {
            return value.lang.includes("繁體中文");
          })
          .slice(-6);
      }
    },
    filterResources() {},
  },
  components: {
    loading: LoadingComponent,
  },
  computed: {
    ...mapState(resourcesStore, [
      "resourcesData",
      "commentsData",
      "resourcesObj",
    ]),
  },
  mounted() {
    if (this.topic === null || this.topic === undefined) {
      this.$router.push("/");
    }
    this.isLoading = true;
    // console.log(this.topic);
    Promise.all([
      this.getResources(),
      this.getComments(),
      this.getAverageScore(),
    ])
      .then(() => {
        console.log("所有資源", this.resourcesData);
        this.topicsResData = this.resourcesData.filter((value) => {
          return (
            value.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") ===
            this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
          );
        });
        console.log("resource list", this.topicsResData);

        this.foundationTabData = this.topicsResData
          .filter((value) => {
            return value.level === "初階";
          })
          .slice(0, 6);
        console.log("入門推薦 list", this.foundationTabData);
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
    document.title = "Eng!neer 程式學習資源網" + this.topic;
    console.log("resourcesObj", this.resourcesObj);
    console.log("commentsData", this.commentsData);
  },
};
</script>

<template>
  <loading :active="isLoading" />
  <!-- banner-->
  <div class="container-fluid px-3 py-5 p-lg-0 bg-primary">
    <div class="bannerBlock container p-0 p-lg-8 p-md-4">
      <h2 class="text-white text-center">{{ topic }}</h2>
    </div>
  </div>
  <router-view>
    <!-- foundation 入門推薦 -->
    <div class="container py-5 p-lg-8">
      <ul
        class="nav nav-pills mb-3 d-flex align-items-center"
        id="pills-tab"
        role="tablist"
      >
        <li><h3 class="fs-5 mb-0 fw-bold me-4">入門推薦</h3></li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-fundation"
            aria-selected="true"
            @click="changeTabData('fundation')"
          >
            初階
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-freeItem"
            aria-selected="false"
            @click="changeTabData('freeItem')"
          >
            免費
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-langTC"
            aria-selected="false"
            @click="changeTabData('langTC')"
          >
            中文資源
          </button>
        </li>
      </ul>

      <div class="tab-content border border-primary p-3 p-md- rounded-3">
        <!--start tab-pane 1-->
        <div
          class="tab-pane fade show active"
          id="foundation1Basic"
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
                        :to="`/resource?id=` + resourceItem.id"
                        target="_blank"
                      >
                        {{ resourceItem.title }}
                      </router-link>
                    </h4>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div
                        v-if="
                          resourceItem.commentSum == 0 ||
                          resourceItem.commentSum == undefined
                        "
                      >
                        <span class="fs-8 text-gray">尚無評價</span>
                      </div>
                      <div v-else class="d-flex align-items-center">
                        <span class="fs-7 fw-bold text-secondary">{{
                          resourceItem.averageScore
                        }}</span>
                        <ul class="d-flex mx-1 lh-1 text-secondary">
                          <li>
                            <span
                              v-for="star in resourceItem.averageScore"
                              :key="star + 1"
                              class="material-icons material-icons-sharp fs-8"
                              >star</span
                            >
                          </li>

                          <li v-if="resourceItem.averageScore[2] <= 2">
                            <span
                              v-for="star in 5 - resourceItem.averageScore[0]"
                              :key="star + 2"
                              class="material-icons material-icons-sharp fs-8"
                              >star_outline</span
                            >
                          </li>

                          <li
                            v-else-if="
                              resourceItem.averageScore[2] >= 3 &&
                              resourceItem.averageScore[2] <= 7
                            "
                          >
                            <span
                              class="material-icons material-icons-sharp fs-8"
                              >star_half</span
                            >
                          </li>

                          <li v-else-if="resourceItem.averageScore[2] >= 8">
                            <span
                              v-for="star in 5 -
                              resourceItem.averageScore[0] -
                              1"
                              :key="star + 3"
                              class="material-icons material-icons-sharp fs-8"
                              >star</span
                            >
                          </li>
                        </ul>

                        <span class="fs-8 text-secondary"
                          >({{ resourceItem.commentSum }})</span
                        >
                      </div>
                    </div>
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

    <!-- releative -->
    <div class="hotTopic relatedContainer container py-5 p-lg-8 pt-lg-0">
      <h3 class="fs-5 fw-bold mb-4">相關主題</h3>
      <div class="row relatedTopic" v-if="topic === 'JavaScript'">
        <div class="col">
          <div class="topicItem text-center my-2 p-3 rounded-3">
            <router-link to="/resource-list?topic=HTML/CSS" target="_blank">
              <h4 class="fw-bold">HTML/CSS</h4></router-link
            >
          </div>
        </div>
        <div class="col">
          <div class="topicItem text-center my-2 p-3 rounded-3">
            <router-link to="/resource-list?topic=Python">
              <h4 class="fw-bold">Python</h4></router-link
            >
          </div>
        </div>
      </div>
      <div class="row relatedTopic" v-else-if="topic === 'HTML/CSS'">
        <div class="col">
          <div class="topicItem text-center my-2 p-3 rounded-3">
            <router-link to="/resource-list?topic=JavaScript" target="_blank">
              <h4 class="fw-bold">JavaScript</h4></router-link
            >
          </div>
        </div>
      </div>
      <div class="row relatedTopic" v-else>
        <div class="col">
          <div class="topicItem text-center my-2 p-3 rounded-3">
            <router-link to="/resource-list?topic=JavaScript" target="_blank">
              <h4 class="fw-bold">JavaScript</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end releative -->

    <!-- filterList -->
    <div class="filterList container py-5 p-lg-8 d-lg-flex border-top">
      <h3 class="fs-5 fw-bold mb-4 d-lg-none">篩選</h3>

      <div
        class="filter bg-white rounded-3 p-4 me-lg-4 d-flex flex-wrap flex-lg-column flex-column justify-content-between justify-content-lg-start flex-sm-row"
      >
        <div class="filterGroup1 mb-4 pb-4">
          <h3 class="fs-6">資源性質</h3>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="typeArticles"
              class="me-2"
              data-group="type"
              name="文章"
            />
            <label for="typeArticles" class="me-2">文章</label>
          </div>

          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="typeBooks"
              class="me-2"
              data-group="type"
              name="書籍"
            />
            <label for="typeBooks" class="me-2">書籍</label>
          </div>

          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="typeOnline"
              class="me-2"
              data-group="type"
              name="線上課程"
            />
            <label for="typeOnline" class="me-2">線上課程</label>
          </div>

          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="typeOffline"
              class="me-2"
              data-group="type"
              name="實體課程"
            />
            <label for="typeOffline" class="me-2">實體課程</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="typeThirdParty"
              class="me-2"
              data-group="type"
              name="第三方技術網站"
            />
            <label for="typeThirdParty" class="me-2">第三方技術網站</label>
          </div>
        </div>

        <div class="filterGroup2 mb-4 pb-4">
          <h3 class="fs-6">適用等級</h3>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="lvBasic"
              class="me-2"
              data-group="level"
              name="初階"
            />
            <label for="lvBasic">初階</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="lvMedium"
              class="me-2"
              data-group="level"
              name="中階"
            />
            <label for="lvMedium" class="me-2">中階</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="lvAdvanced"
              class="me-2"
              data-group="level"
              name="高階"
            />
            <label for="lvAdvanced" class="me-2">高階</label>
          </div>
        </div>

        <div class="filterGroup3 mb-4 pb-4">
          <h3 class="fs-6">價格</h3>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="costFree"
              class="me-2"
              data-group="price"
              name="免費"
            />
            <label for="costFree" class="me-2">免費</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="costPay"
              class="me-2"
              data-group="price"
              name="付費"
            />
            <label for="costPay" class="me-2">付費</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="costPartiallyPaid"
              class="me-2"
              data-group="price"
              name="部分付費"
            />
            <label for="costPartiallyPaid" class="me-2">部分付費</label>
          </div>
        </div>

        <div class="filterGroup4 mb-4 pb-4">
          <h3 class="fs-6">語系</h3>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="langTc"
              class="me-2"
              data-group="lang"
              name="繁體中文"
            />
            <label for="langTc" class="me-2">繁體中文</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="langSc"
              class="me-2"
              data-group="lang"
              name="簡體中文"
            />
            <label for="langSc" class="me-2">簡體中文</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="langEn"
              class="me-2"
              data-group="lang"
              name="英文"
            />
            <label for="langEn" class="me-2">英文</label>
          </div>
          <div class="input-group filterItem">
            <input
              type="checkbox"
              id="langMulti"
              class="me-2"
              data-group="lang"
              name="多語系"
            />
            <label for="langMulti" class="me-2">多語系</label>
          </div>
        </div>
      </div>
      <!--filterList-->

      <div class="resourceList">
        <div
          class="row d-lg-flex align-items-center mb-5 mb-lg-0 justify-content-between"
        >
          <div class="col-md-5 fs-8 mb-3 mb-md-0">
            <span class="resultNumber me-3"> 1133 個結果 </span>
            <a role="button" id="clearFilterBtn">
              <span class="clearBtnText text-primary">清除篩選條件</span>
            </a>
          </div>
          <!-- <div class="col-lg-5 "></div> -->
          <div class="col-md-3 d-flex align-items-end">
            <div class="input-group">
              <select class="form-select form-select-sm" id="resourceSort">
                <option value="heightRate">最高評價</option>
                <option value="new">最新</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 資源列表 -->
        <div class="row">
          <div class="col resourceItem">
            <div
              class="row my-3"
              v-for="resourceItem in topicsResData"
              :key="resourceItem.id"
            >
              <!-- 圖片 -->
              <div class="col-2" v-if="resourceItem.imgUrl != ''">
                <router-link
                  :to="`/resource?id=` + resourceItem.id"
                  target="_blank"
                >
                  <img
                    :src="
                      '/VueProjectLR/images/resources_cover/' +
                      resourceItem.imgUrl
                    "
                    :alt="resourceItem.title"
                /></router-link>
              </div>
              <div class="col-2" v-else>
                <router-link
                  :to="`/resource?id=` + resourceItem.id"
                  target="_blank"
                >
                  <img
                    :src="`/VueProjectLR/images/resources_cover/noimgCover.jpg`"
                    :alt="resourceItem.title"
                  />
                </router-link>
              </div>
              <!-- 標題 + 星星 -->
              <div class="col-6">
                <h4 class="ellipsis fs-7">
                  <router-link
                    :to="`/resource?id=` + resourceItem.id"
                    target="_blank"
                  >
                    {{ resourceItem.title }}
                  </router-link>
                </h4>
                <div class="d-flex justify-content-between align-items-center">
                  <div
                    v-if="
                      resourceItem.commentSum === 0 ||
                      resourceItem.commentSum === undefined
                    "
                  >
                    <span class="fs-8 text-gray">尚無評價</span>
                  </div>
                  <div v-else class="d-flex align-items-center">
                    <span class="fs-7 fw-bold text-secondary">{{
                      resourceItem.averageScore
                    }}</span>
                    <ul class="d-flex mx-1 lh-1 text-secondary">
                      <li>
                        <span
                          v-for="star in resourceItem.averageScore"
                          :key="star + 1"
                          class="material-icons material-icons-sharp fs-8"
                          >star</span
                        >
                      </li>

                      <li v-if="resourceItem.averageScore[2] <= 2">
                        <span
                          v-for="star in 5 - resourceItem.averageScore[0]"
                          :key="star + 2"
                          class="material-icons material-icons-sharp fs-8"
                          >star_outline</span
                        >
                      </li>

                      <li
                        v-else-if="
                          resourceItem.averageScore[2] >= 3 &&
                          resourceItem.averageScore[2] <= 7
                        "
                      >
                        <span class="material-icons material-icons-sharp fs-8"
                          >star_half</span
                        >
                      </li>

                      <li v-else-if="resourceItem.averageScore[2] >= 8">
                        <span
                          v-for="star in 5 - resourceItem.averageScore[0] - 1"
                          :key="star + 3"
                          class="material-icons material-icons-sharp fs-8"
                          >star</span
                        >
                      </li>
                    </ul>

                    <span class="fs-8 text-secondary"
                      >({{ resourceItem.commentSum }})</span
                    >
                  </div>
                </div>
                <!-- <div class="d-flex flex-wrap align-items-center">
                  <span class="fs-7 fw-bold me-lg-2">3.2</span>
                  <ul class="d-flex align-items-center lh-1 me-lg-2">
                    <li>
                      <span class="material-icons material-icons-sharp fs-8"
                        >star</span
                      >
                    </li>
                    <li>
                      <span class="material-icons material-icons-sharp fs-8"
                        >star</span
                      >
                    </li>
                    <li>
                      <span class="material-icons material-icons-sharp fs-8"
                        >star</span
                      >
                    </li>
                    <li>
                      <span class="material-icons material-icons-sharp fs-8"
                        >star_half</span
                      >
                    </li>
                    <li>
                      <span class="material-icons material-icons-sharp fs-8"
                        >star_outline</span
                      >
                    </li>
                  </ul>
                  <span class="fs-8">(35)</span>
                </div> -->
              </div>
              <div class="col-4">
                <div class="d-flex flex-column flex-lg-row align-items-end">
                  <button type="button" class="btn btn-tiffany my-2 mx-2 w-75">
                    前往資源
                  </button>
                  <button
                    type="button"
                    class="btn btn-yellowBrown w-75 mx-2 my-2"
                  >
                    查看評論
                  </button>
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
  </router-view>
  <!-- end filterList -->
</template>
