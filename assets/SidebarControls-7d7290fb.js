import{S as me,i as de,s as be,Y as ct,x as We,y as Ee,c as P,a as V,A as Fe,t as z,b as M,d as W,Z as _t,G as mt,K as dt,N as bt,O as gt,$ as F,a0 as Le,a1 as ot,a2 as it,a3 as ye,a4 as Lt,a5 as R,f as S,l as p,v as y,U as $,a6 as Ct,a7 as ht,a8 as vt,D as pt,r as yt,u as wt,a9 as Ge,aa as St,g as I,ab as _e,e as h,h as j,n as d,q as H,E as De,w as Ke,ac as Tt,ad as zt,ae as It,j as x,z as st,W as re,af as Mt,ag as A,ah as Ot}from"./Layout-3cbf44cd.js";function we(e,t){const l={},n={},o={$$scope:1};let a=e.length;for(;a--;){const s=e[a],i=t[a];if(i){for(const r in s)r in i||(n[r]=1);for(const r in i)o[r]||(l[r]=i[r],o[r]=1);e[a]=i}else for(const r in s)o[r]=1}for(const s in n)s in l||(l[s]=void 0);return l}function ke(e){return typeof e=="object"&&e!==null?e:{}}function Rt(e){let t;const l=e[16].default,n=mt(l,e,e[24],null);return{c(){n&&n.c()},m(o,a){n&&n.m(o,a),t=!0},p(o,a){n&&n.p&&(!t||a&16777216)&&dt(n,l,o,o[24],t?gt(l,o[24],a,null):bt(o[24]),null)},i(o){t||(z(n,o),t=!0)},o(o){M(n,o),t=!1},d(o){n&&n.d(o)}}}function Ht(e){let t,l,n;function o(s){e[17](s)}let a={id:e[1],type:"circle",source:e[2],sourceLayer:e[3],beforeId:e[4],beforeLayerType:e[5],paint:e[6],layout:e[7],filter:e[8],applyToClusters:e[9],minzoom:e[10],maxzoom:e[11],hoverCursor:e[12],manageHoverState:e[13],eventsIfTopMost:e[14],interactive:e[15],$$slots:{default:[Rt]},$$scope:{ctx:e}};return e[0]!==void 0&&(a.hovered=e[0]),t=new ct({props:a}),We.push(()=>Ee(t,"hovered",o)),t.$on("click",e[18]),t.$on("dblclick",e[19]),t.$on("contextmenu",e[20]),t.$on("mouseenter",e[21]),t.$on("mousemove",e[22]),t.$on("mouseleave",e[23]),{c(){P(t.$$.fragment)},m(s,i){V(t,s,i),n=!0},p(s,[i]){const r={};i&2&&(r.id=s[1]),i&4&&(r.source=s[2]),i&8&&(r.sourceLayer=s[3]),i&16&&(r.beforeId=s[4]),i&32&&(r.beforeLayerType=s[5]),i&64&&(r.paint=s[6]),i&128&&(r.layout=s[7]),i&256&&(r.filter=s[8]),i&512&&(r.applyToClusters=s[9]),i&1024&&(r.minzoom=s[10]),i&2048&&(r.maxzoom=s[11]),i&4096&&(r.hoverCursor=s[12]),i&8192&&(r.manageHoverState=s[13]),i&16384&&(r.eventsIfTopMost=s[14]),i&32768&&(r.interactive=s[15]),i&16777216&&(r.$$scope={dirty:i,ctx:s}),!l&&i&1&&(l=!0,r.hovered=s[0],Fe(()=>l=!1)),t.$set(r)},i(s){n||(z(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){W(t,s)}}}function Nt(e,t,l){let{$$slots:n={},$$scope:o}=t,{id:a=_t("circle")}=t,{source:s=void 0}=t,{sourceLayer:i=void 0}=t,{beforeId:r=void 0}=t,{beforeLayerType:c=void 0}=t,{paint:v}=t,{layout:C=void 0}=t,{filter:L=void 0}=t,{applyToClusters:b=void 0}=t,{minzoom:k=void 0}=t,{maxzoom:T=void 0}=t,{hoverCursor:O=void 0}=t,{manageHoverState:f=!1}=t,{hovered:m=null}=t,{eventsIfTopMost:N=!1}=t,{interactive:q=!0}=t;function D(u){m=u,l(0,m)}function w(u){F.call(this,e,u)}function ne(u){F.call(this,e,u)}function K(u){F.call(this,e,u)}function le(u){F.call(this,e,u)}function Z(u){F.call(this,e,u)}function ee(u){F.call(this,e,u)}return e.$$set=u=>{"id"in u&&l(1,a=u.id),"source"in u&&l(2,s=u.source),"sourceLayer"in u&&l(3,i=u.sourceLayer),"beforeId"in u&&l(4,r=u.beforeId),"beforeLayerType"in u&&l(5,c=u.beforeLayerType),"paint"in u&&l(6,v=u.paint),"layout"in u&&l(7,C=u.layout),"filter"in u&&l(8,L=u.filter),"applyToClusters"in u&&l(9,b=u.applyToClusters),"minzoom"in u&&l(10,k=u.minzoom),"maxzoom"in u&&l(11,T=u.maxzoom),"hoverCursor"in u&&l(12,O=u.hoverCursor),"manageHoverState"in u&&l(13,f=u.manageHoverState),"hovered"in u&&l(0,m=u.hovered),"eventsIfTopMost"in u&&l(14,N=u.eventsIfTopMost),"interactive"in u&&l(15,q=u.interactive),"$$scope"in u&&l(24,o=u.$$scope)},[m,a,s,i,r,c,v,C,L,b,k,T,O,f,N,q,n,D,w,ne,K,le,Z,ee,o]}class at extends me{constructor(t){super(),de(this,t,Nt,Ht,be,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14,interactive:15})}}function qt(e){let t;const l=e[16].default,n=mt(l,e,e[24],null);return{c(){n&&n.c()},m(o,a){n&&n.m(o,a),t=!0},p(o,a){n&&n.p&&(!t||a&16777216)&&dt(n,l,o,o[24],t?gt(l,o[24],a,null):bt(o[24]),null)},i(o){t||(z(n,o),t=!0)},o(o){M(n,o),t=!1},d(o){n&&n.d(o)}}}function Dt(e){let t,l,n;function o(s){e[17](s)}let a={id:e[1],type:"symbol",source:e[2],sourceLayer:e[3],beforeId:e[4],beforeLayerType:e[5],paint:e[6],layout:e[7],filter:e[8],applyToClusters:e[9],minzoom:e[10],maxzoom:e[11],hoverCursor:e[12],manageHoverState:e[13],eventsIfTopMost:e[14],interactive:e[15],$$slots:{default:[qt]},$$scope:{ctx:e}};return e[0]!==void 0&&(a.hovered=e[0]),t=new ct({props:a}),We.push(()=>Ee(t,"hovered",o)),t.$on("click",e[18]),t.$on("dblclick",e[19]),t.$on("contextmenu",e[20]),t.$on("mouseenter",e[21]),t.$on("mousemove",e[22]),t.$on("mouseleave",e[23]),{c(){P(t.$$.fragment)},m(s,i){V(t,s,i),n=!0},p(s,[i]){const r={};i&2&&(r.id=s[1]),i&4&&(r.source=s[2]),i&8&&(r.sourceLayer=s[3]),i&16&&(r.beforeId=s[4]),i&32&&(r.beforeLayerType=s[5]),i&64&&(r.paint=s[6]),i&128&&(r.layout=s[7]),i&256&&(r.filter=s[8]),i&512&&(r.applyToClusters=s[9]),i&1024&&(r.minzoom=s[10]),i&2048&&(r.maxzoom=s[11]),i&4096&&(r.hoverCursor=s[12]),i&8192&&(r.manageHoverState=s[13]),i&16384&&(r.eventsIfTopMost=s[14]),i&32768&&(r.interactive=s[15]),i&16777216&&(r.$$scope={dirty:i,ctx:s}),!l&&i&1&&(l=!0,r.hovered=s[0],Fe(()=>l=!1)),t.$set(r)},i(s){n||(z(t.$$.fragment,s),n=!0)},o(s){M(t.$$.fragment,s),n=!1},d(s){W(t,s)}}}function Bt(e,t,l){let{$$slots:n={},$$scope:o}=t,{id:a=_t("symbol")}=t,{source:s=void 0}=t,{sourceLayer:i=void 0}=t,{beforeId:r=void 0}=t,{beforeLayerType:c=void 0}=t,{paint:v=void 0}=t,{layout:C=void 0}=t,{filter:L=void 0}=t,{applyToClusters:b=void 0}=t,{minzoom:k=void 0}=t,{maxzoom:T=void 0}=t,{hoverCursor:O=void 0}=t,{manageHoverState:f=!1}=t,{hovered:m=null}=t,{eventsIfTopMost:N=!1}=t,{interactive:q=!0}=t;function D(u){m=u,l(0,m)}function w(u){F.call(this,e,u)}function ne(u){F.call(this,e,u)}function K(u){F.call(this,e,u)}function le(u){F.call(this,e,u)}function Z(u){F.call(this,e,u)}function ee(u){F.call(this,e,u)}return e.$$set=u=>{"id"in u&&l(1,a=u.id),"source"in u&&l(2,s=u.source),"sourceLayer"in u&&l(3,i=u.sourceLayer),"beforeId"in u&&l(4,r=u.beforeId),"beforeLayerType"in u&&l(5,c=u.beforeLayerType),"paint"in u&&l(6,v=u.paint),"layout"in u&&l(7,C=u.layout),"filter"in u&&l(8,L=u.filter),"applyToClusters"in u&&l(9,b=u.applyToClusters),"minzoom"in u&&l(10,k=u.minzoom),"maxzoom"in u&&l(11,T=u.maxzoom),"hoverCursor"in u&&l(12,O=u.hoverCursor),"manageHoverState"in u&&l(13,f=u.manageHoverState),"hovered"in u&&l(0,m=u.hovered),"eventsIfTopMost"in u&&l(14,N=u.eventsIfTopMost),"interactive"in u&&l(15,q=u.interactive),"$$scope"in u&&l(24,o=u.$$scope)},[m,a,s,i,r,c,v,C,L,b,k,T,O,f,N,q,n,D,w,ne,K,le,Z,ee,o]}class jt extends me{constructor(t){super(),de(this,t,Bt,Dt,be,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14,interactive:15})}}let Be=Le(!0),je=Le(!1),Pe=Le(!1),Ve=Le(!1);function rt(e){let t,l;return t=new Ge({props:{$$slots:{default:[Pt,({props:n})=>({10:n}),({props:n})=>n?1024:0]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(n,o){V(t,n,o),l=!0},p(n,o){const a={};o&3072&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){W(t,n)}}}function Pt(e){let t,l;return t=new St({props:{properties:e[10]}}),{c(){P(t.$$.fragment)},m(n,o){V(t,n,o),l=!0},p(n,o){const a={};o&1024&&(a.properties=n[10]),t.$set(a)},i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){W(t,n)}}}function Vt(e){let t,l,n=e[2]&&rt(e);return{c(){n&&n.c(),t=pt()},m(o,a){n&&n.m(o,a),p(o,t,a),l=!0},p(o,a){o[2]?n?(n.p(o,a),a&4&&z(n,1)):(n=rt(o),n.c(),z(n,1),n.m(t.parentNode,t)):n&&(yt(),M(n,1,1,()=>{n=null}),wt())},i(o){l||(z(n),l=!0)},o(o){M(n),l=!1},d(o){o&&y(t),n&&n.d(o)}}}function Wt(e){let t=e[10].origin_count+"",l,n;return{c(){l=I(t),n=I(" routes start here")},m(o,a){p(o,l,a),p(o,n,a)},p(o,a){a&1024&&t!==(t=o[10].origin_count+"")&&_e(l,t)},d(o){o&&(y(l),y(n))}}}function Et(e){let t,l;return t=new Ge({props:{$$slots:{default:[Wt,({props:n})=>({10:n}),({props:n})=>n?1024:0]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(n,o){V(t,n,o),l=!0},p(n,o){const a={};o&3072&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){W(t,n)}}}function Ft(e){let t=e[10].destination_count+"",l,n;return{c(){l=I(t),n=I(" routes end here")},m(o,a){p(o,l,a),p(o,n,a)},p(o,a){a&1024&&t!==(t=o[10].destination_count+"")&&_e(l,t)},d(o){o&&(y(l),y(n))}}}function Gt(e){let t,l;return t=new Ge({props:{$$slots:{default:[Ft,({props:n})=>({10:n}),({props:n})=>n?1024:0]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(n,o){V(t,n,o),l=!0},p(n,o){const a={};o&3072&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){W(t,n)}}}function Kt(e){let t,l,n,o,a,s,i,r;const c=[{id:"input-layer"},e[0],{filter:["==",["geometry-type"],"LineString"]},{manageHoverState:!0},{hoverCursor:e[2]?"pointer":void 0},{paint:{"line-width":e[3],"line-color":e[4]?e[9]:ot,"line-opacity":it(1,.5)}},{layout:{visibility:e[5]?"visible":"none"}},{beforeId:"Road labels"}];let v={$$slots:{default:[Vt]},$$scope:{ctx:e}};for(let f=0;f<c.length;f+=1)v=ye(v,c[f]);t=new Lt({props:v}),t.$on("click",e[8]);const C=[{id:"slope-arrows"},e[0],{filter:["all",["==",["geometry-type"],"LineString"],[">",["abs",["get","slope"]],3]]},{minzoom:12},{layout:{"icon-image":"chevron","icon-size":1,"symbol-placement":"line","symbol-spacing":50,"icon-allow-overlap":!0,"icon-rotate":["case",["<",["get","slope"],0],180,0],visibility:e[4]?"visible":"none"}}];let L={};for(let f=0;f<C.length;f+=1)L=ye(L,C[f]);n=new jt({props:L});const b=[{id:"origins-layer"},e[0],{filter:["has","origin_count"]},{manageHoverState:!0},{paint:{"circle-color":R.origins,"circle-radius":e[1].originRadius}},{layout:{visibility:e[6]?"visible":"none"}}];let k={$$slots:{default:[Et]},$$scope:{ctx:e}};for(let f=0;f<b.length;f+=1)k=ye(k,b[f]);a=new at({props:k});const T=[{id:"destinations-layer"},e[0],{filter:["has","destination_count"]},{manageHoverState:!0},{paint:{"circle-color":R.destinations,"circle-radius":e[1].destinationRadius}},{layout:{visibility:e[7]?"visible":"none"}}];let O={$$slots:{default:[Gt]},$$scope:{ctx:e}};for(let f=0;f<T.length;f+=1)O=ye(O,T[f]);return i=new at({props:O}),{c(){P(t.$$.fragment),l=S(),P(n.$$.fragment),o=S(),P(a.$$.fragment),s=S(),P(i.$$.fragment)},m(f,m){V(t,f,m),p(f,l,m),V(n,f,m),p(f,o,m),V(a,f,m),p(f,s,m),V(i,f,m),r=!0},p(f,[m]){const N=m&573?we(c,[c[0],m&1&&ke(f[0]),c[2],c[3],m&4&&{hoverCursor:f[2]?"pointer":void 0},m&536&&{paint:{"line-width":f[3],"line-color":f[4]?f[9]:ot,"line-opacity":it(1,.5)}},m&32&&{layout:{visibility:f[5]?"visible":"none"}},c[7]]):{};m&2052&&(N.$$scope={dirty:m,ctx:f}),t.$set(N);const q=m&17?we(C,[C[0],m&1&&ke(f[0]),C[2],C[3],m&16&&{layout:{"icon-image":"chevron","icon-size":1,"symbol-placement":"line","symbol-spacing":50,"icon-allow-overlap":!0,"icon-rotate":["case",["<",["get","slope"],0],180,0],visibility:f[4]?"visible":"none"}}]):{};n.$set(q);const D=m&67?we(b,[b[0],m&1&&ke(f[0]),b[2],b[3],m&2&&{paint:{"circle-color":R.origins,"circle-radius":f[1].originRadius}},m&64&&{layout:{visibility:f[6]?"visible":"none"}}]):{};m&2048&&(D.$$scope={dirty:m,ctx:f}),a.$set(D);const w=m&131?we(T,[T[0],m&1&&ke(f[0]),T[2],T[3],m&2&&{paint:{"circle-color":R.destinations,"circle-radius":f[1].destinationRadius}},m&128&&{layout:{visibility:f[7]?"visible":"none"}}]):{};m&2048&&(w.$$scope={dirty:m,ctx:f}),i.$set(w)},i(f){r||(z(t.$$.fragment,f),z(n.$$.fragment,f),z(a.$$.fragment,f),z(i.$$.fragment,f),r=!0)},o(f){M(t.$$.fragment,f),M(n.$$.fragment,f),M(a.$$.fragment,f),M(i.$$.fragment,f),r=!1},d(f){f&&(y(l),y(o),y(s)),W(t,f),W(n,f),W(a,f),W(i,f)}}}function At(e){let t=0,l=2,n=10,o=e-t,a=n-l;return["+",l,["*",a,["min",1,["/",["-",["get","count"],t],o]]]]}function Jt(e,t,l){let n,o,a,s,i,r;$(e,Ve,b=>l(4,a=b)),$(e,Be,b=>l(5,s=b)),$(e,je,b=>l(6,i=b)),$(e,Pe,b=>l(7,r=b));let{sourceOverride:c={}}=t,{controls:v}=t;function C(b){if(!n)return;let k=b.detail.features[0].properties.way;window.open(`http://openstreetmap.org/way/${k}`,"_blank")}let L=Ct(["abs",["get","slope"]],vt,ht);return e.$$set=b=>{"sourceOverride"in b&&l(0,c=b.sourceOverride),"controls"in b&&l(1,v=b.controls)},e.$$.update=()=>{e.$$.dirty&2&&l(2,n=!v.streetviewOn),e.$$.dirty&2&&l(3,o=At(v.maxCount))},[c,v,n,o,a,s,i,r,C,L]}class nn extends me{constructor(t){super(),de(this,t,Jt,Kt,be,{sourceOverride:0,controls:1})}}const{window:Ut}=zt;function ut(e){let t,l,n,o,a,s,i,r,c,v,C;return c=It(e[6][0]),{c(){t=h("div"),l=h("label"),n=h("input"),o=I(`
      Google StreetView`),a=S(),s=h("label"),i=h("input"),r=I(`
      Bing Streetside`),j(n,"type","radio"),n.__value="google",x(n,n.__value),j(i,"type","radio"),i.__value="bing",x(i,i.__value),c.p(n,i)},m(L,b){p(L,t,b),d(t,l),d(l,n),n.checked=n.__value===e[1],d(l,o),d(t,a),d(t,s),d(s,i),i.checked=i.__value===e[1],d(s,r),v||(C=[H(n,"change",e[5]),H(i,"change",e[7])],v=!0)},p(L,b){b&2&&(n.checked=n.__value===L[1]),b&2&&(i.checked=i.__value===L[1])},d(L){L&&y(t),c.r(),v=!1,Ke(C)}}}function Yt(e){let t,l,n,o,a,s,i,r=e[0]&&ut(e);return{c(){t=h("label"),l=h("input"),n=I(`
  StreetView`),o=S(),r&&r.c(),a=pt(),j(l,"type","checkbox")},m(c,v){p(c,t,v),d(t,l),l.checked=e[0],d(t,n),p(c,o,v),r&&r.m(c,v),p(c,a,v),s||(i=[H(Ut,"keydown",e[2]),H(l,"change",e[4])],s=!0)},p(c,[v]){v&1&&(l.checked=c[0]),c[0]?r?r.p(c,v):(r=ut(c),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},i:De,o:De,d(c){c&&(y(t),y(o),y(a)),r&&r.d(c),s=!1,Ke(i)}}}function Zt(e,t,l){let{map:n}=t,{enabled:o=!1}=t,a="google";function s(){n.on("click",r),n.getCanvas().style.cursor="zoom-in"}function i(){n.off("click",r),n.getCanvas().style.cursor="auto"}Tt(i);function r(k){let T=k.lngLat.lng,O=k.lngLat.lat;a=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${O},${T}&cbp=11,0,0,0,0`,"_blank"):a=="bing"&&window.open(`https://www.bing.com/maps?cp=${O}~${T}&style=x`,"_blank")}function c(k){o&&k.key=="Escape"&&l(0,o=!1)}const v=[[]];function C(){o=this.checked,l(0,o)}function L(){a=this.__value,l(1,a)}function b(){a=this.__value,l(1,a)}return e.$$set=k=>{"map"in k&&l(3,n=k.map),"enabled"in k&&l(0,o=k.enabled)},e.$$.update=()=>{e.$$.dirty&1&&(o?s():i())},[o,a,c,n,C,L,v,b]}class Qt extends me{constructor(t){super(),de(this,t,Zt,Yt,be,{map:3,enabled:0})}}function ft(e){let t,l,n,o,a,s;return{c(){t=h("div"),l=h("label"),n=h("input"),o=I(`
      Visualize slope`),j(n,"type","checkbox")},m(i,r){p(i,t,r),d(t,l),d(l,n),n.checked=e[6],d(l,o),a||(s=H(n,"change",e[17]),a=!0)},p(i,r){r&64&&(n.checked=i[6])},d(i){i&&y(t),a=!1,s()}}}function Xt(e){let t,l,n,o,a,s;return n=new Mt({props:{rows:[[`${A.lts1}: ${J(e[1].total_meters_lts1)}`,R.lts1],[`${A.lts2}: ${J(e[1].total_meters_lts2)}`,R.lts2],[`${A.lts3}: ${J(e[1].total_meters_lts3)}`,R.lts3],[`${A.lts4}: ${J(e[1].total_meters_lts4)}`,R.lts4],[`${A.lts_not_allowed}: ${J(e[1].total_meters_not_allowed)}`,R.lts_not_allowed]]}}),{c(){t=h("hr"),l=S(),P(n.$$.fragment),o=S(),a=h("p"),a.innerHTML='Note: LTS model from <a href="https://github.com/BikeOttawa/stressmodel/blob/master/stressmodel.js" target="_blank">BikeOttawa</a>'},m(i,r){p(i,t,r),p(i,l,r),V(n,i,r),p(i,o,r),p(i,a,r),s=!0},p(i,r){const c={};r&2&&(c.rows=[[`${A.lts1}: ${J(i[1].total_meters_lts1)}`,R.lts1],[`${A.lts2}: ${J(i[1].total_meters_lts2)}`,R.lts2],[`${A.lts3}: ${J(i[1].total_meters_lts3)}`,R.lts3],[`${A.lts4}: ${J(i[1].total_meters_lts4)}`,R.lts4],[`${A.lts_not_allowed}: ${J(i[1].total_meters_not_allowed)}`,R.lts_not_allowed]]),n.$set(c)},i(i){s||(z(n.$$.fragment,i),s=!0)},o(i){M(n.$$.fragment,i),s=!1},d(i){i&&(y(t),y(l),y(o),y(a)),W(n,i)}}}function xt(e){let t,l;return t=new Ot({props:{colorScale:ht,limits:vt}}),{c(){P(t.$$.fragment)},m(n,o){V(t,n,o),l=!0},p:De,i(n){l||(z(t.$$.fragment,n),l=!0)},o(n){M(t.$$.fragment,n),l=!1},d(n){W(t,n)}}}function $t(e){let t,l=e[1].config.requests.description+"",n,o,a,s,i,r,c,v,C,L,b,k,T,O,f,m,N,q,D,w,ne,K,le,Z=e[1].num_origins.toLocaleString()+"",ee,u,Ce,ge,oe,Ae,Je,Ue,U,Se,he,ue,ie,Ye,se,Ze,ve=e[1].num_destinations.toLocaleString()+"",Te,Qe,ze,pe,ae,Xe,xe,$e,Y,Ie,fe,E,G,ce,Me,Oe,Q,Re,te,He,et,B=e[1].config.elevation_geotiff&&ft(e);const tt=[xt,Xt],X=[];function nt(_,g){return _[6]?0:1}E=nt(e),G=X[E]=tt[E](e);function kt(_){e[18](_)}let lt={map:e[2]};return e[0].streetviewOn!==void 0&&(lt.enabled=e[0].streetviewOn),Q=new Qt({props:lt}),We.push(()=>Ee(Q,"enabled",kt)),{c(){t=h("p"),n=I(l),o=S(),a=h("div"),s=h("button"),s.textContent="See all output details",i=S(),r=h("div"),c=h("label"),v=h("input"),C=I(`
    Route network`),L=S(),b=h("div"),k=h("label"),T=I(`Max for line width styling:
    `),O=h("br"),f=S(),m=h("input"),N=S(),q=h("div"),D=h("label"),w=h("input"),ne=S(),K=h("span"),le=I("Origins ("),ee=I(Z),u=I(")"),Ce=S(),ge=h("div"),oe=h("label"),Ae=I(`Change origin point size:
    `),Je=h("br"),Ue=S(),U=h("input"),Se=S(),he=h("div"),ue=h("label"),ie=h("input"),Ye=S(),se=h("span"),Ze=I("Destinations ("),Te=I(ve),Qe=I(")"),ze=S(),pe=h("div"),ae=h("label"),Xe=I(`Change destination point size:
    `),xe=h("br"),$e=S(),Y=h("input"),Ie=S(),B&&B.c(),fe=S(),G.c(),ce=S(),Me=h("hr"),Oe=S(),P(Q.$$.fragment),j(v,"type","checkbox"),j(m,"type","number"),j(m,"min",1),j(w,"type","checkbox"),st(K,"color",R.origins),j(U,"type","number"),j(U,"min",1),j(ie,"type","checkbox"),st(se,"color",R.destinations),j(Y,"type","number"),j(Y,"min",1)},m(_,g){p(_,t,g),d(t,n),p(_,o,g),p(_,a,g),d(a,s),p(_,i,g),p(_,r,g),d(r,c),d(c,v),v.checked=e[3],d(c,C),p(_,L,g),p(_,b,g),d(b,k),d(k,T),d(k,O),d(k,f),d(k,m),x(m,e[0].maxCount),p(_,N,g),p(_,q,g),d(q,D),d(D,w),w.checked=e[4],d(D,ne),d(D,K),d(K,le),d(K,ee),d(K,u),p(_,Ce,g),p(_,ge,g),d(ge,oe),d(oe,Ae),d(oe,Je),d(oe,Ue),d(oe,U),x(U,e[0].originRadius),p(_,Se,g),p(_,he,g),d(he,ue),d(ue,ie),ie.checked=e[5],d(ue,Ye),d(ue,se),d(se,Ze),d(se,Te),d(se,Qe),p(_,ze,g),p(_,pe,g),d(pe,ae),d(ae,Xe),d(ae,xe),d(ae,$e),d(ae,Y),x(Y,e[0].destinationRadius),p(_,Ie,g),B&&B.m(_,g),p(_,fe,g),X[E].m(_,g),p(_,ce,g),p(_,Me,g),p(_,Oe,g),V(Q,_,g),te=!0,He||(et=[H(s,"click",e[7]),H(v,"change",e[8]),H(m,"input",e[9]),H(m,"change",e[10]),H(w,"change",e[11]),H(U,"input",e[12]),H(U,"change",e[13]),H(ie,"change",e[14]),H(Y,"input",e[15]),H(Y,"change",e[16])],He=!0)},p(_,[g]){(!te||g&2)&&l!==(l=_[1].config.requests.description+"")&&_e(n,l),g&8&&(v.checked=_[3]),g&1&&re(m.value)!==_[0].maxCount&&x(m,_[0].maxCount),g&16&&(w.checked=_[4]),(!te||g&2)&&Z!==(Z=_[1].num_origins.toLocaleString()+"")&&_e(ee,Z),g&1&&re(U.value)!==_[0].originRadius&&x(U,_[0].originRadius),g&32&&(ie.checked=_[5]),(!te||g&2)&&ve!==(ve=_[1].num_destinations.toLocaleString()+"")&&_e(Te,ve),g&1&&re(Y.value)!==_[0].destinationRadius&&x(Y,_[0].destinationRadius),_[1].config.elevation_geotiff?B?B.p(_,g):(B=ft(_),B.c(),B.m(fe.parentNode,fe)):B&&(B.d(1),B=null);let Ne=E;E=nt(_),E===Ne?X[E].p(_,g):(yt(),M(X[Ne],1,1,()=>{X[Ne]=null}),wt(),G=X[E],G?G.p(_,g):(G=X[E]=tt[E](_),G.c()),z(G,1),G.m(ce.parentNode,ce));const qe={};g&4&&(qe.map=_[2]),!Re&&g&1&&(Re=!0,qe.enabled=_[0].streetviewOn,Fe(()=>Re=!1)),Q.$set(qe)},i(_){te||(z(G),z(Q.$$.fragment,_),te=!0)},o(_){M(G),M(Q.$$.fragment,_),te=!1},d(_){_&&(y(t),y(o),y(a),y(i),y(r),y(L),y(b),y(N),y(q),y(Ce),y(ge),y(Se),y(he),y(ze),y(pe),y(Ie),y(fe),y(ce),y(Me),y(Oe)),B&&B.d(_),X[E].d(_),W(Q,_),He=!1,Ke(et)}}}function J(e){return`${(e/1e3).toFixed(1)} km total for all trips (before uptake)`}function en(e,t,l){let n,o,a,s;$(e,Be,w=>l(3,n=w)),$(e,je,w=>l(4,o=w)),$(e,Pe,w=>l(5,a=w)),$(e,Ve,w=>l(6,s=w));let{outputMetadata:i}=t,{map:r}=t,{controls:c}=t;const v=()=>window.alert(JSON.stringify(i,null,"  "));function C(){n=this.checked,Be.set(n)}function L(){c.maxCount=re(this.value),l(0,c)}const b=()=>l(0,c);function k(){o=this.checked,je.set(o)}function T(){c.originRadius=re(this.value),l(0,c)}const O=()=>l(0,c);function f(){a=this.checked,Pe.set(a)}function m(){c.destinationRadius=re(this.value),l(0,c)}const N=()=>l(0,c);function q(){s=this.checked,Ve.set(s)}function D(w){e.$$.not_equal(c.streetviewOn,w)&&(c.streetviewOn=w,l(0,c))}return e.$$set=w=>{"outputMetadata"in w&&l(1,i=w.outputMetadata),"map"in w&&l(2,r=w.map),"controls"in w&&l(0,c=w.controls)},[c,i,r,n,o,a,s,v,C,L,b,k,T,O,f,m,N,q,D]}class ln extends me{constructor(t){super(),de(this,t,en,$t,be,{outputMetadata:1,map:2,controls:0})}}export{nn as L,ln as S};
