<script>
export default {};
</script>
<template>
  <div class="container-fluid px-3 py-5 p-lg-0 bg-primary">
    <div class="bannerBlock container p-0 py-lg-8 py-md-4">
      <nav class="navbar navbar-expand-lg">
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active text-primary btn bg-white"
                aria-current="page"
                href="#"
                >我的資源</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link text-white" href="#">我的募集</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">我的學習</a>
            </li> -->
          </ul>
        </div>

        <!-- Button trigger modal -->
        <!-- <button
          type="button"
          class="btn btn-secondary text-white"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          + 新增資源
        </button> -->
        <!-- <a href="./add_resource.html?userid=4"role="button" class="btn btn-secondary text-white" data-bs-toggle="" data-bs-target="#"> + 新增資源</a> -->

        <!-- Modal -->
        <div
          class="modal fade d-none"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">新增資源</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3 d-flex align-items-center">
                  <div style="width: 30%">
                    <label for="resImg">資源圖片預覽</label>
                  </div>

                  <div style="width: 30%" id="resImg" class="me-4">
                    <!-- <img
                      class="d-block"
                      src="./assets/images/icon_image.png"
                      alt="資源圖片"
                    /> -->
                  </div>

                  <div style="width: 40%" class="fs-8">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="resImgDefault"
                        id="resImgDefault"
                        checked
                      />
                      <label class="form-check-label" for="resImgDefault"
                        >預設圖片</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="resImgSys"
                        id="resImgSys"
                      />
                      <label class="form-check-label" for="resImgSys"
                        >系統圖片</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="url"
                    class="form-control"
                    id="resLink"
                    placeholder="資源連結"
                  />
                  <label for="resLink">資源連結</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="resName"
                    placeholder="資源名稱"
                  />
                  <label for="resName">資源名稱</label>
                </div>

                <div class="input-group">
                  <select class="form-select form-select-sm" id="resTopic">
                    <option value="selectTopic" selected>選擇主題</option>
                    <option value="topic">(列出目前有的主題)</option>
                    <option value="newTopic">新主題</option>
                  </select>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="addNewTopic"
                    placeholder="新增主題名稱"
                  />
                  <label for="addNewTopic">新增主題名稱</label>
                  <!-- <span>提醒您 : 新增主題，若要發佈公開前將會列入後台審核機制</span> -->
                </div>

                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    placeholder=""
                    id="resIntro"
                    style="height: 100px"
                  ></textarea>
                  <label for="resIntro">資源說明</label>
                </div>

                <!-- resource_list.html filterlist -->
                <div class="filterGroup1 mb-4">
                  <h3 class="fs-6">資源性質</h3>
                  <div class="input-group">
                    <input type="checkbox" id="typeArticles" class="me-2" />
                    <label for="typeArticles" class="me-2">文章</label>

                    <input type="checkbox" id="typeBooks" class="me-2" />
                    <label for="typeBooks" class="me-2">書籍</label>

                    <input type="checkbox" id="typeOnline" class="me-2" />
                    <label for="typeOnline" class="me-2">線上課程</label>

                    <input type="checkbox" id="typeOffline" class="me-2" />
                    <label for="typeOffline" class="me-2">實體課程</label>

                    <input type="checkbox" id="typeBlog" class="me-2" />
                    <label for="typeBlog" class="me-2">個人部落格</label>

                    <input type="checkbox" id="typeThirdParty" class="me-2" />
                    <label for="typeThirdParty" class="me-2"
                      >第三方技術網站</label
                    >
                  </div>
                </div>
                <!--end filterGroup1-->

                <div class="filterGroup2 mb-4">
                  <h3 class="fs-6">適用等級</h3>
                  <div class="input-group">
                    <input type="checkbox" id="lvBasic" class="me-2" />
                    <label for="levelBasic" class="me-2">初階</label>

                    <input type="checkbox" id="lvMedium" class="me-2" />
                    <label for="lvMedium" class="me-2">中階</label>

                    <input type="checkbox" id="lvAdvanced" class="me-2" />
                    <label for="lvAdvanced" class="me-2">高階</label>
                  </div>
                </div>
                <!--end filterGroup2-->

                <div class="filterGroup3 mb-4">
                  <h3 class="fs-6">價格</h3>
                  <div class="input-group">
                    <input type="checkbox" id="costFree" class="me-2" />
                    <label for="costFree" class="me-2">免費</label>
                    <input type="checkbox" id="costPay" class="me-2" />
                    <label for="costPay" class="me-2">付費</label>
                    <input
                      type="checkbox"
                      id="costPartiallyPaid"
                      class="me-2"
                    />
                    <label for="partiallyPaid" class="me-2">部分付費</label>
                  </div>
                </div>
                <!--end filterGroup3-->

                <div class="filterGroup4 mb-4">
                  <h3 class="fs-6">語系</h3>
                  <div class="input-group">
                    <input type="checkbox" id="langTc" class="me-2" />
                    <label for="langTC" class="me-2">繁體中文</label>
                    <input type="checkbox" id="langSc" class="me-2" />
                    <label for="langSc" class="me-2">簡體中文</label>
                    <input type="checkbox" id="langEn" class="me-2" />
                    <label for="langEn" class="me-2">英文</label>
                  </div>
                </div>
                <!--end filterGroup4-->
              </div>
              <!-- modal-body -->
              <div class="modal-footer">
                <button type="button" class="btn btn-primary text-white">
                  儲存為自己使用
                </button>
                <button type="button" class="btn btn-secondary text-white">
                  發佈公開資源
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!--end bannerBlock-->
  </div>

  <div class="container p-lg-0">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
