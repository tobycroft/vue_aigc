import{N as d}from"./Net-irHV1lfX.js";import{T as p}from"./topheader-D1FvVqw0.js";import{_,c as h,y as e,Q as V,o as I,v as t,z as o,ah as y,W as s,a4 as k,ai as l,a3 as c}from"./index-DjW7NOqq.js";import{V as w,a as C,b as L,c as f,d as v}from"./VVirtualScroll-BC-NMC8b.js";import"./TokenModel-epR9isAp.js";import"./gobotq-3Wa2au3z.js";import"./index--dg_NF4N.js";const x={components:{top_header:p},data(){return{infoList:[]}},methods:{async fetchInfoList(){const a=await new d("/v1/qwen/info/list").PostFormData();a.code===0?this.infoList=a.data:console.error(a.echo)},async addInfo(){this.$router.push("/v1/qwen/info/create")},async deleteInfo(a){const r=await new d("/v1/qwen/info/delete").PostFormData({id:a.id});r.code===0?this.fetchInfoList():console.error(r.echo)},async editInfo(a){this.$router.push({path:"/v1/qwen/info/edit",query:a})}},mounted(){this.fetchInfoList()}};function T(a,r,q,b,u,i){return I(),h(V,{class:"mx-auto"},{default:e(()=>[t(k,null,{default:e(()=>[o(" FastGPT 信息列表 "),t(y),t(s,{color:"primary",onClick:i.addInfo},{default:e(()=>[o(" 新增信息 ")]),_:1},8,["onClick"])]),_:1}),t(w),t(v,{items:u.infoList,"item-height":"48"},{default:e(({item:n})=>[t(C,null,{prepend:e(()=>[t(l,{class:"bg-primary"},{default:e(()=>[o("mdi-robot")]),_:1})]),append:e(()=>[t(s,{icon:"",color:"primary",onClick:m=>i.editInfo(n)},{default:e(()=>[t(l,null,{default:e(()=>[o("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),t(s,{icon:"",color:"error",onClick:m=>i.deleteInfo(n)},{default:e(()=>[t(l,null,{default:e(()=>[o("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(L,null,{default:e(()=>[o(c(n.name),1)]),_:2},1024),t(f,null,{default:e(()=>[o("key："+c(n.key),1)]),_:2},1024),t(f,null,{default:e(()=>[o("rid："+c(n.rid),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])]),_:1})}const P=_(x,[["render",T]]);export{P as default};
