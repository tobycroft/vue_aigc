import{a as rt,m as dt,u as vt,V as we}from"./VTextField-BM8xKAOn.js";import{aM as ft,p as E,al as R,m as ee,w as ne,l as M,J as C,a as y,t as j,v as o,aL as Z,aN as mt,S as ce,T as Oe,a7 as _e,a8 as L,az as ge,aH as N,a5 as oe,C as Ge,ac as he,D as yt,E as Re,H as Me,k as ve,an as Ce,n as Ve,I as $e,K as Ke,ae as ke,L as bt,M as Ue,P as Ne,af as Se,s as ae,b as J,aO as fe,ad as z,aP as pe,f as je,aQ as gt,aR as He,aS as ht,aT as ze,Z as le,ai as Q,i as qe,aA as se,aU as me,as as Ie,aV as Ct,aW as Vt,aG as Ae,aX as kt,aY as St,am as pt,ao as We,aZ as It,a_ as Pt,a$ as xt,b0 as wt,b1 as At,b2 as ye,b3 as Bt,b4 as Xe,b5 as Lt,b6 as Be,b7 as Tt,au as re,b8 as Le,a9 as Ye,b9 as Dt,ba as Te,bb as Ft,bc as Et,z as Ot,bd as _t}from"./index-ITG_jfB4.js";import{a as Gt,b as Rt}from"./index-DGcxMcjx.js";import{u as Mt,e as $t,f as Kt,g as Ze,V as Ut,a as de,m as Nt,h as jt,d as Ht}from"./VVirtualScroll-DJ7w8xEE.js";import{u as zt}from"./ssrBoot-nrM6vRjn.js";import{m as qt,V as De}from"./VSlideGroup-Ch7b0JRt.js";const Wt=ft({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Mt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Xt=E({activeColor:String,baseColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ee(),...ne()},"VListGroup"),Fe=M()({name:"VListGroup",props:Xt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:u,id:v}=$t(C(e,"value"),!0),r=y(()=>`v-list-group--id-${String(v.value)}`),l=Kt(),{isBooted:n}=zt();function m(h){u(!a.value,h)}const p=y(()=>({onClick:m,class:"v-list-group__header",id:r.value})),A=y(()=>a.value?e.collapseIcon:e.expandIcon),f=y(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&A.value,appendIcon:e.appendIcon||!e.subgroup&&A.value,title:e.title,value:e.value}}));return j(()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":l==null?void 0:l.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&o(Z,{defaults:f.value},{default:()=>[o(Wt,null,{default:()=>[t.activator({props:p.value,isOpen:a.value})]})]}),o(mt,{transition:{component:Gt},disabled:!n.value},{default:()=>{var h;return[ce(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(h=t.default)==null?void 0:h.call(t)]),[[Oe,a.value]])]}})]})),{isOpen:a}}}),Yt=E({color:String,inset:Boolean,sticky:Boolean,title:String,...ee(),...ne()},"VListSubheader"),Zt=M()({name:"VListSubheader",props:Yt(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:u}=_e(C(e,"color"));return j(()=>{const v=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:u},e.style]},{default:()=>{var r;return[v&&o("div",{class:"v-list-subheader__text"},[((r=t.default)==null?void 0:r.call(t))??e.title])]}})}),{}}}),Jt=E({items:Array,returnObject:Boolean},"VListChildren"),Je=M()({name:"VListChildren",props:Jt(),setup(e,i){let{slots:t}=i;return Ze(),()=>{var a,u;return((a=t.default)==null?void 0:a.call(t))??((u=e.items)==null?void 0:u.map(v=>{var f,h;let{children:r,props:l,type:n,raw:m}=v;if(n==="divider")return((f=t.divider)==null?void 0:f.call(t,{props:l}))??o(Ut,l,null);if(n==="subheader")return((h=t.subheader)==null?void 0:h.call(t,{props:l}))??o(Zt,l,null);const p={subtitle:t.subtitle?b=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...b,item:m})}:void 0,prepend:t.prepend?b=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...b,item:m})}:void 0,append:t.append?b=>{var c;return(c=t.append)==null?void 0:c.call(t,{...b,item:m})}:void 0,title:t.title?b=>{var c;return(c=t.title)==null?void 0:c.call(t,{...b,item:m})}:void 0},A=Fe.filterProps(l);return r?o(Fe,L({value:l==null?void 0:l.value},A),{activator:b=>{let{props:c}=b;const s={...l,...c,value:e.returnObject?m:l.value};return t.header?t.header({props:s}):o(de,s,p)},default:()=>o(Je,{items:r},t)}):t.item?t.item({props:l}):o(de,L(l,{value:e.returnObject?m:l.value}),p)}))}}}),Qe=E({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ge}},"list-items");function be(e,i){const t=N(i,e.itemTitle,i),a=N(i,e.itemValue,t),u=N(i,e.itemChildren),v=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?oe(i,["children"]):i:void 0:N(i,e.itemProps),r={title:t,value:a,...v};return{title:String(r.title??""),value:r.value,props:r,children:Array.isArray(u)?et(e,u):void 0,raw:i}}function et(e,i){const t=[];for(const a of i)t.push(be(e,a));return t}function Qt(e){const i=y(()=>et(e,e.items)),t=y(()=>i.value.some(v=>v.value===null));function a(v){return t.value||(v=v.filter(r=>r!==null)),v.map(r=>e.returnObject&&typeof r=="string"?be(e,r):i.value.find(l=>e.valueComparator(r,l.value))||be(e,r))}function u(v){return e.returnObject?v.map(r=>{let{raw:l}=r;return l}):v.map(r=>{let{value:l}=r;return l})}return{items:i,transformIn:a,transformOut:u}}function el(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function tl(e,i){const t=N(i,e.itemType,"item"),a=el(i)?i:N(i,e.itemTitle),u=N(i,e.itemValue,void 0),v=N(i,e.itemChildren),r=e.itemProps===!0?oe(i,["children"]):N(i,e.itemProps),l={title:a,value:u,...r};return{type:t,title:l.title,value:l.value,props:l,children:t==="item"&&v?tt(e,v):void 0,raw:i}}function tt(e,i){const t=[];for(const a of i)t.push(tl(e,a));return t}function ll(e){return{items:y(()=>tt(e,e.items))}}const al=E({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Nt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ge(),...ee(),...he(),...yt(),...Re(),itemType:{type:String,default:"type"},...Qe(),...Me(),...ne(),...ve(),...Ce({variant:"text"})},"VList"),nl=M()({name:"VList",props:al(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=ll(e),{themeClasses:u}=Ve(e),{backgroundColorClasses:v,backgroundColorStyles:r}=$e(C(e,"bgColor")),{borderClasses:l}=Ke(e),{densityClasses:n}=ke(e),{dimensionStyles:m}=bt(e),{elevationClasses:p}=Ue(e),{roundedClasses:A}=Ne(e),{children:f,open:h,parents:b,select:c}=jt(e),s=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),g=C(e,"activeColor"),I=C(e,"baseColor"),P=C(e,"color");Ze(),Se({VListGroup:{activeColor:g,baseColor:I,color:P,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:g,baseColor:I,color:P,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const x=ae(!1),T=J();function q(w){x.value=!0}function V(w){x.value=!1}function G(w){var $;!x.value&&!(w.relatedTarget&&(($=T.value)!=null&&$.contains(w.relatedTarget)))&&D()}function W(w){if(T.value){if(w.key==="ArrowDown")D("next");else if(w.key==="ArrowUp")D("prev");else if(w.key==="Home")D("first");else if(w.key==="End")D("last");else return;w.preventDefault()}}function H(w){x.value=!0}function D(w){if(T.value)return fe(T.value,w)}return j(()=>o(e.tag,{ref:T,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},u.value,v.value,l.value,n.value,p.value,s.value,A.value,e.class],style:[r.value,m.value,e.style],tabindex:e.disabled||x.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:q,onFocusout:V,onFocus:G,onKeydown:W,onMousedown:H},{default:()=>[o(Je,{items:a.value,returnObject:e.returnObject},t)]})),{open:h,select:c,focus:D,children:f,parents:b}}}),lt=Symbol.for("vuetify:selection-control-group"),at=E({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:R,trueIcon:R,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ge},...ee(),...he(),...ve()},"SelectionControlGroup"),ol=E({...at({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");M()({name:"VSelectionControlGroup",props:ol(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const a=z(e,"modelValue"),u=pe(),v=y(()=>e.id||`v-selection-control-group-${u}`),r=y(()=>e.name||v.value),l=new Set;return je(lt,{modelValue:a,forceUpdate:()=>{l.forEach(n=>n())},onForceUpdate:n=>{l.add(n),gt(()=>{l.delete(n)})}}),Se({[e.defaultsTarget]:{color:C(e,"color"),disabled:C(e,"disabled"),density:C(e,"density"),error:C(e,"error"),inline:C(e,"inline"),modelValue:a,multiple:y(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:r,falseIcon:C(e,"falseIcon"),trueIcon:C(e,"trueIcon"),readonly:C(e,"readonly"),ripple:C(e,"ripple"),type:C(e,"type"),valueComparator:C(e,"valueComparator")}}),j(()=>{var n;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=t.default)==null?void 0:n.call(t)])}),{}}});const nt=E({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ee(),...at()},"VSelectionControl");function il(e){const i=qe(lt,void 0),{densityClasses:t}=ke(e),a=z(e,"modelValue"),u=y(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=y(()=>e.falseValue!==void 0?e.falseValue:!1),r=y(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),l=y({get(){const h=i?i.modelValue.value:a.value;return r.value?se(h).some(b=>e.valueComparator(b,u.value)):e.valueComparator(h,u.value)},set(h){if(e.readonly)return;const b=h?u.value:v.value;let c=b;r.value&&(c=h?[...se(a.value),b]:se(a.value).filter(s=>!e.valueComparator(s,u.value))),i?i.modelValue.value=c:a.value=c}}),{textColorClasses:n,textColorStyles:m}=_e(y(()=>{if(!(e.error||e.disabled))return l.value?e.color:e.baseColor})),{backgroundColorClasses:p,backgroundColorStyles:A}=$e(y(()=>l.value&&!e.error&&!e.disabled?e.color:void 0)),f=y(()=>l.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:t,trueValue:u,falseValue:v,model:l,textColorClasses:n,textColorStyles:m,backgroundColorClasses:p,backgroundColorStyles:A,icon:f}}const Ee=M()({name:"VSelectionControl",directives:{Ripple:He},inheritAttrs:!1,props:nt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:t,slots:a}=i;const{group:u,densityClasses:v,icon:r,model:l,textColorClasses:n,textColorStyles:m,backgroundColorClasses:p,backgroundColorStyles:A,trueValue:f}=il(e),h=pe(),b=ae(!1),c=ae(!1),s=J(),g=y(()=>e.id||`input-${h}`),I=y(()=>!e.disabled&&!e.readonly);u==null||u.onForceUpdate(()=>{s.value&&(s.value.checked=l.value)});function P(V){I.value&&(b.value=!0,me(V.target,":focus-visible")!==!1&&(c.value=!0))}function x(){b.value=!1,c.value=!1}function T(V){V.stopPropagation()}function q(V){I.value&&(e.readonly&&u&&Ie(()=>u.forceUpdate()),l.value=V.target.checked)}return j(()=>{var D,w;const V=a.label?a.label({label:e.label,props:{for:g.value}}):e.label,[G,W]=ht(t),H=o("input",L({ref:s,checked:l.value,disabled:!!e.disabled,id:g.value,onBlur:x,onFocus:P,onInput:q,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:f.value,name:e.name,"aria-checked":e.type==="checkbox"?l.value:void 0},W),null);return o("div",L({class:["v-selection-control",{"v-selection-control--dirty":l.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":b.value,"v-selection-control--focus-visible":c.value,"v-selection-control--inline":e.inline},v.value,e.class]},G,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",n.value],style:m.value},[(D=a.default)==null?void 0:D.call(a,{backgroundColorClasses:p,backgroundColorStyles:A}),ce(o("div",{class:["v-selection-control__input"]},[((w=a.input)==null?void 0:w.call(a,{model:l,textColorClasses:n,textColorStyles:m,backgroundColorClasses:p,backgroundColorStyles:A,inputNode:H,icon:r.value,props:{onFocus:P,onBlur:x,id:g.value}}))??o(le,null,[r.value&&o(Q,{key:"icon",icon:r.value},null),H])]),[[ze("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),V&&o(rt,{for:g.value,onClick:T},{default:()=>[V]})])}),{isFocused:b,input:s}}}),ul=E({indeterminate:Boolean,indeterminateIcon:{type:R,default:"$checkboxIndeterminate"},...nt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),sl=M()({name:"VCheckboxBtn",props:ul(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const a=z(e,"indeterminate"),u=z(e,"modelValue");function v(n){a.value&&(a.value=!1)}const r=y(()=>a.value?e.indeterminateIcon:e.falseIcon),l=y(()=>a.value?e.indeterminateIcon:e.trueIcon);return j(()=>{const n=oe(Ee.filterProps(e),["modelValue"]);return o(Ee,L(n,{modelValue:u.value,"onUpdate:modelValue":[m=>u.value=m,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:l.value,"aria-checked":a.value?"mixed":void 0}),t)}),{}}}),ot=Symbol.for("vuetify:v-chip-group"),cl=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ge},...qt(),...ee(),...Ct({selectedClass:"v-chip--selected"}),...ne(),...ve(),...Ce({variant:"tonal"})},"VChipGroup");M()({name:"VChipGroup",props:cl(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const{themeClasses:a}=Ve(e),{isSelected:u,select:v,next:r,prev:l,selected:n}=Vt(e,ot);return Se({VChip:{color:C(e,"color"),disabled:C(e,"disabled"),filter:C(e,"filter"),variant:C(e,"variant")}}),j(()=>{const m=De.filterProps(e);return o(De,L(m,{class:["v-chip-group",{"v-chip-group--column":e.column},a.value,e.class],style:e.style}),{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t,{isSelected:u,select:v,next:r,prev:l,selected:n.value})]}})}),{}}});const rl=E({activeClass:String,appendAvatar:String,appendIcon:R,closable:Boolean,closeIcon:{type:R,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ae(),onClickOnce:Ae(),...Ge(),...ee(),...he(),...Re(),...kt(),...Me(),...St(),...pt(),...ne({tag:"span"}),...ve(),...Ce({variant:"tonal"})},"VChip"),dl=M()({name:"VChip",directives:{Ripple:He},props:rl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,i){let{attrs:t,emit:a,slots:u}=i;const{t:v}=We(),{borderClasses:r}=Ke(e),{colorClasses:l,colorStyles:n,variantClasses:m}=It(e),{densityClasses:p}=ke(e),{elevationClasses:A}=Ue(e),{roundedClasses:f}=Ne(e),{sizeClasses:h}=Pt(e),{themeClasses:b}=Ve(e),c=z(e,"modelValue"),s=xt(e,ot,!1),g=wt(e,t),I=y(()=>e.link!==!1&&g.isLink.value),P=y(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||g.isClickable.value)),x=y(()=>({"aria-label":v(e.closeLabel),onClick(V){V.stopPropagation(),c.value=!1,a("click:close",V)}}));function T(V){var G;a("click",V),P.value&&((G=g.navigate)==null||G.call(g,V),s==null||s.toggle())}function q(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),T(V))}return()=>{const V=g.isLink.value?"a":e.tag,G=!!(e.appendIcon||e.appendAvatar),W=!!(G||u.append),H=!!(u.close||e.closable),D=!!(u.filter||e.filter)&&s,w=!!(e.prependIcon||e.prependAvatar),$=!!(w||u.prepend),ie=!s||s.isSelected.value;return c.value&&ce(o(V,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":D,"v-chip--pill":e.pill},b.value,r.value,ie?l.value:void 0,p.value,A.value,f.value,h.value,m.value,s==null?void 0:s.selectedClass.value,e.class],style:[ie?n.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:P.value?0:void 0,onClick:T,onKeydown:P.value&&!I.value&&q},{default:()=>{var ue;return[At(P.value,"v-chip"),D&&o(Rt,{key:"filter"},{default:()=>[ce(o("div",{class:"v-chip__filter"},[u.filter?o(Z,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},u.filter):o(Q,{key:"filter-icon",icon:e.filterIcon},null)]),[[Oe,s.isSelected.value]])]}),$&&o("div",{key:"prepend",class:"v-chip__prepend"},[u.prepend?o(Z,{key:"prepend-defaults",disabled:!w,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},u.prepend):o(le,null,[e.prependIcon&&o(Q,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&o(ye,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),o("div",{class:"v-chip__content","data-no-activator":""},[((ue=u.default)==null?void 0:ue.call(u,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),W&&o("div",{key:"append",class:"v-chip__append"},[u.append?o(Z,{key:"append-defaults",disabled:!G,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},u.append):o(le,null,[e.appendIcon&&o(Q,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&o(ye,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&o("button",L({key:"close",class:"v-chip__close",type:"button"},x.value),[u.close?o(Z,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},u.close):o(Q,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[ze("ripple"),P.value&&e.ripple,null]])}}}),vl=E({id:String,...oe(Bt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Xe}}),["absolute"])},"VMenu"),fl=M()({name:"VMenu",props:vl(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const a=z(e,"modelValue"),{scopeId:u}=Lt(),v=pe(),r=y(()=>e.id||`v-menu-${v}`),l=J(),n=qe(Be,null),m=ae(0);je(Be,{register(){++m.value},unregister(){--m.value},closeParents(c){setTimeout(()=>{!m.value&&(c==null||c&&!Tt(c,l.value.contentEl))&&(a.value=!1,n==null||n.closeParents())},40)}});async function p(c){var I,P,x;const s=c.relatedTarget,g=c.target;await Ie(),a.value&&s!==g&&((I=l.value)!=null&&I.contentEl)&&((P=l.value)!=null&&P.globalTop)&&![document,l.value.contentEl].includes(g)&&!l.value.contentEl.contains(g)&&((x=Te(l.value.contentEl)[0])==null||x.focus())}re(a,c=>{c?(n==null||n.register(),document.addEventListener("focusin",p,{once:!0})):(n==null||n.unregister(),document.removeEventListener("focusin",p))});function A(c){n==null||n.closeParents(c)}function f(c){var s,g,I;e.disabled||(c.key==="Tab"?Dt(Te((s=l.value)==null?void 0:s.contentEl,!1),c.shiftKey?"prev":"next",x=>x.tabIndex>=0)||(a.value=!1,(I=(g=l.value)==null?void 0:g.activatorEl)==null||I.focus()):["Enter"," "].includes(c.key)&&e.closeOnContentClick&&(a.value=!1,n==null||n.closeParents()))}function h(c){var g;if(e.disabled)return;const s=(g=l.value)==null?void 0:g.contentEl;s&&a.value?c.key==="ArrowDown"?(c.preventDefault(),fe(s,"next")):c.key==="ArrowUp"&&(c.preventDefault(),fe(s,"prev")):["ArrowDown","ArrowUp"].includes(c.key)&&(a.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>h(c))))}const b=y(()=>L({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":r.value,onKeydown:h},e.activatorProps));return j(()=>{const c=Le.filterProps(e);return o(Le,L({ref:l,id:r.value,class:["v-menu",e.class],style:e.style},c,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,absolute:!0,activatorProps:b.value,"onClick:outside":A,onKeydown:f},u),{activator:t.activator,default:function(){for(var s=arguments.length,g=new Array(s),I=0;I<s;I++)g[I]=arguments[I];return o(Z,{root:"VMenu"},{default:()=>{var P;return[(P=t.default)==null?void 0:P.call(t,...g)]}})}})}),Ye({id:r,ΨopenChildren:m},l)}});function ml(e,i){const t=ae(!1);let a;function u(l){cancelAnimationFrame(a),t.value=!0,a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{t.value=!1})})}async function v(){await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>{if(t.value){const n=re(t,()=>{n(),l()})}else l()})}async function r(l){var p,A;if(l.key==="Tab"&&((p=i.value)==null||p.focus()),!["PageDown","PageUp","Home","End"].includes(l.key))return;const n=(A=e.value)==null?void 0:A.$el;if(!n)return;(l.key==="Home"||l.key==="End")&&n.scrollTo({top:l.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await v();const m=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(l.key==="PageDown"||l.key==="Home"){const f=n.getBoundingClientRect().top;for(const h of m)if(h.getBoundingClientRect().top>=f){h.focus();break}}else{const f=n.getBoundingClientRect().bottom;for(const h of[...m].reverse())if(h.getBoundingClientRect().bottom<=f){h.focus();break}}}return{onListScroll:u,onListKeydown:r}}const yl=E({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:R,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Qe({itemChildren:!1})},"Select"),bl=E({...yl(),...oe(dt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ft({transition:{component:Xe}})},"VSelect"),pl=M()({name:"VSelect",props:bl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:a}=We(),u=J(),v=J(),r=J(),l=z(e,"menu"),n=y({get:()=>l.value,set:d=>{var k;l.value&&!d&&((k=v.value)!=null&&k.ΨopenChildren)||(l.value=d)}}),{items:m,transformIn:p,transformOut:A}=Qt(e),f=z(e,"modelValue",[],d=>p(d===null?[null]:se(d)),d=>{const k=A(d);return e.multiple?k:k[0]??null}),h=y(()=>typeof e.counterValue=="function"?e.counterValue(f.value):typeof e.counterValue=="number"?e.counterValue:f.value.length),b=vt(),c=y(()=>f.value.map(d=>d.value)),s=ae(!1),g=y(()=>n.value?e.closeText:e.openText);let I="",P;const x=y(()=>e.hideSelected?m.value.filter(d=>!f.value.some(k=>k===d)):m.value),T=y(()=>e.hideNoData&&!x.value.length||e.readonly||(b==null?void 0:b.isReadonly.value)),q=y(()=>{var d;return{...e.menuProps,activatorProps:{...((d=e.menuProps)==null?void 0:d.activatorProps)||{},"aria-haspopup":"listbox"}}}),V=J(),{onListScroll:G,onListKeydown:W}=ml(V,u);function H(d){e.openOnClear&&(n.value=!0)}function D(){T.value||(n.value=!n.value)}function w(d){var S,_;if(!d.key||e.readonly||b!=null&&b.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(d.key)&&d.preventDefault(),["Enter","ArrowDown"," "].includes(d.key)&&(n.value=!0),["Escape","Tab"].includes(d.key)&&(n.value=!1),d.key==="Home"?(S=V.value)==null||S.focus("first"):d.key==="End"&&((_=V.value)==null||_.focus("last"));const k=1e3;function F(B){const U=B.key.length===1,O=!B.ctrlKey&&!B.metaKey&&!B.altKey;return U&&O}if(e.multiple||!F(d))return;const X=performance.now();X-P>k&&(I=""),I+=d.key.toLowerCase(),P=X;const K=m.value.find(B=>B.title.toLowerCase().startsWith(I));K!==void 0&&(f.value=[K])}function $(d){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!d.props.disabled)if(e.multiple){const F=f.value.findIndex(K=>e.valueComparator(K.value,d.value)),X=k??!~F;if(~F){const K=X?[...f.value,d]:[...f.value];K.splice(F,1),f.value=K}else X&&(f.value=[...f.value,d])}else{const F=k!==!1;f.value=F?[d]:[],Ie(()=>{n.value=!1})}}function ie(d){var k;(k=V.value)!=null&&k.$el.contains(d.relatedTarget)||(n.value=!1)}function ue(){var d;s.value&&((d=u.value)==null||d.focus())}function it(d){s.value=!0}function ut(d){if(d==null)f.value=[];else if(me(u.value,":autofill")||me(u.value,":-webkit-autofill")){const k=m.value.find(F=>F.title===d);k&&$(k)}else u.value&&(u.value.value="")}return re(n,()=>{if(!e.hideSelected&&n.value&&f.value.length){const d=x.value.findIndex(k=>f.value.some(F=>e.valueComparator(F.value,k.value)));_t&&window.requestAnimationFrame(()=>{var k;d>=0&&((k=r.value)==null||k.scrollToIndex(d))})}}),re(()=>e.items,(d,k)=>{n.value||s.value&&!k.length&&d.length&&(n.value=!0)}),j(()=>{const d=!!(e.chips||t.chip),k=!!(!e.hideNoData||x.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),F=f.value.length>0,X=we.filterProps(e),K=F||!s.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return o(we,L({ref:u},X,{modelValue:f.value.map(S=>S.props.value).join(", "),"onUpdate:modelValue":ut,focused:s.value,"onUpdate:focused":S=>s.value=S,validationValue:f.externalValue,counterValue:h.value,dirty:F,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:K,"onClick:clear":H,"onMousedown:control":D,onBlur:ie,onKeydown:w,"aria-label":a(g.value),title:a(g.value)}),{...t,default:()=>o(le,null,[o(fl,L({ref:v,modelValue:n.value,"onUpdate:modelValue":S=>n.value=S,activator:"parent",contentClass:"v-select__content",disabled:T.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ue},q.value),{default:()=>[k&&o(nl,L({ref:V,selected:c.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:W,onFocusin:it,onScrollPassive:G,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var S,_,B;return[(S=t["prepend-item"])==null?void 0:S.call(t),!x.value.length&&!e.hideNoData&&(((_=t["no-data"])==null?void 0:_.call(t))??o(de,{title:a(e.noDataText)},null)),o(Ht,{ref:r,renderless:!0,items:x.value},{default:U=>{var xe;let{item:O,index:te,itemRef:Y}=U;const Pe=L(O.props,{ref:Y,key:te,onClick:()=>$(O,null)});return((xe=t.item)==null?void 0:xe.call(t,{item:O,index:te,props:Pe}))??o(de,L(Pe,{role:"option"}),{prepend:st=>{let{isSelected:ct}=st;return o(le,null,[e.multiple&&!e.hideSelected?o(sl,{key:O.value,modelValue:ct,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependAvatar&&o(ye,{image:O.props.prependAvatar},null),O.props.prependIcon&&o(Q,{icon:O.props.prependIcon},null)])}})}}),(B=t["append-item"])==null?void 0:B.call(t)]}})]}),f.value.map((S,_)=>{function B(Y){Y.stopPropagation(),Y.preventDefault(),$(S,!1)}const U={"onClick:close":B,onMousedown(Y){Y.preventDefault(),Y.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=d?!!t.chip:!!t.selection,te=O?Et(d?t.chip({item:S,index:_,props:U}):t.selection({item:S,index:_})):void 0;if(!(O&&!te))return o("div",{key:S.value,class:"v-select__selection"},[d?t.chip?o(Z,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:S.title}}},{default:()=>[te]}):o(dl,L({key:"chip",closable:e.closableChips,size:"small",text:S.title,disabled:S.props.disabled},U),null):te??o("span",{class:"v-select__selection-text"},[S.title,e.multiple&&_<f.value.length-1&&o("span",{class:"v-select__selection-comma"},[Ot(",")])])])})]),"append-inner":function(){var U;for(var S=arguments.length,_=new Array(S),B=0;B<S;B++)_[B]=arguments[B];return o(le,null,[(U=t["append-inner"])==null?void 0:U.call(t,..._),e.menuIcon?o(Q,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ye({isFocused:s,menu:n,select:$},u)}});export{pl as V,sl as a};
