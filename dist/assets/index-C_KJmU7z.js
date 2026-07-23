(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},tl={},qa={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),mc=Symbol.for("react.portal"),hc=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Sc=Symbol.for("react.memo"),jc=Symbol.for("react.lazy"),Di=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Di&&e[Di]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ja=Object.assign,es={};function on(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Za}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=on.prototype;function Uo(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Za}var $o=Uo.prototype=new ts;$o.constructor=Uo;Ja($o,on.prototype);$o.isPureReactComponent=!0;var Ai=Array.isArray,ns=Object.prototype.hasOwnProperty,Ho={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ns.call(t,r)&&!rs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Gn,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function Cc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oi=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gn:case mc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Ai(l)?(n="",e!=null&&(n=e.replace(Oi,"$&/")+"/"),yr(l,t,n,"",function(d){return d})):l!=null&&(Vo(l)&&(l=Cc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Oi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ai(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+kl(o,s);i+=yr(o,t,n,u,l)}else if(u=Nc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+kl(o,s++),i+=yr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},zc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Ho};function os(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=on;F.Fragment=hc;F.Profiler=vc;F.PureComponent=Uo;F.StrictMode=gc;F.Suspense=wc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;F.act=os;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ja({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ns.call(t,u)&&!rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Gn,type:e.type,key:l,ref:o,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};F.createElement=ls;F.createFactory=function(e){var t=ls.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:kc,render:e}};F.isValidElement=Vo;F.lazy=function(e){return{$$typeof:jc,_payload:{_status:-1,_result:e},_init:bc}};F.memo=function(e,t){return{$$typeof:Sc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};F.unstable_act=os;F.useCallback=function(e,t){return ue.current.useCallback(e,t)};F.useContext=function(e){return ue.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};F.useEffect=function(e,t){return ue.current.useEffect(e,t)};F.useId=function(){return ue.current.useId()};F.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ue.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};F.useRef=function(e){return ue.current.useRef(e)};F.useState=function(e){return ue.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ue.current.useTransition()};F.version="18.3.1";qa.exports=F;var M=qa.exports;const Pc=fc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=M,_c=Symbol.for("react.element"),Lc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Mc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function is(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Tc.call(t,r)&&!Ic.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:_c,type:e,key:o,ref:i,props:l,_owner:Mc.current}}tl.Fragment=Lc;tl.jsx=is;tl.jsxs=is;Xa.exports=tl;var a=Xa.exports,Ql={},as={exports:{}},ke={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var P=N.length;N.push(z);e:for(;0<P;){var Q=P-1>>>1,q=N[Q];if(0<l(q,z))N[Q]=z,N[P]=q,P=Q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],P=N.pop();if(P!==z){N[0]=P;e:for(var Q=0,q=N.length,er=q>>>1;Q<er;){var vt=2*(Q+1)-1,yl=N[vt],xt=vt+1,tr=N[xt];if(0>l(yl,P))xt<q&&0>l(tr,yl)?(N[Q]=tr,N[xt]=P,Q=xt):(N[Q]=yl,N[vt]=P,Q=vt);else if(xt<q&&0>l(tr,P))N[Q]=tr,N[xt]=P,Q=xt;else break e}}return z}function l(N,z){var P=N.sortIndex-z.sortIndex;return P!==0?P:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],g=1,h=null,m=3,v=!1,k=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=N)r(d),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(d)}}function x(N){if(w=!1,f(N),!k)if(n(u)!==null)k=!0,vl(j);else{var z=n(d);z!==null&&xl(x,z.startTime-N)}}function j(N,z){k=!1,w&&(w=!1,p(b),b=-1),v=!0;var P=m;try{for(f(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!ze());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var q=Q(h.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(u)&&r(u),f(z)}else r(u);h=n(u)}if(h!==null)var er=!0;else{var vt=n(d);vt!==null&&xl(x,vt.startTime-z),er=!1}return er}finally{h=null,m=P,v=!1}}var C=!1,E=null,b=-1,W=5,L=-1;function ze(){return!(e.unstable_now()-L<W)}function un(){if(E!==null){var N=e.unstable_now();L=N;var z=!0;try{z=E(!0,N)}finally{z?cn():(C=!1,E=null)}}else C=!1}var cn;if(typeof c=="function")cn=function(){c(un)};else if(typeof MessageChannel<"u"){var Ri=new MessageChannel,pc=Ri.port2;Ri.port1.onmessage=un,cn=function(){pc.postMessage(null)}}else cn=function(){R(un,0)};function vl(N){E=N,C||(C=!0,cn())}function xl(N,z){b=R(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,vl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(N,z,P){var Q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,N={id:g++,callback:z,priorityLevel:N,startTime:P,expirationTime:q,sortIndex:-1},P>Q?(N.sortIndex=P,t(d,N),n(u)===null&&N===n(d)&&(w?(p(b),b=-1):w=!0,xl(x,P-Q))):(N.sortIndex=q,t(u,N),k||v||(k=!0,vl(j))),N},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(N){var z=m;return function(){var P=m;m=z;try{return N.apply(this,arguments)}finally{m=P}}}})(us);ss.exports=us;var Rc=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=M,ye=Rc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,Ln={};function _t(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)cs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,Ac=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bi={},Ui={};function Oc(e){return Kl.call(Ui,e)?!0:Kl.call(Bi,e)?!1:Ac.test(e)?Ui[e]=!0:(Bi[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wo=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wo,Qo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wo,Qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wo,Qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),$i=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=$i&&e[$i]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,wl;function yn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var Sl=!1;function jl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function $c(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Mt:return"Portal";case Yl:return"Profiler";case Yo:return"StrictMode";case Gl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xo:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Hc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(e){var t=ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Vc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gs(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function Jl(e,t){gs(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function vs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Kt=null,Yt=null;function Ki(e){if(e=Zn(e)){if(typeof io!="function")throw Error(y(280));var t=e.stateNode;t&&(t=il(t),io(e.stateNode,e.type,t))}}function Ss(e){Kt?Yt?Yt.push(e):Yt=[e]:Kt=e}function js(){if(Kt){var e=Kt,t=Yt;if(Yt=Kt=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Ns(e,t){return e(t)}function Cs(){}var Nl=!1;function Es(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return Ns(e,t,n)}finally{Nl=!1,(Kt!==null||Yt!==null)&&(Cs(),js())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ao=!1;if(Qe)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ao=!1}function Kc(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Nn=!1,Lr=null,Tr=!1,so=null,Yc={onError:function(e){Nn=!0,Lr=e}};function Gc(e,t,n,r,l,o,i,s,u){Nn=!1,Lr=null,Kc.apply(Yc,arguments)}function Xc(e,t,n,r,l,o,i,s,u){if(Gc.apply(this,arguments),Nn){if(Nn){var d=Lr;Nn=!1,Lr=null}else throw Error(y(198));Tr||(Tr=!0,so=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(Lt(e)!==e)throw Error(y(188))}function qc(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Yi(l),e;if(o===r)return Yi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function zs(e){return e=qc(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ps(e);if(t!==null)return t;e=e.sibling}return null}var Fs=ye.unstable_scheduleCallback,Gi=ye.unstable_cancelCallback,Zc=ye.unstable_shouldYield,Jc=ye.unstable_requestPaint,K=ye.unstable_now,ed=ye.unstable_getCurrentPriorityLevel,Zo=ye.unstable_ImmediatePriority,_s=ye.unstable_UserBlockingPriority,Mr=ye.unstable_NormalPriority,td=ye.unstable_LowPriority,Ls=ye.unstable_IdlePriority,nl=null,Oe=null;function nd(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:od,rd=Math.log,ld=Math.LN2;function od(e){return e>>>=0,e===0?32:31-(rd(e)/ld|0)|0}var ir=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=wn(s):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Te(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=id(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Ms(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,ei,Rs,Ds,As,co=!1,sr=[],lt=null,ot=null,it=null,In=new Map,Rn=new Map,et=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function fn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cd(e,t,n,r,l){switch(t){case"focusin":return lt=fn(lt,e,t,n,r,l),!0;case"dragenter":return ot=fn(ot,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return In.set(o,fn(In.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Rn.set(o,fn(Rn.get(o)||null,e,t,n,r,l)),!0}return!1}function Os(e){var t=wt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=bs(n),t!==null){e.blockedOn=t,As(e.priority,function(){Rs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=Zn(n),t!==null&&ei(t),e.blockedOn=n,!1;t.shift()}return!0}function qi(e,t,n){wr(e)&&n.delete(t)}function dd(){co=!1,lt!==null&&wr(lt)&&(lt=null),ot!==null&&wr(ot)&&(ot=null),it!==null&&wr(it)&&(it=null),In.forEach(qi),Rn.forEach(qi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,dd)))}function Dn(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),ot!==null&&mn(ot,e),it!==null&&mn(it,e),In.forEach(t),Rn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Os(n),n.blockedOn===null&&et.shift()}var Gt=Xe.ReactCurrentBatchConfig,Rr=!0;function pd(e,t,n,r){var l=I,o=Gt.transition;Gt.transition=null;try{I=1,ti(e,t,n,r)}finally{I=l,Gt.transition=o}}function fd(e,t,n,r){var l=I,o=Gt.transition;Gt.transition=null;try{I=4,ti(e,t,n,r)}finally{I=l,Gt.transition=o}}function ti(e,t,n,r){if(Rr){var l=po(e,t,n,r);if(l===null)Il(e,t,r,Dr,n),Xi(e,r);else if(cd(l,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<ud.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&Is(o),o=po(e,t,n,r),o===null&&Il(e,t,r,Dr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Dr=null;function po(e,t,n,r){if(Dr=null,e=qo(r),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case Zo:return 1;case _s:return 4;case Mr:case td:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var nt=null,ni=null,Sr=null;function Us(){if(Sr)return Sr;var e,t=ni,n=t.length,r,l="value"in nt?nt.value:nt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Zi(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Zi,this.isPropagationStopped=Zi,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=we(an),qn=H({},an,{view:0,detail:0}),md=we(qn),El,bl,hn,rl=H({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(El=e.screenX-hn.screenX,bl=e.screenY-hn.screenY):bl=El=0,hn=e),El)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),Ji=we(rl),hd=H({},rl,{dataTransfer:0}),gd=we(hd),vd=H({},qn,{relatedTarget:0}),zl=we(vd),xd=H({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=we(xd),kd=H({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wd=we(kd),Sd=H({},an,{data:0}),ea=we(Sd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function li(){return Ed}var bd=H({},qn,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=we(bd),Pd=H({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=we(Pd),Fd=H({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),_d=we(Fd),Ld=H({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=we(Ld),Md=H({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=we(Md),Rd=[9,13,27,32],oi=Qe&&"CompositionEvent"in window,Cn=null;Qe&&"documentMode"in document&&(Cn=document.documentMode);var Dd=Qe&&"TextEvent"in window&&!Cn,$s=Qe&&(!oi||Cn&&8<Cn&&11>=Cn),na=" ",ra=!1;function Hs(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Ad(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Od(e,t){if(Rt)return e==="compositionend"||!oi&&Hs(e,t)?(e=Us(),Sr=ni=nt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $s&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function Ws(e,t,n,r){Ss(r),t=Ar(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,An=null;function Ud(e){nu(e,0)}function ll(e){var t=Ot(e);if(hs(t))return e}function $d(e,t){if(e==="change")return t}var Qs=!1;if(Qe){var Pl;if(Qe){var Fl="oninput"in document;if(!Fl){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Fl=typeof oa.oninput=="function"}Pl=Fl}else Pl=!1;Qs=Pl&&(!document.documentMode||9<document.documentMode)}function ia(){En&&(En.detachEvent("onpropertychange",Ks),An=En=null)}function Ks(e){if(e.propertyName==="value"&&ll(An)){var t=[];Ws(t,An,e,qo(e)),Es(Ud,t)}}function Hd(e,t,n){e==="focusin"?(ia(),En=t,An=n,En.attachEvent("onpropertychange",Ks)):e==="focusout"&&ia()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Wd(e,t){if(e==="click")return ll(t)}function Qd(e,t){if(e==="input"||e==="change")return ll(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Kd;function On(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Kl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sa(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function Ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ys(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=sa(n,o);var i=sa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Qe&&"documentMode"in document&&11>=document.documentMode,Dt=null,fo=null,bn=null,mo=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mo||Dt==null||Dt!==_r(r)||(r=Dt,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&On(bn,r)||(bn=r,r=Ar(fo,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},_l={},Xs={};Qe&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function ol(e){if(_l[e])return _l[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xs)return _l[e]=t[n];return e}var qs=ol("animationend"),Zs=ol("animationiteration"),Js=ol("animationstart"),eu=ol("transitionend"),tu=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){tu.set(e,t),_t(t,[e])}for(var Ll=0;Ll<ca.length;Ll++){var Tl=ca[Ll],Xd=Tl.toLowerCase(),qd=Tl[0].toUpperCase()+Tl.slice(1);mt(Xd,"on"+qd)}mt(qs,"onAnimationEnd");mt(Zs,"onAnimationIteration");mt(Js,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(eu,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;da(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;da(l,s,d),o=u}}}if(Tr)throw e=so,Tr=!1,so=null,e}function A(e,t){var n=t[yo];n===void 0&&(n=t[yo]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[dr]){e[dr]=!0,cs.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ml("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Bs(t)){case 1:var l=pd;break;case 4:l=fd;break;default:l=ti}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=wt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Es(function(){var d=o,g=qo(n),h=[];e:{var m=tu.get(e);if(m!==void 0){var v=ri,k=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":v=zd;break;case"focusin":k="focus",v=zl;break;case"focusout":k="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_d;break;case qs:case Zs:case Js:v=yd;break;case eu:v=Td;break;case"scroll":v=md;break;case"wheel":v=Id;break;case"copy":case"cut":case"paste":v=wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ta}var w=(t&4)!==0,R=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Mn(c,p),x!=null&&w.push(Un(c,x,f)))),R)break;c=c.return}0<w.length&&(m=new v(m,k,null,n,g),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==oo&&(k=n.relatedTarget||n.fromElement)&&(wt(k)||k[Ke]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=d,k=k?wt(k):null,k!==null&&(R=Lt(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=d),v!==k)){if(w=Ji,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ta,x="onPointerLeave",p="onPointerEnter",c="pointer"),R=v==null?m:Ot(v),f=k==null?m:Ot(k),m=new w(x,c+"leave",v,n,g),m.target=R,m.relatedTarget=f,x=null,wt(g)===d&&(w=new w(p,c+"enter",k,n,g),w.target=f,w.relatedTarget=R,x=w),R=x,v&&k)t:{for(w=v,p=k,c=0,f=w;f;f=Tt(f))c++;for(f=0,x=p;x;x=Tt(x))f++;for(;0<c-f;)w=Tt(w),c--;for(;0<f-c;)p=Tt(p),f--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=Tt(w),p=Tt(p)}w=null}else w=null;v!==null&&pa(h,m,v,w,!1),k!==null&&R!==null&&pa(h,R,k,w,!0)}}e:{if(m=d?Ot(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=$d;else if(la(m))if(Qs)j=Qd;else{j=Vd;var C=Hd}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Wd);if(j&&(j=j(e,d))){Ws(h,j,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&eo(m,"number",m.value)}switch(C=d?Ot(d):window,e){case"focusin":(la(C)||C.contentEditable==="true")&&(Dt=C,fo=d,bn=null);break;case"focusout":bn=fo=Dt=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,ua(h,n,g);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":ua(h,n,g)}var E;if(oi)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Rt?Hs(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&($s&&n.locale!=="ko"&&(Rt||b!=="onCompositionStart"?b==="onCompositionEnd"&&Rt&&(E=Us()):(nt=g,ni="value"in nt?nt.value:nt.textContent,Rt=!0)),C=Ar(d,b),0<C.length&&(b=new ea(b,e,null,n,g),h.push({event:b,listeners:C}),E?b.data=E:(E=Vs(n),E!==null&&(b.data=E)))),(E=Dd?Ad(e,n):Od(e,n))&&(d=Ar(d,"onBeforeInput"),0<d.length&&(g=new ea("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=E))}nu(h,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Mn(e,n),o!=null&&r.unshift(Un(e,o,l)),o=Mn(e,t),o!=null&&r.push(Un(e,o,l))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Mn(n,o),u!=null&&i.unshift(Un(n,u,s))):l||(u=Mn(n,o),u!=null&&i.push(Un(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Jd=/\r\n?/g,ep=/\u0000|\uFFFD/g;function fa(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(ep,"")}function pr(e,t,n){if(t=fa(t),fa(e)!==t&&n)throw Error(y(425))}function Or(){}var ho=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,ma=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof ma<"u"?function(e){return ma.resolve(null).then(e).catch(rp)}:xo;function rp(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Dn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+sn,$n="__reactProps$"+sn,Ke="__reactContainer$"+sn,yo="__reactEvents$"+sn,lp="__reactListeners$"+sn,op="__reactHandles$"+sn;function wt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ha(e);e!==null;){if(n=e[Ae])return n;e=ha(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function il(e){return e[$n]||null}var ko=[],Bt=-1;function ht(e){return{current:e}}function O(e){0>Bt||(e.current=ko[Bt],ko[Bt]=null,Bt--)}function D(e,t){Bt++,ko[Bt]=e.current,e.current=t}var ft={},ie=ht(ft),fe=ht(!1),Et=ft;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Br(){O(fe),O(ie)}function ga(e,t,n){if(ie.current!==ft)throw Error(y(168));D(ie,t),D(fe,n)}function lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Hc(e)||"Unknown",l));return H({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Et=ie.current,D(ie,e),D(fe,fe.current),!0}function va(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=lu(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,O(fe),O(ie),D(ie,e)):O(fe),D(fe,n)}var $e=null,al=!1,Dl=!1;function ou(e){$e===null?$e=[e]:$e.push(e)}function ip(e){al=!0,ou(e)}function gt(){if(!Dl&&$e!==null){Dl=!0;var e=0,t=I;try{var n=$e;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,al=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Fs(Zo,gt),l}finally{I=t,Dl=!1}}return null}var Ut=[],$t=0,$r=null,Hr=0,Se=[],je=0,bt=null,He=1,Ve="";function yt(e,t){Ut[$t++]=Hr,Ut[$t++]=$r,$r=e,Hr=t}function iu(e,t,n){Se[je++]=He,Se[je++]=Ve,Se[je++]=bt,bt=e;var r=He;e=Ve;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var o=32-Te(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,He=1<<32-Te(t)+l|n<<l|r,Ve=o+e}else He=1<<o|n<<l|r,Ve=e}function ai(e){e.return!==null&&(yt(e,1),iu(e,1,0))}function si(e){for(;e===$r;)$r=Ut[--$t],Ut[$t]=null,Hr=Ut[--$t],Ut[$t]=null;for(;e===bt;)bt=Se[--je],Se[je]=null,Ve=Se[--je],Se[je]=null,He=Se[--je],Se[je]=null}var xe=null,ve=null,B=!1,Le=null;function au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ve=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:He,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ve=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(B){var t=ve;if(t){var n=t;if(!xa(e,t)){if(wo(e))throw Error(y(418));t=at(n.nextSibling);var r=xe;t&&xa(e,t)?au(r,n):(e.flags=e.flags&-4097|2,B=!1,xe=e)}}else{if(wo(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,xe=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function fr(e){if(e!==xe)return!1;if(!B)return ya(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=ve)){if(wo(e))throw su(),Error(y(418));for(;t;)au(e,t),t=at(t.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=xe?at(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ve;e;)e=at(e.nextSibling)}function en(){ve=xe=null,B=!1}function ui(e){Le===null?Le=[e]:Le.push(e)}var ap=Xe.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function uu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=dt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,x){return c===null||c.tag!==6?(c=Vl(f,p.mode,x),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,x){var j=f.type;return j===It?g(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&ka(j)===c.type)?(x=l(c,f.props),x.ref=gn(p,c,f),x.return=p,x):(x=Fr(f.type,f.key,f.props,null,p.mode,x),x.ref=gn(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Wl(f,p.mode,x),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function g(p,c,f,x,j){return c===null||c.tag!==7?(c=Ct(f,p.mode,x,j),c.return=p,c):(c=l(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Vl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return f=Fr(c.type,c.key,c.props,null,p.mode,f),f.ref=gn(p,null,c),f.return=p,f;case Mt:return c=Wl(c,p.mode,f),c.return=p,c;case Ze:var x=c._init;return h(p,x(c._payload),f)}if(kn(c)||dn(c))return c=Ct(c,p.mode,f,null),c.return=p,c;mr(p,c)}return null}function m(p,c,f,x){var j=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:s(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===j?u(p,c,f,x):null;case Mt:return f.key===j?d(p,c,f,x):null;case Ze:return j=f._init,m(p,c,j(f._payload),x)}if(kn(f)||dn(f))return j!==null?null:g(p,c,f,x,null);mr(p,f)}return null}function v(p,c,f,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(c,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rr:return p=p.get(x.key===null?f:x.key)||null,u(c,p,x,j);case Mt:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,j);case Ze:var C=x._init;return v(p,c,f,C(x._payload),j)}if(kn(x)||dn(x))return p=p.get(f)||null,g(c,p,x,j,null);mr(c,x)}return null}function k(p,c,f,x){for(var j=null,C=null,E=c,b=c=0,W=null;E!==null&&b<f.length;b++){E.index>b?(W=E,E=null):W=E.sibling;var L=m(p,E,f[b],x);if(L===null){E===null&&(E=W);break}e&&E&&L.alternate===null&&t(p,E),c=o(L,c,b),C===null?j=L:C.sibling=L,C=L,E=W}if(b===f.length)return n(p,E),B&&yt(p,b),j;if(E===null){for(;b<f.length;b++)E=h(p,f[b],x),E!==null&&(c=o(E,c,b),C===null?j=E:C.sibling=E,C=E);return B&&yt(p,b),j}for(E=r(p,E);b<f.length;b++)W=v(E,p,b,f[b],x),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?b:W.key),c=o(W,c,b),C===null?j=W:C.sibling=W,C=W);return e&&E.forEach(function(ze){return t(p,ze)}),B&&yt(p,b),j}function w(p,c,f,x){var j=dn(f);if(typeof j!="function")throw Error(y(150));if(f=j.call(f),f==null)throw Error(y(151));for(var C=j=null,E=c,b=c=0,W=null,L=f.next();E!==null&&!L.done;b++,L=f.next()){E.index>b?(W=E,E=null):W=E.sibling;var ze=m(p,E,L.value,x);if(ze===null){E===null&&(E=W);break}e&&E&&ze.alternate===null&&t(p,E),c=o(ze,c,b),C===null?j=ze:C.sibling=ze,C=ze,E=W}if(L.done)return n(p,E),B&&yt(p,b),j;if(E===null){for(;!L.done;b++,L=f.next())L=h(p,L.value,x),L!==null&&(c=o(L,c,b),C===null?j=L:C.sibling=L,C=L);return B&&yt(p,b),j}for(E=r(p,E);!L.done;b++,L=f.next())L=v(E,p,b,L.value,x),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?b:L.key),c=o(L,c,b),C===null?j=L:C.sibling=L,C=L);return e&&E.forEach(function(un){return t(p,un)}),B&&yt(p,b),j}function R(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===It&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var j=f.key,C=c;C!==null;){if(C.key===j){if(j=f.type,j===It){if(C.tag===7){n(p,C.sibling),c=l(C,f.props.children),c.return=p,p=c;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&ka(j)===C.type){n(p,C.sibling),c=l(C,f.props),c.ref=gn(p,C,f),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}f.type===It?(c=Ct(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Fr(f.type,f.key,f.props,null,p.mode,x),x.ref=gn(p,c,f),x.return=p,p=x)}return i(p);case Mt:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Wl(f,p.mode,x),c.return=p,p=c}return i(p);case Ze:return C=f._init,R(p,c,C(f._payload),x)}if(kn(f))return k(p,c,f,x);if(dn(f))return w(p,c,f,x);mr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=Vl(f,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return R}var tn=uu(!0),cu=uu(!1),Vr=ht(null),Wr=null,Ht=null,ci=null;function di(){ci=Ht=Wr=null}function pi(e){var t=Vr.current;O(Vr),e._currentValue=t}function jo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Wr=e,ci=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Wr===null)throw Error(y(308));Ht=e,Wr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function fi(e){St===null?St=[e]:St.push(e)}function du(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Je=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,g=d=u=null,s=o;do{var m=s.lane,v=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,w=s;switch(m=t,v=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){h=k.call(v,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(v,h,m):k,m==null)break e;h=H({},h,m);break e;case 2:Je=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=v,u=h):g=g.next=v,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Pt|=i,e.lanes=i,e.memoizedState=h}}function Sa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var Jn={},Be=ht(Jn),Hn=ht(Jn),Vn=ht(Jn);function jt(e){if(e===Jn)throw Error(y(174));return e}function hi(e,t){switch(D(Vn,t),D(Hn,e),D(Be,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}O(Be),D(Be,t)}function nn(){O(Be),O(Hn),O(Vn)}function fu(e){jt(Vn.current);var t=jt(Be.current),n=no(t,e.type);t!==n&&(D(Hn,e),D(Be,n))}function gi(e){Hn.current===e&&(O(Be),O(Hn))}var U=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function vi(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Cr=Xe.ReactCurrentDispatcher,Ol=Xe.ReactCurrentBatchConfig,zt=0,$=null,G=null,Z=null,Yr=!1,zn=!1,Wn=0,sp=0;function re(){throw Error(y(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(zt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?pp:fp,e=n(r,l),zn){o=0;do{if(zn=!1,Wn=0,25<=o)throw Error(y(301));o+=1,Z=G=null,t.updateQueue=null,Cr.current=mp,e=n(r,l)}while(zn)}if(Cr.current=Gr,t=G!==null&&G.next!==null,zt=0,Z=G=$=null,Yr=!1,t)throw Error(y(300));return e}function ki(){var e=Wn!==0;return Wn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function be(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=be(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var g=d.lane;if((zt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,$.lanes|=g,Pt|=g}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,$.lanes|=o,Pt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=be(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mu(){}function hu(e,t){var n=$,r=be(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,wi(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,vu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));zt&30||gu(n,t,l)}return l}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&ku(e)}function xu(e,t,n){return n(function(){yu(t)&&ku(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function ku(e){var t=Ye(e,1);t!==null&&Me(t,e,1,-1)}function ja(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,$,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return be().memoizedState}function Er(e,t,n,r){var l=De();$.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=be();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&xi(r,i.deps)){l.memoizedState=Kn(t,n,o,r);return}}$.flags|=e,l.memoizedState=Kn(1|t,n,o,r)}function Na(e,t){return Er(8390656,8,e,t)}function wi(e,t){return sl(2048,8,e,t)}function Su(e,t){return sl(4,2,e,t)}function ju(e,t){return sl(4,4,e,t)}function Nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,Nu.bind(null,t,e),n)}function Si(){}function Eu(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bu(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return zt&21?(Ie(n,t)||(n=Ts(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function up(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{I=n,Ol.transition=r}}function Pu(){return be().memoizedState}function cp(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))_u(t,n);else if(n=du(e,t,n,r),n!==null){var l=se();Me(n,e,r,l),Lu(n,t,r)}}function dp(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))_u(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,i)){var u=t.interleaved;u===null?(l.next=l,fi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=du(e,t,l,r),n!==null&&(l=se(),Me(n,e,r,l),Lu(n,t,r))}}function Fu(e){var t=e.alternate;return e===$||t!==null&&t===$}function _u(e,t){zn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Gr={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},pp={readContext:Ee,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Na,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Er(4194308,4,Nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:ja,useDebugValue:Si,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ja(!1),t=e[0];return e=up.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=De();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));zt&30||gu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Na(xu.bind(null,r,o,e),[e]),r.flags|=2048,Kn(9,vu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(B){var n=Ve,r=He;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:Ee,useCallback:Eu,useContext:Ee,useEffect:wi,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:bu,useReducer:Bl,useRef:wu,useState:function(){return Bl(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=be();return zu(t,G.memoizedState,e)},useTransition:function(){var e=Bl(Qn)[0],t=be().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:Pu,unstable_isNewReconciler:!1},mp={readContext:Ee,useCallback:Eu,useContext:Ee,useEffect:wi,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:bu,useReducer:Ul,useRef:wu,useState:function(){return Ul(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=be();return G===null?t.memoizedState=e:zu(t,G.memoizedState,e)},useTransition:function(){var e=Ul(Qn)[0],t=be().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:Pu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),o=We(r,l);o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),o=We(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Me(t,e,r,n),Nr(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!On(n,r)||!On(l,o):!0}function Tu(e,t,n){var r=!1,l=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(l=me(t)?Et:ie.current,r=t.contextTypes,o=(r=r!=null)?Jt(e,l):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Co(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ee(o):(o=me(t)?Et:ie.current,l.context=Jt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(No(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Ro=r),Eo(e,t)},n}function Iu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Eo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var gp=Xe.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?cu(t,null,n,r):tn(t,e.child,n,r)}function Fa(e,t,n,r,l){n=n.render;var o=t.ref;return Xt(t,l),r=yi(e,t,n,r,o,l),n=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(B&&n&&ai(t),t.flags|=1,ae(e,t,r,l),t.child)}function _a(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Fi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ru(e,t,o,r,l)):(e=Fr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:On,n(i,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(On(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return bo(e,t,n,r,l)}function Du(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Wt,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Wt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Wt,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Wt,ge),ge|=r;return ae(e,t,l,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bo(e,t,n,r,l){var o=me(n)?Et:ie.current;return o=Jt(t,o),Xt(t,l),n=yi(e,t,n,r,o,l),r=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(B&&r&&ai(t),t.flags|=1,ae(e,t,n,l),t.child)}function La(e,t,n,r,l){if(me(n)){var o=!0;Ur(t)}else o=!1;if(Xt(t,l),t.stateNode===null)br(e,t),Tu(t,n,r),Co(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=me(n)?Et:ie.current,d=Jt(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ea(t,i,r,d),Je=!1;var m=t.memoizedState;i.state=m,Qr(t,r,i,l),u=t.memoizedState,s!==r||m!==u||fe.current||Je?(typeof g=="function"&&(No(t,n,g,r),u=t.memoizedState),(s=Je||Ca(t,n,s,r,m,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,pu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),i.props=d,h=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=me(n)?Et:ie.current,u=Jt(t,u));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ea(t,i,r,u),Je=!1,m=t.memoizedState,i.state=m,Qr(t,r,i,l);var k=t.memoizedState;s!==h||m!==k||fe.current||Je?(typeof v=="function"&&(No(t,n,v,r),k=t.memoizedState),(d=Je||Ca(t,n,d,r,m,k,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zo(e,t,n,r,o,l)}function zo(e,t,n,r,l,o){Au(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&va(t,n,!1),Ge(e,t,o);r=t.stateNode,gp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,s,o)):ae(e,t,s,o),t.memoizedState=r.state,l&&va(t,n,!0),t.child}function Ou(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),hi(e,t.containerInfo)}function Ta(e,t,n,r,l){return en(),ui(l),t.flags|=256,ae(e,t,n,r),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Ct(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fo(n),t.memoizedState=Po,e):ji(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return vp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=dt(s,o):(o=Ct(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Fo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Po,r}return o=e.child,e=o.sibling,r=dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ji(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ui(r),tn(t,e.child,null,n),e=ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(y(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Ct(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=Fo(i),t.memoizedState=Po,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=$l(o,r,void 0),hr(e,t,i,r)}if(s=(i&e.childLanes)!==0,pe||s){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),Me(r,e,l,-1))}return Pi(),r=$l(Error(y(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=at(l.nextSibling),xe=t,B=!0,Le=null,e!==null&&(Se[je++]=He,Se[je++]=Ve,Se[je++]=bt,He=e.id,Ve=e.overflow,bt=t),t=ji(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jo(e.return,t,n)}function Hl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Uu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:Ou(t),en();break;case 5:fu(t);break;case 1:me(t.type)&&Ur(t);break;case 4:hi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Bu(e,t,n):(D(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Ge(e,t,n)}var $u,_o,Hu,Vu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jt(Be.current);var o=null;switch(n){case"input":l=Zl(e,l),r=Zl(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Or)}ro(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&A("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Br(),le(t),null;case 3:return r=t.stateNode,nn(),O(fe),O(ie),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Oo(Le),Le=null))),_o(e,t),le(t),null;case 5:gi(t);var l=jt(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=jt(Be.current),fr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[$n]=o,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)A(Sn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Hi(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":Wi(r,o),A("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",""+s]):Ln.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&A("scroll",r)}switch(n){case"input":lr(r),Vi(r,o,!0);break;case"textarea":lr(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Or)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ae]=t,e[$n]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)A(Sn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":Hi(e,r),l=Zl(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":Wi(e,r),l=to(e,r),A("invalid",e);break;default:l=r}ro(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?ws(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ys(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tn(e,u):typeof u=="number"&&Tn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?u!=null&&o==="onScroll"&&A("scroll",e):u!=null&&Ko(e,o,u,i))}switch(n){case"input":lr(e),Vi(e,r,!1);break;case"textarea":lr(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Or)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(Vn.current),jt(Be.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return le(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&t.mode&1&&!(t.flags&128))su(),en(),t.flags|=98560,o=!1;else if(o=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ae]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Le!==null&&(Oo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Pi())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),_o(e,t),e===null&&Bn(t.stateNode.containerInfo),le(t),null;case 10:return pi(t.type._context),le(t),null;case 17:return me(t.type)&&Br(),le(t),null;case 19:if(O(U),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)vn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Kr(e),i!==null){for(t.flags|=128,vn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>ln&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return le(t),null}else 2*K()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function kp(e,t){switch(si(t),t.tag){case 1:return me(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),O(fe),O(ie),vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gi(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return nn(),null;case 10:return pi(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var gr=!1,oe=!1,wp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Lo(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ia=!1;function Sp(e,t){if(ho=Rr,e=Gs(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=i),m===o&&++g===r&&(u=i),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Rr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,R=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Fe(t.type,w),R);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Ia,Ia=!1,k}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Lo(t,n,o)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function To(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[$n],delete t[yo],delete t[lp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Or));else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}var ee=null,_e=!1;function qe(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:oe||Vt(n,t);case 6:var r=ee,l=_e;ee=null,qe(e,t,n),ee=r,_e=l,ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Dn(e)):Rl(ee,n.stateNode));break;case 4:r=ee,l=_e,ee=n.stateNode.containerInfo,_e=!0,qe(e,t,n),ee=r,_e=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Lo(n,t,i),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!oe&&(Vt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,qe(e,t,n),oe=r):qe(e,t,n);break;default:qe(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(r){var l=_p.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,_e=!1;break e;case 3:ee=s.stateNode.containerInfo,_e=!0;break e;case 4:ee=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(ee===null)throw Error(y(160));Ku(o,i,l),ee=null,_e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Re(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(w){V(e,e.return,w)}try{Pn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Pe(t,e),Re(e),r&512&&n!==null&&Vt(n,n.return);break;case 5:if(Pe(t,e),Re(e),r&512&&n!==null&&Vt(n,n.return),e.flags&32){var l=e.stateNode;try{Tn(l,"")}catch(w){V(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&gs(l,o),lo(s,i);var d=lo(s,o);for(i=0;i<u.length;i+=2){var g=u[i],h=u[i+1];g==="style"?ws(l,h):g==="dangerouslySetInnerHTML"?ys(l,h):g==="children"?Tn(l,h):Ko(l,g,h,d)}switch(s){case"input":Jl(l,o);break;case"textarea":vs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Qt(l,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qt(l,!!o.multiple,o.defaultValue,!0):Qt(l,!!o.multiple,o.multiple?[]:"",!1))}l[$n]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Pe(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Pe(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Pe(t,e),Re(e);break;case 13:Pe(t,e),Re(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=K())),r&4&&Da(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||g,Pe(t,e),oe=d):Pe(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,v=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Vt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Vt(m,m.return);break;case 22:if(m.memoizedState!==null){Oa(h);continue}}v!==null?(v.return=m,S=v):Oa(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ks("display",i))}catch(w){V(e,e.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){V(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Re(e),r&4&&Da(e);break;case 21:break;default:Pe(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tn(l,""),r.flags&=-33);var o=Ra(e);Io(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ra(e);Mo(e,s,i);break;default:throw Error(y(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){S=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=gr;var d=oe;if(gr=i,(oe=u)&&!d)for(S=l;S!==null;)i=S,u=i.child,i.tag===22&&i.memoizedState!==null?Ba(l):u!==null?(u.return=i,S=u):Ba(l);for(;o!==null;)S=o,Gu(o),o=o.sibling;S=l,gr=s,oe=d}Aa(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Aa(e)}}function Aa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Sa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Dn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&To(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Oa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ba(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var o=t.return;try{To(t)}catch(u){V(t,o,u)}break;case 5:var i=t.return;try{To(t)}catch(u){V(t,i,u)}}}catch(u){V(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Np=Math.ceil,Xr=Xe.ReactCurrentDispatcher,Ni=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,T=0,J=null,Y=null,te=0,ge=0,Wt=ht(0),X=0,Yn=null,Pt=0,dl=0,Ci=0,Fn=null,de=null,Ei=0,ln=1/0,Ue=null,qr=!1,Ro=null,ut=null,vr=!1,rt=null,Zr=0,_n=0,Do=null,zr=-1,Pr=0;function se(){return T&6?K():zr!==-1?zr:zr=K()}function ct(e){return e.mode&1?T&2&&te!==0?te&-te:ap.transition!==null?(Pr===0&&(Pr=Ts()),Pr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Bs(e.type)),e):1}function Me(e,t,n,r){if(50<_n)throw _n=0,Do=null,Error(y(185));Xn(e,n,r),(!(T&2)||e!==J)&&(e===J&&(!(T&2)&&(dl|=n),X===4&&tt(e,te)),he(e,r),n===1&&T===0&&!(t.mode&1)&&(ln=K()+500,al&&gt()))}function he(e,t){var n=e.callbackNode;ad(e,t);var r=Ir(e,e===J?te:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?ip(Ua.bind(null,e)):ou(Ua.bind(null,e)),np(function(){!(T&6)&&gt()}),n=null;else{switch(Ms(r)){case 1:n=Zo;break;case 4:n=_s;break;case 16:n=Mr;break;case 536870912:n=Ls;break;default:n=Mr}n=rc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(zr=-1,Pr=0,T&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ir(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var l=T;T|=2;var o=Zu();(J!==e||te!==t)&&(Ue=null,ln=K()+500,Nt(e,t));do try{bp();break}catch(s){qu(e,s)}while(!0);di(),Xr.current=o,T=l,Y!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Ao(e,l))),t===1)throw n=Yn,Nt(e,0),tt(e,r),he(e,K()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cp(l)&&(t=Jr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Ao(e,o))),t===1))throw n=Yn,Nt(e,0),tt(e,r),he(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,de,Ue);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Ei+500-K(),10<t)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xo(kt.bind(null,e,de,Ue),t);break}kt(e,de,Ue);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Te(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=xo(kt.bind(null,e,de,Ue),r);break}kt(e,de,Ue);break;case 5:kt(e,de,Ue);break;default:throw Error(y(329))}}}return he(e,K()),e.callbackNode===n?Xu.bind(null,e):null}function Ao(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=de,de=n,t!==null&&Oo(t)),e}function Oo(e){de===null?de=e:de.push.apply(de,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ci,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(T&6)throw Error(y(327));qt();var t=Ir(e,0);if(!(t&1))return he(e,K()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=Yn,Nt(e,0),tt(e,t),he(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,Ue),he(e,K()),null}function bi(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(ln=K()+500,al&&gt())}}function Ft(e){rt!==null&&rt.tag===0&&!(T&6)&&qt();var t=T;T|=1;var n=Ce.transition,r=I;try{if(Ce.transition=null,I=1,e)return e()}finally{I=r,Ce.transition=n,T=t,!(T&6)&&gt()}}function zi(){ge=Wt.current,O(Wt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),O(fe),O(ie),vi();break;case 5:gi(r);break;case 4:nn();break;case 13:O(U);break;case 19:O(U);break;case 10:pi(r.type._context);break;case 22:case 23:zi()}n=n.return}if(J=e,Y=e=dt(e.current,null),te=ge=t,X=0,Yn=null,Ci=dl=Pt=0,de=Fn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}St=null}return e}function qu(e,t){do{var n=Y;try{if(di(),Cr.current=Gr,Yr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(zt=0,Z=G=$=null,zn=!1,Wn=0,Ni.current=null,n===null||n.return===null){X=1,Yn=t,Y=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=za(i);if(v!==null){v.flags&=-257,Pa(v,i,s,o,t),v.mode&1&&ba(o,d,t),t=v,u=d;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){ba(o,d,t),Pi();break e}u=Error(y(426))}}else if(B&&s.mode&1){var R=za(i);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Pa(R,i,s,o,t),ui(rn(u,s));break e}}o=u=rn(u,s),X!==4&&(X=2),Fn===null?Fn=[o]:Fn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Mu(o,u,t);wa(o,p);break e;case 1:s=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Iu(o,s,t);wa(o,x);break e}}o=o.return}while(o!==null)}ec(n)}catch(j){t=j,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Zu(){var e=Xr.current;return Xr.current=Gr,e===null?Gr:e}function Pi(){(X===0||X===3||X===2)&&(X=4),J===null||!(Pt&268435455)&&!(dl&268435455)||tt(J,te)}function Jr(e,t){var n=T;T|=2;var r=Zu();(J!==e||te!==t)&&(Ue=null,Nt(e,t));do try{Ep();break}catch(l){qu(e,l)}while(!0);if(di(),T=n,Xr.current=r,Y!==null)throw Error(y(261));return J=null,te=0,X}function Ep(){for(;Y!==null;)Ju(Y)}function bp(){for(;Y!==null&&!Zc();)Ju(Y)}function Ju(e){var t=nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?ec(e):Y=t,Ni.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=yp(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=I,l=Ce.transition;try{Ce.transition=null,I=1,zp(e,t,n,r)}finally{Ce.transition=l,I=r}return null}function zp(e,t,n,r){do qt();while(rt!==null);if(T&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sd(e,o),e===J&&(Y=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,rc(Mr,function(){return qt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=I;I=1;var s=T;T|=4,Ni.current=null,Sp(e,n),Yu(n,e),Yd(go),Rr=!!ho,go=ho=null,e.current=n,jp(n),Jc(),T=s,I=i,Ce.transition=o}else e.current=n;if(vr&&(vr=!1,rt=e,Zr=l),o=e.pendingLanes,o===0&&(ut=null),nd(n.stateNode),he(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Ro,Ro=null,e;return Zr&1&&e.tag!==0&&qt(),o=e.pendingLanes,o&1?e===Do?_n++:(_n=0,Do=e):_n=0,gt(),null}function qt(){if(rt!==null){var e=Ms(Zr),t=Ce.transition,n=I;try{if(Ce.transition=null,I=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Zr=0,T&6)throw Error(y(331));var l=T;for(T|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Pn(8,g,o)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,v=g.return;if(Wu(g),g===d){S=null;break}if(m!==null){m.return=v,S=m;break}S=v}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,S=p;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){i=S;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,S=f;else e:for(i=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(j){V(s,s.return,j)}if(s===i){S=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,S=x;break e}S=s.return}}if(T=l,gt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{I=n,Ce.transition=t}}return!1}function $a(e,t,n){t=rn(n,t),t=Mu(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Xn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Iu(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Xn(t,1,e),he(t,e));break}}t=t.return}}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>K()-Ei?Nt(e,0):Ci|=n),he(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=se();e=Ye(e,t),e!==null&&(Xn(e,t,n),he(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function _p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,xp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&iu(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var l=Jt(t,ie.current);Xt(t,n),l=yi(null,t,r,e,l,n);var o=ki();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Ur(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Co(t,r,e,n),t=zo(null,t,r,!0,o,n)):(t.tag=0,B&&o&&ai(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tp(r),e=Fe(r,e),l){case 0:t=bo(null,t,r,e,n);break e;case 1:t=La(null,t,r,e,n);break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=_a(null,t,r,Fe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),bo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),La(e,t,r,l,n);case 3:e:{if(Ou(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,pu(e,t),Qr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=rn(Error(y(423)),t),t=Ta(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Ta(e,t,r,n,l);break e}else for(ve=at(t.stateNode.containerInfo.firstChild),xe=t,B=!0,Le=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ge(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return fu(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,vo(r,l)?i=null:o!==null&&vo(r,o)&&(t.flags|=32),Au(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Bu(e,t,n);case 4:return hi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Fa(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D(Vr,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=We(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),jo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),jo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ee(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),_a(e,t,r,l,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),br(e,t),t.tag=1,me(r)?(e=!0,Ur(t)):e=!1,Xt(t,n),Tu(t,r,l),Co(t,r,l,n),zo(null,t,r,!0,e,n);case 19:return Uu(e,t,n);case 22:return Du(e,t,n)}throw Error(y(156,t.tag))};function rc(e,t){return Fs(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Lp(e,t,n,r)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return Fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Xo)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Fi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case It:return Ct(n.children,l,o,t);case Yo:i=8,l|=8;break;case Yl:return e=Ne(12,n,t,l|2),e.elementType=Yl,e.lanes=o,e;case Gl:return e=Ne(13,n,t,l),e.elementType=Gl,e.lanes=o,e;case Xl:return e=Ne(19,n,t,l),e.elementType=Xl,e.lanes=o,e;case fs:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:i=10;break e;case ps:i=9;break e;case Go:i=11;break e;case Xo:i=14;break e;case Ze:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=fs,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _i(e,t,n,r,l,o,i,s,u){return e=new Mp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(o),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return lu(e,n,t)}return t}function oc(e,t,n,r,l,o,i,s,u){return e=_i(n,r,!0,e,l,o,i,s,u),e.context=lc(null),n=e.current,r=se(),l=ct(n),o=We(r,l),o.callback=t??null,st(n,o,l),e.current.lanes=l,Xn(e,l,r),he(e,r),e}function fl(e,t,n,r){var l=t.current,o=se(),i=ct(l);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,i),e!==null&&(Me(e,l,i,o),Nr(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ha(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){Ha(e,t),(e=e.alternate)&&Ha(e,t)}function Rp(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ti(e){this._internalRoot=e}ml.prototype.render=Ti.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));fl(e,t,null,null)};ml.prototype.unmount=Ti.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){fl(null,e,null,null)}),t[Ke]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Os(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Dp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=el(i);o.call(d)}}var i=oc(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=i,e[Ke]=i.current,Bn(e.nodeType===8?e.parentNode:e),Ft(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=el(u);s.call(d)}}var u=_i(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=u,e[Ke]=u.current,Bn(e.nodeType===8?e.parentNode:e),Ft(function(){fl(t,u,n,r)}),u}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=el(i);s.call(u)}}fl(t,i,e,l)}else i=Dp(n,t,e,l,r);return el(i)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Jo(t,n|1),he(t,K()),!(T&6)&&(ln=K()+500,gt()))}break;case 13:Ft(function(){var r=Ye(e,1);if(r!==null){var l=se();Me(r,e,1,l)}}),Li(e,1)}};ei=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=se();Me(t,e,134217728,n)}Li(e,134217728)}};Rs=function(e){if(e.tag===13){var t=ct(e),n=Ye(e,t);if(n!==null){var r=se();Me(n,e,t,r)}Li(e,t)}};Ds=function(){return I};As=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};io=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(y(90));hs(r),Jl(r,l)}}}break;case"textarea":vs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Ns=bi;Cs=Ft;var Ap={usingClientEntryPoint:!1,Events:[Zn,Ot,il,Ss,js,bi]},xn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{nl=xr.inject(Op),Oe=xr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(y(200));return Ip(e,t,null,n)};ke.createRoot=function(e,t){if(!Mi(e))throw Error(y(299));var n=!1,r="",l=ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_i(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Ti(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=zs(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Ft(e)};ke.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ic;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,o,i),e[Ke]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ke.render=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Ft(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=bi;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),as.exports=ke;var Bp=as.exports,Wa=Bp;Ql.createRoot=Wa.createRoot,Ql.hydrateRoot=Wa.hydrateRoot;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...s},u)=>M.createElement("svg",{ref:u,...$p,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:sc("lucide",l),...s},[...i.map(([d,g])=>M.createElement(d,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(e,t)=>{const n=M.forwardRef(({className:r,...l},o)=>M.createElement(Hp,{ref:o,iconNode:t,className:sc(`lucide-${Up(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=_("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=_("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=_("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=_("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=_("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=_("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=_("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=_("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=_("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=_("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=_("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=_("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=_("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=_("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=_("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=_("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=_("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=_("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=_("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=_("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=_("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=_("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=_("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=_("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=_("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=_("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=_("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=_("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=_("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=_("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=_("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=_("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=_("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=_("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=_("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function yf(){const[e,t]=M.useState(!1),[n,r]=M.useState("light"),[l,o]=M.useState(!1),[i,s]=M.useState("hero");M.useEffect(()=>{const h=localStorage.getItem("portfolio-theme")||"light";r(h),document.documentElement.setAttribute("data-theme",h);const m=()=>{o(window.scrollY>20);const v=["hero","about","skills","experience","projects","contact"],k=window.scrollY+120;for(const w of v){const R=document.getElementById(w);if(R){const p=R.offsetTop,c=R.offsetHeight;if(k>=p&&k<p+c){s(w);break}}}};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const u=()=>{const h=n==="dark"?"light":"dark";r(h),document.documentElement.setAttribute("data-theme",h),localStorage.setItem("portfolio-theme",h)},d=h=>{t(!1);const m=document.querySelector(h);m&&m.scrollIntoView({behavior:"smooth"})},g=[{name:"Home",href:"#hero",id:"hero"},{name:"About",href:"#about",id:"about"},{name:"Skills",href:"#skills",id:"skills"},{name:"Experience",href:"#experience",id:"experience"},{name:"Projects",href:"#projects",id:"projects"},{name:"Contact",href:"#contact",id:"contact"}];return a.jsxs("nav",{className:`navbar ${l?"scrolled":""}`,children:[a.jsxs("div",{className:"container nav-container",children:[a.jsxs("a",{href:"#hero",className:"nav-logo",onClick:()=>d("#hero"),children:["Shyam",a.jsx("span",{children:"."})]}),a.jsxs("div",{className:"nav-links",children:[g.map(h=>a.jsx("a",{href:h.href,className:`nav-item ${i===h.id?"active":""}`,onClick:m=>{m.preventDefault(),d(h.href)},children:h.name},h.id)),a.jsx("button",{onClick:u,className:"theme-toggle","aria-label":"Toggle theme",children:n==="dark"?a.jsx(Ga,{size:18}):a.jsx(Ya,{size:18})}),a.jsx("a",{href:"#contact",className:"desktop-hire-btn",onClick:h=>{h.preventDefault(),d("#contact")},children:"Hire Me"})]}),a.jsxs("div",{className:"mobile-actions",children:[a.jsx("button",{onClick:u,className:"theme-toggle mobile-theme-btn","aria-label":"Toggle theme",children:n==="dark"?a.jsx(Ga,{size:16}):a.jsx(Ya,{size:16})}),a.jsx("button",{onClick:()=>t(!e),className:"mobile-menu-btn","aria-label":"Toggle menu",children:e?a.jsx(Bo,{size:24,style:{color:"#FFF"}}):a.jsx(af,{size:24})})]})]}),a.jsxs("div",{className:`mobile-nav-drawer ${e?"open":""}`,children:[a.jsxs("div",{className:"drawer-nav-header",children:[a.jsxs("span",{className:"drawer-logo",children:["Shyam",a.jsx("span",{children:"."})]}),a.jsx("button",{onClick:()=>t(!1),className:"drawer-close","aria-label":"Close menu",children:a.jsx(Bo,{size:28})})]}),a.jsx("div",{className:"mobile-links",children:g.map(h=>a.jsx("a",{href:h.href,className:`mobile-nav-item ${i===h.id?"active":""}`,onClick:m=>{m.preventDefault(),d(h.href)},children:h.name},h.id))}),a.jsx("div",{className:"drawer-footer",children:a.jsx("a",{href:"#contact",className:"mobile-hire-pill",onClick:h=>{h.preventDefault(),d("#contact")},children:"Hire Me"})})]}),a.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: var(--transition-normal);
        }

        .navbar.scrolled {
          height: 64px;
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -1px;
        }

        .nav-logo span {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: var(--transition-fast);
        }

        .nav-item:hover, .nav-item.active {
          color: var(--text-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: var(--transition-fast);
          transform: translateX(-50%);
        }

        .nav-item.active::after, .nav-item:hover::after {
          width: 100%;
        }

        .theme-toggle {
          background: none;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition-normal);
        }

        .theme-toggle:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .desktop-hire-btn {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          background-color: var(--accent-color);
          color: #FFFFFF;
          text-decoration: none;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid var(--accent-color);
          transition: var(--transition-normal);
        }

        .desktop-hire-btn:hover {
          background-color: transparent;
          color: var(--accent-color);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 2001; /* Ensure close icon overlays menu */
        }

        /* Red Full-Bleed Mobile Drawer Menu */
        .mobile-nav-drawer {
          position: fixed;
          inset: 0;
          background-color: #E53E3E; /* Solid red */
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2000;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          pointer-events: none;
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .drawer-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .drawer-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #FFFFFF;
        }

        .drawer-logo span {
          color: #111112;
        }

        .drawer-close {
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: auto;
          margin-top: 24px;
        }

        .mobile-nav-item {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 12px;
          transition: var(--transition-fast);
        }

        .mobile-nav-item:hover, .mobile-nav-item.active {
          color: #FFFFFF;
          padding-left: 12px;
          border-bottom-color: #FFFFFF;
        }

        .drawer-footer {
          margin-top: 32px;
        }

        .mobile-hire-pill {
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          background-color: #FFFFFF; /* White pill */
          color: #E53E3E; /* Red text */
          text-decoration: none;
          padding: 16px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: var(--transition-normal);
        }

        .mobile-hire-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-actions {
            display: flex;
          }
        }
      `})]})}function kf(){const[e,t]=M.useState(!0),[n,r]=M.useState(!1),l=M.useRef(null),o=()=>{l.current&&(l.current.muted=!l.current.muted,t(l.current.muted))},i=()=>{const d=l.current;d&&(d.paused?(d.play().catch(()=>{}),r(!0)):(d.pause(),r(!1)))},s=d=>{d.preventDefault();const g=document.querySelector("#projects");g&&g.scrollIntoView({behavior:"smooth"})},u=d=>{d.preventDefault();const g=document.querySelector("#contact");g&&g.scrollIntoView({behavior:"smooth"})};return a.jsxs("section",{id:"hero",className:"hero-section",children:[a.jsxs("div",{className:"video-background-container",children:[a.jsx("video",{ref:l,className:"bg-video",src:"/videos/hero-banner.mp4",loop:!0,muted:!0,playsInline:!0}),a.jsx("div",{className:"video-vignette-overlay"})]}),a.jsxs("div",{className:"video-play-trigger-box",children:[a.jsx("button",{className:"circular-audio-btn",onClick:i,"aria-label":n?"Pause video":"Play video",children:n?a.jsx(uf,{size:20}):a.jsx(df,{size:20})}),a.jsx("span",{className:"audio-label-text",onClick:i,children:n?"PAUSE":"PLAY"})]}),a.jsxs("div",{className:"container hero-content-container",children:[a.jsxs("div",{className:"hero-main-details",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("span",{className:"badge-pulse"}),"Cloud Infrastructure"]}),a.jsxs("h1",{className:"hero-title",children:["Hi, I'm a Cloud &",a.jsx("br",{}),a.jsx("span",{children:"Systems Specialist"})]}),a.jsx("h2",{className:"hero-subtitle",children:"Shyam Kumar D"}),a.jsx("p",{className:"hero-tagline",children:"I build fast, secure, and auto-scalable networks on AWS, manage server environments, and resolve critical outages under strict SLA guidelines."}),a.jsxs("div",{className:"hero-cta-group",children:[a.jsxs("a",{href:"#projects",className:"btn btn-pill-white",onClick:s,children:["View My Work ",a.jsx(Wp,{size:16})]}),a.jsx("a",{href:"#contact",className:"btn btn-pill-translucent",onClick:u,children:"Contact Me"}),a.jsxs("a",{href:"/Shyam_Kumar_D_Resume.pdf",download:!0,className:"btn btn-resume-download",children:[a.jsx(uc,{size:18})," Download CV"]})]})]}),a.jsxs("div",{className:"video-mute-trigger-box",children:[a.jsx("button",{className:"circular-audio-btn",onClick:o,"aria-label":e?"Unmute pitch":"Mute pitch",children:e?a.jsx(vf,{size:20}):a.jsx(gf,{size:20})}),a.jsx("span",{className:"audio-label-text",onClick:o,children:e?"UNMUTE PITCH":"MUTE PITCH"})]})]}),a.jsx("style",{children:`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #0E0E10; /* Dark fallback background */
        }

        /* Full Background Video Cover */
        .video-background-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Dark Vignette Mask for readability */
        .video-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.45) 0%, 
            rgba(0, 0, 0, 0.35) 50%, 
            rgba(0, 0, 0, 0.75) 100%
          );
          z-index: 2;
        }

        /* Overlaid Container */
        .hero-content-container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px; /* Offset sticky header */
        }

        .hero-main-details {
          max-width: 680px;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-family: var(--font-display);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--accent-color);
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.05;
          color: #FFFFFF;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .hero-title span {
          color: var(--accent-color); /* Highlight color */
        }

        .hero-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 8px;
        }

        .hero-tagline {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 36px;
          font-weight: 500;
        }

        /* Buttons cluster */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-pill-white {
          background-color: #FFFFFF;
          color: #111112;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1px solid #FFFFFF;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .btn-pill-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.25);
        }

        .btn-pill-translucent {
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          font-weight: 700;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .btn-pill-translucent:hover {
          background-color: #FFFFFF;
          color: #E53E3E;
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        .btn-resume-download {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          background: none;
          border: none;
        }

        .btn-resume-download:hover {
          color: #FFFFFF;
        }

        /* Bottom-Left Audio Control */
        .video-mute-trigger-box {
          position: absolute;
          bottom: 40px;
          left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeInUp 1s ease-out;
          z-index: 10;
        }

        /* Right-Side Play/Pause Control */
        .video-play-trigger-box {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          animation: fadeInUp 1s ease-out;
        }

        .video-play-trigger-box .audio-label-text {
          writing-mode: vertical-rl;
        }

        @media (max-width: 768px) {
          .video-play-trigger-box {
            right: 12px;
          }
        }

        .circular-audio-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .circular-audio-btn:hover {
          background: #FFFFFF;
          color: var(--accent-color);
          border-color: #FFFFFF;
          transform: scale(1.08);
        }

        .audio-label-text {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
          letter-spacing: 0.1em;
          transition: var(--transition-fast);
        }

        .audio-label-text:hover {
          color: #FFFFFF;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 38px;
          }

          .hero-tagline {
            font-size: 15px;
          }

          .hero-cta-group {
            gap: 12px;
          }

          .btn-pill-white, .btn-pill-translucent {
            padding: 12px 24px;
            font-size: 13px;
          }
        }
      `})]})}function wf(){return a.jsxs("section",{id:"about",className:"about-section fade-in-section",children:[a.jsxs("div",{className:"about-parallax-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"banner-content container",children:[a.jsx("p",{className:"banner-tag",children:"Systems & Operations Strategy"}),a.jsxs("h2",{className:"banner-quote",children:['"Automating systems workflows.',a.jsx("br",{}),'Ensuring high availability."']})]})]}),a.jsxs("div",{className:"container about-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"01. Biography"}),a.jsx("h3",{className:"section-title",children:"My Professional Narrative"})]}),a.jsxs("div",{className:"about-grid",children:[a.jsx("div",{className:"about-visual-block",children:a.jsxs("div",{className:"portrait-card-wrapper",children:[a.jsx("div",{className:"portrait-red-backdrop"}),a.jsx("div",{className:"portrait-image-card",children:a.jsx("img",{src:"/assets/photo_2026-06-11_19-15-13.jpg",alt:"Shyam Kumar D Portrait"})})]})}),a.jsxs("div",{className:"about-story",children:[a.jsx("p",{className:"story-lead",children:"I specialize in architecting secure, reliable cloud environments and resolving critical systems incidents."}),a.jsx("p",{className:"story-body",children:"As a B.Sc. Networking student graduating in 2027, my core focus is bridging the gap between local system operations and scalable cloud virtualization. I specialize in the configuration of AWS resources (EC2, ALB, S3, VPC), Linux OS administration, and automated shell scripting."}),a.jsx("p",{className:"story-body",children:"Through double Deloitte simulations in cybersecurity and data analytics, I've developed a rigorous methodology for diagnosing machinery outages, analyzing system telemetry records, and mitigating security threats."}),a.jsx("p",{className:"story-emphasis",children:"Fully committed to high-availability targets, I am actively seeking Associate Cloud Support positions and am prepared to support global teams via rotational and night shifts."}),a.jsxs("div",{className:"about-attribute-chips",children:[a.jsxs("div",{className:"attr-chip",children:[a.jsx(nf,{size:14})," Systems Engineering"]}),a.jsxs("div",{className:"attr-chip",children:[a.jsx(Zp,{size:14})," Rotational Shift Ready"]}),a.jsxs("div",{className:"attr-chip",children:[a.jsx(Ii,{size:14})," Deloitte Simulated"]})]})]})]})]}),a.jsx("style",{children:`
        .about-section {
          padding-bottom: 80px;
          position: relative;
        }

        /* Parallax Image Break Banner */
        .about-parallax-banner {
          position: relative;
          height: 420px;
          background-image: url('/assets/assetshero-banner.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Parallax effect */
          display: flex;
          align-items: center;
          margin-bottom: 80px;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(14, 14, 16, 0.9) 20%, rgba(14, 14, 16, 0.4) 100%);
        }

        [data-theme="light"] .banner-overlay {
          background: linear-gradient(to right, rgba(250, 250, 252, 0.95) 20%, rgba(250, 250, 252, 0.6) 100%);
        }

        .banner-content {
          position: relative;
          z-index: 2;
        }

        .banner-tag {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 12px;
        }

        .banner-quote {
          font-size: 36px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        /* Grid */
        .about-container {
          margin-top: 40px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 64px;
          align-items: center;
        }

        /* Portrait Offset Card Styling */
        .about-visual-block {
          display: flex;
          justify-content: center;
        }

        .portrait-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 4 / 5;
        }

        .portrait-red-backdrop {
          position: absolute;
          inset: 16px -16px -16px 16px;
          background-color: var(--accent-color);
          border-radius: var(--radius-lg);
          z-index: 1;
        }

        .portrait-image-card {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          z-index: 2;
          transition: var(--transition-normal);
        }

        .portrait-card-wrapper:hover .portrait-image-card {
          transform: translate(6px, -6px);
        }

        .portrait-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Biography content columns */
        .about-story {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-lead {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .story-body {
          font-size: 15px;
          color: var(--text-secondary);
        }

        .story-emphasis {
          font-size: 15px;
          font-weight: 600;
          color: var(--accent-color);
          border-left: 2px solid var(--accent-color);
          padding-left: 16px;
          margin-top: 8px;
        }

        .about-attribute-chips {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .attr-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px 14px;
          border-radius: 50px;
        }

        @media (max-width: 992px) {
          .about-parallax-banner {
            height: auto;
            min-height: 250px;
            background-attachment: scroll;
            padding: 60px 0;
          }

          .banner-quote {
            font-size: 24px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .portrait-card-wrapper {
            max-width: 300px;
          }
        }
      `})]})}function Sf(){const e=[{title:"Networking & Systems",icon:a.jsx(sf,{className:"skill-icon",size:22}),skills:[{name:"TCP/IP Protocol Suite",status:"Core"},{name:"DNS Records & Routing",status:"Core"},{name:"DHCP & IP Addressing",status:"Core"},{name:"OSI Model Layers",status:"Core"},{name:"VPC Subnetting & CIDR",status:"Advanced"},{name:"VPN Configuration",status:"Advanced"}]},{title:"Cloud Technologies",icon:a.jsx(Jp,{className:"skill-icon",size:22}),skills:[{name:"AWS EC2 instances",status:"Expert"},{name:"AWS S3 Storage",status:"Expert"},{name:"Application Load Balancers",status:"Expert"},{name:"AWS Virtual Private Cloud",status:"Advanced"},{name:"Azure Core Compute",status:"Basic"},{name:"Azure Storage & Networking",status:"Basic"}]},{title:"Support & Ticketing",icon:a.jsx(rf,{className:"skill-icon",size:22}),skills:[{name:"Zendesk Service Desk",status:"Proficient"},{name:"Freshdesk ticketing",status:"Proficient"},{name:"JIRA Service Desk",status:"Core"},{name:"SLA Monitoring & SLA breach prevention",status:"Core"},{name:"First Contact Resolution (FCR)",status:"Core"},{name:"Voice Support & escalation handling",status:"Core"}]},{title:"Systems & Troubleshooting",icon:a.jsx(xf,{className:"skill-icon",size:22}),skills:[{name:"Windows Server / client systems",status:"Expert"},{name:"Linux systems administration (Ubuntu)",status:"Advanced"},{name:"Root Cause Analysis (RCA)",status:"Expert"},{name:"Remote Desktop Protocol (RDP)",status:"Expert"},{name:"System Log analysis",status:"Advanced"},{name:"Postman API Testing",status:"Proficient"}]},{title:"Automation & Scripting",icon:a.jsx(dc,{className:"skill-icon",size:22}),skills:[{name:"Python scripting",status:"Advanced"},{name:"Bash automation scripting",status:"Advanced"},{name:"Git & GitHub version control",status:"Proficient"},{name:"System cron jobs scheduler",status:"Advanced"}]},{title:"Professional Soft Skills",icon:a.jsx(hf,{className:"skill-icon",size:22}),skills:[{name:"Active Listening & empathy",status:"Core"},{name:"Clear technical translation",status:"Core"},{name:"Patient Under Pressure",status:"Core"},{name:"Flexible with rotational shifts",status:"Core"}]}];return a.jsxs("section",{id:"skills",className:"skills-section fade-in-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"02. Capabilities"}),a.jsx("h3",{className:"section-title",children:"Core Technical Expertise"})]}),a.jsx("div",{className:"skills-grid",children:e.map((t,n)=>a.jsxs("div",{className:"skills-card glass-card",children:[a.jsxs("div",{className:"skills-card-header",children:[t.icon,a.jsx("h4",{children:t.title})]}),a.jsx("div",{className:"skills-list",children:t.skills.map((r,l)=>a.jsxs("div",{className:"skill-item",children:[a.jsx("span",{className:"skill-name",children:r.name}),a.jsx("span",{className:`skill-status status-${r.status.toLowerCase().replace(" & ","-")}`,children:r.status})]},l))})]},n))})]}),a.jsx("style",{children:`
        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .skills-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color); /* Light red border default */
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .skill-icon {
          color: var(--accent-color);
        }

        .skills-card-header h4 {
          font-size: 18px;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }

        .skill-item:hover {
          border-color: var(--accent-color);
          transform: translateX(4px);
          background: rgba(var(--accent-rgb), 0.03);
        }

        .skill-name {
          font-size: 14px;
          color: var(--text-primary);
          font-weight: 600;
        }

        .skill-status {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-core {
          background-color: rgba(229, 62, 62, 0.08);
          color: var(--accent-color);
          border: 1px solid rgba(229, 62, 62, 0.15);
        }

        .status-expert {
          background-color: rgba(16, 185, 129, 0.08);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .status-advanced {
          background-color: rgba(59, 130, 246, 0.08);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.15);
        }

        .status-proficient {
          background-color: rgba(245, 158, 11, 0.08);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.15);
        }

        .status-basic {
          background-color: rgba(107, 114, 128, 0.08);
          color: #9ca3af;
          border: 1px solid rgba(107, 114, 128, 0.15);
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function jf(){const e=[{index:"01",type:"work",title:"Operations & Customer Experience Associate",company:"Sapna Garments, Madurai",period:"Sep 2024 – Present (Part-Time)",icon:a.jsx(Yp,{size:16}),details:["Managed daily point-of-sale (POS) transactional databases, payment processing, and cash reconciliation audits.","Supervised local inventory system stocks, coordinating timely restocking operations.","Resolved billing disputes and customer account inquiries directly using active listening and L1 escalation practices."]},{index:"02",type:"internship",title:"Cloud Computing & Web Development Trainee",company:"Reccsar Pvt. Ltd.",period:"Apr 2026",icon:a.jsx(Ii,{size:16}),details:["Analyzed cloud service topologies (IaaS, PaaS, SaaS) and deployment structures.","Explored web application configurations on cloud computing platforms.","Observed system operational architectures supporting real-world, high-traffic environments."]},{index:"03",type:"simulation",title:"Deloitte Cybersecurity Incident Simulation",company:"Forage simulated Job Experience",period:"Mar 2026",icon:a.jsx(mf,{size:16}),details:["Conducted systems audit for security vulnerabilities and threat assessment anomalies.","Simulated network incident response procedures, compiling threat analysis reports for security operations centers."]},{index:"04",type:"simulation",title:"Deloitte Data Analytics Simulation",company:"Forage simulated Job Experience",period:"Mar 2026",icon:a.jsx(Kp,{size:16}),details:["Analyzed simulated factory machinery metrics to locate downtime trends and systems faults.","Generated visual diagnostic analytics summaries to support infrastructure reliability auditing."]}];return a.jsxs("section",{id:"experience",className:"timeline-section fade-in-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"03. History"}),a.jsx("h3",{className:"section-title",children:"Timeline & Professional Journeys"})]}),a.jsxs("div",{className:"timeline-layout-grid",children:[a.jsx("div",{className:"timeline-trail",children:e.map((t,n)=>a.jsxs("div",{className:"timeline-card-wrapper",children:[a.jsx("div",{className:"timeline-marker",children:a.jsx("div",{className:"marker-dot"})}),a.jsxs("div",{className:"red-timeline-card",children:[a.jsxs("div",{className:"card-top-header",children:[a.jsx("span",{className:"card-number-index",children:t.index}),a.jsxs("span",{className:"timeline-period",children:[a.jsx(Gp,{size:12})," ",t.period]})]}),a.jsx("h4",{children:t.title}),a.jsx("h5",{children:t.company}),a.jsx("ul",{className:"timeline-details",children:t.details.map((r,l)=>a.jsx("li",{children:r},l))})]})]},n))}),a.jsx("div",{className:"timeline-sidebar-visual",children:a.jsx("div",{className:"offset-card-wrapper",children:a.jsxs("div",{className:"offset-card glass-card",children:[a.jsx("div",{className:"image-frame",children:a.jsx("img",{src:"/assets/photo_desk_pose.png",alt:"Shyam Kumar D at Desk"})}),a.jsxs("div",{className:"offset-card-text",children:[a.jsx("p",{className:"philosophy-label",children:"Operational Philosophy"}),a.jsx("p",{className:"philosophy-quote",children:`"Every network outage has a root cause. The thrill is finding it through log diagnostics before it impacts the client's operation."`})]})]})})})]}),a.jsxs("div",{className:"education-divider",children:[a.jsx("span",{className:"edu-line"}),a.jsx("div",{className:"edu-title",children:"Education Milestones"}),a.jsx("span",{className:"edu-line"})]}),a.jsxs("div",{className:"education-grid",children:[a.jsxs("div",{className:"edu-card glass-card",children:[a.jsx("span",{className:"edu-year",children:"Graduating 2027"}),a.jsx("h4",{children:"B.Sc. Networking"}),a.jsx("h5",{children:"Subbalakshmi Lakshmipathy College of Science, Madurai"}),a.jsx("p",{className:"edu-gpa",children:"GPA: 8.4 / 10.0"}),a.jsx("p",{className:"edu-desc",children:"Core coursework in TCP/IP architectures, router configuration, database management, and network troubleshooting protocols."})]}),a.jsxs("div",{className:"edu-card glass-card",children:[a.jsx("span",{className:"edu-year",children:"Completed 2023"}),a.jsx("h4",{children:"Higher Secondary (HSC)"}),a.jsx("h5",{children:"C.E.O.A Matriculation Hr. Sec. School, Madurai"}),a.jsx("p",{className:"edu-desc",children:"Focused studies in mathematics, physics, and computer science operations."})]})]})]}),a.jsx("style",{children:`
        .timeline-section {
          padding: 80px 0;
          position: relative;
        }

        .timeline-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 56px;
          margin-top: 40px;
          align-items: flex-start;
        }

        /* Dotted Timeline Trail */
        .timeline-trail {
          position: relative;
          padding-left: 32px;
        }

        .timeline-trail::before {
          content: '';
          position: absolute;
          left: 17px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-left: 2px dashed var(--accent-color); /* Red Dotted Line */
        }

        .timeline-card-wrapper {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-card-wrapper:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -22px;
          top: 24px;
          z-index: 2;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
          border: 2px solid var(--bg-color);
          transition: var(--transition-normal);
        }

        .timeline-card-wrapper:hover .marker-dot {
          transform: scale(1.3);
          box-shadow: 0 0 15px var(--accent-color);
        }

        /* Solid Red Timeline Card (Sushmita Reference Style) */
        .red-timeline-card {
          background-color: #E53E3E; /* Saturated red card background */
          color: #FFFFFF; /* White text */
          padding: 32px;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(229, 62, 62, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition-normal);
        }

        .red-timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(229, 62, 62, 0.25);
        }

        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-number-index {
          font-family: var(--font-display);
          font-size: 24px;
          font-style: italic;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.55);
        }

        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          background-color: rgba(0, 0, 0, 0.15);
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
        }

        .red-timeline-card h4 {
          font-size: 22px;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .red-timeline-card h5 {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          font-weight: 500;
        }

        .timeline-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
        }

        .timeline-details li {
          line-height: 1.5;
        }

        /* Sidebar visual layout (Stripe-inspired) */
        .timeline-sidebar-visual {
          position: sticky;
          top: 100px;
        }

        .offset-card-wrapper {
          position: relative;
        }

        .offset-card {
          border-radius: var(--radius-lg) !important;
          overflow: hidden;
          padding: 16px;
          border: 1px solid var(--border-color);
        }

        .image-frame {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/5;
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: var(--transition-normal);
        }

        .offset-card-text {
          padding: 16px 8px 8px 8px;
        }

        .philosophy-label {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .philosophy-quote {
          font-size: 14px;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.5;
        }

        /* Education Layout */
        .education-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 80px;
          margin-bottom: 32px;
        }

        .edu-line {
          height: 1px;
          flex-grow: 1;
          background: var(--border-color);
        }

        .edu-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .edu-card {
          padding: 32px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--card-bg-solid);
        }

        .edu-year {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          padding: 2px 10px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 16px;
        }

        .edu-card h4 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .edu-card h5 {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-weight: 500;
        }

        .edu-gpa {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .edu-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .timeline-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .timeline-sidebar-visual {
            position: relative;
            top: 0;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `})]})}function Nf(){var h,m;const[e,t]=M.useState(!1),[n,r]=M.useState(!1),[l,o]=M.useState([{id:1,name:"EC2-Server-01",status:"Healthy",ip:"10.0.1.14",load:"12%"},{id:2,name:"EC2-Server-02",status:"Healthy",ip:"10.0.1.85",load:"14%"}]),[i,s]=M.useState(null),u=()=>{e||(t(!0),s({name:"Application Load Balancer (ALB)",type:"Routing & Health Checks",details:"Distributing traffic to target groups. Detection of high capacity load. Initiating auto-scaling trigger."}),setTimeout(()=>{r(!0),o(v=>[...v,{id:3,name:"EC2-Server-03 (Auto)",status:"Initializing",ip:"10.0.1.201",load:"0%"}])},1500),setTimeout(()=>{o(v=>v.map(k=>k.id===3?{...k,status:"Healthy",load:"22%"}:{...k,load:"32%"}))},3500))},d=()=>{t(!1),r(!1),o([{id:1,name:"EC2-Server-01",status:"Healthy",ip:"10.0.1.14",load:"12%"},{id:2,name:"EC2-Server-02",status:"Healthy",ip:"10.0.1.85",load:"14%"}]),s(null)},g={route53:{name:"Amazon Route 53",type:"DNS Management",details:"Global DNS routing. Resolves shyamd2.com queries directly to the Application Load Balancer CNAME target."},alb:{name:"Application Load Balancer (ALB)",type:"Traffic Distribution",details:"Handles incoming HTTPS requests. Monitors target group health checks on path /health and routes traffic to active EC2 nodes."},ec2:{name:"EC2 Auto-Scaling Group",type:"Compute Resources",details:"Runs backend Nginx systems. Dynamically adjusts compute size based on CPU utilization metrics under SLA targets."},s3:{name:"Amazon S3 Bucket",type:"Static Object Storage",details:"Hosts public portfolio media resources, static assets, and cached files with CloudFront distribution endpoints."}};return a.jsxs("div",{className:"architecture-showcase glass-card",children:[a.jsxs("div",{className:"showcase-header",children:[a.jsx(Vp,{className:"header-icon",size:20}),a.jsxs("div",{children:[a.jsx("h3",{children:"AWS Scalable Infrastructure Simulator"}),a.jsx("p",{children:"Interactive network topology demonstrating Auto-scaling & ALB configurations"})]})]}),a.jsxs("div",{className:"simulator-grid",children:[a.jsx("div",{className:"diagram-container",children:a.jsxs("svg",{className:"topology-svg",viewBox:"0 0 600 320",children:[a.jsx("path",{d:"M 100 160 L 220 160",className:`conn-line ${e?"active":""}`}),a.jsx("path",{d:"M 260 160 C 300 130, 320 80, 380 80",className:`conn-line ${e?"active":""}`}),a.jsx("path",{d:"M 260 160 L 380 160",className:`conn-line ${e?"active":""}`}),a.jsx("path",{d:"M 260 160 C 300 190, 320 240, 380 240",className:`conn-line ${n?"active":""} ${n?"":"hidden"}`}),a.jsx("path",{d:"M 240 180 L 240 250",className:"conn-line static-conn"}),a.jsxs("g",{className:"svg-node",onClick:()=>s(g.route53),children:[a.jsx("circle",{cx:"100",cy:"160",r:"28",className:"node-bg"}),a.jsx("text",{x:"100",y:"165",className:"node-icon-text",children:"R53"}),a.jsx("text",{x:"100",y:"205",className:"node-label",children:"Route 53"})]}),a.jsxs("g",{className:"svg-node",onClick:()=>s(g.alb),children:[a.jsx("circle",{cx:"240",cy:"160",r:"32",className:`node-bg ${e?"pulse-border":""}`}),a.jsx("text",{x:"240",y:"165",className:"node-icon-text",children:"ALB"}),a.jsx("text",{x:"240",y:"210",className:"node-label",children:"AWS ALB"})]}),a.jsxs("g",{className:"svg-node",onClick:()=>s(g.s3),children:[a.jsx("circle",{cx:"240",cy:"270",r:"24",className:"node-bg"}),a.jsx("text",{x:"240",y:"274",className:"node-icon-text",children:"S3"}),a.jsx("text",{x:"240",y:"310",className:"node-label",children:"Static S3"})]}),a.jsxs("g",{className:"svg-node",onClick:()=>s(g.ec2),children:[a.jsx("rect",{x:"380",y:"55",width:"130",height:"50",rx:"8",className:"node-rect ec2-rect"}),a.jsx("text",{x:"392",y:"85",className:"node-text",children:"EC2-Server-01"}),a.jsx("circle",{cx:"500",cy:"80",r:"6",className:"status-dot online"})]}),a.jsxs("g",{className:"svg-node",onClick:()=>s(g.ec2),children:[a.jsx("rect",{x:"380",y:"135",width:"130",height:"50",rx:"8",className:"node-rect ec2-rect"}),a.jsx("text",{x:"392",y:"165",className:"node-text",children:"EC2-Server-02"}),a.jsx("circle",{cx:"500",cy:"160",r:"6",className:"status-dot online"})]}),a.jsxs("g",{className:`svg-node scaling-node-svg ${n?"visible":""}`,onClick:()=>s(g.ec2),children:[a.jsx("rect",{x:"380",y:"215",width:"130",height:"50",rx:"8",className:"node-rect ec2-rect scaling"}),a.jsx("text",{x:"392",y:"245",className:"node-text",children:"EC2-Server-03"}),a.jsx("circle",{cx:"500",cy:"240",r:"6",className:`status-dot ${((h=l[2])==null?void 0:h.status)==="Healthy"?"online":"initializing"}`})]})]})}),a.jsxs("div",{className:"controls-container",children:[a.jsxs("div",{className:"controls-actions",children:[e?a.jsx("button",{className:"sim-btn reset",onClick:d,children:"Reset Outage Simulation"}):a.jsx("button",{className:"sim-btn trigger",onClick:u,children:"Simulate Traffic Spike"}),a.jsx("p",{className:"sim-tip",children:"Click nodes in diagram to inspect cloud configs"})]}),a.jsxs("div",{className:"status-terminal glass-card",children:[a.jsx("h4",{children:"System Telemetry Logs"}),a.jsxs("div",{className:"terminal-logs",children:[a.jsx("p",{className:"log-line info",children:"[INFO] Infrastructure running nominal. 2 nodes active."}),e&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"log-line warn",children:"[WARN] ALB incoming traffic spiking: +350% queries/sec."}),a.jsx("p",{className:"log-line info",children:"[INFO] ALB CPU utilization threshold breached (>75%)."}),a.jsx("p",{className:"log-line alert",children:"[SCALE] Auto-Scaling Group triggering rule: Scale-Out (+1 EC2)."})]}),n&&a.jsx("p",{className:"log-line initializing-log",children:"[INIT] Deploying EC2-Server-03 in subnet-1a. Launching Nginx..."}),((m=l[2])==null?void 0:m.status)==="Healthy"&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"log-line success",children:"[OK] EC2-Server-03 health status: Healthy (200 OK)."}),a.jsx("p",{className:"log-line success",children:"[OK] ALB rebalanced load across 3 active instances. Nominal logs."})]})]})]}),i&&a.jsxs("div",{className:"node-details-card glass-card",children:[a.jsx("h5",{children:i.name}),a.jsx("span",{className:"node-details-type",children:i.type}),a.jsx("p",{children:i.details})]})]})]}),a.jsx("style",{children:`
        .architecture-showcase {
          padding: 32px;
          margin-top: 32px;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .header-icon {
          color: var(--accent-color);
        }

        .showcase-header h3 {
          font-size: 20px;
          color: var(--text-primary);
        }

        .showcase-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .simulator-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .diagram-container {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .topology-svg {
          width: 100%;
          height: auto;
          max-height: 280px;
        }

        /* SVG Node Styling */
        .svg-node {
          cursor: pointer;
        }

        .node-bg {
          fill: var(--card-bg-solid);
          stroke: var(--border-color);
          stroke-width: 2px;
          transition: var(--transition-fast);
        }

        .svg-node:hover .node-bg {
          stroke: var(--accent-color);
          fill: rgba(var(--accent-rgb), 0.1);
        }

        .node-icon-text {
          fill: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 11px;
          text-anchor: middle;
        }

        .node-label {
          fill: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 11px;
          text-anchor: middle;
        }

        .node-rect {
          fill: var(--card-bg-solid);
          stroke: var(--border-color);
          stroke-width: 1.5px;
          transition: var(--transition-fast);
        }

        .svg-node:hover .node-rect {
          stroke: var(--accent-color);
        }

        .node-text {
          fill: var(--text-primary);
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
        }

        .status-dot {
          transition: var(--transition-normal);
        }

        .status-dot.online {
          fill: #10b981;
          filter: drop-shadow(0 0 4px #10b981);
        }

        .status-dot.initializing {
          fill: #f59e0b;
          filter: drop-shadow(0 0 4px #f59e0b);
          animation: pulse-glow 1s infinite;
        }

        .conn-line {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 2px;
          stroke-dasharray: 6, 6;
          transition: var(--transition-normal);
        }

        .conn-line.active {
          stroke: var(--accent-color);
          animation: dash 30s linear infinite;
        }

        .conn-line.static-conn {
          stroke-dasharray: none;
        }

        .conn-line.hidden {
          opacity: 0;
        }

        .scaling-node-svg {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }

        .scaling-node-svg.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }

        /* Controls Column */
        .controls-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sim-btn {
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .sim-btn.trigger {
          background-color: var(--accent-color);
          color: white;
        }

        .sim-btn.trigger:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.3);
        }

        .sim-btn.reset {
          background-color: #1e1e24;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .sim-btn.reset:hover {
          border-color: var(--accent-color);
        }

        .sim-tip {
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
          margin-top: 8px;
        }

        .status-terminal {
          padding: 16px;
          border-radius: var(--radius-sm);
          background: rgba(0, 0, 0, 0.4);
        }

        .status-terminal h4 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .terminal-logs {
          font-family: monospace;
          font-size: 11px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          height: 120px;
          overflow-y: auto;
        }

        .log-line {
          margin: 0;
        }

        .log-line.info { color: #9ca3af; }
        .log-line.warn { color: #f59e0b; }
        .log-line.alert { color: #ef4444; }
        .log-line.success { color: #10b981; }
        .log-line.initializing-log { color: #3b82f6; }

        .node-details-card {
          padding: 16px;
          border-radius: var(--radius-sm);
          animation: fadeInUp 0.4s ease-out;
        }

        .node-details-card h5 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .node-details-type {
          font-size: 10px;
          color: var(--accent-color);
          text-transform: uppercase;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 8px;
        }

        .node-details-card p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .simulator-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Cf(){const[e,t]=M.useState("502"),[n,r]=M.useState(["System Diagnostic Shell initialized.","Ready for diagnostic command query. Select an outage case to troubleshoot below."]),[l,o]=M.useState(""),[i,s]=M.useState(!1),u=M.useRef(null);M.useEffect(()=>{var m;(m=u.current)==null||m.scrollIntoView({behavior:"smooth"})},[n]);const d=m=>{t(m),s(!1),r(m==="502"?["shyam-support-node:~ recruiter$ init-diagnostics --outage alb_502","[CRITICAL] Outage Alert: ALB returning 502 Bad Gateway.","[INFO] Checking Target Group Health Status...","[FAIL] Instance EC2-Server-01 in Target Group tg-web-apps: Unhealthy (Connection Refused on Port 80).","[FAIL] Instance EC2-Server-02 in Target Group tg-web-apps: Unhealthy (Connection Refused on Port 80).","Available tools: check-nginx, restart-nginx, verify-logs"]:["shyam-support-node:~ recruiter$ init-diagnostics --outage log_permission","[CRITICAL] Incident Alert: Bash automation daemon reports backup failures.","[INFO] Querying system logs backup scripts status...","[FAIL] /var/log/nginx/access.log: Permission Denied. Backup script failed to open file.","Available tools: ls -l /var/log, chmod 755, chown-nginx"])},g=m=>{if(m.preventDefault(),!l.trim())return;const v=l.trim().toLowerCase();h(v),o("")},h=m=>{let v=[];v.push(`shyam-support-node:~ recruiter$ ${m}`),e==="502"?m==="check-nginx"?v.push("[INFO] Running remote ssh: systemctl status nginx on EC2 nodes...","[FAIL] Nginx Service is: inactive (dead) on port 80."):m==="verify-logs"?v.push("[INFO] Reading last 5 lines of /var/log/nginx/error.log:","[ERROR] 2026/06/11 18:05:12 [emerg] bind() to 0.0.0.0:80 failed (Address already in use)"):m==="restart-nginx"?(v.push("[INFO] Releasing locked socket ports on 80...","[INFO] Executing: sudo systemctl start nginx","[OK] Nginx service successfully started on EC2 nodes.","[OK] Health check response: HTTP/1.1 200 OK.","[CRITICAL FIXED] ALB returned to Healthy. Outage resolved!"),s(!0)):v.push("Command not recognized. Try: check-nginx, verify-logs, restart-nginx"):m==="ls -l /var/log"?v.push("total 12","-rw-r----- 1 root root 4096 Jun 11 18:00 access.log","-rw-r----- 1 root root 2048 Jun 11 17:55 error.log"):m==="chown-nginx"?v.push("[INFO] Running: chown -R nginx:nginx /var/log/nginx","[FAIL] Operation not permitted (run with administrative privileges / sudo)"):m==="chmod 755"?(v.push("[INFO] Executing: sudo chmod 755 /var/log/nginx/access.log","[OK] File permissions updated: -rwxr-xr-x 1 root root 4096 access.log","[INFO] Retrying backup automation script daemon...","[OK] File read successfully. Database sync completed.","[CRITICAL FIXED] Incident Resolved! Logs automation active."),s(!0)):v.push("Command not recognized. Try: ls -l /var/log, chown-nginx, chmod 755"),r(k=>[...k,...v])};return a.jsxs("div",{className:"support-terminal glass-card",children:[a.jsxs("div",{className:"terminal-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx(dc,{className:"header-icon",size:18}),a.jsx("span",{children:"shyam-support-node:~ (Helpdesk Terminal)"})]}),a.jsxs("div",{className:"header-dots",children:[a.jsx("span",{className:"dot red"}),a.jsx("span",{className:"dot yellow"}),a.jsx("span",{className:"dot green"})]})]}),a.jsxs("div",{className:"terminal-body",children:[a.jsxs("div",{className:"terminal-screen",children:[n.map((m,v)=>a.jsx("div",{className:`terminal-line ${m.startsWith("shyam-support")?"input-line":""} ${m.includes("[FAIL]")?"fail-line":""} ${m.includes("[OK]")||m.includes("[CRITICAL FIXED]")?"success-line":""}`,children:m},v)),a.jsx("div",{ref:u})]}),a.jsxs("form",{onSubmit:g,className:"terminal-input-form",children:[a.jsx("span",{className:"terminal-prompt",children:"shyam-support-node:~ recruiter$"}),a.jsx("input",{type:"text",className:"terminal-input",value:l,onChange:m=>o(m.target.value),placeholder:"Type a command...",disabled:i}),a.jsx("button",{type:"submit",className:"terminal-enter-btn","aria-label":"Submit command",children:a.jsx(tf,{size:14})})]})]}),a.jsxs("div",{className:"terminal-controls",children:[a.jsxs("div",{className:"selector-group",children:[a.jsx("h5",{children:"Select Incident Case:"}),a.jsxs("div",{className:"case-btn-group",children:[a.jsx("button",{className:`case-btn ${e==="502"?"active":""}`,onClick:()=>d("502"),children:"ALB 502 Bad Gateway"}),a.jsx("button",{className:`case-btn ${e==="linux"?"active":""}`,onClick:()=>d("linux"),children:"Linux Log Permissions"})]})]}),a.jsxs("div",{className:"quick-actions-group",children:[a.jsx("h5",{children:"Diagnostic Quick-Actions:"}),a.jsxs("div",{className:"actions-btn-group",children:[e==="502"?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"action-btn",onClick:()=>h("check-nginx"),children:"check-nginx"}),a.jsx("button",{className:"action-btn",onClick:()=>h("verify-logs"),children:"verify-logs"}),a.jsx("button",{className:"action-btn resolve",onClick:()=>h("restart-nginx"),children:"restart-nginx"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"action-btn",onClick:()=>h("ls -l /var/log"),children:"ls -l /var/log"}),a.jsx("button",{className:"action-btn",onClick:()=>h("chown-nginx"),children:"chown-nginx"}),a.jsx("button",{className:"action-btn resolve",onClick:()=>h("chmod 755"),children:"chmod 755"})]}),a.jsx("button",{className:"action-btn reset-btn",onClick:()=>d(e),"aria-label":"Reset",children:a.jsx(pf,{size:14})})]})]})]}),a.jsx("style",{children:`
        .support-terminal {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0B0B0C;
          border: 1px solid var(--border-color);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #141416;
          padding: 12px 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-family: monospace;
          font-size: 12px;
        }

        .header-icon {
          color: var(--accent-color);
        }

        .header-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.red { background-color: #ef4444; }
        .dot.yellow { background-color: #f59e0b; }
        .dot.green { background-color: #10b981; }

        .terminal-body {
          padding: 20px;
        }

        .terminal-screen {
          background: rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.02);
          border-radius: var(--radius-sm);
          padding: 16px;
          height: 180px;
          overflow-y: auto;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #a7f3d0; /* Soft terminal green */
        }

        .terminal-line {
          white-space: pre-wrap;
          word-break: break-all;
        }

        .terminal-line.input-line {
          color: #f4f4f5;
          font-weight: 600;
        }

        .terminal-line.fail-line {
          color: #fca5a5; /* Light red */
        }

        .terminal-line.success-line {
          color: #6ee7b7; /* Bright green */
          font-weight: 600;
          text-shadow: 0 0 4px rgba(110, 231, 183, 0.4);
        }

        /* Input Form */
        .terminal-input-form {
          display: flex;
          align-items: center;
          background: #141416;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          margin-top: 16px;
        }

        .terminal-prompt {
          font-family: monospace;
          font-size: 12px;
          color: var(--text-secondary);
          margin-right: 8px;
          white-space: nowrap;
        }

        .terminal-input {
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: monospace;
          font-size: 12px;
          width: 100%;
        }

        .terminal-enter-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .terminal-enter-btn:hover {
          color: var(--accent-color);
        }

        /* Controls Section */
        .terminal-controls {
          background: #141416;
          padding: 20px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .selector-group, .quick-actions-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .terminal-controls h5 {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .case-btn-group, .actions-btn-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .case-btn, .action-btn {
          background: #1e1e24;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .case-btn.active, .case-btn:hover {
          background: rgba(var(--accent-rgb), 0.1);
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .action-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .action-btn.resolve {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .action-btn.resolve:hover {
          background: #10b981;
          color: white;
        }

        .action-btn.reset-btn {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        @media (max-width: 768px) {
          .terminal-controls {
            flex-direction: column;
          }
        }
      `})]})}function Ef(){const e=[{title:"Scalable Traffic Handling System",badge:"AWS Infrastructure",problem:"Configuring high-availability server setups capable of handling unpredictable traffic spikes without manual intervention.",solution:"Configured a multi-server setup utilizing AWS EC2 compute units registered under an Application Load Balancer target group. Enabled Auto-Scaling policies based on real-time CPU capacity thresholds and implemented port health checks.",tech:["AWS EC2","AWS ALB","Auto Scaling","VPC Routing","Nginx"],github:"https://github.com/ShyamD2"},{title:"Config-Driven Backend System",badge:"Systems Automation",problem:"Building robust, parameter-based systems architectures that adjust behaviors dynamically without code restarts.",solution:"Developed a backend configuration manager using structured system settings. Integrated logging systems to track runtime changes and built a solutions repository within a knowledge base database for future system audits.",tech:["Python Scripting","Systems Logging","YAML Parser","Shell Automation"],github:"https://github.com/ShyamD2"},{title:"IT Helpdesk Ticketing Lab",badge:"Technical Support Operations",problem:"Handling customer escalation queries efficiently under tight SLA windows.",solution:"Deployed a Level 1 helpdesk environment handling mock access control, software, and routing tickets. Practiced SLA ticket classification, first-contact resolutions (FCR), and escalation routing paths.",tech:["Zendesk API","JIRA Service Desk","Active Listening","RCA Diagnostics"],github:"https://github.com/ShyamD2"}];return a.jsxs("section",{id:"projects",className:"projects-section fade-in-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"04. Engineering"}),a.jsx("h3",{className:"section-title",children:"Projects That Define My Journey"})]}),a.jsx("div",{className:"projects-grid",children:e.map((t,n)=>a.jsxs("div",{className:"project-card glass-card",children:[a.jsxs("div",{className:"project-card-header",children:[a.jsx("span",{className:"project-badge",children:t.badge}),a.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"proj-github-link","aria-label":"GitHub",children:a.jsx(cc,{size:18})})]}),a.jsx("h4",{children:t.title}),a.jsxs("div",{className:"project-body",children:[a.jsxs("div",{className:"body-block",children:[a.jsx("h5",{children:"Problem Statement:"}),a.jsx("p",{children:t.problem})]}),a.jsxs("div",{className:"body-block",children:[a.jsx("h5",{children:"Implementation & Resolution:"}),a.jsx("p",{children:t.solution})]})]}),a.jsx("div",{className:"project-tech-tags",children:t.tech.map((r,l)=>a.jsx("span",{className:"tech-tag",children:r},l))})]},n))}),a.jsxs("div",{className:"sandbox-divider",children:[a.jsx("span",{className:"sandbox-line"}),a.jsxs("div",{className:"sandbox-title",children:[a.jsx(ef,{size:16})," Interactive Systems Playground"]}),a.jsx("span",{className:"sandbox-line"})]}),a.jsx("p",{className:"sandbox-intro-text",children:"Don't just review my credentials. Test my cloud configurations and troubleshooting workflows inside the active terminal console."}),a.jsxs("div",{className:"simulators-layout",children:[a.jsxs("div",{className:"terminal-bento-grid",children:[a.jsxs("div",{className:"bento-photo-card glass-card",children:[a.jsx("div",{className:"bento-photo-frame",children:a.jsx("img",{src:"/assets/photo_desk_arms.png",alt:"Shyam Kumar D at Desk"})}),a.jsxs("div",{className:"bento-photo-caption",children:[a.jsx("h5",{children:"Active Support Engineering"}),a.jsx("p",{children:"Equipped with white noise-cancelling headphones and direct system diagnostics for immediate ticketing responses."})]})]}),a.jsx("div",{className:"bento-terminal-wrapper",children:a.jsx(Cf,{})})]}),a.jsx("div",{className:"full-width-simulator-wrapper",children:a.jsx(Nf,{})})]})]}),a.jsx("style",{children:`
        .projects-section {
          padding: 80px 0;
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }

        .project-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .project-badge {
          background: rgba(var(--accent-rgb), 0.06);
          color: var(--accent-color);
          border: 1px solid rgba(var(--accent-rgb), 0.12);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .proj-github-link {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .proj-github-link:hover {
          color: var(--accent-color);
        }

        .project-card h4 {
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 16px;
          font-weight: 800;
        }

        .project-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .body-block h5 {
          font-size: 11px;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .body-block p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 4px;
        }

        /* Sandbox Divider */
        .sandbox-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 80px;
          margin-bottom: 12px;
        }

        .sandbox-line {
          height: 1px;
          flex-grow: 1;
          background: var(--border-color);
        }

        .sandbox-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sandbox-intro-text {
          text-align: center;
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 48px auto;
        }

        .simulators-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Terminal Bento Grid Layout */
        .terminal-bento-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 32px;
          align-items: stretch;
        }

        .bento-photo-card {
          padding: 16px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-color: var(--card-bg-solid);
        }

        .bento-photo-frame {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4 / 5;
        }

        .bento-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: var(--transition-normal);
        }

        .bento-photo-card:hover .bento-photo-frame img {
          transform: scale(1.03);
        }

        .bento-photo-caption h5 {
          font-size: 16px;
          color: var(--text-primary);
          margin-bottom: 6px;
          font-weight: 700;
        }

        .bento-photo-caption p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bento-terminal-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .terminal-bento-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .bento-photo-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function bf(){const[e,t]=M.useState(!1),n=[{name:"Cloud Concepts",percentage:92,color:"#e53e3e"},{name:"Security & Compliance",percentage:85,color:"#3b82f6"},{name:"Technology Infrastructure",percentage:88,color:"#10b981"},{name:"Billing & Pricing Models",percentage:95,color:"#f59e0b"}],r=[{title:"Cloud Models Overview",text:"IaaS (EC2, VPC) provides computing controls; PaaS (Elastic Beanstalk, RDS) handles systems overhead; SaaS (Zendesk, Gmail) provides application end-use."},{title:"Shared Responsibility Model",text:"AWS is responsible for security OF the cloud (global infrastructure, hardware, hypervisors); Customer is responsible for security IN the cloud (OS updates, firewall configs, identity access management, user data encryption)."},{title:"AWS Architecting Principles",text:"Design for failure (redundancy, Multi-AZ), loose coupling (queuing, API layers), security by design (least privilege IAM rules), and automated scalability."}];return a.jsxs("div",{className:"cert-tracker glass-card",children:[a.jsxs("div",{className:"tracker-header",children:[a.jsx(Ii,{className:"header-icon",size:24}),a.jsxs("div",{children:[a.jsx("h3",{children:"AWS Certification & Domain Preparation"}),a.jsx("p",{children:"Tracking progress for the AWS Certified Cloud Practitioner (CLF-C02)"})]}),a.jsx("span",{className:"exam-status-badge",children:"In Progress"})]}),a.jsxs("div",{className:"tracker-grid",children:[a.jsx("div",{className:"gauges-container",children:n.map((l,o)=>a.jsxs("div",{className:"gauge-card",children:[a.jsxs("div",{className:"circle-gauge-wrapper",children:[a.jsxs("svg",{className:"circle-gauge",viewBox:"0 0 36 36",children:[a.jsx("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),a.jsx("path",{className:"circle-fill",stroke:l.color,strokeDasharray:`${l.percentage}, 100`,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),a.jsxs("div",{className:"gauge-value",children:[l.percentage,"%"]})]}),a.jsx("span",{className:"gauge-label",children:l.name})]},o))}),a.jsxs("div",{className:"roadmap-container",children:[a.jsxs("div",{className:"roadmap-timeline",children:[a.jsxs("div",{className:"roadmap-step completed",children:[a.jsx(Qa,{className:"step-check",size:16}),a.jsxs("div",{className:"step-info",children:[a.jsx("h4",{children:"AWS Curriculum Completed"}),a.jsx("p",{children:"Finished standard CLF-C02 training course modules."})]})]}),a.jsxs("div",{className:"roadmap-step completed",children:[a.jsx(Qa,{className:"step-check",size:16}),a.jsxs("div",{className:"step-info",children:[a.jsx("h4",{children:"Practice Exams Cleared"}),a.jsx("p",{children:"Scored averages of 86% across mock test iterations."})]})]}),a.jsxs("div",{className:"roadmap-step current",children:[a.jsx("span",{className:"step-dot"}),a.jsxs("div",{className:"step-info",children:[a.jsx("h4",{children:"Official Examination Slot"}),a.jsx("p",{children:"Scheduled for July 2026. Target goals set."})]})]})]}),a.jsxs("button",{className:"notes-trigger-btn",onClick:()=>t(!0),children:["Open Study Notes Drawer ",a.jsx(Xp,{size:16})]})]})]}),e&&a.jsx("div",{className:"notes-drawer-overlay",onClick:()=>t(!1),children:a.jsxs("div",{className:"notes-drawer glass-card",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"drawer-header",children:[a.jsx("h4",{children:"CLF-C02 Study Knowledge Base"}),a.jsx("button",{className:"drawer-close-btn",onClick:()=>t(!1),"aria-label":"Close",children:a.jsx(Bo,{size:20})})]}),a.jsx("div",{className:"drawer-body",children:r.map((l,o)=>a.jsxs("div",{className:"note-card",children:[a.jsx("h5",{children:l.title}),a.jsx("p",{children:l.text})]},o))})]})}),a.jsx("style",{children:`
        .cert-tracker {
          padding: 32px;
          position: relative;
        }

        .tracker-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .tracker-header h3 {
          font-size: 20px;
          color: var(--text-primary);
        }

        .tracker-header p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .exam-status-badge {
          margin-left: auto;
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .tracker-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }

        /* Domain Gauges Layout */
        .gauges-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .gauge-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px 16px;
        }

        .circle-gauge-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
        }

        .circle-gauge {
          width: 100%;
          height: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: var(--border-color);
          stroke-width: 2.8;
        }

        .circle-fill {
          fill: none;
          stroke-width: 2.8;
          stroke-linecap: round;
          transition: stroke-dasharray 0.8s ease-out;
        }

        .gauge-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gauge-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Roadmap Timeline */
        .roadmap-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .roadmap-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          padding-left: 10px;
        }

        .roadmap-timeline::before {
          content: '';
          position: absolute;
          left: 17px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--border-color);
        }

        .roadmap-step {
          display: flex;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .step-check {
          color: #10b981;
          background: var(--bg-color);
          border-radius: 50%;
        }

        .step-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color);
          border: 3px solid var(--bg-color);
          box-shadow: 0 0 10px var(--accent-glow);
          animation: pulse-glow 2s infinite;
        }

        .step-info h4 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .step-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .notes-trigger-btn {
          width: 100%;
          padding: 12px;
          background: none;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition-normal);
          margin-top: 24px;
        }

        .notes-trigger-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        /* Drawer Overlay */
        .notes-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.3s ease;
        }

        .notes-drawer {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: var(--card-bg-solid) !important;
          border-left: 1px solid var(--border-color);
          border-radius: 0 !important;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-header h4 {
          font-size: 18px;
          color: var(--text-primary);
        }

        .drawer-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .drawer-close-btn:hover {
          color: var(--accent-color);
        }

        .drawer-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
        }

        .note-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .note-card h5 {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 6px;
          border-left: 2px solid var(--accent-color);
          padding-left: 8px;
        }

        .note-card p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 992px) {
          .tracker-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .gauges-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function zf(){const[e,t]=M.useState({name:"",email:"",subject:"",message:""}),[n,r]=M.useState(!1),[l,o]=M.useState(!1),[i,s]=M.useState(""),u=g=>{const{name:h,value:m}=g.target;t(v=>({...v,[h]:m}))},d=g=>{if(g.preventDefault(),!e.name||!e.email||!e.message){s("Please complete all required fields.");return}s(""),r(!0),setTimeout(()=>{r(!1),o(!0),t({name:"",email:"",subject:"",message:""})},1500)};return a.jsxs("section",{id:"contact",className:"contact-section fade-in-section",children:[a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"certs-showcase-wrapper",children:a.jsx(bf,{})}),a.jsxs("div",{className:"section-header contact-header-gap",children:[a.jsx("div",{className:"section-label",children:"05. Connect"}),a.jsx("h3",{className:"section-title",children:"Initiate Contact & Relocation Queries"})]}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info-card glass-card",children:[a.jsxs("div",{className:"recruiter-profile-header",children:[a.jsxs("div",{className:"avatar-wrapper",children:[a.jsx("img",{src:"/assets/photo_formal.png",alt:"Shyam Kumar D Formal Headshot"}),a.jsx("span",{className:"pulse-dot green",title:"Open for Work"})]}),a.jsxs("div",{className:"profile-titles",children:[a.jsx("h4",{children:"Shyam Kumar D"}),a.jsx("p",{children:"Systems & Support Specialist"}),a.jsxs("span",{className:"location-pill",children:[a.jsx(Ka,{size:10})," Madurai, Tamil Nadu"]})]})]}),a.jsx("p",{className:"contact-intro-description",children:"Looking for a systems professional ready for L1/L2 cloud support queues, network diagnostics, and 24/7/365 shift rotations? Let's initiate a discussion."}),a.jsxs("div",{className:"contact-links-list",children:[a.jsxs("a",{href:"mailto:dshyamkumar021@gmail.com",className:"contact-link-item",children:[a.jsx(of,{className:"link-icon",size:16}),a.jsx("span",{children:"dshyamkumar021@gmail.com"})]}),a.jsxs("a",{href:"tel:+917010672248",className:"contact-link-item",children:[a.jsx(cf,{className:"link-icon",size:16}),a.jsx("span",{children:"+91 7010672248"})]}),a.jsxs("div",{className:"contact-link-item non-click",children:[a.jsx(Ka,{className:"link-icon",size:16}),a.jsx("span",{children:"Open to Relocation & Remote"})]})]}),a.jsxs("div",{className:"social-links-row",children:[a.jsx("a",{href:"https://linkedin.com/in/shyam-kumar-d",target:"_blank",rel:"noopener noreferrer",className:"social-box","aria-label":"LinkedIn",children:a.jsx(lf,{size:18})}),a.jsx("a",{href:"https://github.com/ShyamD2",target:"_blank",rel:"noopener noreferrer",className:"social-box","aria-label":"GitHub",children:a.jsx(cc,{size:18})}),a.jsxs("a",{href:"/Shyam_Kumar_D_Resume.pdf",download:!0,className:"social-box resume-btn-box",title:"Download Resume","aria-label":"Download CV",children:[a.jsx(uc,{size:18})," ",a.jsx("span",{children:"Download Resume"})]})]})]}),a.jsx("div",{className:"contact-form-card glass-card",children:l?a.jsxs("div",{className:"success-overlay-card",children:[a.jsx(qp,{className:"success-icon",size:48}),a.jsx("h4",{children:"Message Transmitted Successfully!"}),a.jsx("p",{children:"Data packets successfully routed to Shyam Kumar D. You will receive a response within 12 business hours."}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>o(!1),children:"Send another message"})]}):a.jsxs("form",{onSubmit:d,className:"actual-contact-form",children:[a.jsx("h4",{children:"Send a direct notification"}),a.jsx("p",{children:"Use the form below to initiate contact queries. Immediate telemetry updates enabled."}),i&&a.jsx("div",{className:"form-alert error",children:i}),a.jsxs("div",{className:"form-group-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Your Name *"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:u,placeholder:"e.g. Recruiter Name",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address *"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:u,placeholder:"e.g. hr@company.com",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",children:"Subject"}),a.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:u,placeholder:"e.g. Interview Scheduling"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message Content *"}),a.jsx("textarea",{id:"message",name:"message",rows:4,value:e.message,onChange:u,placeholder:"Provide details about opportunities, scheduling, or questions...",required:!0})]}),a.jsx("button",{type:"submit",className:"btn btn-primary form-submit-btn",disabled:n,children:n?"Transmitting Data...":a.jsxs(a.Fragment,{children:["Transmit Message ",a.jsx(ff,{size:14})]})})]})})]})]}),a.jsx("style",{children:`
        .contact-section {
          padding: 80px 0;
          position: relative;
        }

        .certs-showcase-wrapper {
          margin-bottom: 60px;
        }

        .contact-header-gap {
          margin-top: 40px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          margin-top: 40px;
          align-items: stretch;
        }

        /* Info Bento Card */
        .contact-info-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .recruiter-profile-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .avatar-wrapper {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          overflow: hidden;
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pulse-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--card-bg-solid);
        }

        .pulse-dot.green {
          background-color: #10b981;
          animation: pulse-glow 2s infinite;
        }

        .profile-titles h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .profile-titles p {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 2px 10px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 600;
        }

        .contact-intro-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: var(--transition-fast);
        }

        .contact-link-item:hover:not(.non-click) {
          color: var(--accent-color);
        }

        .link-icon {
          color: var(--accent-color);
        }

        .social-links-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-normal);
        }

        .social-box:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .resume-btn-box {
          width: auto;
          flex-grow: 1;
          display: flex;
          gap: 8px;
          padding: 0 16px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }

        .resume-btn-box:hover {
          background-color: transparent;
          color: var(--accent-color);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        /* Form Card Styling */
        .contact-form-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          background-color: var(--card-bg-solid);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .actual-contact-form h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .actual-contact-form p {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .form-alert {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          margin-bottom: 16px;
        }

        .form-alert.error {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 13.5px;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .form-submit-btn {
          width: 100%;
          border: none;
          justify-content: center;
          font-weight: 700;
        }

        /* Success Card */
        .success-overlay-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 16px;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3));
        }

        .success-overlay-card h4 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .success-overlay-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
          max-width: 400px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Pf(){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"container footer-container",children:[a.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," Shyam Kumar D. All rights reserved. Cloud & Systems Portfolio."]}),a.jsxs("button",{className:"scroll-top-btn",onClick:e,"aria-label":"Scroll to top",children:["Back to Top ",a.jsx(Qp,{size:14})]})]}),a.jsx("style",{children:`
        .footer {
          border-top: 1px solid var(--border-color);
          background: rgba(0, 0, 0, 0.2);
          padding: 32px 0;
          margin-top: 40px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 13px;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-normal);
        }

        .scroll-top-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        @media (max-width: 480px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Ff(){return M.useEffect(()=>{const e={root:null,rootMargin:"0px",threshold:.15},t=(l,o)=>{l.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),o.unobserve(i.target))})},n=new IntersectionObserver(t,e),r=document.querySelectorAll(".fade-in-section");return r.forEach(l=>n.observe(l)),()=>{r.forEach(l=>n.unobserve(l))}},[]),a.jsxs("div",{className:"portfolio-app",children:[a.jsx(yf,{}),a.jsxs("main",{children:[a.jsx(kf,{}),a.jsx(wf,{}),a.jsx(Sf,{}),a.jsx(jf,{}),a.jsx(Ef,{}),a.jsx(zf,{})]}),a.jsx(Pf,{})]})}Ql.createRoot(document.getElementById("root")).render(a.jsx(Pc.StrictMode,{children:a.jsx(Ff,{})}));
