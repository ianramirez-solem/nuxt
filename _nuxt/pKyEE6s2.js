import{_ as x}from"./FW8spkxX.js";import{C as k,r as A,_ as v,v as w,o as c,A as _,w as s,b as r,a as e,d as i,t as y,u as l,H as p,Y as $,z as b,c as C,p as I}from"./IslBUnDr.js";import{_ as N}from"./Bh8Dj7bX.js";import{_ as B}from"./C6nhhHhb.js";import{_ as M}from"./C_9blmAf.js";import{u as d}from"./DDMEKR6D.js";import{b as V}from"./CdR68eF5.js";const g=k("weather",()=>{const o=A(0);return{temperatura:o,setTemperatura:u=>{o.value=u}}}),z=async()=>{const o=await V(),a=g();a.temperatura=o},U={class:"flex text-sm text-muted-foreground"},D={class:"flex items-center gap-3"},H={class:"SignIn"},L={__name:"Menu",setup(o){const a=g();w(()=>{z()});const u=async()=>{$("/login")};return(n,t)=>{const m=x,S=b,f=N,h=B,T=M;return c(),_(T,{sticky:""},{default:s(()=>[r(h,{class:"flex h-14 items-center justify-between"},{default:s(()=>[t[6]||(t[6]=e("a",{href:"/"},"Menu",-1)),e("ul",U,[e("li",null,[r(m,{class:"transition-colors hover:text-foreground",to:"/","active-class":"active"},{default:s(()=>t[1]||(t[1]=[i("Home")])),_:1})]),e("li",null,[r(m,{class:"ml-6 transition-colors hover:text-foreground",to:"/reportes","active-class":"active"},{default:s(()=>t[2]||(t[2]=[i("Graficos")])),_:1})]),e("li",null,[r(m,{class:"ml-6 transition-colors hover:text-foreground",to:"/dashboard","active-class":"active"},{default:s(()=>t[3]||(t[3]=[i("Dashboard")])),_:1})])]),e("div",D,[r(S,{name:"heroicons:cloud",alt:"temperatura"}),e("span",null,y(l(a).temperatura)+"°",1)]),e("div",H,[("useAuthTestStore"in n?n.useAuthTestStore:l(d))().loggedIn?p("",!0):(c(),_(f,{key:0,onClick:u,to:"login",variant:"outline",size:"sm"},{default:s(()=>t[4]||(t[4]=[i(" Sign In ")])),_:1})),("useAuthTestStore"in n?n.useAuthTestStore:l(d))().loggedIn?(c(),_(f,{key:1,onClick:t[0]||(t[0]=G=>("useAuthTestStore"in n?n.useAuthTestStore:l(d))().clear()),variant:"outline",size:"sm"},{default:s(()=>t[5]||(t[5]=[i(" Logout ")])),_:1})):p("",!0)])]),_:1})]),_:1})}}},W=v(L,[["__scopeId","data-v-5e471430"]]),j={};function E(o,a){const u=W;return c(),C("div",null,[r(u),I(o.$slots,"default")])}const Q=v(j,[["render",E]]);export{Q as default};
