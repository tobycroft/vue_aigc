import{N as f}from"./Net-CbN0iQT0.js";import{T as _}from"./topheader-CDHZI6sJ.js";import{_ as m,c as h,y as e,Q as y,o as k,v as t,z as a,ah as I,W as d,a4 as V,ai as c,a3 as i}from"./index-B2ptgIXc.js";import{V as v,a as C,b as L,c as s,d as x}from"./VVirtualScroll-DqgvKJw9.js";import"./TokenModel-epR9isAp.js";import"./gobotq-3Wa2au3z.js";import"./index-BUjx_2_u.js";const w={components:{top_header:_},data(){return{infoList:[]}},methods:{async fetchInfoList(){const o=await new f("/v1/iflytek/info/list").PostFormData();o.code===0?this.infoList=o.data:console.error(o.echo)},async addInfo(){this.$router.push("/v1/key/iflytek/add")},async deleteInfo(o){const r=await new f("/v1/iflytek/info/delete").PostFormData({id:o.id});r.code===0?this.fetchInfoList():console.error(r.echo)},async editInfo(o){this.$router.push({path:"/v1/key/iflytek/edit",query:o})}},mounted(){this.fetchInfoList()}};function T(o,r,b,D,u,n){return k(),h(y,{class:"mx-auto"},{default:e(()=>[t(V,null,{default:e(()=>[a(" 讯飞 信息列表 "),t(I),t(d,{color:"primary",onClick:n.addInfo},{default:e(()=>[a(" 新增信息 ")]),_:1},8,["onClick"])]),_:1}),t(v),t(x,{items:u.infoList,"item-height":"48"},{default:e(({item:l})=>[t(C,null,{prepend:e(()=>[t(c,{class:"bg-primary"},{default:e(()=>[a("mdi-robot")]),_:1})]),append:e(()=>[t(d,{icon:"",color:"primary",onClick:p=>n.editInfo(l)},{default:e(()=>[t(c,null,{default:e(()=>[a("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),t(d,{icon:"",color:"error",onClick:p=>n.deleteInfo(l)},{default:e(()=>[t(c,null,{default:e(()=>[a("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(L,null,{default:e(()=>[a(i(l.name),1)]),_:2},1024),t(s,null,{default:e(()=>[a("host："+i(l.host),1)]),_:2},1024),t(s,null,{default:e(()=>[a("api_secret："+i(l.api_secret),1)]),_:2},1024),t(s,null,{default:e(()=>[a("app_id："+i(l.app_id),1)]),_:2},1024),t(s,null,{default:e(()=>[a("api_key："+i(l.api_key),1)]),_:2},1024),t(s,null,{default:e(()=>[a("vcn："+i(l.vcn),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])]),_:1})}const q=m(w,[["render",T]]);export{q as default};
