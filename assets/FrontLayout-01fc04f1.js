import{_ as i,r as n,o as r,c,a as l,w as s,b as a,d as e,F as d,e as u}from"./index-272385b4.js";const m={},p={class:"container-fluid p-0 bg-white"},f={class:"container-fluid p-lg-0"},g={class:"container p-lg-0"},v={class:"navbar navbar-expand-lg navbar-light py-4"},_={class:"container-fluid p-0 d-lg-flex align-items-center"},h=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse mt-3 mt-lg-0 d-lg-flex justify-content-end",id:"navbarContent"},x={class:"navbar-nav d-lg-flex align-items-lg-center"},w={class:"nav-item position-relative"},k=e("a",{class:"nav-link dropdown-toggle",href:"#",id:"resourceBrowse",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"探索資源",-1),y={class:"dropdown-menu position-absolute start-0","aria-labelledby":"resourceBrowse"},B=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},"探索學習路徑")],-1),C=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},"募集中的資源")],-1),M=e("li",{class:"nav-item"},[e("div",{class:"bg-light input-group input-group-sm rounded-3 my-3"},[e("a",{class:"btn lh-1",href:"#",role:"button"},[e("span",{class:"material-icons material-icons-outlined"},"search")]),e("input",{class:"border-0 bg-light form-control",type:"text",placeholder:"JavaScript"})])],-1),j={class:"navbar-nav beforeLogin ms-lg-3"},I={class:"nav-item d-flex"},N=e("div",{class:"desktopMenu ms-lg-3"},[e("ul",{class:"afterLogin justify-content-end navbar-nav d-lg-flex align-items-lg-center lh-1"},[e("li",{class:"nav-item"}),e("li",{class:"nav-item dropdown create"},[e("a",{class:"nav-link dropdown-toggle",href:"#",id:"createItem",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("span",{class:"material-icons material-icons-outlined text-dark"}," add ")]),e("ul",{class:"dropdown-menu","aria-labelledby":"createItem"},[e("li",null,[e("a",{class:"dropdown-item",href:"#"},"新增資源")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"新增募集")])])]),e("li",{class:"nav-item dropdown"},[e("a",{class:"nav-link dropdown-toggle accountMenuImg",href:"#",id:"accountMenu",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("span",{class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},"U")]),e("ul",{class:"dropdown-menu","aria-labelledby":"accountMenu"},[e("li",null,[e("ul",{class:"accountMenu"},[e("li",null,[e("a",{class:"dropdown-item",href:"./acc_profile.html"},"個人資料")]),e("li",null,[e("a",{class:"dropdown-item",href:"./acc_resources.html"},"我的資源")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"我的募集")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"我的學習")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"設定")])])]),e("li",null,[e("a",{role:"button",class:"dropdown-item logOut"},"登出")])])])])],-1),V={class:"container-fluid p-lg-0"},F=u('<footer class="footer container-fluid py-5 p-lg-5 bg-primary"><div class="container d-flex flex-md-row flex-column justify-content-between align-items-center"><ul class="navbar-nav d-flex flex-row flex-wrap justify-content-start"><li class="nav-item me-3 me-md-5 mb-3 mb-md-0"><a class="footer-brand" href="index.html"></a></li><li class="nav-item me-2"><a class="nav-link text-white">關於我們</a></li><li class="nav-item me-2"><a class="nav-link text-white">聯絡我們</a></li><li class="nav-item me-2"><a class="nav-link text-white">常見問題</a></li><li class="nav-item me-2"><a class="nav-link text-white">隱私權政策</a></li><li class="nav-item me-2"><a class="nav-link text-white"></a></li></ul><ul class="navbar-nav d-flex flex-row"><li class="nav-item me-2"><a class="nav-link text-white fs-8">僅學習作品用無商業用途</a></li></ul></div></footer>',1);function L(S,T){const t=n("router-link"),o=n("router-view");return r(),c(d,null,[l(t,{to:"/"},{default:s(()=>[a("Home")]),_:1}),a(" | "),l(t,{to:"/resource-list"},{default:s(()=>[a("resource-list")]),_:1}),a(" | "),l(t,{to:"/resource"},{default:s(()=>[a("resource")]),_:1}),a(" | "),l(t,{to:"/login"},{default:s(()=>[a("login")]),_:1}),a(" | "),l(t,{to:"/signup"},{default:s(()=>[a("signup")]),_:1}),a(" | "),e("div",p,[e("header",f,[e("div",g,[e("nav",v,[e("div",_,[l(t,{class:"navbar-brand mt-lg-2",to:"/"}),h,e("div",b,[e("ul",x,[e("li",w,[k,e("ul",y,[e("li",null,[l(t,{to:"/resource-list/:topicid"},{default:s(()=>[a("resource-list")]),_:1})])])]),B,C,M]),e("ul",j,[e("li",I,[l(t,{class:"nav-link btn btn-primary mx-lg-2 px-2 text-white",to:"/login"},{default:s(()=>[a("登入")]),_:1}),l(t,{class:"nav-link btn btn-secondary mx-lg-2 mx-2 px-2 text-white",to:"/signup"},{default:s(()=>[a("註冊")]),_:1})])]),N])])])])]),e("div",V,[e("main",null,[l(o)])]),F])],64)}const H=i(m,[["render",L]]);export{H as default};
