<template>
  <loading-component :is-loading="isLoading" />

  <router-view @click="closeCollapse" class="flex-column">
    <!-- banner  -->
    <div
      class="container-fluid py-5 p-lg-5 py-md-8 bg-primary d-none d-md-block"
    >
      <div class="bannerBlock container p-0 p-lg-8 py-md-5"></div>
    </div>

    <div
      class="resourceContent container d-flex flex-lg-row flex-column-reverse flex-column mb-7"
    >
      <div class="rightInfo mt-5 mt-lg-0">
        <div class="d-flex align-items-center flex-md-row flex-column">
          <div class="titleBox">
            <h2 class="fs-5 fw-bold mt-md-0 mt-3">
              {{ theResourceData.title }}
            </h2>

            <star-component
              :commentSum="theResourceData?.commentSum"
              :averageScore="theResourceData?.averageScore?.toString()"
              color="#FAD816"
            ></star-component>

            <div class="classify fs-7">
              <ul class="d-flex">
                <li>{{ theResourceData.topics }} /</li>
                <li>{{ theResourceData.type }} /</li>
                <li>{{ theResourceData.level }} /</li>
                <li>{{ theResourceData.price }}</li>
              </ul>
              <ul>
                <li>
                  <span
                    v-for="lang in theResourceData.lang"
                    :key="theResourceData.id + lang"
                    >{{ lang }}</span
                  >
                </li>
                <li>
                  建立者 :
                  <span v-if="theResourceData.user?.role === 'admin'"
                    >Admin</span
                  >
                  <span v-else
                    >{{ theResourceData.user?.firstName }}
                    {{ theResourceData.user?.lastName }}</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- resourceComment -->
        <div class="resourceComment">
          <!--登入後顯示-->
          <div class="loginComment">
            <!-- comment modal -->
            <div
              v-if="isLogin"
              ref="commentModal"
              class="modal fade"
              id="commentModal"
              tabindex="-1"
              role="dialog"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="commentModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="commentModalLabel">評論</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div
                      v-if="isLogin"
                      class="commentContent border border-2 rounded-3 p-lg-4 my-2 p-2"
                    >
                      <div
                        class="d-flex p-3 align-items-center justify-content-between"
                      >
                        <h3
                          class="userInfo card-title fs-7 d-flex align-items-center"
                        >
                          <span
                            class="userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"
                          >
                            {{ userInfo?.firstName[0].toUpperCase() }}
                          </span>
                          <p class="mb-0 mx-2 text-start">
                            {{ userInfo?.firstName }}<br />
                            <span class="fs-9 text-gray">{{
                              userInfo?.title
                            }}</span>
                          </p>
                        </h3>
                        <ul
                          class="commentStar card-text d-flex align-items-center lh-1"
                        >
                          <li
                            v-for="star in 5"
                            :key="star"
                            @click.prevent="rate(star)"
                          >
                            <a href="#" role="button" class="text-primary">
                              <span
                                v-if="star <= commentRating"
                                class="material-icons material-icons-sharp"
                                >star</span
                              >
                              <span
                                v-else
                                class="material-icons material-icons-sharp"
                                >star_outline</span
                              >
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex flex-column">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder=""
                            id="commentTextarea"
                            style="height: 100px"
                            v-model="commentContent"
                          ></textarea>
                          <span
                            v-if="
                              commentContent.length < 20 &&
                              commentContent.length > 0
                            "
                            class="message commentTextarea text-danger fs-8"
                          >
                            字數須超過20字
                          </span>
                          <span
                            v-else-if="
                              commentContent.length == 0 ||
                              commentContent.length >= 20
                            "
                            class="message commentTextarea text-danger fs-8"
                          ></span>
                          <label for="commentTextarea">Comments</label>
                        </div>
                        <button
                          type="button"
                          class="btnCommentSubmit btn btn-primary text-white mt-4"
                          @click="sendComment"
                        >
                          送出評論
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>

          <!--commentSort 排序-->
          <div class="row mt-5" v-if="theResCommentsData.length > 0">
            <div class="col-9"></div>
            <div class="col input-group w-35 text-end mb-3">
              <select
                class="form-select form-select-sm"
                id="commentSort"
                v-model="sortCommentList"
              >
                <option value="new">最新</option>
                <option value="heightRate" selected>評價最高</option>
                <!-- <option value="lowRate" selected>評價最低</option> -->
              </select>
            </div>
          </div>
          <div class="row mt-5" v-else>
            <div class="col text-center text-gray">目前尚未有任何評論</div>
          </div>

          <!--comment-->
          <div class="row commentList">
            <div
              v-for="comment in theResCommentsData"
              :key="comment.id"
              class="col mb-3"
              style="z-index: 10"
            >
              <div
                class="card card-body position-relative text-dark"
                style="z-index: 10"
              >
                <div
                  class="d-flex align-items-lg-center flex-column flex-lg-row justify-content-between"
                >
                  <h3
                    class="card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"
                  >
                    <span
                      class="userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"
                      >{{ comment.user.firstName[0].toUpperCase() }}</span
                    >

                    <p class="mb-0 mx-2 text-start">
                      {{ comment.user.firstName }}<br />
                      <span class="fs-9 text-gray">{{
                        comment.user.title
                      }}</span>
                    </p>
                  </h3>
                  <div class="d-flex flex-lg-column justify-content-between">
                    <ul class="card-text d-flex align-items-center lh-1">
                      <li v-for="star in parseInt(comment.score)" :key="star">
                        <span
                          class="text-primary material-icons material-icons-sharp"
                          >star</span
                        >
                      </li>
                      <li
                        v-for="star in 5 - parseInt(comment.score)"
                        :key="star"
                      >
                        <span
                          class="text-primary material-icons material-icons-sharp"
                          >star_outline</span
                        >
                      </li>
                    </ul>
                    <p class="mb-0 text-end">
                      <time-stamp
                        class="fs-9 text-gray"
                        :timespan="comment.commentTime"
                      ></time-stamp>
                    </p>
                  </div>
                </div>

                <div class="d-flex flex-column">
                  <div class="form-floating mt-2 mb-4">
                    <p>{{ comment.content }}</p>
                  </div>
                </div>

                <!-- bottom -->

                <div
                  class="d-flex justify-content-between fs-8 position-absolute bottom-0 mb-2"
                >
                  <!-- 按讚數 -->
                  <!-- <div class="d-flex align-items-center">
                    <a href="#" type="button" @click="clickLike(comment.id)"
                      ><span class="material-icons-outlined fs-6"
                        >thumb_up_alt</span
                      ></a
                    >
                    <span class="mx-2">{{ comment.likeNum }}</span>

                    <a href="#"
                      ><span class="material-icons-outlined fs-6"
                        >thumb_down_alt</span
                      ></a
                    ><span class="mx-2">{{ comment.dislikeNum }}</span>
                  </div> -->

                  <!-- <div>
                    <a
                      class="d-flex align-items-center text-gray"
                      data-bs-toggle="collapse"
                      :href="`#commentOffense${comment.id}`"
                      role="button"
                      aria-expanded="false"
                      aria-controls="commentOffense"
                      @click="closeCollapse"
                    >
                      <span class="material-icons-outlined">report</span>
                      <span>檢舉</span>
                    </a>

                    <div
                      class="offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0"
                      :id="`commentOffense${comment.id}`"
                      style="z-index: 0"
                      @shown="closeCollapse"
                    >
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="offenseItem"
                          id="offenseItem1"
                        />
                        <label class="form-check-label" for="offenseItem1">
                          偏離主題
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="offenseItem"
                          id="offenseItem2"
                        />
                        <label class="form-check-label" for="offenseItem2">
                          垃圾內容及廣告宣傳
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="offenseItem"
                          id="offenseItem3"
                        />
                        <label class="form-check-label" for="offenseItem3">
                          騷擾內容及不雅用語
                        </label>
                      </div>
                      <button
                        class="btn btn-primary btn-sm text-white"
                        type="submit"
                      >
                        送出
                      </button>
                    </div>
                  </div> -->
                </div>
                <!-- bottom -->
              </div>
              <!--end card-->
            </div>
            <!--end col-->
          </div>
          <!--row-->

          <!-- comment read more Scrollable modal -->
          <div>
            <!-- Button trigger modal -->
            <!-- <button type="button" class="btn btnReadMore btn-outline-primary" data-bs-toggle="modal" data-bs-target="#moreComment">
                        瀏覽更多
                    </button> -->

            <!-- comment Modal -->
            <div
              class="modal fade"
              id="moreComment"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      3.2顆星 35個評價
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="col mb-3">
                      <div class="card card-body" style="z-index: 10">
                        <div
                          class="d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"
                        >
                          <h3
                            class="card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"
                          >
                            <img
                              class="rounded-circle"
                              src="@/assets/images/icon_image.png"
                              alt="photo"
                            />
                            <p class="mb-0 mx-2 text-start">
                              Jenny<br />
                              <span class="fs-9 text-gray">5 年前端工程師</span>
                            </p>
                          </h3>
                          <div
                            class="d-flex flex-lg-column justify-content-between"
                          >
                            <ul
                              class="card-text d-flex align-items-center lh-1"
                            >
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                            </ul>
                            <p class="mb-0 text-end">
                              <span class="fs-9 text-gray">6 個月前</span>
                            </p>
                          </div>
                        </div>

                        <div class="d-flex flex-column">
                          <div class="form-floating my-3">
                            <p>
                              留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡
                            </p>
                          </div>
                        </div>

                        <div class="d-flex justify-content-between fs-8">
                          <!-- like & dislike -->
                          <div class="d-flex align-items-center">
                            <a href="#">
                              <span class="material-icons-outlined fs-6"
                                >thumb_up_alt</span
                              ></a
                            >
                            <span class="mx-2">35</span>
                            <!-- <a href="#">
                                                    <span class="material-icons fs-6">thumb_up_alt</span></a> -->

                            <a href="#">
                              <span class="material-icons-outlined fs-6"
                                >thumb_down_alt</span
                              ></a
                            >
                            <span class="mx-2">3</span>
                            <!-- <a href="#">
                                                        <span class="material-icons fs-6">thumb_down_alt</span></a> -->
                          </div>

                          <div class="position-relatvie">
                            <a
                              class="d-flex align-items-center"
                              data-bs-toggle="collapse"
                              href="#commentOffense3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="commentOffense"
                            >
                              <span class="material-icons-outlined"
                                >report</span
                              >
                              <span>檢舉</span>
                            </a>

                            <div
                              class="offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0"
                              id="commentOffense3"
                              style="z-index: 0"
                            >
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem1"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem1"
                                >
                                  偏離主題
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem2"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem2"
                                >
                                  垃圾內容及廣告宣傳
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem3"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem3"
                                >
                                  騷擾內容及不雅用語
                                </label>
                              </div>
                              <button
                                class="btn btn-primary btn-sm text-white"
                                type="submit"
                              >
                                送出
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--end card-->
                    </div>
                    <!--end col-->
                    <div class="col mb-3">
                      <div class="card card-body" style="z-index: 10">
                        <div
                          class="d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"
                        >
                          <h3
                            class="card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"
                          >
                            <img
                              class="rounded-circle"
                              src="@/assets/images/icon_image.png"
                              alt="photo"
                            />
                            <p class="mb-0 mx-2 text-start">
                              Jenny<br />
                              <span class="fs-9 text-gray">5 年前端工程師</span>
                            </p>
                          </h3>
                          <div
                            class="d-flex flex-lg-column justify-content-between"
                          >
                            <ul
                              class="card-text d-flex align-items-center lh-1"
                            >
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="#" role="button"
                                  ><span
                                    class="material-icons material-icons-sharp"
                                    >star_outline</span
                                  ></a
                                >
                              </li>
                            </ul>
                            <p class="mb-0 text-end">
                              <span class="fs-9 text-gray">6 個月前</span>
                            </p>
                          </div>
                        </div>

                        <div class="d-flex flex-column">
                          <div class="form-floating my-3">
                            <p>
                              留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡
                            </p>
                          </div>
                        </div>

                        <div class="d-flex justify-content-between fs-8">
                          <!-- like & dislike -->
                          <div class="d-flex align-items-center">
                            <a href="#">
                              <span class="material-icons-outlined fs-6"
                                >thumb_up_alt</span
                              ></a
                            >
                            <span class="mx-2">35</span>
                            <!-- <a href="#">
                                                    <span class="material-icons fs-6">thumb_up_alt</span></a> -->

                            <a href="#">
                              <span class="material-icons-outlined fs-6"
                                >thumb_down_alt</span
                              ></a
                            >
                            <span class="mx-2">3</span>
                            <!-- <a href="#">
                                                        <span class="material-icons fs-6">thumb_down_alt</span></a> -->
                          </div>

                          <div class="position-relatvie">
                            <a
                              class="d-flex align-items-center"
                              data-bs-toggle="collapse"
                              href="#commentOffense3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="commentOffense"
                            >
                              <span class="material-icons-outlined"
                                >report</span
                              >
                              <span>檢舉</span>
                            </a>

                            <div
                              class="offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0"
                              id="commentOffense3"
                              style="z-index: 0"
                            >
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem1"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem1"
                                >
                                  偏離主題
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem2"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem2"
                                >
                                  垃圾內容及廣告宣傳
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="offenseItem"
                                  id="offenseItem3"
                                />
                                <label
                                  class="form-check-label"
                                  for="offenseItem3"
                                >
                                  騷擾內容及不雅用語
                                </label>
                              </div>
                              <button
                                class="btn btn-primary btn-sm text-white"
                                type="submit"
                              >
                                送出
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--end card-->
                    </div>
                    <!--end col-->
                  </div>
                  <!--modal-body-->
                  <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end resourceComment-->
      </div>
      <!--end rightInfo-->
      <div class="leftRelated">
        <div class="imageNBrief rounded-3 border p-3 p-md-4 bg-white">
          <img
            v-if="theResourceData.imgUrl != ''"
            class="d-lg-block w-100"
            :src="`./images/resources_cover/${theResourceData.imgUrl}`"
            :alt="theResourceData.title"
          />

          <img
            v-else
            class="d-lg-block w-100"
            :src="`./images/resources_cover/noimgCover.jpg`"
            :alt="theResourceData.title"
          />

          <div class="btnBox w-100">
            <div class="btnResLink mt-3">
              <button
                @click="checkLoginComment"
                data-bs-toggle="modal"
                role="button"
                aria-expanded="false"
                data-bs-target="#commentModal"
                class="w-100 btn btn-sm my-2 bg-primary text-white px-lg-4 py-2 fs-6"
              >
                立即評論
              </button>
              <a
                target="_blank"
                type="button"
                class="w-100 btn btn-sm my-2 bg-outline-primary border border-primary text-primary px-lg-4 py-2 fs-6"
                @click="weblinkReminder"
              >
                資源網站
              </a>
            </div>
            <div
              class="d-flex justify-content-center flex-row flex--column flex-lg-row align-items-center"
            >
              <a
                role="button"
                class="btnBookmark d-flex align-items-center me-2"
                @click.prevent="clickBookmark(theResourceData.id)"
              >
                <span
                  v-if="bookmarkItem == undefined"
                  class="d-flex text-dark me-2"
                >
                  <span class="material-icons">bookmark_border</span>
                  <span>收藏</span></span
                >
                <span v-else class="d-flex me-2">
                  <span class="material-icons text-primary">bookmark</span>
                  <span class="text-primary">收藏</span>
                </span>
              </a>
            </div>
          </div>
          <div class="mt-md-4 text-dark">
            {{ theResourceData.intro }}
          </div>
        </div>

        <!--related item-->
        <div class="mt-4 d-none d-lg-block py-6 d-sm-none">
          <h3
            v-if="relatedResData.length != 0"
            class="fs-5 fw-bold text-dark relatedTitle"
          >
            相關資源
          </h3>
          <div class="relatedResource">
            <div
              class="my-4"
              v-for="resourceItem in relatedResData"
              :key="resourceItem.id"
            >
              <div>
                <h4 class="fs-7 mb-0">
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
      <!--end leftRelated-->
    </div>
  </router-view>
