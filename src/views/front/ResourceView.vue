<template>
  <router-view @click="closeCollapse">
    <loading-component :is-loading="isLoading" />
    {{ theResourceData }}
    <!-- banner  -->
    <div
      class="container-fluid py-5 p-lg-5 py-md-8 bg-darkTiffany d-none d-md-block"
    >
      <div class="bannerBlock container p-0 p-lg-8 py-md-5"></div>
    </div>

    <div
      class="resourceContent container d-md-flex flex-md-row flex-column-reverse mb-7"
    >
      <div class="leftRelated">
        <div class="imageNBrief rounded-3 border p-3 bg-white">
          <img
            class="d-md-block"
            :src="`/VueProjectLR/images/resources_cover/${theResourceData.imgUrl}`"
            :alt="theResourceData.title"
          />
          <div class="mt-md-3 text-dark">
            {{ theResourceData.intro }}
          </div>
        </div>

        <!--related item-->
        <div class="mt-7 d-none d-md-block py-6">
          <h3 class="fs-6 relatedTitle">相關資源</h3>
          <div class="relatedResource">
            <div
              class="my-4"
              v-for="resourceItem in relatedResData"
              :key="resourceItem.id"
            >
              <div>
                <h4 class="fs-7 mb-0">
                  <router-link
                    :to="`/resource?id=` + resourceItem.id"
                    target="_blank"
                  >
                    {{ resourceItem.title }}
                  </router-link>
                </h4>
                <div
                  class="d-flex flex-wrap justify-content-start align-items-center"
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
            </div>
          </div>
        </div>
      </div>
      <!--end leftRelated-->

      <div class="rightInfo">
        <div class="d-flex align-items-center flex-md-row flex-column">
          <div class="titleBox">
            <h2 class="fs-5 fw-bold mt-md-0 mt-3">
              {{ theResourceData.title }}
            </h2>
            <div class="d-flex flex-wrap align-items-center text-secondary">
              <!-- <span class="fs-5 fw-bold me-lg-2">3.2</span>
                        <ul class="d-flex align-items-center lh-1 me-lg-2">
                            <li><span class="material-icons material-icons-sharp fs-7">star</span></li>
                            <li><span class="material-icons material-icons-sharp fs-7">star</span></li>
                            <li><span class="material-icons material-icons-sharp fs-7">star</span></li>
                            <li><span class="material-icons material-icons-sharp fs-7">star_half</span></li>
                            <li><span class="material-icons material-icons-sharp fs-7">star_outline</span></li>
                        </ul>                                
                        <span class="fs-8">(35)</span> -->
            </div>
            <div class="classify fs-8">
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
          <div class="btnBox d-flex flex-column justify-content-center">
            <div class="btnResLink">
              <a
                :href="theResourceData.url"
                type="button"
                class="btn btn-sm btn-secondary my-2 text-white px-lg-4 py-2 fs-6"
              >
                前往資源
              </a>
            </div>
            <div
              class="d-flex justify-content-center flex-row flex-md-column flex-lg-row align-items-center"
            >
              <a
                role="button"
                class="btnBookmark d-flex align-items-center me-2"
              >
                <span class="material-icons">bookmark_border</span>
                <span>收藏</span>
              </a>

              <a href="#" role="button" class="d-flex align-items-center me-2">
                <span class="material-icons material-icons-outlined"
                  >feedback</span
                >
                <!-- <span class="material-icons">feedback</span> -->
                <span>回報</span>
              </a>
            </div>
          </div>
        </div>

        <!-- resourceComment -->
        <div class="resourceComment">
          <!--登入後顯示-->
          <div class="loginComment">
            <button
              class="btnComment btn btn-outline-primary w-100"
              data-bs-toggle="collapse"
              href="#collapseComment"
              role="button"
              aria-expanded="false"
              aria-controls="collapseComment"
            >
              立即評論
            </button>

            <div
              class="commentContent collapse border border-2 rounded-3 p-lg-4 my-2 p-2"
              id="collapseComment"
            >
              <div
                class="d-flex p-3 align-items-center justify-content-between"
              >
                <!--card card-body -->
                <h3 class="userInfo card-title fs-7 d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src="@/assets/images/icon_image.png"
                    alt=""
                  />
                  <p class="mb-0 mx-2 text-start">
                    Jenny<br />
                    <span class="fs-9 text-gray">5 年前端工程師</span>
                  </p>
                </h3>
                <ul
                  class="commentStar card-text d-flex align-items-center lh-1"
                >
                  <li>
                    <a href="#" role="button"
                      ><span class="material-icons material-icons-sharp"
                        >star_outline</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" role="button"
                      ><span class="material-icons material-icons-sharp"
                        >star_outline</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" role="button"
                      ><span class="material-icons material-icons-sharp"
                        >star_outline</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" role="button"
                      ><span class="material-icons material-icons-sharp"
                        >star_outline</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" role="button"
                      ><span class="material-icons material-icons-sharp"
                        >star_outline</span
                      ></a
                    >
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
                  ></textarea>
                  <span class="message commentTextarea text-danger fs-8"></span>
                  <label for="commentTextarea">Comments</label>
                </div>
                <button
                  role="button"
                  class="btnCommentSubmit btn btn-primary text-white mt-4"
                >
                  送出評論
                </button>
              </div>
            </div>
          </div>

          <!--commentSort 排序-->
          <div class="row mt-5">
            <div class="col-10"></div>
            <div class="col input-group w-35 text-end mb-3">
              <select class="form-select form-select-sm" id="commentSort">
                <option value="new">最新</option>
                <option value="heightRate" selected>評價最高</option>
                <option value="heightRate" selected>評價最低</option>
              </select>
            </div>
          </div>

          <!--comment-->
          <div class="row commentList">
            <div
              v-for="comment in theResCommentsData"
              :key="comment.id"
              class="col mb-3"
              style="z-index: 10"
            >
              <!-- <div
                class="card card-body position-relatvie d-flex justify-content-between"
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
                      >${prefix}</span
                    >

                    <p class="mb-0 mx-2 text-start">
                      ${userName}<br />
                      <span class="fs-9 text-gray">${item.user.title}</span>
                    </p>
                  </h3>
                  <div class="d-flex flex-lg-column justify-content-between">
                    <ul class="card-text d-flex align-items-center lh-1">
                      ${newResultScoreOjb[1]}
                    </ul>
                    <p class="mb-0 text-end">
                      <span class="fs-9 text-gray">${commentTimeAge}</span>
                    </p>
                  </div>
                </div>

                <div class="d-flex flex-column">
                  <div class="form-floating my-3">
                    <p>${item.content}</p>
                  </div>
                </div>

                <div class="d-flex justify-content-between fs-8">
                  <div class="d-flex align-items-center">
                    <a href="#">
                      <span class="material-icons-outlined fs-6"
                        >thumb_up_alt</span
                      ></a
                    >
                    <span class="mx-2">${item.likeNum}</span>
                  

                    <a href="#">
                      <span class="material-icons-outlined fs-6"
                        >thumb_down_alt</span
                      ></a
                    >
                    <span class="mx-2">${item.dislikeNum}</span>
                    
                  </div>

                  <div class="position-relatvie">
                    <a
                      class="d-flex align-items-center"
                      data-bs-toggle="collapse"
                      href="#commentOffense${commentNum+1}"
                      role="button"
                      aria-expanded="false"
                      aria-controls="commentOffense"
                    >
                      <span class="material-icons-outlined">report</span>
                      <span>檢舉</span>
                    </a>

                    <div
                      class="offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0"
                      id="commentOffense${commentNum+1}"
                      style="z-index: 0"
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
                  </div>
                </div>
              </div> -->
              <div class="card card-body" style="z-index: 10">
                <div
                  class="d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"
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
                      <li v-for="star in comment.score" :key="star">
                        <a href="#" role="button">
                          <span class="material-icons material-icons-sharp"
                            >star</span
                          ></a
                        >
                      </li>
                      <li v-for="star in 5 - comment.score" :key="star">
                        <a href="#" role="button"
                          ><span class="material-icons material-icons-sharp"
                            >star_outline</span
                          ></a
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
                  <div class="form-floating my-3">
                    <p>{{ comment.content }}</p>
                  </div>
                </div>

                <div class="d-flex justify-content-between fs-8">
                  <!-- 按讚數 -->
                  <div class="d-flex align-items-center">
                    <a href="#"
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
                  </div>

                  <div class="position-relatvie">
                    <a
                      class="d-flex align-items-center"
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
                  </div>
                </div>
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

            <!-- Modal -->
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
                              alt=""
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
                              alt=""
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
                              alt=""
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
                              alt=""
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
    </div>
  </router-view>
