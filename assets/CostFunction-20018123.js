import{af as Se,ag as je,S as oe,i as ie,s as X,D as _e,l as A,t as E,r as de,b as Z,u as we,v as C,ah as Te,T as $,a7 as Ae,U as ee,ai as se,E as G,G as Ce,J as Oe,K as Me,N as Ie,Y as Be,e as m,g as x,j as v,k as ye,n as p,p as K,q as L,C as me,f as ce,V as Y,ab as Q,ac as pe,aa as Fe,h as W,w as he,a6 as Ee}from"./Legend-4a68f35f.js";function We(t,e,n,r,o){let i=!1;t.getSource(e)&&(i=!0,t.removeSource(e));const _=()=>{r(e)&&(t.addSource(e,n),o())};if(i){const c=()=>{e&&(t.getSource(e)?setTimeout(c,1):_())};c()}else _()}function Le(t,e,n){Se().then(()=>{let r=je(t);if(!r)return;r.getSource(e)===n&&r.removeSource(e)})}function le(t){let e=t[0],n,r,o=ue(t);return{c(){o.c(),n=_e()},m(i,_){o.m(i,_),A(i,n,_),r=!0},p(i,_){_&1&&X(e,e=i[0])?(de(),Z(o,1,1,G),we(),o=ue(i),o.c(),E(o,1),o.m(n.parentNode,n)):o.p(i,_)},i(i){r||(E(o),r=!0)},o(i){Z(o),r=!1},d(i){i&&C(n),o.d(i)}}}function ue(t){let e;const n=t[15].default,r=Ce(n,t,t[14],null);return{c(){r&&r.c()},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&16384)&&Oe(r,n,o,o[14],e?Ie(n,o[14],i,null):Me(o[14]),null)},i(o){e||(E(r,o),e=!0)},o(o){Z(r,o),e=!1},d(o){r&&r.d(o)}}}function Ne(t){let e,n,r=t[0]&&le(t);return{c(){r&&r.c(),e=_e()},m(o,i){r&&r.m(o,i),A(o,e,i),n=!0},p(o,[i]){o[0]?r?(r.p(o,i),i&1&&E(r,1)):(r=le(o),r.c(),E(r,1),r.m(e.parentNode,e)):r&&(de(),Z(r,1,1,()=>{r=null}),we())},i(o){n||(E(r),n=!0)},o(o){Z(r),n=!1},d(o){o&&C(e),r&&r.d(o)}}}function De(t,e,n){let r,o,i,{$$slots:_={},$$scope:c}=e,{id:u=Be("geojson")}=e,{data:b}=e,{generateId:f=!1}=e,{promoteId:h=void 0}=e,{filter:j=void 0}=e,{lineMetrics:g=void 0}=e,{cluster:l=void 0}=e;const{map:k,cluster:S,self:J}=Te();$(t,k,w=>n(13,o=w)),$(t,S,w=>n(16,i=w)),$(t,J,w=>n(0,r=w));let T,V=!0;return Ae(()=>{r&&T&&o&&(Le(k,r,T),ee(J,r=null,r),n(11,T=void 0))}),t.$$set=w=>{"id"in w&&n(4,u=w.id),"data"in w&&n(5,b=w.data),"generateId"in w&&n(6,f=w.generateId),"promoteId"in w&&n(7,h=w.promoteId),"filter"in w&&n(8,j=w.filter),"lineMetrics"in w&&n(9,g=w.lineMetrics),"cluster"in w&&n(10,l=w.cluster),"$$scope"in w&&n(14,c=w.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&ee(S,i=l,i),t.$$.dirty&12273&&o&&r!==u&&(ee(J,r=u,r),We(o,r,se({type:"geojson",data:b,filter:j,lineMetrics:g,generateId:f,promoteId:h,cluster:!!l,clusterMinPoints:l==null?void 0:l.minPoints,clusterMaxZoom:l==null?void 0:l.maxZoom,clusterRadius:l==null?void 0:l.radius,clusterProperties:l==null?void 0:l.properties}),w=>o&&w===r,()=>{r&&(n(11,T=o==null?void 0:o.getSource(r)),n(12,V=!0))})),t.$$.dirty&8208&&(o==null||o.on("style.load",()=>{n(11,T=o==null?void 0:o.getSource(u))})),t.$$.dirty&6176&&T&&(V?n(12,V=!1):T.setData(b)),t.$$.dirty&3072&&(T==null||T.setClusterOptions(se({cluster:!!l,clusterMaxZoom:l==null?void 0:l.maxZoom,clusterRadius:l==null?void 0:l.radius})))},[r,k,S,J,u,b,f,h,j,g,l,T,V,o,c,_]}class et extends oe{constructor(e){super(),ie(this,e,De,Ne,X,{id:4,data:5,generateId:6,promoteId:7,filter:8,lineMetrics:9,cluster:10})}}let a;const ke=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&ke.decode();let D=null;function H(){return(D===null||D.byteLength===0)&&(D=new Uint8Array(a.memory.buffer)),D}function B(t,e){return t=t>>>0,ke.decode(H().subarray(t,t+e))}const O=new Array(128).fill(void 0);O.push(void 0,null,!0,!1);let P=O.length;function d(t){P===O.length&&O.push(O.length+1);const e=P;return P=O[e],O[e]=t,e}function s(t){return O[t]}let F=0;const z=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Re=typeof z.encodeInto=="function"?function(t,e){return z.encodeInto(t,e)}:function(t,e){const n=z.encode(t);return e.set(n),{read:t.length,written:n.length}};function te(t,e,n){if(n===void 0){const c=z.encode(t),u=e(c.length,1)>>>0;return H().subarray(u,u+c.length).set(c),F=c.length,u}let r=t.length,o=e(r,1)>>>0;const i=H();let _=0;for(;_<r;_++){const c=t.charCodeAt(_);if(c>127)break;i[o+_]=c}if(_!==r){_!==0&&(t=t.slice(_)),o=n(o,r,r=_+t.length*3,1)>>>0;const c=H().subarray(o+_,o+r),u=Re(t,c);_+=u.written}return F=_,o}function N(t){return t==null}let R=null;function y(){return(R===null||R.byteLength===0)&&(R=new Int32Array(a.memory.buffer)),R}function Ue(t){t<132||(O[t]=P,P=t)}function M(t){const e=s(t);return Ue(t),e}let U=null;function ve(){return(U===null||U.byteLength===0)&&(U=new Float64Array(a.memory.buffer)),U}let q=null;function qe(){return(q===null||q.byteLength===0)&&(q=new BigInt64Array(a.memory.buffer)),q}function ne(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const o=t.description;return o==null?"Symbol":`Symbol(${o})`}if(e=="function"){const o=t.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(t)){const o=t.length;let i="[";o>0&&(i+=ne(t[0]));for(let _=1;_<o;_++)i+=", "+ne(t[_]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function He(t,e){const n=e(t.length*1,1)>>>0;return H().set(t,n/1),F=t.length,n}function Pe(t,e){return t=t>>>0,ve().subarray(t/8,t/8+e)}function I(t,e){try{return t.apply(this,e)}catch(n){a.__wbindgen_exn_store(d(n))}}class re{static __wrap(e){e=e>>>0;const n=Object.create(re.prototype);return n.__wbg_ptr=e,n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();a.__wbg_jsnetwork_free(e)}constructor(e){try{const i=a.__wbindgen_add_to_stack_pointer(-16),_=He(e,a.__wbindgen_malloc),c=F;a.jsnetwork_new(i,_,c);var n=y()[i/4+0],r=y()[i/4+1],o=y()[i/4+2];if(o)throw M(r);return re.__wrap(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}recalculate(e){let n,r;try{const f=a.__wbindgen_add_to_stack_pointer(-16);a.jsnetwork_recalculate(f,this.__wbg_ptr,d(e));var o=y()[f/4+0],i=y()[f/4+1],_=y()[f/4+2],c=y()[f/4+3],u=o,b=i;if(c)throw u=0,b=0,M(_);return n=u,r=b,B(u,b)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,r,1)}}updateCostFunction(e){try{const o=a.__wbindgen_add_to_stack_pointer(-16);a.jsnetwork_updateCostFunction(o,this.__wbg_ptr,d(e));var n=y()[o/4+0],r=y()[o/4+1];if(r)throw M(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}getBounds(){try{const o=a.__wbindgen_add_to_stack_pointer(-16);a.jsnetwork_getBounds(o,this.__wbg_ptr);var e=y()[o/4+0],n=y()[o/4+1],r=Pe(e,n).slice();return a.__wbindgen_free(e,n*8),r}finally{a.__wbindgen_add_to_stack_pointer(16)}}debugNetwork(){let e,n;try{const b=a.__wbindgen_add_to_stack_pointer(-16);a.jsnetwork_debugNetwork(b,this.__wbg_ptr);var r=y()[b/4+0],o=y()[b/4+1],i=y()[b/4+2],_=y()[b/4+3],c=r,u=o;if(_)throw c=0,u=0,M(i);return e=c,n=u,B(c,u)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(e,n,1)}}}async function Ze(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function Ge(){const t={};return t.wbg={},t.wbg.__wbindgen_string_new=function(e,n){const r=B(e,n);return d(r)},t.wbg.__wbindgen_string_get=function(e,n){const r=s(n),o=typeof r=="string"?r:void 0;var i=N(o)?0:te(o,a.__wbindgen_malloc,a.__wbindgen_realloc),_=F;y()[e/4+1]=_,y()[e/4+0]=i},t.wbg.__wbindgen_object_drop_ref=function(e){M(e)},t.wbg.__wbindgen_number_get=function(e,n){const r=s(n),o=typeof r=="number"?r:void 0;ve()[e/8+1]=N(o)?0:o,y()[e/4+0]=!N(o)},t.wbg.__wbindgen_is_string=function(e){return typeof s(e)=="string"},t.wbg.__wbindgen_is_object=function(e){const n=s(e);return typeof n=="object"&&n!==null},t.wbg.__wbindgen_is_undefined=function(e){return s(e)===void 0},t.wbg.__wbindgen_in=function(e,n){return s(e)in s(n)},t.wbg.__wbindgen_is_bigint=function(e){return typeof s(e)=="bigint"},t.wbg.__wbindgen_bigint_from_u64=function(e){const n=BigInt.asUintN(64,e);return d(n)},t.wbg.__wbindgen_jsval_eq=function(e,n){return s(e)===s(n)},t.wbg.__wbindgen_error_new=function(e,n){const r=new Error(B(e,n));return d(r)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=s(e);return d(n)},t.wbg.__wbindgen_jsval_loose_eq=function(e,n){return s(e)==s(n)},t.wbg.__wbindgen_boolean_get=function(e){const n=s(e);return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_number_new=function(e){return d(e)},t.wbg.__wbg_getwithrefkey_3b3c46ba20582127=function(e,n){const r=s(e)[s(n)];return d(r)},t.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return d(e)},t.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const r=s(n).stack,o=te(r,a.__wbindgen_malloc,a.__wbindgen_realloc),i=F;y()[e/4+1]=i,y()[e/4+0]=o},t.wbg.__wbg_error_f851667af71bcfc6=function(e,n){let r,o;try{r=e,o=n,console.error(B(e,n))}finally{a.__wbindgen_free(r,o,1)}},t.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(e,n){const r=s(e)[s(n)];return d(r)},t.wbg.__wbg_set_841ac57cff3d672b=function(e,n,r){s(e)[M(n)]=M(r)},t.wbg.__wbg_now_0cfdc90c97d0c24b=function(e){return s(e).now()},t.wbg.__wbg_debug_9a6b3243fbbebb61=function(e){console.debug(s(e))},t.wbg.__wbg_error_788ae33f81d3b84b=function(e){console.error(s(e))},t.wbg.__wbg_info_2e30e8204b29d91d=function(e){console.info(s(e))},t.wbg.__wbg_log_1d3ae0273d8f4f8a=function(e){console.log(s(e))},t.wbg.__wbg_warn_d60e832f9882c1b2=function(e){console.warn(s(e))},t.wbg.__wbg_get_44be0491f933a435=function(e,n){const r=s(e)[n>>>0];return d(r)},t.wbg.__wbg_length_fff51ee6522a1a18=function(e){return s(e).length},t.wbg.__wbg_new_898a68150f225f2e=function(){const e=new Array;return d(e)},t.wbg.__wbindgen_is_function=function(e){return typeof s(e)=="function"},t.wbg.__wbg_newnoargs_581967eacc0e2604=function(e,n){const r=new Function(B(e,n));return d(r)},t.wbg.__wbg_next_526fc47e980da008=function(e){const n=s(e).next;return d(n)},t.wbg.__wbg_next_ddb3312ca1c4e32a=function(){return I(function(e){const n=s(e).next();return d(n)},arguments)},t.wbg.__wbg_done_5c1f01fb660d73b5=function(e){return s(e).done},t.wbg.__wbg_value_1695675138684bd5=function(e){const n=s(e).value;return d(n)},t.wbg.__wbg_iterator_97f0c81209c6c35a=function(){return d(Symbol.iterator)},t.wbg.__wbg_get_97b561fb56f034b5=function(){return I(function(e,n){const r=Reflect.get(s(e),s(n));return d(r)},arguments)},t.wbg.__wbg_call_cb65541d95d71282=function(){return I(function(e,n){const r=s(e).call(s(n));return d(r)},arguments)},t.wbg.__wbg_new_b51585de1b234aff=function(){const e=new Object;return d(e)},t.wbg.__wbg_self_1ff1d729e9aae938=function(){return I(function(){const e=self.self;return d(e)},arguments)},t.wbg.__wbg_window_5f4faef6c12b79ec=function(){return I(function(){const e=window.window;return d(e)},arguments)},t.wbg.__wbg_globalThis_1d39714405582d3c=function(){return I(function(){const e=globalThis.globalThis;return d(e)},arguments)},t.wbg.__wbg_global_651f05c6a0944d1c=function(){return I(function(){const e=global.global;return d(e)},arguments)},t.wbg.__wbg_set_502d29070ea18557=function(e,n,r){s(e)[n>>>0]=M(r)},t.wbg.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb=function(e){let n;try{n=s(e)instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_isSafeInteger_bb8e18dd21c97288=function(e){return Number.isSafeInteger(s(e))},t.wbg.__wbg_entries_e51f29c7bba0c054=function(e){const n=Object.entries(s(e));return d(n)},t.wbg.__wbg_buffer_085ec1f694018c4f=function(e){const n=s(e).buffer;return d(n)},t.wbg.__wbg_new_8125e318e6245eed=function(e){const n=new Uint8Array(s(e));return d(n)},t.wbg.__wbg_set_5cf90238115182c3=function(e,n,r){s(e).set(s(n),r>>>0)},t.wbg.__wbg_length_72e2208bbc0efc61=function(e){return s(e).length},t.wbg.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4=function(e){let n;try{n=s(e)instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbindgen_bigint_get_as_i64=function(e,n){const r=s(n),o=typeof r=="bigint"?r:void 0;qe()[e/8+1]=N(o)?BigInt(0):o,y()[e/4+0]=!N(o)},t.wbg.__wbindgen_debug_string=function(e,n){const r=ne(s(n)),o=te(r,a.__wbindgen_malloc,a.__wbindgen_realloc),i=F;y()[e/4+1]=i,y()[e/4+0]=o},t.wbg.__wbindgen_throw=function(e,n){throw new Error(B(e,n))},t.wbg.__wbindgen_memory=function(){const e=a.memory;return d(e)},t}function Je(t,e){return a=t.exports,Ve.__wbindgen_wasm_module=e,q=null,U=null,R=null,D=null,a}async function Ve(t){if(a!==void 0)return a;typeof t>"u"&&(t="/od2net/assets/wasm_od2net_bg.wasm");const e=Ge();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await Ze(await t,e);return Je(n,r)}function ze(t){let e,n,r,o,i,_,c,u,b,f,h,j;return{c(){e=m("div"),n=m("label"),r=x(`Or load an example:
    `),o=m("select"),i=m("option"),i.textContent="Custom file loaded",_=m("option"),_.textContent="Antwerp",c=m("option"),c.textContent="Berlin",u=m("option"),u.textContent="South London",b=m("option"),b.textContent="Paris",f=m("option"),f.textContent="Seattle",i.__value="",v(i,i.__value),_.__value="antwerp",v(_,_.__value),c.__value="berlin",v(c,c.__value),u.__value="london",v(u,u.__value),b.__value="paris",v(b,b.__value),f.__value="seattle",v(f,f.__value),t[0]===void 0&&ye(()=>t[1].call(o))},m(g,l){A(g,e,l),p(e,n),p(n,r),p(n,o),p(o,i),p(o,_),p(o,c),p(o,u),p(o,b),p(o,f),K(o,t[0],!0),h||(j=L(o,"change",t[1]),h=!0)},p(g,[l]){l&1&&K(o,g[0])},i:G,o:G,d(g){g&&C(e),h=!1,j()}}}function Ke(t,e,n){let{example:r}=e;function o(){r=me(this),n(0,r)}return t.$$set=i=>{"example"in i&&n(0,r=i.example)},[r,o]}class tt extends oe{constructor(e){super(),ie(this,e,Ke,ze,X,{example:0})}}function ae(t,e,n){const r=t.slice();return r[10]=e[n],r[13]=e,r[14]=n,r}function fe(t,e,n){const r=t.slice();return r[10]=e[n],r[11]=e,r[12]=n,r}function Ye(t){let e,n=Q(["lts1","lts2","lts3","lts4"]),r=[];for(let o=0;o<4;o+=1)r[o]=be(ae(t,n,o));return{c(){e=m("ul");for(let o=0;o<4;o+=1)r[o].c()},m(o,i){A(o,e,i);for(let _=0;_<4;_+=1)r[_]&&r[_].m(e,null)},p(o,i){if(i&5){n=Q(["lts1","lts2","lts3","lts4"]);let _;for(_=0;_<4;_+=1){const c=ae(o,n,_);r[_]?r[_].p(c,i):(r[_]=be(c),r[_].c(),r[_].m(e,null))}for(;_<4;_+=1)r[_].d(1)}},d(o){o&&C(e),pe(r,o)}}}function Qe(t){let e,n=Q(Object.keys(t[3])),r=[];for(let o=0;o<n.length;o+=1)r[o]=ge(fe(t,n,o));return{c(){e=m("ul");for(let o=0;o<r.length;o+=1)r[o].c()},m(o,i){A(o,e,i);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(e,null)},p(o,i){if(i&9){n=Q(Object.keys(o[3]));let _;for(_=0;_<n.length;_+=1){const c=fe(o,n,_);r[_]?r[_].p(c,i):(r[_]=ge(c),r[_].c(),r[_].m(e,null))}for(;_<r.length;_+=1)r[_].d(1);r.length=n.length}},d(o){o&&C(e),pe(r,o)}}}function be(t){let e,n,r=Fe[t[10]]+"",o,i,_,c,u;function b(){t[7].call(i,t[10])}return{c(){e=m("li"),n=m("label"),o=x(r),i=m("input"),_=ce(),W(i,"type","number"),W(i,"min","1.0"),W(i,"step","0.1")},m(f,h){A(f,e,h),p(e,n),p(n,o),p(n,i),v(i,t[2][t[10]]),p(e,_),c||(u=[L(i,"input",b),L(i,"change",t[8])],c=!0)},p(f,h){t=f,h&4&&Y(i.value)!==t[2][t[10]]&&v(i,t[2][t[10]])},d(f){f&&C(e),c=!1,he(u)}}}function ge(t){let e,n,r=t[10]+"",o,i,_,c,u;function b(){t[5].call(i,t[10])}return{c(){e=m("li"),n=m("label"),o=x(r),i=m("input"),_=ce(),W(i,"type","number"),W(i,"min","1.0"),W(i,"step","0.1")},m(f,h){A(f,e,h),p(e,n),p(n,o),p(n,i),v(i,t[3][t[10]]),p(e,_),c||(u=[L(i,"input",b),L(i,"change",t[6])],c=!0)},p(f,h){t=f,h&8&&r!==(r=t[10]+"")&&Ee(o,r),h&8&&Y(i.value)!==t[3][t[10]]&&v(i,t[3][t[10]])},d(f){f&&C(e),c=!1,he(u)}}}function Xe(t){let e,n,r,o,i,_,c,u,b,f,h;function j(k,S){if(k[1]=="OsmHighwayType")return Qe;if(k[1]=="ByLTS")return Ye}let g=j(t),l=g&&g(t);return{c(){e=m("div"),n=m("label"),r=x(`Cost function:
    `),o=m("select"),i=m("option"),i.textContent="Distance",_=m("option"),_.textContent="Weight per LTS",c=m("option"),c.textContent="Set a weight per OSM highway type",u=ce(),l&&l.c(),b=_e(),i.__value="Distance",v(i,i.__value),_.__value="ByLTS",v(_,_.__value),c.__value="OsmHighwayType",v(c,c.__value),t[1]===void 0&&ye(()=>t[4].call(o))},m(k,S){A(k,e,S),p(e,n),p(n,r),p(n,o),p(o,i),p(o,_),p(o,c),K(o,t[1],!0),A(k,u,S),l&&l.m(k,S),A(k,b,S),f||(h=L(o,"change",t[4]),f=!0)},p(k,[S]){S&2&&K(o,k[1]),g===(g=j(k))&&l?l.p(k,S):(l&&l.d(1),l=g&&g(k),l&&(l.c(),l.m(b.parentNode,b)))},i:G,o:G,d(k){k&&(C(e),C(u),C(b)),l&&l.d(k),f=!1,h()}}}function xe(t,e,n){let{cost:r}=e,o="Distance",i={lts1:1,lts2:1,lts3:1,lts4:1},_={};for(let g of["cycleway","footway","living_street","motorway","motorway_link","path","pedestrian","primary","primary_link","residential","secondary","secondary_link","service","steps","tertiary","tertiary_link","track","trunk","trunk_link","unclassified"])_[g]=1;function c(g){g=="OsmHighwayType"?n(0,r={OsmHighwayType:_}):g=="ByLTS"?n(0,r={ByLTS:i}):n(0,r=g)}function u(){o=me(this),n(1,o)}function b(g){_[g]=Y(this.value),n(3,_)}const f=()=>n(0,r);function h(g){i[g]=Y(this.value),n(2,i)}const j=()=>n(0,r);return t.$$set=g=>{"cost"in g&&n(0,r=g.cost)},t.$$.update=()=>{t.$$.dirty&2&&c(o)},[r,o,i,_,u,b,f,h,j]}class nt extends oe{constructor(e){super(),ie(this,e,xe,Xe,X,{cost:0})}}export{tt as C,et as G,re as J,Ve as _,nt as a};