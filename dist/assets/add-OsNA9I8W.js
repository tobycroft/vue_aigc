import{N as s}from"./Net-D7ZKMrbs.js";import{_ as c,c as p,y as a,o as V,v as e,aF as _,z as n,V as h,$ as D,E as f,W as k}from"./index-RAoTM10d.js";import{V as u}from"./VContainer-CCr8sb45.js";import{V as x}from"./VForm-CjCmgIju.js";import{V as y,a as i}from"./VRow-Bd-cOwr-.js";import{V as b}from"./VSelect-CiRyvDNL.js";import{V as m}from"./VTextField-1lvhk1mP.js";import"./TokenModel-B5FLYtgf.js";import"./VList-t2Neuc53.js";import"./index-CC8CDgwQ.js";import"./ssrBoot-BwWCRUVP.js";import"./VSlideGroup-CPQJlHnY.js";const C={data(){return{team_info:{},team:this.$route.query,coinList:[],selectedCoinId:null,formData:{name:"测试key名称，随便起一个",team_id:"",prefix:"",amount:"-1",from_id:"1"}}},methods:{async fetchTeamInfo(){const o=await new s("/v1/user/team/get").PostFormData(this.team);o.code===0?(this.team_info=o.data.team_info,this.formData.prefix=o.data.team_info.prefix,this.formData.team_id=o.data.team_info.id):console.error(o.echo)},async fetchCoinList(){try{const o=await new s("/v1/coin/info/list").PostFormData();o.code===0?this.coinList=o.data.map(t=>({id:t.id,title:t.name})):console.error("Failed to fetch coin list:",o.echo)}catch(o){console.error("Failed to fetch coin list:",o)}},async createToken(){try{const o={name:this.formData.name,team_id:this.formData.team_id,coin_id:this.selectedCoinId,prefix:this.formData.prefix,amount:this.formData.amount,from_id:this.formData.from_id},t=await new s("/v1/team/subtoken/create").PostFormData(o);t.code===0?this.$router.push({path:"/v1/team/subtoken",query:this.team}):console.error("Failed to create token:",t.echo)}catch(o){console.error("Failed to create token:",o)}},goBack(){this.$router.push({path:"/v1/team/subtoken",query:this.team})}},mounted(){this.fetchTeamInfo(),this.fetchCoinList()}};function F(o,t,T,w,l,d){return V(),p(u,null,{default:a(()=>[e(k,null,{default:a(()=>[e(_,null,{default:a(()=>[n("添加团队 Token")]),_:1}),e(h,null,{default:a(()=>[e(x,{onSubmit:D(d.createToken,["prevent"])},{default:a(()=>[e(u,null,{default:a(()=>[e(y,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(b,{modelValue:l.selectedCoinId,"onUpdate:modelValue":t[0]||(t[0]=r=>l.selectedCoinId=r),items:l.coinList,label:"选择GPT类型","item-text":"name","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.name,"onUpdate:modelValue":t[1]||(t[1]=r=>l.formData.name=r),label:"key名称"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.team_id,"onUpdate:modelValue":t[2]||(t[2]=r=>l.formData.team_id=r),label:"团队id"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.prefix,"onUpdate:modelValue":t[3]||(t[3]=r=>l.formData.prefix=r),label:"prefix标签"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.amount,"onUpdate:modelValue":t[4]||(t[4]=r=>l.formData.amount=r),label:"可以使用的余额,如果是-1就是无线，大于0就按正常的扣"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.from_id,"onUpdate:modelValue":t[5]||(t[5]=r=>l.formData.from_id=r),label:"上级id"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:a(()=>[n("添加")]),_:1}),e(f,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[n("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const G=c(C,[["render",F]]);export{G as default};
