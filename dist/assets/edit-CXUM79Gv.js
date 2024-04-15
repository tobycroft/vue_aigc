import{N as i}from"./Net-Cq0jD5NP.js";import{_ as c,c as p,y as o,o as h,v as t,a3 as V,z as n,an as _,F as k,G as f,V as y}from"./index-CrAQTTzW.js";import{V as u}from"./VContainer-CkFjThaN.js";import{V as D}from"./VForm-BZoxfrdD.js";import{V as b,a as s}from"./VRow-CfnPCFeD.js";import{V as F}from"./VSelect-LGuKABCv.js";import{V as m}from"./VTextField-DTj4p-sX.js";import"./TokenModel-epR9isAp.js";import"./VList-CxWtpgM0.js";import"./index-Cp5VVsyB.js";import"./VDivider-DEJP1qcO.js";import"./VVirtualScroll-CGYQtMr0.js";import"./VSlideGroup-R0TPBenU.js";const x={data(){return{teamList:[],coinList:[],selectedCoinId:null,formData:{id:null,name:"测试key名称，随便起一个",team_id:"",prefix:"",amount:"-1",from_id:"1"}}},methods:{async fetchTeamInfo(){const e=await new i("/v1/user/team/list").PostFormData();e.code===0?this.teamList=e.GetTeamList():console.error(e.echo)},async fetchInfo(){try{const e=await new i("/v1/team/subtoken/get").PostFormData(this.formData);e.code===0?this.formData=e.data:console.error("Failed to fetch iflytek info:",e.echo)}catch(e){console.error("Failed to fetch iflytek info:",e)}},async fetchCoinList(){try{const e=await new i("/v1/coin/info/list").PostFormData();e.code===0?this.coinList=e.GetTeamList():console.error("Failed to fetch coin list:",e.echo)}catch(e){console.error("Failed to fetch coin list:",e)}},async updateToken(){try{const e=this.formData,a=await new i("/v1/team/subtoken/update").PostFormData(e);a.code===0?this.goBack():console.error("Failed to create token:",a.echo)}catch(e){console.error("Failed to create token:",e)}},goBack(){this.$router.push({path:"/v1/team",query:{tab:"subtoken"}})}},mounted(){this.formData.id=parseInt(this.$route.query.id),isNaN(this.formData.id)&&console.error("Invalid id ID:",this.$route.query.id),this.formData.team_id=parseInt(this.$route.query.team_id),isNaN(this.formData.team_id)&&console.error("Invalid team_id ID:",this.$route.query.team_id),this.fetchTeamInfo(),this.fetchInfo()}};function w(e,a,I,T,r,d){return h(),p(u,null,{default:o(()=>[t(y,null,{default:o(()=>[t(V,null,{default:o(()=>[n(" 添加团队 Token ")]),_:1}),t(_,null,{default:o(()=>[t(D,{onSubmit:k(d.updateToken,["prevent"])},{default:o(()=>[t(u,null,{default:o(()=>[t(b,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(F,{modelValue:r.formData.team_id,"onUpdate:modelValue":a[0]||(a[0]=l=>r.formData.team_id=l),items:r.teamList,label:"团队id","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(m,{modelValue:r.formData.name,"onUpdate:modelValue":a[1]||(a[1]=l=>r.formData.name=l),label:"key名称,测试key名称，随便起一个"},null,8,["modelValue"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(m,{modelValue:r.formData.prefix,"onUpdate:modelValue":a[2]||(a[2]=l=>r.formData.prefix=l),label:"prefix标签"},null,8,["modelValue"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(m,{modelValue:r.formData.amount,"onUpdate:modelValue":a[3]||(a[3]=l=>r.formData.amount=l),label:"可以使用的余额,如果是-1就是无线，大于0就按正常的扣"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:o(()=>[n("添加")]),_:1}),t(f,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:o(()=>[n("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const R=c(x,[["render",w]]);export{R as default};