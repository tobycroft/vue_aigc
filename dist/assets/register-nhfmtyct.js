import{N as V}from"./Net-CiyT3oSu.js";import{T as i}from"./TokenModel-epR9isAp.js";import{_ as g,c as u,y as s,o as n,V as m,C as k,D as d,E as h,v as t,F as x,G as r,z as c,H as w}from"./index-CM7I0Y-P.js";import{_ as C}from"./gobotq-3Wa2au3z.js";import{V as _}from"./index-C6VGq7b5.js";import{V as b}from"./VContainer-Sk59pdqv.js";import{V as v}from"./VForm-B1b1V_nN.js";import{V as f}from"./VTextField-DkfgnzRv.js";import{V as p}from"./VSheet-DDPpg9tv.js";const y={beforeCreate(){i.Api_is_login()&&this.$router.push("/index")},created(){this.username=localStorage.getItem("username")},data:()=>({show1:!0,show2:!1,username:"",password:"",rules:[e=>e?!0:"这里填写的应该是你的用户名，而不是你机器人的用户名"]}),methods:{gotonext(){this.username.length>1&&(this.show1=!1,this.show2=!0,localStorage.setItem("username",this.username))},clearout(){this.$router.push("/user/login")},async register(){var e=await new V("/v1/user/auth/register").PostFormData({username:this.username,password:this.password});e.isSuccess&&(i.Api_set_uidAndToken(e.data.uid,e.data.token),this.$router.push("/index"))}}},S=w("h3",{class:"text-h6 mb-4"},"设定密码",-1),N=w("div",{class:"text-body-2"},null,-1);function T(e,a,B,F,A,o){return n(),u(b,{class:"align-self-center"},{default:s(()=>[e.show1?(n(),u(m,{key:0,class:"mx-auto","max-width":"200",height:"200",image:C,title:"GobotQ",theme:"dark"})):k("",!0),d(t(p,{width:"100%",class:"mx-auto mt-6"},{default:s(()=>[t(v,{onSubmit:a[1]||(a[1]=x(()=>{},["prevent"]))},{default:s(()=>[t(f,{autofocus:"",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=l=>e.username=l),rules:e.rules,label:"设定用户名"},null,8,["modelValue","rules"]),t(r,{type:"submit",block:"",class:"mt-0",color:"blue",onClick:o.gotonext},{default:s(()=>[c("下一步")]),_:1},8,["onClick"]),t(r,{block:"",class:"mt-4",color:"green",onClick:o.clearout},{default:s(()=>[c("登录界面")]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[h,e.show1]]),t(_,null,{default:s(()=>[d(t(m,{class:"py-8 px-6 text-center mx-auto ma-4",elevation:"12","max-width":"100%",width:"100%"},{default:s(()=>[S,N,t(p,{color:"surface"},{default:s(()=>[t(f,{modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=l=>e.password=l),label:"密码","max-width":"400"},null,8,["modelValue"])]),_:1}),t(r,{onClick:o.register,class:"my-4",color:"red",height:"40",text:"注册",variant:"flat",width:"70%"},null,8,["onClick"]),t(r,{onClick:o.clearout,class:"my-4",color:"grey",height:"40",text:"返回",variant:"flat",width:"70%"},null,8,["onClick"])]),_:1},512),[[h,e.show2]])]),_:1})]),_:1})}const P=g(y,[["render",T]]);export{P as default};