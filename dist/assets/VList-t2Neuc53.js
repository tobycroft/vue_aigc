import{p as B,m as j,k as te,l as _,n as ae,a2 as he,O as b,a as v,h as oe,t as G,v as d,i as $,s as T,f as E,bf as I,b as w,a9 as q,bg as Se,g as Ye,aL as Ze,bh as qe,ag as M,w as U,aJ as Q,bi as Qe,Y as be,Z as Xe,x as Ce,aC as ce,H as pe,a8 as ke,I as we,J as Ie,M as Ae,aU as et,ai as Ve,aN as tt,aY as at,ap as nt,P as Pe,aV as lt,aa as Le,Q as Be,R as Oe,U as xe,bj as it,aP as st,aZ as rt,a3 as de,a_ as ve,F as fe,a4 as ye,au as ut,aD as V,a0 as Me,N as ot,ab as ct,b7 as dt}from"./index-RAoTM10d.js";import{a as vt}from"./index-CC8CDgwQ.js";import{u as ft}from"./ssrBoot-BwWCRUVP.js";const yt=B({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...j(),...te()},"VDivider"),mt=_()({name:"VDivider",props:yt(),setup(e,i){let{attrs:t}=i;const{themeClasses:a}=ae(e),{textColorClasses:l,textColorStyles:n}=he(b(e,"color")),s=v(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=oe(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=oe(e.thickness)),r});return G(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,l.value,e.class],style:[s.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),X=Symbol.for("vuetify:list");function _e(){const e=$(X,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return E(X,i),e}function Fe(){return $(X,null)}const ne=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=I(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;for(const s of t||[])n=i.activate({id:s,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},Te=e=>{const i=ne(e);return{activate:a=>{let{activated:l,id:n,...s}=a;n=I(n);const r=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:r})},in:(a,l,n)=>{let s=new Set;return a!=null&&a.length&&(s=i.in(a.slice(0,1),l,n)),s},out:(a,l,n)=>i.out(a,l,n)}},gt=e=>{const i=ne(e);return{activate:a=>{let{id:l,activated:n,children:s,...r}=a;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...r})},in:i.in,out:i.out}},ht=e=>{const i=Te(e);return{activate:a=>{let{id:l,activated:n,children:s,...r}=a;return l=I(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...r})},in:i.in,out:i.out}},St={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return a.delete(i),a},select:()=>null},De={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},bt={open:De.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},le=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=I(a),e&&!l){const s=Array.from(n.entries()).reduce((r,C)=>{let[y,m]=C;return m==="on"&&r.push(y),r},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},je=e=>{const i=le(e);return{select:a=>{let{selected:l,id:n,...s}=a;n=I(n);const r=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:r})},in:(a,l,n)=>{let s=new Map;return a!=null&&a.length&&(s=i.in(a.slice(0,1),l,n)),s},out:(a,l,n)=>i.out(a,l,n)}},Ct=e=>{const i=le(e);return{select:a=>{let{id:l,selected:n,children:s,...r}=a;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...r})},in:i.in,out:i.out}},pt=e=>{const i=je(e);return{select:a=>{let{id:l,selected:n,children:s,...r}=a;return l=I(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...r})},in:i.in,out:i.out}},kt=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:s,parents:r}=t;a=I(a);const C=new Map(n),y=[a];for(;y.length;){const h=y.shift();n.set(h,l?"on":"off"),s.has(h)&&y.push(...s.get(h))}let m=r.get(a);for(;m;){const h=s.get(m),S=h.every(o=>n.get(o)==="on"),u=h.every(o=>!n.has(o)||n.get(o)==="off");n.set(m,S?"on":u?"off":"indeterminate"),m=r.get(m)}return e&&!l&&Array.from(n.entries()).reduce((S,u)=>{let[o,c]=u;return c==="on"&&S.push(o),S},[]).length===0?C:n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&l.push(n);return l}};return i},D=Symbol.for("vuetify:nested"),Ge={id:T(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},wt=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),It=e=>{let i=!1;const t=w(new Map),a=w(new Map),l=q(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return gt(e.mandatory);case"single-leaf":return ht(e.mandatory);case"independent":return ne(e.mandatory);case"single-independent":default:return Te(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return pt(e.mandatory);case"leaf":return Ct(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":return je(e.mandatory);case"classic":default:return kt(e.mandatory)}}),r=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return bt;case"single":return St;case"multiple":default:return De}}),C=q(e,"activated",e.activated,u=>n.value.in(u,t.value,a.value),u=>n.value.out(u,t.value,a.value)),y=q(e,"selected",e.selected,u=>s.value.in(u,t.value,a.value),u=>s.value.out(u,t.value,a.value));Se(()=>{i=!0});function m(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=a.value.get(c);return o}const h=Ye("nested"),S={id:T(),root:{opened:l,activatable:b(e,"activatable"),selectable:b(e,"selectable"),activated:C,selected:y,selectedValues:v(()=>{const u=[];for(const[o,c]of y.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&a.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(i)return;t.value.delete(u);const o=a.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(f=>f!==u))}a.value.delete(u),l.value.delete(u)},open:(u,o,c)=>{h.emit("click:open",{id:u,value:o,path:m(u),event:c});const f=r.value.open({id:u,value:o,opened:new Set(l.value),children:t.value,parents:a.value,event:c});f&&(l.value=f)},openOnSelect:(u,o,c)=>{const f=r.value.select({id:u,value:o,selected:new Map(y.value),opened:new Set(l.value),children:t.value,parents:a.value,event:c});f&&(l.value=f)},select:(u,o,c)=>{h.emit("click:select",{id:u,value:o,path:m(u),event:c});const f=s.value.select({id:u,value:o,selected:new Map(y.value),children:t.value,parents:a.value,event:c});f&&(y.value=f),S.root.openOnSelect(u,o,c)},activate:(u,o,c)=>{if(!e.activatable)return S.root.select(u,!0,c);h.emit("click:activate",{id:u,value:o,path:m(u),event:c});const f=n.value.activate({id:u,value:o,activated:new Set(C.value),children:t.value,parents:a.value,event:c});f&&(C.value=f)},children:t,parents:a}};return E(D,S),S.root},Ne=(e,i)=>{const t=$(D,Ge),a=Symbol(Ze()),l=v(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(s,r)=>t.root.open(l.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(l.value,s,r),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(s,r)=>t.root.activate(l.value,s,r),isActivated:v(()=>t.root.activated.value.has(I(l.value))),select:(s,r)=>t.root.select(l.value,s,r),isSelected:v(()=>t.root.selected.value.get(I(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Se(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&E(D,n),n},At=()=>{const e=$(D,Ge);E(D,{...e,isGroupActivator:!0})},Vt=qe({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return At(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Pt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...j(),...U()},"VListGroup"),me=_()({name:"VListGroup",props:Pt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=Ne(b(e,"value"),!0),s=v(()=>`v-list-group--id-${String(n.value)}`),r=Fe(),{isBooted:C}=ft();function y(u){l(!a.value,u)}const m=v(()=>({onClick:y,class:"v-list-group__header",id:s.value})),h=v(()=>a.value?e.collapseIcon:e.expandIcon),S=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return G(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&d(Q,{defaults:S.value},{default:()=>[d(Vt,null,{default:()=>[t.activator({props:m.value,isOpen:a.value})]})]}),d(Qe,{transition:{component:vt},disabled:!C.value},{default:()=>{var u;return[be(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=t.default)==null?void 0:u.call(t)]),[[Xe,a.value]])]}})]})),{isOpen:a}}}),Lt=Ce("v-list-item-subtitle"),Bt=Ce("v-list-item-title"),Ot=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ce(),onClickOnce:ce(),...pe(),...j(),...ke(),...we(),...Ie(),...Ae(),...et(),...U(),...te(),...Ve({variant:"text"})},"VListItem"),ge=_()({name:"VListItem",directives:{Ripple:tt},props:Ot(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=at(e,t),s=v(()=>e.value===void 0?n.href.value:e.value),{activate:r,isActivated:C,select:y,isSelected:m,isIndeterminate:h,isGroupActivator:S,root:u,parent:o,openOnSelect:c}=Ne(s,!1),f=Fe(),P=v(()=>{var g;return e.active!==!1&&(e.active||((g=n.isActive)==null?void 0:g.value)||(u.activatable.value?C.value:m.value))}),F=v(()=>e.link!==!1&&n.isLink.value),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!f&&(u.selectable.value||u.activatable.value||e.value!=null))),O=v(()=>e.rounded||e.nav),x=v(()=>e.color??e.activeColor),H=v(()=>({color:P.value?x.value??e.baseColor:e.baseColor,variant:e.variant}));nt(()=>{var g;return(g=n.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&u.open(o.value,!0),g&&c(g)},{immediate:!0});const{themeClasses:K}=ae(e),{borderClasses:W}=Pe(e),{colorClasses:z,colorStyles:J,variantClasses:L}=lt(H),{densityClasses:p}=Le(e),{dimensionStyles:N}=Be(e),{elevationClasses:Ue}=Oe(e),{roundedClasses:He}=xe(O),Ke=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=v(()=>({isActive:P.value,select:y,isSelected:m.value,isIndeterminate:h.value}));function ie(g){var R;l("click",g),!(S||!A.value)&&((R=n.navigate)==null||R.call(n,g),u.activatable.value?r(!C.value,g):(u.selectable.value||e.value!=null)&&y(!m.value,g))}function We(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),ie(g))}return G(()=>{const g=F.value?"a":e.tag,R=a.title||e.title!=null,ze=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Je=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Z=!!(re||a.prepend);return f==null||f.updateHasPrepend(Z),e.activeColor&&it("active-color",["color","base-color"]),be(d(g,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},K.value,W.value,z.value,p.value,Ue.value,Ke.value,He.value,L.value,e.class],style:[J.value,N.value,e.style],href:n.href.value,tabindex:A.value?f?-2:0:void 0,onClick:ie,onKeydown:A.value&&!F.value&&We},{default:()=>{var ue;return[rt(A.value||P.value,"v-list-item"),Z&&d("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?d(Q,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=a.prepend)==null?void 0:k.call(a,Y.value)]}}):d(de,null,[e.prependAvatar&&d(ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[R&&d(Bt,{key:"title"},{default:()=>{var k;return[((k=a.title)==null?void 0:k.call(a,{title:e.title}))??e.title]}}),ze&&d(Lt,{key:"subtitle"},{default:()=>{var k;return[((k=a.subtitle)==null?void 0:k.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,Y.value)]),Je&&d("div",{key:"append",class:"v-list-item__append"},[a.append?d(Q,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=a.append)==null?void 0:k.call(a,Y.value)]}}):d(de,null,[e.appendIcon&&d(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[st("ripple"),A.value&&e.ripple]])}),{isGroupActivator:S,isSelected:m,list:f,select:y}}}),xt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...j(),...U()},"VListSubheader"),Mt=_()({name:"VListSubheader",props:xt(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=he(b(e,"color"));return G(()=>{const n=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&d("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),_t=B({items:Array,returnObject:Boolean},"VListChildren"),Re=_()({name:"VListChildren",props:_t(),setup(e,i){let{slots:t}=i;return _e(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var S,u;let{children:s,props:r,type:C,raw:y}=n;if(C==="divider")return((S=t.divider)==null?void 0:S.call(t,{props:r}))??d(mt,r,null);if(C==="subheader")return((u=t.subheader)==null?void 0:u.call(t,{props:r}))??d(Mt,r,null);const m={subtitle:t.subtitle?o=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...o,item:y})}:void 0,prepend:t.prepend?o=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...o,item:y})}:void 0,append:t.append?o=>{var c;return(c=t.append)==null?void 0:c.call(t,{...o,item:y})}:void 0,title:t.title?o=>{var c;return(c=t.title)==null?void 0:c.call(t,{...o,item:y})}:void 0},h=me.filterProps(r);return s?d(me,ye({value:r==null?void 0:r.value},h),{activator:o=>{let{props:c}=o;const f={...r,...c,value:e.returnObject?y:r.value};return t.header?t.header({props:f}):d(ge,f,m)},default:()=>d(Re,{items:s},t)}):t.item?t.item({props:r}):d(ge,ye(r,{value:e.returnObject?y:r.value}),m)}))}}}),Ft=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ut}},"list-items");function ee(e,i){const t=V(i,e.itemTitle,i),a=V(i,e.itemValue,t),l=V(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Me(i,["children"]):i:void 0:V(i,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?$e(e,l):void 0,raw:i}}function $e(e,i){const t=[];for(const a of i)t.push(ee(e,a));return t}function Et(e){const i=v(()=>$e(e,e.items)),t=v(()=>i.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?ee(e,s):i.value.find(r=>e.valueComparator(s,r.value))||ee(e,s))}function l(n){return e.returnObject?n.map(s=>{let{raw:r}=s;return r}):n.map(s=>{let{value:r}=s;return r})}return{items:i,transformIn:a,transformOut:l}}function Tt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Dt(e,i){const t=V(i,e.itemType,"item"),a=Tt(i)?i:V(i,e.itemTitle),l=V(i,e.itemValue,void 0),n=V(i,e.itemChildren),s=e.itemProps===!0?Me(i,["children"]):V(i,e.itemProps),r={title:a,value:l,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&n?Ee(e,n):void 0,raw:i}}function Ee(e,i){const t=[];for(const a of i)t.push(Dt(e,a));return t}function jt(e){return{items:v(()=>Ee(e,e.items))}}const Gt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...wt({selectStrategy:"single-leaf",openStrategy:"list"}),...pe(),...j(),...ke(),...we(),...Ie(),itemType:{type:String,default:"type"},...Ft(),...Ae(),...U(),...te(),...Ve({variant:"text"})},"VList"),Ut=_()({name:"VList",props:Gt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=jt(e),{themeClasses:l}=ae(e),{backgroundColorClasses:n,backgroundColorStyles:s}=ot(b(e,"bgColor")),{borderClasses:r}=Pe(e),{densityClasses:C}=Le(e),{dimensionStyles:y}=Be(e),{elevationClasses:m}=Oe(e),{roundedClasses:h}=xe(e),{children:S,open:u,parents:o,select:c}=It(e),f=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),P=b(e,"activeColor"),F=b(e,"baseColor"),A=b(e,"color");_e(),ct({VListGroup:{activeColor:P,baseColor:F,color:A,expandIcon:b(e,"expandIcon"),collapseIcon:b(e,"collapseIcon")},VListItem:{activeClass:b(e,"activeClass"),activeColor:P,baseColor:F,color:A,density:b(e,"density"),disabled:b(e,"disabled"),lines:b(e,"lines"),nav:b(e,"nav"),slim:b(e,"slim"),variant:b(e,"variant")}});const O=T(!1),x=w();function H(p){O.value=!0}function K(p){O.value=!1}function W(p){var N;!O.value&&!(p.relatedTarget&&((N=x.value)!=null&&N.contains(p.relatedTarget)))&&L()}function z(p){if(x.value){if(p.key==="ArrowDown")L("next");else if(p.key==="ArrowUp")L("prev");else if(p.key==="Home")L("first");else if(p.key==="End")L("last");else return;p.preventDefault()}}function J(p){O.value=!0}function L(p){if(x.value)return dt(x.value,p)}return G(()=>d(e.tag,{ref:x,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,r.value,C.value,m.value,f.value,h.value,e.class],style:[s.value,y.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:K,onFocus:W,onKeydown:z,onMousedown:J},{default:()=>[d(Re,{items:a.value,returnObject:e.returnObject},t)]})),{open:u,select:c,focus:L,children:S,parents:o}}});export{mt as V,Ut as a,ge as b,Bt as c,Lt as d,Ft as m,Et as u};