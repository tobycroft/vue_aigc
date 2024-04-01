import{N as d}from"./Net-BH8q4TKA.js";import{_ as c,c as p,y as a,o as V,v as e,a3 as _,E as f,z as s,V as h,$ as k,W as D}from"./index-BqqFHk0R.js";import{V as u}from"./VContainer-C2kFy1jQ.js";import{V as x}from"./VForm-CctfBckV.js";import{V as y,a as i}from"./VRow-G0EN9UcQ.js";import{V as C}from"./VSelect-BUmsAw2h.js";import{V as m}from"./VTextField-PL6M9mAz.js";import"./TokenModel-epR9isAp.js";import"./VList-CCQZZc5M.js";import"./index-Bfteqi7l.js";import"./ssrBoot-7ISpROA7.js";import"./VSlideGroup-CjwM4cSB.js";const b={data(){return{team_info:{},team:this.$route.query,coinList:[],selectedCoinId:null,formData:{name:"测试key名称，随便起一个",team_id:"",prefix:"",amount:"-1",from_id:"1"}}},methods:{async fetchTeamInfo(){const o=await new d("/v1/user/team/get").PostFormData(this.team);o.code===0?(this.team_info=o.data.team_info,this.formData.prefix=o.data.team_info.prefix,this.formData.team_id=o.data.team_info.id):console.error(o.echo)},async fetchCoinList(){try{const o=await new d("/v1/coin/info/list").PostFormData();o.code===0?this.coinList=o.data.map(t=>({id:t.id,title:t.name})):console.error("Failed to fetch coin list:",o.echo)}catch(o){console.error("Failed to fetch coin list:",o)}},async createToken(){try{const o={name:this.formData.name,team_id:this.formData.team_id,coin_id:this.selectedCoinId,prefix:this.formData.prefix,amount:this.formData.amount,from_id:this.formData.from_id},t=await new d("/v1/team/subtoken/create").PostFormData(o);t.code===0?this.$router.push({path:"/v1/team/subtoken",query:this.team}):console.error("Failed to create token:",t.echo)}catch(o){console.error("Failed to create token:",o)}},goBack(){this.$router.push({path:"/v1/team/subtoken",query:this.team})}},mounted(){this.fetchTeamInfo(),this.fetchCoinList()}};function T(o,t,w,F,l,n){return V(),p(u,null,{default:a(()=>[e(D,null,{default:a(()=>[e(_,null,{default:a(()=>[e(f,{onClick:n.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[s("返回")]),_:1},8,["onClick"]),s(" 添加团队 Token ")]),_:1}),e(h,null,{default:a(()=>[e(x,{onSubmit:k(n.createToken,["prevent"])},{default:a(()=>[e(u,null,{default:a(()=>[e(y,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(C,{modelValue:l.selectedCoinId,"onUpdate:modelValue":t[0]||(t[0]=r=>l.selectedCoinId=r),items:l.coinList,label:"选择GPT类型","item-text":"name","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.name,"onUpdate:modelValue":t[1]||(t[1]=r=>l.formData.name=r),label:"key名称"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.team_id,"onUpdate:modelValue":t[2]||(t[2]=r=>l.formData.team_id=r),label:"团队id"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.prefix,"onUpdate:modelValue":t[3]||(t[3]=r=>l.formData.prefix=r),label:"prefix标签"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.amount,"onUpdate:modelValue":t[4]||(t[4]=r=>l.formData.amount=r),label:"可以使用的余额,如果是-1就是无线，大于0就按正常的扣"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:l.formData.from_id,"onUpdate:modelValue":t[5]||(t[5]=r=>l.formData.from_id=r),label:"上级id"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:a(()=>[s("添加")]),_:1}),e(f,{onClick:n.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[s("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const G=c(b,[["render",T]]);export{G as default};
