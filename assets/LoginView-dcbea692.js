import{_ as i,m as r,v as d,o as c,c as m,e as s,B as n,G as a,H as p}from"./index-36786280.js";import{u as l}from"./userStore-0cd2dbb8.js";const u={data(){return{}},computed:{...r(l,["user"])},methods:{...d(l,["login"])},watch:{user(){console.log("user",this.user)}},mounted(){}},f={ref:"LoginView",class:"login container p-5 p-lg-8 p-md-4"},g={action:"./login.html",method:"post"},_=s("h3",{class:"fs-7 my-3"},"會員登入",-1),h={class:"form-floating mb-3"},w=s("span",{class:"message account fs-8 text-danger"},null,-1),b=s("label",{for:"loginAccount",class:"text-gray"},"您的帳號(電子信箱)",-1),v={class:"form-floating mb-3"},y=s("span",{class:"message password fs-8 text-danger"},null,-1),V=s("label",{for:"loginPw",class:"text-gray"},"密碼",-1),B={class:"mt-6"};function $(o,e,k,x,A,L){return c(),m("div",f,[s("form",g,[_,s("div",h,[n(s("input",{type:"email",id:"loginAccount",placeholder:"您的帳號",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.email=t),name:"email"},null,512),[[a,o.user.email]]),w,b]),s("div",v,[n(s("input",{type:"password",id:"loginPw",placeholder:"密碼",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),name:"password"},null,512),[[a,o.user.password]]),y,V]),s("div",B,[s("button",{type:"submit",onClick:e[2]||(e[2]=p((...t)=>o.login&&o.login(...t),["prevent"])),class:"btn btn-primary text-white"}," 登入 ")])])],512)}const S=i(u,[["render",$]]);export{S as default};
