import{T as c}from"./topheader-D1FvVqw0.js";import u from"./info-DJQTrXzU.js";import{_ as l,Y as d,v as t,y as r,c as f,R as b,Z as _,o as a,z as h,B as n}from"./index-DjW7NOqq.js";import{V,a as k}from"./VTabs-BjPLeQCu.js";import"./gobotq-3Wa2au3z.js";import"./index--dg_NF4N.js";import"./Net-irHV1lfX.js";import"./TokenModel-epR9isAp.js";import"./VContainer-sdUc0D8Q.js";import"./VRow-C1TyI6mj.js";import"./VSlideGroup-BdEXcvcc.js";const T={components:{info:u,Topheader:c},data(){return{tab:0}},methods:{changetab(){this.$router.push({query:{tab:this.tab}})}},mounted(){this.$route.query.tab&&(this.tab=parseInt(this.$route.query.tab))}};function x(g,o,y,C,e,s){const m=n("Topheader"),i=n("info");return a(),d(_,null,[t(m),t(V,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=p=>e.tab=p),onClick:s.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:r(()=>[t(k,null,{default:r(()=>[h("我的信息")]),_:1})]),_:1},8,["modelValue","onClick"]),e.tab===0?(a(),f(i,{key:0})):b("",!0)],64)}const U=l(T,[["render",x]]);export{U as default};