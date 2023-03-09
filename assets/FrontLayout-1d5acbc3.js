import{_ as i,R as r,a as c,r as n,o as d,c as u,b as t,w as s,d as a,e,F as m,f as p}from"./index-81e93483.js";const f={components:{RouterView:r,RouterLink:c}},v={class:"container-fluid p-0 bg-white"},g={class:"container-fluid p-lg-0"},_={class:"container p-lg-0"},h={class:"navbar navbar-expand-lg navbar-light py-4"},b={class:"container-fluid p-0 d-lg-flex align-items-center"},w=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),x={class:"collapse navbar-collapse mt-3 mt-lg-0 d-lg-flex justify-content-end",id:"navbarContent"},k={class:"navbar-nav d-lg-flex align-items-lg-center"},y={class:"nav-item position-relative"},S=e("a",{class:"nav-link dropdown-toggle",href:"#",id:"resourceBrowse",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"探索資源",-1),C={class:"dropdown-menu position-absolute start-0","aria-labelledby":"resourceBrowse"},M=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},"探索學習路徑")],-1),L=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},"募集中的資源")],-1),B=e("li",{class:"nav-item"},[e("div",{class:"bg-light input-group input-group-sm rounded-3 my-3"},[e("a",{class:"btn lh-1",href:"#",role:"button"},[e("span",{class:"material-icons material-icons-outlined"},"search")]),e("input",{class:"border-0 bg-light form-control",type:"text",placeholder:"JavaScript"})])],-1),V={class:"navbar-nav beforeLogin ms-lg-3"},j={class:"nav-item d-flex"},I=e("div",{class:"desktopMenu ms-lg-3"},[e("ul",{class:"afterLogin justify-content-end navbar-nav d-lg-flex align-items-lg-center lh-1"},[e("li",{class:"nav-item"}),e("li",{class:"nav-item dropdown create"},[e("a",{class:"nav-link dropdown-toggle",href:"#",id:"createItem",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("span",{class:"material-icons material-icons-outlined text-dark"}," add ")]),e("ul",{class:"dropdown-menu","aria-labelledby":"createItem"},[e("li",null,[e("a",{class:"dropdown-item",href:"#"},"新增資源")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"新增募集")])])]),e("li",{class:"nav-item dropdown"},[e("a",{class:"nav-link dropdown-toggle accountMenuImg",href:"#",id:"accountMenu",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("span",{class:"userImg d-inline-block bg-primary px-2 py-2 rounded-circle fw-bold fs-7 lh-1 text-white text-center"},"U")]),e("ul",{class:"dropdown-menu","aria-labelledby":"accountMenu"},[e("li",null,[e("ul",{class:"accountMenu"},[e("li",null,[e("a",{class:"dropdown-item",href:"./acc_profile.html"},"個人資料")]),e("li",null,[e("a",{class:"dropdown-item",href:"./acc_resources.html"},"我的資源")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"我的募集")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"我的學習")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"設定")])])]),e("li",null,[e("a",{role:"button",class:"dropdown-item logOut"},"登出")])])])])],-1),N={class:"container-fluid p-lg-0"},T=p('<footer class="footer container-fluid py-5 p-lg-5 bg-primary"><div class="container d-flex flex-md-row flex-column justify-content-between align-items-center"><ul class="navbar-nav d-flex flex-row flex-wrap justify-content-start"><li class="nav-item me-3 me-md-5 mb-3 mb-md-0"><a class="footer-brand" href="index.html"></a></li><li class="nav-item me-2"><a class="nav-link text-white">關於我們</a></li><li class="nav-item me-2"><a class="nav-link text-white">聯絡我們</a></li><li class="nav-item me-2"><a class="nav-link text-white">常見問題</a></li><li class="nav-item me-2"><a class="nav-link text-white">隱私權政策</a></li><li class="nav-item me-2"><a class="nav-link text-white"></a></li></ul><ul class="navbar-nav d-flex flex-row"><li class="nav-item me-2"><a class="nav-link text-white fs-8">僅學習作品用無商業用途</a></li></ul></div></footer>',1);function $(F,H,J,R,P,E){const l=n("router-link"),o=n("router-view");return d(),u(m,null,[t(l,{to:"/"},{default:s(()=>[a("Home")]),_:1}),a(" | "),t(l,{to:"/resource-list"},{default:s(()=>[a("resource-list")]),_:1}),a(" | "),t(l,{to:"/resource"},{default:s(()=>[a("resource")]),_:1}),a(" | "),t(l,{to:"/login"},{default:s(()=>[a("login")]),_:1}),a(" | "),t(l,{to:"/signup"},{default:s(()=>[a("signup")]),_:1}),a(" | "),e("div",v,[e("header",g,[e("div",_,[e("nav",h,[e("div",b,[t(l,{class:"navbar-brand mt-lg-2",to:"/"}),w,e("div",x,[e("ul",k,[e("li",y,[S,e("ul",C,[e("li",null,[t(l,{class:"dropdown-item",to:"/resource-list?topic=JavaScript"},{default:s(()=>[a("JavaScript")]),_:1})]),e("li",null,[t(l,{class:"dropdown-item",to:"/resource-list?topic=HTML/CSS"},{default:s(()=>[a("HTML/CSS")]),_:1})]),e("li",null,[t(l,{class:"dropdown-item",to:"/resource-list?topic=Python"},{default:s(()=>[a("Pyton")]),_:1})])])]),M,L,B]),e("ul",V,[e("li",j,[t(l,{class:"nav-link btn btn-primary mx-lg-2 px-2 text-white",to:"/login"},{default:s(()=>[a("登入")]),_:1}),t(l,{class:"nav-link btn btn-secondary mx-lg-2 mx-2 px-2 text-white",to:"/signup"},{default:s(()=>[a("註冊")]),_:1})])]),I])])])])]),e("div",N,[e("main",null,[t(o)])]),T])],64)}const U=i(f,[["render",$]]);export{U as default};
