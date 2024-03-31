import{l as n}from"./Net-CpAMwQYd-GNWnwlkL.js";import{f as c,H as p,Z as h,n as t,d as e,a4 as _,p as s,q as D,a0 as V,N as u,U as b}from"./index-2GhK7Pc3.js";import{C as f}from"./VContainer-CrqgRyvL-DkLkhJU8.js";import{S as k}from"./VForm-ckn4Qzpt-MZyJ_XpZ.js";import{z as y,x as i}from"./VRow-vtKMBAHJ-DVo1zGEg.js";import{h as C}from"./VSelect-L_63wK57-DeHFr9z8.js";import{C as r}from"./VTextField-CME-Ourc-CS42DhFZ.js";import"./VList-CmUa2Hto-CQy7AFPJ.js";import"./index-DOTyCMeZ-j8oI9t91.js";import"./VSlideGroup-ZBxTPjAQ-CLBa8vZI.js";import"./TokenModel-B5FLYtgf-D3Bu0gJP.js";import"./index-VZFVW0nk.js";import"./ssrBoot-BNxG8Y-q-DphqTJ1q.js";const v={data(){return{team_info:{},team:this.$route.query,coinList:[],selectedCoinId:null,formData:{name:"测试key名称，随便起一个",team_id:"",prefix:"",amount:"-1",from_id:"1"}}},methods:{async fetchTeamInfo(){const o=await new n("/v1/user/team/get").PostFormData(this.team);o.code===0?(this.team_info=o.data.team_info,this.formData.prefix=o.data.team_info.prefix,this.formData.team_id=o.data.team_info.id):console.error(o.echo)},async fetchCoinList(){try{const o=await new n("/v1/coin/info/list").PostFormData();o.code===0?this.coinList=o.data.map(a=>({id:a.id,title:a.name})):console.error("Failed to fetch coin list:",o.echo)}catch(o){console.error("Failed to fetch coin list:",o)}},async createToken(){try{const o={name:this.formData.name,team_id:this.formData.team_id,coin_id:this.selectedCoinId,prefix:this.formData.prefix,amount:this.formData.amount,from_id:this.formData.from_id},a=await new n("/v1/team/subtoken/create").PostFormData(o);a.code===0?this.$router.push({path:"/v1/team/subtoken",query:this.team}):console.error("Failed to create token:",a.echo)}catch(o){console.error("Failed to create token:",o)}},goBack(){this.$router.push({path:"/v1/team/subtoken",query:this.team})}},mounted(){this.fetchTeamInfo(),this.fetchCoinList()}};function x(o,a,F,w,l,d){return p(),h(f,null,{default:t(()=>[e(b,null,{default:t(()=>[e(_,null,{default:t(()=>[s("添加团队 Token")]),_:1}),e(D,null,{default:t(()=>[e(k,{onSubmit:V(d.createToken,["prevent"])},{default:t(()=>[e(f,null,{default:t(()=>[e(y,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(C,{modelValue:l.selectedCoinId,"onUpdate:modelValue":a[0]||(a[0]=m=>l.selectedCoinId=m),items:l.coinList,label:"选择GPT类型","item-text":"name","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(r,{modelValue:l.formData.name,"onUpdate:modelValue":a[1]||(a[1]=m=>l.formData.name=m),label:"key名称"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(r,{modelValue:l.formData.team_id,"onUpdate:modelValue":a[2]||(a[2]=m=>l.formData.team_id=m),label:"团队id"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(r,{modelValue:l.formData.prefix,"onUpdate:modelValue":a[3]||(a[3]=m=>l.formData.prefix=m),label:"prefix标签"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(r,{modelValue:l.formData.amount,"onUpdate:modelValue":a[4]||(a[4]=m=>l.formData.amount=m),label:"可以使用的余额,如果是-1就是无线，大于0就按正常的扣"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(r,{modelValue:l.formData.from_id,"onUpdate:modelValue":a[5]||(a[5]=m=>l.formData.from_id=m),label:"上级id"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:t(()=>[s("添加")]),_:1}),e(u,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:t(()=>[s("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const Z=c(v,[["render",x]]);export{Z as default};
