import{_ as x,m as T,A as O,r as m,o as i,c as l,d as n,b as e,t as _,B as y,F as u,C as g,I as L,M as C,w as a,g as v,N as D}from"./index-e844e030.js";import{S as V,r as w}from"./StarComponent-f1ac7073.js";import{L as B}from"./LoadingComponent-2182a776.js";const P={data(){return{isLoading:!0,topic:this.$route.params.resTopic,topicsResData:[],foundationTabClassify:"初階",renderList:[],filterGroup:{type:["文章","書籍","線上課程","實體課程","第三方技術網站"],level:["初階","中階","高階"],price:["免費","付費","部分付費"],lang:["繁體中文","簡體中文","英文","多語系"]},checkObj:{type:[],level:[],price:[],lang:[]},sortRenderList:"heightRate"}},watch:{"checkObj.type":function(s){console.log("newVal",s),this.filterResources(),console.log("renderList",this.renderList)},"checkObj.level":function(s){console.log("newVal",s),this.filterResources(),console.log("renderList",this.renderList)},"checkObj.price":function(s){console.log("newVal",s),this.filterResources(),console.log("renderList",this.renderList)},"checkObj.lang":function(s){console.log("newVal",s),this.filterResources(),console.log("renderList",this.renderList)},sortRenderList(s){s==="new"?this.sortRenderList="new":this.sortRenderList="heightRate",this.filterResources()},"$router.params":{handler(){this.topic=this.$route.params.resTopic,this.getResources(),console.log("路由參數發生變化: ",this.$route.params.resTopic)},deep:!0},resourcesData(s){this.topicsResData=s.filter(c=>c.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")===this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")),this.foundationTabData=this.topicsResData.filter(c=>c.level==="初階 ").slice(0,6),this.renderList=[...this.topicsResData],this.renderList===void 0||this.foundationTabData===void 0?this.isLoading=!0:this.isLoading=!1}},methods:{...T(w,["getResources","getComments","getAverageScore"]),changeTabData(s){this.foundationTabClassify=s},filterResources(){return this.renderList=this.topicsResData.filter(s=>{let c=!0,f=!0,b=!0,o=!0;return this.checkObj.type.length>0&&(c=this.checkObj.type.includes(s.type)),this.checkObj.level.length>0&&(f=this.checkObj.level.includes(s.level)),this.checkObj.price.length>0&&(b=this.checkObj.price.includes(s.price)),o=s.lang.some(h=>(console.log(h),this.checkObj.lang.length===0?!0:this.checkObj.lang.includes(h))),c&&f&&b&&o}),this.sortRenderList==="heightRate"?this.renderList=this.renderList.sort((s,c)=>c.averageScore-s.averageScore):this.sortRenderList==="new"&&(this.renderList=this.renderList.sort((s,c)=>c.id-s.id)),this.renderList},clearFilter(){this.checkObj.type.splice(0,this.checkObj.type.length),this.checkObj.level.splice(0,this.checkObj.level.length),this.checkObj.price.splice(0,this.checkObj.price.length),this.checkObj.lang.splice(0,this.checkObj.lang.length),this.filterResources()}},components:{LoadingComponent:B,StarComponent:V},computed:{...O(w,["resourcesData","commentsData","resourcesObj"]),foundationTabData(){return this.topicsResData.filter(s=>this.foundationTabClassify==="初階"?s.level===this.foundationTabClassify:this.foundationTabClassify==="免費"?s.price===this.foundationTabClassify:this.topicsResData).slice(-6)}},created(){},mounted(){this.getResources(),(this.topic===null||this.topic===void 0)&&this.$router.push("/"),document.title="Eng!neer 程式學習資源網"+this.topic}},U={class:"container-fluid px-3 py-5 p-lg-0 bg-primary"},M={class:"bannerBlock container p-0 p-lg-8 p-md-4"},A={class:"text-white text-center"},F={class:"container py-5 p-lg-8"},J={class:"nav nav-pills mb-3 d-flex align-items-center",id:"pills-tab2",role:"tablist"},N=e("li",null,[e("h3",{class:"fs-5 mb-0 fw-bold me-4"},"入門推薦")],-1),H={class:"nav-item",role:"presentation"},z={class:"nav-item",role:"presentation"},G={class:"tab-content border border-primary p-3 p-md- rounded-3"},E={class:"tab-pane fade show active",role:"tabpanel","aria-labelledby":"resourceType1-tab"},Z={class:"row"},q={class:"d-flex p-2 align-items-center"},K={class:"row"},Q={key:0,class:"col-6"},W=["src","alt"],X={key:1,class:"col-6"},Y=["src","alt"],$={class:"col-6"},I={class:"ellipsis fs-7"},ee={class:"filterList container py-5 p-lg-8 pt-lg-4 d-lg-flex border-bottom"},te=e("h3",{class:"fs-5 fw-bold mb-4 d-lg-none"},"篩選",-1),se={class:"filter bg-white rounded-3 p-4 me-lg-4 d-flex flex-wrap flex-lg-column flex-column justify-content-between justify-content-lg-start flex-sm-row"},oe={class:"fs-6"},ie={class:"input-group filterItem"},le=["id","value","onUpdate:modelValue"],ce=["for"],ne={class:"resourceList"},re={class:"row d-lg-flex align-items-center mb-5 mb-lg-0 justify-content-between"},ae={class:"col-md-5 fs-8 mb-3 mb-md-0"},de={class:"resultNumber me-3"},he={key:0,class:"clearBtnText text-primary"},_e={key:1,class:"clearBtnText text-primary"},ue={class:"col-md-3 d-flex align-items-end"},pe={class:"input-group"},ge=e("option",{value:"heightRate"},"最高評價",-1),fe=e("option",{value:"new"},"最新",-1),be=[ge,fe],me={class:"row"},ve={key:0,class:"col resourceItem"},ke={key:1,class:"col resourceItem"},ye={key:0,class:"col-2"},Le=["src","alt"],we={key:1,class:"col-2"},je=["src","alt"],Re={class:"col-7"},Se={class:"ellipsis fs-7"},xe={class:"col-3"},Te={class:"d-flex"},Oe={class:"hotTopic relatedContainer container py-5 p-lg-8"},Ce=e("h3",{class:"fs-5 fw-bold mb-4"},"相關主題",-1),De={key:0,class:"row relatedTopic"},Ve={class:"col"},Be={class:"topicItem text-center my-2 p-3 rounded-3"},Pe=e("h4",{class:"fw-bold"},"HTML/CSS",-1),Ue={class:"col"},Me={class:"topicItem text-center my-2 p-3 rounded-3"},Ae=e("h4",{class:"fw-bold"},"Python",-1),Fe={key:1,class:"row relatedTopic"},Je={class:"col"},Ne={class:"topicItem text-center my-2 p-3 rounded-3"},He=e("h4",{class:"fw-bold"},"JavaScript",-1),ze={key:2,class:"row relatedTopic"},Ge={class:"col"},Ee={class:"topicItem text-center my-2 p-3 rounded-3"},Ze=e("h4",{class:"fw-bold"},"JavaScript",-1);function qe(s,c,f,b,o,h){const j=m("loading-component"),r=m("router-link"),k=m("star-component");return i(),l(u,null,[n(j,{"is-loading":o.isLoading},null,8,["is-loading"]),e("div",U,[e("div",M,[e("h2",A,_(o.topic),1)])]),e("div",F,[e("ul",J,[N,e("li",H,[e("button",{class:y(["nav-link",{active:o.foundationTabClassify==="初階"}]),"data-bs-toggle":"pill",type:"button",role:"tab","aria-controls":"pills-fundation","aria-selected":"true",onClick:c[0]||(c[0]=t=>h.changeTabData("初階"))}," 初階 ",2)]),e("li",z,[e("button",{class:y(["nav-link",{active:o.foundationTabClassify==="免費"}]),"data-bs-toggle":"pill",type:"button",role:"tab","aria-controls":"pills-freeItem","aria-selected":"false",onClick:c[1]||(c[1]=t=>h.changeTabData("免費"))}," 免費 ",2)])]),e("div",G,[e("div",E,[e("div",Z,[(i(!0),l(u,null,g(h.foundationTabData,t=>(i(),l("div",{class:"col-md-6 col-lg-4",key:t.id},[e("div",q,[e("div",K,[t.imgUrl!=""?(i(),l("div",Q,[e("img",{src:"/VueProjectLR/images/resources_cover/"+t.imgUrl,alt:t.title},null,8,W)])):(i(),l("div",X,[e("img",{src:"/VueProjectLR/images/resources_cover/noimgCover.jpg",alt:t.title},null,8,Y)])),e("div",$,[e("h4",I,[n(r,{to:`/resource/${t.id}`,target:"_blank"},{default:a(()=>[v(_(t.title),1)]),_:2},1032,["to"])]),n(k,{commentSum:t.commentSum,averageScore:t.averageScore},null,8,["commentSum","averageScore"])])])])]))),128))])])])]),e("div",ee,[te,e("div",se,[(i(!0),l(u,null,g(o.filterGroup,(t,d)=>(i(),l("div",{class:"filterGroup border-bottom mb-3 pb-3",key:d},[e("h3",oe,_(d==="type"?"資源性質":d==="level"?"適用等級":d==="price"?"價格":d==="lang"?"語系":d),1),(i(!0),l(u,null,g(t,(p,R)=>(i(),l("div",{key:R},[e("div",ie,[L(e("input",{type:"checkbox",class:"me-2",id:p,value:p,"onUpdate:modelValue":S=>o.checkObj[d]=S},null,8,le),[[D,o.checkObj[d]]]),e("label",{for:p,class:"me-2"},_(p),9,ce)])]))),128))]))),128))]),e("div",ne,[e("div",re,[e("div",ae,[e("span",de,_(o.renderList.length)+" 個結果 ",1),e("a",{role:"button",id:"clearFilterBtn",onClick:c[2]||(c[2]=t=>h.clearFilter())},[o.checkObj.type.length||o.checkObj.level.length||o.checkObj.price.length||o.checkObj.lang.length?(i(),l("span",he,"清除篩選條件")):(i(),l("span",_e))])]),e("div",ue,[e("div",pe,[L(e("select",{class:"form-select form-select-sm",id:"resourceSort","onUpdate:modelValue":c[3]||(c[3]=t=>o.sortRenderList=t)},be,512),[[C,o.sortRenderList]])])])]),e("div",me,[o.renderList.length===0?(i(),l("div",ve," 沒有符合條件的項目 ")):(i(),l("div",ke,[(i(!0),l(u,null,g(o.renderList,t=>(i(),l("div",{class:"row my-3 d-flex align-items-center",key:t.id},[t.imgUrl!=""?(i(),l("div",ye,[n(r,{to:`/resource/${t.id}`},{default:a(()=>[e("img",{src:"/VueProjectLR/images/resources_cover/"+t.imgUrl,alt:t.title},null,8,Le)]),_:2},1032,["to"])])):(i(),l("div",we,[n(r,{to:`/resource/${t.id}`},{default:a(()=>[e("img",{src:"/VueProjectLR/images/resources_cover/noimgCover.jpg",alt:t.title},null,8,je)]),_:2},1032,["to"])])),e("div",Re,[e("h4",Se,[n(r,{to:`/resource/${t.id}`,target:"_blank"},{default:a(()=>[v(_(t.title),1)]),_:2},1032,["to"])]),n(k,{commentSum:t.commentSum,averageScore:t.averageScore},null,8,["commentSum","averageScore"])]),e("div",xe,[e("div",Te,[n(r,{target:"_blank",role:"button",to:`/resource/${t.id}`,class:"btn btnHover btn-outline-primary w-100"},{default:a(()=>[v(" 查看評論 ")]),_:2},1032,["to"])])])]))),128))]))])])]),e("div",Oe,[Ce,o.topic==="JavaScript"?(i(),l("div",De,[e("div",Ve,[e("div",Be,[n(r,{to:"/resource-list/HTML&CSS",target:"_blank"},{default:a(()=>[Pe]),_:1})])]),e("div",Ue,[e("div",Me,[n(r,{to:"/resource-list/Python"},{default:a(()=>[Ae]),_:1})])])])):o.topic==="HTML/CSS"?(i(),l("div",Fe,[e("div",Je,[e("div",Ne,[n(r,{to:"/resource-list/JavaScript",target:"_blank"},{default:a(()=>[He]),_:1})])])])):(i(),l("div",ze,[e("div",Ge,[e("div",Ee,[n(r,{to:"/resource-list/JavaScript",target:"_blank"},{default:a(()=>[Ze]),_:1})])])]))])],64)}const Xe=x(P,[["render",qe]]);export{Xe as default};
