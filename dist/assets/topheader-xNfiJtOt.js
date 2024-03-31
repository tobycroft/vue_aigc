import{_ as E}from"./gobotq-3Wa2au3z.js";import{p as V,m as C,w as B,l as P,t as N,v as a,H as M,J as z,M as F,k as L,N as U,O as q,P as A,R as G,U as J,n as O,q as W,s as j,a as _,ae as K,D as S,aL as g,h as d,_ as Q,o as X,c as Y,y as n,F as Z,z as u,aM as p,E as f}from"./index-BXizccnP.js";import{a as ee}from"./index-tO_TGmqs.js";const te=V({text:String,...C(),...B()},"VToolbarTitle"),R=P()({name:"VToolbarTitle",props:te(),setup(e,l){let{slots:t}=l;return N(()=>{const r=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[r&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),ae=[null,"prominent","default","comfortable","compact"],le=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ae.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...M(),...C(),...z(),...F(),...B({tag:"header"}),...L()},"VToolbar"),oe=P()({name:"VToolbar",props:le(),setup(e,l){var b;let{slots:t}=l;const{backgroundColorClasses:r,backgroundColorStyles:s}=U(q(e,"color")),{borderClasses:o}=A(e),{elevationClasses:i}=G(e),{roundedClasses:I}=J(e),{themeClasses:D}=O(e),{rtlClasses:H}=W(),c=j(!!(e.extended||(b=t.extension)!=null&&b.call(t))),v=_(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=_(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return K({VBtn:{variant:"text"}}),N(()=>{var T;const $=!!(e.title||t.title),w=!!(t.image||e.image),x=(T=t.extension)==null?void 0:T.call(t);return c.value=!!(e.extended||x),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,o.value,i.value,I.value,D.value,H.value,e.class],style:[s.value,e.style]},{default:()=>[w&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(S,{key:"image-img",cover:!0,src:e.image},null)]),a(g,{defaults:{VTabs:{height:d(v.value)}}},{default:()=>{var h,y,k;return[a("div",{class:"v-toolbar__content",style:{height:d(v.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(h=t.prepend)==null?void 0:h.call(t)]),$&&a(R,{key:"title",text:e.title},{text:t.title}),(y=t.default)==null?void 0:y.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),a(g,{defaults:{VTabs:{height:d(m.value)}}},{default:()=>[a(ee,null,{default:()=>[c.value&&a("div",{class:"v-toolbar__extension",style:{height:d(m.value)}},[x])]})]})]})}),{contentHeight:v,extensionHeight:m}}}),ne={methods:{navigateTo(e){this.$router.push(e)},toggleDrawer(){}}};function se(e,l,t,r,s,o){return X(),Y(oe,{app:"",color:"#222222"},{default:n(()=>[a(Z,{size:"60px",onClick:l[0]||(l[0]=i=>o.navigateTo("/center"))},{default:n(()=>[a(S,{src:E})]),_:1}),a(R,null,{default:n(()=>[u("AIGC-Web")]),_:1}),a(p),a(f,{onClick:l[1]||(l[1]=i=>o.navigateTo("/v1/vrm"))},{default:n(()=>[u("VRM体验")]),_:1}),a(f,{onClick:l[2]||(l[2]=i=>o.navigateTo("/v1/live2d"))},{default:n(()=>[u("Live2D")]),_:1}),a(f,{onClick:l[3]||(l[3]=i=>o.navigateTo("/v1/user"))},{default:n(()=>[u("我的")]),_:1})]),_:1})}const ue=Q(ne,[["render",se]]);export{ue as T};
