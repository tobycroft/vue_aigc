import{N as G}from"./Net-D7ZKMrbs.js";import{T as F}from"./TokenModel-B5FLYtgf.js";import{p as L,H as $,m as z,I as W,J as Q,K as Y,L as Z,M as J,w as K,k as X,l as b,n as q,N as j,O as tt,P as et,Q as rt,R as ot,S as nt,T as at,U as st,t as ut,v as y,_ as lt,c as x,y as w,o as T,W as _,X as it,Y as S,Z as B,$ as ct,E as k,z as V,G as E}from"./index-RAoTM10d.js";import{_ as ft}from"./gobotq-3Wa2au3z.js";import{V as dt}from"./index-CC8CDgwQ.js";import{V as ht}from"./VContainer-CCr8sb45.js";import{V as mt}from"./VForm-CjCmgIju.js";import{V as P}from"./VTextField-1lvhk1mP.js";const pt=L({color:String,...$(),...z(),...W(),...Q(),...Y(),...Z(),...J(),...K(),...X()},"VSheet"),A=b()({name:"VSheet",props:pt(),setup(s,d){let{slots:u}=d;const{themeClasses:c}=q(s),{backgroundColorClasses:i,backgroundColorStyles:l}=j(tt(s,"color")),{borderClasses:f}=et(s),{dimensionStyles:n}=rt(s),{elevationClasses:g}=ot(s),{locationStyles:r}=nt(s),{positionClasses:t}=at(s),{roundedClasses:o}=st(s);return ut(()=>y(s.tag,{class:["v-sheet",c.value,i.value,f.value,g.value,t.value,o.value,s.class],style:[l.value,n.value,r.value,s.style]},u)),{}}});function vt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var N={exports:{}},M={exports:{}};(function(){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d={rotl:function(u,c){return u<<c|u>>>32-c},rotr:function(u,c){return u<<32-c|u>>>c},endian:function(u){if(u.constructor==Number)return d.rotl(u,8)&16711935|d.rotl(u,24)&4278255360;for(var c=0;c<u.length;c++)u[c]=d.endian(u[c]);return u},randomBytes:function(u){for(var c=[];u>0;u--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(u){for(var c=[],i=0,l=0;i<u.length;i++,l+=8)c[l>>>5]|=u[i]<<24-l%32;return c},wordsToBytes:function(u){for(var c=[],i=0;i<u.length*32;i+=8)c.push(u[i>>>5]>>>24-i%32&255);return c},bytesToHex:function(u){for(var c=[],i=0;i<u.length;i++)c.push((u[i]>>>4).toString(16)),c.push((u[i]&15).toString(16));return c.join("")},hexToBytes:function(u){for(var c=[],i=0;i<u.length;i+=2)c.push(parseInt(u.substr(i,2),16));return c},bytesToBase64:function(u){for(var c=[],i=0;i<u.length;i+=3)for(var l=u[i]<<16|u[i+1]<<8|u[i+2],f=0;f<4;f++)i*8+f*6<=u.length*8?c.push(s.charAt(l>>>6*(3-f)&63)):c.push("=");return c.join("")},base64ToBytes:function(u){u=u.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],i=0,l=0;i<u.length;l=++i%4)l!=0&&c.push((s.indexOf(u.charAt(i-1))&Math.pow(2,-2*l+8)-1)<<l*2|s.indexOf(u.charAt(i))>>>6-l*2);return c}};M.exports=d})();var gt=M.exports,C={utf8:{stringToBytes:function(s){return C.bin.stringToBytes(unescape(encodeURIComponent(s)))},bytesToString:function(s){return decodeURIComponent(escape(C.bin.bytesToString(s)))}},bin:{stringToBytes:function(s){for(var d=[],u=0;u<s.length;u++)d.push(s.charCodeAt(u)&255);return d},bytesToString:function(s){for(var d=[],u=0;u<s.length;u++)d.push(String.fromCharCode(s[u]));return d.join("")}}},I=C;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var yt=function(s){return s!=null&&(R(s)||wt(s)||!!s._isBuffer)};function R(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function wt(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&R(s.slice(0,0))}(function(){var s=gt,d=I.utf8,u=yt,c=I.bin,i=function(l,f){l.constructor==String?f&&f.encoding==="binary"?l=c.stringToBytes(l):l=d.stringToBytes(l):u(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var n=s.bytesToWords(l),g=l.length*8,r=1732584193,t=-271733879,o=-1732584194,e=271733878,a=0;a<n.length;a++)n[a]=(n[a]<<8|n[a]>>>24)&16711935|(n[a]<<24|n[a]>>>8)&4278255360;n[g>>>5]|=128<<g%32,n[(g+64>>>9<<4)+14]=g;for(var h=i._ff,m=i._gg,p=i._hh,v=i._ii,a=0;a<n.length;a+=16){var U=r,D=t,H=o,O=e;r=h(r,t,o,e,n[a+0],7,-680876936),e=h(e,r,t,o,n[a+1],12,-389564586),o=h(o,e,r,t,n[a+2],17,606105819),t=h(t,o,e,r,n[a+3],22,-1044525330),r=h(r,t,o,e,n[a+4],7,-176418897),e=h(e,r,t,o,n[a+5],12,1200080426),o=h(o,e,r,t,n[a+6],17,-1473231341),t=h(t,o,e,r,n[a+7],22,-45705983),r=h(r,t,o,e,n[a+8],7,1770035416),e=h(e,r,t,o,n[a+9],12,-1958414417),o=h(o,e,r,t,n[a+10],17,-42063),t=h(t,o,e,r,n[a+11],22,-1990404162),r=h(r,t,o,e,n[a+12],7,1804603682),e=h(e,r,t,o,n[a+13],12,-40341101),o=h(o,e,r,t,n[a+14],17,-1502002290),t=h(t,o,e,r,n[a+15],22,1236535329),r=m(r,t,o,e,n[a+1],5,-165796510),e=m(e,r,t,o,n[a+6],9,-1069501632),o=m(o,e,r,t,n[a+11],14,643717713),t=m(t,o,e,r,n[a+0],20,-373897302),r=m(r,t,o,e,n[a+5],5,-701558691),e=m(e,r,t,o,n[a+10],9,38016083),o=m(o,e,r,t,n[a+15],14,-660478335),t=m(t,o,e,r,n[a+4],20,-405537848),r=m(r,t,o,e,n[a+9],5,568446438),e=m(e,r,t,o,n[a+14],9,-1019803690),o=m(o,e,r,t,n[a+3],14,-187363961),t=m(t,o,e,r,n[a+8],20,1163531501),r=m(r,t,o,e,n[a+13],5,-1444681467),e=m(e,r,t,o,n[a+2],9,-51403784),o=m(o,e,r,t,n[a+7],14,1735328473),t=m(t,o,e,r,n[a+12],20,-1926607734),r=p(r,t,o,e,n[a+5],4,-378558),e=p(e,r,t,o,n[a+8],11,-2022574463),o=p(o,e,r,t,n[a+11],16,1839030562),t=p(t,o,e,r,n[a+14],23,-35309556),r=p(r,t,o,e,n[a+1],4,-1530992060),e=p(e,r,t,o,n[a+4],11,1272893353),o=p(o,e,r,t,n[a+7],16,-155497632),t=p(t,o,e,r,n[a+10],23,-1094730640),r=p(r,t,o,e,n[a+13],4,681279174),e=p(e,r,t,o,n[a+0],11,-358537222),o=p(o,e,r,t,n[a+3],16,-722521979),t=p(t,o,e,r,n[a+6],23,76029189),r=p(r,t,o,e,n[a+9],4,-640364487),e=p(e,r,t,o,n[a+12],11,-421815835),o=p(o,e,r,t,n[a+15],16,530742520),t=p(t,o,e,r,n[a+2],23,-995338651),r=v(r,t,o,e,n[a+0],6,-198630844),e=v(e,r,t,o,n[a+7],10,1126891415),o=v(o,e,r,t,n[a+14],15,-1416354905),t=v(t,o,e,r,n[a+5],21,-57434055),r=v(r,t,o,e,n[a+12],6,1700485571),e=v(e,r,t,o,n[a+3],10,-1894986606),o=v(o,e,r,t,n[a+10],15,-1051523),t=v(t,o,e,r,n[a+1],21,-2054922799),r=v(r,t,o,e,n[a+8],6,1873313359),e=v(e,r,t,o,n[a+15],10,-30611744),o=v(o,e,r,t,n[a+6],15,-1560198380),t=v(t,o,e,r,n[a+13],21,1309151649),r=v(r,t,o,e,n[a+4],6,-145523070),e=v(e,r,t,o,n[a+11],10,-1120210379),o=v(o,e,r,t,n[a+2],15,718787259),t=v(t,o,e,r,n[a+9],21,-343485551),r=r+U>>>0,t=t+D>>>0,o=o+H>>>0,e=e+O>>>0}return s.endian([r,t,o,e])};i._ff=function(l,f,n,g,r,t,o){var e=l+(f&n|~f&g)+(r>>>0)+o;return(e<<t|e>>>32-t)+f},i._gg=function(l,f,n,g,r,t,o){var e=l+(f&g|n&~g)+(r>>>0)+o;return(e<<t|e>>>32-t)+f},i._hh=function(l,f,n,g,r,t,o){var e=l+(f^n^g)+(r>>>0)+o;return(e<<t|e>>>32-t)+f},i._ii=function(l,f,n,g,r,t,o){var e=l+(n^(f|~g))+(r>>>0)+o;return(e<<t|e>>>32-t)+f},i._blocksize=16,i._digestsize=16,N.exports=function(l,f){if(l==null)throw new Error("Illegal argument "+l);var n=s.wordsToBytes(i(l,f));return f&&f.asBytes?n:f&&f.asString?c.bytesToString(n):s.bytesToHex(n)}})();var kt=N.exports;const Ct=vt(kt),Ft={beforeCreate(){F.Api_is_login()&&this.$router.push("/center")},created(){this.username=localStorage.getItem("username")},data:()=>({show1:!0,show2:!1,username:"",password:"",rules:[s=>s?!0:"这里填写的应该是你的用户名，而不是你机器人的用户名"]}),methods:{gotonext(){this.username.length>1&&(this.show1=!1,this.show2=!0,localStorage.setItem("username",this.username))},clearout(){this.show2=!1,this.show1=!0,this.username="",localStorage.removeItem("username")},async login(){var s=await new G("/v1/user/auth/login").PostFormData({username:this.username,password:Ct(this.password)});s.isSuccess&&(F.Api_set_uidAndToken(s.data.uid,s.data.token),this.$router.push("/center"))}}},xt=E("h3",{class:"text-h6 mb-4"},"填写密码",-1),Tt=E("div",{class:"text-body-2"},null,-1);function _t(s,d,u,c,i,l){return T(),x(ht,{class:"align-self-center"},{default:w(()=>[s.show1?(T(),x(_,{key:0,class:"mx-auto","max-width":"200",height:"200",image:ft,title:"GobotQ",theme:"dark"})):it("",!0),S(y(A,{width:"100%",class:"mx-auto mt-6"},{default:w(()=>[y(mt,{onSubmit:d[1]||(d[1]=ct(()=>{},["prevent"]))},{default:w(()=>[y(P,{autofocus:"",modelValue:s.username,"onUpdate:modelValue":d[0]||(d[0]=f=>s.username=f),rules:s.rules,label:"这里输入你的用户名"},null,8,["modelValue","rules"]),y(k,{type:"submit",block:"",class:"mt-0",color:"blue",onClick:l.gotonext},{default:w(()=>[V("下一步")]),_:1},8,["onClick"]),y(k,{type:"submit",block:"",class:"mt-4",color:"grey",onClick:l.clearout},{default:w(()=>[V("清空数据")]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[B,s.show1]]),y(dt,null,{default:w(()=>[S(y(_,{class:"py-8 px-6 text-center mx-auto ma-4",elevation:"12","max-width":"100%",width:"100%"},{default:w(()=>[xt,Tt,y(A,{color:"surface"},{default:w(()=>[y(P,{modelValue:s.password,"onUpdate:modelValue":d[2]||(d[2]=f=>s.password=f),type:"password",label:"密码","max-width":"400"},null,8,["modelValue"])]),_:1}),y(k,{onClick:l.login,class:"my-4",color:"blue",height:"40",text:"验证并登录",variant:"flat",width:"70%"},null,8,["onClick"]),y(k,{onClick:l.clearout,class:"my-4",color:"grey",height:"40",text:"返回",variant:"flat",width:"70%"},null,8,["onClick"])]),_:1},512),[[B,s.show2]])]),_:1})]),_:1})}const Mt=lt(Ft,[["render",_t]]);export{Mt as default};
