import{T as le}from"./topheader-BCqezDC4.js";import{T as ue}from"./TokenModel-CuxTOOsi.js";import{p as B,i as D,a as c,b as ie,d as z,u as re,g as ce,s as pe,e as ve,f as de,h as A,j as fe,m as U,k as me,l as W,n as ye,q as ge,t as Y,v as d,w as he,x as _e,_ as xe,A as q,c as be,y as x,o as Ie,z as k,V as Se,B as F}from"./index-CPzORPkr.js";import{V as G}from"./VContainer-BpiexeS7.js";import{u as we}from"./ssrBoot-CpXkltiy.js";import"./gobotq-3Wa2au3z.js";import"./index-Cck9AI77.js";const P=Symbol.for("vuetify:layout"),Ve=Symbol.for("vuetify:layout-item"),K=1e3,$e=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function Ce(){const t=D(P);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const ze=(t,p,a,u)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const l of t){const f=p.get(l),g=a.get(l),h=u.get(l);if(!f||!g||!h)continue;const b={...s,[f.value]:parseInt(s[f.value],10)+(h.value?parseInt(g.value,10):0)};i.push({id:l,layer:b}),s=b}return i};function Ae(t){const p=D(P,null),a=c(()=>p?p.rootZIndex.value-100:K),u=ie([]),s=z(new Map),i=z(new Map),l=z(new Map),f=z(new Map),g=z(new Map),{resizeRef:h,contentRect:b}=re(),J=c(()=>{const o=new Map,v=t.overlaps??[];for(const e of v.filter(r=>r.includes(":"))){const[r,n]=e.split(":");if(!u.value.includes(r)||!u.value.includes(n))continue;const y=s.get(r),_=s.get(n),V=i.get(r),$=i.get(n);!y||!_||!V||!$||(o.set(n,{position:y.value,amount:parseInt(V.value,10)}),o.set(r,{position:_.value,amount:-parseInt($.value,10)}))}return o}),I=c(()=>{const o=[...new Set([...l.values()].map(e=>e.value))].sort((e,r)=>e-r),v=[];for(const e of o){const r=u.value.filter(n=>{var y;return((y=l.get(n))==null?void 0:y.value)===e});v.push(...r)}return ze(v,s,i,f)}),O=c(()=>!Array.from(g.values()).some(o=>o.value)),S=c(()=>I.value[I.value.length-1].layer),Q=c(()=>({"--v-layout-left":A(S.value.left),"--v-layout-right":A(S.value.right),"--v-layout-top":A(S.value.top),"--v-layout-bottom":A(S.value.bottom),...O.value?void 0:{transition:"none"}})),w=c(()=>I.value.slice(1).map((o,v)=>{let{id:e}=o;const{layer:r}=I.value[v],n=i.get(e),y=s.get(e);return{id:e,...r,size:Number(n.value),position:y.value}})),H=o=>w.value.find(v=>v.id===o),L=ce("createLayout"),E=pe(!1);ve(()=>{E.value=!0}),de(P,{register:(o,v)=>{let{id:e,order:r,position:n,layoutSize:y,elementSize:_,active:V,disableTransitions:$,absolute:oe}=v;l.set(e,r),s.set(e,n),i.set(e,y),f.set(e,V),$&&g.set(e,$);const N=fe(Ve,L==null?void 0:L.vnode).indexOf(o);N>-1?u.value.splice(N,0,e):u.value.push(e);const j=c(()=>w.value.findIndex(C=>C.id===e)),M=c(()=>a.value+I.value.length*2-j.value*2),ae=c(()=>{const C=n.value==="left"||n.value==="right",R=n.value==="right",se=n.value==="bottom",Z={[n.value]:0,zIndex:M.value,transform:`translate${C?"X":"Y"}(${(V.value?0:-110)*(R||se?-1:1)}%)`,position:oe.value||a.value!==K?"absolute":"fixed",...O.value?void 0:{transition:"none"}};if(!E.value)return Z;const m=w.value[j.value];if(!m)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const T=J.value.get(e);return T&&(m[T.position]+=T.amount),{...Z,height:C?`calc(100% - ${m.top}px - ${m.bottom}px)`:_.value?`${_.value}px`:void 0,left:R?void 0:`${m.left}px`,right:R?`${m.right}px`:void 0,top:n.value!=="bottom"?`${m.top}px`:void 0,bottom:n.value!=="top"?`${m.bottom}px`:void 0,width:C?_.value?`${_.value}px`:void 0:`calc(100% - ${m.left}px - ${m.right}px)`}}),ne=c(()=>({zIndex:M.value-1}));return{layoutItemStyles:ae,layoutItemScrimStyles:ne,zIndex:M}},unregister:o=>{l.delete(o),s.delete(o),i.delete(o),f.delete(o),g.delete(o),u.value=u.value.filter(v=>v!==o)},mainRect:S,mainStyles:Q,getLayoutItem:H,items:w,layoutRect:b,rootZIndex:a});const ee=c(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),te=c(()=>({zIndex:p?a.value:void 0,position:p?"relative":void 0,overflow:p?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:H,items:w,layoutRect:b,layoutRef:h}}const Le=B({...U(),...$e({fullHeight:!0}),...me()},"VApp"),Me=W()({name:"VApp",props:Le(),setup(t,p){let{slots:a}=p;const u=ye(t),{layoutClasses:s,getLayoutItem:i,items:l,layoutRef:f}=Ae(t),{rtlClasses:g}=ge();return Y(()=>{var h;return d("div",{ref:f,class:["v-application",u.themeClasses.value,s.value,g.value,t.class],style:[t.style]},[d("div",{class:"v-application__wrap"},[(h=a.default)==null?void 0:h.call(a)])])}),{getLayoutItem:i,items:l,theme:u}}}),Re=B({scrollable:Boolean,...U(),...he({tag:"main"})},"VMain"),Te=W()({name:"VMain",props:Re(),setup(t,p){let{slots:a}=p;const{mainStyles:u}=Ce(),{ssrBootStyles:s}=we();return Y(()=>d(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[u.value,s.value,t.style]},{default:()=>{var i,l;return[t.scrollable?d("div",{class:"v-main__scroller"},[(i=a.default)==null?void 0:i.call(a)]):(l=a.default)==null?void 0:l.call(a)]}})),{}}}),X=_e("v-stepper-header"),ke={components:{top_header:le},data:()=>({}),mounted(){ue.Api_is_login()||(q.SetGo("/"),q.SetAlert("未登录"))},methods:{}};function Pe(t,p,a,u,s,i){const l=F("top_header"),f=F("router-view");return Ie(),be(Me,null,{default:x(()=>[d(l),d(G,null,{default:x(()=>[d(X,null,{default:x(()=>[k("AIGC主页面")]),_:1})]),_:1}),d(G,null,{default:x(()=>[d(X,null,{default:x(()=>[k("当前为控制中心")]),_:1}),d(Se,null,{default:x(()=>[k("当前为测试版")]),_:1})]),_:1}),d(Te,null,{default:x(()=>[d(f)]),_:1})]),_:1})}const Fe=xe(ke,[["render",Pe]]);export{Fe as default};
