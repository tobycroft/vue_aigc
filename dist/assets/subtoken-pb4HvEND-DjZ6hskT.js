import{l as ke}from"./Net-CpAMwQYd-GNWnwlkL.js";import{e as $,aj as q,G as mt,Y as Ce,a9 as Ae,u as yt,x as ht,ak as bt,Q as Le,$ as De,al as xt,R as E,aa as R,am as ae,W as kt,F as Ve,an as St,A as Pt,ac as ue,a as wt,P as S,z as F,j as G,ao as _t,ap as It,aq as Ft,D as $t,d,N as D,p as N,ab as Bt,f as Tt,h as V,ar as Ct,ad as C,as as ve,c as K,O as z,B as Oe,at as Ne,i as j,au as Ee,av as At,a3 as Z,aw as ie,ax as te,a0 as Se,ay as Lt,az as Dt,aA as X,aB as Pe,aC as we,aD as Vt,aE as Y,aF as ee,r as de,aG as Q,H as Ot,Z as Nt,n as A,aH as se,aI as J,a4 as Et,aJ as Mt,q as jt,U as Rt,aK as Gt}from"./index-2GhK7Pc3.js";import{C as qt}from"./VContainer-CrqgRyvL-DkLkhJU8.js";import{q as pe,h as Kt}from"./VSelect-L_63wK57-DeHFr9z8.js";import{m as zt}from"./VList-CmUa2Hto-CQy7AFPJ.js";import"./VTextField-CME-Ourc-CS42DhFZ.js";import"./index-DOTyCMeZ-j8oI9t91.js";import"./VSlideGroup-ZBxTPjAQ-CLBa8vZI.js";import"./TokenModel-B5FLYtgf-D3Bu0gJP.js";import"./index-VZFVW0nk.js";import"./ssrBoot-BNxG8Y-q-DphqTJ1q.js";function _e(e,l,t){return Object.keys(e).filter(a=>Dt(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=o=>e[n](o,t(o)),a),{})}function Wt(){const e=V([]);Ct(()=>e.value=[]);function l(t,a){e.value[a]=t}return{refs:e,updateRef:l}}const Ht=$({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:q,default:"$first"},prevIcon:{type:q,default:"$prev"},nextIcon:{type:q,default:"$next"},lastIcon:{type:q,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...mt(),...Ce(),...Ae(),...yt(),...ht(),...bt(),...Le({tag:"nav"}),...De(),...xt({variant:"text"})},"VPagination"),Ie=E()({name:"VPagination",props:Ht(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const n=R(e,"modelValue"),{t:o,n:u}=ae(),{isRtl:i}=kt(),{themeClasses:r}=Ve(e),{width:c}=St(),v=Pt(-1);ue(void 0,{scoped:!0});const{resizeRef:p}=wt(b=>{if(!b.length)return;const{target:k,contentRect:P}=b[0],I=k.querySelector(".v-pagination__list > *");if(!I)return;const T=P.width,M=I.offsetWidth+parseFloat(getComputedStyle(I).marginRight)*2;v.value=g(T,M)}),s=S(()=>parseInt(e.length,10)),f=S(()=>parseInt(e.start,10)),y=S(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):v.value>=0?v.value:g(c.value,58));function g(b,k){const P=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((b-k*P)/k).toFixed(2)))}const h=S(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(y.value<=0)return[];if(y.value===1)return[n.value];if(s.value<=y.value)return X(s.value,f.value);const b=y.value%2===0,k=b?y.value/2:Math.floor(y.value/2),P=b?k:k+1,I=s.value-k;if(P-n.value>=0)return[...X(Math.max(1,y.value-1),f.value),e.ellipsis,s.value];if(n.value-I>=(b?1:0)){const T=y.value-1,M=s.value-T+f.value;return[f.value,e.ellipsis,...X(T,M)]}else{const T=Math.max(1,y.value-3),M=T===1?n.value:n.value-Math.ceil(T/2)+f.value;return[f.value,e.ellipsis,...X(T,M),e.ellipsis,s.value]}});function m(b,k,P){b.preventDefault(),n.value=k,P&&a(P,k)}const{refs:_,updateRef:w}=Wt();ue({VPaginationBtn:{color:F(e,"color"),border:F(e,"border"),density:F(e,"density"),size:F(e,"size"),variant:F(e,"variant"),rounded:F(e,"rounded"),elevation:F(e,"elevation")}});const x=S(()=>h.value.map((b,k)=>{const P=I=>w(I,k);if(typeof b=="string")return{isActive:!1,key:`ellipsis-${k}`,page:b,props:{ref:P,ellipsis:!0,icon:!0,disabled:!0}};{const I=b===n.value;return{isActive:I,key:b,page:u(b),props:{ref:P,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:I?e.activeColor:e.color,"aria-current":I,"aria-label":o(I?e.currentPageAriaLabel:e.pageAriaLabel,b),onClick:T=>m(T,b)}}}})),B=S(()=>{const b=!!e.disabled||n.value<=f.value,k=!!e.disabled||n.value>=f.value+s.value-1;return{first:e.showFirstLastPage?{icon:i.value?e.lastIcon:e.firstIcon,onClick:P=>m(P,f.value,"first"),disabled:b,"aria-label":o(e.firstAriaLabel),"aria-disabled":b}:void 0,prev:{icon:i.value?e.nextIcon:e.prevIcon,onClick:P=>m(P,n.value-1,"prev"),disabled:b,"aria-label":o(e.previousAriaLabel),"aria-disabled":b},next:{icon:i.value?e.prevIcon:e.nextIcon,onClick:P=>m(P,n.value+1,"next"),disabled:k,"aria-label":o(e.nextAriaLabel),"aria-disabled":k},last:e.showFirstLastPage?{icon:i.value?e.firstIcon:e.lastIcon,onClick:P=>m(P,f.value+s.value-1,"last"),disabled:k,"aria-label":o(e.lastAriaLabel),"aria-disabled":k}:void 0}});function O(){var b;const k=n.value-f.value;(b=_.value[k])==null||b.$el.focus()}function W(b){b.key===Pe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,we(O)):b.key===Pe.right&&!e.disabled&&n.value<f.value+s.value-1&&(n.value=n.value+1,we(O))}return G(()=>d(e.tag,{ref:p,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":o(e.ariaLabel),onKeydown:W,"data-test":"v-pagination-root"},{default:()=>[d("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&d("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(B.value.first):d(D,C({_as:"VPaginationBtn"},B.value.first),null)]),d("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(B.value.prev):d(D,C({_as:"VPaginationBtn"},B.value.prev),null)]),x.value.map((b,k)=>d("li",{key:b.key,class:["v-pagination__item",{"v-pagination__item--is-active":b.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(b):d(D,C({_as:"VPaginationBtn"},b.props),{default:()=>[b.page]})])),d("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(B.value.next):d(D,C({_as:"VPaginationBtn"},B.value.next),null)]),e.showFirstLastPage&&d("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(B.value.last):d(D,C({_as:"VPaginationBtn"},B.value.last),null)])])]})),{}}}),Ut=$({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Me=Symbol.for("vuetify:data-table-pagination");function Qt(e){const l=R(e,"page",void 0,a=>+(a??1)),t=R(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function Jt(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=S(()=>t.value===-1?0:t.value*(l.value-1)),o=S(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),u=S(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));ve(()=>{l.value>u.value&&(l.value=u.value)});function i(s){t.value=s,l.value=1}function r(){l.value=se(l.value+1,1,u.value)}function c(){l.value=se(l.value-1,1,u.value)}function v(s){l.value=se(s,1,u.value)}const p={page:l,itemsPerPage:t,startIndex:n,stopIndex:o,pageCount:u,itemsLength:a,nextPage:r,prevPage:c,setPage:v,setItemsPerPage:i};return K(Me,p),p}function Yt(){const e=z(Me);if(!e)throw new Error("Missing pagination!");return e}function Zt(e){const l=Oe("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:o}=e,u=S(()=>o.value<=0?t.value:t.value.slice(a.value,n.value));return Ne(u,i=>{l.emit("update:currentItems",i)}),{paginatedItems:u}}const je=$({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Fe=E()({name:"VDataTableFooter",props:je(),setup(e,l){let{slots:t}=l;const{t:a}=ae(),{page:n,pageCount:o,startIndex:u,stopIndex:i,itemsLength:r,itemsPerPage:c,setItemsPerPage:v}=Yt(),p=S(()=>e.itemsPerPageOptions.map(s=>typeof s=="number"?{value:s,title:s===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(s)}:{...s,title:a(s.title)}));return G(()=>{var s;const f=Ie.filterProps(e);return d("div",{class:"v-data-table-footer"},[(s=t.prepend)==null?void 0:s.call(t),d("div",{class:"v-data-table-footer__items-per-page"},[d("span",null,[a(e.itemsPerPageText)]),d(Kt,{items:p.value,modelValue:c.value,"onUpdate:modelValue":y=>v(Number(y)),density:"compact",variant:"outlined","hide-details":!0},null)]),d("div",{class:"v-data-table-footer__info"},[d("div",null,[a(e.pageText,r.value?u.value+1:0,i.value,r.value)])]),d("div",{class:"v-data-table-footer__pagination"},[d(Ie,C({modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:o.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},f),null)])])}),{}}}),fe=_t({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return d(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:j(e.height),width:j(e.width),left:j(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),Xt=$({headers:Array},"DataTable-header"),Re=Symbol.for("vuetify:data-table-headers"),Ge={title:"",sortable:!1},ea={...Ge,width:48};function ta(){const e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(l=>({element:l,priority:0}));return{enqueue:(l,t)=>{let a=!1;for(let n=0;n<e.length;n++)if(e[n].priority>t){e.splice(n,0,{element:l,priority:t}),a=!0;break}a||e.push({element:l,priority:t})},size:()=>e.length,count:()=>{let l=0;if(!e.length)return 0;const t=Math.floor(e[0].priority);for(let a=0;a<e.length;a++)Math.floor(e[a].priority)===t&&(l+=1);return l},dequeue:()=>e.shift()}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)ce(t,l);return l}function qe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&qe(t.children,l);return l}function aa(e){if(e.key){if(e.key==="data-table-group")return Ge;if(["data-table-expand","data-table-select"].includes(e.key))return ea}}function ge(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>ge(t,l+1))):l}function la(e){let l=!1;function t(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o)if(u&&(o.fixed=!0),o.fixed)if(o.children)for(let i=o.children.length-1;i>=0;i--)t(o.children[i],!0);else l?isNaN(+o.width)&&Gt(`Multiple fixed columns should have a static width (key: ${o.key})`):o.lastFixed=!0,l=!0;else if(o.children)for(let i=o.children.length-1;i>=0;i--)t(o.children[i]);else l=!1}for(let o=e.length-1;o>=0;o--)t(e[o]);function a(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!o)return u;if(o.children){o.fixedOffset=u;for(const i of o.children)u=a(i,u)}else o.fixed&&(o.fixedOffset=u,u+=parseFloat(o.width||"0")||0);return u}let n=0;for(const o of e)n=a(o,n)}function na(e,l){const t=[];let a=0;const n=ta(e);for(;n.size()>0;){let o=n.count();const u=[];let i=1;for(;o>0;){const{element:r,priority:c}=n.dequeue(),v=l-a-ge(r);if(u.push({...r,rowspan:v??1,colspan:r.children?ce(r).length:1}),r.children)for(const p of r.children){const s=c%1+i/Math.pow(10,a+2);n.enqueue(p,a+v+s)}i+=1,o-=1}a+=1,t.push(u)}return{columns:e.map(o=>ce(o)).flat(),headers:t}}function Ke(e){const l=[];for(const t of e){const a={...aa(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),o=a.value??n??null,u={...a,key:n,value:o,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Ke(a.children):void 0};l.push(u)}return l}function oa(e,l){const t=V([]),a=V([]),n=V({}),o=V({}),u=V({});ve(()=>{var r,c,v;const p=(e.headers||Object.keys(e.items[0]??{}).map(m=>({key:m,title:Vt(m)}))).slice(),s=qe(p);(r=l==null?void 0:l.groupBy)!=null&&r.value.length&&!s.has("data-table-group")&&p.unshift({key:"data-table-group",title:"Group"}),(c=l==null?void 0:l.showSelect)!=null&&c.value&&!s.has("data-table-select")&&p.unshift({key:"data-table-select"}),(v=l==null?void 0:l.showExpand)!=null&&v.value&&!s.has("data-table-expand")&&p.push({key:"data-table-expand"});const f=Ke(p);la(f);const y=Math.max(...f.map(m=>ge(m)))+1,g=na(f,y);t.value=g.headers,a.value=g.columns;const h=g.headers.flat(1);for(const m of h)m.key&&(m.sortable&&(m.sort&&(n.value[m.key]=m.sort),m.sortRaw&&(o.value[m.key]=m.sortRaw)),m.filter&&(u.value[m.key]=m.filter))});const i={headers:t,columns:a,sortFunctions:n,sortRawFunctions:o,filterFunctions:u};return K(Re,i),i}function le(){const e=z(Re);if(!e)throw new Error("Missing headers!");return e}const ra={showSelectAll:!1,allSelected:()=>[],select:e=>{var l;let{items:t,value:a}=e;return new Set(a?[(l=t[0])==null?void 0:l.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},ze={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return ze.select({items:t,value:l,selected:a})}},We={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return We.select({items:t,value:l,selected:a})}},ia=$({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ee}},"DataTable-select"),He=Symbol.for("vuetify:data-table-selection");function sa(e,l){let{allItems:t,currentPage:a}=l;const n=R(e,"modelValue",e.modelValue,h=>new Set(Y(h).map(m=>{var _;return((_=t.value.find(w=>e.valueComparator(m,w.value)))==null?void 0:_.value)??m})),h=>[...h.values()]),o=S(()=>t.value.filter(h=>h.selectable)),u=S(()=>a.value.filter(h=>h.selectable)),i=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ra;case"all":return We;case"page":default:return ze}});function r(h){return Y(h).every(m=>n.value.has(m.value))}function c(h){return Y(h).some(m=>n.value.has(m.value))}function v(h,m){const _=i.value.select({items:h,value:m,selected:new Set(n.value)});n.value=_}function p(h){v([h],!r([h]))}function s(h){const m=i.value.selectAll({value:h,allItems:o.value,currentPage:u.value,selected:new Set(n.value)});n.value=m}const f=S(()=>n.value.size>0),y=S(()=>{const h=i.value.allSelected({allItems:o.value,currentPage:u.value});return!!h.length&&r(h)}),g={toggleSelect:p,select:v,selectAll:s,isSelected:r,isSomeSelected:c,someSelected:f,allSelected:y,showSelectAll:i.value.showSelectAll};return K(He,g),g}function ne(){const e=z(He);if(!e)throw new Error("Missing selection!");return e}const ua=$({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ue=Symbol.for("vuetify:data-table-sort");function da(e){const l=R(e,"sortBy"),t=F(e,"mustSort"),a=F(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function ca(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,o=r=>{if(r.key==null)return;let c=l.value.map(p=>({...p}))??[];const v=c.find(p=>p.key===r.key);v?v.order==="desc"?t.value?v.order="asc":c=c.filter(p=>p.key!==r.key):v.order="desc":a.value?c=[...c,{key:r.key,order:"asc"}]:c=[{key:r.key,order:"asc"}],l.value=c,n&&(n.value=1)};function u(r){return!!l.value.find(c=>c.key===r.key)}const i={sortBy:l,toggleSort:o,isSorted:u};return K(Ue,i),i}function va(){const e=z(Ue);if(!e)throw new Error("Missing sort!");return e}function pa(e,l,t,a,n){const o=ae();return{sortedItems:S(()=>t.value.length?fa(l.value,t.value,o.current.value,{...e.customKeySort,...a==null?void 0:a.value},n==null?void 0:n.value):l.value)}}function fa(e,l,t,a,n){const o=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return[...e].sort((u,i)=>{for(let r=0;r<l.length;r++){const c=l[r].key,v=l[r].order??"asc";if(v===!1)continue;let p=te(u.raw,c),s=te(i.raw,c),f=u.raw,y=i.raw;if(v==="desc"&&([p,s]=[s,p],[f,y]=[y,f]),n!=null&&n[c]){const g=n[c](f,y);if(!g)continue;return g}if(a!=null&&a[c]){const g=a[c](p,s);if(!g)continue;return g}if(p instanceof Date&&s instanceof Date)return p.getTime()-s.getTime();if([p,s]=[p,s].map(g=>g!=null?g.toString().toLocaleLowerCase():g),p!==s)return ee(p)&&ee(s)?0:ee(p)?-1:ee(s)?1:!isNaN(p)&&!isNaN(s)?Number(p)-Number(s):o.compare(p,s)}return 0})}const Qe=$({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:q,default:"$sortAsc"},sortDescIcon:{type:q,default:"$sortDesc"},headerProps:{type:Object},...It()},"VDataTableHeaders"),$e=E()({name:"VDataTableHeaders",props:Qe(),setup(e,l){let{slots:t}=l;const{toggleSort:a,sortBy:n,isSorted:o}=va(),{someSelected:u,allSelected:i,selectAll:r,showSelectAll:c}=ne(),{columns:v,headers:p}=le(),{loaderClasses:s}=Ft(e);function f(w,x){if(!(!e.sticky&&!w.fixed))return{position:"sticky",left:w.fixed?j(w.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${x})`:void 0}}function y(w){const x=n.value.find(B=>B.key===w.key);return x?x.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:g,backgroundColorStyles:h}=$t(e,"color"),m=S(()=>({headers:p.value,columns:v.value,toggleSort:a,isSorted:o,sortBy:n.value,someSelected:u.value,allSelected:i.value,selectAll:r,getSortIcon:y})),_=w=>{let{column:x,x:B,y:O}=w;const W=x.key==="data-table-select"||x.key==="data-table-expand",b=C(e.headerProps??{},x.headerProps??{});return d(fe,C({tag:"th",align:x.align,class:["v-data-table__th",{"v-data-table__th--sortable":x.sortable,"v-data-table__th--sorted":o(x),"v-data-table__th--fixed":x.fixed,"v-data-table__th--sticky":e.sticky},s.value],style:{width:j(x.width),minWidth:j(x.minWidth),...f(x,O)},colspan:x.colspan,rowspan:x.rowspan,onClick:x.sortable?()=>a(x):void 0,fixed:x.fixed,lastFixed:x.lastFixed,noPadding:W},b),{default:()=>{var k;const P=`header.${x.key}`,I={column:x,selectAll:r,isSorted:o,toggleSort:a,sortBy:n.value,someSelected:u.value,allSelected:i.value,getSortIcon:y};return t[P]?t[P](I):x.key==="data-table-select"?((k=t["header.data-table-select"])==null?void 0:k.call(t,I))??(c&&d(pe,{modelValue:i.value,indeterminate:u.value&&!i.value,"onUpdate:modelValue":r},null)):d("div",{class:"v-data-table-header__content"},[d("span",null,[x.title]),x.sortable&&d(de,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(x)},null),e.multiSort&&o(x)&&d("div",{key:"badge",class:["v-data-table-header__sort-badge",...g.value],style:h.value},[n.value.findIndex(T=>T.key===x.key)+1])])}})};G(()=>d(Z,null,[t.headers?t.headers(m.value):p.value.map((w,x)=>d("tr",null,[w.map((B,O)=>d(_,{column:B,x:O,y:x},null))])),e.loading&&d("tr",{class:"v-data-table-progress"},[d("th",{colspan:v.value.length},[d(At,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),ga=$({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Je=Symbol.for("vuetify:data-table-group");function ma(e){return{groupBy:R(e,"groupBy")}}function ya(e){const{groupBy:l,sortBy:t}=e,a=V(new Set),n=S(()=>l.value.map(c=>({...c,order:c.order??!1})).concat(t.value));function o(c){return a.value.has(c.id)}function u(c){const v=new Set(a.value);o(c)?v.delete(c.id):v.add(c.id),a.value=v}function i(c){function v(p){const s=[];for(const f of p.items)"type"in f&&f.type==="group"?s.push(...v(f)):s.push(f);return s}return v({type:"group",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:n,toggleGroup:u,opened:a,groupBy:l,extractRows:i,isGroupOpen:o};return K(Je,r),r}function Ye(){const e=z(Je);if(!e)throw new Error("Missing group!");return e}function ha(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=te(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function Ze(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ha(e,l[0]),o=[],u=l.slice(1);return n.forEach((i,r)=>{const c=l[0],v=`${a}_${c}_${r}`;o.push({depth:t,id:v,key:c,value:r,items:u.length?Ze(i,u,t+1,v):i,type:"group"})}),o}function Xe(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...Xe(a.items,l))):t.push(a);return t}function ba(e,l,t){return{flatItems:S(()=>{if(!l.value.length)return e.value;const a=Ze(e.value,l.value.map(n=>n.key));return Xe(a,t.value)})}}const xa=$({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ka=E()({name:"VDataTableGroupHeaderRow",props:xa(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:o}=Ye(),{isSelected:u,isSomeSelected:i,select:r}=ne(),{columns:c}=le(),v=S(()=>o([e.item]));return()=>d("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(p=>{var s,f;if(p.key==="data-table-group"){const y=a(e.item)?"$expand":"$next",g=()=>n(e.item);return((s=t["data-table-group"])==null?void 0:s.call(t,{item:e.item,count:v.value.length,props:{icon:y,onClick:g}}))??d(fe,{class:"v-data-table-group-header-row__column"},{default:()=>[d(D,{size:"small",variant:"text",icon:y,onClick:g},null),d("span",null,[e.item.value]),d("span",null,[N("("),v.value.length,N(")")])]})}if(p.key==="data-table-select"){const y=u(v.value),g=i(v.value)&&!y,h=m=>r(v.value,m);return((f=t["data-table-select"])==null?void 0:f.call(t,{props:{modelValue:y,indeterminate:g,"onUpdate:modelValue":h}}))??d("td",null,[d(pe,{modelValue:y,indeterminate:g,"onUpdate:modelValue":h},null)])}return d("td",null,null)})])}}),Sa=$({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),et=Symbol.for("vuetify:datatable:expanded");function Pa(e){const l=F(e,"expandOnClick"),t=R(e,"expanded",e.expanded,i=>new Set(i),i=>[...i.values()]);function a(i,r){const c=new Set(t.value);r?c.add(i.value):c.delete(i.value),t.value=c}function n(i){return t.value.has(i.value)}function o(i){a(i,!n(i))}const u={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:o};return K(et,u),u}function tt(){const e=z(et);if(!e)throw new Error("foo");return e}const wa=$({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie()},"VDataTableRow"),_a=E()({name:"VDataTableRow",props:wa(),setup(e,l){let{slots:t}=l;const{isSelected:a,toggleSelect:n}=ne(),{isExpanded:o,toggleExpand:u}=tt(),{columns:i}=le();G(()=>d("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&i.value.map((r,c)=>{const v=e.item,p=`item.${r.key}`,s={index:e.index,item:v.raw,internalItem:v,value:te(v.columns,r.key),column:r,isSelected:a,toggleSelect:n,isExpanded:o,toggleExpand:u},f=typeof e.cellProps=="function"?e.cellProps({index:s.index,item:s.item,internalItem:s.internalItem,value:s.value,column:r}):e.cellProps,y=typeof r.cellProps=="function"?r.cellProps({index:s.index,item:s.item,internalItem:s.internalItem,value:s.value}):r.cellProps;return d(fe,C({align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},f,y),{default:()=>{var g,h;return t[p]?t[p](s):r.key==="data-table-select"?((g=t["item.data-table-select"])==null?void 0:g.call(t,s))??d(pe,{disabled:!v.selectable,modelValue:a([v]),onClick:Se(()=>n(v),["stop"])},null):r.key==="data-table-expand"?((h=t["item.data-table-expand"])==null?void 0:h.call(t,s))??d(D,{icon:o(v)?"$collapse":"$expand",size:"small",variant:"text",onClick:Se(()=>u(v),["stop"])},null):Lt(s.value)}})})]))}}),at=$({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Be=E()({name:"VDataTableRows",inheritAttrs:!1,props:at(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=le(),{expandOnClick:o,toggleExpand:u,isExpanded:i}=tt(),{isSelected:r,toggleSelect:c}=ne(),{toggleGroup:v,isGroupOpen:p}=Ye(),{t:s}=ae();return G(()=>{var f,y;return e.loading&&(!e.items.length||a.loading)?d("tr",{class:"v-data-table-rows-loading",key:"loading"},[d("td",{colspan:n.value.length},[((f=a.loading)==null?void 0:f.call(a))??s(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?d("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[d("td",{colspan:n.value.length},[((y=a["no-data"])==null?void 0:y.call(a))??s(e.noDataText)])]):d(Z,null,[e.items.map((g,h)=>{var m;if(g.type==="group"){const x={index:h,item:g,columns:n.value,isExpanded:i,toggleExpand:u,isSelected:r,toggleSelect:c,toggleGroup:v,isGroupOpen:p};return a["group-header"]?a["group-header"](x):d(ka,C({key:`group-header_${g.id}`,item:g},_e(t,":group-header",()=>x)),a)}const _={index:h,item:g.raw,internalItem:g,columns:n.value,isExpanded:i,toggleExpand:u,isSelected:r,toggleSelect:c},w={..._,props:C({key:`item_${g.key??g.index}`,onClick:o.value?()=>{u(g)}:void 0,index:h,item:g,cellProps:e.cellProps},_e(t,":row",()=>_),typeof e.rowProps=="function"?e.rowProps({item:_.item,index:_.index,internalItem:_.internalItem}):e.rowProps)};return d(Z,{key:w.props.key},[a.item?a.item(w):d(_a,w.props,a),i(g)&&((m=a["expanded-row"])==null?void 0:m.call(a,_))])})])}),{}}}),lt=$({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Ce(),...Ae(),...Le(),...De()},"VTable"),Te=E()({name:"VTable",props:lt(),setup(e,l){let{slots:t,emit:a}=l;const{themeClasses:n}=Ve(e),{densityClasses:o}=Bt(e);return G(()=>d(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,o.value,e.class],style:e.style},{default:()=>{var u,i,r;return[(u=t.top)==null?void 0:u.call(t),t.default?d("div",{class:"v-table__wrapper",style:{height:j(e.height)}},[d("table",null,[t.default()])]):(i=t.wrapper)==null?void 0:i.call(t),(r=t.bottom)==null?void 0:r.call(t)]}})),{}}}),Ia=$({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Fa(e,l,t,a){const n=e.returnObject?l:J(l,e.itemValue),o=J(l,e.itemSelectable,!0),u=a.reduce((i,r)=>(r.key!=null&&(i[r.key]=J(l,r.value)),i),{});return{type:"item",key:e.returnObject?J(l,e.itemValue):n,index:t,value:n,selectable:o,columns:u,raw:l}}function $a(e,l,t){return l.map((a,n)=>Fa(e,a,n,t))}function Ba(e,l){return{items:S(()=>$a(e,e.items,l.value))}}function Ta(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:o}=e;const u=Oe("VDataTable"),i=S(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:o.value}));let r=null;Ne(i,()=>{Ee(r,i.value)||((r==null?void 0:r.search)!==i.value.search&&(l.value=1),u.emit("update:options",i.value),r=i.value)},{deep:!0,immediate:!0})}const Ca=(e,l,t)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),Aa=$({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function La(e,l,t){var a;const n=[],o=(t==null?void 0:t.default)??Ca,u=t!=null&&t.filterKeys?Y(t.filterKeys):!1,i=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return n;e:for(let r=0;r<e.length;r++){const[c,v=c]=Y(e[r]),p={},s={};let f=-1;if(l&&!(t!=null&&t.noFilter)){if(typeof c=="object"){const h=u||Object.keys(v);for(const m of h){const _=J(v,m),w=(a=t==null?void 0:t.customKeyFilter)==null?void 0:a[m];if(f=w?w(_,l,c):o(_,l,c),f!==-1&&f!==!1)w?p[m]=f:s[m]=f;else if((t==null?void 0:t.filterMode)==="every")continue e}}else f=o(c,l,c),f!==-1&&f!==!1&&(s.title=f);const y=Object.keys(s).length,g=Object.keys(p).length;if(!y&&!g||(t==null?void 0:t.filterMode)==="union"&&g!==i&&!y||(t==null?void 0:t.filterMode)==="intersection"&&(g!==i||!y))continue}n.push({index:r,matches:{...s,...p}})}return n}function Da(e,l,t,a){const n=V([]),o=V(new Map),u=S(()=>a!=null&&a.transform?Q(l).map(r=>[r,a.transform(r)]):Q(l));ve(()=>{const r=typeof t=="function"?t():Q(t),c=typeof r!="string"&&typeof r!="number"?"":String(r),v=La(u.value,c,{customKeyFilter:{...e.customKeyFilter,...Q(a==null?void 0:a.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),p=Q(l),s=[],f=new Map;v.forEach(y=>{let{index:g,matches:h}=y;const m=p[g];s.push(m),f.set(m.value,h)}),n.value=s,o.value=f});function i(r){return o.value.get(r.value)}return{filteredItems:n,filteredMatches:o,getMatches:i}}const Va=$({...at(),width:[String,Number],search:String,...Sa(),...ga(),...Xt(),...Ia(),...ia(),...ua(),...Qe(),...lt()},"DataTable"),Oa=$({...Ut(),...Va(),...Aa(),...je()},"VDataTable"),Na=E()({name:"VDataTable",props:Oa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=ma(e),{sortBy:o,multiSort:u,mustSort:i}=da(e),{page:r,itemsPerPage:c}=Qt(e),{columns:v,headers:p,sortFunctions:s,sortRawFunctions:f,filterFunctions:y}=oa(e,{groupBy:n,showSelect:F(e,"showSelect"),showExpand:F(e,"showExpand")}),{items:g}=Ba(e,v),h=F(e,"search"),{filteredItems:m}=Da(e,g,h,{transform:H=>H.columns,customKeyFilter:y}),{toggleSort:_}=ca({sortBy:o,multiSort:u,mustSort:i,page:r}),{sortByWithGroups:w,opened:x,extractRows:B,isGroupOpen:O,toggleGroup:W}=ya({groupBy:n,sortBy:o}),{sortedItems:b}=pa(e,m,w,s,f),{flatItems:k}=ba(b,n,x),P=S(()=>k.value.length),{startIndex:I,stopIndex:T,pageCount:M,setItemsPerPage:nt}=Jt({page:r,itemsPerPage:c,itemsLength:P}),{paginatedItems:oe}=Zt({items:k,startIndex:I,stopIndex:T,itemsPerPage:c}),re=S(()=>B(oe.value)),{isSelected:ot,select:rt,selectAll:it,toggleSelect:st,someSelected:ut,allSelected:dt}=sa(e,{allItems:g,currentPage:re}),{isExpanded:ct,toggleExpand:vt}=Pa(e);Ta({page:r,itemsPerPage:c,sortBy:o,groupBy:n,search:h}),ue({VDataTableRows:{hideNoData:F(e,"hideNoData"),noDataText:F(e,"noDataText"),loading:F(e,"loading"),loadingText:F(e,"loadingText")}});const L=S(()=>({page:r.value,itemsPerPage:c.value,sortBy:o.value,pageCount:M.value,toggleSort:_,setItemsPerPage:nt,someSelected:ut.value,allSelected:dt.value,isSelected:ot,select:rt,selectAll:it,toggleSelect:st,isExpanded:ct,toggleExpand:vt,isGroupOpen:O,toggleGroup:W,items:re.value.map(H=>H.raw),internalItems:re.value,groupedItems:oe.value,columns:v.value,headers:p.value}));return G(()=>{const H=Fe.filterProps(e),pt=$e.filterProps(e),ft=Be.filterProps(e),gt=Te.filterProps(e);return d(Te,C({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},gt),{top:()=>{var U;return(U=a.top)==null?void 0:U.call(a,L.value)},default:()=>{var U,me,ye,he,be,xe;return a.default?a.default(L.value):d(Z,null,[(U=a.colgroup)==null?void 0:U.call(a,L.value),d("thead",null,[d($e,pt,a)]),(me=a.thead)==null?void 0:me.call(a,L.value),d("tbody",null,[(ye=a["body.prepend"])==null?void 0:ye.call(a,L.value),a.body?a.body(L.value):d(Be,C(t,ft,{items:oe.value}),a),(he=a["body.append"])==null?void 0:he.call(a,L.value)]),(be=a.tbody)==null?void 0:be.call(a,L.value),(xe=a.tfoot)==null?void 0:xe.call(a,L.value)])},bottom:()=>a.bottom?a.bottom(L.value):d(Z,null,[d(zt,null,null),d(Fe,H,{prepend:a["footer.prepend"]})])})}),{}}}),Ea={data(){return{team:this.$route.query,tokenList:[],headers:[{title:"ID",key:"id"},{title:"Key",key:"key"},{title:"剩余量",key:"amount"},{title:"变动时间",key:"change_date"},{title:"操作",key:"actions",sortable:!1}]}},mounted(){this.fetchTokenList()},methods:{async fetchTokenList(){try{const e=await new ke("/v1/team/subtoken/list").PostFormData(this.team);e.code===0?this.tokenList=e.data:console.error("Failed to fetch token list:",e.echo)}catch(e){console.error("Failed to fetch token list:",e)}},async deleteToken(e){try{const l=await new ke("/v1/team/subtoken/delete").PostFormData({id:e,team_id:this.team.team_id});l.code===0?this.tokenList=this.tokenList.filter(t=>t.id!==e):console.error("Failed to delete token:",l.echo)}catch(l){console.error("Failed to delete token:",l)}},editToken(e){this.$router.push({path:"/v1/team/subtoken/edit",query:{id:e,team_id:this.team.team_id}})},addToken(){this.$router.push({path:"/v1/team/subtoken/add",query:{team_id:this.team.team_id}})},initialize(){this.tokenList=[]},goBack(){this.$router.push({path:"/v1/user"})}}};function Ma(e,l,t,a,n,o){return Ot(),Nt(qt,null,{default:A(()=>[d(Rt,null,{default:A(()=>[d(Et,null,{default:A(()=>[d(D,{onClick:o.goBack,color:"grey",block:"",class:"mt-4"},{default:A(()=>[N("返回")]),_:1},8,["onClick"]),N(" 团队 Token 列表 ")]),_:1}),d(Mt,null,{default:A(()=>[d(D,{color:"primary",onClick:o.addToken},{default:A(()=>[N("添加")]),_:1},8,["onClick"])]),_:1}),d(jt,null,{default:A(()=>[d(Na,{headers:n.headers,items:n.tokenList,"item-key":"id"},{"item.actions":A(({item:u})=>[d(de,{class:"me-2",size:"small",onClick:i=>o.editToken(u.id)},{default:A(()=>[N("mdi-pencil")]),_:2},1032,["onClick"]),d(de,{size:"small",onClick:i=>o.deleteToken(u.id)},{default:A(()=>[N("mdi-delete")]),_:2},1032,["onClick"])]),"no-data":A(()=>[d(D,{color:"primary",onClick:o.initialize},{default:A(()=>[N("Reset")]),_:1},8,["onClick"])]),_:1},8,["headers","items"])]),_:1})]),_:1})]),_:1})}const Ya=Tt(Ea,[["render",Ma]]);export{Ya as default};
