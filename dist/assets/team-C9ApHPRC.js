import{T as _}from"./topheader-BeEym_dw.js";import h from"./team-DWe3vvRi.js";import k from"./subtoken-DJHlgIb_.js";import{_ as V,X as y,v as e,y as r,c as m,C as u,Y as T,o as a,z as i,B as s}from"./index-tXHzQweF.js";import{V as x,a as p}from"./VTabs-Cd1MzRrQ.js";import"./gobotq-3Wa2au3z.js";import"./index-DEuDzdRh.js";import"./Net-B_YcV3Pu.js";import"./TokenModel-epR9isAp.js";import"./VDivider-BiPS7cde.js";import"./VVirtualScroll-CoKX1W7N.js";import"./VSlideGroup-CMLmpwqp.js";const C={components:{Team:h,subtoken:k,Topheader:_},data(){return{tab:0}},methods:{changetab(){this.$router.push({query:{tab:this.tab}})}},mounted(){if(this.$route.query.tab){let o=parseInt(this.$route.query.tab);o||o===0?this.tab=parseInt(this.$route.query.tab):this.tab=this.$route.query.tab}}};function g(o,n,q,B,t,b){const c=s("Topheader"),l=s("team",!0),d=s("subtoken");return a(),y(T,null,[e(c),e(x,{modelValue:t.tab,"onUpdate:modelValue":n[0]||(n[0]=f=>t.tab=f),onClick:b.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:r(()=>[e(p,null,{default:r(()=>[i("我的团队")]),_:1}),e(p,null,{default:r(()=>[i("子密钥管理")]),_:1})]),_:1},8,["modelValue","onClick"]),t.tab===0||t.tab==="team"?(a(),m(l,{key:0})):u("",!0),t.tab===1||t.tab==="subtoken"?(a(),m(d,{key:1})):u("",!0)],64)}const A=V(C,[["render",g]]);export{A as default};
