import{_ as l,o as t,c as a,t as o,D as i,b as r,F as n,C as c}from"./index-501962d9.js";const _={props:{commentSum:{type:Number,required:!0},averageScore:{type:Number,required:!0}}},m={class:"d-flex justify-content-between align-items-center"},d={key:0},h=r("span",{class:"fs-8 text-gray"},"尚無評價",-1),u=[h],S={key:1,class:"d-flex align-items-center flex-wrap"},g={key:0,class:"fs-7 fw-bold text-secondary me-1"},f={key:0},y={key:1},v={class:"d-flex lh-1 text-secondary"},k={key:0},x={key:1},A=r("span",{class:"material-icons material-icons-sharp fs-8"},"star_half",-1),I={key:2},p=r("span",{class:"material-icons material-icons-sharp fs-8"},"star",-1),N={class:"fs-8 text-secondary"};function b(w,B,e,C,q,D){return t(),a("div",m,[e.commentSum===0||e.commentSum===void 0?(t(),a("div",d,u)):(t(),a("div",S,[e.averageScore!==void 0&&e.commentSum!==0?(t(),a("span",g,[isNaN(parseInt(e.averageScore.toString().charAt(2)))?(t(),a("span",f,o(e.averageScore)+".0",1)):(t(),a("span",y,o(e.averageScore),1))])):i("",!0),r("ul",v,[r("li",null,[(t(!0),a(n,null,c(parseInt(e.averageScore.toString().charAt(0)),s=>(t(),a("span",{key:s+1,class:"material-icons material-icons-sharp fs-8"},"star"))),128))]),parseInt(e.averageScore.toString().charAt(2))<=2||isNaN(parseInt(e.averageScore.toString().charAt(2)))||typeof parseInt(e.averageScore.toString().charAt(2))>"u"?(t(),a("li",k,[(t(!0),a(n,null,c(5-parseInt(e.averageScore.toString().charAt(0)),s=>(t(),a("span",{key:s,class:"material-icons material-icons-sharp fs-8"},"star_outline"))),128))])):parseInt(e.averageScore.toString().charAt(2))>=3&&parseInt(e.averageScore.toString().charAt(2))<=7?(t(),a("li",x,[A,(t(!0),a(n,null,c(5-parseInt(e.averageScore.toString().charAt(0))-1,s=>(t(),a("span",{key:s,class:"material-icons material-icons-sharp fs-8"},"star_outline"))),128))])):parseInt(e.averageScore.toString().charAt(2))>=8?(t(),a("li",I,[p,(t(!0),a(n,null,c(5-parseInt(e.averageScore.toString().charAt(0))-1,s=>(t(),a("span",{key:s,class:"material-icons material-icons-sharp fs-8"},"star_half"))),128))])):i("",!0)]),r("span",N," ( "+o(e.commentSum)+" )",1)]))])}const V=l(_,[["render",b]]);export{V as S};