import{L as E}from"./LoadingComponent-d4cd4a50.js";import{_ as j,o,c as n,t as a,S as d,r as g,d as f,g as U,F as _,e,N as p,j as b,h as M,w as N,v as V,i as C,Q as z}from"./index-4958f9d3.js";import{S as P}from"./StarComponent-a16b12f0.js";const H={props:{timespan:{type:Number,required:!0}},data(){return{timeSpanStr:""}},methods:{TimeStamp(i){var r=new Date(i*1e3),u=r.getFullYear(),R=r.getMonth()+1,t=r.getDate(),l=r.getHours(),v=r.getMinutes(),k=Date.parse(new Date),c=0,m;c=k/1e3-i,c<=60?m="剛剛":60<c&&c<=60*60?m=Math.ceil(c/60)+"分鐘前":60*60<c&&c<=60*60*24?m=Math.ceil(c/(60*60))+"小時前":60*60*24<c&&c<=60*60*24*30?m=Math.ceil(c/(60*60*24))+"天前":60*60*24*30<c&&c<=60*60*24*30*12?m=Math.ceil(c/(60*60*24*30))+"個月前":m=u+"年"+R+"月"+t+"日 "+l+":"+v,this.timeSpanStr=m}},mounted(){this.TimeStamp(this.timespan)}};function O(i,r,u,R,t,l){return o(),n("div",null,a(t.timeSpanStr),1)}const q=j(H,[["render",O]]),{VITE_API_PATH:h}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR/",MODE:"production",DEV:!1,PROD:!0},Q={data(){return{isLoading:!0,resourcesData:[],relatedResData:[],theResourceId:this.$route.params.resourceId,theResourceData:{},theResCommentsData:[],theUserBookmarksData:[],isBookmark:!1,bookmarkItem:{},userId:localStorage.getItem("userId"),accessToken:localStorage.getItem("accessToken"),isLogin:!1,userInfo:null,commentRating:0,commentContent:"",resourceScoreObj:{},sortCommentList:"new"}},components:{LoadingComponent:E,TimeStamp:q,StarComponent:P},computed:{},watch:{"$route.params":{handler(){this.theResourceId=this.$route.params.resourceId,this.getTheResourceData()},deep:!0},theResourceData(){this.theResourceData!==void 0&&this.theResCommentsData!==void 0&&this.relatedResData&&this.relatedResData.length>0&&(this.isLoading=!1)},sortCommentList(i){i==="new"?this.sortCommentList="new":this.sortCommentList="heightRate",this.getResCommentsData()}},methods:{getResources(){this.$http.get(`${h}/resources`).then(i=>{this.resourcesData=i.data,this.getTheResourceData()}).catch(()=>{})},getTheResourceData(){this.$http.get(`${h}/resources?id=${this.theResourceId}&&_expand=user`).then(i=>{this.theResourceData=i.data[0],this.getRelatedResData(),this.getResCommentsData()}).catch(()=>{})},getResCommentsData(){this.$http.get(`${h}/comments?_expand=resouceId&&resourceId=${this.theResourceId}&&_expand=user`).then(i=>{this.theResCommentsData=i.data,this.sortCommentList==="heightRate"?this.theResCommentsData=this.theResCommentsData.sort((r,u)=>u.score-r.score):this.sortCommentList==="new"&&(this.theResCommentsData=this.theResCommentsData.sort((r,u)=>u.commentTime-r.commentTime))}).catch(()=>{})},getRelatedResData(){this.relatedResData=this.resourcesData.filter(i=>i.topics===this.theResourceData.topics).sort(()=>.5-Math.random()).slice(0,5)},closeCollapse(){const i=document.querySelector(".offenseItem.show");i&&i.classList.remove("show")},getUserData(){this.$http.get(`${h}/users?id=${this.userId}`,{Authorization:`Bearer ${this.accessToken}`}).then(i=>{this.userInfo=i.data[0]}).catch(()=>{})},rate(i){this.commentRating=i},checkLoginComment(){this.isLogin==!1&&d.fire({text:"請先登入",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"})},sendComment(){this.commentRating==0&&d.fire({text:"請給予評分",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0}),this.commentContent==""&&d.fire({text:"請填寫評價內容",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0}),this.commentContent.length>=20&&this.commentRating!==0?this.$http.post(`${h}/comments/`,{resourceId:this.theResourceId,userId:this.userId,commentTime:(Date.now()/1e3).toFixed(0),score:this.commentRating,content:this.commentContent,likeNum:0,dislikeNum:0},{Authorization:`Bearer ${this.accessToken}`}).then(()=>{this.$http.patch(`${h}/resources/${this.theResourceId}`,{averageScore:((parseFloat(this.theResourceData.averageScore)*this.theResourceData.commentSum+this.commentRating)/(this.theResourceData.commentSum+1)).toFixed(1),commentSum:this.theResourceData.commentSum+1}).then(()=>{this.getResCommentsData(),this.getTheResourceData(),window.location.reload()}).catch(()=>{})}).catch(()=>{}):d.fire({text:"請確認填寫",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6",showConfirmButton:!0})},getUserBookmarks(){this.$http.get(`${h}/bookmarks?_expand=resource&&userId=${this.userId}`).then(i=>{this.theUserBookmarksData=i.data,this.bookmarkItem=this.theUserBookmarksData.find(r=>r.resourceId==this.theResourceId)}).catch(()=>{})},weblinkReminder(){d.fire({title:"即將前往外部網站",text:"點擊「確定」將前往該網站，是否繼續？",icon:"warning",iconColor:"#4AA9B6",showCancelButton:!0,confirmButtonColor:"#008C9E",cancelButtonColor:"#FF8608",confirmButtonText:"確定",cancelButtonText:"取消"}).then(i=>{i.isConfirmed&&window.open(this.theResourceData.url,"_blank")})},clickBookmark(i){this.isLogin==!1?d.fire({text:"請先登入",icon:"info",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}):this.bookmarkItem==null?this.$http.post(`${h}/bookmarks?userId=${this.userId}`,{resourceId:i,userId:this.userId,isFixedTop:!1},{Authorization:`Bearer ${this.accessToken}`}).then(()=>{d.fire({title:"已成功收藏",icon:"success",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}),this.getUserBookmarks()}).catch(()=>{}):d.fire({title:"您確定要取消收藏嗎?",icon:"warning",iconColor:"#4AA9B6",showCancelButton:!0,confirmButtonColor:"#4AA9B6",cancelButtonColor:"#F8B436",confirmButtonText:"是",cancelButtonText:"否"}).then(r=>{r.isConfirmed&&typeof Storage<"u"&&this.$http.delete(`${h}/bookmarks/${this.bookmarkItem.id}`,{Authorization:`Bearer ${this.accessToken}`}).then(()=>{d.fire({title:"已取消收藏",icon:"success",iconColor:"#4AA9B6",confirmButtonColor:"#4AA9B6"}),this.getUserBookmarks()}).catch(()=>{}),this.getUserBookmarks()}).catch(()=>{})}},created(){this.getResources(),this.getUserData(),this.getUserBookmarks(),this.userId&&(this.isLogin=!0)},mounted(){typeof parseInt(this.resourceId)!="number"&&this.$router.push("/"),this.getResCommentsData(),document.title="Eng!neer 程式學習資源網"+this.theResourceData.title}},Y=e("div",{class:"container-fluid py-5 p-lg-5 py-md-8 bg-primary d-none d-lg-block"},[e("div",{class:"bannerBlock container p-0 p-lg-8 py-md-5"})],-1),G={class:"resourceContent container d-flex flex-lg-row flex-column-reverse flex-column mb-7"},J={class:"rightInfo mt-5 mt-lg-0"},K={class:"d-flex align-items-center flex-md-row flex-column bg-primary p-3"},W={class:"titleBox"},X={class:"text-white fs-5 fw-bold mt-md-0 mt-3"},Z={class:"classify fs-7 text-white"},$={class:"d-flex"},ee={key:0},te={key:1},se={class:"resourceComment"},oe={class:"loginComment"},ne={key:0,ref:"commentModal",class:"modal fade",id:"commentModal",tabindex:"-1",role:"dialog","data-bs-backdrop":"static","data-bs-keyboard":"false","aria-labelledby":"commentModalLabel","aria-hidden":"true"},ie={class:"modal-dialog modal-lg modal-dialog-centered"},re={class:"modal-content"},ae=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"commentModalLabel"},"評論"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ce={class:"modal-body"},le={key:0,class:"commentContent border border-2 rounded-3 p-lg-4 my-2 p-2"},me={class:"d-flex p-3 align-items-center justify-content-between"},de={class:"userInfo card-title fs-7 d-flex align-items-center"},he={class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},ue={class:"mb-0 mx-2 text-start"},_e=e("br",null,null,-1),fe={class:"fs-9 text-gray"},pe={class:"commentStar card-text d-flex align-items-center lh-1"},ge=["onClick"],ke={href:"#",role:"button",class:"text-primary"},xe={key:0,class:"material-icons material-icons-sharp"},be={key:1,class:"material-icons material-icons-sharp"},Ce={class:"d-flex flex-column"},Re={class:"form-floating"},ve={key:0,class:"message commentTextarea text-danger fs-8"},ye={key:1,class:"message commentTextarea text-danger fs-8"},De=e("label",{for:"commentTextarea"},"Comments",-1),we={key:0,class:"row mt-5"},Be=e("div",{class:"col-9"},null,-1),Ae={class:"col input-group w-35 text-end mb-3"},Se=e("option",{value:"new"},"最新",-1),Ie=e("option",{value:"heightRate",selected:""},"評價最高",-1),Te=[Se,Ie],Le={key:1,class:"row mt-5"},Ue=e("div",{class:"col text-center text-gray"},"目前尚未有任何評論",-1),Me=[Ue],Ne={class:"row commentList"},je={class:"card card-body position-relative text-dark",style:{"z-index":"10"}},Fe={class:"d-flex align-items-lg-center flex-column flex-lg-row justify-content-between"},Ee={class:"card-title fs-7 d-flex align-items-center justify-content-lg-start justify-content-between"},Ve={class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},ze={class:"mb-0 mx-2 text-start"},Pe=e("br",null,null,-1),He={class:"fs-9 text-gray"},Oe={class:"d-flex flex-lg-column justify-content-between"},qe={class:"card-text d-flex align-items-center lh-1"},Qe=e("span",{class:"text-primary material-icons material-icons-sharp"},"star",-1),Ye=[Qe],Ge=e("span",{class:"text-primary material-icons material-icons-sharp"},"star_outline",-1),Je=[Ge],Ke={class:"mb-0 text-end"},We={class:"d-flex flex-column"},Xe={class:"form-floating mt-2 mb-4"},Ze={class:"leftRelated"},$e={class:"imageNBrief rounded-3 border p-3 p-md-4 bg-white"},et=["src","alt"],tt=["src","alt"],st={class:"btnBox w-100"},ot={class:"btnResLink mt-3"},nt={class:"d-flex justify-content-center flex-row flex--column flex-lg-row align-items-center"},it={key:0,class:"d-flex text-dark me-2"},rt=e("span",{class:"material-icons"},"bookmark_border",-1),at=e("span",null,"收藏",-1),ct=[rt,at],lt={key:1,class:"d-flex me-2"},mt=e("span",{class:"material-icons text-primary"},"bookmark",-1),dt=e("span",{class:"text-primary"},"收藏",-1),ht=[mt,dt],ut={class:"mt-md-4 text-dark"},_t={class:"mt-4 d-none d-lg-block py-6 d-sm-none"},ft={key:0,class:"fs-5 fw-bold text-dark relatedTitle"},pt={class:"relatedResource"},gt={class:"fs-7 mb-0"};function kt(i,r,u,R,t,l){const v=g("loading-component"),k=g("star-component"),c=g("time-stamp"),m=g("router-link"),F=g("router-view");return o(),n(_,null,[f(v,{"is-loading":t.isLoading},null,8,["is-loading"]),f(F,{onClick:l.closeCollapse,class:"flex-column"},{default:U(()=>{var y,D,w,B,A,S,I,T,L;return[Y,e("div",G,[e("div",J,[e("div",K,[e("div",W,[e("h2",X,a(t.theResourceData.title),1),f(k,{commentSum:(y=t.theResourceData)==null?void 0:y.commentSum,averageScore:(w=(D=t.theResourceData)==null?void 0:D.averageScore)==null?void 0:w.toString(),color:"#FAD816",colorRelated:"#E5E5E5"},null,8,["commentSum","averageScore"]),e("div",Z,[e("ul",$,[e("li",null,a(t.theResourceData.topics)+" /",1),e("li",null,a(t.theResourceData.type)+" /",1),e("li",null,a(t.theResourceData.level)+" /",1),e("li",null,a(t.theResourceData.price),1)]),e("ul",null,[e("li",null,[(o(!0),n(_,null,p(t.theResourceData.lang,s=>(o(),n("span",{key:t.theResourceData.id+s},a(s),1))),128))]),e("li",null,[b(" 建立者 : "),((B=t.theResourceData.user)==null?void 0:B.role)==="admin"?(o(),n("span",ee,"Admin")):(o(),n("span",te,a((A=t.theResourceData.user)==null?void 0:A.firstName)+" "+a((S=t.theResourceData.user)==null?void 0:S.lastName),1))])])])])]),e("div",se,[e("div",oe,[t.isLogin?(o(),n("div",ne,[e("div",ie,[e("div",re,[ae,e("div",ce,[t.isLogin?(o(),n("div",le,[e("div",me,[e("h3",de,[e("span",he,a((I=t.userInfo)==null?void 0:I.firstName[0].toUpperCase()),1),e("p",ue,[b(a((T=t.userInfo)==null?void 0:T.firstName),1),_e,e("span",fe,a((L=t.userInfo)==null?void 0:L.title),1)])]),e("ul",pe,[(o(),n(_,null,p(5,s=>e("li",{key:s,onClick:M(x=>l.rate(s),["prevent"])},[e("a",ke,[s<=t.commentRating?(o(),n("span",xe,"star")):(o(),n("span",be,"star_outline"))])],8,ge)),64))])]),e("div",Ce,[e("div",Re,[N(e("textarea",{class:"form-control",placeholder:"",id:"commentTextarea",style:{height:"100px"},"onUpdate:modelValue":r[0]||(r[0]=s=>t.commentContent=s)},null,512),[[V,t.commentContent]]),t.commentContent.length<20&&t.commentContent.length>0?(o(),n("span",ve," 字數須超過20字 ")):t.commentContent.length==0||t.commentContent.length>=20?(o(),n("span",ye)):C("",!0),De]),e("button",{type:"button",class:"btnCommentSubmit btn btn-primary text-white mt-4",onClick:r[1]||(r[1]=(...s)=>l.sendComment&&l.sendComment(...s))}," 送出評論 ")])])):C("",!0)])])])],512)):C("",!0)]),t.theResCommentsData.length>0?(o(),n("div",we,[Be,e("div",Ae,[N(e("select",{class:"form-select form-select-sm",id:"commentSort","onUpdate:modelValue":r[2]||(r[2]=s=>t.sortCommentList=s)},Te,512),[[z,t.sortCommentList]])])])):(o(),n("div",Le,Me)),e("div",Ne,[(o(!0),n(_,null,p(t.theResCommentsData,s=>(o(),n("div",{key:s.id,class:"col-6 mb-3",style:{"z-index":"10"}},[e("div",je,[e("div",Fe,[e("h3",Ee,[e("span",Ve,a(s.user.firstName[0].toUpperCase()),1),e("p",ze,[b(a(s.user.firstName),1),Pe,e("span",He,a(s.user.title),1)])]),e("div",Oe,[e("ul",qe,[(o(!0),n(_,null,p(parseInt(s.score),x=>(o(),n("li",{key:x},Ye))),128)),(o(!0),n(_,null,p(5-parseInt(s.score),x=>(o(),n("li",{key:x},Je))),128))]),e("p",Ke,[f(c,{class:"fs-9 text-gray",timespan:parseInt(s.commentTime)},null,8,["timespan"])])])]),e("div",We,[e("div",Xe,[e("p",null,a(s.content),1)])])])]))),128))])])]),e("div",Ze,[e("div",$e,[t.theResourceData.imgUrl!=""?(o(),n("img",{key:0,class:"d-lg-block w-100",src:`./images/resources_cover/${t.theResourceData.imgUrl}`,alt:t.theResourceData.title},null,8,et)):(o(),n("img",{key:1,class:"d-lg-block w-100",src:"./images/resources_cover/noimgCover.jpg",alt:t.theResourceData.title},null,8,tt)),e("div",st,[e("div",ot,[e("button",{onClick:r[3]||(r[3]=(...s)=>l.checkLoginComment&&l.checkLoginComment(...s)),role:"button","aria-expanded":"false","data-bs-toggle":"modal","data-bs-target":"#commentModal",class:"w-100 btn btn-sm my-2 bg-primary text-white px-lg-4 py-2 fs-6"}," 立即評論 "),e("a",{target:"_blank",type:"button",class:"w-100 btn btn-sm my-2 bg-outline-primary border border-primary text-primary px-lg-4 py-2 fs-6",onClick:r[4]||(r[4]=(...s)=>l.weblinkReminder&&l.weblinkReminder(...s))}," 資源網站 ")]),e("div",nt,[e("a",{role:"button",class:"btnBookmark d-flex align-items-center me-2",onClick:r[5]||(r[5]=M(s=>l.clickBookmark(t.theResourceData.id),["prevent"]))},[t.bookmarkItem==null?(o(),n("span",it,ct)):(o(),n("span",lt,ht))])])]),e("div",ut,a(t.theResourceData.intro),1)]),e("div",_t,[t.relatedResData.length!=0?(o(),n("h3",ft," 相關資源 ")):C("",!0),e("div",pt,[(o(!0),n(_,null,p(t.relatedResData,s=>(o(),n("div",{class:"my-4",key:s.id},[e("div",null,[e("h4",gt,[f(m,{class:"text-dark",to:`/resource/${s.id}`},{default:U(()=>[b(a(s.title),1)]),_:2},1032,["to"])]),f(k,{commentSum:s==null?void 0:s.commentSum,averageScore:s==null?void 0:s.averageScore.toString(),color:"#FAA037"},null,8,["commentSum","averageScore"])])]))),128))])])])])]}),_:1},8,["onClick"])],64)}const Rt=j(Q,[["render",kt]]);export{Rt as default};