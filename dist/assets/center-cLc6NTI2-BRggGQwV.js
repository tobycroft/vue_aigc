import{u as se}from"./topheader-0IYwMmEf-BwNfIFeE.js";import{a as ne}from"./TokenModel-B5FLYtgf-D3Bu0gJP.js";import{e as P,Y as W,$ as ie,R as X,F as re,W as ve,j as q,Q as de,J as pe,f as fe,O as K,P as v,h as ce,o as C,a as me,B as ye,A as ge,b as he,c as be,d as f,i as M,g as Ie,k as Q,m as T,H as $e,Z as xe,n as I,p as B,q as Se}from"./index-2GhK7Pc3.js";import{C as k}from"./VContainer-CrqgRyvL-DkLkhJU8.js";import{i as _e}from"./ssrBoot-BNxG8Y-q-DphqTJ1q.js";import"./index-DOTyCMeZ-j8oI9t91.js";import"./gobotq-3Wa2au3z-DdkrL1Vq.js";import"./index-VZFVW0nk.js";const H=Symbol.for("vuetify:layout"),we=Symbol.for("vuetify:layout-item"),G=1e3,Re=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function Ae(){const t=K(H);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const Ce=(t,d,s,n)=>{let o={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...o}}];for(const u of t){const c=d.get(u),g=s.get(u),h=n.get(u);if(!c||!g||!h)continue;const $={...o,[c.value]:parseInt(o[c.value],10)+(h.value?parseInt(g.value,10):0)};i.push({id:u,layer:$}),o=$}return i};function Me(t){const d=K(H,null),s=v(()=>d?d.rootZIndex.value-100:G),n=ce([]),o=C(new Map),i=C(new Map),u=C(new Map),c=C(new Map),g=C(new Map),{resizeRef:h,contentRect:$}=me(),D=v(()=>{const l=new Map,p=t.overlaps??[];for(const e of p.filter(r=>r.includes(":"))){const[r,a]=e.split(":");if(!n.value.includes(r)||!n.value.includes(a))continue;const y=o.get(r),b=o.get(a),w=i.get(r),R=i.get(a);!y||!b||!w||!R||(l.set(a,{position:y.value,amount:parseInt(w.value,10)}),l.set(r,{position:b.value,amount:-parseInt(R.value,10)}))}return l}),x=v(()=>{const l=[...new Set([...u.values()].map(e=>e.value))].sort((e,r)=>e-r),p=[];for(const e of l){const r=n.value.filter(a=>{var y;return((y=u.get(a))==null?void 0:y.value)===e});p.push(...r)}return Ce(p,o,i,c)}),Z=v(()=>!Array.from(g.values()).some(l=>l.value)),S=v(()=>x.value[x.value.length-1].layer),U=v(()=>({"--v-layout-left":M(S.value.left),"--v-layout-right":M(S.value.right),"--v-layout-top":M(S.value.top),"--v-layout-bottom":M(S.value.bottom),...Z.value?void 0:{transition:"none"}})),_=v(()=>x.value.slice(1).map((l,p)=>{let{id:e}=l;const{layer:r}=x.value[p],a=i.get(e),y=o.get(e);return{id:e,...r,size:Number(a.value),position:y.value}})),j=l=>_.value.find(p=>p.id===l),J=ye("createLayout"),O=ge(!1);he(()=>{O.value=!0}),be(H,{register:(l,p)=>{let{id:e,order:r,position:a,layoutSize:y,elementSize:b,active:w,disableTransitions:R,absolute:le}=p;u.set(e,r),o.set(e,a),i.set(e,y),c.set(e,w),R&&g.set(e,R);const Y=Ie(we,J==null?void 0:J.vnode).indexOf(l);Y>-1?n.value.splice(Y,0,e):n.value.push(e);const E=v(()=>_.value.findIndex(A=>A.id===e)),z=v(()=>s.value+x.value.length*2-E.value*2),ae=v(()=>{const A=a.value==="left"||a.value==="right",L=a.value==="right",ue=a.value==="bottom",F={[a.value]:0,zIndex:z.value,transform:`translate${A?"X":"Y"}(${(w.value?0:-110)*(L||ue?-1:1)}%)`,position:le.value||s.value!==G?"absolute":"fixed",...Z.value?void 0:{transition:"none"}};if(!O.value)return F;const m=_.value[E.value];if(!m)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const V=D.value.get(e);return V&&(m[V.position]+=V.amount),{...F,height:A?`calc(100% - ${m.top}px - ${m.bottom}px)`:b.value?`${b.value}px`:void 0,left:L?void 0:`${m.left}px`,right:L?`${m.right}px`:void 0,top:a.value!=="bottom"?`${m.top}px`:void 0,bottom:a.value!=="top"?`${m.bottom}px`:void 0,width:A?b.value?`${b.value}px`:void 0:`calc(100% - ${m.left}px - ${m.right}px)`}}),oe=v(()=>({zIndex:z.value-1}));return{layoutItemStyles:ae,layoutItemScrimStyles:oe,zIndex:z}},unregister:l=>{u.delete(l),o.delete(l),i.delete(l),c.delete(l),g.delete(l),n.value=n.value.filter(p=>p!==l)},mainRect:S,mainStyles:U,getLayoutItem:j,items:_,layoutRect:$,rootZIndex:s});const ee=v(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),te=v(()=>({zIndex:d?s.value:void 0,position:d?"relative":void 0,overflow:d?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:j,items:_,layoutRect:$,layoutRef:h}}const ze=P({...W(),...Re({fullHeight:!0}),...ie()},"VApp"),Le=X()({name:"VApp",props:ze(),setup(t,d){let{slots:s}=d;const n=re(t),{layoutClasses:o,getLayoutItem:i,items:u,layoutRef:c}=Me(t),{rtlClasses:g}=ve();return q(()=>{var h;return f("div",{ref:c,class:["v-application",n.themeClasses.value,o.value,g.value,t.class],style:[t.style]},[f("div",{class:"v-application__wrap"},[(h=s.default)==null?void 0:h.call(s)])])}),{getLayoutItem:i,items:u,theme:n}}}),Ve=P({scrollable:Boolean,...W(),...de({tag:"main"})},"VMain"),Be=X()({name:"VMain",props:Ve(),setup(t,d){let{slots:s}=d;const{mainStyles:n}=Ae(),{ssrBootStyles:o}=_e();return q(()=>f(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[n.value,o.value,t.style]},{default:()=>{var i,u;return[t.scrollable?f("div",{class:"v-main__scroller"},[(i=s.default)==null?void 0:i.call(s)]):(u=s.default)==null?void 0:u.call(s)]}})),{}}}),N=pe("v-stepper-header"),He={components:{top_header:se},data:()=>({}),mounted(){ne.Api_is_login()||(Q.SetGo("/"),Q.SetAlert("未登录"))},methods:{}};function Pe(t,d,s,n,o,i){const u=T("top_header"),c=T("router-view");return $e(),xe(Le,null,{default:I(()=>[f(u),f(k,null,{default:I(()=>[f(N,null,{default:I(()=>[B("AIGC主页面")]),_:1})]),_:1}),f(k,null,{default:I(()=>[f(N,null,{default:I(()=>[B("当前为控制中心")]),_:1}),f(Se,null,{default:I(()=>[B("当前为测试版")]),_:1})]),_:1}),f(Be,null,{default:I(()=>[f(c)]),_:1})]),_:1})}const Te=fe(He,[["render",Pe]]);export{Te as default};
