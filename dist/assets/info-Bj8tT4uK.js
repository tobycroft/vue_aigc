import{N as i}from"./Net-CA0dFTL_.js";import{h as m}from"./moment-Cl4UOzQZ.js";import{T as p}from"./TokenModel-epR9isAp.js";import{_ as h,c as D,y as t,o as g,v as a,a3 as V,z as l,V as e,W as o,aG as u,E as x,G as f}from"./index-VZFVW0nk.js";import{V as c}from"./VContainer-C4QVQAnP.js";import{V as n,a as r}from"./VRow-Z2HevRlu.js";const C={data(){return{formData:{}}},computed:{formattedDate(){return m(this.formData.date).format("YYYY-MM-DD HH:mm:ss")}},methods:{async fetchData(){const s=await new i("/v1/user/info/get").PostFormData();s.code===0?this.formData=s.data:console.error(s.echo)},logout(){p.Api_clear_uidAndToken(),this.$router.push("/")}},mounted(){this.fetchData()}},k=f("strong",null,"用户ID：",-1),T=f("strong",null,"集团头像：",-1),w=f("strong",null,"集团名称：",-1),N=f("strong",null,"加入时间：",-1);function y(s,B,Y,v,d,_){return g(),D(c,null,{default:t(()=>[a(o,null,{default:t(()=>[a(V,null,{default:t(()=>[l("个人信息")]),_:1}),a(e,null,{default:t(()=>[a(n,null,{default:t(()=>[a(r,{cols:"12"},{default:t(()=>[a(c,null,{default:t(()=>[a(n,null,{default:t(()=>[a(r,{cols:"12"},{default:t(()=>[a(o,null,{default:t(()=>[a(e,null,{default:t(()=>[k,l(" "+u(d.formData.uid),1)]),_:1})]),_:1})]),_:1}),a(r,{cols:"12"},{default:t(()=>[a(o,null,{default:t(()=>[a(e,null,{default:t(()=>[T,l(" "+u(d.formData.group_img||"暂无"),1)]),_:1})]),_:1})]),_:1}),a(r,{cols:"12"},{default:t(()=>[a(o,null,{default:t(()=>[a(e,null,{default:t(()=>[w,l(" "+u(d.formData.group_name||"暂无"),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(n,null,{default:t(()=>[a(r,{cols:"12"},{default:t(()=>[a(o,null,{default:t(()=>[a(e,null,{default:t(()=>[N,l(" "+u(_.formattedDate),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(n,null,{default:t(()=>[a(x,{variant:"tonal",class:"flex-grow-1",size:"x-large",onClick:_.logout,color:"primary",large:""},{default:t(()=>[l("退出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const F=h(C,[["render",y]]);export{F as default};
