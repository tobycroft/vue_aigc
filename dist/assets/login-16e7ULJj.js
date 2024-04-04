import{N as z}from"./Net-B_YcV3Pu.js";import{T as _}from"./TokenModel-epR9isAp.js";import{_ as P,c as T,y,o as B,V,C as R,D as C,E as S,v as w,F as W,G as x,z as k,H as E}from"./index-tXHzQweF.js";import{_ as L}from"./gobotq-3Wa2au3z.js";import{V as Q}from"./index-DEuDzdRh.js";import{V as Y}from"./VContainer-DGzf4P2T.js";import{V as Z}from"./VForm-B32ZiWR_.js";import{V as A}from"./VTextField-D-7IqcOT.js";import{V as I}from"./VSheet-B_yR5Yoz.js";function q(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var M={exports:{}},H={exports:{}};(function(){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h={rotl:function(s,f){return s<<f|s>>>32-f},rotr:function(s,f){return s<<32-f|s>>>f},endian:function(s){if(s.constructor==Number)return h.rotl(s,8)&16711935|h.rotl(s,24)&4278255360;for(var f=0;f<s.length;f++)s[f]=h.endian(s[f]);return s},randomBytes:function(s){for(var f=[];s>0;s--)f.push(Math.floor(Math.random()*256));return f},bytesToWords:function(s){for(var f=[],i=0,l=0;i<s.length;i++,l+=8)f[l>>>5]|=s[i]<<24-l%32;return f},wordsToBytes:function(s){for(var f=[],i=0;i<s.length*32;i+=8)f.push(s[i>>>5]>>>24-i%32&255);return f},bytesToHex:function(s){for(var f=[],i=0;i<s.length;i++)f.push((s[i]>>>4).toString(16)),f.push((s[i]&15).toString(16));return f.join("")},hexToBytes:function(s){for(var f=[],i=0;i<s.length;i+=2)f.push(parseInt(s.substr(i,2),16));return f},bytesToBase64:function(s){for(var f=[],i=0;i<s.length;i+=3)for(var l=s[i]<<16|s[i+1]<<8|s[i+2],c=0;c<4;c++)i*8+c*6<=s.length*8?f.push(u.charAt(l>>>6*(3-c)&63)):f.push("=");return f.join("")},base64ToBytes:function(s){s=s.replace(/[^A-Z0-9+\/]/ig,"");for(var f=[],i=0,l=0;i<s.length;l=++i%4)l!=0&&f.push((u.indexOf(s.charAt(i-1))&Math.pow(2,-2*l+8)-1)<<l*2|u.indexOf(s.charAt(i))>>>6-l*2);return f}};H.exports=h})();var J=H.exports,F={utf8:{stringToBytes:function(u){return F.bin.stringToBytes(unescape(encodeURIComponent(u)))},bytesToString:function(u){return decodeURIComponent(escape(F.bin.bytesToString(u)))}},bin:{stringToBytes:function(u){for(var h=[],s=0;s<u.length;s++)h.push(u.charCodeAt(s)&255);return h},bytesToString:function(u){for(var h=[],s=0;s<u.length;s++)h.push(String.fromCharCode(u[s]));return h.join("")}}},N=F;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var K=function(u){return u!=null&&(U(u)||X(u)||!!u._isBuffer)};function U(u){return!!u.constructor&&typeof u.constructor.isBuffer=="function"&&u.constructor.isBuffer(u)}function X(u){return typeof u.readFloatLE=="function"&&typeof u.slice=="function"&&U(u.slice(0,0))}(function(){var u=J,h=N.utf8,s=K,f=N.bin,i=function(l,c){l.constructor==String?c&&c.encoding==="binary"?l=f.stringToBytes(l):l=h.stringToBytes(l):s(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var n=u.bytesToWords(l),v=l.length*8,e=1732584193,r=-271733879,o=-1732584194,t=271733878,a=0;a<n.length;a++)n[a]=(n[a]<<8|n[a]>>>24)&16711935|(n[a]<<24|n[a]>>>8)&4278255360;n[v>>>5]|=128<<v%32,n[(v+64>>>9<<4)+14]=v;for(var d=i._ff,p=i._gg,m=i._hh,g=i._ii,a=0;a<n.length;a+=16){var D=e,G=r,O=o,$=t;e=d(e,r,o,t,n[a+0],7,-680876936),t=d(t,e,r,o,n[a+1],12,-389564586),o=d(o,t,e,r,n[a+2],17,606105819),r=d(r,o,t,e,n[a+3],22,-1044525330),e=d(e,r,o,t,n[a+4],7,-176418897),t=d(t,e,r,o,n[a+5],12,1200080426),o=d(o,t,e,r,n[a+6],17,-1473231341),r=d(r,o,t,e,n[a+7],22,-45705983),e=d(e,r,o,t,n[a+8],7,1770035416),t=d(t,e,r,o,n[a+9],12,-1958414417),o=d(o,t,e,r,n[a+10],17,-42063),r=d(r,o,t,e,n[a+11],22,-1990404162),e=d(e,r,o,t,n[a+12],7,1804603682),t=d(t,e,r,o,n[a+13],12,-40341101),o=d(o,t,e,r,n[a+14],17,-1502002290),r=d(r,o,t,e,n[a+15],22,1236535329),e=p(e,r,o,t,n[a+1],5,-165796510),t=p(t,e,r,o,n[a+6],9,-1069501632),o=p(o,t,e,r,n[a+11],14,643717713),r=p(r,o,t,e,n[a+0],20,-373897302),e=p(e,r,o,t,n[a+5],5,-701558691),t=p(t,e,r,o,n[a+10],9,38016083),o=p(o,t,e,r,n[a+15],14,-660478335),r=p(r,o,t,e,n[a+4],20,-405537848),e=p(e,r,o,t,n[a+9],5,568446438),t=p(t,e,r,o,n[a+14],9,-1019803690),o=p(o,t,e,r,n[a+3],14,-187363961),r=p(r,o,t,e,n[a+8],20,1163531501),e=p(e,r,o,t,n[a+13],5,-1444681467),t=p(t,e,r,o,n[a+2],9,-51403784),o=p(o,t,e,r,n[a+7],14,1735328473),r=p(r,o,t,e,n[a+12],20,-1926607734),e=m(e,r,o,t,n[a+5],4,-378558),t=m(t,e,r,o,n[a+8],11,-2022574463),o=m(o,t,e,r,n[a+11],16,1839030562),r=m(r,o,t,e,n[a+14],23,-35309556),e=m(e,r,o,t,n[a+1],4,-1530992060),t=m(t,e,r,o,n[a+4],11,1272893353),o=m(o,t,e,r,n[a+7],16,-155497632),r=m(r,o,t,e,n[a+10],23,-1094730640),e=m(e,r,o,t,n[a+13],4,681279174),t=m(t,e,r,o,n[a+0],11,-358537222),o=m(o,t,e,r,n[a+3],16,-722521979),r=m(r,o,t,e,n[a+6],23,76029189),e=m(e,r,o,t,n[a+9],4,-640364487),t=m(t,e,r,o,n[a+12],11,-421815835),o=m(o,t,e,r,n[a+15],16,530742520),r=m(r,o,t,e,n[a+2],23,-995338651),e=g(e,r,o,t,n[a+0],6,-198630844),t=g(t,e,r,o,n[a+7],10,1126891415),o=g(o,t,e,r,n[a+14],15,-1416354905),r=g(r,o,t,e,n[a+5],21,-57434055),e=g(e,r,o,t,n[a+12],6,1700485571),t=g(t,e,r,o,n[a+3],10,-1894986606),o=g(o,t,e,r,n[a+10],15,-1051523),r=g(r,o,t,e,n[a+1],21,-2054922799),e=g(e,r,o,t,n[a+8],6,1873313359),t=g(t,e,r,o,n[a+15],10,-30611744),o=g(o,t,e,r,n[a+6],15,-1560198380),r=g(r,o,t,e,n[a+13],21,1309151649),e=g(e,r,o,t,n[a+4],6,-145523070),t=g(t,e,r,o,n[a+11],10,-1120210379),o=g(o,t,e,r,n[a+2],15,718787259),r=g(r,o,t,e,n[a+9],21,-343485551),e=e+D>>>0,r=r+G>>>0,o=o+O>>>0,t=t+$>>>0}return u.endian([e,r,o,t])};i._ff=function(l,c,n,v,e,r,o){var t=l+(c&n|~c&v)+(e>>>0)+o;return(t<<r|t>>>32-r)+c},i._gg=function(l,c,n,v,e,r,o){var t=l+(c&v|n&~v)+(e>>>0)+o;return(t<<r|t>>>32-r)+c},i._hh=function(l,c,n,v,e,r,o){var t=l+(c^n^v)+(e>>>0)+o;return(t<<r|t>>>32-r)+c},i._ii=function(l,c,n,v,e,r,o){var t=l+(n^(c|~v))+(e>>>0)+o;return(t<<r|t>>>32-r)+c},i._blocksize=16,i._digestsize=16,M.exports=function(l,c){if(l==null)throw new Error("Illegal argument "+l);var n=u.wordsToBytes(i(l,c));return c&&c.asBytes?n:c&&c.asString?f.bytesToString(n):u.bytesToHex(n)}})();var b=M.exports;const j=q(b),rr={beforeCreate(){_.Api_is_login()&&this.$router.push("/index")},created(){this.username=localStorage.getItem("username")},data:()=>({show1:!0,show2:!1,username:"",password:"",rules:[u=>u?!0:"这里填写的应该是你的用户名，而不是你机器人的用户名"]}),methods:{gotonext(){this.username.length>1&&(this.show1=!1,this.show2=!0,localStorage.setItem("username",this.username))},clearout(){this.show2=!1,this.show1=!0,this.username="",localStorage.removeItem("username"),this.$router.push("/user/register")},async login(){var u=await new z("/v1/user/auth/login").PostFormData({username:this.username,password:j(this.password)});u.isSuccess&&(_.Api_set_uidAndToken(u.data.uid,u.data.token),this.$router.push("/index"))}}},tr=E("h3",{class:"text-h6 mb-4"},"填写密码",-1),er=E("div",{class:"text-body-2"},null,-1);function or(u,h,s,f,i,l){return B(),T(Y,{class:"align-self-center"},{default:y(()=>[u.show1?(B(),T(V,{key:0,class:"mx-auto","max-width":"200",height:"200",image:L,title:"GobotQ",theme:"dark"})):R("",!0),C(w(I,{width:"100%",class:"mx-auto mt-6"},{default:y(()=>[w(Z,{onSubmit:h[1]||(h[1]=W(()=>{},["prevent"]))},{default:y(()=>[w(A,{autofocus:"",modelValue:u.username,"onUpdate:modelValue":h[0]||(h[0]=c=>u.username=c),rules:u.rules,label:"这里输入你的用户名"},null,8,["modelValue","rules"]),w(x,{type:"submit",block:"",class:"mt-0",color:"blue",onClick:l.gotonext},{default:y(()=>[k("下一步")]),_:1},8,["onClick"]),w(x,{block:"",class:"mt-4",color:"red",onClick:l.clearout},{default:y(()=>[k("清空数据,并开始注册")]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[S,u.show1]]),w(Q,null,{default:y(()=>[C(w(V,{class:"py-8 px-6 text-center mx-auto ma-4",elevation:"12","max-width":"100%",width:"100%"},{default:y(()=>[tr,er,w(I,{color:"surface"},{default:y(()=>[w(A,{modelValue:u.password,"onUpdate:modelValue":h[2]||(h[2]=c=>u.password=c),type:"password",label:"密码","max-width":"400"},null,8,["modelValue"])]),_:1}),w(x,{onClick:l.login,class:"my-4",color:"blue",height:"40",text:"验证并登录",variant:"flat",width:"70%"},null,8,["onClick"]),w(x,{onClick:l.clearout,class:"my-4",color:"grey",height:"40",text:"返回",variant:"flat",width:"70%"},null,8,["onClick"])]),_:1},512),[[S,u.show2]])]),_:1})]),_:1})}const dr=P(rr,[["render",or]]);export{dr as default};
