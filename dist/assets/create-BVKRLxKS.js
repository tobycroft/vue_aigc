import{N as n}from"./Net-CUJB0F84.js";import{_ as c,c as u,y as e,o as d,v as t,z as o,a3 as f,G as p,E as m,$ as V}from"./index-DvYWNhVS.js";import{V as _}from"./VContainer-kTHkBlcL.js";import{V as h}from"./VTextField-CcWXyBSu.js";import{V as x}from"./VForm-B_LpTX5O.js";import"./TokenModel-epR9isAp.js";import"./index-CfxdSSyB.js";const k={data(){return{name:""}},methods:{async submitTeamInfo(){const a=await new n("/v1/team/info/create").PostFormData(this.$data);a.code===0?(console.log("团队信息创建成功"),this.goBack()):console.error(a.echo)},goBack(){this.$router.push("/v1/user/team")}}},B={class:"d-flex flex-column"};function b(a,r,g,v,s,l){return d(),u(_,null,{default:e(()=>[t(f,null,{default:e(()=>[o("创建团队信息")]),_:1}),t(x,{onSubmit:V(l.submitTeamInfo,["prevent"])},{default:e(()=>[t(h,{modelValue:s.name,"onUpdate:modelValue":r[0]||(r[0]=i=>s.name=i),label:"团队名称"},null,8,["modelValue"]),p("div",B,[t(m,{size:"large",type:"submit",color:"primary",class:"mt-4"},{default:e(()=>[o("提交")]),_:1}),t(m,{size:"large",onClick:l.goBack,color:"primary",class:"mt-4"},{default:e(()=>[o("返回")]),_:1},8,["onClick"])])]),_:1},8,["onSubmit"])]),_:1})}const $=c(k,[["render",b]]);export{$ as default};