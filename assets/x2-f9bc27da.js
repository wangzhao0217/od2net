import{S as oe,i as re,s as ie,G as ue,e as S,h as j,z as U,l as q,I as $,q as T,J as pe,K as ce,N as de,O as me,t as L,b as M,v as J,w as ge,Q as _e,R as be,T as Y,U as x,m as he,L as we,c as O,f as I,a as D,d as P,o as Le,H as ve,x as Z,y as W,g as V,n as v,A as Q,r as ee,u as te,M as ye,_ as ke,V as fe,W as Ce,j as ne,D as Me,E as Be,X as Ee}from"./Legend-814dd8c6.js";import{L as ze,C as Se,O as Ie,_ as Oe,J as De,a as Pe,G as qe}from"./OverpassSelector-af9705d9.js";import{S as Je,L as Ne}from"./SidebarControls-48d5b8d3.js";function Te(s){let e,t,l,n,o,f,p;const a=s[16].default,i=ue(a,s,s[15],null);return{c(){e=S("div"),i&&i.c(),j(e,"tabindex",t=s[1]?0:void 0),j(e,"role",l=s[1]?"button":void 0),U(e,"z-index",s[2])},m(r,g){q(r,e,g),i&&i.m(e,null),o=!0,f||(p=[$(s[6].call(null,e)),$(n=je.call(null,e,s[0])),T(e,"click",s[17]),T(e,"dblclick",s[18]),T(e,"contextmenu",s[19]),T(e,"mouseenter",s[20]),T(e,"mouseleave",s[21]),T(e,"mousemove",s[22]),T(e,"keydown",s[7])],f=!0)},p(r,[g]){i&&i.p&&(!o||g&32768)&&pe(i,a,r,r[15],o?de(a,r[15],g,null):ce(r[15]),null),(!o||g&2&&t!==(t=r[1]?0:void 0))&&j(e,"tabindex",t),(!o||g&2&&l!==(l=r[1]?"button":void 0))&&j(e,"role",l),n&&me(n.update)&&g&1&&n.update.call(null,r[0]),g&4&&U(e,"z-index",r[2])},i(r){o||(L(i,r),o=!0)},o(r){M(i,r),o=!1},d(r){r&&J(e),i&&i.d(r),f=!1,ge(p)}}}function je(s,e){const t=s.className;function l(n){n?s.className=`${t} ${n}`:s.className=t}return l(e),{update:l}}function Ae(s,e,t){let l,n,o,{$$slots:f={},$$scope:p}=e,{lngLat:a}=e,{class:i=void 0}=e,{interactive:r=!0}=e,{asButton:g=!1}=e,{draggable:y=!1}=e,{feature:h=null}=e,{offset:B=void 0}=e,{zIndex:_=void 0}=e;const k=_e(),{map:C,layerEvent:N,self:A}=be();Y(s,C,u=>t(24,o=u)),Y(s,N,u=>t(23,l=u)),Y(s,A,u=>t(14,n=u));function G(u){x(A,n=new he.Marker({element:u,draggable:y,offset:B}).setLngLat(a).addTo(o),n);const X=()=>c("dragstart"),H=()=>{R(),c("drag")},K=()=>{R(),c("dragend")};return y&&(n.on("dragstart",X),n.on("drag",H),n.on("dragend",K)),{destroy(){y&&(n==null||n.off("dragstart",X),n==null||n.off("drag",H),n==null||n.off("dragend",K)),n==null||n.remove()}}}function R(){let u=n==null?void 0:n.getLngLat();u&&(Array.isArray(a)?t(9,a=[u.lng,u.lat]):a&&"lon"in a?t(9,a={lon:u.lng,lat:u.lat}):t(9,a=u))}function w(u){u.key===" "&&(u.preventDefault(),u.stopPropagation(),c("click"))}function c(u){if(!r)return;let X=n==null?void 0:n.getLngLat();if(!X)return;const H=[X.lng,X.lat];let K={map:o,marker:n,lngLat:H,features:[{type:"Feature",properties:(h==null?void 0:h.properties)??{},geometry:{type:"Point",coordinates:H}}]};x(N,l={...K,layerType:"marker",type:u},l),k(u,K)}const b=()=>c("click"),d=()=>c("dblclick"),z=()=>c("contextmenu"),F=u=>{c("mouseenter")},m=()=>{c("mouseleave")},E=()=>c("mousemove");return s.$$set=u=>{"lngLat"in u&&t(9,a=u.lngLat),"class"in u&&t(0,i=u.class),"interactive"in u&&t(10,r=u.interactive),"asButton"in u&&t(1,g=u.asButton),"draggable"in u&&t(11,y=u.draggable),"feature"in u&&t(12,h=u.feature),"offset"in u&&t(13,B=u.offset),"zIndex"in u&&t(2,_=u.zIndex),"$$scope"in u&&t(15,p=u.$$scope)},s.$$.update=()=>{s.$$.dirty&16896&&(n==null||n.setLngLat(a)),s.$$.dirty&24576&&(n==null||n.setOffset(B??[0,0]))},[i,g,_,C,N,A,G,w,c,a,r,y,h,B,n,p,f,b,d,z,F,m,E]}class Re extends oe{constructor(e){super(),re(this,e,Ae,Te,ie,{lngLat:9,class:0,interactive:10,asButton:1,draggable:11,feature:12,offset:13,zIndex:2})}}const Fe=`<svg width="40" height="50" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
    <defs/>
    <path id="path2" fill="none" stroke="none" visibility="hidden" d="M 1.0169492 25.59322 L 25.016949 25.59322 L 25.016949 49.59322 L 1.0169492 49.59322 Z"/>
    <path id="path4" fill="#000000" stroke="none" d="M 19.198305 2.6101693 C 10.336661 2.6101693 3.1694916 9.7773384 3.1694916 18.638983 C 3.1694916 30.660593 19.198305 48.406779 19.198305 48.406779 C 19.198305 48.406779 35.227118 30.660593 35.227118 18.638983 C 35.227118 9.7773384 28.059949 2.6101693 19.198305 2.6101693 Z M 19.198305 24.363559 C 16.038339 24.363559 13.473728 21.798949 13.473728 18.638983 C 13.473728 15.479016 16.038339 12.914406 19.198305 12.914406 C 22.358271 12.914406 24.922881 15.479016 24.922881 18.638983 C 24.922881 21.798949 22.358271 24.363559 19.198305 24.363559 Z"/>
</svg>
`;function se(s){let e,t;return{c(){e=S("p"),t=V(s[10])},m(l,n){q(l,e,n),v(e,t)},p(l,n){n&1024&&Ce(t,l[10])},d(l){l&&J(e)}}}function ae(s){let e,t,l,n,o,f,p,a,i,r,g,y;function h(_){s[21](_)}let B={};return s[2]!==void 0&&(B.cost=s[2]),a=new Pe({props:B}),Z.push(()=>W(a,"cost",h)),{c(){e=S("div"),t=S("label"),l=V("Max requests (limit for faster updates):"),n=S("br"),o=I(),f=S("input"),p=I(),O(a.$$.fragment),j(f,"type","number"),j(f,"min",1)},m(_,k){q(_,e,k),v(e,t),v(t,l),v(t,n),v(t,o),v(t,f),ne(f,s[1]),q(_,p,k),D(a,_,k),r=!0,g||(y=T(f,"input",s[20]),g=!0)},p(_,k){k&2&&fe(f.value)!==_[1]&&ne(f,_[1]);const C={};!i&&k&4&&(i=!0,C.cost=_[2],Q(()=>i=!1)),a.$set(C)},i(_){r||(L(a.$$.fragment,_),r=!0)},o(_){M(a.$$.fragment,_),r=!1},d(_){_&&(J(e),J(p)),P(a,_),g=!1,y()}}}function le(s){let e,t,l,n,o;function f(a){s[22](a)}let p={outputMetadata:s[6].metadata,map:s[3]};return s[8]!==void 0&&(p.controls=s[8]),l=new Je({props:p}),Z.push(()=>W(l,"controls",f)),{c(){e=S("hr"),t=I(),O(l.$$.fragment)},m(a,i){q(a,e,i),q(a,t,i),D(l,a,i),o=!0},p(a,i){const r={};i&64&&(r.outputMetadata=a[6].metadata),i&8&&(r.map=a[3]),!n&&i&256&&(n=!0,r.controls=a[8],Q(()=>n=!1)),l.$set(r)},i(a){o||(L(l.$$.fragment,a),o=!0)},o(a){M(l.$$.fragment,a),o=!1},d(a){a&&(J(e),J(t)),P(l,a)}}}function Xe(s){let e,t,l,n,o,f,p,a,i,r,g,y,h,B,_,k,C,N,A;t=new ve({props:{app:"interactive"}});function G(d){s[17](d)}let R={};s[0]!==void 0&&(R.example=s[0]),r=new Se({props:R}),Z.push(()=>W(r,"example",G)),h=new Ie({props:{map:s[3]}}),h.$on("gotXml",s[13]),h.$on("loading",s[18]),h.$on("error",s[19]);let w=s[10]&&se(s),c=s[4]&&ae(s),b=s[6].metadata&&le(s);return{c(){e=S("div"),O(t.$$.fragment),l=I(),n=S("label"),o=V("Open an "),f=S("i"),f.textContent=".osm.pbf",p=V(` file
      `),a=S("input"),i=I(),O(r.$$.fragment),y=I(),O(h.$$.fragment),B=I(),w&&w.c(),_=I(),c&&c.c(),k=I(),b&&b.c(),j(a,"type","file"),j(e,"slot","left")},m(d,z){q(d,e,z),D(t,e,null),v(e,l),v(e,n),v(n,o),v(n,f),v(n,p),v(n,a),s[16](a),v(e,i),D(r,e,null),v(e,y),D(h,e,null),v(e,B),w&&w.m(e,null),v(e,_),c&&c.m(e,null),v(e,k),b&&b.m(e,null),C=!0,N||(A=T(a,"change",s[11]),N=!0)},p(d,z){const F={};!g&&z&1&&(g=!0,F.example=d[0],Q(()=>g=!1)),r.$set(F);const m={};z&8&&(m.map=d[3]),h.$set(m),d[10]?w?w.p(d,z):(w=se(d),w.c(),w.m(e,_)):w&&(w.d(1),w=null),d[4]?c?(c.p(d,z),z&16&&L(c,1)):(c=ae(d),c.c(),L(c,1),c.m(e,k)):c&&(ee(),M(c,1,1,()=>{c=null}),te()),d[6].metadata?b?(b.p(d,z),z&64&&L(b,1)):(b=le(d),b.c(),L(b,1),b.m(e,null)):b&&(ee(),M(b,1,1,()=>{b=null}),te())},i(d){C||(L(t.$$.fragment,d),L(r.$$.fragment,d),L(h.$$.fragment,d),L(c),L(b),C=!0)},o(d){M(t.$$.fragment,d),M(r.$$.fragment,d),M(h.$$.fragment,d),M(c),M(b),C=!1},d(d){d&&J(e),P(t),s[16](null),P(r),P(h),w&&w.d(),c&&c.d(),b&&b.d(),N=!1,A()}}}function Ze(s){let e,t;return{c(){e=new Ee(!1),t=Me(),e.a=t},m(l,n){e.m(Fe,l,n),q(l,t,n)},p:Be,d(l){l&&(J(t),e.d())}}}function Ge(s){let e,t;return e=new Ne({props:{controls:s[8]}}),{c(){O(e.$$.fragment)},m(l,n){D(e,l,n),t=!0},p(l,n){const o={};n&256&&(o.controls=l[8]),e.$set(o)},i(l){t||(L(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function He(s){let e,t,l,n,o;function f(a){s[14](a)}let p={draggable:!0,$$slots:{default:[Ze]},$$scope:{ctx:s}};return s[5]!==void 0&&(p.lngLat=s[5]),e=new Re({props:p}),Z.push(()=>W(e,"lngLat",f)),e.$on("dragend",s[12]),n=new qe({props:{data:s[6],$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){O(e.$$.fragment),l=I(),O(n.$$.fragment)},m(a,i){D(e,a,i),q(a,l,i),D(n,a,i),o=!0},p(a,i){const r={};i&33554432&&(r.$$scope={dirty:i,ctx:a}),!t&&i&32&&(t=!0,r.lngLat=a[5],Q(()=>t=!1)),e.$set(r);const g={};i&64&&(g.data=a[6]),i&33554688&&(g.$$scope={dirty:i,ctx:a}),n.$set(g)},i(a){o||(L(e.$$.fragment,a),L(n.$$.fragment,a),o=!0)},o(a){M(e.$$.fragment,a),M(n.$$.fragment,a),o=!1},d(a){a&&J(l),P(e,a),P(n,a)}}}function Ke(s){let e,t,l,n;function o(p){s[15](p)}let f={style:"https://api.maptiler.com/maps/dataviz/style.json?key=MZEJTanw3WpxRvt7qDfo",standardControls:!0,hash:!0,$$slots:{default:[He]},$$scope:{ctx:s}};return s[3]!==void 0&&(f.map=s[3]),t=new ye({props:f}),Z.push(()=>W(t,"map",o)),{c(){e=S("div"),O(t.$$.fragment),j(e,"slot","main"),U(e,"position","relative"),U(e,"width","100%"),U(e,"height","100vh")},m(p,a){q(p,e,a),D(t,e,null),n=!0},p(p,a){const i={};a&33554784&&(i.$$scope={dirty:a,ctx:p}),!l&&a&8&&(l=!0,i.map=p[3],Q(()=>l=!1)),t.$set(i)},i(p){n||(L(t.$$.fragment,p),n=!0)},o(p){M(t.$$.fragment,p),n=!1},d(p){p&&J(e),P(t)}}}function Ue(s){let e,t,l,n;return e=new we({props:{$$slots:{main:[Ke],left:[Xe]},$$scope:{ctx:s}}}),l=new ze({props:{loading:s[7]}}),{c(){O(e.$$.fragment),t=I(),O(l.$$.fragment)},m(o,f){D(e,o,f),q(o,t,f),D(l,o,f),n=!0},p(o,[f]){const p={};f&33556351&&(p.$$scope={dirty:f,ctx:o}),e.$set(p);const a={};f&128&&(a.loading=o[7]),l.$set(a)},i(o){n||(L(e.$$.fragment,o),L(l.$$.fragment,o),n=!0)},o(o){M(e.$$.fragment,o),M(l.$$.fragment,o),n=!1},d(o){o&&J(t),P(e,o),P(l,o)}}}function We(s,e,t){Le(async()=>{await Oe(),await ke()});let l,n,o="",f={lng:0,lat:0},p={type:"FeatureCollection",features:[]},a=!1,i=1e3,r="Distance",g={maxCount:1e3,originRadius:3,destinationRadius:3,streetviewOn:!1},y;async function h(m){t(0,o=""),t(7,a=!0),B(await y.files[0].arrayBuffer())}function B(m){try{t(4,n=new De(new Uint8Array(m))),t(2,r="Distance");let E=n.getBounds();l.fitBounds([[E[0],E[1]],[E[2],E[3]]],{padding:20,animate:!1}),t(5,f.lng=(E[0]+E[2])/2,f),t(5,f.lat=(E[1]+E[3])/2,f),k()}catch(E){window.alert(`Problem importing osm.pbf file: ${E}`)}t(7,a=!1)}async function _(m){if(m!=""){t(7,a=!0);let E=await fetch(`https://assets.od2net.org/pbf_clips/${m}.osm.pbf`);B(await E.arrayBuffer())}}function k(){n&&t(6,p=JSON.parse(n.recalculate({lng:f.lng,lat:f.lat,max_requests:i,cost:r})))}let C="";function N(m){t(10,C="Parsing XML"),B(new TextEncoder().encode(m.detail)),t(10,C="")}function A(m){f=m,t(5,f)}function G(m){l=m,t(3,l)}function R(m){Z[m?"unshift":"push"](()=>{y=m,t(9,y)})}function w(m){o=m,t(0,o)}const c=m=>t(10,C=m.detail),b=m=>t(10,C=m.detail);function d(){i=fe(this.value),t(1,i)}function z(m){r=m,t(2,r)}function F(m){g=m,t(8,g)}return s.$$.update=()=>{s.$$.dirty&1&&_(o),s.$$.dirty&6&&k()},[o,i,r,l,n,f,p,a,g,y,C,h,k,N,A,G,R,w,c,b,d,z,F]}class Qe extends oe{constructor(e){super(),re(this,e,We,Ue,ie,{})}}new Qe({target:document.getElementById("app")});