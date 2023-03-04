import{_ as a}from"./icon_image-649870cb.js";import{_ as t}from"./icon_file-923e527a.js";import{_ as i,o as c,c as r,F as n,e as s,f as o}from"./index-d2ec6a80.js";const{VITE_API_PATH:p}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR",MODE:"production",DEV:!1,PROD:!0},m={data(){return{resourcesData:[]}},methods:{getResources(){this.$http.get(`${p}/resources`).then(e=>{this.resourcesData=e.data,this.goodRateTabData=this.resourcesData.filter(l=>l.topics==="JavaScript").slice(-6),this.freeTabData=this.resourcesData.filter(l=>l.type==="線上課程"&&l.price==="免費").slice(-6),this.getComments(),console.log(this.resourcesData),console.log(this.getComments()),console.log(this.getAverageScore()),document.title="Eng!neer 程式學習資源網"}).catch(e=>{console.log(e)})}}},d=s("div",{class:"container-fluid px-3 py-5 p-lg-0 bg-primary"},[s("div",{class:"bannerBlock container p-0 p-lg-8 p-md-4"},[s("h2",{class:"text-white text-center"},"JavaScript")])],-1),u=s("div",{class:"container py-5 p-lg-8"},[s("ul",{class:"nav nav-pills mb-3 d-flex align-items-center",id:"pills-tab",role:"tablist"},[s("li",null,[s("h3",{class:"fs-5 mb-0 fw-bold me-4"},"入門推薦")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"language1-tab","data-bs-toggle":"pill","data-bs-target":"#foundation1Basic",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 初階 ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"language2-tab","data-bs-toggle":"pill","data-bs-target":"#foundation2Free",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 免費 ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"language3-tab","data-bs-toggle":"pill","data-bs-target":"#foundation3CN",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false"}," 中文資源 ")])]),s("div",{class:"tab-content border border-primary p-3 p-md- rounded-3",id:"pills-tabContent"},[s("div",{class:"tab-pane fade show active",id:"foundation1Basic",role:"tabpanel","aria-labelledby":"resourceType1-tab"},[s("div",{class:"row"},[s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:a,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])]),s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:t,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])]),s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:a,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])]),s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:a,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])]),s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:a,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])]),s("div",{class:"col-lg-2 col-md-4 col-6"},[s("div",null,[s("p",{class:"text-center"},[s("a",{href:"./resource.html",target:"_blank"},[s("img",{src:a,alt:"image"})])]),s("div",{class:"p-2"},[s("h4",{class:"fs-7"},[s("a",{href:"./resource.html",target:"_blank"}," w3schools JavaScript Tutorial w3schools...")]),s("div",{class:"d-flex flex-wrap justify-content-between align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])])])])])]),s("div",{class:"tab-pane fade",id:"foundation2Free",role:"tabpanel","aria-labelledby":"resourceType2-tab"},[s("div",{class:"row"})]),s("div",{class:"tab-pane fade",id:"foundation3CN",role:"tabpanel","aria-labelledby":"resourceType3-tab"},[s("div",{class:"row"})])])],-1),f=o('<div class="hotTopic relatedContainer container py-5 p-lg-8 pt-lg-0"><h3 class="fs-5 fw-bold mb-4">相關主題</h3><div class="row relatedTopic"><div class="col"><div class="topicItem text-center my-2 p-3 rounded-3"><a href="#" class=""><h4 class="fs-6 mb-0">HTML/CSS</h4></a></div></div><div class="col"><div class="topicItem text-center my-2 p-3 rounded-3"><a href="#" class=""><h4 class="fs-6 mb-0">JavaScript</h4></a></div></div></div></div>',1),h=s("div",{class:"filterList container py-5 p-lg-8 d-lg-flex border-top"},[s("h3",{class:"fs-5 fw-bold mb-4 d-lg-none"},"篩選"),s("div",{class:"filter bg-white rounded-3 p-4 me-lg-4 d-flex flex-wrap flex-lg-column flex-column justify-content-between justify-content-lg-start flex-sm-row"},[s("div",{class:"filterGroup1 mb-4 pb-4"},[s("h3",{class:"fs-6"},"資源性質"),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"typeArticles",class:"me-2","data-group":"type",name:"文章"}),s("label",{for:"typeArticles",class:"me-2"},"文章")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"typeBooks",class:"me-2","data-group":"type",name:"書籍"}),s("label",{for:"typeBooks",class:"me-2"},"書籍")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"typeOnline",class:"me-2","data-group":"type",name:"線上課程"}),s("label",{for:"typeOnline",class:"me-2"},"線上課程")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"typeOffline",class:"me-2","data-group":"type",name:"實體課程"}),s("label",{for:"typeOffline",class:"me-2"},"實體課程")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"typeThirdParty",class:"me-2","data-group":"type",name:"第三方技術網站"}),s("label",{for:"typeThirdParty",class:"me-2"},"第三方技術網站")])]),s("div",{class:"filterGroup2 mb-4 pb-4"},[s("h3",{class:"fs-6"},"適用等級"),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"lvBasic",class:"me-2","data-group":"level",name:"初階"}),s("label",{for:"lvBasic"},"初階")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"lvMedium",class:"me-2","data-group":"level",name:"中階"}),s("label",{for:"lvMedium",class:"me-2"},"中階")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"lvAdvanced",class:"me-2","data-group":"level",name:"高階"}),s("label",{for:"lvAdvanced",class:"me-2"},"高階")])]),s("div",{class:"filterGroup3 mb-4 pb-4"},[s("h3",{class:"fs-6"},"價格"),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"costFree",class:"me-2","data-group":"price",name:"免費"}),s("label",{for:"costFree",class:"me-2"},"免費")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"costPay",class:"me-2","data-group":"price",name:"付費"}),s("label",{for:"costPay",class:"me-2"},"付費")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"costPartiallyPaid",class:"me-2","data-group":"price",name:"部分付費"}),s("label",{for:"costPartiallyPaid",class:"me-2"},"部分付費")])]),s("div",{class:"filterGroup4 mb-4 pb-4"},[s("h3",{class:"fs-6"},"語系"),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"langTc",class:"me-2","data-group":"lang",name:"繁體中文"}),s("label",{for:"langTc",class:"me-2"},"繁體中文")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"langSc",class:"me-2","data-group":"lang",name:"簡體中文"}),s("label",{for:"langSc",class:"me-2"},"簡體中文")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"langEn",class:"me-2","data-group":"lang",name:"英文"}),s("label",{for:"langEn",class:"me-2"},"英文")]),s("div",{class:"input-group filterItem"},[s("input",{type:"checkbox",id:"langMulti",class:"me-2","data-group":"lang",name:"多語系"}),s("label",{for:"langMulti",class:"me-2"},"多語系")])])]),s("div",{class:"resourceList"},[s("div",{class:"row d-lg-flex align-items-center mb-5 mb-lg-0 justify-content-between"},[s("div",{class:"col-md-5 fs-8 mb-3 mb-md-0"},[s("span",{class:"resultNumber me-3"}," 1133 個結果 "),s("a",{role:"button",id:"clearFilterBtn"},[s("span",{class:"clearBtnText text-primary"},"清除篩選條件")])]),s("div",{class:"col-md-3 d-flex align-items-end"},[s("div",{class:"input-group"},[s("select",{class:"form-select form-select-sm",id:"resourceSort"},[s("option",{value:"heightRate"},"最高評價"),s("option",{value:"new"},"最新")])])])]),s("div",{class:"row"},[s("div",{class:"col resourceItem"},[s("div",{class:"row my-3"},[s("div",{class:"col-2"},[s("img",{src:a,alt:""})]),s("div",{class:"col-6"},[s("h4",{class:"fs-7"}," w3schools JavaScript Tutorial w3schools w3schools JavaScript Tutorial w3schools... "),s("div",{class:"d-flex flex-wrap align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])]),s("div",{class:"col-4"},[s("div",{class:"d-flex flex-column align-items-end"},[s("button",{type:"button",class:"btn btn-tiffany my-2 w-75"}," 前往資源 "),s("button",{type:"button",class:"btn btn-yellowBrown w-75 my-2"}," 查看評論 ")])])]),s("div",{class:"row my-3"},[s("div",{class:"col-2"},[s("img",{src:a,alt:""})]),s("div",{class:"col-6"},[s("h4",{class:"fs-7"}," w3schools JavaScript Tutorial w3schools w3schools JavaScript Tutorial w3schools... "),s("div",{class:"d-flex flex-wrap align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])]),s("div",{class:"col-4"},[s("div",{class:"d-flex flex-column align-items-end"},[s("button",{type:"button",class:"btn btn-tiffany my-2 w-75"}," 前往資源 "),s("button",{type:"button",class:"btn btn-yellowBrown w-75 my-2"}," 查看評論 ")])])]),s("div",{class:"row my-3"},[s("div",{class:"col-2"},[s("img",{src:a,alt:""})]),s("div",{class:"col-6"},[s("h4",{class:"fs-7"}," w3schools JavaScript Tutorial w3schools w3schools JavaScript Tutorial w3schools... "),s("div",{class:"d-flex flex-wrap align-items-center"},[s("span",{class:"fs-7 fw-bold me-lg-2"},"3.2"),s("ul",{class:"d-flex align-items-center lh-1 me-lg-2"},[s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_half")]),s("li",null,[s("span",{class:"material-icons material-icons-sharp fs-8"},"star_outline")])]),s("span",{class:"fs-8"},"(35)")])]),s("div",{class:"col-4"},[s("div",{class:"d-flex flex-column align-items-end"},[s("button",{type:"button",class:"btn btn-tiffany my-2 w-75"}," 前往資源 "),s("button",{type:"button",class:"btn btn-yellowBrown w-75 my-2"}," 查看評論 ")])])])])])])],-1);function g(e,l,b,v,y,w){return c(),r(n,null,[d,u,f,h],64)}const T=i(m,[["render",g]]);export{T as default};