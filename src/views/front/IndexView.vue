<template>
  <loading-component :is-loading="isLoading" />
  <!-- 1 bannerBlock -->
  <div class="container-fluid px-3 py-5 p-lg-0 bg-primary">
    <div
      class="bannerBlock container p-0 p-lg-8 p-md-4 d-flex align-items-center justify-content-center justify-content-lg-between"
    >
      <div class="bannerLeft">
        <div class="text-white fs-4 d-flex flex-wrap align-items-center">
          <span>幫助想成為</span>
          <span id="bannerText" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner fs-4 px-1 text-center">
              <span
                class="carousel-item active text-primary bg-white rounded px-1"
                data-bs-interval="3000"
                >前端工程師</span
              >
              <span
                class="carousel-item text-primary bg-white rounded px-1"
                data-bs-interval="3000"
                >後端工程師</span
              >
              <span
                class="carousel-item text-primary bg-white rounded px-1"
                data-bs-interval="3000"
                >全端工程師</span
              >
              <span
                class="carousel-item text-primary bg-white rounded px-1"
                data-bs-interval="3000"
                >資料工程師</span
              >
            </div>
          </span>
          <span>的你</span>
        </div>
        <div class="text-white fs-4 my-2">
          <p>
            <span>輕鬆找到</span>
            <span class="text-primary mx-2 px-1 bg-white rounded">可靠的</span>
            <span>學習資源!</span>
          </p>
        </div>

        <!-- search -->
        <div class="bg-light input-group rounded-3 my-3">
          <a class="btn lh-1" href="#" role="button"
            ><span class="material-icons material-icons-outlined"
              >search</span
            ></a
          >
          <input
            class="form-control border-0 bg-light p-0"
            type="text"
            placeholder="JavaScript"
            v-model="searchbarContent"
            @keyup.enter="searchResources()"
            @keydown.enter="searchResources()"
          />
        </div>
      </div>

      <img
        class="animate animate__animated animate__rubberBand"
        src="@/assets/images/banner01.png"
        alt="banner"
      />
    </div>
  </div>

  <!-- 2 painpoint -->
  <div
    class="painpoint container px-3 py-5 p-lg-8 d-flex align-items-center flex-column flex-xl-row"
  >
    <div class="me-md-0 me-xl-1 text-xl-start text-center">
      <h3 class="fw-bold text-primary mb-lg-6">
        找到具參考價值的學習資源前<br />往往需要經過一番 N 折?
      </h3>
    </div>
    <div class="painpointRight mt-3 ms-xl-5 text-xl-start text-lg-center">
      <swiper
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2 mb-lg-5"
      >
        <swiper-slide>
          <h4 class="fontTeko fs-3">Search</h4>
          <p>
            「JS學習資源」、「JavaScript免費資源」、「前端開發推薦課程」...
            您是否總是要使用「各種」關鍵字搜尋才能找到適合自己的學習資源？
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko fs-3">Multiple Pagination</h4>
          <p>
            搜尋後開啟各種分頁瀏覽，除了佔資源，還有很高機率開起釣魚網站，大幅提高瀏覽風險
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko fs-3">Reading & Filter</h4>
          <p>
            由於網路學習資源實在太多了，您需要花很多時間瀏覽、篩選網頁內容，您是否懷疑「怎麼知道這些教學正確、可被參考且適合自己」
            ?
          </p>
        </swiper-slide>
        <swiper-slide>
          <h4 class="fontTeko fs-3">Collect & Finding</h4>
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
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="text-center text-primary"
          ><img src="@/assets/images/icon_search.png" alt="search" />
          <p class="py-1">考驗聯想力</p></swiper-slide
        ><swiper-slide class="text-center text-primary"
          ><img src="@/assets/images/icon_risk.png" alt="risk" />
          <p class="py-1">提高瀏覽風險</p></swiper-slide
        ><swiper-slide class="text-center text-primary">
          <img src="@/assets/images/icon_time.png" alt="time" />
          <p class="py-1">考驗耐性與判斷力</p></swiper-slide
        ><swiper-slide class="text-center text-primary">
          <img src="@/assets/images/icon_brain.png" alt="brain" />
          <p class="py-1">考驗記憶力</p></swiper-slide
        >
      </swiper>
    </div>
  </div>

  <!-- 3 solution -->
  <div class="container-fluid p-0 bg-primary overflow-hidden">
    <div class="solution container py-5 p-lg-8">
      <h3 class="fw-bold text-white text-center mb-6">
        解決你搜尋學習資源的困擾
      </h3>
      <div class="row">
        <div
          class="col-md-3"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_file.png" alt="輕鬆查找" />
            <h4 class="text-primary fw-bold my-3">輕鬆查找</h4>
            <p>降低連到無關網頁機率<br />簡化你查找資源的時間</p>
          </div>
        </div>

        <div class="col-md-3" data-aos="zoom-in-down" data-aos-duration="1000">
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_review.png" alt="輕鬆判別" />
            <h4 class="text-primary fw-bold my-3">輕鬆判別</h4>
            <p>資源評價機制，讓你輕鬆判別該資源是否具參考價值</p>
          </div>
        </div>

        <div class="col-md-3" data-aos="fade-down" data-aos-duration="1000">
          <div
            class="content text-center bg-white p-6 p-md-4 rounded-3 m-4 m-md-1"
          >
            <img src="@/assets/images/icon_bookmark.png" alt="輕鬆收藏" />
            <h4 class="text-primary fw-bold my-3">輕鬆收藏</h4>
            <p>專屬的學習資源庫，簡化你的管理流程</p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-left" data-aos-duration="1000">
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
  <div
    class="goodRate container py-5 p-lg-8"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-anchor-placement="center-bottom"
  >
    <h3 class="fw-bold text-dark text-center mb-4 mb-xl-0">好評推薦</h3>
    <ul
      class="nav nav-pills mb-1 d-flex align-items-center"
      id="pills-tab1"
      role="tablist"
    >
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
      <li class="nav-item d-none d-sm-block" role="presentation">
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
                  <router-link :to="`/resource/${resourceItem.id}`">
                    <img
                      :src="`./images/resources_cover/${resourceItem.imgUrl}`"
                      :alt="resourceItem.title"
                  /></router-link>
                </div>
                <div class="col-6" v-else>
                  <router-link :to="`/resource/${resourceItem.id}`">
                    <img
                      :src="`./images/resources_cover/noimgCover.jpg`"
                      :alt="resourceItem.title"
                    />
                  </router-link>
                </div>
                <div class="col-6">
                  <h4 class="ellipsis">
                    <router-link
                      class="text-dark"
                      :to="`/resource/${resourceItem.id}`"
                    >
                      {{ resourceItem.title }}
                    </router-link>
                  </h4>

                  <star-component
                    :commentSum="resourceItem?.commentSum"
                    :averageScore="resourceItem?.averageScore.toString()"
                  ></star-component>
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
  <div
    class="freeResources container py-5 p-lg-8 pt-lg-0"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-anchor-placement="center-bottom"
  >
    <h3 class="fw-bold text-dark text-center mb-4 mb-xl-0">免費資源</h3>
    <ul
      class="nav nav-pills mb-1 d-flex align-items-center"
      id="pills-tab"
      role="tablist"
    >
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
            <router-link :to="`/resource/${resourceItem.id}`">
              <div class="text-center" v-if="resourceItem.imgUrl != ''">
                <!-- 圖片放 public -->
                <img
                  :src="`./images/resources_cover/${resourceItem.imgUrl}`"
                  :alt="resourceItem.title"
                />
              </div>
              <div class="text-center" v-else>
                <img
                  :src="`./images/resources_cover/noimgCover.jpg`"
                  :alt="resourceItem.title"
                />
              </div>

              <div class="p-2">
                <h4 class="fs-7 ellipsis text-dark">
                  {{ resourceItem.title }}
                </h4>
                <star-component
                  :commentSum="resourceItem?.commentSum"
                  :averageScore="resourceItem?.averageScore.toString()"
                ></star-component>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end 5 freeResources  -->

  <!-- hotTopic -->
  <div
    class="hotTopic container py-5 p-lg-8 pt-lg-0"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="center-bottom"
  >
    <h3 class="fw-bold text-dark text-center mb-4">熱門主題</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="topicItem text-center my-2 p-4 rounded-3">
          <router-link to="/resource-list/HTML&CSS" target="_blank">
            <h4 class="fw-bold">HTML/CSS</h4></router-link
          >
        </div>
      </div>
      <div class="col-md-4">
        <div class="topicItem text-center my-2 p-4 rounded-3">
          <router-link to="/resource-list/JavaScript">
            <h4 class="fw-bold">JavaScript</h4></router-link
          >
        </div>
      </div>
      <div class="col-md-4">
        <div class="topicItem text-center my-2 p-4 rounded-3">
          <router-link to="/resource-list/Python">
            <h4 class="fw-bold">Python</h4></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- end hotTopic -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import resourcesStore from "../../stores/resourcesStore";
