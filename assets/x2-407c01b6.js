import{S as K,i as U,s as Z,G as ge,e as w,h as O,z as R,l as C,I as Y,q as S,J as be,K as he,N as ye,O as we,t as k,b as z,v as M,w as ve,Q as ke,R as Le,T as W,U as $,m as Ce,g as j,f as B,D as re,j as A,k as Me,n as h,p as x,E as P,V as ee,W as ze,X as Oe,Y as F,C as He,Z as Se,L as Te,c as D,a as E,d as I,o as Be,H as De,r as te,u as ne,M as Ee,x as G,y as Q,A as V,_ as Ie,$ as Ae}from"./Legend-7948e5f4.js";import{_ as Ne,J as qe,G as Je}from"./@vite-plugin-wasm-pack@wasm-od2net-acbe675d.js";import{g as Re,S as je,L as Pe}from"./SidebarControls-e36a49cf.js";function Fe(a){let e,t,l,n,o,i,r;const s=a[16].default,u=ge(s,a,a[15],null);return{c(){e=w("div"),u&&u.c(),O(e,"tabindex",t=a[1]?0:void 0),O(e,"role",l=a[1]?"button":void 0),R(e,"z-index",a[2])},m(f,d){C(f,e,d),u&&u.m(e,null),o=!0,i||(r=[Y(a[6].call(null,e)),Y(n=Ge.call(null,e,a[0])),S(e,"click",a[17]),S(e,"dblclick",a[18]),S(e,"contextmenu",a[19]),S(e,"mouseenter",a[20]),S(e,"mouseleave",a[21]),S(e,"mousemove",a[22]),S(e,"keydown",a[7])],i=!0)},p(f,[d]){u&&u.p&&(!o||d&32768)&&be(u,s,f,f[15],o?ye(s,f[15],d,null):he(f[15]),null),(!o||d&2&&t!==(t=f[1]?0:void 0))&&O(e,"tabindex",t),(!o||d&2&&l!==(l=f[1]?"button":void 0))&&O(e,"role",l),n&&we(n.update)&&d&1&&n.update.call(null,f[0]),d&4&&R(e,"z-index",f[2])},i(f){o||(k(u,f),o=!0)},o(f){z(u,f),o=!1},d(f){f&&M(e),u&&u.d(f),i=!1,ve(r)}}}function Ge(a,e){const t=a.className;function l(n){n?a.className=`${t} ${n}`:a.className=t}return l(e),{update:l}}function We(a,e,t){let l,n,o,{$$slots:i={},$$scope:r}=e,{lngLat:s}=e,{class:u=void 0}=e,{interactive:f=!0}=e,{asButton:d=!1}=e,{draggable:_=!1}=e,{feature:g=null}=e,{offset:v=void 0}=e,{zIndex:y=void 0}=e;const m=ke(),{map:b,layerEvent:p,self:L}=Le();W(a,b,c=>t(24,o=c)),W(a,p,c=>t(23,l=c)),W(a,L,c=>t(14,n=c));function T(c){$(L,n=new Ce.Marker({element:c,draggable:_,offset:v}).setLngLat(s).addTo(o),n);const N=()=>H("dragstart"),q=()=>{X(),H("drag")},J=()=>{X(),H("dragend")};return _&&(n.on("dragstart",N),n.on("drag",q),n.on("dragend",J)),{destroy(){_&&(n==null||n.off("dragstart",N),n==null||n.off("drag",q),n==null||n.off("dragend",J)),n==null||n.remove()}}}function X(){let c=n==null?void 0:n.getLngLat();c&&(Array.isArray(s)?t(9,s=[c.lng,c.lat]):s&&"lon"in s?t(9,s={lon:c.lng,lat:c.lat}):t(9,s=c))}function ue(c){c.key===" "&&(c.preventDefault(),c.stopPropagation(),H("click"))}function H(c){if(!f)return;let N=n==null?void 0:n.getLngLat();if(!N)return;const q=[N.lng,N.lat];let J={map:o,marker:n,lngLat:q,features:[{type:"Feature",properties:(g==null?void 0:g.properties)??{},geometry:{type:"Point",coordinates:q}}]};$(p,l={...J,layerType:"marker",type:c},l),m(c,J)}const fe=()=>H("click"),ce=()=>H("dblclick"),_e=()=>H("contextmenu"),de=c=>{H("mouseenter")},me=()=>{H("mouseleave")},pe=()=>H("mousemove");return a.$$set=c=>{"lngLat"in c&&t(9,s=c.lngLat),"class"in c&&t(0,u=c.class),"interactive"in c&&t(10,f=c.interactive),"asButton"in c&&t(1,d=c.asButton),"draggable"in c&&t(11,_=c.draggable),"feature"in c&&t(12,g=c.feature),"offset"in c&&t(13,v=c.offset),"zIndex"in c&&t(2,y=c.zIndex),"$$scope"in c&&t(15,r=c.$$scope)},a.$$.update=()=>{a.$$.dirty&16896&&(n==null||n.setLngLat(s)),a.$$.dirty&24576&&(n==null||n.setOffset(v??[0,0]))},[u,d,y,b,p,L,T,ue,H,s,f,_,g,v,n,r,i,fe,ce,_e,de,me,pe]}class Ke extends K{constructor(e){super(),U(this,e,We,Fe,Z,{lngLat:9,class:0,interactive:10,asButton:1,draggable:11,feature:12,offset:13,zIndex:2})}}const Ue='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',{Map:Ze}=Re;function ae(a,e,t){const l=a.slice();return l[6]=e[t][0],l[7]=e[t][1],l[8]=e,l[9]=t,l}function le(a){let e,t=[],l=new Ze,n=ee(a[1].entries());const o=i=>i[6];for(let i=0;i<n.length;i+=1){let r=ae(a,n,i),s=o(r);l.set(s,t[i]=se(s,r))}return{c(){e=w("ul");for(let i=0;i<t.length;i+=1)t[i].c()},m(i,r){C(i,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(i,r){r&2&&(n=ee(i[1].entries()),t=ze(t,r,o,1,i,n,l,e,Se,se,null,ae))},d(i){i&&M(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function se(a,e){let t,l,n=e[6]+"",o,i,r,s,u;function f(){e[4].call(i,e[8],e[9])}return{key:a,first:null,c(){t=w("li"),l=w("label"),o=j(n),i=w("input"),r=B(),O(i,"type","number"),O(i,"min","1.0"),O(i,"step","0.1"),this.first=t},m(d,_){C(d,t,_),h(t,l),h(l,o),h(l,i),A(i,e[7]),h(t,r),s||(u=S(i,"input",f),s=!0)},p(d,_){e=d,_&2&&n!==(n=e[6]+"")&&Oe(o,n),_&2&&F(i.value)!==e[7]&&A(i,e[7])},d(d){d&&M(t),s=!1,u()}}}function Qe(a){let e,t,l,n,o,i,r,s,u,f,d,_=a[0]=="OsmHighwayType"&&le(a);return{c(){e=w("div"),t=w("label"),l=j(`Cost function:
    `),n=w("select"),o=w("option"),o.textContent="Distance",i=w("option"),i.textContent="Avoid main roads",r=w("option"),r.textContent="Set a weight per OSM highway type",s=B(),_&&_.c(),u=re(),o.__value="Distance",A(o,o.__value),i.__value="AvoidMainRoads",A(i,i.__value),r.__value="OsmHighwayType",A(r,r.__value),a[0]===void 0&&Me(()=>a[3].call(n))},m(g,v){C(g,e,v),h(e,t),h(t,l),h(t,n),h(n,o),h(n,i),h(n,r),x(n,a[0],!0),C(g,s,v),_&&_.m(g,v),C(g,u,v),f||(d=S(n,"change",a[3]),f=!0)},p(g,[v]){v&1&&x(n,g[0]),g[0]=="OsmHighwayType"?_?_.p(g,v):(_=le(g),_.c(),_.m(u.parentNode,u)):_&&(_.d(1),_=null)},i:P,o:P,d(g){g&&(M(e),M(s),M(u)),_&&_.d(g),f=!1,d()}}}function Ve(a,e,t){let{cost:l}=e,n="Distance",o=new Map(["cycleway","footway","living_street","motorway","motorway_link","path","pedestrian","primary","primary_link","residential","secondary","secondary_link","service","steps","tertiary","tertiary_link","track","trunk","trunk_link","unclassified"].map(u=>[u,1]));function i(u){u=="OsmHighwayType"?t(2,l={OsmHighwayType:o}):t(2,l=u)}function r(){n=He(this),t(0,n)}function s(u,f){u[f][1]=F(this.value),t(1,o)}return a.$$set=u=>{"cost"in u&&t(2,l=u.cost)},a.$$.update=()=>{a.$$.dirty&1&&i(n)},[n,o,l,r,s]}class Xe extends K{constructor(e){super(),U(this,e,Ve,Qe,Z,{cost:2})}}function ie(a){let e,t,l,n,o,i,r,s,u,f,d,_;function g(y){a[14](y)}let v={};return a[1]!==void 0&&(v.cost=a[1]),s=new Xe({props:v}),G.push(()=>Q(s,"cost",g)),{c(){e=w("div"),t=w("label"),l=j("Max requests (limit for faster updates):"),n=w("br"),o=B(),i=w("input"),r=B(),D(s.$$.fragment),O(i,"type","number"),O(i,"min",1)},m(y,m){C(y,e,m),h(e,t),h(t,l),h(t,n),h(t,o),h(t,i),A(i,a[0]),C(y,r,m),E(s,y,m),f=!0,d||(_=S(i,"input",a[13]),d=!0)},p(y,m){m&1&&F(i.value)!==y[0]&&A(i,y[0]);const b={};!u&&m&2&&(u=!0,b.cost=y[1],V(()=>u=!1)),s.$set(b)},i(y){f||(k(s.$$.fragment,y),f=!0)},o(y){z(s.$$.fragment,y),f=!1},d(y){y&&(M(e),M(r)),I(s,y),d=!1,_()}}}function oe(a){let e,t,l,n;return l=new je({props:{outputMetadata:a[5].metadata,map:a[2],controls:a[7]}}),{c(){e=w("hr"),t=B(),D(l.$$.fragment)},m(o,i){C(o,e,i),C(o,t,i),E(l,o,i),n=!0},p(o,i){const r={};i&32&&(r.outputMetadata=o[5].metadata),i&4&&(r.map=o[2]),l.$set(r)},i(o){n||(k(l.$$.fragment,o),n=!0)},o(o){z(l.$$.fragment,o),n=!1},d(o){o&&(M(e),M(t)),I(l,o)}}}function Ye(a){let e,t,l,n,o,i,r,s,u,f,d,_,g,v,y;t=new De({props:{app:"interactive"}});let m=a[3]&&ie(a),b=a[5].metadata&&oe(a);return{c(){e=w("div"),D(t.$$.fragment),l=B(),n=w("label"),o=j("Open a "),i=w("i"),i.textContent=".bin",r=j(" network file or an "),s=w("i"),s.textContent=".osm.pbf",u=B(),f=w("input"),d=B(),m&&m.c(),_=B(),b&&b.c(),O(f,"type","file"),O(e,"slot","left")},m(p,L){C(p,e,L),E(t,e,null),h(e,l),h(e,n),h(n,o),h(n,i),h(n,r),h(n,s),h(n,u),h(n,f),a[12](f),h(e,d),m&&m.m(e,null),h(e,_),b&&b.m(e,null),g=!0,v||(y=S(f,"change",a[8]),v=!0)},p(p,L){p[3]?m?(m.p(p,L),L&8&&k(m,1)):(m=ie(p),m.c(),k(m,1),m.m(e,_)):m&&(te(),z(m,1,1,()=>{m=null}),ne()),p[5].metadata?b?(b.p(p,L),L&32&&k(b,1)):(b=oe(p),b.c(),k(b,1),b.m(e,null)):b&&(te(),z(b,1,1,()=>{b=null}),ne())},i(p){g||(k(t.$$.fragment,p),k(m),k(b),g=!0)},o(p){z(t.$$.fragment,p),z(m),z(b),g=!1},d(p){p&&M(e),I(t),a[12](null),m&&m.d(),b&&b.d(),v=!1,y()}}}function $e(a){let e,t;return{c(){e=new Ae(!1),t=re(),e.a=t},m(l,n){e.m(Ue,l,n),C(l,t,n)},p:P,d(l){l&&(M(t),e.d())}}}function xe(a){let e,t;return e=new Pe({props:{controls:a[7]}}),{c(){D(e.$$.fragment)},m(l,n){E(e,l,n),t=!0},p:P,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function et(a){let e,t,l,n,o;function i(s){a[10](s)}let r={draggable:!0,$$slots:{default:[$e]},$$scope:{ctx:a}};return a[4]!==void 0&&(r.lngLat=a[4]),e=new Ke({props:r}),G.push(()=>Q(e,"lngLat",i)),e.$on("dragend",a[9]),n=new Je({props:{data:a[5],$$slots:{default:[xe]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment),l=B(),D(n.$$.fragment)},m(s,u){E(e,s,u),C(s,l,u),E(n,s,u),o=!0},p(s,u){const f={};u&32768&&(f.$$scope={dirty:u,ctx:s}),!t&&u&16&&(t=!0,f.lngLat=s[4],V(()=>t=!1)),e.$set(f);const d={};u&32&&(d.data=s[5]),u&32768&&(d.$$scope={dirty:u,ctx:s}),n.$set(d)},i(s){o||(k(e.$$.fragment,s),k(n.$$.fragment,s),o=!0)},o(s){z(e.$$.fragment,s),z(n.$$.fragment,s),o=!1},d(s){s&&M(l),I(e,s),I(n,s)}}}function tt(a){let e,t,l,n;function o(r){a[11](r)}let i={style:"https://api.maptiler.com/maps/dataviz/style.json?key=MZEJTanw3WpxRvt7qDfo",standardControls:!0,hash:!0,$$slots:{default:[et]},$$scope:{ctx:a}};return a[2]!==void 0&&(i.map=a[2]),t=new Ee({props:i}),G.push(()=>Q(t,"map",o)),{c(){e=w("div"),D(t.$$.fragment),O(e,"slot","main"),R(e,"position","relative"),R(e,"width","100%"),R(e,"height","100vh")},m(r,s){C(r,e,s),E(t,e,null),n=!0},p(r,s){const u={};s&32816&&(u.$$scope={dirty:s,ctx:r}),!l&&s&4&&(l=!0,u.map=r[2],V(()=>l=!1)),t.$set(u)},i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){r&&M(e),I(t)}}}function nt(a){let e,t;return e=new Te({props:{$$slots:{main:[tt],left:[Ye]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment)},m(l,n){E(e,l,n),t=!0},p(l,[n]){const o={};n&32895&&(o.$$scope={dirty:n,ctx:l}),e.$set(o)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function at(a,e,t){Be(async()=>{await Ne(),await Ie()});let l,n,o={lng:0,lat:0},i={type:"FeatureCollection",features:[]},r=1e3,s="Distance",u={maxCount:1e3,originRadius:3,destinationRadius:3,streetviewOn:!1},f;async function d(p){try{let L=await f.files[0].arrayBuffer();t(3,n=new qe(new Uint8Array(L)));let T=n.getBounds();l.fitBounds([[T[0],T[1]],[T[2],T[3]]],{padding:20,animate:!1}),t(4,o.lng=(T[0]+T[2])/2,o),t(4,o.lat=(T[1]+T[3])/2,o),_()}catch(L){window.alert(`Problem loading network file: ${L}`)}}function _(){n&&t(5,i=JSON.parse(n.recalculate({lng:o.lng,lat:o.lat,max_requests:r,cost:s})))}function g(p){o=p,t(4,o)}function v(p){l=p,t(2,l)}function y(p){G[p?"unshift":"push"](()=>{f=p,t(6,f)})}function m(){r=F(this.value),t(0,r)}function b(p){s=p,t(1,s)}return a.$$.update=()=>{a.$$.dirty&3&&_()},[r,s,l,n,o,i,f,u,d,_,g,v,y,m,b]}class lt extends K{constructor(e){super(),U(this,e,at,nt,Z,{})}}new lt({target:document.getElementById("app")});