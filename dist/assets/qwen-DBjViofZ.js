import{N as f}from"./Net-B_YcV3Pu.js";import{T as p}from"./topheader-BeEym_dw.js";import{_,c as h,y as e,V,o as y,v as t,z as o,ag as I,G as i,a3 as k,ah as d,a2 as n}from"./index-tXHzQweF.js";import{b as w,c as C,V as L,a as c}from"./VDivider-BiPS7cde.js";import{V as v}from"./VVirtualScroll-CoKX1W7N.js";import"./TokenModel-epR9isAp.js";import"./gobotq-3Wa2au3z.js";import"./index-DEuDzdRh.js";const x={components:{top_header:p},data(){return{infoList:[]}},methods:{async fetchInfoList(){const a=await new f("/v1/qwen/info/list").PostFormData();a.code===0?this.infoList=a.data:console.error(a.echo)},async addInfo(){this.$router.push("/v1/key/qwen/add")},async deleteInfo(a){const l=await new f("/v1/qwen/info/delete").PostFormData({id:a.id});l.code===0?this.fetchInfoList():console.error(l.echo)},async editInfo(a){this.$router.push({path:"/v1/key/qwen/edit",query:a})}},mounted(){this.fetchInfoList()}};function q(a,l,T,b,u,s){return y(),h(V,{class:"mx-auto"},{default:e(()=>[t(k,null,{default:e(()=>[o(" 阿里千问 信息列表 "),t(I),t(i,{color:"primary",onClick:s.addInfo},{default:e(()=>[o(" 新增信息 ")]),_:1},8,["onClick"])]),_:1}),t(w),t(v,{items:u.infoList,"item-height":"48"},{default:e(({item:r})=>[t(C,null,{prepend:e(()=>[t(d,{class:"bg-primary"},{default:e(()=>[o("mdi-robot")]),_:1})]),append:e(()=>[t(i,{icon:"",color:"primary",onClick:m=>s.editInfo(r)},{default:e(()=>[t(d,null,{default:e(()=>[o("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),t(i,{icon:"",color:"error",onClick:m=>s.deleteInfo(r)},{default:e(()=>[t(d,null,{default:e(()=>[o("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(L,null,{default:e(()=>[o(n(r.name),1)]),_:2},1024),t(c,null,{default:e(()=>[o("key："+n(r.key),1)]),_:2},1024),t(c,null,{default:e(()=>[o("rid："+n(r.rid),1)]),_:2},1024),t(c,null,{default:e(()=>[o("model："+n(r.model),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])]),_:1})}const z=_(x,[["render",q]]);export{z as default};
