import{T as p}from"./topheader-DN5BQXu_.js";import u from"./index-E3H7OU5g.js";import{T as i}from"./TokenModel-epR9isAp.js";import{_ as c,a0 as f,v as t,y as o,a1 as _,a2 as g,B as r,o as k,a3 as y,z as l,$ as V,G as h,E as x}from"./index-BqqFHk0R.js";import{V as v}from"./VContainer-C2kFy1jQ.js";import{V as z}from"./VForm-CctfBckV.js";import{V as T}from"./VTextField-PL6M9mAz.js";import"./gobotq-3Wa2au3z.js";import"./index-Bfteqi7l.js";const S={name:"App",components:{Topheader:p,live2d:u},data(){return{message:"",direction:"right",style:"position: fixed; bottom: 0; right: 0;",size:600,apiKey:"testtest",tips:{},aigcUrl:"https://aigc.aerofsx.com:444",sdkUrl:"http://127.0.0.1:84",models:["ShizukuTalk/shizuku-48","default"],uid:i.Api_find_uid(),token:i.Api_find_token()}},created(){},methods:{updateMessage(){localStorage.setItem("doAction",JSON.stringify({type:"say",text:this.message}))}}},b={class:"d-flex flex-column"};function B(U,s,A,C,e,a){const n=r("topheader"),m=r("live2d",!0);return k(),f(g,null,[t(n),t(v,null,{default:o(()=>[t(y,null,{default:o(()=>[l("创建团队信息")]),_:1}),t(z,{onSubmit:V(a.updateMessage,["prevent"])},{default:o(()=>[t(T,{modelValue:e.message,"onUpdate:modelValue":s[0]||(s[0]=d=>e.message=d),label:"你想让L2D说什么"},null,8,["modelValue"]),h("div",b,[t(x,{size:"large",type:"submit",color:"primary",class:"mt-4"},{default:o(()=>[l("确认")]),_:1})])]),_:1},8,["onSubmit"])]),_:1}),t(m,{autofocus:"",style:_(e.style),model:e.models,direction:e.direction,size:e.size,"api-key":e.apiKey,"aigc-url":e.aigcUrl,"sdk-url":e.sdkUrl,uid:e.uid,token:e.token},null,8,["style","model","direction","size","api-key","aigc-url","sdk-url","uid","token"])],64)}const J=c(S,[["render",B]]);export{J as default};
