import{N as l}from"./Net-XkwkGj8j.js";import{_ as u,c as p,y as a,o as V,v as o,a4 as _,z as s,V as h,G as k,H as d,C as D}from"./index-GYFMzDx2.js";import{V as c}from"./VContainer-BB9V2PGD.js";import{V as y}from"./VForm-CR-9bCWs.js";import{V as C,a as m}from"./VRow-Dq6MQYT_.js";import{V as b}from"./VSelect-BxSYMwvK.js";import{V as f}from"./VTextField-CMQBqD-z.js";import"./TokenModel-epR9isAp.js";import"./index-LR9VLuXw.js";import"./VVirtualScroll-Bsy3Yn-G.js";import"./ssrBoot-CdCi8YJX.js";import"./VSlideGroup-BL7QKokZ.js";const x={data(){return{teamList:[],team:this.$route.query,coinList:[],selectedCoinId:null,formData:{name:"测试key名称，随便起一个",team_id:"",prefix:"",amount:"-1",from_id:"1"}}},methods:{async fetchTeamInfo(){const t=await new l("/v1/user/team/list").PostFormData();t.code===0?this.teamList=t.data.map(e=>({id:e.team_info.id,title:e.team_info.name})):console.error(t.echo)},async fetchCoinList(){try{const t=await new l("/v1/coin/info/list").PostFormData();t.code===0?this.coinList=t.data.map(e=>({id:e.id,title:e.name})):console.error("Failed to fetch coin list:",t.echo)}catch(t){console.error("Failed to fetch coin list:",t)}},async createToken(){try{const t={name:this.formData.name,team_id:this.formData.team_id,coin_id:this.selectedCoinId,prefix:this.formData.prefix,amount:this.formData.amount,from_id:this.formData.from_id},e=await new l("/v1/team/subtoken/create").PostFormData(t);e.code===0?this.goBack():console.error("Failed to create token:",e.echo)}catch(t){console.error("Failed to create token:",t)}},goBack(){this.$router.push({path:"/v1/team",query:{tab:"subtoken"}})}},mounted(){this.fetchTeamInfo(),this.fetchCoinList()}};function w(t,e,F,T,r,n){return V(),p(c,null,{default:a(()=>[o(D,null,{default:a(()=>[o(_,null,{default:a(()=>[s("添加团队 Token")]),_:1}),o(h,null,{default:a(()=>[o(y,{onSubmit:k(n.createToken,["prevent"])},{default:a(()=>[o(c,null,{default:a(()=>[o(C,null,{default:a(()=>[o(m,{cols:"12"},{default:a(()=>[o(b,{modelValue:r.formData.team_id,"onUpdate:modelValue":e[0]||(e[0]=i=>r.formData.team_id=i),items:r.teamList,label:"团队id","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),o(m,{cols:"12"},{default:a(()=>[o(f,{modelValue:r.formData.name,"onUpdate:modelValue":e[1]||(e[1]=i=>r.formData.name=i),label:"key名称"},null,8,["modelValue"])]),_:1}),o(m,{cols:"12"},{default:a(()=>[o(f,{modelValue:r.formData.amount,"onUpdate:modelValue":e[2]||(e[2]=i=>r.formData.amount=i),label:"可以使用的余额,如果是-1就是无线，大于0就按正常的扣"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(d,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:a(()=>[s("添加")]),_:1}),o(d,{onClick:n.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[s("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const H=u(x,[["render",w]]);export{H as default};