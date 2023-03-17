import{L as N}from"./LoadingComponent-006545ed.js";import{_ as j,o as a,c as l,t as i,S as u,r as b,d as p,w as A,F as f,b as e,D as C,C as _,g,e as T,I as O,O as V}from"./index-501962d9.js";import{S as z}from"./StarComponent-7b1d1e8e.js";const M={props:{timespan:{type:Number,required:!0}},data(){return{timeSpanStr:""}},methods:{TimeStamp(s){var n=new Date(s*1e3),x=n.getFullYear(),k=n.getMonth()+1,t=n.getDate(),r=n.getHours(),v=n.getMinutes(),y=Date.parse(new Date),c=0,m;c=y/1e3-s,c<=60?m="剛剛":60<c&&c<=60*60?m=Math.ceil(c/60)+"分鐘前":60*60<c&&c<=60*60*24?m=Math.ceil(c/(60*60))+"小時前":60*60*24<c&&c<=60*60*24*30?m=Math.ceil(c/(60*60*24))+"天前":60*60*24*30<c&&c<=60*60*24*30*12?m=Math.ceil(c/(60*60*24*30))+"個月前":m=x+"年"+k+"月"+t+"日 "+r+":"+v,this.timeSpanStr=m}},mounted(){this.TimeStamp(this.timespan)}};function F(s,n,x,k,t,r){return a(),l("div",null,i(t.timeSpanStr),1)}const P=j(M,[["render",F]]),L="/VueProjectLR/assets/icon_image-e8d535a3.png",{VITE_API_PATH:d}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR",MODE:"production",DEV:!1,PROD:!0},E={data(){return{isLoading:!0,resourcesData:[],relatedResData:[],theResourceId:this.$route.params.resourceId,theResourceData:{},theResCommentsData:[],theUserBookmarksData:[],isBookmark:!1,bookmarkItem:{},userId:localStorage.getItem("userId"),accessToken:localStorage.getItem("accessToken"),isLogin:!1,userInfo:null,commentRating:0,commentContent:"",resourceScoreObj:{}}},components:{LoadingComponent:N,TimeStamp:P,StarComponent:z},computed:{},watch:{resourcesData(){console.log("theResourceData",this.theResourceData),console.log("theResCommentsData",this.theResCommentsData),console.log("relatedResData",this.relatedResData),this.theResourceData==null||this.theResCommentsData==null||this.relatedResData&&this.relatedResData.length<0?this.isLoading=!0:this.isLoading=!1}},methods:{getResources(){this.$http.get(`${d}/resources`).then(s=>{this.resourcesData=s.data,this.getRelatedResData()}).catch(()=>{})},getTheResourceData(){this.$http.get(`${d}/resources?id=${this.theResourceId}&&_expand=user`).then(s=>{this.theResourceData=s.data[0],this.getResCommentsData()}).catch(()=>{})},getResCommentsData(){this.$http.get(`${d}/comments?_expand=resouceId&&resourceId=${this.theResourceId}&&_expand=user`).then(s=>{this.theResCommentsData=s.data}).catch(()=>{})},closeCollapse(){const s=document.querySelector(".offenseItem.show");s&&s.classList.remove("show")},getUserData(){this.$http.get(`${d}/users?id=${this.userId}`,{Authorization:`Bearer ${this.accessToken}`}).then(s=>{this.userInfo=s.data[0]}).catch(()=>{})},rate(s){this.commentRating=s},checkLoginComment(){this.isLogin==!1&&u.fire({text:"請先登入",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"})},sendComment(){this.commentRating==0&&u.fire({text:"請給予評分",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0}),this.commentContent==""&&u.fire({text:"請填寫評價內容",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0}),this.commentContent.length>=20&&this.commentRating!==0?this.$http.post(`${d}/comments/`,{resourceId:this.theResourceId,userId:this.userId,commentTime:(Date.now()/1e3).toFixed(0),score:this.commentRating,content:this.commentContent,likeNum:0,dislikeNum:0},{Authorization:`Bearer ${this.accessToken}`}).then(()=>{this.$http.patch(`${d}/resources/${this.theResourceId}`,{averageScore:((parseFloat(this.theResourceData.averageScore)*this.theResourceData.commentSum+this.commentRating)/(this.theResourceData.commentSum+1)).toFixed(1),commentSum:this.theResourceData.commentSum+1}).then(s=>{this.getResCommentsData(),this.getTheResourceData(),console.log(s.data),window.location.reload()}).catch(s=>{console.log(s)})}).catch(s=>{console.log(s)}):u.fire({text:"請確認填寫",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0})},getRelatedResData(){this.relatedResData=this.resourcesData.filter(s=>s.topics===this.theResourceData.topics).sort(()=>.5-Math.random()).slice(0,5)},getUserBookmarks(){this.$http.get(`${d}/bookmarks?_expand=resource&&userId=${this.userId}`).then(s=>{this.theUserBookmarksData=s.data,this.bookmarkItem=this.theUserBookmarksData.find(n=>n.resourceId==this.theResourceId),console.log("theUserBookmarksData",this.theUserBookmarksData),console.log("this.isBookmark ",this.bookmarkItem)}).catch(s=>{console.log(s)})},clickBookmark(s){this.isLogin==!1?u.fire({text:"請先登入",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}):this.bookmarkItem==null?(console.log("this.isBookmark",this.isBookmark),this.$http.post(`${d}/bookmarks?userId=${this.userId}`,{resourceId:s,userId:this.userId,isFixedTop:!1},{Authorization:`Bearer ${this.accessToken}`}).then(n=>{console.log(n.data),u.fire({title:"已成功收藏",icon:"success",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}),this.getUserBookmarks()}).catch(n=>{console.log(n.data)})):(u.fire({title:"您確定要取消收藏嗎?",icon:"warning",iconColor:"#F8B436",showCancelButton:!0,confirmButtonColor:"#4AA9B6",cancelButtonColor:"#F8B436",confirmButtonText:"是",cancelButtonText:"否"}).then(n=>{n.isConfirmed&&typeof Storage<"u"&&this.$http.delete(`${d}/bookmarks/${this.bookmarkItem.id}`,{Authorization:`Bearer ${this.accessToken}`}).then(()=>{u.fire({title:"已取消收藏",icon:"success",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}),this.getUserBookmarks()}).catch(()=>{}),this.getUserBookmarks()}).catch(()=>{}),console.log("this.isBookmark",this.isBookmark),console.log("itemId",s))}},created(){this.getResources(),this.getUserData(),this.getTheResourceData(),this.getUserBookmarks(),this.userId&&(this.isLogin=!0)},mounted(){typeof parseInt(this.resourceId)!="number"&&this.$router.push("/"),this.getResCommentsData(),this.theResourceData===void 0||this.theResCommentsData===void 0||this.relatedResData&&this.relatedResData.length<0?this.isLoading=!0:this.isLoading=!1}},H=e("div",{class:"container-fluid py-5 p-lg-5 py-md-8 bg-darkTiffany d-none d-md-block"},[e("div",{class:"bannerBlock container p-0 p-lg-8 py-md-5"})],-1),q={class:"resourceContent container d-md-flex flex-md-row flex-column-reverse mb-7"},J={class:"leftRelated"},Y={class:"imageNBrief rounded-3 border p-3 bg-white"},$=["src","alt"],G={class:"mt-md-4 text-dark"},K={class:"mt-7 d-none d-md-block py-6"},Q={key:0,class:"fs-5 fw-bold text-dark relatedTitle"},W={class:"relatedResource"},X={class:"fs-7 mb-0"},Z={class:"rightInfo"},ee={class:"d-flex align-items-center flex-md-row flex-column"},te={class:"titleBox"},se={class:"fs-5 fw-bold mt-md-0 mt-3"},oe={class:"classify fs-7"},ne={class:"d-flex"},ae={key:0},le={key:1},ie={class:"btnBox d-flex flex-column justify-content-center"},ce={class:"btnResLink"},re=["href"],me={class:"d-flex justify-content-center flex-row flex-md-column flex-lg-row align-items-center"},de={key:0,class:"d-flex me-2"},he=e("span",{class:"material-icons"},"bookmark_border",-1),ue=e("span",null,"收藏",-1),fe=[he,ue],pe={key:1,class:"d-flex me-2"},_e=e("span",{class:"material-icons text-secondary"},"bookmark",-1),ge=e("span",{class:"text-secondary"},"收藏",-1),be=[_e,ge],xe=e("a",{href:"#",role:"button",class:"d-flex align-items-center me-2"},[e("span",{class:"material-icons material-icons-outlined"},"feedback"),e("span",null,"回報")],-1),ke={class:"resourceComment"},ve={class:"loginComment"},ye={key:0,class:"commentContent collapse border border-2 rounded-3 p-lg-4 my-2 p-2",id:"collapseComment"},Ce={class:"d-flex p-3 align-items-center justify-content-between"},Re={class:"userInfo card-title fs-7 d-flex align-items-center"},De={class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},Ie={class:"mb-0 mx-2 text-start"},we=e("br",null,null,-1),Be={class:"fs-9 text-gray"},Se={class:"commentStar card-text d-flex align-items-center lh-1"},Ae=["onClick"],Te={href:"#",role:"button",class:"text-primary"},Le={key:0,class:"material-icons material-icons-sharp"},je={key:1,class:"material-icons material-icons-sharp"},Ue={class:"d-flex flex-column"},Ne={class:"form-floating"},Oe={key:0,class:"message commentTextarea text-danger fs-8"},Ve={key:1,class:"message commentTextarea text-danger fs-8"},ze=e("label",{for:"commentTextarea"},"Comments",-1),Me={key:0,class:"row mt-5"},Fe=e("div",{class:"col-10"},null,-1),Pe=e("div",{class:"col input-group w-35 text-end mb-3"},[e("select",{class:"form-select form-select-sm",id:"commentSort"},[e("option",{value:"new"},"最新"),e("option",{value:"heightRate",selected:""},"評價最高"),e("option",{value:"heightRate",selected:""},"評價最低")])],-1),Ee=[Fe,Pe],He={key:1,class:"row mt-5"},qe=e("div",{class:"col text-center text-gray"},"目前尚未有任何評論",-1),Je=[qe],Ye={class:"row commentList"},$e={class:"card card-body",style:{"z-index":"10"}},Ge={class:"d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"},Ke={class:"card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"},Qe={class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},We={class:"mb-0 mx-2 text-start"},Xe=e("br",null,null,-1),Ze={class:"fs-9 text-gray"},et={class:"d-flex flex-lg-column justify-content-between"},tt={class:"card-text d-flex align-items-center lh-1"},st=e("span",{class:"text-primary material-icons material-icons-sharp"},"star",-1),ot=[st],nt=e("span",{class:"text-primary material-icons material-icons-sharp"},"star_outline",-1),at=[nt],lt={class:"mb-0 text-end"},it={class:"d-flex flex-column"},ct={class:"form-floating my-3"},rt={class:"d-flex justify-content-between fs-8"},mt={class:"d-flex align-items-center"},dt=e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_up_alt")],-1),ht={class:"mx-2"},ut=e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_down_alt")],-1),ft={class:"mx-2"},pt={class:"position-relatvie"},_t=["href"],gt=e("span",{class:"material-icons-outlined"},"report",-1),bt=e("span",null,"檢舉",-1),xt=[gt,bt],kt=["id"],vt=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem1"}),e("label",{class:"form-check-label",for:"offenseItem1"}," 偏離主題 ")],-1),yt=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem2"}),e("label",{class:"form-check-label",for:"offenseItem2"}," 垃圾內容及廣告宣傳 ")],-1),Ct=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem3"}),e("label",{class:"form-check-label",for:"offenseItem3"}," 騷擾內容及不雅用語 ")],-1),Rt=e("button",{class:"btn btn-primary btn-sm text-white",type:"submit"}," 送出 ",-1),Dt=[vt,yt,Ct,Rt],It=e("div",null,[e("div",{class:"modal fade",id:"moreComment","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-dialog-scrollable"},[e("div",{class:"modal-content"},[e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"staticBackdropLabel"}," 3.2顆星 35個評價 "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),e("div",{class:"modal-body"},[e("div",{class:"col mb-3"},[e("div",{class:"card card-body",style:{"z-index":"10"}},[e("div",{class:"d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"},[e("h3",{class:"card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"},[e("img",{class:"rounded-circle",src:L,alt:""}),e("p",{class:"mb-0 mx-2 text-start"},[g(" Jenny"),e("br"),e("span",{class:"fs-9 text-gray"},"5 年前端工程師")])]),e("div",{class:"d-flex flex-lg-column justify-content-between"},[e("ul",{class:"card-text d-flex align-items-center lh-1"},[e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])])]),e("p",{class:"mb-0 text-end"},[e("span",{class:"fs-9 text-gray"},"6 個月前")])])]),e("div",{class:"d-flex flex-column"},[e("div",{class:"form-floating my-3"},[e("p",null," 留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡 ")])]),e("div",{class:"d-flex justify-content-between fs-8"},[e("div",{class:"d-flex align-items-center"},[e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_up_alt")]),e("span",{class:"mx-2"},"35"),e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_down_alt")]),e("span",{class:"mx-2"},"3")]),e("div",{class:"position-relatvie"},[e("a",{class:"d-flex align-items-center","data-bs-toggle":"collapse",href:"#commentOffense3",role:"button","aria-expanded":"false","aria-controls":"commentOffense"},[e("span",{class:"material-icons-outlined"},"report"),e("span",null,"檢舉")]),e("div",{class:"offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0",id:"commentOffense3",style:{"z-index":"0"}},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem1"}),e("label",{class:"form-check-label",for:"offenseItem1"}," 偏離主題 ")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem2"}),e("label",{class:"form-check-label",for:"offenseItem2"}," 垃圾內容及廣告宣傳 ")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem3"}),e("label",{class:"form-check-label",for:"offenseItem3"}," 騷擾內容及不雅用語 ")]),e("button",{class:"btn btn-primary btn-sm text-white",type:"submit"}," 送出 ")])])])])]),e("div",{class:"col mb-3"},[e("div",{class:"card card-body",style:{"z-index":"10"}},[e("div",{class:"d-flex p-lg-3 align-items-lg-center flex-column flex-lg-row justify-content-between"},[e("h3",{class:"card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"},[e("img",{class:"rounded-circle",src:L,alt:""}),e("p",{class:"mb-0 mx-2 text-start"},[g(" Jenny"),e("br"),e("span",{class:"fs-9 text-gray"},"5 年前端工程師")])]),e("div",{class:"d-flex flex-lg-column justify-content-between"},[e("ul",{class:"card-text d-flex align-items-center lh-1"},[e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])]),e("li",null,[e("a",{href:"#",role:"button"},[e("span",{class:"material-icons material-icons-sharp"},"star_outline")])])]),e("p",{class:"mb-0 text-end"},[e("span",{class:"fs-9 text-gray"},"6 個月前")])])]),e("div",{class:"d-flex flex-column"},[e("div",{class:"form-floating my-3"},[e("p",null," 留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡留言內容顯示在這裡 ")])]),e("div",{class:"d-flex justify-content-between fs-8"},[e("div",{class:"d-flex align-items-center"},[e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_up_alt")]),e("span",{class:"mx-2"},"35"),e("a",{href:"#"},[e("span",{class:"material-icons-outlined fs-6"},"thumb_down_alt")]),e("span",{class:"mx-2"},"3")]),e("div",{class:"position-relatvie"},[e("a",{class:"d-flex align-items-center","data-bs-toggle":"collapse",href:"#commentOffense3",role:"button","aria-expanded":"false","aria-controls":"commentOffense"},[e("span",{class:"material-icons-outlined"},"report"),e("span",null,"檢舉")]),e("div",{class:"offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0",id:"commentOffense3",style:{"z-index":"0"}},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem1"}),e("label",{class:"form-check-label",for:"offenseItem1"}," 偏離主題 ")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem2"}),e("label",{class:"form-check-label",for:"offenseItem2"}," 垃圾內容及廣告宣傳 ")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"radio",name:"offenseItem",id:"offenseItem3"}),e("label",{class:"form-check-label",for:"offenseItem3"}," 騷擾內容及不雅用語 ")]),e("button",{class:"btn btn-primary btn-sm text-white",type:"submit"}," 送出 ")])])])])])])])])])],-1);function wt(s,n,x,k,t,r){const v=b("loading-component"),y=b("router-link"),c=b("star-component"),m=b("time-stamp"),U=b("router-view");return a(),l(f,null,[p(v,{"is-loading":t.isLoading},null,8,["is-loading"]),p(U,{onClick:r.closeCollapse},{default:A(()=>{var R,D,I,w,B,S;return[H,e("div",q,[e("div",J,[e("div",Y,[e("img",{class:"d-md-block",src:`/VueProjectLR/images/resources_cover/${t.theResourceData.imgUrl}`,alt:t.theResourceData.title},null,8,$),e("div",G,i(t.theResourceData.intro),1)]),e("div",K,[t.relatedResData.length!=0?(a(),l("h3",Q," 相關資源 ")):C("",!0),e("div",W,[(a(!0),l(f,null,_(t.relatedResData,o=>(a(),l("div",{class:"my-4",key:o.id},[e("div",null,[e("h4",X,[p(y,{to:`/resource/${o.id}`},{default:A(()=>[g(i(o.title),1)]),_:2},1032,["to"])]),p(c,{commentSum:o.commentSum,averageScore:o.averageScore},null,8,["commentSum","averageScore"])])]))),128))])])]),e("div",Z,[e("div",ee,[e("div",te,[e("h2",se,i(t.theResourceData.title),1),p(c,{commentSum:t.theResourceData.commentSum,averageScore:t.theResourceData.averageScore},null,8,["commentSum","averageScore"]),e("div",oe,[e("ul",ne,[e("li",null,i(t.theResourceData.topics)+" /",1),e("li",null,i(t.theResourceData.type)+" /",1),e("li",null,i(t.theResourceData.level)+" /",1),e("li",null,i(t.theResourceData.price),1)]),e("ul",null,[e("li",null,[(a(!0),l(f,null,_(t.theResourceData.lang,o=>(a(),l("span",{key:t.theResourceData.id+o},i(o),1))),128))]),e("li",null,[g(" 建立者 : "),((R=t.theResourceData.user)==null?void 0:R.role)==="admin"?(a(),l("span",ae,"Admin")):(a(),l("span",le,i((D=t.theResourceData.user)==null?void 0:D.firstName)+" "+i((I=t.theResourceData.user)==null?void 0:I.lastName),1))])])])]),e("div",ie,[e("div",ce,[e("a",{href:t.theResourceData.url,type:"button",class:"w-100 btn btn-sm btn-secondary my-2 text-white px-lg-4 py-2 fs-6"}," 前往資源網站 ",8,re)]),e("div",me,[e("a",{role:"button",class:"btnBookmark d-flex align-items-center me-2",onClick:n[0]||(n[0]=T(o=>r.clickBookmark(t.theResourceData.id),["prevent"]))},[t.bookmarkItem==null?(a(),l("span",de,fe)):(a(),l("span",pe,be))]),xe])])]),e("div",ke,[e("div",ve,[e("button",{class:"btnComment btnHover btn btn-outline-primary w-100","data-bs-toggle":"collapse",href:"#collapseComment",role:"button","aria-expanded":"false","aria-controls":"collapseComment",onClick:n[1]||(n[1]=(...o)=>r.checkLoginComment&&r.checkLoginComment(...o))}," 立即評論 "),t.isLogin?(a(),l("div",ye,[e("div",Ce,[e("h3",Re,[e("span",De,i((w=t.userInfo)==null?void 0:w.firstName[0].toUpperCase()),1),e("p",Ie,[g(i((B=t.userInfo)==null?void 0:B.firstName),1),we,e("span",Be,i((S=t.userInfo)==null?void 0:S.title),1)])]),e("ul",Se,[(a(),l(f,null,_(5,o=>e("li",{key:o,onClick:T(h=>r.rate(o),["prevent"])},[e("a",Te,[o<=t.commentRating?(a(),l("span",Le,"star")):(a(),l("span",je,"star_outline"))])],8,Ae)),64))])]),e("div",Ue,[e("div",Ne,[O(e("textarea",{class:"form-control",placeholder:"",id:"commentTextarea",style:{height:"100px"},"onUpdate:modelValue":n[2]||(n[2]=o=>t.commentContent=o)},null,512),[[V,t.commentContent]]),t.commentContent.length<20&&t.commentContent.length>0?(a(),l("span",Oe,"字數須超過20字")):t.commentContent.length==0||t.commentContent.length>=20?(a(),l("span",Ve)):C("",!0),ze]),e("button",{role:"button",class:"btnCommentSubmit btn btn-primary text-white mt-4",onClick:n[3]||(n[3]=(...o)=>r.sendComment&&r.sendComment(...o))}," 送出評論 ")])])):C("",!0)]),t.theResCommentsData.length>0?(a(),l("div",Me,Ee)):(a(),l("div",He,Je)),e("div",Ye,[(a(!0),l(f,null,_(t.theResCommentsData,o=>(a(),l("div",{key:o.id,class:"col mb-3",style:{"z-index":"10"}},[e("div",$e,[e("div",Ge,[e("h3",Ke,[e("span",Qe,i(o.user.firstName[0].toUpperCase()),1),e("p",We,[g(i(o.user.firstName),1),Xe,e("span",Ze,i(o.user.title),1)])]),e("div",et,[e("ul",tt,[(a(!0),l(f,null,_(parseInt(o.score),h=>(a(),l("li",{key:h},ot))),128)),(a(!0),l(f,null,_(5-parseInt(o.score),h=>(a(),l("li",{key:h},at))),128))]),e("p",lt,[p(m,{class:"fs-9 text-gray",timespan:o.commentTime},null,8,["timespan"])])])]),e("div",it,[e("div",ct,[e("p",null,i(o.content),1)])]),e("div",rt,[e("div",mt,[dt,e("span",ht,i(o.likeNum),1),ut,e("span",ft,i(o.dislikeNum),1)]),e("div",pt,[e("a",{class:"d-flex align-items-center","data-bs-toggle":"collapse",href:`#commentOffense${o.id}`,role:"button","aria-expanded":"false","aria-controls":"commentOffense",onClick:n[4]||(n[4]=(...h)=>r.closeCollapse&&r.closeCollapse(...h))},xt,8,_t),e("div",{class:"offenseItem border bg-light rounded-3 p-3 collapse position-absolute end-0",id:`commentOffense${o.id}`,style:{"z-index":"0"},onShown:n[5]||(n[5]=(...h)=>r.closeCollapse&&r.closeCollapse(...h))},Dt,40,kt)])])])]))),128))]),It])])])]}),_:1},8,["onClick"])],64)}const Tt=j(E,[["render",wt]]);export{Tt as default};
