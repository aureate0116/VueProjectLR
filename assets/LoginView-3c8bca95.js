import{_ as i,m as d,b as c,r as m,o as p,c as u,e as s,w as a,v as n,h as g,d as f,g as _,j as h}from"./index-4958f9d3.js";import{u as r}from"./userStore-43a8c625.js";const w={data(){return{}},computed:{...d(r,["user"])},methods:{...c(r,["login"])}},b={ref:"LoginView",class:"login container p-5 p-lg-8 p-md-4 bg-white"},y={action:"./login.html",method:"post"},x=s("h3",{class:"my-3 text-center text-primary fw-bold"},"會員登入",-1),v={class:"form-floating mb-3"},V=s("span",{class:"message account fs-8 text-danger"},null,-1),k=s("label",{for:"loginAccount",class:"text-gray"},"您的帳號(電子信箱)",-1),$={class:"form-floating mb-3"},A=s("span",{class:"message password fs-8 text-danger"},null,-1),B=s("label",{for:"loginPw",class:"text-gray"},"密碼",-1),C={class:"mt-6 text-center"},N={class:"fs-8 text-gray my-3"};function L(t,e,M,P,S,T){const l=m("router-link");return p(),u("div",b,[s("form",y,[x,s("div",v,[a(s("input",{type:"email",id:"loginAccount",placeholder:"您的帳號",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.email=o),name:"email"},null,512),[[n,t.user.email]]),V,k]),s("div",$,[a(s("input",{type:"password",id:"loginPw",placeholder:"密碼",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),name:"password"},null,512),[[n,t.user.password]]),A,B]),s("div",C,[s("button",{type:"submit",onClick:e[2]||(e[2]=g((...o)=>t.login&&t.login(...o),["prevent"])),class:"btn btn-primary text-white"}," 登入 "),s("p",N,[f(l,{to:"signup",class:"text-primary"},{default:_(()=>[h("免費註冊 ")]),_:1})])])])],512)}const D=i(w,[["render",L]]);export{D as default};
