import{N as m}from"./Net-CHL42bxn.js";import{_ as u,c as f,y as r,o as c,v as o,z as l,a3 as p,G as V,E as d,$ as h}from"./index-DaqMNJzX.js";import{V as x}from"./VContainer-e9fh5Fl9.js";import{V as s}from"./VTextField-CjgaACeG.js";import{V as _}from"./VForm-YrRdvcbI.js";import"./TokenModel-epR9isAp.js";import"./index-DHIz1iJj.js";const y={data(){return{name:"",content:"",prefix:"",team:this.$route.query}},methods:{async fetchTeamInfo(){const t=await new m("/v1/user/team/get").PostFormData(this.team);t.code===0?(this.name=t.data.team_info.name,this.content=t.data.team_info.content,this.prefix=t.data.team_info.prefix):console.error(t.echo)},async updateTeamInfo(){const t={id:this.team.team_id,name:this.name,img:"",content:this.content,prefix:this.prefix},e=await new m("/v1/team/info/update").PostFormData(t);e.code===0?this.goBack():console.error(e.echo)},goBack(){this.$router.push("/v1/user/team")}},mounted(){this.fetchTeamInfo()}},k={class:"d-flex flex-column"};function g(t,e,B,T,a,i){return c(),f(x,null,{default:r(()=>[o(p,null,{default:r(()=>[l("编辑团队信息")]),_:1}),o(_,{onSubmit:h(i.updateTeamInfo,["prevent"])},{default:r(()=>[o(s,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=n=>a.name=n),label:"团队名称"},null,8,["modelValue"]),o(s,{modelValue:a.content,"onUpdate:modelValue":e[1]||(e[1]=n=>a.content=n),label:"团队简介"},null,8,["modelValue"]),o(s,{modelValue:a.prefix,"onUpdate:modelValue":e[2]||(e[2]=n=>a.prefix=n),label:"key标头"},null,8,["modelValue"]),V("div",k,[o(d,{size:"large",type:"submit",color:"primary",class:"mt-4"},{default:r(()=>[l("保存")]),_:1}),o(d,{size:"large",onClick:i.goBack,color:"primary",class:"mt-4"},{default:r(()=>[l("返回")]),_:1},8,["onClick"])])]),_:1},8,["onSubmit"])]),_:1})}const z=u(y,[["render",g]]);export{z as default};
