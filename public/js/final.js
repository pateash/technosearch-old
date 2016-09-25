!function(t){"use strict";function e(t,e){return e=e||Error,function(){var n,r,i=2,o=arguments,a=o[0],u="["+(t?t+":":"")+a+"] ",s=o[1];for(u+=s.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1),n=e+i;return n<o.length?$t(o[n]):t}),u+="\nhttp://errors.angularjs.org/1.5.8/"+(t?t+"/":"")+a,r=i,n="?";r<o.length;r++,n="&")u+=n+"p"+(r-i)+"="+encodeURIComponent($t(o[r]));return new e(u)}}function n(t){if(null==t||C(t))return!1;if(Zr(t)||b(t)||Dr&&t instanceof Dr)return!0;var e="length"in Object(t)&&t.length;return _(e)&&(e>=0&&(e-1 in t||t instanceof Array)||"function"==typeof t.item)}function r(t,e,i){var o,a;if(t)if(S(t))for(o in t)"prototype"==o||"length"==o||"name"==o||t.hasOwnProperty&&!t.hasOwnProperty(o)||e.call(i,t[o],o,t);else if(Zr(t)||n(t)){var u="object"!=typeof t;for(o=0,a=t.length;o<a;o++)(u||o in t)&&e.call(i,t[o],o,t)}else if(t.forEach&&t.forEach!==r)t.forEach(e,i,t);else if(w(t))for(o in t)e.call(i,t[o],o,t);else if("function"==typeof t.hasOwnProperty)for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t);else for(o in t)Ir.call(t,o)&&e.call(i,t[o],o,t);return t}function i(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function o(t){return function(e,n){t(n,e)}}function a(){return++Jr}function u(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function s(t,e,n){for(var r=t.$$hashKey,i=0,o=e.length;i<o;++i){var a=e[i];if(y(a)||S(a))for(var c=Object.keys(a),l=0,f=c.length;l<f;l++){var p=c[l],h=a[p];n&&y(h)?x(h)?t[p]=new Date(h.valueOf()):E(h)?t[p]=new RegExp(h):h.nodeName?t[p]=h.cloneNode(!0):F(h)?t[p]=h.clone():(y(t[p])||(t[p]=Zr(h)?[]:{}),s(t[p],[h],!0)):t[p]=h}}return u(t,r),t}function c(t){return s(t,qr.call(arguments,1),!1)}function l(t){return s(t,qr.call(arguments,1),!0)}function f(t){return parseInt(t,10)}function p(t,e){return c(Object.create(t),e)}function h(){}function d(t){return t}function v(t){return function(){return t}}function g(t){return S(t.toString)&&t.toString!==zr}function m(t){return"undefined"==typeof t}function $(t){return"undefined"!=typeof t}function y(t){return null!==t&&"object"==typeof t}function w(t){return null!==t&&"object"==typeof t&&!Br(t)}function b(t){return"string"==typeof t}function _(t){return"number"==typeof t}function x(t){return"[object Date]"===zr.call(t)}function S(t){return"function"==typeof t}function E(t){return"[object RegExp]"===zr.call(t)}function C(t){return t&&t.window===t}function k(t){return t&&t.$evalAsync&&t.$watch}function R(t){return"[object File]"===zr.call(t)}function A(t){return"[object FormData]"===zr.call(t)}function O(t){return"[object Blob]"===zr.call(t)}function T(t){return"boolean"==typeof t}function I(t){return t&&S(t.then)}function j(t){return t&&_(t.length)&&Yr.test(zr.call(t))}function P(t){return"[object ArrayBuffer]"===zr.call(t)}function F(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function U(t){var e,n={},r=t.split(",");for(e=0;e<r.length;e++)n[r[e]]=!0;return n}function V(t){return jr(t.nodeName||t[0]&&t[0].nodeName)}function D(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),n}function N(t,e){function n(t,e){var n,r=e.$$hashKey;if(Zr(t))for(var o=0,a=t.length;o<a;o++)e.push(i(t[o]));else if(w(t))for(n in t)e[n]=i(t[n]);else if(t&&"function"==typeof t.hasOwnProperty)for(n in t)t.hasOwnProperty(n)&&(e[n]=i(t[n]));else for(n in t)Ir.call(t,n)&&(e[n]=i(t[n]));return u(e,r),e}function i(t){if(!y(t))return t;var e=a.indexOf(t);if(e!==-1)return s[e];if(C(t)||k(t))throw Wr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");var r=!1,i=o(t);return void 0===i&&(i=Zr(t)?[]:Object.create(Br(t)),r=!0),a.push(t),s.push(i),r?n(t,i):i}function o(t){switch(zr.call(t)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new t.constructor(i(t.buffer),t.byteOffset,t.length);case"[object ArrayBuffer]":if(!t.slice){var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}return t.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new t.constructor(t.valueOf());case"[object RegExp]":var n=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]);return n.lastIndex=t.lastIndex,n;case"[object Blob]":return new t.constructor([t],{type:t.type})}if(S(t.cloneNode))return t.cloneNode(!0)}var a=[],s=[];if(e){if(j(e)||P(e))throw Wr("cpta","Can't copy! TypedArray destination cannot be mutated.");if(t===e)throw Wr("cpi","Can't copy! Source and destination are identical.");return Zr(e)?e.length=0:r(e,function(t,n){"$$hashKey"!==n&&delete e[n]}),a.push(t),s.push(e),n(t,e)}return i(t)}function M(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var n,r,i,o=typeof t,a=typeof e;if(o==a&&"object"==o){if(!Zr(t)){if(x(t))return!!x(e)&&M(t.getTime(),e.getTime());if(E(t))return!!E(e)&&t.toString()==e.toString();if(k(t)||k(e)||C(t)||C(e)||Zr(e)||x(e)||E(e))return!1;i=dt();for(r in t)if("$"!==r.charAt(0)&&!S(t[r])){if(!M(t[r],e[r]))return!1;i[r]=!0}for(r in e)if(!(r in i)&&"$"!==r.charAt(0)&&$(e[r])&&!S(e[r]))return!1;return!0}if(!Zr(e))return!1;if((n=t.length)==e.length){for(r=0;r<n;r++)if(!M(t[r],e[r]))return!1;return!0}}return!1}function q(t,e,n){return t.concat(qr.call(e,n))}function H(t,e){return qr.call(t,e||0)}function L(t,e){var n=arguments.length>2?H(arguments,2):[];return!S(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,q(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function z(e,n){var r=n;return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?r=void 0:C(n)?r="$WINDOW":n&&t.document===n?r="$DOCUMENT":k(n)&&(r="$SCOPE"),r}function B(t,e){if(!m(t))return _(e)||(e=e?2:null),JSON.stringify(t,z,e)}function W(t){return b(t)?JSON.parse(t):t}function G(t,e){t=t.replace(ei,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function J(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function Z(t,e,n){n=n?-1:1;var r=t.getTimezoneOffset(),i=G(e,r);return J(t,n*(i-r))}function Y(t){t=Dr(t).clone();try{t.empty()}catch(e){}var n=Dr("<div>").append(t).html();try{return t[0].nodeType===ui?jr(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+jr(e)})}catch(e){return jr(n)}}function K(t){try{return decodeURIComponent(t)}catch(e){}}function Q(t){var e={};return r((t||"").split("&"),function(t){var n,r,i;t&&(r=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),n!==-1&&(r=t.substring(0,n),i=t.substring(n+1)),r=K(r),$(r)&&(i=!$(i)||K(i),Ir.call(e,r)?Zr(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i))}),e}function X(t){var e=[];return r(t,function(t,n){Zr(t)?r(t,function(t){e.push(et(n,!0)+(t===!0?"":"="+et(t,!0)))}):e.push(et(n,!0)+(t===!0?"":"="+et(t,!0)))}),e.length?e.join("&"):""}function tt(t){return et(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function et(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function nt(t,e){var n,r,i=ni.length;for(r=0;r<i;++r)if(n=ni[r]+e,b(n=t.getAttribute(n)))return n;return null}function rt(t,e){var n,i,o={};r(ni,function(e){var r=e+"app";!n&&t.hasAttribute&&t.hasAttribute(r)&&(n=t,i=t.getAttribute(r))}),r(ni,function(e){var r,o=e+"app";!n&&(r=t.querySelector("["+o.replace(":","\\:")+"]"))&&(n=r,i=r.getAttribute(o))}),n&&(o.strictDi=null!==nt(n,"strict-di"),e(n,i?[i]:[],o))}function it(e,n,i){y(i)||(i={});var o={strictDi:!1};i=c(o,i);var a=function(){if(e=Dr(e),e.injector()){var r=e[0]===t.document?"document":Y(e);throw Wr("btstrpd","App already bootstrapped with this element '{0}'",r.replace(/</,"&lt;").replace(/>/,"&gt;"))}n=n||[],n.unshift(["$provide",function(t){t.value("$rootElement",e)}]),i.debugInfoEnabled&&n.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),n.unshift("ng");var o=re(n,i.strictDi);return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},u=/^NG_ENABLE_DEBUG_INFO!/,s=/^NG_DEFER_BOOTSTRAP!/;return t&&u.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(u,"")),t&&!s.test(t.name)?a():(t.name=t.name.replace(s,""),Gr.resumeBootstrap=function(t){return r(t,function(t){n.push(t)}),a()},void(S(Gr.resumeDeferredBootstrap)&&Gr.resumeDeferredBootstrap()))}function ot(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function at(t){var e=Gr.element(t).injector();if(!e)throw Wr("test","no injector found for element argument to getTestability");return e.get("$$testability")}function ut(t,e){return e=e||"_",t.replace(ri,function(t,n){return(n?e:"")+t.toLowerCase()})}function st(){var e;if(!ii){var n=ti();Nr=m(n)?t.jQuery:n?t[n]:void 0,Nr&&Nr.fn.on?(Dr=Nr,c(Nr.fn,{scope:Ci.scope,isolateScope:Ci.isolateScope,controller:Ci.controller,injector:Ci.injector,inheritedData:Ci.inheritedData}),e=Nr.cleanData,Nr.cleanData=function(t){for(var n,r,i=0;null!=(r=t[i]);i++)n=Nr._data(r,"events"),n&&n.$destroy&&Nr(r).triggerHandler("$destroy");e(t)}):Dr=At,Gr.element=Dr,ii=!0}}function ct(t,e,n){if(!t)throw Wr("areq","Argument '{0}' is {1}",e||"?",n||"required");return t}function lt(t,e,n){return n&&Zr(t)&&(t=t[t.length-1]),ct(S(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function ft(t,e){if("hasOwnProperty"===t)throw Wr("badname","hasOwnProperty is not a valid {0} name",e)}function pt(t,e,n){if(!e)return t;for(var r,i=e.split("."),o=t,a=i.length,u=0;u<a;u++)r=i[u],t&&(t=(o=t)[r]);return!n&&S(t)?L(o,t):t}function ht(t){for(var e,n=t[0],r=t[t.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(e||t[i]!==n)&&(e||(e=Dr(qr.call(t,0,i))),e.push(n));return e||t}function dt(){return Object.create(null)}function vt(t){function n(t,e,n){return t[e]||(t[e]=n())}var r=e("$injector"),i=e("ng"),o=n(t,"angular",Object);return o.$$minErr=o.$$minErr||e,n(o,"module",function(){var t={};return function(e,o,a){var u=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)};return u(e,"module"),o&&t.hasOwnProperty(e)&&(t[e]=null),n(t,e,function(){function t(t,e,n,r){return r||(r=i),function(){return r[n||"push"]([t,e,arguments]),l}}function n(t,n){return function(r,o){return o&&S(o)&&(o.$$moduleName=e),i.push([t,n,arguments]),l}}if(!o)throw r("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",e);var i=[],u=[],s=[],c=t("$injector","invoke","push",u),l={_invokeQueue:i,_configBlocks:u,_runBlocks:s,requires:o,name:e,provider:n("$provide","provider"),factory:n("$provide","factory"),service:n("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:n("$provide","decorator"),animation:n("$animateProvider","register"),filter:n("$filterProvider","register"),controller:n("$controllerProvider","register"),directive:n("$compileProvider","directive"),component:n("$compileProvider","component"),config:c,run:function(t){return s.push(t),this}};return a&&c(a),l})}})}function gt(t,e){if(Zr(t)){e=e||[];for(var n=0,r=t.length;n<r;n++)e[n]=t[n]}else if(y(t)){e=e||{};for(var i in t)"$"===i.charAt(0)&&"$"===i.charAt(1)||(e[i]=t[i])}return e||t}function mt(t){var e=[];return JSON.stringify(t,function(t,n){if(n=z(t,n),y(n)){if(e.indexOf(n)>=0)return"...";e.push(n)}return n})}function $t(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):m(t)?"undefined":"string"!=typeof t?mt(t):t}function yt(n){c(n,{bootstrap:it,copy:N,extend:c,merge:l,equals:M,element:Dr,forEach:r,injector:re,noop:h,bind:L,toJson:B,fromJson:W,identity:d,isUndefined:m,isDefined:$,isString:b,isFunction:S,isObject:y,isNumber:_,isElement:F,isArray:Zr,version:fi,isDate:x,lowercase:jr,uppercase:Pr,callbacks:{$$counter:0},getTestability:at,$$minErr:e,$$csp:Xr,reloadWithDebugInfo:ot}),(Mr=vt(t))("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:En}),t.provider("$compile",de).directive({a:Fo,input:ta,textarea:ta,form:Mo,script:Za,select:Qa,style:tu,option:Xa,ngBind:ra,ngBindHtml:oa,ngBindTemplate:ia,ngClass:ua,ngClassEven:ca,ngClassOdd:sa,ngCloak:la,ngController:fa,ngForm:qo,ngHide:Ha,ngIf:da,ngInclude:va,ngInit:ma,ngNonBindable:ja,ngPluralize:Va,ngRepeat:Da,ngShow:qa,ngStyle:La,ngSwitch:za,ngSwitchWhen:Ba,ngSwitchDefault:Wa,ngOptions:Ua,ngTransclude:Ja,ngModel:Oa,ngList:$a,ngChange:aa,pattern:nu,ngPattern:nu,required:eu,ngRequired:eu,minlength:iu,ngMinlength:iu,maxlength:ru,ngMaxlength:ru,ngValue:na,ngModelOptions:Ia}).directive({ngInclude:ga}).directive(Uo).directive(pa),t.provider({$anchorScroll:ie,$animate:Hi,$animateCss:Bi,$$animateJs:Mi,$$animateQueue:qi,$$AnimateRunner:zi,$$animateAsyncRun:Li,$browser:le,$cacheFactory:fe,$controller:we,$document:be,$exceptionHandler:_e,$filter:Nn,$$forceReflow:Ki,$interpolate:Ue,$interval:Ve,$http:Ie,$httpParamSerializer:Se,$httpParamSerializerJQLike:Ee,$httpBackend:Pe,$xhrFactory:je,$jsonpCallbacks:ao,$location:Qe,$log:Xe,$parse:yn,$rootScope:Sn,$q:wn,$$q:bn,$sce:An,$sceDelegate:Rn,$sniffer:On,$templateCache:pe,$templateRequest:Tn,$$testability:In,$timeout:jn,$window:Un,$$rAF:xn,$$jqLite:Yt,$$HashMap:Oi,$$cookieReader:Dn})}])}function wt(){return++hi}function bt(t){return t.replace(gi,function(t,e,n,r){return r?n.toUpperCase():n}).replace(mi,"Moz$1")}function _t(t){return!bi.test(t)}function xt(t){var e=t.nodeType;return e===oi||!e||e===ci}function St(t){for(var e in pi[t.ng339])return!0;return!1}function Et(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])}function Ct(t,e){var n,i,o,a,u=e.createDocumentFragment(),s=[];if(_t(t))s.push(e.createTextNode(t));else{for(n=u.appendChild(e.createElement("div")),i=(_i.exec(t)||["",""])[1].toLowerCase(),o=Si[i]||Si._default,n.innerHTML=o[1]+t.replace(xi,"<$1></$2>")+o[2],a=o[0];a--;)n=n.lastChild;s=q(s,n.childNodes),n=u.firstChild,n.textContent=""}return u.textContent="",u.innerHTML="",r(s,function(t){u.appendChild(t)}),u}function kt(e,n){n=n||t.document;var r;return(r=wi.exec(e))?[n.createElement(r[1])]:(r=Ct(e,n))?r.childNodes:[]}function Rt(t,e){var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)}function At(t){if(t instanceof At)return t;var e;if(b(t)&&(t=Kr(t),e=!0),!(this instanceof At)){if(e&&"<"!=t.charAt(0))throw yi("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new At(t)}e?Nt(this,kt(t)):Nt(this,t)}function Ot(t){return t.cloneNode(!0)}function Tt(t,e){if(e||jt(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;r<i;r++)jt(n[r])}function It(t,e,n,i){if($(i))throw yi("offargs","jqLite#off() does not support the `selector` argument");var o=Pt(t),a=o&&o.events,u=o&&o.handle;if(u)if(e){var s=function(e){var r=a[e];$(n)&&D(r||[],n),$(n)&&r&&r.length>0||(vi(t,e,u),delete a[e])};r(e.split(" "),function(t){s(t),$i[t]&&s($i[t])})}else for(e in a)"$destroy"!==e&&vi(t,e,u),delete a[e]}function jt(t,e){var n=t.ng339,r=n&&pi[n];if(r){if(e)return void delete r.data[e];r.handle&&(r.events.$destroy&&r.handle({},"$destroy"),It(t)),delete pi[n],t.ng339=void 0}}function Pt(t,e){var n=t.ng339,r=n&&pi[n];return e&&!r&&(t.ng339=n=wt(),r=pi[n]={events:{},data:{},handle:void 0}),r}function Ft(t,e,n){if(xt(t)){var r=$(n),i=!r&&e&&!y(e),o=!e,a=Pt(t,!i),u=a&&a.data;if(r)u[e]=n;else{if(o)return u;if(i)return u&&u[e];c(u,e)}}}function Ut(t,e){return!!t.getAttribute&&(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1}function Vt(t,e){e&&t.setAttribute&&r(e.split(" "),function(e){t.setAttribute("class",Kr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Kr(e)+" "," ")))})}function Dt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(e.split(" "),function(t){t=Kr(t),n.indexOf(" "+t+" ")===-1&&(n+=t+" ")}),t.setAttribute("class",Kr(n))}}function Nt(t,e){if(e)if(e.nodeType)t[t.length++]=e;else{var n=e.length;if("number"==typeof n&&e.window!==e){if(n)for(var r=0;r<n;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function Mt(t,e){return qt(t,"$"+(e||"ngController")+"Controller")}function qt(t,e,n){t.nodeType==ci&&(t=t.documentElement);for(var r=Zr(e)?e:[e];t;){for(var i=0,o=r.length;i<o;i++)if($(n=Dr.data(t,r[i])))return n;t=t.parentNode||t.nodeType===li&&t.host}}function Ht(t){for(Tt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function Lt(t,e){e||Tt(t);var n=t.parentNode;n&&n.removeChild(t)}function zt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):Dr(n).on("load",e)}function Bt(t,e){var n=ki[e.toLowerCase()];return n&&Ri[V(t)]&&n}function Wt(t){return Ai[t]}function Gt(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=e[r||n.type],o=i?i.length:0;if(o){if(m(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0};var u=i.specialHandlerWrapper||Jt;o>1&&(i=gt(i));for(var s=0;s<o;s++)n.isImmediatePropagationStopped()||u(t,n,i[s])}};return n.elem=t,n}function Jt(t,e,n){n.call(t,e)}function Zt(t,e,n){var r=e.relatedTarget;r&&(r===t||Ei.call(t,r))||n.call(t,e)}function Yt(){this.$get=function(){return c(At,{hasClass:function(t,e){return t.attr&&(t=t[0]),Ut(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Dt(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),Vt(t,e)}})}}function Kt(t,e){var n=t&&t.$$hashKey;if(n)return"function"==typeof n&&(n=t.$$hashKey()),n;var r=typeof t;return n="function"==r||"object"==r&&null!==t?t.$$hashKey=r+":"+(e||a)():r+":"+t}function Qt(t,e){if(e){var n=0;this.nextUid=function(){return++n}}r(t,this.put,this)}function Xt(t){return Function.prototype.toString.call(t)+" "}function te(t){var e=Xt(t).replace(Fi,""),n=e.match(Ti)||e.match(Ii);return n}function ee(t){var e=te(t);return e?"function("+(e[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function ne(t,e,n){var i,o,a;if("function"==typeof t){if(!(i=t.$inject)){if(i=[],t.length){if(e)throw b(n)&&n||(n=t.name||ee(t)),Ui("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);o=te(t),r(o[1].split(ji),function(t){t.replace(Pi,function(t,e,n){i.push(n)})})}t.$inject=i}}else Zr(t)?(a=t.length-1,lt(t[a],"fn"),i=t.slice(0,a)):lt(t,"fn",!0);return i}function re(t,e){function n(t){return function(e,n){return y(e)?void r(e,o(t)):t(e,n)}}function i(t,e){if(ft(t,"service"),(S(e)||Zr(e))&&(e=x.instantiate(e)),!e.$get)throw Ui("pget","Provider '{0}' must define $get factory method.",t);return _[t+g]=e}function a(t,e){return function(){var n=k.invoke(e,this);if(m(n))throw Ui("undef","Provider '{0}' must return a value from $get factory method.",t);return n}}function u(t,e,n){return i(t,{$get:n!==!1?a(t,e):e})}function s(t,e){return u(t,["$injector",function(t){return t.instantiate(e)}])}function c(t,e){return u(t,v(e),!1)}function l(t,e){ft(t,"constant"),_[t]=e,E[t]=e}function f(t,e){var n=x.get(t+g),r=n.$get;n.$get=function(){var t=k.invoke(r,n);return k.invoke(e,null,{$delegate:t})}}function p(t){ct(m(t)||Zr(t),"modulesToLoad","not an array");var e,n=[];return r(t,function(t){function r(t){var e,n;for(e=0,n=t.length;e<n;e++){var r=t[e],i=x.get(r[0]);i[r[1]].apply(i,r[2])}}if(!w.get(t)){w.put(t,!0);try{b(t)?(e=Mr(t),n=n.concat(p(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):S(t)?n.push(x.invoke(t)):Zr(t)?n.push(x.invoke(t)):lt(t,"module")}catch(i){throw Zr(t)&&(t=t[t.length-1]),i.message&&i.stack&&i.stack.indexOf(i.message)==-1&&(i=i.message+"\n"+i.stack),Ui("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function h(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===d)throw Ui("cdep","Circular dependency found: {0}",e+" <- "+$.join(" <- "));return t[e]}try{return $.unshift(e),t[e]=d,t[e]=n(e,r)}catch(i){throw t[e]===d&&delete t[e],i}finally{$.shift()}}function i(t,n,i){for(var o=[],a=re.$$annotate(t,e,i),u=0,s=a.length;u<s;u++){var c=a[u];if("string"!=typeof c)throw Ui("itkn","Incorrect injection token! Expected service name as string, got {0}",c);o.push(n&&n.hasOwnProperty(c)?n[c]:r(c,i))}return o}function o(t){return!(Vr<=11)&&("function"==typeof t&&/^(?:class\b|constructor\()/.test(Xt(t)))}function a(t,e,n,r){"string"==typeof n&&(r=n,n=null);var a=i(t,n,r);return Zr(t)&&(t=t[t.length-1]),o(t)?(a.unshift(null),new(Function.prototype.bind.apply(t,a))):t.apply(e,a)}function u(t,e,n){var r=Zr(t)?t[t.length-1]:t,o=i(t,e,n);return o.unshift(null),new(Function.prototype.bind.apply(r,o))}return{invoke:a,instantiate:u,get:r,annotate:re.$$annotate,has:function(e){return _.hasOwnProperty(e+g)||t.hasOwnProperty(e)}}}e=e===!0;var d={},g="Provider",$=[],w=new Qt([],(!0)),_={$provide:{provider:n(i),factory:n(u),service:n(s),value:n(c),constant:n(l),decorator:f}},x=_.$injector=h(_,function(t,e){throw Gr.isString(e)&&$.push(e),Ui("unpr","Unknown provider: {0}",$.join(" <- "))}),E={},C=h(E,function(t,e){var n=x.get(t+g,e);return k.invoke(n.$get,n,void 0,t)}),k=C;_["$injector"+g]={$get:v(C)};var R=p(t);return k=C.get("$injector"),k.strictDi=e,r(R,function(t){t&&k.invoke(t)}),k}function ie(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return Array.prototype.some.call(t,function(t){if("a"===V(t))return e=t,!0}),e}function o(){var t=u.yOffset;if(S(t))t=t();else if(F(t)){var n=t[0],r=e.getComputedStyle(n);t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else _(t)||(t=0);return t}function a(t){if(t){t.scrollIntoView();var n=o();if(n){var r=t.getBoundingClientRect().top;e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function u(t){t=b(t)?t:n.hash();var e;t?(e=s.getElementById(t))?a(e):(e=i(s.getElementsByName(t)))?a(e):"top"===t&&a(null):a(null)}var s=e.document;return t&&r.$watch(function(){return n.hash()},function(t,e){t===e&&""===t||zt(function(){r.$evalAsync(u)})}),u}]}function oe(t,e){return t||e?t?e?(Zr(t)&&(t=t.join(" ")),Zr(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function ae(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.nodeType===Di)return n}}function ue(t){b(t)&&(t=t.split(" "));var e=dt();return r(t,function(t){t.length&&(e[t]=!0)}),e}function se(t){return y(t)?t:{}}function ce(t,e,n,i){function o(t){try{t.apply(null,H(arguments,1))}finally{if($--,0===$)for(;y.length;)try{y.pop()()}catch(e){n.error(e)}}}function a(t){var e=t.indexOf("#");return e===-1?"":t.substr(e)}function u(){S=null,s(),c()}function s(){w=E(),w=m(w)?null:w,M(w,R)&&(w=R),R=w}function c(){_===l.url()&&b===w||(_=l.url(),b=w,r(C,function(t){t(l.url(),w)}))}var l=this,f=t.location,p=t.history,d=t.setTimeout,v=t.clearTimeout,g={};l.isMock=!1;var $=0,y=[];l.$$completeOutstandingRequest=o,l.$$incOutstandingRequestCount=function(){$++},l.notifyWhenNoOutstandingRequests=function(t){0===$?t():y.push(t)};var w,b,_=f.href,x=e.find("base"),S=null,E=i.history?function(){try{return p.state}catch(t){}}:h;s(),b=w,l.url=function(e,n,r){if(m(r)&&(r=null),f!==t.location&&(f=t.location),p!==t.history&&(p=t.history),e){var o=b===r;if(_===e&&(!i.history||o))return l;var u=_&&Le(_)===Le(e);return _=e,b=r,!i.history||u&&o?(u||(S=e),n?f.replace(e):u?f.hash=a(e):f.href=e,f.href!==e&&(S=e)):(p[n?"replaceState":"pushState"](r,"",e),s(),b=w),S&&(S=e),l}return S||f.href.replace(/%27/g,"'")},l.state=function(){return w};var C=[],k=!1,R=null;l.onUrlChange=function(e){return k||(i.history&&Dr(t).on("popstate",u),Dr(t).on("hashchange",u),k=!0),C.push(e),e},l.$$applicationDestroyed=function(){Dr(t).off("hashchange popstate",u)},l.$$checkUrlChange=c,l.baseHref=function(){var t=x.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""},l.defer=function(t,e){var n;return $++,n=d(function(){delete g[n],o(t)},e||0),g[n]=!0,n},l.defer.cancel=function(t){return!!g[t]&&(delete g[t],v(t),o(h),!0)}}function le(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new ce(t,r,e,n)}]}function fe(){this.$get=function(){function t(t,r){function i(t){t!=p&&(h?h==t&&(h=t.n):h=t,o(t.n,t.p),o(t,p),p=t,p.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in n)throw e("$cacheFactory")("iid","CacheId '{0}' is already taken!",t);var a=0,u=c({},r,{id:t}),s=dt(),l=r&&r.capacity||Number.MAX_VALUE,f=dt(),p=null,h=null;return n[t]={put:function(t,e){if(!m(e)){if(l<Number.MAX_VALUE){var n=f[t]||(f[t]={key:t});i(n)}return t in s||a++,s[t]=e,a>l&&this.remove(h.key),e}},get:function(t){if(l<Number.MAX_VALUE){var e=f[t];if(!e)return;i(e)}return s[t]},remove:function(t){if(l<Number.MAX_VALUE){var e=f[t];if(!e)return;e==p&&(p=e.p),e==h&&(h=e.n),o(e.n,e.p),delete f[t]}t in s&&(delete s[t],a--)},removeAll:function(){s=dt(),a=0,f=dt(),p=h=null},destroy:function(){s=null,u=null,f=null,delete n[t]},info:function(){return c({},u,{size:a})}}}var n={};return t.info=function(){var t={};return r(n,function(e,n){t[n]=e.info()}),t},t.get=function(t){return n[t]},t}}function pe(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function he(){}function de(e,n){function i(t,e,n){var i=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,o=dt();return r(t,function(t,r){if(t in C)return void(o[r]=C[t]);var a=t.match(i);if(!a)throw Wi("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,r,t,n?"controller bindings definition":"isolate scope definition");o[r]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||r},a[4]&&(C[t]=o[r])}),o}function a(t,e){var n={isolateScope:null,bindToController:null};if(y(t.scope)&&(t.bindToController===!0?(n.bindToController=i(t.scope,e,!0),n.isolateScope={}):n.isolateScope=i(t.scope,e,!1)),y(t.bindToController)&&(n.bindToController=i(t.bindToController,e,!0)),y(n.bindToController)){var r=t.controller,o=t.controllerAs;if(!r)throw Wi("noctrl","Cannot bind to controller without directive '{0}'s controller.",e);if(!ye(r,o))throw Wi("noident","Cannot bind to controller without identifier for directive '{0}'.",e)}return n}function u(t){var e=t.charAt(0);if(!e||e!==jr(e))throw Wi("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",t);if(t!==t.trim())throw Wi("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",t)}function s(t){var e=t.require||t.controller&&t.name;return!Zr(e)&&y(e)&&r(e,function(t,n){var r=t.match(x),i=t.substring(r[0].length);i||(e[n]=r[0]+n)}),e}var l={},f="Directive",g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,w=/(([\w\-]+)(?:\:([^;]+))?;?)/,_=U("ngSrc,ngSrcset,src,srcset"),x=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,E=/^(on[a-z]+|formaction)$/,C=dt();this.directive=function O(t,n){return ft(t,"directive"),b(t)?(u(t),ct(n,"directiveFactory"),l.hasOwnProperty(t)||(l[t]=[],e.factory(t+f,["$injector","$exceptionHandler",function(e,n){var i=[];return r(l[t],function(r,o){try{var a=e.invoke(r);S(a)?a={compile:v(a)}:!a.compile&&a.link&&(a.compile=v(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||t,a.require=s(a),a.restrict=a.restrict||"EA",a.$$moduleName=r.$$moduleName,i.push(a)}catch(u){n(u)}}),i}])),l[t].push(n)):r(t,o(O)),this},this.component=function(t,e){function n(t){function n(e){return S(e)||Zr(e)?function(n,r){return t.invoke(e,this,{$element:n,$attrs:r})}:e}var o=e.template||e.templateUrl?e.template:"",a={controller:i,controllerAs:ye(e.controller)||e.controllerAs||"$ctrl",template:n(o),templateUrl:n(e.templateUrl),transclude:e.transclude,scope:{},bindToController:e.bindings||{},restrict:"E",require:e.require};return r(e,function(t,e){"$"===e.charAt(0)&&(a[e]=t)}),a}var i=e.controller||function(){};return r(e,function(t,e){"$"===e.charAt(0)&&(n[e]=t,S(i)&&(i[e]=t))}),n.$inject=["$injector"],this.directive(t,n)},this.aHrefSanitizationWhitelist=function(t){return $(t)?(n.aHrefSanitizationWhitelist(t),this):n.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return $(t)?(n.imgSrcSanitizationWhitelist(t),this):n.imgSrcSanitizationWhitelist()};var R=!0;this.debugInfoEnabled=function(t){return $(t)?(R=t,this):R};var A=10;this.onChangesTtl=function(t){return arguments.length?(A=t,this):A},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(e,n,i,o,u,s,v,C,O,I){function j(){try{if(!--xt)throw yt=void 0,Wi("infchng","{0} $onChanges() iterations reached. Aborting!\n",A);v.$apply(function(){for(var t=[],e=0,n=yt.length;e<n;++e)try{yt[e]()}catch(r){t.push(r)}if(yt=void 0,t.length)throw t})}finally{xt++}}function P(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;n<r;n++)i=o[n],this[i]=e[i]}else this.$attr={};this.$$element=t}function F(t,e,n){bt.innerHTML="<span "+e+">";var r=bt.firstChild.attributes,i=r[0];r.removeNamedItem(i.name),i.value=n,t.attributes.setNamedItem(i)}function U(t,e){try{t.addClass(e)}catch(n){}}function N(e,n,r,i,o){e instanceof Dr||(e=Dr(e));for(var a=/\S+/,u=0,s=e.length;u<s;u++){var c=e[u];c.nodeType===ui&&c.nodeValue.match(a)&&Rt(c,e[u]=t.document.createElement("span"))}var l=z(e,n,e,r,i,o);N.$$addScopeClass(e);var f=null;return function(t,n,r){ct(t,"scope"),o&&o.needsNewScope&&(t=t.$parent.$new()),r=r||{};var i=r.parentBoundTranscludeFn,a=r.transcludeControllers,u=r.futureParentElement;i&&i.$$boundTransclude&&(i=i.$$boundTransclude),f||(f=q(u));var s;if(s="html"!==f?Dr(ft(f,Dr("<div>").append(e).html())):n?Ci.clone.call(e):e,a)for(var c in a)s.data("$"+c+"Controller",a[c].instance);return N.$$addScopeInfo(s,t),n&&n(s,t),l&&l(t,s,s,i),s}}function q(t){var e=t&&t[0];return e&&"foreignobject"!==V(e)&&zr.call(e).match(/SVG/)?"svg":"html"}function z(t,e,n,r,i,o){function a(t,n,r,i){var o,a,u,s,c,l,f,p,v;if(h){var g=n.length;for(v=new Array(g),c=0;c<d.length;c+=3)f=d[c],v[f]=n[f]}else v=n;for(c=0,l=d.length;c<l;)u=v[d[c++]],o=d[c++],a=d[c++],o?(o.scope?(s=t.$new(),N.$$addScopeInfo(Dr(u),s)):s=t,p=o.transcludeOnThisElement?B(t,o.transclude,i):!o.templateOnThisElement&&i?i:!i&&e?B(t,e):null,o(a,s,u,r,p)):a&&a(t,u.childNodes,void 0,i)}for(var u,s,c,l,f,p,h,d=[],v=0;v<t.length;v++)u=new P,s=W(t[v],[],u,0===v?r:void 0,i),c=s.length?Q(s,t[v],u,e,n,null,[],[],o):null,c&&c.scope&&N.$$addScopeClass(u.$$element),f=c&&c.terminal||!(l=t[v].childNodes)||!l.length?null:z(l,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:e),(c||f)&&(d.push(v,c,f),p=!0,h=h||c),o=null;return p?a:null}function B(t,e,n){function r(r,i,o,a,u){return r||(r=t.$new(!1,u),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}var i=r.$$slots=dt();for(var o in e.$$slots)e.$$slots[o]?i[o]=B(t,e.$$slots[o],n):i[o]=null;return r}function W(t,e,n,r,i){var o,a,u=t.nodeType,s=n.$attr;switch(u){case oi:nt(e,ge(V(t)),"E",r,i);for(var c,l,f,p,h,d,v=t.attributes,g=0,m=v&&v.length;g<m;g++){var $=!1,_=!1;c=v[g],l=c.name,h=Kr(c.value),p=ge(l),(d=kt.test(p))&&(l=l.replace(Ji,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}));var x=p.match(At);x&&rt(x[1])&&($=l,_=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6)),f=ge(l.toLowerCase()),s[f]=l,!d&&n.hasOwnProperty(f)||(n[f]=h,Bt(t,f)&&(n[f]=!0)),ht(t,e,h,f,d),nt(e,f,"A",r,i,$,_)}if(a=t.className,y(a)&&(a=a.animVal),b(a)&&""!==a)for(;o=w.exec(a);)f=ge(o[2]),nt(e,f,"C",r,i)&&(n[f]=Kr(o[3])),a=a.substr(o.index+o[0].length);break;case ui:if(11===Vr)for(;t.parentNode&&t.nextSibling&&t.nextSibling.nodeType===ui;)t.nodeValue=t.nodeValue+t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling);lt(e,t.nodeValue);break;case si:G(t,e,n,r,i)}return e.sort(at),e}function G(t,e,n,r,i){try{var o=g.exec(t.nodeValue);if(o){var a=ge(o[1]);
nt(e,a,"M",r,i)&&(n[a]=Kr(o[2]))}}catch(u){}}function J(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Wi("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n);t.nodeType==oi&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return Dr(r)}function Z(t,e,n){return function(r,i,o,a,u){return i=J(i[0],e,n),t(r,i,o,a,u)}}function K(t,e,n,r,i,o){var a;return t?N(e,n,r,i,o):function(){return a||(a=N(e,n,r,i,o),e=n=o=null),a.apply(this,arguments)}}function Q(t,e,n,o,a,u,s,l,f){function p(t,e,n,r){t&&(n&&(t=Z(t,n,r)),t.require=d.require,t.directiveName=v,(E===d||d.$$isolateScope)&&(t=gt(t,{isolateScope:!0})),s.push(t)),e&&(n&&(e=Z(e,n,r)),e.require=d.require,e.directiveName=v,(E===d||d.$$isolateScope)&&(e=gt(e,{isolateScope:!0})),l.push(e))}function h(t,o,a,u,f){function p(t,e,n,r){var i;if(k(t)||(r=n,n=e,e=t,t=void 0),T&&(i=w),n||(n=T?R.parent():R),!r)return f(t,e,i,n,D);var o=f.$$slots[r];if(o)return o(t,e,i,n,D);if(m(o))throw Wi("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',r,Y(R))}var h,d,v,g,$,w,b,R,A,O;e===a?(A=n,R=n.$$element):(R=Dr(a),A=new P(R,n)),$=o,E?g=o.$new(!0):_&&($=o.$parent),f&&(b=p,b.$$boundTransclude=f,b.isSlotFilled=function(t){return!!f.$$slots[t]}),x&&(w=tt(R,A,b,x,g,o,E)),E&&(N.$$addScopeInfo(R,g,!0,!(C&&(C===E||C===E.$$originalDirective))),N.$$addScopeClass(R,!0),g.$$isolateBindings=E.$$isolateBindings,O=$t(o,A,g,g.$$isolateBindings,E),O.removeWatches&&g.$on("$destroy",O.removeWatches));for(var I in w){var j=x[I],F=w[I],U=j.$$bindings.bindToController;F.identifier&&U?F.bindingInfo=$t($,A,F.instance,U,j):F.bindingInfo={};var V=F();V!==F.instance&&(F.instance=V,R.data("$"+j.name+"Controller",V),F.bindingInfo.removeWatches&&F.bindingInfo.removeWatches(),F.bindingInfo=$t($,A,F.instance,U,j))}for(r(x,function(t,e){var n=t.require;t.bindToController&&!Zr(n)&&y(n)&&c(w[e].instance,X(e,n,R,w))}),r(w,function(t){var e=t.instance;if(S(e.$onChanges))try{e.$onChanges(t.bindingInfo.initialChanges)}catch(n){i(n)}if(S(e.$onInit))try{e.$onInit()}catch(n){i(n)}S(e.$doCheck)&&($.$watch(function(){e.$doCheck()}),e.$doCheck()),S(e.$onDestroy)&&$.$on("$destroy",function(){e.$onDestroy()})}),h=0,d=s.length;h<d;h++)v=s[h],mt(v,v.isolateScope?g:o,R,A,v.require&&X(v.directiveName,v.require,R,w),b);var D=o;for(E&&(E.template||null===E.templateUrl)&&(D=g),t&&t(D,a.childNodes,void 0,f),h=l.length-1;h>=0;h--)v=l[h],mt(v,v.isolateScope?g:o,R,A,v.require&&X(v.directiveName,v.require,R,w),b);r(w,function(t){var e=t.instance;S(e.$postLink)&&e.$postLink()})}f=f||{};for(var d,v,g,$,w,b=-Number.MAX_VALUE,_=f.newScopeDirective,x=f.controllerDirectives,E=f.newIsolateScopeDirective,C=f.templateDirective,R=f.nonTlbTranscludeDirective,A=!1,O=!1,T=f.hasElementTranscludeDirective,I=n.$$element=Dr(e),j=u,F=o,U=!1,D=!1,M=0,q=t.length;M<q;M++){d=t[M];var z=d.$$start,B=d.$$end;if(z&&(I=J(e,z,B)),g=void 0,b>d.priority)break;if((w=d.scope)&&(d.templateUrl||(y(w)?(st("new/isolated scope",E||_,d,I),E=d):st("new/isolated scope",E,d,I)),_=_||d),v=d.name,!U&&(d.replace&&(d.templateUrl||d.template)||d.transclude&&!d.$$tlb)){for(var G,Q=M+1;G=t[Q++];)if(G.transclude&&!G.$$tlb||G.replace&&(G.templateUrl||G.template)){D=!0;break}U=!0}if(!d.templateUrl&&d.controller&&(w=d.controller,x=x||dt(),st("'"+v+"' controller",x[v],d,I),x[v]=d),w=d.transclude)if(A=!0,d.$$tlb||(st("transclusion",R,d,I),R=d),"element"==w)T=!0,b=d.priority,g=I,I=n.$$element=Dr(N.$$createComment(v,n[v])),e=I[0],vt(a,H(g),e),g[0].$$parentNode=g[0].parentNode,F=K(D,g,o,b,j&&j.name,{nonTlbTranscludeDirective:R});else{var nt=dt();if(g=Dr(Ot(e)).contents(),y(w)){g=[];var rt=dt(),at=dt();r(w,function(t,e){var n="?"===t.charAt(0);t=n?t.substring(1):t,rt[t]=e,nt[e]=null,at[e]=n}),r(I.contents(),function(t){var e=rt[ge(V(t))];e?(at[e]=!0,nt[e]=nt[e]||[],nt[e].push(t)):g.push(t)}),r(at,function(t,e){if(!t)throw Wi("reqslot","Required transclusion slot `{0}` was not filled.",e)});for(var ut in nt)nt[ut]&&(nt[ut]=K(D,nt[ut],o))}I.empty(),F=K(D,g,o,void 0,void 0,{needsNewScope:d.$$isolateScope||d.$$newScope}),F.$$slots=nt}if(d.template)if(O=!0,st("template",C,d,I),C=d,w=S(d.template)?d.template(I,n):d.template,w=Ct(w),d.replace){if(j=d,g=_t(w)?[]:$e(ft(d.templateNamespace,Kr(w))),e=g[0],1!=g.length||e.nodeType!==oi)throw Wi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v,"");vt(a,I,e);var ct={$attr:{}},lt=W(e,[],ct),pt=t.splice(M+1,t.length-(M+1));(E||_)&&et(lt,E,_),t=t.concat(lt).concat(pt),it(n,ct),q=t.length}else I.html(w);if(d.templateUrl)O=!0,st("template",C,d,I),C=d,d.replace&&(j=d),h=ot(t.splice(M,t.length-M),I,n,a,A&&F,s,l,{controllerDirectives:x,newScopeDirective:_!==d&&_,newIsolateScopeDirective:E,templateDirective:C,nonTlbTranscludeDirective:R}),q=t.length;else if(d.compile)try{$=d.compile(I,n,F);var ht=d.$$originalDirective||d;S($)?p(null,L(ht,$),z,B):$&&p(L(ht,$.pre),L(ht,$.post),z,B)}catch(yt){i(yt,Y(I))}d.terminal&&(h.terminal=!0,b=Math.max(b,d.priority))}return h.scope=_&&_.scope===!0,h.transcludeOnThisElement=A,h.templateOnThisElement=O,h.transclude=F,f.hasElementTranscludeDirective=T,h}function X(t,e,n,i){var o;if(b(e)){var a=e.match(x),u=e.substring(a[0].length),s=a[1]||a[3],c="?"===a[2];if("^^"===s?n=n.parent():(o=i&&i[u],o=o&&o.instance),!o){var l="$"+u+"Controller";o=s?n.inheritedData(l):n.data(l)}if(!o&&!c)throw Wi("ctreq","Controller '{0}', required by directive '{1}', can't be found!",u,t)}else if(Zr(e)){o=[];for(var f=0,p=e.length;f<p;f++)o[f]=X(t,e[f],n,i)}else y(e)&&(o={},r(e,function(e,r){o[r]=X(t,e,n,i)}));return o||null}function tt(t,e,n,r,i,o,a){var u=dt();for(var c in r){var l=r[c],f={$scope:l===a||l.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},p=l.controller;"@"==p&&(p=e[l.name]);var h=s(p,f,!0,l.controllerAs);u[l.name]=h,t.data("$"+l.name+"Controller",h.instance)}return u}function et(t,e,n){for(var r=0,i=t.length;r<i;r++)t[r]=p(t[r],{$$isolateScope:e,$$newScope:n})}function nt(t,n,r,o,u,s,c){if(n===u)return null;var h=null;if(l.hasOwnProperty(n))for(var d,v=e.get(n+f),g=0,$=v.length;g<$;g++)try{if(d=v[g],(m(o)||o>d.priority)&&d.restrict.indexOf(r)!=-1){if(s&&(d=p(d,{$$start:s,$$end:c})),!d.$$bindings){var w=d.$$bindings=a(d,d.name);y(w.isolateScope)&&(d.$$isolateBindings=w.isolateScope)}t.push(d),h=d}}catch(b){i(b)}return h}function rt(t){if(l.hasOwnProperty(t))for(var n,r=e.get(t+f),i=0,o=r.length;i<o;i++)if(n=r[i],n.multiElement)return!0;return!1}function it(t,e){var n=e.$attr,i=t.$attr;t.$$element;r(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),r(e,function(e,r){t.hasOwnProperty(r)||"$"===r.charAt(0)||(t[r]=e,"class"!==r&&"style"!==r&&(i[r]=n[r]))})}function ot(t,e,n,i,a,u,s,c){var l,f,h=[],d=e[0],v=t.shift(),g=p(v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),m=S(v.templateUrl)?v.templateUrl(e,n):v.templateUrl,$=v.templateNamespace;return e.empty(),o(m).then(function(o){var p,w,b,_;if(o=Ct(o),v.replace){if(b=_t(o)?[]:$e(ft($,Kr(o))),p=b[0],1!=b.length||p.nodeType!==oi)throw Wi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v.name,m);w={$attr:{}},vt(i,e,p);var x=W(p,[],w);y(v.scope)&&et(x,!0),t=x.concat(t),it(n,w)}else p=d,e.html(o);for(t.unshift(g),l=Q(t,p,n,a,e,v,u,s,c),r(i,function(t,n){t==p&&(i[n]=e[0])}),f=z(e[0].childNodes,a);h.length;){var S=h.shift(),E=h.shift(),C=h.shift(),k=h.shift(),R=e[0];if(!S.$$destroyed){if(E!==d){var A=E.className;c.hasElementTranscludeDirective&&v.replace||(R=Ot(p)),vt(C,Dr(E),R),U(Dr(R),A)}_=l.transcludeOnThisElement?B(S,l.transclude,k):k,l(f,S,R,i,_)}}h=null}),function(t,e,n,r,i){var o=i;e.$$destroyed||(h?h.push(e,n,r,o):(l.transcludeOnThisElement&&(o=B(e,l.transclude,i)),l(f,e,n,r,o)))}}function at(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function st(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw Wi("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,Y(r))}function lt(t,e){var r=n(e,!0);r&&t.push({priority:0,compile:function(t){var e=t.parent(),n=!!e.length;return n&&N.$$addBindingClass(e),function(t,e){var i=e.parent();n||N.$$addBindingClass(i),N.$$addBindingInfo(i,r.expressions),t.$watch(r,function(t){e[0].nodeValue=t})}}})}function ft(e,n){switch(e=jr(e||"html")){case"svg":case"math":var r=t.document.createElement("div");return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes;default:return n}}function pt(t,e){if("srcdoc"==e)return C.HTML;var n=V(t);return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?C.RESOURCE_URL:void 0}function ht(t,e,r,i,o){var a=pt(t,i);o=_[i]||o;var u=n(r,!0,a,o);if(u){if("multiple"===i&&"select"===V(t))throw Wi("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",Y(t));e.push({priority:100,compile:function(){return{pre:function(t,e,s){var c=s.$$observers||(s.$$observers=dt());if(E.test(i))throw Wi("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");var l=s[i];l!==r&&(u=l&&n(l,!0,a,o),r=l),u&&(s[i]=u(t),(c[i]||(c[i]=[])).$$inter=!0,(s.$$observers&&s.$$observers[i].$$scope||t).$watch(u,function(t,e){"class"===i&&t!=e?s.$updateClass(t,e):s.$set(i,t)}))}}}})}}function vt(e,n,r){var i,o,a=n[0],u=n.length,s=a.parentNode;if(e)for(i=0,o=e.length;i<o;i++)if(e[i]==a){e[i++]=r;for(var c=i,l=c+u-1,f=e.length;c<f;c++,l++)l<f?e[c]=e[l]:delete e[c];e.length-=u-1,e.context===a&&(e.context=r);break}s&&s.replaceChild(r,a);var p=t.document.createDocumentFragment();for(i=0;i<u;i++)p.appendChild(n[i]);for(Dr.hasData(a)&&(Dr.data(r,Dr.data(a)),Dr(a).off("$destroy")),Dr.cleanData(p.querySelectorAll("*")),i=1;i<u;i++)delete n[i];n[0]=r,n.length=1}function gt(t,e){return c(function(){return t.apply(null,arguments)},t,e)}function mt(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(u){i(u,Y(n))}}function $t(t,e,i,o,a){function s(e,n,r){S(i.$onChanges)&&n!==r&&(yt||(t.$$postDigest(j),yt=[]),l||(l={},yt.push(c)),l[e]&&(r=l[e].previousValue),l[e]=new ve(r,n))}function c(){i.$onChanges(l),l=void 0}var l,f=[],p={};return r(o,function(r,o){var c,l,d,v,g,m=r.attrName,$=r.optional,y=r.mode;switch(y){case"@":$||Ir.call(e,m)||(i[o]=e[m]=void 0),e.$observe(m,function(t){if(b(t)||T(t)){var e=i[o];s(o,t,e),i[o]=t}}),e.$$observers[m].$$scope=t,c=e[m],b(c)?i[o]=n(c)(t):T(c)&&(i[o]=c),p[o]=new ve(Gi,i[o]);break;case"=":if(!Ir.call(e,m)){if($)break;e[m]=void 0}if($&&!e[m])break;l=u(e[m]),v=l.literal?M:function(t,e){return t===e||t!==t&&e!==e},d=l.assign||function(){throw c=i[o]=l(t),Wi("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",e[m],m,a.name)},c=i[o]=l(t);var w=function(e){return v(e,i[o])||(v(e,c)?d(t,e=i[o]):i[o]=e),c=e};w.$stateful=!0,g=r.collection?t.$watchCollection(e[m],w):t.$watch(u(e[m],w),null,l.literal),f.push(g);break;case"<":if(!Ir.call(e,m)){if($)break;e[m]=void 0}if($&&!e[m])break;l=u(e[m]);var _=i[o]=l(t);p[o]=new ve(Gi,i[o]),g=t.$watch(l,function(t,e){if(e===t){if(e===_)return;e=_}s(o,t,e),i[o]=t},l.literal),f.push(g);break;case"&":if(l=e.hasOwnProperty(m)?u(e[m]):h,l===h&&$)break;i[o]=function(e){return l(t,e)}}}),{initialChanges:p,removeWatches:f.length&&function(){for(var t=0,e=f.length;t<e;++t)f[t]()}}}var yt,wt=/^\w/,bt=t.document.createElement("div"),xt=A;P.prototype={$normalize:ge,$addClass:function(t){t&&t.length>0&&O.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&O.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=me(t,e);n&&n.length&&O.addClass(this.$$element,n);var r=me(e,t);r&&r.length&&O.removeClass(this.$$element,r)},$set:function(t,e,n,o){var a,u=this.$$element[0],s=Bt(u,t),c=Wt(t),l=t;if(s?(this.$$element.prop(t,e),o=s):c&&(this[c]=e,l=c),this[t]=e,o?this.$attr[t]=o:(o=this.$attr[t],o||(this.$attr[t]=o=ut(t,"-"))),a=V(this.$$element),"a"===a&&("href"===t||"xlinkHref"===t)||"img"===a&&"src"===t)this[t]=e=I(e,"src"===t);else if("img"===a&&"srcset"===t&&$(e)){for(var f="",p=Kr(e),h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,d=/\s/.test(p)?h:/(,)/,v=p.split(d),g=Math.floor(v.length/2),y=0;y<g;y++){var w=2*y;f+=I(Kr(v[w]),!0),f+=" "+Kr(v[w+1])}var b=Kr(v[2*y]).split(/\s/);f+=I(Kr(b[0]),!0),2===b.length&&(f+=" "+Kr(b[1])),this[t]=e=f}n!==!1&&(null===e||m(e)?this.$$element.removeAttr(o):wt.test(o)?this.$$element.attr(o,e):F(this.$$element[0],o,e));var _=this.$$observers;_&&r(_[l],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=dt()),i=r[t]||(r[t]=[]);return i.push(e),v.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||m(n[t])||e(n[t])}),function(){D(i,e)}}};var St=n.startSymbol(),Et=n.endSymbol(),Ct="{{"==St&&"}}"==Et?d:function(t){return t.replace(/\{\{/g,St).replace(/}}/g,Et)},kt=/^ngAttr[A-Z]/,At=/^(.+)Start$/;return N.$$addBindingInfo=R?function(t,e){var n=t.data("$binding")||[];Zr(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:h,N.$$addBindingClass=R?function(t){U(t,"ng-binding")}:h,N.$$addScopeInfo=R?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";t.data(i,e)}:h,N.$$addScopeClass=R?function(t,e){U(t,e?"ng-isolate-scope":"ng-scope")}:h,N.$$createComment=function(e,n){var r="";return R&&(r=" "+(e||"")+": ",n&&(r+=n+" ")),t.document.createComment(r)},N}]}function ve(t,e){this.previousValue=t,this.currentValue=e}function ge(t){return bt(t.replace(Ji,""))}function me(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/);t:for(var o=0;o<r.length;o++){for(var a=r[o],u=0;u<i.length;u++)if(a==i[u])continue t;n+=(n.length>0?" ":"")+a}return n}function $e(t){t=Dr(t);var e=t.length;if(e<=1)return t;for(;e--;){var n=t[e];n.nodeType===si&&Hr.call(t,e,1)}return t}function ye(t,e){if(e&&b(e))return e;if(b(t)){var n=Yi.exec(t);if(n)return n[3]}}function we(){var t={},n=!1;this.has=function(e){return t.hasOwnProperty(e)},this.register=function(e,n){ft(e,"controller"),y(e)?c(t,e):t[e]=n},this.allowGlobals=function(){n=!0},this.$get=["$injector","$window",function(r,i){function o(t,n,r,i){if(!t||!y(t.$scope))throw e("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,n);t.$scope[n]=r}return function(e,a,u,s){var l,f,p,h;if(u=u===!0,s&&b(s)&&(h=s),b(e)){if(f=e.match(Yi),!f)throw Zi("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",e);p=f[1],h=h||f[3],e=t.hasOwnProperty(p)?t[p]:pt(a.$scope,p,!0)||(n?pt(i,p,!0):void 0),lt(e,p,!0)}if(u){var d=(Zr(e)?e[e.length-1]:e).prototype;l=Object.create(d||null),h&&o(a,h,l,p||e.name);var v;return v=c(function(){var t=r.invoke(e,l,a,p);return t!==l&&(y(t)||S(t))&&(l=t,h&&o(a,h,l,p||e.name)),l},{instance:l,identifier:h})}return l=r.instantiate(e,a,p),h&&o(a,h,l,p||e.name),l}}]}function be(){this.$get=["$window",function(t){return Dr(t.document)}]}function _e(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function xe(t){return y(t)?x(t)?t.toISOString():B(t):t}function Se(){this.$get=function(){return function(t){if(!t)return"";var e=[];return i(t,function(t,n){null===t||m(t)||(Zr(t)?r(t,function(t){e.push(et(n)+"="+et(xe(t)))}):e.push(et(n)+"="+et(xe(t))))}),e.join("&")}}}function Ee(){this.$get=function(){return function(t){function e(t,o,a){null===t||m(t)||(Zr(t)?r(t,function(t,n){e(t,o+"["+(y(t)?n:"")+"]")}):y(t)&&!x(t)?i(t,function(t,n){e(t,o+(a?"":"[")+n+(a?"":"]"))}):n.push(et(o)+"="+et(xe(t))))}if(!t)return"";var n=[];return e(t,"",!0),n.join("&")}}}function Ce(t,e){if(b(t)){var n=t.replace(no,"").trim();if(n){var r=e("Content-Type");(r&&0===r.indexOf(Qi)||ke(n))&&(t=W(n))}}return t}function ke(t){var e=t.match(to);return e&&eo[e[0]].test(t)}function Re(t){function e(t,e){t&&(i[t]=i[t]?i[t]+", "+e:e)}var n,i=dt();return b(t)?r(t.split("\n"),function(t){n=t.indexOf(":"),e(jr(Kr(t.substr(0,n))),Kr(t.substr(n+1)))}):y(t)&&r(t,function(t,n){e(jr(n),Kr(t))}),i}function Ae(t){var e;return function(n){if(e||(e=Re(t)),n){var r=e[jr(n)];return void 0===r&&(r=null),r}return e}}function Oe(t,e,n,i){return S(i)?i(t,e,n):(r(i,function(r){t=r(t,e,n)}),t)}function Te(t){return 200<=t&&t<300}function Ie(){var t=this.defaults={transformResponse:[Ce],transformRequest:[function(t){return!y(t)||R(t)||O(t)||A(t)?t:B(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:gt(Xi),put:gt(Xi),patch:gt(Xi)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},n=!1;this.useApplyAsync=function(t){return $(t)?(n=!!t,this):n};var i=!0;this.useLegacyPromiseExtensions=function(t){return $(t)?(i=!!t,this):i};var o=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(a,u,s,l,f,p){function h(n){function o(t,e){for(var n=0,r=e.length;n<r;){var i=e[n++],o=e[n++];t=t.then(i,o)}return e.length=0,t}function a(t,e){var n,i={};return r(t,function(t,r){S(t)?(n=t(e),null!=n&&(i[r]=n)):i[r]=t}),i}function u(e){var n,r,i,o=t.headers,u=c({},e.headers);o=c({},o.common,o[jr(e.method)]);t:for(n in o){r=jr(n);for(i in u)if(jr(i)===r)continue t;u[n]=o[n]}return a(u,gt(e))}function s(e){var n=e.headers,i=Oe(e.data,Ae(n),void 0,e.transformRequest);return m(i)&&r(n,function(t,e){"content-type"===jr(e)&&delete n[e]}),m(e.withCredentials)&&!m(t.withCredentials)&&(e.withCredentials=t.withCredentials),g(e,i).then(l,l)}function l(t){var e=c({},t);return e.data=Oe(t.data,t.headers,t.status,h.transformResponse),Te(t.status)?e:f.reject(e)}if(!y(n))throw e("$http")("badreq","Http request configuration must be an object.  Received: {0}",n);if(!b(n.url))throw e("$http")("badreq","Http request configuration url must be a string.  Received: {0}",n.url);var h=c({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer},n);h.headers=u(n),h.method=Pr(h.method),h.paramSerializer=b(h.paramSerializer)?p.get(h.paramSerializer):h.paramSerializer;var d=[],v=[],$=f.when(h);return r(x,function(t){(t.request||t.requestError)&&d.unshift(t.request,t.requestError),(t.response||t.responseError)&&v.push(t.response,t.responseError)}),$=o($,d),$=$.then(s),$=o($,v),i?($.success=function(t){return lt(t,"fn"),$.then(function(e){t(e.data,e.status,e.headers,h)}),$},$.error=function(t){return lt(t,"fn"),$.then(null,function(e){t(e.data,e.status,e.headers,h)}),$}):($.success=io("success"),$.error=io("error")),$}function d(t){r(arguments,function(t){h[t]=function(e,n){return h(c({},n||{},{method:t,url:e}))}})}function v(t){r(arguments,function(t){h[t]=function(e,n,r){return h(c({},r||{},{method:t,url:e,data:n}))}})}function g(e,i){function o(t){if(t){var e={};return r(t,function(t,r){e[r]=function(e){function r(){t(e)}n?l.$applyAsync(r):l.$$phase?r():l.$apply(r)}}),e}}function s(t,e,r,i){function o(){c(e,t,r,i)}v&&(Te(t)?v.put(E,[t,e,Re(r),i]):v.remove(E)),n?l.$applyAsync(o):(o(),l.$$phase||l.$apply())}function c(t,n,r,i){n=n>=-1?n:0,(Te(n)?b.resolve:b.reject)({data:t,status:n,headers:Ae(r),config:e,statusText:i})}function p(t){c(t.data,t.status,gt(t.headers()),t.statusText)}function d(){var t=h.pendingRequests.indexOf(e);t!==-1&&h.pendingRequests.splice(t,1)}var v,g,b=f.defer(),x=b.promise,S=e.headers,E=w(e.url,e.paramSerializer(e.params));if(h.pendingRequests.push(e),x.then(d,d),!e.cache&&!t.cache||e.cache===!1||"GET"!==e.method&&"JSONP"!==e.method||(v=y(e.cache)?e.cache:y(t.cache)?t.cache:_),v&&(g=v.get(E),$(g)?I(g)?g.then(p,p):Zr(g)?c(g[1],g[0],gt(g[2]),g[3]):c(g,200,{},"OK"):v.put(E,x)),m(g)){var C=Fn(e.url)?u()[e.xsrfCookieName||t.xsrfCookieName]:void 0;C&&(S[e.xsrfHeaderName||t.xsrfHeaderName]=C),a(e.method,E,i,s,S,e.timeout,e.withCredentials,e.responseType,o(e.eventHandlers),o(e.uploadEventHandlers))}return x}function w(t,e){return e.length>0&&(t+=(t.indexOf("?")==-1?"?":"&")+e),t}var _=s("$http");t.paramSerializer=b(t.paramSerializer)?p.get(t.paramSerializer):t.paramSerializer;var x=[];return r(o,function(t){x.unshift(b(t)?p.get(t):p.invoke(t))}),h.pendingRequests=[],d("get","delete","head","jsonp"),v("post","put","patch"),h.defaults=t,h}]}function je(){this.$get=function(){return function(){return new t.XMLHttpRequest}}}function Pe(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(t,e,n,r){return Fe(t,r,t.defer,e,n[0])}]}function Fe(t,e,n,i,o){function a(t,e,n){t=t.replace("JSON_CALLBACK",e);var r=o.createElement("script"),a=null;return r.type="text/javascript",r.src=t,r.async=!0,a=function(t){vi(r,"load",a),vi(r,"error",a),o.body.removeChild(r),r=null;var u=-1,s="unknown";t&&("load"!==t.type||i.wasCalled(e)||(t={type:"error"}),s=t.type,u="error"===t.type?404:200),n&&n(u,s)},di(r,"load",a),di(r,"error",a),o.body.appendChild(r),a}return function(o,u,s,c,l,f,p,d,v,g){function y(){_&&_(),x&&x.abort()}function w(e,r,i,o,a){$(C)&&n.cancel(C),_=x=null,e(r,i,o,a),t.$$completeOutstandingRequest(h)}if(t.$$incOutstandingRequestCount(),u=u||t.url(),"jsonp"===jr(o))var b=i.createCallback(u),_=a(u,b,function(t,e){var n=200===t&&i.getResponse(b);w(c,t,n,"",e),i.removeCallback(b)});else{var x=e(o,u);x.open(o,u,!0),r(l,function(t,e){$(t)&&x.setRequestHeader(e,t)}),x.onload=function(){var t=x.statusText||"",e="response"in x?x.response:x.responseText,n=1223===x.status?204:x.status;0===n&&(n=e?200:"file"==Pn(u).protocol?404:0),w(c,n,e,x.getAllResponseHeaders(),t)};var S=function(){w(c,-1,null,null,"")};if(x.onerror=S,x.onabort=S,r(v,function(t,e){x.addEventListener(e,t)}),r(g,function(t,e){x.upload.addEventListener(e,t)}),p&&(x.withCredentials=!0),d)try{x.responseType=d}catch(E){if("json"!==d)throw E}x.send(m(s)?null:s)}if(f>0)var C=n(y,f);else I(f)&&f.then(y)}}function Ue(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(h,t).replace(d,e)}function u(t){if(null==t)return"";switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=B(t)}return t}function s(t,e,n,r){var i;return i=t.$watch(function(t){return i(),r(t)},e,n)}function l(o,l,h,d){function g(t){try{return t=I(t),d&&!$(t)?t:u(t)}catch(e){r(oo.interr(o,e))}}if(!o.length||o.indexOf(t)===-1){var y;if(!l){var w=a(o);y=v(w),y.exp=o,y.expressions=[],y.$$watchDelegate=s}return y}d=!!d;for(var b,_,x,E=0,C=[],k=[],R=o.length,A=[],O=[];E<R;){if((b=o.indexOf(t,E))==-1||(_=o.indexOf(e,b+f))==-1){E!==R&&A.push(a(o.substring(E)));break}E!==b&&A.push(a(o.substring(E,b))),x=o.substring(b+f,_),C.push(x),k.push(n(x,g)),E=_+p,O.push(A.length),A.push("")}if(h&&A.length>1&&oo.throwNoconcat(o),!l||C.length){var T=function(t){for(var e=0,n=C.length;e<n;e++){if(d&&m(t[e]))return;A[O[e]]=t[e]}return A.join("")},I=function(t){return h?i.getTrusted(h,t):i.valueOf(t)};return c(function(t){var e=0,n=C.length,i=new Array(n);try{for(;e<n;e++)i[e]=k[e](t);return T(i)}catch(a){r(oo.interr(o,a))}},{exp:o,expressions:C,$$watchDelegate:function(t,e){var n;return t.$watchGroup(k,function(r,i){var o=T(r);S(e)&&e.call(this,o,r!==i?n:o,t),n=o})}})}}var f=t.length,p=e.length,h=new RegExp(t.replace(/./g,o),"g"),d=new RegExp(e.replace(/./g,o),"g");return l.startSymbol=function(){return t},l.endSymbol=function(){return e},l}]}function Ve(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(t,e,n,r,i){function o(o,u,s,c){function l(){f?o.apply(null,p):o(v)}var f=arguments.length>4,p=f?H(arguments,4):[],h=e.setInterval,d=e.clearInterval,v=0,g=$(c)&&!c,m=(g?r:n).defer(),y=m.promise;return s=$(s)?s:0,y.$$intervalId=h(function(){g?i.defer(l):t.$evalAsync(l),m.notify(v++),s>0&&v>=s&&(m.resolve(v),d(y.$$intervalId),delete a[y.$$intervalId]),g||t.$apply()},u),a[y.$$intervalId]=m,y}var a={};return o.cancel=function(t){return!!(t&&t.$$intervalId in a)&&(a[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete a[t.$$intervalId],!0)},o}]}function De(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=tt(e[n]);return e.join("/")}function Ne(t,e){var n=Pn(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=f(n.port)||so[n.protocol]||null}function Me(t,e){var n="/"!==t.charAt(0);n&&(t="/"+t);var r=Pn(t);e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=Q(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function qe(t,e){return 0===t.lastIndexOf(e,0)}function He(t,e){if(qe(e,t))return e.substr(t.length)}function Le(t){var e=t.indexOf("#");return e==-1?t:t.substr(0,e)}function ze(t){return t.replace(/(#.+)|#$/,"$1")}function Be(t){return t.substr(0,Le(t).lastIndexOf("/")+1)}function We(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function Ge(t,e,n){this.$$html5=!0,n=n||"",Ne(t,this),this.$$parse=function(t){var n=He(e,t);if(!b(n))throw co("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e);Me(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=X(this.$$search),n=this.$$hash?"#"+tt(this.$$hash):"";this.$$url=De(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a,u;return $(o=He(t,r))?(a=o,u=$(o=He(n,o))?e+(He("/",o)||o):t+a):$(o=He(e,r))?u=e+o:e==r+"/"&&(u=e),u&&this.$$parse(u),!!u}}function Je(t,e,n){Ne(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/;return qe(e,n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o,a=He(t,r)||He(e,r);m(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",m(a)&&(t=r,this.replace())):(o=He(n,a),m(o)&&(o=a)),Me(o,this),this.$$path=i(this.$$path,o,t),this.$$compose()},this.$$compose=function(){var e=X(this.$$search),r=this.$$hash?"#"+tt(this.$$hash):"";this.$$url=De(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return Le(t)==Le(e)&&(this.$$parse(e),!0)}}function Ze(t,e,n){this.$$html5=!0,Je.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return t==Le(r)?o=r:(a=He(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$compose=function(){var e=X(this.$$search),r=this.$$hash?"#"+tt(this.$$hash):"";this.$$url=De(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+n+this.$$url}}function Ye(t){return function(){return this[t]}}function Ke(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function Qe(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(e){return $(e)?(t=e,this):t},this.html5Mode=function(t){return T(t)?(e.enabled=t,this):y(t)?(T(t.enabled)&&(e.enabled=t.enabled),T(t.requireBase)&&(e.requireBase=t.requireBase),T(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function u(t,e,n){var i=c.url(),o=c.$$state;try{r.url(t,e,n),c.$$state=r.state()}catch(a){throw c.url(i),c.$$state=o,a}}function s(t,e){n.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l,f,p=r.baseHref(),h=r.url();if(e.enabled){if(!p&&e.requireBase)throw co("nobase","$location in HTML5 mode requires a <base> tag to be present!");f=We(h)+(p||"/"),l=i.history?Ge:Ze}else f=Le(h),l=Je;var d=Be(f);c=new l(f,d,"#"+t),c.$$parseLinkUrl(h,h),c.$$state=r.state();var v=/^\s*(javascript|mailto):/i;o.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var i=Dr(t.target);"a"!==V(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return;var u=i.prop("href"),s=i.attr("href")||i.attr("xlink:href");y(u)&&"[object SVGAnimatedString]"===u.toString()&&(u=Pn(u.animVal).href),v.test(u)||!u||i.attr("target")||t.isDefaultPrevented()||c.$$parseLinkUrl(u,s)&&(t.preventDefault(),c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),ze(c.absUrl())!=ze(h)&&r.url(c.absUrl(),!0);var g=!0;return r.onUrlChange(function(t,e){return m(He(d,t))?void(a.location.href=t):(n.$evalAsync(function(){var r,i=c.absUrl(),o=c.$$state;t=ze(t),c.$$parse(t),c.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(r?(c.$$parse(i),c.$$state=o,u(i,!1,o)):(g=!1,s(i,o)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var t=ze(r.url()),e=ze(c.absUrl()),o=r.state(),a=c.$$replace,l=t!==e||c.$$html5&&i.history&&o!==c.$$state;(g||l)&&(g=!1,n.$evalAsync(function(){var e=c.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,c.$$state,o).defaultPrevented;c.absUrl()===e&&(r?(c.$$parse(t),c.$$state=o):(l&&u(e,a,o===c.$$state?null:c.$$state),s(t,o)))})),c.$$replace=!1}),c}]}function Xe(){var t=!0,e=this;this.debugEnabled=function(e){return $(e)?(t=e,this):t},this.$get=["$window",function(n){function i(t){return t instanceof Error&&(t.stack?t=t.message&&t.stack.indexOf(t.message)===-1?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function o(t){var e=n.console||{},o=e[t]||e.log||h,a=!1;try{a=!!o.apply}catch(u){}return a?function(){var t=[];return r(arguments,function(e){t.push(i(e))}),o.apply(e,t)}:function(t,e){o(t,null==e?"":e)}}return{log:o("log"),info:o("info"),warn:o("warn"),error:o("error"),debug:function(){var n=o("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function tn(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw fo("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e);return t}function en(t){return t+""}function nn(t,e){if(t){if(t.constructor===t)throw fo("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t.window===t)throw fo("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw fo("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e);if(t===Object)throw fo("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function rn(t,e){if(t){if(t.constructor===t)throw fo("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t===po||t===ho||t===vo)throw fo("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function on(t,e){if(t&&(t===(0).constructor||t===(!1).constructor||t==="".constructor||t==={}.constructor||t===[].constructor||t===Function.constructor))throw fo("isecaf","Assigning to a constructor is disallowed! Expression: {0}",e)}function an(t,e){return"undefined"!=typeof t?t:e}function un(t,e){return"undefined"==typeof t?e:"undefined"==typeof e?t:t+e}function sn(t,e){var n=t(e);return!n.$stateful}function cn(t,e){var n,i;switch(t.type){case yo.Program:n=!0,r(t.body,function(t){cn(t.expression,e),n=n&&t.expression.constant}),t.constant=n;break;case yo.Literal:t.constant=!0,t.toWatch=[];break;case yo.UnaryExpression:cn(t.argument,e),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch;break;case yo.BinaryExpression:cn(t.left,e),cn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch);break;case yo.LogicalExpression:cn(t.left,e),cn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t];break;case yo.ConditionalExpression:cn(t.test,e),cn(t.alternate,e),cn(t.consequent,e),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t];break;case yo.Identifier:t.constant=!1,t.toWatch=[t];break;case yo.MemberExpression:cn(t.object,e),t.computed&&cn(t.property,e),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=[t];break;case yo.CallExpression:
n=!!t.filter&&sn(e,t.callee.name),i=[],r(t.arguments,function(t){cn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=t.filter&&sn(e,t.callee.name)?i:[t];break;case yo.AssignmentExpression:cn(t.left,e),cn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t];break;case yo.ArrayExpression:n=!0,i=[],r(t.elements,function(t){cn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=i;break;case yo.ObjectExpression:n=!0,i=[],r(t.properties,function(t){cn(t.value,e),n=n&&t.value.constant&&!t.computed,t.value.constant||i.push.apply(i,t.value.toWatch)}),t.constant=n,t.toWatch=i;break;case yo.ThisExpression:t.constant=!1,t.toWatch=[];break;case yo.LocalsExpression:t.constant=!1,t.toWatch=[]}}function ln(t){if(1==t.length){var e=t[0].expression,n=e.toWatch;return 1!==n.length?n:n[0]!==e?n:void 0}}function fn(t){return t.type===yo.Identifier||t.type===yo.MemberExpression}function pn(t){if(1===t.body.length&&fn(t.body[0].expression))return{type:yo.AssignmentExpression,left:t.body[0].expression,right:{type:yo.NGValueParameter},operator:"="}}function hn(t){return 0===t.body.length||1===t.body.length&&(t.body[0].expression.type===yo.Literal||t.body[0].expression.type===yo.ArrayExpression||t.body[0].expression.type===yo.ObjectExpression)}function dn(t){return t.constant}function vn(t,e){this.astBuilder=t,this.$filter=e}function gn(t,e){this.astBuilder=t,this.$filter=e}function mn(t){return"constructor"==t}function $n(t){return S(t.valueOf)?t.valueOf():bo.call(t)}function yn(){var t,e,n=dt(),i=dt(),o={"true":!0,"false":!1,"null":null,undefined:void 0};this.addLiteral=function(t,e){o[t]=e},this.setIdentifierFns=function(n,r){return t=n,e=r,this},this.$get=["$filter",function(a){function u(t,e,r){var o,u,c;switch(r=r||w,typeof t){case"string":t=t.trim(),c=t;var g=r?i:n;if(o=g[c],!o){":"===t.charAt(0)&&":"===t.charAt(1)&&(u=!0,t=t.substring(2));var $=r?y:m,b=new $o($),_=new wo(b,a,$);o=_.parse(t),o.constant?o.$$watchDelegate=d:u?o.$$watchDelegate=o.literal?p:f:o.inputs&&(o.$$watchDelegate=l),r&&(o=s(o)),g[c]=o}return v(o,e);case"function":return v(t,e);default:return v(h,e)}}function s(t){function e(e,n,r,i){var o=w;w=!0;try{return t(e,n,r,i)}finally{w=o}}if(!t)return t;e.$$watchDelegate=t.$$watchDelegate,e.assign=s(t.assign),e.constant=t.constant,e.literal=t.literal;for(var n=0;t.inputs&&n<t.inputs.length;++n)t.inputs[n]=s(t.inputs[n]);return e.inputs=t.inputs,e}function c(t,e){return null==t||null==e?t===e:("object"!=typeof t||(t=$n(t),"object"!=typeof t))&&(t===e||t!==t&&e!==e)}function l(t,e,n,r,i){var o,a=r.inputs;if(1===a.length){var u=c;return a=a[0],t.$watch(function(t){var e=a(t);return c(e,u)||(o=r(t,void 0,void 0,[e]),u=e&&$n(e)),o},e,n,i)}for(var s=[],l=[],f=0,p=a.length;f<p;f++)s[f]=c,l[f]=null;return t.$watch(function(t){for(var e=!1,n=0,i=a.length;n<i;n++){var u=a[n](t);(e||(e=!c(u,s[n])))&&(l[n]=u,s[n]=u&&$n(u))}return e&&(o=r(t,void 0,void 0,l)),o},e,n,i)}function f(t,e,n,r){var i,o;return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,S(e)&&e.apply(this,arguments),$(t)&&r.$$postDigest(function(){$(o)&&i()})},n)}function p(t,e,n,i){function o(t){var e=!0;return r(t,function(t){$(t)||(e=!1)}),e}var a,u;return a=t.$watch(function(t){return i(t)},function(t,n,r){u=t,S(e)&&e.call(this,t,n,r),o(t)&&r.$$postDigest(function(){o(u)&&a()})},n)}function d(t,e,n,r){var i;return i=t.$watch(function(t){return i(),r(t)},e,n)}function v(t,e){if(!e)return t;var n=t.$$watchDelegate,r=!1,i=n!==p&&n!==f,o=i?function(n,i,o,a){var u=r&&a?a[0]:t(n,i,o,a);return e(u,n,i)}:function(n,r,i,o){var a=t(n,r,i,o),u=e(a,n,r);return $(a)?u:a};return t.$$watchDelegate&&t.$$watchDelegate!==l?o.$$watchDelegate=t.$$watchDelegate:e.$stateful||(o.$$watchDelegate=l,r=!t.inputs,o.inputs=t.inputs?t.inputs:[t]),o}var g=Xr().noUnsafeEval,m={csp:g,expensiveChecks:!1,literals:N(o),isIdentifierStart:S(t)&&t,isIdentifierContinue:S(e)&&e},y={csp:g,expensiveChecks:!0,literals:N(o),isIdentifierStart:S(t)&&t,isIdentifierContinue:S(e)&&e},w=!1;return u.$$runningExpensiveChecks=function(){return w},u}]}function wn(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return _n(function(e){t.$evalAsync(e)},e)}]}function bn(){this.$get=["$browser","$exceptionHandler",function(t,e){return _n(function(e){t.defer(e)},e)}]}function _n(t,n){function i(){this.$$state={status:0}}function o(t,e){return function(n){e.call(t,n)}}function a(t){var e,r,i;i=t.pending,t.processScheduled=!1,t.pending=void 0;for(var o=0,a=i.length;o<a;++o){r=i[o][0],e=i[o][t.status];try{S(e)?r.resolve(e(t.value)):1===t.status?r.resolve(t.value):r.reject(t.value)}catch(u){r.reject(u),n(u)}}}function u(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){a(e)}))}function s(){this.promise=new i}function l(t){var e=new s,n=0,i=Zr(t)?[]:{};return r(t,function(t,r){n++,$(t).then(function(t){i.hasOwnProperty(r)||(i[r]=t,--n||e.resolve(i))},function(t){i.hasOwnProperty(r)||e.reject(t)})}),0===n&&e.resolve(i),e.promise}function f(t){var e=h();return r(t,function(t){$(t).then(e.resolve,e.reject)}),e.promise}var p=e("$q",TypeError),h=function(){var t=new s;return t.resolve=o(t,t.resolve),t.reject=o(t,t.reject),t.notify=o(t,t.notify),t};c(i.prototype,{then:function(t,e,n){if(m(t)&&m(e)&&m(n))return this;var r=new s;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&u(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return g(e,!0,t)},function(e){return g(e,!1,t)},e)}}),c(s.prototype,{resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(p("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){function e(t){s||(s=!0,a.$$resolve(t))}function r(t){s||(s=!0,a.$$reject(t))}var i,a=this,s=!1;try{(y(t)||S(t))&&(i=t&&t.then),S(i)?(this.promise.$$state.status=-1,i.call(t,e,r,o(this,this.notify))):(this.promise.$$state.value=t,this.promise.$$state.status=1,u(this.promise.$$state))}catch(c){r(c),n(c)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,u(this.promise.$$state)},notify:function(e){var r=this.promise.$$state.pending;this.promise.$$state.status<=0&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;o<a;o++){i=r[o][0],t=r[o][3];try{i.notify(S(t)?t(e):e)}catch(u){n(u)}}})}});var d=function(t){var e=new s;return e.reject(t),e.promise},v=function(t,e){var n=new s;return e?n.resolve(t):n.reject(t),n.promise},g=function(t,e,n){var r=null;try{S(n)&&(r=n())}catch(i){return v(i,!1)}return I(r)?r.then(function(){return v(t,e)},function(t){return v(t,!1)}):v(t,e)},$=function(t,e,n,r){var i=new s;return i.resolve(t),i.promise.then(e,n,r)},w=$,b=function(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}if(!S(t))throw p("norslvr","Expected resolverFn, got '{0}'",t);var r=new s;return t(e,n),r.promise};return b.prototype=i.prototype,b.defer=h,b.reject=d,b.when=$,b.resolve=w,b.all=l,b.race=f,b}function xn(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function Sn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=a(),this.$$ChildScope=null}return e.prototype=t,e}var i=10,o=e("$rootScope"),u=null,s=null;this.digestTtl=function(t){return arguments.length&&(i=t),i},this.$get=["$exceptionHandler","$parse","$browser",function(e,c,l){function f(t){t.currentScope.$$destroyed=!0}function p(t){9===Vr&&(t.$$childHead&&p(t.$$childHead),t.$$nextSibling&&p(t.$$nextSibling)),t.$parent=t.$$nextSibling=t.$$prevSibling=t.$$childHead=t.$$childTail=t.$root=t.$$watchers=null}function d(){this.$id=a(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function v(t){if(E.$$phase)throw o("inprog","{0} already in progress",E.$$phase);E.$$phase=t}function g(){E.$$phase=null}function $(t,e){do t.$$watchersCount+=e;while(t=t.$parent)}function w(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function b(){}function _(){for(;R.length;)try{R.shift()()}catch(t){e(t)}s=null}function x(){null===s&&(s=l.defer(function(){E.$apply(_)}))}d.prototype={constructor:d,$new:function(e,n){var r;return n=n||this,e?(r=new d,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!=this)&&r.$on("$destroy",f),r},$watch:function(t,e,n,r){var i=c(t);if(i.$$watchDelegate)return i.$$watchDelegate(this,e,n,i,t);var o=this,a=o.$$watchers,s={fn:e,last:b,get:i,exp:r||t,eq:!!n};return u=null,S(e)||(s.fn=h),a||(a=o.$$watchers=[]),a.unshift(s),$(this,1),function(){D(a,s)>=0&&$(o,-1),u=null}},$watchGroup:function(t,e){function n(){s=!1,c?(c=!1,e(o,o,u)):e(o,i,u)}var i=new Array(t.length),o=new Array(t.length),a=[],u=this,s=!1,c=!0;if(!t.length){var l=!0;return u.$evalAsync(function(){l&&e(o,o,u)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,r){o[0]=t,i[0]=n,e(o,t===n?o:i,r)}):(r(t,function(t,e){var r=u.$watch(t,function(t,r){o[e]=t,i[e]=r,s||(s=!0,u.$evalAsync(n))});a.push(r)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function r(t){o=t;var e,r,i,u,s;if(!m(o)){if(y(o))if(n(o)){a!==h&&(a=h,g=a.length=0,f++),e=o.length,g!==e&&(f++,a.length=g=e);for(var c=0;c<e;c++)s=a[c],u=o[c],i=s!==s&&u!==u,i||s===u||(f++,a[c]=u)}else{a!==d&&(a=d={},g=0,f++),e=0;for(r in o)Ir.call(o,r)&&(e++,u=o[r],s=a[r],r in a?(i=s!==s&&u!==u,i||s===u||(f++,a[r]=u)):(g++,a[r]=u,f++));if(g>e){f++;for(r in a)Ir.call(o,r)||(g--,delete a[r])}}else a!==o&&(a=o,f++);return f}}function i(){if(v?(v=!1,e(o,o,s)):e(o,u,s),l)if(y(o))if(n(o)){u=new Array(o.length);for(var t=0;t<o.length;t++)u[t]=o[t]}else{u={};for(var r in o)Ir.call(o,r)&&(u[r]=o[r])}else u=o}r.$stateful=!0;var o,a,u,s=this,l=e.length>1,f=0,p=c(t,r),h=[],d={},v=!0,g=0;return this.$watch(p,i)},$digest:function(){var t,n,r,a,c,f,p,h,d,m,$,y,w=i,x=this,R=[];v("$digest"),l.$$checkUrlChange(),this===E&&null!==s&&(l.defer.cancel(s),_()),u=null;do{h=!1,m=x;for(var O=0;O<C.length;O++){try{y=C[O],y.scope.$eval(y.expression,y.locals)}catch(T){e(T)}u=null}C.length=0;t:do{if(f=m.$$watchers)for(p=f.length;p--;)try{if(t=f[p])if(c=t.get,(n=c(m))===(r=t.last)||(t.eq?M(n,r):"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))){if(t===u){h=!1;break t}}else h=!0,u=t,t.last=t.eq?N(n,null):n,a=t.fn,a(n,r===b?n:r,m),w<5&&($=4-w,R[$]||(R[$]=[]),R[$].push({msg:S(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:n,oldVal:r}))}catch(T){e(T)}if(!(d=m.$$watchersCount&&m.$$childHead||m!==x&&m.$$nextSibling))for(;m!==x&&!(d=m.$$nextSibling);)m=m.$parent}while(m=d);if((h||C.length)&&!w--)throw g(),o("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",i,R)}while(h||C.length);for(g();A<k.length;)try{k[A++]()}catch(T){e(T)}k.length=A=0},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===E&&l.$$applicationDestroyed(),$(this,-this.$$watchersCount);for(var e in this.$$listenerCount)w(this,this.$$listenerCount[e],e);t&&t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=h,this.$on=this.$watch=this.$watchGroup=function(){return h},this.$$listeners={},this.$$nextSibling=null,p(this)}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){E.$$phase||C.length||l.defer(function(){C.length&&E.$digest()}),C.push({scope:this,expression:c(t),locals:e})},$$postDigest:function(t){k.push(t)},$apply:function(t){try{v("$apply");try{return this.$eval(t)}finally{g()}}catch(n){e(n)}finally{try{E.$digest()}catch(n){throw e(n),n}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this;t&&R.push(e),t=c(t),x()},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(e);r!==-1&&(n[r]=null,w(i,1,t))}},$emit:function(t,n){var r,i,o,a=[],u=this,s=!1,c={name:t,targetScope:u,stopPropagation:function(){s=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=q([c],arguments,1);do{for(r=u.$$listeners[t]||a,c.currentScope=u,i=0,o=r.length;i<o;i++)if(r[i])try{r[i].apply(null,l)}catch(f){e(f)}else r.splice(i,1),i--,o--;if(s)return c.currentScope=null,c;u=u.$parent}while(u);return c.currentScope=null,c},$broadcast:function(t,n){var r=this,i=r,o=r,a={name:t,targetScope:r,preventDefault:function(){a.defaultPrevented=!0},defaultPrevented:!1};if(!r.$$listenerCount[t])return a;for(var u,s,c,l=q([a],arguments,1);i=o;){for(a.currentScope=i,u=i.$$listeners[t]||[],s=0,c=u.length;s<c;s++)if(u[s])try{u[s].apply(null,l)}catch(f){e(f)}else u.splice(s,1),s--,c--;if(!(o=i.$$listenerCount[t]&&i.$$childHead||i!==r&&i.$$nextSibling))for(;i!==r&&!(o=i.$$nextSibling);)i=i.$parent}return a.currentScope=null,a}};var E=new d,C=E.$$asyncQueue=[],k=E.$$postDigestQueue=[],R=E.$$applyAsyncQueue=[],A=0;return E}]}function En(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(e){return $(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return $(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return i=Pn(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function Cn(t){if("self"===t)return t;if(b(t)){if(t.indexOf("***")>-1)throw _o("iwcard","Illegal sequence *** in string matcher.  String: {0}",t);return t=Qr(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(E(t))return new RegExp("^"+t.source+"$");throw _o("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function kn(t){var e=[];return $(t)&&r(t,function(t){e.push(Cn(t))}),e}function Rn(){this.SCE_CONTEXTS=xo;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=kn(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=kn(t)),e},this.$get=["$injector",function(n){function r(t,e){return"self"===t?Fn(e):!!t.exec(e.href)}function i(n){var i,o,a=Pn(n.toString()),u=!1;for(i=0,o=t.length;i<o;i++)if(r(t[i],a)){u=!0;break}if(u)for(i=0,o=e.length;i<o;i++)if(r(e[i],a)){u=!1;break}return u}function o(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function a(t,e){var n=f.hasOwnProperty(t)?f[t]:null;if(!n)throw _o("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e);if(null===e||m(e)||""===e)return e;if("string"!=typeof e)throw _o("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t);return new n(e)}function u(t){return t instanceof l?t.$$unwrapTrustedValue():t}function s(t,e){if(null===e||m(e)||""===e)return e;var n=f.hasOwnProperty(t)?f[t]:null;if(n&&e instanceof n)return e.$$unwrapTrustedValue();if(t===xo.RESOURCE_URL){if(i(e))return e;throw _o("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===xo.HTML)return c(e);throw _o("unsafe","Attempting to use an unsafe value in a safe context.")}var c=function(t){throw _o("unsafe","Attempting to use an unsafe value in a safe context.")};n.has("$sanitize")&&(c=n.get("$sanitize"));var l=o(),f={};return f[xo.HTML]=o(l),f[xo.CSS]=o(l),f[xo.URL]=o(l),f[xo.JS]=o(l),f[xo.RESOURCE_URL]=o(f[xo.URL]),{trustAs:a,getTrusted:s,valueOf:u}}]}function An(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&Vr<8)throw _o("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var i=gt(xo);i.isEnabled=function(){return t},i.trustAs=n.trustAs,i.getTrusted=n.getTrusted,i.valueOf=n.valueOf,t||(i.trustAs=i.getTrusted=function(t,e){return e},i.valueOf=d),i.parseAs=function(t,n){var r=e(n);return r.literal&&r.constant?r:e(n,function(e){return i.getTrusted(t,e)})};var o=i.parseAs,a=i.getTrusted,u=i.trustAs;return r(xo,function(t,e){var n=jr(e);i[bt("parse_as_"+n)]=function(e){return o(t,e)},i[bt("get_trusted_"+n)]=function(e){return a(t,e)},i[bt("trust_as_"+n)]=function(e){return u(t,e)}}),i}]}function On(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=t.chrome&&t.chrome.app&&t.chrome.app.runtime,a=!o&&t.history&&t.history.pushState,u=f((/android (\d+)/.exec(jr((t.navigator||{}).userAgent))||[])[1]),s=/Boxee/i.test((t.navigator||{}).userAgent),c=e[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,p=c.body&&c.body.style,h=!1,d=!1;if(p){for(var v in p)if(r=l.exec(v)){n=r[0],n=n[0].toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in p&&"webkit"),h=!!("transition"in p||n+"Transition"in p),d=!!("animation"in p||n+"Animation"in p),!u||h&&d||(h=b(p.webkitTransition),d=b(p.webkitAnimation))}return{history:!(!a||u<4||s),hasEvent:function(t){if("input"===t&&Vr<=11)return!1;if(m(i[t])){var e=c.createElement("div");i[t]="on"+t in e}return i[t]},csp:Xr(),vendorPrefix:n,transitions:h,animations:d,android:u}}]}function Tn(){var t;this.httpOptions=function(e){return e?(t=e,this):t},this.$get=["$templateCache","$http","$q","$sce",function(e,n,r,i){function o(a,u){function s(t){if(!u)throw So("tpload","Failed to load template: {0} (HTTP status: {1} {2})",a,t.status,t.statusText);return r.reject(t)}o.totalPendingRequests++,b(a)&&!m(e.get(a))||(a=i.getTrustedResourceUrl(a));var l=n.defaults&&n.defaults.transformResponse;return Zr(l)?l=l.filter(function(t){return t!==Ce}):l===Ce&&(l=null),n.get(a,c({cache:e,transformResponse:l},t))["finally"](function(){o.totalPendingRequests--}).then(function(t){return e.put(a,t.data),t.data},s)}return o.totalPendingRequests=0,o}]}function In(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var i={};return i.findBindings=function(t,e,n){var i=t.getElementsByClassName("ng-binding"),o=[];return r(i,function(t){var i=Gr.element(t).data("$binding");i&&r(i,function(r){if(n){var i=new RegExp("(^|\\s)"+Qr(e)+"(\\s|\\||$)");i.test(r)&&o.push(t)}else r.indexOf(e)!=-1&&o.push(t)})}),o},i.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',u=t.querySelectorAll(a);if(u.length)return u}},i.getLocation=function(){return n.url()},i.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},i.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},i}]}function jn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,u,s){S(o)||(s=u,u=o,o=h);var c,l=H(arguments,3),f=$(s)&&!s,p=(f?r:n).defer(),d=p.promise;return c=e.defer(function(){try{p.resolve(o.apply(null,l))}catch(e){p.reject(e),i(e)}finally{delete a[d.$$timeoutId]}f||t.$apply()},u),d.$$timeoutId=c,a[c]=p,d}var a={};return o.cancel=function(t){return!!(t&&t.$$timeoutId in a)&&(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId))},o}]}function Pn(t){var e=t;return Vr&&(Eo.setAttribute("href",e),e=Eo.href),Eo.setAttribute("href",e),{href:Eo.href,protocol:Eo.protocol?Eo.protocol.replace(/:$/,""):"",host:Eo.host,search:Eo.search?Eo.search.replace(/^\?/,""):"",hash:Eo.hash?Eo.hash.replace(/^#/,""):"",hostname:Eo.hostname,port:Eo.port,pathname:"/"===Eo.pathname.charAt(0)?Eo.pathname:"/"+Eo.pathname}}function Fn(t){var e=b(t)?Pn(t):t;return e.protocol===Co.protocol&&e.host===Co.host}function Un(){this.$get=v(t)}function Vn(t){function e(t){try{return decodeURIComponent(t)}catch(e){return t}}var n=t[0]||{},r={},i="";return function(){var t,o,a,u,s,c=n.cookie||"";if(c!==i)for(i=c,t=i.split("; "),r={},a=0;a<t.length;a++)o=t[a],u=o.indexOf("="),u>0&&(s=e(o.substring(0,u)),m(r[s])&&(r[s]=e(o.substring(u+1))));return r}}function Dn(){this.$get=Vn}function Nn(t){function e(i,o){if(y(i)){var a={};return r(i,function(t,n){a[n]=e(n,t)}),a}return t.factory(i+n,o)}var n="Filter";this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",zn),e("date",or),e("filter",Mn),e("json",ar),e("limitTo",ur),e("lowercase",jo),e("number",Bn),e("orderBy",cr),e("uppercase",Po)}function Mn(){return function(t,r,i,o){if(!n(t)){if(null==t)return t;throw e("filter")("notarray","Expected array but received: {0}",t)}o=o||"$";var a,u,s=Ln(r);switch(s){case"function":a=r;break;case"boolean":case"null":case"number":case"string":u=!0;case"object":a=qn(r,i,o,u);break;default:return t}return Array.prototype.filter.call(t,a)}}function qn(t,e,n,r){var i,o=y(t)&&n in t;return e===!0?e=M:S(e)||(e=function(t,e){return!m(t)&&(null===t||null===e?t===e:!(y(e)||y(t)&&!g(t))&&(t=jr(""+t),e=jr(""+e),t.indexOf(e)!==-1))}),i=function(i){return o&&!y(i)?Hn(i,t[n],e,n,!1):Hn(i,t,e,n,r)}}function Hn(t,e,n,r,i,o){var a=Ln(t),u=Ln(e);if("string"===u&&"!"===e.charAt(0))return!Hn(t,e.substring(1),n,r,i);if(Zr(t))return t.some(function(t){return Hn(t,e,n,r,i)});switch(a){case"object":var s;if(i){for(s in t)if("$"!==s.charAt(0)&&Hn(t[s],e,n,r,!0))return!0;return!o&&Hn(t,e,n,r,!1)}if("object"===u){for(s in e){var c=e[s];if(!S(c)&&!m(c)){var l=s===r,f=l?t:t[s];if(!Hn(f,c,n,r,l,l))return!1}}return!0}return n(t,e);case"function":return!1;default:return n(t,e)}}function Ln(t){return null===t?"null":typeof t}function zn(t){var e=t.NUMBER_FORMATS;return function(t,n,r){return m(n)&&(n=e.CURRENCY_SYM),m(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:Jn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function Bn(t){var e=t.NUMBER_FORMATS;return function(t,n){return null==t?t:Jn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Wn(t){var e,n,r,i,o,a=0;for((n=t.indexOf(Ro))>-1&&(t=t.replace(Ro,"")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charAt(r)==Ao;r++);if(r==(o=t.length))e=[0],n=1;else{for(o--;t.charAt(o)==Ao;)o--;for(n-=r,e=[],i=0;r<=o;r++,i++)e[i]=+t.charAt(r)}return n>ko&&(e=e.splice(0,ko-1),a=n-1,n=1),{d:e,e:a,i:n}}function Gn(t,e,n,r){var i=t.d,o=i.length-t.i;e=m(e)?Math.min(Math.max(n,o),r):+e;var a=e+t.i,u=i[a];if(a>0){i.splice(Math.max(t.i,a));for(var s=a;s<i.length;s++)i[s]=0}else{o=Math.max(0,o),t.i=1,i.length=Math.max(1,a=e+1),i[0]=0;for(var c=1;c<a;c++)i[c]=0}if(u>=5)if(a-1<0){for(var l=0;l>a;l--)i.unshift(0),t.i++;i.unshift(1),t.i++}else i[a-1]++;for(;o<Math.max(0,e);o++)i.push(0);var f=i.reduceRight(function(t,e,n,r){return e+=t,r[n]=e%10,Math.floor(e/10)},0);f&&(i.unshift(f),t.i++)}function Jn(t,e,n,r,i){if(!b(t)&&!_(t)||isNaN(t))return"";var o,a=!isFinite(t),u=!1,s=Math.abs(t)+"",c="";if(a)c="∞";else{o=Wn(s),Gn(o,i,e.minFrac,e.maxFrac);var l=o.d,f=o.i,p=o.e,h=[];for(u=l.reduce(function(t,e){return t&&!e},!0);f<0;)l.unshift(0),f++;f>0?h=l.splice(f,l.length):(h=l,l=[0]);var d=[];for(l.length>=e.lgSize&&d.unshift(l.splice(-e.lgSize,l.length).join(""));l.length>e.gSize;)d.unshift(l.splice(-e.gSize,l.length).join(""));l.length&&d.unshift(l.join("")),c=d.join(n),h.length&&(c+=r+h.join("")),p&&(c+="e+"+p)}return t<0&&!u?e.negPre+c+e.negSuf:e.posPre+c+e.posSuf}function Zn(t,e,n,r){var i="";for((t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,i="-")),t=""+t;t.length<e;)t=Ao+t;return n&&(t=t.substr(t.length-e)),i+t}function Yn(t,e,n,r,i){return n=n||0,function(o){var a=o["get"+t]();return(n>0||a>-n)&&(a+=n),0===a&&n==-12&&(a=12),Zn(a,e,r,i)}}function Kn(t,e,n){return function(r,i){var o=r["get"+t](),a=(n?"STANDALONE":"")+(e?"SHORT":""),u=Pr(a+t);return i[u][o]}}function Qn(t,e,n){var r=-1*n,i=r>=0?"+":"";return i+=Zn(Math[r>0?"floor":"ceil"](r/60),2)+Zn(Math.abs(r%60),2)}function Xn(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(e<=4?5:12)-e)}function tr(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function er(t){return function(e){var n=Xn(e.getFullYear()),r=tr(e),i=+r-+n,o=1+Math.round(i/6048e5);return Zn(o,t)}}function nr(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function rr(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function ir(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function or(t){function e(t){var e;if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,u=e[8]?r.setUTCHours:r.setHours;e[9]&&(i=f(e[9]+e[10]),o=f(e[9]+e[11])),a.call(r,f(e[1]),f(e[2])-1,f(e[3]));var s=f(e[4]||0)-i,c=f(e[5]||0)-o,l=f(e[6]||0),p=Math.round(1e3*parseFloat("0."+(e[7]||0)));return u.call(r,s,c,l,p),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,i,o){var a,u,s="",c=[];if(i=i||"mediumDate",i=t.DATETIME_FORMATS[i]||i,b(n)&&(n=Io.test(n)?f(n):e(n)),_(n)&&(n=new Date(n)),!x(n)||!isFinite(n.getTime()))return n;for(;i;)u=To.exec(i),u?(c=q(c,u,1),i=c.pop()):(c.push(i),i=null);var l=n.getTimezoneOffset();return o&&(l=G(o,l),n=Z(n,o,!0)),r(c,function(e){a=Oo[e],s+=a?a(n,t.DATETIME_FORMATS,l):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),s}}function ar(){return function(t,e){return m(e)&&(e=2),B(t,e)}}function ur(){return function(t,e,r){return e=Math.abs(Number(e))===1/0?Number(e):f(e),isNaN(e)?t:(_(t)&&(t=t.toString()),n(t)?(r=!r||isNaN(r)?0:f(r),r=r<0?Math.max(0,t.length+r):r,e>=0?sr(t,r,r+e):0===r?sr(t,e,t.length):sr(t,Math.max(0,r+e),r)):t)}}function sr(t,e,n){return b(t)?t.slice(e,n):qr.call(t,e,n)}function cr(t){function r(e){return e.map(function(e){var n=1,r=d;if(S(e))r=e;else if(b(e)&&("+"!=e.charAt(0)&&"-"!=e.charAt(0)||(n="-"==e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(r=t(e),r.constant))){var i=r();r=function(t){return t[i]}}return{get:r,descending:n}})}function i(t){switch(typeof t){case"number":case"boolean":case"string":return!0;default:return!1}}function o(t){return S(t.valueOf)&&(t=t.valueOf(),i(t))?t:g(t)&&(t=t.toString(),i(t))?t:t}function a(t,e){var n=typeof t;return null===t?(n="string",t="null"):"object"===n&&(t=o(t)),{value:t,type:n,index:e}}function u(t,e){var n=0,r=t.type,i=e.type;if(r===i){var o=t.value,a=e.value;"string"===r?(o=o.toLowerCase(),a=a.toLowerCase()):"object"===r&&(y(o)&&(o=t.index),y(a)&&(a=e.index)),o!==a&&(n=o<a?-1:1)}else n=r<i?-1:1;return n}return function(t,i,o,s){function c(t,e){return{value:t,tieBreaker:{value:e,type:"number",index:e},predicateValues:f.map(function(n){return a(n.get(t),e)})}}function l(t,e){for(var n=0,r=f.length;n<r;n++){var i=h(t.predicateValues[n],e.predicateValues[n]);if(i)return i*f[n].descending*p}return h(t.tieBreaker,e.tieBreaker)*p}if(null==t)return t;if(!n(t))throw e("orderBy")("notarray","Expected array but received: {0}",t);Zr(i)||(i=[i]),0===i.length&&(i=["+"]);var f=r(i),p=o?-1:1,h=S(s)?s:u,d=Array.prototype.map.call(t,c);return d.sort(l),t=d.map(function(t){return t.value})}}function lr(t){return S(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function fr(t,e){t.$name=e}function pr(t,e,n,i,o){var a=this,u=[];a.$error={},a.$$success={},a.$pending=void 0,a.$name=o(e.name||e.ngForm||"")(n),a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,a.$submitted=!1,a.$$parentForm=Vo,a.$rollbackViewValue=function(){r(u,function(t){t.$rollbackViewValue()})},a.$commitViewValue=function(){r(u,function(t){t.$commitViewValue()})},a.$addControl=function(t){ft(t.$name,"input"),u.push(t),t.$name&&(a[t.$name]=t),t.$$parentForm=a},a.$$renameControl=function(t,e){var n=t.$name;a[n]===t&&delete a[n],a[e]=t,t.$name=e},a.$removeControl=function(t){t.$name&&a[t.$name]===t&&delete a[t.$name],r(a.$pending,function(e,n){a.$setValidity(n,null,t)}),r(a.$error,function(e,n){a.$setValidity(n,null,t)}),r(a.$$success,function(e,n){a.$setValidity(n,null,t)}),D(u,t),t.$$parentForm=Vo},kr({ctrl:this,$element:t,set:function(t,e,n){var r=t[e];if(r){var i=r.indexOf(n);i===-1&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e];r&&(D(r,n),0===r.length&&delete t[e])},$animate:i}),a.$setDirty=function(){i.removeClass(t,ba),i.addClass(t,_a),a.$dirty=!0,a.$pristine=!1,a.$$parentForm.$setDirty()},a.$setPristine=function(){i.setClass(t,ba,_a+" "+Do),a.$dirty=!1,a.$pristine=!0,a.$submitted=!1,r(u,function(t){t.$setPristine()})},a.$setUntouched=function(){r(u,function(t){t.$setUntouched()})},a.$setSubmitted=function(){i.addClass(t,Do),a.$submitted=!0,a.$$parentForm.$setSubmitted()}}function hr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function dr(t,e,n,r,i,o){vr(t,e,n,r,i,o),hr(r)}function vr(t,e,n,r,i,o){var a=jr(e[0].type);if(!i.android){var u=!1;e.on("compositionstart",function(){u=!0}),e.on("compositionend",function(){u=!1,c()})}var s,c=function(t){if(s&&(o.defer.cancel(s),s=null),!u){var i=e.val(),c=t&&t.type;"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Kr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,c)}};if(i.hasEvent("input"))e.on("input",c);else{var l=function(t,e,n){s||(s=o.defer(function(){s=null,e&&e.value===n||c(t)}))};e.on("keydown",function(t){var e=t.keyCode;91===e||15<e&&e<19||37<=e&&e<=40||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut",l)}e.on("change",c),Qo[a]&&r.$$hasNativeValidators&&a===n.type&&e.on(Ko,function(t){if(!s){var e=this[Tr],n=e.badInput,r=e.typeMismatch;s=o.defer(function(){s=null,e.badInput===n&&e.typeMismatch===r||c(t)})}}),r.$render=function(){var t=r.$isEmpty(r.$viewValue)?"":r.$viewValue;e.val()!==t&&e.val(t)}}function gr(t,e){if(x(t))return t;if(b(t)){Jo.lastIndex=0;var n=Jo.exec(t);if(n){var r=+n[1],i=+n[2],o=0,a=0,u=0,s=0,c=Xn(r),l=7*(i-1);return e&&(o=e.getHours(),a=e.getMinutes(),u=e.getSeconds(),s=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,u,s)}}return NaN}function mr(t,e){return function(n,i){var o,a;if(x(n))return n;if(b(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Ho.test(n))return new Date(n);if(t.lastIndex=0,o=t.exec(n))return o.shift(),a=i?{yyyy:i.getFullYear(),MM:i.getMonth()+1,dd:i.getDate(),HH:i.getHours(),mm:i.getMinutes(),ss:i.getSeconds(),sss:i.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(o,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function $r(t,e,n,r){return function(i,o,a,u,s,c,l){function f(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function p(t){return $(t)&&!x(t)?n(t)||void 0:t}yr(i,o,a,u),vr(i,o,a,u,s,c);var h,d=u&&u.$options&&u.$options.timezone;if(u.$$parserName=t,u.$parsers.push(function(t){if(u.$isEmpty(t))return null;if(e.test(t)){var r=n(t,h);return d&&(r=Z(r,d)),r}}),u.$formatters.push(function(t){if(t&&!x(t))throw Ra("datefmt","Expected `{0}` to be a date",t);return f(t)?(h=t,h&&d&&(h=Z(h,d,!0)),l("date")(t,r,d)):(h=null,"")}),$(a.min)||a.ngMin){var v;u.$validators.min=function(t){return!f(t)||m(v)||n(t)>=v},a.$observe("min",function(t){
v=p(t),u.$validate()})}if($(a.max)||a.ngMax){var g;u.$validators.max=function(t){return!f(t)||m(g)||n(t)<=g},a.$observe("max",function(t){g=p(t),u.$validate()})}}}function yr(t,e,n,r){var i=e[0],o=r.$$hasNativeValidators=y(i.validity);o&&r.$parsers.push(function(t){var n=e.prop(Tr)||{};return n.badInput||n.typeMismatch?void 0:t})}function wr(t,e,n,r,i,o){if(yr(t,e,n,r),vr(t,e,n,r,i,o),r.$$parserName="number",r.$parsers.push(function(t){return r.$isEmpty(t)?null:Bo.test(t)?parseFloat(t):void 0}),r.$formatters.push(function(t){if(!r.$isEmpty(t)){if(!_(t))throw Ra("numfmt","Expected `{0}` to be a number",t);t=t.toString()}return t}),$(n.min)||n.ngMin){var a;r.$validators.min=function(t){return r.$isEmpty(t)||m(a)||t>=a},n.$observe("min",function(t){$(t)&&!_(t)&&(t=parseFloat(t)),a=_(t)&&!isNaN(t)?t:void 0,r.$validate()})}if($(n.max)||n.ngMax){var u;r.$validators.max=function(t){return r.$isEmpty(t)||m(u)||t<=u},n.$observe("max",function(t){$(t)&&!_(t)&&(t=parseFloat(t)),u=_(t)&&!isNaN(t)?t:void 0,r.$validate()})}}function br(t,e,n,r,i,o){vr(t,e,n,r,i,o),hr(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||Lo.test(n)}}function _r(t,e,n,r,i,o){vr(t,e,n,r,i,o),hr(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||zo.test(n)}}function xr(t,e,n,r){m(n.name)&&e.attr("name",a());var i=function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)};e.on("click",i),r.$render=function(){var t=n.value;e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function Sr(t,e,n,r,i){var o;if($(r)){if(o=t(r),!o.constant)throw Ra("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r);return o(e)}return i}function Er(t,e,n,r,i,o,a,u){var s=Sr(u,t,"ngTrueValue",n.ngTrueValue,!0),c=Sr(u,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)};e.on("click",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return M(t,s)}),r.$parsers.push(function(t){return t?s:c})}function Cr(t,e){return t="ngClass"+t,["$animate",function(n){function i(t,e){var n=[];t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function o(t){var e=[];return Zr(t)?(r(t,function(t){e=e.concat(o(t))}),e):b(t)?t.split(" "):y(t)?(r(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e):t}return{restrict:"AC",link:function(a,u,s){function c(t){var e=f(t,1);s.$addClass(e)}function l(t){var e=f(t,-1);s.$removeClass(e)}function f(t,e){var n=u.data("$classCounts")||dt(),i=[];return r(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&i.push(t))}),u.data("$classCounts",n),i.join(" ")}function p(t,e){var r=i(e,t),o=i(t,e);r=f(r,1),o=f(o,-1),r&&r.length&&n.addClass(u,r),o&&o.length&&n.removeClass(u,o)}function h(t){if(e===!0||(1&a.$index)===e){var n=o(t||[]);if(d){if(!M(t,d)){var r=o(d);p(r,n)}}else c(n)}d=Zr(t)?t.map(function(t){return gt(t)}):gt(t)}var d;a.$watch(s[t],h,!0),s.$observe("class",function(e){h(a.$eval(s[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var i=1&n;if(i!==(1&r)){var u=o(a.$eval(s[t]));i===e?c(u):l(u)}})}}}]}function kr(t){function e(t,e,u){m(e)?n("$pending",t,u):r("$pending",t,u),T(e)?e?(l(a.$error,t,u),c(a.$$success,t,u)):(c(a.$error,t,u),l(a.$$success,t,u)):(l(a.$error,t,u),l(a.$$success,t,u)),a.$pending?(i(Ea,!0),a.$valid=a.$invalid=void 0,o("",null)):(i(Ea,!1),a.$valid=Rr(a.$error),a.$invalid=!a.$valid,o("",a.$valid));var s;s=a.$pending&&a.$pending[t]?void 0:!a.$error[t]&&(!!a.$$success[t]||null),o(t,s),a.$$parentForm.$setValidity(t,s,a)}function n(t,e,n){a[t]||(a[t]={}),c(a[t],e,n)}function r(t,e,n){a[t]&&l(a[t],e,n),Rr(a[t])&&(a[t]=void 0)}function i(t,e){e&&!s[t]?(f.addClass(u,t),s[t]=!0):!e&&s[t]&&(f.removeClass(u,t),s[t]=!1)}function o(t,e){t=t?"-"+ut(t,"-"):"",i(ya+t,e===!0),i(wa+t,e===!1)}var a=t.ctrl,u=t.$element,s={},c=t.set,l=t.unset,f=t.$animate;s[wa]=!(s[ya]=u.hasClass(ya)),a.$setValidity=e}function Rr(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function Ar(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)}var Or=/^\/(.+)\/([a-z]*)$/,Tr="validity",Ir=Object.prototype.hasOwnProperty,jr=function(t){return b(t)?t.toLowerCase():t},Pr=function(t){return b(t)?t.toUpperCase():t},Fr=function(t){return b(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},Ur=function(t){return b(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(t.charCodeAt(0)&-33)}):t};"i"!=="I".toLowerCase()&&(jr=Fr,Pr=Ur);var Vr,Dr,Nr,Mr,qr=[].slice,Hr=[].splice,Lr=[].push,zr=Object.prototype.toString,Br=Object.getPrototypeOf,Wr=e("ng"),Gr=t.angular||(t.angular={}),Jr=0;Vr=t.document.documentMode,h.$inject=[],d.$inject=[];var Zr=Array.isArray,Yr=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,Kr=function(t){return b(t)?t.trim():t},Qr=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Xr=function(){function e(){try{return new Function(""),!1}catch(t){return!0}}if(!$(Xr.rules)){var n=t.document.querySelector("[ng-csp]")||t.document.querySelector("[data-ng-csp]");if(n){var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp");Xr.rules={noUnsafeEval:!r||r.indexOf("no-unsafe-eval")!==-1,noInlineStyle:!r||r.indexOf("no-inline-style")!==-1}}else Xr.rules={noUnsafeEval:e(),noInlineStyle:!1}}return Xr.rules},ti=function(){if($(ti.name_))return ti.name_;var e,n,r,i,o=ni.length;for(n=0;n<o;++n)if(r=ni[n],e=t.document.querySelector("["+r.replace(":","\\:")+"jq]")){i=e.getAttribute(r+"jq");break}return ti.name_=i},ei=/:/g,ni=["ng-","data-ng-","ng:","x-ng-"],ri=/[A-Z]/g,ii=!1,oi=1,ai=2,ui=3,si=8,ci=9,li=11,fi={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};At.expando="ng339";var pi=At.cache={},hi=1,di=function(t,e,n){t.addEventListener(e,n,!1)},vi=function(t,e,n){t.removeEventListener(e,n,!1)};At._data=function(t){return this.cache[t[this.expando]]||{}};var gi=/([\:\-\_]+(.))/g,mi=/^moz([A-Z])/,$i={mouseleave:"mouseout",mouseenter:"mouseover"},yi=e("jqLite"),wi=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,bi=/<|&#?\w+;/,_i=/<([\w:-]+)/,xi=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Si={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Si.optgroup=Si.option,Si.tbody=Si.tfoot=Si.colgroup=Si.caption=Si.thead,Si.th=Si.td;var Ei=t.Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))},Ci=At.prototype={ready:function(e){function n(){r||(r=!0,e())}var r=!1;"complete"===t.document.readyState?t.setTimeout(n):(this.on("DOMContentLoaded",n),At(t).on("load",n))},toString:function(){var t=[];return r(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return Dr(t>=0?this[t]:this[this.length+t])},length:0,push:Lr,sort:[].sort,splice:[].splice},ki={};r("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){ki[jr(t)]=t});var Ri={};r("input,select,option,textarea,button,form,details".split(","),function(t){Ri[t]=!0});var Ai={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Ft,removeData:jt,hasData:St,cleanData:Et},function(t,e){At[e]=t}),r({data:Ft,inheritedData:qt,scope:function(t){return Dr.data(t,"$scope")||qt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return Dr.data(t,"$isolateScope")||Dr.data(t,"$isolateScopeNoTemplate")},controller:Mt,injector:function(t){return qt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:Ut,css:function(t,e,n){return e=bt(e),$(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,n){var r=t.nodeType;if(r!==ui&&r!==ai&&r!==si){var i=jr(e);if(ki[i]){if(!$(n))return t[e]||(t.attributes.getNamedItem(e)||h).specified?i:void 0;n?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if($(n))t.setAttribute(e,n);else if(t.getAttribute){var o=t.getAttribute(e,2);return null===o?void 0:o}}},prop:function(t,e,n){return $(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(m(e)){var n=t.nodeType;return n===oi||n===ui?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(m(e)){if(t.multiple&&"select"===V(t)){var n=[];return r(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return m(e)?t.innerHTML:(Tt(t,!0),void(t.innerHTML=e))},empty:Ht},function(t,e){At.prototype[e]=function(e,n){var r,i,o=this.length;if(t!==Ht&&m(2==t.length&&t!==Ut&&t!==Mt?e:n)){if(y(e)){for(r=0;r<o;r++)if(t===Ft)t(this[r],e);else for(i in e)t(this[r],i,e[i]);return this}for(var a=t.$dv,u=m(a)?Math.min(o,1):o,s=0;s<u;s++){var c=t(this[s],e,n);a=a?a+c:c}return a}for(r=0;r<o;r++)t(this[r],e,n);return this}}),r({removeData:jt,on:function(t,e,n,r){if($(r))throw yi("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(xt(t)){var i=Pt(t,!0),o=i.events,a=i.handle;a||(a=i.handle=Gt(t,o));for(var u=e.indexOf(" ")>=0?e.split(" "):[e],s=u.length,c=function(e,r,i){var u=o[e];u||(u=o[e]=[],u.specialHandlerWrapper=r,"$destroy"===e||i||di(t,e,a)),u.push(n)};s--;)e=u[s],$i[e]?(c($i[e],Zt),c(e,void 0,!0)):c(e)}},off:It,one:function(t,e,n){t=Dr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,i=t.parentNode;Tt(t),r(new At(e),function(e){n?i.insertBefore(e,n.nextSibling):i.replaceChild(e,t),n=e})},children:function(t){var e=[];return r(t.childNodes,function(t){t.nodeType===oi&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType;if(n===oi||n===li){e=new At(e);for(var r=0,i=e.length;r<i;r++){var o=e[r];t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===oi){var n=t.firstChild;r(new At(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){Rt(t,Dr(e).eq(0).clone()[0])},remove:Lt,detach:function(t){Lt(t,!0)},after:function(t,e){var n=t,r=t.parentNode;e=new At(e);for(var i=0,o=e.length;i<o;i++){var a=e[i];r.insertBefore(a,n.nextSibling),n=a}},addClass:Dt,removeClass:Vt,toggleClass:function(t,e,n){e&&r(e.split(" "),function(e){var r=n;m(r)&&(r=!Ut(t,e)),(r?Dt:Vt)(t,e)})},parent:function(t){var e=t.parentNode;return e&&e.nodeType!==li?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:Ot,triggerHandler:function(t,e,n){var i,o,a,u=e.type||e,s=Pt(t),l=s&&s.events,f=l&&l[u];f&&(i={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:h,type:u,target:t},e.type&&(i=c(i,e)),o=gt(f),a=n?[i].concat(n):[i],r(o,function(e){i.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){At.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;o<a;o++)m(i)?(i=t(this[o],e,n,r),$(i)&&(i=Dr(i))):Nt(i,t(this[o],e,n,r));return $(i)?i:this},At.prototype.bind=At.prototype.on,At.prototype.unbind=At.prototype.off}),Qt.prototype={put:function(t,e){this[Kt(t,this.nextUid)]=e},get:function(t){return this[Kt(t,this.nextUid)]},remove:function(t){var e=this[t=Kt(t,this.nextUid)];return delete this[t],e}};var Oi=[function(){this.$get=[function(){return Qt}]}],Ti=/^([^\(]+?)=>/,Ii=/^[^\(]*\(\s*([^\)]*)\)/m,ji=/,/,Pi=/^\s*(_?)(\S+?)\1\s*$/,Fi=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Ui=e("$injector");re.$$annotate=ne;var Vi=e("$animate"),Di=1,Ni="ng-animate",Mi=function(){this.$get=h},qi=function(){var t=new Qt,e=[];this.$get=["$$AnimateRunner","$rootScope",function(n,i){function o(t,e,n){var i=!1;return e&&(e=b(e)?e.split(" "):Zr(e)?e:[],r(e,function(e){e&&(i=!0,t[e]=n)})),i}function a(){r(e,function(e){var n=t.get(e);if(n){var i=ue(e.attr("class")),o="",a="";r(n,function(t,e){var n=!!i[e];t!==n&&(t?o+=(o.length?" ":"")+e:a+=(a.length?" ":"")+e)}),r(e,function(t){o&&Dt(t,o),a&&Vt(t,a)}),t.remove(e)}}),e.length=0}function u(n,r,u){var s=t.get(n)||{},c=o(s,r,!0),l=o(s,u,!1);(c||l)&&(t.put(n,s),e.push(n),1===e.length&&i.$$postDigest(a))}return{enabled:h,on:h,off:h,pin:h,push:function(t,e,r,i){i&&i(),r=r||{},r.from&&t.css(r.from),r.to&&t.css(r.to),(r.addClass||r.removeClass)&&u(t,r.addClass,r.removeClass);var o=new n;return o.complete(),o}}}]},Hi=["$provide",function(t){var e=this;this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&"."!==n.charAt(0))throw Vi("notcsel","Expecting class selector starting with '.' got '{0}'.",n);var i=n+"-animation";e.$$registeredAnimations[n.substr(1)]=i,t.factory(i,r)},this.classNameFilter=function(t){if(1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null,this.$$classNameFilter)){var e=new RegExp("(\\s+|\\/)"+Ni+"(\\s+|\\/)");if(e.test(this.$$classNameFilter.toString()))throw Vi("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',Ni)}return this.$$classNameFilter},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var r=ae(n);!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.end&&t.end()},enter:function(n,r,i,o){return r=r&&Dr(r),i=i&&Dr(i),r=r||i.parent(),e(n,r,i),t.push(n,"enter",se(o))},move:function(n,r,i,o){return r=r&&Dr(r),i=i&&Dr(i),r=r||i.parent(),e(n,r,i),t.push(n,"move",se(o))},leave:function(e,n){return t.push(e,"leave",se(n),function(){e.remove()})},addClass:function(e,n,r){return r=se(r),r.addClass=oe(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return r=se(r),r.removeClass=oe(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return i=se(i),i.addClass=oe(i.addClass,n),i.removeClass=oe(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return o=se(o),o.from=o.from?c(o.from,n):n,o.to=o.to?c(o.to,r):r,i=i||"ng-inline-animate",o.tempClasses=oe(o.tempClasses,i),t.push(e,"animate",o)}}}]}],Li=function(){this.$get=["$$rAF",function(t){function e(e){n.push(e),n.length>1||t(function(){for(var t=0;t<n.length;t++)n[t]();n=[]})}var n=[];return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}]},zi=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(t,e,n,i,o){function a(t){this.setHost(t);var e=n(),r=function(t){o(t,0,!1)};this._doneCallbacks=[],this._tick=function(t){var n=i[0];n&&n.hidden?r(t):e(t)},this._state=0}var u=0,s=1,c=2;return a.chain=function(t,e){function n(){return r===t.length?void e(!0):void t[r](function(t){return t===!1?void e(!1):(r++,void n())})}var r=0;n()},a.all=function(t,e){function n(n){o=o&&n,++i===t.length&&e(o)}var i=0,o=!0;r(t,function(t){t.done(n)})},a.prototype={setHost:function(t){this.host=t||{}},done:function(t){this._state===c?t():this._doneCallbacks.push(t)},progress:h,getPromise:function(){if(!this.promise){var e=this;this.promise=t(function(t,n){e.done(function(e){e===!1?n():t()})})}return this.promise},then:function(t,e){return this.getPromise().then(t,e)},"catch":function(t){return this.getPromise()["catch"](t)},"finally":function(t){return this.getPromise()["finally"](t)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(t){var e=this;e._state===u&&(e._state=s,e._tick(function(){e._resolve(t)}))},_resolve:function(t){this._state!==c&&(r(this._doneCallbacks,function(e){e(t)}),this._doneCallbacks.length=0,this._state=c)}},a}]},Bi=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(t,e,n){return function(e,r){function i(){return t(function(){o(),u||s.complete(),u=!0}),s}function o(){a.addClass&&(e.addClass(a.addClass),a.addClass=null),a.removeClass&&(e.removeClass(a.removeClass),a.removeClass=null),a.to&&(e.css(a.to),a.to=null)}var a=r||{};a.$$prepared||(a=N(a)),a.cleanupStyles&&(a.from=a.to=null),a.from&&(e.css(a.from),a.from=null);var u,s=new n;return{start:i,end:i}}}]},Wi=e("$compile"),Gi=new he;de.$inject=["$provide","$$sanitizeUriProvider"],ve.prototype.isFirstChange=function(){return this.previousValue===Gi};var Ji=/^((?:x|data)[\:\-_])/i,Zi=e("$controller"),Yi=/^(\S+)(\s+as\s+([\w$]+))?$/,Ki=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof Dr&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Qi="application/json",Xi={"Content-Type":Qi+";charset=utf-8"},to=/^\[|^\{(?!\{)/,eo={"[":/]$/,"{":/}$/},no=/^\)\]\}',?\n/,ro=e("$http"),io=function(t){return function(){throw ro("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",t)}},oo=Gr.$interpolateMinErr=e("$interpolate");oo.throwNoconcat=function(t){throw oo("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",t)},oo.interr=function(t,e){return oo("interr","Can't interpolate: {0}\n{1}",t,e.toString())};var ao=function(){this.$get=["$window",function(t){function e(t){var e=function(t){e.data=t,e.called=!0};return e.id=t,e}var n=t.angular.callbacks,r={};return{createCallback:function(t){var i="_"+(n.$$counter++).toString(36),o="angular.callbacks."+i,a=e(i);return r[o]=n[i]=a,o},wasCalled:function(t){return r[t].called},getResponse:function(t){return r[t].data},removeCallback:function(t){var e=r[t];delete n[e.id],delete r[t]}}}]},uo=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,so={http:80,https:443,ftp:21},co=e("$location"),lo={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ye("$$absUrl"),url:function(t){if(m(t))return this.$$url;var e=uo.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Ye("$$protocol"),host:Ye("$$host"),port:Ye("$$port"),path:Ke("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(b(t)||_(t))t=t.toString(),this.$$search=Q(t);else{if(!y(t))throw co("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");t=N(t,{}),r(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Ke("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};r([Ze,Je,Ge],function(t){t.prototype=Object.create(lo),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==Ge||!this.$$html5)throw co("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");return this.$$state=m(e)?null:e,this}});var fo=e("$parse"),po=Function.prototype.call,ho=Function.prototype.apply,vo=Function.prototype.bind,go=dt();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){go[t]=!0});var mo={n:"\n",f:"\f",r:"\r",t:"\t",v:"\x0B","'":"'",'"':'"'},$o=function(t){this.options=t};$o.prototype={constructor:$o,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index);if('"'===e||"'"===e)this.readString(e);else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++;else if(this.isWhitespace(e))this.index++;else{var n=e+this.peek(),r=n+this.peek(2),i=go[e],o=go[n],a=go[r];if(i||o||a){var u=a?r:o?n:e;this.tokens.push({index:this.index,text:u,operator:!0}),this.index+=u.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return e.indexOf(t)!==-1},peek:function(t){var e=t||1;return this.index+e<this.text.length&&this.text.charAt(this.index+e)},isNumber:function(t){return"0"<=t&&t<="9"&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\x0B"===t||" "===t},isIdentifierStart:function(t){return this.options.isIdentifierStart?this.options.isIdentifierStart(t,this.codePointAt(t)):this.isValidIdentifierStart(t)},isValidIdentifierStart:function(t){return"a"<=t&&t<="z"||"A"<=t&&t<="Z"||"_"===t||"$"===t},isIdentifierContinue:function(t){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(t,this.codePointAt(t)):this.isValidIdentifierContinue(t)},isValidIdentifierContinue:function(t,e){return this.isValidIdentifierStart(t,e)||this.isNumber(t)},codePointAt:function(t){return 1===t.length?t.charCodeAt(0):(t.charCodeAt(0)<<10)+t.charCodeAt(1)-56613888},peekMultichar:function(){var t=this.text.charAt(this.index),e=this.peek();if(!e)return t;var n=t.charCodeAt(0),r=e.charCodeAt(0);return n>=55296&&n<=56319&&r>=56320&&r<=57343?t+e:t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index;var r=$(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n;throw fo("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=jr(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){var t=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var e=this.peekMultichar();if(!this.isIdentifierContinue(e))break;this.index+=e.length}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var u=mo[o];n+=u||o}i=!1}else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var yo=function(t,e){this.lexer=t,this.options=e};yo.Program="Program",yo.ExpressionStatement="ExpressionStatement",yo.AssignmentExpression="AssignmentExpression",yo.ConditionalExpression="ConditionalExpression",yo.LogicalExpression="LogicalExpression",yo.BinaryExpression="BinaryExpression",yo.UnaryExpression="UnaryExpression",yo.CallExpression="CallExpression",yo.MemberExpression="MemberExpression",yo.Identifier="Identifier",yo.Literal="Literal",yo.ArrayExpression="ArrayExpression",yo.Property="Property",yo.ObjectExpression="ObjectExpression",yo.ThisExpression="ThisExpression",yo.LocalsExpression="LocalsExpression",yo.NGValueParameter="NGValueParameter",yo.prototype={ast:function(t){this.text=t,this.tokens=this.lexer.lex(t);var e=this.program();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e},program:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:yo.Program,body:t}},expressionStatement:function(){return{type:yo.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e);return e},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary();return this.expect("=")&&(t={type:yo.AssignmentExpression,left:t,right:this.assignment(),operator:"="}),t},ternary:function(){var t,e,n=this.logicalOR();return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:yo.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:yo.LogicalExpression,operator:"||",left:t,right:this.logicalAND()};return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:yo.LogicalExpression,operator:"&&",left:t,right:this.equality()};return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:yo.BinaryExpression,operator:t.text,left:e,right:this.relational()};return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:yo.BinaryExpression,operator:t.text,left:e,right:this.additive()};return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:yo.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()};return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:yo.BinaryExpression,operator:t.text,left:e,right:this.unary()};return e},unary:function(){var t;return(t=this.expect("+","-","!"))?{type:yo.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t;this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?t=N(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?t={type:yo.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:yo.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:yo.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:yo.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return t},filter:function(t){for(var e=[t],n={type:yo.CallExpression,callee:this.identifier(),arguments:e,filter:!0};this.expect(":");)e.push(this.expression());return n},parseArguments:function(){var t=[];if(")"!==this.peekToken().text)do t.push(this.filterChain());while(this.expect(","));return t},identifier:function(){var t=this.consume();return t.identifier||this.throwError("is not a valid identifier",t),{type:yo.Identifier,name:t.text}},constant:function(){return{type:yo.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:yo.ArrayExpression,elements:t}},object:function(){var t,e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;t={type:yo.Property,kind:"init"},this.peek().constant?(t.key=this.constant(),t.computed=!1,this.consume(":"),t.value=this.expression()):this.peek().identifier?(t.key=this.identifier(),t.computed=!1,this.peek(":")?(this.consume(":"),t.value=this.expression()):t.value=t.key):this.peek("[")?(this.consume("["),t.key=this.expression(),this.consume("]"),t.computed=!0,this.consume(":"),t.value=this.expression()):this.throwError("invalid key",this.peek()),e.push(t)}while(this.expect(","));return this.consume("}"),{type:yo.ObjectExpression,properties:e}},throwError:function(t,e){throw fo("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw fo("ueoe","Unexpected end of expression: {0}",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw fo("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text;if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r);return!!i&&(this.tokens.shift(),i)},selfReferential:{"this":{type:yo.ThisExpression},$locals:{type:yo.LocalsExpression}}},vn.prototype={compile:function(t,e){var n=this,i=this.astBuilder.ast(t);this.state={nextId:0,filters:{},expensiveChecks:e,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},cn(i,n.$filter);var o,a="";if(this.stage="assign",o=pn(i)){this.state.computing="assign";var u=this.nextId();this.recurse(o,u),this.return_(u),a="fn.assign="+this.generateFunction("assign","s,v,l")}var s=ln(i.body);n.stage="inputs",r(s,function(t,e){var r="fn"+e;n.state[r]={vars:[],body:[],own:{}},n.state.computing=r;var i=n.nextId();n.recurse(t,i),n.return_(i),n.state.inputs.push(r),t.watchId=e}),this.state.computing="fn",this.stage="main",this.recurse(i);var c='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+a+this.watchFns()+"return fn;",l=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",c)(this.$filter,tn,nn,rn,en,on,an,un,t);return this.state=this.stage=void 0,l.literal=hn(i),l.constant=dn(i),l},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this;return r(e,function(e){t.push("var "+e+"="+n.generateFunction(e,"s"))}),e.length&&t.push("fn.inputs=["+e.join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this;return r(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,n,i,o,a){var u,s,c,l,f,p=this;if(i=i||h,!a&&$(t.watchId))return e=e||this.nextId(),void this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,n,i,o,!0));switch(t.type){case yo.Program:r(t.body,function(e,n){p.recurse(e.expression,void 0,void 0,function(t){s=t}),n!==t.body.length-1?p.current().body.push(s,";"):p.return_(s)});break;case yo.Literal:l=this.escape(t.value),this.assign(e,l),i(l);break;case yo.UnaryExpression:this.recurse(t.argument,void 0,void 0,function(t){s=t}),l=t.operator+"("+this.ifDefined(s,0)+")",this.assign(e,l),i(l);break;case yo.BinaryExpression:this.recurse(t.left,void 0,void 0,function(t){u=t}),this.recurse(t.right,void 0,void 0,function(t){s=t}),l="+"===t.operator?this.plus(u,s):"-"===t.operator?this.ifDefined(u,0)+t.operator+this.ifDefined(s,0):"("+u+")"+t.operator+"("+s+")",this.assign(e,l),i(l);break;case yo.LogicalExpression:e=e||this.nextId(),p.recurse(t.left,e),p.if_("&&"===t.operator?e:p.not(e),p.lazyRecurse(t.right,e)),i(e);break;case yo.ConditionalExpression:e=e||this.nextId(),p.recurse(t.test,e),p.if_(e,p.lazyRecurse(t.alternate,e),p.lazyRecurse(t.consequent,e)),i(e);break;case yo.Identifier:e=e||this.nextId(),n&&(n.context="inputs"===p.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),n.computed=!1,n.name=t.name),tn(t.name),p.if_("inputs"===p.stage||p.not(p.getHasOwnProperty("l",t.name)),function(){
p.if_("inputs"===p.stage||"s",function(){o&&1!==o&&p.if_(p.not(p.nonComputedMember("s",t.name)),p.lazyAssign(p.nonComputedMember("s",t.name),"{}")),p.assign(e,p.nonComputedMember("s",t.name))})},e&&p.lazyAssign(e,p.nonComputedMember("l",t.name))),(p.state.expensiveChecks||mn(t.name))&&p.addEnsureSafeObject(e),i(e);break;case yo.MemberExpression:u=n&&(n.context=this.nextId())||this.nextId(),e=e||this.nextId(),p.recurse(t.object,u,void 0,function(){p.if_(p.notNull(u),function(){o&&1!==o&&p.addEnsureSafeAssignContext(u),t.computed?(s=p.nextId(),p.recurse(t.property,s),p.getStringValue(s),p.addEnsureSafeMemberName(s),o&&1!==o&&p.if_(p.not(p.computedMember(u,s)),p.lazyAssign(p.computedMember(u,s),"{}")),l=p.ensureSafeObject(p.computedMember(u,s)),p.assign(e,l),n&&(n.computed=!0,n.name=s)):(tn(t.property.name),o&&1!==o&&p.if_(p.not(p.nonComputedMember(u,t.property.name)),p.lazyAssign(p.nonComputedMember(u,t.property.name),"{}")),l=p.nonComputedMember(u,t.property.name),(p.state.expensiveChecks||mn(t.property.name))&&(l=p.ensureSafeObject(l)),p.assign(e,l),n&&(n.computed=!1,n.name=t.property.name))},function(){p.assign(e,"undefined")}),i(e)},!!o);break;case yo.CallExpression:e=e||this.nextId(),t.filter?(s=p.filter(t.callee.name),c=[],r(t.arguments,function(t){var e=p.nextId();p.recurse(t,e),c.push(e)}),l=s+"("+c.join(",")+")",p.assign(e,l),i(e)):(s=p.nextId(),u={},c=[],p.recurse(t.callee,s,u,function(){p.if_(p.notNull(s),function(){p.addEnsureSafeFunction(s),r(t.arguments,function(t){p.recurse(t,p.nextId(),void 0,function(t){c.push(p.ensureSafeObject(t))})}),u.name?(p.state.expensiveChecks||p.addEnsureSafeObject(u.context),l=p.member(u.context,u.name,u.computed)+"("+c.join(",")+")"):l=s+"("+c.join(",")+")",l=p.ensureSafeObject(l),p.assign(e,l)},function(){p.assign(e,"undefined")}),i(e)}));break;case yo.AssignmentExpression:if(s=this.nextId(),u={},!fn(t.left))throw fo("lval","Trying to assign a value to a non l-value");this.recurse(t.left,void 0,u,function(){p.if_(p.notNull(u.context),function(){p.recurse(t.right,s),p.addEnsureSafeObject(p.member(u.context,u.name,u.computed)),p.addEnsureSafeAssignContext(u.context),l=p.member(u.context,u.name,u.computed)+t.operator+s,p.assign(e,l),i(e||l)})},1);break;case yo.ArrayExpression:c=[],r(t.elements,function(t){p.recurse(t,p.nextId(),void 0,function(t){c.push(t)})}),l="["+c.join(",")+"]",this.assign(e,l),i(l);break;case yo.ObjectExpression:c=[],f=!1,r(t.properties,function(t){t.computed&&(f=!0)}),f?(e=e||this.nextId(),this.assign(e,"{}"),r(t.properties,function(t){t.computed?(u=p.nextId(),p.recurse(t.key,u)):u=t.key.type===yo.Identifier?t.key.name:""+t.key.value,s=p.nextId(),p.recurse(t.value,s),p.assign(p.member(e,u,t.computed),s)})):(r(t.properties,function(e){p.recurse(e.value,t.constant?void 0:p.nextId(),void 0,function(t){c.push(p.escape(e.key.type===yo.Identifier?e.key.name:""+e.key.value)+":"+t)})}),l="{"+c.join(",")+"}",this.assign(e,l)),i(e||l);break;case yo.ThisExpression:this.assign(e,"s"),i("s");break;case yo.LocalsExpression:this.assign(e,"l"),i("l");break;case yo.NGValueParameter:this.assign(e,"v"),i("v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){if(t)return this.current().body.push(t,"=",e,";"),t},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(t===!0)e();else{var r=this.current().body;r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){var n=/[$_a-zA-Z][$_a-zA-Z0-9]*/,r=/[^$_a-zA-Z0-9]/g;return n.test(e)?t+"."+e:t+'["'+e.replace(r,this.stringEscapeFn)+'"]'},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},addEnsureSafeObject:function(t){this.current().body.push(this.ensureSafeObject(t),";")},addEnsureSafeMemberName:function(t){this.current().body.push(this.ensureSafeMemberName(t),";")},addEnsureSafeFunction:function(t){this.current().body.push(this.ensureSafeFunction(t),";")},addEnsureSafeAssignContext:function(t){this.current().body.push(this.ensureSafeAssignContext(t),";")},ensureSafeObject:function(t){return"ensureSafeObject("+t+",text)"},ensureSafeMemberName:function(t){return"ensureSafeMemberName("+t+",text)"},ensureSafeFunction:function(t){return"ensureSafeFunction("+t+",text)"},getStringValue:function(t){this.assign(t,"getStringValue("+t+")")},ensureSafeAssignContext:function(t){return"ensureSafeAssignContext("+t+",text)"},lazyRecurse:function(t,e,n,r,i,o){var a=this;return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this;return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(b(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(_(t))return t.toString();if(t===!0)return"true";if(t===!1)return"false";if(null===t)return"null";if("undefined"==typeof t)return"undefined";throw fo("esc","IMPOSSIBLE")},nextId:function(t,e){var n="v"+this.state.nextId++;return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},gn.prototype={compile:function(t,e){var n=this,i=this.astBuilder.ast(t);this.expression=t,this.expensiveChecks=e,cn(i,n.$filter);var o,a;(o=pn(i))&&(a=this.recurse(o));var u,s=ln(i.body);s&&(u=[],r(s,function(t,e){var r=n.recurse(t);t.input=r,u.push(r),t.watchId=e}));var c=[];r(i.body,function(t){c.push(n.recurse(t.expression))});var l=0===i.body.length?h:1===i.body.length?c[0]:function(t,e){var n;return r(c,function(r){n=r(t,e)}),n};return a&&(l.assign=function(t,e,n){return a(t,n,e)}),u&&(l.inputs=u),l.literal=hn(i),l.constant=dn(i),l},recurse:function(t,e,n){var i,o,a,u=this;if(t.input)return this.inputs(t.input,t.watchId);switch(t.type){case yo.Literal:return this.value(t.value,e);case yo.UnaryExpression:return o=this.recurse(t.argument),this["unary"+t.operator](o,e);case yo.BinaryExpression:return i=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](i,o,e);case yo.LogicalExpression:return i=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](i,o,e);case yo.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e);case yo.Identifier:return tn(t.name,u.expression),u.identifier(t.name,u.expensiveChecks||mn(t.name),e,n,u.expression);case yo.MemberExpression:return i=this.recurse(t.object,!1,!!n),t.computed||(tn(t.property.name,u.expression),o=t.property.name),t.computed&&(o=this.recurse(t.property)),t.computed?this.computedMember(i,o,e,n,u.expression):this.nonComputedMember(i,o,u.expensiveChecks,e,n,u.expression);case yo.CallExpression:return a=[],r(t.arguments,function(t){a.push(u.recurse(t))}),t.filter&&(o=this.$filter(t.callee.name)),t.filter||(o=this.recurse(t.callee,!0)),t.filter?function(t,n,r,i){for(var u=[],s=0;s<a.length;++s)u.push(a[s](t,n,r,i));var c=o.apply(void 0,u,i);return e?{context:void 0,name:void 0,value:c}:c}:function(t,n,r,i){var s,c=o(t,n,r,i);if(null!=c.value){nn(c.context,u.expression),rn(c.value,u.expression);for(var l=[],f=0;f<a.length;++f)l.push(nn(a[f](t,n,r,i),u.expression));s=nn(c.value.apply(c.context,l),u.expression)}return e?{value:s}:s};case yo.AssignmentExpression:return i=this.recurse(t.left,!0,1),o=this.recurse(t.right),function(t,n,r,a){var s=i(t,n,r,a),c=o(t,n,r,a);return nn(s.value,u.expression),on(s.context),s.context[s.name]=c,e?{value:c}:c};case yo.ArrayExpression:return a=[],r(t.elements,function(t){a.push(u.recurse(t))}),function(t,n,r,i){for(var o=[],u=0;u<a.length;++u)o.push(a[u](t,n,r,i));return e?{value:o}:o};case yo.ObjectExpression:return a=[],r(t.properties,function(t){t.computed?a.push({key:u.recurse(t.key),computed:!0,value:u.recurse(t.value)}):a.push({key:t.key.type===yo.Identifier?t.key.name:""+t.key.value,computed:!1,value:u.recurse(t.value)})}),function(t,n,r,i){for(var o={},u=0;u<a.length;++u)a[u].computed?o[a[u].key(t,n,r,i)]=a[u].value(t,n,r,i):o[a[u].key]=a[u].value(t,n,r,i);return e?{value:o}:o};case yo.ThisExpression:return function(t){return e?{value:t}:t};case yo.LocalsExpression:return function(t,n){return e?{value:n}:n};case yo.NGValueParameter:return function(t,n,r){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o);return a=$(a)?+a:0,e?{value:a}:a}},"unary-":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o);return a=$(a)?-a:0,e?{value:a}:a}},"unary!":function(t,e){return function(n,r,i,o){var a=!t(n,r,i,o);return e?{value:a}:a}},"binary+":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a),s=e(r,i,o,a),c=un(u,s);return n?{value:c}:c}},"binary-":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a),s=e(r,i,o,a),c=($(u)?u:0)-($(s)?s:0);return n?{value:c}:c}},"binary*":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)*e(r,i,o,a);return n?{value:u}:u}},"binary/":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)/e(r,i,o,a);return n?{value:u}:u}},"binary%":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)%e(r,i,o,a);return n?{value:u}:u}},"binary===":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)===e(r,i,o,a);return n?{value:u}:u}},"binary!==":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)!==e(r,i,o,a);return n?{value:u}:u}},"binary==":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)==e(r,i,o,a);return n?{value:u}:u}},"binary!=":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)!=e(r,i,o,a);return n?{value:u}:u}},"binary<":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)<e(r,i,o,a);return n?{value:u}:u}},"binary>":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)>e(r,i,o,a);return n?{value:u}:u}},"binary<=":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)<=e(r,i,o,a);return n?{value:u}:u}},"binary>=":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)>=e(r,i,o,a);return n?{value:u}:u}},"binary&&":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)&&e(r,i,o,a);return n?{value:u}:u}},"binary||":function(t,e,n){return function(r,i,o,a){var u=t(r,i,o,a)||e(r,i,o,a);return n?{value:u}:u}},"ternary?:":function(t,e,n,r){return function(i,o,a,u){var s=t(i,o,a,u)?e(i,o,a,u):n(i,o,a,u);return r?{value:s}:s}},value:function(t,e){return function(){return e?{context:void 0,name:void 0,value:t}:t}},identifier:function(t,e,n,r,i){return function(o,a,u,s){var c=a&&t in a?a:o;r&&1!==r&&c&&!c[t]&&(c[t]={});var l=c?c[t]:void 0;return e&&nn(l,i),n?{context:c,name:t,value:l}:l}},computedMember:function(t,e,n,r,i){return function(o,a,u,s){var c,l,f=t(o,a,u,s);return null!=f&&(c=e(o,a,u,s),c=en(c),tn(c,i),r&&1!==r&&(on(f),f&&!f[c]&&(f[c]={})),l=f[c],nn(l,i)),n?{context:f,name:c,value:l}:l}},nonComputedMember:function(t,e,n,r,i,o){return function(a,u,s,c){var l=t(a,u,s,c);i&&1!==i&&(on(l),l&&!l[e]&&(l[e]={}));var f=null!=l?l[e]:void 0;return(n||mn(e))&&nn(f,o),r?{context:l,name:e,value:f}:f}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}};var wo=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n,this.ast=new yo(t,n),this.astCompiler=n.csp?new gn(this.ast,e):new vn(this.ast,e)};wo.prototype={constructor:wo,parse:function(t){return this.astCompiler.compile(t,this.options.expensiveChecks)}};var bo=Object.prototype.valueOf,_o=e("$sce"),xo={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},So=e("$compile"),Eo=t.document.createElement("a"),Co=Pn(t.location.href);Vn.$inject=["$document"],Nn.$inject=["$provide"];var ko=22,Ro=".",Ao="0";zn.$inject=["$locale"],Bn.$inject=["$locale"];var Oo={yyyy:Yn("FullYear",4,0,!1,!0),yy:Yn("FullYear",2,0,!0,!0),y:Yn("FullYear",1,0,!1,!0),MMMM:Kn("Month"),MMM:Kn("Month",!0),MM:Yn("Month",2,1),M:Yn("Month",1,1),LLLL:Kn("Month",!1,!0),dd:Yn("Date",2),d:Yn("Date",1),HH:Yn("Hours",2),H:Yn("Hours",1),hh:Yn("Hours",2,-12),h:Yn("Hours",1,-12),mm:Yn("Minutes",2),m:Yn("Minutes",1),ss:Yn("Seconds",2),s:Yn("Seconds",1),sss:Yn("Milliseconds",3),EEEE:Kn("Day"),EEE:Kn("Day",!0),a:nr,Z:Qn,ww:er(2),w:er(1),G:rr,GG:rr,GGG:rr,GGGG:ir},To=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Io=/^\-?\d+$/;or.$inject=["$locale"];var jo=v(jr),Po=v(Pr);cr.$inject=["$parse"];var Fo=v({restrict:"E",compile:function(t,e){if(!e.href&&!e.xlinkHref)return function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===zr.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Uo={};r(ki,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!=t){var r=ge("ng-"+e),i=n;"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,e,i)}),Uo[r]=function(){return{restrict:"A",priority:100,link:i}}}}),r(Ai,function(t,e){Uo[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(Or);if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),r(["src","srcset","href"],function(t){var e=ge("ng-"+t);Uo[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===zr.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){return e?(i.$set(a,e),void(Vr&&o&&r.prop(o,i[a]))):void("href"===t&&i.$set(a,null))})}}}});var Vo={$addControl:h,$$renameControl:fr,$removeControl:h,$setValidity:h,$setDirty:h,$setPristine:h,$setSubmitted:h},Do="ng-submitted";pr.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var No=function(t){return["$timeout","$parse",function(e,n){function r(t){return""===t?n('this[""]').assign:n(t).assign||h}var i={name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:pr,compile:function(n,i){n.addClass(ba).addClass(ya);var o=i.name?"name":!(!t||!i.ngForm)&&"ngForm";return{pre:function(t,n,i,a){var u=a[0];if(!("action"in i)){var s=function(e){t.$apply(function(){u.$commitViewValue(),u.$setSubmitted()}),e.preventDefault()};di(n[0],"submit",s),n.on("$destroy",function(){e(function(){vi(n[0],"submit",s)},0,!1)})}var l=a[1]||u.$$parentForm;l.$addControl(u);var f=o?r(u.$name):h;o&&(f(t,u),i.$observe(o,function(e){u.$name!==e&&(f(t,void 0),u.$$parentForm.$$renameControl(u,e),(f=r(u.$name))(t,u))})),n.on("$destroy",function(){u.$$parentForm.$removeControl(u),f(t,void 0),c(u,Vo)})}}}};return i}]},Mo=No(),qo=No(!0),Ho=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Lo=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,zo=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Bo=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Wo=/^(\d{4,})-(\d{2})-(\d{2})$/,Go=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Jo=/^(\d{4,})-W(\d\d)$/,Zo=/^(\d{4,})-(\d\d)$/,Yo=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ko="keydown wheel mousedown",Qo=dt();r("date,datetime-local,month,time,week".split(","),function(t){Qo[t]=!0});var Xo={text:dr,date:$r("date",Wo,mr(Wo,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":$r("datetimelocal",Go,mr(Go,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:$r("time",Yo,mr(Yo,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:$r("week",Jo,gr,"yyyy-Www"),month:$r("month",Zo,mr(Zo,["yyyy","MM"]),"yyyy-MM"),number:wr,url:br,email:_r,radio:xr,checkbox:Er,hidden:h,button:h,submit:h,reset:h,file:h},ta=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,u){u[0]&&(Xo[jr(a.type)]||Xo.text)(i,o,a,u[0],e,t,n,r)}}}}],ea=/^(true|false|\d+)$/,na=function(){return{restrict:"A",priority:100,compile:function(t,e){return ea.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},ra=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,r){t.$$addBindingInfo(n,r.ngBind),n=n[0],e.$watch(r.ngBind,function(t){n.textContent=m(t)?"":t})}}}}],ia=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,r,i){var o=t(r.attr(i.$attr.ngBindTemplate));e.$$addBindingInfo(r,o.expressions),r=r[0],i.$observe("ngBindTemplate",function(t){r.textContent=m(t)?"":t})}}}}],oa=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(e){return t.valueOf(e)});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){var n=o(e);r.html(t.getTrustedHtml(n)||"")})}}}}],aa=v({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),ua=Cr("",!0),sa=Cr("Odd",0),ca=Cr("Even",1),la=lr({compile:function(t,e){e.$set("ngCloak",void 0),t.removeClass("ng-cloak")}}),fa=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],pa={},ha={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=ge("ng-"+t);pa[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0);return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})};ha[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]});var da=["$animate","$compile",function(t,e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var u,s,c;n.$watch(i.ngIf,function(n){n?s||a(function(n,o){s=o,n[n.length++]=e.$$createComment("end ngIf",i.ngIf),u={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),s&&(s.$destroy(),s=null),u&&(c=ht(u.clone),t.leave(c).then(function(){c=null}),u=null))})}}}],va=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Gr.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",u=i.autoscroll;return function(r,i,s,c,l){var f,p,h,d=0,v=function(){p&&(p.remove(),p=null),f&&(f.$destroy(),f=null),h&&(n.leave(h).then(function(){p=null}),p=h,h=null)};r.$watch(o,function(o){var s=function(){!$(u)||u&&!r.$eval(u)||e()},p=++d;o?(t(o,!0).then(function(t){if(!r.$$destroyed&&p===d){var e=r.$new();c.template=t;var u=l(e,function(t){v(),n.enter(t,null,i).then(s)});f=e,h=u,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){r.$$destroyed||p===d&&(v(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):(v(),c.template=null)})}}}}],ga=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return zr.call(r[0]).match(/SVG/)?(r.empty(),void e(Ct(o.template,t.document).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void e(r.contents())(n))}}}],ma=lr({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),$a=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,n,i){var o=e.attr(n.$attr.ngList)||", ",a="false"!==n.ngTrim,u=a?Kr(o):o,s=function(t){if(!m(t)){var e=[];return t&&r(t.split(u),function(t){t&&e.push(a?Kr(t):t)}),e}};i.$parsers.push(s),i.$formatters.push(function(t){if(Zr(t))return t.join(o)}),i.$isEmpty=function(t){return!t||!t.length}}}},ya="ng-valid",wa="ng-invalid",ba="ng-pristine",_a="ng-dirty",xa="ng-untouched",Sa="ng-touched",Ea="ng-pending",Ca="ng-empty",ka="ng-not-empty",Ra=e("ngModel"),Aa=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,n,i,o,a,u,s,c,l){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=l(n.name||"",!1)(t),this.$$parentForm=Vo;var f,p=o(n.ngModel),d=p.assign,v=p,g=d,y=null,w=this;this.$$setOptions=function(t){if(w.$options=t,t&&t.getterSetter){var e=o(n.ngModel+"()"),r=o(n.ngModel+"($$$p)");v=function(t){var n=p(t);return S(n)&&(n=e(t)),n},g=function(t,e){S(p(t))?r(t,{$$$p:e}):d(t,e)}}else if(!p.assign)throw Ra("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,Y(i))},this.$render=h,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t},this.$$updateEmptyClasses=function(t){w.$isEmpty(t)?(a.removeClass(i,ka),a.addClass(i,Ca)):(a.removeClass(i,Ca),a.addClass(i,ka))};var b=0;kr({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},$animate:a}),this.$setPristine=function(){w.$dirty=!1,w.$pristine=!0,a.removeClass(i,_a),a.addClass(i,ba)},this.$setDirty=function(){w.$dirty=!0,w.$pristine=!1,a.removeClass(i,ba),a.addClass(i,_a),w.$$parentForm.$setDirty()},this.$setUntouched=function(){w.$touched=!1,w.$untouched=!0,a.setClass(i,xa,Sa)},this.$setTouched=function(){w.$touched=!0,w.$untouched=!1,a.setClass(i,Sa,xa)},this.$rollbackViewValue=function(){u.cancel(y),w.$viewValue=w.$$lastCommittedViewValue,w.$render()},this.$validate=function(){if(!_(w.$modelValue)||!isNaN(w.$modelValue)){var t=w.$$lastCommittedViewValue,e=w.$$rawModelValue,n=w.$valid,r=w.$modelValue,i=w.$options&&w.$options.allowInvalid;w.$$runValidators(e,t,function(t){i||n===t||(w.$modelValue=t?e:void 0,w.$modelValue!==r&&w.$$writeModelToScope())})}},this.$$runValidators=function(t,e,n){function i(){var t=w.$$parserName||"parse";return m(f)?(u(t,null),!0):(f||(r(w.$validators,function(t,e){u(e,null)}),r(w.$asyncValidators,function(t,e){u(e,null)})),u(t,f),f)}function o(){var n=!0;return r(w.$validators,function(r,i){var o=r(t,e);n=n&&o,u(i,o)}),!!n||(r(w.$asyncValidators,function(t,e){u(e,null)}),!1)}function a(){var n=[],i=!0;r(w.$asyncValidators,function(r,o){var a=r(t,e);if(!I(a))throw Ra("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",a);u(o,void 0),n.push(a.then(function(){u(o,!0)},function(){i=!1,u(o,!1)}))}),n.length?c.all(n).then(function(){s(i)},h):s(!0)}function u(t,e){l===b&&w.$setValidity(t,e)}function s(t){l===b&&n(t)}b++;var l=b;return i()&&o()?void a():void s(!1)},this.$commitViewValue=function(){var t=w.$viewValue;u.cancel(y),(w.$$lastCommittedViewValue!==t||""===t&&w.$$hasNativeValidators)&&(w.$$updateEmptyClasses(t),w.$$lastCommittedViewValue=t,w.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){w.$modelValue!==o&&w.$$writeModelToScope()}var n=w.$$lastCommittedViewValue,r=n;if(f=!m(r)||void 0)for(var i=0;i<w.$parsers.length;i++)if(r=w.$parsers[i](r),m(r)){f=!1;break}_(w.$modelValue)&&isNaN(w.$modelValue)&&(w.$modelValue=v(t));var o=w.$modelValue,a=w.$options&&w.$options.allowInvalid;w.$$rawModelValue=r,a&&(w.$modelValue=r,e()),w.$$runValidators(r,w.$$lastCommittedViewValue,function(t){a||(w.$modelValue=t?r:void 0,e())})},this.$$writeModelToScope=function(){g(t,w.$modelValue),r(w.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){w.$viewValue=t,w.$options&&!w.$options.updateOnDefault||w.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,r=0,i=w.$options;i&&$(i.debounce)&&(n=i.debounce,_(n)?r=n:_(n[e])?r=n[e]:_(n["default"])&&(r=n["default"])),u.cancel(y),r?y=u(function(){w.$commitViewValue()},r):s.$$phase?w.$commitViewValue():t.$apply(function(){w.$commitViewValue()})},t.$watch(function(){var e=v(t);if(e!==w.$modelValue&&(w.$modelValue===w.$modelValue||e===e)){w.$modelValue=w.$$rawModelValue=e,f=void 0;for(var n=w.$formatters,r=n.length,i=e;r--;)i=n[r](i);w.$viewValue!==i&&(w.$$updateEmptyClasses(i),w.$viewValue=w.$$lastCommittedViewValue=i,w.$render(),w.$$runValidators(e,i,h))}return e})}],Oa=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Aa,priority:1,compile:function(e){return e.addClass(ba).addClass(xa).addClass(ya),{pre:function(t,e,n,r){var i=r[0],o=r[1]||i.$$parentForm;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&i.$$parentForm.$$renameControl(i,t)}),t.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(e,n,r,i){var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],Ta=/(\s+|^)default(\s+|$)/,Ia=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var n=this;this.$options=N(t.$eval(e.ngModelOptions)),$(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Kr(this.$options.updateOn.replace(Ta,function(){return n.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},ja=lr({terminal:!0,priority:1e3}),Pa=e("ngOptions"),Fa=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ua=["$compile","$document","$parse",function(e,i,o){function a(t,e,r){function i(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e;if(!c&&n(t))e=t;else{e=[];for(var r in t)t.hasOwnProperty(r)&&"$"!==r.charAt(0)&&e.push(r)}return e}var u=t.match(Fa);if(!u)throw Pa("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",t,Y(e));var s=u[5]||u[7],c=u[6],l=/ as /.test(u[0])&&u[1],f=u[9],p=o(u[2]?u[1]:s),h=l&&o(l),d=h||p,v=f&&o(f),g=f?function(t,e){return v(r,e)}:function(t){return Kt(t)},m=function(t,e){return g(t,x(t,e))},$=o(u[2]||u[1]),y=o(u[3]||""),w=o(u[4]||""),b=o(u[8]),_={},x=c?function(t,e){return _[c]=e,_[s]=t,_}:function(t){return _[s]=t,_};return{trackBy:f,getTrackByValue:m,getWatchables:o(b,function(t){var e=[];t=t||[];for(var n=a(t),i=n.length,o=0;o<i;o++){var s=t===n?o:n[o],c=t[s],l=x(c,s),f=g(c,l);if(e.push(f),u[2]||u[1]){var p=$(r,l);e.push(p)}if(u[4]){var h=w(r,l);e.push(h)}}return e}),getOptions:function(){for(var t=[],e={},n=b(r)||[],o=a(n),u=o.length,s=0;s<u;s++){var c=n===o?s:o[s],l=n[c],p=x(l,c),h=d(r,p),v=g(h,p),_=$(r,p),S=y(r,p),E=w(r,p),C=new i(v,h,_,S,E);t.push(C),e[v]=C}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[m(t)]},getViewValueFromOption:function(t){return f?Gr.copy(t.viewValue):t.viewValue}}}}}function u(t,n,o,u){function l(t,e){var n=s.cloneNode(!1);e.appendChild(n),f(t,n)}function f(t,e){t.element=e,e.disabled=t.disabled,t.label!==e.label&&(e.label=t.label,e.textContent=t.label),t.value!==e.value&&(e.value=t.selectValue)}function p(){var t=x&&d.readValue();if(x)for(var e=x.items.length-1;e>=0;e--){var r=x.items[e];Lt($(r.group)?r.element.parentNode:r.element)}x=S.getOptions();var i={};if(b&&n.prepend(h),x.items.forEach(function(t){var e;$(t.group)?(e=i[t.group],e||(e=c.cloneNode(!1),E.appendChild(e),e.label=null===t.group?"null":t.group,i[t.group]=e),l(t,e)):l(t,E)}),n[0].appendChild(E),v.$render(),!v.$isEmpty(t)){var o=d.readValue(),a=S.trackBy||g;(a?M(t,o):t===o)||(v.$setViewValue(o),v.$render())}}for(var h,d=u[0],v=u[1],g=o.multiple,m=0,y=n.children(),w=y.length;m<w;m++)if(""===y[m].value){h=y.eq(m);break}var b=!!h,_=Dr(s.cloneNode(!1));_.val("?");var x,S=a(o.ngOptions,n,t),E=i[0].createDocumentFragment(),C=function(){b||n.prepend(h),n.val(""),h.prop("selected",!0),h.attr("selected",!0)},k=function(){b||h.remove()},R=function(){n.prepend(_),n.val("?"),_.prop("selected",!0),_.attr("selected",!0)},A=function(){_.remove()};g?(v.$isEmpty=function(t){return!t||0===t.length},d.writeValue=function(t){x.items.forEach(function(t){t.element.selected=!1}),t&&t.forEach(function(t){var e=x.getOptionFromViewValue(t);e&&(e.element.selected=!0)})},d.readValue=function(){var t=n.val()||[],e=[];return r(t,function(t){var n=x.selectValueMap[t];n&&!n.disabled&&e.push(x.getViewValueFromOption(n))}),e},S.trackBy&&t.$watchCollection(function(){if(Zr(v.$viewValue))return v.$viewValue.map(function(t){return S.getTrackByValue(t)})},function(){v.$render()})):(d.writeValue=function(t){var e=x.getOptionFromViewValue(t);e?(n[0].value!==e.selectValue&&(A(),k(),n[0].value=e.selectValue,e.element.selected=!0),e.element.setAttribute("selected","selected")):null===t||b?(A(),C()):(k(),R())},d.readValue=function(){var t=x.selectValueMap[n.val()];return t&&!t.disabled?(k(),A(),x.getViewValueFromOption(t)):null},S.trackBy&&t.$watch(function(){return S.getTrackByValue(v.$viewValue)},function(){v.$render()})),b?(h.remove(),e(h)(t),h.removeClass("ng-scope")):h=Dr(s.cloneNode(!1)),n.empty(),p(),t.$watchCollection(S.getWatchables,p)}var s=t.document.createElement("option"),c=t.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(t,e,n,r){r[0].registerOption=h},post:u}}}],Va=["$locale","$interpolate","$log",function(t,e,n){var i=/{}/g,o=/^when(Minus)?(.+)$/;return{link:function(a,u,s){function c(t){u.text(t||"")}var l,f=s.count,p=s.$attr.when&&u.attr(s.$attr.when),d=s.offset||0,v=a.$eval(p)||{},g={},$=e.startSymbol(),y=e.endSymbol(),w=$+f+"-"+d+y,b=Gr.noop;r(s,function(t,e){var n=o.exec(e);if(n){var r=(n[1]?"-":"")+jr(n[2]);v[r]=u.attr(s.$attr[e])}}),r(v,function(t,n){g[n]=e(t.replace(i,w))}),a.$watch(f,function(e){var r=parseFloat(e),i=isNaN(r);if(i||r in v||(r=t.pluralCat(r-d)),r!==l&&!(i&&_(l)&&isNaN(l))){b();var o=g[r];m(o)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+p),b=h,c()):b=a.$watch(o,c),l=r}})}}}],Da=["$parse","$animate","$compile",function(t,i,o){var a="$$NG_REMOVED",u=e("ngRepeat"),s=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},c=function(t){return t.clone[0]},l=function(t){return t.clone[t.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(e,f){var p=f.ngRepeat,h=o.$$createComment("end ngRepeat",p),d=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!d)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p);var v=d[1],g=d[2],m=d[3],$=d[4];if(d=v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!d)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",v);var y=d[3]||d[1],w=d[2];if(m&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",m);var b,_,x,S,E={$id:Kt};return $?b=t($):(x=function(t,e){return Kt(e)},S=function(t){return t}),function(t,e,o,f,d){b&&(_=function(e,n,r){return w&&(E[w]=e),E[y]=n,E.$index=r,b(t,E)});var v=dt();t.$watchCollection(g,function(o){var f,g,$,b,E,C,k,R,A,O,T,I,j=e[0],P=dt();if(m&&(t[m]=o),n(o))A=o,
R=_||x;else{R=_||S,A=[];for(var F in o)Ir.call(o,F)&&"$"!==F.charAt(0)&&A.push(F)}for(b=A.length,T=new Array(b),f=0;f<b;f++)if(E=o===A?f:A[f],C=o[E],k=R(E,C,f),v[k])O=v[k],delete v[k],P[k]=O,T[f]=O;else{if(P[k])throw r(T,function(t){t&&t.scope&&(v[t.id]=t)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,k,C);T[f]={id:k,scope:void 0,clone:void 0},P[k]=!0}for(var U in v){if(O=v[U],I=ht(O.clone),i.leave(I),I[0].parentNode)for(f=0,g=I.length;f<g;f++)I[f][a]=!0;O.scope.$destroy()}for(f=0;f<b;f++)if(E=o===A?f:A[f],C=o[E],O=T[f],O.scope){$=j;do $=$.nextSibling;while($&&$[a]);c(O)!=$&&i.move(ht(O.clone),null,j),j=l(O),s(O.scope,f,y,C,w,E,b)}else d(function(t,e){O.scope=e;var n=h.cloneNode(!1);t[t.length++]=n,i.enter(t,null,j),j=n,O.clone=t,P[O.id]=O,s(O.scope,f,y,C,w,E,b)});v=P})}}}}],Na="ng-hide",Ma="ng-hide-animate",qa=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,Na,{tempClasses:Ma})})}}}],Ha=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,Na,{tempClasses:Ma})})}}}],La=lr(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&r(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),za=["$animate","$compile",function(t,e){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,i,o,a){var u=o.ngSwitch||o.on,s=[],c=[],l=[],f=[],p=function(t,e){return function(){t.splice(e,1)}};n.$watch(u,function(n){var i,o;for(i=0,o=l.length;i<o;++i)t.cancel(l[i]);for(l.length=0,i=0,o=f.length;i<o;++i){var u=ht(c[i].clone);f[i].$destroy();var h=l[i]=t.leave(u);h.then(p(l,i))}c.length=0,f.length=0,(s=a.cases["!"+n]||a.cases["?"])&&r(s,function(n){n.transclude(function(r,i){f.push(i);var o=n.element;r[r.length++]=e.$$createComment("end ngSwitchWhen");var a={clone:r};c.push(a),t.enter(r,o.parent(),o)})})})}}}],Ba=lr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),Wa=lr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Ga=e("ngTransclude"),Ja=["$compile",function(t){return{restrict:"EAC",terminal:!0,compile:function(e){var n=t(e.contents());return e.empty(),function(t,e,r,i,o){function a(t,n){t.length?e.append(t):(u(),n.$destroy())}function u(){n(t,function(t){e.append(t)})}if(!o)throw Ga("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",Y(e));r.ngTransclude===r.$attr.ngTransclude&&(r.ngTransclude="");var s=r.ngTransclude||r.ngTranscludeSlot;o(a,null,s),s&&!o.isSlotFilled(s)&&u()}}}}],Za=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text;t.put(r,i)}}}}],Ya={$setViewValue:h,$render:h},Ka=["$element","$scope",function(e,n){var r=this,i=new Qt;r.ngModelCtrl=Ya,r.unknownOption=Dr(t.document.createElement("option")),r.renderUnknownOption=function(t){var n="? "+Kt(t)+" ?";r.unknownOption.val(n),e.prepend(r.unknownOption),e.val(n)},n.$on("$destroy",function(){r.renderUnknownOption=h}),r.removeUnknownOption=function(){r.unknownOption.parent()&&r.unknownOption.remove()},r.readValue=function(){return r.removeUnknownOption(),e.val()},r.writeValue=function(t){r.hasOption(t)?(r.removeUnknownOption(),e.val(t),""===t&&r.emptyOption.prop("selected",!0)):null==t&&r.emptyOption?(r.removeUnknownOption(),e.val("")):r.renderUnknownOption(t)},r.addOption=function(t,e){if(e[0].nodeType!==si){ft(t,'"option value"'),""===t&&(r.emptyOption=e);var n=i.get(t)||0;i.put(t,n+1),r.ngModelCtrl.$render(),Ar(e)}},r.removeOption=function(t){var e=i.get(t);e&&(1===e?(i.remove(t),""===t&&(r.emptyOption=void 0)):i.put(t,e-1))},r.hasOption=function(t){return!!i.get(t)},r.registerOption=function(t,e,n,i,o){if(i){var a;n.$observe("value",function(t){$(a)&&r.removeOption(a),a=t,r.addOption(t,e)})}else o?t.$watch(o,function(t,i){n.$set("value",t),i!==t&&r.removeOption(i),r.addOption(t,e)}):r.addOption(n.value,e);e.on("$destroy",function(){r.removeOption(n.value),r.ngModelCtrl.$render()})}}],Qa=function(){function t(t,e,n,i){var o=i[1];if(o){var a=i[0];if(a.ngModelCtrl=o,e.on("change",function(){t.$apply(function(){o.$setViewValue(a.readValue())})}),n.multiple){a.readValue=function(){var t=[];return r(e.find("option"),function(e){e.selected&&t.push(e.value)}),t},a.writeValue=function(t){var n=new Qt(t);r(e.find("option"),function(t){t.selected=$(n.get(t.value))})};var u,s=NaN;t.$watch(function(){s!==o.$viewValue||M(u,o.$viewValue)||(u=gt(o.$viewValue),o.$render()),s=o.$viewValue}),o.$isEmpty=function(t){return!t||0===t.length}}}}function e(t,e,n,r){var i=r[1];if(i){var o=r[0];i.$render=function(){o.writeValue(i.$viewValue)}}}return{restrict:"E",require:["select","?ngModel"],controller:Ka,priority:1,link:{pre:t,post:e}}},Xa=["$interpolate",function(t){return{restrict:"E",priority:100,compile:function(e,n){if($(n.value))var r=t(n.value,!0);else{var i=t(e.text(),!0);i||n.$set("value",e.text())}return function(t,e,n){var o="$selectController",a=e.parent(),u=a.data(o)||a.parent().data(o);u&&u.registerOption(t,e,n,r,i)}}}}],tu=v({restrict:"E",terminal:!1}),eu=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},nu=function(){return{restrict:"A",require:"?ngModel",link:function(t,n,r,i){if(i){var o,a=r.ngPattern||r.pattern;r.$observe("pattern",function(t){if(b(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw e("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",a,t,Y(n));o=t||void 0,i.$validate()}),i.$validators.pattern=function(t,e){return i.$isEmpty(e)||m(o)||o.test(e)}}}}},ru=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){var e=f(t);i=isNaN(e)?-1:e,r.$validate()}),r.$validators.maxlength=function(t,e){return i<0||r.$isEmpty(e)||e.length<=i}}}}},iu=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=f(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}};return t.angular.bootstrap?void(t.console&&console.log("WARNING: Tried to load angular more than once.")):(st(),yt(Gr),Gr.module("ngLocale",[],["$provide",function(t){function e(t){t+="";var e=t.indexOf(".");return e==-1?0:t.length-e-1}function n(t,n){var r=n;void 0===r&&(r=Math.min(e(t),3));var i=Math.pow(10,r),o=(t*i|0)%i;return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(t,e){var i=0|t,o=n(t,e);return 1==i&&0==o.v?r.ONE:r.OTHER}})}]),void Dr(t.document).ready(function(){rt(t.document,it)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("angular-ui-router",[],e):"object"==typeof exports?exports["angular-ui-router"]=e():t["angular-ui-router"]=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(1)),r(n(54)),r(n(56)),n(59),n(60),n(61),n(62),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]="ui.router"},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(2)),r(n(47)),r(n(48)),r(n(49)),r(n(50)),r(n(51)),r(n(52)),r(n(53)),r(n(45));var i=n(25);e.UIRouter=i.UIRouter},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(3)),r(n(6)),r(n(7)),r(n(5)),r(n(4)),r(n(8)),r(n(9)),r(n(12))},function(t,e,n){"use strict";function r(t,e,n,r){return void 0===r&&(r=Object.keys(t)),r.filter(function(e){return"function"==typeof t[e]}).forEach(function(r){return e[r]=t[r].bind(n)})}function i(t){void 0===t&&(t={});for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=o.apply(null,[{}].concat(n));return e.extend({},i,c(t||{},Object.keys(i)))}function o(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return e.forEach(n,function(n){e.forEach(n,function(e,n){t.hasOwnProperty(n)||(t[n]=e)})}),t}function a(t,e){var n=[];for(var r in t.path){if(t.path[r]!==e.path[r])break;n.push(t.path[r])}return n}function u(t,e,n){void 0===n&&(n=Object.keys(t));for(var r=0;r<n.length;r++){var i=n[r];if(t[i]!=e[i])return!1}return!0}function s(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={};for(var o in e)t(n,o)&&(i[o]=e[o]);return i}function c(t){return s.apply(null,[e.inArray].concat(T(arguments)))}function l(t){var n=function(t,n){return!e.inArray(t,n)};return s.apply(null,[n].concat(T(arguments)))}function f(t,e){return d(t,k.prop(e))}function p(t,n){var r=C.isArray(t),i=r?[]:{},o=r?function(t){return i.push(t)}:function(t,e){return i[e]=t};return e.forEach(t,function(t,e){n(t,e)&&o(t,e)}),i}function h(t,n){var r;return e.forEach(t,function(t,e){r||n(t,e)&&(r=t)}),r}function d(t,n){var r=C.isArray(t)?[]:{};return e.forEach(t,function(t,e){return r[e]=n(t,e)}),r}function v(t,e){return t.push(e),t}function g(t,e){return void 0===e&&(e="assert failure"),function(n){if(!t(n))throw new Error(C.isFunction(e)?e(n):e);return!0}}function m(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];if(0===t.length)return[];var n=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991);return Array.apply(null,Array(n)).map(function(e,n){return t.map(function(t){return t[n]})})}function $(t,e){var n,r;if(C.isArray(e)&&(n=e[0],r=e[1]),!C.isString(n))throw new Error("invalid parameters to applyPairs");return t[n]=r,t}function y(t){return t.length&&t[t.length-1]||void 0}function w(t,n){return n&&Object.keys(n).forEach(function(t){return delete n[t]}),n||(n={}),e.extend(n,t)}function b(t,e,n){return C.isArray(t)?t.forEach(e,n):void Object.keys(t).forEach(function(n){return e(t[n],n)})}function _(t,e){return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t}function x(t){return T(arguments,1).filter(e.identity).reduce(_,t)}function S(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var n=typeof t,r=typeof e;if(n!==r||"object"!==n)return!1;var i=[t,e];if(k.all(C.isArray)(i))return E(t,e);if(k.all(C.isDate)(i))return t.getTime()===e.getTime();if(k.all(C.isRegExp)(i))return t.toString()===e.toString();if(k.all(C.isFunction)(i))return!0;var o=[C.isFunction,C.isArray,C.isDate,C.isRegExp];if(o.map(k.any).reduce(function(t,e){return t||!!e(i)},!1))return!1;var a,u={};for(a in t){if(!S(t[a],e[a]))return!1;u[a]=!0}for(a in e)if(!u[a])return!1;return!0}function E(t,e){return t.length===e.length&&m(t,e).reduce(function(t,e){return t&&S(e[0],e[1])},!0)}var C=n(4),k=n(5),R=n(6),A="undefined"==typeof window?{}:window,O=A.angular||{};e.fromJson=O.fromJson||JSON.parse.bind(JSON),e.toJson=O.toJson||JSON.stringify.bind(JSON),e.copy=O.copy||w,e.forEach=O.forEach||b,e.extend=O.extend||x,e.equals=O.equals||S,e.identity=function(t){return t},e.noop=function(){},e.bindFunctions=r,e.inherit=function(t,n){return e.extend(new(e.extend(function(){},{prototype:t})),n)};var T=function(t,e){return void 0===e&&(e=0),Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(t,e))};e.inArray=function(t,e){return t.indexOf(e)!==-1},e.removeFrom=k.curry(function(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),t}),e.defaults=i,e.merge=o,e.mergeR=function(t,n){return e.extend(t,n)},e.ancestors=a,e.equalForKeys=u,e.pick=c,e.omit=l,e.pluck=f,e.filter=p,e.find=h,e.mapObj=d,e.map=d,e.values=function(t){return Object.keys(t).map(function(e){return t[e]})},e.allTrueR=function(t,e){return t&&e},e.anyTrueR=function(t,e){return t||e},e.unnestR=function(t,e){return t.concat(e)},e.flattenR=function(t,n){return C.isArray(n)?t.concat(n.reduce(e.flattenR,[])):v(t,n)},e.pushR=v,e.uniqR=function(t,n){return e.inArray(t,n)?t:v(t,n)},e.unnest=function(t){return t.reduce(e.unnestR,[])},e.flatten=function(t){return t.reduce(e.flattenR,[])},e.assertPredicate=g,e.pairs=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})},e.arrayTuples=m,e.applyPairs=$,e.tail=y,e.silenceUncaughtInPromise=function(t){return t["catch"](function(t){return 0})&&t},e.silentRejection=function(t){return e.silenceUncaughtInPromise(R.services.$q.reject(t))}},function(t,e,n){"use strict";function r(t){if(e.isArray(t)&&t.length){var n=t.slice(0,-1),r=t.slice(-1);return!(n.filter(i.not(e.isString)).length||r.filter(i.not(e.isFunction)).length)}return e.isFunction(t)}var i=n(5),o=Object.prototype.toString,a=function(t){return function(e){return typeof e===t}};e.isUndefined=a("undefined"),e.isDefined=i.not(e.isUndefined),e.isNull=function(t){return null===t},e.isFunction=a("function"),e.isNumber=a("number"),e.isString=a("string"),e.isObject=function(t){return null!==t&&"object"==typeof t},e.isArray=Array.isArray,e.isDate=function(t){return"[object Date]"===o.call(t)},e.isRegExp=function(t){return"[object RegExp]"===o.call(t)},e.isInjectable=r,e.isPromise=i.and(e.isObject,i.pipe(i.prop("then"),e.isFunction))},function(t,e){"use strict";function n(t){function e(n){return n.length>=r?t.apply(null,n):function(){return e(n.concat([].slice.apply(arguments)))}}var n=[].slice.apply(arguments,[1]),r=t.length;return e(n)}function r(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return r.apply(null,[].slice.call(arguments).reverse())}function o(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r-0]=arguments[r];return t.apply(null,n)&&e.apply(null,n)}}function a(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r-0]=arguments[r];return t.apply(null,n)||e.apply(null,n)}}function u(t,e){return function(n){return n[t].apply(n,e)}}function s(t){return function(e){for(var n=0;n<t.length;n++)if(t[n][0](e))return t[n][1](e)}}e.curry=n,e.compose=r,e.pipe=i,e.prop=function(t){return function(e){return e&&e[t]}},e.propEq=n(function(t,e,n){return n&&n[t]===e}),e.parse=function(t){return i.apply(null,t.split(".").map(e.prop))},e.not=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];return!t.apply(null,e)}},e.and=o,e.or=a,e.all=function(t){return function(e){return e.reduce(function(e,n){return e&&!!t(n)},!0)}},e.any=function(t){return function(e){return e.reduce(function(e,n){return e||!!t(n)},!1)}},e.is=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},e.eq=function(t){return function(e){return t===e}},e.val=function(t){return function(){return t}},e.invoke=u,e.pattern=s},function(t,e){"use strict";var n=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded. You should include one of: ['angular1.js']")}},r={$q:void 0,$injector:void 0,location:{},locationConfig:{},template:{}};e.services=r,["setUrl","path","search","hash","onChange"].forEach(function(t){return r.location[t]=n(t)}),["port","protocol","host","baseHref","html5Mode","hashPrefix"].forEach(function(t){return r.locationConfig[t]=n(t)})},function(t,e){"use strict";var n=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.prototype.matches=function(t){return this.regexp.test("."+t)},t.is=function(t){return t.indexOf("*")>-1},t.fromString=function(e){return this.is(e)?new t(e):null},t}();e.Glob=n},function(t,e){"use strict";var n=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&e.shift(),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();e.Queue=n},function(t,e,n){"use strict";function r(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function i(t,e){for(;e.length<t;)e+=" ";return e}function o(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function a(t){var e=u(t),n=e.match(/^(function [^ ]+\([^)]*\))/);return n?n[1]:e}function u(t){var e=c.isArray(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}function s(t){function e(t){if(c.isObject(t)){if(n.indexOf(t)!==-1)return"[circular ref]";n.push(t)}return g(t)}var n=[];return JSON.stringify(t,function(t,n){return e(n)}).replace(/\\"/g,'"')}var c=n(4),l=n(10),f=n(3),p=n(5),h=n(11),d=n(19);e.maxLength=r,e.padString=i,e.kebobString=o,e.functionToString=a,e.fnToString=u;var v=null,g=function(t){var e=l.Rejection.isTransitionRejectionPromise;return(v=v||p.pattern([[p.not(c.isDefined),p.val("undefined")],[c.isNull,p.val("null")],[c.isPromise,p.val("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[p.is(l.Rejection),p.invoke("toString")],[p.is(h.Transition),p.invoke("toString")],[p.is(d.Resolvable),p.invoke("toString")],[c.isInjectable,a],[p.val(!0),f.identity]]))(t)};e.stringify=s,e.beforeAfterSubstr=function(t){return function(e){if(!e)return["",""];var n=e.indexOf(t);return n===-1?[e,""]:[e.substr(0,n),e.substr(n+1)]}}},function(t,e,n){"use strict";var r=n(3),i=n(9);!function(t){t[t.SUPERSEDED=2]="SUPERSEDED",t[t.ABORTED=3]="ABORTED",t[t.INVALID=4]="INVALID",t[t.IGNORED=5]="IGNORED",t[t.ERROR=6]="ERROR"}(e.RejectType||(e.RejectType={}));var o=e.RejectType,a=function(){function t(t,e,n){this.type=t,this.message=e,this.detail=n}return t.prototype.toString=function(){var t=function(t){return t&&t.toString!==Object.prototype.toString?t.toString():i.stringify(t)},e=this.type,n=this.message,r=t(this.detail);return"TransitionRejection(type: "+e+", message: "+n+", detail: "+r+")"},t.prototype.toPromise=function(){return r.extend(r.silentRejection(this),{_transitionRejection:this})},t.isTransitionRejectionPromise=function(e){return e&&"function"==typeof e.then&&e._transitionRejection instanceof t},t.superseded=function(e,n){var r="The transition has been superseded by a different transition",i=new t(o.SUPERSEDED,r,e);return n&&n.redirected&&(i.redirected=!0),i},t.redirected=function(e){return t.superseded(e,{redirected:!0})},t.invalid=function(e){var n="This transition is invalid";return new t(o.INVALID,n,e)},t.ignored=function(e){var n="The transition was ignored";return new t(o.IGNORED,n,e)},t.aborted=function(e){var n="The transition has been aborted";return new t(o.ABORTED,n,e)},t.errored=function(e){var n="The transition errored";return new t(o.ERROR,n,e)},t}();e.Rejection=a},function(t,e,n){"use strict";var r=n(9),i=n(12),o=n(6),a=n(3),u=n(4),s=n(5),c=n(13),l=n(15),f=n(16),p=n(21),h=n(20),d=n(14),v=n(22),g=n(19),m=n(10),$=n(17),y=n(25),w=0,b=s.prop("self"),_=function(){function t(e,n,r){var i=this;if(this._deferred=o.services.$q.defer(),this.promise=this._deferred.promise,this.treeChanges=function(){return i._treeChanges},this.isActive=function(){return i===i._options.current()},this.router=r,this._targetState=n,!n.valid())throw new Error(n.error());l.HookRegistry.mixin(new l.HookRegistry,this),this._options=a.extend({current:s.val(this)},n.options()),this.$id=w++;var u=h.PathFactory.buildToPath(e,n);this._treeChanges=h.PathFactory.treeChanges(e,u,this._options.reloadState);var c=this._treeChanges.entering.map(function(t){return t.state});h.PathFactory.applyViewConfigs(r.transitionService.$view,this._treeChanges.to,c);var f=[new g.Resolvable(y.UIRouter,function(){return r},[],(void 0),r),new g.Resolvable(t,function(){return i},[],(void 0),this),new g.Resolvable("$transition$",function(){return i},[],(void 0),this),new g.Resolvable("$stateParams",function(){return i.params()},[],(void 0),this.params())],p=this._treeChanges.to[0],d=new $.ResolveContext(this._treeChanges.to);d.addResolvables(f,p.state)}return t.prototype.onBefore=function(t,e,n){throw""},t.prototype.onStart=function(t,e,n){throw""},t.prototype.onExit=function(t,e,n){throw""},t.prototype.onRetain=function(t,e,n){throw""},t.prototype.onEnter=function(t,e,n){throw""},t.prototype.onFinish=function(t,e,n){throw""},t.prototype.onSuccess=function(t,e,n){throw""},t.prototype.onError=function(t,e,n){throw""},t.prototype.$from=function(){return a.tail(this._treeChanges.from).state},t.prototype.$to=function(){return a.tail(this._treeChanges.to).state},t.prototype.from=function(){return this.$from().self},t.prototype.to=function(){return this.$to().self},t.prototype.targetState=function(){return this._targetState},t.prototype.is=function(e){return e instanceof t?this.is({to:e.$to().name,from:e.$from().name}):!(e.to&&!l.matchState(this.$to(),e.to)||e.from&&!l.matchState(this.$from(),e.from))},t.prototype.params=function(t){return void 0===t&&(t="to"),this._treeChanges[t].map(s.prop("paramValues")).reduce(a.mergeR,{})},t.prototype.injector=function(t){var e=this.treeChanges().to;return t&&(e=h.PathFactory.subPath(e,function(e){return e.state===t||e.state.name===t})),new $.ResolveContext(e).injector()},t.prototype.getResolveTokens=function(){return new $.ResolveContext(this._treeChanges.to).getTokens()},t.prototype.getResolveValue=function(t){var e=new $.ResolveContext(this._treeChanges.to),n=function(t){var n=e.getResolvable(t);if(void 0===n)throw new Error("Dependency Injection token not found: "+r.stringify(t));return n.data};return u.isArray(t)?t.map(n):n(t)},t.prototype.getResolvable=function(t){return new $.ResolveContext(this._treeChanges.to).getResolvable(t)},t.prototype.addResolvable=function(t,e){void 0===e&&(e="");var n="string"==typeof e?e:e.name,r=this._treeChanges.to,i=a.find(r,function(t){return t.state.name===n}),o=new $.ResolveContext(r);o.addResolvables([t],i.state)},t.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},t.prototype.options=function(){return this._options},t.prototype.entering=function(){return a.map(this._treeChanges.entering,s.prop("state")).map(b)},t.prototype.exiting=function(){return a.map(this._treeChanges.exiting,s.prop("state")).map(b).reverse()},t.prototype.retained=function(){return a.map(this._treeChanges.retained,s.prop("state")).map(b)},t.prototype.views=function(t,e){void 0===t&&(t="entering");var n=this._treeChanges[t];return n=e?n.filter(s.propEq("state",e)):n,n.map(s.prop("views")).filter(a.identity).reduce(a.unnestR,[])},t.prototype.redirect=function(t){var e=a.extend({},this.options(),t.options(),{redirectedFrom:this,source:"redirect"});t=new d.TargetState(t.identifier(),t.$state(),t.params(),e);var n=this.router.transitionService.create(this._treeChanges.from,t),r=this.treeChanges().entering,i=n.treeChanges().entering,o=function(t){return function(e){return t&&e.state.includes[t.name]}},u=p.PathNode.matching(i,r).filter(s.not(o(t.options().reloadState)));return u.forEach(function(t,e){t.resolvables=r[e].resolvables}),n},t.prototype._changedParams=function(){var t=this._treeChanges,e=t.to,n=t.from;if(!this._options.reload&&a.tail(e).state===a.tail(n).state){var r=e.map(function(t){return t.paramSchema}),i=[e,n].map(function(t){return t.map(function(t){return t.paramValues})}),o=i[0],u=i[1],s=a.arrayTuples(r,o,u);return s.map(function(t){var e=t[0],n=t[1],r=t[2];return v.Param.changed(e,n,r)}).reduce(a.unnestR,[])}},t.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(a.anyTrueR,!1)},t.prototype.ignored=function(){var t=this._changedParams();return!!t&&0===t.length},t.prototype.hookBuilder=function(){return new f.HookBuilder(this.router.transitionService,this,{transition:this,current:this._options.current})},t.prototype.run=function(){var t=this,e=c.TransitionHook.runSynchronousHooks,n=this.hookBuilder(),r=this.router.globals;r.transitionHistory.enqueue(this);var o=e(n.getOnBeforeHooks());if(m.Rejection.isTransitionRejectionPromise(o)){o["catch"](function(){return 0});var a=o._transitionRejection;return this._deferred.reject(a),this.promise}if(!this.valid()){var u=new Error(this.error());return this._deferred.reject(u),this.promise}if(this.ignored())return i.trace.traceTransitionIgnored(this),this._deferred.reject(m.Rejection.ignored()),this.promise;var s=function(){i.trace.traceSuccess(t.$to(),t),t.success=!0,t._deferred.resolve(t.to()),e(n.getOnSuccessHooks(),!0)},l=function(r){i.trace.traceError(r,t),t.success=!1,t._deferred.reject(r),t._error=r,e(n.getOnErrorHooks(),!0)};i.trace.traceTransitionStart(this);var f=function(t,e){return t.then(function(){return e.invokeHook()})};return n.asyncHooks().reduce(f,o).then(s,l),this.promise},t.prototype.valid=function(){return!this.error()||void 0!==this.success},t.prototype.error=function(){for(var t=this.$to(),e=0,n=this;null!=(n=n.redirectedFrom());)if(++e>20)return"Too many Transition redirects (20+)";return t.self["abstract"]?"Cannot transition to abstract state '"+t.name+"'":v.Param.validates(t.parameters(),this.params())?this.success===!1?this._error:void 0:"Param values not valid for state '"+t.name+"'"},t.prototype.toString=function(){var t=this.from(),e=this.to(),n=function(t){return null!==t["#"]&&void 0!==t["#"]?t:a.omit(t,"#")},r=this.$id,i=u.isObject(t)?t.name:t,o=a.toJson(n(this._treeChanges.from.map(s.prop("paramValues")).reduce(a.mergeR,{}))),c=this.valid()?"":"(X) ",l=u.isObject(e)?e.name:e,f=a.toJson(n(this.params()));return"Transition#"+r+"( '"+i+"'"+o+" -> "+c+"'"+l+"'"+f+" )"},t.diToken=t,t}();e.Transition=_},function(t,e,n){"use strict";function r(t){return t?"[ui-view#"+t.id+" tag "+("in template from '"+(t.creationContext&&t.creationContext.name||"(root)")+"' state]: ")+("fqn: '"+t.fqn+"', ")+("name: '"+t.name+"@"+t.creationContext+"')"):"ui-view (defunct)"}function i(t){return a.isNumber(t)?c[t]:c[c[t]]}var o=n(5),a=n(4),u=n(9),s=function(t){return"[ViewConfig#"+t.$id+" from '"+(t.viewDecl.$context.name||"(root)")+"' state]: target ui-view: '"+t.viewDecl.$uiViewName+"@"+t.viewDecl.$uiViewContextAnchor+"'"};!function(t){t[t.RESOLVE=0]="RESOLVE",t[t.TRANSITION=1]="TRANSITION",t[t.HOOK=2]="HOOK",t[t.UIVIEW=3]="UIVIEW",t[t.VIEWCONFIG=4]="VIEWCONFIG"}(e.Category||(e.Category={}));var c=e.Category,l=function(){function t(){this._enabled={},this.approximateDigests=0}return t.prototype._set=function(t,e){var n=this;e.length||(e=Object.keys(c).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(t){return c[t]})),e.map(i).forEach(function(e){return n._enabled[e]=t})},t.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];this._set(!0,t)},t.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];this._set(!1,t)},t.prototype.enabled=function(t){return!!this._enabled[i(t)]},t.prototype.traceTransitionStart=function(t){if(this.enabled(c.TRANSITION)){var e=t.$id,n=this.approximateDigests,r=u.stringify(t);console.log("Transition #"+e+" Digest #"+n+": Started  -> "+r)}},t.prototype.traceTransitionIgnored=function(t){if(this.enabled(c.TRANSITION)){var e=t&&t.$id,n=this.approximateDigests,r=u.stringify(t);console.log("Transition #"+e+" Digest #"+n+": Ignored  <> "+r)}},t.prototype.traceHookInvocation=function(t,e){if(this.enabled(c.HOOK)){var n=o.parse("transition.$id")(e),r=this.approximateDigests,i=o.parse("traceData.hookType")(e)||"internal",a=o.parse("traceData.context.state.name")(e)||o.parse("traceData.context")(e)||"unknown",s=u.functionToString(t.hookFn);console.log("Transition #"+n+" Digest #"+r+":   Hook -> "+i+" context: "+a+", "+u.maxLength(200,s))}},t.prototype.traceHookResult=function(t,e,n){if(this.enabled(c.HOOK)){var r=o.parse("transition.$id")(n),i=this.approximateDigests,a=u.stringify(t),s=u.stringify(e);console.log("Transition #"+r+" Digest #"+i+":   <- Hook returned: "+u.maxLength(200,a)+", transition result: "+u.maxLength(200,s))}},t.prototype.traceResolvePath=function(t,e,n){if(this.enabled(c.RESOLVE)){var r=n&&n.$id,i=this.approximateDigests,o=t&&t.toString();console.log("Transition #"+r+" Digest #"+i+":         Resolving "+o+" ("+e+")")}},t.prototype.traceResolvableResolved=function(t,e){if(this.enabled(c.RESOLVE)){var n=e&&e.$id,r=this.approximateDigests,i=t&&t.toString(),o=u.stringify(t.data);console.log("Transition #"+n+" Digest #"+r+":               <- Resolved  "+i+" to: "+u.maxLength(200,o))}},t.prototype.traceError=function(t,e){if(this.enabled(c.TRANSITION)){var n=e&&e.$id,r=this.approximateDigests,i=u.stringify(e);console.log("Transition #"+n+" Digest #"+r+": <- Rejected "+i+", reason: "+t)}},t.prototype.traceSuccess=function(t,e){if(this.enabled(c.TRANSITION)){var n=e&&e.$id,r=this.approximateDigests,i=t.name,o=u.stringify(e);console.log("Transition #"+n+" Digest #"+r+": <- Success  "+o+", final state: "+i)}},t.prototype.traceUIViewEvent=function(t,e,n){void 0===n&&(n=""),this.enabled(c.UIVIEW)&&console.log("ui-view: "+u.padString(30,t)+" "+r(e)+n)},t.prototype.traceUIViewConfigUpdated=function(t,e){this.enabled(c.UIVIEW)&&this.traceUIViewEvent("Updating",t," with ViewConfig from context='"+e+"'")},t.prototype.traceUIViewFill=function(t,e){this.enabled(c.UIVIEW)&&this.traceUIViewEvent("Fill",t," with: "+u.maxLength(200,e))},t.prototype.traceViewServiceEvent=function(t,e){this.enabled(c.VIEWCONFIG)&&console.log("VIEWCONFIG: "+t+" "+s(e))},t.prototype.traceViewServiceUIViewEvent=function(t,e){this.enabled(c.VIEWCONFIG)&&console.log("VIEWCONFIG: "+t+" "+r(e))},t}();e.Trace=l;var f=new l;e.trace=f},function(t,e,n){"use strict";var r=n(3),i=n(9),o=n(4),a=n(5),u=n(12),s=n(6),c=n(10),l=n(14),f={
async:!0,rejectIfSuperseded:!0,current:r.noop,transition:null,traceData:{},bind:null},p=function(){function t(t,e,n,i){var o=this;this.transition=t,this.stateContext=e,this.eventHook=n,this.options=i,this.isSuperseded=function(){return o.options.current()!==o.options.transition},this.options=r.defaults(i,f)}return t.prototype.invokeHook=function(){var t=this,e=t.options,n=t.eventHook;if(u.trace.traceHookInvocation(this,e),e.rejectIfSuperseded&&this.isSuperseded())return c.Rejection.superseded(e.current()).toPromise();var r=n._deregistered?void 0:n.callback.call(e.bind,this.transition,this.stateContext);return this.handleHookResult(r)},t.prototype.handleHookResult=function(t){var e=this;if(o.isDefined(t)){var n=a.pattern([[this.isSuperseded,function(){return c.Rejection.superseded(e.options.current()).toPromise()}],[a.eq(!1),function(){return c.Rejection.aborted("Hook aborted transition").toPromise()}],[a.is(l.TargetState),function(t){return c.Rejection.redirected(t).toPromise()}],[o.isPromise,function(t){return t.then(e.handleHookResult.bind(e))}]]),r=n(t);return r&&u.trace.traceHookResult(t,r,this.options),r}},t.prototype.toString=function(){var t=this,e=t.options,n=t.eventHook,r=a.parse("traceData.hookType")(e)||"internal",o=a.parse("traceData.context.state.name")(e)||a.parse("traceData.context")(e)||"unknown",u=i.fnToString(n.callback);return r+" context: "+o+", "+i.maxLength(200,u)},t.runSynchronousHooks=function(t,e){void 0===e&&(e=!1);for(var n=[],r=0;r<t.length;r++){var i=t[r];try{n.push(i.invokeHook())}catch(u){if(!e)return c.Rejection.errored(u).toPromise();var l=i.transition.router.stateService.defaultErrorHandler();l(u)}}var f=n.filter(c.Rejection.isTransitionRejectionPromise);return f.length?f[0]:n.filter(o.isPromise).reduce(function(t,e){return t.then(a.val(e))},s.services.$q.when())},t}();e.TransitionHook=p},function(t,e,n){"use strict";var r=n(3),i=function(){function t(t,e,n,r){void 0===n&&(n={}),void 0===r&&(r={}),this._identifier=t,this._definition=e,this._options=r,this._params=n||{}}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+r.toJson(this.params())},t}();e.TargetState=i},function(t,e,n){"use strict";function r(t,e){function n(t){for(var e=r,n=0;n<e.length;n++){var i=u.Glob.fromString(e[n]);if(i&&i.matches(t.name)||!i&&e[n]===t.name)return!0}return!1}var r=a.isString(e)?[e]:e,i=a.isFunction(r)?r:n;return!!i(t)}function i(t,e){return function(n,r,i){void 0===i&&(i={});var a=new s(n,r,i);return t[e].push(a),function(){a._deregistered=!0,o.removeFrom(t[e])(a)}}}var o=n(3),a=n(4),u=n(7);e.matchState=r;var s=function(){function t(t,e,n){void 0===n&&(n={}),this.callback=e,this.matchCriteria=o.extend({to:!0,from:!0,exiting:!0,retained:!0,entering:!0},t),this.priority=n.priority||0,this.bind=n.bind||null,this._deregistered=!1}return t._matchingNodes=function(t,e){if(e===!0)return t;var n=t.filter(function(t){return r(t.state,e)});return n.length?n:null},t.prototype.matches=function(e){var n=this.matchCriteria,r=t._matchingNodes,i={to:r([o.tail(e.to)],n.to),from:r([o.tail(e.from)],n.from),exiting:r(e.exiting,n.exiting),retained:r(e.retained,n.retained),entering:r(e.entering,n.entering)},a=["to","from","exiting","retained","entering"].map(function(t){return i[t]}).reduce(o.allTrueR,!0);return a?i:null},t}();e.EventHook=s;var c=function(){function t(){var t=this;this._transitionEvents={onBefore:[],onStart:[],onEnter:[],onRetain:[],onExit:[],onFinish:[],onSuccess:[],onError:[]},this.getHooks=function(e){return t._transitionEvents[e]},this.onBefore=i(this._transitionEvents,"onBefore"),this.onStart=i(this._transitionEvents,"onStart"),this.onEnter=i(this._transitionEvents,"onEnter"),this.onRetain=i(this._transitionEvents,"onRetain"),this.onExit=i(this._transitionEvents,"onExit"),this.onFinish=i(this._transitionEvents,"onFinish"),this.onSuccess=i(this._transitionEvents,"onSuccess"),this.onError=i(this._transitionEvents,"onError")}return t.mixin=function(t,e){Object.keys(t._transitionEvents).concat(["getHooks"]).forEach(function(n){return e[n]=t[n]})},t}();e.HookRegistry=c},function(t,e,n){"use strict";function r(t){return void 0===t&&(t=!1),function(e,n){var r=t?-1:1,i=(e.node.state.path.length-n.node.state.path.length)*r;return 0!==i?i:n.hook.priority-e.hook.priority}}var i=n(3),o=n(4),a=n(13),u=n(17),s=function(){function t(t,e,n){var o=this;this.$transitions=t,this.transition=e,this.baseHookOptions=n,this.getOnBeforeHooks=function(){return o._buildNodeHooks("onBefore","to",r(),{async:!1})},this.getOnStartHooks=function(){return o._buildNodeHooks("onStart","to",r())},this.getOnExitHooks=function(){return o._buildNodeHooks("onExit","exiting",r(!0),{stateHook:!0})},this.getOnRetainHooks=function(){return o._buildNodeHooks("onRetain","retained",r(!1),{stateHook:!0})},this.getOnEnterHooks=function(){return o._buildNodeHooks("onEnter","entering",r(!1),{stateHook:!0})},this.getOnFinishHooks=function(){return o._buildNodeHooks("onFinish","to",r())},this.getOnSuccessHooks=function(){return o._buildNodeHooks("onSuccess","to",r(),{async:!1,rejectIfSuperseded:!1})},this.getOnErrorHooks=function(){return o._buildNodeHooks("onError","to",r(),{async:!1,rejectIfSuperseded:!1})},this.treeChanges=e.treeChanges(),this.toState=i.tail(this.treeChanges.to).state,this.fromState=i.tail(this.treeChanges.from).state,this.transitionOptions=e.options()}return t.prototype.asyncHooks=function(){var t=this.getOnStartHooks(),e=this.getOnExitHooks(),n=this.getOnRetainHooks(),r=this.getOnEnterHooks(),o=this.getOnFinishHooks(),a=[t,e,n,r,o];return a.reduce(i.unnestR,[]).filter(i.identity)},t.prototype._buildNodeHooks=function(t,e,n,r){var o=this,s=this._matchingHooks(t,this.treeChanges);if(!s)return[];var c=function(n){var s=n.matches(o.treeChanges),c=s[e],l="exiting"===e?o.treeChanges.from:o.treeChanges.to;new u.ResolveContext(l);return c.map(function(e){var u=i.extend({bind:n.bind,traceData:{hookType:t,context:e}},o.baseHookOptions,r),s=u.stateHook?e.state:null,c=new a.TransitionHook(o.transition,s,n,u);return{hook:n,node:e,transitionHook:c}})};return s.map(c).reduce(i.unnestR,[]).sort(n).map(function(t){return t.transitionHook})},t.prototype._matchingHooks=function(t,e){return[this.transition,this.$transitions].map(function(e){return e.getHooks(t)}).filter(i.assertPredicate(o.isArray,"broken event named: "+t)).reduce(i.unnestR,[]).filter(function(t){return t.matches(e)})},t}();e.HookBuilder=s},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(12),a=n(6),u=n(18),s=n(19),c=n(20),l=n(9),f=u.resolvePolicies.when,p=[f.EAGER,f.LAZY],h=[f.EAGER],d=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(r.uniqR,[])},t.prototype.getResolvable=function(t){var e=this._path.map(function(t){return t.resolvables}).reduce(r.unnestR,[]).filter(function(e){return e.token===t});return r.tail(e)},t.prototype.subContext=function(e){return new t(c.PathFactory.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var n=r.find(this._path,i.propEq("state",e)),o=t.map(function(t){return t.token});n.resolvables=n.resolvables.filter(function(t){return o.indexOf(t.token)===-1}).concat(t)},t.prototype.resolvePath=function(t,e){var n=this;void 0===t&&(t="LAZY");var i=r.inArray(p,t)?t:"LAZY",s=i===u.resolvePolicies.when.EAGER?h:p;o.trace.traceResolvePath(this._path,t,e);var c=this._path.reduce(function(t,i){var o=function(t){return r.inArray(s,t.getPolicy(i.state).when)},a=i.resolvables.filter(o),u=n.subContext(i.state),c=function(t){return t.get(u,e).then(function(e){return{token:t.token,value:e}})};return t.concat(a.map(c))},[]);return a.services.$q.all(c)},t.prototype.injector=function(){return new v(this)},t.prototype.findNode=function(t){return r.find(this._path,function(e){return r.inArray(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this.findNode(t),n=c.PathFactory.subPath(this._path,function(t){return t===e})||this._path,i=n.reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t}),o=function(t){var e=i.filter(function(e){return e.token===t});if(e.length)return r.tail(e);var n=a.services.$injector.get(t);if(!n)throw new Error("Could not find Dependency Injection token: "+l.stringify(t));return new s.Resolvable(t,function(){return n},[],n)};return t.deps.map(o)},t}();e.ResolveContext=d;var v=function(){function t(t){this.context=t,this["native"]=a.services.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+l.stringify(e.token));return e.data}return a.services.$injector.get(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):a.services.$q.when(a.services.$injector.get(t))},t}()},function(t,e){"use strict";e.resolvePolicies={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}}},function(t,e,n){"use strict";var r=n(3),i=n(6),o=n(12),a=n(9),u=n(4);e.defaultResolvePolicy={when:"LAZY",async:"WAIT"};var s=function(){function t(e,n,o,a,s){if(this.resolved=!1,this.promise=void 0,e instanceof t)r.extend(this,e);else if(u.isFunction(n)){if(null==e||void 0==e)throw new Error("new Resolvable(): token argument is required");if(!u.isFunction(n))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=a,this.resolveFn=n,this.deps=o||[],this.data=s,this.resolved=void 0!==s,this.promise=this.resolved?i.services.$q.when(this.data):void 0}else if(u.isObject(e)&&e.token&&u.isFunction(e.resolveFn)){var c=e;return new t(c.token,c.resolveFn,c.deps,c.policy,c.data)}}return t.prototype.getPolicy=function(t){var n=this.policy||{},r=t&&t.resolvePolicy||{};return{when:n.when||r.when||e.defaultResolvePolicy.when,async:n.async||r.async||e.defaultResolvePolicy.async}},t.prototype.resolve=function(t,e){var n=this,a=i.services.$q,u=function(){return a.all(t.getDependencies(n).map(function(n){return n.get(t,e)}))},s=function(t){return n.resolveFn.apply(null,t)},c=function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})},l=t.findNode(this),f=l&&l.state,p="RXWAIT"===this.getPolicy(f).async?c:r.identity,h=function(t){return n.data=t,n.resolved=!0,o.trace.traceResolvableResolved(n,e),n.data};return this.promise=a.when().then(u).then(s).then(p).then(h)},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+a.stringify(this.token)+", requires: ["+this.deps.map(a.stringify)+"])"},t.prototype.clone=function(){return new t(this)},t.fromData=function(e,n){return new t(e,function(){return n},null,null,n)},t}();e.Resolvable=s},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(14),a=n(21),u=function(){function t(){}return t.makeTargetState=function(t){var e=r.tail(t).state;return new o.TargetState(e,e,t.map(i.prop("paramValues")).reduce(r.mergeR,{}))},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new a.PathNode(t).applyRawParams(e)})},t.buildToPath=function(e,n){var r=t.buildPath(n);return n.options().inherit?t.inheritParams(e,r,Object.keys(n.params())):r},t.applyViewConfigs=function(e,n,i){n.filter(function(t){return r.inArray(i,t.state)}).forEach(function(i){var o=r.values(i.state.views||{}),a=t.subPath(n,function(t){return t===i}),u=o.map(function(t){return e.createViewConfig(a,t)});i.views=u.reduce(r.unnestR,[])})},t.inheritParams=function(t,e,n){function o(t,e){var n=r.find(t,i.propEq("state",e));return r.extend({},n&&n.paramValues)}function u(e){var i=r.extend({},e&&e.paramValues),u=r.pick(i,n);i=r.omit(i,n);var s=o(t,e.state)||{},c=r.extend(i,s,u);return new a.PathNode(e.state).applyRawParams(c)}return void 0===n&&(n=[]),e.map(u)},t.treeChanges=function(t,e,n){function r(t,n){var r=a.PathNode.clone(t);return r.paramValues=e[n].paramValues,r}for(var o=0,u=Math.min(t.length,e.length),s=function(t){return t.parameters({inherit:!1}).filter(i.not(i.prop("dynamic"))).map(i.prop("id"))},c=function(t,e){return t.equals(e,s(t.state))};o<u&&t[o].state!==n&&c(t[o],e[o]);)o++;var l,f,p,h,d;l=t,f=l.slice(0,o),p=l.slice(o);var v=f.map(r);return h=e.slice(o),d=v.concat(h),{from:l,to:d,retained:f,exiting:p,entering:h}},t.subPath=function(t,e){var n=r.find(t,e),i=t.indexOf(n);return i===-1?void 0:t.slice(0,i+1)},t.paramValues=function(t){return t.reduce(function(t,e){return r.extend(t,e.paramValues)},{})},t}();e.PathFactory=u},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(22),a=function(){function t(e){if(e instanceof t){var n=e;this.state=n.state,this.paramSchema=n.paramSchema.slice(),this.paramValues=r.extend({},n.paramValues),this.resolvables=n.resolvables.slice(),this.views=n.views&&n.views.slice()}else{var i=e;this.state=i,this.paramSchema=i.parameters({inherit:!1}),this.paramValues={},this.resolvables=i.resolvables.map(function(t){return t.clone()})}}return t.prototype.applyRawParams=function(t){var e=function(e){return[e.id,e.value(t[e.id])]};return this.paramValues=this.paramSchema.reduce(function(t,n){return r.applyPairs(t,e(n))},{}),this},t.prototype.parameter=function(t){return r.find(this.paramSchema,i.propEq("id",t))},t.prototype.equals=function(t,e){var n=this;void 0===e&&(e=this.paramSchema.map(function(t){return t.id}));var i=function(e){return n.parameter(e).type.equals(n.paramValues[e],t.paramValues[e])};return this.state===t.state&&e.map(i).reduce(r.allTrueR,!0)},t.clone=function(e){return new t(e)},t.matching=function(t,e){for(var n=[],r=0;r<t.length&&r<e.length;r++){var i=t[r],a=e[r];if(i.state!==a.state)break;if(!o.Param.equals(i.paramSchema,i.paramValues,a.paramValues))break;n.push(i)}return n},t}();e.PathNode=a},function(t,e,n){"use strict";function r(t){return t=d(t)&&{value:t}||t,u.extend(t,{$$fn:c.isInjectable(t.value)?t.value:function(){return t.value}})}function i(t,e,n,r,i){if(t.type&&e&&"string"!==e.name)throw new Error("Param '"+r+"' has two type configurations.");return t.type&&e&&"string"===e.name&&i.type(t.type)?i.type(t.type):e?e:t.type?t.type instanceof p.ParamType?t.type:i.type(t.type):n===v.CONFIG?i.type("any"):i.type("string")}function o(t,e){var n=t.squash;if(!e||n===!1)return!1;if(!c.isDefined(n)||null==n)return f.matcherConfig.defaultSquashPolicy();if(n===!0||c.isString(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}function a(t,e,n,r){var i,o,a=[{from:"",to:n||e?void 0:""},{from:null,to:n||e?void 0:""}];return i=c.isArray(t.replace)?t.replace:[],c.isString(r)&&i.push({from:r,to:void 0}),o=u.map(i,s.prop("from")),u.filter(a,function(t){return o.indexOf(t.from)===-1}).concat(i)}var u=n(3),s=n(5),c=n(4),l=n(6),f=n(23),p=n(24),h=Object.prototype.hasOwnProperty,d=function(t){return 0===["value","type","squash","array","dynamic"].filter(h.bind(t||{})).length};!function(t){t[t.PATH=0]="PATH",t[t.SEARCH=1]="SEARCH",t[t.CONFIG=2]="CONFIG"}(e.DefType||(e.DefType={}));var v=e.DefType,g=function(){function t(t,e,n,s,l){function f(){var e={array:s===v.SEARCH&&"auto"},r=t.match(/\[\]$/)?{array:!0}:{};return u.extend(e,r,n).array}n=r(n),e=i(n,e,s,t,l);var p=f();e=p?e.$asArray(p,s===v.SEARCH):e;var h=void 0!==n.value,d=c.isDefined(n.dynamic)?!!n.dynamic:!!e.dynamic,g=o(n,h),m=a(n,p,h,g);u.extend(this,{id:t,type:e,location:s,squash:g,replace:m,isOptional:h,dynamic:d,config:n,array:p})}return t.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},t.prototype.value=function(t){var e=this,n=function(){if(!l.services.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=l.services.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return t},r=function(t){var n=u.map(u.filter(e.replace,s.propEq("from",t)),s.prop("to"));return n.length?n[0]:t};return t=r(t),c.isDefined(t)?this.type.$normalize(t):n()},t.prototype.isSearch=function(){return this.location===v.SEARCH},t.prototype.validates=function(t){if((!c.isDefined(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var n=this.type.encode(e);return!(c.isString(n)&&!this.type.pattern.exec(n))},t.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},t.fromConfig=function(e,n,r,i){return new t(e,n,r,v.CONFIG,i)},t.fromPath=function(e,n,r,i){return new t(e,n,r,v.PATH,i)},t.fromSearch=function(e,n,r,i){return new t(e,n,r,v.SEARCH,i)},t.values=function(t,e){return void 0===e&&(e={}),t.map(function(t){return[t.id,t.value(e[t.id])]}).reduce(u.applyPairs,{})},t.changed=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),t.filter(function(t){return!t.type.equals(e[t.id],n[t.id])})},t.equals=function(e,n,r){return void 0===n&&(n={}),void 0===r&&(r={}),0===t.changed(e,n,r).length},t.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(u.allTrueR,!0)},t}();e.Param=g},function(t,e,n){"use strict";var r=n(4),i=function(){function t(){this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1}return t.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=r.isDefined(t)?t:this._isCaseInsensitive},t.prototype.strictMode=function(t){return this._isStrictMode=r.isDefined(t)?t:this._isStrictMode},t.prototype.defaultSquashPolicy=function(t){if(r.isDefined(t)&&t!==!0&&t!==!1&&!r.isString(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=r.isDefined(t)?t:this._defaultSquashPolicy},t}();e.MatcherConfig=i,e.matcherConfig=new i},function(t,e,n){"use strict";function r(t,e){function n(t){return o.isArray(t)?t:o.isDefined(t)?[t]:[]}function r(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}function a(t,e){return function(a){if(o.isArray(a)&&0===a.length)return a;var u=n(a),s=i.map(u,t);return e===!0?0===i.filter(s,function(t){return!t}).length:r(s)}}function u(t){return function(e,r){var i=n(e),o=n(r);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}var s=this;["encode","decode","equals","$normalize"].forEach(function(e){var n=t[e].bind(t),r="equals"===e?u:a;s[e]=r(n)}),i.extend(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,is:a(t.is.bind(t),!0),$arrayMode:e})}var i=n(3),o=n(4),a=function(){function t(t){this.pattern=/.*/,i.extend(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new r(this,t)},t}();e.ParamType=a},function(t,e,n){"use strict";var r=n(26),i=n(29),o=n(30),a=n(29),u=n(31),s=n(38),c=n(39),l=n(44),f=n(45),p=function(){function t(){this.viewService=new s.ViewService,this.transitionService=new u.TransitionService(this),this.globals=new f.Globals(this.transitionService),this.urlMatcherFactory=new r.UrlMatcherFactory,this.urlRouterProvider=new i.UrlRouterProvider(this.urlMatcherFactory,this.globals.params),this.urlRouter=new a.UrlRouter(this.urlRouterProvider),this.stateRegistry=new c.StateRegistry(this.urlMatcherFactory,this.urlRouterProvider),this.stateProvider=new o.StateProvider(this.stateRegistry),this.stateService=new l.StateService(this),this.viewService.rootContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self}return t}();e.UIRouter=p},function(t,e,n){"use strict";function r(){return{strict:u.matcherConfig.strictMode(),caseInsensitive:u.matcherConfig.caseInsensitive()}}var i=n(3),o=n(4),a=n(27),u=n(23),s=n(22),c=n(28),l=function(){function t(){this.paramTypes=new c.ParamTypes,i.extend(this,{UrlMatcher:a.UrlMatcher,Param:s.Param})}return t.prototype.caseInsensitive=function(t){return u.matcherConfig.caseInsensitive(t)},t.prototype.strictMode=function(t){return u.matcherConfig.strictMode(t)},t.prototype.defaultSquashPolicy=function(t){return u.matcherConfig.defaultSquashPolicy(t)},t.prototype.compile=function(t,e){return new a.UrlMatcher(t,this.paramTypes,i.extend(r(),e))},t.prototype.isMatcher=function(t){if(!o.isObject(t))return!1;var e=!0;return i.forEach(a.UrlMatcher.prototype,function(n,r){o.isFunction(n)&&(e=e&&o.isDefined(t[r])&&o.isFunction(t[r]))}),e},t.prototype.type=function(t,e,n){var r=this.paramTypes.type(t,e,n);return o.isDefined(e)?this:r},t.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},t}();e.UrlMatcherFactory=l},function(t,e,n){"use strict";function r(t,e){var n=["",""],r=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return r;switch(e.squash){case!1:n=["(",")"+(e.isOptional?"?":"")];break;case!0:r=r.replace(/\/$/,""),n=["(?:/(",")|/)?"];break;default:n=["("+e.squash+"|",")?"]}return r+n[0]+e.type.pattern.source+n[1]}var i=n(3),o=n(5),a=n(4),u=n(22),s=n(4),c=n(22),l=n(3),f=n(3),p=function(t,e,n){return t[e]=t[e]||n()},h=function(){function t(e,n,a){var s=this;this.config=a,this._cache={path:[],pattern:null},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=e,this.config=i.defaults(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:i.identity});for(var c,l,f,p=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,d=0,v=[],g=function(n){if(!t.nameValidator.test(n))throw new Error("Invalid parameter name '"+n+"' in pattern '"+e+"'");if(i.find(s._params,o.propEq("id",n)))throw new Error("Duplicate parameter name '"+n+"' in pattern '"+e+"'")},m=function(t,r){var o=t[2]||t[3],a=r?t[4]:t[4]||("*"===t[1]?".*":null);return{id:o,regexp:a,cfg:s.config.params[o],segment:e.substring(d,t.index),type:a?n.type(a||"string")||i.inherit(n.type("string"),{pattern:new RegExp(a,s.config.caseInsensitive?"i":void 0)}):null}};(c=p.exec(e))&&(l=m(c,!1),!(l.segment.indexOf("?")>=0));)g(l.id),this._params.push(u.Param.fromPath(l.id,l.type,this.config.paramMap(l.cfg,!1),n)),this._segments.push(l.segment),v.push([l.segment,i.tail(this._params)]),d=p.lastIndex;f=e.substring(d);var $=f.indexOf("?");if($>=0){var y=f.substring($);if(f=f.substring(0,$),y.length>0)for(d=0;c=h.exec(y);)l=m(c,!0),g(l.id),this._params.push(u.Param.fromSearch(l.id,l.type,this.config.paramMap(l.cfg,!0),n)),d=p.lastIndex}this._segments.push(f),i.extend(this,{_compiled:v.map(function(t){return r.apply(null,t)}).concat(r(f)),prefix:this._segments[0]}),Object.freeze(this)}return t.prototype.append=function(t){return this._children.push(t),i.forEach(t._cache,function(e,n){return t._cache[n]=a.isArray(e)?[]:null}),t._cache.path=this._cache.path.concat(this),t},t.prototype.isRoot=function(){return 0===this._cache.path.length},t.prototype.toString=function(){return this.pattern},t.prototype.exec=function(t,e,n,r){function a(t){var e=function(t){return t.split("").reverse().join("")},n=function(t){return t.replace(/\\-/g,"-")},r=e(t).split(/-(?!\\)/),o=i.map(r,e);return i.map(o,n).reverse()}var u=this;void 0===e&&(e={}),void 0===r&&(r={});var c=p(this._cache,"pattern",function(){return new RegExp(["^",i.unnest(u._cache.path.concat(u).map(o.prop("_compiled"))).join(""),u.config.strict===!1?"/?":"","$"].join(""),u.config.caseInsensitive?"i":void 0)}).exec(t);if(!c)return null;var l=this.parameters(),f=l.filter(function(t){return!t.isSearch()}),h=l.filter(function(t){return t.isSearch()}),d=this._cache.path.concat(this).map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),v={};if(d!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var g=0;g<d;g++){for(var m=f[g],$=c[g+1],y=0;y<m.replace.length;y++)m.replace[y].from===$&&($=m.replace[y].to);$&&m.array===!0&&($=a($)),s.isDefined($)&&($=m.type.decode($)),v[m.id]=m.value($)}return h.forEach(function(t){for(var n=e[t.id],r=0;r<t.replace.length;r++)t.replace[r].from===n&&(n=t.replace[r].to);s.isDefined(n)&&(n=t.type.decode(n)),v[t.id]=t.value(n)}),n&&(v["#"]=n),v},t.prototype.parameters=function(t){return void 0===t&&(t={}),t.inherit===!1?this._params:i.unnest(this._cache.path.concat(this).map(o.prop("_params")))},t.prototype.parameter=function(t,e){void 0===e&&(e={});var n=i.tail(this._cache.path);return i.find(this._params,o.propEq("id",t))||e.inherit!==!1&&n&&n.parameter(t)||null},t.prototype.validates=function(t){var e=this,n=function(t,e){return!t||t.validates(e)};return i.pairs(t||{}).map(function(t){var r=t[0],i=t[1];return n(e.parameter(r),i)}).reduce(i.allTrueR,!0)},t.prototype.format=function(e){function n(t){var n=t.value(e[t.id]),r=t.isDefaultValue(n),i=!!r&&t.squash,o=t.type.encode(n);return{param:t,value:n,isDefaultValue:r,squash:i,encoded:o}}if(void 0===e&&(e={}),!this.validates(e))return null;var r=this._cache.path.slice().concat(this),o=r.map(t.pathSegmentsAndParams).reduce(l.unnestR,[]),u=r.map(t.queryParams).reduce(l.unnestR,[]),s=o.reduce(function(e,r){if(a.isString(r))return e+r;var o=n(r),u=o.squash,s=o.encoded,c=o.param;return u===!0?e.match(/\/$/)?e.slice(0,-1):e:a.isString(u)?e+u:u!==!1?e:null==s?e:a.isArray(s)?e+i.map(s,t.encodeDashes).join("-"):c.type.raw?e+s:e+encodeURIComponent(s)},""),c=u.map(function(t){var e=n(t),r=e.squash,o=e.encoded,u=e.isDefaultValue;if(!(null==o||u&&r!==!1)&&(a.isArray(o)||(o=[o]),0!==o.length))return t.type.raw||(o=i.map(o,encodeURIComponent)),o.map(function(e){return t.id+"="+e})}).filter(i.identity).reduce(l.unnestR,[]).join("&");return s+(c?"?"+c:"")+(e["#"]?"#"+e["#"]:"")},t.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},t.pathSegmentsAndParams=function(t){var e=t._segments,n=t._params.filter(function(t){return t.location===c.DefType.PATH});return f.arrayTuples(e,n.concat(void 0)).reduce(l.unnestR,[]).filter(function(t){return""!==t&&s.isDefined(t)})},t.queryParams=function(t){return t._params.filter(function(t){return t.location===c.DefType.SEARCH})},t.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,t}();e.UrlMatcher=h},function(t,e,n){"use strict";function r(t){return null!=t?t.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):t}function i(t){return null!=t?t.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):t}var o=n(3),a=n(4),u=n(5),s=n(6),c=n(24),l=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes={hash:{encode:r,decode:i,is:u.is(String),pattern:/.*/,equals:function(t,e){return t==e}},string:{encode:r,decode:i,is:u.is(String),pattern:/[^\/]*/},"int":{encode:r,decode:function(t){return parseInt(t,10)},is:function(t){return a.isDefined(t)&&this.decode(t.toString())===t},pattern:/-?\d+/},bool:{encode:function(t){return t&&1||0},decode:function(t){return 0!==parseInt(t,10)},is:u.is(Boolean),pattern:/0|1/},date:{encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(n,r){return n&&t[r]()===e[r]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:o.toJson,decode:o.fromJson,is:u.is(Object),equals:o.equals,pattern:/[^\/]*/},any:{encode:o.identity,decode:o.identity,equals:o.equals,pattern:/.*/}};var t=function(t,e){return new c.ParamType(o.extend({name:e},t))};this.types=o.inherit(o.map(this.defaultTypes,t),{})}return t.prototype.type=function(t,e,n){if(!a.isDefined(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new c.ParamType(o.extend({name:t},e)),n&&(this.typeQueue.push({name:t,def:n}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");o.extend(this.types[t.name],s.services.$injector.invoke(t.def))}},t}();e.ParamTypes=l},function(t,e,n){"use strict";function r(t){var e=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);return null!=e?e[1].replace(/\\(.)/g,"$1"):""}function i(t,e){return t.replace(/\$(\$|\d{1,2})/,function(t,n){return e["$"===n?0:Number(n)]})}function o(t,e,n,r){if(!r)return!1;var i=t.invoke(n,n,{$match:r,$stateParams:e});return!c.isDefined(i)||i}function a(t,e,n){var r=l.services.locationConfig.baseHref();return"/"===r?t:e?r.slice(0,-1)+t:n?r.slice(1)+t:t}function u(t,e,n){function r(t){var e=t(l.services.$injector,f);return!!e&&(c.isString(e)&&f.setUrl(e,!0),!0)}if(!n||!n.defaultPrevented){for(var i=t.length,o=0;o<i;o++)if(r(t[o]))return;e&&r(e)}}var s=n(3),c=n(4),l=n(6),f=l.services.location,p=function(){function t(t,e){this.rules=[],this.interceptDeferred=!1,this.$urlMatcherFactory=t,this.$stateParams=e}return t.prototype.rule=function(t){if(!c.isFunction(t))throw new Error("'rule' must be a function");return this.rules.push(t),this},t.prototype.removeRule=function(t){return this.rules.length!==s.removeFrom(this.rules,t).length},t.prototype.otherwise=function(t){if(!c.isFunction(t)&&!c.isString(t))throw new Error("'rule' must be a string or function");return this.otherwiseFn=c.isString(t)?function(){return t}:t,this},t.prototype.when=function(t,e,n){void 0===n&&(n=function(t){});var a,u=this,p=u.$urlMatcherFactory,h=u.$stateParams,d=c.isString(e);if(c.isString(t)&&(t=p.compile(t)),!d&&!c.isFunction(e)&&!c.isArray(e))throw new Error("invalid 'handler' in when()");var v={matcher:function(t,e){return d&&(a=p.compile(e),e=["$match",a.format.bind(a)]),s.extend(function(){return o(l.services.$injector,h,e,t.exec(f.path(),f.search(),f.hash()))},{prefix:c.isString(t.prefix)?t.prefix:""})},regex:function(t,e){if(t.global||t.sticky)throw new Error("when() RegExp must not be global or sticky");return d&&(a=e,e=["$match",function(t){return i(a,t)}]),s.extend(function(){return o(l.services.$injector,h,e,t.exec(f.path()))},{prefix:r(t)})}},g={matcher:p.isMatcher(t),regex:t instanceof RegExp};for(var m in g)if(g[m]){var $=v[m](t,e);return n($),this.rule($)}throw new Error("invalid 'what' in when()")},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}();e.UrlRouterProvider=p;
var h=function(){function t(e){this.urlRouterProvider=e,s.bindFunctions(t.prototype,this,this)}return t.prototype.sync=function(){u(this.urlRouterProvider.rules,this.urlRouterProvider.otherwiseFn)},t.prototype.listen=function(){var t=this;return this.listener=this.listener||f.onChange(function(e){return u(t.urlRouterProvider.rules,t.urlRouterProvider.otherwiseFn,e)})},t.prototype.update=function(t){return t?void(this.location=f.path()):void(f.path()!==this.location&&f.setUrl(this.location,!0))},t.prototype.push=function(t,e,n){var r=n&&!!n.replace;f.setUrl(t.format(e||{}),r)},t.prototype.href=function(t,e,n){if(!t.validates(e))return null;var r=t.format(e);n=n||{absolute:!1};var i=l.services.locationConfig,o=i.html5Mode();if(o||null===r||(r="#"+i.hashPrefix()+r),r=a(r,o,n.absolute),!n.absolute||!r)return r;var u=!o&&r?"/":"",s=i.port();return s=80===s||443===s?"":":"+s,[i.protocol(),"://",i.host(),s,u,r].join("")},t}();e.UrlRouter=h},function(t,e,n){"use strict";var r=n(4),i=n(3),o=function(){function t(e){this.stateRegistry=e,this.invalidCallbacks=[],i.bindFunctions(t.prototype,this,this)}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return r.isObject(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){this.invalidCallbacks.push(t)},t}();e.StateProvider=o},function(t,e,n){"use strict";var r=n(11),i=n(15),o=n(32),a=n(33),u=n(34),s=n(35),c=n(36),l=n(37);e.defaultTransOpts={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"};var f=function(){function t(t){this._router=t,this.$view=t.viewService,i.HookRegistry.mixin(new i.HookRegistry,this),this._deregisterHookFns={},this.registerTransitionHooks()}return t.prototype.registerTransitionHooks=function(){var t=this._deregisterHookFns;t.redirectTo=s.registerRedirectToHook(this),t.onExit=c.registerOnExitHook(this),t.onRetain=c.registerOnRetainHook(this),t.onEnter=c.registerOnEnterHook(this),t.eagerResolve=o.registerEagerResolvePath(this),t.lazyResolve=o.registerLazyResolveState(this),t.loadViews=a.registerLoadEnteringViews(this),t.activateViews=a.registerActivateViews(this),t.updateUrl=u.registerUpdateUrl(this),t.lazyLoad=l.registerLazyLoadHook(this)},t.prototype.onBefore=function(t,e,n){throw""},t.prototype.onStart=function(t,e,n){throw""},t.prototype.onExit=function(t,e,n){throw""},t.prototype.onRetain=function(t,e,n){throw""},t.prototype.onEnter=function(t,e,n){throw""},t.prototype.onFinish=function(t,e,n){throw""},t.prototype.onSuccess=function(t,e,n){throw""},t.prototype.onError=function(t,e,n){throw""},t.prototype.create=function(t,e){return new r.Transition(t,e,this._router)},t}();e.TransitionService=f},function(t,e,n){"use strict";var r=n(3),i=n(17),o=n(5),a=function(t){return new i.ResolveContext(t.treeChanges().to).resolvePath("EAGER",t).then(r.noop)};e.registerEagerResolvePath=function(t){return t.onStart({},a,{priority:1e3})};var u=function(t,e){return new i.ResolveContext(t.treeChanges().to).subContext(e).resolvePath("LAZY",t).then(r.noop)};e.registerLazyResolveState=function(t){return t.onEnter({entering:o.val(!0)},u,{priority:1e3})}},function(t,e,n){"use strict";var r=n(3),i=n(6),o=function(t){var e=t.views("entering");if(e.length)return i.services.$q.all(e.map(function(t){return t.load()})).then(r.noop)};e.registerLoadEnteringViews=function(t){return t.onStart({},o)};var a=function(t){var e=t.views("entering"),n=t.views("exiting");if(e.length||n.length){var r=t.router.viewService;n.forEach(function(t){return r.deactivateViewConfig(t)}),e.forEach(function(t){return r.activateViewConfig(t)}),r.sync()}};e.registerActivateViews=function(t){return t.onSuccess({},a)}},function(t,e){"use strict";var n=function(t){var e=t.options(),n=t.router.stateService,r=t.router.urlRouter;if("url"!==e.source&&e.location&&n.$current.navigable){var i={replace:"replace"===e.location};r.push(n.$current.navigable.url,n.params,i)}r.update(!0)};e.registerUpdateUrl=function(t){return t.onSuccess({},n,{priority:9999})}},function(t,e,n){"use strict";var r=n(4),i=n(6),o=n(14),a=function(t){function e(e){var n=t.router.stateService;return e instanceof o.TargetState?e:r.isString(e)?n.target(e,t.params(),t.options()):e.state||e.params?n.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}var n=t.to().redirectTo;if(n)return r.isFunction(n)?i.services.$q.when(n(t)).then(e):e(n)};e.registerRedirectToHook=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},a)}},function(t,e){"use strict";function n(t){return function(e,n){var r=n[t];return r(e,n)}}var r=n("onExit");e.registerOnExitHook=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},r)};var i=n("onRetain");e.registerOnRetainHook=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},i)};var o=n("onEnter");e.registerOnEnterHook=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},o)}},function(t,e,n){"use strict";var r=n(6),i=function(t){function e(){if("url"===t.options().source){var e=r.services.location,n=e.path(),i=e.search(),a=e.hash(),u=function(t){return[t,t.url&&t.url.exec(n,i,a)]},s=o.get().map(function(t){return t.$$state()}).map(u).filter(function(t){var e=(t[0],t[1]);return!!e});if(s.length){var c=s[0],l=c[0],f=c[1];return t.router.stateService.target(l,f,t.options())}t.router.urlRouter.sync()}var p=t.targetState();return t.router.stateService.target(p.identifier(),p.params(),p.options())}function n(e){o.deregister(t.$to()),e&&Array.isArray(e.states)&&e.states.forEach(function(t){return o.register(t)})}var i=t.to(),o=t.router.stateRegistry,a=i.lazyLoad,u=a._promise;if(!u){u=a._promise=a(t).then(n);var s=function(){return delete a._promise};u["catch"](s,s)}return u.then(e)};e.registerLazyLoadHook=function(t){return t.onBefore({to:function(t){return!!t.lazyLoad}},i)}},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(4),a=n(12),u=function(){function t(){var t=this;this.uiViews=[],this.viewConfigs=[],this._viewConfigFactories={},this.sync=function(){function e(t){return t.fqn.split(".").length}function n(t){for(var e=t.viewDecl.$context,n=0;++n&&e.parent;)e=e.parent;return n}var o=t.uiViews.map(function(t){return[t.fqn,t]}).reduce(r.applyPairs,{}),a=function(t){return function(e){if(t.$type!==e.viewDecl.$type)return!1;var n=e.viewDecl,i=n.$uiViewName.split("."),a=t.fqn.split(".");if(!r.equals(i,a.slice(0-i.length)))return!1;var u=1-i.length||void 0,s=a.slice(0,u).join("."),c=o[s].creationContext;return n.$uiViewContextAnchor===(c&&c.name)}},u=i.curry(function(t,e,n,r){return e*(t(n)-t(r))}),s=function(e){var r=t.viewConfigs.filter(a(e));return r.length>1&&r.sort(u(n,-1)),[e,r[0]]},c=function(e){var n=e[0],r=e[1];t.uiViews.indexOf(n)!==-1&&n.configUpdated(r)};t.uiViews.sort(u(e,1)).map(s).forEach(c)}}return t.prototype.rootContext=function(t){return this._rootContext=t||this._rootContext},t.prototype.viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var n=this._viewConfigFactories[e.$type];if(!n)throw new Error("ViewService: No view config factory registered for type "+e.$type);var r=n(t,e);return o.isArray(r)?r:[r]},t.prototype.deactivateViewConfig=function(t){a.trace.traceViewServiceEvent("<- Removing",t),r.removeFrom(this.viewConfigs,t)},t.prototype.activateViewConfig=function(t){a.trace.traceViewServiceEvent("-> Registering",t),this.viewConfigs.push(t)},t.prototype.registerUIView=function(t){a.trace.traceViewServiceUIViewEvent("-> Registering",t);var e=this.uiViews,n=function(e){return e.fqn===t.fqn};return e.filter(n).length&&a.trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){var n=e.indexOf(t);return n<=0?void a.trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t):(a.trace.traceViewServiceUIViewEvent("<- Deregistering",t),void r.removeFrom(e)(t))}},t.prototype.available=function(){return this.uiViews.map(i.prop("fqn"))},t.prototype.active=function(){return this.uiViews.filter(i.prop("$config")).map(i.prop("name"))},t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var n=e.split("@"),r=n[0]||"$default",i=o.isString(n[1])?n[1]:"^",a=/^(\^(?:\.\^)*)\.(.*$)/.exec(r);a&&(i=a[1],r=a[2]),"!"===r.charAt(0)&&(r=r.substr(1),i="");var u=/^(\^(?:\.\^)*)$/;if(u.exec(i)){var s=i.split(".").reduce(function(t,e){return t.parent},t);i=s.name}return{uiViewName:r,uiViewContextAnchor:i}},t}();e.ViewService=u},function(t,e,n){"use strict";var r=n(40),i=n(41),o=n(42),a=n(3),u=function(){function t(t,e){this.urlRouterProvider=e,this.states={},this.listeners=[],this.matcher=new r.StateMatcher(this.states),this.builder=new i.StateBuilder(this.matcher,t),this.stateQueue=new o.StateQueueManager(this.states,this.builder,e,this.listeners);var n={name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},"abstract":!0},a=this._root=this.stateQueue.register(n);a.navigable=null}return t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){a.removeFrom(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,n=this.get().map(function(t){return t.$$state()}),r=function(t){var e=n.filter(function(e){return t.indexOf(e.parent)!==-1});return 0===e.length?e:e.concat(r(e))},i=r([t]),o=[t].concat(i).reverse();return o.forEach(function(t){e.urlRouterProvider.removeRule(t._urlRule),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var n=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",n.map(function(t){return t.self}))}),n},t.prototype.get=function(t,e){var n=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return n.states[t].self});var r=this.matcher.find(t,e);return r&&r.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}();e.StateRegistry=u},function(t,e,n){"use strict";var r=n(4),i=n(7),o=n(3),a=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return t=t||"",0===t.indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e){if(t||""===t){var n=r.isString(t),a=n?t:t.name;this.isRelative(a)&&(a=this.resolvePath(a,e));var u=this._states[a];if(u&&(n||!(n||u!==t&&u.self!==t)))return u;if(n){var s=o.values(this._states).map(function(t){return{state:t,glob:new i.Glob(t.name)}}).filter(function(t){var e=(t.state,t.glob);return e.matches(a)}).map(function(t){var e=t.state;t.glob;return e});return s.length>1&&console.log("stateMatcher.find: Found multiple matches for "+a+" using glob: ",s.map(function(t){return t.name})),s[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var n=this.find(e),r=t.split("."),i=0,o=r.length,a=n;i<o;i++)if(""!==r[i]||0!==i){if("^"!==r[i])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+n.name+"'");a=a.parent}else a=n;var u=r.slice(i).join(".");return a.name+(a.name&&u?".":"")+u},t}();e.StateMatcher=a},function(t,e,n){"use strict";function r(t){return t.lazyLoad&&(t.name=t.self.name+".**"),t.name}function i(t){return t.self.$$state=function(){return t},t.self}function o(t){return t.parent&&t.parent.data&&(t.data=t.self.data=c.inherit(t.parent.data,t.data)),t.data}function a(t){return t.parent?t.parent.path.concat(t):[t]}function u(t){var e=t.parent?c.extend({},t.parent.includes):{};return e[t.name]=!0,e}function s(t){var e=function(t,e){return Object.keys(t||{}).map(function(n){return{token:n,val:t[n],deps:void 0,policy:e[n]}})},n=function(t){return t.$inject||v.services.$injector.annotate(t,v.services.$injector.strictDi)},r=function(t){return!(!t.token||!t.resolveFn)},i=function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},o=function(t){return!!(t&&t.val&&(l.isString(t.val)||l.isArray(t.val)||l.isFunction(t.val)))},a=function(t){return t.provide||t.token},u=p.pattern([[p.prop("resolveFn"),function(t){return new d.Resolvable(a(t),t.resolveFn,t.deps,t.policy)}],[p.prop("useFactory"),function(t){return new d.Resolvable(a(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[p.prop("useClass"),function(t){return new d.Resolvable(a(t),function(){return new t.useClass},[],t.policy)}],[p.prop("useValue"),function(t){return new d.Resolvable(a(t),function(){return t.useValue},[],t.policy,t.useValue)}],[p.prop("useExisting"),function(t){return new d.Resolvable(a(t),c.identity,[t.useExisting],t.policy)}]]),s=p.pattern([[p.pipe(p.prop("val"),l.isString),function(t){return new d.Resolvable(t.token,c.identity,[t.val],t.policy)}],[p.pipe(p.prop("val"),l.isArray),function(t){return new d.Resolvable(t.token,c.tail(t.val),t.val.slice(0,-1),t.policy)}],[p.pipe(p.prop("val"),l.isFunction),function(t){return new d.Resolvable(t.token,t.val,n(t.val),t.policy)}]]),h=p.pattern([[p.is(d.Resolvable),function(t){return t}],[r,u],[i,u],[o,s],[p.val(!0),function(t){throw new Error("Invalid resolve value: "+f.stringify(t))}]]),g=t.resolve,m=l.isArray(g)?g:e(g,t.resolvePolicy||{});return m.map(h)}var c=n(3),l=n(4),f=n(9),p=n(5),h=n(22),d=n(19),v=n(6),g=function(t){if(!l.isString(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}},m=function(t,e){return function(n){var r=n;r&&r.url&&r.lazyLoad&&(r.url+="{remainder:any}");var i=g(r.url),o=n.parent,a=i?t.compile(i.val,{params:n.params||{},paramMap:function(t,e){return r.reloadOnSearch===!1&&e&&(t=c.extend(t||{},{dynamic:!0})),t}}):r.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+n+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},$=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},y=function(t){return function(e){var n=function(e,n){return h.Param.fromConfig(n,null,e,t)},r=e.url&&e.url.parameters({inherit:!1})||[],i=c.values(c.mapObj(c.omit(e.params||{},r.map(p.prop("id"))),n));return r.concat(i).map(function(t){return[t.id,t]}).reduce(c.applyPairs,{})}};e.resolvablesBuilder=s;var w=function(){function t(t,e){function n(e){return f(e)?null:t.find(c.parentName(e))||l()}this.matcher=t;var c=this,l=function(){return t.find("")},f=function(t){return""===t.name};this.builders={name:[r],self:[i],parent:[n],data:[o],url:[m(e,l)],navigable:[$(f)],params:[y(e.paramTypes)],views:[],path:[a],includes:[u],resolvables:[s]}}return t.prototype.builder=function(t,e){var n=this.builders,r=n[t]||[];return l.isString(t)&&!l.isDefined(e)?r.length>1?r:r[0]:l.isString(t)&&l.isFunction(e)?(n[t]=r,n[t].push(e),function(){return n[t].splice(n[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this,n=e.matcher,r=e.builders,i=this.parentName(t);if(i&&!n.find(i))return null;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o].reduce(function(t,e){return function(n){return e(n,t)}},c.noop);t[o]=a(t)}return t},t.prototype.parentName=function(t){var e=t.name||"";return e.indexOf(".")!==-1?e.substring(0,e.lastIndexOf(".")):t.parent?l.isString(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(e.indexOf(".")!==-1||!t.parent)return e;var n=l.isString(t.parent)?t.parent:t.parent.name;return n?n+"."+e:e},t}();e.StateBuilder=w},function(t,e,n){"use strict";var r=n(3),i=n(4),o=n(43),a=function(){function t(t,e,n,r){this.states=t,this.builder=e,this.$urlRouterProvider=n,this.listeners=r,this.queue=[]}return t.prototype.register=function(t){var e=this,n=e.states,a=e.queue,u=e.$state,s=r.inherit(new o.State,r.extend({},t,{self:t,resolve:t.resolve||[],toString:function(){return t.name}}));if(!i.isString(s.name))throw new Error("State must have a valid name");if(n.hasOwnProperty(s.name)||r.pluck(a,"name").indexOf(s.name)!==-1)throw new Error("State '"+s.name+"' is already defined");return a.push(s),this.$state&&this.flush(u),s},t.prototype.flush=function(t){for(var e=this,n=e.queue,r=e.states,i=e.builder,o=[],a=[],u={};n.length>0;){var s=n.shift(),c=i.build(s),l=a.indexOf(s);if(c){if(r.hasOwnProperty(s.name))throw new Error("State '"+name+"' is already defined");r[s.name]=s,this.attachRoute(t,s),l>=0&&a.splice(l,1),o.push(s)}else{var f=u[s.name];if(u[s.name]=n.length,l>=0&&f===n.length)return n.push(s),r;l<0&&a.push(s),n.push(s)}}return o.length&&this.listeners.forEach(function(t){return t("registered",o.map(function(t){return t.self}))}),r},t.prototype.autoFlush=function(t){this.$state=t,this.flush(t)},t.prototype.attachRoute=function(t,e){var n=this.$urlRouterProvider;!e["abstract"]&&e.url&&n.when(e.url,["$match","$stateParams",function(n,i){t.$current.navigable===e&&r.equalForKeys(n,i)||t.transitionTo(e,n,{inherit:!0,source:"url"})}],function(t){return e._urlRule=t})},t}();e.StateQueueManager=a},function(t,e,n){"use strict";var r=n(3),i=n(5),o=function(){function t(t){r.extend(this,t)}return t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){t=r.defaults(t,{inherit:!0});var e=t.inherit&&this.parent&&this.parent.parameters()||[];return e.concat(r.values(this.params))},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||r.find(r.values(this.params),i.propEq("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t}();e.State=o},function(t,e,n){"use strict";var r=n(3),i=n(4),o=n(8),a=n(6),u=n(20),s=n(21),c=n(31),l=n(10),f=n(14),p=n(22),h=n(7),d=n(3),v=n(3),g=function(){function t(e){this.router=e,this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof l.Rejection?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var n=["current","$current","params","transition"],r=Object.keys(t.prototype).filter(function(t){return n.indexOf(t)===-1});v.bindFunctions(t.prototype,this,this,r)}return Object.defineProperty(t.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),t.prototype._handleInvalidTargetState=function(t,e){function n(){var t=h.dequeue();return void 0===t?l.Rejection.invalid(e.error()).toPromise():g(t).then(m).then(function(t){return t||n()})}var r=this,i=this.router.globals,s=function(){return i.transitionHistory.peekTail()},c=s(),p=u.PathFactory.makeTargetState(t),h=new o.Queue(this.router.stateProvider.invalidCallbacks.slice()),d=a.services.$q,v=a.services.$injector,g=function(t){return d.when(v.invoke(t,null,{$to$:e,$from$:p}))},m=function(t){if(t instanceof f.TargetState){var e=t;return e=r.target(e.identifier(),e.params(),e.options()),e.valid()?s()!==c?l.Rejection.superseded().toPromise():r.transitionTo(e.identifier(),e.params(),e.options()):l.Rejection.invalid(e.error()).toPromise()}};return n()},t.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!i.isDefined(t)||t,inherit:!1,notify:!1})},t.prototype.go=function(t,e,n){var i={relative:this.$current,inherit:!0},o=r.defaults(n,i,c.defaultTransOpts);return this.transitionTo(t,e,o)},t.prototype.target=function(t,e,n){if(void 0===n&&(n={}),i.isObject(n.reload)&&!n.reload.name)throw new Error("Invalid reload state object");var r=this.router.stateRegistry;if(n.reloadState=n.reload===!0?r.root():r.matcher.find(n.reload,n.relative),n.reload&&!n.reloadState)throw new Error("No such reload state '"+(i.isString(n.reload)?n.reload:n.reload.name)+"'");var o=r.matcher.find(t,n.relative);return new f.TargetState(t,o,e,n)},t.prototype.transitionTo=function(t,e,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o=this.router,u=o.globals,p=u.transitionHistory;n=r.defaults(n,c.defaultTransOpts),n=r.extend(n,{current:p.peekTail.bind(p)});var h=this.target(t,e,n),d=u.successfulTransitions.peekTail(),v=function(){return[new s.PathNode(i.router.stateRegistry.root())]},g=d?d.treeChanges().to:v();if(!h.exists())return this._handleInvalidTargetState(g,h);if(!h.valid())return r.silentRejection(h.error());var m=function(t){return function(e){if(e instanceof l.Rejection){if(e.type===l.RejectType.IGNORED)return o.urlRouter.update(),a.services.$q.when(u.current);if(e.type===l.RejectType.SUPERSEDED&&e.redirected&&e.detail instanceof f.TargetState){var n=t.redirect(e.detail);return n.run()["catch"](m(n))}e.type===l.RejectType.ABORTED&&o.urlRouter.update()}var r=i.defaultErrorHandler();return r(e),a.services.$q.reject(e)}},$=this.router.transitionService.create(g,h),y=$.run()["catch"](m($));return r.silenceUncaughtInPromise(y),r.extend(y,{transition:$})},t.prototype.is=function(t,e,n){n=r.defaults(n,{relative:this.$current});var o=this.router.stateRegistry.matcher.find(t,n.relative);if(i.isDefined(o))return this.$current===o&&(!i.isDefined(e)||null===e||p.Param.equals(o.parameters(),this.params,e))},t.prototype.includes=function(t,e,n){n=r.defaults(n,{relative:this.$current});var o=i.isString(t)&&h.Glob.fromString(t);if(o){if(!o.matches(this.$current.name))return!1;t=this.$current.name}var a=this.router.stateRegistry.matcher.find(t,n.relative),u=this.$current.includes;if(i.isDefined(a))return!!i.isDefined(u[a.name])&&(!e||d.equalForKeys(p.Param.values(a.parameters(),e),this.params,Object.keys(e)))},t.prototype.href=function(t,e,n){var o={lossy:!0,inherit:!0,absolute:!1,relative:this.$current};n=r.defaults(n,o),e=e||{};var a=this.router.stateRegistry.matcher.find(t,n.relative);if(!i.isDefined(a))return null;n.inherit&&(e=this.params.$inherit(e,this.$current,a));var u=a&&n.lossy?a.navigable:a;return u&&void 0!==u.url&&null!==u.url?this.router.urlRouter.href(u.url,p.Param.values(a.parameters(),e),{absolute:n.absolute}):null},t.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},t.prototype.get=function(t,e){var n=this.router.stateRegistry;return 0===arguments.length?n.get():n.get(t,e||this.$current)},t}();e.StateService=g},function(t,e,n){"use strict";var r=n(46),i=n(8),o=n(3),a=function(){function t(t){var e=this;this.params=new r.StateParams,this.transitionHistory=new i.Queue([],1),this.successfulTransitions=new i.Queue([],1);var n=function(t){e.transition=t,e.transitionHistory.enqueue(t);var n=function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,o.copy(t.params(),e.params)};t.onSuccess({},n,{priority:1e4});var r=function(){e.transition===t&&(e.transition=null)};t.promise.then(r,r)};t.onBefore({},n)}return t}();e.Globals=a},function(t,e,n){"use strict";var r=n(3),i=function(){function t(t){void 0===t&&(t={}),r.extend(this,t)}return t.prototype.$inherit=function(t,e,n){var i,o=r.ancestors(e,n),a={},u=[];for(var s in o)if(o[s]&&o[s].params&&(i=Object.keys(o[s].params),i.length))for(var c in i)u.indexOf(i[c])>=0||(u.push(i[c]),a[i[c]]=this[i[c]]);return r.extend({},a,t)},t}();e.StateParams=i},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(22)),r(n(28)),r(n(46)),r(n(24))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(21)),r(n(20))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(18)),r(n(19)),r(n(17))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(30)),r(n(41)),r(n(43)),r(n(40)),r(n(42)),r(n(39)),r(n(44)),r(n(14))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(16)),r(n(15)),r(n(10)),r(n(11)),r(n(13)),r(n(31))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(27)),r(n(23)),r(n(26)),r(n(29))},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(38))},function(t,e,n){"use strict";function r(t){var e=f.services.$injector,n=e.get("$controller"),r=e.instantiate;try{var i;return e.instantiate=function(t){e.instantiate=r,i=e.annotate(t)},n(t,{$scope:{}}),i}finally{e.instantiate=r}}function i(t){function e(e,r,i,o,a,u){return o.$on("$locationChangeSuccess",function(t){return n.forEach(function(e){return e(t)})}),f.services.locationConfig.html5Mode=function(){var e=t.html5Mode();return e=d.isObject(e)?e.enabled:e,e&&i.history},f.services.location.setUrl=function(t,n){void 0===n&&(n=!1),e.url(t),n&&e.replace()},f.services.template.get=function(t){return a.get(t,{cache:u,headers:{Accept:"text/html"}}).then(h.prop("data"))},p.bindFunctions(e,f.services.location,e,["replace","url","path","search","hash"]),p.bindFunctions(e,f.services.locationConfig,e,["port","protocol","host"]),p.bindFunctions(r,f.services.locationConfig,r,["baseHref"]),w}w=new l.UIRouter,w.stateRegistry.decorator("views",m.ng1ViewsBuilder),w.stateRegistry.decorator("onExit",y.getStateHookBuilder("onExit")),w.stateRegistry.decorator("onRetain",y.getStateHookBuilder("onRetain")),w.stateRegistry.decorator("onEnter",y.getStateHookBuilder("onEnter")),w.viewService.viewConfigFactory("ng1",m.ng1ViewConfigFactory),p.bindFunctions(t,f.services.locationConfig,t,["hashPrefix"]);var n=[];f.services.location.onChange=function(t){return n.push(t),function(){return p.removeFrom(n)(t)}},this.$get=e,e.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"]}function o(t,e){f.services.$injector=t,f.services.$q=e}function a(){return w.urlRouterProvider.$get=function(){return w.urlRouter.update(!0),this.interceptDeferred||w.urlRouter.listen(),w.urlRouter},w.urlRouterProvider}function u(){return w.stateProvider.$get=function(){return w.stateRegistry.stateQueue.autoFlush(w.stateService),w.stateService},w.stateProvider}function s(){return w.transitionService.$get=function(){return w.transitionService},w.transitionService}function c(t){t.$watch(function(){g.trace.approximateDigests++})}var l=n(25),f=n(6),p=n(3),h=n(5),d=n(4),v=n(55),g=n(12),m=n(56),$=n(57),y=n(58);angular.module("ui.router.angular1",[]);angular.module("ui.router.util",["ng","ui.router.init"]),angular.module("ui.router.router",["ui.router.util"]),angular.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),angular.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),angular.module("ui.router.compat",["ui.router"]),e.annotateController=r;var w=null;i.$inject=["$locationProvider"],angular.module("ui.router.init",[]).provider("$uiRouter",i),o.$inject=["$injector","$q"],angular.module("ui.router.init").run(o),angular.module("ui.router.init").run(["$uiRouter",function(t){}]),angular.module("ui.router.util").provider("$urlMatcherFactory",["$uiRouterProvider",function(){return w.urlMatcherFactory}]),angular.module("ui.router.util").run(["$urlMatcherFactory",function(t){}]),angular.module("ui.router.router").provider("$urlRouter",["$uiRouterProvider",a]),angular.module("ui.router.router").run(["$urlRouter",function(t){}]),angular.module("ui.router.state").provider("$state",["$uiRouterProvider",u]),angular.module("ui.router.state").run(["$state",function(t){}]),angular.module("ui.router.state").factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),angular.module("ui.router.state").provider("$transitions",["$uiRouterProvider",s]),angular.module("ui.router.util").factory("$templateFactory",["$uiRouter",function(){return new $.TemplateFactory}]),angular.module("ui.router").factory("$view",function(){return w.viewService}),angular.module("ui.router").factory("$resolve",v.resolveFactory),angular.module("ui.router").service("$trace",function(){return g.trace}),c.$inject=["$rootScope"],e.watchDigests=c,angular.module("ui.router").run(c),e.getLocals=function(t){var e=t.getTokens().filter(d.isString),n=e.map(function(e){return[e,t.getResolvable(e).data]});return n.reduce(p.applyPairs,{})}},function(t,e,n){"use strict";var r=n(43),i=n(21),o=n(17),a=n(3),u=n(41),s={resolve:function(t,e,n){void 0===e&&(e={});var s=new i.PathNode(new r.State({params:{},resolvables:[]})),c=new i.PathNode(new r.State({params:{},resolvables:[]})),l=new o.ResolveContext([s,c]);l.addResolvables(u.resolvablesBuilder({resolve:t}),c.state);var f=function(t){var n=function(t){return u.resolvablesBuilder({resolve:a.mapObj(t,function(t){return function(){return t}})})};l.addResolvables(n(t),s.state),l.addResolvables(n(e),c.state);var r=function(t,e){return t[e.token]=e.value,t};return l.resolvePath().then(function(t){return t.reduce(r,{})})};return n?n.then(f):f({})}};e.resolveFactory=function(){return s}},function(t,e,n){"use strict";function r(t){var e=["templateProvider","templateUrl","template","notify","async"],n=["controller","controllerProvider","controllerAs","resolveAs"],r=["component","bindings"],c=e.concat(n),l=r.concat(c),f={},p=t.views||{$default:o.pick(t,l)};return o.forEach(p,function(e,n){if(n=n||"$default",s.isString(e)&&(e={component:e}),Object.keys(e).length){if(e.component){if(c.map(function(t){return s.isDefined(e[t])}).reduce(o.anyTrueR,!1))throw new Error("Cannot combine: "+r.join("|")+" with: "+c.join("|")+" in stateview: 'name@"+t.name+"'");e.templateProvider=["$injector",function(t){var n=function(t){return e.bindings&&e.bindings[t]||t},r=angular.version.minor>=3?"::":"",o=function(t){var e=a.kebobString(t.name),i=n(t.name);return"@"===t.type?e+"='{{"+r+"$resolve."+i+"}}'":e+"='"+r+"$resolve."+i+"'"},u=i(t,e.component).map(o).join(" "),s=a.kebobString(e.component);return"<"+s+" "+u+"></"+s+">"}]}e.resolveAs=e.resolveAs||"$resolve",e.$type="ng1",e.$context=t,e.$name=n;var l=u.ViewService.normalizeUIViewTarget(e.$context,e.$name);e.$uiViewName=l.uiViewName,e.$uiViewContextAnchor=l.uiViewContextAnchor,f[n]=e}}),f}function i(t,e){var n=t.get(e+"Directive");if(!n||!n.length)throw new Error("Unable to find component named '"+e+"'");return n.map(v).reduce(o.unnestR,[])}var o=n(3),a=n(9),u=n(38),s=n(4),c=n(6),l=n(12),f=n(57),p=n(17),h=n(19);e.ng1ViewConfigFactory=function(t,e){return[new m(t,e)]},e.ng1ViewsBuilder=r;var d=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@])[?]?(.*)/.exec(t[e])]}).filter(function(t){return s.isDefined(t)&&s.isDefined(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},v=function(t){return d(s.isObject(t.bindToController)?t.bindToController:t.scope)},g=0,m=function(){function t(t,e){this.path=t,this.viewDecl=e,this.$id=g++,this.loaded=!1}return t.prototype.load=function(){var t=this,e=c.services.$q;if(!this.hasTemplate())throw new Error("No template configuration specified for '"+this.viewDecl.$uiViewName+"@"+this.viewDecl.$uiViewContextAnchor+"'");var n=new p.ResolveContext(this.path),r=this.path.reduce(function(t,e){return o.extend(t,e.paramValues)},{}),i={template:e.when(this.getTemplate(r,new f.TemplateFactory,n)),controller:e.when(this.getController(n))};return e.all(i).then(function(e){return l.trace.traceViewServiceEvent("Loaded",t),t.controller=e.controller,t.template=e.template,t})},t.prototype.hasTemplate=function(){return!!(this.viewDecl.template||this.viewDecl.templateUrl||this.viewDecl.templateProvider)},t.prototype.getTemplate=function(t,e,n){return e.fromConfig(this.viewDecl,t,n)},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!s.isInjectable(e))return this.viewDecl.controller;
var n=c.services.$injector.annotate(e),r=s.isArray(e)?o.tail(e):e,i=new h.Resolvable("",r,n);return i.get(t)},t}();e.Ng1ViewConfig=m},function(t,e,n){"use strict";var r=n(4),i=n(6),o=n(3),a=n(19),u=function(){function t(){}return t.prototype.fromConfig=function(t,e,n){return r.isDefined(t.template)?this.fromString(t.template,e):r.isDefined(t.templateUrl)?this.fromUrl(t.templateUrl,e):r.isDefined(t.templateProvider)?this.fromProvider(t.templateProvider,e,n):null},t.prototype.fromString=function(t,e){return r.isFunction(t)?t(e):t},t.prototype.fromUrl=function(t,e){return r.isFunction(t)&&(t=t(e)),null==t?null:i.services.template.get(t)},t.prototype.fromProvider=function(t,e,n){var u=i.services.$injector.annotate(t),s=r.isArray(t)?o.tail(t):t,c=new a.Resolvable("",s,u);return c.get(n)},t}();e.TemplateFactory=u},function(t,e,n){"use strict";var r=n(6),i=n(54),o=n(17),a=n(3);e.getStateHookBuilder=function(t){return function(e,n){function u(t,e){var n=new o.ResolveContext(t.treeChanges().to);return r.services.$injector.invoke(s,this,a.extend({$state$:e},i.getLocals(n)))}var s=e[t];return s?u:void 0}}},function(t,e,n){"use strict";function r(t,e){var n,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t=e+"("+r[1]+")"),n=t.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!n||4!==n.length)throw new Error("Invalid state ref '"+t+"'");return{state:n[1],paramExpr:n[3]||null}}function i(t){var e=t.parent().inheritedData("$uiView"),n=l.parse("$cfg.path")(e);return n?s.tail(n).state.name:void 0}function o(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),n="FORM"===t[0].nodeName;return{attr:n?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!n}}function a(t,e,n,r,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=n(function(){e.go(u.state,u.params,u.options)});o.preventDefault(),o.stopPropagation();var c=r.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&n.cancel(s)}}}}function u(t,e){return{relative:i(t)||e.$current,inherit:!0,source:"sref"}}var s=n(3),c=n(4),l=n(5),f=["$state","$timeout",function(t,e){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,c,l){var f,p=r(c.uiSref,t.current.name),h={state:p.state,href:null,params:null,options:null},d=o(i),v=l[1]||l[0],g=null;h.options=s.extend(u(i,t),c.uiSrefOpts?n.$eval(c.uiSrefOpts):{});var m=function(e){e&&(h.params=angular.copy(e)),h.href=t.href(p.state,h.params,h.options),g&&g(),v&&(g=v.$$addStateInfo(p.state,h.params)),null!==h.href&&c.$set(d.attr,h.href)};p.paramExpr&&(n.$watch(p.paramExpr,function(t){t!==h.params&&m(t)},!0),h.params=angular.copy(n.$eval(p.paramExpr))),m(),d.clickable&&(f=a(i,t,e,d,function(){return h}),i.bind("click",f),n.$on("$destroy",function(){i.unbind("click",f)}))}}}],p=["$state","$timeout",function(t,e){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,r,i,u){function s(e){d.state=e[0],d.params=e[1],d.options=e[2],d.href=t.href(d.state,d.params,d.options),v&&v(),f&&(v=f.$$addStateInfo(d.state,d.params)),d.href&&i.$set(l.attr,d.href)}var c,l=o(r),f=u[1]||u[0],p=[i.uiState,i.uiStateParams||null,i.uiStateOpts||null],h="["+p.map(function(t){return t||"null"}).join(", ")+"]",d={state:null,params:null,options:null,href:null},v=null;n.$watch(h,s,!0),s(n.$eval(h)),l.clickable&&(c=a(r,t,e,l,function(){return d}),r.bind("click",c),n.$on("$destroy",function(){r.unbind("click",c)}))}}}],h=["$state","$stateParams","$interpolate","$transitions","$uiRouter",function(t,e,n,o,a){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(e,u,l,f){function p(t){t.promise.then(v)}function h(e,n,r){var o=t.get(e,i(u)),a=d(e,n),s={state:o||{name:e},params:n,hash:a};return _.push(s),x[a]=r,function(){var t=_.indexOf(s);t!==-1&&_.splice(t,1)}}function d(t,n){if(!c.isString(t))throw new Error("state should be a string");return c.isObject(n)?t+s.toJson(n):(n=e.$eval(n),c.isObject(n)?t+s.toJson(n):t)}function v(){for(var t=0;t<_.length;t++)$(_[t].state,_[t].params)?g(u,x[_[t].hash]):m(u,x[_[t].hash]),y(_[t].state,_[t].params)?g(u,w):m(u,w)}function g(t,e){f(function(){t.addClass(e)})}function m(t,e){t.removeClass(e)}function $(e,n){return t.includes(e.name,n)}function y(e,n){return t.is(e.name,n)}var w,b,_=[],x={};w=n(l.uiSrefActiveEq||"",!1)(e);try{b=e.$eval(l.uiSrefActive)}catch(S){}b=b||n(l.uiSrefActive||"",!1)(e),c.isObject(b)&&s.forEach(b,function(n,i){if(c.isString(n)){var o=r(n,t.current.name);h(o.state,e.$eval(o.paramExpr),i)}}),this.$$addStateInfo=function(t,e){if(!(c.isObject(b)&&_.length>0)){var n=h(t,e,b);return v(),n}},e.$on("$stateChangeSuccess",v),e.$on("$destroy",o.onStart({},p)),a.globals.transition&&p(a.globals.transition),v()}]}}];angular.module("ui.router.state").directive("uiSref",f).directive("uiSrefActive",h).directive("uiSrefActiveEq",h).directive("uiState",p)},function(t,e){"use strict";function n(t){var e=function(e,n,r){return t.is(e,n,r)};return e.$stateful=!0,e}function r(t){var e=function(e,n,r){return t.includes(e,n,r)};return e.$stateful=!0,e}n.$inject=["$state"],e.$IsStateFilter=n,r.$inject=["$state"],e.$IncludedByStateFilter=r,angular.module("ui.router.state").filter("isState",n).filter("includedByState",r)},function(t,e,n){"use strict";function r(t,e,n,r,s){var h=c.parse("viewDecl.controllerAs"),d=c.parse("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(r){var s=r.html();return function(r,c){var v=c.data("$uiView");if(v){var g=v.$cfg||{viewDecl:{}};c.html(g.template||s),u.trace.traceUIViewFill(v.$uiView,c.html());var m=t(c.contents()),$=g.controller,y=h(g),w=d(g),b=g.path&&new l.ResolveContext(g.path),_=b&&p.getLocals(b);if(r[w]=_,$){var x=e($,o.extend({},_,{$scope:r,$element:c}));y&&(r[y]=x,r[y][w]=_),c.data("$ngControllerController",x),c.children().data("$ngControllerController",x),i(n,x,r,g)}if(a.isString(g.viewDecl.component))var S=g.viewDecl.component,E=f.kebobString(S),C=function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&t.tagName.toLowerCase()===E});return t&&angular.element(t).data("$"+S+"Controller")},k=r.$watch(C,function(t){t&&(i(n,t,r,g),k())});m(r)}}}}}function i(t,e,n,r){!a.isFunction(e.$onInit)||r.viewDecl.component&&d||e.$onInit();var i=o.tail(r.path).state.self,u={bind:e};if(a.isFunction(e.uiOnParamsChanged)){var s=new l.ResolveContext(r.path),c=s.getResolvable("$transition$").data,f=function(t){if(t!==c&&t.exiting().indexOf(i)===-1){var n=t.params("to"),r=t.params("from"),a=t.treeChanges().to.map(function(t){return t.paramSchema}).reduce(o.unnestR,[]),u=t.treeChanges().from.map(function(t){return t.paramSchema}).reduce(o.unnestR,[]),s=a.filter(function(t){var e=u.indexOf(t);return e===-1||!u[e].type.equals(n[t.id],r[t.id])});if(s.length){var l=s.map(function(t){return t.id});e.uiOnParamsChanged(o.filter(n,function(t,e){return l.indexOf(e)!==-1}),t)}}};n.$on("$destroy",t.onSuccess({},f,u))}if(a.isFunction(e.uiCanExit)){var p={exiting:i.name};n.$on("$destroy",t.onBefore(p,e.uiCanExit,u))}}var o=n(3),a=n(4),u=n(12),s=n(56),c=n(5),l=n(17),f=n(9),p=n(54),h=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,n,r,i){function o(t,n){return{enter:function(t,n,r){angular.version.minor>2?e.enter(t,null,n).then(r):e.enter(t,null,n,r)},leave:function(t,n){angular.version.minor>2?e.leave(t).then(n):e.leave(t,n)}}}function l(t,e){return t===e}var f={$cfg:{viewDecl:{$context:t.rootContext()}},$uiView:{}},p={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(e,h,d){return function(e,h,v){function g(t){(!t||t instanceof s.Ng1ViewConfig)&&(l(C,t)||(u.trace.traceUIViewConfigUpdated(A,t&&t.viewDecl&&t.viewDecl.$context),C=t,$(t)))}function m(){if(y&&(u.trace.traceUIViewEvent("Removing (previous) el",y.data("$uiView")),y.remove(),y=null),b&&(u.trace.traceUIViewEvent("Destroying scope",A),b.$destroy(),b=null),w){var t=w.data("$uiViewAnim");u.trace.traceUIViewEvent("Animate out",t),E.leave(w,function(){t.$$animLeave.resolve(),y=null}),y=w,w=null}}function $(t){var r=e.$new(),o=i.defer(),u=i.defer(),s={$cfg:t,$uiView:A},c={$animEnter:o.promise,$animLeave:u.promise,$$animLeave:u},l=d(r,function(t){t.data("$uiViewAnim",c),t.data("$uiView",s),E.enter(t,h,function(){o.resolve(),b&&b.$emit("$viewContentAnimationEnded"),(a.isDefined(S)&&!S||e.$eval(S))&&n(t)}),m()});w=l,b=r,b.$emit("$viewContentLoaded",t||C),b.$eval(x)}var y,w,b,_,x=v.onload||"",S=v.autoscroll,E=o(v,e),C=void 0,k=h.inheritedData("$uiView")||f,R=r(v.uiView||v.name||"")(e)||"$default",A={$type:"ng1",id:p.count++,name:R,fqn:k.$uiView.fqn?k.$uiView.fqn+"."+R:R,config:null,configUpdated:g,get creationContext(){return c.parse("$cfg.viewDecl.$context")(k)}};u.trace.traceUIViewEvent("Linking",A),h.data("$uiView",{$uiView:A}),$(),_=t.registerUIView(A),e.$on("$destroy",function(){u.trace.traceUIViewEvent("Destroying/Unregistering",A),_()})}}};return p}];r.$inject=["$compile","$controller","$transitions","$view","$timeout"];var d="function"==typeof angular.module("ui.router").component;angular.module("ui.router.state").directive("uiView",h),angular.module("ui.router.state").directive("uiView",r)},function(t,e){"use strict";function n(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,n){return t?e:function(t){return n(function(){t[0].scrollIntoView()},0,!1)}}]}angular.module("ui.router.state").provider("$uiViewScroll",n)}])}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["angular"],e):t.hasOwnProperty("angular")?e(t.angular):"object"==typeof exports&&(module.exports=e(require("angular")))}(this,function(t){"use strict";function e(t,e){var n;try{n=t[e]}catch(r){n=!1}if(n){var i="__"+Math.round(1e7*Math.random());try{t[e].setItem(i,i),t[e].removeItem(i,i)}catch(r){n=!1}}return n}function n(n){var r=e(window,n);return function(){var i="ngStorage-";this.setKeyPrefix=function(t){if("string"!=typeof t)throw new TypeError("[ngStorage] - "+n+"Provider.setKeyPrefix() expects a String.");i=t};var o=t.toJson,a=t.fromJson;this.setSerializer=function(t){if("function"!=typeof t)throw new TypeError("[ngStorage] - "+n+"Provider.setSerializer expects a function.");o=t},this.setDeserializer=function(t){if("function"!=typeof t)throw new TypeError("[ngStorage] - "+n+"Provider.setDeserializer expects a function.");a=t},this.supported=function(){return!!r},this.get=function(t){return r&&a(r.getItem(i+t))},this.set=function(t,e){return r&&r.setItem(i+t,o(e))},this.remove=function(t){r&&r.removeItem(i+t)},this.$get=["$rootScope","$window","$log","$timeout","$document",function(r,u,s,c,l){var f,p,h=i.length,d=e(u,n),v=d||(s.warn("This browser does not support Web Storage!"),{setItem:t.noop,getItem:t.noop,removeItem:t.noop}),g={$default:function(e){for(var n in e)t.isDefined(g[n])||(g[n]=t.copy(e[n]));return g.$sync(),g},$reset:function(t){for(var e in g)"$"===e[0]||delete g[e]&&v.removeItem(i+e);return g.$default(t)},$sync:function(){for(var t,e=0,n=v.length;e<n;e++)(t=v.key(e))&&i===t.slice(0,h)&&(g[t.slice(h)]=a(v.getItem(t)))},$apply:function(){var e;if(p=null,!t.equals(g,f)){e=t.copy(f),t.forEach(g,function(n,r){t.isDefined(n)&&"$"!==r[0]&&(v.setItem(i+r,o(n)),delete e[r])});for(var n in e)v.removeItem(i+n);f=t.copy(g)}},$supported:function(){return!!d}};return g.$sync(),f=t.copy(g),r.$watch(function(){p||(p=c(g.$apply,100,!1))}),u.addEventListener&&u.addEventListener("storage",function(e){if(e.key){var n=l[0];n.hasFocus&&n.hasFocus()||i!==e.key.slice(0,h)||(e.newValue?g[e.key.slice(h)]=a(e.newValue):delete g[e.key.slice(h)],f=t.copy(g),r.$apply())}}),u.addEventListener&&u.addEventListener("beforeunload",function(){g.$apply()}),g}]}}return t=t&&t.module?t:window.angular,t.module("ngStorage",[]).provider("$localStorage",n("localStorage")).provider("$sessionStorage",n("sessionStorage"))}),function(){function t(t,e){return t.set(e[0],e[1]),t}function e(t,e){return t.add(e),t}function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function r(t,e,n,r){for(var i=-1,o=t?t.length:0;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}function i(t,e){for(var n=-1,r=t?t.length:0;++n<r&&e(t[n],n,t)!==!1;);return t}function o(t,e){for(var n=t?t.length:0;n--&&e(t[n],n,t)!==!1;);return t}function a(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(!e(t[n],n,t))return!1;return!0}function u(t,e){for(var n=-1,r=t?t.length:0,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}function s(t,e){var n=t?t.length:0;return!!n&&y(t,e,0)>-1}function c(t,e,n){for(var r=-1,i=t?t.length:0;++r<i;)if(n(e,t[r]))return!0;return!1}function l(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function f(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function p(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function h(t,e,n,r){var i=t?t.length:0;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function d(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function v(t){return t.split("")}function g(t){return t.match(Re)||[]}function m(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function $(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function y(t,e,n){if(e!==e)return $(t,b,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function w(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function b(t){return t!==t}function _(t,e){var n=t?t.length:0;return n?k(t,e)/n:kt}function x(t){return function(e){return null==e?X:e[t]}}function S(t){return function(e){return null==t?X:t[e]}}function E(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function C(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function k(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);o!==X&&(n=n===X?o:n+o)}return n}function R(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function A(t,e){return l(e,function(e){return[e,t[e]]})}function O(t){return function(e){return t(e)}}function T(t,e){return l(e,function(e){return t[e]})}function I(t,e){return t.has(e)}function j(t,e){for(var n=-1,r=t.length;++n<r&&y(e,t[n],0)>-1;);return n}function P(t,e){for(var n=t.length;n--&&y(e,t[n],0)>-1;);return n}function F(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&r++;return r}function U(t){return"\\"+Dn[t]}function V(t,e){return null==t?X:t[e]}function D(t){return An.test(t)}function N(t){return On.test(t)}function M(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function q(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function H(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function L(t,e){return function(n){return t(e(n))}}function z(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n];a!==e&&a!==it||(t[n]=it,o[i++]=n)}return o}function B(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function W(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t]}),n}function G(t){return D(t)?Z(t):er(t)}function J(t){return D(t)?Y(t):v(t)}function Z(t){for(var e=kn.lastIndex=0;kn.test(t);)e++;return e}function Y(t){return t.match(kn)||[]}function K(t){return t.match(Rn)||[]}function Q(v){function S(t){if(Vu(t)&&!Lf(t)&&!(t instanceof Re)){if(t instanceof Y)return t;if(Zc.call(t,"__wrapped__"))return jo(t)}return new Y(t)}function Z(){}function Y(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=X}function Re(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Rt,this.__views__=[]}function qe(){var t=new Re(this.__wrapped__);return t.__actions__=Si(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Si(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Si(this.__views__),t}function He(){if(this.__filtered__){var t=new Re(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Le(){var t=this.__wrapped__.value(),e=this.__dir__,n=Lf(t),r=e<0,i=n?t.length:0,o=uo(0,i,this.__views__),a=o.start,u=o.end,s=u-a,c=r?u:a-1,l=this.__iteratees__,f=l.length,p=0,h=bl(s,this.__takeCount__);if(!n||i<et||i==s&&h==s)return oi(t,this.__actions__);var d=[];t:for(;s--&&p<h;){c+=e;for(var v=-1,g=t[c];++v<f;){var m=l[v],$=m.iteratee,y=m.type,w=$(g);if(y==_t)g=w;else if(!w){if(y==bt)continue t;break t}}d[p++]=g}return d}function ze(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Be(){this.__data__=Ol?Ol(null):{}}function We(t){return this.has(t)&&delete this.__data__[t]}function Ge(t){var e=this.__data__;if(Ol){var n=e[t];return n===rt?X:n}return Zc.call(e,t)?e[t]:X}function Je(t){var e=this.__data__;return Ol?e[t]!==X:Zc.call(e,t)}function Ze(t,e){var n=this.__data__;return n[t]=Ol&&e===X?rt:e,this}function Ye(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ke(){this.__data__=[]}function Qe(t){var e=this.__data__,n=_n(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():sl.call(e,n,1),!0}function Xe(t){var e=this.__data__,n=_n(e,t);return n<0?X:e[n][1]}function tn(t){return _n(this.__data__,t)>-1}function en(t,e){var n=this.__data__,r=_n(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function nn(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rn(){this.__data__={hash:new ze,map:new(Cl||Ye),string:new ze}}function on(t){return io(this,t)["delete"](t)}function an(t){return io(this,t).get(t)}function un(t){return io(this,t).has(t)}function sn(t,e){return io(this,t).set(t,e),this}function cn(t){var e=-1,n=t?t.length:0;for(this.__data__=new nn;++e<n;)this.add(t[e])}function ln(t){return this.__data__.set(t,rt),this}function fn(t){return this.__data__.has(t)}function pn(t){this.__data__=new Ye(t)}function hn(){this.__data__=new Ye}function dn(t){return this.__data__["delete"](t)}function vn(t){return this.__data__.get(t)}function gn(t){return this.__data__.has(t)}function mn(t,e){var n=this.__data__;if(n instanceof Ye){var r=n.__data__;if(!Cl||r.length<et-1)return r.push([t,e]),this;n=this.__data__=new nn(r)}return n.set(t,e),this}function $n(t,e){var n=Lf(t)||xu(t)?R(t.length,qc):[],r=n.length,i=!!r;for(var o in t)!e&&!Zc.call(t,o)||i&&("length"==o||go(o,r))||n.push(o);return n}function yn(t,e,n,r){return t===X||_u(t,Bc[n])&&!Zc.call(r,n)?e:t}function wn(t,e,n){(n===X||_u(t[e],n))&&("number"!=typeof e||n!==X||e in t)||(t[e]=n)}function bn(t,e,n){var r=t[e];Zc.call(t,e)&&_u(r,n)&&(n!==X||e in t)||(t[e]=n)}function _n(t,e){for(var n=t.length;n--;)if(_u(t[n][0],e))return n;return-1}function xn(t,e,n,r){return Ll(t,function(t,i,o){e(r,t,n(t),o)}),r}function Sn(t,e){return t&&Ei(e,$s(e),t)}function kn(t,e){for(var n=-1,r=null==t,i=e.length,o=Pc(i);++n<i;)o[n]=r?X:vs(t,e[n]);return o}function Rn(t,e,n){return t===t&&(n!==X&&(t=t<=n?t:n),e!==X&&(t=t>=e?t:e)),t}function An(t,e,n,r,o,a,u){var s;if(r&&(s=a?r(t,o,a,u):r(t)),s!==X)return s;if(!Uu(t))return t;var c=Lf(t);if(c){if(s=lo(t),!e)return Si(t,s)}else{var l=Xl(t),f=l==Vt||l==Dt;if(Bf(t))return pi(t,e);if(l==qt||l==It||f&&!a){if(M(t))return a?t:{};if(s=fo(f?{}:t),!e)return Ci(t,Sn(s,t))}else{if(!Pn[l])return a?t:{};s=po(t,l,An,e)}}u||(u=new pn);var p=u.get(t);if(p)return p;if(u.set(t,s),!c)var h=n?Xi(t):$s(t);return i(h||t,function(i,o){h&&(o=i,i=t[o]),bn(s,o,An(i,e,n,r,o,t,u))}),s}function On(t){var e=$s(t);return function(n){return Fn(n,t,e)}}function Fn(t,e,n){var r=n.length;if(null==t)return!r;for(t=Nc(t);r--;){var i=n[r],o=e[i],a=t[i];if(a===X&&!(i in t)||!o(a))return!1}return!0}function Un(t){return Uu(t)?al(t):{}}function Vn(t,e,n){if("function"!=typeof t)throw new Hc(nt);return nf(function(){t.apply(X,n)},e)}function Dn(t,e,n,r){var i=-1,o=s,a=!0,u=t.length,f=[],p=e.length;if(!u)return f;n&&(e=l(e,O(n))),r?(o=c,a=!1):e.length>=et&&(o=I,a=!1,e=new cn(e));t:for(;++i<u;){var h=t[i],d=n?n(h):h;if(h=r||0!==h?h:0,a&&d===d){for(var v=p;v--;)if(e[v]===d)continue t;f.push(h)}else o(e,d,r)||f.push(h)}return f}function qn(t,e){var n=!0;return Ll(t,function(t,r,i){return n=!!e(t,r,i)}),n}function Hn(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],a=e(o);if(null!=a&&(u===X?a===a&&!Ju(a):n(a,u)))var u=a,s=o}return s}function zn(t,e,n,r){var i=t.length;for(n=ts(n),n<0&&(n=-n>i?0:i+n),r=r===X||r>i?i:ts(r),r<0&&(r+=i),r=n>r?0:es(r);n<r;)t[n++]=e;return t}function Bn(t,e){var n=[];return Ll(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function Gn(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=vo),i||(i=[]);++o<a;){var u=t[o];e>0&&n(u)?e>1?Gn(u,e-1,n,r,i):f(i,u):r||(i[i.length]=u)}return i}function Jn(t,e){return t&&Bl(t,e,$s)}function er(t,e){return t&&Wl(t,e,$s)}function ar(t,e){return u(e,function(e){return ju(t[e])})}function ur(t,e){e=$o(e,t)?[e]:li(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[Oo(e[n++])];return n&&n==r?t:X}function sr(t,e,n){var r=e(t);return Lf(t)?r:f(r,n(t))}function cr(t){return Qc.call(t)}function lr(t,e){return t>e}function fr(t,e){return null!=t&&Zc.call(t,e)}function pr(t,e){return null!=t&&e in Nc(t)}function hr(t,e,n){return t>=bl(e,n)&&t<wl(e,n)}function dr(t,e,n){for(var r=n?c:s,i=t[0].length,o=t.length,a=o,u=Pc(o),f=1/0,p=[];a--;){var h=t[a];a&&e&&(h=l(h,O(e))),f=bl(h.length,f),u[a]=!n&&(e||i>=120&&h.length>=120)?new cn(a&&h):X}h=t[0];var d=-1,v=u[0];t:for(;++d<i&&p.length<f;){var g=h[d],m=e?e(g):g;if(g=n||0!==g?g:0,!(v?I(v,m):r(p,m,n))){for(a=o;--a;){var $=u[a];if(!($?I($,m):r(t[a],m,n)))continue t}v&&v.push(m),p.push(g)}}return p}function vr(t,e,n,r){return Jn(t,function(t,i,o){e(r,n(t),i,o)}),r}function gr(t,e,r){$o(e,t)||(e=li(e),t=Ro(t,e),e=Qo(e));var i=null==t?t:t[Oo(e)];return null==i?X:n(i,t,r)}function mr(t){return Vu(t)&&Qc.call(t)==Zt}function $r(t){return Vu(t)&&Qc.call(t)==Ft}function yr(t,e,n,r,i){return t===e||(null==t||null==e||!Uu(t)&&!Vu(e)?t!==t&&e!==e:wr(t,e,yr,n,r,i))}function wr(t,e,n,r,i,o){var a=Lf(t),u=Lf(e),s=jt,c=jt;a||(s=Xl(t),s=s==It?qt:s),u||(c=Xl(e),c=c==It?qt:c);var l=s==qt&&!M(t),f=c==qt&&!M(e),p=s==c;if(p&&!l)return o||(o=new pn),a||Yf(t)?Yi(t,e,n,r,i,o):Ki(t,e,s,n,r,i,o);if(!(i&gt)){var h=l&&Zc.call(t,"__wrapped__"),d=f&&Zc.call(e,"__wrapped__");if(h||d){var v=h?t.value():t,g=d?e.value():e;return o||(o=new pn),n(v,g,r,i,o)}}return!!p&&(o||(o=new pn),Qi(t,e,n,r,i,o))}function br(t){return Vu(t)&&Xl(t)==Nt}function _r(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=Nc(t);i--;){var u=n[i];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++i<o;){u=n[i];var s=u[0],c=t[s],l=u[1];if(a&&u[2]){if(c===X&&!(s in t))return!1}else{var f=new pn;if(r)var p=r(c,l,s,t,e,f);if(!(p===X?yr(l,c,r,vt|gt,f):p))return!1}}return!0}function xr(t){if(!Uu(t)||bo(t))return!1;var e=ju(t)||M(t)?tl:Fe;return e.test(To(t))}function Sr(t){return Uu(t)&&Qc.call(t)==Lt}function Er(t){return Vu(t)&&Xl(t)==zt}function Cr(t){return Vu(t)&&Fu(t.length)&&!!jn[Qc.call(t)]}function kr(t){return"function"==typeof t?t:null==t?sc:"object"==typeof t?Lf(t)?jr(t[0],t[1]):Ir(t):gc(t)}function Rr(t){if(!_o(t))return yl(t);var e=[];for(var n in Nc(t))Zc.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ar(t){if(!Uu(t))return ko(t);var e=_o(t),n=[];for(var r in t)("constructor"!=r||!e&&Zc.call(t,r))&&n.push(r);return n}function Or(t,e){return t<e}function Tr(t,e){var n=-1,r=Su(t)?Pc(t.length):[];return Ll(t,function(t,i,o){r[++n]=e(t,i,o)}),r}function Ir(t){var e=oo(t);return 1==e.length&&e[0][2]?So(e[0][0],e[0][1]):function(n){return n===t||_r(n,t,e)}}function jr(t,e){return $o(t)&&xo(e)?So(Oo(t),e):function(n){var r=vs(n,t);return r===X&&r===e?ms(n,t):yr(e,r,X,vt|gt)}}function Pr(t,e,n,r,o){if(t!==e){if(!Lf(e)&&!Yf(e))var a=Ar(e);i(a||e,function(i,u){if(a&&(u=i,i=e[u]),Uu(i))o||(o=new pn),Fr(t,e,u,n,Pr,r,o);else{var s=r?r(t[u],i,u+"",t,e,o):X;s===X&&(s=i),wn(t,u,s)}})}}function Fr(t,e,n,r,i,o,a){var u=t[n],s=e[n],c=a.get(s);if(c)return void wn(t,n,c);var l=o?o(u,s,n+"",t,e,a):X,f=l===X;f&&(l=s,Lf(s)||Yf(s)?Lf(u)?l=u:Eu(u)?l=Si(u):(f=!1,l=An(s,!0)):Bu(s)||xu(s)?xu(u)?l=rs(u):!Uu(u)||r&&ju(u)?(f=!1,l=An(s,!0)):l=u:f=!1),f&&(a.set(s,l),i(l,s,r,o,a),a["delete"](s)),wn(t,n,l)}function Ur(t,e){var n=t.length;if(n)return e+=e<0?n:0,go(e,n)?t[e]:X}function Vr(t,e,n){var r=-1;e=l(e.length?e:[sc],O(ro()));var i=Tr(t,function(t,n,i){var o=l(e,function(e){return e(t)});return{criteria:o,index:++r,value:t}});return C(i,function(t,e){return bi(t,e,n)})}function Dr(t,e){return t=Nc(t),Nr(t,e,function(e,n){return n in t})}function Nr(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],u=t[a];n(u,a)&&(o[a]=u)}return o}function Mr(t){return function(e){return ur(e,t)}}function qr(t,e,n,r){var i=r?w:y,o=-1,a=e.length,u=t;for(t===e&&(e=Si(e)),n&&(u=l(t,O(n)));++o<a;)for(var s=0,c=e[o],f=n?n(c):c;(s=i(u,f,s,r))>-1;)u!==t&&sl.call(u,s,1),sl.call(t,s,1);return t}function Hr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;if(go(i))sl.call(t,i,1);else if($o(i,t))delete t[Oo(i)];else{var a=li(i),u=Ro(t,a);null!=u&&delete u[Oo(Qo(a))]}}}return t}function Lr(t,e){return t+dl(xl()*(e-t+1))}function zr(t,e,n,r){for(var i=-1,o=wl(hl((e-t)/(n||1)),0),a=Pc(o);o--;)a[r?o:++i]=t,t+=n;return a}function Br(t,e){var n="";if(!t||e<1||e>Et)return n;do e%2&&(n+=t),e=dl(e/2),e&&(t+=t);while(e);return n}function Wr(t,e){return e=wl(e===X?t.length-1:e,0),function(){for(var r=arguments,i=-1,o=wl(r.length-e,0),a=Pc(o);++i<o;)a[i]=r[e+i];i=-1;for(var u=Pc(e+1);++i<e;)u[i]=r[i];return u[e]=a,n(t,this,u)}}function Gr(t,e,n,r){if(!Uu(t))return t;e=$o(e,t)?[e]:li(e);for(var i=-1,o=e.length,a=o-1,u=t;null!=u&&++i<o;){var s=Oo(e[i]),c=n;if(i!=a){var l=u[s];c=r?r(l,s,u):X,c===X&&(c=Uu(l)?l:go(e[i+1])?[]:{})}bn(u,s,c),u=u[s]}return t}function Jr(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Pc(i);++r<i;)o[r]=t[r+e];return o}function Zr(t,e){var n;return Ll(t,function(t,r,i){return n=e(t,r,i),!n}),!!n}function Yr(t,e,n){var r=0,i=t?t.length:r;if("number"==typeof e&&e===e&&i<=Ot){for(;r<i;){var o=r+i>>>1,a=t[o];null!==a&&!Ju(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return Kr(t,e,sc,n)}function Kr(t,e,n,r){e=n(e);for(var i=0,o=t?t.length:0,a=e!==e,u=null===e,s=Ju(e),c=e===X;i<o;){var l=dl((i+o)/2),f=n(t[l]),p=f!==X,h=null===f,d=f===f,v=Ju(f);if(a)var g=r||d;else g=c?d&&(r||p):u?d&&p&&(r||!h):s?d&&p&&!h&&(r||!v):!h&&!v&&(r?f<=e:f<e);g?i=l+1:o=l}return bl(o,At)}function Qr(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],u=e?e(a):a;if(!n||!_u(u,s)){var s=u;o[i++]=0===a?0:a}}return o}function Xr(t){return"number"==typeof t?t:Ju(t)?kt:+t}function ti(t){if("string"==typeof t)return t;if(Ju(t))return Hl?Hl.call(t):"";var e=t+"";return"0"==e&&1/t==-St?"-0":e}function ei(t,e,n){var r=-1,i=s,o=t.length,a=!0,u=[],l=u;if(n)a=!1,i=c;else if(o>=et){var f=e?null:Zl(t);if(f)return B(f);a=!1,i=I,l=new cn}else l=e?[]:u;t:for(;++r<o;){var p=t[r],h=e?e(p):p;if(p=n||0!==p?p:0,a&&h===h){for(var d=l.length;d--;)if(l[d]===h)continue t;e&&l.push(h),u.push(p)}else i(l,h,n)||(l!==u&&l.push(h),u.push(p))}return u}function ni(t,e){e=$o(e,t)?[e]:li(e),t=Ro(t,e);var n=Oo(Qo(e));return!(null!=t&&Zc.call(t,n))||delete t[n]}function ri(t,e,n,r){return Gr(t,e,n(ur(t,e)),r)}function ii(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?Jr(t,r?0:o,r?o+1:i):Jr(t,r?o+1:0,r?i:o)}function oi(t,e){var n=t;return n instanceof Re&&(n=n.value()),p(e,function(t,e){return e.func.apply(e.thisArg,f([t],e.args))},n)}function ai(t,e,n){for(var r=-1,i=t.length;++r<i;)var o=o?f(Dn(o,t[r],e,n),Dn(t[r],o,e,n)):t[r];return o&&o.length?ei(o,e,n):[]}function ui(t,e,n){for(var r=-1,i=t.length,o=e.length,a={};++r<i;){var u=r<o?e[r]:X;n(a,t[r],u)}return a}function si(t){return Eu(t)?t:[]}function ci(t){return"function"==typeof t?t:sc}function li(t){return Lf(t)?t:of(t)}function fi(t,e,n){var r=t.length;return n=n===X?r:n,!e&&n>=r?t:Jr(t,e,n)}function pi(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function hi(t){var e=new t.constructor(t.byteLength);return new rl(e).set(new rl(t)),e}function di(t,e){var n=e?hi(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function vi(e,n,r){var i=n?r(H(e),!0):H(e);return p(i,t,new e.constructor)}function gi(t){var e=new t.constructor(t.source,Te.exec(t));return e.lastIndex=t.lastIndex,e}function mi(t,n,r){var i=n?r(B(t),!0):B(t);return p(i,e,new t.constructor)}function $i(t){return ql?Nc(ql.call(t)):{}}function yi(t,e){var n=e?hi(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function wi(t,e){if(t!==e){var n=t!==X,r=null===t,i=t===t,o=Ju(t),a=e!==X,u=null===e,s=e===e,c=Ju(e);if(!u&&!c&&!o&&t>e||o&&a&&s&&!u&&!c||r&&a&&s||!n&&s||!i)return 1;if(!r&&!o&&!c&&t<e||c&&n&&i&&!r&&!o||u&&n&&i||!a&&i||!s)return-1}return 0}function bi(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,u=n.length;++r<a;){var s=wi(i[r],o[r]);if(s){if(r>=u)return s;var c=n[r];return s*("desc"==c?-1:1)}}return t.index-e.index}function _i(t,e,n,r){for(var i=-1,o=t.length,a=n.length,u=-1,s=e.length,c=wl(o-a,0),l=Pc(s+c),f=!r;++u<s;)l[u]=e[u];for(;++i<a;)(f||i<o)&&(l[n[i]]=t[i]);for(;c--;)l[u++]=t[i++];return l}function xi(t,e,n,r){for(var i=-1,o=t.length,a=-1,u=n.length,s=-1,c=e.length,l=wl(o-u,0),f=Pc(l+c),p=!r;++i<l;)f[i]=t[i];for(var h=i;++s<c;)f[h+s]=e[s];for(;++a<u;)(p||i<o)&&(f[h+n[a]]=t[i++]);return f}function Si(t,e){var n=-1,r=t.length;for(e||(e=Pc(r));++n<r;)e[n]=t[n];return e}function Ei(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var a=e[i],u=r?r(n[a],t[a],a,n,t):X;bn(n,a,u===X?t[a]:u)}return n}function Ci(t,e){return Ei(t,Kl(t),e)}function ki(t,e){return function(n,i){var o=Lf(n)?r:xn,a=e?e():{};return o(n,t,ro(i,2),a)}}function Ri(t){return Wr(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:X,a=i>2?n[2]:X;for(o=t.length>3&&"function"==typeof o?(i--,o):X,a&&mo(n[0],n[1],a)&&(o=i<3?X:o,i=1),e=Nc(e);++r<i;){var u=n[r];u&&t(e,u,r,o)}return e})}function Ai(t,e){return function(n,r){if(null==n)return n;if(!Su(n))return t(n,r);for(var i=n.length,o=e?i:-1,a=Nc(n);(e?o--:++o<i)&&r(a[o],o,a)!==!1;);return n}}function Oi(t){return function(e,n,r){for(var i=-1,o=Nc(e),a=r(e),u=a.length;u--;){var s=a[t?u:++i];if(n(o[s],s,o)===!1)break}return e}}function Ti(t,e,n){function r(){var e=this&&this!==Ln&&this instanceof r?o:t;return e.apply(i?n:this,arguments)}var i=e&ot,o=Pi(t);return r}function Ii(t){return function(e){e=os(e);var n=D(e)?J(e):X,r=n?n[0]:e.charAt(0),i=n?fi(n,1).join(""):e.slice(1);return r[t]()+i}}function ji(t){return function(e){return p(rc(Vs(e).replace(En,"")),t,"")}}function Pi(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Un(t.prototype),r=t.apply(n,e);return Uu(r)?r:n}}function Fi(t,e,r){function i(){for(var a=arguments.length,u=Pc(a),s=a,c=no(i);s--;)u[s]=arguments[s];var l=a<3&&u[0]!==c&&u[a-1]!==c?[]:z(u,c);if(a-=l.length,a<r)return Wi(t,e,Di,i.placeholder,X,u,l,X,X,r-a);var f=this&&this!==Ln&&this instanceof i?o:t;return n(f,this,u)}var o=Pi(t);return i}function Ui(t){return function(e,n,r){var i=Nc(e);if(!Su(e)){var o=ro(n,3);e=$s(e),n=function(t){return o(i[t],t,i)}}var a=t(e,n,r);return a>-1?i[o?e[a]:a]:X}}function Vi(t){return Wr(function(e){e=Gn(e,1);var n=e.length,r=n,i=Y.prototype.thru;for(t&&e.reverse();r--;){var o=e[r];if("function"!=typeof o)throw new Hc(nt);if(i&&!a&&"wrapper"==eo(o))var a=new Y([],(!0))}for(r=a?r:n;++r<n;){o=e[r];var u=eo(o),s="wrapper"==u?Yl(o):X;a=s&&wo(s[0])&&s[1]==(pt|st|lt|ht)&&!s[4].length&&1==s[9]?a[eo(s[0])].apply(a,s[3]):1==o.length&&wo(o)?a[u]():a.thru(o);
}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&Lf(r)&&r.length>=et)return a.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}function Di(t,e,n,r,i,o,a,u,s,c){function l(){for(var m=arguments.length,$=Pc(m),y=m;y--;)$[y]=arguments[y];if(d)var w=no(l),b=F($,w);if(r&&($=_i($,r,i,d)),o&&($=xi($,o,a,d)),m-=b,d&&m<c){var _=z($,w);return Wi(t,e,Di,l.placeholder,n,$,_,u,s,c-m)}var x=p?n:this,S=h?x[t]:t;return m=$.length,u?$=Ao($,u):v&&m>1&&$.reverse(),f&&s<m&&($.length=s),this&&this!==Ln&&this instanceof l&&(S=g||Pi(S)),S.apply(x,$)}var f=e&pt,p=e&ot,h=e&at,d=e&(st|ct),v=e&dt,g=h?X:Pi(t);return l}function Ni(t,e){return function(n,r){return vr(n,t,e(r),{})}}function Mi(t,e){return function(n,r){var i;if(n===X&&r===X)return e;if(n!==X&&(i=n),r!==X){if(i===X)return r;"string"==typeof n||"string"==typeof r?(n=ti(n),r=ti(r)):(n=Xr(n),r=Xr(r)),i=t(n,r)}return i}}function qi(t){return Wr(function(e){return e=1==e.length&&Lf(e[0])?l(e[0],O(ro())):l(Gn(e,1),O(ro())),Wr(function(r){var i=this;return t(e,function(t){return n(t,i,r)})})})}function Hi(t,e){e=e===X?" ":ti(e);var n=e.length;if(n<2)return n?Br(e,t):e;var r=Br(e,hl(t/G(e)));return D(e)?fi(J(r),0,t).join(""):r.slice(0,t)}function Li(t,e,r,i){function o(){for(var e=-1,s=arguments.length,c=-1,l=i.length,f=Pc(l+s),p=this&&this!==Ln&&this instanceof o?u:t;++c<l;)f[c]=i[c];for(;s--;)f[c++]=arguments[++e];return n(p,a?r:this,f)}var a=e&ot,u=Pi(t);return o}function zi(t){return function(e,n,r){return r&&"number"!=typeof r&&mo(e,n,r)&&(n=r=X),e=Xu(e),n===X?(n=e,e=0):n=Xu(n),r=r===X?e<n?1:-1:Xu(r),zr(e,n,r,t)}}function Bi(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=ns(e),n=ns(n)),t(e,n)}}function Wi(t,e,n,r,i,o,a,u,s,c){var l=e&st,f=l?a:X,p=l?X:a,h=l?o:X,d=l?X:o;e|=l?lt:ft,e&=~(l?ft:lt),e&ut||(e&=~(ot|at));var v=[t,e,i,h,f,d,p,u,s,c],g=n.apply(X,v);return wo(t)&&ef(g,v),g.placeholder=r,rf(g,t,e)}function Gi(t){var e=Dc[t];return function(t,n){if(t=ns(t),n=bl(ts(n),292)){var r=(os(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(os(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}function Ji(t){return function(e){var n=Xl(e);return n==Nt?H(e):n==zt?W(e):A(e,t(e))}}function Zi(t,e,n,r,i,o,a,u){var s=e&at;if(!s&&"function"!=typeof t)throw new Hc(nt);var c=r?r.length:0;if(c||(e&=~(lt|ft),r=i=X),a=a===X?a:wl(ts(a),0),u=u===X?u:ts(u),c-=i?i.length:0,e&ft){var l=r,f=i;r=i=X}var p=s?X:Yl(t),h=[t,e,n,r,i,l,f,o,a,u];if(p&&Eo(h,p),t=h[0],e=h[1],n=h[2],r=h[3],i=h[4],u=h[9]=null==h[9]?s?0:t.length:wl(h[9]-c,0),!u&&e&(st|ct)&&(e&=~(st|ct)),e&&e!=ot)d=e==st||e==ct?Fi(t,e,u):e!=lt&&e!=(ot|lt)||i.length?Di.apply(X,h):Li(t,e,n,r);else var d=Ti(t,e,n);var v=p?Gl:ef;return rf(v(d,h),t,e)}function Yi(t,e,n,r,i,o){var a=i&gt,u=t.length,s=e.length;if(u!=s&&!(a&&s>u))return!1;var c=o.get(t);if(c&&o.get(e))return c==e;var l=-1,f=!0,p=i&vt?new cn:X;for(o.set(t,e),o.set(e,t);++l<u;){var h=t[l],v=e[l];if(r)var g=a?r(v,h,l,e,t,o):r(h,v,l,t,e,o);if(g!==X){if(g)continue;f=!1;break}if(p){if(!d(e,function(t,e){if(!p.has(e)&&(h===t||n(h,t,r,i,o)))return p.add(e)})){f=!1;break}}else if(h!==v&&!n(h,v,r,i,o)){f=!1;break}}return o["delete"](t),o["delete"](e),f}function Ki(t,e,n,r,i,o,a){switch(n){case Yt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Zt:return!(t.byteLength!=e.byteLength||!r(new rl(t),new rl(e)));case Pt:case Ft:case Mt:return _u(+t,+e);case Ut:return t.name==e.name&&t.message==e.message;case Lt:case Bt:return t==e+"";case Nt:var u=H;case zt:var s=o&gt;if(u||(u=B),t.size!=e.size&&!s)return!1;var c=a.get(t);if(c)return c==e;o|=vt,a.set(t,e);var l=Yi(u(t),u(e),r,i,o,a);return a["delete"](t),l;case Wt:if(ql)return ql.call(t)==ql.call(e)}return!1}function Qi(t,e,n,r,i,o){var a=i&gt,u=$s(t),s=u.length,c=$s(e),l=c.length;if(s!=l&&!a)return!1;for(var f=s;f--;){var p=u[f];if(!(a?p in e:Zc.call(e,p)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var d=!0;o.set(t,e),o.set(e,t);for(var v=a;++f<s;){p=u[f];var g=t[p],m=e[p];if(r)var $=a?r(m,g,p,e,t,o):r(g,m,p,t,e,o);if(!($===X?g===m||n(g,m,r,i,o):$)){d=!1;break}v||(v="constructor"==p)}if(d&&!v){var y=t.constructor,w=e.constructor;y!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof w&&w instanceof w)&&(d=!1)}return o["delete"](t),o["delete"](e),d}function Xi(t){return sr(t,$s,Kl)}function to(t){return sr(t,ys,Ql)}function eo(t){for(var e=t.name+"",n=Pl[e],r=Zc.call(Pl,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function no(t){var e=Zc.call(S,"placeholder")?S:t;return e.placeholder}function ro(){var t=S.iteratee||cc;return t=t===cc?kr:t,arguments.length?t(arguments[0],arguments[1]):t}function io(t,e){var n=t.__data__;return yo(e)?n["string"==typeof e?"string":"hash"]:n.map}function oo(t){for(var e=$s(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,xo(i)]}return e}function ao(t,e){var n=V(t,e);return xr(n)?n:X}function uo(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=bl(e,t+a);break;case"takeRight":t=wl(t,e-a)}}return{start:t,end:e}}function so(t){var e=t.match(Ce);return e?e[1].split(ke):[]}function co(t,e,n){e=$o(e,t)?[e]:li(e);for(var r,i=-1,o=e.length;++i<o;){var a=Oo(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}if(r)return r;var o=t?t.length:0;return!!o&&Fu(o)&&go(a,o)&&(Lf(t)||xu(t))}function lo(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&Zc.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function fo(t){return"function"!=typeof t.constructor||_o(t)?{}:Un(il(t))}function po(t,e,n,r){var i=t.constructor;switch(e){case Zt:return hi(t);case Pt:case Ft:return new i((+t));case Yt:return di(t,r);case Kt:case Qt:case Xt:case te:case ee:case ne:case re:case ie:case oe:return yi(t,r);case Nt:return vi(t,r,n);case Mt:case Bt:return new i(t);case Lt:return gi(t);case zt:return mi(t,r,n);case Wt:return $i(t)}}function ho(t,e){var n=e.length,r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ee,"{\n/* [wrapped with "+e+"] */\n")}function vo(t){return Lf(t)||xu(t)||!!(cl&&t&&t[cl])}function go(t,e){return e=null==e?Et:e,!!e&&("number"==typeof t||Ve.test(t))&&t>-1&&t%1==0&&t<e}function mo(t,e,n){if(!Uu(n))return!1;var r=typeof e;return!!("number"==r?Su(n)&&go(e,n.length):"string"==r&&e in n)&&_u(n[e],t)}function $o(t,e){if(Lf(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ju(t))||(me.test(t)||!ge.test(t)||null!=e&&t in Nc(e))}function yo(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function wo(t){var e=eo(t),n=S[e];if("function"!=typeof n||!(e in Re.prototype))return!1;if(t===n)return!0;var r=Yl(n);return!!r&&t===r[0]}function bo(t){return!!Gc&&Gc in t}function _o(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||Bc;return t===n}function xo(t){return t===t&&!Uu(t)}function So(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==X||t in Nc(n)))}}function Eo(t,e){var n=t[1],r=e[1],i=n|r,o=i<(ot|at|pt),a=r==pt&&n==st||r==pt&&n==ht&&t[7].length<=e[8]||r==(pt|ht)&&e[7].length<=e[8]&&n==st;if(!o&&!a)return t;r&ot&&(t[2]=e[2],i|=n&ot?0:ut);var u=e[3];if(u){var s=t[3];t[3]=s?_i(s,u,e[4]):u,t[4]=s?z(t[3],it):e[4]}return u=e[5],u&&(s=t[5],t[5]=s?xi(s,u,e[6]):u,t[6]=s?z(t[5],it):e[6]),u=e[7],u&&(t[7]=u),r&pt&&(t[8]=null==t[8]?e[8]:bl(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function Co(t,e,n,r,i,o){return Uu(t)&&Uu(e)&&(o.set(e,t),Pr(t,e,X,Co,o),o["delete"](e)),t}function ko(t){var e=[];if(null!=t)for(var n in Nc(t))e.push(n);return e}function Ro(t,e){return 1==e.length?t:ur(t,Jr(e,0,-1))}function Ao(t,e){for(var n=t.length,r=bl(e.length,n),i=Si(t);r--;){var o=e[r];t[r]=go(o,n)?i[o]:X}return t}function Oo(t){if("string"==typeof t||Ju(t))return t;var e=t+"";return"0"==e&&1/t==-St?"-0":e}function To(t){if(null!=t){try{return Jc.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Io(t,e){return i(Tt,function(n){var r="_."+n[0];e&n[1]&&!s(t,r)&&t.push(r)}),t.sort()}function jo(t){if(t instanceof Re)return t.clone();var e=new Y(t.__wrapped__,t.__chain__);return e.__actions__=Si(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Po(t,e,n){e=(n?mo(t,e,n):e===X)?1:wl(ts(e),0);var r=t?t.length:0;if(!r||e<1)return[];for(var i=0,o=0,a=Pc(hl(r/e));i<r;)a[o++]=Jr(t,i,i+=e);return a}function Fo(t){for(var e=-1,n=t?t.length:0,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i}function Uo(){for(var t=arguments.length,e=Pc(t?t-1:0),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return t?f(Lf(n)?Si(n):[n],Gn(e,1)):[]}function Vo(t,e,n){var r=t?t.length:0;return r?(e=n||e===X?1:ts(e),Jr(t,e<0?0:e,r)):[]}function Do(t,e,n){var r=t?t.length:0;return r?(e=n||e===X?1:ts(e),e=r-e,Jr(t,0,e<0?0:e)):[]}function No(t,e){return t&&t.length?ii(t,ro(e,3),!0,!0):[]}function Mo(t,e){return t&&t.length?ii(t,ro(e,3),!0):[]}function qo(t,e,n,r){var i=t?t.length:0;return i?(n&&"number"!=typeof n&&mo(t,e,n)&&(n=0,r=i),zn(t,e,n,r)):[]}function Ho(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=null==n?0:ts(n);return i<0&&(i=wl(r+i,0)),$(t,ro(e,3),i)}function Lo(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=r-1;return n!==X&&(i=ts(n),i=n<0?wl(r+i,0):bl(i,r-1)),$(t,ro(e,3),i,!0)}function zo(t){var e=t?t.length:0;return e?Gn(t,1):[]}function Bo(t){var e=t?t.length:0;return e?Gn(t,St):[]}function Wo(t,e){var n=t?t.length:0;return n?(e=e===X?1:ts(e),Gn(t,e)):[]}function Go(t){for(var e=-1,n=t?t.length:0,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r}function Jo(t){return t&&t.length?t[0]:X}function Zo(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=null==n?0:ts(n);return i<0&&(i=wl(r+i,0)),y(t,e,i)}function Yo(t){var e=t?t.length:0;return e?Jr(t,0,-1):[]}function Ko(t,e){return t?$l.call(t,e):""}function Qo(t){var e=t?t.length:0;return e?t[e-1]:X}function Xo(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=r;if(n!==X&&(i=ts(n),i=(i<0?wl(r+i,0):bl(i,r-1))+1),e!==e)return $(t,b,i-1,!0);for(;i--;)if(t[i]===e)return i;return-1}function ta(t,e){return t&&t.length?Ur(t,ts(e)):X}function ea(t,e){return t&&t.length&&e&&e.length?qr(t,e):t}function na(t,e,n){return t&&t.length&&e&&e.length?qr(t,e,ro(n,2)):t}function ra(t,e,n){return t&&t.length&&e&&e.length?qr(t,e,X,n):t}function ia(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=ro(e,3);++r<o;){var a=t[r];e(a,r,t)&&(n.push(a),i.push(r))}return Hr(t,i),n}function oa(t){return t?Sl.call(t):t}function aa(t,e,n){var r=t?t.length:0;return r?(n&&"number"!=typeof n&&mo(t,e,n)?(e=0,n=r):(e=null==e?0:ts(e),n=n===X?r:ts(n)),Jr(t,e,n)):[]}function ua(t,e){return Yr(t,e)}function sa(t,e,n){return Kr(t,e,ro(n,2))}function ca(t,e){var n=t?t.length:0;if(n){var r=Yr(t,e);if(r<n&&_u(t[r],e))return r}return-1}function la(t,e){return Yr(t,e,!0)}function fa(t,e,n){return Kr(t,e,ro(n,2),!0)}function pa(t,e){var n=t?t.length:0;if(n){var r=Yr(t,e,!0)-1;if(_u(t[r],e))return r}return-1}function ha(t){return t&&t.length?Qr(t):[]}function da(t,e){return t&&t.length?Qr(t,ro(e,2)):[]}function va(t){var e=t?t.length:0;return e?Jr(t,1,e):[]}function ga(t,e,n){return t&&t.length?(e=n||e===X?1:ts(e),Jr(t,0,e<0?0:e)):[]}function ma(t,e,n){var r=t?t.length:0;return r?(e=n||e===X?1:ts(e),e=r-e,Jr(t,e<0?0:e,r)):[]}function $a(t,e){return t&&t.length?ii(t,ro(e,3),!1,!0):[]}function ya(t,e){return t&&t.length?ii(t,ro(e,3)):[]}function wa(t){return t&&t.length?ei(t):[]}function ba(t,e){return t&&t.length?ei(t,ro(e,2)):[]}function _a(t,e){return t&&t.length?ei(t,X,e):[]}function xa(t){if(!t||!t.length)return[];var e=0;return t=u(t,function(t){if(Eu(t))return e=wl(t.length,e),!0}),R(e,function(e){return l(t,x(e))})}function Sa(t,e){if(!t||!t.length)return[];var r=xa(t);return null==e?r:l(r,function(t){return n(e,X,t)})}function Ea(t,e){return ui(t||[],e||[],bn)}function Ca(t,e){return ui(t||[],e||[],Gr)}function ka(t){var e=S(t);return e.__chain__=!0,e}function Ra(t,e){return e(t),t}function Aa(t,e){return e(t)}function Oa(){return ka(this)}function Ta(){return new Y(this.value(),this.__chain__)}function Ia(){this.__values__===X&&(this.__values__=Qu(this.value()));var t=this.__index__>=this.__values__.length,e=t?X:this.__values__[this.__index__++];return{done:t,value:e}}function ja(){return this}function Pa(t){for(var e,n=this;n instanceof Z;){var r=jo(n);r.__index__=0,r.__values__=X,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e}function Fa(){var t=this.__wrapped__;if(t instanceof Re){var e=t;return this.__actions__.length&&(e=new Re(this)),e=e.reverse(),e.__actions__.push({func:Aa,args:[oa],thisArg:X}),new Y(e,this.__chain__)}return this.thru(oa)}function Ua(){return oi(this.__wrapped__,this.__actions__)}function Va(t,e,n){var r=Lf(t)?a:qn;return n&&mo(t,e,n)&&(e=X),r(t,ro(e,3))}function Da(t,e){var n=Lf(t)?u:Bn;return n(t,ro(e,3))}function Na(t,e){return Gn(Ba(t,e),1)}function Ma(t,e){return Gn(Ba(t,e),St)}function qa(t,e,n){return n=n===X?1:ts(n),Gn(Ba(t,e),n)}function Ha(t,e){var n=Lf(t)?i:Ll;return n(t,ro(e,3))}function La(t,e){var n=Lf(t)?o:zl;return n(t,ro(e,3))}function za(t,e,n,r){t=Su(t)?t:Ts(t),n=n&&!r?ts(n):0;var i=t.length;return n<0&&(n=wl(i+n,0)),Gu(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&y(t,e,n)>-1}function Ba(t,e){var n=Lf(t)?l:Tr;return n(t,ro(e,3))}function Wa(t,e,n,r){return null==t?[]:(Lf(e)||(e=null==e?[]:[e]),n=r?X:n,Lf(n)||(n=null==n?[]:[n]),Vr(t,e,n))}function Ga(t,e,n){var r=Lf(t)?p:E,i=arguments.length<3;return r(t,ro(e,4),n,i,Ll)}function Ja(t,e,n){var r=Lf(t)?h:E,i=arguments.length<3;return r(t,ro(e,4),n,i,zl)}function Za(t,e){var n=Lf(t)?u:Bn;return n(t,cu(ro(e,3)))}function Ya(t){var e=Su(t)?t:Ts(t),n=e.length;return n>0?e[Lr(0,n-1)]:X}function Ka(t,e,n){var r=-1,i=Qu(t),o=i.length,a=o-1;for(e=(n?mo(t,e,n):e===X)?1:Rn(ts(e),0,o);++r<e;){var u=Lr(r,a),s=i[u];i[u]=i[r],i[r]=s}return i.length=e,i}function Qa(t){return Ka(t,Rt)}function Xa(t){if(null==t)return 0;if(Su(t))return Gu(t)?G(t):t.length;var e=Xl(t);return e==Nt||e==zt?t.size:Rr(t).length}function tu(t,e,n){var r=Lf(t)?d:Zr;return n&&mo(t,e,n)&&(e=X),r(t,ro(e,3))}function eu(t,e){if("function"!=typeof e)throw new Hc(nt);return t=ts(t),function(){if(--t<1)return e.apply(this,arguments)}}function nu(t,e,n){return e=n?X:e,e=t&&null==e?t.length:e,Zi(t,pt,X,X,X,X,e)}function ru(t,e){var n;if("function"!=typeof e)throw new Hc(nt);return t=ts(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=X),n}}function iu(t,e,n){e=n?X:e;var r=Zi(t,st,X,X,X,X,X,e);return r.placeholder=iu.placeholder,r}function ou(t,e,n){e=n?X:e;var r=Zi(t,ct,X,X,X,X,X,e);return r.placeholder=ou.placeholder,r}function au(t,e,n){function r(e){var n=p,r=h;return p=h=X,$=e,v=t.apply(r,n)}function i(t){return $=t,g=nf(u,e),y?r(t):v}function o(t){var n=t-m,r=t-$,i=e-n;return w?bl(i,d-r):i}function a(t){var n=t-m,r=t-$;return m===X||n>=e||n<0||w&&r>=d}function u(){var t=If();return a(t)?s(t):void(g=nf(u,o(t)))}function s(t){return g=X,b&&p?r(t):(p=h=X,v)}function c(){g!==X&&Jl(g),$=0,p=m=h=g=X}function l(){return g===X?v:s(If())}function f(){var t=If(),n=a(t);if(p=arguments,h=this,m=t,n){if(g===X)return i(m);if(w)return g=nf(u,e),r(m)}return g===X&&(g=nf(u,e)),v}var p,h,d,v,g,m,$=0,y=!1,w=!1,b=!0;if("function"!=typeof t)throw new Hc(nt);return e=ns(e)||0,Uu(n)&&(y=!!n.leading,w="maxWait"in n,d=w?wl(ns(n.maxWait)||0,e):d,b="trailing"in n?!!n.trailing:b),f.cancel=c,f.flush=l,f}function uu(t){return Zi(t,dt)}function su(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new Hc(nt);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a),a};return n.cache=new(su.Cache||nn),n}function cu(t){if("function"!=typeof t)throw new Hc(nt);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function lu(t){return ru(2,t)}function fu(t,e){if("function"!=typeof t)throw new Hc(nt);return e=e===X?e:ts(e),Wr(t,e)}function pu(t,e){if("function"!=typeof t)throw new Hc(nt);return e=e===X?0:wl(ts(e),0),Wr(function(r){var i=r[e],o=fi(r,0,e);return i&&f(o,i),n(t,this,o)})}function hu(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new Hc(nt);return Uu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),au(t,e,{leading:r,maxWait:e,trailing:i})}function du(t){return nu(t,1)}function vu(t,e){return e=null==e?sc:e,Df(e,t)}function gu(){if(!arguments.length)return[];var t=arguments[0];return Lf(t)?t:[t]}function mu(t){return An(t,!1,!0)}function $u(t,e){return An(t,!1,!0,e)}function yu(t){return An(t,!0,!0)}function wu(t,e){return An(t,!0,!0,e)}function bu(t,e){return null==e||Fn(t,e,$s(e))}function _u(t,e){return t===e||t!==t&&e!==e}function xu(t){return Eu(t)&&Zc.call(t,"callee")&&(!ul.call(t,"callee")||Qc.call(t)==It)}function Su(t){return null!=t&&Fu(t.length)&&!ju(t)}function Eu(t){return Vu(t)&&Su(t)}function Cu(t){return t===!0||t===!1||Vu(t)&&Qc.call(t)==Pt}function ku(t){return!!t&&1===t.nodeType&&Vu(t)&&!Bu(t)}function Ru(t){if(Su(t)&&(Lf(t)||"string"==typeof t||"function"==typeof t.splice||Bf(t)||xu(t)))return!t.length;var e=Xl(t);if(e==Nt||e==zt)return!t.size;if(jl||_o(t))return!yl(t).length;for(var n in t)if(Zc.call(t,n))return!1;return!0}function Au(t,e){return yr(t,e)}function Ou(t,e,n){n="function"==typeof n?n:X;var r=n?n(t,e):X;return r===X?yr(t,e,n):!!r}function Tu(t){return!!Vu(t)&&(Qc.call(t)==Ut||"string"==typeof t.message&&"string"==typeof t.name)}function Iu(t){return"number"==typeof t&&ml(t)}function ju(t){var e=Uu(t)?Qc.call(t):"";return e==Vt||e==Dt}function Pu(t){return"number"==typeof t&&t==ts(t)}function Fu(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Et}function Uu(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Vu(t){return!!t&&"object"==typeof t}function Du(t,e){return t===e||_r(t,e,oo(e))}function Nu(t,e,n){return n="function"==typeof n?n:X,_r(t,e,oo(e),n)}function Mu(t){return zu(t)&&t!=+t}function qu(t){if(tf(t))throw new Uc("This method is not supported with core-js. Try https://github.com/es-shims.");return xr(t)}function Hu(t){return null===t}function Lu(t){return null==t}function zu(t){return"number"==typeof t||Vu(t)&&Qc.call(t)==Mt}function Bu(t){if(!Vu(t)||Qc.call(t)!=qt||M(t))return!1;var e=il(t);if(null===e)return!0;var n=Zc.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Jc.call(n)==Kc}function Wu(t){return Pu(t)&&t>=-Et&&t<=Et}function Gu(t){return"string"==typeof t||!Lf(t)&&Vu(t)&&Qc.call(t)==Bt}function Ju(t){return"symbol"==typeof t||Vu(t)&&Qc.call(t)==Wt}function Zu(t){return t===X}function Yu(t){return Vu(t)&&Xl(t)==Gt}function Ku(t){return Vu(t)&&Qc.call(t)==Jt}function Qu(t){if(!t)return[];if(Su(t))return Gu(t)?J(t):Si(t);if(ol&&t[ol])return q(t[ol]());var e=Xl(t),n=e==Nt?H:e==zt?B:Ts;return n(t)}function Xu(t){if(!t)return 0===t?t:0;if(t=ns(t),t===St||t===-St){var e=t<0?-1:1;return e*Ct}return t===t?t:0}function ts(t){var e=Xu(t),n=e%1;return e===e?n?e-n:e:0}function es(t){return t?Rn(ts(t),0,Rt):0}function ns(t){if("number"==typeof t)return t;if(Ju(t))return kt;if(Uu(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Uu(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_e,"");var n=Pe.test(t);return n||Ue.test(t)?Mn(t.slice(2),n?2:8):je.test(t)?kt:+t}function rs(t){return Ei(t,ys(t))}function is(t){return Rn(ts(t),-Et,Et)}function os(t){return null==t?"":ti(t)}function as(t,e){var n=Un(t);return e?Sn(n,e):n}function us(t,e){return m(t,ro(e,3),Jn)}function ss(t,e){return m(t,ro(e,3),er)}function cs(t,e){return null==t?t:Bl(t,ro(e,3),ys)}function ls(t,e){return null==t?t:Wl(t,ro(e,3),ys)}function fs(t,e){return t&&Jn(t,ro(e,3))}function ps(t,e){return t&&er(t,ro(e,3))}function hs(t){return null==t?[]:ar(t,$s(t))}function ds(t){return null==t?[]:ar(t,ys(t))}function vs(t,e,n){var r=null==t?X:ur(t,e);return r===X?n:r}function gs(t,e){return null!=t&&co(t,e,fr)}function ms(t,e){return null!=t&&co(t,e,pr)}function $s(t){return Su(t)?$n(t):Rr(t)}function ys(t){return Su(t)?$n(t,!0):Ar(t)}function ws(t,e){var n={};return e=ro(e,3),Jn(t,function(t,r,i){n[e(t,r,i)]=t}),n}function bs(t,e){var n={};return e=ro(e,3),Jn(t,function(t,r,i){n[r]=e(t,r,i)}),n}function _s(t,e){return xs(t,cu(ro(e)))}function xs(t,e){return null==t?{}:Nr(t,to(t),ro(e))}function Ss(t,e,n){e=$o(e,t)?[e]:li(e);var r=-1,i=e.length;for(i||(t=X,i=1);++r<i;){var o=null==t?X:t[Oo(e[r])];o===X&&(r=i,o=n),t=ju(o)?o.call(t):o}return t}function Es(t,e,n){return null==t?t:Gr(t,e,n)}function Cs(t,e,n,r){return r="function"==typeof r?r:X,null==t?t:Gr(t,e,n,r)}function ks(t,e,n){var r=Lf(t)||Yf(t);if(e=ro(e,4),null==n)if(r||Uu(t)){var o=t.constructor;n=r?Lf(t)?new o:[]:ju(o)?Un(il(t)):{}}else n={};return(r?i:Jn)(t,function(t,r,i){return e(n,t,r,i)}),n}function Rs(t,e){return null==t||ni(t,e)}function As(t,e,n){return null==t?t:ri(t,e,ci(n))}function Os(t,e,n,r){return r="function"==typeof r?r:X,null==t?t:ri(t,e,ci(n),r)}function Ts(t){return t?T(t,$s(t)):[]}function Is(t){return null==t?[]:T(t,ys(t))}function js(t,e,n){return n===X&&(n=e,e=X),n!==X&&(n=ns(n),n=n===n?n:0),e!==X&&(e=ns(e),e=e===e?e:0),Rn(ns(t),e,n)}function Ps(t,e,n){return e=Xu(e),n===X?(n=e,e=0):n=Xu(n),t=ns(t),hr(t,e,n)}function Fs(t,e,n){if(n&&"boolean"!=typeof n&&mo(t,e,n)&&(e=n=X),n===X&&("boolean"==typeof e?(n=e,e=X):"boolean"==typeof t&&(n=t,t=X)),t===X&&e===X?(t=0,e=1):(t=Xu(t),e===X?(e=t,t=0):e=Xu(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=xl();return bl(t+i*(e-t+Nn("1e-"+((i+"").length-1))),e)}return Lr(t,e)}function Us(t){return _p(os(t).toLowerCase())}function Vs(t){return t=os(t),t&&t.replace(De,nr).replace(Cn,"")}function Ds(t,e,n){t=os(t),e=ti(e);var r=t.length;n=n===X?r:Rn(ts(n),0,r);var i=n;return n-=e.length,n>=0&&t.slice(n,i)==e}function Ns(t){return t=os(t),t&&pe.test(t)?t.replace(le,rr):t}function Ms(t){return t=os(t),t&&be.test(t)?t.replace(we,"\\$&"):t}function qs(t,e,n){t=os(t),e=ts(e);var r=e?G(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Hi(dl(i),n)+t+Hi(hl(i),n)}function Hs(t,e,n){t=os(t),e=ts(e);var r=e?G(t):0;return e&&r<e?t+Hi(e-r,n):t}function Ls(t,e,n){t=os(t),e=ts(e);var r=e?G(t):0;return e&&r<e?Hi(e-r,n)+t:t}function zs(t,e,n){return n||null==e?e=0:e&&(e=+e),t=os(t).replace(_e,""),_l(t,e||(Ie.test(t)?16:10))}function Bs(t,e,n){return e=(n?mo(t,e,n):e===X)?1:ts(e),Br(os(t),e)}function Ws(){var t=arguments,e=os(t[0]);return t.length<3?e:e.replace(t[1],t[2])}function Gs(t,e,n){return n&&"number"!=typeof n&&mo(t,e,n)&&(e=n=X),(n=n===X?Rt:n>>>0)?(t=os(t),t&&("string"==typeof e||null!=e&&!Jf(e))&&(e=ti(e),!e&&D(t))?fi(J(t),0,n):t.split(e,n)):[]}function Js(t,e,n){return t=os(t),n=Rn(ts(n),0,t.length),e=ti(e),t.slice(n,n+e.length)==e}function Zs(t,e,n){var r=S.templateSettings;n&&mo(t,e,n)&&(e=X),t=os(t),e=ep({},e,r,yn);var i,o,a=ep({},e.imports,r.imports,yn),u=$s(a),s=T(a,u),c=0,l=e.interpolate||Ne,f="__p += '",p=Mc((e.escape||Ne).source+"|"+l.source+"|"+(l===ve?Oe:Ne).source+"|"+(e.evaluate||Ne).source+"|$","g"),h="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++In+"]")+"\n";t.replace(p,function(e,n,r,a,u,s){return r||(r=a),f+=t.slice(c,s).replace(Me,U),n&&(i=!0,f+="' +\n__e("+n+") +\n'"),u&&(o=!0,f+="';\n"+u+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=s+e.length,e}),f+="';\n";var d=e.variable;d||(f="with (obj) {\n"+f+"\n}\n"),f=(o?f.replace(ae,""):f).replace(ue,"$1").replace(se,"$1;"),f="function("+(d||"obj")+") {\n"+(d?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var v=xp(function(){return Vc(u,h+"return "+f).apply(X,s)});if(v.source=f,Tu(v))throw v;return v}function Ys(t){return os(t).toLowerCase()}function Ks(t){return os(t).toUpperCase()}function Qs(t,e,n){if(t=os(t),t&&(n||e===X))return t.replace(_e,"");if(!t||!(e=ti(e)))return t;var r=J(t),i=J(e),o=j(r,i),a=P(r,i)+1;return fi(r,o,a).join("")}function Xs(t,e,n){if(t=os(t),t&&(n||e===X))return t.replace(Se,"");if(!t||!(e=ti(e)))return t;var r=J(t),i=P(r,J(e))+1;return fi(r,0,i).join("")}function tc(t,e,n){if(t=os(t),t&&(n||e===X))return t.replace(xe,"");if(!t||!(e=ti(e)))return t;var r=J(t),i=j(r,J(e));return fi(r,i).join("")}function ec(t,e){var n=mt,r=$t;if(Uu(e)){var i="separator"in e?e.separator:i;n="length"in e?ts(e.length):n,r="omission"in e?ti(e.omission):r}t=os(t);var o=t.length;if(D(t)){var a=J(t);o=a.length}if(n>=o)return t;var u=n-G(r);if(u<1)return r;var s=a?fi(a,0,u).join(""):t.slice(0,u);if(i===X)return s+r;if(a&&(u+=s.length-u),Jf(i)){if(t.slice(u).search(i)){var c,l=s;for(i.global||(i=Mc(i.source,os(Te.exec(i))+"g")),i.lastIndex=0;c=i.exec(l);)var f=c.index;s=s.slice(0,f===X?u:f)}}else if(t.indexOf(ti(i),u)!=u){var p=s.lastIndexOf(i);p>-1&&(s=s.slice(0,p))}return s+r}function nc(t){return t=os(t),t&&fe.test(t)?t.replace(ce,ir):t}function rc(t,e,n){return t=os(t),e=n?X:e,e===X?N(t)?K(t):g(t):t.match(e)||[]}function ic(t){var e=t?t.length:0,r=ro();return t=e?l(t,function(t){if("function"!=typeof t[1])throw new Hc(nt);return[r(t[0]),t[1]]}):[],Wr(function(r){for(var i=-1;++i<e;){var o=t[i];if(n(o[0],this,r))return n(o[1],this,r)}})}function oc(t){return On(An(t,!0))}function ac(t){return function(){return t}}function uc(t,e){return null==t||t!==t?e:t}function sc(t){return t}function cc(t){return kr("function"==typeof t?t:An(t,!0))}function lc(t){return Ir(An(t,!0))}function fc(t,e){return jr(t,An(e,!0))}function pc(t,e,n){var r=$s(e),o=ar(e,r);null!=n||Uu(e)&&(o.length||!r.length)||(n=e,e=t,t=this,o=ar(e,$s(e)));var a=!(Uu(n)&&"chain"in n&&!n.chain),u=ju(t);return i(o,function(n){var r=e[n];t[n]=r,u&&(t.prototype[n]=function(){var e=this.__chain__;if(a||e){var n=t(this.__wrapped__),i=n.__actions__=Si(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,f([this.value()],arguments))})}),t}function hc(){return Ln._===this&&(Ln._=Xc),this}function dc(){}function vc(t){return t=ts(t),Wr(function(e){return Ur(e,t)})}function gc(t){return $o(t)?x(Oo(t)):Mr(t)}function mc(t){return function(e){return null==t?X:ur(t,e)}}function $c(){return[]}function yc(){return!1}function wc(){return{}}function bc(){return""}function _c(){return!0}function xc(t,e){if(t=ts(t),t<1||t>Et)return[];var n=Rt,r=bl(t,Rt);e=ro(e),t-=Rt;for(var i=R(r,e);++n<t;)e(n);return i}function Sc(t){return Lf(t)?l(t,Oo):Ju(t)?[t]:Si(of(t))}function Ec(t){var e=++Yc;return os(t)+e}function Cc(t){return t&&t.length?Hn(t,sc,lr):X}function kc(t,e){return t&&t.length?Hn(t,ro(e,2),lr):X}function Rc(t){return _(t,sc)}function Ac(t,e){return _(t,ro(e,2))}function Oc(t){return t&&t.length?Hn(t,sc,Or):X}function Tc(t,e){return t&&t.length?Hn(t,ro(e,2),Or):X}function Ic(t){return t&&t.length?k(t,sc):0}function jc(t,e){return t&&t.length?k(t,ro(e,2)):0}v=v?or.defaults(Ln.Object(),v,or.pick(Ln,Tn)):Ln;var Pc=v.Array,Fc=v.Date,Uc=v.Error,Vc=v.Function,Dc=v.Math,Nc=v.Object,Mc=v.RegExp,qc=v.String,Hc=v.TypeError,Lc=Pc.prototype,zc=Vc.prototype,Bc=Nc.prototype,Wc=v["__core-js_shared__"],Gc=function(){var t=/[^.]+$/.exec(Wc&&Wc.keys&&Wc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Jc=zc.toString,Zc=Bc.hasOwnProperty,Yc=0,Kc=Jc.call(Nc),Qc=Bc.toString,Xc=Ln._,tl=Mc("^"+Jc.call(Zc).replace(we,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),el=Wn?v.Buffer:X,nl=v.Symbol,rl=v.Uint8Array,il=L(Nc.getPrototypeOf,Nc),ol=nl?nl.iterator:X,al=Nc.create,ul=Bc.propertyIsEnumerable,sl=Lc.splice,cl=nl?nl.isConcatSpreadable:X,ll=v.clearTimeout!==Ln.clearTimeout&&v.clearTimeout,fl=Fc&&Fc.now!==Ln.Date.now&&Fc.now,pl=v.setTimeout!==Ln.setTimeout&&v.setTimeout,hl=Dc.ceil,dl=Dc.floor,vl=Nc.getOwnPropertySymbols,gl=el?el.isBuffer:X,ml=v.isFinite,$l=Lc.join,yl=L(Nc.keys,Nc),wl=Dc.max,bl=Dc.min,_l=v.parseInt,xl=Dc.random,Sl=Lc.reverse,El=ao(v,"DataView"),Cl=ao(v,"Map"),kl=ao(v,"Promise"),Rl=ao(v,"Set"),Al=ao(v,"WeakMap"),Ol=ao(Nc,"create"),Tl=function(){var t=ao(Nc,"defineProperty"),e=ao.name;return e&&e.length>2?t:X}(),Il=Al&&new Al,jl=!ul.call({valueOf:1},"valueOf"),Pl={},Fl=To(El),Ul=To(Cl),Vl=To(kl),Dl=To(Rl),Nl=To(Al),Ml=nl?nl.prototype:X,ql=Ml?Ml.valueOf:X,Hl=Ml?Ml.toString:X;S.templateSettings={escape:he,evaluate:de,interpolate:ve,variable:"",imports:{_:S}},S.prototype=Z.prototype,S.prototype.constructor=S,Y.prototype=Un(Z.prototype),Y.prototype.constructor=Y,Re.prototype=Un(Z.prototype),Re.prototype.constructor=Re,ze.prototype.clear=Be,ze.prototype["delete"]=We,ze.prototype.get=Ge,ze.prototype.has=Je,ze.prototype.set=Ze,Ye.prototype.clear=Ke,Ye.prototype["delete"]=Qe,Ye.prototype.get=Xe,Ye.prototype.has=tn,Ye.prototype.set=en,nn.prototype.clear=rn,nn.prototype["delete"]=on,nn.prototype.get=an,nn.prototype.has=un,nn.prototype.set=sn,cn.prototype.add=cn.prototype.push=ln,cn.prototype.has=fn,pn.prototype.clear=hn,pn.prototype["delete"]=dn,pn.prototype.get=vn,pn.prototype.has=gn,pn.prototype.set=mn;var Ll=Ai(Jn),zl=Ai(er,!0),Bl=Oi(),Wl=Oi(!0),Gl=Il?function(t,e){return Il.set(t,e),t}:sc,Jl=ll||function(t){return Ln.clearTimeout(t)},Zl=Rl&&1/B(new Rl([,-0]))[1]==St?function(t){return new Rl(t)}:dc,Yl=Il?function(t){return Il.get(t)}:dc,Kl=vl?L(vl,Nc):$c,Ql=vl?function(t){for(var e=[];t;)f(e,Kl(t)),t=il(t);return e}:$c,Xl=cr;(El&&Xl(new El(new ArrayBuffer(1)))!=Yt||Cl&&Xl(new Cl)!=Nt||kl&&Xl(kl.resolve())!=Ht||Rl&&Xl(new Rl)!=zt||Al&&Xl(new Al)!=Gt)&&(Xl=function(t){var e=Qc.call(t),n=e==qt?t.constructor:X,r=n?To(n):X;if(r)switch(r){case Fl:return Yt;case Ul:return Nt;case Vl:return Ht;case Dl:return zt;case Nl:return Gt}return e});var tf=Wc?ju:yc,ef=function(){var t=0,e=0;return function(n,r){var i=If(),o=wt-(i-e);if(e=i,o>0){if(++t>=yt)return n}else t=0;return Gl(n,r)}}(),nf=pl||function(t,e){return Ln.setTimeout(t,e)},rf=Tl?function(t,e,n){var r=e+"";return Tl(t,"toString",{configurable:!0,enumerable:!1,value:ac(ho(r,Io(so(r),n)))})}:sc,of=su(function(t){t=os(t);var e=[];return $e.test(t)&&e.push(""),t.replace(ye,function(t,n,r,i){e.push(r?i.replace(Ae,"$1"):n||t)}),e}),af=Wr(function(t,e){return Eu(t)?Dn(t,Gn(e,1,Eu,!0)):[]}),uf=Wr(function(t,e){var n=Qo(e);return Eu(n)&&(n=X),Eu(t)?Dn(t,Gn(e,1,Eu,!0),ro(n,2)):[]}),sf=Wr(function(t,e){var n=Qo(e);return Eu(n)&&(n=X),Eu(t)?Dn(t,Gn(e,1,Eu,!0),X,n):[]}),cf=Wr(function(t){var e=l(t,si);return e.length&&e[0]===t[0]?dr(e):[]}),lf=Wr(function(t){var e=Qo(t),n=l(t,si);return e===Qo(n)?e=X:n.pop(),n.length&&n[0]===t[0]?dr(n,ro(e,2)):[]}),ff=Wr(function(t){var e=Qo(t),n=l(t,si);return e===Qo(n)?e=X:n.pop(),n.length&&n[0]===t[0]?dr(n,X,e):[]}),pf=Wr(ea),hf=Wr(function(t,e){e=Gn(e,1);var n=t?t.length:0,r=kn(t,e);return Hr(t,l(e,function(t){return go(t,n)?+t:t}).sort(wi)),r}),df=Wr(function(t){return ei(Gn(t,1,Eu,!0))}),vf=Wr(function(t){var e=Qo(t);return Eu(e)&&(e=X),ei(Gn(t,1,Eu,!0),ro(e,2))}),gf=Wr(function(t){var e=Qo(t);return Eu(e)&&(e=X),ei(Gn(t,1,Eu,!0),X,e)}),mf=Wr(function(t,e){return Eu(t)?Dn(t,e):[]}),$f=Wr(function(t){return ai(u(t,Eu))}),yf=Wr(function(t){var e=Qo(t);return Eu(e)&&(e=X),ai(u(t,Eu),ro(e,2))}),wf=Wr(function(t){var e=Qo(t);return Eu(e)&&(e=X),ai(u(t,Eu),X,e)}),bf=Wr(xa),_f=Wr(function(t){var e=t.length,n=e>1?t[e-1]:X;return n="function"==typeof n?(t.pop(),n):X,Sa(t,n)}),xf=Wr(function(t){t=Gn(t,1);var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return kn(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Re&&go(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Aa,args:[i],thisArg:X}),new Y(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(X),t})):this.thru(i)}),Sf=ki(function(t,e,n){Zc.call(t,n)?++t[n]:t[n]=1}),Ef=Ui(Ho),Cf=Ui(Lo),kf=ki(function(t,e,n){Zc.call(t,n)?t[n].push(e):t[n]=[e]}),Rf=Wr(function(t,e,r){var i=-1,o="function"==typeof e,a=$o(e),u=Su(t)?Pc(t.length):[];return Ll(t,function(t){var s=o?e:a&&null!=t?t[e]:X;
u[++i]=s?n(s,t,r):gr(t,e,r)}),u}),Af=ki(function(t,e,n){t[n]=e}),Of=ki(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),Tf=Wr(function(t,e){if(null==t)return[];var n=e.length;return n>1&&mo(t,e[0],e[1])?e=[]:n>2&&mo(e[0],e[1],e[2])&&(e=[e[0]]),Vr(t,Gn(e,1),[])}),If=fl||function(){return Ln.Date.now()},jf=Wr(function(t,e,n){var r=ot;if(n.length){var i=z(n,no(jf));r|=lt}return Zi(t,r,e,n,i)}),Pf=Wr(function(t,e,n){var r=ot|at;if(n.length){var i=z(n,no(Pf));r|=lt}return Zi(e,r,t,n,i)}),Ff=Wr(function(t,e){return Vn(t,1,e)}),Uf=Wr(function(t,e,n){return Vn(t,ns(e)||0,n)});su.Cache=nn;var Vf=Wr(function(t,e){e=1==e.length&&Lf(e[0])?l(e[0],O(ro())):l(Gn(e,1),O(ro()));var r=e.length;return Wr(function(i){for(var o=-1,a=bl(i.length,r);++o<a;)i[o]=e[o].call(this,i[o]);return n(t,this,i)})}),Df=Wr(function(t,e){var n=z(e,no(Df));return Zi(t,lt,X,e,n)}),Nf=Wr(function(t,e){var n=z(e,no(Nf));return Zi(t,ft,X,e,n)}),Mf=Wr(function(t,e){return Zi(t,ht,X,X,X,Gn(e,1))}),qf=Bi(lr),Hf=Bi(function(t,e){return t>=e}),Lf=Pc.isArray,zf=Zn?O(Zn):mr,Bf=gl||yc,Wf=Yn?O(Yn):$r,Gf=Kn?O(Kn):br,Jf=Qn?O(Qn):Sr,Zf=Xn?O(Xn):Er,Yf=tr?O(tr):Cr,Kf=Bi(Or),Qf=Bi(function(t,e){return t<=e}),Xf=Ri(function(t,e){if(jl||_o(e)||Su(e))return void Ei(e,$s(e),t);for(var n in e)Zc.call(e,n)&&bn(t,n,e[n])}),tp=Ri(function(t,e){Ei(e,ys(e),t)}),ep=Ri(function(t,e,n,r){Ei(e,ys(e),t,r)}),np=Ri(function(t,e,n,r){Ei(e,$s(e),t,r)}),rp=Wr(function(t,e){return kn(t,Gn(e,1))}),ip=Wr(function(t){return t.push(X,yn),n(ep,X,t)}),op=Wr(function(t){return t.push(X,Co),n(lp,X,t)}),ap=Ni(function(t,e,n){t[e]=n},ac(sc)),up=Ni(function(t,e,n){Zc.call(t,e)?t[e].push(n):t[e]=[n]},ro),sp=Wr(gr),cp=Ri(function(t,e,n){Pr(t,e,n)}),lp=Ri(function(t,e,n,r){Pr(t,e,n,r)}),fp=Wr(function(t,e){return null==t?{}:(e=l(Gn(e,1),Oo),Dr(t,Dn(to(t),e)))}),pp=Wr(function(t,e){return null==t?{}:Dr(t,l(Gn(e,1),Oo))}),hp=Ji($s),dp=Ji(ys),vp=ji(function(t,e,n){return e=e.toLowerCase(),t+(n?Us(e):e)}),gp=ji(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),mp=ji(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),$p=Ii("toLowerCase"),yp=ji(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),wp=ji(function(t,e,n){return t+(n?" ":"")+_p(e)}),bp=ji(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),_p=Ii("toUpperCase"),xp=Wr(function(t,e){try{return n(t,X,e)}catch(r){return Tu(r)?r:new Uc(r)}}),Sp=Wr(function(t,e){return i(Gn(e,1),function(e){e=Oo(e),t[e]=jf(t[e],t)}),t}),Ep=Vi(),Cp=Vi(!0),kp=Wr(function(t,e){return function(n){return gr(n,t,e)}}),Rp=Wr(function(t,e){return function(n){return gr(t,n,e)}}),Ap=qi(l),Op=qi(a),Tp=qi(d),Ip=zi(),jp=zi(!0),Pp=Mi(function(t,e){return t+e},0),Fp=Gi("ceil"),Up=Mi(function(t,e){return t/e},1),Vp=Gi("floor"),Dp=Mi(function(t,e){return t*e},1),Np=Gi("round"),Mp=Mi(function(t,e){return t-e},0);return S.after=eu,S.ary=nu,S.assign=Xf,S.assignIn=tp,S.assignInWith=ep,S.assignWith=np,S.at=rp,S.before=ru,S.bind=jf,S.bindAll=Sp,S.bindKey=Pf,S.castArray=gu,S.chain=ka,S.chunk=Po,S.compact=Fo,S.concat=Uo,S.cond=ic,S.conforms=oc,S.constant=ac,S.countBy=Sf,S.create=as,S.curry=iu,S.curryRight=ou,S.debounce=au,S.defaults=ip,S.defaultsDeep=op,S.defer=Ff,S.delay=Uf,S.difference=af,S.differenceBy=uf,S.differenceWith=sf,S.drop=Vo,S.dropRight=Do,S.dropRightWhile=No,S.dropWhile=Mo,S.fill=qo,S.filter=Da,S.flatMap=Na,S.flatMapDeep=Ma,S.flatMapDepth=qa,S.flatten=zo,S.flattenDeep=Bo,S.flattenDepth=Wo,S.flip=uu,S.flow=Ep,S.flowRight=Cp,S.fromPairs=Go,S.functions=hs,S.functionsIn=ds,S.groupBy=kf,S.initial=Yo,S.intersection=cf,S.intersectionBy=lf,S.intersectionWith=ff,S.invert=ap,S.invertBy=up,S.invokeMap=Rf,S.iteratee=cc,S.keyBy=Af,S.keys=$s,S.keysIn=ys,S.map=Ba,S.mapKeys=ws,S.mapValues=bs,S.matches=lc,S.matchesProperty=fc,S.memoize=su,S.merge=cp,S.mergeWith=lp,S.method=kp,S.methodOf=Rp,S.mixin=pc,S.negate=cu,S.nthArg=vc,S.omit=fp,S.omitBy=_s,S.once=lu,S.orderBy=Wa,S.over=Ap,S.overArgs=Vf,S.overEvery=Op,S.overSome=Tp,S.partial=Df,S.partialRight=Nf,S.partition=Of,S.pick=pp,S.pickBy=xs,S.property=gc,S.propertyOf=mc,S.pull=pf,S.pullAll=ea,S.pullAllBy=na,S.pullAllWith=ra,S.pullAt=hf,S.range=Ip,S.rangeRight=jp,S.rearg=Mf,S.reject=Za,S.remove=ia,S.rest=fu,S.reverse=oa,S.sampleSize=Ka,S.set=Es,S.setWith=Cs,S.shuffle=Qa,S.slice=aa,S.sortBy=Tf,S.sortedUniq=ha,S.sortedUniqBy=da,S.split=Gs,S.spread=pu,S.tail=va,S.take=ga,S.takeRight=ma,S.takeRightWhile=$a,S.takeWhile=ya,S.tap=Ra,S.throttle=hu,S.thru=Aa,S.toArray=Qu,S.toPairs=hp,S.toPairsIn=dp,S.toPath=Sc,S.toPlainObject=rs,S.transform=ks,S.unary=du,S.union=df,S.unionBy=vf,S.unionWith=gf,S.uniq=wa,S.uniqBy=ba,S.uniqWith=_a,S.unset=Rs,S.unzip=xa,S.unzipWith=Sa,S.update=As,S.updateWith=Os,S.values=Ts,S.valuesIn=Is,S.without=mf,S.words=rc,S.wrap=vu,S.xor=$f,S.xorBy=yf,S.xorWith=wf,S.zip=bf,S.zipObject=Ea,S.zipObjectDeep=Ca,S.zipWith=_f,S.entries=hp,S.entriesIn=dp,S.extend=tp,S.extendWith=ep,pc(S,S),S.add=Pp,S.attempt=xp,S.camelCase=vp,S.capitalize=Us,S.ceil=Fp,S.clamp=js,S.clone=mu,S.cloneDeep=yu,S.cloneDeepWith=wu,S.cloneWith=$u,S.conformsTo=bu,S.deburr=Vs,S.defaultTo=uc,S.divide=Up,S.endsWith=Ds,S.eq=_u,S.escape=Ns,S.escapeRegExp=Ms,S.every=Va,S.find=Ef,S.findIndex=Ho,S.findKey=us,S.findLast=Cf,S.findLastIndex=Lo,S.findLastKey=ss,S.floor=Vp,S.forEach=Ha,S.forEachRight=La,S.forIn=cs,S.forInRight=ls,S.forOwn=fs,S.forOwnRight=ps,S.get=vs,S.gt=qf,S.gte=Hf,S.has=gs,S.hasIn=ms,S.head=Jo,S.identity=sc,S.includes=za,S.indexOf=Zo,S.inRange=Ps,S.invoke=sp,S.isArguments=xu,S.isArray=Lf,S.isArrayBuffer=zf,S.isArrayLike=Su,S.isArrayLikeObject=Eu,S.isBoolean=Cu,S.isBuffer=Bf,S.isDate=Wf,S.isElement=ku,S.isEmpty=Ru,S.isEqual=Au,S.isEqualWith=Ou,S.isError=Tu,S.isFinite=Iu,S.isFunction=ju,S.isInteger=Pu,S.isLength=Fu,S.isMap=Gf,S.isMatch=Du,S.isMatchWith=Nu,S.isNaN=Mu,S.isNative=qu,S.isNil=Lu,S.isNull=Hu,S.isNumber=zu,S.isObject=Uu,S.isObjectLike=Vu,S.isPlainObject=Bu,S.isRegExp=Jf,S.isSafeInteger=Wu,S.isSet=Zf,S.isString=Gu,S.isSymbol=Ju,S.isTypedArray=Yf,S.isUndefined=Zu,S.isWeakMap=Yu,S.isWeakSet=Ku,S.join=Ko,S.kebabCase=gp,S.last=Qo,S.lastIndexOf=Xo,S.lowerCase=mp,S.lowerFirst=$p,S.lt=Kf,S.lte=Qf,S.max=Cc,S.maxBy=kc,S.mean=Rc,S.meanBy=Ac,S.min=Oc,S.minBy=Tc,S.stubArray=$c,S.stubFalse=yc,S.stubObject=wc,S.stubString=bc,S.stubTrue=_c,S.multiply=Dp,S.nth=ta,S.noConflict=hc,S.noop=dc,S.now=If,S.pad=qs,S.padEnd=Hs,S.padStart=Ls,S.parseInt=zs,S.random=Fs,S.reduce=Ga,S.reduceRight=Ja,S.repeat=Bs,S.replace=Ws,S.result=Ss,S.round=Np,S.runInContext=Q,S.sample=Ya,S.size=Xa,S.snakeCase=yp,S.some=tu,S.sortedIndex=ua,S.sortedIndexBy=sa,S.sortedIndexOf=ca,S.sortedLastIndex=la,S.sortedLastIndexBy=fa,S.sortedLastIndexOf=pa,S.startCase=wp,S.startsWith=Js,S.subtract=Mp,S.sum=Ic,S.sumBy=jc,S.template=Zs,S.times=xc,S.toFinite=Xu,S.toInteger=ts,S.toLength=es,S.toLower=Ys,S.toNumber=ns,S.toSafeInteger=is,S.toString=os,S.toUpper=Ks,S.trim=Qs,S.trimEnd=Xs,S.trimStart=tc,S.truncate=ec,S.unescape=nc,S.uniqueId=Ec,S.upperCase=bp,S.upperFirst=_p,S.each=Ha,S.eachRight=La,S.first=Jo,pc(S,function(){var t={};return Jn(S,function(e,n){Zc.call(S.prototype,n)||(t[n]=e)}),t}(),{chain:!1}),S.VERSION=tt,i(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){S[t].placeholder=S}),i(["drop","take"],function(t,e){Re.prototype[t]=function(n){var r=this.__filtered__;if(r&&!e)return new Re(this);n=n===X?1:wl(ts(n),0);var i=this.clone();return r?i.__takeCount__=bl(n,i.__takeCount__):i.__views__.push({size:bl(n,Rt),type:t+(i.__dir__<0?"Right":"")}),i},Re.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),i(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==bt||n==xt;Re.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ro(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),i(["head","last"],function(t,e){var n="take"+(e?"Right":"");Re.prototype[t]=function(){return this[n](1).value()[0]}}),i(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");Re.prototype[t]=function(){return this.__filtered__?new Re(this):this[n](1)}}),Re.prototype.compact=function(){return this.filter(sc)},Re.prototype.find=function(t){return this.filter(t).head()},Re.prototype.findLast=function(t){return this.reverse().find(t)},Re.prototype.invokeMap=Wr(function(t,e){return"function"==typeof t?new Re(this):this.map(function(n){return gr(n,t,e)})}),Re.prototype.reject=function(t){return this.filter(cu(ro(t)))},Re.prototype.slice=function(t,e){t=ts(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Re(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==X&&(e=ts(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Re.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Re.prototype.toArray=function(){return this.take(Rt)},Jn(Re.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=S[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);i&&(S.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof Re,s=a[0],c=u||Lf(e),l=function(t){var e=i.apply(S,f([t],a));return r&&p?e[0]:e};c&&n&&"function"==typeof s&&1!=s.length&&(u=c=!1);var p=this.__chain__,h=!!this.__actions__.length,d=o&&!p,v=u&&!h;if(!o&&c){e=v?e:new Re(this);var g=t.apply(e,a);return g.__actions__.push({func:Aa,args:[l],thisArg:X}),new Y(g,p)}return d&&v?t.apply(this,a):(g=this.thru(l),d?r?g.value()[0]:g.value():g)})}),i(["pop","push","shift","sort","splice","unshift"],function(t){var e=Lc[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);S.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(Lf(i)?i:[],t)}return this[n](function(n){return e.apply(Lf(n)?n:[],t)})}}),Jn(Re.prototype,function(t,e){var n=S[e];if(n){var r=n.name+"",i=Pl[r]||(Pl[r]=[]);i.push({name:e,func:n})}}),Pl[Di(X,at).name]=[{name:"wrapper",func:X}],Re.prototype.clone=qe,Re.prototype.reverse=He,Re.prototype.value=Le,S.prototype.at=xf,S.prototype.chain=Oa,S.prototype.commit=Ta,S.prototype.next=Ia,S.prototype.plant=Pa,S.prototype.reverse=Fa,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=Ua,S.prototype.first=S.prototype.head,ol&&(S.prototype[ol]=ja),S}var X,tt="4.15.0",et=200,nt="Expected a function",rt="__lodash_hash_undefined__",it="__lodash_placeholder__",ot=1,at=2,ut=4,st=8,ct=16,lt=32,ft=64,pt=128,ht=256,dt=512,vt=1,gt=2,mt=30,$t="...",yt=150,wt=16,bt=1,_t=2,xt=3,St=1/0,Et=9007199254740991,Ct=1.7976931348623157e308,kt=NaN,Rt=4294967295,At=Rt-1,Ot=Rt>>>1,Tt=[["ary",pt],["bind",ot],["bindKey",at],["curry",st],["curryRight",ct],["flip",dt],["partial",lt],["partialRight",ft],["rearg",ht]],It="[object Arguments]",jt="[object Array]",Pt="[object Boolean]",Ft="[object Date]",Ut="[object Error]",Vt="[object Function]",Dt="[object GeneratorFunction]",Nt="[object Map]",Mt="[object Number]",qt="[object Object]",Ht="[object Promise]",Lt="[object RegExp]",zt="[object Set]",Bt="[object String]",Wt="[object Symbol]",Gt="[object WeakMap]",Jt="[object WeakSet]",Zt="[object ArrayBuffer]",Yt="[object DataView]",Kt="[object Float32Array]",Qt="[object Float64Array]",Xt="[object Int8Array]",te="[object Int16Array]",ee="[object Int32Array]",ne="[object Uint8Array]",re="[object Uint8ClampedArray]",ie="[object Uint16Array]",oe="[object Uint32Array]",ae=/\b__p \+= '';/g,ue=/\b(__p \+=) '' \+/g,se=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ce=/&(?:amp|lt|gt|quot|#39|#96);/g,le=/[&<>"'`]/g,fe=RegExp(ce.source),pe=RegExp(le.source),he=/<%-([\s\S]+?)%>/g,de=/<%([\s\S]+?)%>/g,ve=/<%=([\s\S]+?)%>/g,ge=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,me=/^\w*$/,$e=/^\./,ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,we=/[\\^$.*+?()[\]{}|]/g,be=RegExp(we.source),_e=/^\s+|\s+$/g,xe=/^\s+/,Se=/\s+$/,Ee=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ce=/\{\n\/\* \[wrapped with (.+)\] \*/,ke=/,? & /,Re=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ae=/\\(\\)?/g,Oe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Te=/\w*$/,Ie=/^0x/i,je=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,Fe=/^\[object .+?Constructor\]$/,Ue=/^0o[0-7]+$/i,Ve=/^(?:0|[1-9]\d*)$/,De=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ne=/($^)/,Me=/['\n\r\u2028\u2029\\]/g,qe="\\ud800-\\udfff",He="\\u0300-\\u036f\\ufe20-\\ufe23",Le="\\u20d0-\\u20f0",ze="\\u2700-\\u27bf",Be="a-z\\xdf-\\xf6\\xf8-\\xff",We="\\xac\\xb1\\xd7\\xf7",Ge="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Je="\\u2000-\\u206f",Ze=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ye="A-Z\\xc0-\\xd6\\xd8-\\xde",Ke="\\ufe0e\\ufe0f",Qe=We+Ge+Je+Ze,Xe="['’]",tn="["+qe+"]",en="["+Qe+"]",nn="["+He+Le+"]",rn="\\d+",on="["+ze+"]",an="["+Be+"]",un="[^"+qe+Qe+rn+ze+Be+Ye+"]",sn="\\ud83c[\\udffb-\\udfff]",cn="(?:"+nn+"|"+sn+")",ln="[^"+qe+"]",fn="(?:\\ud83c[\\udde6-\\uddff]){2}",pn="[\\ud800-\\udbff][\\udc00-\\udfff]",hn="["+Ye+"]",dn="\\u200d",vn="(?:"+an+"|"+un+")",gn="(?:"+hn+"|"+un+")",mn="(?:"+Xe+"(?:d|ll|m|re|s|t|ve))?",$n="(?:"+Xe+"(?:D|LL|M|RE|S|T|VE))?",yn=cn+"?",wn="["+Ke+"]?",bn="(?:"+dn+"(?:"+[ln,fn,pn].join("|")+")"+wn+yn+")*",_n=wn+yn+bn,xn="(?:"+[on,fn,pn].join("|")+")"+_n,Sn="(?:"+[ln+nn+"?",nn,fn,pn,tn].join("|")+")",En=RegExp(Xe,"g"),Cn=RegExp(nn,"g"),kn=RegExp(sn+"(?="+sn+")|"+Sn+_n,"g"),Rn=RegExp([hn+"?"+an+"+"+mn+"(?="+[en,hn,"$"].join("|")+")",gn+"+"+$n+"(?="+[en,hn+vn,"$"].join("|")+")",hn+"?"+vn+"+"+mn,hn+"+"+$n,rn,xn].join("|"),"g"),An=RegExp("["+dn+qe+He+Le+Ke+"]"),On=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Tn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],In=-1,jn={};jn[Kt]=jn[Qt]=jn[Xt]=jn[te]=jn[ee]=jn[ne]=jn[re]=jn[ie]=jn[oe]=!0,jn[It]=jn[jt]=jn[Zt]=jn[Pt]=jn[Yt]=jn[Ft]=jn[Ut]=jn[Vt]=jn[Nt]=jn[Mt]=jn[qt]=jn[Lt]=jn[zt]=jn[Bt]=jn[Gt]=!1;var Pn={};Pn[It]=Pn[jt]=Pn[Zt]=Pn[Yt]=Pn[Pt]=Pn[Ft]=Pn[Kt]=Pn[Qt]=Pn[Xt]=Pn[te]=Pn[ee]=Pn[Nt]=Pn[Mt]=Pn[qt]=Pn[Lt]=Pn[zt]=Pn[Bt]=Pn[Wt]=Pn[ne]=Pn[re]=Pn[ie]=Pn[oe]=!0,Pn[Ut]=Pn[Vt]=Pn[Gt]=!1;var Fn={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Vn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Dn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Nn=parseFloat,Mn=parseInt,qn="object"==typeof global&&global&&global.Object===Object&&global,Hn="object"==typeof self&&self&&self.Object===Object&&self,Ln=qn||Hn||Function("return this")(),zn="object"==typeof exports&&exports&&!exports.nodeType&&exports,Bn=zn&&"object"==typeof module&&module&&!module.nodeType&&module,Wn=Bn&&Bn.exports===zn,Gn=Wn&&qn.process,Jn=function(){try{return Gn&&Gn.binding("util")}catch(t){}}(),Zn=Jn&&Jn.isArrayBuffer,Yn=Jn&&Jn.isDate,Kn=Jn&&Jn.isMap,Qn=Jn&&Jn.isRegExp,Xn=Jn&&Jn.isSet,tr=Jn&&Jn.isTypedArray,er=x("length"),nr=S(Fn),rr=S(Un),ir=S(Vn),or=Q();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Ln._=or,define(function(){return or})):Bn?((Bn.exports=or)._=or,zn._=or):Ln._=or}.call(this),function(){"use strict";angular.module("angular-loading-bar",["cfp.loadingBarInterceptor"]),angular.module("chieffancypants.loadingBar",["cfp.loadingBarInterceptor"]),angular.module("cfp.loadingBarInterceptor",["cfp.loadingBar"]).config(["$httpProvider",function(t){var e=["$q","$cacheFactory","$timeout","$rootScope","$log","cfpLoadingBar",function(e,n,r,i,o,a){function u(){r.cancel(c),a.complete(),f=0,l=0}function s(e){var r,i=n.get("$http"),o=t.defaults;!e.cache&&!o.cache||e.cache===!1||"GET"!==e.method&&"JSONP"!==e.method||(r=angular.isObject(e.cache)?e.cache:angular.isObject(o.cache)?o.cache:i);var a=void 0!==r&&void 0!==r.get(e.url);return void 0!==e.cached&&a!==e.cached?e.cached:(e.cached=a,a)}var c,l=0,f=0,p=a.latencyThreshold;return{request:function(t){return t.ignoreLoadingBar||s(t)||(i.$broadcast("cfpLoadingBar:loading",{url:t.url}),0===l&&(c=r(function(){a.start()},p)),l++,a.set(f/l)),t},response:function(t){return t&&t.config?(t.config.ignoreLoadingBar||s(t.config)||(f++,i.$broadcast("cfpLoadingBar:loaded",{url:t.config.url,result:t}),f>=l?u():a.set(f/l)),t):(o.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),t)},responseError:function(t){return t&&t.config?(t.config.ignoreLoadingBar||s(t.config)||(f++,i.$broadcast("cfpLoadingBar:loaded",{url:t.config.url,result:t}),f>=l?u():a.set(f/l)),e.reject(t)):(o.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),e.reject(t))}}}];t.interceptors.push(e)}]),angular.module("cfp.loadingBar",[]).provider("cfpLoadingBar",function(){this.autoIncrement=!0,this.includeSpinner=!0,this.includeBar=!0,this.latencyThreshold=100,this.startSize=.02,this.parentSelector="body",this.spinnerTemplate='<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>',this.loadingBarTemplate='<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>',this.$get=["$injector","$document","$timeout","$rootScope",function(t,e,n,r){function i(){if(l||(l=t.get("$animate")),n.cancel(p),!m){var i=e[0],a=i.querySelector?i.querySelector(h):e.find(h)[0];a||(a=i.getElementsByTagName("body")[0]);var u=angular.element(a),s=a.lastChild&&angular.element(a.lastChild);r.$broadcast("cfpLoadingBar:started"),m=!0,b&&l.enter(d,u,s),w&&l.enter(g,u,d),o(_)}}function o(t){if(m){var e=100*t+"%";v.css("width",e),$=t,y&&(n.cancel(f),f=n(function(){a()},250))}}function a(){if(!(u()>=1)){var t=0,e=u();t=e>=0&&e<.25?(3*Math.random()+3)/100:e>=.25&&e<.65?3*Math.random()/100:e>=.65&&e<.9?2*Math.random()/100:e>=.9&&e<.99?.005:0;var n=u()+t;o(n)}}function u(){return $}function s(){$=0,m=!1}function c(){l||(l=t.get("$animate")),r.$broadcast("cfpLoadingBar:completed"),o(1),n.cancel(p),p=n(function(){var t=l.leave(d,s);t&&t.then&&t.then(s),l.leave(g)},500)}var l,f,p,h=this.parentSelector,d=angular.element(this.loadingBarTemplate),v=d.find("div").eq(0),g=angular.element(this.spinnerTemplate),m=!1,$=0,y=this.autoIncrement,w=this.includeSpinner,b=this.includeBar,_=this.startSize;return{start:i,set:o,status:u,inc:a,complete:c,autoIncrement:this.autoIncrement,includeSpinner:this.includeSpinner,latencyThreshold:this.latencyThreshold,parentSelector:this.parentSelector,startSize:this.startSize}}]})}(),"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="satellizer"),function(t,e,n){"use strict";t.location.origin||(t.location.origin=t.location.protocol+"//"+t.location.hostname+(t.location.port?":"+t.location.port:"")),e.module("satellizer",[]).constant("SatellizerConfig",{httpInterceptor:function(){return!0},withCredentials:!1,tokenRoot:null,baseUrl:"/",loginUrl:"/auth/login",signupUrl:"/auth/signup",unlinkUrl:"/auth/unlink",tokenName:"token",tokenPrefix:"satellizer",authHeader:"Authorization",authToken:"Bearer",storageType:"localStorage",providers:{facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:t.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:t.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display","state"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633},state:function(){var t=Math.random().toString(36).substr(2);return encodeURIComponent(t)}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:t.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:t.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:t.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:t.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:t.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:t.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:t.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:t.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}}}}).provider("$auth",["SatellizerConfig",function(t){Object.defineProperties(this,{httpInterceptor:{get:function(){return t.httpInterceptor},set:function(e){"function"==typeof e?t.httpInterceptor=e:t.httpInterceptor=function(){return e}}},baseUrl:{get:function(){return t.baseUrl},set:function(e){t.baseUrl=e}},loginUrl:{get:function(){return t.loginUrl},set:function(e){t.loginUrl=e}},signupUrl:{get:function(){return t.signupUrl},set:function(e){t.signupUrl=e}},tokenRoot:{get:function(){return t.tokenRoot},set:function(e){t.tokenRoot=e}},tokenName:{get:function(){return t.tokenName},set:function(e){t.tokenName=e}},tokenPrefix:{get:function(){return t.tokenPrefix},set:function(e){t.tokenPrefix=e}},unlinkUrl:{get:function(){return t.unlinkUrl},set:function(e){t.unlinkUrl=e}},authHeader:{get:function(){return t.authHeader},set:function(e){t.authHeader=e}},authToken:{get:function(){return t.authToken},set:function(e){t.authToken=e}},withCredentials:{get:function(){return t.withCredentials},set:function(e){t.withCredentials=e}},storageType:{get:function(){return t.storageType},set:function(e){t.storageType=e}}}),e.forEach(Object.keys(t.providers),function(n){this[n]=function(r){return e.extend(t.providers[n],r)}},this);var n=function(n){t.providers[n.name]=t.providers[n.name]||{},e.extend(t.providers[n.name],n)};this.oauth1=function(e){n(e),t.providers[e.name].oauthType="1.0"},this.oauth2=function(e){n(e),t.providers[e.name].oauthType="2.0"},this.$get=["$q","SatellizerShared","SatellizerLocal","SatellizerOauth",function(t,e,n,r){var i={};return i.login=function(t,e){return n.login(t,e)},i.signup=function(t,e){return n.signup(t,e)},i.logout=function(){return e.logout()},i.authenticate=function(t,e){return r.authenticate(t,e)},i.link=function(t,e){return r.authenticate(t,e)},i.unlink=function(t,e){return r.unlink(t,e)},i.isAuthenticated=function(){return e.isAuthenticated()},i.getToken=function(){return e.getToken()},i.setToken=function(t){e.setToken({access_token:t})},i.removeToken=function(){return e.removeToken()},i.getPayload=function(){return e.getPayload()},i.setStorageType=function(t){return e.setStorageType(t)},i}]}]).factory("SatellizerShared",["$q","$window","$log","SatellizerConfig","SatellizerStorage",function(r,i,o,a,u){var s={},c=a.tokenPrefix?[a.tokenPrefix,a.tokenName].join("_"):a.tokenName;return s.getToken=function(){return u.get(c)},s.getPayload=function(){var e=u.get(c);if(e&&3===e.split(".").length)try{var r=e.split(".")[1],i=r.replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(escape(t.atob(i))))}catch(o){return n}},s.setToken=function(t){if(!t)return o.warn("Can't set token without passing a value");var n,r=t&&t.access_token;if(r&&(e.isObject(r)&&e.isObject(r.data)?t=r:e.isString(r)&&(n=r)),!n&&t){var i=a.tokenRoot&&a.tokenRoot.split(".").reduce(function(t,e){return t[e]},t.data);n=i?i[a.tokenName]:t.data&&t.data[a.tokenName]}if(!n){var s=a.tokenRoot?a.tokenRoot+"."+a.tokenName:a.tokenName;return o.warn('Expecting a token named "'+s)}u.set(c,n)},s.removeToken=function(){u.remove(c)},s.isAuthenticated=function(){var t=u.get(c);if(t){if(3===t.split(".").length)try{var e=t.split(".")[1],n=e.replace(/-/g,"+").replace(/_/g,"/"),r=JSON.parse(i.atob(n)).exp;if(r){var o=Math.round((new Date).getTime()/1e3)>=r;return!o}}catch(a){return!0}return!0}return!1},s.logout=function(){return u.remove(c),r.when()},s.setStorageType=function(t){a.storageType=t},s}]).factory("SatellizerOauth",["$q","$http","SatellizerConfig","SatellizerUtils","SatellizerShared","SatellizerOauth1","SatellizerOauth2",function(t,e,n,r,i,o,a){var u={};return u.authenticate=function(e,r){var u="1.0"===n.providers[e].oauthType?new o:new a,s=t.defer();return u.open(n.providers[e],r||{}).then(function(t){n.providers[e].url&&i.setToken(t,!1),s.resolve(t)})["catch"](function(t){s.reject(t)}),s.promise},u.unlink=function(t,i){return i=i||{},i.url=i.url?i.url:r.joinUrl(n.baseUrl,n.unlinkUrl),i.data={provider:t}||i.data,i.method=i.method||"POST",i.withCredentials=i.withCredentials||n.withCredentials,e(i)},u}]).factory("SatellizerLocal",["$http","SatellizerUtils","SatellizerShared","SatellizerConfig",function(t,e,n,r){var i={};return i.login=function(i,o){return o=o||{},o.url=o.url?o.url:e.joinUrl(r.baseUrl,r.loginUrl),o.data=i||o.data,o.method=o.method||"POST",o.withCredentials=o.withCredentials||r.withCredentials,t(o).then(function(t){return n.setToken(t),t})},i.signup=function(n,i){return i=i||{},i.url=i.url?i.url:e.joinUrl(r.baseUrl,r.signupUrl),i.data=n||i.data,i.method=i.method||"POST",i.withCredentials=i.withCredentials||r.withCredentials,t(i)},i}]).factory("SatellizerOauth2",["$q","$http","$window","$timeout","SatellizerPopup","SatellizerUtils","SatellizerConfig","SatellizerStorage",function(n,r,i,o,a,u,s,c){return function(){var i={},l={defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"}};return i.open=function(r,s){l=u.merge(r,l);var f=n.defer();return o(function(){var n,r,o=l.name+"_state";e.isFunction(l.state)?c.set(o,l.state()):e.isString(l.state)&&c.set(o,l.state),n=[l.authorizationEndpoint,i.buildQueryString()].join("?"),r=t.cordova?a.open(n,l.name,l.popupOptions,l.redirectUri).eventListener(l.redirectUri):a.open(n,l.name,l.popupOptions,l.redirectUri).pollPopup(l.redirectUri),r.then(function(t){return"token"!==l.responseType&&l.url?t.state&&t.state!==c.get(o)?f.reject("The value returned in the state parameter does not match the state value from your original authorization code request."):void f.resolve(i.exchangeForToken(t,s)):f.resolve(t)},function(t){f.reject(t)})}),f.promise},i.exchangeForToken=function(t,n){var i=e.extend({},n);e.forEach(l.responseParams,function(e,n){switch(n){case"code":i[e]=t.code;break;case"clientId":i[e]=l.clientId;break;case"redirectUri":i[e]=l.redirectUri;break;default:i[e]=t[n]}}),t.state&&(i.state=t.state);var o=s.baseUrl?u.joinUrl(s.baseUrl,l.url):l.url;return r.post(o,i,{withCredentials:s.withCredentials})},i.buildQueryString=function(){var t=[],n=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];return e.forEach(n,function(n){e.forEach(l[n],function(n){var r=u.camelCase(n),i=e.isFunction(l[n])?l[n]():l[r];if("redirect_uri"!==n||i){if("state"===n){var o=l.name+"_state";i=encodeURIComponent(c.get(o))}"scope"===n&&Array.isArray(i)&&(i=i.join(l.scopeDelimiter),l.scopePrefix&&(i=[l.scopePrefix,i].join(l.scopeDelimiter))),t.push([n,i])}})}),t.map(function(t){return t.join("=")}).join("&")},i}}]).factory("SatellizerOauth1",["$q","$http","SatellizerPopup","SatellizerConfig","SatellizerUtils",function(n,r,i,o,a){return function(){var n={},u={url:null,name:null,popupOptions:null,redirectUri:null,authorizationEndpoint:null};return n.open=function(s,c){e.extend(u,s);var l,f=o.baseUrl?a.joinUrl(o.baseUrl,u.url):u.url;return t.cordova||(l=i.open("",u.name,u.popupOptions,u.redirectUri)),r.post(f,u).then(function(e){var r=[u.authorizationEndpoint,n.buildQueryString(e.data)].join("?");t.cordova?l=i.open(r,u.name,u.popupOptions,u.redirectUri):l.popupWindow.location=r;var o;return o=t.cordova?l.eventListener(u.redirectUri):l.pollPopup(u.redirectUri),o.then(function(t){return n.exchangeForToken(t,c)})})},n.exchangeForToken=function(t,n){var i=e.extend({},n,t),s=o.baseUrl?a.joinUrl(o.baseUrl,u.url):u.url;return r.post(s,i,{withCredentials:o.withCredentials})},n.buildQueryString=function(t){var n=[];return e.forEach(t,function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))}),n.join("&")},n}}]).factory("SatellizerPopup",["$q","$interval","$window","SatellizerConfig","SatellizerUtils",function(r,i,o,a,u){var s={};return s.url="",s.popupWindow=null,s.open=function(e,n,r){s.url=e;var i=s.stringifyOptions(s.prepareOptions(r)),a=o.navigator.userAgent,u=t.cordova||a.indexOf("CriOS")>-1?"_blank":n;return s.popupWindow=o.open(e,u,i),o.popup=s.popupWindow,s.popupWindow&&s.popupWindow.focus&&s.popupWindow.focus(),s},s.eventListener=function(t){var n=r.defer();return s.popupWindow.addEventListener("loadstart",function(r){if(0===r.url.indexOf(t)){var i=document.createElement("a");if(i.href=r.url,i.search||i.hash){var o=i.search.substring(1).replace(/\/$/,""),a=i.hash.substring(1).replace(/\/$/,""),c=u.parseQueryString(a),l=u.parseQueryString(o);e.extend(l,c),l.error||n.resolve(l),s.popupWindow.close()}}}),s.popupWindow.addEventListener("loaderror",function(){n.reject("Authorization Failed")}),n.promise},s.pollPopup=function(t){var o=r.defer(),a=document.createElement("a");a.href=t;var c=u.getFullUrlPath(a),l=i(function(){
s.popupWindow&&!s.popupWindow.closed&&s.popupWindow.closed!==n||(o.reject("The popup window was closed."),i.cancel(l));try{var t=u.getFullUrlPath(s.popupWindow.location);if(t===c){if(s.popupWindow.location.search||s.popupWindow.location.hash){var r=s.popupWindow.location.search.substring(1).replace(/\/$/,""),a=s.popupWindow.location.hash.substring(1).replace(/[\/$]/,""),f=u.parseQueryString(a),p=u.parseQueryString(r);e.extend(p,f),p.error?o.reject(p):o.resolve(p)}else o.reject("Redirect has occurred but no query or hash parameters were found. They were either not set during the redirect, or were removed before Satellizer could read them, e.g. AngularJS routing mechanism.");i.cancel(l),s.popupWindow.close()}}catch(h){}},20);return o.promise},s.prepareOptions=function(t){t=t||{};var n=t.width||500,r=t.height||500;return e.extend({width:n,height:r,left:o.screenX+(o.outerWidth-n)/2,top:o.screenY+(o.outerHeight-r)/2.5},t)},s.stringifyOptions=function(t){var n=[];return e.forEach(t,function(t,e){n.push(e+"="+t)}),n.join(",")},s}]).service("SatellizerUtils",function(){this.getFullUrlPath=function(t){var e="https:"===t.protocol;return t.protocol+"//"+t.hostname+":"+(t.port||(e?"443":"80"))+(/^\//.test(t.pathname)?t.pathname:"/"+t.pathname)},this.camelCase=function(t){return t.replace(/([\:\-\_]+(.))/g,function(t,e,n,r){return r?n.toUpperCase():n})},this.parseQueryString=function(t){var n,r,i={};return e.forEach((t||"").split("&"),function(t){t&&(r=t.split("="),n=decodeURIComponent(r[0]),i[n]=!e.isDefined(r[1])||decodeURIComponent(r[1]))}),i},this.joinUrl=function(t,e){if(/^(?:[a-z]+:)?\/\//i.test(e))return e;var n=[t,e].join("/"),r=function(t){return t.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return r(n)},this.merge=function(t,e){var n={};for(var r in t)t.hasOwnProperty(r)&&(r in e&&"object"==typeof t[r]&&null!==r?n[r]=this.merge(t[r],e[r]):n[r]=t[r]);for(r in e)if(e.hasOwnProperty(r)){if(r in n)continue;n[r]=e[r]}return n}}).factory("SatellizerStorage",["$window","$log","SatellizerConfig",function(t,e,n){var r={},i=function(){try{var e=n.storageType in t&&null!==t[n.storageType];if(e){var r=Math.random().toString(36).substring(7);t[n.storageType].setItem(r,""),t[n.storageType].removeItem(r)}return e}catch(i){return!1}}();return i||e.warn(n.storageType+" is not available."),{get:function(e){return i?t[n.storageType].getItem(e):r[e]},set:function(e,o){return i?t[n.storageType].setItem(e,o):r[e]=o},remove:function(e){return i?t[n.storageType].removeItem(e):delete r[e]}}}]).factory("SatellizerInterceptor",["$q","SatellizerConfig","SatellizerStorage","SatellizerShared",function(t,e,n,r){return{request:function(t){if(t.skipAuthorization)return t;if(r.isAuthenticated()&&e.httpInterceptor(t)){var i=e.tokenPrefix?e.tokenPrefix+"_"+e.tokenName:e.tokenName,o=n.get(i);e.authHeader&&e.authToken&&(o=e.authToken+" "+o),t.headers[e.authHeader]=o}return t},responseError:function(e){return t.reject(e)}}}]).config(["$httpProvider",function(t){t.interceptors.push("SatellizerInterceptor")}])}(window,window.angular),function(){var t=angular.module("restangular",[]);t.provider("Restangular",function(){var t={};t.init=function(t,e){function n(t,e,n,r){var i={};return _.each(_.keys(r),function(o){var a=r[o];a.params=_.extend({},a.params,t.defaultRequestParams[a.method.toLowerCase()]),_.isEmpty(a.params)&&delete a.params,t.isSafe(a.method)?i[o]=function(){return e(_.extend(a,{url:n}))}:i[o]=function(t){return e(_.extend(a,{url:n,data:t}))}}),i}t.configuration=e;var r=["get","head","options","trace","getlist"];e.isSafe=function(t){return _.includes(r,t.toLowerCase())};var i=/^https?:\/\//i;e.isAbsoluteUrl=function(t){return _.isUndefined(e.absoluteUrl)||_.isNull(e.absoluteUrl)?t&&i.test(t):e.absoluteUrl},e.absoluteUrl=!!_.isUndefined(e.absoluteUrl)||e.absoluteUrl,t.setSelfLinkAbsoluteUrl=function(t){e.absoluteUrl=t},e.baseUrl=_.isUndefined(e.baseUrl)?"":e.baseUrl,t.setBaseUrl=function(t){return e.baseUrl=/\/$/.test(t)?t.substring(0,t.length-1):t,this},e.extraFields=e.extraFields||[],t.setExtraFields=function(t){return e.extraFields=t,this},e.defaultHttpFields=e.defaultHttpFields||{},t.setDefaultHttpFields=function(t){return e.defaultHttpFields=t,this},e.withHttpValues=function(t,n){return _.defaults(n,t,e.defaultHttpFields)},e.encodeIds=!!_.isUndefined(e.encodeIds)||e.encodeIds,t.setEncodeIds=function(t){e.encodeIds=t},e.defaultRequestParams=e.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},t.setDefaultRequestParams=function(t,n){var r=[],i=n||t;return _.isUndefined(n)?r.push("common"):_.isArray(t)?r=t:r.push(t),_.each(r,function(t){e.defaultRequestParams[t]=i}),this},t.requestParams=e.defaultRequestParams,e.defaultHeaders=e.defaultHeaders||{},t.setDefaultHeaders=function(n){return e.defaultHeaders=n,t.defaultHeaders=e.defaultHeaders,this},t.defaultHeaders=e.defaultHeaders,e.methodOverriders=e.methodOverriders||[],t.setMethodOverriders=function(t){var n=_.extend([],t);return e.isOverridenMethod("delete",n)&&n.push("remove"),e.methodOverriders=n,this},e.jsonp=!_.isUndefined(e.jsonp)&&e.jsonp,t.setJsonp=function(t){e.jsonp=t},e.isOverridenMethod=function(t,n){var r=n||e.methodOverriders;return!_.isUndefined(_.find(r,function(e){return e.toLowerCase()===t.toLowerCase()}))},e.urlCreator=e.urlCreator||"path",t.setUrlCreator=function(t){if(!_.has(e.urlCreatorFactory,t))throw new Error("URL Path selected isn't valid");return e.urlCreator=t,this},e.restangularFields=e.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",singleOne:"singleOne",plain:"plain",save:"save",restangularized:"restangularized"},t.setRestangularFields=function(t){return e.restangularFields=_.extend(e.restangularFields,t),this},e.isRestangularized=function(t){return!!t[e.restangularFields.restangularized]},e.setFieldToElem=function(t,e,n){var r=t.split("."),i=e;return _.each(_.initial(r),function(t){i[t]={},i=i[t]}),i[_.last(r)]=n,this},e.getFieldFromElem=function(t,e){var n=t.split("."),r=e;return _.each(n,function(t){r&&(r=r[t])}),angular.copy(r)},e.setIdToElem=function(t,n){return e.setFieldToElem(e.restangularFields.id,t,n),this},e.getIdFromElem=function(t){return e.getFieldFromElem(e.restangularFields.id,t)},e.isValidId=function(t){return""!==t&&!_.isUndefined(t)&&!_.isNull(t)},e.setUrlToElem=function(t,n){return e.setFieldToElem(e.restangularFields.selfLink,t,n),this},e.getUrlFromElem=function(t){return e.getFieldFromElem(e.restangularFields.selfLink,t)},e.useCannonicalId=!_.isUndefined(e.useCannonicalId)&&e.useCannonicalId,t.setUseCannonicalId=function(t){return e.useCannonicalId=t,this},e.getCannonicalIdFromElem=function(t){var n=t[e.restangularFields.cannonicalId],r=e.isValidId(n)?n:e.getIdFromElem(t);return r},e.responseInterceptors=e.responseInterceptors||[],e.defaultResponseInterceptor=function(t){return t},e.responseExtractor=function(t,n,r,i,o,a){var u=angular.copy(e.responseInterceptors);u.push(e.defaultResponseInterceptor);var s=t;return _.each(u,function(t){s=t(s,n,r,i,o,a)}),s},t.addResponseInterceptor=function(t){return e.responseInterceptors.push(t),this},e.errorInterceptors=e.errorInterceptors||[],t.addErrorInterceptor=function(t){return e.errorInterceptors.push(t),this},t.setResponseInterceptor=t.addResponseInterceptor,t.setResponseExtractor=t.addResponseInterceptor,t.setErrorInterceptor=t.addErrorInterceptor,e.requestInterceptors=e.requestInterceptors||[],e.defaultInterceptor=function(t,e,n,r,i,o,a){return{element:t,headers:i,params:o,httpConfig:a}},e.fullRequestInterceptor=function(t,n,r,i,o,a,u){var s=angular.copy(e.requestInterceptors),c=e.defaultInterceptor(t,n,r,i,o,a,u);return _.reduce(s,function(t,e){return _.extend(t,e(t.element,n,r,i,t.headers,t.params,t.httpConfig))},c)},t.addRequestInterceptor=function(t){return e.requestInterceptors.push(function(e,n,r,i,o,a,u){return{headers:o,params:a,element:t(e,n,r,i),httpConfig:u}}),this},t.setRequestInterceptor=t.addRequestInterceptor,t.addFullRequestInterceptor=function(t){return e.requestInterceptors.push(t),this},t.setFullRequestInterceptor=t.addFullRequestInterceptor,e.onBeforeElemRestangularized=e.onBeforeElemRestangularized||function(t){return t},t.setOnBeforeElemRestangularized=function(t){return e.onBeforeElemRestangularized=t,this},t.setRestangularizePromiseInterceptor=function(t){return e.restangularizePromiseInterceptor=t,this},e.onElemRestangularized=e.onElemRestangularized||function(t){return t},t.setOnElemRestangularized=function(t){return e.onElemRestangularized=t,this},e.shouldSaveParent=e.shouldSaveParent||function(){return!0},t.setParentless=function(t){return _.isArray(t)?e.shouldSaveParent=function(e){return!_.includes(t,e)}:_.isBoolean(t)&&(e.shouldSaveParent=function(){return!t}),this},e.suffix=_.isUndefined(e.suffix)?null:e.suffix,t.setRequestSuffix=function(t){return e.suffix=t,this},e.transformers=e.transformers||{},t.addElementTransformer=function(n,r,i){var o=null,a=null;2===arguments.length?a=r:(a=i,o=r);var u=e.transformers[n];return u||(u=e.transformers[n]=[]),u.push(function(t,e){return _.isNull(o)||t===o?a(e):e}),t},t.extendCollection=function(e,n){return t.addElementTransformer(e,!0,n)},t.extendModel=function(e,n){return t.addElementTransformer(e,!1,n)},e.transformElem=function(t,n,r,i,o){if(!o&&!e.transformLocalElements&&!t[e.restangularFields.fromServer])return t;var a=e.transformers[r],u=t;return a&&_.each(a,function(t){u=t(n,u)}),e.onElemRestangularized(u,n,r,i)},e.transformLocalElements=!_.isUndefined(e.transformLocalElements)&&e.transformLocalElements,t.setTransformOnlyServerElements=function(t){e.transformLocalElements=!t},e.fullResponse=!_.isUndefined(e.fullResponse)&&e.fullResponse,t.setFullResponse=function(t){return e.fullResponse=t,this},e.urlCreatorFactory={};var o=function(){};o.prototype.setConfig=function(t){return this.config=t,this},o.prototype.parentsArray=function(t){for(var e=[];t;)e.push(t),t=t[this.config.restangularFields.parentResource];return e.reverse()},o.prototype.resource=function(t,r,i,o,a,u,s,c){var l=_.defaults(a||{},this.config.defaultRequestParams.common),f=_.defaults(o||{},this.config.defaultHeaders);s&&(e.isSafe(c)?f["If-None-Match"]=s:f["If-Match"]=s);var p=this.base(t);if(u){var h="";/\/$/.test(p)||(h+="/"),h+=u,p+=h}return this.config.suffix&&p.indexOf(this.config.suffix,p.length-this.config.suffix.length)===-1&&!this.config.getUrlFromElem(t)&&(p+=this.config.suffix),t[this.config.restangularFields.httpConfig]=void 0,n(this.config,r,p,{getList:this.config.withHttpValues(i,{method:"GET",params:l,headers:f}),get:this.config.withHttpValues(i,{method:"GET",params:l,headers:f}),jsonp:this.config.withHttpValues(i,{method:"jsonp",params:l,headers:f}),put:this.config.withHttpValues(i,{method:"PUT",params:l,headers:f}),post:this.config.withHttpValues(i,{method:"POST",params:l,headers:f}),remove:this.config.withHttpValues(i,{method:"DELETE",params:l,headers:f}),head:this.config.withHttpValues(i,{method:"HEAD",params:l,headers:f}),trace:this.config.withHttpValues(i,{method:"TRACE",params:l,headers:f}),options:this.config.withHttpValues(i,{method:"OPTIONS",params:l,headers:f}),patch:this.config.withHttpValues(i,{method:"PATCH",params:l,headers:f})})};var a=function(){};a.prototype=new o,a.prototype.normalizeUrl=function(t){var e=/(http[s]?:\/\/)?(.*)?/.exec(t);return e[2]=e[2].replace(/[\\\/]+/g,"/"),"undefined"!=typeof e[1]?e[1]+e[2]:e[2]},a.prototype.base=function(t){var n=this;return _.reduce(this.parentsArray(t),function(t,r){var i,o=n.config.getUrlFromElem(r);if(o){if(n.config.isAbsoluteUrl(o))return o;i=o}else if(i=r[n.config.restangularFields.route],r[n.config.restangularFields.restangularCollection]){var a=r[n.config.restangularFields.ids];a&&(i+="/"+a.join(","))}else{var u;u=n.config.useCannonicalId?n.config.getCannonicalIdFromElem(r):n.config.getIdFromElem(r),e.isValidId(u)&&!r.singleOne&&(i+="/"+(n.config.encodeIds?encodeURIComponent(u):u))}return t=t.replace(/\/$/,"")+"/"+i,n.normalizeUrl(t)},this.config.baseUrl)},a.prototype.fetchUrl=function(t,e){var n=this.base(t);return e&&(n+="/"+e),n},a.prototype.fetchRequestedUrl=function(t,n){function r(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e.sort()}function i(t,e,n){for(var i=r(t),o=0;o<i.length;o++)e.call(n,t[i[o]],i[o]);return i}function o(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}var a=this.fetchUrl(t,n),u=t[e.restangularFields.reqParams];if(!u)return a+(this.config.suffix||"");var s=[];return i(u,function(t,e){null!==t&&void 0!==t&&(angular.isArray(t)||(t=[t]),angular.forEach(t,function(t){angular.isObject(t)&&(t=angular.toJson(t)),s.push(o(e)+"="+o(t))}))}),a+(this.config.suffix||"")+(a.indexOf("?")===-1?"?":"&")+s.join("&")},e.urlCreatorFactory.path=a};var e={};t.init(this,e),this.$get=["$http","$q",function(n,r){function i(e){function o(t,n,r,i,o){if(n[e.restangularFields.route]=r,n[e.restangularFields.getRestangularUrl]=_.bind(H.fetchUrl,H,n),n[e.restangularFields.getRequestedUrl]=_.bind(H.fetchRequestedUrl,H,n),n[e.restangularFields.addRestangularMethod]=_.bind(D,n),n[e.restangularFields.clone]=_.bind(m,n,n),n[e.restangularFields.reqParams]=_.isEmpty(i)?null:i,n[e.restangularFields.withHttpConfig]=_.bind(C,n),n[e.restangularFields.plain]=_.bind(v,n,n),n[e.restangularFields.restangularized]=!0,n[e.restangularFields.one]=_.bind(a,n,n),n[e.restangularFields.all]=_.bind(u,n,n),n[e.restangularFields.several]=_.bind(s,n,n),n[e.restangularFields.oneUrl]=_.bind(c,n,n),n[e.restangularFields.allUrl]=_.bind(l,n,n),n[e.restangularFields.fromServer]=!!o,t&&e.shouldSaveParent(r)){var f=e.getIdFromElem(t),p=e.getUrlFromElem(t),h=_.union(_.values(_.pick(e.restangularFields,["route","singleOne","parentResource"])),e.extraFields),d=_.pick(t,h);e.isValidId(f)&&e.setIdToElem(d,f,r),e.isValidId(p)&&e.setUrlToElem(d,p,r),n[e.restangularFields.parentResource]=d}else n[e.restangularFields.parentResource]=null;return n}function a(t,n,r,i){var o;if(_.isNumber(n)||_.isNumber(t))throw o="You're creating a Restangular entity with the number ",o+="instead of the route or the parent. For example, you can't call .one(12).",new Error(o);if(_.isUndefined(n))throw o="You're creating a Restangular entity either without the path. ",o+="For example you can't call .one(). Please check if your arguments are valid.",new Error(o);var a={};return e.setIdToElem(a,r,n),e.setFieldToElem(e.restangularFields.singleOne,a,i),$(t,a,n,!1)}function u(t,e){return y(t,[],e,!1)}function s(t,n){var r=[];return r[e.restangularFields.ids]=Array.prototype.splice.call(arguments,2),y(t,r,n,!1)}function c(t,n,r){if(!n)throw new Error("Route is mandatory when creating new Restangular objects.");var i={};return e.setUrlToElem(i,r,n),$(t,i,n,!1)}function l(t,n,r){if(!n)throw new Error("Route is mandatory when creating new Restangular objects.");var i={};return e.setUrlToElem(i,r,n),y(t,i,n,!1)}function f(t,n,r){return t.call=_.bind(p,t),t.get=_.bind(h,t),t[e.restangularFields.restangularCollection]=n,n&&(t.push=_.bind(p,t,"push")),t.$object=r,e.restangularizePromiseInterceptor&&e.restangularizePromiseInterceptor(t),t}function p(t){var n=r.defer(),i=arguments,o={};return this.then(function(e){var r=Array.prototype.slice.call(i,1),a=e[t];a.apply(e,r),o=e,n.resolve(e)}),f(n.promise,this[e.restangularFields.restangularCollection],o)}function h(t){var n=r.defer(),i={};return this.then(function(e){i=e[t],n.resolve(i)}),f(n.promise,this[e.restangularFields.restangularCollection],i)}function d(t,n,r,i){return _.extend(i,r),e.fullResponse?t.resolve(_.extend(n,{data:r})):void t.resolve(r)}function v(t){if(_.isArray(t)){var n=[];return _.each(t,function(t){n.push(e.isRestangularized(t)?v(t):t)}),n}return _.omit(t,_.values(_.omit(e.restangularFields,"id")))}function g(t){t[e.restangularFields.customOperation]=_.bind(V,t),_.each(["put","post","get","delete"],function(e){_.each(["do","custom"],function(n){var r,i="delete"===e?"remove":e,o=n+e.toUpperCase();r="put"!==i&&"post"!==i?V:function(t,e,n,r,i){return _.bind(V,this)(t,n,r,i,e)},t[o]=_.bind(r,t,i)})}),t[e.restangularFields.customGETLIST]=_.bind(E,t),t[e.restangularFields.doGETLIST]=t[e.restangularFields.customGETLIST]}function m(t,n){var r=angular.copy(t,n);return $(r[e.restangularFields.parentResource],r,r[e.restangularFields.route],!0)}function $(t,n,r,i,a,u){var s=e.onBeforeElemRestangularized(n,!1,r),c=o(t,s,r,u,i);return e.useCannonicalId&&(c[e.restangularFields.cannonicalId]=e.getIdFromElem(c)),a&&(c[e.restangularFields.getParentList]=function(){return a}),c[e.restangularFields.restangularCollection]=!1,c[e.restangularFields.get]=_.bind(A,c),c[e.restangularFields.getList]=_.bind(E,c),c[e.restangularFields.put]=_.bind(T,c),c[e.restangularFields.post]=_.bind(I,c),c[e.restangularFields.remove]=_.bind(O,c),c[e.restangularFields.head]=_.bind(j,c),c[e.restangularFields.trace]=_.bind(P,c),c[e.restangularFields.options]=_.bind(F,c),c[e.restangularFields.patch]=_.bind(U,c),c[e.restangularFields.save]=_.bind(k,c),g(c),e.transformElem(c,!1,r,q,!0)}function y(t,n,r,i,a){var u=e.onBeforeElemRestangularized(n,!0,r),s=o(t,u,r,a,i);return s[e.restangularFields.restangularCollection]=!0,s[e.restangularFields.post]=_.bind(I,s,null),s[e.restangularFields.remove]=_.bind(O,s),s[e.restangularFields.head]=_.bind(j,s),s[e.restangularFields.trace]=_.bind(P,s),s[e.restangularFields.putElement]=_.bind(x,s),s[e.restangularFields.options]=_.bind(F,s),s[e.restangularFields.patch]=_.bind(U,s),s[e.restangularFields.get]=_.bind(b,s),s[e.restangularFields.getList]=_.bind(E,s,null),g(s),e.transformElem(s,!0,r,q,!0)}function w(t,e,n){var r=y(t,e,n,!1);return _.each(r,function(e){$(t,e,n,!1)}),r}function b(t,e,n){return this.customGET(t.toString(),e,n)}function x(t,n,i){var o=this,a=this[t],u=r.defer(),s=[];return s=e.transformElem(s,!0,a[e.restangularFields.route],q),a.put(n,i).then(function(e){var n=m(o);n[t]=e,s=n,u.resolve(n)},function(t){u.reject(t)}),f(u.promise,!0,s)}function S(t,n,r,i,o,a){var u=e.responseExtractor(t,n,r,i,o,a),s=o.headers("ETag");return u&&s&&(u[e.restangularFields.etag]=s),u}function E(t,i,o){var a=this,u=r.defer(),s="getList",c=H.fetchUrl(this,t),l=t||a[e.restangularFields.route],p=e.fullRequestInterceptor(null,s,l,c,o||{},i||{},this[e.restangularFields.httpConfig]||{}),h=[];h=e.transformElem(h,!0,l,q);var v="getList";e.jsonp&&(v="jsonp");var g=function(n){var r=n.data,i=n.config.params,o=S(r,s,l,c,n,u);if((_.isUndefined(o)||""===o)&&(o=[]),!_.isArray(o))throw new Error("Response for getList SHOULD be an array and not an object or something else");var f=_.map(o,function(n){return a[e.restangularFields.restangularCollection]?$(a[e.restangularFields.parentResource],n,a[e.restangularFields.route],!0,o):$(a,n,t,!0,o)});f=_.extend(o,f),a[e.restangularFields.restangularCollection]?d(u,n,y(a[e.restangularFields.parentResource],f,a[e.restangularFields.route],!0,i),h):d(u,n,y(a,f,t,!0,i),h)};return H.resource(this,n,p.httpConfig,p.headers,p.params,t,this[e.restangularFields.etag],s)[v]().then(g,function(t){304===t.status&&a[e.restangularFields.restangularCollection]?d(u,t,a,h):_.every(e.errorInterceptors,function(e){return e(t,u,g)!==!1})&&u.reject(t)}),f(u.promise,!0,h)}function C(t){return this[e.restangularFields.httpConfig]=t,this}function k(t,n){return this[e.restangularFields.fromServer]?this[e.restangularFields.put](t,n):_.bind(R,this)("post",void 0,t,void 0,n)}function R(t,i,o,a,u){var s=this,c=r.defer(),l=o||{},p=i||this[e.restangularFields.route],h=H.fetchUrl(this,i),g=a||this,m=g[e.restangularFields.etag]||("post"!==t?this[e.restangularFields.etag]:null);_.isObject(g)&&e.isRestangularized(g)&&(g=v(g));var y=e.fullRequestInterceptor(g,t,p,h,u||{},l||{},this[e.restangularFields.httpConfig]||{}),w={};w=e.transformElem(w,!1,p,q);var b=function(n){var r=n.data,i=n.config.params,o=S(r,t,p,h,n,c);if(o){var a;"post"!==t||s[e.restangularFields.restangularCollection]?(a=$(s[e.restangularFields.parentResource],o,s[e.restangularFields.route],!0,null,i),a[e.restangularFields.singleOne]=s[e.restangularFields.singleOne],d(c,n,a,w)):(a=$(s[e.restangularFields.parentResource],o,p,!0,null,i),d(c,n,a,w))}else d(c,n,void 0,w)},x=function(n){304===n.status&&e.isSafe(t)?d(c,n,s,w):_.every(e.errorInterceptors,function(t){return t(n,c,b)!==!1})&&c.reject(n)},E=t,C=_.extend({},y.headers),k=e.isOverridenMethod(t);return k?(E="post",C=_.extend(C,{"X-HTTP-Method-Override":"remove"===t?"DELETE":t.toUpperCase()})):e.jsonp&&"get"===E&&(E="jsonp"),e.isSafe(t)?k?H.resource(this,n,y.httpConfig,C,y.params,i,m,E)[E]({}).then(b,x):H.resource(this,n,y.httpConfig,C,y.params,i,m,E)[E]().then(b,x):H.resource(this,n,y.httpConfig,C,y.params,i,m,E)[E](y.element).then(b,x),f(c.promise,!1,w)}function A(t,e){return _.bind(R,this)("get",void 0,t,void 0,e)}function O(t,e){return _.bind(R,this)("remove",void 0,t,void 0,e)}function T(t,e){return _.bind(R,this)("put",void 0,t,void 0,e)}function I(t,e,n,r){return _.bind(R,this)("post",t,n,e,r)}function j(t,e){return _.bind(R,this)("head",void 0,t,void 0,e)}function P(t,e){return _.bind(R,this)("trace",void 0,t,void 0,e)}function F(t,e){return _.bind(R,this)("options",void 0,t,void 0,e)}function U(t,e,n){return _.bind(R,this)("patch",void 0,e,t,n)}function V(t,e,n,r,i){return _.bind(R,this)(t,e,n,i,r)}function D(t,n,r,i,o,a){var u;u="getList"===n?_.bind(E,this,r):_.bind(V,this,n,r);var s=function(t,e,n){var r=_.defaults({params:t,headers:e,elem:n},{params:i,headers:o,elem:a});return u(r.params,r.headers,r.elem)};e.isSafe(n)?this[t]=s:this[t]=function(t,e,n){return s(e,n,t)}}function N(n){var r=angular.copy(_.omit(e,"configuration"));return t.init(r,r),n(r),i(r)}function M(t,n){var r=_.values(e.restangularFields),i={},o=(n||q).all(t);i.one=_.bind(a,n||q,n,t),i.post=_.bind(o.post,o),i.getList=_.bind(o.getList,o);for(var u in o)o.hasOwnProperty(u)&&_.isFunction(o[u])&&!_.includes(r,u)&&(i[u]=_.bind(o[u],o));return i}var q={},H=new e.urlCreatorFactory[e.urlCreator];return H.setConfig(e),t.init(q,e),q.copy=_.bind(m,q),q.service=_.bind(M,q),q.withConfig=_.bind(N,q),q.one=_.bind(a,q,null),q.all=_.bind(u,q,null),q.several=_.bind(s,q,null),q.oneUrl=_.bind(c,q,null),q.allUrl=_.bind(l,q,null),q.stripRestangular=_.bind(v,q),q.restangularizeElement=_.bind($,q),q.restangularizeCollection=_.bind(w,q),q}return i(e)}]})}();
(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/contact/contact.component.html',
    '\n' +
    '<!-- ############################# contact ############################# -->\n' +
    '<section id="contact" class="section">\n' +
    '\n' +
    '\n' +
    '    <!-- ############ section container ############ -->\n' +
    '    <div class="section-container container clearfix">\n' +
    '\n' +
    '        <hr class="divider">\n' +
    '        <div class="row clearfix">\n' +
    '            <h2 class="heading-m text-center">Send me a message</h2>\n' +
    '            <span class="sub-heading text-center">Please fill in your contact details</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- contact form -->\n' +
    '        <form action="http://themes.rascals.eu/spectra_html/plugins/contact-form.php" method="post" class="form contact-form">\n' +
    '            <div class="row clearfix">\n' +
    '                <div class="col-1-3">\n' +
    '                    <label for="contact-name"><strong>Name</strong> (required)</label>\n' +
    '                    <input type="text" name="name" value="" id="contact-name" required>\n' +
    '                </div>\n' +
    '                <div class="col-1-3">\n' +
    '                    <label for="contact-email"><strong>Email</strong> (required)</label>\n' +
    '                    <input type="email" name="email" value="" id="contact-email" required>\n' +
    '                </div>\n' +
    '                <div class="col-1-3 last">\n' +
    '                    <label for="contact-subject"><strong>Subject</strong></label>\n' +
    '                    <input type="text" name="subject" value="" id="contact-subject">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row clearfix">\n' +
    '                <div class="col-1-1">\n' +
    '                    <label for="contact-message"><strong>Your Message</strong> (required)</label>\n' +
    '                    <textarea name="message" id="contact-message" cols="88" rows="6" required></textarea>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="hidden">\n' +
    '                <label for="contact-spam-check">Do not fill out this field this is spam check.</label>\n' +
    '                <input name="anty_spam" type="text" value="" id="contact-spam-check" />\n' +
    '            </div>\n' +
    '            <input type="submit" value="Submit Message" class="large">\n' +
    '            <div class="clear"></div>\n' +
    '        </form>\n' +
    '        <!-- /contact form -->\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- /section container -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /contact -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/countdown/countdown.component.html',
    '<!-- ############################# upcoming event ############################# -->\n' +
    '<section id="upcoming-event" class="event-countdown">\n' +
    '    <!-- container -->\n' +
    '    <div class="container clearfix">\n' +
    '        <!-- ############ content header ############ -->\n' +
    '        <header class="content-header">\n' +
    '            <h6 class="upcoming-event">Coming soon</h6>\n' +
    '            <h2 class="content-title">Technosearch,Manit</h2>\n' +
    '            <span class="sub-heading">Bhopal,India</span>\n' +
    '        </header>\n' +
    '        <!-- /content header -->\n' +
    '        <!-- countdown -->\n' +
    '        <div class="countdown" data-event-date="2016/10/21 20:20:00">\n' +
    '            <div class="days" data-label="Days">..</div>\n' +
    '            <div class="hours" data-label="Hours">..</div>\n' +
    '            <div class="minutes" data-label="Minutes">..</div>\n' +
    '            <div class="seconds" data-label="Seconds">..</div>\n' +
    '        </div>\n' +
    '        <!-- /countdown -->\n' +
    '    </div>\n' +
    '    <!-- /container -->\n' +
    '</section>\n' +
    '<!-- /upcoming event -->\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event/event.component.html',
    '<div class="container clearfix">\n' +
    '\n' +
    '    <!-- row -->\n' +
    '    <div class="row clearfix">\n' +
    '        <!-- column -->\n' +
    '        <div class="col-1-2">\n' +
    '            <h2>Event Details</h2>\n' +
    '            <p>\n' +
    '                Sed luctus neque ac sem aliquam imperdiet. In quis porttitor tortor. Pellentesque scelerisque quam et quam pretium imperdiet. Aenean scelerisque tincidunt dolor et consectetur.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu felis tellus, sit amet elementum est. Proin posuere turpis lectus, eget vulputate erat. Nunc eget metus in magna vulputate elementum sed ut leo. Mauris at mauris purus, ut laoreet eros.</p>\n' +
    '            <p>\n' +
    '                Sed luctus neque ac sem aliquam imperdiet. In quis porttitor tortor. Pellentesque scelerisque quam et quam pretium imperdiet. Aenean scelerisque tincidunt dolor et consectetur.\n' +
    '            </p>\n' +
    '            <blockquote>\n' +
    '                <p>\n' +
    '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu felis tellus, sit amet elementum est. Proin posuere turpis lectus, eget vulputate erat. Nunc eget metus in magna vulputate elementum sed ut leo. Mauris at mauris purus, ut laoreet eros.\n' +
    '                </p>\n' +
    '            </blockquote>\n' +
    '            <!-- large button -->\n' +
    '            <a class="btn large alignleft"><span class="button-icon icon-cart-3"></span> Buy Tickets</a>\n' +
    '        </div>\n' +
    '        <!-- /column -->\n' +
    '        <!-- column -->\n' +
    '        <div class="col-1-2 last">\n' +
    '            <h2>Promotion</h2>\n' +
    '            <!-- image poster -->\n' +
    '            <img src="placeholders/event-poster-01-520x700.jpg" alt="event poster">\n' +
    '        </div>\n' +
    '        <!-- /column -->\n' +
    '    </div>\n' +
    '    <!-- /row -->\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event-list/event-list.component.html',
    '<!-- ############################# events ############################# -->\n' +
    '<section id="events" class="section">\n' +
    '\n' +
    '\n' +
    '    <!-- ############ event container loaded via ajax ############ -->\n' +
    '    <div id="event" class="ajax-holder"></div>\n' +
    '    <!-- /event container -->\n' +
    '\n' +
    '    <!-- ############ events list ############ -->\n' +
    '    <!-- todo: add the events list in another page -->\n' +
    '    <ul id="events-list">\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-01-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">08/23</span>\n' +
    '                <h2><a href="event01.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Amsterdam Dance</a></h2>\n' +
    '                <span class="event-location">Amsterdam, Netherlands</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-02-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">09/02</span>\n' +
    '                <h2><a href="event02.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Bacardi Original Bar</a></h2>\n' +
    '                <span class="event-location">Budapest (budapest), Hungary</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <li style="background-image: url(placeholders/event-03-1920x573.jpg);">\n' +
    '            <div class="inner">\n' +
    '                <span class="event-date">09/18</span>\n' +
    '                <h2><a href="event03.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Luxorlive</a></h2>\n' +
    '                <span class="event-location">Arnhem, Netherlands</span>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <!-- /event -->\n' +
    '        <!-- event -->\n' +
    '        <!--<li style="background-image: url(placeholders/event-04-1920x573.jpg);">-->\n' +
    '            <!--<div class="inner">-->\n' +
    '                <!--<span class="event-date">10/30</span>-->\n' +
    '                <!--<h2><a href="event04.html" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Papagayo Beach Club</a></h2>-->\n' +
    '                <!--<span class="event-location">Santa Cruz De Tenerife, Spain</span>-->\n' +
    '            <!--</div>-->\n' +
    '        <!--</li>-->\n' +
    '        <!-- /event -->\n' +
    '    </ul>\n' +
    '    <!-- /events list -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /events -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/event-table/event-table.component.html',
    '<div class="container clearfix">\n' +
    '\n' +
    '    <h2>Tour dates</h2>\n' +
    '\n' +
    '    <!-- ############ events table ############ -->\n' +
    '    <!-- tabs -->\n' +
    '    <div class="tabs-wrap">\n' +
    '        <!-- tabs navigation -->\n' +
    '        <ul class="tabs">\n' +
    '            <li><a href="#" class="active-tab">Feature Events</a></li>\n' +
    '            <li><a href="#">Previous Dates</a></li>\n' +
    '        </ul>\n' +
    '        <!-- /tabs navigation -->\n' +
    '        <!-- tab content -->\n' +
    '        <div class="tab-content" style="display: block;">\n' +
    '            <!-- future events table -->\n' +
    '            <table class="layout display responsive-table">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th>Date</th>\n' +
    '                    <th colspan="2">Event</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/15</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/17</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/19</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a class="buy-tickets sold" title="Buy Tickets">Sold Out</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">09/20</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/07</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/15</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">10/23</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">11/13</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a class="buy-tickets sold" title="Buy Tickets">Sold Out</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">11/23</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">12/02</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '            <!-- /end future events table -->\n' +
    '        </div>\n' +
    '        <!-- /tab content -->\n' +
    '\n' +
    '        <!-- tab content -->\n' +
    '        <div class="tab-content">\n' +
    '            <!-- past events table-->\n' +
    '            <table class="layout display responsive-table">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th>Date</th>\n' +
    '                    <th colspan="2">Event</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr>\n' +
    '                    <td class="table-date">01/21</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '                        <a href="#" class="buy-tickets invisible" title="Buy Tickets">Buy Tickets</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">02/18</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">03/12</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">06/22</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">06/30</td>\n' +
    '                    <td class="table-name">\n' +
    '                        Papagayo Beach Club<a href="#" class="event-location">Santa Cruz De Tenerife, Spain</a>\n' +
    '                    </td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">07/02</td>\n' +
    '                    <td class="table-name">Luxorlive<a href="#" class="event-location">Arnhem, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">07/22</td>\n' +
    '                    <td class="table-name">Space<a href="#" class="event-location">Ibiza, Spain</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/11</td>\n' +
    '                    <td class="table-name">Bacardi Original Bar<a href="#" class="event-location">Budapest (budapest), Hungary</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '                <tr>\n' +
    '                    <td class="table-date">08/13</td>\n' +
    '                    <td class="table-name">Escape<a href="#" class="event-location">Amsterdam, Netherlands</a></td>\n' +
    '                    <td class="actions">\n' +
    '\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '            <!-- /past events table -->\n' +
    '        </div>\n' +
    '        <!-- /tab content -->\n' +
    '    </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/events/events.component.html',
    '<!-- ############################# portfolio ############################# -->\n' +
    '<section id="portfolio" class="section">\n' +
    '\n' +
    '    <!-- ############ Paralax Intro ############ -->\n' +
    '    <div id="portfolio-header" class="section-header parallax clearfix" style="background-image: url(placeholders/release-header-1920x1000.jpg)" data-interia="0.1">\n' +
    '        <div class="overlay"></div> <!-- overlay layer -->\n' +
    '        <!-- /container -->\n' +
    '        <div class="container clearfix">\n' +
    '            <h6 class="section-sub-heading">MORE THAN 30+ EVENTS</h6>\n' +
    '            <h2 class="section-heading">AMAZING EVENTS</h2>\n' +
    '        </div>\n' +
    '        <!-- /container -->\n' +
    '    </div>\n' +
    '    <!-- /parallax intro -->\n' +
    '\n' +
    '    <!-- ############ project container loaded via ajax ############ -->\n' +
    '    <!--<div id="project" class="ajax-holder"></div>-->\n' +
    '    <!-- /project container -->\n' +
    '\n' +
    '    <!-- ############ portfolio filter ############ -->\n' +
    '    <div id="portfolio-main-filter" class="filter">\n' +
    '        <ul class="filter-list item-filter active-filter clearfix">\n' +
    '            <li class="filter-label"><span class="label">Events</span></li>\n' +
    '            <li><a data-categories="*">All</a></li>\n' +
    '            <li><a data-categories="robitics">Robotics</a></li>\n' +
    '            <li><a data-categories="coding">Coding</a></li>\n' +
    '            <li><a data-categories="coding">Departmental</a></li>\n' +
    '            <li><a data-categories="aerodrome">Aerodrome</a></li>\n' +
    '            <li><a data-categories="literary">Literary</a></li>\n' +
    '            <li><a data-categories="strategical">Strategical</a></li>\n' +
    '            <li><a data-categories="fun">Social</a></li>\n' +
    '            <li><a data-categories="more">Fun</a></li>\n' +
    '            <li><a data-categories="more">PhotoBooths</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <!-- /portfolio filter -->\n' +
    '\n' +
    '    <!-- ############ portfolio grid ############ -->\n' +
    '    <div id="portfolio-items" class="fullwidth items clearfix">\n' +
    '        <!-- item -->\n' +
    '\n' +
    '        <!--                CODING EVENTS -->\n' +
    '        <div class="item" data-categories="coding">\n' +
    '            <a href="project01.html" class="thumb project-thumb project-by-ajax tip" >\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Awesome Bass <span>(Big image intro)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <!-- image -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release01-360x360.jpg" alt="Release image" >\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge new">NEW</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Awesome Bass</span>\n' +
    '                    <span class="tip-genre">NEW / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2013-04-05</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="new drum-and-bass">\n' +
    '            <a href="project02.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Tomorrow\'s Harvest <span>(Vimeo video)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release02-360x360.jpg" alt="Release image" >\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge new">NEW</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Tomorrow\'s Harvest</span>\n' +
    '                    <span class="tip-genre">NEW / Drum and Bass</span>\n' +
    '                    <span class="tip-date">2013-01-23</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass uk-funky">\n' +
    '            <a href="project03.html" class="thumb project-thumb project-by-ajax tip" >\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Atmosphere <span>(Image slider+soundcloud)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release03-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Atmosphere</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-12-23</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass glitch">\n' +
    '            <a href="project04.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Center of The Universe <span>(Full width image slider)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release04-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Center of The Universe</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2012-10-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep">\n' +
    '            <a href="project05.html" class="thumb project-thumb project-by-ajax tip">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Faster Than Light EP <span>(Masonry boxes)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release05-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Faster Than Light EP</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-08-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep">\n' +
    '            <a href="https://soundcloud.com/ukfmusic/ukf-music-podcast-2-physical-in-the-mix" class="thumb project-thumb tip fap-single-track">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Back To The Acid <span>(Play Soundcloud podcast)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release06-360x360.jpg" alt="Release image">\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge free">FREE</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Back To The Acid</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-07-22</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="uk-funky glitch">\n' +
    '            <a href="https://soundcloud.com/chinch-jack/sets/jungle-sets" class="thumb project-thumb tip fap-single-track">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Skylarking - Remixes <span>(Play Soundcloud playlist)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release07-360x360.jpg" alt="Release image" >\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Skylarking - Remixes</span>\n' +
    '                    <span class="tip-genre">UK Funky / Glitch Hop</span>\n' +
    '                    <span class="tip-date">2012-07-16</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat dubstep glitch">\n' +
    '            <a href="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F2999711&amp;color=ff7700&amp;auto_play=false&amp;show_artwork=true" class="thumb project-thumb mediabox tip" data-width="auto" data-height="450">\n' +
    '                <!-- title and opacity mask -->\n' +
    '                <div class="inner">\n' +
    '                    <h6>Defiant Order <span>(Open Soundcloud in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <!-- /title and opacity mask -->\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release08-360x360.jpg" alt="Release image">\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Defiant Order</span>\n' +
    '                    <span class="tip-genre">Breakbeat / Glitch Hop / Dubstep</span>\n' +
    '                    <span class="tip-date">2012-05-07</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="drum-and-bass uk-funky">\n' +
    '            <a href="placeholders/cover01-big.jpg" class="thumb project-thumb tip imagebox" title="Album Cover">\n' +
    '                <div class="inner">\n' +
    '                    <h6>Things Can Only Get Better <span>(Open image in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release09-360x360.jpg" alt="Release image">\n' +
    '                <!-- badge -->\n' +
    '                <span class="badge free">FREE</span>\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Things Can Only Get Better</span>\n' +
    '                    <span class="tip-genre">Drum and Bass / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-04-11</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '        <!-- item -->\n' +
    '        <div class="item" data-categories="breakbeat uk-funky">\n' +
    '            <a href="http://player.vimeo.com/video/47224685?byline=0&amp;portrait=0&amp;color=ff9933" class="thumb project-thumb tip mediabox" data-width="auto" data-height="auto">\n' +
    '                <div class="inner">\n' +
    '                    <h6>Numbers / Limelight <span>(Open video in lightbox)</span></h6>\n' +
    '                </div>\n' +
    '                <img class="lazy" src="placeholders/placeholder.png" data-src="placeholders/release10-360x360.jpg" alt="Release image">\n' +
    '                <!-- tooltip -->\n' +
    '                <div class="tip-content animate hidden">\n' +
    '                    <span class="tip-title">Numbers / Limelight</span>\n' +
    '                    <span class="tip-genre">Breakbeat / UK Funky</span>\n' +
    '                    <span class="tip-date">2012-03-11</span>\n' +
    '                </div>\n' +
    '                <!-- /tooltip -->\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <!-- /item -->\n' +
    '    </div>\n' +
    '    <!-- /portfolio grid -->\n' +
    '\n' +
    '</section>\n' +
    '<!-- /portfolio -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/footer/footer.component.html',
    '<div id="footer">\n' +
    '    <div class="container">\n' +
    '        <div id="copyrights">\n' +
    '            <img src="placeholders/logo-footer.png" class="aligncenter" alt="footer-logo">\n' +
    '            &copy; 2016 TechnoSearch. All Rights Reserved.\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/gallery/gallery.component.html',
    '<!-- ############################# gallery section ############################# -->\n' +
    '<section id="gallery">\n' +
    '\n' +
    '    <!-- ############ ajax content (This content will be loaded by ajax) ############ -->\n' +
    '    <div id="ajax-content" class="page-container">\n' +
    '\n' +
    '        <!-- ############ container ############ -->\n' +
    '        <div class="container clearfix">\n' +
    '\n' +
    '            <!-- ############ content header ############ -->\n' +
    '            <header class="content-header">\n' +
    '                <h1 class="content-title">Gallery</h1>\n' +
    '                <span class="sub-heading">Previous Techno Pictures</span>\n' +
    '                <hr class="content-line">\n' +
    '            </header>\n' +
    '            <!-- /content header -->\n' +
    '\n' +
    '            <!-- row -->\n' +
    '            <div class="row clearfix">\n' +
    '\n' +
    '                <!-- ############ masonry ############ -->\n' +
    '                <div class="masonry clearfix">\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="thumb imagebox" data-group="amsterdam-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Amsterdam Festival <span>23 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="amsterdam-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="thumb imagebox" data-group="bacardi-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Bacardi Original Bar <span>12 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="bacardi-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-2 height-1-2">\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="thumb imagebox" data-group="sepang-2013-10-12" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Sepang International Circuit <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-544x544.jpg" alt="Gallery image title">\n' +
    '                            <!-- badge -->\n' +
    '                            <span class="badge new">NEW</span>\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="sepang-2013-10-12"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="thumb imagebox" data-group="gal01" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal01"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="thumb imagebox" data-group="gal02" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal02"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="thumb imagebox" data-group="gal03" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal03"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="thumb imagebox" data-group="gal04" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-04-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal04"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="thumb imagebox" data-group="gal05" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-03-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal05"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="thumb imagebox" data-group="gal06" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-04-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal06"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="thumb imagebox" data-group="gal07" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-01-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal07"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                    <!-- brick -->\n' +
    '                    <div class="brick width-1-4 height-1-4">\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="thumb imagebox" data-group="gal08" title="Gallery image title">\n' +
    '                            <!-- title and opacity mask -->\n' +
    '                            <div class="inner">\n' +
    '                                <h6>Gallery Title <span>08 Photos</span></h6>\n' +
    '                            </div>\n' +
    '                            <!-- image -->\n' +
    '                            <img src="placeholders/gallery-02-272x272.jpg" alt="Gallery image title">\n' +
    '                        </a>\n' +
    '                        <!-- Gallery photos -->\n' +
    '                        <a href="placeholders/gallery-02-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-01-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-02-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-03-544x544.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-01-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-03-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                        <a href="placeholders/gallery-04-272x272.jpg" class="hidden imagebox" title="Gallery image title" data-group="gal08"></a>\n' +
    '                    </div>\n' +
    '                    <!-- /brick -->\n' +
    '                </div>\n' +
    '                <!-- /masonry -->\n' +
    '            </div>\n' +
    '            <!-- /row -->\n' +
    '\n' +
    '            <div class="clear"></div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <!-- /container -->\n' +
    '    </div>\n' +
    '    <!-- /ajax contant -->\n' +
    '</section>\n' +
    '<!-- /404 section -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/map/map.component.html',
    '<!-- ############ GMap ############ -->\n' +
    '<div id="contact-map" class="gmap clearfix" data-address="Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia" data-zoom="16" data-zoom_control="true" data-scrollwheel="false"></div>\n' +
    '<!-- /gmap -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/navbar/navbar.component.html',
    '<!-- ############################# navigation section ############################# -->\n' +
    '<div id="top" style="position: absolute"></div>\n' +
    '<section id="main-nav-wrapper">\n' +
    '    <!-- main navigation -->\n' +
    '    <div id="main-nav">\n' +
    '\n' +
    '        <!-- ############ search ############ -->\n' +
    '        <div id="search-wrap" style="display:none">\n' +
    '            <input type="text" placeholder="Search and hit enter..." name="s" id="search" />\n' +
    '        </div>\n' +
    '        <!-- /search -->\n' +
    '\n' +
    '        <!-- navigation container -->\n' +
    '        <div class="nav-container">\n' +
    '\n' +
    '            <!-- ############ logo ############ -->\n' +
    '            <a ui-sref="app.home" id="logo" class="smooth-scroll">\n' +
    '                <img src="placeholders/logo.png" alt="Logo">\n' +
    '            </a>\n' +
    '            <!-- /logo -->\n' +
    '\n' +
    '            <!-- ############ icon navigation ############ -->\n' +
    '            <nav id="icon-nav">\n' +
    '                <ul>\n' +
    '                    <!-- todo show the up arrow button only on the home page -->\n' +
    '                    <li><a href="#top" id="nav-up" class="smooth-scroll"><span class="icon-arrow-up-2"></span></a></li>\n' +
    '                    <li><a ui-sref="app.search" id="nav-search"><span class="icon-search"></span></a></li>\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '            <!-- /icon navigation -->\n' +
    '\n' +
    '            <!-- ############ navigation ############ -->\n' +
    '            <nav id="nav" class="one-page-nav">\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.events">Events</a>\n' +
    '                        <ul>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.competitions">Competitions</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.workshops">Workshops</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.guestlectures">Guest Lectures</a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a ui-sref="app.pronites">Pro-Nites</a>\n' +
    '                            </li>\n' +
    '\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.account">Account</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.gallery">Gallery</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.team">Team</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.sponsors">Sponsors</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="app.contact">Contact</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </nav>\n' +
    '            <!-- /navigation -->\n' +
    '\n' +
    '            <!-- responsive navigation -->\n' +
    '            <div id="dl-menu" class="dl-menuwrapper one-page-nav">\n' +
    '                <button class="dl-trigger">Open Menu</button>\n' +
    '                <!-- RESPONSIVE NAVIGATION HERE -->\n' +
    '            </div>\n' +
    '            <!-- /responsive navigation -->\n' +
    '        </div>\n' +
    '        <!-- /navigation container -->\n' +
    '    </div>\n' +
    '    <!-- /main navigation -->\n' +
    '</section>\n' +
    '<!-- /navigation section -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/social/social.component.html',
    '\n' +
    '<!-- ############################# social ############################# -->\n' +
    '<section id="social">\n' +
    '    <div class="flex-col-1-4"><a href="{{social.twitter}}" target="__blank" class="social-twitter"><span class="icon-twitter"></span>Twitter</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.fb}}" target="__blank" class="social-facebook"><span class="icon-facebook"></span>Facebook</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.youtube}}" target="__blank" class="social-youtube"><span class="icon-youtube"></span>Youtube</a></div>\n' +
    '    <div class="flex-col-1-4"><a href="{{social.g}}" target="__blank" class="social-google-plus"><span class="icon-google-plus"></span>Google Plus</a></div>\n' +
    '</section>\n' +
    '<!-- /social -->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/sponsors/sponsors.component.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/team/team.component.html',
    '\n' +
    '<div class="container">\n' +
    '    <div class="at-section">\n' +
    '        <div class="at-section__title">The Team</div>\n' +
    '    </div>\n' +
    '    <div data-column=\'3\' class="at-grid">\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Aaron Rossi</div>\n' +
    '                <div class="at-user__title">CEO &amp; Co-Founder</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Marco Gomez</div>\n' +
    '                <div class="at-user__title">Co-Founder, Creative Director</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/boheme/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Brad Joe</div>\n' +
    '                <div class="at-user__title">Office Manager</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Mitch Petty</div>\n' +
    '                <div class="at-user__title">Lead Developer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Philip Satemburgo</div>\n' +
    '                <div class="at-user__title">Community Manager</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg"/></div>\n' +
    '                <div class="at-user__name">George Petty</div>\n' +
    '                <div class="at-user__title">Lead Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Petty Rossi</div>\n' +
    '                <div class="at-user__title">Brand Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"/></div>\n' +
    '                <div class="at-user__name">Mitch Rossi</div>\n' +
    '                <div class="at-user__title">New Business</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="at-column">\n' +
    '            <div class="at-user">\n' +
    '                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/tonychester/128.jpg"/></div>\n' +
    '                <div class="at-user__name">George Mitch</div>\n' +
    '                <div class="at-user__title">UX Designer</div>\n' +
    '                <ul class="at-social">\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                    <li class="at-social__item"><a href="">\n' +
    '                        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fill-rule="evenodd"></path>\n' +
    '                        </svg></a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/welcome/welcome.component.html',
    '\n' +
    '\n' +
    '<!-- ############################# intro ############################# -->\n' +
    '<section id="intro" class="intro-resize parallax clearfix" style="background-image: url(placeholders/intro-image-1920x1080.jpg)">\n' +
    '    <!-- animated bg -->\n' +
    '    <div class="intro-bg"></div>\n' +
    '    <!-- container -->\n' +
    '    <div class="container">\n' +
    '        <!-- ############ logo ############ -->\n' +
    '        <img id="intro-logo" src="placeholders/intro-logo.png" alt="Logo">\n' +
    '        <!-- ############ ticker ############ -->\n' +
    '        <div id="ticker-wrap">\n' +
    '            <ul id="ticker">\n' +
    '                <li style=\'font-size:0.5em\'>\n' +
    '                    TECHNOSEARCH 2K16\n' +
    '                </li>\n' +
    '                <li style=\'font-size:0.5em\'>\n' +
    '                    Central India\'s Largest TechFest\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <!-- /ticker -->\n' +
    '        <!-- ############ header button ############ -->\n' +
    '        <a id="intro-button" class="smooth-scroll" href="#upcoming-event"><span>ENTER</span></a>\n' +
    '        <!-- ############ scroll arrows ############ -->\n' +
    '        <a id="scroll-arrows" class="smooth-scroll" href="#upcoming-event"><img src="img/scroll-arrows.png" alt="scroll down"></a>\n' +
    '    </div>\n' +
    '    <!-- /container -->\n' +
    '</section>\n' +
    '<!--/intro-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/account/account.page.html',
    '<md-content class="Page-container">\n' +
    '\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/contact/contact.page.html',
    '<navbar></navbar>\n' +
    '<!-- ############ section container ############ -->\n' +
    '<div class="section-container container clearfix">\n' +
    '\n' +
    '    <!-- ############ content header ############ -->\n' +
    '    <header class="content-header">\n' +
    '        <h1 class="content-title">Get in Touch</h1>\n' +
    '        <span class="sub-heading">Do not hesitate to booking me!</span>\n' +
    '        <hr class="content-line">\n' +
    '    </header>\n' +
    '    <!-- /content header -->\n' +
    '\n' +
    '    <div class="row clearfix">\n' +
    '        <p>Cras venenatis justo mi, non posuere enim aliquet malesuada. Nullam orci sem, adipiscing id rutrum et, blandit quis lorem. Phasellus lacus orci, cursus vitae mi eget, sagittis congue elit. Donec ac tincidunt tortor. Duis vel neque eleifend odio hendrerit consequat sed vel massa. Praesent tempor libero quis tincidunt fringilla. Aliquam congue, neque et aliquam eleifend, lacus diam aliquet urna, in sollicitudin neque nisl facilisis urna.</p>\n' +
    '        <br>\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-home icon"></span>\n' +
    '            <span class="txt"><strong>Level 13, 2 Elizabeth St, Melbourne Victoria </strong><br>3000 Australia</span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-phone icon"></span>\n' +
    '            <span class="txt"><strong>(123) 563-9899-234</strong><br>(123) 123-9899-234 (FAX)</span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 column-icon">\n' +
    '            <span class="icon-pencil-2 icon"></span>\n' +
    '            <span class="txt"><strong><a href="mailto:djspectra@djspectra.com">djspectra@djspectra.com</a></strong><br><a href="mailto:booking@djspectra.com">booking@djspectra.com</a> </span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '        <!-- column icon -->\n' +
    '        <div class="col-1-4 last column-icon">\n' +
    '            <span class="icon-share icon"></span>\n' +
    '            <span class="txt"><strong><a href="http://facebook.com/">facebook</a></strong><br><a href="http://twitter.com/">twitter</a><br><a href="http://soundcloud.com/">soundcloud</a></span>\n' +
    '        </div>\n' +
    '        <!-- /column icon -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<contact></contact>\n' +
    '<footer></footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/events/events.page.html',
    '<script>\n' +
    '    $(document).ready(function () {\n' +
    '        $(\'#main-nav\').removeClass(\'hide\').addClass(\'sticky\').css(\'top\',\'0px\');\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<navbar></navbar>\n' +
    '<event></event>\n' +
    '<event-table></event-table>\n' +
    '<social></social>\n' +
    '<footer></footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/gallery/gallery.page.html',
    '<md-content class="Page-container">\n' +
    '    <navbar></navbar>\n' +
    '    <gallery></gallery>\n' +
    '    <social></social>\n' +
    '    <footer></footer>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/home/home.page.html',
    '<welcome></welcome>\n' +
    '<navbar></navbar>\n' +
    '<countdown></countdown>\n' +
    '<events></events>\n' +
    '<event-list></event-list>\n' +
    '<map></map>\n' +
    '<contact></contact>\n' +
    '<social></social>\n' +
    '<sponsors></sponsors>\n' +
    '<footer></footer>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/team/team.page.html',
    '<md-content class="Page-container">\n' +
    '    <navbar></navbar>\n' +
    '    <team></team>\n' +
    '    <footer></footer>\n' +
    '\n' +
    '</md-content>\n' +
    '');
}]);
})();

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(8);

	__webpack_require__(15);

	__webpack_require__(30);

	__webpack_require__(31);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$state", "$transitions"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($state, $transitions) {
	    'ngInject';

	    var requiresAuthCriteria = {
	        to: function to($state) {
	            return $state.data && $state.data.auth;
	        }
	    };

	    var redirectToLogin = function redirectToLogin($auth) {
	        'ngInject';

	        if (!$auth.isAuthenticated()) {
	            return $state.target('app.login', undefined, { location: false });
	        }
	    };
	    redirectToLogin.$inject = ["$auth"];

	    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _satellizer = __webpack_require__(7);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	    };

	    $urlRouterProvider.otherwise('/');

	    /*
	        data: {auth: true} would require JWT auth
	        However you can't apply it to the abstract state
	        or landing state because you'll enter a redirect loop
	    */

	    $stateProvider.state('app', {
	        cache: false,
	        abstract: true,
	        data: {},
	        views: {
	            main: {}
	        }
	    }).state('app.home', {
	        cache: false,
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('home')
	            }
	        }
	    }).state('app.events', {
	        cache: false,
	        url: '/events',
	        views: {
	            'main@': {
	                templateUrl: getView('events')
	            }
	        }
	    }).state('app.competitions', {
	        cache: false,
	        url: '/competitions',
	        views: {
	            'main@': {
	                templateUrl: getView('competitions')
	            }
	        }
	    }).state('app.workshops', {
	        url: '/workshops',
	        views: {
	            'main@': {
	                templateUrl: getView('workshops')
	            }
	        }
	    }).state('app.guestlectures', {
	        url: '/guestlectures',
	        views: {
	            'main@': {
	                templateUrl: getView('guestlectures')
	            }
	        }
	    }).state('app.pronites', {
	        url: '/pronites',
	        views: {
	            'main@': {
	                templateUrl: getView('pronites')
	            }
	        }
	    }).state('app.account', {
	        url: '/account',
	        views: {
	            'main@': {
	                templateUrl: getView('account')
	            }
	        }
	    }).state('app.gallery', {
	        cache: false,
	        url: '/gallery',
	        views: {
	            'main@': {
	                templateUrl: getView('gallery')
	            }
	        }
	    }).state('app.team', {
	        url: '/team',
	        views: {
	            'main@': {
	                templateUrl: getView('team')
	            }
	        }
	    }).state('app.sponsors', {
	        url: '/sponsors',
	        views: {
	            'main@': {
	                templateUrl: getView('sponsors')
	            }
	        }
	    }).state('app.contact', {
	        url: '/contact',
	        views: {
	            'main@': {
	                templateUrl: getView('contact')
	            }
	        }
	    });

	    // $locationProvider.html5Mode(true);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(9);

	var _human_readable = __webpack_require__(10);

	var _truncate_characters = __webpack_require__(11);

	var _truncate_words = __webpack_require__(12);

	var _trust_html = __webpack_require__(13);

	var _ucfirst = __webpack_require__(14);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _team = __webpack_require__(16);

	var _gallery = __webpack_require__(17);

	var _map = __webpack_require__(18);

	var _eventTable = __webpack_require__(19);

	var _sponsors = __webpack_require__(20);

	var _welcome = __webpack_require__(21);

	var _footer = __webpack_require__(22);

	var _social = __webpack_require__(23);

	var _contact = __webpack_require__(24);

	var _eventList = __webpack_require__(25);

	var _events = __webpack_require__(26);

	var _event = __webpack_require__(27);

	var _countdown = __webpack_require__(28);

	var _navbar = __webpack_require__(29);

	angular.module('app.components').component('team', _team.TeamComponent).component('gallery', _gallery.GalleryComponent).component('map', _map.MapComponent).component('eventTable', _eventTable.EventTableComponent).component('sponsors', _sponsors.SponsorsComponent).component('welcome', _welcome.WelcomeComponent).component('footer', _footer.FooterComponent).component('social', _social.SocialComponent).component('contact', _contact.ContactComponent).component('eventList', _eventList.EventListComponent).component('events', _events.EventsComponent).component('event', _event.EventComponent).component('countdown', _countdown.CountdownComponent).component('navbar', _navbar.NavbarComponent);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TeamController = function () {
	    function TeamController() {
	        'ngInject';

	        //

	        _classCallCheck(this, TeamController);
	    }

	    _createClass(TeamController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return TeamController;
	}();

	var TeamComponent = exports.TeamComponent = {
	    templateUrl: './views/app/components/team/team.component.html',
	    controller: TeamController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GalleryController = function () {
	    function GalleryController() {
	        'ngInject';

	        //

	        _classCallCheck(this, GalleryController);
	    }

	    _createClass(GalleryController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            /* Fancybox (lightbox)
	             ------------------------- */
	            function formatTitle(title, currentArray, currentIndex, currentOpts) {
	                return '<div id="fancybox-title">' + (title && title.length ? title : '') + '<span>(' + (currentIndex + 1) + ' / ' + currentArray.length + ')</span></div>';
	            }

	            // Add Fancybox only for images
	            $('.imagebox', 'html').fancybox({
	                overlayOpacity: .9,
	                overlayColor: '#000',
	                padding: 0,
	                titleFormat: formatTitle
	            });
	        }
	    }]);

	    return GalleryController;
	}();

	var GalleryComponent = exports.GalleryComponent = {
	    templateUrl: './views/app/components/gallery/gallery.component.html',
	    controller: GalleryController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapController = function () {
	    function MapController() {
	        'ngInject';

	        //

	        _classCallCheck(this, MapController);
	    }

	    _createClass(MapController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return MapController;
	}();

	var MapComponent = exports.MapComponent = {
	    templateUrl: './views/app/components/map/map.component.html',
	    controller: MapController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventTableController = function () {
	    function EventTableController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventTableController);
	    }

	    _createClass(EventTableController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            /* Tabs
	             ------------------------- */
	            $('.tabs-wrap').each(function () {

	                /* List variables */
	                var tabs = $(this);

	                /* Init */
	                $('.tab-content', this).hide();
	                $('.tab-content:first', this).css('display', 'block');
	                $('ul.tabs li:first a', this).addClass('active-tab');

	                /* Click on Tab */
	                $('ul.tabs li', this).click(function () {
	                    if (!$(this).is('tab-active')) {
	                        var current = $(this).index();
	                        $('ul.tabs li a', tabs).removeClass('active-tab');
	                        $('a', this).addClass('active-tab');
	                        $('.tab-content:not(:eq(' + current + '))', tabs).css('display', 'none');
	                        $('.tab-content:eq(' + current + ')', tabs).css('display', 'block');
	                    }
	                    return false;
	                });
	            });
	        }
	    }]);

	    return EventTableController;
	}();

	var EventTableComponent = exports.EventTableComponent = {
	    templateUrl: './views/app/components/event-table/event-table.component.html',
	    controller: EventTableController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SponsorsController = function () {
	    function SponsorsController() {
	        'ngInject';

	        //

	        _classCallCheck(this, SponsorsController);
	    }

	    _createClass(SponsorsController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return SponsorsController;
	}();

	var SponsorsComponent = exports.SponsorsComponent = {
	    templateUrl: './views/app/components/sponsors/sponsors.component.html',
	    controller: SponsorsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WelcomeController = function () {
	    function WelcomeController() {
	        'ngInject';

	        //

	        _classCallCheck(this, WelcomeController);
	    }

	    _createClass(WelcomeController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            /* Main Settings
	             ---------------------------------------------------------------------- */
	            $(document).ready(function () {
	                var settings = {
	                    // Navigation height
	                    // nav_height: $('.nav-container').css('height').replace('px', ''),
	                    nav_height: 65,

	                    // Animations on mobile devices
	                    animations: false

	                };

	                /* Detect Touch Device and set animations
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    if (Modernizr == 'undefined') return;

	                    if (Modernizr.touch) {

	                        $('body').addClass('touch-device');
	                    }

	                    // Set animations on mobile devices
	                    var current_width = $(window).width();

	                    if (Modernizr.touch && current_width <= 568 && !settings.animations) {
	                        settings.animations = false;
	                    } else {
	                        settings.animations = true;
	                    }

	                    // console.log(settings.animations, current_width)
	                })();

	                /* Intro section
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    var intro = function intro() {
	                        var intro = $('.intro-resize'),
	                            win_width = $(window).width(),
	                            win_height = $(window).height(),
	                            intro_height = win_height;

	                        intro.css({
	                            height: intro_height + 'px'
	                        });

	                        // Center content
	                        var container = $('.container', intro),
	                            container_height = container.height(),
	                            intro_h = intro.height(),
	                            margin = (intro_h - container_height) / 2;

	                        container.css({
	                            'margin-top': margin + 'px'
	                        });
	                    };
	                    // Init intro
	                    intro();

	                    $(window).on('resize', intro);

	                    // Ticker
	                    function tick() {
	                        $('#ticker li:first').slideUp({
	                            duration: 600,
	                            easing: 'easeOutSine',
	                            complete: function complete() {
	                                $(this).appendTo($('#ticker')).slideDown();
	                            }
	                        });
	                    }
	                    if (settings.animations) {
	                        setInterval(function () {
	                            tick();
	                        }, 4000);
	                    }

	                    // Scroll arrow
	                    function scroll_arrows() {
	                        $('#scroll-arrows').find('img').stop().animate({
	                            marginTop: '15px'
	                        }, 1000, 'easeOutSine', function () {
	                            $('#scroll-arrows').find('img').stop().animate({
	                                marginTop: '-5px'
	                            }, 1000, 'easeInOutSine', function () {
	                                scroll_arrows();
	                            });
	                        });
	                    }
	                    if (settings.animations) {
	                        scroll_arrows();
	                    }
	                })();
	                function scripts(container) {
	                    /* Smooth Scroll
	                     ------------------------- */
	                    $('.smooth-scroll', container).on('click', function (e) {
	                        var $id = $(this).attr('href');

	                        // If element exists
	                        if ($($id).length) {
	                            $.scrollTo($id, 750, {
	                                easing: 'swing',
	                                // offset: {top: -settings.nav_height, left: 0}
	                                offset: { top: -65, left: 0 }
	                            });
	                        }
	                        e.preventDefault();
	                    });
	                }
	                scripts('html');
	            });
	        }
	    }]);

	    return WelcomeController;
	}();

	var WelcomeComponent = exports.WelcomeComponent = {
	    templateUrl: './views/app/components/welcome/welcome.component.html',
	    controller: WelcomeController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FooterController = function () {
	    function FooterController() {
	        'ngInject';

	        //

	        _classCallCheck(this, FooterController);
	    }

	    _createClass(FooterController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return FooterController;
	}();

	var FooterComponent = exports.FooterComponent = {
	    templateUrl: './views/app/components/footer/footer.component.html',
	    controller: FooterController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SocialController = function () {
	    function SocialController() {
	        'ngInject';

	        _classCallCheck(this, SocialController);

	        this.fb = 'http://www.facebook.com';
	        this.twitter = 'http://www.twitter.com';
	        this.youtube = 'http://www.youtube.com';
	        this.g = 'http://www.google.com/plus';

	        //
	    }

	    _createClass(SocialController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return SocialController;
	}();

	var SocialComponent = exports.SocialComponent = {
	    templateUrl: './views/app/components/social/social.component.html',
	    controller: SocialController,
	    controllerAs: 'social',
	    bindings: {}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContactController = function () {
	    function ContactController() {
	        'ngInject';

	        _classCallCheck(this, ContactController);
	    }

	    _createClass(ContactController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return ContactController;
	}();

	var ContactComponent = exports.ContactComponent = {
	    templateUrl: './views/app/components/contact/contact.component.html',
	    controller: ContactController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventListController = function () {
	    function EventListController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventListController);
	    }

	    _createClass(EventListController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return EventListController;
	}();

	var EventListComponent = exports.EventListComponent = {
	    templateUrl: './views/app/components/event-list/event-list.component.html',
	    controller: EventListController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsController = function () {
	    function EventsController() {
	        'ngInject';

	        //

	        _classCallCheck(this, EventsController);
	    }

	    _createClass(EventsController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            /* Portfolio
	             ---------------------------------------------------------------------- */
	            $(document).ready(function () {
	                /*
	                 * TextTyper ver. 1.0.0
	                 */

	                (function ($) {

	                    $.fn.extend({

	                        //pass the options variable to the function
	                        TextTyper: function TextTyper(options) {

	                            //Set the default values, use comma to separate the settings, example:
	                            var defaults = {
	                                syntax: ''
	                            };

	                            var options = $.extend(defaults, options);

	                            return $(this).each(function (index, element) {
	                                var $o = options,
	                                    $txt_box = $(element),
	                                    $my_txt = $txt_box.text(),
	                                    $my_max = $my_txt.length,
	                                    $rnd_str = "!#$%&/?abcdefghijklmnopqrstuvwxyz;ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
	                                    $set_max = $rnd_str.length,
	                                    $interval = 2,
	                                    $i = 0,
	                                    $counter = 0,
	                                    $flag = true,
	                                    $intervalID = setInterval(enterframe, 10);

	                                $txt_box.text('');
	                                $txt_box.show();

	                                function enterframe() {
	                                    if ($i < $my_max) {
	                                        if ($counter < $interval) {
	                                            $txt_box.text($my_txt.substr(0, $i));
	                                            for ($j = $i; $j < $my_max; $j++) {
	                                                $random = Math.floor(Math.random() * $set_max);
	                                                $txt_box.append($rnd_str.charAt($random));
	                                            }
	                                            $counter++;
	                                        } else {
	                                            $counter = 0;
	                                            $i++;
	                                        }
	                                    } else if ($flag) {
	                                        $txt_box.text($my_txt);
	                                        $flag = false;
	                                    }
	                                }
	                            });
	                        }
	                    });
	                })(jQuery);

	                function onWindowResize(callback) {
	                    var width = $(window).width(),
	                        height = $(window).height();

	                    $(window).resize(function () {
	                        var newWidth = $(window).width(),
	                            newHeight = $(window).height();

	                        if (newWidth !== width || newHeight !== height) {
	                            width = newWidth;
	                            height = newHeight;
	                            callback();
	                        }
	                    });
	                }

	                (function () {

	                    if (!$.fn.isotope) return;

	                    var $container = $('.items'),
	                        $win = $(window),
	                        $imgs = $('img.lazy');

	                    if ($container.length) {

	                        // Add filter event
	                        var _items_filter = function _items_filter($el, $data) {

	                            // Add all filter class
	                            $el.addClass('item-filter');

	                            // Add categories to item classes
	                            $('.item', $container).each(function (i) {
	                                var $this = $(this);
	                                $this.addClass($this.attr($data));
	                            });

	                            $el.on('click', 'a', function (e) {
	                                var $this = $(this),
	                                    $option = $this.attr($data);

	                                // Add active filter class
	                                $('.item-filter').removeClass('active-filter');
	                                $el.addClass('active-filter');
	                                $('.item-filter:not(.active-filter) li a').removeClass('active');
	                                $('.item-filter:not(.active-filter) li:first-child a').addClass('active');

	                                // Add/remove active class for this filter
	                                $el.find('a').removeClass('active');
	                                $this.addClass('active');

	                                if ($option) {
	                                    if ($option !== '*') $option = $option.replace($option, '.' + $option);
	                                    $container.isotope({ filter: $option });
	                                }

	                                e.preventDefault();
	                            });

	                            $el.find('a').first().addClass('active');
	                        };

	                        // Init filters


	                        /* Isotope
	                         ------------------------- */
	                        onWindowResize(function () {
	                            $container.isotope('layout');
	                        });
	                        $(window).load(function () {
	                            $container.isotope({
	                                itemSelector: '.item',
	                                onLayout: function onLayout() {
	                                    $win.trigger('scroll');
	                                }
	                            });
	                        });

	                        // Load images
	                        $imgs.jail({ effect: 'fadeIn' });if ($('.dd-filter-list').length) _items_filter($('.dd-filter-list'), 'data-categories');
	                        if ($('.filter-list').length) _items_filter($('.filter-list'), 'data-categories');
	                    }
	                })();
	            });
	        }
	    }]);

	    return EventsController;
	}();

	var EventsComponent = exports.EventsComponent = {
	    templateUrl: './views/app/components/events/events.component.html',
	    controller: EventsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventController = function () {
	    function EventController() {
	        'ngInject';

	        _classCallCheck(this, EventController);
	    }

	    _createClass(EventController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return EventController;
	}();

	var EventComponent = exports.EventComponent = {
	    templateUrl: './views/app/components/event/event.component.html',
	    controller: EventController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CountdownController = function () {
	    function CountdownController() {
	        'ngInject';

	        //

	        _classCallCheck(this, CountdownController);
	    }

	    _createClass(CountdownController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            /* Countdown
	             ------------------------- */
	            if ($.fn.countdown) {

	                $('.countdown').each(function (e) {
	                    var date = $(this).data('event-date');

	                    $(this).countdown(date, function (event) {
	                        var $this = $(this);

	                        switch (event.type) {
	                            case "seconds":
	                            case "minutes":
	                            case "hours":
	                            case "days":
	                            case "weeks":
	                            case "daysLeft":
	                                $this.find('.' + event.type).html(event.value);
	                                break;

	                            case "finished":

	                                break;
	                        }
	                    });
	                });
	            }
	        }
	    }]);

	    return CountdownController;
	}();

	var CountdownComponent = exports.CountdownComponent = {
	    templateUrl: './views/app/components/countdown/countdown.component.html',
	    controller: CountdownController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavbarController = function () {
	    function NavbarController() {
	        'ngInject';

	        //

	        _classCallCheck(this, NavbarController);
	    }

	    _createClass(NavbarController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var settings = {
	                // Navigation height
	                nav_height: 65,

	                // Animations on mobile devices
	                animations: false,

	                // Navigation
	                auto_response: true, // Auto create responsive menu based on main navigation
	                deeplinking: true };

	            $(document).ready(function () {

	                // Add special class for IE10
	                if (Function('/*@cc_on return document.documentMode===10@*/')()) {
	                    document.documentElement.className += ' ie10';
	                }

	                /* Detect Touch Device and set animations
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    if (Modernizr == 'undefined') return;

	                    if (Modernizr.touch) {

	                        $('body').addClass('touch-device');
	                    }

	                    // Set animations on mobile devices
	                    var current_width = $(window).width();

	                    if (Modernizr.touch && current_width <= 568 && !settings.animations) {
	                        settings.animations = false;
	                    } else {
	                        settings.animations = true;
	                    }

	                    // console.log(settings.animations, current_width)
	                })();

	                // function scripts(container) {

	                /*  todo: see where the toggle goes */
	                /* Toggle content
	                 ------------------------- */
	                // $('.toggle').each(function () {
	                //
	                //     /* Init */
	                //     $('.active-toggle', this).next().show();
	                //
	                //     /* List variables */
	                //     var toggle = $(this);
	                //
	                //     /* Click on Toggle Heading */
	                //     $('h4.toggle-title', this).click(function () {
	                //         if ($(this).is('.active-toggle')) {
	                //             $(this).removeClass('active-toggle');
	                //             $('.toggle-content', toggle).slideUp(400);
	                //         } else {
	                //             $(this).addClass('active-toggle');
	                //             $('.toggle-content', toggle).slideDown(400);
	                //         }
	                //         return false;
	                //     });
	                //
	                // });


	                /* TopTip - Tooltip
	                 ------------------------- */

	                // Disable Thumb slide effect on touch devices
	                // if (!Modernizr.touch) {
	                //
	                //     // Init thumb slider
	                //     $('.tip', container).topTip();
	                // }


	                /* Smooth Scroll-------- */
	                // $('.smooth-scroll', container).on('click', function (e) {
	                //     var
	                //         $id = $(this).attr('href');
	                //
	                //     // If element exists
	                //     if ($($id).length) {
	                //         $.scrollTo($id, 750, {
	                //             easing: 'swing',
	                //             offset: {top: -65, left: 0}
	                //         });
	                //     }
	                //     e.preventDefault();
	                // });


	                // }
	                //
	                // // Init scripts
	                // scripts('html');

	                (function () {
	                    if ($.fn.parallax != 'undefined') {
	                        $('.parallax').each(function () {
	                            $(this).parallax('50%', $(this).data('interia'), false);
	                        });
	                    }

	                    /* Search
	                     ------------------------- */
	                    $('#nav-search').on('click', function (e) {
	                        $('#search-wrap').slideToggle(400);
	                        e.preventDefault();
	                    });

	                    /* Fancy dropdown list
	                     ------------------------- */
	                    $(document).on('mouseenter', '.fancy-dd', function () {
	                        $(this).find('ul').stop(true, true).slideDown(600, 'easeOutExpo');
	                    });
	                    $(document).on('mouseleave', '.fancy-dd', function () {
	                        $(this).find('ul').stop(true, true).slideUp(600, 'easeOutExpo');
	                    });

	                    // Touch devices fix
	                    if (Modernizr.touch) {
	                        $('.fancy-dd').unbind('mouseenter mouseleave');
	                        $('.fancy-dd > a').click(function (e) {
	                            $(this).parent().find('ul').stop(true, true).slideToggle(600, 'easeOutExpo');
	                            e.preventDefault();
	                        });
	                    }
	                })();

	                /* Navigation
	                 ---------------------------------------------------------------------- */
	                (function () {

	                    /* Main navigation
	                     ------------------------- */
	                    var $nav = $('#nav').children('ul');

	                    // Create main navigation
	                    $('li', $nav).on('mouseenter', function () {
	                        var $this = $(this),
	                            $sub = $this.children('ul');
	                        if ($sub.length) $this.addClass('active');
	                        $sub.hide().stop(true, true).fadeIn(200);
	                    }).on('mouseleave', function () {
	                        $(this).removeClass('active').children('ul').stop(true, true).fadeOut(50);
	                    });

	                    /* Sticky navigation
	                     ------------------------- */

	                    // grab the initial top offset of the navigation
	                    var sticky_nav = $('#main-nav'),
	                        sticky_navigation_offset_top = sticky_nav.offset().top - 65 - 2,
	                        hiddenNav = false;

	                    // our function that decides weather the navigation bar should have "fixed" css position or not.
	                    var sticky_navigation = function sticky_navigation() {
	                        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

	                        // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
	                        if (scroll_top > sticky_navigation_offset_top) {
	                            sticky_nav.addClass('sticky');
	                            if (sticky_nav.hasClass('hide')) {
	                                hiddenNav = true;
	                                sticky_nav.removeClass('hide').css({
	                                    'top': '-65px'
	                                }).stop().animate({
	                                    'top': 0
	                                }, 400, 'easeOutSine');
	                            }
	                        } else {
	                            if (hiddenNav) {
	                                sticky_nav.stop().animate({
	                                    'top': '-65px'
	                                }, 200, 'easeOutSine', function () {
	                                    sticky_nav.removeClass('sticky').addClass('hide');
	                                });
	                            } else {
	                                sticky_nav.removeClass('sticky').addClass('hide');
	                            }
	                        }
	                    };

	                    // and run it again every time you scroll
	                    $(window).scroll(function () {
	                        sticky_navigation();
	                    });

	                    /* Responsive navigation
	                     ------------------------- */

	                    // Auto create responsive menu based on main navigation
	                    if (settings.auto_response) {

	                        var $responsive = $('#nav').clone();

	                        // Add class
	                        $('ul:not(:first-child)', $responsive).addClass('dl-submenu');
	                        $('> ul', $responsive).addClass('dl-menu');

	                        // Remove main nav container
	                        $responsive = $responsive.children('ul');

	                        // Put menu in nav container
	                        $('#dl-menu').append($responsive);
	                    }

	                    // Init dlmenu() plugin
	                    if ($.fn.dlmenu) $('#dl-menu').dlmenu();

	                    // if ($.fn.dlmenu) $('#dl-menu').dlmenu({
	                    // 	onLinkClick : function( el, ev ) {
	                    // 		$('#dl-menu').dlmenu('closeMenu');
	                    // 		return false;
	                    // 	}
	                    // });

	                    // Overflow fix on mobile devices
	                    $('#dl-menu ul').css('max-height', $(window).height() - 65 + "px");
	                    $(window).resize(function () {
	                        //var $height = $(window).height()-$("#main-nav").height();
	                        $('#dl-menu ul').css('max-height', $(window).height() - 65 + "px");
	                    });
	                })();
	            });

	            // HTML5 Placeholder support for non compliant browsers using jQuery.
	            (function ($) {
	                // @todo Document this.
	                $.extend($, {
	                    placeholder: {
	                        browser_supported: function browser_supported() {
	                            return this._supported !== undefined ? this._supported : this._supported = !!('placeholder' in $('<input type="text">')[0]);
	                        },
	                        shim: function shim(opts) {
	                            var config = {
	                                color: '#888',
	                                cls: 'placeholder',
	                                selector: 'input[placeholder], textarea[placeholder]'
	                            };
	                            $.extend(config, opts);
	                            return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
	                        }
	                    }
	                });

	                $.extend($.fn, {
	                    _placeholder_shim: function _placeholder_shim(config) {
	                        function calcPositionCss(target) {
	                            var op = $(target).offsetParent().offset();
	                            var ot = $(target).offset();

	                            return {
	                                top: ot.top - op.top,
	                                left: ot.left - op.left,
	                                width: $(target).width()
	                            };
	                        }

	                        function adjustToResizing(label) {
	                            var $target = label.data('target');
	                            if (typeof $target !== "undefined") {
	                                label.css(calcPositionCss($target));
	                                $(window).one("resize", function () {
	                                    adjustToResizing(label);
	                                });
	                            }
	                        }

	                        return this.each(function () {
	                            var $this = $(this);

	                            if ($this.is(':visible')) {

	                                if ($this.data('placeholder')) {
	                                    var $ol = $this.data('placeholder');
	                                    $ol.css(calcPositionCss($this));
	                                    return true;
	                                }

	                                var possible_line_height = {};
	                                if (!$this.is('textarea') && $this.css('height') != 'auto') {
	                                    possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
	                                }

	                                var ol = $('<label />').text($this.attr('placeholder')).addClass(config.cls).css($.extend({
	                                    position: 'absolute',
	                                    display: 'inline',
	                                    'float': 'none',
	                                    overflow: 'hidden',
	                                    textAlign: 'left',
	                                    color: config.color,
	                                    cursor: 'text',
	                                    paddingTop: $this.css('padding-top'),
	                                    paddingRight: $this.css('padding-right'),
	                                    paddingBottom: $this.css('padding-bottom'),
	                                    paddingLeft: $this.css('padding-left'),
	                                    fontSize: $this.css('font-size'),
	                                    fontFamily: $this.css('font-family'),
	                                    fontStyle: $this.css('font-style'),
	                                    fontWeight: $this.css('font-weight'),
	                                    textTransform: $this.css('text-transform'),
	                                    backgroundColor: 'transparent',
	                                    zIndex: 99
	                                }, possible_line_height)).css(calcPositionCss(this)).attr('for', this.id).data('target', $this).click(function () {
	                                    $(this).data('target').focus();
	                                }).insertBefore(this);
	                                $this.data('placeholder', ol).focus(function () {
	                                    ol.hide();
	                                }).blur(function () {
	                                    ol[$this.val().length ? 'hide' : 'show']();
	                                }).triggerHandler('blur');
	                                $(window).one("resize", function () {
	                                    adjustToResizing(ol);
	                                });
	                            }
	                        });
	                    }
	                });
	            })(jQuery);

	            jQuery(document).add(window).bind('ready load', function () {
	                if (jQuery.placeholder) {
	                    jQuery.placeholder.shim();
	                }
	            });
	        }
	    }]);

	    return NavbarController;
	}();

	var NavbarComponent = exports.NavbarComponent = {
	    templateUrl: './views/app/components/navbar/navbar.component.html',
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(32);

	// import {DialogService} from './services/dialog.service';
	// import {ToastService} from './services/toast.service';

	angular.module('app.services').service('API', _API.APIService);
	// .service('DialogService', DialogService)
	// .service('ToastService', ToastService)

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422 || response.status === 401) {
					for (var error in response.data.errors) {
						return ToastService.error(response.data.errors[error][0]);
					}
				}
				if (response.status === 500) {
					return ToastService.error(response.statusText);
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ }
/******/ ]);