import{z as o,A as r}from"./index-e57c7766.js";const{VITE_API_PATH:s}={VITE_API_PATH:"https://json-server-vueprojectlr.onrender.com",BASE_URL:"/VueProjectLR",MODE:"production",DEV:!1,PROD:!0},t=o("resources",{state:()=>({resourcesData:[],commentsData:[],resourcesObj:{},loading:!0}),actions:{getResources(){r.get(`${s}/resources`).then(e=>{this.resourcesData=e.data,this.getComments()}).catch(e=>{console.log(e)})},getComments(){r.get(`${s}/comments`).then(e=>{this.commentsData=e.data}).catch(e=>{console.log(e)})},getAverageScore(){this.resourcesObj={},this.commentsData.forEach(e=>{this.resourcesObj[e.resourceId]===void 0?(this.resourcesObj[e.resourceId]={commentSum:1,scoreSum:e.score,averageScore:e.score},r.patch(`${s}/resources/${e.resourceId}`,{averageScore:e.score,commentSum:1}).then(()=>{})):(this.resourcesObj[e.resourceId].commentSum+=1,this.resourcesObj[e.resourceId].scoreSum+=e.score,this.resourcesObj[e.resourceId].averageScore=(this.resourcesObj[e.resourceId].scoreSum/this.resourcesObj[e.resourceId].commentSum).toFixed(1),r.patch(`${s}/resources/${e.resourceId}`,{averageScore:parseFloat(this.resourcesObj[e.resourceId].averageScore).toFixed(1),commentSum:this.resourcesObj[e.resourceId].commentSum}).then(()=>{}))})}}});export{t as r};