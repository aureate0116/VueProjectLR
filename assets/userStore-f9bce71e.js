import{g as o,h as s}from"./index-7572dd7a.js";const{VITE_API_PATH:t}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR",MODE:"production",DEV:!1,PROD:!0},r=o("user",{state:()=>({user:{email:"",password:""}}),actions:{login(){s.post(`${t}/login`,this.user).then(e=>{localStorage.setItem("accessToken",`${e.data.accessToken}`),localStorage.setItem("userEmail",e.data.user.email),console.log(e),location.href="/VueProjectLR"}).catch(e=>{alert("您輸入的帳號密碼有誤"),localStorage.clear(),console.log(e),this.user.email="",this.user.password=""})}}});export{r as u};
