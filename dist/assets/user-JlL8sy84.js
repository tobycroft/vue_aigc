import{T as K}from"./topheader-BXI_QbNY.js";import L from"./info-Bj8tT4uK.js";import Q from"./team-WNtfEjMu.js";import{p as O,a4 as Z,a5 as ee,l as U,a6 as te,b as z,a as T,t as X,E as M,v as s,a2 as A,a7 as _,a8 as ae,a9 as oe,aa as se,ab as le,w as ne,ac as re,ad as ie,N as de,O as d,ae as ce,h as ue,af as me,_ as be,a0 as fe,y as S,c as N,X as R,o as p,z as G,B as V}from"./index-VZFVW0nk.js";import{m as ge,V as D}from"./VSlideGroup-Dh5S2XxA.js";import"./gobotq-3Wa2au3z.js";import"./index-DIGyYLhl.js";import"./Net-CA0dFTL_.js";import"./TokenModel-epR9isAp.js";import"./moment-Cl4UOzQZ.js";import"./VContainer-C4QVQAnP.js";import"./VRow-Z2HevRlu.js";import"./VList-CRdh8l07.js";import"./ssrBoot-A0jDN1F2.js";const F=Symbol.for("vuetify:v-tabs"),ve=O({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Z(ee({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),B=U()({name:"VTab",props:ve(),setup(e,t){let{slots:l,attrs:v}=t;const{textColorClasses:n,textColorStyles:h}=te(e,"sliderColor"),r=z(),c=z(),a=T(()=>e.direction==="horizontal"),o=T(()=>{var u,i;return((i=(u=r.value)==null?void 0:u.group)==null?void 0:i.isSelected.value)??!1});function H(u){var P,$;let{value:i}=u;if(i){const C=($=(P=r.value)==null?void 0:P.$el.parentElement)==null?void 0:$.querySelector(".v-tab--selected .v-tab__slider"),k=c.value;if(!C||!k)return;const I=getComputedStyle(C).color,m=C.getBoundingClientRect(),b=k.getBoundingClientRect(),x=a.value?"x":"y",y=a.value?"X":"Y",w=a.value?"right":"bottom",f=a.value?"width":"height",Y=m[x],j=b[x],g=Y>j?m[w]-b[w]:m[x]-b[x],q=Math.sign(g)>0?a.value?"right":"bottom":Math.sign(g)<0?a.value?"left":"top":"center",W=(Math.abs(g)+(Math.sign(g)<0?m[f]:b[f]))/Math.max(m[f],b[f])||0,J=m[f]/b[f]||0,E=1.5;oe(k,{backgroundColor:[I,"currentcolor"],transform:[`translate${y}(${g}px) scale${y}(${J})`,`translate${y}(${g/E}px) scale${y}(${(W-1)/E+1})`,"none"],transformOrigin:Array(3).fill(q)},{duration:225,easing:se})}}return X(()=>{const u=M.filterProps(e);return s(M,_({symbol:F,ref:r,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},u,v,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":H}),{...l,default:()=>{var i;return s(A,null,[((i=l.default)==null?void 0:i.call(l))??e.text,!e.hideSlider&&s("div",{ref:c,class:["v-tab__slider",n.value],style:h.value},null)])}})}),ae({},r)}});function he(e){return e?e.map(t=>me(t)?t:{text:t,value:t}):[]}const xe=O({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ge({mandatory:"force"}),...le(),...ne()},"VTabs"),ye=U()({name:"VTabs",props:xe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const v=re(e,"modelValue"),n=T(()=>he(e.items)),{densityClasses:h}=ie(e),{backgroundColorClasses:r,backgroundColorStyles:c}=de(d(e,"bgColor"));return ce({VTab:{color:d(e,"color"),direction:d(e,"direction"),stacked:d(e,"stacked"),fixed:d(e,"fixedTabs"),sliderColor:d(e,"sliderColor"),hideSlider:d(e,"hideSlider")}}),X(()=>{const a=D.filterProps(e);return s(D,_(a,{modelValue:v.value,"onUpdate:modelValue":o=>v.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,r.value,e.class],style:[{"--v-tabs-height":ue(e.height)},c.value,e.style],role:"tablist",symbol:F}),{default:()=>[l.default?l.default():n.value.map(o=>s(B,_(o,{key:o.text}),null))]})}),{}}}),Ce={components:{info:L,team:Q,Topheader:K},data(){return{tab:0}},methods:{changetab(){}},mounted(){}};function ke(e,t,l,v,n,h){const r=V("Topheader"),c=V("info"),a=V("team");return p(),fe(A,null,[s(r),s(ye,{modelValue:n.tab,"onUpdate:modelValue":t[0]||(t[0]=o=>n.tab=o),onClick:h.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:S(()=>[s(B,null,{default:S(()=>[G("我的信息")]),_:1}),s(B,null,{default:S(()=>[G("我的团队")]),_:1})]),_:1},8,["modelValue","onClick"]),n.tab===0?(p(),N(c,{key:0})):R("",!0),n.tab===1?(p(),N(a,{key:1})):R("",!0)],64)}const De=be(Ce,[["render",ke]]);export{De as default};
