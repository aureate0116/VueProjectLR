<template>
  <loading-component :is-loading="isLoading" />

  <!-- 1 bannerBlock -->
  <div class="container-fluid px-3 py-5 p-lg-0 bg-primary">
    <div
      class="bannerBlock container p-0 p-lg-8 p-md-4 d-flex align-items-center justify-content-center justify-content-lg-between"
    >
      <div class="bannerLeft">
        <div class="text-white fs-2 d-flex flex-wrap align-items-center">
          <span>幫助想成為</span>
          <span id="bannerText" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner px-2 text-center">
              <span
                class="carousel-item active text-secondary"
                data-bs-interval="3000"
              >
                前端工程師
              </span>
              <span
                class="carousel-item text-decoration-underline"
                data-bs-interval="3000"
              >
                後端工程師
              </span>
              <span
                class="carousel-item text-decoration-underline"
                data-bs-interval="3000"
              >
                全端工程師
              </span>
              <span
                class="carousel-item text-decoration-underline"
                data-bs-interval="3000"
              >
                資料工程師
              </span>
              <!-- <span class="carousel-item text-decoration-underline" data-bs-interval="3000"> 開發維運工程師 </span>
                            <span class="carousel-item text-decoration-underline" data-bs-interval="3000"> 行動應用工程師 </span>
                            <span class="carousel-item text-decoration-underline" data-bs-interval="3000"> 產品測試工程師 </span> -->
            </div>
          </span>
          <span>的你</span>
        </div>
        <div class="text-white fs-2">
          <p>輕鬆找到<span class="text-secondary"> 可靠的 </span>學習資源 !</p>
        </div>

        <!-- search -->
        <div class="bg-light input-group rounded-3 my-3">
          <a class="btn lh-1" href="#" role="button"
            ><span class="material-icons material-icons-outlined"
              >search</span
            ></a
          >
          <input
            class="form-control border-0 bg-light"
            type="text"
            placeholder="JavaScript"
          />
        </div>

        <!-- 推薦關鍵字 -->
        <!-- <ul class="d-flex fs-7 text-center">
                    <li class="me-2"><a href="#" class="text-light"> JavaScript </a></li>
                    <li class="me-2"><a href="#" class="text-light"> Python </a></li>
                    <li class="me-2"><a href="#" class="text-light"> HTML </a></li>
                </ul> -->
      </div>

      <img src="@/assets/images/banner01.png" alt="banner" />
    </div>
  </div>

  <!-- 2 painpoint -->
  <div
    class="painpoint container px-3 py-5 p-lg-8 d-flex align-items-center flex-column flex-md-row"
  >
    <div class="me-md-4 me-0 text-center">
      <img class="w-75" src="@/assets/images/banner02.png" alt="painpoint" />
    </div>
    <!-- <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="me-md-4 me-0 text-center"
    >
      <img width="70%" src="@/assets/images/banner02.png" alt="painpoint" />
    </div> -->
    <div class="painpointRight mt-5 mt-md-0">
      <h3 class="fw-bold text-dark mb-6">
        找到具參考價值的學習資源前<br />往往需要經過一番 N 折?
      </h3>

      <swiper
        :spaceBetween="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
      >
        <swiper-slide>
          <h4 class="fontTeko">Search</h4>
          <p>
            「JS學習資源」、「JavaScript免費資源」、「前端開發推薦課程」...
            您是否總是要使用「各種」關鍵字搜尋才能找到適合自己的學習資源？
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko">Multiple Pagination</h4>
          <p>
            搜尋後開啟各種分頁瀏覽，除了佔資源，還有很高機率開起釣魚網站，大幅提高瀏覽風險
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko">Reading & Filter</h4>
          <p>
            由於網路學習資源實在太多了，您需要花很多時間瀏覽、篩選網頁內容，您是否懷疑「怎麼知道這些教學正確、可被參考且適合自己」
            ?
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko">Collect & Finding</h4>
          <p>
            您可能會將篩選後的資源存在瀏覽器頁籤、某個數位筆記本或其他地方。但當時儲存資源的時候是否有好好分類呢
            ? 您是否還找的到當初存的資源嗎 ?
          </p>
        </swiper-slide>
      </swiper>

      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="text-center"
          ><img src="@/assets/images/icon_search.png" alt="search" />
          <p>考驗聯想力</p></swiper-slide
        ><swiper-slide class="text-center"
          ><img src="@/assets/images/icon_risk.png" alt="risk" />
          <p>提高瀏覽風險</p></swiper-slide
        ><swiper-slide class="text-center">
          <img src="@/assets/images/icon_time.png" alt="time" />
          <p>考驗耐性與判斷力</p></swiper-slide
        ><swiper-slide class="text-center">
          <img src="@/assets/images/icon_brain.png" alt="brain" />
          <p>考驗記憶力</p></swiper-slide
        >
      </swiper>
    </div>
  </div>

  <!-- 3 solution -->
  <div class="container-fluid p-0 bg-primary">
    <div class="solution container py-5 p-lg-8">
      <h3 class="fw-bold text-white text-center mb-6">
        解決你搜尋學習資源的困擾
      </h3>
      <div class="row">
        <div class="col-md-3">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_file.png" alt="輕鬆查找" />
            <h4 class="text-primary fw-bold my-3">輕鬆查找</h4>
            <p>降低連到無關網頁機率<br />簡化你查找資源的時間</p>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="1000" class="col-md-3">
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_review.png" alt="輕鬆判別" />
            <h4 class="text-primary fw-bold my-3">輕鬆判別</h4>
            <p>資源評價機制，讓你輕鬆判別該資源是否具參考價值</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" class="col-md-3">
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_bookmark.png" alt="輕鬆收藏" />
            <h4 class="text-primary fw-bold my-3">輕鬆收藏</h4>
            <p>專屬的學習資源庫，簡化你的管理流程</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="col-md-3">
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_flag.png" alt="輕鬆募集" />
            <h4 class="text-primary fw-bold my-3">輕鬆募集</h4>
            <p>減少連結到非相關網頁的機率，簡化你查找資源的時間</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end 3 solution -->

  <!-- 4 goodRate 好評推薦 -->
  <router-view>
    <div class="goodRate container py-5 p-lg-8">
      <ul
        class="nav nav-pills mb-3 d-flex align-items-center"
        id="pills-tab1"
        role="tablist"
      >
        <li><h3 class="fs-5 mb-0 fw-bold me-4">好評推薦</h3></li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: 'JavaScript' === goodRateClassify }"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-JavaScript"
            aria-selected="true"
            @click="changeTabData('goodRate', 'JavaScript')"
          >
            JavaScript
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: 'HTML/CSS' === goodRateClassify }"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-HTMLCSS"
            aria-selected="false"
            @click="changeTabData('goodRate', 'HTML/CSS')"
          >
            HTML/CSS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: 'Python' === goodRateClassify }"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-Python"
            aria-selected="false"
            @click="changeTabData('goodRate', 'Python')"
          >
            Python
          </button>
        </li>
      </ul>

      <div class="tab-content border border-primary p-3 rounded-3">
        <div
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="goodRate1-tab"
        >
          <div class="row">
            <div
              class="col-md-6 col-lg-4"
              :class="{
                'show active': resourceItem.topics === goodRateClassify,
              }"
              v-for="resourceItem in goodRateTabData"
              :key="resourceItem.id"
            >
              <div class="d-flex p-2 align-items-center">
                <div class="row">
                  <div class="col-6" v-if="resourceItem.imgUrl != ''">
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
                  <div class="col-6" v-else>
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
                  <div class="col-6">
                    <h4 class="ellipsis">
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
      </div>
    </div>
    <!-- end 4 goodRate-->

    <!-- 5 freeResources 免費資源 -->
    <div class="freeResources container py-5 p-lg-8 pt-lg-0">
      <ul
        class="nav nav-pills mb-3 d-flex align-items-center"
        id="pills-tab"
        role="tablist"
      >
        <li><h3 class="fs-5 mb-0 fw-bold me-4">最新免費資源</h3></li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: '線上課程' === freeTabClassify }"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            @click="changeTabData('free', '線上課程')"
          >
            線上課程
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            :class="{ active: '文章' === freeTabClassify }"
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            @click="changeTabData('free', '文章')"
          >
            文章
          </button>
        </li>
      </ul>

      <div
        class="tab-content border border-primary p-3 rounded-3"
        id="pills-tabContent"
      >
        <div
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="resourceType1-tab"
        >
          <div class="row">
            <div
              class="col-lg-2 col-6"
              :class="{
                'show active': resourceItem.type === freeTabClassify,
              }"
              v-for="resourceItem in freeTabData"
              :key="resourceItem.id"
            >
              <router-link
                :to="`/resource?id=` + resourceItem.id"
                target="_blank"
              >
                <div class="text-center" v-if="resourceItem.imgUrl != ''">
                  <img
                    :src="`/VueProjectLR/images/resources_cover/${resourceItem.imgUrl}`"
                    :alt="resourceItem.title"
                  />
                </div>
                <div class="text-center" v-else>
                  <img
                    :src="`/VueProjectLR/images/resources_cover/noimgCover.jpg`"
                    :alt="resourceItem.title"
                  />
                </div>

                <div class="p-2">
                  <h4 class="fs-7 ellipsis">{{ resourceItem.title }}</h4>
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
                      <span class="fs-7 fw-bold me-lg-2 text-secondary">{{
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
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end 5 freeResources  -->

    <!-- hotTopic -->
    <div class="hotTopic container py-5 p-lg-8 pt-lg-0">
      <h3 class="fs-5 fw-bold mb-4">熱門主題</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="topicItem text-center my-2 p-4 rounded-3">
            <router-link to="/resource-list?topic=HTML/CSS" target="_blank">
              <h4 class="fw-bold">HTML/CSS</h4></router-link
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="topicItem text-center my-2 p-4 rounded-3">
            <router-link to="/resource-list?topic=JavaScript">
              <h4 class="fw-bold">JavaScript</h4></router-link
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="topicItem text-center my-2 p-4 rounded-3">
            <router-link to="/resource-list?topic=Python">
              <h4 class="fw-bold">Python</h4></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end hotTopic -->
  </router-view>
</template>

<script>
import { mapState, mapActions } from "pinia";
import resourcesStore from "../../stores/resourcesStore";
import LoadingComponent from "@/components/LoadingComponent.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default {
  data() {
    return {
      isLoading: true,
      // goodRateTabData: [], // 好評推薦
      // freeTabData: [], // 最新免費資源
      thumbsSwiper: null,
      modules: [Autoplay, Navigation, Thumbs],
      goodRateClassify: "JavaScript",
      freeTabClassify: "線上課程",
    };
  },
  methods: {
    ...mapActions(resourcesStore, [
      "getResources",
      "getComments",
      "getAverageScore",
    ]),
    changeTabData(blockItem, item) {
      if (blockItem === "goodRate") {
        this.goodRateClassify = item;
      } else if (blockItem === "free") {
        this.freeTabClassify = item;
      }
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  watch: {
    resourcesData() {
      if (this.resourcesData.length === 0) {
        this.isLoading = true;
      } else {
        this.$router.push("/");
        this.isLoading = false;
      }
    },
  },
  components: {
    LoadingComponent,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(resourcesStore, [
      "resourcesData",
      "commentsData",
      "resourcesObj",
      // "goodRateTabData",
      // "freeTabData",
    ]),
    goodRateTabData() {
      return this.resourcesData
        .filter((value) => {
          return value.topics === this.goodRateClassify;
        })
        .slice(0, 6);
    },
    freeTabData() {
      return this.resourcesData
        .filter((value) => {
          return value.type === this.freeTabClassify && value.price === "免費";
        })
        .slice(0, 6);
    },
  },
  mounted() {
    this.getResources();
    // this.getComments();
    // this.getAverageScore();
    this.goodRateTabData = this.resourcesData
      .filter((value) => {
        return value.topics === "JavaScript"; // && value.commentSum != 0
      })
      .slice(0, 6);
    this.freeTabData = this.resourcesData
      .filter((value) => {
        return value.type === "線上課程" && value.price === "免費";
      })
      .slice(0, 6);

    // if (this.resourcesData.length === 0) {
    //   this.isLoading = true;
    // } else {
    //   this.$router.push("/");
    //   this.isLoading = false;
    // }

    document.title = "Eng!neer 程式學習資源網";
    console.log("resourcesObj", this.resourcesObj);
    console.log("commentsData", this.resourcesData);
  },
};
</script>