</template>

<script>
// 取得資源資料
import LoadingComponent from "@/components/LoadingComponent.vue";
import TimeStamp from "@/components/TimeStamp.vue";
import StarComponent from "@/components/StarComponent.vue";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: true,

      // res data
      resourcesData: [], //所有
      relatedResData: [], //相關資源
      // the res data
      theResourceId: this.$route.params.resourceId,
      theResourceData: {}, //單一資源內容
      theResCommentsData: [], //取得該資源的評論
      //收藏
      theUserBookmarksData: [],
      isBookmark: false,
      bookmarkItem: {},
      // user data
      userId: localStorage.getItem("userId"),
      accessToken: localStorage.getItem("accessToken"),
      isLogin: false,
      userInfo: null,
      commentRating: 0,
      commentContent: "",
      resourceScoreObj: {},
      sortCommentList: "new",
    };
  },
  components: {
    LoadingComponent,
    TimeStamp,
    StarComponent,
  },
  computed: {},
  watch: {
    "$route.params": {
      handler() {
        this.theResourceId = this.$route.params.resourceId;
        this.getTheResourceData();
      },
      deep: true,
    },
    theResourceData() {
      if (
        this.theResourceData !== undefined &&
        this.theResCommentsData !== undefined &&
        this.relatedResData &&
        this.relatedResData.length > 0
      ) {
        this.isLoading = false;
      }
    },
    sortCommentList(newValue) {
      if (newValue === "new") {
        this.sortCommentList = "new";
      } else {
        this.sortCommentList = "heightRate";
      }
      this.getResCommentsData();
    },
  },
  methods: {
    getResources() {
      this.$http
        .get(`${VITE_API_PATH}/resources`)
        .then((res) => {
          this.resourcesData = res.data;
          this.getTheResourceData();
        })
        .catch(() => {});
    },
    getTheResourceData() {
      this.$http
        .get(
          `${VITE_API_PATH}/resources?id=${this.theResourceId}&&_expand=user`
        )
        .then((res) => {
          this.theResourceData = res.data[0];
          this.getRelatedResData();
          this.getResCommentsData();
        })
        .catch(() => {});
    },
    getResCommentsData() {
      this.$http
        .get(
          `${VITE_API_PATH}/comments?_expand=resouceId&&resourceId=${this.theResourceId}&&_expand=user`
        )
        .then((res) => {
          this.theResCommentsData = res.data;
          if (this.sortCommentList === "heightRate") {
            this.theResCommentsData = this.theResCommentsData.sort((a, b) => {
              return b.score - a.score;
            });
          } else if (this.sortCommentList === "new") {
            this.theResCommentsData = this.theResCommentsData.sort((a, b) => {
              return b.commentTime - a.commentTime;
            });
          }
        })
        .catch(() => {});
    },
    getRelatedResData() {
      this.relatedResData = this.resourcesData
        .filter((value) => {
          return value.topics === this.theResourceData.topics;
        })
        // 比對出符合條件的值後，隨機產生5筆相關資源
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    },
    closeCollapse() {
      const activeCollapse = document.querySelector(".offenseItem.show");
      if (activeCollapse) {
        activeCollapse.classList.remove("show");
      }
    },
    getUserData() {
      this.$http
        .get(`${VITE_API_PATH}/users?id=${this.userId}`, {
          Authorization: `Bearer ${this.accessToken}`,
        })
        .then((res) => {
          this.userInfo = res.data[0];
        })
        .catch(() => {});
    },
    rate(starNum) {
      this.commentRating = starNum;
    },
    checkLoginComment() {
      if (this.isLogin == false) {
        Swal.fire({
          text: `請先登入`,
          icon: "info",
          iconColor: "#4AA9B6",
          confirmButtonColor: "#4AA9B6",
        });
      }
    },
    sendComment() {
      //檢查是否有評價
      if (this.commentRating == 0) {
        Swal.fire({
          text: "請給予評分",
          icon: "info",
          iconColor: "#4AA9B6",
          confirmButtonColor: "#4AA9B6",
          showConfirmButton: true,
        });
      }
      //檢查留言是否為空
      if (this.commentContent == "") {
        Swal.fire({
          text: "請填寫評價內容",
          icon: "info",
          iconColor: "#4AA9B6",
          confirmButtonColor: "#4AA9B6",
          showConfirmButton: true,
        });
      }
      //檢查留言字數
      if (this.commentContent.length >= 20 && this.commentRating !== 0) {
        this.$http
          .post(
            `${VITE_API_PATH}/comments/`,
            {
              resourceId: this.theResourceId,
              userId: this.userId,
              commentTime: (Date.now() / 1000).toFixed(0),
              score: this.commentRating,
              content: this.commentContent,
              likeNum: 0,
              dislikeNum: 0,
            },
            {
              Authorization: `Bearer ${this.accessToken}`,
            }
          )
          .then(() => {
            // 修改這個資源
            this.$http
              .patch(`${VITE_API_PATH}/resources/${this.theResourceId}`, {
                averageScore: (
                  (parseFloat(this.theResourceData.averageScore) *
                    this.theResourceData.commentSum +
                    this.commentRating) /
                  (this.theResourceData.commentSum + 1)
                ).toFixed(1),
                commentSum: this.theResourceData.commentSum + 1,
              })
              .then(() => {
                this.getResCommentsData();
                this.getTheResourceData();
                window.location.reload();
              })
              .catch(() => {});
          })
          .catch(() => {});
      } else {
        Swal.fire({
          text: "請確認填寫",
          icon: "info",
          iconColor: "#4AA9B6",
          confirmButtonColor: "#4AA9B6",
          showConfirmButton: true,
        });
      }
    },
    getUserBookmarks() {
      this.$http
        .get(
          `${VITE_API_PATH}/bookmarks?_expand=resource&&userId=${this.userId}`
        )
        .then((res) => {
          this.theUserBookmarksData = res.data;
          this.bookmarkItem = this.theUserBookmarksData.find((item) => {
            return item.resourceId == this.theResourceId;
          });
        })
        .catch(() => {});
    },
    weblinkReminder() {
      Swal.fire({
        title: "即將前往外部網站",
        text: "點擊「確定」將前往該網站，是否繼續？",
        icon: "warning",
        iconColor: "#4AA9B6",
        showCancelButton: true,
        confirmButtonColor: "#008C9E",
        cancelButtonColor: "#FF8608",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(this.theResourceData.url, "_blank");
        }
      });
    },
    clickBookmark(itemId) {
      // 傳入 theResourceData.id
      if (this.isLogin == false) {
        Swal.fire({
          text: `請先登入`,
          icon: "info",
          iconColor: "#4AA9B6",
          confirmButtonColor: "#4AA9B6",
        });
      } else {
        if (this.bookmarkItem == undefined) {
          this.$http
            .post(
              `${VITE_API_PATH}/bookmarks?userId=${this.userId}`,
              {
                resourceId: itemId,
                userId: this.userId,
                isFixedTop: false,
              },
              {
                Authorization: `Bearer ${this.accessToken}`,
              }
            )
            .then(() => {
              Swal.fire({
                title: "已成功收藏",
                icon: "success",
                iconColor: "#4AA9B6",
                confirmButtonColor: "#4AA9B6",
              });
              this.getUserBookmarks();
            })
            .catch(() => {});
        } else {
          // 取消收藏
          Swal.fire({
            title: "您確定要取消收藏嗎?",
            icon: "warning",
            iconColor: "#4AA9B6",
            showCancelButton: true,
            confirmButtonColor: "#4AA9B6",
            cancelButtonColor: "#F8B436",
            confirmButtonText: "是",
            cancelButtonText: "否",
          })
            .then((result) => {
              if (result.isConfirmed && typeof Storage !== "undefined") {
                this.$http
                  .delete(
                    `${VITE_API_PATH}/bookmarks/${this.bookmarkItem.id}`,
                    {
                      Authorization: `Bearer ${this.accessToken}`,
                    }
                  )
                  .then(() => {
                    Swal.fire({
                      title: "已取消收藏",
                      icon: "success",
                      iconColor: "#4AA9B6",
                      confirmButtonColor: "#4AA9B6",
                    });
                    this.getUserBookmarks();
                  })
                  .catch(() => {});
              }
              this.getUserBookmarks();
            })
            .catch(() => {});
        }
      }
    },
  },
  created() {
    this.getResources();
    this.getUserData();
    this.getUserBookmarks();
    if (this.userId) {
      this.isLogin = true;
    }
  },
  mounted() {
    if (typeof parseInt(this.resourceId) != "number") {
      this.$router.push("/");
    }
    this.getResCommentsData();
    document.title = "Eng!neer 程式學習資源網" + this.theResourceData.title;
  },
};
</script>
