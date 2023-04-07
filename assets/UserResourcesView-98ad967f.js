import{L as p,S as f}from"./StarComponent-a743a90e.js";import{_ as b,U as u,r,o as n,c,d as s,b as t,F as m,G as x,H as B,f as l,i as h,t as $}from"./index-bf060d23.js";const{VITE_API_PATH:i}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{isLoading:!1,userInfo:null,userId:localStorage.getItem("userId"),accessToken:localStorage.getItem("accessToken"),userBookmarksData:[]}},components:{LoadingComponent:p,StarComponent:f},computed:{},methods:{getUserData(){this.$http.get(`${i}/users/${this.userId}`).then(e=>{this.userInfo=e.data[0],this.isLogin=!0}).catch(e=>{console.log(e)})},getUserBookmarks(){this.$http.get(`${i}/bookmarks?_expand=resource&&userId=${this.userId}`).then(e=>{this.userBookmarksData=e.data}).catch(()=>{})},removeResourceItem(e){u.fire({title:"您確定要取消收藏嗎?",icon:"warning",iconColor:"#F8B436",showCancelButton:!0,confirmButtonColor:"#4AA9B6",cancelButtonColor:"#F8B436",confirmButtonText:"是",cancelButtonText:"否"}).then(d=>{d.isConfirmed&&typeof Storage<"u"&&this.$http.delete(`${i}/bookmarks/${e}`,{Authorization:`Bearer ${this.accessToken}`}).then(()=>{u.fire({title:"已成功取消收藏",confirmButtonColor:"#4AA9B6"}),this.getUserBookmarks()}).catch(()=>{})}).catch(()=>{})}},created(){this.getUserData(),this.getUserBookmarks()},mounted(){}},S={class:"container my-8 pb-5"},C={class:"mt-4"},w=B('<div class="row border-bottom pb-2"><div class="col-2 d-none d-xl-block"></div><div class="col-1 d-none d-md-block"></div><div class="col-6 col-xl-4 col-md-5 text-center">資源項目</div><div class="col-6 col-xl-4 col-md-5 text-center">操作</div><div class="col-1 d-none d-xl-block"></div></div>',1),A={class:"row"},T={class:"col userResourcesList"},U=t("div",{class:"col-2 d-none d-xl-block"},null,-1),D={key:0,class:"col-1 d-none d-md-block"},L=["src","alt"],R={key:1,class:"col-1 d-none d-md-block"},V=["src","alt"],E={class:"col-xl-4 col-5 col-md-5"},P={class:"fs-7 ellipsis"},j={class:"col-xl-4 col-6 col-md-5"},H={class:"d-flex align-items-center justify-content-center flex-md-row"},F=["href"],N=["onClick"],O=t("span",{class:"fs-6 material-icons btnRemove"},"bookmark_remove",-1),z=[O],G=t("div",{class:"col-1 d-none d-xl-block"},null,-1);function M(e,d,q,J,_,g){const k=r("loading-component"),a=r("router-link"),v=r("star-component");return n(),c(m,null,[s(k,{"is-loading":_.isLoading},null,8,["is-loading"]),t("div",S,[t("div",C,[w,t("div",A,[t("div",T,[(n(!0),c(m,null,x(_.userBookmarksData,o=>(n(),c("div",{key:o.resourceId,class:"row py-1 my-3 d-flex align-items-center itemRow"},[U,o.resource.imgUrl!=""?(n(),c("div",D,[s(a,{to:`/resource/${o.resource.id}`,target:"_blank"},{default:l(()=>[t("img",{src:`./images/resources_cover/${o.resource.imgUrl}`,alt:o.resource.title},null,8,L)]),_:2},1032,["to"])])):(n(),c("div",R,[s(a,{to:`/resource/${o.resource.id}`,target:"_blank"},{default:l(()=>[t("img",{src:"./images/resources_cover/noimgCover.jpg",alt:o.resource.title},null,8,V)]),_:2},1032,["to"])])),t("div",E,[t("h4",P,[s(a,{class:"text-dark",to:`/resource/${o.resource.id}`,target:"_blank"},{default:l(()=>[h($(o.resource.title),1)]),_:2},1032,["to"])]),s(v,{commentSum:o==null?void 0:o.resource.commentSum,averageScore:o==null?void 0:o.resource.averageScore.toString()},null,8,["commentSum","averageScore"])]),t("div",j,[t("div",H,[s(a,{class:"btn btnHover btn-outline-primary my-lg-2 mx-lg-1",role:"button",to:`/resource/${o.resource.id}`},{default:l(()=>[h("查看評論")]),_:2},1032,["to"]),t("a",{href:o.resource.url,target:"_blank",type:"button",class:"btn btnHover btn-outline-secondary my-2 mx-2"},"資源網站",8,F),t("a",{role:"button",onClick:K=>g.removeResourceItem(o.id),class:"btn my-2 mx-1 text-secondary d-none d-md-block"},z,8,N)])]),G]))),128))])])])])],64)}const X=b(y,[["render",M]]);export{X as default};
