import{a as el,m as ll,u as tl,V as Ce}from"./VTextField-DaonCrl1.js";import{p as L,ak as te,ay as Re,m as oe,ad as Ee,k as ye,l as N,ae as Y,aN as ge,a as V,f as Fe,ag as Oe,O as R,t as Q,v as s,aO as be,aP as _e,s as H,b as j,aQ as al,a9 as F,Y as fe,aR as Le,a2 as W,F as le,i as Me,af as Ue,az as se,a8 as nl,N as ol,aS as me,ar as ce,a6 as Ve,aT as ul,w as Ge,am as He,n as Ke,aU as il,aG as Se,H as sl,J as cl,aV as rl,M as dl,aW as vl,al as fl,an as $e,P as ml,aX as hl,R as yl,U as gl,aY as bl,aZ as Vl,a_ as kl,a$ as pl,aL as ne,Z as Cl,b0 as he,b1 as Sl,b2 as ze,b3 as Il,b4 as Ie,b5 as Pl,at as X,b6 as Pe,aa as Ne,b7 as wl,b8 as we,b9 as xe,u as qe,ao as xl,as as Ae,au as de,ba as Al,bb as je,I as Tl,g as Bl,Q as Dl,bc as Rl,h as ie,e as El,bd as Fl,be as Ol,bf as _l,z as Ll}from"./index-CPzORPkr.js";import{m as Ml,u as Ul,a as Gl,b as Te}from"./VList-X9Z2Zdd6.js";import{b as Hl}from"./index-Cck9AI77.js";import{m as Kl,V as Be}from"./VSlideGroup-CVmbyScy.js";const We=Symbol.for("vuetify:selection-control-group"),Xe=L({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:te,trueIcon:te,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Re},...oe(),...Ee(),...ye()},"SelectionControlGroup"),$l=L({...Xe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");N()({name:"VSelectionControlGroup",props:$l(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:o}=d;const u=Y(e,"modelValue"),t=ge(),v=V(()=>e.id||`v-selection-control-group-${t}`),g=V(()=>e.name||v.value),a=new Set;return Fe(We,{modelValue:u,forceUpdate:()=>{a.forEach(l=>l())},onForceUpdate:l=>{a.add(l),be(()=>{a.delete(l)})}}),Oe({[e.defaultsTarget]:{color:R(e,"color"),disabled:R(e,"disabled"),density:R(e,"density"),error:R(e,"error"),inline:R(e,"inline"),modelValue:u,multiple:V(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),name:g,falseIcon:R(e,"falseIcon"),trueIcon:R(e,"trueIcon"),readonly:R(e,"readonly"),ripple:R(e,"ripple"),type:R(e,"type"),valueComparator:R(e,"valueComparator")}}),Q(()=>{var l;return s("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=o.default)==null?void 0:l.call(o)])}),{}}});const Ye=L({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...oe(),...Xe()},"VSelectionControl");function zl(e){const d=Me(We,void 0),{densityClasses:o}=Ue(e),u=Y(e,"modelValue"),t=V(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=V(()=>e.falseValue!==void 0?e.falseValue:!1),g=V(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),a=V({get(){const p=d?d.modelValue.value:u.value;return g.value?se(p).some(k=>e.valueComparator(k,t.value)):e.valueComparator(p,t.value)},set(p){if(e.readonly)return;const k=p?t.value:v.value;let r=k;g.value&&(r=p?[...se(u.value),k]:se(u.value).filter(n=>!e.valueComparator(n,t.value))),d?d.modelValue.value=r:u.value=r}}),{textColorClasses:l,textColorStyles:b}=nl(V(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:I,backgroundColorStyles:A}=ol(V(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),f=V(()=>a.value?e.trueIcon:e.falseIcon);return{group:d,densityClasses:o,trueValue:t,falseValue:v,model:a,textColorClasses:l,textColorStyles:b,backgroundColorClasses:I,backgroundColorStyles:A,icon:f}}const De=N()({name:"VSelectionControl",directives:{Ripple:_e},inheritAttrs:!1,props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:o,slots:u}=d;const{group:t,densityClasses:v,icon:g,model:a,textColorClasses:l,textColorStyles:b,backgroundColorClasses:I,backgroundColorStyles:A,trueValue:f}=zl(e),p=ge(),k=H(!1),r=H(!1),n=j(),m=V(()=>e.id||`input-${p}`),C=V(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{n.value&&(n.value.checked=a.value)});function P(h){C.value&&(k.value=!0,me(h.target,":focus-visible")!==!1&&(r.value=!0))}function w(){k.value=!1,r.value=!1}function K(h){h.stopPropagation()}function Z(h){C.value&&(e.readonly&&t&&ce(()=>t.forceUpdate()),a.value=h.target.checked)}return Q(()=>{var M,z;const h=u.label?u.label({label:e.label,props:{for:m.value}}):e.label,[O,$]=al(o),_=s("input",F({ref:n,checked:a.value,disabled:!!e.disabled,id:m.value,onBlur:w,onFocus:P,onInput:Z,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:f.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},$),null);return s("div",F({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":k.value,"v-selection-control--focus-visible":r.value,"v-selection-control--inline":e.inline},v.value,e.class]},O,{style:e.style}),[s("div",{class:["v-selection-control__wrapper",l.value],style:b.value},[(M=u.default)==null?void 0:M.call(u,{backgroundColorClasses:I,backgroundColorStyles:A}),fe(s("div",{class:["v-selection-control__input"]},[((z=u.input)==null?void 0:z.call(u,{model:a,textColorClasses:l,textColorStyles:b,backgroundColorClasses:I,backgroundColorStyles:A,inputNode:_,icon:g.value,props:{onFocus:P,onBlur:w,id:m.value}}))??s(W,null,[g.value&&s(le,{key:"icon",icon:g.value},null),_])]),[[Le("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),h&&s(el,{for:m.value,onClick:K},{default:()=>[h]})])}),{isFocused:k,input:n}}}),Nl=L({indeterminate:Boolean,indeterminateIcon:{type:te,default:"$checkboxIndeterminate"},...Ye({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ql=N()({name:"VCheckboxBtn",props:Nl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,d){let{slots:o}=d;const u=Y(e,"indeterminate"),t=Y(e,"modelValue");function v(l){u.value&&(u.value=!1)}const g=V(()=>u.value?e.indeterminateIcon:e.falseIcon),a=V(()=>u.value?e.indeterminateIcon:e.trueIcon);return Q(()=>{const l=Ve(De.filterProps(e),["modelValue"]);return s(De,F(l,{modelValue:t.value,"onUpdate:modelValue":[b=>t.value=b,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:g.value,trueIcon:a.value,"aria-checked":u.value?"mixed":void 0}),o)}),{}}}),Qe=Symbol.for("vuetify:v-chip-group"),jl=L({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Re},...Kl(),...oe(),...ul({selectedClass:"v-chip--selected"}),...Ge(),...ye(),...He({variant:"tonal"})},"VChipGroup");N()({name:"VChipGroup",props:jl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:o}=d;const{themeClasses:u}=Ke(e),{isSelected:t,select:v,next:g,prev:a,selected:l}=il(e,Qe);return Oe({VChip:{color:R(e,"color"),disabled:R(e,"disabled"),filter:R(e,"filter"),variant:R(e,"variant")}}),Q(()=>{const b=Be.filterProps(e);return s(Be,F(b,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=o.default)==null?void 0:I.call(o,{isSelected:t,select:v,next:g,prev:a,selected:l.value})]}})}),{}}});const Wl=L({activeClass:String,appendAvatar:String,appendIcon:te,closable:Boolean,closeIcon:{type:te,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Se(),onClickOnce:Se(),...sl(),...oe(),...Ee(),...cl(),...rl(),...dl(),...vl(),...fl(),...Ge({tag:"span"}),...ye(),...He({variant:"tonal"})},"VChip"),Xl=N()({name:"VChip",directives:{Ripple:_e},props:Wl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,d){let{attrs:o,emit:u,slots:t}=d;const{t:v}=$e(),{borderClasses:g}=ml(e),{colorClasses:a,colorStyles:l,variantClasses:b}=hl(e),{densityClasses:I}=Ue(e),{elevationClasses:A}=yl(e),{roundedClasses:f}=gl(e),{sizeClasses:p}=bl(e),{themeClasses:k}=Ke(e),r=Y(e,"modelValue"),n=Vl(e,Qe,!1),m=kl(e,o),C=V(()=>e.link!==!1&&m.isLink.value),P=V(()=>!e.disabled&&e.link!==!1&&(!!n||e.link||m.isClickable.value)),w=V(()=>({"aria-label":v(e.closeLabel),onClick(h){h.stopPropagation(),r.value=!1,u("click:close",h)}}));function K(h){var O;u("click",h),P.value&&((O=m.navigate)==null||O.call(m,h),n==null||n.toggle())}function Z(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),K(h))}return()=>{const h=m.isLink.value?"a":e.tag,O=!!(e.appendIcon||e.appendAvatar),$=!!(O||t.append),_=!!(t.close||e.closable),M=!!(t.filter||e.filter)&&n,z=!!(e.prependIcon||e.prependAvatar),q=!!(z||t.prepend),J=!n||n.isSelected.value;return r.value&&fe(s(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":M,"v-chip--pill":e.pill},k.value,g.value,J?a.value:void 0,I.value,A.value,f.value,p.value,b.value,n==null?void 0:n.selectedClass.value,e.class],style:[J?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:m.href.value,tabindex:P.value?0:void 0,onClick:K,onKeydown:P.value&&!C.value&&Z},{default:()=>{var U;return[pl(P.value,"v-chip"),M&&s(Hl,{key:"filter"},{default:()=>[fe(s("div",{class:"v-chip__filter"},[t.filter?s(ne,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):s(le,{key:"filter-icon",icon:e.filterIcon},null)]),[[Cl,n.isSelected.value]])]}),q&&s("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?s(ne,{key:"prepend-defaults",disabled:!z,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):s(W,null,[e.prependIcon&&s(le,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&s(he,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),s("div",{class:"v-chip__content","data-no-activator":""},[((U=t.default)==null?void 0:U.call(t,{isSelected:n==null?void 0:n.isSelected.value,selectedClass:n==null?void 0:n.selectedClass.value,select:n==null?void 0:n.select,toggle:n==null?void 0:n.toggle,value:n==null?void 0:n.value.value,disabled:e.disabled}))??e.text]),$&&s("div",{key:"append",class:"v-chip__append"},[t.append?s(ne,{key:"append-defaults",disabled:!O,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):s(W,null,[e.appendIcon&&s(le,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&s(he,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),_&&s("button",F({key:"close",class:"v-chip__close",type:"button"},w.value),[t.close?s(ne,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):s(le,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Le("ripple"),P.value&&e.ripple,null]])}}}),Yl=L({id:String,...Ve(Sl({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ze}}),["absolute"])},"VMenu"),Ql=N()({name:"VMenu",props:Yl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:o}=d;const u=Y(e,"modelValue"),{scopeId:t}=Il(),v=ge(),g=V(()=>e.id||`v-menu-${v}`),a=j(),l=Me(Ie,null),b=H(0);Fe(Ie,{register(){++b.value},unregister(){--b.value},closeParents(r){setTimeout(()=>{!b.value&&(r==null||r&&!Pl(r,a.value.contentEl))&&(u.value=!1,l==null||l.closeParents())},40)}});async function I(r){var C,P,w;const n=r.relatedTarget,m=r.target;await ce(),u.value&&n!==m&&((C=a.value)!=null&&C.contentEl)&&((P=a.value)!=null&&P.globalTop)&&![document,a.value.contentEl].includes(m)&&!a.value.contentEl.contains(m)&&((w=we(a.value.contentEl)[0])==null||w.focus())}X(u,r=>{r?(l==null||l.register(),document.addEventListener("focusin",I,{once:!0})):(l==null||l.unregister(),document.removeEventListener("focusin",I))});function A(r){l==null||l.closeParents(r)}function f(r){var n,m,C;e.disabled||(r.key==="Tab"?wl(we((n=a.value)==null?void 0:n.contentEl,!1),r.shiftKey?"prev":"next",w=>w.tabIndex>=0)||(u.value=!1,(C=(m=a.value)==null?void 0:m.activatorEl)==null||C.focus()):["Enter"," "].includes(r.key)&&e.closeOnContentClick&&(u.value=!1,l==null||l.closeParents()))}function p(r){var m;if(e.disabled)return;const n=(m=a.value)==null?void 0:m.contentEl;n&&u.value?r.key==="ArrowDown"?(r.preventDefault(),xe(n,"next")):r.key==="ArrowUp"&&(r.preventDefault(),xe(n,"prev")):["ArrowDown","ArrowUp"].includes(r.key)&&(u.value=!0,r.preventDefault(),setTimeout(()=>setTimeout(()=>p(r))))}const k=V(()=>F({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":g.value,onKeydown:p},e.activatorProps));return Q(()=>{const r=Pe.filterProps(e);return s(Pe,F({ref:a,id:g.value,class:["v-menu",e.class],style:e.style},r,{modelValue:u.value,"onUpdate:modelValue":n=>u.value=n,absolute:!0,activatorProps:k.value,"onClick:outside":A,onKeydown:f},t),{activator:o.activator,default:function(){for(var n=arguments.length,m=new Array(n),C=0;C<n;C++)m[C]=arguments[C];return s(ne,{root:"VMenu"},{default:()=>{var P;return[(P=o.default)==null?void 0:P.call(o,...m)]}})}})}),Ne({id:g,ΨopenChildren:b},a)}}),Zl=L({renderless:Boolean,...oe()},"VVirtualScrollItem"),Jl=N()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Zl(),emits:{"update:height":e=>!0},setup(e,d){let{attrs:o,emit:u,slots:t}=d;const{resizeRef:v,contentRect:g}=qe(void 0,"border");X(()=>{var a;return(a=g.value)==null?void 0:a.height},a=>{a!=null&&u("update:height",a)}),Q(()=>{var a,l;return e.renderless?s(W,null,[(a=t.default)==null?void 0:a.call(t,{itemRef:v})]):s("div",F({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(l=t.default)==null?void 0:l.call(t)])})}}),et=-1,lt=1,ve=100,tt=L({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function at(e,d){const o=xl(),u=H(0);Ae(()=>{u.value=parseFloat(e.itemHeight||0)});const t=H(0),v=H(Math.ceil((parseInt(e.height)||o.height.value)/(u.value||16))||1),g=H(0),a=H(0),l=j(),b=j();let I=0;const{resizeRef:A,contentRect:f}=qe();Ae(()=>{A.value=l.value});const p=V(()=>{var i;return l.value===document.documentElement?o.height.value:((i=f.value)==null?void 0:i.height)||parseInt(e.height)||0}),k=V(()=>!!(l.value&&b.value&&p.value&&u.value));let r=Array.from({length:d.value.length}),n=Array.from({length:d.value.length});const m=H(0);let C=-1;function P(i){return r[i]||u.value}const w=Al(()=>{const i=performance.now();n[0]=0;const y=d.value.length;for(let T=1;T<=y-1;T++)n[T]=(n[T-1]||0)+P(T-1);m.value=Math.max(m.value,performance.now()-i)},m),K=X(k,i=>{i&&(K(),I=b.value.offsetTop,w.immediate(),U(),~C&&ce(()=>{je&&window.requestAnimationFrame(()=>{ue(C),C=-1})}))});be(()=>{w.clear()});function Z(i,y){const T=r[i],x=u.value;u.value=x?Math.min(u.value,y):y,(T!==y||x!==u.value)&&(r[i]=y,w())}function h(i){return i=de(i,0,d.value.length-1),n[i]||0}function O(i){return nt(n,i)}let $=0,_=0,M=0;X(p,(i,y)=>{y&&(U(),i<y&&requestAnimationFrame(()=>{_=0,U()}))});function z(){if(!l.value||!b.value)return;const i=l.value.scrollTop,y=performance.now();y-M>500?(_=Math.sign(i-$),I=b.value.offsetTop):_=i-$,$=i,M=y,U()}function q(){!l.value||!b.value||(_=0,M=0,U())}let J=-1;function U(){cancelAnimationFrame(J),J=requestAnimationFrame(re)}function re(){if(!l.value||!p.value)return;const i=$-I,y=Math.sign(_),T=Math.max(0,i-ve),x=de(O(T),0,d.value.length),S=i+p.value+ve,B=de(O(S)+1,x+1,d.value.length);if((y!==et||x<t.value)&&(y!==lt||B>v.value)){const D=h(t.value)-h(x),G=h(B)-h(v.value);Math.max(D,G)>ve?(t.value=x,v.value=B):(x<=0&&(t.value=x),B>=d.value.length&&(v.value=B))}g.value=h(t.value),a.value=h(d.value.length)-h(v.value)}function ue(i){const y=h(i);!l.value||i&&!y?C=i:l.value.scrollTop=y}const c=V(()=>d.value.slice(t.value,v.value).map((i,y)=>({raw:i,index:y+t.value})));return X(d,()=>{r=Array.from({length:d.value.length}),n=Array.from({length:d.value.length}),w.immediate(),U()},{deep:!0}),{containerRef:l,markerRef:b,computedItems:c,paddingTop:g,paddingBottom:a,scrollToIndex:ue,handleScroll:z,handleScrollend:q,handleItemResize:Z}}function nt(e,d){let o=e.length-1,u=0,t=0,v=null,g=-1;if(e[o]<d)return o;for(;u<=o;)if(t=u+o>>1,v=e[t],v>d)o=t-1;else if(v<d)g=t,u=t+1;else return v===d?t:u;return g}const ot=L({items:{type:Array,default:()=>[]},renderless:Boolean,...tt(),...oe(),...Tl()},"VVirtualScroll"),ut=N()({name:"VVirtualScroll",props:ot(),setup(e,d){let{slots:o}=d;const u=Bl("VVirtualScroll"),{dimensionStyles:t}=Dl(e),{containerRef:v,markerRef:g,handleScroll:a,handleScrollend:l,handleItemResize:b,scrollToIndex:I,paddingTop:A,paddingBottom:f,computedItems:p}=at(e,R(e,"items"));return Rl(()=>e.renderless,()=>{function k(){var m,C;const n=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[n]("scroll",a,{passive:!0}),document[n]("scrollend",l)):((m=v.value)==null||m[n]("scroll",a,{passive:!0}),(C=v.value)==null||C[n]("scrollend",l))}El(()=>{v.value=Fl(u.vnode.el,!0),k(!0)}),be(k)}),Q(()=>{const k=p.value.map(r=>s(Jl,{key:r.index,renderless:e.renderless,"onUpdate:height":n=>b(r.index,n)},{default:n=>{var m;return(m=o.default)==null?void 0:m.call(o,{item:r.raw,index:r.index,...n})}}));return e.renderless?s(W,null,[s("div",{ref:g,class:"v-virtual-scroll__spacer",style:{paddingTop:ie(A.value)}},null),k,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ie(f.value)}},null)]):s("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:l,style:[t.value,e.style]},[s("div",{ref:g,class:"v-virtual-scroll__container",style:{paddingTop:ie(A.value),paddingBottom:ie(f.value)}},[k])])}),{scrollToIndex:I}}});function it(e,d){const o=H(!1);let u;function t(a){cancelAnimationFrame(u),o.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{o.value=!1})})}async function v(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(o.value){const l=X(o,()=>{l(),a()})}else a()})}async function g(a){var I,A;if(a.key==="Tab"&&((I=d.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const l=(A=e.value)==null?void 0:A.$el;if(!l)return;(a.key==="Home"||a.key==="End")&&l.scrollTo({top:a.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await v();const b=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const f=l.getBoundingClientRect().top;for(const p of b)if(p.getBoundingClientRect().top>=f){p.focus();break}}else{const f=l.getBoundingClientRect().bottom;for(const p of[...b].reverse())if(p.getBoundingClientRect().bottom<=f){p.focus();break}}}return{onListScroll:t,onListKeydown:g}}const st=L({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ml({itemChildren:!1})},"Select"),ct=L({...st(),...Ve(ll({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ol({transition:{component:ze}})},"VSelect"),ht=N()({name:"VSelect",props:ct(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,d){let{slots:o}=d;const{t:u}=$e(),t=j(),v=j(),g=j(),a=Y(e,"menu"),l=V({get:()=>a.value,set:c=>{var i;a.value&&!c&&((i=v.value)!=null&&i.ΨopenChildren)||(a.value=c)}}),{items:b,transformIn:I,transformOut:A}=Ul(e),f=Y(e,"modelValue",[],c=>I(c===null?[null]:se(c)),c=>{const i=A(c);return e.multiple?i:i[0]??null}),p=V(()=>typeof e.counterValue=="function"?e.counterValue(f.value):typeof e.counterValue=="number"?e.counterValue:f.value.length),k=tl(),r=V(()=>f.value.map(c=>c.value)),n=H(!1),m=V(()=>l.value?e.closeText:e.openText);let C="",P;const w=V(()=>e.hideSelected?b.value.filter(c=>!f.value.some(i=>i===c)):b.value),K=V(()=>e.hideNoData&&!w.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),Z=V(()=>{var c;return{...e.menuProps,activatorProps:{...((c=e.menuProps)==null?void 0:c.activatorProps)||{},"aria-haspopup":"listbox"}}}),h=j(),{onListScroll:O,onListKeydown:$}=it(h,t);function _(c){e.openOnClear&&(l.value=!0)}function M(){K.value||(l.value=!l.value)}function z(c){var S,B;if(!c.key||e.readonly||k!=null&&k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(c.key)&&c.preventDefault(),["Enter","ArrowDown"," "].includes(c.key)&&(l.value=!0),["Escape","Tab"].includes(c.key)&&(l.value=!1),c.key==="Home"?(S=h.value)==null||S.focus("first"):c.key==="End"&&((B=h.value)==null||B.focus("last"));const i=1e3;function y(D){const G=D.key.length===1,E=!D.ctrlKey&&!D.metaKey&&!D.altKey;return G&&E}if(e.multiple||!y(c))return;const T=performance.now();T-P>i&&(C=""),C+=c.key.toLowerCase(),P=T;const x=b.value.find(D=>D.title.toLowerCase().startsWith(C));x!==void 0&&(f.value=[x])}function q(c){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!c.props.disabled)if(e.multiple){const y=f.value.findIndex(x=>e.valueComparator(x.value,c.value)),T=i??!~y;if(~y){const x=T?[...f.value,c]:[...f.value];x.splice(y,1),f.value=x}else T&&(f.value=[...f.value,c])}else{const y=i!==!1;f.value=y?[c]:[],ce(()=>{l.value=!1})}}function J(c){var i;(i=h.value)!=null&&i.$el.contains(c.relatedTarget)||(l.value=!1)}function U(){var c;n.value&&((c=t.value)==null||c.focus())}function re(c){n.value=!0}function ue(c){if(c==null)f.value=[];else if(me(t.value,":autofill")||me(t.value,":-webkit-autofill")){const i=b.value.find(y=>y.title===c);i&&q(i)}else t.value&&(t.value.value="")}return X(l,()=>{if(!e.hideSelected&&l.value&&f.value.length){const c=w.value.findIndex(i=>f.value.some(y=>e.valueComparator(y.value,i.value)));je&&window.requestAnimationFrame(()=>{var i;c>=0&&((i=g.value)==null||i.scrollToIndex(c))})}}),X(()=>e.items,(c,i)=>{l.value||n.value&&!i.length&&c.length&&(l.value=!0)}),Q(()=>{const c=!!(e.chips||o.chip),i=!!(!e.hideNoData||w.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),y=f.value.length>0,T=Ce.filterProps(e),x=y||!n.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(Ce,F({ref:t},T,{modelValue:f.value.map(S=>S.props.value).join(", "),"onUpdate:modelValue":ue,focused:n.value,"onUpdate:focused":S=>n.value=S,validationValue:f.externalValue,counterValue:p.value,dirty:y,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:x,"onClick:clear":_,"onMousedown:control":M,onBlur:J,onKeydown:z,"aria-label":u(m.value),title:u(m.value)}),{...o,default:()=>s(W,null,[s(Ql,F({ref:v,modelValue:l.value,"onUpdate:modelValue":S=>l.value=S,activator:"parent",contentClass:"v-select__content",disabled:K.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:U},Z.value),{default:()=>[i&&s(Gl,F({ref:h,selected:r.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:$,onFocusin:re,onScrollPassive:O,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var S,B,D;return[(S=o["prepend-item"])==null?void 0:S.call(o),!w.value.length&&!e.hideNoData&&(((B=o["no-data"])==null?void 0:B.call(o))??s(Te,{title:u(e.noDataText)},null)),s(ut,{ref:g,renderless:!0,items:w.value},{default:G=>{var pe;let{item:E,index:ae,itemRef:ee}=G;const ke=F(E.props,{ref:ee,key:ae,onClick:()=>q(E,null)});return((pe=o.item)==null?void 0:pe.call(o,{item:E,index:ae,props:ke}))??s(Te,F(ke,{role:"option"}),{prepend:Ze=>{let{isSelected:Je}=Ze;return s(W,null,[e.multiple&&!e.hideSelected?s(ql,{key:E.value,modelValue:Je,ripple:!1,tabindex:"-1"},null):void 0,E.props.prependAvatar&&s(he,{image:E.props.prependAvatar},null),E.props.prependIcon&&s(le,{icon:E.props.prependIcon},null)])}})}}),(D=o["append-item"])==null?void 0:D.call(o)]}})]}),f.value.map((S,B)=>{function D(ee){ee.stopPropagation(),ee.preventDefault(),q(S,!1)}const G={"onClick:close":D,onMousedown(ee){ee.preventDefault(),ee.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},E=c?!!o.chip:!!o.selection,ae=E?_l(c?o.chip({item:S,index:B,props:G}):o.selection({item:S,index:B})):void 0;if(!(E&&!ae))return s("div",{key:S.value,class:"v-select__selection"},[c?o.chip?s(ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:S.title}}},{default:()=>[ae]}):s(Xl,F({key:"chip",closable:e.closableChips,size:"small",text:S.title,disabled:S.props.disabled},G),null):ae??s("span",{class:"v-select__selection-text"},[S.title,e.multiple&&B<f.value.length-1&&s("span",{class:"v-select__selection-comma"},[Ll(",")])])])})]),"append-inner":function(){var G;for(var S=arguments.length,B=new Array(S),D=0;D<S;D++)B[D]=arguments[D];return s(W,null,[(G=o["append-inner"])==null?void 0:G.call(o,...B),e.menuIcon?s(le,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ne({isFocused:n,menu:l,select:q},t)}});export{ht as V,ql as a};
