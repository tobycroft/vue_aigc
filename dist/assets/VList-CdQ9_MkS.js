import{s as R,e as X,a as b,b6 as z,b7 as Y,p as V,aq as L,m as x,w as A,l as B,P as u,t as F,v as c,al as Z,b8 as ee,D as te,E as ae,a6 as ne,a7 as j,ar as se,b9 as y,a4 as E,I as le,ab as ie,J as oe,K as re,N as ue,k as ce,aB as de,n as ve,O as fe,Q as me,ad as ye,R as be,S as ge,W as Ce,ae as he,b as pe,aX as Ie}from"./index-0QX2Zep0.js";import{a as Se}from"./index-e2v-vZhp.js";import{u as Pe,d as Ve,e as ke,f as $,b as Le,c as G,m as Be,g as we}from"./VDivider-o8NvbJw8.js";function xe(){const e=R(!1);return X(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:b(()=>e.value?void 0:{transition:"none !important"}),isBooted:z(e)}}const Ae=Y({name:"VListGroupActivator",setup(e,a){let{slots:t}=a;return Pe(),()=>{var s;return(s=t.default)==null?void 0:s.call(t)}}}),Fe=V({activeColor:String,baseColor:String,color:String,collapseIcon:{type:L,default:"$collapse"},expandIcon:{type:L,default:"$expand"},prependIcon:L,appendIcon:L,fluid:Boolean,subgroup:Boolean,title:String,value:null,...x(),...A()},"VListGroup"),N=B()({name:"VListGroup",props:Fe(),setup(e,a){let{slots:t}=a;const{isOpen:s,open:o,id:i}=Ve(u(e,"value"),!0),l=b(()=>`v-list-group--id-${String(i.value)}`),n=ke(),{isBooted:g}=xe();function f(m){o(!s.value,m)}const C=b(()=>({onClick:f,class:"v-list-group__header",id:l.value})),h=b(()=>s.value?e.collapseIcon:e.expandIcon),p=b(()=>({VListItem:{active:s.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return F(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":n==null?void 0:n.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":s.value},e.class],style:e.style},{default:()=>[t.activator&&c(Z,{defaults:p.value},{default:()=>[c(Ae,null,{default:()=>[t.activator({props:C.value,isOpen:s.value})]})]}),c(ee,{transition:{component:Se},disabled:!g.value},{default:()=>{var m;return[te(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":l.value},[(m=t.default)==null?void 0:m.call(t)]),[[ae,s.value]])]}})]})),{isOpen:s}}}),Te=V({color:String,inset:Boolean,sticky:Boolean,title:String,...x(),...A()},"VListSubheader"),De=B()({name:"VListSubheader",props:Te(),setup(e,a){let{slots:t}=a;const{textColorClasses:s,textColorStyles:o}=ne(u(e,"color"));return F(()=>{const i=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},s.value,e.class],style:[{textColorStyles:o},e.style]},{default:()=>{var l;return[i&&c("div",{class:"v-list-subheader__text"},[((l=t.default)==null?void 0:l.call(t))??e.title])]}})}),{}}}),Oe=V({items:Array,returnObject:Boolean},"VListChildren"),M=B()({name:"VListChildren",props:Oe(),setup(e,a){let{slots:t}=a;return $(),()=>{var s,o;return((s=t.default)==null?void 0:s.call(t))??((o=e.items)==null?void 0:o.map(i=>{var p,m;let{children:l,props:n,type:g,raw:f}=i;if(g==="divider")return((p=t.divider)==null?void 0:p.call(t,{props:n}))??c(Le,n,null);if(g==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:n}))??c(De,n,null);const C={subtitle:t.subtitle?v=>{var r;return(r=t.subtitle)==null?void 0:r.call(t,{...v,item:f})}:void 0,prepend:t.prepend?v=>{var r;return(r=t.prepend)==null?void 0:r.call(t,{...v,item:f})}:void 0,append:t.append?v=>{var r;return(r=t.append)==null?void 0:r.call(t,{...v,item:f})}:void 0,title:t.title?v=>{var r;return(r=t.title)==null?void 0:r.call(t,{...v,item:f})}:void 0},h=N.filterProps(n);return l?c(N,j({value:n==null?void 0:n.value},h),{activator:v=>{let{props:r}=v;const k={...n,...r,value:e.returnObject?f:n.value};return t.header?t.header({props:k}):c(G,k,C)},default:()=>c(M,{items:l},t)}):t.item?t.item({props:n}):c(G,j(n,{value:e.returnObject?f:n.value}),C)}))}}}),_e=V({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:se}},"list-items");function w(e,a){const t=y(a,e.itemTitle,a),s=y(a,e.itemValue,t),o=y(a,e.itemChildren),i=e.itemProps===!0?typeof a=="object"&&a!=null&&!Array.isArray(a)?"children"in a?E(a,["children"]):a:void 0:y(a,e.itemProps),l={title:t,value:s,...i};return{title:String(l.title??""),value:l.value,props:l,children:Array.isArray(o)?q(e,o):void 0,raw:a}}function q(e,a){const t=[];for(const s of a)t.push(w(e,s));return t}function qe(e){const a=b(()=>q(e,e.items)),t=b(()=>a.value.some(i=>i.value===null));function s(i){return t.value||(i=i.filter(l=>l!==null)),i.map(l=>e.returnObject&&typeof l=="string"?w(e,l):a.value.find(n=>e.valueComparator(l,n.value))||w(e,l))}function o(i){return e.returnObject?i.map(l=>{let{raw:n}=l;return n}):i.map(l=>{let{value:n}=l;return n})}return{items:a,transformIn:s,transformOut:o}}function je(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ge(e,a){const t=y(a,e.itemType,"item"),s=je(a)?a:y(a,e.itemTitle),o=y(a,e.itemValue,void 0),i=y(a,e.itemChildren),l=e.itemProps===!0?E(a,["children"]):y(a,e.itemProps),n={title:s,value:o,...l};return{type:t,title:n.title,value:n.value,props:n,children:t==="item"&&i?K(e,i):void 0,raw:a}}function K(e,a){const t=[];for(const s of a)t.push(Ge(e,s));return t}function Ne(e){return{items:b(()=>K(e,e.items))}}const Re=V({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Be({selectStrategy:"single-leaf",openStrategy:"list"}),...le(),...x(),...ie(),...oe(),...re(),itemType:{type:String,default:"type"},..._e(),...ue(),...A(),...ce(),...de({variant:"text"})},"VList"),Ke=B()({name:"VList",props:Re(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:t}=a;const{items:s}=Ne(e),{themeClasses:o}=ve(e),{backgroundColorClasses:i,backgroundColorStyles:l}=fe(u(e,"bgColor")),{borderClasses:n}=me(e),{densityClasses:g}=ye(e),{dimensionStyles:f}=be(e),{elevationClasses:C}=ge(e),{roundedClasses:h}=Ce(e),{children:p,open:m,parents:v,select:r}=we(e),k=b(()=>e.lines?`v-list--${e.lines}-line`:void 0),T=u(e,"activeColor"),D=u(e,"baseColor"),O=u(e,"color");$(),he({VListGroup:{activeColor:T,baseColor:D,color:O,expandIcon:u(e,"expandIcon"),collapseIcon:u(e,"collapseIcon")},VListItem:{activeClass:u(e,"activeClass"),activeColor:T,baseColor:D,color:O,density:u(e,"density"),disabled:u(e,"disabled"),lines:u(e,"lines"),nav:u(e,"nav"),slim:u(e,"slim"),variant:u(e,"variant")}});const S=R(!1),P=pe();function W(d){S.value=!0}function H(d){S.value=!1}function J(d){var _;!S.value&&!(d.relatedTarget&&((_=P.value)!=null&&_.contains(d.relatedTarget)))&&I()}function Q(d){if(P.value){if(d.key==="ArrowDown")I("next");else if(d.key==="ArrowUp")I("prev");else if(d.key==="Home")I("first");else if(d.key==="End")I("last");else return;d.preventDefault()}}function U(d){S.value=!0}function I(d){if(P.value)return Ie(P.value,d)}return F(()=>c(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},o.value,i.value,n.value,g.value,C.value,k.value,h.value,e.class],style:[l.value,f.value,e.style],tabindex:e.disabled||S.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:W,onFocusout:H,onFocus:J,onKeydown:Q,onMousedown:U},{default:()=>[c(M,{items:s.value,returnObject:e.returnObject},t)]})),{open:m,select:r,focus:I,children:p,parents:v}}});export{Ke as V,qe as a,_e as m,xe as u};