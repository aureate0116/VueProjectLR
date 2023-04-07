import{_ as x,m as C,D,r as y,o,c as l,d as a,b as e,t as r,E as k,F as p,G as g,w as L,Q as j,P as O,f as d,i as f,S as K}from"./index-bf060d23.js";import{r as R}from"./resourcesStore-2c49d7ed.js";import{L as A,S as z}from"./StarComponent-a743a90e.js";const Z={props:["searchText"],data(){return{isLoading:!0,topic:this.$route.params.resTopic,topicsResData:[],foundationTabClassify:"初階",renderList:[],filterGroup:{type:["文章","書籍","線上課程","實體課程","第三方技術網站"],level:["初階","中階","高階"],price:["免費","付費","部分付費"],lang:["繁體中文","簡體中文","英文","多語系"]},checkObj:{type:[],level:[],price:[],lang:[]},searchKey:this.$route.params.resTopic.split("=")[1],filterSourceData:this.searchKey?this.searchResultData:this.topicsResData,sortRenderList:"heightRate",searchResultData:[]}},watch:{"$route.params":{handler(){this.topic=this.$route.params.resTopic,this.getResources(),window.location.reload()},deep:!0},checkObj:{handler(){this.filterResources()},deep:!0},sortRenderList(i){i==="new"?this.sortRenderList="new":this.sortRenderList="heightRate",this.filterResources()},"$route.params.resTopic":{handler(i){i&&i.includes("=")&&(this.searchKey=i.split("=")[1]||"")},deep:!0},searchKey:{handler(i){this.searchResultData=this.resourcesData.filter(c=>c.title.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").includes(i.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")))},deep:!0},resourcesData(i){this.clearFilter(),this.searchKey!==""&&this.searchKey!==void 0?(this.searchResultData=i.filter(c=>c.title.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").includes(this.searchKey.toLowerCase().replace(/[^a-zA-Z0-9]/g,""))),console.log("searchResultData",this.searchResultData),console.log("searchkey",this.searchKey),console.log("router",this.$route.params.resTopic)):(this.searchResultData=i.filter(c=>c.title.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").includes(this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g,""))),console.log("searchResultData === ''",this.searchResultData),console.log("searchKey === ''",this.searchKey),console.log("router",this.$route.params.resTopic)),this.topicsResData=i.filter(c=>c.topics.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")===this.topic.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")),this.searchKey!==""&&this.searchKey!==void 0?this.renderList=[...this.searchResultData]:this.renderList=[...this.topicsResData],this.renderList===void 0||this.foundationTabData===void 0?this.isLoading=!0:this.isLoading=!1},foundationTabClassify(i){this.$nextTick(()=>{this.foundationTabClassify=i})}},methods:{...C(R,["getResources","getComments","getAverageScore"]),changeTabData(i){this.foundationTabClassify=i},filterResources(){if(this.searchResultData!==void 0)return this.renderList=this.searchResultData.filter(i=>{let c=!0,b=!0,v=!0,s=!0;return this.checkObj.type.length>0&&(c=this.checkObj.type.includes(i.type)),this.checkObj.level.length>0&&(b=this.checkObj.level.includes(i.level)),this.checkObj.price.length>0&&(v=this.checkObj.price.includes(i.price)),s=i.lang.some(_=>this.checkObj.lang.length===0?!0:this.checkObj.lang.includes(_)),c&&b&&v&&s}),this.sortRenderList==="heightRate"?this.renderList=this.renderList.sort((i,c)=>c.averageScore-i.averageScore):this.sortRenderList==="new"&&(this.renderList=this.renderList.sort((i,c)=>c.id-i.id)),this.renderList},clearFilter(){this.checkObj.type.splice(0,this.checkObj.type.length),this.checkObj.level.splice(0,this.checkObj.level.length),this.checkObj.price.splice(0,this.checkObj.price.length),this.checkObj.lang.splice(0,this.checkObj.lang.length),this.filterResources()}},components:{LoadingComponent:A,StarComponent:z},computed:{...D(R,["resourcesData","commentsData","resourcesObj"]),foundationTabData:{get(){return this.topicsResData.filter(i=>this.foundationTabClassify==="初階"?i.level===this.foundationTabClassify:this.foundationTabClassify==="免費"?i.price===this.foundationTabClassify:this.topicsResData).slice(-6)},set(i){this.topicsResData=i}}},created(){},mounted(){this.getResources(),(this.topic===null||this.topic===void 0)&&this.$router.push("/"),document.title="Eng!neer 程式學習資源網"+this.topic}},B={class:"container-fluid px-3 py-5 p-lg-0 bg-primary"},U={key:0},F={key:1,class:"bannerBlock container p-0 p-lg-8 p-md-4"},J={key:0,class:"text-white text-start"},M={key:1,class:"text-white text-center"},N={key:0,class:"container py-5 p-lg-8 d-none"},G={key:1,class:"container py-5 p-lg-8"},H={class:"nav nav-pills mb-3 d-flex align-items-center",id:"pills-tab2",role:"tablist"},P=e("li",null,[e("h3",{class:"fs-5 mb-0 fw-bold me-4"},"入門推薦")],-1),V={class:"nav-item",role:"presentation"},E={class:"nav-item",role:"presentation"},Q={class:"tab-content border border-primary p-3 p-md- rounded-3"},q={class:"tab-pane fade show active",role:"tabpanel","aria-labelledby":"resourceType1-tab"},W={class:"row"},X={class:"d-flex p-2 align-items-center"},Y={class:"row"},$={key:0,class:"col-6"},I=["src","alt"],ee={key:1,class:"col-6"},te=["src","alt"],se={class:"col-6"},ie={class:"ellipsis fs-7"},oe={key:2,class:"filterList container py-5 p-lg-8 pt-lg-4 text-center"},le={class:"fs-4 fw-bold"},ce=e("div",null,[f(" 請嘗試調整您的搜尋。以下是一些想法 : "),e("ul",{class:"list-group"},[e("li",null,"確認所有字全都拼寫正確"),e("li",null,"嘗試使用普遍常見的搜尋詞語")])],-1),ae={key:3,class:"filterList container py-5 p-lg-8 pt-lg-4 d-lg-flex border-bottom"},ne=e("h3",{class:"fs-5 fw-bold mb-4 d-lg-none"},"篩選",-1),re={class:"filter bg-white rounded-3 p-4 me-lg-4 d-flex flex-wrap flex-lg-column flex-column justify-content-between justify-content-lg-start flex-sm-row"},de={class:"fs-6"},he={class:"input-group filterItem"},_e=["id","value","onUpdate:modelValue"],pe=["for"],ue={class:"resourceList"},ge={class:"row d-lg-flex align-items-center mb-5 mb-lg-0 justify-content-between"},fe={class:"col-md-5 fs-8 mb-3 mb-md-0"},be={class:"resultNumber me-3"},ve={key:0,class:"clearBtnText text-primary"},ye={key:1,class:"clearBtnText text-primary"},me={class:"col-md-3 d-flex align-items-end"},ke={class:"input-group"},Le=e("option",{value:"heightRate"},"最高評價",-1),Re=e("option",{value:"new"},"最新",-1),we=[Le,Re],Se={class:"row"},Te={key:0,class:"col resourceItem"},xe={key:1,class:"col resourceItem"},Ce={key:0,class:"col-2"},De=["src","alt"],je={key:1,class:"col-2"},Oe=["src","alt"],Ke={class:"col-7"},Ae={class:"ellipsis fs-7"},ze={class:"col-3"},Ze={class:"d-flex"},Be={key:4,class:"hotTopic relatedContainer container py-5 p-lg-8"},Ue={key:5,class:"hotTopic relatedContainer container py-5 p-lg-8"},Fe=e("h3",{class:"fs-5 fw-bold mb-4"},"相關主題",-1),Je={key:0,class:"row relatedTopic"},Me={class:"col"},Ne={class:"topicItem text-center my-2 p-3 rounded-3"},Ge=e("h4",{class:"fw-bold"},"HTML/CSS",-1),He={class:"col"},Pe={class:"topicItem text-center my-2 p-3 rounded-3"},Ve=e("h4",{class:"fw-bold"},"Python",-1),Ee={key:1,class:"row relatedTopic"},Qe={class:"col"},qe={class:"topicItem text-center my-2 p-3 rounded-3"},We=e("h4",{class:"fw-bold"},"JavaScript",-1),Xe={key:2,class:"row relatedTopic"},Ye={class:"col"},$e={class:"topicItem text-center my-2 p-3 rounded-3"},Ie=e("h4",{class:"fw-bold"},"JavaScript",-1);function et(i,c,b,v,s,_){const w=y("loading-component"),n=y("router-link"),m=y("star-component");return o(),l(p,null,[a(w,{"is-loading":s.isLoading},null,8,["is-loading"]),(o(),l("div",{key:i.componentKey},[e("div",B,[s.renderList.length===0?(o(),l("div",U)):(o(),l("div",F,[s.searchKey!==""&&s.searchKey!==void 0?(o(),l("h2",J," 「"+r(s.searchKey)+"」有 "+r(s.renderList.length)+" 個結果 ",1)):(o(),l("h2",M,r(s.topic),1))]))]),s.searchKey!==""&&s.searchKey!==void 0?(o(),l("div",N)):(o(),l("div",G,[e("ul",H,[P,e("li",V,[e("button",{class:k(["nav-link",{active:s.foundationTabClassify==="初階"}]),"data-bs-toggle":"pill",type:"button",role:"tab","aria-controls":"pills-fundation","aria-selected":"true",onClick:c[0]||(c[0]=t=>_.changeTabData("初階"))}," 初階 ",2)]),e("li",E,[e("button",{class:k(["nav-link",{active:s.foundationTabClassify==="免費"}]),"data-bs-toggle":"pill",type:"button",role:"tab","aria-controls":"pills-freeItem","aria-selected":"false",onClick:c[1]||(c[1]=t=>_.changeTabData("免費"))}," 免費 ",2)])]),e("div",Q,[e("div",q,[e("div",W,[(o(!0),l(p,null,g(_.foundationTabData,t=>(o(),l("div",{class:"col-md-6 col-lg-4",key:t.id},[e("div",X,[e("div",Y,[t.imgUrl!=""?(o(),l("div",$,[e("img",{src:`./images/resources_cover/${t.imgUrl}`,alt:t.title},null,8,I)])):(o(),l("div",ee,[e("img",{src:"./images/resources_cover/noimgCover.jpg",alt:t.title},null,8,te)])),e("div",se,[e("h4",ie,[a(n,{class:"text-dark",to:`/resource/${t.id}`,target:"_blank"},{default:d(()=>[f(r(t.title),1)]),_:2},1032,["to"])]),a(m,{commentSum:t==null?void 0:t.commentSum,averageScore:t==null?void 0:t.averageScore.toString()},null,8,["commentSum","averageScore"])])])])]))),128))])])])])),this.searchKey!==""&&s.searchResultData.length===0?(o(),l("div",oe,[e("h1",le,'抱歉，我們找不到 " '+r(s.searchKey)+' " 相關結果',1),ce])):s.searchResultData.length!==0?(o(),l("div",ae,[ne,e("div",re,[(o(!0),l(p,null,g(s.filterGroup,(t,h)=>(o(),l("div",{class:"filterGroup border-bottom mb-3 pb-3",key:h},[e("h3",de,r(h==="type"?"資源性質":h==="level"?"適用等級":h==="price"?"價格":h==="lang"?"語系":h),1),(o(!0),l(p,null,g(t,(u,S)=>(o(),l("div",{key:S},[e("div",he,[L(e("input",{type:"checkbox",class:"me-2",id:u,value:u,"onUpdate:modelValue":T=>s.checkObj[h]=T},null,8,_e),[[K,s.checkObj[h]]]),e("label",{for:u,class:"me-2"},r(u),9,pe)])]))),128))]))),128))]),e("div",ue,[e("div",ge,[e("div",fe,[e("span",be,r(s.renderList.length)+" 個結果 ",1),e("a",{role:"button",id:"clearFilterBtn",onClick:c[2]||(c[2]=t=>_.clearFilter())},[s.checkObj.type.length||s.checkObj.level.length||s.checkObj.price.length||s.checkObj.lang.length?(o(),l("span",ve,"清除篩選條件")):(o(),l("span",ye))])]),e("div",me,[e("div",ke,[L(e("select",{class:"form-select form-select-sm",id:"resourceSort","onUpdate:modelValue":c[3]||(c[3]=t=>s.sortRenderList=t)},we,512),[[j,s.sortRenderList]])])])]),e("div",Se,[s.renderList.length===0?(o(),l("div",Te," 沒有符合條件的項目 ")):(o(),l("div",xe,[(o(!0),l(p,null,g(s.renderList,t=>(o(),l("div",{class:"row my-3 d-flex align-items-center",key:t.id},[t.imgUrl!=""?(o(),l("div",Ce,[a(n,{to:`/resource/${t.id}`},{default:d(()=>[e("img",{src:`./images/resources_cover/${t.imgUrl}`,alt:t.title},null,8,De)]),_:2},1032,["to"])])):(o(),l("div",je,[a(n,{to:`/resource/${t.id}`},{default:d(()=>[e("img",{src:"./images/resources_cover/noimgCover.jpg",alt:t.title},null,8,Oe)]),_:2},1032,["to"])])),e("div",Ke,[e("h4",Ae,[a(n,{class:"text-dark",to:`/resource/${t.id}`,target:"_blank"},{default:d(()=>[f(r(t.title),1)]),_:2},1032,["to"])]),a(m,{commentSum:t==null?void 0:t.commentSum,averageScore:t==null?void 0:t.averageScore.toString()},null,8,["commentSum","averageScore"])]),e("div",ze,[e("div",Ze,[a(n,{target:"_blank",role:"button",to:`/resource/${t.id}`,class:"btn btnHover btn-outline-primary w-100"},{default:d(()=>[f(" 查看評論 ")]),_:2},1032,["to"])])])]))),128))]))])])])):O("",!0),s.renderList.length===0?(o(),l("div",Be)):(o(),l("div",Ue,[Fe,s.topic==="JavaScript"?(o(),l("div",Je,[e("div",Me,[e("div",Ne,[a(n,{to:"/resource-list/HTML&CSS",target:"_blank"},{default:d(()=>[Ge]),_:1})])]),e("div",He,[e("div",Pe,[a(n,{to:"/resource-list/Python"},{default:d(()=>[Ve]),_:1})])])])):s.topic==="HTML/CSS"?(o(),l("div",Ee,[e("div",Qe,[e("div",qe,[a(n,{to:"/resource-list/JavaScript",target:"_blank"},{default:d(()=>[We]),_:1})])])])):(o(),l("div",Xe,[e("div",Ye,[e("div",$e,[a(n,{to:"/resource-list/JavaScript",target:"_blank"},{default:d(()=>[Ie]),_:1})])])]))]))]))],64)}const ot=x(Z,[["render",et]]);export{ot as default};