</template>

<script>
// 取得資源資料
import { mapState, mapActions } from "pinia";
import resourcesStore from "@/stores/resourcesStore";
import LoadingComponent from "@/components/LoadingComponent.vue";
import TimeStamp from "@/components/TimeStamp.vue";

const { VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: true,
      theResourceId: this.$route.query.id, //取得路由中 ?id= 的值
      theResourceData: {}, //單一資源內容
      theResCommentsData: [], //取得該資源的評論
      relatedResData: [], //相關資源
    };
  },
  components: {
    LoadingComponent,
    TimeStamp,
  },
  computed: {
    ...mapState(resourcesStore, [
      "resourcesData",
      "commentsData",
      "resourcesObj",
    ]),
  },
  watch: {
    resourcesData(newValue) {
      this.relatedResData = newValue
        .filter((value) => {
          return value.topics === this.theResourceData.topics;
        })
        // 比對出符合條件的值後，隨機產生5筆相關資源
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    },
  },
  methods: {
    ...mapActions(resourcesStore, [
      "getResources",
      "getComments",
      "getAverageScore",
    ]),
    getTheResourceData() {
      this.$http
        .get(
          `${VITE_API_PATH}/resources?id=${this.theResourceId}&&_expand=user`
        )
        .then((res) => {
          //console.log(res.data);
          this.theResourceData = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getResCommentsData() {
      this.$http
        .get(
          `${VITE_API_PATH}/comments?_expand=resouceId&&resourceId=${this.theResourceId}&&_expand=user`
        )
        .then((res) => {
          this.theResCommentsData = res.data;
          console.log(this.theResCommentsData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeCollapse() {
      const activeCollapse = document.querySelector(".offenseItem.show");
      if (activeCollapse) {
        activeCollapse.classList.remove("show");
      }
    },
  },
  created() {},
  mounted() {
    if (typeof parseInt(this.resourceId) != "number") {
      this.$router.push("/");
    }
    this.getTheResourceData();
    this.getResCommentsData();
    this.getResources();
    // this.getTimeStamp();
    this.relatedResData = this.resourcesData.filter((value) => {
      return value.topics === this.theResourceData.topics;
    });
    console.log("relatedResData", this.relatedResData);
    console.log("theResCommentsData", this.theResCommentsData);

    if (this.theResourceData === undefined) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
  },
};
</script>
