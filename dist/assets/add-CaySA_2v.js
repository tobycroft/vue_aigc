import{N as n}from"./Net-Cq0jD5NP.js";import{_ as p,c as V,y as o,o as c,v as e,a3 as _,z as i,an as y,F as k,G as u,V as D}from"./index-CrAQTTzW.js";import{V as f}from"./VContainer-CkFjThaN.js";import{V as b}from"./VForm-BZoxfrdD.js";import{V as v,a as m}from"./VRow-CfnPCFeD.js";import{V as s}from"./VTextField-DTj4p-sX.js";import{V as F}from"./VSelect-LGuKABCv.js";import"./TokenModel-epR9isAp.js";import"./index-Cp5VVsyB.js";import"./VList-CxWtpgM0.js";import"./VDivider-DEJP1qcO.js";import"./VVirtualScroll-CGYQtMr0.js";import"./VSlideGroup-R0TPBenU.js";const x={data(){return{formData:{name:"",team_id:null,key:"",base_url:"",model:"",detail:0},teamList:[]}},methods:{async fetchTeamList(){try{const r=await new n("/v1/user/team/list").PostFormData();r.code===0?this.teamList=r.data.map(l=>({id:l.team_info.id,title:l.team_info.name})):console.error("Failed to fetch team list:",r.echo)}catch(r){console.error("Failed to fetch team list:",r)}},async addInfo(){try{const r=this.formData,l=await new n("/v1/iflytek/info/add").PostFormData(r);l.code===0?this.goBack():console.error("Failed to add iflytek info:",l.echo)}catch(r){console.error("Failed to add iflytek info:",r)}},goBack(){this.$router.push("/v1/key?tab=iflytek")}},async mounted(){this.fetchTeamList()}};function C(r,l,h,w,t,d){return c(),V(f,null,{default:o(()=>[e(D,null,{default:o(()=>[e(_,null,{default:o(()=>[i("添加 iflytek 信息")]),_:1}),e(y,null,{default:o(()=>[e(b,{onSubmit:k(d.addInfo,["prevent"])},{default:o(()=>[e(f,null,{default:o(()=>[e(v,null,{default:o(()=>[e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.name,"onUpdate:modelValue":l[0]||(l[0]=a=>t.formData.name=a),label:"名称"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(F,{modelValue:t.formData.team_id,"onUpdate:modelValue":l[1]||(l[1]=a=>t.formData.team_id=a),items:t.teamList,label:"选项","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.host,"onUpdate:modelValue":l[2]||(l[2]=a=>t.formData.host=a),label:"host"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.api_secret,"onUpdate:modelValue":l[3]||(l[3]=a=>t.formData.api_secret=a),label:"api_secret"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.app_id,"onUpdate:modelValue":l[4]||(l[4]=a=>t.formData.app_id=a),label:"app_id"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.api_key,"onUpdate:modelValue":l[5]||(l[5]=a=>t.formData.api_key=a),label:"api_key"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(s,{modelValue:t.formData.vcn,"onUpdate:modelValue":l[6]||(l[6]=a=>t.formData.vcn=a),label:"vcn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:o(()=>[i("添加")]),_:1}),e(u,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:o(()=>[i("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const j=p(x,[["render",C]]);export{j as default};