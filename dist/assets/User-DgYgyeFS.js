import{T as x}from"./topheader-lI_GDNGk.js";import{T as y,N as T}from"./Net-CbKWFvYy.js";import{h as C}from"./moment-Cl4UOzQZ.js";import{_ as p,o as m,c as v,w as t,d as o,f as r,t as i,g as h,r as e,h as V,a as w,F as M}from"./index-BTMlZ-hC.js";const N={data(){return{formData:{}}},methods:{logout(){y.Api_clear_uidAndToken(),this.$router.push("/user/login")},async fetchData(){const n=await new T("/v1/user/info/get").Get();if(n.isSuccess){const a=n.data;a.date=C(a.date).format("YYYY-MM-DD HH:mm:ss"),this.formData=n.data}else console.error(n.echo)}},mounted(){this.fetchData()}},$=h("strong",null,"QQ号码：",-1),B=h("strong",null,"加入时间：",-1);function Y(n,a,b,g,s,f){const u=e("v-card-title"),c=e("v-card-text"),l=e("v-card"),_=e("v-col"),d=e("v-row"),k=e("v-btn"),D=e("v-card-actions");return m(),v(d,{justify:"center"},{default:t(()=>[o(_,{cols:"12"},{default:t(()=>[o(l,null,{default:t(()=>[o(u,null,{default:t(()=>[r("个人信息")]),_:1}),o(c,null,{default:t(()=>[o(d,null,{default:t(()=>[o(_,{cols:"12"},{default:t(()=>[o(l,null,{default:t(()=>[o(c,null,{default:t(()=>[$,r(" "+i(s.formData.qq),1)]),_:1}),o(c,null,{default:t(()=>[B,r(" "+i(s.formData.date),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(D,null,{default:t(()=>[o(k,{onClick:f.logout,color:"primary"},{default:t(()=>[r("退出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const q=p(N,[["render",Y]]),A={components:{My:q,Topheader:x},data(){return{tab:0}},methods:{},mounted(){}};function F(n,a,b,g,s,f){const u=e("Topheader"),c=e("v-tab"),l=e("v-tabs"),_=e("My");return m(),V(M,null,[o(u),o(l,{modelValue:s.tab,"onUpdate:modelValue":a[0]||(a[0]=d=>s.tab=d),onClick:n.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:t(()=>[o(c,null,{default:t(()=>[r("我的信息")]),_:1})]),_:1},8,["modelValue","onClick"]),s.tab===0?(m(),v(_,{key:0})):w("",!0)],64)}const j=p(A,[["render",F]]);export{j as default};
