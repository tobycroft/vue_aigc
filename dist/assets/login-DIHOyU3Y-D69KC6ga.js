import{l as z}from"./Net-CpAMwQYd-GNWnwlkL.js";import{a as x}from"./TokenModel-B5FLYtgf-D3Bu0gJP.js";import{e as D,G as E,Y as G,t as L,u as Y,v as Z,w as J,x as K,Q as P,$ as W,R as q,F as X,D as $,z as tt,K as at,C as st,E as et,L as rt,M as ot,S as nt,j as ut,I as j,f as lt,d as b,H as _,Z as S,n as v,U as T,V as it,X as k,_ as B,a0 as ct,N as w,p as A}from"./index-2GhK7Pc3.js";import{s as ft}from"./gobotq-3Wa2au3z-DdkrL1Vq.js";import{L as ht}from"./index-DOTyCMeZ-j8oI9t91.js";import{C as dt}from"./VContainer-CrqgRyvL-DkLkhJU8.js";import{S as gt}from"./VForm-ckn4Qzpt-MZyJ_XpZ.js";import{C as I}from"./VTextField-CME-Ourc-CS42DhFZ.js";import"./index-VZFVW0nk.js";const mt=D({color:String,...E(),...G(),...L(),...Y(),...Z(),...J(),...K(),...P(),...W()},"VSheet"),V=q()({name:"VSheet",props:mt(),setup(n,h){let{slots:u}=h;const{themeClasses:c}=X(n),{backgroundColorClasses:i,backgroundColorStyles:l}=$(tt(n,"color")),{borderClasses:f}=at(n),{dimensionStyles:r}=st(n),{elevationClasses:y}=et(n),{locationStyles:s}=rt(n),{positionClasses:t}=ot(n),{roundedClasses:e}=nt(n);return ut(()=>b(n.tag,{class:["v-sheet",c.value,i.value,f.value,y.value,t.value,e.value,n.class],style:[l.value,r.value,s.value,n.style]},u)),{}}});function pt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var F={exports:{}},U={exports:{}};(function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h={rotl:function(u,c){return u<<c|u>>>32-c},rotr:function(u,c){return u<<32-c|u>>>c},endian:function(u){if(u.constructor==Number)return h.rotl(u,8)&16711935|h.rotl(u,24)&4278255360;for(var c=0;c<u.length;c++)u[c]=h.endian(u[c]);return u},randomBytes:function(u){for(var c=[];u>0;u--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(u){for(var c=[],i=0,l=0;i<u.length;i++,l+=8)c[l>>>5]|=u[i]<<24-l%32;return c},wordsToBytes:function(u){for(var c=[],i=0;i<u.length*32;i+=8)c.push(u[i>>>5]>>>24-i%32&255);return c},bytesToHex:function(u){for(var c=[],i=0;i<u.length;i++)c.push((u[i]>>>4).toString(16)),c.push((u[i]&15).toString(16));return c.join("")},hexToBytes:function(u){for(var c=[],i=0;i<u.length;i+=2)c.push(parseInt(u.substr(i,2),16));return c},bytesToBase64:function(u){for(var c=[],i=0;i<u.length;i+=3)for(var l=u[i]<<16|u[i+1]<<8|u[i+2],f=0;f<4;f++)i*8+f*6<=u.length*8?c.push(n.charAt(l>>>6*(3-f)&63)):c.push("=");return c.join("")},base64ToBytes:function(u){u=u.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],i=0,l=0;i<u.length;l=++i%4)l!=0&&c.push((n.indexOf(u.charAt(i-1))&Math.pow(2,-2*l+8)-1)<<l*2|n.indexOf(u.charAt(i))>>>6-l*2);return c}};U.exports=h})();var yt=U.exports,C={utf8:{stringToBytes:function(n){return C.bin.stringToBytes(unescape(encodeURIComponent(n)))},bytesToString:function(n){return decodeURIComponent(escape(C.bin.bytesToString(n)))}},bin:{stringToBytes:function(n){for(var h=[],u=0;u<n.length;u++)h.push(n.charCodeAt(u)&255);return h},bytesToString:function(n){for(var h=[],u=0;u<n.length;u++)h.push(String.fromCharCode(n[u]));return h.join("")}}},M=C;/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/var bt=function(n){return n!=null&&(N(n)||vt(n)||!!n._isBuffer)};function N(n){return!!n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function vt(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&N(n.slice(0,0))}(function(){var n=yt,h=M.utf8,u=bt,c=M.bin,i=function(l,f){l.constructor==String?f&&f.encoding==="binary"?l=c.stringToBytes(l):l=h.stringToBytes(l):u(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var r=n.bytesToWords(l),y=l.length*8,s=1732584193,t=-271733879,e=-1732584194,a=271733878,o=0;o<r.length;o++)r[o]=(r[o]<<8|r[o]>>>24)&16711935|(r[o]<<24|r[o]>>>8)&4278255360;r[y>>>5]|=128<<y%32,r[(y+64>>>9<<4)+14]=y;for(var d=i._ff,g=i._gg,m=i._hh,p=i._ii,o=0;o<r.length;o+=16){var R=s,H=t,O=e,Q=a;s=d(s,t,e,a,r[o+0],7,-680876936),a=d(a,s,t,e,r[o+1],12,-389564586),e=d(e,a,s,t,r[o+2],17,606105819),t=d(t,e,a,s,r[o+3],22,-1044525330),s=d(s,t,e,a,r[o+4],7,-176418897),a=d(a,s,t,e,r[o+5],12,1200080426),e=d(e,a,s,t,r[o+6],17,-1473231341),t=d(t,e,a,s,r[o+7],22,-45705983),s=d(s,t,e,a,r[o+8],7,1770035416),a=d(a,s,t,e,r[o+9],12,-1958414417),e=d(e,a,s,t,r[o+10],17,-42063),t=d(t,e,a,s,r[o+11],22,-1990404162),s=d(s,t,e,a,r[o+12],7,1804603682),a=d(a,s,t,e,r[o+13],12,-40341101),e=d(e,a,s,t,r[o+14],17,-1502002290),t=d(t,e,a,s,r[o+15],22,1236535329),s=g(s,t,e,a,r[o+1],5,-165796510),a=g(a,s,t,e,r[o+6],9,-1069501632),e=g(e,a,s,t,r[o+11],14,643717713),t=g(t,e,a,s,r[o+0],20,-373897302),s=g(s,t,e,a,r[o+5],5,-701558691),a=g(a,s,t,e,r[o+10],9,38016083),e=g(e,a,s,t,r[o+15],14,-660478335),t=g(t,e,a,s,r[o+4],20,-405537848),s=g(s,t,e,a,r[o+9],5,568446438),a=g(a,s,t,e,r[o+14],9,-1019803690),e=g(e,a,s,t,r[o+3],14,-187363961),t=g(t,e,a,s,r[o+8],20,1163531501),s=g(s,t,e,a,r[o+13],5,-1444681467),a=g(a,s,t,e,r[o+2],9,-51403784),e=g(e,a,s,t,r[o+7],14,1735328473),t=g(t,e,a,s,r[o+12],20,-1926607734),s=m(s,t,e,a,r[o+5],4,-378558),a=m(a,s,t,e,r[o+8],11,-2022574463),e=m(e,a,s,t,r[o+11],16,1839030562),t=m(t,e,a,s,r[o+14],23,-35309556),s=m(s,t,e,a,r[o+1],4,-1530992060),a=m(a,s,t,e,r[o+4],11,1272893353),e=m(e,a,s,t,r[o+7],16,-155497632),t=m(t,e,a,s,r[o+10],23,-1094730640),s=m(s,t,e,a,r[o+13],4,681279174),a=m(a,s,t,e,r[o+0],11,-358537222),e=m(e,a,s,t,r[o+3],16,-722521979),t=m(t,e,a,s,r[o+6],23,76029189),s=m(s,t,e,a,r[o+9],4,-640364487),a=m(a,s,t,e,r[o+12],11,-421815835),e=m(e,a,s,t,r[o+15],16,530742520),t=m(t,e,a,s,r[o+2],23,-995338651),s=p(s,t,e,a,r[o+0],6,-198630844),a=p(a,s,t,e,r[o+7],10,1126891415),e=p(e,a,s,t,r[o+14],15,-1416354905),t=p(t,e,a,s,r[o+5],21,-57434055),s=p(s,t,e,a,r[o+12],6,1700485571),a=p(a,s,t,e,r[o+3],10,-1894986606),e=p(e,a,s,t,r[o+10],15,-1051523),t=p(t,e,a,s,r[o+1],21,-2054922799),s=p(s,t,e,a,r[o+8],6,1873313359),a=p(a,s,t,e,r[o+15],10,-30611744),e=p(e,a,s,t,r[o+6],15,-1560198380),t=p(t,e,a,s,r[o+13],21,1309151649),s=p(s,t,e,a,r[o+4],6,-145523070),a=p(a,s,t,e,r[o+11],10,-1120210379),e=p(e,a,s,t,r[o+2],15,718787259),t=p(t,e,a,s,r[o+9],21,-343485551),s=s+R>>>0,t=t+H>>>0,e=e+O>>>0,a=a+Q>>>0}return n.endian([s,t,e,a])};i._ff=function(l,f,r,y,s,t,e){var a=l+(f&r|~f&y)+(s>>>0)+e;return(a<<t|a>>>32-t)+f},i._gg=function(l,f,r,y,s,t,e){var a=l+(f&y|r&~y)+(s>>>0)+e;return(a<<t|a>>>32-t)+f},i._hh=function(l,f,r,y,s,t,e){var a=l+(f^r^y)+(s>>>0)+e;return(a<<t|a>>>32-t)+f},i._ii=function(l,f,r,y,s,t,e){var a=l+(r^(f|~y))+(s>>>0)+e;return(a<<t|a>>>32-t)+f},i._blocksize=16,i._digestsize=16,F.exports=function(l,f){if(l==null)throw new Error("Illegal argument "+l);var r=n.wordsToBytes(i(l,f));return f&&f.asBytes?r:f&&f.asString?c.bytesToString(r):n.bytesToHex(r)}})();var wt=F.exports;const Ct=pt(wt),xt={beforeCreate(){x.Api_is_login()&&this.$router.push("/center")},created(){this.username=localStorage.getItem("username")},data:()=>({show1:!0,show2:!1,username:"",password:"",rules:[n=>n?!0:"这里填写的应该是你的用户名，而不是你机器人的用户名"]}),methods:{gotonext(){this.username.length>1&&(this.show1=!1,this.show2=!0,localStorage.setItem("username",this.username))},clearout(){this.show2=!1,this.show1=!0,this.username="",localStorage.removeItem("username")},async login(){var n=await new z("/v1/user/auth/login").PostFormData({username:this.username,password:Ct(this.password)});n.isSuccess&&(x.Api_set_uidAndToken(n.data.uid,n.data.token),this.$router.push("/center"))}}},_t=j("h3",{class:"text-h6 mb-4"},"填写密码",-1),St=j("div",{class:"text-body-2"},null,-1);function Tt(n,h,u,c,i,l){return _(),S(dt,{class:"align-self-center"},{default:v(()=>[n.show1?(_(),S(T,{key:0,class:"mx-auto","max-width":"200",height:"200",image:ft,title:"GobotQ",theme:"dark"})):it("",!0),k(b(V,{width:"100%",class:"mx-auto mt-6"},{default:v(()=>[b(gt,{onSubmit:h[1]||(h[1]=ct(()=>{},["prevent"]))},{default:v(()=>[b(I,{autofocus:"",modelValue:n.username,"onUpdate:modelValue":h[0]||(h[0]=f=>n.username=f),rules:n.rules,label:"这里输入你的用户名"},null,8,["modelValue","rules"]),b(w,{type:"submit",block:"",class:"mt-0",color:"blue",onClick:l.gotonext},{default:v(()=>[A("下一步")]),_:1},8,["onClick"]),b(w,{type:"submit",block:"",class:"mt-4",color:"grey",onClick:l.clearout},{default:v(()=>[A("清空数据")]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[B,n.show1]]),b(ht,null,{default:v(()=>[k(b(T,{class:"py-8 px-6 text-center mx-auto ma-4",elevation:"12","max-width":"100%",width:"100%"},{default:v(()=>[_t,St,b(V,{color:"surface"},{default:v(()=>[b(I,{modelValue:n.password,"onUpdate:modelValue":h[2]||(h[2]=f=>n.password=f),type:"password",label:"密码","max-width":"400"},null,8,["modelValue"])]),_:1}),b(w,{onClick:l.login,class:"my-4",color:"blue",height:"40",text:"验证并登录",variant:"flat",width:"70%"},null,8,["onClick"]),b(w,{onClick:l.clearout,class:"my-4",color:"grey",height:"40",text:"返回",variant:"flat",width:"70%"},null,8,["onClick"])]),_:1},512),[[B,n.show2]])]),_:1})]),_:1})}const Nt=lt(xt,[["render",Tt]]);export{Nt as default};
