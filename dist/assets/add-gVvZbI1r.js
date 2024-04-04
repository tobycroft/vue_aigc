import{N as n}from"./Net-B_YcV3Pu.js";import{_ as p,c as V,y as t,o as c,v as e,a3 as _,z as i,ak as D,F as k,G as f,V as y}from"./index-tXHzQweF.js";import{V as u}from"./VContainer-DGzf4P2T.js";import{V as b}from"./VForm-B32ZiWR_.js";import{V as h,a as r}from"./VRow-Bcc0ltue.js";import{V as s}from"./VTextField-D-7IqcOT.js";import{V as v}from"./VSelect-DxwWPnzK.js";import"./TokenModel-epR9isAp.js";import"./index-DEuDzdRh.js";import"./VList-BPgHsYWA.js";import"./VDivider-BiPS7cde.js";import"./VVirtualScroll-CoKX1W7N.js";import"./VSlideGroup-CMLmpwqp.js";const F={data(){return{formData:{name:"",team_id:null,key:"",base_url:"",model:"",detail:0},teamList:[]}},methods:{async fetchTeamList(){try{const m=await new n("/v1/user/team/list").PostFormData();m.code===0?this.teamList=m.data.map(a=>({id:a.team_info.id,title:a.team_info.name})):console.error("Failed to fetch team list:",m.echo)}catch(m){console.error("Failed to fetch team list:",m)}},async addInfo(){try{const m={name:this.formData.name,team_id:parseInt(this.formData.team_id),key:this.formData.key,base_url:this.formData.base_url,model:this.formData.model,detail:parseInt(this.formData.detail)},a=await new n("/v1/iflytek/info/add").PostFormData(m);a.code===0?this.goBack():console.error("Failed to add iflytek info:",a.echo)}catch(m){console.error("Failed to add iflytek info:",m)}},goBack(){this.$router.push("/v1/key?tab=iflytek")}},async mounted(){this.fetchTeamList()}};function x(m,a,C,w,l,d){return c(),V(u,null,{default:t(()=>[e(y,null,{default:t(()=>[e(_,null,{default:t(()=>[i("添加 iflytek 信息")]),_:1}),e(D,null,{default:t(()=>[e(b,{onSubmit:k(d.addInfo,["prevent"])},{default:t(()=>[e(u,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.name,"onUpdate:modelValue":a[0]||(a[0]=o=>l.formData.name=o),label:"名称"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(v,{modelValue:l.formData.team_id,"onUpdate:modelValue":a[1]||(a[1]=o=>l.formData.team_id=o),items:l.teamList,label:"选项","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.host,"onUpdate:modelValue":a[2]||(a[2]=o=>l.formData.host=o),label:"host"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.api_secret,"onUpdate:modelValue":a[3]||(a[3]=o=>l.formData.api_secret=o),label:"api_secret"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.app_id,"onUpdate:modelValue":a[4]||(a[4]=o=>l.formData.app_id=o),label:"app_id"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.api_key,"onUpdate:modelValue":a[5]||(a[5]=o=>l.formData.api_key=o),label:"api_key"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{modelValue:l.formData.vcn,"onUpdate:modelValue":a[6]||(a[6]=o=>l.formData.vcn=o),label:"vcn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:t(()=>[i("添加")]),_:1}),e(f,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:t(()=>[i("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const j=p(F,[["render",x]]);export{j as default};
