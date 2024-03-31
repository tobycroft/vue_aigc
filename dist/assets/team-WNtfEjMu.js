import{N as f}from"./Net-CA0dFTL_.js";import{h}from"./moment-Cl4UOzQZ.js";import{T as k}from"./topheader-BXI_QbNY.js";import{_ as V,c as n,y as e,o as s,v as t,a3 as y,z as o,V as C,a0 as T,ai as L,aG as c,X as v,aL as w,E as i,a2 as D,W as b}from"./index-VZFVW0nk.js";import{V as x}from"./VContainer-C4QVQAnP.js";import{a as B,b as N,c as $,d}from"./VList-CRdh8l07.js";import{V as g,a as _}from"./VRow-Z2HevRlu.js";import"./TokenModel-epR9isAp.js";import"./gobotq-3Wa2au3z.js";import"./index-DIGyYLhl.js";import"./ssrBoot-A0jDN1F2.js";const Y={components:{top_header:k},data(){return{teamList:[]}},methods:{async fetchTeamList(){const a=await new f("/v1/user/team/list").PostFormData();a.code===0?this.teamList=a.data:console.error(a.echo)},async addTeam(){this.$router.push("/v1/user/team/create")},async deleteTeam(a){const u=await new f("/v1/user/team/delete").PostFormData(a);u.code===0?this.fetchTeamList():console.error(u.echo)},async editTeam(a){this.$router.push({path:"/v1/user/team/edit",query:a})},async subtoken(a){this.$router.push({path:"/v1/team/subtoken",query:a})},formattedDate(a){return h(a).format("YYYY-MM-DD HH:mm:ss")}},mounted(){this.fetchTeamList()}};function F(a,u,I,q,p,l){return s(),n(x,null,{default:e(()=>[t(b,null,{default:e(()=>[t(y,null,{default:e(()=>[o("团队列表")]),_:1}),t(C,null,{default:e(()=>[t(B,null,{default:e(()=>[(s(!0),T(D,null,L(p.teamList,r=>(s(),n(N,{key:r.id},{default:e(()=>[t(g,{align:"center",justify:"space-between"},{default:e(()=>[t(_,{cols:"8"},{default:e(()=>[t($,null,{default:e(()=>[o(c(r.team_info.name),1)]),_:2},1024),r.nickname?(s(),n(d,{key:0},{default:e(()=>[o(c(r.nickname),1)]),_:2},1024)):v("",!0),t(d,null,{default:e(()=>[o(c(r.role),1)]),_:2},1024),t(d,null,{default:e(()=>[o(c(l.formattedDate(r.date)),1)]),_:2},1024)]),_:2},1024),t(_,{cols:"4"},{default:e(()=>[t(w,null,{default:e(()=>[t(i,{class:"mt-4",onClick:m=>l.subtoken(r),color:"green"},{default:e(()=>[o("团队token管理")]),_:2},1032,["onClick"]),t(i,{class:"mt-4",onClick:m=>l.editTeam(r),color:"primary"},{default:e(()=>[o("修改团队信息")]),_:2},1032,["onClick"]),r.role==="admin"||r.role==="owner"?(s(),n(i,{key:0,class:"mt-4",onClick:m=>l.deleteTeam(r),color:"error"},{default:e(()=>[o("解散团队")]),_:2},1032,["onClick"])):(s(),n(i,{key:1,class:"mt-4",onClick:m=>l.deleteTeam(r),color:"error"},{default:e(()=>[o("退出团队")]),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const A=V(Y,[["render",F]]);export{A as default};
