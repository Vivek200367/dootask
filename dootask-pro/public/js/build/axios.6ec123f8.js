var I={exports:{}},se=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},be=se,E=Object.prototype.toString;function M(r){return E.call(r)==="[object Array]"}function k(r){return typeof r=="undefined"}function Ee(r){return r!==null&&!k(r)&&r.constructor!==null&&!k(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function we(r){return E.call(r)==="[object ArrayBuffer]"}function Se(r){return typeof FormData!="undefined"&&r instanceof FormData}function Ce(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Oe(r){return typeof r=="string"}function Re(r){return typeof r=="number"}function ie(r){return r!==null&&typeof r=="object"}function $(r){if(E.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function xe(r){return E.call(r)==="[object Date]"}function Ae(r){return E.call(r)==="[object File]"}function Ne(r){return E.call(r)==="[object Blob]"}function oe(r){return E.call(r)==="[object Function]"}function $e(r){return ie(r)&&oe(r.pipe)}function ge(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Te(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Pe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function J(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),M(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function H(){var r={};function e(n,s){$(r[s])&&$(n)?r[s]=H(r[s],n):$(n)?r[s]=H({},n):M(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)J(arguments[t],e);return r}function Ue(r,e,t){return J(e,function(n,s){t&&typeof n=="function"?r[s]=be(n,t):r[s]=n}),r}function Be(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var p={isArray:M,isArrayBuffer:we,isBuffer:Ee,isFormData:Se,isArrayBufferView:Ce,isString:Oe,isNumber:Re,isObject:ie,isPlainObject:$,isUndefined:k,isDate:xe,isFile:Ae,isBlob:Ne,isFunction:oe,isStream:$e,isURLSearchParams:ge,isStandardBrowserEnv:Pe,forEach:J,merge:H,extend:Ue,trim:Te,stripBOM:Be},S=p;function K(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ue=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(S.isURLSearchParams(t))n=t.toString();else{var s=[];S.forEach(t,function(f,v){f===null||typeof f=="undefined"||(S.isArray(f)?v=v+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),s.push(K(v)+"="+K(l))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Le=p;function T(){this.handlers=[]}T.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};T.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};T.prototype.forEach=function(e){Le.forEach(this.handlers,function(a){a!==null&&e(a)})};var je=T,De=p,qe=function(e,t){De.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},fe=function(e,t,a,n,s){return e.config=t,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},_e=fe,le=function(e,t,a,n,s){var o=new Error(e);return _e(o,t,a,n,s)},Fe=le,ke=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Fe("Request failed with status code "+a.status,a.config,null,a.request,a))},A=p,He=A.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),A.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),A.isString(s)&&f.push("path="+s),A.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ie=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Me=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Je=Ie,ze=Me,Ve=function(e,t){return e&&!Je(t)?ze(e,t):t},D=p,We=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Xe=function(e){var t={},a,n,s;return e&&D.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=D.trim(u.substr(0,s)).toLowerCase(),n=D.trim(u.substr(s+1)),a){if(t[a]&&We.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},G=p,Ke=G.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=G.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function z(r){this.message=r}z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};z.prototype.__CANCEL__=!0;var P=z,N=p,Ge=ke,Ye=He,Qe=ue,Ze=Ve,er=Xe,rr=Ke,q=le,tr=B,nr=P,Y=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,f;function v(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}N.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+d)}var R=Ze(e.baseURL,e.url);i.open(e.method.toUpperCase(),Qe(R,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function W(){if(!!i){var m="getAllResponseHeaders"in i?er(i.getAllResponseHeaders()):null,w=!u||u==="text"||u==="json"?i.responseText:i.response,b={data:w,status:i.status,statusText:i.statusText,headers:m,config:e,request:i};Ge(function(j){a(j),v()},function(j){n(j),v()},b),i=null}}if("onloadend"in i?i.onloadend=W:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(W)},i.onabort=function(){!i||(n(q("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(q("Network Error",e,null,i)),i=null},i.ontimeout=function(){var w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||tr.transitional;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(q(w,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},N.isStandardBrowserEnv()){var X=(e.withCredentials||rr(R))&&e.xsrfCookieName?Ye.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in i&&N.forEach(o,function(w,b){typeof s=="undefined"&&b.toLowerCase()==="content-type"?delete o[b]:i.setRequestHeader(b,w)}),N.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(m){!i||(n(!m||m&&m.type?new nr("canceled"):m),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null),i.send(s)})},c=p,Q=qe,ar=fe,sr={"Content-Type":"application/x-www-form-urlencoded"};function Z(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function ir(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Y),r}function or(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:ir(),transformRequest:[function(e,t){return Q(t,"Accept"),Q(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(Z(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(Z(t,"application/json"),or(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?ar(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(sr)});var B=U,ur=p,fr=B,lr=function(e,t,a){var n=this||fr;return ur.forEach(a,function(o){e=o.call(n,e,t)}),e},ce=function(e){return!!(e&&e.__CANCEL__)},ee=p,_=lr,cr=ce,dr=B,hr=P;function F(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new hr("canceled")}var pr=function(e){F(e),e.headers=e.headers||{},e.data=_.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||dr.adapter;return t(e).then(function(n){return F(e),n.data=_.call(e,n.data,n.headers,e.transformResponse),n},function(n){return cr(n)||(F(e),n&&n.response&&(n.response.data=_.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},h=p,de=function(e,t){t=t||{};var a={};function n(i,l){return h.isPlainObject(i)&&h.isPlainObject(l)?h.merge(i,l):h.isPlainObject(l)?h.merge({},l):h.isArray(l)?l.slice():l}function s(i){if(h.isUndefined(t[i])){if(!h.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!h.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(h.isUndefined(t[i])){if(!h.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function f(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var v={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return h.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var d=v[l]||s,R=d(l);h.isUndefined(R)&&d!==f||(a[l]=R)}),a},he={version:"0.24.0"},mr=he.version,V={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){V[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var re={};V.transitional=function(e,t,a){function n(s,o){return"[Axios v"+mr+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!re[o]&&(re[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function vr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=r[s],f=u===void 0||o(u,s,r);if(f!==!0)throw new TypeError("option "+s+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+s)}}var yr={assertOptions:vr,validators:V},pe=p,br=ue,te=je,ne=pr,L=de,me=yr,C=me.validators;function x(r){this.defaults=r,this.interceptors={request:new te,response:new te}}x.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=L(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&me.assertOptions(t,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var a=[],n=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(n=n&&d.synchronous,a.unshift(d.fulfilled,d.rejected))});var s=[];this.interceptors.response.forEach(function(d){s.push(d.fulfilled,d.rejected)});var o;if(!n){var u=[ne,void 0];for(Array.prototype.unshift.apply(u,a),u=u.concat(s),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=e;a.length;){var v=a.shift(),i=a.shift();try{f=v(f)}catch(l){i(l);break}}try{o=ne(f)}catch(l){return Promise.reject(l)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};x.prototype.getUri=function(e){return e=L(this.defaults,e),br(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};pe.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,a){return this.request(L(a||{},{method:e,url:t,data:(a||{}).data}))}});pe.forEach(["post","put","patch"],function(e){x.prototype[e]=function(t,a,n){return this.request(L(n||{},{method:e,url:t,data:a}))}});var Er=x,wr=P;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new wr(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var Sr=O,Cr=function(e){return function(a){return e.apply(null,a)}},Or=function(e){return typeof e=="object"&&e.isAxiosError===!0},ae=p,Rr=se,g=Er,xr=de,Ar=B;function ve(r){var e=new g(r),t=Rr(g.prototype.request,e);return ae.extend(t,g.prototype,e),ae.extend(t,e),t.create=function(n){return ve(xr(r,n))},t}var y=ve(Ar);y.Axios=g;y.Cancel=P;y.CancelToken=Sr;y.isCancel=ce;y.VERSION=he.version;y.all=function(e){return Promise.all(e)};y.spread=Cr;y.isAxiosError=Or;I.exports=y;I.exports.default=y;var Nr=I.exports;export{Nr as a};