import LoadingComponent from "@/components/LoadingComponent.vue";
import StarComponent from "@/components/StarComponent.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Thumbs } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default {
  data() {
    return {
      isLoading: true,
      thumbsSwiper: null,
      modules: [Autoplay, Navigation, Thumbs],
      goodRateClassify: "JavaScript",
      freeTabClassify: "線上課程",
      searchbarContent: "",
      searchText: "",
    };
  },
  components: {
    LoadingComponent,
    Swiper,
    SwiperSlide,
    StarComponent,
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
        //this.$set(this, "goodRateClassify", item);
      } else if (blockItem === "free") {
        this.freeTabClassify = item;
      }
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
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
  watch: {
    resourcesData() {
      if (this.resourcesData.length === 0) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
        // this.$router.push("/");
      }
    },
    goodRateClassify(newVal) {
      this.$nextTick(() => {
        // 更改 goodRateClassify 觸發重新計算 goodRateTabData
        this.goodRateClassify = newVal;
      });
    },
    freeTabClassify(newVal) {
      this.$nextTick(() => {
        this.freeTabClassify = newVal;
      });
    },
  },
  computed: {
    ...mapState(resourcesStore, [
      "resourcesData",
      "commentsData",
      "resourcesObj",
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
    AOS.init();
    this.getResources();
    document.title = "Eng!neer 程式學習資源網";
  },
};
</script>
