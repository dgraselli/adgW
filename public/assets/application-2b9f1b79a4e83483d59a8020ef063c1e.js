/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
(function() {
  var CSRFToken, anchoredLink, assetsChanged, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsPushState, cacheCurrentPage, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, executeScriptTags, extractLink, extractTitleAndBody, extractTrackAssets, fetchHistory, fetchReplacement, handleClick, ignoreClick, initializeTurbolinks, initialized, installClickHandlerLast, intersection, invalidContent, loadedAssets, noTurbolink, nonHtmlLink, nonStandardClick, pageCache, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberInitialPage, removeHash, removeNoscriptTags, requestMethod, requestMethodIsSafe, resetScrollPosition, targetLink, triggerEvent, visit, xhr, _ref,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  initialized = false;

  currentState = null;

  referer = document.location.href;

  loadedAssets = null;

  pageCache = {};

  createDocument = null;

  requestMethod = ((_ref = document.cookie.match(/request_method=(\w+)/)) != null ? _ref[1].toUpperCase() : void 0) || '';

  xhr = null;

  visit = function(url) {
    if (browserSupportsPushState && browserIsntBuggy) {
      cacheCurrentPage();
      reflectNewUrl(url);
      return fetchReplacement(url);
    } else {
      return document.location.href = url;
    }
  };

  fetchReplacement = function(url) {
    var safeUrl;
    triggerEvent('page:fetch');
    safeUrl = removeHash(url);
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', safeUrl, true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = (function(_this) {
      return function() {
        var doc;
        triggerEvent('page:receive');
        if (invalidContent(xhr) || assetsChanged((doc = createDocument(xhr.responseText)))) {
          return document.location.reload();
        } else {
          changePage.apply(null, extractTitleAndBody(doc));
          reflectRedirectedUrl(xhr);
          if (document.location.hash) {
            document.location.href = document.location.href;
          } else {
            resetScrollPosition();
          }
          return triggerEvent('page:load');
        }
      };
    })(this);
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onabort = function() {
      return rememberCurrentUrl();
    };
    xhr.onerror = function() {
      return document.location.href = url;
    };
    return xhr.send();
  };

  fetchHistory = function(state) {
    var page;
    cacheCurrentPage();
    if (page = pageCache[state.position]) {
      if (xhr != null) {
        xhr.abort();
      }
      changePage(page.title, page.body);
      recallScrollPosition(page);
      return triggerEvent('page:restore');
    } else {
      return fetchReplacement(document.location.href);
    }
  };

  cacheCurrentPage = function() {
    rememberInitialPage();
    pageCache[currentState.position] = {
      url: document.location.href,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset
    };
    return constrainPageCacheTo(10);
  };

  constrainPageCacheTo = function(limit) {
    var key, value;
    for (key in pageCache) {
      if (!__hasProp.call(pageCache, key)) continue;
      value = pageCache[key];
      if (key <= currentState.position - limit) {
        pageCache[key] = null;
      }
    }
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    removeNoscriptTags();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    return triggerEvent('page:change');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref1, _ref2;
    scripts = Array.prototype.slice.call(document.body.getElementsByTagName('script'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref1 = script.type) === '' || _ref1 === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref2 = script.attributes;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        attr = _ref2[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function() {
    var noscript, noscriptTags, _i, _len;
    noscriptTags = Array.prototype.slice.call(document.body.getElementsByTagName('noscript'));
    for (_i = 0, _len = noscriptTags.length; _i < _len; _i++) {
      noscript = noscriptTags[_i];
      noscript.parentNode.removeChild(noscript);
    }
  };

  reflectNewUrl = function(url) {
    if (url !== document.location.href) {
      referer = document.location.href;
      return window.history.pushState({
        turbolinks: true,
        position: currentState.position + 1
      }, '', url);
    }
  };

  reflectRedirectedUrl = function(xhr) {
    var location;
    if ((location = xhr.getResponseHeader('X-XHR-Current-Location')) && location !== document.location.pathname + document.location.search) {
      return window.history.replaceState(currentState, '', location + document.location.hash);
    }
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      position: Date.now()
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  rememberInitialPage = function() {
    if (!initialized) {
      rememberCurrentUrl();
      rememberCurrentState();
      createDocument = browserCompatibleDocumentParser();
      return initialized = true;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    return window.scrollTo(0, 0);
  };

  removeHash = function(url) {
    var link;
    link = url;
    if (url.href == null) {
      link = document.createElement('A');
      link.href = url;
    }
    return link.href.replace(link.hash, '');
  };

  triggerEvent = function(name) {
    var event;
    event = document.createEvent('Events');
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  invalidContent = function(xhr) {
    return !xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
  };

  extractTrackAssets = function(doc) {
    var node, _i, _len, _ref1, _results;
    _ref1 = doc.head.childNodes;
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      node = _ref1[_i];
      if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
        _results.push(node.src || node.href);
      }
    }
    return _results;
  };

  assetsChanged = function(doc) {
    var fetchedAssets;
    loadedAssets || (loadedAssets = extractTrackAssets(document));
    fetchedAssets = extractTrackAssets(doc);
    return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
  };

  intersection = function(a, b) {
    var value, _i, _len, _ref1, _results;
    if (a.length > b.length) {
      _ref1 = [b, a], a = _ref1[0], b = _ref1[1];
    }
    _results = [];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      value = a[_i];
      if (__indexOf.call(b, value) >= 0) {
        _results.push(value);
      }
    }
    return _results;
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, doc.body, CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref1;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref1 = testDoc.body) != null ? _ref1.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  installClickHandlerLast = function(event) {
    if (!event.defaultPrevented) {
      document.removeEventListener('click', handleClick, false);
      return document.addEventListener('click', handleClick, false);
    }
  };

  handleClick = function(event) {
    var link;
    if (!event.defaultPrevented) {
      link = extractLink(event);
      if (link.nodeName === 'A' && !ignoreClick(event, link)) {
        visit(link.href);
        return event.preventDefault();
      }
    }
  };

  extractLink = function(event) {
    var link;
    link = event.target;
    while (!(!link.parentNode || link.nodeName === 'A')) {
      link = link.parentNode;
    }
    return link;
  };

  crossOriginLink = function(link) {
    return location.protocol !== link.protocol || location.host !== link.host;
  };

  anchoredLink = function(link) {
    return ((link.hash && removeHash(link)) === removeHash(location)) || (link.href === location.href + '#');
  };

  nonHtmlLink = function(link) {
    var url;
    url = removeHash(link);
    return url.match(/\.[a-z]+(\?.*)?$/g) && !url.match(/\.html?(\?.*)?$/g);
  };

  noTurbolink = function(link) {
    var ignore;
    while (!(ignore || link === document)) {
      ignore = link.getAttribute('data-no-turbolink') != null;
      link = link.parentNode;
    }
    return ignore;
  };

  targetLink = function(link) {
    return link.target.length !== 0;
  };

  nonStandardClick = function(event) {
    return event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  };

  ignoreClick = function(event, link) {
    return crossOriginLink(link) || anchoredLink(link) || nonHtmlLink(link) || noTurbolink(link) || targetLink(link) || nonStandardClick(event);
  };

  initializeTurbolinks = function() {
    document.addEventListener('click', installClickHandlerLast, true);
    return window.addEventListener('popstate', function(event) {
      var _ref1;
      if ((_ref1 = event.state) != null ? _ref1.turbolinks : void 0) {
        return fetchHistory(event.state);
      }
    }, false);
  };

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && window.history.state !== void 0;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = requestMethod === 'GET' || requestMethod === '';

  if (browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe) {
    initializeTurbolinks();
  }

  this.Turbolinks = {
    visit: visit
  };

}).call(this);
/*
 Highcharts JS v3.0.10 (2014-03-10)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/

(function(){function s(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function w(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function x(a,b){return parseInt(a,b||
10)}function ga(a){return typeof a==="string"}function $(a){return typeof a==="object"}function La(a){return Object.prototype.toString.call(a)==="[object Array]"}function ya(a){return typeof a==="number"}function za(a){return T.log(a)/T.LN10}function ha(a){return T.pow(10,a)}function ia(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function r(a){return a!==u&&a!==null}function z(a,b,c){var d,e;if(ga(b))r(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(r(b)&&
$(b))for(d in b)a.setAttribute(d,b[d]);return e}function na(a){return La(a)?a:[a]}function o(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],typeof c!=="undefined"&&c!==null)return c}function D(a,b){if(Aa&&!X&&b&&b.opacity!==u)b.filter="alpha(opacity="+b.opacity*100+")";s(a.style,b)}function V(a,b,c,d,e){a=y.createElement(a);b&&s(a,b);e&&D(a,{padding:0,border:O,margin:0});c&&D(a,c);d&&d.appendChild(a);return a}function ja(a,b){var c=function(){};c.prototype=new a;s(c.prototype,b);return c}
function Ga(a,b,c,d){var e=L.lang,a=+a||0,f=b===-1?(a.toString().split(".")[1]||"").length:isNaN(b=N(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(x(a=N(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+N(a-c).toFixed(f).slice(2):"")}function Ha(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Ma(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(d);return c.apply(this,a)}}function Ia(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=L.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e=Ga(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:"")):e=bb(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function mb(a){return T.pow(10,S(T.log(a)/T.LN10))}
function nb(a,b,c,d){var e,c=o(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function Bb(){this.symbol=this.color=0}function ob(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Na(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ba(a){for(var b=
a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Oa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Pa(a){cb||(cb=V(Ja));a&&cb.appendChild(a);cb.innerHTML=""}function oa(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;else G.console&&console.log(c)}function aa(a){return parseFloat(a.toPrecision(14))}function Qa(a,b){sa=o(a,b.animation)}function Cb(){var a=L.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Ra=(a&&L.global.timezoneOffset||
0)*6E4;db=a?Date.UTC:function(a,b,c,g,h,i){return(new Date(a,b,o(c,1),o(g,0),o(h,0),o(i,0))).getTime()};pb=b+"Minutes";qb=b+"Hours";rb=b+"Day";Xa=b+"Date";eb=b+"Month";fb=b+"FullYear";Db=c+"Minutes";Eb=c+"Hours";sb=c+"Date";Fb=c+"Month";Gb=c+"FullYear"}function ta(){}function Sa(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function ka(){this.init.apply(this,arguments)}function Ya(){this.init.apply(this,arguments)}function Hb(a,b,c,d,e,f){var g=a.chart.inverted;
this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.percent=f==="percent";this.alignOptions={align:b.align||(g?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(g?"middle":c?"bottom":"top"),y:o(b.y,g?4:c?14:-6),x:o(b.x,g?c?-6:6:0)};this.textAlign=b.textAlign||(g?c?"right":"left":"center")}var u,y=document,G=window,T=Math,v=T.round,S=T.floor,Ka=T.ceil,t=T.max,E=T.min,N=T.abs,W=T.cos,ba=T.sin,la=T.PI,Ca=la*2/360,ua=navigator.userAgent,Ib=G.opera,
Aa=/msie/i.test(ua)&&!Ib,gb=y.documentMode===8,hb=/AppleWebKit/.test(ua),Ta=/Firefox/.test(ua),Jb=/(Mobile|Android|Windows Phone)/.test(ua),Da="http://www.w3.org/2000/svg",X=!!y.createElementNS&&!!y.createElementNS(Da,"svg").createSVGRect,Ob=Ta&&parseInt(ua.split("Firefox/")[1],10)<4,ca=!X&&!Aa&&!!y.createElement("canvas").getContext,Za,$a,Kb={},tb=0,cb,L,bb,sa,ub,B,Ea=function(){},Y=[],Ja="div",O="none",Pb=/^[0-9]+$/,Lb="stroke-width",db,Ra,pb,qb,rb,Xa,eb,fb,Db,Eb,sb,Fb,Gb,J={},Q=G.Highcharts=G.Highcharts?
oa(16,!0):{};bb=function(a,b,c){if(!r(b)||isNaN(b))return"Invalid date";var a=o(a,"%Y-%m-%d %H:%M:%S"),d=new Date(b-Ra),e,f=d[qb](),g=d[rb](),h=d[Xa](),i=d[eb](),j=d[fb](),k=L.lang,l=k.weekdays,d=s({a:l[g].substr(0,3),A:l[g],d:Ha(h),e:h,b:k.shortMonths[i],B:k.months[i],m:Ha(i+1),y:j.toString().substr(2,2),Y:j,H:Ha(f),I:Ha(f%12||12),l:f%12||12,M:Ha(d[pb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ha(d.getSeconds()),L:Ha(v(b%1E3),3)},Q.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+
e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Bb.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};B=function(){for(var a=0,b=arguments,c=b.length,d={};a<c;a++)d[b[a++]]=b[a];return d}("millisecond",1,"second",1E3,"minute",6E4,"hour",36E5,"day",864E5,"week",6048E5,"month",26784E5,"year",31556952E3);ub={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),
c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=
d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){G.HighchartsAdapter=G.HighchartsAdapter||a&&{init:function(b){var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;e=a.cssHooks.opacity;a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(a,b){var e=d,k;b==="cur"?e=c.prototype:b==="_default"&&f&&(e=g[b],b="set");(k=e[b])&&(e[b]=function(c){var d,
c=a?c:this;if(c.prop!=="align")return d=c.elem,d.attr?d.attr(c.prop,b==="cur"?u:c.now):k.apply(this,arguments)})});Ma(e,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});e=function(a){var c=a.elem,d;if(!a.started)d=b.init(c,c.d,c.toD),a.start=d[0],a.end=d[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))};f?g.d={set:e}:d.d=e;this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],
a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,d;ga(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==u)c.chart=c.chart||{},c.chart.renderTo=this[0],new Q[a](c,b[1]),d=this;c===u&&(d=Y[z(this[0],"data-highcharts-chart")]);return d}},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},
addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=y.removeEventListener?"removeEventListener":"detachEvent";y[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!Aa&&d&&(delete d.layerX,delete d.layerY);s(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=
null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===u)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==u&&b.attr&&(c.opacity+="px");e.animate(c,d)},stop:function(b){a(b).stop()}}})(G.jQuery);var R=G.HighchartsAdapter,F=R||{};R&&R.init.call(R,ub);var ib=F.adapterRun,Qb=F.getScript,va=F.inArray,p=F.each,vb=F.grep,Rb=F.offset,Ua=F.map,C=F.addEvent,U=
F.removeEvent,I=F.fireEvent,Sb=F.washMouseEvent,jb=F.animate,ab=F.stop,F={enabled:!0,x:0,y:15,style:{color:"#666",cursor:"default",fontSize:"11px"}};L={colors:"#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/3.0.10/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/3.0.10/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,
10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#274b6d",fontSize:"16px"}},subtitle:{text:"",align:"center",style:{color:"#4d759e"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{enabled:!0,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",
lineWidth:2}}},point:{events:{}},dataLabels:w(F,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":Ga(this.y,-1)},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderWidth:1,borderColor:"#909090",borderRadius:5,navigation:{activeColor:"#274b6d",
inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#274b6d",fontSize:"12px"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"1em"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:X,backgroundColor:"rgba(255, 255, 255, .85)",
borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',shadow:!0,snap:Jb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},
credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var Z=L.plotOptions,R=Z.line;Cb();var Tb=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Ub=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,Vb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,wa=function(a){var b=[],c,d;(function(a){a&&a.stops?
d=Ua(a.stops,function(a){return wa(a[1])}):(c=Tb.exec(a))?b=[x(c[1]),x(c[2]),x(c[3]),parseFloat(c[4],10)]:(c=Ub.exec(a))?b=[x(c[1],16),x(c[2],16),x(c[3],16),1]:(c=Vb.exec(a))&&(b=[x(c[1]),x(c[2]),x(c[3]),1])})(a);return{get:function(c){var f;d?(f=w(a),f.stops=[].concat(f.stops),p(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)p(d,function(b){b.brighten(a)});
else if(ya(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=x(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};ta.prototype={init:function(a,b){this.element=b==="span"?V(b):y.createElementNS(Da,b);this.renderer=a;this.attrSetters={}},opacity:1,animate:function(a,b,c){b=o(b,sa,!0);ab(this);if(b){b=w(b,{});if(c)b.complete=c;jb(this,a,b)}else this.attr(a),c&&c()},attr:function(a,b){var c,d,e,f,g=this.element,h=g.nodeName.toLowerCase(),i=this.renderer,
j,k=this.attrSetters,l=this.shadows,m,n,q=this;ga(a)&&r(b)&&(c=a,a={},a[c]=b);if(ga(a))c=a,h==="circle"?c={x:"cx",y:"cy"}[c]||c:c==="strokeWidth"&&(c="stroke-width"),q=z(g,c)||this[c]||0,c!=="d"&&c!=="visibility"&&c!=="fill"&&(q=parseFloat(q));else{for(c in a)if(j=!1,d=a[c],e=k[c]&&k[c].call(this,d,c),e!==!1){e!==u&&(d=e);if(c==="d")d&&d.join&&(d=d.join(" ")),/(NaN| {2}|^$)/.test(d)&&(d="M 0 0");else if(c==="x"&&h==="text")for(e=0;e<g.childNodes.length;e++)f=g.childNodes[e],z(f,"x")===z(g,"x")&&z(f,
"x",d);else if(this.rotation&&(c==="x"||c==="y"))n=!0;else if(c==="fill")d=i.color(d,g,c);else if(h==="circle"&&(c==="x"||c==="y"))c={x:"cx",y:"cy"}[c]||c;else if(h==="rect"&&c==="r")z(g,{rx:d,ry:d}),j=!0;else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign"||c==="scaleX"||c==="scaleY")j=n=!0;else if(c==="stroke")d=i.color(d,g,c);else if(c==="dashstyle")if(c="stroke-dasharray",d=d&&d.toLowerCase(),d==="solid")d=O;else{if(d){d=d.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot",
"3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(e=d.length;e--;)d[e]=x(d[e])*o(a["stroke-width"],this["stroke-width"]);d=d.join(",")}}else if(c==="width")d=x(d);else if(c==="align")c="text-anchor",d={left:"start",center:"middle",right:"end"}[d];else if(c==="title")e=g.getElementsByTagName("title")[0],e||(e=y.createElementNS(Da,"title"),g.appendChild(e)),e.textContent=d;c==="strokeWidth"&&
(c="stroke-width");if(c==="stroke-width"||c==="stroke"){this[c]=d;if(this.stroke&&this["stroke-width"])z(g,"stroke",this.stroke),z(g,"stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(c==="stroke-width"&&d===0&&this.hasStroke)g.removeAttribute("stroke"),this.hasStroke=!1;j=!0}this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(m||(this.symbolAttr(a),m=!0),j=!0);if(l&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c))for(e=l.length;e--;)z(l[e],
c,c==="height"?t(d-(l[e].cutHeight||0),0):d);if((c==="width"||c==="height")&&h==="rect"&&d<0)d=0;this[c]=d;if(c==="text"){if(d!==this.textStr)delete this.bBox,this.textStr=d,this.added&&i.buildText(this)}else j||d!==void 0&&g.setAttribute(c,d)}n&&this.updateTransform()}return q},addClass:function(a){var b=this.element,c=z(b,"class")||"";c.indexOf(a)===-1&&z(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;p("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=
o(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":O)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;d=v(e)%2/2;a.x=S(a.x||this.x||0)+d;a.y=S(a.y||this.y||0)+d;a.width=S((a.width||this.width||0)-2*d);a.height=S((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=
this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&x(a.width);b&&(a=s(b,c));this.styles=a;e&&(ca||!X&&this.renderer.forExport)&&delete a.width;if(Aa&&!X)D(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";z(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=
this,d=c.element;$a&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Date.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(ua.indexOf("Android")===-1||Date.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(this.x||0)+" "+(this.y||0)+")");(r(c)||r(d))&&a.push("scale("+o(c,1)+" "+o(d,1)+")");a.length&&z(this.element,"transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;
f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||ga(c))this.alignTo=d=c||"renderer",ia(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=o(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=v(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=v(g);
this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,b=this.renderer,c,d,e=this.rotation;c=this.element;var f=this.styles,g=e*Ca;d=this.textStr;var h;if(d===""||Pb.test(d))h=d.toString().length+(f?"|"+f.fontSize+"|"+f.fontFamily:""),a=b.cache[h];if(!a){if(c.namespaceURI===Da||b.forExport){try{a=c.getBBox?s({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(i){}if(!a||a.width<0)a={width:0,height:0}}else a=this.htmlGetBBox();
if(b.isSVG){c=a.width;d=a.height;if(Aa&&f&&f.fontSize==="11px"&&d.toPrecision(3)==="16.9")a.height=d=14;if(e)a.width=N(d*ba(g))+N(c*W(g)),a.height=N(d*W(g))+N(c*ba(g))}this.bBox=a;h&&(b.cache[h]=a)}return a},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.hide()}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,
e=this.element,f=this.zIndex,g,h;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);if(f)c.handleZ=!0,f=x(f);if(c.handleZ){a=d.childNodes;for(g=0;g<a.length;g++)if(b=a[g],c=z(b,"zIndex"),b!==e&&(x(c)>f||!r(f)&&r(c))){d.insertBefore(e,b);h=!0;break}}h||d.appendChild(e);this.added=!0;if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&
b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;ab(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&p(c,function(b){a.safeRemoveChild(b)});d&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ia(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=
[],e,f,g=this.element,h,i,j,k;if(a){i=o(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+o(a.offsetX,1)+", "+o(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;z(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:O});if(c)z(f,"height",t(z(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this}};var pa=function(){this.init.apply(this,
arguments)};pa.prototype={Element:ta,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&z(g,"xmlns",Da);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ta||hb)&&y.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 3.0.10"));
this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;if(Ta&&a.getBoundingClientRect)this.subPixelFix=b=function(){D(a,{left:0,top:0});h=a.getBoundingClientRect();D(a,{left:Ka(h.left)-h.left+"px",top:Ka(h.top)-h.top+"px"})},b(),C(G,"resize",b)},getStyle:function(a){return this.style=s({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},
destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Oa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&U(G,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=o(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,
'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),f=b.childNodes,g=/<.*style="([^"]+)".*>/,h=/<.*href="(http[^"]+)".*>/,i=z(b,"x"),j=a.styles,k=a.textWidth,l=j&&j.lineHeight,m=f.length,n=function(a){return l?x(l):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:j.fontSize||11).h};m--;)b.removeChild(f[m]);k&&!a.added&&this.box.appendChild(b);e[e.length-1]===""&&e.pop();p(e,function(e,f){var l,m=0,e=e.replace(/<span/g,
"|||<span").replace(/<\/span>/g,"</span>|||");l=e.split("|||");p(l,function(e){if(e!==""||l.length===1){var q={},o=y.createElementNS(Da,"tspan"),p;g.test(e)&&(p=e.match(g)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),z(o,"style",p));h.test(e)&&!d&&(z(o,"onclick",'location.href="'+e.match(h)[1]+'"'),D(o,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(e!==" "&&(o.appendChild(y.createTextNode(e)),m?q.dx=0:q.x=i,z(o,q),!m&&f&&(!X&&d&&D(o,{display:"block"}),
z(o,"dy",n(o),hb&&o.offsetHeight)),b.appendChild(o),m++,k))for(var e=e.replace(/([^\^])-/g,"$1- ").split(" "),q=e.length>1&&j.whiteSpace!=="nowrap",r,t,s=a._clipHeight,A=[],v=n(),u=1;q&&(e.length||A.length);)delete a.bBox,r=a.getBBox(),t=r.width,!X&&c.forExport&&(t=c.measureSpanWidth(o.firstChild.data,a.styles)),r=t>k,!r||e.length===1?(e=A,A=[],e.length&&(u++,s&&u*v>s?(e=["..."],a.attr("title",a.textStr)):(o=y.createElementNS(Da,"tspan"),z(o,{dy:v,x:i}),p&&z(o,"style",p),b.appendChild(o),t>k&&(k=
t)))):(o.removeChild(o.firstChild),A.unshift(e.pop())),e.length&&o.appendChild(y.createTextNode(e.join(" ").replace(/- /g,"-")))}})})},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,m,n,q,o,p,a={x1:0,y1:0,x2:0,y2:1},e=w({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},
f);q=f.style;delete f.style;g=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);o=g.style;delete g.style;h=w(e,{style:{color:"#CCC"}},h);p=h.style;delete h.style;C(j.element,Aa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(q)});C(j.element,Aa?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],m=[n,q,o][k],j.attr(l).css(m))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(o):a===3&&j.attr(h).css(p):j.attr(e).css(n)};return j.on("click",function(){k!==
3&&d.call(j)}).attr(e).css(s({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=v(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=v(a[2])+b%2/2);return a},path:function(a){var b={fill:O};La(a)?b.d=a:$(a)&&s(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=$(a)?a:{x:a,y:b,r:c};return this.createElement("circle").attr(a)},arc:function(a,b,c,d,e,f){if($(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,
end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=$(a)?a.r:e,g=this.createElement("rect"),a=$(a)?a:a===u?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==u)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[o(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return r(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,
b,c,d,e){var f={preserveAspectRatio:O};arguments.length>1&&s(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(v(b),v(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),s(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&s(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],
height:b[1]}),a.alignByTranslate||a.translate(v((d-b[0])/2),v((e-b[1])/2)))},j=a.match(i)[1],a=Kb[j],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),V("img",{onload:function(){k(g,Kb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",
a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=W(f),j=ba(f),k=W(g),g=ba(g),e=e.end-f<la?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]}},clipRect:function(a,b,c,d){var e="highcharts-"+tb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),
a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},color:function(a,b,c){var d=this,e,f=/^rgba/,g,h,i,j,k,l,m,n=[];a&&a.linearGradient?g="linearGradient":a&&a.radialGradient&&(g="radialGradient");if(g){c=a[g];h=d.gradients;j=a.stops;b=b.radialReference;La(c)&&(a[g]=c={x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientUnits:"userSpaceOnUse"});g==="radialGradient"&&b&&!r(c.gradientUnits)&&(c=w(c,{cx:b[0]-b[2]/2+c.cx*b[2],cy:b[1]-b[2]/2+c.cy*b[2],r:c.r*b[2],gradientUnits:"userSpaceOnUse"}));for(m in c)m!==
"id"&&n.push(m,c[m]);for(m in j)n.push(j[m]);n=n.join(",");h[n]?a=h[n].id:(c.id=a="highcharts-"+tb++,h[n]=i=d.createElement(g).attr(c).add(d.defs),i.stops=[],p(j,function(a){f.test(a[1])?(e=wa(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));return"url("+d.url+"#"+a+")"}else return f.test(a)?(e=wa(a),z(b,c+"-opacity",e.get("a")),e.get("rgb")):(b.removeAttribute(c+"-opacity"),a)},text:function(a,
b,c,d){var e=ca||!X&&this.forExport;if(d&&!this.forExport)return this.html(a,b,c);b=v(o(b,0));c=v(o(c,0));a=this.createElement("text").attr({x:b,y:c,text:a});e&&a.css({position:"absolute"});a.x=b;a.y=c;return a},fontMetrics:function(a){var a=a||this.style.fontSize,a=/px/.test(a)?x(a):/em/.test(a)?parseFloat(a)*12:12,a=a<24?a+4:v(a*1.2),b=v(a*0.8);return{h:a,b:b}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=q.element.style;K=(Va===void 0||wb===void 0||n.styles.textAlign)&&q.textStr&&q.getBBox();
n.width=(Va||K.width||0)+2*P+kb;n.height=(wb||K.height||0)+2*P;xa=P+m.fontMetrics(a&&a.fontSize).b;if(y){if(!o)a=v(-t*P),b=h?-xa:0,n.box=o=d?m.symbol(d,a,b,n.width,n.height,A):m.rect(a,b,n.width,n.height,0,A[Lb]),o.attr("fill",O).add(n);o.isImg||o.attr(w({width:n.width,height:n.height},A));A=null}}function k(){var a=n.styles,a=a&&a.textAlign,b=kb+P*(1-t),c;c=h?0:xa;if(r(Va)&&K&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(Va-K.width);(b!==q.x||c!==q.y)&&q.attr({x:b,y:c});q.x=b;q.y=c}function l(a,
b){o?o.attr(a,b):A[a]=b}var m=this,n=m.g(i),q=m.text("",0,0,g).attr({zIndex:1}),o,K,t=0,P=3,kb=0,Va,wb,xb,yb,H=0,A={},xa,g=n.attrSetters,y;n.onAdd=function(){q.add(n);n.attr({text:a,x:b,y:c});o&&r(e)&&n.attr({anchorX:e,anchorY:f})};g.width=function(a){Va=a;return!1};g.height=function(a){wb=a;return!1};g.padding=function(a){r(a)&&a!==P&&(P=a,k());return!1};g.paddingLeft=function(a){r(a)&&a!==kb&&(kb=a,k());return!1};g.align=function(a){t={left:0,center:0.5,right:1}[a];return!1};g.text=function(a,b){q.attr(b,
a);j();k();return!1};g[Lb]=function(a,b){a&&(y=!0);H=a%2/2;l(b,a);return!1};g.stroke=g.fill=g.r=function(a,b){b==="fill"&&a&&(y=!0);l(b,a);return!1};g.anchorX=function(a,b){e=a;l(b,a+H-xb);return!1};g.anchorY=function(a,b){f=a;l(b,a-yb);return!1};g.x=function(a){n.x=a;a-=t*((Va||K.width)+P);xb=v(a);n.attr("translateX",xb);return!1};g.y=function(a){yb=n.y=v(a);n.attr("translateY",yb);return!1};var x=n.css;return s(n,{css:function(a){if(a){var b={},a=w(a);p("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","),
function(c){a[c]!==u&&(b[c]=a[c],delete a[c])});q.css(b)}return x.call(n,a)},getBBox:function(){return{width:K.width+2*P,height:K.height+2*P,x:K.x-P,y:K.y-P}},shadow:function(a){o&&o.shadow(a);return n},destroy:function(){U(n.element,"mouseenter");U(n.element,"mouseleave");q&&(q=q.destroy());o&&(o=o.destroy());ta.prototype.destroy.call(n);n=m=j=k=l=null}})}};Za=pa;s(ta.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();
this.styles=s(this.styles,a);D(this.element,a);return this},htmlGetBBox:function(){var a=this.element,b=this.bBox;if(!b){if(a.nodeName==="text")a.style.position="absolute";b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows;D(b,{marginLeft:c,
marginTop:d});i&&p(i,function(a){D(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&p(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var j=this.rotation,k,l=x(this.textWidth),m=[j,g,b.innerHTML,this.textWidth].join(",");if(m!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;r(j)&&this.setSpanRotation(j,h,k);i=o(this.elemWidth,b.offsetWidth);if(i>l&&/[ \-]/.test(b.textContent||b.innerText))D(b,{width:l+"px",display:"block",whiteSpace:"normal"}),i=l;this.getSpanCorrection(i,k,
h,j,g)}D(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(hb)k=b.offsetHeight;this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Aa?"-ms-transform":hb?"-webkit-transform":Ta?"MozTransform":Ib?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ta?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";D(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});s(pa.prototype,{html:function(a,b,c){var d=this.createElement("span"),
e=d.attrSetters,f=d.element,g=d.renderer;e.text=function(a){a!==f.innerHTML&&delete this.bBox;f.innerHTML=this.textStr=a;return!1};e.x=e.y=e.align=e.rotation=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform();return!1};d.attr({text:a,x:v(b),y:v(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.css=d.htmlCss;if(g.isSVG)d.add=function(a){var b,c=g.box.parentNode,e=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)e.push(a),
a=a.parentGroup;p(e.reverse(),function(a){var d;b=a.div=a.div||V(Ja,{className:z(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;s(a.attrSetters,{translateX:function(a){d.left=a+"px"},translateY:function(a){d.top=a+"px"},visibility:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(f);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var da;if(!X&&!ca){Q.VMLElement=da={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],
d=["position: ","absolute",";"],e=b===Ja;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=V(c);this.renderer=a;this.attrSetters={}},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
if(this.onAdd)this.onAdd();return this},updateTransform:ta.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=W(a*Ca),c=ba(a*Ca);D(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):O})},getSpanCorrection:function(a,b,c,d,e){var f=d?W(d*Ca):1,g=d?ba(d*Ca):0,h=o(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-
c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),D(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ya(a[b]))c[b]=v(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},attr:function(a,b){var c,d,e,f=this.element||{},g=f.style,h=f.nodeName,i=this.renderer,
j=this.symbolName,k,l=this.shadows,m,n=this.attrSetters,q=this;ga(a)&&r(b)&&(c=a,a={},a[c]=b);if(ga(a))c=a,q=c==="strokeWidth"||c==="stroke-width"?this.strokeweight:this[c];else for(c in a)if(d=a[c],m=!1,e=n[c]&&n[c].call(this,d,c),e!==!1&&d!==null){e!==u&&(d=e);if(j&&/^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))k||(this.symbolAttr(a),k=!0),m=!0;else if(c==="d"){d=d||[];this.d=d.join(" ");f.path=d=this.pathToVML(d);if(l)for(e=l.length;e--;)l[e].path=l[e].cutOff?this.cutOffPath(d,
l[e].cutOff):d;m=!0}else if(c==="visibility"){d==="inherit"&&(d="visible");if(l)for(e=l.length;e--;)l[e].style[c]=d;h==="DIV"&&(d=d==="hidden"?"-999em":0,gb||(g[c]=d?"visible":"hidden"),c="top");g[c]=d;m=!0}else if(c==="zIndex")d&&(g[c]=d),m=!0;else if(va(c,["x","y","width","height"])!==-1)this[c]=d,c==="x"||c==="y"?c={x:"left",y:"top"}[c]:d=t(0,d),this.updateClipping?(this[c]=d,this.updateClipping()):g[c]=d,m=!0;else if(c==="class"&&h==="DIV")f.className=d;else if(c==="stroke")d=i.color(d,f,c),c=
"strokecolor";else if(c==="stroke-width"||c==="strokeWidth")f.stroked=d?!0:!1,c="strokeweight",this[c]=d,ya(d)&&(d+="px");else if(c==="dashstyle")(f.getElementsByTagName("stroke")[0]||V(i.prepVML(["<stroke/>"]),null,null,f))[c]=d||"solid",this.dashstyle=d,m=!0;else if(c==="fill")if(h==="SPAN")g.color=d;else{if(h!=="IMG")f.filled=d!==O?!0:!1,d=i.color(d,f,c,this),c="fillcolor"}else if(c==="opacity")m=!0;else if(h==="shape"&&c==="rotation")this[c]=f.style[c]=d,f.style.left=-v(ba(d*Ca)+1)+"px",f.style.top=
v(W(d*Ca))+"px";else if(c==="translateX"||c==="translateY"||c==="rotation")this[c]=d,this.updateTransform(),m=!0;m||(gb?f[c]=d:z(f,c,d))}return q},clip:function(a){var b=this,c;a?(c=a.members,ia(c,b),c.push(b),b.destroyClip=function(){ia(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:gb?"inherit":"rect(auto)"});return b.css(a)},css:ta.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Pa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return ta.prototype.destroy.apply(this)},
on:function(a,b){this.element["on"+a]=function(){var a=G.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=x(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,n,q;k&&typeof k.value!=="string"&&(k="x");m=k;if(a){n=o(a.width,3);q=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',
l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=V(g.prepVML(j),null,{left:x(i.left)+o(a.offsetX,1),top:x(i.top)+o(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',q*e,'"/>'];V(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this}};da=ja(ta,da);var ea={Element:da,isIE8:ua.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ja).css(s(this.getStyle(d),
{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!y.namespaces.hcv){y.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{y.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){y.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=$(a);return s(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+v(a?e:d)+"px,"+v(a?f:b)+"px,"+v(a?b:f)+"px,"+v(a?d:e)+"px)"};!a&&gb&&c==="DIV"&&s(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){p(e.members,
function(a){a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=O;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,m=a.linearGradient||a.radialGradient,n,q,o,K,r,P="",a=a.stops,t,s=[],v=function(){h=['<fill colors="'+s.join(",")+'" opacity="',o,'" o:opacity2="',q,'" type="',i,'" ',P,'focus="100%" method="any" />'];V(e.prepVML(h),null,null,b)};n=a[0];t=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);t[0]<1&&a.push([1,t[1]]);p(a,function(a,b){g.test(a[1])?
(f=wa(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);s.push(a[0]*100+"% "+k);b?(o=l,K=k):(q=l,r=k)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,P='angle="'+(90-T.atan((m-a)/(n-c))*180/la)+'"',v();else{var j=m.r,u=j*2,y=j*2,w=m.cx,A=m.cy,xa=b.radialReference,x,j=function(){xa&&(x=d.getBBox(),w+=(xa[0]-x.x)/x.width-0.5,A+=(xa[1]-x.y)/x.height-0.5,u*=xa[2]/x.width,y*=xa[2]/x.height);P='src="'+L.global.VMLRadialGradientURL+'" size="'+u+","+y+'" origin="0.5,0.5" position="'+
w+","+A+'" color2="'+r+'" ';v()};d.added?j():d.onAdd=j;j=K}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=wa(a),h=["<",c,' opacity="',f.get("a"),'"/>'],V(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:pa.prototype.html,path:function(a){var b={coordsize:"10 10"};La(a)?b.d=a:$(a)&&s(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if($(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ja).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):pa.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;D(a,{flip:"x",left:x(d.width)-(e?x(e.top):1),top:x(d.height)-(e?x(e.left):1),rotation:-90});p(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=W(f),i=ba(f),j=W(g),k=ba(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){var f=a+c,g=b+d,h;!r(e)||!e.r?f=pa.prototype.symbols.square.apply(0,arguments):(h=E(e.r,c,d),f=["M",a+h,b,"L",f-h,b,"wa",f-2*
h,b,f,b+2*h,f-h,b,f,b+h,"L",f,g-h,"wa",f-2*h,g-2*h,f,g,f,g-h,f-h,g,"L",a+h,g,"wa",a,g-2*h,a+2*h,g,a+h,g,a,g-h,"L",a,b+h,"wa",a,b,a+2*h,b+2*h,a,b+h,a+h,b,"x","e"]);return f}}};Q.VMLRenderer=da=function(){this.init.apply(this,arguments)};da.prototype=w(pa.prototype,ea);Za=da}pa.prototype.measureSpanWidth=function(a,b){var c=y.createElement("span"),d;d=y.createTextNode(a);c.appendChild(d);D(c,b);this.box.appendChild(c);d=c.offsetWidth;Pa(c);return d};var Mb;if(ca)Q.CanVGRenderer=da=function(){Da="http://www.w3.org/1999/xhtml"},
da.prototype.symbols={},Mb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Qb(d,a);b.push(c)}}}(),Za=da;Sa.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,i=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/i.length||!d&&(c.margin[3]||c.chartWidth*0.33),j=g===i[0],k=g===i[i.length-1],l,f=e?o(e[g],f[g],g):g,e=this.label,m=i.info;
a.isDatetimeAxis&&m&&(l=b.dateTimeLabelFormats[m.higherRanks[g]||m.unitName]);this.isFirst=j;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:j,isLast:k,dateTimeLabelFormat:l,value:a.isLog?aa(ha(f)):f});g=d&&{width:t(1,v(d-2*(h.padding||10)))+"px"};g=s(g,h.style);if(r(e))e&&e.attr({text:b}).css(g);else{l={align:a.labelAlign};if(ya(h.rotation))l.rotation=h.rotation;if(d&&h.ellipsis)l._clipHeight=a.len/i.length;this.label=r(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(l).css(g).add(a.labelGroup):
null}},getLabelSize:function(){var a=this.label,b=this.axis;return a?a.getBBox()[b.horiz?"height":"width"]:0},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?a.width:a.height,b=c?d.x-a*{left:0,center:0.5,right:1}[b.labelAlign]:0;return[b,c?a+b:a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=this.isFirst,f=this.isLast,g=d.horiz?b.x:b.y,h=d.reversed,i=d.tickPositions,j=this.getLabelSides(),k=j[0],j=j[1],l,m,n,q=this.label.line||0;l=d.labelEdge;
m=d.justifyLabels&&(e||f);l[q]===u||g+k>l[q]?l[q]=g+j:m||(c=!1);if(m){l=(m=d.justifyToPlot)?d.pos:0;m=m?l+d.len:d.chart.chartWidth;do a+=e?1:-1,n=d.ticks[i[a]];while(i[a]&&(!n||n.label.line!==q));d=n&&n.label.xy&&n.label.xy.x+n.getLabelSides()[e?0:1];e&&!h||f&&h?g+k<l&&(g=l-k,n&&g+j>d&&(c=!1)):g+j>m&&(g=m-j,n&&g+k<d&&(c=!1));b.x=g}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+
(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,m=i.chart.renderer.fontMetrics(e.style.fontSize).b,n=e.rotation,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+e.y-(f&&!d?f*j*(k?1:-1):0);n&&i.side===2&&(b-=m-m*W(n*Ca));!r(e.y)&&!n&&(b+=m-c.getBBox().height/2);if(l)c.line=g/(h||1)%l,b+=c.line*(i.labelOffset/
l);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",q=e[m+"LineWidth"],p=e[m+"LineColor"],K=e[m+"LineDashStyle"],t=e[n+"Length"],m=e[n+"Width"]||0,r=e[n+"Color"],s=e[n+"Position"],n=this.mark,v=k.step,x=!0,y=d.tickmarkOffset,w=this.getPosition(g,j,y,b),H=w.x,
w=w.y,A=g&&H===d.pos+d.len||!g&&w===d.pos?-1:1;this.isActive=!0;if(q){j=d.getPlotLinePath(j+y,q*A,b,!0);if(l===u){l={stroke:p,"stroke-width":q};if(K)l.dashstyle=K;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=q?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(m&&t)s==="inside"&&(t=-t),d.opposite&&(t=-t),h=this.getMarkPath(H,w,t,m*A,g,f),n?n.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:r,"stroke-width":m,opacity:c}).add(d.axisGroup);
if(i&&!isNaN(H))i.xy=w=this.getLabelPosition(H,w,i,g,k,y,a,v),this.isFirst&&!this.isLast&&!o(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!o(e.showLastLabel,1)?x=!1:!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&(x=this.handleOverflow(a,w)),v&&a%v&&(x=!1),x&&!isNaN(w.y)?(w.opacity=c,i[this.isNew?"attr":"animate"](w),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Oa(this,this.axis)}};Q.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};Q.PlotLineOrBand.prototype={render:function(){var a=
this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,i=e.to,j=e.from,k=r(j)&&r(i),l=e.value,m=e.dashStyle,n=a.svgElem,q=[],p,K=e.color,s=e.zIndex,P=e.events,v=b.chart.renderer;b.isLog&&(j=za(j),i=za(i),l=za(l));if(h){if(q=b.getPlotLinePath(l,h),d={stroke:K,"stroke-width":h},m)d.dashstyle=m}else if(k){if(j=t(j,b.min-d),i=E(i,b.max+d),q=b.getPlotBandPath(j,i,e),d={fill:K},e.borderWidth)d.stroke=e.borderColor,d["stroke-width"]=e.borderWidth}else return;if(r(s))d.zIndex=
s;if(n)if(q)n.animate({d:q},null,n.onGetPath);else{if(n.hide(),n.onGetPath=function(){n.show()},g)a.label=g=g.destroy()}else if(q&&q.length&&(a.svgElem=n=v.path(q).attr(d).add(),P))for(p in e=function(b){n.on(b,function(c){P[b].apply(a,[c])})},P)e(p);if(f&&r(f.text)&&q&&q.length&&b.width>0&&b.height>0){f=w({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},f);if(!g)a.label=g=v.text(f.text,0,0,f.useHTML).attr({align:f.textAlign||f.align,rotation:f.rotation,
zIndex:s}).css(f.style).add();b=[q[1],q[4],o(q[6],q[1])];q=[q[2],q[5],o(q[7],q[2])];c=Na(b);k=Na(q);g.align(f,!1,{x:c,y:k,width:Ba(b)-c,height:Ba(q)-k});g.show()}else g&&g.hide();return a},destroy:function(){ia(this.axis.plotLinesAndBands,this);delete this.axis;Oa(this)}};ka.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:F,lineColor:"#C0D0E0",
lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#4d759e",fontWeight:"bold"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,
maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return Ga(this.total,-1)},style:F.style}},defaultLeftAxisOptions:{labels:{x:-8,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:8,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:14},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-5},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=
(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=r(d.linkedTo);
this.tickmarkOffset=this.categories&&d.tickmarkPlacement==="between"?0.5:0;this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=o(d.crosshair,na(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;va(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,
0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===u)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)C(this,f,d[f]);if(this.isLog)this.val2lin=za,this.lin2val=ha},setOptions:function(a){this.options=w(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(L[this.coll],
a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=L.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ia(h,this);else if(c)g=b;else if(d)g=bb(d,b);else if(f&&a>=1E3)for(;f--&&g===u;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=Ga(b/c,-1)+e[f]);g===u&&(g=b>=1E4?Ga(b,0):Ga(b,-1,u,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=null;a.buildStacks&&
a.buildStacks();p(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=E(o(a.dataMin,d[0]),Na(d)),a.dataMax=t(o(a.dataMax,d[0]),Ba(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(r(c)&&r(e))a.dataMin=E(o(a.dataMin,c),c),a.dataMax=t(o(a.dataMax,e),e);if(r(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=
!0}}})},translate:function(a,b,c,d,e,f){var g=1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:this.min,j=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;if(!i)i=this.transA;if(c)g*=-1,h=this.len;this.reversed&&(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(ya(f)?i*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+
(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;e=o(e,this.translate(a,null,null,c));a=c=v(e+i);i=j=v(k-e-i);if(isNaN(e))m=!0;else if(this.horiz){if(i=h,j=k-this.bottom,a<g||a>g+this.width)m=!0}else if(a=g,c=l-this.right,i<h||i>h+this.height)m=!0;return m&&!d?null:f.renderer.crispLine(["M",
a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){for(var d,b=aa(S(b/a)*a),c=aa(Ka(c/a)*a),e=[];b<=c;){e.push(b);b=aa(b+a);if(b===d)break;d=b}return e},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog){e=b.length;for(a=1;a<e;a++)d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,
a.startOfWeek)),d[0]<this.min&&d.shift();else for(b=this.min+(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===u&&!this.isLog)r(a.min)||r(a.max)?this.minRange=null:(p(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===u||h<f)f=h}),this.minRange=E(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=
this.minRange;d=(k-c+b)/2;d=[b-d,o(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ba(d);c=[b+k,o(a.max,b+k)];if(e)c[2]=this.dataMax;c=Na(c);c-b<k&&(d[0]=c-k,d[1]=o(a.min,c-k),b=Ba(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA;if(b.isXAxis||i||d)h?(f=h.minPointOffset,g=h.pointRangePadding):p(b.series,function(a){var h=t(b.isXAxis?a.pointRange:b.axisPointRange||0,+i),j=a.options.pointPlacement,n=
a.closestPointRange;h>c&&(h=0);d=t(d,h);f=t(f,ga(j)?0:h/2);g=t(g,j==="on"?0:h);!a.noSharedTooltip&&r(n)&&(e=r(e)?E(e,n):n)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=E(d,c),b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},setTickPositions:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=b.options.tickPositioner,
j=d.maxPadding,k=d.minPadding,l=d.tickInterval,m=d.minTickInterval,n=d.tickPixelInterval,q,qa=b.categories;h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=o(c.min,c.dataMin),b.max=o(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&oa(11,1)):(b.min=o(b.userMin,d.min,b.dataMin),b.max=o(b.userMax,d.max,b.dataMax));if(e)!a&&E(b.min,o(b.dataMin,b.min))<=0&&oa(10,1),b.min=aa(za(b.min)),b.max=aa(za(b.max));if(b.range&&r(b.max))b.userMin=b.min=t(b.min,b.max-b.range),b.userMax=
b.max,b.range=null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!qa&&!b.axisPointRange&&!b.usePercentage&&!h&&r(b.min)&&r(b.max)&&(c=b.max-b.min)){if(!r(d.min)&&!r(b.userMin)&&k&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*k;if(!r(d.max)&&!r(b.userMax)&&j&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*j}b.min===b.max||b.min===void 0||b.max===void 0?b.tickInterval=1:h&&!l&&n===b.linkedParent.options.tickPixelInterval?b.tickInterval=b.linkedParent.tickInterval:(b.tickInterval=o(l,qa?1:
(b.max-b.min)*n/t(b.len,n)),!r(l)&&b.len<n&&!this.isRadial&&!this.isLog&&!qa&&d.startOnTick&&d.endOnTick&&(q=!0,b.tickInterval/=4));g&&!a&&p(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=t(b.pointRange,b.tickInterval);if(!l&&b.tickInterval<m)b.tickInterval=m;if(!f&&!e&&!l)b.tickInterval=
nb(b.tickInterval,null,mb(b.tickInterval),d);b.minorTickInterval=d.minorTickInterval==="auto"&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=a=d.tickPositions?[].concat(d.tickPositions):i&&i.apply(b,[b.min,b.max]);if(!a)!b.ordinalPositions&&(b.max-b.min)/b.tickInterval>t(2*b.len,200)&&oa(19,!0),a=f?b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval,d.units),b.min,b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):e?b.getLogTickPositions(b.tickInterval,b.min,
b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),q&&a.splice(1,a.length-2),b.tickPositions=a;if(!h)e=a[0],f=a[a.length-1],h=b.minPointOffset||0,d.startOnTick?b.min=e:b.min-h>e&&a.shift(),d.endOnTick?b.max=f:b.max+h<f&&a.pop(),a.length===1&&(d=N(b.max||1)*0.001,b.min-=d,b.max+=d)},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");if(!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==
!1)b[d]=c.length;a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==u){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(aa(b[b.length-1]+this.tickInterval));this.transA*=(e-1)/(a-1);this.max=b[b.length-1]}if(r(d)&&a!==d)this.isDirty=!0}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=
this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;p(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=!1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=
e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=o(c,!0),e=s(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(r(c)&&a<=E(c,o(e.min,c))&&
(a=u),r(d)&&b>=t(d,o(e.max,d))&&(b=u));this.displayBtn=a!==u||b!==u;this.setExtremes(a,b,!1,u,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=b.offsetRight||0,e=this.horiz,f,g;this.left=g=o(b.left,a.plotLeft+c);this.top=f=o(b.top,a.plotTop);this.width=c=o(b.width,a.plotWidth-c+d);this.height=b=o(b.height,a.plotHeight);this.bottom=a.chartHeight-b-f;this.right=a.chartWidth-c-g;this.len=t(e?c:b,0);this.pos=e?g:f},getExtremes:function(){var a=this.isLog;
return{min:a?aa(ha(this.min)):this.min,max:a?aa(ha(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ha(this.min):this.min,b=b?ha(this.max):this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(o(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,
f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k=0,l,m=0,n=d.title,q=d.labels,qa=0,K=b.axisOffset,s=b.clipOffset,P=[-1,1,1,-1][h],v,w=1,x=o(q.maxStaggerLines,5),y,z,H,A;a.hasData=j=a.hasVisibleSeries||r(a.min)&&r(a.max)&&!!e;a.showAxis=b=j||o(d.showEmpty,!0);a.staggerLines=a.horiz&&q.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:q.zIndex||7}).addClass("highcharts-"+
a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){a.labelAlign=o(q.align||a.autoLabelAlign(q.rotation));p(e,function(b){f[b]?f[b].addLabel():f[b]=new Sa(a,b)});if(a.horiz&&!a.staggerLines&&x&&!q.rotation){for(v=a.reversed?[].concat(e).reverse():e;w<x;){j=[];y=!1;for(q=0;q<v.length;q++)z=v[q],H=(H=f[z].label&&f[z].label.getBBox())?H.width:0,A=q%w,H&&(z=a.translate(z),j[A]!==u&&z<j[A]&&(y=!0),j[A]=z+H);if(y)w++;else break}if(w>1)a.staggerLines=w}p(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===
a.labelAlign)qa=t(f[b].getLabelSize(),qa)});if(a.staggerLines)qa*=a.staggerLines,a.labelOffset=qa}else for(v in f)f[v].destroy(),delete f[v];if(n&&n.text&&n.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(n.text,0,0,n.useHTML).attr({zIndex:7,rotation:n.rotation||0,align:n.textAlign||{low:"left",middle:"center",high:"right"}[n.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(n.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(b)k=a.axisTitle.getBBox()[g?"height":"width"],m=o(n.margin,
g?5:10),l=n.offset;a.axisTitle[b?"show":"hide"]()}a.offset=P*o(d.offset,K[h]);a.axisTitleMargin=o(l,qa+m+(h!==2&&qa&&P*d.labels[g?"y":"x"]));K[h]=t(K[h],a.axisTitleMargin+k+P*a.offset);s[i]=t(s[i],S(d.lineWidth/2)*2)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-
this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=x(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.horiz,c=a.reversed,d=a.chart,e=d.renderer,f=a.options,g=a.isLog,h=a.isLinked,
i=a.tickPositions,j,k=a.axisTitle,l=a.ticks,m=a.minorTicks,n=a.alternateBands,q=f.stackLabels,o=f.alternateGridColor,K=a.tickmarkOffset,t=f.lineWidth,v=d.hasRendered&&r(a.oldMin)&&!isNaN(a.oldMin),s=a.hasData,w=a.showAxis,x,y=f.labels.overflow,z=a.justifyLabels=b&&y!==!1,H;a.labelEdge.length=0;a.justifyToPlot=y==="justify";p([l,m,n],function(a){for(var b in a)a[b].isActive=!1});if(s||h)if(a.minorTickInterval&&!a.categories&&p(a.getMinorTickPositions(),function(b){m[b]||(m[b]=new Sa(a,b,"minor"));
v&&m[b].isNew&&m[b].render(null,!0);m[b].render(null,!1,1)}),i.length&&(j=i.slice(),(b&&c||!b&&!c)&&j.reverse(),z&&(j=j.slice(1).concat([j[0]])),p(j,function(b,c){z&&(c=c===j.length-1?0:c+1);if(!h||b>=a.min&&b<=a.max)l[b]||(l[b]=new Sa(a,b)),v&&l[b].isNew&&l[b].render(c,!0,0.1),l[b].render(c,!1,1)}),K&&a.min===0&&(l[-1]||(l[-1]=new Sa(a,-1,null,!0)),l[-1].render(-1))),o&&p(i,function(b,c){if(c%2===0&&b<a.max)n[b]||(n[b]=new Q.PlotLineOrBand(a)),x=b+K,H=i[c+1]!==u?i[c+1]+K:a.max,n[b].options={from:g?
ha(x):x,to:g?ha(H):H,color:o},n[b].render(),n[b].isActive=!0}),!a._addedPlotLB)p((f.plotLines||[]).concat(f.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0;p([l,m,n],function(a){var b,c,e=[],f=sa?sa.duration||500:0,g=function(){for(c=e.length;c--;)a[e[c]]&&!a[e[c]].isActive&&(a[e[c]].destroy(),delete a[e[c]])};for(b in a)if(!a[b].isActive)a[b].render(b,!1,0),a[b].isActive=!1,e.push(b);a===n||!d.hasRendered||!f?g():f&&setTimeout(g,f)});if(t)b=a.getLinePath(t),a.axisLine?a.axisLine.animate({d:b}):
a.axisLine=e.path(b).attr({stroke:f.lineColor,"stroke-width":t,zIndex:7}).add(a.axisGroup),a.axisLine[w?"show":"hide"]();if(k&&w)k[k.isNew?"attr":"animate"](a.getTitlePosition()),k.isNew=!1;q&&q.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){var a=this.chart.pointer;a&&a.reset(!0);this.render();p(this.plotLinesAndBands,function(a){a.render()});p(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||U(b);for(d in c)Oa(c[d]),c[d]=
null;p([b.ticks,b.minorTicks,b.alternateBands],function(a){Oa(a)});for(a=e.length;a--;)e[a].destroy();p("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){if(this.crosshair)if((r(b)||!o(this.crosshair.snap,!0))===!1)this.hideCrosshair();else{var c,d=this.crosshair,e=d.animation;o(d.snap,!0)?r(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?
a.chartX-this.pos:this.len-a.chartY+this.pos;c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:o(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);if(c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e);else{e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}}},hideCrosshair:function(){this.cross&&this.cross.hide()}};
s(ka.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new Q.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,
c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();p([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&ia(b,b[e])})}});ka.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=L.global.useUTC,h,i=new Date(b-Ra),j=a.unitRange,k=a.count;if(r(b)){j>=B.second&&(i.setMilliseconds(0),i.setSeconds(j>=B.minute?0:k*S(i.getSeconds()/k)));if(j>=B.minute)i[Db](j>=B.hour?0:k*S(i[pb]()/k));if(j>=B.hour)i[Eb](j>=B.day?0:k*
S(i[qb]()/k));if(j>=B.day)i[sb](j>=B.month?1:k*S(i[Xa]()/k));j>=B.month&&(i[Fb](j>=B.year?0:k*S(i[eb]()/k)),h=i[fb]());j>=B.year&&(h-=h%k,i[Gb](h));if(j===B.week)i[sb](i[Xa]()-i[rb]()+o(d,1));b=1;Ra&&(i=new Date(i.getTime()+Ra));h=i[fb]();for(var d=i.getTime(),l=i[eb](),m=i[Xa](),n=g?Ra:(864E5+i.getTimezoneOffset()*6E4)%864E5;d<c;)e.push(d),j===B.year?d=db(h+b*k,0):j===B.month?d=db(h,l+b*k):!g&&(j===B.day||j===B.week)?d=db(h,l,m+b*k*(j===B.day?1:7)):d+=j*k,b++;e.push(d);p(vb(e,function(a){return j<=
B.hour&&a%B.day===n}),function(a){f[a]="day"})}e.info=s(a,{higherRanks:f,totalRange:j*k});return e};ka.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=B[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=B[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+B[c[g+1][0]])/2)break;e===B.year&&
a<5*e&&(f=[1,2,5]);c=nb(a/e,f,d[0]==="year"?t(mb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ka.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=v(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=S(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=za(ha(f)*e[h]),j>b&&(!d||k<=c)&&g.push(k),k>c&&(l=!0),k=j}else if(b=ha(b),c=ha(c),
a=e[d?"minorTickInterval":"tickInterval"],a=o(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=nb(a,null,mb(a)),g=Ua(this.getLinearTickPositions(a,b,c),za),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g};var Nb=Q.Tooltip=function(){this.init.apply(this,arguments)};Nb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=x(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=
!0;this.label=a.renderer.label("",0,0,b.shape,null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ca||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden;s(f,{x:g?(2*f.x+a)/3:a,y:g?
(f.y+b)/2:b,anchorX:g?(2*f.anchorX+c)/3:c,anchorY:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g&&(N(a-f.x)>1||N(b-f.y)>1))clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(){var a=this,b;clearTimeout(this.hideTimer);if(!this.isHidden)b=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){a.label.fadeOut();a.isHidden=!0},o(this.options.hideDelay,500)),b&&p(b,function(a){a.setState()}),this.chart.hoverPoints=null},getAnchor:function(a,
b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=na(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===u&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(p(a,function(a){i=a.series.yAxis;g+=a.plotX;h+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&i?i.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);return Ua(c,v)},getPosition:function(a,b,c){var d=this.chart,e=d.plotLeft,f=d.plotTop,g=d.plotWidth,
h=d.plotHeight,i=o(this.options.distance,12),j=isNaN(c.plotX)?0:c.plotX,c=c.plotY,d=j+e+(d.inverted?i:-a-i),k=c-b+f+15,l;d<7&&(d=e+t(j,0)+i);d+a>e+g&&(d-=d+a-(e+g),k=c-b+f-i,l=!0);k<f+5&&(k=f+5,l&&c>=k&&c<=k+b&&(k=c+f+i));k+b>f+h&&(k=t(f,f+h-b-i));return{x:d,y:k}},defaultFormatter:function(a){var b=this.points||na(this),c=b[0].series,d;d=[a.tooltipHeaderFormatter(b[0])];p(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});
d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},i,j=[];i=e.formatter||this.defaultFormatter;var h=c.hoverPoints,k,l=this.shared;clearTimeout(this.hideTimer);this.followPointer=na(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,h&&p(h,function(a){a.setState()}),p(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),h={x:a[0].category,
y:a[0].y},h.points=j,a=a[0]):h=a.getLabelConfig();i=i.call(h,this);h=a.series;i===!1?this.hide():(this.isHidden&&(ab(d),d.attr("opacity",1).show()),d.attr({text:i}),k=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:k}),this.updatePosition({plotX:f,plotY:g}),this.isHidden=!1);I(c,"tooltipRefresh",{text:i,x:f+c.plotLeft,y:g+c.plotTop,borderColor:k})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(v(c.x),
v(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&f.options.type==="datetime"&&ya(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;if(g&&!e){if(f)for(h in B){if(B[h]>=f||B[h]<=B.day&&a.key%B[h]>0){e=d[h];break}}else e=d.day;e=e||d.year}g&&e&&(c=c.replace("{point.key}","{point.key:"+e+"}"));return Ia(c,{point:a,series:b})}};var fa;$a=y.documentElement.ontouchstart!==u;var Wa=Q.Pointer=
function(a,b){this.init(a,b)};Wa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ca?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(Q.Tooltip&&b.tooltip.enabled)a.tooltip=new Nb(a,b.tooltip);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||G.event,a=Sb(a);if(!a.target)a.target=a.srcElement;d=a.touches?
a.touches.item(0):a;if(!b)this.chartPosition=b=Rb(this.chart.container);d.pageX===u?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return s(a,{chartX:v(c),chartY:v(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};p(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=
this.chart,c=b.series,d=b.tooltip,e,f,g=b.hoverPoint,h=b.hoverSeries,i,j,k=b.chartWidth,l=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!h||!h.noSharedTooltip)){f=[];i=c.length;for(j=0;j<i;j++)if(c[j].visible&&c[j].options.enableMouseTracking!==!1&&!c[j].noSharedTooltip&&c[j].singularTooltips!==!0&&c[j].tooltipPoints.length&&(e=c[j].tooltipPoints[l])&&e.series)e._dist=N(l-e.clientX),k=E(k,e._dist),f.push(e);for(i=f.length;i--;)f[i]._dist>k&&f.splice(i,1);if(f.length&&f[0].clientX!==this.hoverX)d.refresh(f,
a),this.hoverX=f[0].clientX}if(h&&h.tracker&&(!d||!d.followPointer)){if((e=h.tooltipPoints[l])&&e!==g)e.onMouseOver(a)}else d&&d.followPointer&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(r(fa))Y[fa].pointer.onDocumentMouseMove(a)},C(y,"mousemove",this._onDocumentMouseMove);p(b.axes,function(b){b.drawCrosshair(a,o(e,g))})},reset:function(a){var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=
b.tooltip,f=e&&e.shared?b.hoverPoints:d;(a=a&&e&&f)&&na(f)[0].plotX===u&&(a=!1);if(a)e.refresh(f),d&&d.setState(d.state,!0);else{if(d)d.onMouseOut();if(c)c.onMouseOut();e&&e.hide();if(this._onDocumentMouseMove)U(y,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;p(b.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;p(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),
e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,m=this.mouseDownX,n=this.mouseDownY;d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>
i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(m-d,2)+Math.pow(n-e,2));if(this.hasDragged>10){l=b.isInsidePlot(m-h,n-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=m,this.selectionMarker.attr({width:N(d),x:(d>0?0:d)+m}));this.selectionMarker&&g&&(d=e-n,this.selectionMarker.attr({height:N(d),y:(d>0?0:d)+n}));
l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},e=this.selectionMarker,f=e.x,g=e.y,h;if(this.hasDragged||c)p(b.axes,function(a){if(a.zoomEnabled){var b=a.horiz,c=a.toValue(b?f:g),b=a.toValue(b?f+e.width:g+e.height);!isNaN(c)&&!isNaN(b)&&(d[a.coll].push({axis:a,min:E(c,b),max:t(c,b)}),h=!0)}}),h&&I(b,"selection",d,function(a){b.zoom(s(a,c?{animation:!1}:
null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}if(b)D(b.container,{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){r(fa)&&Y[fa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=this.normalize(a,c);c&&
d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=Y[fa];if(a)a.pointer.reset(),a.pointer.chartPosition=null;fa=null},onContainerMouseMove:function(a){var b=this.chart;fa=b.index;a=this.normalize(a);b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,
b){for(var c;a;){if(c=z(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,f=b.inverted,g,h,i,a=this.normalize(a);a.cancelBubble=!0;if(!b.cancelClick)c&&
this.inClass(a.target,"highcharts-tracker")?(g=this.chartPosition,h=c.plotX,i=c.plotY,s(c,{pageX:g.left+d+(f?b.plotWidth-i:h),pageY:g.top+e+(f?b.plotHeight-h:i)}),I(c.series,"click",s(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(s(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};
C(b,"mouseleave",a.onContainerMouseLeave);C(y,"mouseup",a.onDocumentMouseUp);if($a)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},C(y,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;U(this.chart.container,"mouseleave",this.onContainerMouseLeave);U(y,"mouseup",this.onDocumentMouseUp);U(y,"touchend",this.onDocumentTouchEnd);clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};s(Q.Pointer.prototype,{pinchTranslate:function(a,
b,c,d,e,f,g,h){a&&this.pinchTranslateDirection(!0,c,d,e,f,g,h);b&&this.pinchTranslateDirection(!1,c,d,e,f,g,h)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],q,o,p=h||1,t=i.inverted,r=i.bounds[a?"h":"v"],v=b.length===1,s=b[0][l],u=c[0][l],w=!v&&b[1][l],x=!v&&c[1][l],y,c=function(){!v&&N(s-w)>20&&(p=h||N(u-x)/N(s-w));o=(n-u)/p+s;q=i["plot"+(a?"Width":"Height")]/p};c();b=o;b<r.min?(b=r.min,y=!0):
b+q>r.max&&(b=r.max-q,y=!0);y?(u-=0.8*(u-g[j][0]),v||(x-=0.8*(x-g[j][1])),c()):g[j]=[u,x];t||(f[j]=o-n,f[m]=q);f=t?1/p:p;e[m]=q;e[j]=b;d[t?a?"scaleY":"scaleX":"scale"+k]=p;d["translate"+k]=f*n+(u-f*s)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=c.tooltip&&c.tooltip.options.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.zoomHor||b.pinchHor,j=b.zoomVert||b.pinchVert,k=i||j,l=b.selectionMarker,m={},n=g===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||c.runChartClick),
q={};(k||e)&&!n&&a.preventDefault();Ua(f,function(a){return b.normalize(a)});if(a.type==="touchstart")p(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,d[1]&&d[1].chartY],p(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(a.dataMin),f=a.toPixels(a.dataMax),g=E(e,f),e=t(e,f);b.min=E(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}});else if(d.length){if(!l)b.selectionMarker=l=s({destroy:Ea},c.plotBox);
b.pinchTranslate(i,j,d,f,m,l,q,h);b.hasPinched=k;b.scaleGroups(m,q);!k&&e&&g===1&&this.runPointActions(b.normalize(a))}},onContainerTouchStart:function(a){var b=this.chart;fa=b.index;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){r(fa)&&
Y[fa].pointer.drop(a)}});if(G.PointerEvent||G.MSPointerEvent){var ra={},zb=!!G.PointerEvent,Wb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in ra)ra.hasOwnProperty(a)&&b.push({pageX:ra[a].pageX,pageY:ra[a].pageY,target:ra[a].target});return b},Ab=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&Y[fa])d(a),d=Y[fa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:Ea,touches:Wb()})};s(Wa.prototype,{onContainerPointerDown:function(a){Ab(a,
"onContainerTouchStart","touchstart",function(a){ra[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Ab(a,"onContainerTouchMove","touchmove",function(a){ra[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!ra[a.pointerId].target)ra[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Ab(a,"onContainerTouchEnd","touchend",function(a){delete ra[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,zb?"pointerdown":"MSPointerDown",
this.onContainerPointerDown);a(this.chart.container,zb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(y,zb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});Ma(Wa.prototype,"init",function(a,b,c){D(b.container,{"-ms-touch-action":O,"touch-action":O});a.call(this,b,c)});Ma(Wa.prototype,"setDOMEvents",function(a){a.apply(this);this.batchMSEvents(C)});Ma(Wa.prototype,"destroy",function(a){this.batchMSEvents(U);a.call(this)})}var lb=Q.Legend=function(a,b){this.init(a,b)};lb.prototype=
{init:function(a,b){var c=this,d=b.itemStyle,e=o(b.padding,8),f=b.itemMarginTop||0;this.options=b;if(b.enabled)c.baseline=x(d.fontSize)+3+f,c.itemStyle=d,c.itemHiddenStyle=w(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=o(b.symbolWidth,16),c.pages=[],c.render(),C(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,
f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={stroke:h,fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in g=a.convertAttribs(g),g)d=g[j],d!==u&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=
d},destroyItem:function(a){var b=a.checkbox;p(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Pa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,p(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,D(f,{left:b.translateX+e.legendItemWidth+f.x-20+"px",
top:g+"px",display:g>c-6&&g<c+d-6?"":O}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,
g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?o(d.itemDistance,8):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,q=this.itemMarginTop,p=this.initialItemX,r=a.legendItem,s=a.series&&a.series.drawLegendSymbol?a.series:a,u=s.options,u=this.createCheckboxForItem&&u&&u.showCheckbox,x=d.useHTML;if(!r)a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup),s.drawLegendSymbol(this,a),a.legendItem=r=c.text(d.labelFormat?Ia(d.labelFormat,a):d.labelFormatter.call(a),
l?f+g:-g,this.baseline,x).css(w(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup),this.setItemEvents&&this.setItemEvents(a,r,x,h,i),this.colorizeItem(a,a.visible),u&&this.createCheckboxForItem(a);c=r.getBBox();f=a.legendItemWidth=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(u?20:0);this.itemHeight=g=v(a.legendItemHeight||c.height);if(e&&this.itemX-p+f>(m||b.chartWidth-2*j-p-d.x))this.itemX=p,this.itemY+=q+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,
f);this.lastItemY=q+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=q+g+n,this.lastLineHeight=g);this.offsetWidth=m||t((e?this.itemX-p-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];p(this.chart.series,function(b){var c=b.options;if(o(c.showInLegend,!r(c.linkedTo)?u:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,
f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();ob(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;p(e,function(b){a.renderItem(b)});
g=j.width||a.offsetWidth;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(l||m){g+=k;h+=k;if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:m||O}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;p(e,function(b){a.positionItem(b)});f&&d.align(s({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},
handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=o(j.animation,!0),l=j.arrowSize||12,m=this.nav,n=this.pages,q,t=this.allItems;e.layout==="horizontal"&&(f/=2);g&&(f=E(f,g));n.length=0;if(a>f&&!e.useHTML){this.clipHeight=h=f-20-this.titleHeight-this.padding;this.currentPage=o(this.currentPage,1);this.fullHeight=a;p(t,function(a,b){var c=a._legendItemPos[1],
d=v(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(q||c)!==n[e-1])n.push(q||c),e++;b===t.length-1&&c+d-n[e-1]>h&&n.push(c);c!==q&&(q=c)});if(!i)i=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(i);i.attr({height:h});if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(m),this.pager=d.text("",15,10).css(j.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,
k)}).add(m);b.scroll(0);a=f}else if(m)i.attr({height:c.chartHeight}),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==u&&Qa(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===
1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};F=Q.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||12;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,o(a.options.symbolRadius,2)).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=
this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-v(e.fontMetrics(a.options.itemStyle.fontSize).b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(ua)||Ta)&&Ma(lb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&
a.call(c,b)};c.chart.renderer.forExport?d():setTimeout(d)});Ya.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=w(L,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=Y.length;Y.push(f);d.reflow!==!1&&C(f,"load",function(){f.initReflow()});
if(e)for(g in e)C(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ca?!1:o(d.animation,!0);f.pointCount=0;f.counters=new Bb;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=J[a.type||b.type||b.defaultSeriesType])||oa(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&p(this.axes,function(a){a.adjustTickAmount()});this.maxTicks=
null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.isDirtyBox,j=c.length,k=j,l=this.renderer,m=l.isHidden(),n=[];Qa(a,this);m&&this.cloneRenderTo();for(this.layOutTitles();k--;)if(a=c[k],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(k=j;k--;)if(a=c[k],a.options.stacking)a.isDirty=!0;p(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();
if(this.hasCartesianSeries){if(!this.isResizing)this.maxTicks=null,p(b,function(a){a.setScale()});this.adjustTickAmounts();this.getMargins();p(b,function(a){a.isDirty&&(i=!0)});p(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,n.push(function(){I(a,"afterSetExtremes",s(a.eventArgs,a.getExtremes()));delete a.eventArgs});(i||g)&&a.redraw()})}i&&this.drawChartBox();p(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);l.draw();I(this,"redraw");m&&this.cloneRenderTo(!0);
p(n,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=na(b.xAxis||{}),b=b.yAxis=na(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);p(c,function(b){new ka(a,
b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];p(this.series,function(b){a=a.concat(vb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return vb(this.series,function(a){return a.selected})},getStacks:function(){var a=this;p(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});p(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+o(b.options.stack,"")})},
setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=w(e.title,a);g=e.subtitle=w(e.subtitle,b),e=g;p([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.spacingBox.width-
44;if(c&&(c.css({width:(f.width||g)+"px"}).align(s({y:15},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height,b>=18&&b<=25&&(b=15);d&&(d.css({width:(e.width||g)+"px"}).align(s({y:b+f.margin},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=Ka(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&o(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,
c=this.renderToClone||this.renderTo;if(!r(b))this.containerWidth=ib(c,"width");if(!r(a))this.containerHeight=ib(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,o(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Pa(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),D(b,
{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),y.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+tb++;if(ga(a))this.renderTo=a=y.getElementById(a);a||oa(13,!0);c=x(z(a,"data-highcharts-chart"));!isNaN(c)&&Y[c]&&Y[c].hasRendered&&Y[c].destroy();z(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&
this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=V(Ja,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},s({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=b.forExport?new pa(a,c,d,b.style,!0):new Za(a,c,d,b.style);ca&&this.renderer.create(this,a,c,
d)},getMargins:function(){var a=this.spacing,b,c=this.legend,d=this.margin,e=this.options.legend,f=o(e.margin,10),g=e.x,h=e.y,i=e.align,j=e.verticalAlign,k=this.titleOffset;this.resetMargins();b=this.axisOffset;if(k&&!r(d[0]))this.plotTop=t(this.plotTop,k+this.options.title.margin+a[0]);if(c.display&&!e.floating)if(i==="right"){if(!r(d[1]))this.marginRight=t(this.marginRight,c.legendWidth-g+f+a[1])}else if(i==="left"){if(!r(d[3]))this.plotLeft=t(this.plotLeft,c.legendWidth+g+f+a[3])}else if(j==="top"){if(!r(d[0]))this.plotTop=
t(this.plotTop,c.legendHeight+h+f+a[0])}else if(j==="bottom"&&!r(d[2]))this.marginBottom=t(this.marginBottom,c.legendHeight-h+f+a[2]);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&p(this.axes,function(a){a.getOffset()});r(d[3])||(this.plotLeft+=b[3]);r(d[0])||(this.plotTop+=b[0]);r(d[2])||(this.marginBottom+=b[2]);r(d[1])||(this.marginRight+=b[1]);this.setChartSize()},reflow:function(a){var b=this,
c=b.options.chart,d=b.renderTo,e=c.width||ib(d,"width"),f=c.height||ib(d,"height"),c=a?a.target:G,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&e&&f&&(c===G||c===y)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};C(G,"resize",b);C(a,"destroy",function(){U(G,"resize",b)})},setSize:function(a,
b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})};Qa(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(r(a))d.chartWidth=e=t(0,v(a)),d.hasUserSize=!!e;if(r(b))d.chartHeight=f=t(0,v(b));(sa?jb:D)(d.container,{width:e+"px",height:f+"px"},sa);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;p(d.axes,function(a){a.isDirty=!0;a.setScale()});p(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.getMargins();
d.redraw(c);d.oldChartHeight=null;I(d,"resize");sa===!1?g():setTimeout(g,sa&&sa.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=v(this.plotLeft);this.plotTop=j=v(this.plotTop);this.plotWidth=k=t(0,v(d-i-this.marginRight));this.plotHeight=l=t(0,v(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=
c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*S(this.plotBorderWidth/2);b=Ka(t(d,h[3])/2);c=Ka(t(d,h[0])/2);this.clipBox={x:b,y:c,width:S(this.plotSizeX-t(d,h[1])/2-b),height:S(this.plotSizeY-t(d,h[2])/2-c)};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this.spacing,b=this.margin;this.plotTop=o(b[0],a[0]);this.marginRight=o(b[1],a[1]);this.marginBottom=o(b[2],a[2]);this.plotLeft=
o(b[3],a[3]);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,q=this.plotLeft,o=this.plotTop,p=this.plotWidth,t=this.plotHeight,r=this.plotBox,s=this.clipRect,v=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-
n,height:d-n}));else{e={fill:j||O};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(r):this.plotBackground=b.rect(q,o,p,t,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(r):this.plotBGImage=b.image(l,q,o,p,t).add();s?s.animate({width:v.width,height:v.height}):this.clipRect=b.clipRect(v);if(m)g?g.animate(g.crisp({x:q,y:o,width:p,height:t})):this.plotBorder=
b.rect(q,o,p,t,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:O,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;p(["inverted","angular","polar"],function(g){c=J[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=J[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var d=b.options.linkedTo;
if(ga(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){p(this.series,function(a){a.translate();a.setTooltipPoints&&a.setTooltipPoints();a.render()})},render:function(){var a=this,b=a.axes,c=a.renderer,d=a.options,e=d.labels,f=d.credits,g;a.setTitle();a.legend=new lb(a,d.legend);a.getStacks();p(b,function(a){a.setScale()});a.getMargins();a.maxTicks=null;p(b,function(a){a.setTickPositions(!0);a.setMaxTicks()});a.adjustTickAmounts();
a.getMargins();a.drawChartBox();a.hasCartesianSeries&&p(b,function(a){a.render()});if(!a.seriesGroup)a.seriesGroup=c.g("series-group").attr({zIndex:3}).add();a.renderSeries();e.items&&p(e.items,function(b){var d=s(e.style,b.style),f=x(d.left)+a.plotLeft,g=x(d.top)+a.plotTop+12;delete d.left;delete d.top;c.text(b.html,f,g).attr({zIndex:2}).css(d).add()});if(f.enabled&&!a.credits)g=f.href,a.credits=c.text(f.text,0,0).on("click",function(){if(g)location.href=g}).attr({align:f.position.align,zIndex:8}).css(f.style).add().align(f.position);
a.hasRendered=!0},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");Y[a.index]=u;a.renderTo.removeAttribute("data-highcharts-chart");U(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();p("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});
if(d)d.innerHTML="",U(d),f&&Pa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!X&&G==G.top&&y.readyState!=="complete"||ca&&!G.canvg?(ca?Mb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):y.attachEvent("onreadystatechange",function(){y.detachEvent("onreadystatechange",a.firstRender);y.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();I(a,"init");a.resetMargins();
a.setChartSize();a.propFromSeries();a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,"beforeRender");if(Q.Pointer)a.pointer=new Wa(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);p(a.callbacks,function(b){b.apply(a,[a])});a.cloneRenderTo(!0);I(a,"load")}},splashArray:function(a,b){var c=b[a],c=$(c)?c:[c,c,c,c];return[o(b[a+"Top"],c[0]),o(b[a+"Right"],c[1]),o(b[a+"Bottom"],c[2]),o(b[a+"Left"],c[3])]}};Ya.prototype.callbacks=[];da=Q.CenteredSeriesMixin={getCenter:function(){var a=
this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,a=[o(b[0],"50%"),o(b[1],"50%"),a.size||"100%",a.innerSize||0],g=E(e,f),h;return Ua(a,function(a,b){h=/%$/.test(a);d=b<2||b===2&&h;return(h?[e,f,g,g][b]*x(a)/100:a)+(d?c:0)})}};var Fa=function(){};Fa.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===
b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.pointValKey,a=Fa.prototype.optionsToObject.call(this,a);s(this,a);this.options=this.options?s(this.options,a):a;if(d)this.y=this[d];if(this.x===u&&c)this.x=b===u?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if(typeof a==="number"||a===null)b[d[0]]=a;else if(La(a)){if(a.length>e){c=typeof a[0];if(c==="string")b.name=
a[0];else if(c==="number")b.x=a[0];f++}for(;g<e;)b[d[g++]]=a[f++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ia(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)U(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=
"graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=o(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";p(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=
a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ia(a,{point:this,series:this.series})}};var M=function(){};M.prototype={isCartesian:!0,type:"line",pointClass:Fa,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return o(a.options.index,a._i)-o(b.options.index,b._i)};c.chart=a;
c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();s(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ca)b.animation=!1;e=b.events;for(d in e)C(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();p(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;ob(f,g);this.yAxis&&ob(this.yAxis.series,
g);p(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;p(a.axisTypes||[],function(e){p(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==u&&b[e]===d.id||b[e]===u&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&oa(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;p(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+
"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=o(b,a.pointStart,0);this.pointInterval=o(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else p(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=
b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=w(e,c.series,a);this.tooltipOptions=w(L.tooltip,L.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;return c},getColor:function(){var a=this.options,b=this.userOptions,c=this.chart.options.colors,d=this.chart.counters,e;e=a.color||Z[this.type].color;if(!e&&!a.colorByPoint)r(b._colorIndex)?
a=b._colorIndex:(b._colorIndex=d.color,a=d.color++),e=c[a];this.color=e;d.wrapColor(c.length)},getSymbol:function(){var a=this.userOptions,b=this.options.marker,c=this.chart,d=c.options.symbols,c=c.counters;this.symbol=b.symbol;if(!this.symbol)r(a._symbolIndex)?a=a._symbolIndex:(a._symbolIndex=c.symbol,a=c.symbol++),this.symbol=d[a];if(/^url/.test(this.symbol))b.radius=0;c.wrapSymbol(d.length)},drawLegendSymbol:F.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=
e.options,j=e.chart,k=null,l=e.xAxis,m=l&&!!l.categories,n=e.tooltipPoints,q=i.turboThreshold,t=this.xData,r=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=o(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData)p(a,function(a,b){f[b].update(a,!1)});else{e.xIncrement=null;e.pointRange=m?1:i.pointRange;e.colorCounter=0;p(this.parallelArrays,function(a){e[a+"Data"].length=0});if(q&&h>q){for(c=0;k===null&&c<h;)k=a[c],c++;if(ya(k)){m=o(i.pointStart,0);i=o(i.pointInterval,1);for(c=
0;c<h;c++)t[c]=m,r[c]=a[c],m+=i;e.xIncrement=m}else if(La(k))if(s)for(c=0;c<h;c++)i=a[c],t[c]=i[0],r[c]=i.slice(1,s+1);else for(c=0;c<h;c++)i=a[c],t[c]=i[0],r[c]=i[1];else oa(12)}else for(c=0;c<h;c++)if(a[c]!==u&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),m&&i.name))l.names[i.x]=i.name;ga(r[0])&&oa(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(n)n.length=0;if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=
j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i=this.options,j=i.cropThreshold,k=this.isCartesian;if(k&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(k&&this.sorted&&(!j||d>j||this.forceCrop))if(a=h.min,h=h.max,b[d-1]<a||b[0]>h)b=[],c=[];else if(b[0]<a||b[d-1]>h)e=this.cropData(this.xData,this.yData,a,h),b=e.xData,c=e.yData,e=e.start,f=!0;for(h=b.length-1;h>=0;h--)d=b[h]-b[h-1],d>0&&(g===u||d<g)?g=
d:d<0&&this.requireSorting&&oa(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;if(i.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=o(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(;i<e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,
f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=h+m,j?l[m]=(new f).init(this,[d[m]].concat(na(e[m]))):(b[i]?k=b[i]:a[i]!==u&&(b[i]=k=(new f).init(this,a[i],d[m])),l[m]=k);if(b&&(g!==(c=b.length)||j))for(m=0;m<c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=u;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();
var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==u&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=o(void 0,Na(e));this.dataMax=o(void 0,Ba(e))},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,
e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ya(i),k=a.threshold,a=0;a<g;a++){var l=f[a],m=l.x,n=l.y,q=l.low,p=b&&e.stacks[(this.negStacks&&n<k?"-":"")+this.stackKey];if(e.isLog&&n<=0)l.y=n=null;l.plotX=c.translate(m,0,0,0,1,i,this.type==="flags");if(b&&this.visible&&p&&p[m])p=p[m],n=p.points[this.index],q=n[0],n=n[1],q===0&&(q=o(k,e.min)),e.isLog&&q<=0&&(q=null),l.total=l.stackTotal=p.total,l.percentage=p.total&&l.y/p.total*100,l.stackY=n,p.setOffset(this.pointXOffset||
0,this.barW||0);l.yBottom=r(q)?e.translate(q,0,1,0,1):null;h&&(n=this.modifyValue(n,l));l.plotY=typeof n==="number"&&n!==Infinity?e.translate(n,0,1,0,1):u;l.clientX=j?c.translate(m,0,0,0,1):l.plotX;l.negative=l.y<(k||0);l.category=d&&d[l.x]!==u?d[l.x]:l.x}this.getSegments()},animate:function(a){var b=this,c=b.chart,d=c.renderer,e;e=b.options.animation;var f=c.clipBox,g=c.inverted,h;if(e&&!$(e))e=Z[b.type].animation;h="_sharedClip"+e.duration+e.easing;if(a)a=c[h],e=c[h+"m"],a||(c[h]=a=d.clipRect(s(f,
{width:0})),c[h+"m"]=e=d.clipRect(-99,g?-c.plotLeft:-c.plotTop,99,g?c.chartWidth:c.chartHeight)),b.group.clip(a),b.markerGroup.clip(e),b.sharedClipKey=h;else{if(a=c[h])a.animate({width:c.plotSizeX},e),c[h+"m"].animate({width:c.plotSizeX+99},e);b.animate=null;b.animationTimeout=setTimeout(function(){b.afterAnimate()},e.duration)}},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group;c&&this.options.clip!==!1&&(c.clip(a.clipRect),this.markerGroup.clip());setTimeout(function(){b&&
a[b]&&(a[b]=a[b].destroy(),a[b+"m"]=a[b+"m"].destroy())},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,m=this.pointAttr[""],n,q=this.markerGroup;if(l.enabled||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=S(g.plotX),e=g.plotY,k=g.graphic,i=g.marker||{},a=l.enabled&&i.enabled===u||i.enabled,n=c.isInsidePlot(v(d),e,c.inverted),a&&e!==u&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=o(i.symbol,this.symbol),j=i.indexOf("url")===
0,k)k.attr({visibility:n?"inherit":"hidden"}).animate(s({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(n&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h).attr(a).add(q)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=o(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=Z[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color;f={stroke:g,
fill:g};var h=a.points||[],i,j=[],k,l=a.pointAttrToOptions;k=a.hasPointSpecificOptions;var m=b.negativeColor,n=c.lineColor,q=c.fillColor;i=b.turboThreshold;var o;b.marker?(e.radius=e.radius||c.radius+2,e.lineWidth=e.lineWidth||c.lineWidth+1):e.color=e.color||wa(e.color||g).brighten(e.brightness).get();j[""]=a.convertAttribs(c,f);p(["hover","select"],function(b){j[b]=a.convertAttribs(d[b],j[""])});a.pointAttr=j;g=h.length;if(!i||g<i||k)for(;g--;){i=h[g];if((c=i.options&&i.options.marker||i.options)&&
c.enabled===!1)c.radius=0;if(i.negative&&m)i.color=i.fillColor=m;k=b.colorByPoint||i.color;if(i.options)for(o in l)r(c[l[o]])&&(k=!0);if(k){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=f.color||!i.options.color&&e.color||wa(i.color).brighten(f.brightness||e.brightness).get();f={color:i.color};if(!q)f.fillColor=i.color;if(!n)f.lineColor=i.color;k[""]=a.convertAttribs(s(f,c),j[""]);k.hover=a.convertAttribs(d.hover,j.hover,k[""]);k.select=a.convertAttribs(d.select,j.select,
k[""])}else k=j;i.pointAttr=k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(ua),d,e,f=a.data||[],g,h,i;I(a,"destroy");U(a);p(a.axisTypes||[],function(b){if(i=a[b])ia(i.series,a),i.isDirty=i.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);p("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(b){a[b]&&(d=c&&b===
"group"?"hide":"destroy",a[b][d]())});if(b.hoverSeries===a)b.hoverSeries=null;ia(b.series,a);for(h in a)delete a[h]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;p(a,function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=
[];p(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f=b.linecap!=="square",g=this.getGraphPath(),h=b.negativeColor;h&&c.push(["graphNeg",h]);p(c,function(c,h){var k=c[0],l=a[k];if(l)ab(l),l.animate({d:g});else if(d&&g.length)l={stroke:c[1],"stroke-width":d,fill:O,zIndex:1},e?l.dashstyle=e:f&&(l["stroke-linecap"]=
l["stroke-linejoin"]="round"),a[k]=a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h&&b.shadow)})},clipNeg:function(){var a=this.options,b=this.chart,c=b.renderer,d=a.negativeColor||a.negativeFillColor,e,f=this.graph,g=this.area,h=this.posClip,i=this.negClip;e=b.chartWidth;var j=b.chartHeight,k=t(e,j),l=this.yAxis;if(d&&(f||g)){d=v(l.toPixels(a.threshold||0,!0));d<0&&(k-=d);a={x:0,y:0,width:k,height:d};k={x:0,y:d,width:k,height:k};if(b.inverted)a.height=k.y=b.plotWidth-d,c.isVML&&(a={x:b.plotWidth-
d-b.plotLeft,y:0,width:e,height:j},k={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e});l.reversed?(b=k,e=a):(b=a,e=k);h?(h.animate(b),i.animate(e)):(this.posClip=h=c.clipRect(b),this.negClip=i=c.clipRect(e),f&&this.graphNeg&&(f.clip(h),this.graphNeg.clip(i)),g&&(g.clip(h),this.areaNeg.clip(i)))}},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};p(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)C(c,"resize",a),C(b,
"destroy",function(){U(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){return{translateX:this.xAxis?this.xAxis.left:this.chart.plotLeft,translateY:this.yAxis?this.yAxis.top:this.chart.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this.chart,b,c=this.options,d=c.animation&&!!this.animate&&a.renderer.isSVG,
e=this.visible?"visible":"hidden",f=c.zIndex,g=this.hasRendered,h=a.seriesGroup;b=this.plotGroup("group","series",e,f,h);this.markerGroup=this.plotGroup("markerGroup","markers",e,f,h);d&&this.animate(!0);this.getAttribs();b.inverted=this.isCartesian?a.inverted:!1;this.drawGraph&&(this.drawGraph(),this.clipNeg());this.drawDataLabels&&this.drawDataLabels();this.visible&&this.drawPoints();this.drawTracker&&this.options.enableMouseTracking!==!1&&this.drawTracker();a.inverted&&this.invertGroups();c.clip!==
!1&&!this.sharedClipKey&&!g&&b.clip(a.clipRect);d?this.animate():g||this.afterAnimate();this.isDirty=this.isDirtyData=!1;this.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:o(d&&d.left,a.plotLeft),translateY:o(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints(!0);this.render();b&&I(this,"updatedData")}};Hb.prototype={destroy:function(){Oa(this,
this.axis)},render:function(a){var b=this.options,c=b.format,c=c?Ia(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,0,0,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(this.percent?100:this.total,0,0,0,1),c=c.translate(0),c=N(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,
f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};ka.prototype.buildStacks=function(){var a=this.series,b=o(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};ka.prototype.renderStackTotals=function(){var a=
this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};M.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.stack,e=e.stacking,h=this.stackKey,
i="-"+h,j=this.negStacks,k=this.yAxis,l=k.stacks,m=k.oldStacks,n,q,o,p,r;for(o=0;o<d;o++){p=a[o];r=b[o];q=(n=j&&r<f)?i:h;l[q]||(l[q]={});if(!l[q][p])m[q]&&m[q][p]?(l[q][p]=m[q][p],l[q][p].total=null):l[q][p]=new Hb(k,k.options.stackLabels,n,p,g,e);q=l[q][p];q.points[this.index]=[q.cum||0];e==="percent"?(n=n?h:i,j&&l[n]&&l[n][p]?(n=l[n][p],q.total=n.total=t(n.total,q.total)+N(r)||0):q.total=aa(q.total+(N(r)||0))):q.total=aa(q.total+(r||0));q.cum=(q.cum||0)+(r||0);q.points[this.index].push(q.cum);c[o]=
q.cum}if(e==="percent")k.usePercentage=!0;this.stackedYData=c;k.oldStacks={}}};M.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;p([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index],g=e)h=h.total?100/h.total:0,g[0]=aa(g[0]*h),g[1]=aa(g[1]*h),a.stackedYData[f]=g[1]})};s(Ya.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=o(b,!0),I(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=
!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new ka(this,w(a,{index:this[e].length,isX:b}));f[e]=na(f[e]||{});f[e].push(a);o(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this.options,c=this.loadingDiv,d=b.loading;if(!c)this.loadingDiv=c=V(Ja,{className:"highcharts-loading"},s(d.style,{zIndex:10,display:O}),this.container),this.loadingSpan=V("span",null,d.labelStyle,c);this.loadingSpan.innerHTML=a||b.lang.loading;if(!this.loadingShown)D(c,
{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),jb(c,{opacity:d.style.opacity},{duration:d.showDuration||0}),this.loadingShown=!0},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&jb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){D(b,{display:O})}});this.loadingShown=!1}});s(Fa.prototype,{update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g,h=e.data,i=e.chart,j=e.options,b=o(b,
!0);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);if($(a)){e.getAttribs();if(f)a&&a.marker&&a.marker.symbol?d.graphic=f.destroy():f.attr(d.pointAttr[d.state||""]);if(a&&a.dataLabels&&d.dataLabel)d.dataLabel=d.dataLabel.destroy()}g=va(d,h);e.updateParallelArrays(d,g);j.data[g]=d.options;e.isDirty=e.isDirtyData=!0;if(!e.fixedBox&&e.hasCartesianSeries)i.isDirtyBox=!0;j.legendType==="point"&&i.legend.destroyItem(d);b&&i.redraw(c)})},remove:function(a,b){var c=this,d=c.series,e=d.points,
f=d.chart,g,h=d.data;Qa(b,f);a=o(a,!0);c.firePointEvent("remove",null,function(){g=va(c,h);h.length===e.length&&e.splice(g,1);h.splice(g,1);d.options.data.splice(g,1);d.updateParallelArrays(c,"splice",g,1);c.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&f.redraw()})}});s(M.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.graph,h=this.area,i=this.chart,j=this.xAxis&&this.xAxis.names,k=g&&g.shift||0,l=e.data,m,n=this.xData;Qa(d,i);c&&p([g,h,this.graphNeg,this.areaNeg],function(a){if(a)a.shift=
k+1});if(h)h.isArea=!0;b=o(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);g=d.x;h=n.length;if(this.requireSorting&&g<n[h-1])for(m=!0;h&&n[h-1]>g;)h--;this.updateParallelArrays(d,"splice",h,0,0);this.updateParallelArrays(d,h);if(j)j[g]=d.name;l.splice(h,0,a);m&&(this.data.splice(h,0,null),this.processData());e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(d,"shift"),l.shift()));this.isDirtyData=this.isDirty=
!0;b&&(this.getAttribs(),i.redraw())},remove:function(a,b){var c=this,d=c.chart,a=o(a,!0);if(!c.isRemoving)c.isRemoving=!0,I(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=!1},update:function(a,b){var c=this.chart,d=this.type,e=J[d].prototype,f,a=w(this.userOptions,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(f in e)e.hasOwnProperty(f)&&(this[f]=u);s(this,J[a.type||d].prototype);
this.init(c,a);o(b,!0)&&c.redraw(!1)}});s(ka.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.userMin=this.userMax=u;this.init(c,s(a,{events:u}));c.isDirtyBox=!0;o(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ia(b.axes,this);ia(b[c],this);b.options[c].splice(this.options.index,1);p(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;o(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});ea=ja(M);J.line=ea;Z.area=w(R,{threshold:0});var ma=ja(M,{type:"area",getSegments:function(){var a=[],b=[],c=[],d=this.xAxis,e=this.yAxis,f=e.stacks[this.stackKey],g={},h,i,j=this.points,k=this.options.connectNulls,l,m,n;if(this.options.stacking&&!this.cropped){for(m=0;m<j.length;m++)g[j[m].x]=j[m];for(n in f)f[n].total!==null&&c.push(+n);
c.sort(function(a,b){return a-b});p(c,function(a){if(!k||g[a]&&g[a].y!==null)g[a]?b.push(g[a]):(h=d.translate(a),l=f[a].percent?f[a].total?f[a].cum*100/f[a].total:0:f[a].cum,i=e.toPixels(l,!0),b.push({y:null,plotX:h,clientX:h,plotY:i,yBottom:i,onMouseOver:Ea}))});b.length&&a.push(b)}else M.prototype.getSegments.call(this),a=this.segments;this.segments=a},getSegmentPath:function(a){var b=M.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),
g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)g=o(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];M.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",
this.color,c.fillColor]];(d||e)&&f.push(["areaNeg",d,e]);p(f,function(d){var e=d[0],f=a[e];f?f.animate({d:b}):a[e]=a.chart.renderer.path(b).attr({fill:o(d[2],wa(d[1]).setOpacity(o(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:F.drawRectangle});J.area=ma;Z.spline=w(R);ea=ja(M,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*
e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?(i=t(a,e),k=2*e-i):i<a&&i<e&&(i=E(a,e),k=2*e-i);k>g&&k>e?(k=t(g,e),i=2*e-k):k<g&&k<e&&(k=E(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});J.spline=ea;Z.areaspline=w(Z.area);ma=ma.prototype;ea=ja(ea,{type:"areaspline",closedStacks:!0,getSegmentPath:ma.getSegmentPath,closeSegment:ma.closeSegment,drawGraph:ma.drawGraph,drawLegendSymbol:F.drawRectangle});
J.areaspline=ea;Z.column=w(R,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,threshold:0});ea=ja(M,{type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){M.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===!1?i=1:p(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===u&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=
h});var c=E(N(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=r(l)?(k-l)/2:k*b.pointPadding,l=o(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||0):a.columnIndex)||0)*k-c/2)*(e?-1:1)}},translate:function(){var a=this.chart,b=this.options,c=b.borderWidth,d=this.yAxis,e=this.translatedThreshold=d.getThreshold(b.threshold),f=o(b.minPointLength,5),b=this.getColumnMetrics(),g=b.width,h=this.barW=
Ka(t(g,1+2*c)),i=this.pointXOffset=b.offset,j=-(c%2?0.5:0),k=c%2?0.5:1;a.renderer.isVML&&a.inverted&&(k+=1);M.prototype.translate.apply(this);p(this.points,function(a){var b=o(a.yBottom,e),c=E(t(-999-b,a.plotY),d.len+999+b),q=a.plotX+i,p=h,r=E(c,b),s,c=t(c,b)-r;N(c)<f&&f&&(c=f,r=v(N(r-e)>f?b-f:e-(d.translate(a.y,0,1,0,1)<=e?f:0)));a.barX=q;a.pointWidth=g;b=N(q)<0.5;p=v(q+p)+j;q=v(q)+j;p-=q;s=N(r)<0.5;c=v(r+c)+k;r=v(r)+k;c-=r;b&&(q+=1,p-=1);s&&(r-=1,c+=1);a.shapeType="rect";a.shapeArgs={x:q,y:r,width:p,
height:c}})},getSymbol:Ea,drawLegendSymbol:F.drawRectangle,drawGraph:Ea,drawPoints:function(){var a=this,b=a.options,c=this.chart.renderer,d=b.animationLimit||250,e;p(a.points,function(f){var g=f.plotY,h=f.graphic;if(g!==u&&!isNaN(g)&&f.y!==null)e=f.shapeArgs,h?(ab(h),h[a.points.length<d?"animate":"attr"](w(e))):f.graphic=c[f.shapeType](e).attr(f.pointAttr[f.selected?"select":""]).add(a.group).shadow(b.shadow,null,b.stacking&&!b.borderRadius);else if(h)f.graphic=h.destroy()})},animate:function(a){var b=
this.yAxis,c=this.options,d=this.chart.inverted,e={};if(X)a?(e.scaleY=0.001,a=E(b.pos+b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&p(b.series,function(b){if(b.type===a.type)b.isDirty=!0});M.prototype.remove.apply(a,arguments)}});J.column=ea;Z.bar=w(Z.column);ma=ja(ea,{type:"bar",
inverted:!0});J.bar=ma;Z.scatter=w(R,{lineWidth:0,tooltip:{headerFormat:'<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",followPointer:!0},stickyTracking:!1});ma=ja(M,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup"],takeOrdinalPosition:!1,singularTooltips:!0,drawGraph:function(){this.options.lineWidth&&M.prototype.drawGraph.call(this)}});J.scatter=ma;Z.pie=w(R,
{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});R={type:"pie",isCartesian:!1,pointClass:ja(Fa,{init:function(){Fa.prototype.init.apply(this,arguments);var a=this,b;if(a.y<0)a.y=null;s(a,{visible:a.visible!==
!1,name:o(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};C(a,"select",b);C(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,d=c.chart;b.visible=b.options.visible=a=a===u?!b.visible:a;c.options.data[va(b,c.data)]=b.options;p(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)});b.legendItem&&d.legend.colorizeItem(b,a);if(!c.isDirty&&c.options.ignoreHiddenPoint)c.isDirty=!0,d.redraw()},slice:function(a,b,c){var d=this.series;
Qa(c,d.chart);o(b,!0);this.sliced=this.options.sliced=a=r(a)?a:!this.sliced;d.options.data[va(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,getColor:Ea,animate:function(a){var b=this,c=b.points,d=
b.startAngleRad;if(!a)p(c,function(a){var c=a.graphic,a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){M.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();o(b,!0)&&this.chart.redraw(c)},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;M.prototype.generatePoints.call(this);c=this.points;d=c.length;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?
0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0?e.y/b*100:0,e.total=b},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=la/180*(i-90),i=(this.endAngleRad=la/180*(o(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=k.length,p;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=T.asin(E((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*W(h)*(a[2]/
2+l)};for(m=0;m<n;m++){p=k[m];f=j+b*i;if(!c||p.visible)b+=p.percentage/100;g=j+b*i;p.shapeType="arc";p.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:v(f*1E3)/1E3,end:v(g*1E3)/1E3};h=(g+f)/2;h>1.5*la?h-=2*la:h<-la/2&&(h+=2*la);p.slicedTranslation={translateX:v(W(h)*d),translateY:v(ba(h)*d)};f=W(h)*a[2]/2;g=ba(h)*a[2]/2;p.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];p.half=h<-la/2||h>la/2?1:0;p.angle=h;e=E(e,l/2);p.labelPos=[a[0]+f+W(h)*l,a[1]+g+ba(h)*l,a[0]+f+W(h)*e,a[1]+g+ba(h)*e,a[0]+f,a[1]+g,l<0?
"center":p.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);p(a.points,function(h){d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(s(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?"select":
""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);h.visible!==void 0&&h.setVisible(h.visible)})},sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:F.drawRectangle,getCenter:da.getCenter,getSymbol:Ea};R=ja(M,R);J.pie=R;M.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,b=a.points,e,f,g,h;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),h=a.plotGroup("dataLabelsGroup",
"data-labels",a.visible?"visible":"hidden",d.zIndex||6),f=d,p(b,function(b){var j,k=b.dataLabel,l,m,n=b.connector,p=!0;e=b.options&&b.options.dataLabels;j=o(e&&e.enabled,f.enabled);if(k&&!j)b.dataLabel=k.destroy();else if(j){d=w(f,e);j=d.rotation;l=b.getLabelConfig();g=d.format?Ia(d.format,l):d.formatter.call(l,d);d.style.color=o(d.color,d.style.color,a.color,"black");if(k)if(r(g))k.attr({text:g}),p=!1;else{if(b.dataLabel=k=k.destroy(),n)b.connector=n.destroy()}else if(r(g)){k={fill:d.backgroundColor,
stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:j,padding:d.padding,zIndex:1};for(m in k)k[m]===u&&delete k[m];k=b.dataLabel=a.chart.renderer[j?"text":"label"](g,0,-999,null,null,null,d.useHTML).attr(k).css(s(d.style,c&&{cursor:c})).add(h).shadow(d.shadow)}k&&a.alignDataLabel(b,k,d,null,p)}})};M.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=o(a.plotX,-999),i=o(a.plotY,-999),j=b.getBBox();if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,
v(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)))d=s({x:g?f.plotWidth-i:h,y:v(g?f.plotHeight-h:i),width:0,height:0},d),s(c,{width:j.width,height:j.height}),c.rotation?(g={align:c.align,x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g)):(b.align(c,null,d),g=b.alignAttr,o(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,c,g,j,d,e):o(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)));if(!a)b.attr({y:-999}),b.placed=!1};M.prototype.justifyDataLabel=
function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k;j=c.x;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(J.pie)J.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=o(e.connectorPadding,
10),g=o(e.connectorWidth,1),h=d.plotWidth,d=d.plotHeight,i,j,k=o(e.softConnector,!0),l=e.distance,m=a.center,n=m[2]/2,q=m[1],r=l>0,s,u,w,x,y=[[],[]],z,B,E,H,A,D=[0,0,0,0],J=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){M.prototype.drawDataLabels.apply(a);p(b,function(a){a.dataLabel&&a.visible&&y[a.half].push(a)});for(H=0;!x&&b[H];)x=b[H]&&b[H].dataLabel&&(b[H].dataLabel.getBBox().height||21),H++;for(H=2;H--;){var b=[],I=[],F=y[H],G=F.length,C;a.sortByAngle(F,H-0.5);if(l>
0){for(A=q-n-l;A<=q+n+l;A+=x)b.push(A);u=b.length;if(G>u){c=[].concat(F);c.sort(J);for(A=G;A--;)c[A].rank=A;for(A=G;A--;)F[A].rank>=u&&F.splice(A,1);G=F.length}for(A=0;A<G;A++){c=F[A];w=c.labelPos;c=9999;var O,L;for(L=0;L<u;L++)O=N(b[L]-w[1]),O<c&&(c=O,C=L);if(C<A&&b[A]!==null)C=A;else for(u<G-A+C&&b[A]!==null&&(C=u-G+A);b[C]===null;)C++;I.push({i:C,y:b[C]});b[C]=null}I.sort(J)}for(A=0;A<G;A++){c=F[A];w=c.labelPos;s=c.dataLabel;E=c.visible===!1?"hidden":"visible";c=w[1];if(l>0){if(u=I.pop(),C=u.i,
B=u.y,c>B&&b[C+1]!==null||c<B&&b[C-1]!==null)B=c}else B=c;z=e.justify?m[0]+(H?-1:1)*(n+l):a.getX(C===0||C===b.length-1?c:B,H);s._attr={visibility:E,align:w[6]};s._pos={x:z+e.x+({left:f,right:-f}[w[6]]||0),y:B+e.y-10};s.connX=z;s.connY=B;if(this.options.size===null)u=s.width,z-u<f?D[3]=t(v(u-z+f),D[3]):z+u>h-f&&(D[1]=t(v(z+u-h+f),D[1])),B-x/2<0?D[0]=t(v(-B+x/2),D[0]):B+x/2>d&&(D[2]=t(v(B+x/2-d),D[2]))}}if(Ba(D)===0||this.verifyDataLabelOverflow(D))this.placeDataLabels(),r&&g&&p(this.points,function(b){i=
b.connector;w=b.labelPos;if((s=b.dataLabel)&&s._pos)E=s._attr.visibility,z=s.connX,B=s.connY,j=k?["M",z+(w[6]==="left"?5:-5),B,"C",z,B,2*w[2]-w[4],2*w[3]-w[5],w[2],w[3],"L",w[4],w[5]]:["M",z+(w[6]==="left"?5:-5),B,"L",w[2],w[3],"L",w[4],w[5]],i?(i.animate({d:j}),i.attr("visibility",E)):b.connector=i=a.chart.renderer.path(j).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:E}).add(a.group);else if(i)b.connector=i.destroy()})}},J.pie.prototype.placeDataLabels=function(){p(this.points,
function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},J.pie.prototype.alignDataLabel=Ea,J.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;d[0]!==null?e=t(b[2]-t(a[1],a[3]),c):(e=t(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=t(E(e,b[2]-t(a[0],a[2])),c):(e=t(E(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),p(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=
null}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f};if(J.column)J.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>o(this.translatedThreshold,f.plotSizeY),j=o(c.inside,!!this.options.stacking);if(h&&(d=w(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j))g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=o(c.align,!g||j?"center":i?"right":"left");
c.verticalAlign=o(c.verticalAlign,g||j?"middle":i?"top":"bottom");M.prototype.alignDataLabel.call(this,a,b,c,d,e)};R=Q.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(c){var d=c.target,e;if(b.hoverSeries!==a)a.onMouseOver();for(;d&&!e;)e=d.point,d=d.parentNode;if(e!==u&&e!==b.hoverPoint)e.onMouseOver(c)};p(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)p(a.trackerGroups,
function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),$a))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},o="rgba(192,192,192,"+(X?1.0E-4:0.002)+
")";if(e&&!c)for(m=e+1;m--;)d[m]==="M"&&d.splice(m+1,0,d[m+1]-i,d[m+2],"L"),(m&&d[m]==="M"||m===e)&&d.splice(m,0,"L",d[m-2]+i,d[m-1]);for(m=0;m<k.length;m++)e=k[m],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:o,fill:c?o:O,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),p([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",
function(a){g.onTrackerMouseOut(a)}).css(l);if($a)a.on("touchstart",n)}))}};if(J.column)ea.prototype.drawTracker=R.drawTrackerPoint;if(J.pie)J.pie.prototype.drawTracker=R.drawTrackerPoint;if(J.scatter)ma.prototype.drawTracker=R.drawTrackerPoint;s(lb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},
b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=V("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){I(a,"checkboxClick",{checked:b.target.checked},function(){a.select()})})}});L.legend.itemStyle.cursor="pointer";s(Ya.prototype,{showResetZoom:function(){var a=this,b=L.lang,c=a.options.chart.resetZoomButton,
d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?p(this.axes,function(a){b=a.zoom()}):p(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?
"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&$(e))this.resetZoomButton=e.destroy();b&&this.redraw(o(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&p(d,function(a){a.setState()});p(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),
l=h.toValue(i-d,!0)+j,i=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j;h.series.length&&l>E(k.dataMin,k.min)&&i<t(k.dataMax,k.max)&&(h.setExtremes(l,i,!1,!1,{trigger:"pan"}),e=!0);c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);D(c.container,{cursor:"move"})}});s(Fa.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=o(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[va(c,d.data)]=c.options;c.setState(a&&
"select");b||p(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[va(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;if(!b||va(this,
b)===-1)this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=null},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,this.options).events,b;this.events=a;for(b in a)C(this,b,a[b]);this.hasImportedEvents=
!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=Z[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,n=this.pointAttr,a=a||"",b=b&&k;if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&!i.enabled)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)f=g&&this.graphic.symbolName&&n[a].r,this.graphic.attr(w(n[a],f?{x:c-
f,y:d-f,width:2*f,height:2*f}:{}));else{if(a&&i)if(f=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-f,y:d-f});else e.stateMarkerGraphic=k=m.renderer.symbol(l,c-f,d-f,2*f,2*f).attr(n[a]).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"]()}this.state=a}}});s(M.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");
this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,a=a||"";if(this.state!==a)this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+1),c&&!c.dashstyle&&(a={"stroke-width":b},
c.attr(a),d&&d.attr(a)))},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===u?!h:a)?"show":"hide";p(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&p(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});p(c.linkedSeries,function(b){b.setVisible(a,
!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,i,j=[];if(!(this.options.enableMouseTracking===!1||this.singularTooltips)){if(a)this.tooltipPoints=null;p(this.segments||this.points,function(a){b=b.concat(a)});e&&e.reversed&&(b=b.reverse());this.orderTooltipPoints&&this.orderTooltipPoints(b);a=b.length;for(i=0;i<a;i++)if(e=b[i],c=e.x,c>=f.min&&c<=f.max){h=b[i+1];c=d===u?
0:d+1;for(d=b[i+1]?E(t(0,S((e.clientX+(h?h.wrappedClientX||h.clientX:g))/2)),g):g;c>=0&&c<=d;)j[c++]=e}this.tooltipPoints=j}},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===u?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},drawTracker:R.drawTrackerGraph});s(Q,{Axis:ka,Chart:Ya,Color:wa,Point:Fa,Tick:Sa,Renderer:Za,Series:M,SVGElement:ta,SVGRenderer:pa,arrayMin:Na,arrayMax:Ba,charts:Y,dateFormat:bb,
format:Ia,pathAnim:ub,getOptions:function(){return L},hasBidiBug:Ob,isTouchDevice:Jb,numberFormat:Ga,seriesTypes:J,setOptions:function(a){L=w(!0,L,a);Cb();return L},addEvent:C,removeEvent:U,createElement:V,discardElement:Pa,css:D,each:p,extend:s,map:Ua,merge:w,pick:o,splat:na,extendClass:ja,pInt:x,wrap:Ma,svg:X,canvas:ca,vml:!X&&!ca,product:"Highcharts",version:"3.0.10"})})();
/*
 * Chartkick.js
 * Create beautiful Javascript charts with minimal code
 * https://github.com/ankane/chartkick.js
 * v1.2.1
 * MIT License
 */

/*jslint browser: true, indent: 2, plusplus: true, vars: true */


(function (window) {
  'use strict';

  var Chartkick, ISO8601_PATTERN, DECIMAL_SEPARATOR, adapters = [];

  var $ = window.jQuery || window.Zepto || window.$;

  // helpers

  function isArray(variable) {
    return Object.prototype.toString.call(variable) === "[object Array]";
  }

  function isFunction(variable) {
    return variable instanceof Function;
  }

  function isPlainObject(variable) {
    return !isFunction(variable) && variable instanceof Object;
  }

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js
  function extend(target, source) {
    var key;
    for (key in source) {
      if (isPlainObject(source[key]) || isArray(source[key])) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = {};
        }
        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = [];
        }
        extend(target[key], source[key]);
      } else if (source[key] !== undefined) {
        target[key] = source[key];
      }
    }
  }

  function merge(obj1, obj2) {
    var target = {};
    extend(target, obj1);
    extend(target, obj2);
    return target;
  }

  // https://github.com/Do/iso8601.js
  ISO8601_PATTERN = /(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i;
  DECIMAL_SEPARATOR = String(1.5).charAt(1);

  function parseISO8601(input) {
    var day, hour, matches, milliseconds, minutes, month, offset, result, seconds, type, year;
    type = Object.prototype.toString.call(input);
    if (type === '[object Date]') {
      return input;
    }
    if (type !== '[object String]') {
      return;
    }
    if (matches = input.match(ISO8601_PATTERN)) {
      year = parseInt(matches[1], 10);
      month = parseInt(matches[3], 10) - 1;
      day = parseInt(matches[5], 10);
      hour = parseInt(matches[7], 10);
      minutes = matches[9] ? parseInt(matches[9], 10) : 0;
      seconds = matches[11] ? parseInt(matches[11], 10) : 0;
      milliseconds = matches[12] ? parseFloat(DECIMAL_SEPARATOR + matches[12].slice(1)) * 1000 : 0;
      result = Date.UTC(year, month, day, hour, minutes, seconds, milliseconds);
      if (matches[13] && matches[14]) {
        offset = matches[15] * 60;
        if (matches[17]) {
          offset += parseInt(matches[17], 10);
        }
        offset *= matches[14] === '-' ? -1 : 1;
        result -= offset * 60 * 1000;
      }
      return new Date(result);
    }
  }
  // end iso8601.js

  function negativeValues(series) {
    var i, j, data;
    for (i = 0; i < series.length; i++) {
      data = series[i].data;
      for (j = 0; j < data.length; j++) {
        if (data[j][1] < 0) {
          return true;
        }
      }
    }
    return false;
  }

  function jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked) {
    return function (series, opts, chartOptions) {
      var options = merge({}, defaultOptions);
      options = merge(options, chartOptions || {});

      // hide legend
      // this is *not* an external option!
      if (opts.hideLegend) {
        hideLegend(options);
      }

      // min
      if ("min" in opts) {
        setMin(options, opts.min);
      } else if (!negativeValues(series)) {
        setMin(options, 0);
      }

      // max
      if ("max" in opts) {
        setMax(options, opts.max);
      }

      if (opts.stacked) {
        setStacked(options);
      }

      if (opts.colors) {
        options.colors = opts.colors;
      }

      // merge library last
      options = merge(options, opts.library || {});

      return options;
    };
  }

  function setText(element, text) {
    if (document.body.innerText) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }

  function chartError(element, message) {
    setText(element, "Error Loading Chart: " + message);
    element.style.color = "#ff0000";
  }

  function getJSON(element, url, success) {
    $.ajax({
      dataType: "json",
      url: url,
      success: success,
      error: function (jqXHR, textStatus, errorThrown) {
        var message = (typeof errorThrown === "string") ? errorThrown : errorThrown.message;
        chartError(element, message);
      }
    });
  }

  function errorCatcher(chart, callback) {
    try {
      callback(chart);
    } catch (err) {
      chartError(chart.element, err.message);
      throw err;
    }
  }

  function fetchDataSource(chart, callback) {
    if (typeof chart.dataSource === "string") {
      getJSON(chart.element, chart.dataSource, function (data, textStatus, jqXHR) {
        chart.data = data;
        errorCatcher(chart, callback);
      });
    } else {
      chart.data = chart.dataSource;
      errorCatcher(chart, callback);
    }
  }

  // type conversions

  function toStr(n) {
    return "" + n;
  }

  function toFloat(n) {
    return parseFloat(n);
  }

  function toDate(n) {
    if (typeof n !== "object") {
      if (typeof n === "number") {
        n = new Date(n * 1000); // ms
      } else { // str
        // try our best to get the str into iso8601
        // TODO be smarter about this
        var str = n.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
        n = parseISO8601(str) || new Date(n);
      }
    }
    return n;
  }

  function toArr(n) {
    if (!isArray(n)) {
      var arr = [], i;
      for (i in n) {
        if (n.hasOwnProperty(i)) {
          arr.push([i, n[i]]);
        }
      }
      n = arr;
    }
    return n;
  }

  function sortByTime(a, b) {
    return a[0].getTime() - b[0].getTime();
  }

  if ("Highcharts" in window) {
    var HighchartsAdapter = new function () {
      var Highcharts = window.Highcharts;

      var defaultOptions = {
        chart: {},
        xAxis: {
          labels: {
            style: {
              fontSize: "12px"
            }
          }
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            style: {
              fontSize: "12px"
            }
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        legend: {
          borderWidth: 0
        },
        tooltip: {
          style: {
            fontSize: "12px"
          }
        },
        plotOptions: {
          areaspline: {},
          series: {
            marker: {}
          }
        }
      };

      var hideLegend = function (options) {
        options.legend.enabled = false;
      };

      var setMin = function (options, min) {
        options.yAxis.min = min;
      };

      var setMax = function (options, max) {
        options.yAxis.max = max;
      };

      var setStacked = function (options) {
        options.plotOptions.series.stacking = "normal";
      };

      var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked);

      this.renderLineChart = function (chart, chartType) {
        chartType = chartType || "spline";
        var chartOptions = {};
        if (chartType === "areaspline") {
          chartOptions = {
            plotOptions: {
              areaspline: {
                stacking: "normal"
              },
              series: {
                marker: {
                  enabled: false
                }
              }
            }
          };
        }
        var options = jsOptions(chart.data, chart.options, chartOptions), data, i, j;
        options.xAxis.type = chart.options.discrete ? "category" : "datetime";
        options.chart.type = chartType;
        options.chart.renderTo = chart.element.id;

        var series = chart.data;
        for (i = 0; i < series.length; i++) {
          data = series[i].data;
          if (!chart.options.discrete) {
            for (j = 0; j < data.length; j++) {
              data[j][0] = data[j][0].getTime();
            }
          }
          series[i].marker = {symbol: "circle"};
        }
        options.series = series;
        new Highcharts.Chart(options);
      };

      this.renderPieChart = function (chart) {
        var chartOptions = {};
        if (chart.options.colors) {
          chartOptions.colors = chart.options.colors;
        }
        var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});
        options.chart.renderTo = chart.element.id;
        options.series = [{
          type: "pie",
          name: "Value",
          data: chart.data
        }];
        new Highcharts.Chart(options);
      };

      this.renderColumnChart = function (chart, chartType) {
        var chartType = chartType || "column";
        var series = chart.data;
        var options = jsOptions(series, chart.options), i, j, s, d, rows = [];
        options.chart.type = chartType;
        options.chart.renderTo = chart.element.id;

        for (i = 0; i < series.length; i++) {
          s = series[i];

          for (j = 0; j < s.data.length; j++) {
            d = s.data[j];
            if (!rows[d[0]]) {
              rows[d[0]] = new Array(series.length);
            }
            rows[d[0]][i] = d[1];
          }
        }

        var categories = [];
        for (i in rows) {
          if (rows.hasOwnProperty(i)) {
            categories.push(i);
          }
        }
        options.xAxis.categories = categories;

        var newSeries = [];
        for (i = 0; i < series.length; i++) {
          d = [];
          for (j = 0; j < categories.length; j++) {
            d.push(rows[categories[j]][i] || 0);
          }

          newSeries.push({
            name: series[i].name,
            data: d
          });
        }
        options.series = newSeries;

        new Highcharts.Chart(options);
      };

      var self = this;

      this.renderBarChart = function (chart) {
        self.renderColumnChart(chart, "bar");
      };

      this.renderAreaChart = function (chart) {
        self.renderLineChart(chart, "areaspline");
      };
    };
    adapters.push(HighchartsAdapter);
  }
  if ("google" in window) {
    var GoogleChartsAdapter = new function () {
      var google = window.google;

      // load from google
      var loaded = false;
      google.setOnLoadCallback(function () {
        loaded = true;
      });
      google.load("visualization", "1.0", {"packages": ["corechart"]});

      var waitForLoaded = function (callback) {
        google.setOnLoadCallback(callback); // always do this to prevent race conditions (watch out for other issues due to this)
        if (loaded) {
          callback();
        }
      };

      // Set chart options
      var defaultOptions = {
        chartArea: {},
        fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
        pointSize: 6,
        legend: {
          textStyle: {
            fontSize: 12,
            color: "#444"
          },
          alignment: "center",
          position: "right"
        },
        curveType: "function",
        hAxis: {
          textStyle: {
            color: "#666",
            fontSize: 12
          },
          gridlines: {
            color: "transparent"
          },
          baselineColor: "#ccc",
          viewWindow: {}
        },
        vAxis: {
          textStyle: {
            color: "#666",
            fontSize: 12
          },
          baselineColor: "#ccc",
          viewWindow: {}
        },
        tooltip: {
          textStyle: {
            color: "#666",
            fontSize: 12
          }
        }
      };

      var hideLegend = function (options) {
        options.legend.position = "none";
      };

      var setMin = function (options, min) {
        options.vAxis.viewWindow.min = min;
      };

      var setMax = function (options, max) {
        options.vAxis.viewWindow.max = max;
      };

      var setBarMin = function (options, min) {
        options.hAxis.viewWindow.min = min;
      };

      var setBarMax = function (options, max) {
        options.hAxis.viewWindow.max = max;
      };

      var setStacked = function (options) {
        options.isStacked = true;
      };

      var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked);

      // cant use object as key
      var createDataTable = function (series, columnType) {
        var data = new google.visualization.DataTable();
        data.addColumn(columnType, "");

        var i, j, s, d, key, rows = [];
        for (i = 0; i < series.length; i++) {
          s = series[i];
          data.addColumn("number", s.name);

          for (j = 0; j < s.data.length; j++) {
            d = s.data[j];
            key = (columnType === "datetime") ? d[0].getTime() : d[0];
            if (!rows[key]) {
              rows[key] = new Array(series.length);
            }
            rows[key][i] = toFloat(d[1]);
          }
        }

        var rows2 = [];
        for (i in rows) {
          if (rows.hasOwnProperty(i)) {
            rows2.push([(columnType === "datetime") ? new Date(toFloat(i)) : i].concat(rows[i]));
          }
        }
        if (columnType === "datetime") {
          rows2.sort(sortByTime);
        }
        data.addRows(rows2);

        return data;
      };

      var resize = function (callback) {
        if (window.attachEvent) {
          window.attachEvent("onresize", callback);
        } else if (window.addEventListener) {
          window.addEventListener("resize", callback, true);
        }
        callback();
      };

      this.renderLineChart = function (chart) {
        waitForLoaded(function () {
          var options = jsOptions(chart.data, chart.options);
          var data = createDataTable(chart.data, chart.options.discrete ? "string" : "datetime");
          chart.chart = new google.visualization.LineChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderPieChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            chartArea: {
              top: "10%",
              height: "80%"
            }
          };
          if (chart.options.colors) {
            chartOptions.colors = chart.options.colors;
          }
          var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

          var data = new google.visualization.DataTable();
          data.addColumn("string", "");
          data.addColumn("number", "Value");
          data.addRows(chart.data);

          chart.chart = new google.visualization.PieChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderColumnChart = function (chart) {
        waitForLoaded(function () {
          var options = jsOptions(chart.data, chart.options);
          var data = createDataTable(chart.data, "string");
          chart.chart = new google.visualization.ColumnChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderBarChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            hAxis: {
              gridlines: {
                color: "#ccc"
              }
            }
          };
          var options = jsOptionsFunc(defaultOptions, hideLegend, setBarMin, setBarMax, setStacked)(chart.data, chart.options, chartOptions);
          var data = createDataTable(chart.data, "string");
          chart.chart = new google.visualization.BarChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderAreaChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            isStacked: true,
            pointSize: 0,
            areaOpacity: 0.5
          };
          var options = jsOptions(chart.data, chart.options, chartOptions);
          var data = createDataTable(chart.data, chart.options.discrete ? "string" : "datetime");
          chart.chart = new google.visualization.AreaChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderGeoChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            legend: "none",
            colorAxis: {
              colors: chart.options.colors || ["#f6c7b6", "#ce502d"]
            }
          };
          var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

          var data = new google.visualization.DataTable();
          data.addColumn("string", "");
          data.addColumn("number", "Value");
          data.addRows(chart.data);

          chart.chart = new google.visualization.GeoChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };
    };
    adapters.push(GoogleChartsAdapter);
  }

  // TODO add adapter option
  // TODO remove chartType if cross-browser way
  // to get the name of the chart class
  function renderChart(chartType, chart) {
    var i, adapter, fnName;
    fnName = "render" + chartType + "Chart";

    for (i = 0; i < adapters.length; i++) {
      adapter = adapters[i];
      if (isFunction(adapter[fnName])) {
        return adapter[fnName](chart);
      }
    }
    throw new Error("No adapter found");
  }

  // process data

  function processSeries(series, opts, time) {
    var i, j, data, r, key;

    // see if one series or multiple
    if (!isArray(series) || typeof series[0] !== "object" || isArray(series[0])) {
      series = [{name: "Value", data: series}];
      opts.hideLegend = true;
    } else {
      opts.hideLegend = false;
    }
    if (opts.discrete) {
      time = false;
    }

    // right format
    for (i = 0; i < series.length; i++) {
      data = toArr(series[i].data);
      r = [];
      for (j = 0; j < data.length; j++) {
        key = data[j][0];
        key = time ? toDate(key) : toStr(key);
        r.push([key, toFloat(data[j][1])]);
      }
      if (time) {
        r.sort(sortByTime);
      }
      series[i].data = r;
    }

    return series;
  }

  function processSimple(data) {
    var perfectData = toArr(data), i;
    for (i = 0; i < perfectData.length; i++) {
      perfectData[i] = [toStr(perfectData[i][0]), toFloat(perfectData[i][1])];
    }
    return perfectData;
  }

  function processLineData(chart) {
    chart.data = processSeries(chart.data, chart.options, true);
    renderChart("Line", chart);
  }

  function processColumnData(chart) {
    chart.data = processSeries(chart.data, chart.options, false);
    renderChart("Column", chart);
  }

  function processPieData(chart) {
    chart.data = processSimple(chart.data);
    renderChart("Pie", chart);
  }

  function processBarData(chart) {
    chart.data = processSeries(chart.data, chart.options, false);
    renderChart("Bar", chart);
  }

  function processAreaData(chart) {
    chart.data = processSeries(chart.data, chart.options, true);
    renderChart("Area", chart);
  }

  function processGeoData(chart) {
    chart.data = processSimple(chart.data);
    renderChart("Geo", chart);
  }

  function setElement(chart, element, dataSource, opts, callback) {
    if (typeof element === "string") {
      element = document.getElementById(element);
    }
    chart.element = element;
    chart.options = opts || {};
    chart.dataSource = dataSource;
    Chartkick.charts[element.id] = chart;
    fetchDataSource(chart, callback);
  }

  // define classes

  Chartkick = {
    LineChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processLineData);
    },
    PieChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processPieData);
    },
    ColumnChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processColumnData);
    },
    BarChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processBarData);
    },
    AreaChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processAreaData);
    },
    GeoChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processGeoData);
    },
    charts: {}
  };

  window.Chartkick = Chartkick;
}(window));
Chartkick.options = {
  height: "400px",
  colors: ["pink", "#999"],
  //content_for: :charts_js
}


;
/*!
 * typeahead.js 0.10.2
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */


(function($) {
    var _ = {
        isMsie: function() {
            return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
        },
        isBlankString: function(str) {
            return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function(obj) {
            return typeof obj === "string";
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        bind: $.proxy,
        each: function(collection, cb) {
            $.each(collection, reverseArgs);
            function reverseArgs(index, value) {
                return cb(value, index);
            }
        },
        map: $.map,
        filter: $.grep,
        every: function(obj, test) {
            var result = true;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (!(result = test.call(null, val, key, obj))) {
                    return false;
                }
            });
            return !!result;
        },
        some: function(obj, test) {
            var result = false;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (result = test.call(null, val, key, obj)) {
                    return false;
                }
            });
            return !!result;
        },
        mixin: $.extend,
        getUniqueId: function() {
            var counter = 0;
            return function() {
                return counter++;
            };
        }(),
        templatify: function templatify(obj) {
            return $.isFunction(obj) ? obj : template;
            function template() {
                return String(obj);
            }
        },
        defer: function(fn) {
            setTimeout(fn, 0);
        },
        debounce: function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this, args = arguments, later, callNow;
                later = function() {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        },
        throttle: function(func, wait) {
            var context, args, timeout, result, previous, later;
            previous = 0;
            later = function() {
                previous = new Date();
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date(), remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        noop: function() {}
    };
    var VERSION = "0.10.2";
    var tokenizers = function(root) {
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(s) {
            return s.split(/\s+/);
        }
        function nonword(s) {
            return s.split(/\W+/);
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(key) {
                return function tokenize(o) {
                    return tokenizer(o[key]);
                };
            };
        }
    }();
    var LruCache = function() {
        function LruCache(maxSize) {
            this.maxSize = maxSize || 100;
            this.size = 0;
            this.hash = {};
            this.list = new List();
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + this.prefix);
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: _.noop,
                set: _.noop,
                remove: _.noop,
                clear: _.noop,
                isExpired: _.noop
            };
        }
        _.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return JSON.parse(val);
        }
    }();
    var Transport = function() {
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, requestCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function clearCache() {
            requestCache = new LruCache(10);
        };
        _.mixin(Transport.prototype, {
            _get: function(url, o, cb) {
                var that = this, jqXhr;
                if (jqXhr = pendingRequests[url]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb && cb(null, resp);
                    requestCache.set(url, resp);
                }
                function fail() {
                    cb && cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[url];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(url, o, cb) {
                var resp;
                if (_.isFunction(o)) {
                    cb = o;
                    o = {};
                }
                if (resp = requestCache.get(url)) {
                    _.defer(function() {
                        cb && cb(null, resp);
                    });
                } else {
                    this._get(url, o, cb);
                }
                return !!resp;
            }
        });
        return Transport;
        function callbackToDeferred(fn) {
            return function customSendWrapper(url, o) {
                var deferred = $.Deferred();
                fn(url, o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var SearchIndex = function() {
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    id = that.datums.push(datum) - 1;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node.children[ch] || (node.children[ch] = newNode());
                            node.ids.push(id);
                        }
                    });
                });
            },
            get: function get(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node.children[ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node.ids.slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            reset: function reset() {
                this.datums = [];
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            return {
                ids: [],
                children: {}
            };
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0; i < array.length; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort(compare);
            arrayB = arrayB.sort(compare);
            while (ai < arrayA.length && bi < arrayB.length) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
            function compare(a, b) {
                return a - b;
            }
        }
    }();
    var oParser = function() {
        return {
            local: getLocal,
            prefetch: getPrefetch,
            remote: getRemote
        };
        function getLocal(o) {
            return o.local || null;
        }
        function getPrefetch(o) {
            var prefetch, defaults;
            defaults = {
                url: null,
                thumbprint: "",
                ttl: 24 * 60 * 60 * 1e3,
                filter: null,
                ajax: {}
            };
            if (prefetch = o.prefetch || null) {
                prefetch = _.isString(prefetch) ? {
                    url: prefetch
                } : prefetch;
                prefetch = _.mixin(defaults, prefetch);
                prefetch.thumbprint = VERSION + prefetch.thumbprint;
                prefetch.ajax.type = prefetch.ajax.type || "GET";
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
                !prefetch.url && $.error("prefetch requires url to be set");
            }
            return prefetch;
        }
        function getRemote(o) {
            var remote, defaults;
            defaults = {
                url: null,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            };
            if (remote = o.remote || null) {
                remote = _.isString(remote) ? {
                    url: remote
                } : remote;
                remote = _.mixin(defaults, remote);
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";
                remote.ajax.dataType = remote.ajax.dataType || "json";
                delete remote.rateLimitBy;
                delete remote.rateLimitWait;
                !remote.url && $.error("remote requires url to be set");
            }
            return remote;
            function byDebounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function byThrottle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
    }();
    (function(root) {
        var old, keys;
        old = root.Bloodhound;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        root.Bloodhound = Bloodhound;
        function Bloodhound(o) {
            if (!o || !o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.limit = o.limit || 5;
            this.sorter = getSorter(o.sorter);
            this.dupDetector = o.dupDetector || ignoreDuplicates;
            this.local = oParser.local(o);
            this.prefetch = oParser.prefetch(o);
            this.remote = oParser.remote(o);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new SearchIndex({
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
        }
        Bloodhound.noConflict = function noConflict() {
            root.Bloodhound = old;
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            _loadPrefetch: function loadPrefetch(o) {
                var that = this, serialized, deferred;
                if (serialized = this._readFromStorage(o.thumbprint)) {
                    this.index.bootstrap(serialized);
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
                }
                return deferred;
                function handlePrefetchResponse(resp) {
                    that.clear();
                    that.add(o.filter ? o.filter(resp) : resp);
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
                }
            },
            _getFromRemote: function getFromRemote(query, cb) {
                var that = this, url, uriEncodedQuery;
                query = query || "";
                uriEncodedQuery = encodeURIComponent(query);
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);
                function handleRemoteResponse(err, resp) {
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
                }
            },
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {
                if (this.storage) {
                    this.storage.set(keys.data, data, ttl);
                    this.storage.set(keys.protocol, location.protocol, ttl);
                    this.storage.set(keys.thumbprint, thumbprint, ttl);
                }
            },
            _readFromStorage: function readFromStorage(thumbprint) {
                var stored = {}, isExpired;
                if (this.storage) {
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
                }
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            _initialize: function initialize() {
                var that = this, local = this.local, deferred;
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
                local && deferred.done(addLocalToIndex);
                this.transport = this.remote ? new Transport(this.remote) : null;
                return this.initPromise = deferred.promise();
                function addLocalToIndex() {
                    that.add(_.isFunction(local) ? local() : local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
            },
            get: function get(query, cb) {
                var that = this, matches = [], cacheHit = false;
                matches = this.index.get(query);
                matches = this.sorter(matches).slice(0, this.limit);
                if (matches.length < this.limit && this.transport) {
                    cacheHit = this._getFromRemote(query, returnRemoteMatches);
                }
                if (!cacheHit) {
                    (matches.length > 0 || !this.transport) && cb && cb(matches);
                }
                function returnRemoteMatches(remoteMatches) {
                    var matchesWithBackfill = matches.slice(0);
                    _.each(remoteMatches, function(remoteMatch) {
                        var isDuplicate;
                        isDuplicate = _.some(matchesWithBackfill, function(match) {
                            return that.dupDetector(remoteMatch, match);
                        });
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);
                        return matchesWithBackfill.length < that.limit;
                    });
                    cb && cb(that.sorter(matchesWithBackfill));
                }
            },
            clear: function clear() {
                this.index.reset();
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.storage && this.storage.clear();
            },
            clearRemoteCache: function clearRemoteCache() {
                this.transport && Transport.resetCache();
            },
            ttAdapter: function ttAdapter() {
                return _.bind(this.get, this);
            }
        });
        return Bloodhound;
        function getSorter(sortFn) {
            return _.isFunction(sortFn) ? sort : noSort;
            function sort(array) {
                return array.sort(sortFn);
            }
            function noSort(array) {
                return array;
            }
        }
        function ignoreDuplicates() {
            return false;
        }
    })(this);
    var html = {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion"></div>'
    };
    var css = {
        wrapper: {
            position: "relative",
            display: "inline-block"
        },
        hint: {
            position: "absolute",
            top: "0",
            left: "0",
            borderColor: "transparent",
            boxShadow: "none"
        },
        input: {
            position: "relative",
            verticalAlign: "top",
            backgroundColor: "transparent"
        },
        inputWithNoHint: {
            position: "relative",
            verticalAlign: "top"
        },
        dropdown: {
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "100",
            display: "none"
        },
        suggestions: {
            display: "block"
        },
        suggestion: {
            whiteSpace: "nowrap",
            cursor: "pointer"
        },
        suggestionChild: {
            whiteSpace: "normal"
        },
        ltr: {
            left: "0",
            right: "auto"
        },
        rtl: {
            left: "auto",
            right: " 0"
        }
    };
    if (_.isMsie()) {
        _.mixin(css.input, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        });
    }
    if (_.isMsie() && _.isMsie() <= 7) {
        _.mixin(css.input, {
            marginTop: "-1px"
        });
    }
    var EventBus = function() {
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0; !cancelled && i < callbacks.length; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0; i < patterns.length; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                  case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;

                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query = inputValue);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDomStructure(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                    });
                }
            });
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;
        function buildDomStructure(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", true).attr({
                autocomplete: "off",
                spellcheck: "false"
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.1.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/


(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      group_el = document.createElement("li");
      group_el.className = "group-result";
      group_el.innerHTML = group.search_text;
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + escapedSearchText, 'i');
      zregex = new RegExp(escapedSearchText, 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          if (!(option.group && !this.group_search)) {
            option.search_text = option.group ? option.label : option.html;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen) {
          chosen.destroy();
        } else if (!chosen) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      this.set_label_behavior();
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + item.html + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(item.text);
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").text(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      if (this.search_field.val() === this.default_text) {
        return "";
      } else {
        return $('<div/>').text($.trim(this.search_field.val())).html();
      }
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);
$(document).ready( function () {

 $('.chosen-select').chosen({
    allow_single_deselect: true,
    no_results_text: 'Sin resultados',
    width: '200px',
    height: '40px',
 })

 });
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/*
 * Smoothzoom
 * http://kthornbloom.com/smoothzoom
 *
 * Copyright 2014, Kevin Thornbloom
 * Free to use and modify under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */


(function($) {
    $.fn.extend({
        smoothZoom: function(options) {

            var defaults = {
                zoominSpeed: 800,
                zoomoutSpeed: 400,
                resizeDelay: 400,
                zoominEasing: 'easeOutExpo',
                zoomoutEasing: 'easeOutExpo'
            }

            var options = $.extend(defaults, options);



            // CLICKING AN IMAGE

            $('img[rel="zoom"]').click(function(event) {

                var link = $(this).attr('src'),
                    largeImg = $(this).parent().attr('href'),
                    target = $(this).parent().attr('target'),
                    offset = $(this).offset(),
                    width = $(this).width(),
                    height = $(this).height(),
                    amountScrolled = $(window).scrollTop(),
                    viewportWidth = $(window).width(),
                    viewportHeight = $(window).height();
                // IF THERE IS NO ANCHOR WRAP
                if ((!largeImg) || (largeImg == "#")) {

                    $('body').append("<div id='lightwrap'><img src=" + link + "></div><div id='lightbg'></div><img id='off-screen' src=" + link + ">");
                    $("#off-screen").load(function() {
                        $('#lightwrap img').css({
                            width: width,
                            height: height,
                            top: (offset.top - amountScrolled),
                            left: offset.left
                        });
                        fitWidth();
                        $('#lightbg').fadeIn();
                    });
                    $(this).attr('id', 'lightzoomed');

                    // IF THERE IS AN ANCHOR, AND IT'S AN IMAGE
                } else if (largeImg.match("[jpg|png|gif]$")) {
                    $('body').append("<div id='lightwrap'><img src=" + largeImg + "></div><div id='lightbg'></div><img id='off-screen' src=" + largeImg + ">");
                    $("#off-screen").load(function() {
                        $('#lightwrap img').css({
                            width: width,
                            height: height,
                            top: (offset.top - amountScrolled),
                            left: offset.left
                        });
                        fitWidth();
                        $('#lightbg').fadeIn();
                    });
                    $(this).attr('id', 'lightzoomed');

                    // IF THERE IS AN ANCHOR, BUT NOT AN IMAGE
                } else {
                    // SHOULD IT OPEN IN A NEW WINDOW?
                    if (target = '_blank') {
                        window.open(largeImg, '_blank');
                    } else {
                        window.location = largeImg;
                    }
                }
                event.preventDefault();
            });

            // CLOSE MODAL

            $(document.body).on("click", "#lightwrap, #lightbg", function(event) {
                var offset = $("#lightzoomed").offset(),
                    originalWidth = $("#lightzoomed").width(),
                    originalHeight = $("#lightzoomed").height(),
                    amountScrolled = $(window).scrollTop();
                $('#lightbg').fadeOut(500);
                $('#lightwrap img').animate({
                    height: originalHeight,
                    width: originalWidth,
                    top: (offset.top - amountScrolled),
                    left: offset.left,
                    marginTop: '0',
                    marginLeft: '0'
                }, options.zoomoutSpeed, options.zoomoutEasing, function() {
                    $('#lightwrap, #lightbg, #off-screen').remove();
                    $('#lightzoomed').removeAttr('id');

                });
            });

            // DELAY FUNCTION FOR WINDOW RESIZE
            var delay = (function() {
                var timer = 0;
                return function(callback, ms) {
                    clearTimeout(timer);
                    timer = setTimeout(callback, ms);
                };
            })();

            // CHECK WINDOW SIZE EVERY _ MS
            $(window).resize(function() {
                delay(function() {
                    fitWidth();
                }, options.resizeDelay);
            });


            // FIT IMAGE BASED ON HEIGHT
            function fitHeight() {

                var viewportHeight = $(window).height(),
                    viewportWidth = $(window).width(),
                    naturalWidth = $('#off-screen').width(),
                    naturalHeight = $('#off-screen').height(),
                    newHeight = (viewportHeight * 0.95),
                    ratio = (newHeight / naturalHeight),
                    newWidth = (naturalWidth * ratio);
                $('#lightwrap img').show();
                if (newHeight > naturalHeight) {
                    $('#lightwrap img').animate({
                        height: naturalHeight,
                        width: naturalWidth,
                        left: '50%',
                        top: '50%',
                        marginTop: -(naturalHeight / 2),
                        marginLeft: -(naturalWidth / 2)
                    }, options.zoominSpeed, options.zoominEasing);
                } else {
                    if (newWidth > viewportWidth) {
                        fitWidth();
                    } else {
                        $('#lightwrap img').animate({
                            height: newHeight,
                            width: newWidth,
                            left: '50%',
                            top: '2.5%',
                            marginTop: '0',
                            marginLeft: -(newWidth / 2)
                        }, options.zoominSpeed, options.zoominEasing);
                    }
                }
            }

            // FIT IMAGE BASED ON WIDTH
            function fitWidth() {

                var naturalWidth = $('#off-screen').width(),
                    naturalHeight = $('#off-screen').height(),
                    viewportWidth = $(window).width(),
                    viewportHeight = $(window).height(),
                    newWidth = (viewportWidth * 0.95),
                    ratio = (newWidth / naturalWidth),
                    newHeight = (naturalHeight * ratio);
                $('#lightwrap img').show();
                if (newHeight > naturalHeight) {
                    if (naturalHeight > viewportHeight) {
                        fitHeight();
                    } else {
                        $('#lightwrap img').animate({
                            height: naturalHeight,
                            width: naturalWidth,
                            top: '50%',
                            left: '50%',
                            marginTop: -(naturalHeight / 2),
                            marginLeft: -(naturalWidth / 2)
                        }, options.zoominSpeed, options.zoominEasing);
                    }
                } else {
                    if (newHeight > viewportHeight) {
                        fitHeight();
                    } else {
                        $('#lightwrap img').animate({
                            height: newHeight,
                            width: newWidth,
                            top: '50%',
                            left: '2.5%',
                            marginTop: -(newHeight / 2),
                            marginLeft: '0'
                        }, options.zoominSpeed, options.zoominEasing);
                    }
                }
            }


        }
    });
})(jQuery);
$(function() {
  $("#lecturas th a, #lecturas .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#lecturas_search input").keyup(function() {
    $.get($("#lecturas_search").attr("action"), $("#lecturas_search").serialize(), null, "script");
    return false;
  });
});

function submit_form(form_name, format)
{
  form = $("#"+form_name);
  hidden_formant = form.children('input[name="format"]');

  aux = hidden_formant.val(); 
  hidden_formant.val(format); 
  form.submit(); 
  hidden_formant.val(aux); 
}

function map_fs(map) 
{

  googleMapWidth = $(map).css('width');
  googleMapHeight = $(map).css('height');


  $(map).css("position", 'fixed').
  css('top', 0).
  css('left', 0).
  css("width", '100%').
  css("height", '100%').
  css("z-index", '10000');
  google.maps.event.trigger(map, 'resize');


  $(map).append('<a onclick="map_fs_off(\''+map+'\',\''+googleMapWidth+'\',\''+googleMapHeight+'\'); $(this).remove()" class="btn btn-primary" style="position: fixed; bottom: 20px; right: 10px; z-index: 10001" >Salir</a>');

  return false;
}
 
function map_fs_off(map, w, h) 
{
  $(map).css("position", 'relative').
  css('top', 0).
  css('left', 0).
  css("width", w).
  css("height", h);
  google.maps.event.trigger(map, 'resize');  
}
;
// OpenLayers 3. see http://ol3js.org/
(function(){function aa(){return function(a){return a}}function ba(){return function(){}}function k(a){return function(){return this[a]}}function ca(a){return function(){return a}}var l,da=da||{},ea=this;function fa(){}function ga(a){a.mb=function(){return a.Ae?a.Ae:a.Ae=new a}}
function ja(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return void 0!==a}function ka(a){return null===a}function la(a){return"array"==ja(a)}function ma(a){var b=ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}function na(a){return"string"==typeof a}function oa(a){return"number"==typeof a}function pa(a){return"function"==ja(a)}function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function sa(a){return a[ta]||(a[ta]=++ua)}
var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function xa(a,b,c){xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?va:wa;return xa.apply(null,arguments)}function ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var za=Date.now||function(){return+new Date};
function t(a,b){var c=a.split("."),d=ea;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function u(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c};function Aa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ba(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function Ca(a){if(!Da.test(a))return a;-1!=a.indexOf("\x26")&&(a=a.replace(Fa,"\x26amp;"));-1!=a.indexOf("\x3c")&&(a=a.replace(Ga,"\x26lt;"));-1!=a.indexOf("\x3e")&&(a=a.replace(Ha,"\x26gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ia,"\x26quot;"));return a}
var Fa=/&/g,Ga=/</g,Ha=/>/g,Ia=/\"/g,Da=/[&<>\"]/;function Ja(a){a=s(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);b=Math.max(0,2-b);return Array(b+1).join("0")+a}
function Ka(a,b){for(var c=0,d=Ba(String(a)).split("."),e=Ba(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",m=e[g]||"",n=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=n.exec(h)||["","",""],r=p.exec(m)||["","",""];if(0==q[0].length&&0==r[0].length)break;c=((0==q[1].length?0:parseInt(q[1],10))<(0==r[1].length?0:parseInt(r[1],10))?-1:(0==q[1].length?0:parseInt(q[1],10))>(0==r[1].length?0:parseInt(r[1],10))?1:0)||((0==q[2].length)<(0==r[2].length)?
-1:(0==q[2].length)>(0==r[2].length)?1:0)||(q[2]<r[2]?-1:q[2]>r[2]?1:0)}while(0==c)}return c};var La,Ma,Na,Oa,Pa,Qa,Ra;function Sa(){return ea.navigator?ea.navigator.userAgent:null}function Ua(){return ea.navigator}Oa=Na=Ma=La=!1;var Xa;if(Xa=Sa()){var Ya=Ua();La=0==Xa.lastIndexOf("Opera",0);Ma=!La&&(-1!=Xa.indexOf("MSIE")||-1!=Xa.indexOf("Trident"));Na=!La&&-1!=Xa.indexOf("WebKit");Oa=!La&&!Na&&!Ma&&"Gecko"==Ya.product}var Za=La,$a=Ma,bb=Oa,cb=Na,db,eb=Ua();db=eb&&eb.platform||"";Pa=-1!=db.indexOf("Mac");Qa=-1!=db.indexOf("Win");Ra=-1!=db.indexOf("Linux");
var fb=!!Ua()&&-1!=(Ua().appVersion||"").indexOf("X11");function gb(){var a=ea.document;return a?a.documentMode:void 0}var hb;a:{var ib="",jb;if(Za&&ea.opera)var kb=ea.opera.version,ib="function"==typeof kb?kb():kb;else if(bb?jb=/rv\:([^\);]+)(\)|;)/:$a?jb=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:cb&&(jb=/WebKit\/(\S+)/),jb)var lb=jb.exec(Sa()),ib=lb?lb[1]:"";if($a){var mb=gb();if(mb>parseFloat(ib)){hb=String(mb);break a}}hb=ib}var nb={};function ob(a){return nb[a]||(nb[a]=0<=Ka(hb,a))}
var pb=ea.document,qb=pb&&$a?gb()||("CSS1Compat"==pb.compatMode?parseInt(hb,10):5):void 0;var rb="https:"===ea.location.protocol,sb=$a&&!ob("9.0")&&""!==hb;function tb(a){Error.captureStackTrace?Error.captureStackTrace(this,tb):this.stack=Error().stack||"";a&&(this.message=String(a))}u(tb,Error);tb.prototype.name="CustomError";var ub=Array.prototype,vb=ub.indexOf?function(a,b,c){return ub.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(na(a))return na(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},wb=ub.forEach?function(a,b,c){ub.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=na(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xb=ub.map?function(a,b,c){return ub.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),
f=na(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},yb=ub.some?function(a,b,c){return ub.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=na(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function zb(a,b){var c=Ab(a,b,void 0);return 0>c?null:na(a)?a.charAt(c):a[c]}function Ab(a,b,c){for(var d=a.length,e=na(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Bb(a,b){var c=vb(a,b),d;(d=0<=c)&&ub.splice.call(a,c,1);return d}function Cb(a){return ub.concat.apply(ub,arguments)}function Db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(la(d)||(e=ma(d))&&Object.prototype.hasOwnProperty.call(d,"callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}}
function Fb(a,b,c,d){ub.splice.apply(a,Gb(arguments,1))}function Gb(a,b,c){return 2>=arguments.length?ub.slice.call(a,b):ub.slice.call(a,b,c)}function Hb(a,b){ub.sort.call(a,b||Ib)}function Jb(a,b){if(!ma(a)||!ma(b)||a.length!=b.length)return!1;for(var c=a.length,d=Kb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}function Ib(a,b){return a>b?1:a<b?-1:0}function Kb(a,b){return a===b};function Lb(a,b,c){this.a=a;this.x=b;this.y=c}function Mb(a,b,c,d){return s(d)?(d.a=a,d.x=b,d.y=c,d):new Lb(a,b,c)}function Nb(a,b,c){return a+"/"+b+"/"+c}Lb.prototype.c=function(a){return s(a)?(a[0]=this.a,a[1]=this.x,a[2]=this.y,a):[this.a,this.x,this.y]};function Ob(a){var b=Array(a.a),c=1<<a.a-1,d,e;for(d=0;d<a.a;++d)e=48,a.x&c&&(e+=1),a.y&c&&(e+=2),b[d]=String.fromCharCode(e),c>>=1;return b.join("")}Lb.prototype.toString=function(){return Nb(this.a,this.x,this.y)};function Pb(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}function Qb(a,b,c,d,e){return s(e)?(e.a=a,e.d=b,e.b=c,e.c=d,e):new Pb(a,b,c,d)}Pb.prototype.contains=function(a){return this.a<=a.x&&a.x<=this.d&&this.b<=a.y&&a.y<=this.c};function Rb(a){this.c=a.html;this.a=s(a.tileRanges)?a.tileRanges:null};var Sb,Tb=!$a||$a&&9<=qb;!bb&&!$a||$a&&$a&&9<=qb||bb&&ob("1.9.1");$a&&ob("9");function Ub(a){a=a.className;return na(a)&&a.match(/\S+/g)||[]}function Vb(a,b){for(var c=Ub(a),d=Gb(arguments,1),e=c.length+d.length,f=c,g=0;g<d.length;g++)0<=vb(f,d[g])||f.push(d[g]);a.className=c.join(" ");return c.length==e}function Wb(a,b,c){for(var d=Ub(a),e=!1,f=0;f<d.length;f++)d[f]==b&&(Fb(d,f--,1),e=!0);e&&(d.push(c),a.className=d.join(" "))};function Xb(a,b,c){return Math.min(Math.max(a,b),c)}function Yb(a,b){var c=a%b;return 0>c*b?c+b:c}function Zb(a){return a*Math.PI/180};function $b(a,b){this.x=s(a)?a:0;this.y=s(b)?b:0}l=$b.prototype;l.P=function(){return new $b(this.x,this.y)};l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};l.scale=function(a,b){var c=oa(b)?b:a;this.x*=a;this.y*=c;return this};function ac(a,b){this.width=a;this.height=b}l=ac.prototype;l.P=function(){return new ac(this.width,this.height)};l.ka=function(){return!(this.width*this.height)};l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){var c=oa(b)?b:a;this.width*=a;this.height*=c;return this};function bc(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function cc(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function dc(a){var b=0,c;for(c in a)b++;return b}function ec(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function fc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function gc(a){for(var b in a)return!1;return!0}function ic(a){for(var b in a)delete a[b]}function jc(a,b){b in a&&delete a[b]}function w(a,b,c){return b in a?a[b]:c}
function kc(a,b){var c=[];return b in a?a[b]:a[b]=c}function lc(a){var b={},c;for(c in a)b[c]=a[c];return b}var mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mc.length;f++)c=mc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function oc(a){return a?new pc(qc(a)):Sb||(Sb=new pc)}function rc(a){return na(a)?document.getElementById(a):a}function sc(a,b){bc(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in tc?a.setAttribute(tc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var tc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function uc(a){a=a.document.documentElement;return new ac(a.clientWidth,a.clientHeight)}
function vc(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Tb&&g&&(g.name||g.type)){f=["\x3c",f];g.name&&f.push(' name\x3d"',Ca(g.name),'"');if(g.type){f.push(' type\x3d"',Ca(g.type),'"');var h={};nc(h,g);delete h.type;g=h}f.push("\x3e");f=f.join("")}f=e.createElement(f);g&&(na(g)?f.className=g:la(g)?Vb.apply(null,[f].concat(g)):sc(f,g));2<d.length&&wc(e,f,d,2);return f}
function wc(a,b,c,d){function e(c){c&&b.appendChild(na(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];!ma(f)||ra(f)&&0<f.nodeType?e(f):wb(xc(f)?Db(f):f,e)}}function yc(a){return document.createElement(a)}function zc(a,b){wc(qc(a),a,arguments,1)}function Ac(a){for(var b;b=a.firstChild;)a.removeChild(b)}function Bc(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)}function Cc(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}
function Dc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function Ec(a){if(void 0!=a.firstElementChild)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}function Fc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function qc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function xc(a){if(a&&"number"==typeof a.length){if(ra(a))return"function"==typeof a.item||"string"==typeof a.item;if(pa(a))return"function"==typeof a.item}return!1}function pc(a){this.a=a||ea.document||document}function Gc(a){var b=a.a;a=cb?b.body:b.documentElement;b=b.parentWindow||b.defaultView;return $a&&ob("10")&&b.pageYOffset!=a.scrollTop?new $b(a.scrollLeft,a.scrollTop):new $b(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)}pc.prototype.appendChild=function(a,b){a.appendChild(b)};
pc.prototype.contains=Fc;function Ic(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}l=Ic.prototype;l.P=function(){return new Ic(this.top,this.right,this.bottom,this.left)};l.contains=function(a){return this&&a?a instanceof Ic?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
l.scale=function(a,b){var c=oa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function Jc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}l=Jc.prototype;l.P=function(){return new Jc(this.left,this.top,this.width,this.height)};l.contains=function(a){return a instanceof Jc?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){var c=oa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function Kc(a,b){var c=qc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Lc(a,b){return Kc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Mc(a,b,c){var d,e=bb&&(Pa||fb)&&ob("1.9");b instanceof $b?(d=b.x,b=b.y):(d=b,b=c);a.style.left=Nc(d,e);a.style.top=Nc(b,e)}
function Oc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}$a&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Pc(a){if($a&&!($a&&8<=qb))return a.offsetParent;var b=qc(a),c=Lc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Lc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Qc(a){var b,c=qc(a),d=Lc(a,"position"),e=bb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new $b(0,0),g;b=c?qc(c):document;(g=!$a)||(g=$a&&9<=qb)||(oc(b),g=!0);g=g?b.documentElement:b.body;if(a==g)return f;if(a.getBoundingClientRect)b=Oc(a),a=Gc(oc(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{e=a;do{f.x+=
e.offsetLeft;f.y+=e.offsetTop;e!=a&&(f.x+=e.clientLeft||0,f.y+=e.clientTop||0);if(cb&&"fixed"==Lc(e,"position")){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}e=e.offsetParent}while(e&&e!=a);if(Za||cb&&"absolute"==d)f.y-=c.body.offsetTop;for(e=a;(e=Pc(e))&&e!=c.body&&e!=g;)f.x-=e.scrollLeft,Za&&"TR"==e.tagName||(f.y-=e.scrollTop)}return f}function Rc(a,b){var c=Sc(a),d=Sc(b);return new $b(c.x-d.x,c.y-d.y)}
function Sc(a){if(1==a.nodeType){var b;if(a.getBoundingClientRect)b=Oc(a),b=new $b(b.left,b.top);else{b=Gc(oc(a));var c=Qc(a);b=new $b(c.x-b.x,c.y-b.y)}if(bb&&!ob(12)){var d;$a?d="-ms-transform":cb?d="-webkit-transform":Za?d="-o-transform":bb&&(d="-moz-transform");var e;d&&(e=Lc(a,d));e||(e=Lc(a,"transform"));a=e?(a=e.match(Tc))?new $b(parseFloat(a[1]),parseFloat(a[2])):new $b(0,0):new $b(0,0);a=new $b(b.x+a.x,b.y+a.y)}else a=b;return a}d=pa(a.Jf);e=a;a.targetTouches?e=a.targetTouches[0]:d&&a.M.targetTouches&&
(e=a.M.targetTouches[0]);return new $b(e.clientX,e.clientY)}function Nc(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function Uc(a){var b=Vc;if("none"!=Lc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Vc(a){var b=a.offsetWidth,c=a.offsetHeight,d=cb&&!b&&!c;return s(b)&&!d||!a.getBoundingClientRect?new ac(b,c):(a=Oc(a),new ac(a.right-a.left,a.bottom-a.top))}function Wc(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity\x3d"+100*b+")")}function Xc(a,b){a.style.display=b?"":"none"}function Yc(a){return"rtl"==Lc(a,"direction")}
function Zc(a){var b=qc(a),c=$a&&a.currentStyle,d;if(d=c)oc(b),d="auto"!=c.width&&"auto"!=c.height&&!c.boxSizing;if(d)return b=$c(a,c.width,"width","pixelWidth"),a=$c(a,c.height,"height","pixelHeight"),new ac(b,a);c=new ac(a.offsetWidth,a.offsetHeight);b=ad(a,"padding");a=cd(a);return new ac(c.width-a.left-b.left-b.right-a.right,c.height-a.top-b.top-b.bottom-a.bottom)}
function $c(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}function dd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?$c(a,c,"left","pixelLeft"):0}
function ad(a,b){if($a){var c=dd(a,b+"Left"),d=dd(a,b+"Right"),e=dd(a,b+"Top"),f=dd(a,b+"Bottom");return new Ic(e,d,f,c)}c=Kc(a,b+"Left");d=Kc(a,b+"Right");e=Kc(a,b+"Top");f=Kc(a,b+"Bottom");return new Ic(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c))}var ed={thin:2,medium:4,thick:6};function fd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ed?ed[c]:$c(a,c,"left","pixelLeft")}
function cd(a){if($a){var b=fd(a,"borderLeft"),c=fd(a,"borderRight"),d=fd(a,"borderTop");a=fd(a,"borderBottom");return new Ic(d,c,a,b)}b=Kc(a,"borderLeftWidth");c=Kc(a,"borderRightWidth");d=Kc(a,"borderTopWidth");a=Kc(a,"borderBottomWidth");return new Ic(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}var Tc=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;function gd(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}gd.prototype.a=4;gd.prototype.c=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};gd.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(gd.BYTES_PER_ELEMENT=4,gd.prototype.BYTES_PER_ELEMENT=gd.prototype.a,gd.prototype.set=gd.prototype.c,gd.prototype.toString=gd.prototype.toString,t("Float32Array",gd));function hd(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}hd.prototype.a=8;hd.prototype.c=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};hd.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{hd.BYTES_PER_ELEMENT=8}catch(id){}hd.prototype.BYTES_PER_ELEMENT=hd.prototype.a;hd.prototype.set=hd.prototype.c;hd.prototype.toString=hd.prototype.toString;t("Float64Array",hd)};function jd(a,b,c,d,e){a[0]=b;a[1]=c;a[2]=d;a[3]=e};function kd(){var a=Array(16);ld(a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return a}function md(){var a=Array(16);ld(a,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return a}function ld(a,b,c,d,e,f,g,h,m,n,p,q,r,v,z,B,A){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;a[6]=h;a[7]=m;a[8]=n;a[9]=p;a[10]=q;a[11]=r;a[12]=v;a[13]=z;a[14]=B;a[15]=A}
function nd(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15]}function od(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1}
function pd(a,b,c){var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],m=a[5],n=a[6],p=a[7],q=a[8],r=a[9],v=a[10],z=a[11],B=a[12],A=a[13],E=a[14];a=a[15];var C=b[0],M=b[1],Q=b[2],ha=b[3],R=b[4],qa=b[5],Ea=b[6],Ta=b[7],Wa=b[8],ia=b[9],ab=b[10],Va=b[11],bd=b[12],hc=b[13],Hc=b[14];b=b[15];c[0]=d*C+h*M+q*Q+B*ha;c[1]=e*C+m*M+r*Q+A*ha;c[2]=f*C+n*M+v*Q+E*ha;c[3]=g*C+p*M+z*Q+a*ha;c[4]=d*R+h*qa+q*Ea+B*Ta;c[5]=e*R+m*qa+r*Ea+A*Ta;c[6]=f*R+n*qa+v*Ea+E*Ta;c[7]=g*R+p*qa+z*Ea+a*Ta;c[8]=d*Wa+h*ia+q*ab+B*Va;c[9]=e*Wa+m*ia+r*ab+
A*Va;c[10]=f*Wa+n*ia+v*ab+E*Va;c[11]=g*Wa+p*ia+z*ab+a*Va;c[12]=d*bd+h*hc+q*Hc+B*b;c[13]=e*bd+m*hc+r*Hc+A*b;c[14]=f*bd+n*hc+v*Hc+E*b;c[15]=g*bd+p*hc+z*Hc+a*b}function qd(a,b,c){var d=a[1]*b+a[5]*c+0*a[9]+a[13],e=a[2]*b+a[6]*c+0*a[10]+a[14],f=a[3]*b+a[7]*c+0*a[11]+a[15];a[12]=a[0]*b+a[4]*c+0*a[8]+a[12];a[13]=d;a[14]=e;a[15]=f}function rd(a,b,c){ld(a,a[0]*b,a[1]*b,a[2]*b,a[3]*b,a[4]*c,a[5]*c,a[6]*c,a[7]*c,1*a[8],1*a[9],1*a[10],1*a[11],a[12],a[13],a[14],a[15])}
function sd(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],m=a[6],n=a[7],p=Math.cos(b),q=Math.sin(b);a[0]=c*p+g*q;a[1]=d*p+h*q;a[2]=e*p+m*q;a[3]=f*p+n*q;a[4]=c*-q+g*p;a[5]=d*-q+h*p;a[6]=e*-q+m*p;a[7]=f*-q+n*p}new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function td(a,b){var c=yc("CANVAS");s(a)&&(c.width=a);s(b)&&(c.height=b);return c.getContext("2d")}
var ud=function(){var a;return function(){if(!s(a))if(ea.getComputedStyle){var b=yc("P"),c,d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(b);for(var e in d)e in b.style&&(b.style[e]="translate(1px,1px)",c=ea.getComputedStyle(b).getPropertyValue(d[e]));Dc(b);a=c&&"none"!==c}else a=!1;return a}}(),vd=function(){var a;return function(){if(!s(a))if(ea.getComputedStyle){var b=yc("P"),
c,d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(b);for(var e in d)e in b.style&&(b.style[e]="translate3d(1px,1px,1px)",c=ea.getComputedStyle(b).getPropertyValue(d[e]));Dc(b);a=c&&"none"!==c}else a=!1;return a}}();function wd(a,b){var c=a.style;c.WebkitTransform=b;c.MozTransform=b;c.a=b;c.msTransform=b;c.transform=b;$a&&!sb&&(a.style.transformOrigin="0 0")}
function xd(a,b){var c;if(vd()){if(s(6)){var d=Array(16);for(c=0;16>c;++c)d[c]=b[c].toFixed(6);c=d.join(",")}else c=b.join(",");wd(a,"matrix3d("+c+")")}else if(ud()){d=[b[0],b[1],b[4],b[5],b[12],b[13]];if(s(6)){var e=Array(6);for(c=0;6>c;++c)e[c]=d[c].toFixed(6);c=e.join(",")}else c=d.join(",");wd(a,"matrix("+c+")")}else a.style.left=Math.round(b[12])+"px",a.style.top=Math.round(b[13])+"px"};var yd=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function zd(a,b){var c,d,e=yd.length;for(d=0;d<e;++d)try{if(c=a.getContext(yd[d],b),null!==c)return c}catch(f){}return null};var Ad=ea.devicePixelRatio||1,Bd="ArrayBuffer"in ea,Cd=!1,Dd=function(){if(!("HTMLCanvasElement"in ea))return!1;try{var a=td();if(null===a)return!1;s(a.setLineDash)&&(Cd=!0);return!0}catch(b){return!1}}(),Ed="DeviceOrientationEvent"in ea,Fd="geolocation"in ea.navigator,Gd="JSON"in ea&&"parse"in ea.JSON,Hd="ontouchstart"in ea,Id="PointerEvent"in ea,Jd=!!ea.navigator.msPointerEnabled,Kd=function(){if(!("WebGLRenderingContext"in ea))return!1;try{var a=yc("CANVAS");return!ka(zd(a,{Hf:!0}))}catch(b){return!1}}();function Ld(){0!=Md&&(this.Qi=Error().stack,Nd[sa(this)]=this)}var Md=0,Nd={};Ld.prototype.Xa=!1;Ld.prototype.mc=function(){if(!this.Xa&&(this.Xa=!0,this.F(),0!=Md)){var a=sa(this);delete Nd[a]}};function Od(a,b){var c=ya(Pd,b);a.Ka||(a.Ka=[]);a.Ka.push(xa(c,void 0))}Ld.prototype.F=function(){if(this.Ka)for(;this.Ka.length;)this.Ka.shift()()};function Pd(a){a&&"function"==typeof a.mc&&a.mc()};function Qd(a,b){this.type=a;this.c=this.target=b}l=Qd.prototype;l.mc=ba();l.ub=!1;l.ag=!1;l.ff=!0;l.Sa=function(){this.ub=!0};l.preventDefault=function(){this.ag=!0;this.ff=!1};function Rd(a){a.Sa()}function Sd(a){a.preventDefault()};var Td=!$a||$a&&9<=qb,Ud=!$a||$a&&9<=qb,Vd=$a&&!ob("9");!cb||ob("528");bb&&ob("1.9b")||$a&&ob("8")||Za&&ob("9.5")||cb&&ob("528");bb&&!ob("8")||$a&&ob("9");var Wd=$a?"focusout":"DOMFocusOut";function Xd(a){Xd[" "](a);return a}Xd[" "]=fa;function Yd(a,b){a&&Zd(this,a,b)}u(Yd,Qd);var $d=[1,4,2];l=Yd.prototype;l.target=null;l.relatedTarget=null;l.offsetX=0;l.offsetY=0;l.clientX=0;l.clientY=0;l.screenX=0;l.screenY=0;l.button=0;l.eb=0;l.Ad=0;l.vc=!1;l.ra=!1;l.fb=!1;l.Bd=!1;l.Zb=!1;l.M=null;
function Zd(a,b,c){var d=a.type=b.type;Qd.call(a,d);a.target=b.target||b.srcElement;a.c=c;if(c=b.relatedTarget){if(bb){var e;a:{try{Xd(c.nodeName);e=!0;break a}catch(f){}e=!1}e||(c=null)}}else"mouseover"==d?c=b.fromElement:"mouseout"==d&&(c=b.toElement);a.relatedTarget=c;a.offsetX=cb||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=cb||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||0;a.screenY=
b.screenY||0;a.button=b.button;a.eb=b.keyCode||0;a.Ad=b.charCode||("keypress"==d?b.keyCode:0);a.vc=b.ctrlKey;a.ra=b.altKey;a.fb=b.shiftKey;a.Bd=b.metaKey;a.Zb=Pa?b.metaKey:b.ctrlKey;a.state=b.state;a.M=b;b.defaultPrevented&&a.preventDefault();delete a.ub}function ae(a){return(Td?0==a.M.button:"click"==a.type?!0:!!(a.M.button&$d[0]))&&!(cb&&Pa&&a.vc)}l.Sa=function(){Yd.H.Sa.call(this);this.M.stopPropagation?this.M.stopPropagation():this.M.cancelBubble=!0};
l.preventDefault=function(){Yd.H.preventDefault.call(this);var a=this.M;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Vd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};l.Jf=k("M");var be="closure_listenable_"+(1E6*Math.random()|0);function ce(a){return!(!a||!a[be])}var de=0;function ee(a,b,c,d,e,f){this.Ta=a;this.a=b;this.src=c;this.type=d;this.capture=!!e;this.Db=f;this.key=++de;this.ib=this.Nb=!1}function fe(a){a.ib=!0;a.Ta=null;a.a=null;a.src=null;a.Db=null};var ge={},he={},ie={},je={};function x(a,b,c,d,e){if(la(b)){for(var f=0;f<b.length;f++)x(a,b[f],c,d,e);return null}c=ke(c);return ce(a)?a.sa(b,c,d,e):le(a,b,c,!1,d,e)}
function le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");e=!!e;var g=he;b in g||(g[b]={K:0});g=g[b];e in g||(g[e]={K:0},g.K++);var g=g[e],h=sa(a),m;if(g[h]){m=g[h];for(var n=0;n<m.length;n++)if(g=m[n],g.Ta==c&&g.Db==f){if(g.ib)break;d||(m[n].Nb=!1);return m[n]}}else m=g[h]=[],g.K++;n=me();g=new ee(c,n,a,b,e,f);g.Nb=d;n.src=a;n.Ta=g;m.push(g);ie[h]||(ie[h]=[]);ie[h].push(g);a.addEventListener?a.addEventListener(b,n,e):a.attachEvent(b in je?je[b]:je[b]="on"+b,n);return ge[g.key]=g}
function me(){var a=ne,b=Ud?function(c){return a.call(b.src,b.Ta,c)}:function(c){c=a.call(b.src,b.Ta,c);if(!c)return c};return b}function oe(a,b,c,d,e){if(la(b)){for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);return null}c=ke(c);return ce(a)?a.ha.add(b,c,!0,d,e):le(a,b,c,!0,d,e)}function pe(a,b,c,d,e){if(la(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else if(c=ke(c),ce(a))a.Vd(b,c,d,e);else if(d=!!d,a=qe(a,b,d))for(f=0;f<a.length;f++)if(a[f].Ta==c&&a[f].capture==d&&a[f].Db==e){re(a[f]);break}}
function re(a){if(oa(a)||!a||a.ib)return!1;var b=a.src;if(ce(b))return se(b.ha,a);var c=a.type,d=a.a,e=a.capture;b.removeEventListener?b.removeEventListener(c,d,e):b.detachEvent&&b.detachEvent(c in je?je[c]:je[c]="on"+c,d);b=sa(b);ie[b]&&(d=ie[b],Bb(d,a),0==d.length&&delete ie[b]);fe(a);if(d=he[c][e][b])Bb(d,a),0==d.length&&(delete he[c][e][b],he[c][e].K--),0==he[c][e].K&&(delete he[c][e],he[c].K--),0==he[c].K&&delete he[c];delete ge[a.key];return!0}
function qe(a,b,c){var d=he;return b in d&&(d=d[b],c in d&&(d=d[c],a=sa(a),d[a]))?d[a]:null}function te(a){if(ce(a))return ue(a.ha,void 0);a=sa(a);var b=ie[a];if(b){var c=s(void 0),d=s(void 0);return c&&d?(b=he[void 0],!!b&&!!b[void 0]&&a in b[void 0]):c||d?yb(b,function(a){return c&&void 0==a.type||d&&void 0==a.capture}):!0}return!1}function ve(a,b,c){var d=1;b=sa(b);if(a[b])for(a=Db(a[b]),b=0;b<a.length;b++){var e=a[b];e&&!e.ib&&(d&=!1!==we(e,c))}return Boolean(d)}
function we(a,b){var c=a.Ta,d=a.Db||a.src;a.Nb&&re(a);return c.call(d,b)}
function ne(a,b){if(a.ib)return!0;var c=a.type,d=he;if(!(c in d))return!0;var d=d[c],e,f;if(!Ud){if(!(c=b))a:{for(var c=["window","event"],g=ea;e=c.shift();)if(null!=g[e])g=g[e];else{c=null;break a}c=g}e=c;c=!0 in d;g=!1 in d;if(c){if(0>e.keyCode||void 0!=e.returnValue)return!0;a:{var h=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(m){h=!0}if(h||void 0==e.returnValue)e.returnValue=!0}}h=new Yd;Zd(h,e,this);e=!0;try{if(c){for(var n=[],p=h.c;p;p=p.parentNode)n.push(p);f=d[!0];for(var q=n.length-
1;!h.ub&&0<=q;q--)h.c=n[q],e&=ve(f,n[q],h);if(g)for(f=d[!1],q=0;!h.ub&&q<n.length;q++)h.c=n[q],e&=ve(f,n[q],h)}else e=we(a,h)}finally{n&&(n.length=0)}return e}d=new Yd(b,this);return e=we(a,d)}var xe="__closure_events_fn_"+(1E9*Math.random()>>>0);function ke(a){return pa(a)?a:a[xe]||(a[xe]=function(b){return a.handleEvent(b)})};function ye(a){return function(){return a}}var ze=ye(!1),Ae=ye(!0);function Be(a){return a}function Ce(a){return function(){throw a;}}function De(a){var b;b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}function Ee(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};function Fe(a){this.src=a;this.a={};this.c=0}Fe.prototype.add=function(a,b,c,d,e){var f=this.a[a];f||(f=this.a[a]=[],this.c++);var g=Ge(f,b,d,e);-1<g?(a=f[g],c||(a.Nb=!1)):(a=new ee(b,null,this.src,a,!!d,e),a.Nb=c,f.push(a));return a};Fe.prototype.remove=function(a,b,c,d){if(!(a in this.a))return!1;var e=this.a[a];b=Ge(e,b,c,d);return-1<b?(fe(e[b]),ub.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.c--),!0):!1};
function se(a,b){var c=b.type;if(!(c in a.a))return!1;var d=Bb(a.a[c],b);d&&(fe(b),0==a.a[c].length&&(delete a.a[c],a.c--));return d}function ue(a,b){var c=s(b),d=s(void 0);return cc(a.a,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=b||d&&void 0!=a[f].capture))return!0;return!1})}function Ge(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ib&&f.Ta==b&&f.capture==!!c&&f.Db==d)return e}return-1};function He(){Ld.call(this);this.ha=new Fe(this);this.rf=this}u(He,Ld);He.prototype[be]=!0;l=He.prototype;l.Od=null;l.addEventListener=function(a,b,c,d){x(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){pe(this,a,b,c,d)};
function y(a,b){var c,d=a.Od;if(d)for(c=[];d;d=d.Od)c.push(d);var d=a.rf,e=b,f=e.type||e;if(na(e))e=new Qd(e,d);else if(e instanceof Qd)e.target=e.target||d;else{var g=e,e=new Qd(f,d);nc(e,g)}var g=!0,h;if(c)for(var m=c.length-1;!e.ub&&0<=m;m--)h=e.c=c[m],g=Ie(h,f,!0,e)&&g;e.ub||(h=e.c=d,g=Ie(h,f,!0,e)&&g,e.ub||(g=Ie(h,f,!1,e)&&g));if(c)for(m=0;!e.ub&&m<c.length;m++)h=e.c=c[m],g=Ie(h,f,!1,e)&&g;return g}
l.F=function(){He.H.F.call(this);if(this.ha){var a=this.ha,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,d[e].ib=!0;delete a.a[c];a.c--}}this.Od=null};l.sa=function(a,b,c,d){return this.ha.add(a,b,!1,c,d)};l.Vd=function(a,b,c,d){return this.ha.remove(a,b,c,d)};function Ie(a,b,c,d){b=a.ha.a[b];if(!b)return!0;b=Db(b);for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ib&&g.capture==c){var h=g.Ta,m=g.Db||g.src;g.Nb&&se(a.ha,g);e=!1!==h.call(m,d)&&e}}return e&&!1!=d.ff};function Je(){He.call(this);this.c=0}u(Je,He);l=Je.prototype;l.k=function(){++this.c;y(this,"change")};l.p=function(a,b,c){return x(this,a,b,!1,c)};l.q=function(a,b,c){return oe(this,a,b,!1,c)};l.r=function(a,b,c){pe(this,a,b,!1,c)};l.s=function(a){re(a)};function Ke(a,b){Qd.call(this,a);this.key=b}u(Ke,Qd);function Le(a,b){this.target=a;this.key=b;this.c=this.a=Be}Le.prototype.transform=function(a,b){this.a=a;this.c=b;this.target.aa(this.key)};function Me(a){Je.call(this);sa(this);this.t={};this.Y={};this.Lb={};this.Mb={};s(a)&&this.Q(a)}u(Me,Je);var Ne={},Oe={},Pe={};function Qe(a){return Ne.hasOwnProperty(a)?Ne[a]:Ne[a]="change:"+a.toLowerCase()}l=Me.prototype;
l.da=function(a,b,c){c=c||a;this.ba(a);var d=Qe(c);this.Mb[a]=x(b,d,function(){Re(this,a)},void 0,this);this.Lb[a]=x(b,"beforepropertychange",Se(a,c),void 0,this);b=new Le(b,c);this.Y[a]=b;Re(this,a);return b};function Se(a,b){return function(c){c.key===b&&y(this,new Ke("beforepropertychange",a))}}
l.get=function(a){var b,c=this.Y;if(c.hasOwnProperty(a)){a=c[a];b=a.target;var c=a.key,d=Oe.hasOwnProperty(c)?Oe[c]:Oe[c]="get"+(c.substr(0,1).toUpperCase()+c.substr(1)),d=w(b,d);b=s(d)?d.call(b):b.get(c);b=a.c(b)}else this.t.hasOwnProperty(a)&&(b=this.t[a]);return b};l.S=function(){var a=this.Y,b;if(gc(this.t)){if(gc(a))return[];b=a}else if(gc(a))b=this.t;else{b={};for(var c in this.t)b[c]=!0;for(c in a)b[c]=!0}return fc(b)};
l.W=function(){var a={},b;for(b in this.t)a[b]=this.t[b];for(b in this.Y)a[b]=this.get(b);return a};l.aa=function(a){var b=this.Y;b.hasOwnProperty(a)?(a=b[a],a.target.aa(a.key)):Re(this,a)};function Re(a,b){var c=Qe(b);y(a,c);y(a,new Ke("propertychange",b))}
l.A=function(a,b){y(this,new Ke("beforepropertychange",a));var c=this.Y;if(c.hasOwnProperty(a)){var d=c[a],c=d.target,e=d.key;b=d.a(b);d=Pe.hasOwnProperty(e)?Pe[e]:Pe[e]="set"+(e.substr(0,1).toUpperCase()+e.substr(1));d=w(c,d);s(d)?d.call(c,b):c.A(e,b)}else this.t[a]=b,Re(this,a)};l.Q=function(a){for(var b in a)this.A(b,a[b])};l.ba=function(a){var b=this.Mb,c=b[a];c&&(delete b[a],re(c),b=this.get(a),delete this.Y[a],this.t[a]=b);if(b=this.Lb[a])re(b),delete this.Lb[a]};l.fa=function(){for(var a in this.Mb)this.ba(a)};function Te(a,b,c){Qd.call(this,a,c);this.element=b}u(Te,Qd);function D(a){Me.call(this);this.a=a||[];Ue(this)}u(D,Me);l=D.prototype;l.clear=function(){for(;0<this.qb();)this.pop()};l.Ee=function(a){var b,c;b=0;for(c=a.length;b<c;++b)this.push(a[b]);return this};l.forEach=function(a,b){wb(this.a,a,b)};l.Fe=k("a");l.wd=function(a){return this.a[a]};l.qb=function(){return this.get("length")};l.yc=function(a,b){Fb(this.a,a,0,b);Ue(this);y(this,new Te("add",b,this))};
l.pop=function(){return this.Cc(this.qb()-1)};l.push=function(a){var b=this.a.length;this.yc(b,a);return b};l.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return this.Cc(c)};l.Cc=function(a){var b=this.a[a];ub.splice.call(this.a,a,1);Ue(this);y(this,new Te("remove",b,this));return b};l.hf=function(a,b){var c=this.qb();if(a<c)c=this.a[a],this.a[a]=b,y(this,new Te("remove",c,this)),y(this,new Te("add",b,this));else{for(;c<a;++c)this.yc(c,void 0);this.yc(a,b)}};
function Ue(a){a.A("length",a.a.length)};function Ve(a,b){a[0]+=b[0];a[1]+=b[1];return a}function We(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],g=e[0],e=e[1],h=f[0],f=f[1],m=h-g,n=f-e,c=0===m&&0===n?0:(m*(c-g)+n*(d-e))/(m*m+n*n||0);0>=c||(1<=c?(g=h,e=f):(g+=c*m,e+=c*n));return[g,e]}function Xe(a,b){var c=Yb(a+180,360)-180,d=Math.abs(Math.round(3600*c));return Math.floor(d/3600)+"\u00b0 "+Math.floor(d/60%60)+"\u2032 "+Math.floor(d%60)+"\u2033 "+b.charAt(0>c?1:0)}
function Ye(a,b,c){return s(a)?b.replace("{x}",a[0].toFixed(c)).replace("{y}",a[1].toFixed(c)):""}function $e(a,b){for(var c=!0,d=a.length-1;0<=d;--d)if(a[d]!=b[d]){c=!1;break}return c}function af(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e;return a}function bf(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function cf(a,b){return Ye(a,"{x}, {y}",b)};function F(a){Me.call(this);a=s(a)?a:{};this.a=null;x(this,Qe("tracking"),this.i,!1,this);this.b(s(a.tracking)?a.tracking:!1)}u(F,Me);F.prototype.F=function(){this.b(!1);F.H.F.call(this)};
F.prototype.l=function(a){a=a.M;if(null!=a.alpha){var b=Zb(a.alpha);this.A("alpha",b);"boolean"==typeof a.absolute&&a.absolute?this.A("heading",b):null!=a.webkitCompassHeading&&(null!=a.webkitCompassAccuracy&&-1!=a.webkitCompassAccuracy)&&this.A("heading",Zb(a.webkitCompassHeading))}null!=a.beta&&this.A("beta",Zb(a.beta));null!=a.gamma&&this.A("gamma",Zb(a.gamma));this.k()};F.prototype.e=function(){return this.get("alpha")};F.prototype.getAlpha=F.prototype.e;F.prototype.f=function(){return this.get("beta")};
F.prototype.getBeta=F.prototype.f;F.prototype.h=function(){return this.get("gamma")};F.prototype.getGamma=F.prototype.h;F.prototype.g=function(){return this.get("heading")};F.prototype.getHeading=F.prototype.g;F.prototype.d=function(){return this.get("tracking")};F.prototype.getTracking=F.prototype.d;F.prototype.i=function(){if(Ed){var a=this.d();a&&null===this.a?this.a=x(ea,"deviceorientation",this.l,!1,this):a||null===this.a||(re(this.a),this.a=null)}};
F.prototype.b=function(a){this.A("tracking",a)};F.prototype.setTracking=F.prototype.b;function df(a,b,c){Qd.call(this,a);this.map=b;this.b=s(c)?c:null}u(df,Qd);function ef(a,b,c){Qd.call(this,a);this.a=b;a=s(c)?c:{};this.buttons=ff(a);this.Pd=gf(a,this.buttons);this.bubbles=w(a,"bubbles",!1);this.cancelable=w(a,"cancelable",!1);this.view=w(a,"view",null);this.detail=w(a,"detail",null);this.screenX=w(a,"screenX",0);this.screenY=w(a,"screenY",0);this.clientX=w(a,"clientX",0);this.clientY=w(a,"clientY",0);this.d=w(a,"ctrlKey",!1);this.b=w(a,"altKey",!1);this.h=w(a,"shiftKey",!1);this.f=w(a,"metaKey",!1);this.button=w(a,"button",0);this.relatedTarget=w(a,"relatedTarget",
null);this.pointerId=w(a,"pointerId",0);this.width=w(a,"width",0);this.height=w(a,"height",0);this.g=w(a,"tiltX",0);this.i=w(a,"tiltY",0);this.pointerType=w(a,"pointerType","");this.e=w(a,"hwTimestamp",0);this.Xc=w(a,"isPrimary",!1);b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}u(ef,Qd);function ff(a){if(a.buttons||hf)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}
function gf(a,b){var c=0;return c=a.Pd?a.Pd:b?0.5:0}var hf=!1;try{hf=1===(new MouseEvent("click",{buttons:1})).buttons}catch(jf){};function kf(a,b){this.a=a;this.e=b};function lf(a){kf.call(this,a,{mousedown:this.Hg,mousemove:this.Ig,mouseup:this.Lg,mouseover:this.Kg,mouseout:this.Jg});this.c=a.c;this.b=[]}u(lf,kf);function mf(a,b){for(var c=a.b,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var m=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=m)return!0}return!1}function nf(a){var b=of(a,a.M),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.Xc=!0;b.pointerType="mouse";return b}l=lf.prototype;
l.Hg=function(a){if(!mf(this,a)){(1).toString()in this.c&&this.cancel(a);var b=nf(a);this.c[(1).toString()]=a;pf(this.a,qf,b,a)}};l.Ig=function(a){if(!mf(this,a)){var b=nf(a);pf(this.a,rf,b,a)}};l.Lg=function(a){if(!mf(this,a)){var b=w(this.c,(1).toString());b&&b.button===a.button&&(b=nf(a),pf(this.a,sf,b,a),jc(this.c,(1).toString()))}};l.Kg=function(a){if(!mf(this,a)){var b=nf(a);tf(this.a,b,a)}};l.Jg=function(a){if(!mf(this,a)){var b=nf(a);uf(this.a,b,a)}};
l.cancel=function(a){var b=nf(a);this.a.cancel(b,a);jc(this.c,(1).toString())};function vf(a){kf.call(this,a,{MSPointerDown:this.Qg,MSPointerMove:this.Rg,MSPointerUp:this.Ug,MSPointerOut:this.Sg,MSPointerOver:this.Tg,MSPointerCancel:this.Pg,MSGotPointerCapture:this.Ng,MSLostPointerCapture:this.Og});this.c=a.c;this.b=["","unavailable","touch","pen","mouse"]}u(vf,kf);function wf(a,b){var c=b;oa(b.M.pointerType)&&(c=of(b,b.M),c.pointerType=a.b[b.M.pointerType]);return c}l=vf.prototype;l.Qg=function(a){this.c[a.M.pointerId]=a;var b=wf(this,a);pf(this.a,qf,b,a)};
l.Rg=function(a){var b=wf(this,a);pf(this.a,rf,b,a)};l.Ug=function(a){var b=wf(this,a);pf(this.a,sf,b,a);jc(this.c,a.M.pointerId)};l.Sg=function(a){var b=wf(this,a);uf(this.a,b,a)};l.Tg=function(a){var b=wf(this,a);tf(this.a,b,a)};l.Pg=function(a){var b=wf(this,a);this.a.cancel(b,a);jc(this.c,a.M.pointerId)};l.Og=function(a){y(this.a,new ef("lostpointercapture",a,a.M))};l.Ng=function(a){y(this.a,new ef("gotpointercapture",a,a.M))};function xf(a){kf.call(this,a,{pointerdown:this.Zh,pointermove:this.$h,pointerup:this.ci,pointerout:this.ai,pointerover:this.bi,pointercancel:this.Yh,gotpointercapture:this.bg,lostpointercapture:this.Fg})}u(xf,kf);l=xf.prototype;l.Zh=function(a){yf(this.a,a)};l.$h=function(a){yf(this.a,a)};l.ci=function(a){yf(this.a,a)};l.ai=function(a){yf(this.a,a)};l.bi=function(a){yf(this.a,a)};l.Yh=function(a){yf(this.a,a)};l.Fg=function(a){yf(this.a,a)};l.bg=function(a){yf(this.a,a)};function zf(a,b){kf.call(this,a,{touchstart:this.si,touchmove:this.ri,touchend:this.qi,touchcancel:this.pi});this.c=a.c;this.h=b;this.b=void 0;this.f=0;this.d=void 0}u(zf,kf);l=zf.prototype;l.ef=function(){this.f=0;this.d=void 0};
function Af(a,b,c){b=of(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.f;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.Pd=c.webkitForce||c.force||0.5;b.Xc=a.b===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function Bf(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.M.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=Af(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
l.si=function(a){var b=a.M.touches,c=fc(this.c),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.c[g];var m;if(!(m=1==g))a:{m=b.length;for(var n=void 0,p=0;p<m;p++)if(n=b[p],n.identifier===g-2){m=!0;break a}m=!1}m||e.push(h.Fb)}for(f=0;f<e.length;++f)this.td(a,e[f])}b=dc(this.c);if(!(c=0===b)){if(b=1===b)b=(1).toString()in this.c;c=b}c&&(this.b=a.M.changedTouches[0].identifier,s(this.d)&&ea.clearTimeout(this.d));Cf(this,a);this.f++;Bf(this,a,this.Xh)};
l.Xh=function(a,b){this.c[b.pointerId]={target:b.target,Fb:b,Ve:b.target};var c=this.a;b.bubbles=!0;pf(c,Df,b,a);c=this.a;b.bubbles=!1;pf(c,Ef,b,a);pf(this.a,qf,b,a)};l.ri=function(a){a.preventDefault();Bf(this,a,this.Mg)};l.Mg=function(a,b){var c=w(this.c,b.pointerId);if(c){var d=c.Fb,e=c.Ve;pf(this.a,rf,b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(uf(this.a,d,a),tf(this.a,b,a)):(b.target=e,b.relatedTarget=null,this.td(a,b)));c.Fb=b;c.Ve=b.target}};
l.qi=function(a){Cf(this,a);Bf(this,a,this.ti)};l.ti=function(a,b){pf(this.a,sf,b,a);this.a.Fb(b,a);var c=this.a;b.bubbles=!1;pf(c,Ff,b,a);jc(this.c,b.pointerId);b.Xc&&(this.b=void 0,this.d=ea.setTimeout(xa(this.ef,this),200))};l.pi=function(a){Bf(this,a,this.td)};l.td=function(a,b){this.a.cancel(b,a);this.a.Fb(b,a);var c=this.a;b.bubbles=!1;pf(c,Ff,b,a);jc(this.c,b.pointerId);b.Xc&&(this.b=void 0,this.d=ea.setTimeout(xa(this.ef,this),200))};
function Cf(a,b){var c=a.h.b,d=b.M.changedTouches[0];if(a.b===d.identifier){var e=[d.clientX,d.clientY];c.push(e);ea.setTimeout(function(){Bb(c,e)},2500)}};function Gf(a){He.call(this);this.d=a;this.c={};this.b={};this.a=[];Id?Hf(this,new xf(this)):Jd?Hf(this,new vf(this)):(a=new lf(this),Hf(this,a),Hd&&Hf(this,new zf(this,a)));a=this.a.length;for(var b,c=0;c<a;c++)b=this.a[c],If(this,fc(b.e))}u(Gf,He);function Hf(a,b){var c=fc(b.e);c&&(wb(c,function(a){var c=b.e[a];c&&(this.b[a]=xa(c,b))},a),a.a.push(b))}Gf.prototype.e=function(a){var b=this.b[a.type];b&&b(a)};function If(a,b){wb(b,function(a){x(this.d,a,this.e,!1,this)},a)}
function Jf(a,b){wb(b,function(a){pe(this.d,a,this.e,!1,this)},a)}function of(a,b){for(var c={},d,e=0,f=Kf.length;e<f;e++)d=Kf[e][0],c[d]=a[d]||b[d]||Kf[e][1];return c}Gf.prototype.Fb=function(a,b){a.bubbles=!0;pf(this,Lf,a,b)};Gf.prototype.cancel=function(a,b){pf(this,Mf,a,b)};function uf(a,b,c){a.Fb(b,c);b.target.contains(b.relatedTarget)||(b.bubbles=!1,pf(a,Ff,b,c))}function tf(a,b,c){b.bubbles=!0;pf(a,Df,b,c);b.target.contains(b.relatedTarget)||(b.bubbles=!1,pf(a,Ef,b,c))}
function pf(a,b,c,d){y(a,new ef(b,d,c))}function yf(a,b){y(a,new ef(b.type,b,b.M))}Gf.prototype.F=function(){for(var a=this.a.length,b,c=0;c<a;c++)b=this.a[c],Jf(this,fc(b.e));Gf.H.F.call(this)};
var rf="pointermove",qf="pointerdown",sf="pointerup",Df="pointerover",Lf="pointerout",Ef="pointerenter",Ff="pointerleave",Mf="pointercancel",Kf=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",
!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Nf(a,b,c,d){df.call(this,a,b,d);this.a=c;this.originalEvent=c.M;this.coordinate=b.yd(this.originalEvent);this.pixel=b.Qc(this.originalEvent)}u(Nf,df);Nf.prototype.preventDefault=function(){Nf.H.preventDefault.call(this);this.a.preventDefault()};Nf.prototype.Sa=function(){Nf.H.Sa.call(this);this.a.Sa()};function Of(a,b,c,d){Nf.call(this,a,b,c.a,d);this.d=c}u(Of,Nf);
function Pf(a){He.call(this);this.c=a;this.e=0;this.g=!1;this.f=this.h=this.b=null;a=this.c.b;this.t=0;this.l={};this.d=new Gf(a);this.a=null;this.h=x(this.d,qf,this.rg,!1,this);this.i=x(this.d,rf,this.hi,!1,this)}u(Pf,He);function Qf(a,b){var c;c=new Of(Rf,a.c,b);y(a,c);0!==a.e?(ea.clearTimeout(a.e),a.e=0,c=new Of(Sf,a.c,b),y(a,c)):a.e=ea.setTimeout(xa(function(){this.e=0;var a=new Of(Tf,this.c,b);y(this,a)},a),250)}
function Uf(a,b){b.type==Vf||b.type==Wf?delete a.l[b.pointerId]:b.type==Xf&&(a.l[b.pointerId]=!0);a.t=dc(a.l)}l=Pf.prototype;l.ye=function(a){Uf(this,a);var b=new Of(Vf,this.c,a);y(this,b);0===this.t&&(wb(this.b,re),this.b=null,Pd(this.a),this.a=null);!this.g&&0===a.button&&Qf(this,this.f)};
l.rg=function(a){Uf(this,a);var b=new Of(Xf,this.c,a);y(this,b);this.f=a;this.g=!1;null===this.b&&(this.a=new Gf(document),this.b=[x(this.a,Yf,this.bh,!1,this),x(this.a,Vf,this.ye,!1,this),x(this.d,Wf,this.ye,!1,this)]);a.preventDefault()};l.bh=function(a){if(a.clientX!=this.f.clientX||a.clientY!=this.f.clientY){this.g=!0;var b=new Of(Zf,this.c,a);y(this,b)}a.preventDefault()};l.hi=function(a){y(this,new Of(a.type,this.c,a))};
l.F=function(){null!==this.i&&(re(this.i),this.i=null);null!==this.h&&(re(this.h),this.h=null);null!==this.b&&(wb(this.b,re),this.b=null);null!==this.a&&(Pd(this.a),this.a=null);null!==this.d&&(Pd(this.d),this.d=null);Pf.H.F.call(this)};var Tf="singleclick",Rf="click",Sf="dblclick",Zf="pointerdrag",Yf="pointermove",Xf="pointerdown",Vf="pointerup",Wf="pointercancel",$f={Pi:Tf,Ei:Rf,Fi:Sf,Ii:Zf,Li:Yf,Hi:Xf,Oi:Vf,Ni:"pointerover",Mi:"pointerout",Ji:"pointerenter",Ki:"pointerleave",Gi:Wf};function ag(a){a=a.a;return a.ra&&!a.Zb&&a.fb}function bg(a){return a.type==Tf}function cg(a){a=a.a;return!a.ra&&!a.Zb&&!a.fb}function dg(a){a=a.a;return!a.ra&&!a.Zb&&a.fb}function eg(a){a=a.a.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function fg(a){return 1==a.d.pointerId};function gg(a){return function(b){if(s(b))return[Xb(b[0],a[0],a[2]),Xb(b[1],a[1],a[3])]}}function hg(a){return a};function ig(a,b){var c,d;c=0;for(d=b.length;c<d;++c)a.push(b[c])}function jg(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1};function kg(a){return function(b,c,d){if(s(b))return b=jg(a,b,d),b=Xb(b+c,0,a.length-1),a[b]}}function lg(a,b,c){return function(d,e,f){if(s(d))return f=0<f?0:0>f?1:0.5,d=Math.floor(Math.log(b/d)/Math.log(a)+f),e=Math.max(d+e,0),s(c)&&(e=Math.min(e,c)),b/Math.pow(a,e)}};function mg(a){if(s(a))return 0}function ng(a,b){if(s(a))return a+b}function og(a){var b=2*Math.PI/a;return function(a,d){if(s(a))return a=Math.floor((a+d)/b+0.5)*b}}function pg(){var a=Zb(5);return function(b,c){if(s(b))return Math.abs(b+c)<=a?0:b+c}};function qg(a,b,c){this.center=a;this.resolution=b;this.rotation=c};function rg(){Me.call(this);this.l=[0,0]}u(rg,Me);rg.prototype.T=ca(null);rg.prototype.Id=ca(!1);function sg(a,b){a.l[1]+=b};function tg(a){for(var b=ug(),c=0,d=a.length;c<d;++c){var e=b,f=a[c];f[0]<e[0]&&(e[0]=f[0]);f[0]>e[2]&&(e[2]=f[0]);f[1]<e[1]&&(e[1]=f[1]);f[1]>e[3]&&(e[3]=f[1])}return b}function vg(a,b,c){var d=Math.min.apply(null,a),e=Math.min.apply(null,b);a=Math.max.apply(null,a);b=Math.max.apply(null,b);return wg(d,e,a,b,c)}function xg(a,b,c){return s(c)?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}
function yg(a,b){return s(b)?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function zg(a,b,c){b=b<a[0]?a[0]-b:a[2]<b?b-a[2]:0;a=c<a[1]?a[1]-c:a[3]<c?c-a[3]:0;return b*b+a*a}function Ag(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}function ug(){return[Infinity,Infinity,-Infinity,-Infinity]}function wg(a,b,c,d,e){return s(e)?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function Bg(a){return wg(Infinity,Infinity,-Infinity,-Infinity,a)}
function Cg(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function Dg(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3]);return a}function Eg(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}function Fg(a){return[a[0],a[1]]}function Gg(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}
function Hg(a,b,c,d){var e=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);c=Math.sin(c);e=[-e,-e,e,e];d=[-d,d,-d,d];var f,g,h;for(f=0;4>f;++f)g=e[f],h=d[f],e[f]=a[0]+g*b-h*c,d[f]=a[1]+g*c+h*b;return vg(e,d,void 0)}function Ig(a){return a[3]-a[1]}function Jg(a){return[a[0],a[3]]}function Kg(a){return a[2]-a[0]}function Lg(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]}function Mg(a){return a[2]<a[0]||a[3]<a[1]}function Ng(a,b){return s(b)?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a}
function Pg(a,b){var c=(a[2]-a[0])/2*(b-1),d=(a[3]-a[1])/2*(b-1);a[0]-=c;a[2]+=c;a[1]-=d;a[3]+=d}function Qg(a,b){return Lg(a,b)&&(a[0]==b[2]||a[2]==b[0]||a[1]==b[3]||a[3]==b[1])}function Rg(a,b,c){a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);return vg([a[0],a[2],a[4],a[6]],[a[1],a[3],a[5],a[7]],c)};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
function Sg(a){this.radius=a}function Tg(a,b,c){var d=Zb(b[1]),e=Zb(c[1]),f=(e-d)/2;b=Zb(c[0]-b[0])/2;d=Math.sin(f)*Math.sin(f)+Math.sin(b)*Math.sin(b)*Math.cos(d)*Math.cos(e);return 2*a.radius*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))};var Ug=new Sg(6370997);var Vg={},Wg="object"==typeof Proj4js;Vg.degrees=2*Math.PI*Ug.radius/360;Vg.ft=0.3048;Vg.m=1;function Xg(a){this.a=a.code;this.Ja=a.units;this.t=s(a.extent)?a.extent:null;this.e=s(a.axisOrientation)?a.axisOrientation:"enu";this.l=s(a.global)?a.global:!1;this.g=null}Xg.prototype.c=k("a");Xg.prototype.v=k("t");Xg.prototype.b=k("Ja");Xg.prototype.f=function(){return Vg[this.Ja]};function Yg(a){return a.e}
function Zg(a,b){var c={units:a.units,axisOrientation:a.axis};nc(c,b);Xg.call(this,c);this.i=a;this.h=null}u(Zg,Xg);Zg.prototype.f=function(){var a=this.i.to_meter;s(a)||(a=Vg[this.Ja]);return a};
Zg.prototype.d=function(a,b){if("degrees"==this.Ja)return a;null===this.h&&(this.h=$g(this,ah({code:"EPSG:4326",extent:null})));var c=[b[0]-a/2,b[1],b[0]+a/2,b[1],b[0],b[1]-a/2,b[0],b[1]+a/2],c=this.h(c,c,2),d=Tg(Ug,c.slice(0,2),c.slice(2,4)),c=Tg(Ug,c.slice(4,6),c.slice(6,8)),d=(d+c)/2;"ft"==this.Ja&&(d/=0.3048);return d};function bh(a){return a.i}var ch={},dh={},eh={};function fh(a){gh(a);wb(a,function(b){wb(a,function(a){b!==a&&hh(b,a,ih)})})}
function jh(){var a=kh,b=lh,c=mh;wb(nh,function(d){wb(a,function(a){hh(d,a,b);hh(a,d,c)})})}function oh(a){dh[a.a]=a;hh(a,a,ih)}function gh(a){wb(a,function(a){oh(a)})}function ph(a){return null!=a?na(a)?qh(a):a:qh("EPSG:3857")}function hh(a,b,c){a=a.a;b=b.a;a in eh||(eh[a]={});eh[a][b]=c}function qh(a){var b;a instanceof Xg?b=a:na(a)?(b=dh[a],Wg&&!s(b)&&(b=ah({code:a,extent:null})),s(b)||(b=null)):b=null;return b}
function ah(a){var b=a.code,c=ch[b];if(!s(c)){var d=new Proj4js.Proj(b),e=d.srsCode,c=ch[e];s(c)||(a=lc(a),a.code=e,c=new Zg(d,a),ch[e]=c);ch[b]=c}return c}function rh(a,b){var c=qh(a),d=qh(b);return $g(c,d)}
function $g(a,b){var c=a.a,d=b.a,e;c in eh&&d in eh[c]&&(e=eh[c][d]);if(Wg&&!s(e)){var f=bh(a instanceof Zg?a:ah({code:c,extent:null})),g=bh(b instanceof Zg?b:ah({code:d,extent:null}));e=function(a,b,c){var d=a.length;c=1<c?c:2;s(b)||(b=2<c?a.slice():Array(d));for(var e,r=0;r<d;r+=c)e=new Proj4js.Point(a[r],a[r+1]),e=Proj4js.transform(f,g,e),b[r]=e.x,b[r+1]=e.y;return b};hh(a,b,e)}s(e)||(e=sh);return e}function sh(a,b){if(s(b)&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}
function ih(a,b){var c;if(s(b)){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c};function G(a){rg.call(this);a=s(a)?a:{};var b={};b.center=s(a.center)?a.center:null;b.projection=ph(a.projection);var c,d,e,f=s(a.minZoom)?a.minZoom:0;c=s(a.maxZoom)?a.maxZoom:28;var g=s(a.zoomFactor)?a.zoomFactor:2;if(s(a.resolutions))c=a.resolutions,d=c[0],e=c[c.length-1],c=kg(c);else{d=a.projection;e=ph(d).v();var h=(null===e?360*Vg.degrees/Vg[d.Ja]:Math.max(Kg(e),Ig(e)))/256/Math.pow(2,0),m=h/Math.pow(2,28);d=a.maxResolution;s(d)?f=0:d=h/Math.pow(g,f);e=a.minResolution;s(e)||(e=s(a.maxZoom)?s(a.maxResolution)?
d/Math.pow(g,c):h/Math.pow(g,c):m);c=f+Math.floor(Math.log(d/e)/Math.log(g));e=d/Math.pow(g,c-f);c=lg(g,d,c-f)}this.f=d;this.w=e;this.u=f;(s(a.enableRotation)?a.enableRotation:1)?(f=a.constrainRotation,f=s(f)&&!0!==f?!1===f?ng:oa(f)?og(f):ng:pg()):f=mg;this.o=new qg(s(a.extent)?gg(a.extent):hg,c,f);s(a.resolution)?b.resolution=a.resolution:s(a.zoom)&&(b.resolution=this.constrainResolution(this.f,a.zoom-this.u));b.rotation=s(a.rotation)?a.rotation:0;this.Q(b)}u(G,rg);G.prototype.g=function(a){return this.o.center(a)};
G.prototype.constrainResolution=function(a,b,c){return this.o.resolution(a,b||0,c||0)};G.prototype.constrainRotation=function(a,b){return this.o.rotation(a,b||0)};G.prototype.a=function(){return this.get("center")};G.prototype.getCenter=G.prototype.a;G.prototype.C=function(a){var b=this.a(),c=this.b();return[b[0]-c*a[0]/2,b[1]-c*a[1]/2,b[0]+c*a[0]/2,b[1]+c*a[1]/2]};G.prototype.h=function(){return this.get("projection")};G.prototype.getProjection=G.prototype.h;G.prototype.b=function(){return this.get("resolution")};
G.prototype.getResolution=G.prototype.b;G.prototype.i=function(a,b){return Math.max(Kg(a)/b[0],Ig(a)/b[1])};function th(a){var b=a.f,c=Math.log(b/a.w)/Math.log(2);return function(a){return b/Math.pow(2,a*c)}}G.prototype.e=function(){return this.get("rotation")};G.prototype.getRotation=G.prototype.e;function uh(a){var b=a.f,c=Math.log(b/a.w)/Math.log(2);return function(a){return Math.log(b/a)/Math.log(2)/c}}l=G.prototype;l.T=function(){return this};
function vh(a){var b=a.a(),c=a.h(),d=a.b();a=a.e();return{center:b.slice(),projection:s(c)?c:null,resolution:d,rotation:s(a)?a:0}}l.$f=function(){var a,b=this.b();if(s(b)){var c,d=0;do{c=this.constrainResolution(this.f,d);if(c==b){a=d;break}++d}while(c>this.w)}return s(a)?this.u+a:a};l.me=function(a,b){if(!Mg(a)){this.Da(Gg(a));var c=this.i(a,b),d=this.constrainResolution(c,0,0);d<c&&(d=this.constrainResolution(d,-1,0));this.d(d)}};
l.If=function(a,b,c){var d=s(c)?c:{};c=s(d.padding)?d.padding:[0,0,0,0];var e=s(d.constrainResolution)?d.constrainResolution:!0,f=s(d.nearest)?d.nearest:!1,g=s(d.minResolution)?d.minResolution:0,h=a.j,m=this.e(),d=Math.cos(-m),m=Math.sin(-m),n=Infinity,p=Infinity,q=-Infinity,r=-Infinity;a=a.a;for(var v=0,z=h.length;v<z;v+=a)var B=h[v]*d-h[v+1]*m,A=h[v]*m+h[v+1]*d,n=Math.min(n,B),p=Math.min(p,A),q=Math.max(q,B),r=Math.max(r,A);b=this.i([n,p,q,r],[b[0]-c[1]-c[3],b[1]-c[0]-c[2]]);b=isNaN(b)?g:Math.max(b,
g);e&&(e=this.constrainResolution(b,0,0),!f&&e<b&&(e=this.constrainResolution(e,-1,0)),b=e);this.d(b);m=-m;f=(n+q)/2+(c[1]-c[3])/2*b;c=(p+r)/2+(c[0]-c[2])/2*b;this.Da([f*d-c*m,c*d+f*m])};l.Df=function(a,b,c){var d=this.e(),e=Math.cos(-d),d=Math.sin(-d),f=a[0]*e-a[1]*d;a=a[1]*e+a[0]*d;var g=this.b(),f=f+(b[0]/2-c[0])*g;a+=(c[1]-b[1]/2)*g;d=-d;this.Da([f*e-a*d,a*e+f*d])};l.Id=function(){return null!=this.a()&&s(this.b())};
l.rotate=function(a,b){if(s(b)){var c,d=this.a();s(d)&&(c=[d[0]-b[0],d[1]-b[1]],af(c,a-this.e()),Ve(c,b));this.Da(c)}this.n(a)};l.Da=function(a){this.A("center",a)};G.prototype.setCenter=G.prototype.Da;G.prototype.B=function(a){this.A("projection",a)};G.prototype.setProjection=G.prototype.B;G.prototype.d=function(a){this.A("resolution",a)};G.prototype.setResolution=G.prototype.d;G.prototype.n=function(a){this.A("rotation",a)};G.prototype.setRotation=G.prototype.n;
G.prototype.J=function(a){a=this.constrainResolution(this.f,a-this.u,0);this.d(a)};function wh(a){return 1-Math.pow(1-a,3)};function xh(a){return 3*a*a-2*a*a*a}function yh(a){return a}function zh(a){return 0.5>a?xh(2*a):1-xh(2*(a-0.5))};function Ah(a){var b=a.source,c=s(a.start)?a.start:za(),d=b[0],e=b[1],f=s(a.duration)?a.duration:1E3,g=s(a.easing)?a.easing:xh;return function(a,b){if(b.time<c)return b.ya=!0,b.U[0]+=1,!0;if(b.time<c+f){var n=1-g((b.time-c)/f),p=d-b.view2DState.center[0],q=e-b.view2DState.center[1];b.ya=!0;b.view2DState.center[0]+=n*p;b.view2DState.center[1]+=n*q;b.U[0]+=1;return!0}return!1}}
function Bh(a){var b=s(a.rotation)?a.rotation:0,c=s(a.start)?a.start:za(),d=s(a.duration)?a.duration:1E3,e=s(a.easing)?a.easing:xh,f=s(a.anchor)?a.anchor:null;return function(a,h){if(h.time<c)return h.ya=!0,h.U[0]+=1,!0;if(h.time<c+d){var m=1-e((h.time-c)/d),m=(b-h.view2DState.rotation)*m;h.ya=!0;h.view2DState.rotation+=m;if(null!==f){var n=h.view2DState.center;n[0]-=f[0];n[1]-=f[1];af(n,m);Ve(n,f)}h.U[0]+=1;return!0}return!1}}
function Ch(a){var b=a.resolution,c=s(a.start)?a.start:za(),d=s(a.duration)?a.duration:1E3,e=s(a.easing)?a.easing:xh;return function(a,g){if(g.time<c)return g.ya=!0,g.U[0]+=1,!0;if(g.time<c+d){var h=1-e((g.time-c)/d),m=b-g.view2DState.resolution;g.ya=!0;g.view2DState.resolution+=h*m;g.U[0]+=1;return!0}return!1}};function Dh(){Je.call(this);this.h=null}u(Dh,Je);Dh.prototype.setMap=function(a){this.h=a};function Eh(a,b,c,d,e){if(null!=c){var f=b.e(),g=b.a();s(f)&&(s(g)&&s(e)&&0<e)&&(a.na(Bh({rotation:f,duration:e,easing:wh})),s(d)&&a.na(Ah({source:g,duration:e,easing:wh})));b.rotate(c,d)}}function Fh(a,b,c,d,e){var f=b.b();c=b.constrainResolution(f,c,0);Gh(a,b,c,d,e)}
function Gh(a,b,c,d,e){if(null!=c){var f=b.b(),g=b.a();s(f)&&(s(g)&&s(e)&&0<e)&&(a.na(Ch({resolution:f,duration:e,easing:wh})),s(d)&&a.na(Ah({source:g,duration:e,easing:wh})));if(null!=d){var h;a=b.a();e=b.b();s(a)&&s(e)&&(h=[d[0]-c*(d[0]-a[0])/e,d[1]-c*(d[1]-a[1])/e]);b.Da(h)}b.d(c)}};function Hh(){Dh.call(this);this.g=!1;this.t={};this.b=[]}u(Hh,Dh);function Ih(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}l=Hh.prototype;l.ob=fa;l.hb=ze;l.gb=ze;
l.Ea=function(a){if(!(a instanceof Of))return!0;var b=!1,c=a.type;if(c===Xf||c===Zf||c===Vf)c=a.d,a.type==Vf?delete this.t[c.pointerId]:a.type==Xf?this.t[c.pointerId]=c:c.pointerId in this.t&&(this.t[c.pointerId]=c),this.b=ec(this.t);this.g&&(a.type==Zf?this.ob(a):a.type==Vf&&(this.g=this.hb(a)));a.type==Xf&&(this.g=a=this.gb(a),b=this.kd(a));return!b};l.kd=ze;function Jh(){Je.call(this);this.extent=void 0;this.f=-1;this.h={};this.l=this.g=0}u(Jh,Je);Jh.prototype.e=function(a,b){var c=s(b)?b:[NaN,NaN];this.za(a[0],a[1],c,Infinity);return c};Jh.prototype.yb=ze;Jh.prototype.transform=function(a,b){this.xb(rh(a,b));return this};function Kh(a,b,c,d){var e=c[0],f=c[1],g=c[4],h=c[5],m=c[12];c=c[13];var n=s(d)?d:[],p=0,q,r;q=0;for(r=a.length;q<r;q+=b){var v=a[q],z=a[q+1];n[p++]=e*v+g*z+m;n[p++]=f*v+h*z+c}s(d)&&n.length!=p&&(n.length=p);return n};function Lh(){Jh.call(this);this.b="XY";this.a=2;this.j=null}u(Lh,Jh);function Mh(a){if("XY"==a)return 2;if("XYZ"==a||"XYM"==a)return 3;if("XYZM"==a)return 4;throw Error("unsupported layout: "+a);}l=Lh.prototype;l.yb=ze;l.v=function(a){if(this.f!=this.c){var b=this.j,c=this.j.length,d=this.a,e=Bg(this.extent);this.extent=Eg(e,b,0,c,d);this.f=this.c}return Ng(this.extent,a)};l.$a=function(){return this.j.slice(0,this.a)};l.ab=function(){return this.j.slice(this.j.length-this.a)};l.cb=k("b");
l.ia=function(a){this.l!=this.c&&(ic(this.h),this.g=0,this.l=this.c);if(0>a||0!==this.g&&a<=this.g)return this;var b=a.toString();if(this.h.hasOwnProperty(b))return this.h[b];var c=this.Qb(a);if(c.j.length<this.j.length)return this.h[b]=c;this.g=a;return this};l.Qb=function(){return this};function Nh(a,b,c){a.a=Mh(b);a.b=b;a.j=c}
function Oh(a,b,c,d){if(s(b))c=Mh(b);else{for(b=0;b<d;++b){if(0===c.length){a.b="XY";a.a=2;return}c=c[0]}c=c.length;if(2==c)b="XY";else if(3==c)b="XYZ";else if(4==c)b="XYZM";else throw Error("unsupported stride: "+c);}a.b=b;a.a=c}l.xb=function(a){null!==this.j&&(a(this.j,this.j,this.a),this.k())};function Ph(a,b,c){var d=a.j;return null===d?null:Kh(d,a.a,b,c)};function Qh(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],m=a[b+1],e=e+(g*h-f*m),f=h,g=m;return e/2}function Rh(a,b,c,d){var e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],e=e+Qh(a,b,h,d);b=h}return e};function Sh(a,b,c,d){a=c-a;b=d-b;return a*a+b*b};function Th(a,b,c,d,e,f,g){var h=a[b],m=a[b+1],n=a[c]-h,p=a[c+1]-m;if(0!==n||0!==p)if(f=((e-h)*n+(f-m)*p)/(n*n+p*p),1<f)b=c;else if(0<f){for(e=0;e<d;++e)g[e]=a[b+e]+f*(a[c+e]-a[b+e]);g.length=d;return}for(e=0;e<d;++e)g[e]=a[b+e];g.length=d}function Uh(a,b,c,d,e){var f=a[b],g=a[b+1];for(b+=d;b<c;b+=d){var h=a[b],m=a[b+1],f=Sh(f,g,h,m);f>e&&(e=f);f=h;g=m}return e}function Vh(a,b,c,d,e){var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];e=Uh(a,b,h,d,e);b=h}return e}
function Wh(a,b,c,d,e,f,g,h,m,n,p){if(b==c)return n;var q;if(0===e){q=Sh(g,h,a[b],a[b+1]);if(q<n){for(p=0;p<d;++p)m[p]=a[b+p];m.length=d;return q}return n}for(var r=s(p)?p:[NaN,NaN],v=b+d;v<c;)if(Th(a,v-d,v,d,g,h,r),q=Sh(g,h,r[0],r[1]),q<n){n=q;for(p=0;p<d;++p)m[p]=r[p];m.length=d;v+=d}else v+=d*Math.max((Math.sqrt(q)-Math.sqrt(n))/e|0,1);if(f&&(Th(a,c-d,b,d,g,h,r),q=Sh(g,h,r[0],r[1]),q<n)){n=q;for(p=0;p<d;++p)m[p]=r[p];m.length=d}return n}
function Xh(a,b,c,d,e,f,g,h,m,n,p){p=s(p)?p:[NaN,NaN];var q,r;q=0;for(r=c.length;q<r;++q){var v=c[q];n=Wh(a,b,v,d,e,f,g,h,m,n,p);b=v}return n};function Yh(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function Zh(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function $h(a,b,c,d,e){e=s(e)?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Zh(a,b,c[g],d),e[f++]=b;e.length=f;return e};function ai(a,b,c,d,e){e=s(e)?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function bi(a,b,c,d,e){e=s(e)?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var m=c[g];e[f++]=ai(a,b,m,d,e[f]);b=m}e.length=f;return e};function di(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var m=Array(h);m[0]=1;m[h-1]=1;c=[b,c-d];for(var n=0,p;0<c.length;){var q=c.pop(),r=c.pop(),v=0,z=a[r],B=a[r+1],A=a[q],E=a[q+1];for(p=r+d;p<q;p+=d){var C;C=a[p];var M=a[p+1],Q=z,ha=B,R=A-Q,qa=E-ha;if(0!==R||0!==qa){var Ea=((C-Q)*R+(M-ha)*qa)/(R*R+qa*qa);1<Ea?(Q=A,ha=E):0<Ea&&(Q+=R*Ea,ha+=qa*Ea)}C=Sh(C,M,Q,ha);C>v&&(n=p,v=C)}v>e&&(m[(n-b)/d]=1,r+d<n&&c.push(r,n),n+d<q&&c.push(n,q))}for(p=0;p<h;++p)m[p]&&
(f[g++]=a[b+p*d],f[g++]=a[b+p*d+1]);return g}
function ei(a,b,c,d,e,f,g,h){var m,n;m=0;for(n=c.length;m<n;++m){var p=c[m];a:{var q=a,r=p,v=d,z=e,B=f;if(b!=r){var A=z*Math.round(q[b]/z),E=z*Math.round(q[b+1]/z);b+=v;B[g++]=A;B[g++]=E;var C=void 0,M=void 0;do if(C=z*Math.round(q[b]/z),M=z*Math.round(q[b+1]/z),b+=v,b==r){B[g++]=C;B[g++]=M;break a}while(C==A&&M==E);for(;b<r;){var Q,ha;Q=z*Math.round(q[b]/z);ha=z*Math.round(q[b+1]/z);b+=v;if(Q!=C||ha!=M){var R=C-A,qa=M-E,Ea=Q-A,Ta=ha-E;R*Ta==qa*Ea&&(0>R&&Ea<R||R==Ea||0<R&&Ea>R)&&(0>qa&&Ta<qa||qa==
Ta||0<qa&&Ta>qa)||(B[g++]=C,B[g++]=M,A=C,E=M);C=Q;M=ha}}B[g++]=C;B[g++]=M}}h.push(g);b=p}return g};function fi(a,b){Lh.call(this);this.d=this.i=-1;this.O(a,b)}u(fi,Lh);l=fi.prototype;l.P=function(){var a=new fi(null);gi(a,this.b,this.j.slice());return a};l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;this.d!=this.c&&(this.i=Math.sqrt(Uh(this.j,0,this.j.length,this.a,0)),this.d=this.c);return Wh(this.j,0,this.j.length,this.a,this.i,!0,a,b,c,d)};l.hh=function(){return Qh(this.j,0,this.j.length,this.a)};l.D=function(){return ai(this.j,0,this.j.length,this.a)};
l.Qb=function(a){var b=[];b.length=di(this.j,0,this.j.length,this.a,a,b,0);a=new fi(null);gi(a,"XY",b);return a};l.G=ca("LinearRing");l.O=function(a,b){null===a?gi(this,"XY",null):(Oh(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Zh(this.j,0,a,this.a),this.k())};function gi(a,b,c){Nh(a,b,c);a.k()};function hi(a,b){Lh.call(this);this.O(a,b)}u(hi,Lh);l=hi.prototype;l.P=function(){var a=new hi(null);ii(a,this.b,this.j.slice());return a};l.za=function(a,b,c,d){var e=this.j;a=Sh(a,b,e[0],e[1]);if(a<d){d=this.a;for(b=0;b<d;++b)c[b]=e[b];c.length=d;return a}return d};l.D=function(){return this.j.slice()};l.v=function(a){if(this.f!=this.c){var b=this.j,c=b[0],b=b[1];this.extent=wg(c,b,c,b,this.extent);this.f=this.c}return Ng(this.extent,a)};l.G=ca("Point");
l.O=function(a,b){null===a?ii(this,"XY",null):(Oh(this,b,a,0),null===this.j&&(this.j=[]),this.j.length=Yh(this.j,a),this.k())};function ii(a,b,c){Nh(a,b,c);a.k()};function ji(a,b,c,d,e,f){for(var g=!1,h=a[c-d],m=a[c-d+1];b<c;b+=d){var n=a[b],p=a[b+1];m>f!=p>f&&e<(n-h)*(f-m)/(p-m)+h&&(g=!g);h=n;m=p}return g}function ki(a,b,c,d,e,f){if(0===c.length||!ji(a,b,c[0],d,e,f))return!1;var g;b=1;for(g=c.length;b<g;++b)if(ji(a,c[b-1],c[b],d,e,f))return!1;return!0};function li(a,b,c,d,e,f,g){var h,m,n,p,q,r=e[f+1],v=[],z=c[0];n=a[z-d];q=a[z-d+1];for(h=b;h<z;h+=d){p=a[h];m=a[h+1];if(r<=q&&m<=r||q<=r&&r<=m)n=(r-q)/(m-q)*(p-n)+n,v.push(n);n=p;q=m}z=NaN;q=-Infinity;v.sort();n=v[0];h=1;for(m=v.length;h<m;++h){p=v[h];var B=Math.abs(p-n);B>q&&(n=(n+p)/2,ki(a,b,c,d,n,r)&&(z=n,q=B));n=p}isNaN(z)&&(z=e[f]);return s(g)?(g.push(z,r),g):[z,r]};function mi(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],m=a[b+1],e=e+(h-f)*(m+g),f=h,g=m;return 0<e}function ni(a,b,c){var d=0,e,f;e=0;for(f=b.length;e<f;++e){var g=b[e],d=mi(a,d,g,c);if(0===e?!d:d)return!1;d=g}return!0}function oi(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h=mi(a,b,g,d);if(0===e?!h:h)for(var h=a,m=g,n=d;b<m-n;){var p;for(p=0;p<n;++p){var q=h[b+p];h[b+p]=h[m-n+p];h[m-n+p]=q}b+=n;m-=n}b=g}return b};function H(a,b){Lh.call(this);this.d=[];this.t=-1;this.n=null;this.u=this.o=this.w=-1;this.i=null;this.O(a,b)}u(H,Lh);l=H.prototype;l.yf=function(a){null===this.j?this.j=a.j.slice():ig(this.j,a.j);this.d.push(this.j.length);this.k()};l.P=function(){var a=new H(null);pi(a,this.b,this.j.slice(),this.d.slice());return a};
l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;this.o!=this.c&&(this.w=Math.sqrt(Vh(this.j,0,this.d,this.a,0)),this.o=this.c);return Xh(this.j,0,this.d,this.a,this.w,!0,a,b,c,d)};l.yb=function(a,b){return ki(qi(this),0,this.d,this.a,a,b)};l.kh=function(){return Rh(qi(this),0,this.d,this.a)};l.D=function(){return bi(this.j,0,this.d,this.a)};function ri(a){if(a.t!=a.c){var b=Gg(a.v());a.n=li(qi(a),0,a.d,a.a,b,0);a.t=a.c}return a.n}l.Mf=function(){return new hi(ri(this))};
l.Rf=function(a){if(0>a||this.d.length<=a)return null;var b=new fi(null);gi(b,this.b,this.j.slice(0===a?0:this.d[a-1],this.d[a]));return b};l.re=function(){var a=this.b,b=this.j,c=this.d,d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],m=new fi(null);gi(m,a,b.slice(e,h));d.push(m);e=h}return d};function qi(a){if(a.u!=a.c){var b=a.j;ni(b,a.d,a.a)?a.i=b:(a.i=b.slice(),a.i.length=oi(a.i,0,a.d,a.a));a.u=a.c}return a.i}
l.Qb=function(a){var b=[],c=[];b.length=ei(this.j,0,this.d,this.a,Math.sqrt(a),b,0,c);a=new H(null);pi(a,"XY",b,c);return a};l.G=ca("Polygon");l.O=function(a,b){if(null===a)pi(this,"XY",null,this.d);else{Oh(this,b,a,2);null===this.j&&(this.j=[]);var c=$h(this.j,0,a,this.a,this.d);this.j.length=0===c.length?0:c[c.length-1];this.k()}};function pi(a,b,c,d){Nh(a,b,c);a.d=d;a.k()}
function si(a,b,c,d){var e=s(d)?d:32;d=[];var f;for(f=0;f<e;++f){var g=2*Math.PI*f/e,h=Zb(b[1]),m=c/a.radius,n=Math.asin(Math.sin(h)*Math.cos(m)+Math.cos(h)*Math.sin(m)*Math.cos(g));Eb(d,[180*(Zb(b[0])+Math.atan2(Math.sin(g)*Math.sin(m)*Math.cos(h),Math.cos(m)-Math.sin(h)*Math.sin(n)))/Math.PI,180*n/Math.PI])}d.push(d[0],d[1]);a=new H(null);pi(a,"XY",d,[d.length]);return a};function ti(a,b,c,d,e,f){Qd.call(this,a,b);this.vectorContext=c;this.frameState=d;this.context=e;this.glContext=f}u(ti,Qd);function ui(a){this.b=this.c=this.e=this.d=this.a=null;this.f=a}u(ui,Ld);function vi(a){var b=a.e,c=a.c;a=xb([b,[b[0],c[1]],c,[c[0],b[1]]],a.a.pa,a.a);a[4]=a[0].slice();return new H([a])}ui.prototype.F=function(){this.setMap(null)};ui.prototype.h=function(a){var b=this.b,c=this.f;a.vectorContext.Lc(Infinity,function(a){a.Ia(c.d,c.b);a.ua(c.c);a.Ob(b,null)})};ui.prototype.L=k("b");function wi(a){null===a.a||(null===a.e||null===a.c)||a.a.N()}
ui.prototype.setMap=function(a){null!==this.d&&(re(this.d),this.d=null,this.a.N(),this.a=null);this.a=a;null!==this.a&&(this.d=x(a,"postcompose",this.h,!1,this),wi(this))};function xi(a,b){Qd.call(this,a);this.coordinate=b}u(xi,Qd);function yi(a){Hh.call(this);a=s(a)?a:{};this.d=new ui(s(a.style)?a.style:null);this.a=null;this.e=s(a.condition)?a.condition:Ae}u(yi,Hh);l=yi.prototype;l.ob=function(a){if(fg(a)){var b=this.d;a=a.pixel;b.e=this.a;b.c=a;b.b=vi(b);wi(b)}};l.L=function(){return this.d.L()};l.Ue=fa;
l.hb=function(a){if(!fg(a))return!0;this.d.setMap(null);var b=a.pixel[0]-this.a[0],c=a.pixel[1]-this.a[1];64<=b*b+c*c&&(this.Ue(a),y(this,new xi("boxend",a.coordinate)));return!1};l.gb=function(a){if(fg(a)&&ae(a.a)&&this.e(a)){this.a=a.pixel;this.d.setMap(a.map);var b=this.d,c=this.a;b.e=this.a;b.c=c;b.b=vi(b);wi(b);y(this,new xi("boxstart",a.coordinate));return!0}return!1};l.kd=Be;var zi=/^#(?:[0-9a-f]{3}){1,2}$/i,Ai=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,Bi=/^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;function Ci(a){if(!na(a)){var b=a[0];b!=(b|0)&&(b=b+0.5|0);var c=a[1];c!=(c|0)&&(c=c+0.5|0);var d=a[2];d!=(d|0)&&(d=d+0.5|0);a="rgba("+b+","+c+","+d+","+a[3]+")"}return a}
var Ei=function(){var a={},b=0;return function(c,d){var e;if(a.hasOwnProperty(c))e=a[c];else{if(1024<=b){e=0;for(var f in a)0===(e++&3)&&(delete a[f],--b)}var g,h;if(zi.exec(c))h=3==c.length-1?1:2,e=parseInt(c.substr(1+0*h,h),16),f=parseInt(c.substr(1+1*h,h),16),g=parseInt(c.substr(1+2*h,h),16),1==h&&(e=(e<<4)+e,f=(f<<4)+f,g=(g<<4)+g),e=[e,f,g,1];else if(h=Bi.exec(c))e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),h=Number(h[4]),e=[e,f,g,h],e=Di(e,e);else if(h=Ai.exec(c))e=Number(h[1]),f=Number(h[2]),
g=Number(h[3]),e=[e,f,g,1],e=Di(e,e);else throw Error(c+" is not a valid color");a[c]=e;++b}s(d)&&(d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e=d);return e}}();function Di(a,b){var c=s(b)?b:[];c[0]=Xb(a[0]+0.5|0,0,255);c[1]=Xb(a[1]+0.5|0,0,255);c[2]=Xb(a[2]+0.5|0,0,255);c[3]=Xb(a[3],0,1);return c};var Fi=[0,0,0,1],Gi=[],Hi=[0,0,0,1];function Ii(a){a=s(a)?a:{};this.a=s(a.color)?a.color:null}Ii.prototype.c=k("a");function Ji(a){this.n=a.opacity;this.o=a.origin;this.w=a.rotateWithView;this.e=a.rotation;this.f=a.scale;this.u=a.snapToPixel}Ji.prototype.h=k("e");Ji.prototype.g=k("f");function Ki(a){a=s(a)?a:{};this.a=s(a.color)?a.color:null;this.b=a.lineCap;this.d=s(a.lineDash)?a.lineDash:null;this.e=a.lineJoin;this.f=a.miterLimit;this.c=a.width}l=Ki.prototype;l.Dh=k("a");l.Of=k("b");l.Eh=k("d");l.Pf=k("e");l.Sf=k("f");l.Fh=k("c");function Li(a){a=s(a)?a:{};this.i=yc("CANVAS");this.c=null;this.b=s(a.fill)?a.fill:null;this.d=a.radius;this.a=s(a.stroke)?a.stroke:null;var b,c=this.i,d;null===this.a?d=0:(b=Ci(this.a.a),d=this.a.c,s(d)||(d=1));var e=2*(this.d+d)+1;c.height=e;c.width=e;var e=c.width,f=c.getContext("2d");f.arc(e/2,e/2,this.d,0,2*Math.PI,!0);null!==this.b&&(f.fillStyle=Ci(this.b.a),f.fill());null!==this.a&&(f.strokeStyle=b,f.lineWidth=d,f.stroke());null===this.b?(c=this.c=yc("CANVAS"),c.height=e,c.width=e,f=c.getContext("2d"),
f.arc(e/2,e/2,this.d,0,2*Math.PI,!0),f.fillStyle=Fi,f.fill(),null!==this.a&&(f.strokeStyle=b,f.lineWidth=d,f.stroke())):this.c=c;b=e;this.l=[b/2,b/2];this.t=[b,b];Ji.call(this,{opacity:1,origin:[0,0],rotateWithView:!1,rotation:0,scale:1,snapToPixel:s(a.snapToPixel)?a.snapToPixel:!0})}u(Li,Ji);l=Li.prototype;l.Pb=k("l");l.Qe=k("b");l.Te=k("c");l.Yb=k("i");l.Ld=ca(2);l.Re=k("d");l.Eb=k("t");l.Se=k("a");l.Fd=fa;l.Md=fa;l.Wd=fa;function Mi(a){a=s(a)?a:{};this.d=s(a.fill)?a.fill:null;this.e=s(a.image)?a.image:null;this.b=s(a.stroke)?a.stroke:null;this.c=s(a.text)?a.text:null;this.a=a.zIndex}l=Mi.prototype;l.Gh=k("d");l.Hh=k("e");l.Ih=k("b");l.Jh=k("c");l.Zf=k("a");function I(a){Me.call(this);this.V=void 0;this.a="geometry";this.g=null;this.f=void 0;this.e=null;x(this,Qe(this.a),this.Wc,!1,this);s(a)&&(a instanceof Jh||null===a?this.Wa(a):this.Q(a))}u(I,Me);I.prototype.L=function(){return this.get(this.a)};I.prototype.getGeometry=I.prototype.L;l=I.prototype;l.pe=k("V");l.oe=k("a");l.Je=k("g");l.Ke=k("f");l.ig=function(){this.k()};l.Wc=function(){null!==this.e&&(re(this.e),this.e=null);var a=this.L();null!=a&&(this.e=x(a,"change",this.ig,!1,this),this.k())};
l.Wa=function(a){this.A(this.a,a)};I.prototype.setGeometry=I.prototype.Wa;I.prototype.h=function(a){this.g=a;pa(a)||(a=la(a)?a:[a],a=ye(a));this.f=a;this.k()};I.prototype.b=function(a){this.V=a;this.k()};I.prototype.d=function(a){pe(this,Qe(this.a),this.Wc,!1,this);this.a=a;x(this,Qe(this.a),this.Wc,!1,this);this.Wc()};
function Ni(){var a=new Ii({color:"rgba(255,255,255,0.4)"}),b=new Ki({color:"#3399CC",width:1.25}),c=[new Mi({image:new Li({fill:a,stroke:b,radius:5}),fill:a,stroke:b})];Ni=function(){return c};return c}function Oi(a,b){var c=a.f;s(c)||(c=Ni);return c.call(a,b)}function Pi(a){pa(a)||(a=la(a)?a:[a],a=ye(a));return a}
function Qi(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new Mi({fill:new Ii({color:[255,255,255,0.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new Mi({stroke:new Ki({color:b,width:5})}),new Mi({stroke:new Ki({color:c,width:3})})];a.MultiLineString=a.LineString;a.Point=[new Mi({image:new Li({radius:6,fill:new Ii({color:c}),stroke:new Ki({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.Point);return a};function Ri(a){a=s(a)?a:{};this.h=this.d=this.e=this.c=this.b=this.a=null;this.f=s(a.style)?Pi(a.style):void 0;s(a.features)?la(a.features)?this.Dc(new D(Db(a.features))):this.Dc(a.features):this.Dc(new D);s(a.map)&&this.setMap(a.map)}l=Ri.prototype;l.Ge=function(a){this.a.push(a)};l.Vg=k("a");l.He=function(){Si(this)};l.gg=function(a){a=a.element;this.c[sa(a).toString()]=x(a,"change",this.He,!1,this);Si(this)};l.hg=function(a){a=sa(a.element).toString();re(this.c[a]);delete this.c[a];Si(this)};
l.Ie=function(){Si(this)};l.Yg=function(a){if(null!==this.a){var b=this.f;s(b)||(b=Oi);var c=a.frameState.view2DState.resolution,d=a.vectorContext,e,f,g;this.a.forEach(function(a){g=b(a,c);if(null!=g)for(f=g.length,e=0;e<f;++e){var m=d,n=a,p=g[e],q=p.e;if(null===q)m.Mc(n,p);else{var r=q.Ld();2==r||3==r?(q.Wd(this.Ie,this),2==r&&m.Mc(n,p)):(0==r&&q.Md(),q.Fd(this.Ie,this))}}},this)}};l.cd=function(a){this.a.remove(a)};function Si(a){null===a.e||a.e.N()}
l.Dc=function(a){null!==this.b&&(wb(this.b,re),this.b=null);null!==this.c&&(wb(ec(this.c),re),this.c=null);this.a=a;null!==a&&(this.b=[x(a,"add",this.gg,!1,this),x(a,"remove",this.hg,!1,this)],this.c={},a.forEach(function(a){this.c[sa(a).toString()]=x(a,"change",this.He,!1,this)},this));Si(this)};l.setMap=function(a){null!==this.d&&(re(this.d),this.d=null);Si(this);this.e=a;null!==a&&(this.d=x(a,"postcompose",this.Yg,!1,this),a.N())};l.Zg=function(a){this.h=a;this.f=Pi(a);Si(this)};l.Wg=k("h");
l.Xg=k("f");function Ti(a){if("function"==typeof a.Ra)return a.Ra();if(na(a))return a.split("");if(ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ec(a)}function Ui(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(ma(a)||na(a))wb(a,b,c);else{var d;if("function"==typeof a.S)d=a.S();else if("function"!=typeof a.Ra)if(ma(a)||na(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=fc(a);else d=void 0;for(var e=Ti(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};function Vi(a,b){this.c={};this.a=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)Wi(this,arguments[d],arguments[d+1])}else if(a){a instanceof Vi?(c=a.S(),d=a.Ra()):(c=fc(a),d=ec(a));for(var e=0;e<c.length;e++)Wi(this,c[e],d[e])}}l=Vi.prototype;l.K=0;l.Zd=0;l.Qa=k("K");l.Ra=function(){Xi(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};l.S=function(){Xi(this);return this.a.concat()};l.ka=function(){return 0==this.K};
l.clear=function(){this.c={};this.Zd=this.K=this.a.length=0};l.remove=function(a){return Yi(this.c,a)?(delete this.c[a],this.K--,this.Zd++,this.a.length>2*this.K&&Xi(this),!0):!1};function Xi(a){if(a.K!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Yi(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.K!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Yi(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}l.get=function(a,b){return Yi(this.c,a)?this.c[a]:b};
function Wi(a,b,c){Yi(a.c,b)||(a.K++,a.a.push(b),a.Zd++);a.c[b]=c}l.P=function(){return new Vi(this)};function Yi(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function $i(a){if(aj){aj=!1;var b=ea.location;if(b){var c=b.href;if(c&&(c=(c=$i(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw aj=!0,Error();}}return a.match(Zi)}var aj=cb;function bj(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function cj(a,b,c){if(la(b))for(var d=0;d<b.length;d++)cj(a,String(b[d]),c);else null!=b&&c.push("\x26",a,""===b?"":"\x3d",encodeURIComponent(String(b)))}function dj(a,b){for(var c in b)cj(c,b[c],a);return a};function ej(a,b){var c;if(a instanceof ej)this.Bb=s(b)?b:a.Bb,fj(this,a.vb),c=a.Jb,gj(this),this.Jb=c,c=a.Za,gj(this),this.Za=c,hj(this,a.$b),c=a.Va,gj(this),this.Va=c,ij(this,a.a.P()),c=a.Ab,gj(this),this.Ab=c;else if(a&&(c=$i(String(a)))){this.Bb=!!b;fj(this,c[1]||"",!0);var d=c[2]||"";gj(this);this.Jb=d?decodeURIComponent(d):"";d=c[3]||"";gj(this);this.Za=d?decodeURIComponent(d):"";hj(this,c[4]);d=c[5]||"";gj(this);this.Va=d?decodeURIComponent(d):"";ij(this,c[6]||"",!0);c=c[7]||"";gj(this);this.Ab=
c?decodeURIComponent(c):""}else this.Bb=!!b,this.a=new jj(null,0,this.Bb)}l=ej.prototype;l.vb="";l.Jb="";l.Za="";l.$b=null;l.Va="";l.Ab="";l.Eg=!1;l.Bb=!1;
l.toString=function(){var a=[],b=this.vb;b&&a.push(kj(b,lj),":");if(b=this.Za){a.push("//");var c=this.Jb;c&&a.push(kj(c,lj),"@");a.push(encodeURIComponent(String(b)));b=this.$b;null!=b&&a.push(":",String(b))}if(b=this.Va)this.Za&&"/"!=b.charAt(0)&&a.push("/"),a.push(kj(b,"/"==b.charAt(0)?mj:nj));(b=this.a.toString())&&a.push("?",b);(b=this.Ab)&&a.push("#",kj(b,oj));return a.join("")};l.P=function(){return new ej(this)};
function fj(a,b,c){gj(a);a.vb=c?b?decodeURIComponent(b):"":b;a.vb&&(a.vb=a.vb.replace(/:$/,""))}function hj(a,b){gj(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.$b=b}else a.$b=null}function ij(a,b,c){gj(a);b instanceof jj?(a.a=b,pj(a.a,a.Bb)):(c||(b=kj(b,qj)),a.a=new jj(b,0,a.Bb))}function rj(a,b,c){gj(a);la(c)||(c=[String(c)]);sj(a.a,b,c)}function gj(a){if(a.Eg)throw Error("Tried to modify a read-only Uri");}
function tj(a){return a instanceof ej?a.P():new ej(a,void 0)}
function uj(a,b){a instanceof ej||(a=tj(a));b instanceof ej||(b=tj(b));var c=a,d=b,e=c.P(),f=!!d.vb;f?fj(e,d.vb):f=!!d.Jb;if(f){var g=d.Jb;gj(e);e.Jb=g}else f=!!d.Za;f?(g=d.Za,gj(e),e.Za=g):f=null!=d.$b;g=d.Va;if(f)hj(e,d.$b);else if(f=!!d.Va)if("/"!=g.charAt(0)&&(c.Za&&!c.Va?g="/"+g:(c=e.Va.lastIndexOf("/"),-1!=c&&(g=e.Va.substr(0,c+1)+g))),".."==g||"."==g)g="";else if(-1!=g.indexOf("./")||-1!=g.indexOf("/.")){for(var c=0==g.lastIndexOf("/",0),g=g.split("/"),h=[],m=0;m<g.length;){var n=g[m++];"."==
n?c&&m==g.length&&h.push(""):".."==n?((1<h.length||1==h.length&&""!=h[0])&&h.pop(),c&&m==g.length&&h.push("")):(h.push(n),c=!0)}g=h.join("/")}f?(c=g,gj(e),e.Va=c):f=""!==d.a.toString();f?ij(e,d.a.toString()?decodeURIComponent(d.a.toString()):""):f=!!d.Ab;f&&(d=d.Ab,gj(e),e.Ab=d);return e}function kj(a,b){return na(a)?encodeURI(a).replace(b,vj):null}function vj(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lj=/[#\/\?@]/g,nj=/[\#\?:]/g,mj=/[\#\?]/g,qj=/[\#\?@]/g,oj=/#/g;
function jj(a,b,c){this.a=a||null;this.c=!!c}function wj(a){if(!a.$&&(a.$=new Vi,a.K=0,a.a))for(var b=a.a.split("\x26"),c=0;c<b.length;c++){var d=b[c].indexOf("\x3d"),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=xj(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}l=jj.prototype;l.$=null;l.K=null;l.Qa=function(){wj(this);return this.K};
l.add=function(a,b){wj(this);this.a=null;a=xj(this,a);var c=this.$.get(a);c||Wi(this.$,a,c=[]);c.push(b);this.K++;return this};l.remove=function(a){wj(this);a=xj(this,a);return Yi(this.$.c,a)?(this.a=null,this.K-=this.$.get(a).length,this.$.remove(a)):!1};l.clear=function(){this.$=this.a=null;this.K=0};l.ka=function(){wj(this);return 0==this.K};l.S=function(){wj(this);for(var a=this.$.Ra(),b=this.$.S(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
l.Ra=function(a){wj(this);var b=[];if(a){var c=a;wj(this);c=xj(this,c);Yi(this.$.c,c)&&(b=Cb(b,this.$.get(xj(this,a))))}else for(a=this.$.Ra(),c=0;c<a.length;c++)b=Cb(b,a[c]);return b};l.get=function(a,b){var c=a?this.Ra(a):[];return 0<c.length?String(c[0]):b};function sj(a,b,c){a.remove(b);0<c.length&&(a.a=null,Wi(a.$,xj(a,b),Db(c)),a.K+=c.length)}
l.toString=function(){if(this.a)return this.a;if(!this.$)return"";for(var a=[],b=this.$.S(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Ra(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="\x3d"+encodeURIComponent(String(d[f])));a.push(g)}return this.a=a.join("\x26")};l.P=function(){var a=new jj;a.a=this.a;this.$&&(a.$=this.$.P(),a.K=this.K);return a};function xj(a,b){var c=String(b);a.c&&(c=c.toLowerCase());return c}
function pj(a,b){b&&!a.c&&(wj(a),a.a=null,Ui(a.$,function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),sj(this,e,a))},a));a.c=b};function yj(a,b,c){Ld.call(this);this.d=a;this.b=c;this.a=b||window;this.c=xa(this.je,this)}u(yj,Ld);l=yj.prototype;l.V=null;l.Yd=!1;l.start=function(){zj(this);this.Yd=!1;var a=Aj(this),b=Bj(this);a&&!b&&this.a.mozRequestAnimationFrame?(this.V=x(this.a,"MozBeforePaint",this.c),this.a.mozRequestAnimationFrame(null),this.Yd=!0):this.V=a&&b?a.call(this.a,this.c):this.a.setTimeout(De(this.c),20)};
function zj(a){if(null!=a.V){var b=Aj(a),c=Bj(a);b&&!c&&a.a.mozRequestAnimationFrame?re(a.V):b&&c?c.call(a.a,a.V):a.a.clearTimeout(a.V)}a.V=null}l.je=function(){this.Yd&&this.V&&re(this.V);this.V=null;this.d.call(this.b,za())};l.F=function(){zj(this);yj.H.F.call(this)};function Aj(a){a=a.a;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function Bj(a){a=a.a;return a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};var Cj;
function Dj(){var a=ea.MessageChannel;"undefined"===typeof a&&("undefined"!==typeof window&&window.postMessage&&window.addEventListener)&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.body.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d=b.location.protocol+"//"+b.location.host,a=xa(function(a){if(a.origin==d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,
!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){c=c.next;var a=c.fe;c.fe=null;a()};return function(a){d.next={fe:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){ea.setTimeout(a,0)}};function Ej(a){He.call(this);this.Gc=a||window;this.Vc=x(this.Gc,"resize",this.vg,!1,this);this.Cb=uc(this.Gc||window)}u(Ej,He);l=Ej.prototype;l.Vc=null;l.Gc=null;l.Cb=null;l.F=function(){Ej.H.F.call(this);this.Vc&&(re(this.Vc),this.Vc=null);this.Cb=this.Gc=null};l.vg=function(){var a=uc(this.Gc||window);a==this.Cb||a&&this.Cb&&a.width==this.Cb.width&&a.height==this.Cb.height||(this.Cb=a,y(this,"resize"))};function Fj(a,b,c,d,e){if(!($a||cb&&ob("525")))return!0;if(Pa&&e)return Gj(a);if(e&&!d||!c&&(17==b||18==b||Pa&&91==b))return!1;if(cb&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if($a&&d&&b==a)return!1;switch(a){case 13:return!($a&&$a&&9<=qb);case 27:return!cb}return Gj(a)}
function Gj(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||cb&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Hj(a){switch(a){case 61:return 187;case 59:return 186;case 224:return 91;case 0:return 224;default:return a}};function Ij(a,b){He.call(this);a&&Jj(this,a,b)}u(Ij,He);l=Ij.prototype;l.wc=null;l.Yc=null;l.Cd=null;l.Zc=null;l.la=-1;l.pb=-1;l.qd=!1;
var Kj={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Lj={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Mj=$a||cb&&ob("525"),Nj=Pa&&bb;
Ij.prototype.a=function(a){cb&&(17==this.la&&!a.vc||18==this.la&&!a.ra||Pa&&91==this.la&&!a.Bd)&&(this.pb=this.la=-1);-1==this.la&&(a.vc&&17!=a.eb?this.la=17:a.ra&&18!=a.eb?this.la=18:a.Bd&&91!=a.eb&&(this.la=91));Mj&&!Fj(a.eb,this.la,a.fb,a.vc,a.ra)?this.handleEvent(a):(this.pb=bb?Hj(a.eb):a.eb,Nj&&(this.qd=a.ra))};Ij.prototype.c=function(a){this.pb=this.la=-1;this.qd=a.ra};
Ij.prototype.handleEvent=function(a){var b=a.M,c,d,e=b.altKey;$a&&"keypress"==a.type?(c=this.pb,d=13!=c&&27!=c?b.keyCode:0):cb&&"keypress"==a.type?(c=this.pb,d=0<=b.charCode&&63232>b.charCode&&Gj(c)?b.charCode:0):Za?(c=this.pb,d=Gj(c)?b.keyCode:0):(c=b.keyCode||this.pb,d=b.charCode||0,Nj&&(e=this.qd),Pa&&(63==d&&224==c)&&(c=191));var f=c,g=b.keyIdentifier;c?63232<=c&&c in Kj?f=Kj[c]:25==c&&a.fb&&(f=9):g&&g in Lj&&(f=Lj[g]);a=f==this.la;this.la=f;b=new Oj(f,d,a,b);b.ra=e;y(this,b)};
function Jj(a,b,c){a.Zc&&Pj(a);a.wc=b;a.Yc=x(a.wc,"keypress",a,c);a.Cd=x(a.wc,"keydown",a.a,c,a);a.Zc=x(a.wc,"keyup",a.c,c,a)}function Pj(a){a.Yc&&(re(a.Yc),re(a.Cd),re(a.Zc),a.Yc=null,a.Cd=null,a.Zc=null);a.wc=null;a.la=-1;a.pb=-1}Ij.prototype.F=function(){Ij.H.F.call(this);Pj(this)};function Oj(a,b,c,d){d&&Zd(this,d,void 0);this.type="key";this.eb=a;this.Ad=b;this.a=c}u(Oj,Yd);function Qj(a,b){He.call(this);this.a=a;var c=ra(this.a)&&1==this.a.nodeType?this.a:this.a?this.a.body:null;this.e=!!c&&Yc(c);this.c=x(this.a,bb?"DOMMouseScroll":"mousewheel",this,b)}u(Qj,He);
Qj.prototype.handleEvent=function(a){var b=0,c=0,d=0;a=a.M;if("mousewheel"==a.type){c=1;if($a||cb&&(Qa||ob("532.0")))c=40;d=Rj(-a.wheelDelta,c);s(a.wheelDeltaX)?(b=Rj(-a.wheelDeltaX,c),c=Rj(-a.wheelDeltaY,c)):c=d}else d=a.detail,100<d?d=3:-100>d&&(d=-3),s(a.axis)&&a.axis===a.HORIZONTAL_AXIS?b=d:c=d;oa(this.b)&&(b=Xb(b,-this.b,this.b));oa(this.d)&&(c=Xb(c,-this.d,this.d));this.e&&(b=-b);b=new Sj(d,a,b,c);y(this,b)};function Rj(a,b){return cb&&(Pa||Ra)&&0!=a%b?a:a/b}
Qj.prototype.F=function(){Qj.H.F.call(this);re(this.c);this.c=null};function Sj(a,b,c,d){b&&Zd(this,b,void 0);this.type="mousewheel";this.detail=a;this.b=c;this.a=d}u(Sj,Yd);function Tj(a,b){He.call(this);this.a=a;this.state=b}u(Tj,He);Tj.prototype.d=function(){return sa(this).toString()};Tj.prototype.g=k("a");function Uj(a,b){this.f=a;this.e=b;this.a=[];this.c=[];this.b={}}Uj.prototype.clear=function(){this.a.length=0;this.c.length=0;ic(this.b)};function Vj(a){var b=a.a,c=a.c,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Wj(a,0));b=a.e(d);delete a.b[b];return d}function Xj(a,b){var c=a.f(b);Infinity!=c&&(a.a.push(b),a.c.push(c),a.b[a.e(b)]=!0,Yj(a,0,a.a.length-1))}Uj.prototype.Qa=function(){return this.a.length};Uj.prototype.ka=function(){return 0===this.a.length};
function Wj(a,b){for(var c=a.a,d=a.c,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var m=2*b+1,n=2*b+2,m=n<e&&d[n]<d[m]?n:m;c[b]=c[m];d[b]=d[m];b=m}c[b]=f;d[b]=g;Yj(a,h,b)}function Yj(a,b,c){var d=a.a;a=a.c;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Zj(a){var b=a.f,c=a.a,d=a.c,e=0,f=c.length,g,h,m;for(h=0;h<f;++h)g=c[h],m=b(g),Infinity==m?delete a.b[a.e(g)]:(d[e]=m,c[e++]=g);c.length=e;d.length=e;for(b=(a.a.length>>1)-1;0<=b;b--)Wj(a,b)};function ak(a,b){Uj.call(this,function(b){return a.apply(null,b)},function(a){return a[0].d()});this.g=b;this.d=0}u(ak,Uj);ak.prototype.h=function(){--this.d;this.g()};function J(a){Me.call(this);this.element=s(a.element)?a.element:null;this.u=s(a.target)?rc(a.target):null;this.b=null;this.h=[]}u(J,Me);J.prototype.F=function(){Dc(this.element);J.H.F.call(this)};J.prototype.a=k("b");J.prototype.d=fa;J.prototype.setMap=function(a){null===this.b||Dc(this.element);0!=this.h.length&&(wb(this.h,re),this.h.length=0);this.b=a;null!==this.b&&((null===this.u?a.B:this.u).appendChild(this.element),this.d!==fa&&this.h.push(x(a,"postrender",this.d,!1,this)),a.N())};function bk(a){a=s(a)?a:{};this.i=yc("UL");var b=vc("DIV",{"class":(s(a.className)?a.className:"ol-attribution")+" ol-unselectable"},this.i);J.call(this,{element:b,target:a.target});this.g=!0;this.f={};this.e={}}u(bk,J);
bk.prototype.d=function(a){a=a.b;if(null===a)this.g&&(Xc(this.element,!1),this.g=!1);else{var b,c,d,e,f,g,h,m,n,p=a.ad,q=lc(a.attributions),r={};b=0;for(c=p.length;b<c;b++)if(d=p[b].layer.a,n=sa(d).toString(),m=d.h,null!==m)for(d=0,e=m.length;d<e;d++)if(g=m[d],h=sa(g).toString(),!(h in q)){f=a.Fc[n];var v;if(v=s(f))a:if(null===g.a)v=!0;else{var z=v=void 0,B=void 0,A=void 0;for(A in f)if(A in g.a)for(B=f[A],v=0,z=g.a[A].length;v<z;++v)if(g.a[A][v].a<=B.d&&g.a[A][v].d>=B.a&&g.a[A][v].b<=B.c&&g.a[A][v].c>=
B.b){v=!0;break a}v=!1}v?(h in r&&delete r[h],q[h]=g):r[h]=g}b=[q,r];a=b[0];b=b[1];for(var E in this.f)E in a?(this.e[E]||(Xc(this.f[E],!0),this.e[E]=!0),delete a[E]):E in b?(this.e[E]&&(Xc(this.f[E],!1),delete this.e[E]),delete b[E]):(Dc(this.f[E]),delete this.f[E],delete this.e[E]);for(E in a)c=yc("LI"),c.innerHTML=a[E].c,this.i.appendChild(c),this.f[E]=c,this.e[E]=!0;for(E in b)c=yc("LI"),c.innerHTML=b[E].c,Xc(c,!1),this.i.appendChild(c),this.f[E]=c;E=!gc(this.e);this.g!=E&&(Xc(this.element,E),
this.g=E)}};function ck(a){a=s(a)?a:{};this.f=yc("UL");var b=vc("DIV",{"class":(s(a.className)?a.className:"ol-logo")+" ol-unselectable"},this.f);J.call(this,{element:b,target:a.target});this.e=!0;this.g={}}u(ck,J);
ck.prototype.d=function(a){a=a.b;if(null===a)this.e&&(Xc(this.element,!1),this.e=!1);else{var b;a=a.Hd;var c=this.g;for(b in c)b in a||(Dc(c[b]),delete c[b]);for(var d in a)if(!(d in c)){b=new Image;b.src=d;var e=a[d];""===e?e=b:(e=vc("A",{href:e,target:"_blank"}),e.appendChild(b));b=vc("LI",void 0,e);this.f.appendChild(b);c[d]=b}d=!gc(a);this.e!=d&&(Xc(this.element,d),this.e=d)}};function dk(a){a=s(a)?a:{};var b=s(a.className)?a.className:"ol-rotate",c=vc("SPAN",{"class":"ol-compass"},s(a.label)?a.label:"\u21e7");this.e=c;var d=vc("SPAN",{role:"tooltip"},s(a.tipLabel)?a.tipLabel:"Reset rotation"),c=vc("BUTTON",{"class":b+"-reset ol-has-tooltip",name:"ResetRotation",type:"button"},d,c),d=new Gf(c);Od(this,d);x(d,sf,dk.prototype.i,!1,this);x(c,["mouseout",Wd],function(){this.blur()},!1);b=vc("DIV",b+" ol-unselectable ol-control",c);J.call(this,{element:b,target:a.target});this.g=
s(a.duration)?a.duration:250;this.f=s(a.autoHide)?a.autoHide:!0;b.style.opacity=this.f?0:1}u(dk,J);dk.prototype.i=function(a){a.a.preventDefault();a=this.b;for(var b=a.a().T(),c=b.e();c<-Math.PI;)c+=2*Math.PI;for(;c>Math.PI;)c-=2*Math.PI;s(c)&&(0<this.g&&a.na(Bh({rotation:c,duration:this.g,easing:wh})),b.n(0))};
dk.prototype.d=function(a){a=a.b;if(null!==a){a=a.view2DState.rotation;var b="rotate("+360*a/(2*Math.PI)+"deg)";this.f&&(this.element.style.opacity=0===a?0:1);this.e.style.msTransform=b;this.e.style.webkitTransform=b;this.e.style.transform=b}};function ek(a){a=s(a)?a:{};var b=s(a.className)?a.className:"ol-zoom",c=s(a.delta)?a.delta:1,d=s(a.zoomInLabel)?a.zoomInLabel:"+",e=s(a.zoomOutLabel)?a.zoomOutLabel:"\u2212",f=s(a.zoomOutTipLabel)?a.zoomOutTipLabel:"Zoom out",g=vc("SPAN",{role:"tooltip"},s(a.zoomInTipLabel)?a.zoomInTipLabel:"Zoom in"),d=vc("BUTTON",{"class":b+"-in ol-has-tooltip",type:"button"},g,d),g=new Gf(d);Od(this,g);x(g,sf,ya(ek.prototype.f,c),!1,this);x(d,["mouseout",Wd],function(){this.blur()},!1);f=vc("SPAN",{role:"tooltip"},
f);e=vc("BUTTON",{"class":b+"-out  ol-has-tooltip",type:"button"},f,e);f=new Gf(e);Od(this,f);x(f,sf,ya(ek.prototype.f,-c),!1,this);x(e,["mouseout",Wd],function(){this.blur()},!1);b=vc("DIV",b+" ol-unselectable ol-control",d,e);J.call(this,{element:b,target:a.target});this.e=s(a.duration)?a.duration:250}u(ek,J);ek.prototype.f=function(a,b){b.a.preventDefault();var c=this.b,d=c.a().T(),e=d.b();s(e)&&(0<this.e&&c.na(Ch({resolution:e,duration:this.e,easing:wh})),c=d.constrainResolution(e,a),d.d(c))};function fk(a){a=s(a)?a:{};var b=new D;(s(a.zoom)?a.zoom:1)&&b.push(new ek(a.zoomOptions));(s(a.rotate)?a.rotate:1)&&b.push(new dk(a.rotateOptions));(s(a.attribution)?a.attribution:1)&&b.push(new bk(a.attributionOptions));(s(a.logo)?a.logo:1)&&b.push(new ck(a.logoOptions));return b};function gk(a,b,c){this.e=a;this.b=b;this.f=c;this.a=[];this.c=this.d=0}gk.prototype.update=function(a,b){this.a.push(a,b,za())};function hk(a,b){var c=a.e,d=a.c,e=a.b,f=Math.log(a.b/a.c)/a.e;return Ah({source:b,duration:f,easing:function(a){return d*(Math.exp(c*a*f)-1)/(e-d)}})};function ik(a){a=s(a)?a:{};this.a=s(a.delta)?a.delta:1;Dh.call(this);this.b=s(a.duration)?a.duration:250}u(ik,Dh);ik.prototype.Ea=function(a){var b=!1,c=a.a;if(a.type==Sf){var b=a.map,d=a.coordinate,c=c.fb?-this.a:this.a,e=b.a().T();Fh(b,e,c,d,this.b);a.preventDefault();b=!0}return!b};function jk(a){Hh.call(this);this.a=(s(a)?a:{}).kinetic;this.d=this.e=null;this.i=s(a.condition)?a.condition:cg;this.f=!1}u(jk,Hh);jk.prototype.ob=function(a){var b=Ih(this.b);if(null!==this.d){this.a&&this.a.update(b[0],b[1]);var c=this.d[0]-b[0],d=b[1]-this.d[1];a=a.map;var e=a.a().T(),f=vh(e),d=c=[c,d],g=f.resolution;d[0]*=g;d[1]*=g;af(c,f.rotation);Ve(c,f.center);c=e.g(c);a.N();e.Da(c)}this.d=b};
jk.prototype.hb=function(a){a=a.map;var b=a.a().T();if(0===this.b.length){var c;if(c=!this.f)if(c=this.a){c=this.a;var d=za()-c.f,e=c.a.length-3;if(c.a[e+2]<d)c=!1;else{for(var f=e-3;0<=f&&c.a[f+2]>d;)f-=3;if(0<=f){var d=c.a[e+2]-c.a[f+2],g=c.a[e]-c.a[f],e=c.a[e+1]-c.a[f+1];c.d=Math.atan2(e,g);c.c=Math.sqrt(g*g+e*e)/d;c=c.c>c.b}else c=!1}}c&&(c=(this.a.b-this.a.c)/this.a.e,e=this.a.d,f=b.a(),this.e=hk(this.a,f),a.na(this.e),f=a.f(f),c=a.pa([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),c=b.g(c),b.Da(c));
sg(b,-1);a.N();return!1}this.d=null;return!0};jk.prototype.gb=function(a){if(0<this.b.length&&this.i(a)){var b=a.map,c=b.a().T();this.d=null;this.g||sg(c,1);b.N();null!==this.e&&Bb(b.C,this.e)&&(c.Da(a.b.view2DState.center),this.e=null);this.a&&(a=this.a,a.a.length=0,a.d=0,a.c=0);this.f=1<this.b.length;return!0}return!1};function kk(a){a=s(a)?a:{};Hh.call(this);this.d=s(a.condition)?a.condition:ag;this.a=void 0}u(kk,Hh);kk.prototype.ob=function(a){if(fg(a)){var b=a.map,c=b.e();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(s(this.a)){a=c-this.a;var d=b.a().T(),e=vh(d);b.N();Eh(b,d,e.rotation-a)}this.a=c}};kk.prototype.hb=function(a){if(!fg(a))return!0;a=a.map;var b=a.a();sg(b,-1);var b=b.T(),c=vh(b).rotation,c=b.constrainRotation(c,0);Eh(a,b,c,void 0,250);return!1};
kk.prototype.gb=function(a){return fg(a)&&ae(a.a)&&this.d(a)?(a=a.map,sg(a.a(),1),a.N(),this.a=void 0,!0):!1};function lk(a){a=s(a)?a:{};yi.call(this,{condition:s(a.condition)?a.condition:dg,style:s(a.style)?a.style:new Mi({stroke:new Ki({color:[0,0,255,1]})})})}u(lk,yi);lk.prototype.Ue=function(){var a=this.h,b=a.a().T(),c=this.L().v(),d=Gg(c),c=b.i(c,a.e()),c=b.constrainResolution(c,0,void 0);Gh(a,b,c,d,200)};function mk(a){Dh.call(this);a=s(a)?a:{};this.a=s(a.condition)?a.condition:Ee(cg,eg);this.b=s(a.pixelDelta)?a.pixelDelta:128}u(mk,Dh);mk.prototype.Ea=function(a){var b=!1;if("key"==a.type){var c=a.a.eb;if(this.a(a)&&(40==c||37==c||39==c||38==c)){var d=a.map,b=d.a(),e=vh(b),f=e.resolution*this.b,g=0,h=0;40==c?h=-f:37==c?g=-f:39==c?g=f:h=f;c=[g,h];af(c,e.rotation);e=b.a();s(e)&&(s(100)&&d.na(Ah({source:e,duration:100,easing:yh})),d=b.g([e[0]+c[0],e[1]+c[1]]),b.Da(d));a.preventDefault();b=!0}}return!b};function nk(a){Dh.call(this);a=s(a)?a:{};this.b=s(a.condition)?a.condition:eg;this.a=s(a.delta)?a.delta:1;this.d=s(a.duration)?a.duration:100}u(nk,Dh);nk.prototype.Ea=function(a){var b=!1;if("key"==a.type){var c=a.a.Ad;if(this.b(a)&&(43==c||45==c)){b=a.map;c=43==c?this.a:-this.a;b.N();var d=b.a().T();Fh(b,d,c,void 0,this.d);a.preventDefault();b=!0}}return!b};function ok(a){a=s(a)?a:{};Dh.call(this);this.a=0;this.g=s(a.duration)?a.duration:250;this.d=null;this.e=this.b=void 0}u(ok,Dh);ok.prototype.Ea=function(a){var b=!1;if("mousewheel"==a.type){var b=a.map,c=a.a;this.d=a.coordinate;this.a+=c.a;s(this.b)||(this.b=za());c=Math.max(80-(za()-this.b),0);ea.clearTimeout(this.e);this.e=ea.setTimeout(xa(this.f,this,b),c);a.preventDefault();b=!0}return!b};
ok.prototype.f=function(a){var b=Xb(this.a,-1,1),c=a.a().T();a.N();Fh(a,c,-b,this.d,this.g);this.a=0;this.d=null;this.e=this.b=void 0};function pk(a){Hh.call(this);a=s(a)?a:{};this.d=null;this.e=void 0;this.a=!1;this.f=0;this.i=s(a.threshold)?a.threshold:0.3}u(pk,Hh);pk.prototype.ob=function(a){var b=0,c=this.b[0],d=this.b[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);s(this.e)&&(b=c-this.e,this.f+=b,!this.a&&Math.abs(this.f)>this.i&&(this.a=!0));this.e=c;a=a.map;c=Sc(a.b);d=Ih(this.b);d[0]-=c.x;d[1]-=c.y;this.d=a.pa(d);this.a&&(c=a.a().T(),d=vh(c),a.N(),Eh(a,c,d.rotation+b,this.d))};
pk.prototype.hb=function(a){if(2>this.b.length){a=a.map;var b=a.a();sg(b,-1);if(this.a){var b=b.T(),c=vh(b).rotation,d=this.d,c=b.constrainRotation(c,0);Eh(a,b,c,d,250)}return!1}return!0};pk.prototype.gb=function(a){return 2<=this.b.length?(a=a.map,this.d=null,this.e=void 0,this.a=!1,this.f=0,this.g||sg(a.a(),1),a.N(),!0):!1};function qk(a){a=s(a)?a:{};Hh.call(this);this.d=null;this.f=s(a.duration)?a.duration:400;this.a=void 0;this.e=1}u(qk,Hh);qk.prototype.ob=function(a){var b=1,c=this.b[0],d=this.b[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);s(this.a)&&(b=this.a/e);this.a=e;1!=b&&(this.e=b);a=a.map;var e=a.a().T(),c=vh(e),d=Sc(a.b),f=Ih(this.b);f[0]-=d.x;f[1]-=d.y;this.d=a.pa(f);a.N();Gh(a,e,c.resolution*b,this.d)};
qk.prototype.hb=function(a){if(2>this.b.length){a=a.map;var b=a.a();sg(b,-1);var b=b.T(),c=vh(b).resolution,d=this.d,e=this.f,c=b.constrainResolution(c,0,this.e-1);Gh(a,b,c,d,e);return!1}return!0};qk.prototype.gb=function(a){return 2<=this.b.length?(a=a.map,this.d=null,this.a=void 0,this.e=1,this.g||sg(a.a(),1),a.N(),!0):!1};function rk(a){a=s(a)?a:{};var b=new D,c=new gk(-0.005,0.05,100);(s(a.altShiftDragRotate)?a.altShiftDragRotate:1)&&b.push(new kk);(s(a.doubleClickZoom)?a.doubleClickZoom:1)&&b.push(new ik({delta:a.zoomDelta,duration:a.zoomDuration}));(s(a.dragPan)?a.dragPan:1)&&b.push(new jk({kinetic:c}));(s(a.pinchRotate)?a.pinchRotate:1)&&b.push(new pk);(s(a.pinchZoom)?a.pinchZoom:1)&&b.push(new qk({duration:a.zoomDuration}));if(s(a.keyboard)?a.keyboard:1)b.push(new mk),b.push(new nk({delta:a.zoomDelta,duration:a.zoomDuration}));
(s(a.mouseWheelZoom)?a.mouseWheelZoom:1)&&b.push(new ok({duration:a.zoomDuration}));(s(a.shiftDragZoom)?a.shiftDragZoom:1)&&b.push(new lk);return b};function sk(a){Je.call(this);this.n=qh(a.projection);this.J=s(a.extent)?a.extent:s(a.projection)?this.n.v():null;this.h=s(a.attributions)?a.attributions:null;this.w=a.logo;this.i=s(a.state)?a.state:1}u(sk,Je);sk.prototype.fd=fa;sk.prototype.v=k("J");sk.prototype.a=k("i");function tk(a,b){a.i=b;a.k()};function K(a){Me.call(this);a=lc(a);a.brightness=s(a.brightness)?a.brightness:0;a.contrast=s(a.contrast)?a.contrast:1;a.hue=s(a.hue)?a.hue:0;a.opacity=s(a.opacity)?a.opacity:1;a.saturation=s(a.saturation)?a.saturation:1;a.visible=s(a.visible)?a.visible:!0;a.maxResolution=s(a.maxResolution)?a.maxResolution:Infinity;a.minResolution=s(a.minResolution)?a.minResolution:0;this.Q(a)}u(K,Me);K.prototype.d=function(){return this.get("brightness")};K.prototype.getBrightness=K.prototype.d;K.prototype.e=function(){return this.get("contrast")};
K.prototype.getContrast=K.prototype.e;K.prototype.f=function(){return this.get("hue")};K.prototype.getHue=K.prototype.f;function uk(a){var b=a.d(),c=a.e(),d=a.f(),e=a.l(),f=a.i(),g=a.La(),h=a.b(),m=a.h(),n=a.g();return{layer:a,brightness:s(b)?Xb(b,-1,1):0,contrast:s(c)?Math.max(c,0):1,hue:s(d)?d:0,opacity:s(e)?Xb(e,0,1):1,saturation:s(f)?Math.max(f,0):1,Ya:g,visible:s(h)?!!h:!0,maxResolution:s(m)?m:Infinity,minResolution:s(n)?Math.max(n,0):0}}K.prototype.h=function(){return this.get("maxResolution")};
K.prototype.getMaxResolution=K.prototype.h;K.prototype.g=function(){return this.get("minResolution")};K.prototype.getMinResolution=K.prototype.g;K.prototype.l=function(){return this.get("opacity")};K.prototype.getOpacity=K.prototype.l;K.prototype.i=function(){return this.get("saturation")};K.prototype.getSaturation=K.prototype.i;K.prototype.b=function(){return this.get("visible")};K.prototype.getVisible=K.prototype.b;K.prototype.n=function(a){this.A("brightness",a)};K.prototype.setBrightness=K.prototype.n;
K.prototype.o=function(a){this.A("contrast",a)};K.prototype.setContrast=K.prototype.o;K.prototype.w=function(a){this.A("hue",a)};K.prototype.setHue=K.prototype.w;K.prototype.u=function(a){this.A("maxResolution",a)};K.prototype.setMaxResolution=K.prototype.u;K.prototype.B=function(a){this.A("minResolution",a)};K.prototype.setMinResolution=K.prototype.B;K.prototype.C=function(a){this.A("opacity",a)};K.prototype.setOpacity=K.prototype.C;K.prototype.J=function(a){this.A("saturation",a)};
K.prototype.setSaturation=K.prototype.J;K.prototype.R=function(a){this.A("visible",a)};K.prototype.setVisible=K.prototype.R;function vk(a){var b=s(a)?a:{};a=lc(b);delete a.layers;b=b.layers;K.call(this,a);this.a=null;x(this,Qe("layers"),this.ng,!1,this);s(b)?la(b)&&(b=new D(Db(b))):b=new D;this.Z(b)}u(vk,K);l=vk.prototype;l.xe=function(){this.b()&&this.k()};
l.ng=function(){null!==this.a&&(wb(ec(this.a),re),this.a=null);var a=this.Wb();if(null!=a){this.a={add:x(a,"add",this.mg,!1,this),remove:x(a,"remove",this.og,!1,this)};var a=a.a,b,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.a[sa(d).toString()]=x(d,["propertychange","change"],this.xe,!1,this)}this.k()};l.mg=function(a){a=a.element;this.a[sa(a).toString()]=x(a,["propertychange","change"],this.xe,!1,this);this.k()};l.og=function(a){a=sa(a.element).toString();re(this.a[a]);delete this.a[a];this.k()};
l.Wb=function(){return this.get("layers")};vk.prototype.getLayers=vk.prototype.Wb;vk.prototype.Z=function(a){this.A("layers",a)};vk.prototype.setLayers=vk.prototype.Z;
vk.prototype.Sc=function(a){var b=s(a)?a:[],c=b.length;this.Wb().forEach(function(a){a.Sc(b)});a=uk(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.brightness=Xb(e.brightness+a.brightness,-1,1),e.contrast*=a.contrast,e.hue+=a.hue,e.opacity*=a.opacity,e.saturation*=a.saturation,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution);return b};vk.prototype.La=ca(1);function xk(a){Xg.call(this,{code:a,units:"m",extent:yk,global:!0})}u(xk,Xg);var zk=6378137*Math.PI,yk=[-zk,-zk,zk,zk],kh=xb("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "),function(a){return new xk(a)});function lh(a,b,c){var d=a.length;c=1<c?c:2;s(b)||(b=2<c?a.slice():Array(d));for(var e=0;e<d;e+=c)b[e]=6378137*Math.PI*a[e]/180,b[e+1]=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));return b}
function mh(a,b,c){var d=a.length;c=1<c?c:2;s(b)||(b=2<c?a.slice():Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/(6378137*Math.PI),b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b}xk.prototype.d=function(a,b){return a/((Math.exp(b[1]/6378137)+Math.exp(-(b[1]/6378137)))/2)};function Ak(a,b){Xg.call(this,{code:a,units:"degrees",extent:Bk,axisOrientation:b,global:!0})}u(Ak,Xg);var Bk=[-180,-90,180,90],nh=[new Ak("CRS:84"),new Ak("EPSG:4326","neu"),new Ak("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Ak("urn:ogc:def:crs:OGC:1.3:CRS84"),new Ak("urn:ogc:def:crs:OGC:2:84"),new Ak("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Ak("urn:x-ogc:def:crs:EPSG:4326","neu")];Ak.prototype.d=aa();function Ck(){fh(kh);fh(nh);jh()};function Dk(a){var b=lc(a);delete b.source;K.call(this,b);this.a=a.source;x(this.a,"change",this.pd,!1,this)}u(Dk,K);Dk.prototype.Sc=function(a){a=s(a)?a:[];a.push(uk(this));return a};Dk.prototype.Z=k("a");Dk.prototype.La=function(){return this.a.i};Dk.prototype.pd=function(){this.k()};function Ek(a,b,c,d,e){He.call(this);this.h=e;this.i=a;this.b=c;this.d=b;this.state=d}u(Ek,He);Ek.prototype.v=k("i");function Fk(a,b,c,d,e,f){Ek.call(this,a,b,c,0,d);this.g=e;this.a=new Image;null!==f&&(this.a.crossOrigin=f);this.f={};this.c=null;this.state=0}u(Fk,Ek);Fk.prototype.e=function(a){if(s(a)){var b=sa(a);if(b in this.f)return this.f[b];a=gc(this.f)?this.a:this.a.cloneNode(!1);return this.f[b]=a}return this.a};Fk.prototype.l=function(){this.state=3;wb(this.c,re);this.c=null;y(this,"change")};Fk.prototype.t=function(){this.state=2;wb(this.c,re);this.c=null;y(this,"change")};
function Gk(a){0==a.state&&(a.state=1,a.c=[oe(a.a,"error",a.l,!1,a),oe(a.a,"load",a.t,!1,a)],a.a.src=a.g)};function Hk(a){this.minZoom=s(a.minZoom)?a.minZoom:0;this.a=a.resolutions;this.maxZoom=this.a.length-1;this.e=s(a.origin)?a.origin:null;this.h=null;s(a.origins)&&(this.h=a.origins);this.b=null;s(a.tileSizes)&&(this.b=a.tileSizes);this.f=s(a.tileSize)?a.tileSize:null===this.b?256:void 0}var Ik=new Lb(0,0,0);l=Hk.prototype;l.Pc=function(a,b,c,d,e){e=Jk(this,a,e);for(a=a.a-1;a>=this.minZoom;){if(b.call(c,a,Kk(this,e,a,d)))return!0;--a}return!1};l.Tc=k("minZoom");
l.rb=function(a){return null===this.e?this.h[a]:this.e};l.ea=function(a){return this.a[a]};l.Uc=function(a,b,c){return a.a<this.maxZoom?(c=Jk(this,a,c),Kk(this,c,a.a+1,b)):null};function Lk(a,b,c,d){Mk(a,b[0],b[1],c,!1,Ik);var e=Ik.x,f=Ik.y;Mk(a,b[2],b[3],c,!0,Ik);return Qb(e,Ik.x,f,Ik.y,d)}function Kk(a,b,c,d){return Lk(a,b,a.ea(c),d)}function Nk(a,b){var c=a.rb(b.a),d=a.ea(b.a),e=a.ja(b.a);return[c[0]+(b.x+0.5)*e*d,c[1]+(b.y+0.5)*e*d]}
function Jk(a,b,c){var d=a.rb(b.a),e=a.ea(b.a);a=a.ja(b.a);var f=d[0]+b.x*a*e;b=d[1]+b.y*a*e;return wg(f,b,f+a*e,b+a*e,c)}function Mk(a,b,c,d,e,f){var g=jg(a.a,d,0),h=d/a.ea(g),m=a.rb(g);a=a.ja(g);b=h*(b-m[0])/(d*a);c=h*(c-m[1])/(d*a);e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));return Mb(g,b,c,f)}l.ja=function(a){return s(this.f)?this.f:this.b[a]};function Ok(a){sk.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection});this.C=s(a.opaque)?a.opaque:!1;this.tileGrid=s(a.tileGrid)?a.tileGrid:null}u(Ok,sk);l=Ok.prototype;l.Kd=ze;l.ud=function(a,b,c,d){var e=!0,f,g,h,m;for(h=d.a;h<=d.d;++h)for(m=d.b;m<=d.c;++m)g=this.nb(c,h,m),a[c]&&a[c][g]||(f=b(c,h,m),null===f?e=!1:(a[c]||(a[c]={}),a[c][g]=f));return e};l.Rc=ca(0);l.nb=Nb;l.qa=k("tileGrid");
function Pk(a,b){var c;if(null===a.tileGrid){if(c=b.g,null===c){c=b.v();for(var d=null===c?360*Vg.degrees/b.f():Math.max(c[2]-c[0],c[3]-c[1]),e=s(void 0)?void 0:256,f=Array((s(void 0)?NaN:42)+1),d=d/e,g=0,h=f.length;g<h;++g)f[g]=d/Math.pow(2,g);c=new Hk({origin:null===c?[0,0]:Fg(c),resolutions:f,tileSize:e});b.g=c}}else c=a.tileGrid;return c}l.uc=function(a,b,c){return Pk(this,c).ja(a)};l.of=fa;function Qk(a,b){Ld.call(this);this.e=a;this.a=b}u(Qk,Ld);Qk.prototype.f=fa;Qk.prototype.t=function(a){2===a.target.state&&Rk(this)};function Rk(a){var b=a.a;b.b()&&1==b.La()&&a.e.f.N()}function Sk(a,b){b.Kd()&&a.tb.push(ya(function(a,b,e){b=sa(a).toString();a.Oe(e.Fc[b])},b))}function Tk(a,b){if(null!=b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[sa(c).toString()]=c}}function Uk(a,b){var c=b.w;s(c)&&(a.Hd[c]="")}
function Vk(a,b,c,d){b=sa(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.a<a.a&&(a.a=d.a),d.d>a.d&&(a.d=d.d),d.b<a.b&&(a.b=d.b),d.c>a.c&&(a.c=d.c)):a[b][c]=d:(a[b]={},a[b][c]=d)}function Wk(a,b,c,d){return function(e,f,g){e=b.Rb(e,f,g,c,d);return a(e)?e:null}}function Xk(a,b,c){return[b*(Math.round(a[0]/b)+c[0]%2/2),b*(Math.round(a[1]/b)+c[1]%2/2)]}
function Yk(a,b,c,d,e,f,g,h,m,n){var p=sa(b).toString();p in a.dc||(a.dc[p]={});var q=a.dc[p];a=a.oi;var r=c.minZoom,v,z,B,A,E,C;s(h)||(h=0);for(C=g;C>=r;--C)for(z=Kk(c,f,C),B=c.ea(C),A=z.a;A<=z.d;++A)for(E=z.b;E<=z.c;++E)g-C<=h?(v=b.Rb(C,A,E,d,e),0==v.state&&(q[v.a.toString()]=!0,v.d()in a.b||Xj(a,[v,p,Nk(c,v.a),B])),s(m)&&m.call(n,v)):b.of(C,A,E)};function Zk(a){a=s(a)?a:{};this.d=s(a.anchor)?a.anchor:[0.5,0.5];this.b=null;this.c=s(a.anchorOrigin)?a.anchorOrigin:"top-left";this.i=s(a.anchorXUnits)?a.anchorXUnits:"fraction";this.l=s(a.anchorYUnits)?a.anchorYUnits:"fraction";var b=s(a.crossOrigin)?a.crossOrigin:null,c=s(a.img)?a.img:null,d=a.src;s(d)&&0!==d.length||null===c||(d=c.src);var e=s(a.src)?0:2,f=$k.mb(),g=f.get(d,b);null===g&&(g=new al(c,d,b,e),f.a[b+":"+d]=g,++f.c);this.a=g;this.t=s(a.size)?a.size:null;Ji.call(this,{opacity:s(a.opacity)?
a.opacity:1,origin:s(a.origin)?a.origin:[0,0],rotation:s(a.rotation)?a.rotation:0,scale:s(a.scale)?a.scale:1,snapToPixel:s(a.snapToPixel)?a.snapToPixel:!0,rotateWithView:s(a.rotateWithView)?a.rotateWithView:!1})}u(Zk,Ji);l=Zk.prototype;
l.Pb=function(){if(null!==this.b)return this.b;var a=this.d,b=this.Eb();if("fraction"==this.i||"fraction"==this.l){if(null===b)return null;a=this.d.slice();"fraction"==this.i&&(a[0]*=b[0]);"fraction"==this.l&&(a[1]*=b[1])}if("top-left"!=this.c){if(null===b)return null;a===this.d&&(a=this.d.slice());if("top-right"==this.c||"bottom-right"==this.c)a[0]=-a[0]+b[0];if("bottom-left"==this.c||"bottom-right"==this.c)a[1]=-a[1]+b[1]}return this.b=a};l.Yb=function(){return this.a.a};l.Ld=function(){return this.a.c};
l.Te=function(){var a=this.a;if(null===a.d)if(a.g){var b=a.e[0],c=a.e[1],d=td(b,c);d.fillRect(0,0,b,c);a.d=d.canvas}else a.d=a.a;return a.d};l.Ch=function(){return this.a.f};l.Eb=function(){return null===this.t?this.a.e:this.t};l.Fd=function(a,b){return x(this.a,"change",a,!1,b)};l.Md=function(){var a=this.a;if(0==a.c){a.c=1;a.b=[oe(a.a,"error",a.h,!1,a),oe(a.a,"load",a.i,!1,a)];try{a.a.src=a.f}catch(b){a.h()}}};l.Wd=function(a,b){pe(this.a,"change",a,!1,b)};
function al(a,b,c,d){He.call(this);this.d=null;this.a=null===a?new Image:a;null!==c&&(this.a.crossOrigin=c);this.b=null;this.c=d;this.e=null;this.f=b;this.g=!1}u(al,He);al.prototype.h=function(){this.c=3;wb(this.b,re);this.b=null;y(this,"change")};al.prototype.i=function(){this.c=2;this.e=[this.a.width,this.a.height];wb(this.b,re);this.b=null;var a=td(1,1);a.drawImage(this.a,0,0);try{a.getImageData(0,0,1,1)}catch(b){this.g=!0}y(this,"change")};function $k(){this.a={};this.c=0;this.b=32}ga($k);
$k.prototype.clear=function(){this.a={};this.c=0};$k.prototype.get=function(a,b){var c=b+":"+a;return c in this.a?this.a[c]:null};function bl(a,b,c,d,e,f,g,h){od(a);0===b&&0===c||qd(a,b,c);1==d&&1==e||rd(a,d,e);0!==f&&sd(a,f);0===g&&0===h||qd(a,g,h);return a}function cl(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[4]==b[4]&&a[5]==b[5]&&a[12]==b[12]&&a[13]==b[13]}function dl(a,b,c){var d=a[1],e=a[5],f=a[13],g=b[0];b=b[1];c[0]=a[0]*g+a[4]*b+a[12];c[1]=d*g+e*b+f;return c};function el(a,b){Ld.call(this);this.f=b;this.b={}}u(el,Ld);
function fl(a){var b=a.view2DState,c=a.he;bl(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);a=a.We;var b=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],m=c[6],n=c[7],p=c[8],q=c[9],r=c[10],v=c[11],z=c[12],B=c[13],A=c[14],c=c[15],E=b*h-d*g,C=b*m-e*g,M=b*n-f*g,Q=d*m-e*h,ha=d*n-f*h,R=e*n-f*m,qa=p*B-q*z,Ea=p*A-r*z,Ta=p*c-v*z,Wa=q*A-r*B,ia=q*c-v*B,ab=r*c-v*A,Va=E*ab-C*ia+M*Wa+Q*Ta-ha*Ea+R*qa;0!=Va&&(Va=1/Va,a[0]=(h*ab-m*ia+n*Wa)*Va,a[1]=(-d*ab+e*ia-f*Wa)*Va,a[2]=
(B*R-A*ha+c*Q)*Va,a[3]=(-q*R+r*ha-v*Q)*Va,a[4]=(-g*ab+m*Ta-n*Ea)*Va,a[5]=(b*ab-e*Ta+f*Ea)*Va,a[6]=(-z*R+A*M-c*C)*Va,a[7]=(p*R-r*M+v*C)*Va,a[8]=(g*ia-h*Ta+n*qa)*Va,a[9]=(-b*ia+d*Ta-f*qa)*Va,a[10]=(z*ha-B*M+c*E)*Va,a[11]=(-p*ha+q*M-v*E)*Va,a[12]=(-g*Wa+h*Ea-m*qa)*Va,a[13]=(b*Wa-d*Ea+e*qa)*Va,a[14]=(-z*Q+B*C-A*E)*Va,a[15]=(p*Q-q*C+r*E)*Va)}el.prototype.Jc=function(a){return new Qk(this,a)};el.prototype.F=function(){bc(this.b,function(a){Pd(a)});el.H.F.call(this)};
function gl(a,b){var c=sa(b).toString();if(c in a.b)return a.b[c];var d=a.Jc(b);return a.b[c]=d}el.prototype.gd=fa;el.prototype.w=function(a,b){for(var c in this.b)if(!(null!==b&&c in b.Ed)){var d=this.b[c];delete this.b[c];Pd(d)}};function hl(a){a.tb.push(function(){var a=$k.mb();if(a.c>a.b){var c=0,d,e;for(d in a.a)e=a.a[d],0!==(c++&3)||te(e)||(delete a.a[d],--a.c)}})}function il(a,b){for(var c in a.b)if(!(c in b.Ed)){b.tb.push(xa(a.w,a));break}};function jl(a){Dk.call(this,a)}u(jl,Dk);function L(a){Dk.call(this,a)}u(L,Dk);L.prototype.ca=function(){return this.get("preload")};L.prototype.getPreload=L.prototype.ca;L.prototype.wa=function(a){this.A("preload",a)};L.prototype.setPreload=L.prototype.wa;L.prototype.ga=function(){return this.get("useInterimTilesOnError")};L.prototype.getUseInterimTilesOnError=L.prototype.ga;L.prototype.Ma=function(a){this.A("useInterimTilesOnError",a)};L.prototype.setUseInterimTilesOnError=L.prototype.Ma;function N(a){a=s(a)?a:{};var b=lc(a);delete b.style;Dk.call(this,b);this.jb=null;this.wa=void 0;s(a.style)&&this.ga(a.style)}u(N,Dk);N.prototype.wb=k("jb");N.prototype.ec=k("wa");N.prototype.ga=function(a){this.jb=a;this.wa=Pi(a);this.k()};function kl(a,b,c,d,e){this.w={};this.b=a;this.l=b;this.h=c;this.f=d;this.wb=e;this.g=this.a=this.c=this.ca=this.Xa=this.Ka=null;this.Lb=this.ga=this.u=this.R=this.J=this.C=0;this.La=!1;this.i=this.Mb=0;this.wa=!1;this.Y=0;this.d="";this.n=this.B=this.Ma=this.Ya=0;this.Z=this.o=this.t=null;this.e=[];this.jb=kd()}
function ll(a,b){if(null!==a.g){var c=Kh(b,2,a.f,a.e),d=a.b,e=a.jb,f=d.globalAlpha;1!=a.u&&(d.globalAlpha=f*a.u);var g=a.Mb;a.La&&(g+=a.wb);var h,m;h=0;for(m=c.length;h<m;h+=2){var n=c[h]-a.C,p=c[h+1]-a.J;a.wa&&(n=n+0.5|0,p=p+0.5|0);if(0!==g||1!=a.i){var q=n+a.C,r=p+a.J;bl(e,q,r,a.i,a.i,g,-q,-r);d.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}d.drawImage(a.g,a.ga,a.Lb,a.Y,a.R,n,p,a.Y,a.R)}0===g&&1==a.i||d.setTransform(1,0,0,1,0,0);1!=a.u&&(d.globalAlpha=f)}}
function ml(a,b,c,d){var e=0;if(null!==a.Z&&""!==a.d){null===a.t||nl(a,a.t);null===a.o||pl(a,a.o);var f=a.Z,g=a.b,h=a.ca;null===h?(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.ca={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline}):(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline));b=Kh(b,d,a.f,a.e);for(f=a.b;e<c;e+=d){g=b[e]+a.Ya;
h=b[e+1]+a.Ma;if(0!==a.B||1!=a.n){var m=bl(a.jb,g,h,a.n,a.n,a.B,-g,-h);f.setTransform(m[0],m[1],m[4],m[5],m[12],m[13])}null===a.o||f.strokeText(a.d,g,h);null===a.t||f.fillText(a.d,g,h)}0===a.B&&1==a.n||f.setTransform(1,0,0,1,0,0)}}function ql(a,b,c,d,e){a=a.b;a.moveTo(b[c],b[c+1]);var f;for(f=c+2;f<d;f+=2)a.lineTo(b[f],b[f+1]);e&&a.lineTo(b[c],b[c+1]);return d}function rl(a,b,c,d){var e=a.b,f,g;f=0;for(g=d.length;f<g;++f)c=ql(a,b,c,d[f],!0),e.closePath();return c}l=kl.prototype;
l.Lc=function(a,b){var c=a.toString(),d=this.w[c];s(d)?d.push(b):this.w[c]=[b]};l.oc=function(a){if(Lg(this.h,a.v())){if(null!==this.c||null!==this.a){null===this.c||nl(this,this.c);null===this.a||pl(this,this.a);var b=Ph(a,this.f,this.e),c=b[2]-b[0],d=b[3]-b[1],c=Math.sqrt(c*c+d*d),d=this.b;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);null===this.c||d.fill();null===this.a||d.stroke()}""!==this.d&&ml(this,a.Jd(),2,2)}};
l.Mc=function(a,b){var c=a.L();if(null!=c&&Lg(this.h,c.v())){var d=b.a;s(d)||(d=0);this.Lc(d,function(a){a.Ia(b.d,b.b);a.bc(b.e);a.ua(b.c);sl[c.G()].call(a,c,null)})}};l.ke=function(a,b){var c=a.a,d,e;d=0;for(e=c.length;d<e;++d){var f=c[d];sl[f.G()].call(this,f,b)}};l.tc=function(a){var b=a.j;a=a.a;null===this.g||ll(this,b);""!==this.d&&ml(this,b,b.length,a)};l.rc=function(a){var b=a.j;a=a.a;null===this.g||ll(this,b);""!==this.d&&ml(this,b,b.length,a)};
l.pc=function(a){if(Lg(this.h,a.v())){if(null!==this.a){pl(this,this.a);var b=Ph(a,this.f,this.e),c=this.b;c.beginPath();ql(this,b,0,b.length,!1);c.stroke()}""!==this.d&&(a=tl(a),ml(this,a,2,2))}};l.qc=function(a){var b=a.v();if(Lg(this.h,b)){if(null!==this.a){pl(this,this.a);var b=Ph(a,this.f,this.e),c=this.b;c.beginPath();var d=a.d,e=0,f,g;f=0;for(g=d.length;f<g;++f)e=ql(this,b,e,d[f],!1);c.stroke()}""!==this.d&&(a=ul(a),ml(this,a,a.length,2))}};
l.Ob=function(a){if(Lg(this.h,a.v())){var b;if(null!==this.a||null!==this.c){null===this.c||nl(this,this.c);null===this.a||pl(this,this.a);b=Ph(a,this.f,this.e);var c=this.b;c.beginPath();rl(this,b,0,a.d);null===this.c||c.fill();null===this.a||c.stroke()}""!==this.d&&(a=ri(a),ml(this,a,2,2))}};
l.sc=function(a){if(Lg(this.h,a.v())){var b;if(null!==this.a||null!==this.c){null===this.c||nl(this,this.c);null===this.a||pl(this,this.a);b=Ph(a,this.f,this.e);var c=this.b,d=a.d,e=0,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];c.beginPath();e=rl(this,b,e,h);null===this.c||c.fill();null===this.a||c.stroke()}}""!==this.d&&(a=vl(a),ml(this,a,a.length,2))}};
function wl(a){var b=xb(fc(a.w),Number);Hb(b);var c,d,e,f,g;c=0;for(d=b.length;c<d;++c)for(e=a.w[b[c].toString()],f=0,g=e.length;f<g;++f)e[f](a)}function nl(a,b){var c=a.b,d=a.Ka;null===d?(c.fillStyle=b.fillStyle,a.Ka={fillStyle:b.fillStyle}):d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle)}
function pl(a,b){var c=a.b,d=a.Xa;null===d?(c.lineCap=b.lineCap,Cd&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.Xa={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle}):(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),Cd&&!Jb(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=
b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle))}
l.Ia=function(a,b){if(null===a)this.c=null;else{var c=a.a;this.c={fillStyle:Ci(null===c?Fi:c)}}if(null===b)this.a=null;else{var c=b.a,d=b.b,e=b.d,f=b.e,g=b.c,h=b.f;this.a={lineCap:s(d)?d:"round",lineDash:null!=e?e:Gi,lineJoin:s(f)?f:"round",lineWidth:this.l*(s(g)?g:1),miterLimit:s(h)?h:10,strokeStyle:Ci(null===c?Hi:c)}}};
l.bc=function(a){if(null===a)this.g=null;else{var b=a.Pb(),c=a.Yb(1),d=a.o,e=a.Eb();this.C=b[0];this.J=b[1];this.R=e[1];this.g=c;this.u=a.n;this.ga=d[0];this.Lb=d[1];this.La=a.w;this.Mb=a.e;this.i=a.f;this.wa=a.u;this.Y=e[0]}};
l.ua=function(a){if(null===a)this.d="";else{var b=a.c;null===b?this.t=null:(b=b.a,this.t={fillStyle:Ci(null===b?Fi:b)});var c=a.e;if(null===c)this.o=null;else{var b=c.a,d=c.b,e=c.d,f=c.e,g=c.c,c=c.f;this.o={lineCap:s(d)?d:"round",lineDash:null!=e?e:Gi,lineJoin:s(f)?f:"round",lineWidth:this.l*(s(g)?g:1),miterLimit:s(c)?c:10,strokeStyle:Ci(null===b?Hi:b)}}var b=a.a,d=a.i,e=a.l,f=a.b,g=a.d,c=a.f,h=a.h;a=a.g;this.Z={font:s(b)?b:"10px sans-serif",textAlign:s(h)?h:"center",textBaseline:s(a)?a:"middle"};
this.d=s(c)?c:"";this.Ya=s(d)?this.l*d:0;this.Ma=s(e)?this.l*e:0;this.B=s(f)?f:0;this.n=this.l*(s(g)?g:1)}};var sl={Point:kl.prototype.tc,LineString:kl.prototype.pc,Polygon:kl.prototype.Ob,MultiPoint:kl.prototype.rc,MultiLineString:kl.prototype.qc,MultiPolygon:kl.prototype.sc,GeometryCollection:kl.prototype.ke,Circle:kl.prototype.oc};function xl(a,b){Qk.call(this,a,b);this.C=kd()}u(xl,Qk);xl.prototype.n=function(a,b,c){yl(this,"precompose",c,a,void 0);var d=this.o();if(null!==d){var e=this.l();c.globalAlpha=b.opacity;if(0===a.view2DState.rotation){b=e[13];var f=d.width*e[0],g=d.height*e[5];c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[12]),Math.round(b),Math.round(f),Math.round(g))}else c.setTransform(e[0],e[1],e[4],e[5],e[12],e[13]),c.drawImage(d,0,0),c.setTransform(1,0,0,1,0,0)}yl(this,"postcompose",c,a,void 0)};
function yl(a,b,c,d,e){var f=a.a;ue(f.ha,b)&&(a=s(e)?e:zl(a,d),a=new kl(c,d.pixelRatio,d.extent,a,d.view2DState.rotation),y(f,new ti(b,f,a,d,c,null)),wl(a))}function zl(a,b){var c=b.view2DState,d=b.pixelRatio;return bl(a.C,d*b.size[0]/2,d*b.size[1]/2,d/c.resolution,-d/c.resolution,-c.rotation,-c.center[0],-c.center[1])}
var Al=function(){var a=null,b=null;return function(c){if(null===a){a=td(1,1);b=a.createImageData(1,1);var d=b.data;d[0]=42;d[1]=84;d[2]=126;d[3]=255}var d=a.canvas,e=c[0]<=d.width&&c[1]<=d.height;e||(d.width=c[0],d.height=c[1],d=c[0]-1,c=c[1]-1,a.putImageData(b,d,c),c=a.getImageData(d,c,1,1),e=Jb(b.data,c.data));return e}}();function Bl(a){sk.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.t=s(a.resolutions)?a.resolutions:null}u(Bl,sk);function Cl(a,b){null===a.t||(b=a.t[jg(a.t,b,0)]);return b};function Dl(a,b){xl.call(this,a,b);this.c=null;this.b=kd()}u(Dl,xl);Dl.prototype.f=function(a,b,c,d){var e=this.a;return e.a.fd(b.extent,b.view2DState.resolution,b.view2DState.rotation,a,function(a){return c.call(d,a,e)})};Dl.prototype.o=function(){return null===this.c?null:this.c.e()};Dl.prototype.l=k("b");
Dl.prototype.d=function(a){var b=a.pixelRatio,c=a.view2DState,d=c.center,e=c.resolution,f=c.rotation,g=this.a.a,h=a.U;h[0]||h[1]||(c=g.Xb(a.extent,e,b,c.projection),null!==c&&(h=c.state,0==h?(oe(c,"change",this.t,!1,this),Gk(c)):2==h&&(this.c=c)));if(null!==this.c){var c=this.c,h=c.v(),m=c.d,n=c.b,e=b*m/(e*n);bl(this.b,b*a.size[0]/2,b*a.size[1]/2,e,e,f,n*(h[0]-d[0])/m,n*(d[1]-h[3])/m);Tk(a.attributions,c.h);Uk(a,g)}};function El(a,b){xl.call(this,a,b);this.c=this.h=null;this.i=!1;this.w=null;this.u=kd();this.B=NaN;this.g=this.b=null}u(El,xl);El.prototype.o=k("h");El.prototype.l=k("u");
El.prototype.d=function(a){var b=a.pixelRatio,c=a.view2DState,d=c.projection,e=this.a,f=e.a,g=Pk(f,d),h=f.Rc(),m=jg(g.a,c.resolution,0),n=f.uc(m,a.pixelRatio,d),p=g.ea(m),q=p/(n/g.ja(m)),r=c.center,v;p==c.resolution?(r=Xk(r,p,a.size),v=Hg(r,p,c.rotation,a.size)):v=a.extent;var z=Lk(g,v,p),B=n*(z.d-z.a+1),A=n*(z.c-z.b+1),E,C;null===this.h?(C=td(B,A),this.h=C.canvas,this.c=[B,A],this.w=C,this.i=!Al(this.c)):(E=this.h,C=this.w,this.c[0]<B||this.c[1]<A||this.i&&(this.c[0]>B||this.c[1]>A)?(E.width=B,E.height=
A,this.c=[B,A],this.i=!Al(this.c),this.b=null):(B=this.c[0],A=this.c[1],m==this.B&&this.b.a<=z.a&&z.d<=this.b.d&&this.b.b<=z.b&&z.c<=this.b.c||(this.b=null)));var M,Q;null===this.b?(B/=n,A/=n,M=z.a-Math.floor((B-(z.d-z.a+1))/2),Q=z.b-Math.floor((A-(z.c-z.b+1))/2),this.B=m,this.b=new Pb(M,M+B-1,Q,Q+A-1),this.g=Array(B*A),A=this.b):(A=this.b,B=A.d-A.a+1);E={};E[m]={};var ha=[],R=xa(f.ud,f,E,Wk(function(a){return null!==a&&2==a.state},f,b,d)),qa=e.ga();s(qa)||(qa=!0);var Ea=ug(),Ta=new Pb(0,0,0,0),Wa,
ia,ab;for(Q=z.a;Q<=z.d;++Q)for(ab=z.b;ab<=z.c;++ab)ia=f.Rb(m,Q,ab,b,d),M=ia.state,2==M||4==M||3==M&&!qa?E[m][ia.a.toString()]=ia:(Wa=g.Pc(ia.a,R,null,Ta,Ea),Wa||(ha.push(ia),Wa=g.Uc(ia.a,Ta,Ea),null===Wa||R(m+1,Wa)));R=0;for(Wa=ha.length;R<Wa;++R)ia=ha[R],Q=n*(ia.a.x-A.a),ab=n*(A.c-ia.a.y),C.clearRect(Q,ab,n,n);ha=xb(fc(E),Number);Hb(ha);var Va=f.C,bd=Jg(Jk(g,new Lb(m,A.a,A.c),Ea)),hc,Hc,ci,Og,Ze,wk,R=0;for(Wa=ha.length;R<Wa;++R)if(hc=ha[R],n=f.uc(hc,b,d),Og=E[hc],hc==m)for(ci in Og)ia=Og[ci],Hc=
(ia.a.y-A.b)*B+(ia.a.x-A.a),this.g[Hc]!=ia&&(Q=n*(ia.a.x-A.a),ab=n*(A.c-ia.a.y),M=ia.state,4!=M&&(3!=M||qa)&&Va||C.clearRect(Q,ab,n,n),2==M&&C.drawImage(ia.b(),h,h,n,n,Q,ab,n,n),this.g[Hc]=ia);else for(ci in hc=g.ea(hc)/p,Og)for(ia=Og[ci],Hc=Jk(g,ia.a,Ea),Q=(Hc[0]-bd[0])/q,ab=(bd[1]-Hc[3])/q,wk=hc*n,Ze=hc*n,M=ia.state,4!=M&&Va||C.clearRect(Q,ab,wk,Ze),2==M&&C.drawImage(ia.b(),h,h,n,n,Q,ab,wk,Ze),ia=Kk(g,Hc,m,Ta),M=Math.max(ia.a,A.a),ab=Math.min(ia.d,A.d),Q=Math.max(ia.b,A.b),ia=Math.min(ia.c,A.c);M<=
ab;++M)for(Ze=Q;Ze<=ia;++Ze)Hc=(Ze-A.b)*B+(M-A.a),this.g[Hc]=void 0;Vk(a.Fc,f,m,z);Yk(a,f,g,b,d,v,m,e.ca());Sk(a,f);Uk(a,f);bl(this.u,b*a.size[0]/2,b*a.size[1]/2,b*q/c.resolution,b*q/c.resolution,c.rotation,(bd[0]-r[0])/q,(r[1]-bd[1])/q)};var Fl=["Polygon","LineString","Image","Text"];function Gl(a,b,c){this.ca=a;this.Y=b;this.e=0;this.resolution=c;this.J=this.C=null;this.c=[];this.coordinates=[];this.Ka=kd();this.a=[];this.Z=[];this.d=ug();this.Xa=kd()}
function Hl(a,b,c,d,e,f){var g=a.coordinates.length,h=a.xd(),m=[b[c],b[c+1]],n=[NaN,NaN],p=!0,q,r,v;for(q=c+e;q<d;q+=e){n[0]=b[q];n[1]=b[q+1];v=h[1];var z=h[2],B=h[3],A=n[0],E=n[1],C=0;A<h[0]?C=C|16:A>z&&(C=C|4);E<v?C|=8:E>B&&(C|=2);0===C&&(C=1);v=C;v!==r?(p&&(a.coordinates[g++]=m[0],a.coordinates[g++]=m[1]),a.coordinates[g++]=n[0],a.coordinates[g++]=n[1],p=!1):1===v?(a.coordinates[g++]=n[0],a.coordinates[g++]=n[1],p=!1):p=!0;m[0]=n[0];m[1]=n[1];r=v}q===c+e&&(a.coordinates[g++]=m[0],a.coordinates[g++]=
m[1]);f&&(a.coordinates[g++]=b[c],a.coordinates[g++]=b[c+1]);return g}function Il(a,b,c){a.C=[0,b,c,0];a.c.push(a.C);a.J=[0,b,c,0];a.a.push(a.J)}
function Jl(a,b,c,d,e,f,g,h){var m;cl(d,a.Ka)?m=a.Z:(m=Kh(a.coordinates,2,d,a.Z),nd(a.Ka,d));d=0;var n=g.length,p=0,q;for(a=a.Xa;d<n;){var r=g[d],v,z,B,A,E;switch(r[0]){case 0:q=r[2];q=sa(q).toString();s(w(f,q))?d=r[3]:++d;break;case 1:b.beginPath();++d;break;case 2:q=m[p];z=m[p+1];var C=m[p+2]-q,r=m[p+3]-z;b.arc(q,z,Math.sqrt(C*C+r*r),0,2*Math.PI,!0);p+=4;++d;break;case 3:b.closePath();++d;break;case 4:p=r[1];q=r[2];v=r[3];A=r[4]*c;var M=r[5]*c,Q=r[6];B=r[7];var ha=r[8],R=r[9];z=r[11];var C=r[12],
qa=r[13],Ea=r[14];for(r[10]&&(z+=e);p<q;p+=2){r=m[p]-A;E=m[p+1]-M;qa&&(r=r+0.5|0,E=E+0.5|0);if(1!=C||0!==z){var Ta=r+A,Wa=E+M;bl(a,Ta,Wa,C,C,z,-Ta,-Wa);b.setTransform(a[0],a[1],a[4],a[5],a[12],a[13])}Ta=b.globalAlpha;1!=B&&(b.globalAlpha=Ta*B);b.drawImage(v,ha,R,Ea,Q,r,E,Ea*c,Q*c);1!=B&&(b.globalAlpha=Ta);1==C&&0===z||b.setTransform(1,0,0,1,0,0)}++d;break;case 5:p=r[1];q=r[2];A=r[3];M=r[4]*c;Q=r[5]*c;z=r[6];C=r[7]*c;v=r[8];for(B=r[9];p<q;p+=2){r=m[p]+M;E=m[p+1]+Q;if(1!=C||0!==z)bl(a,r,E,C,C,z,-r,
-E),b.setTransform(a[0],a[1],a[4],a[5],a[12],a[13]);B&&b.strokeText(A,r,E);v&&b.fillText(A,r,E);1==C&&0===z||b.setTransform(1,0,0,1,0,0)}++d;break;case 6:if(s(h)&&(z=r[1],q=r[2],q=h(z,q)))return q;++d;break;case 7:b.fill();++d;break;case 8:p=r[1];q=r[2];b.moveTo(m[p],m[p+1]);for(p+=2;p<q;p+=2)b.lineTo(m[p],m[p+1]);++d;break;case 9:b.fillStyle=r[1];++d;break;case 10:b.strokeStyle=r[1];b.lineWidth=r[2]*c;b.lineCap=r[3];b.lineJoin=r[4];b.miterLimit=r[5];Cd&&b.setLineDash(r[6]);++d;break;case 11:b.font=
r[1];b.textAlign=r[2];b.textBaseline=r[3];++d;break;case 12:b.stroke();++d;break;default:++d}}}function Kl(a){var b=a.a;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[3]=c;e=a.a;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function Ll(a,b,c){a.C[3]=a.c.length;a.C=null;a.J[3]=a.a.length;a.J=null;b=[6,b,c];a.c.push(b);a.a.push(b)}Gl.prototype.ed=fa;Gl.prototype.xd=k("Y");Gl.prototype.v=k("d");
function Ml(a,b,c){Gl.call(this,a,b,c);this.g=this.R=null;this.w=this.o=this.n=this.t=this.l=this.B=this.u=this.i=this.h=this.f=this.b=void 0}u(Ml,Gl);
Ml.prototype.tc=function(a,b){if(null!==this.g){Dg(this.d,a.v());Il(this,a,b);var c=a.j,d=this.coordinates.length,c=Hl(this,c,0,c.length,a.a,!1);this.c.push([4,d,c,this.g,this.b,this.f,this.h,this.i,this.u,this.B,this.l,this.t,this.n,this.o,this.w]);this.a.push([4,d,c,this.R,this.b,this.f,this.h,this.i,this.u,this.B,this.l,this.t,this.n,this.o,this.w]);Ll(this,a,b)}};
Ml.prototype.rc=function(a,b){if(null!==this.g){Dg(this.d,a.v());Il(this,a,b);var c=a.j,d=this.coordinates.length,c=Hl(this,c,0,c.length,a.a,!1);this.c.push([4,d,c,this.g,this.b,this.f,this.h,this.i,this.u,this.B,this.l,this.t,this.n,this.o,this.w]);this.a.push([4,d,c,this.R,this.b,this.f,this.h,this.i,this.u,this.B,this.l,this.t,this.n,this.o,this.w]);Ll(this,a,b)}};
Ml.prototype.ed=function(){Kl(this);this.f=this.b=void 0;this.g=this.R=null;this.w=this.o=this.t=this.l=this.B=this.u=this.i=this.n=this.h=void 0};Ml.prototype.bc=function(a){var b=a.Pb(),c=a.Eb(),d=a.Te(1),e=a.Yb(1),f=a.o;this.b=b[0];this.f=b[1];this.R=d;this.g=e;this.h=c[1];this.i=a.n;this.u=f[0];this.B=f[1];this.l=a.w;this.t=a.e;this.n=a.f;this.o=a.u;this.w=c[0]};
function Nl(a,b,c){Gl.call(this,a,b,c);this.b={lc:void 0,gc:void 0,hc:null,ic:void 0,jc:void 0,kc:void 0,Dd:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Nl,Gl);function Ol(a,b,c,d,e){var f=a.coordinates.length;b=Hl(a,b,c,d,e,!1);f=[8,f,b];a.c.push(f);a.a.push(f);return d}l=Nl.prototype;l.xd=function(){var a=this.Y;this.e&&(a=xg(a,this.resolution*(this.e+1)/2));return a};
function Pl(a){var b=a.b,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineJoin,g=b.lineWidth,h=b.miterLimit;b.lc==c&&b.gc==d&&Jb(b.hc,e)&&b.ic==f&&b.jc==g&&b.kc==h||(b.Dd!=a.coordinates.length&&(a.c.push([12]),b.Dd=a.coordinates.length),a.c.push([10,c,g,d,f,h,e],[1]),b.lc=c,b.gc=d,b.hc=e,b.ic=f,b.jc=g,b.kc=h)}
l.pc=function(a,b){var c=this.b,d=c.lineWidth;s(c.strokeStyle)&&s(d)&&(Dg(this.d,a.v()),Pl(this),Il(this,a,b),this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash],[1]),c=a.j,Ol(this,c,0,c.length,a.a),this.a.push([12]),Ll(this,a,b))};
l.qc=function(a,b){var c=this.b,d=c.lineWidth;if(s(c.strokeStyle)&&s(d)){Dg(this.d,a.v());Pl(this);Il(this,a,b);this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash],[1]);var c=a.d,d=a.j,e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Ol(this,d,f,c[g],e);this.a.push([12]);Ll(this,a,b)}};l.ed=function(){this.b.Dd!=this.coordinates.length&&this.c.push([12]);Kl(this);this.b=null};
l.Ia=function(a,b){var c=b.a;this.b.strokeStyle=Ci(null===c?Hi:c);c=b.b;this.b.lineCap=s(c)?c:"round";c=b.d;this.b.lineDash=null===c?Gi:c;c=b.e;this.b.lineJoin=s(c)?c:"round";c=b.c;this.b.lineWidth=s(c)?c:1;c=b.f;this.b.miterLimit=s(c)?c:10;this.e=Math.max(this.e,this.b.lineWidth)};
function Ql(a,b,c){Gl.call(this,a,b,c);this.b={ie:void 0,lc:void 0,gc:void 0,hc:null,ic:void 0,jc:void 0,kc:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(Ql,Gl);
function Rl(a,b,c,d,e){var f=a.b,g=[1];a.c.push(g);a.a.push(g);var h,g=0;for(h=d.length;g<h;++g){var m=d[g],n=a.coordinates.length;c=Hl(a,b,c,m,e,!0);c=[8,n,c];n=[3];a.c.push(c,n);a.a.push(c,n);c=m}b=[7];a.a.push(b);s(f.fillStyle)&&a.c.push(b);s(f.strokeStyle)&&(f=[12],a.c.push(f),a.a.push(f));return c}l=Ql.prototype;
l.oc=function(a,b){var c=this.b,d=c.strokeStyle;if(s(c.fillStyle)||s(d)){Dg(this.d,a.v());Sl(this);Il(this,a,b);this.a.push([9,Ci(Fi)]);s(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]);d=a.j;Hl(this,d,0,d.length,a.a,!1);var d=[1],e=[2];this.c.push(d,e);this.a.push(d,e);Ll(this,a,b);d=[7];this.a.push(d);s(c.fillStyle)&&this.c.push(d);s(c.strokeStyle)&&(c=[12],this.c.push(c),this.a.push(c))}};
l.Ob=function(a,b){var c=this.b,d=c.strokeStyle;if(s(c.fillStyle)||s(d))Dg(this.d,a.v()),Sl(this),Il(this,a,b),this.a.push([9,Ci(Fi)]),s(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]),c=a.d,d=qi(a),Rl(this,d,0,c,a.a),Ll(this,a,b)};
l.sc=function(a,b){var c=this.b,d=c.strokeStyle;if(s(c.fillStyle)||s(d)){Dg(this.d,a.v());Sl(this);Il(this,a,b);this.a.push([9,Ci(Fi)]);s(c.strokeStyle)&&this.a.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash]);var c=a.d,d=Tl(a),e=a.a,f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Rl(this,d,f,c[g],e);Ll(this,a,b)}};l.ed=function(){Kl(this);this.b=null;var a=this.ca;if(0!==a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
l.xd=function(){var a=this.Y;this.e&&(a=xg(a,this.resolution*(this.e+1)/2));return a};
l.Ia=function(a,b){var c=this.b;if(null===a)c.fillStyle=void 0;else{var d=a.a;c.fillStyle=Ci(null===d?Fi:d)}null===b?(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineJoin=void 0,c.lineWidth=void 0,c.miterLimit=void 0):(d=b.a,c.strokeStyle=Ci(null===d?Hi:d),d=b.b,c.lineCap=s(d)?d:"round",d=b.d,c.lineDash=null===d?Gi:d.slice(),d=b.e,c.lineJoin=s(d)?d:"round",d=b.c,c.lineWidth=s(d)?d:1,d=b.f,c.miterLimit=s(d)?d:10,this.e=Math.max(this.e,c.lineWidth))};
function Sl(a){var b=a.b,c=b.fillStyle,d=b.strokeStyle,e=b.lineCap,f=b.lineDash,g=b.lineJoin,h=b.lineWidth,m=b.miterLimit;s(c)&&b.ie!=c&&(a.c.push([9,c]),b.ie=b.fillStyle);!s(d)||b.lc==d&&b.gc==e&&b.hc==f&&b.ic==g&&b.jc==h&&b.kc==m||(a.c.push([10,d,h,e,g,m,f]),b.lc=d,b.gc=e,b.hc=f,b.ic=g,b.jc=h,b.kc=m)}function Ul(a,b,c){Gl.call(this,a,b,c);this.u=this.w=this.o=null;this.g="";this.n=this.t=this.l=this.i=0;this.h=this.f=this.b=null}u(Ul,Gl);
Ul.prototype.kb=function(a,b,c,d,e,f){if(""!==this.g&&null!==this.h&&(null!==this.b||null!==this.f)){Eg(this.d,a,b,c,d);if(null!==this.b){var g=this.b,h=this.o;if(null===h||h.fillStyle!=g.fillStyle){var m=[9,g.fillStyle];this.c.push(m);this.a.push(m);null===h?this.o={fillStyle:g.fillStyle}:h.fillStyle=g.fillStyle}}null!==this.f&&(g=this.f,h=this.w,null===h||h.lineCap!=g.lineCap||h.lineDash!=g.lineDash||h.lineJoin!=g.lineJoin||h.lineWidth!=g.lineWidth||h.miterLimit!=g.miterLimit||h.strokeStyle!=g.strokeStyle)&&
(m=[10,g.strokeStyle,g.lineWidth,g.lineCap,g.lineJoin,g.miterLimit,g.lineDash],this.c.push(m),this.a.push(m),null===h?this.w={lineCap:g.lineCap,lineDash:g.lineDash,lineJoin:g.lineJoin,lineWidth:g.lineWidth,miterLimit:g.miterLimit,strokeStyle:g.strokeStyle}:(h.lineCap=g.lineCap,h.lineDash=g.lineDash,h.lineJoin=g.lineJoin,h.lineWidth=g.lineWidth,h.miterLimit=g.miterLimit,h.strokeStyle=g.strokeStyle));g=this.h;h=this.u;if(null===h||h.font!=g.font||h.textAlign!=g.textAlign||h.textBaseline!=g.textBaseline)m=
[11,g.font,g.textAlign,g.textBaseline],this.c.push(m),this.a.push(m),null===h?this.u={font:g.font,textAlign:g.textAlign,textBaseline:g.textBaseline}:(h.font=g.font,h.textAlign=g.textAlign,h.textBaseline=g.textBaseline);Il(this,e,f);g=this.coordinates.length;a=Hl(this,a,b,c,d,!1);a=[5,g,a,this.g,this.i,this.l,this.t,this.n,null!==this.b,null!==this.f];this.c.push(a);this.a.push(a);Ll(this,e,f)}};
Ul.prototype.ua=function(a){if(null===a)this.g="";else{var b=a.c;null===b?this.b=null:(b=b.a,b=Ci(null===b?Fi:b),null===this.b?this.b={fillStyle:b}:this.b.fillStyle=b);var c=a.e;if(null===c)this.f=null;else{var b=c.a,d=c.b,e=c.d,f=c.e,g=c.c,c=c.f,d=s(d)?d:"round",e=null!=e?e.slice():Gi,f=s(f)?f:"round",g=s(g)?g:1,c=s(c)?c:10,b=Ci(null===b?Hi:b);if(null===this.f)this.f={lineCap:d,lineDash:e,lineJoin:f,lineWidth:g,miterLimit:c,strokeStyle:b};else{var h=this.f;h.lineCap=d;h.lineDash=e;h.lineJoin=f;h.lineWidth=
g;h.miterLimit=c;h.strokeStyle=b}}var m=a.a,b=a.i,d=a.l,e=a.b,g=a.d,c=a.f,f=a.h,h=a.g;a=s(m)?m:"10px sans-serif";f=s(f)?f:"center";h=s(h)?h:"middle";null===this.h?this.h={font:a,textAlign:f,textBaseline:h}:(m=this.h,m.font=a,m.textAlign=f,m.textBaseline=h);this.g=s(c)?c:"";this.i=s(b)?b:0;this.l=s(d)?d:0;this.t=s(e)?e:0;this.n=s(g)?g:1}};function Vl(a,b,c){this.f=a;this.c=b;this.e=c;this.a={};this.b=td(1,1);this.d=kd()}
function Wl(a,b,c,d,e,f,g){var h=xb(fc(a.a),Number);Hb(h);a:{var m=a.c,n=m[0],p=m[1],q=m[2],m=m[3],n=Kh([n,p,n,m,q,m,q,p],2,e);b.save();b.beginPath();b.moveTo(n[0],n[1]);b.lineTo(n[2],n[3]);b.lineTo(n[4],n[5]);b.lineTo(n[6],n[7]);b.closePath();b.clip();for(var r,v,n=0,p=h.length;n<p;++n)for(r=a.a[h[n].toString()],q=0,m=Fl.length;q<m;++q)if(v=r[Fl[q]],s(v)&&Lg(c,v.v())&&(v=Jl(v,b,d,e,f,g,v.c,void 0)))break a;b.restore()}}
function Xl(a,b,c,d,e,f,g,h){var m,n,p,q,r;m=0;for(n=b.length;m<n;++m)for(q in p=a.a[b[m].toString()],p)if(r=p[q],Lg(d,r.v())&&(r=Jl(r,c,1,e,f,g,r.a,h)))return r}function Yl(a,b,c,d,e,f,g){var h=a.d;bl(h,0.5,0.5,1/c,-1/c,-d,-e[0],-e[1]);c=xb(fc(a.a),Number);Hb(c,function(a,b){return b-a});var m=a.b;m.clearRect(0,0,1,1);return Xl(a,c,m,b,h,d,f,function(a,b){if(0<m.getImageData(0,0,1,1).data[3]){var c=g(a,b);if(c)return c;m.clearRect(0,0,1,1)}})}
function Zl(a){for(var b in a.a){var c=a.a[b],d;for(d in c)c[d].ed()}}function $l(a,b,c){var d=s(b)?b.toString():"0";b=a.a[d];s(b)||(b={},a.a[d]=b);d=b[c];s(d)||(d=new am[c](a.f,a.c,a.e),b[c]=d);return d}Vl.prototype.ka=function(){return gc(this.a)};var am={Image:Ml,LineString:Nl,Polygon:Ql,Text:Ul};function bm(a,b,c){Lh.call(this);this.jf(a,s(b)?b:0,c)}u(bm,Lh);l=bm.prototype;l.P=function(){var a=new bm(null),b=this.j.slice();Nh(a,this.b,b);a.k();return a};l.za=function(a,b,c,d){var e=this.j;a-=e[0];var f=b-e[1];b=a*a+f*f;if(b<d){if(0===b)for(d=0;d<this.a;++d)c[d]=e[d];else for(d=this.Me()/Math.sqrt(b),c[0]=e[0]+d*a,c[1]=e[1]+d*f,d=2;d<this.a;++d)c[d]=e[d];c.length=this.a;return b}return d};l.yb=function(a,b){var c=this.j,d=a-c[0],c=b-c[1];return d*d+c*c<=cm(this)};
l.Jd=function(){return this.j.slice(0,this.a)};l.v=function(a){if(this.f!=this.c){var b=this.j,c=b[this.a]-b[0];this.extent=wg(b[0]-c,b[1]-c,b[0]+c,b[1]+c,this.extent);this.f=this.c}return Ng(this.extent,a)};l.Me=function(){return Math.sqrt(cm(this))};function cm(a){var b=a.j[a.a]-a.j[0];a=a.j[a.a+1]-a.j[1];return b*b+a*a}l.ia=function(){return this};l.G=ca("Circle");l.eh=function(a){var b=this.a,c=this.j[b]-this.j[0],d=a.slice();d[b]=d[0]+c;for(c=1;c<b;++c)d[b+c]=a[c];Nh(this,this.b,d);this.k()};
l.jf=function(a,b,c){if(null===a)Nh(this,"XY",null);else{Oh(this,c,a,0);null===this.j&&(this.j=[]);c=this.j;a=Yh(c,a);c[a++]=c[0]+b;var d;b=1;for(d=this.a;b<d;++b)c[a++]=c[b];c.length=a}this.k()};l.mi=function(a){this.j[this.a]=this.j[0]+a;this.k()};function dm(a){Jh.call(this);this.a=s(a)?a:null;em(this)}u(dm,Jh);function fm(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].P());return b}function gm(a){var b,c;if(null!==a.a)for(b=0,c=a.a.length;b<c;++b)pe(a.a[b],"change",a.k,!1,a)}function em(a){var b,c;if(null!==a.a)for(b=0,c=a.a.length;b<c;++b)x(a.a[b],"change",a.k,!1,a)}l=dm.prototype;l.P=function(){var a=new dm(null);a.kf(this.a);return a};
l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;var e=this.a,f,g;f=0;for(g=e.length;f<g;++f)d=e[f].za(a,b,c,d);return d};l.yb=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].yb(a,b))return!0;return!1};l.v=function(a){if(this.f!=this.c){var b=Bg(this.extent),c=this.a,d,e;d=0;for(e=c.length;d<e;++d)Dg(b,c[d].v());this.extent=b;this.f=this.c}return Ng(this.extent,a)};l.Lf=function(){return fm(this.a)};
l.ia=function(a){this.l!=this.c&&(ic(this.h),this.g=0,this.l=this.c);if(0>a||0!==this.g&&a<this.g)return this;var b=a.toString();if(this.h.hasOwnProperty(b))return this.h[b];var c=[],d=this.a,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],m=h.ia(a);c.push(m);m!==h&&(e=!0)}if(e)return a=new dm(null),gm(a),a.a=c,em(a),a.k(),this.h[b]=a;this.g=a;return this};l.G=ca("GeometryCollection");l.ka=function(){return 0==this.a.length};l.kf=function(a){a=fm(a);gm(this);this.a=a;em(this);this.k()};
l.xb=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].xb(a);this.k()};l.F=function(){gm(this);dm.H.F.call(this)};function hm(a,b,c,d,e){var f=NaN,g=NaN,h=(c-b)/d;if(0!==h)if(1==h)f=a[b],g=a[b+1];else if(2==h)f=0.5*a[b]+0.5*a[b+d],g=0.5*a[b+1]+0.5*a[b+d+1];else{var g=a[b],h=a[b+1],m=0,f=[0],n;for(n=b+d;n<c;n+=d){var p=a[n],q=a[n+1],m=m+Math.sqrt((p-g)*(p-g)+(q-h)*(q-h));f.push(m);g=p;h=q}c=0.5*m;for(var r,g=Ib,h=0,m=f.length;h<m;)n=h+m>>1,p=g(c,f[n]),0<p?h=n+1:(m=n,r=!p);r=r?h:~h;0>r?(c=(c-f[-r-2])/(f[-r-1]-f[-r-2]),b+=(-r-2)*d,f=a[b]+c*(a[b+d]-a[b]),g=a[b+1]+c*(a[b+d+1]-a[b+1])):(f=a[b+r*d],g=a[b+r*d+1])}return null!=
e?(e[0]=f,e[1]=g,e):[f,g]}function im(a,b,c,d,e,f){if(c==b)return null;if(e<a[b+d-1])return f?(c=a.slice(b,b+d),c[d-1]=e,c):null;if(a[c-1]<e)return f?(c=a.slice(c-d,c),c[d-1]=e,c):null;if(e==a[b+d-1])return a.slice(b,b+d);b/=d;for(c/=d;b<c;)f=b+c>>1,e<a[(f+1)*d-1]?c=f:b=f+1;c=a[b*d-1];if(e==c)return a.slice((b-1)*d,(b-1)*d+d);f=(e-c)/(a[(b+1)*d-1]-c);c=[];var g;for(g=0;g<d-1;++g)c.push(a[(b-1)*d+g]+f*(a[b*d+g]-a[(b-1)*d+g]));c.push(e);return c}
function jm(a,b,c,d,e,f){var g=0;if(f)return im(a,g,b[b.length-1],c,d,e);if(d<a[c-1])return e?(a=a.slice(0,c),a[c-1]=d,a):null;if(a[a.length-1]<d)return e?(a=a.slice(a.length-c),a[c-1]=d,a):null;e=0;for(f=b.length;e<f;++e){var h=b[e];if(g!=h){if(d<a[g+c-1])break;else if(d<=a[h-1])return im(a,g,h,c,d,!1);g=h}}return null};function km(a,b){Lh.call(this);this.d=null;this.t=this.n=this.i=-1;this.O(a,b)}u(km,Lh);l=km.prototype;l.wf=function(a){null===this.j?this.j=a.slice():ig(this.j,a);this.k()};l.P=function(){var a=new km(null);lm(a,this.b,this.j.slice());return a};l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;this.t!=this.c&&(this.n=Math.sqrt(Uh(this.j,0,this.j.length,this.a,0)),this.t=this.c);return Wh(this.j,0,this.j.length,this.a,this.n,!1,a,b,c,d)};
l.fh=function(a,b){return"XYM"!=this.b&&"XYZM"!=this.b?null:im(this.j,0,this.j.length,this.a,a,s(b)?b:!1)};l.D=function(){return ai(this.j,0,this.j.length,this.a)};l.gh=function(){var a=this.j,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.j.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};function tl(a){a.i!=a.c&&(a.d=hm(a.j,0,a.j.length,a.a,a.d),a.i=a.c);return a.d}
l.Qb=function(a){var b=[];b.length=di(this.j,0,this.j.length,this.a,a,b,0);a=new km(null);lm(a,"XY",b);return a};l.G=ca("LineString");l.O=function(a,b){null===a?lm(this,"XY",null):(Oh(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Zh(this.j,0,a,this.a),this.k())};function lm(a,b,c){Nh(a,b,c);a.k()};function mm(a,b){Lh.call(this);this.d=[];this.i=this.t=-1;this.O(a,b)}u(mm,Lh);l=mm.prototype;l.xf=function(a){null===this.j?this.j=a.j.slice():ig(this.j,a.j.slice());this.d.push(this.j.length);this.k()};l.P=function(){var a=new mm(null);nm(a,this.b,this.j.slice(),this.d.slice());return a};l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;this.i!=this.c&&(this.t=Math.sqrt(Vh(this.j,0,this.d,this.a,0)),this.i=this.c);return Xh(this.j,0,this.d,this.a,this.t,!1,a,b,c,d)};
l.ih=function(a,b,c){return"XYM"!=this.b&&"XYZM"!=this.b||0===this.j.length?null:jm(this.j,this.d,this.a,a,s(b)?b:!1,s(c)?c:!1)};l.D=function(){return bi(this.j,0,this.d,this.a)};l.Qf=function(a){if(0>a||this.d.length<=a)return null;var b=new km(null);lm(b,this.b,this.j.slice(0===a?0:this.d[a-1],this.d[a]));return b};l.zd=function(){var a=this.j,b=this.d,c=this.b,d=[],e=0,f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],m=new km(null);lm(m,c,a.slice(e,h));d.push(m);e=h}return d};
function ul(a){var b=[],c=a.j,d=0,e=a.d;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=hm(c,d,h,a);ig(b,d);d=h}return b}l.Qb=function(a){var b=[],c=[],d=this.j,e=this.d,f=this.a,g=0,h=0,m,n;m=0;for(n=e.length;m<n;++m){var p=e[m],h=di(d,g,p,f,a,b,h);c.push(h);g=p}b.length=h;a=new mm(null);nm(a,"XY",b,c);return a};l.G=ca("MultiLineString");
l.O=function(a,b){if(null===a)nm(this,"XY",null,this.d);else{Oh(this,b,a,2);null===this.j&&(this.j=[]);var c=$h(this.j,0,a,this.a,this.d);this.j.length=0===c.length?0:c[c.length-1];this.k()}};function nm(a,b,c,d){Nh(a,b,c);a.d=d;a.k()}function om(a,b){var c="XY",d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];0===f&&(c=h.b);ig(d,h.j);e.push(d.length)}nm(a,c,d,e)};function pm(a,b){Lh.call(this);this.O(a,b)}u(pm,Lh);l=pm.prototype;l.zf=function(a){null===this.j?this.j=a.j.slice():ig(this.j,a.j);this.k()};l.P=function(){var a=new pm(null),b=this.j.slice();Nh(a,this.b,b);a.k();return a};l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;var e=this.j,f=this.a,g,h,m;g=0;for(h=e.length;g<h;g+=f)if(m=Sh(a,b,e[g],e[g+1]),m<d){d=m;for(m=0;m<f;++m)c[m]=e[g+m];c.length=f}return d};l.D=function(){return ai(this.j,0,this.j.length,this.a)};
l.Tf=function(a){var b=null===this.j?0:this.j.length/this.a;if(0>a||b<=a)return null;b=new hi(null);ii(b,this.b,this.j.slice(a*this.a,(a+1)*this.a));return b};l.te=function(){var a=this.j,b=this.b,c=this.a,d=[],e,f;e=0;for(f=a.length;e<f;e+=c){var g=new hi(null);ii(g,b,a.slice(e,e+c));d.push(g)}return d};l.G=ca("MultiPoint");l.O=function(a,b){null===a?Nh(this,"XY",null):(Oh(this,b,a,1),null===this.j&&(this.j=[]),this.j.length=Zh(this.j,0,a,this.a));this.k()};function qm(a,b){Lh.call(this);this.d=[];this.t=-1;this.n=null;this.u=this.o=this.w=-1;this.i=null;this.O(a,b)}u(qm,Lh);l=qm.prototype;l.Af=function(a){if(null===this.j)this.j=a.j.slice(),a=a.d.slice(),this.d.push();else{var b=this.j.length;ig(this.j,a.j);a=a.d.slice();var c,d;c=0;for(d=a.length;c<d;++c)a[c]+=b}this.d.push(a);this.k()};l.P=function(){var a=new qm(null);rm(a,this.b,this.j.slice(),this.d.slice());return a};
l.za=function(a,b,c,d){if(d<zg(this.v(),a,b))return d;if(this.o!=this.c){var e=this.d,f=0,g=0,h,m;h=0;for(m=e.length;h<m;++h)var n=e[h],g=Vh(this.j,f,n,this.a,g),f=n[n.length-1];this.w=Math.sqrt(g);this.o=this.c}e=Tl(this);f=this.d;g=this.a;h=this.w;m=0;var n=s(void 0)?void 0:[NaN,NaN],p,q;p=0;for(q=f.length;p<q;++p){var r=f[p];d=Xh(e,m,r,g,h,!0,a,b,c,d,n);m=r[r.length-1]}return d};
l.yb=function(a,b){var c;a:{c=Tl(this);var d=this.d,e=0;if(0!==d.length){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];if(ki(c,e,h,this.a,a,b)){c=!0;break a}e=h[h.length-1]}}c=!1}return c};l.jh=function(){var a=Tl(this),b=this.d,c=0,d=0,e,f;e=0;for(f=b.length;e<f;++e)var g=b[e],d=d+Rh(a,c,g,this.a),c=g[g.length-1];return d};l.D=function(){var a=this.j,b=this.d,c=this.a,d=0,e=s(void 0)?void 0:[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var m=b[g];e[f++]=bi(a,d,m,c,e[f]);d=m[m.length-1]}e.length=f;return e};
function vl(a){if(a.t!=a.c){var b=a.j,c=a.d,d=a.a,e=0,f=[],g,h,m=ug();g=0;for(h=c.length;g<h;++g){var n=c[g],m=b,p=n[0],q=d,r=Bg(void 0),m=Eg(r,m,e,p,q);f.push((m[0]+m[2])/2,(m[1]+m[3])/2);e=n[n.length-1]}b=Tl(a);c=a.d;d=a.a;g=0;h=[];n=0;for(m=c.length;n<m;++n)e=c[n],h=li(b,g,e,d,f,2*n,h),g=e[e.length-1];a.n=h;a.t=a.c}return a.n}l.Nf=function(){var a=new pm(null),b=vl(this).slice();Nh(a,"XY",b);a.k();return a};
function Tl(a){if(a.u!=a.c){var b=a.j,c;a:{c=a.d;var d,e;d=0;for(e=c.length;d<e;++d)if(!ni(b,c[d],a.a)){c=!1;break a}c=!0}if(c)a.i=b;else{a.i=b.slice();c=b=a.i;d=a.d;e=a.a;var f=0,g,h;g=0;for(h=d.length;g<h;++g)f=oi(c,f,d[g],e);b.length=f}a.u=a.c}return a.i}l.Qb=function(a){var b=[],c=[],d=this.j,e=this.d,f=this.a;a=Math.sqrt(a);var g=0,h=0,m,n;m=0;for(n=e.length;m<n;++m){var p=e[m],q=[],h=ei(d,g,p,f,a,b,h,q);c.push(q);g=p[p.length-1]}b.length=h;d=new qm(null);rm(d,"XY",b,c);return d};
l.Uf=function(a){if(0>a||this.d.length<=a)return null;var b;0===a?b=0:(b=this.d[a-1],b=b[b.length-1]);a=this.d[a].slice();var c=a[a.length-1];if(0!==b){var d,e;d=0;for(e=a.length;d<e;++d)a[d]-=b}d=new H(null);pi(d,this.b,this.j.slice(b,c),a);return d};l.ue=function(){var a=this.b,b=this.j,c=this.d,d=[],e=0,f,g,h,m;f=0;for(g=c.length;f<g;++f){var n=c[f].slice(),p=n[n.length-1];if(0!==e)for(h=0,m=n.length;h<m;++h)n[h]-=e;h=new H(null);pi(h,a,b.slice(e,p),n);d.push(h);e=p}return d};l.G=ca("MultiPolygon");
l.O=function(a,b){if(null===a)rm(this,"XY",null,this.d);else{Oh(this,b,a,3);null===this.j&&(this.j=[]);var c=this.j,d=this.a,e=this.d,f=0,e=s(e)?e:[],g=0,h,m;h=0;for(m=a.length;h<m;++h)f=$h(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;c=e[e.length-1];this.j.length=0===c.length?0:c[c.length-1];this.k()}};function rm(a,b,c,d){Nh(a,b,c);a.d=d;a.k()}
function sm(a,b){var c="XY",d=[],e=[],f,g,h;f=0;for(g=b.length;f<g;++f){var m=b[f];0===f&&(c=m.b);var n=d.length;h=m.d;var p,q;p=0;for(q=h.length;p<q;++p)h[p]+=n;ig(d,m.j);e.push(h)}rm(a,c,d,e)};function tm(a,b){return sa(a)-sa(b)}function um(a,b,c,d,e,f,g){var h=!1,m,n;m=c.e;null===m?vm(a,b,c,d,e):(n=m.Ld(),2==n||3==n?(m.Wd(f,g),2==n&&vm(a,b,c,d,e)):(0==n&&m.Md(),m.Fd(f,g),h=!0));return h}function vm(a,b,c,d,e){b=b.L();null!=b&&(d=b.ia(d),(0,wm[d.G()])(a,d,c,e))}
var wm={Point:function(a,b,c,d){var e=c.e;if(null!==e){var f=$l(a,c.a,"Image");f.bc(e);f.tc(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),a.kb(b.D(),0,2,2,b,d))},LineString:function(a,b,c,d){var e=c.b;if(null!==e){var f=$l(a,c.a,"LineString");f.Ia(null,e);f.pc(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),a.kb(tl(b),0,2,2,b,d))},Polygon:function(a,b,c,d){var e=c.d,f=c.b;if(null!==e||null!==f){var g=$l(a,c.a,"Polygon");g.Ia(e,f);g.Ob(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),a.kb(ri(b),
0,2,2,b,d))},MultiPoint:function(a,b,c,d){var e=c.e;if(null!==e){var f=$l(a,c.a,"Image");f.bc(e);f.rc(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),c=b.j,a.kb(c,0,c.length,b.a,b,d))},MultiLineString:function(a,b,c,d){var e=c.b;if(null!==e){var f=$l(a,c.a,"LineString");f.Ia(null,e);f.qc(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),c=ul(b),a.kb(c,0,c.length,2,b,d))},MultiPolygon:function(a,b,c,d){var e=c.d,f=c.b;if(null!==f||null!==e){var g=$l(a,c.a,"Polygon");g.Ia(e,f);g.sc(b,d)}e=c.c;null!==
e&&(a=$l(a,c.a,"Text"),a.ua(e),c=vl(b),a.kb(c,0,c.length,2,b,d))},GeometryCollection:function(a,b,c,d){b=b.a;var e,f;e=0;for(f=b.length;e<f;++e)(0,wm[b[e].G()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.d,f=c.b;if(null!==e||null!==f){var g=$l(a,c.a,"Polygon");g.Ia(e,f);g.oc(b,d)}e=c.c;null!==e&&(a=$l(a,c.a,"Text"),a.ua(e),a.kb(b.Jd(),0,2,2,b,d))}};function xm(a,b,c,d){this.extent=a;this.height=b;this.a=c;this.value=d}function ym(a,b){return a.extent[0]-b.extent[0]}function zm(a,b){return a.extent[1]-b.extent[1]}function Am(a,b,c,d){a=a.a;for(d=Bg(d);b<c;++b)Dg(d,a[b].extent);return d}xm.prototype.remove=function(a,b,c){var d=this.a,e=d.length,f,g;if(1==this.height)for(g=0;g<e;++g){if(f=d[g],f.value===b)return ub.splice.call(d,g,1),!0}else for(g=0;g<e;++g)if(f=d[g],Ag(f.extent,a)){c.push(f);if(f.remove(a,b,c))return!0;c.pop()}return!1};
function Bm(a){var b=Bg(a.extent);a=a.a;var c,d;c=0;for(d=a.length;c<d;++c)Dg(b,a[c].extent)}function Cm(a){this.b=Math.max(4,s(a)?a:9);this.d=Math.max(2,Math.ceil(0.4*this.b));this.a=new xm(ug(),1,[],null);this.c={}}function Dm(a,b,c){var d=b.a;a=a.d;var e=d.length;Hb(d,c);c=Am(b,0,a);var f=Am(b,e-a,e),g=Kg(c)+Ig(c)+(Kg(f)+Ig(f));for(b=a;b<e-a;++b)Dg(c,d[b].extent),g+=Kg(c)+Ig(c);for(b=e-a-1;b>=a;--b)Dg(f,d[b].extent),g+=Kg(f)+Ig(f);return g}l=Cm.prototype;
l.clear=function(){var a=this.a;a.extent=Bg(this.a.extent);a.height=1;a.a.length=0;a.value=null;ic(this.c)};l.forEach=function(a,b){return Em(this.a,a,b)};function Em(a,b,c){for(var d=[a],e,f,g;0<d.length;)if(a=d.pop(),e=a.a,1==a.height)for(a=0,f=e.length;a<f;++a){if(g=b.call(c,e[a].value))return g}else d.push.apply(d,e)}function Fm(a,b,c){Gm(a,b,c,void 0)}
function Gm(a,b,c,d){a=[a.a];for(var e;0<a.length;)if(e=a.pop(),Lg(b,e.extent))if(null===e.a){if(e=c.call(d,e.value))return e}else if(Ag(b,e.extent)){if(e=Em(e,c,d))return e}else a.push.apply(a,e.a)}function Hm(a){var b=[];a.forEach(function(a){b.push(a)});return b}function Im(a,b){var c=[];Gm(a,b,function(a){c.push(a)},void 0);return c}l.v=function(a){return Ng(this.a.extent,a)};function Jm(a,b,c){var d=sa(c).toString();Km(a,b,c,a.a.height-1);a.c[d]=yg(b)}
function Km(a,b,c,d){for(var e=[a.a],f=a.a;null!==f.a&&e.length-1!=d;){var g=Infinity,h=Infinity,f=f.a,m=null,n,p;n=0;for(p=f.length;n<p;++n){var q=f[n],r=Kg(q.extent)*Ig(q.extent),v=q.extent,z=b,B=Math.min(v[0],z[0]),A=Math.min(v[1],z[1]),E=Math.max(v[2],z[2]),v=Math.max(v[3],z[3]),B=(E-B)*(v-A)-r;B<h?(h=B,g=Math.min(r,g),m=q):B==h&&r<g&&(g=r,m=q)}f=m;e.push(f)}d=f;d.a.push(new xm(b,0,null,c));Dg(d.extent,b);for(c=e.length-1;0<=c;--c)if(e[c].a.length>a.b){g=a;h=e;f=c;d=h[f];p=g;m=d;n=Dm(p,m,ym);
p=Dm(p,m,zm);n<p&&Hb(m.a,ym);m=d;n=g.d;p=m.a.length;r=q=Infinity;B=ug();A=ug();E=0;v=void 0;for(v=n;v<=p-n;++v){var B=Am(m,0,v,B),A=Am(m,v,p,A),C=B,M=A,z=Math.max(C[0],M[0]),Q=Math.max(C[1],M[1]),ha=Math.min(C[2],M[2]),C=Math.min(C[3],M[3]),z=Math.max(0,ha-z)*Math.max(0,C-Q),Q=Kg(B)*Ig(B)+Kg(A)*Ig(A);z<q?(q=z,r=Math.min(Q,r),E=v):z==q&&Q<r&&(r=Q,E=v)}m=d.a.splice(E);m=new xm(ug(),d.height,m,null);Bm(d);Bm(m);f?h[f-1].a.push(m):(h=m,f=d.height+1,m=Dg(d.extent.slice(),h.extent),g.a=new xm(m,f,[d,h],
null))}else break;for(;0<=c;--c)Dg(e[c].extent,b)}l.ka=function(){return 0===this.a.a.length};l.remove=function(a){var b=sa(a).toString(),c=this.c[b];delete this.c[b];return Lm(this,c,a)};function Lm(a,b,c){var d=a.a,e=[d];if(b=d.remove(b,c,e))for(c=e.length-1;0<=c;--c)d=e[c],0===d.a.length?0<c?Bb(e[c-1].a,d):a.clear():Bm(d);return b}l.update=function(a,b){var c=sa(b).toString(),d=this.c[c];Cg(d,a)||(Lm(this,d,b),Km(this,a,b,this.a.height-1),this.c[c]=yg(a,d))};function Mm(a){a=s(a)?a:{};sk.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.d=new Cm;this.e={};this.f={};this.g={};this.o={};s(a.features)&&this.xa(a.features)}u(Mm,sk);l=Mm.prototype;l.Fa=function(a){Nm(this,a);this.k()};
function Nm(a,b){var c=sa(b).toString();a.o[c]=[x(b,"change",a.Pe,!1,a),x(b,"propertychange",a.Pe,!1,a)];var d=b.L();null!=d?(d=d.v(),Jm(a.d,d,b)):a.e[c]=b;d=b.V;s(d)?a.f[d.toString()]=b:a.g[c]=b;y(a,new Om("addfeature",b))}l.Na=function(a){this.xa(a);this.k()};l.xa=function(a){var b,c;b=0;for(c=a.length;b<c;++b)Nm(this,a[b])};l.clear=function(){this.d.forEach(this.Sd,this);this.d.clear();bc(this.e,this.Sd,this);ic(this.e);this.k()};l.Oa=function(a,b){return this.d.forEach(a,b)};
function Pm(a,b,c){a.oa([b[0],b[1],b[0],b[1]],function(a){if(a.L().yb(b[0],b[1]))return c.call(void 0,a)})}l.oa=function(a,b,c){return Gm(this.d,a,b,c)};l.Oc=function(a,b,c,d){return this.oa(a,c,d)};l.Ga=function(){var a=Hm(this.d);gc(this.e)||Eb(a,ec(this.e));return a};l.Ba=function(a){var b=[];Pm(this,a,function(a){b.push(a)});return b};
l.Pa=function(a){var b=a[0],c=a[1],d=null,e=[NaN,NaN],f=Infinity,g=[-Infinity,-Infinity,Infinity,Infinity];Gm(this.d,g,function(a){var m=a.L(),n=f;f=m.za(b,c,e,f);f<n&&(d=a,a=Math.sqrt(f),g[0]=b-a,g[1]=c-a,g[2]=b+a,g[3]=c+a)},void 0);return d};l.v=function(){return this.d.v()};
l.Pe=function(a){a=a.target;var b=sa(a).toString(),c=a.L();null!=c?(c=c.v(),b in this.e?(delete this.e[b],Jm(this.d,c,a)):this.d.update(c,a)):b in this.e||(this.d.remove(a),this.e[b]=a);c=a.V;s(c)?(c=c.toString(),b in this.g?(delete this.g[b],this.f[c]=a):this.f[c]!==a&&(Qm(this,a),this.f[c]=a)):b in this.g||(Qm(this,a),this.g[b]=a);this.k()};l.ka=function(){return this.d.ka()&&gc(this.e)};l.Gd=fa;l.Ua=function(a){var b=sa(a).toString();b in this.e?delete this.e[b]:this.d.remove(a);this.Sd(a);this.k()};
l.Sd=function(a){var b=sa(a).toString();wb(this.o[b],re);delete this.o[b];var c=a.V;s(c)?delete this.f[c.toString()]:delete this.g[b];y(this,new Om("removefeature",a))};function Qm(a,b){for(var c in a.f)if(a.f[c]===b){delete a.f[c];break}}function Om(a,b){Qd.call(this,a);this.feature=b}u(Om,Qd);function Rm(a,b){xl.call(this,a,b);this.b=!1;this.i=-1;this.g=NaN;this.w=ug();this.c=this.u=null;this.h=td()}u(Rm,xl);
Rm.prototype.n=function(a,b,c){var d=zl(this,a);yl(this,"precompose",c,a,d);var e=this.c;if(null!==e&&!e.ka()){var f;ue(this.a.ha,"render")?(this.h.canvas.width=c.canvas.width,this.h.canvas.height=c.canvas.height,f=this.h):f=c;f.globalAlpha=b.opacity;Wl(e,f,a.extent,a.pixelRatio,d,a.view2DState.rotation,a.cc);f!=c&&(yl(this,"render",f,a,d),c.drawImage(f.canvas,0,0))}yl(this,"postcompose",c,a,d)};
Rm.prototype.f=function(a,b,c,d){if(null!==this.c){var e=this.a;return Yl(this.c,b.extent,b.view2DState.resolution,b.view2DState.rotation,a,b.cc,function(a,b){return c.call(d,b,e)})}};Rm.prototype.B=function(){Rk(this)};
Rm.prototype.d=function(a){var b=this.a,c=b.a;Tk(a.attributions,c.h);Uk(a,c);if(this.b||!a.U[0]&&!a.U[1]){var d=a.extent,e=a.view2DState,f=e.projection,g=e.resolution,h=a.pixelRatio;a=b.c;e=b.get("renderOrder");s(e)||(e=tm);if(this.b||this.g!=g||this.i!=a||this.u!=e||!Ag(this.w,d)){var m=this.w,n=Kg(d)/4,p=Ig(d)/4;m[0]=d[0]-n;m[1]=d[1]-p;m[2]=d[2]+n;m[3]=d[3]+p;Pd(this.c);this.c=null;this.b=!1;var q=b.wa;s(q)||(q=Oi);var r=new Vl(g/(2*h),m,g);c.Gd(m,g,f);b=function(a){var b=q(a,g);if(null!=b){var c=
g*g/(4*h*h),d,e,f=!1;d=0;for(e=b.length;d<e;++d)f=um(r,a,b[d],c,a,this.B,this)||f;a=f}else a=!1;this.b=this.b||a};if(null===e)c.Oc(m,g,b,this);else{var v=[];c.Oc(m,g,function(a){v.push(a)},this);Hb(v,e);wb(v,b,this)}Zl(r);this.g=g;this.i=a;this.u=e;this.c=r}}};function Sm(a,b){el.call(this,0,b);this.h=td();this.a=this.h.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Cc(a,this.a,0);this.c=!0;this.g=kd()}u(Sm,el);Sm.prototype.Jc=function(a){return a instanceof jl?new Dl(this,a):a instanceof L?new El(this,a):a instanceof N?new Rm(this,a):null};
function Tm(a,b,c){var d=a.f,e=a.h;if(ue(d.ha,b)){var f=c.view2DState,g=c.pixelRatio;bl(a.g,a.a.width/2,a.a.height/2,g/f.resolution,-g/f.resolution,-f.rotation,-f.center[0],-f.center[1]);a=new kl(e,g,c.extent,a.g,f.rotation);y(d,new ti(b,d,a,c,e,null));wl(a)}}
Sm.prototype.gd=function(a){if(null===a)this.c&&(Xc(this.a,!1),this.c=!1);else{var b=this.h,c=a.size[0]*a.pixelRatio,d=a.size[1]*a.pixelRatio;this.a.width!=c||this.a.height!=d?(this.a.width=c,this.a.height=d):b.clearRect(0,0,this.a.width,this.a.height);fl(a);Tm(this,"precompose",a);var c=a.ad,d=a.view2DState.resolution,e,f,g,h;e=0;for(f=c.length;e<f;++e)h=c[e],g=h.layer,g=gl(this,g),h.visible&&(d>=h.minResolution&&d<h.maxResolution)&&1==h.Ya&&(g.d(a,h),g.n(a,h,b));Tm(this,"postcompose",a);this.c||
(Xc(this.a,!0),this.c=!0);il(this,a);hl(a)}};function Um(a,b,c){Qk.call(this,a,b);this.target=c}u(Um,Qk);function Vm(a,b){var c=yc("DIV");c.style.position="absolute";Um.call(this,a,b,c);this.c=null;this.b=md()}u(Vm,Um);Vm.prototype.f=function(a,b,c,d){var e=this.a;return e.a.fd(b.extent,b.view2DState.resolution,b.view2DState.rotation,a,function(a){return c.call(d,a,e)})};
Vm.prototype.d=function(a){var b=a.view2DState,c=b.center,d=b.resolution,e=b.rotation,f=this.c,g=this.a.a,h=a.U;h[0]||h[1]||(b=g.Xb(a.extent,d,a.pixelRatio,b.projection),null!==b&&(h=b.state,0==h?(oe(b,"change",this.t,!1,this),Gk(b)):2==h&&(f=b)));if(null!==f){var h=f.v(),m=f.d,b=kd();bl(b,a.size[0]/2,a.size[1]/2,m/d,m/d,e,(h[0]-c[0])/m,(c[1]-h[3])/m);f!=this.c&&(c=f.e(this),c.style.maxWidth="none",c.style.position="absolute",Ac(this.target),this.target.appendChild(c),this.c=f);cl(b,this.b)||(xd(this.target,
b),nd(this.b,b));Tk(a.attributions,f.h);Uk(a,g)}};function Wm(a,b){var c=yc("DIV");c.style.position="absolute";Um.call(this,a,b,c);this.b=!0;this.g=1;this.h=0;this.c={}}u(Wm,Um);
Wm.prototype.d=function(a,b){if(b.visible){var c=a.pixelRatio,d=a.view2DState,e=d.projection,f=this.a,g=f.a,h=Pk(g,e),m=g.Rc(),n=jg(h.a,d.resolution,0),p=h.ea(n),q=d.center,r;p==d.resolution?(q=Xk(q,p,a.size),r=Hg(q,p,d.rotation,a.size)):r=a.extent;var p=Lk(h,r,p),v={};v[n]={};var z=xa(g.ud,g,v,Wk(function(a){return null!==a&&2==a.state},g,c,e)),B=f.ga();s(B)||(B=!0);var A=ug(),E=new Pb(0,0,0,0),C,M,Q,ha;for(Q=p.a;Q<=p.d;++Q)for(ha=p.b;ha<=p.c;++ha)C=g.Rb(n,Q,ha,c,e),M=C.state,2==M?v[n][C.a.toString()]=
C:4==M||3==M&&!B||(M=h.Pc(C.a,z,null,E,A),M||(C=h.Uc(C.a,E,A),null===C||z(n+1,C)));var R;if(this.h!=g.c){for(R in this.c)B=this.c[+R],Dc(B.target);this.c={};this.h=g.c}A=xb(fc(v),Number);Hb(A);var z={},qa;Q=0;for(ha=A.length;Q<ha;++Q){R=A[Q];R in this.c?B=this.c[R]:(B=Mk(h,q[0],q[1],h.ea(R),!1,void 0),B=new Xm(h,B),z[R]=!0,this.c[R]=B);R=v[R];for(qa in R)Ym(B,R[qa],m);Zm(B)}m=xb(fc(this.c),Number);Hb(m);Q=kd();qa=0;for(A=m.length;qa<A;++qa)if(R=m[qa],B=this.c[R],R in v)if(C=B.h,ha=B.f,bl(Q,a.size[0]/
2,a.size[1]/2,C/d.resolution,C/d.resolution,d.rotation,(ha[0]-q[0])/C,(q[1]-ha[1])/C),$m(B,Q),R in z){for(R-=1;0<=R;--R)if(R in this.c){Bc(B.target,this.c[R].target);break}0>R&&Cc(this.target,B.target,0)}else a.U[0]||a.U[1]||an(B,r,E);else Dc(B.target),delete this.c[R];b.opacity!=this.g&&(Wc(this.target,b.opacity),this.g=b.opacity);b.visible&&!this.b&&(Xc(this.target,!0),this.b=!0);Vk(a.Fc,g,n,p);Yk(a,g,h,c,e,r,n,f.ca());Sk(a,g);Uk(a,g)}else this.b&&(Xc(this.target,!1),this.b=!1)};
function Xm(a,b){this.target=yc("DIV");this.target.style.position="absolute";this.target.style.width="100%";this.target.style.height="100%";this.d=a;this.b=b;this.f=Jg(Jk(a,b));this.h=a.ea(b.a);this.c={};this.a=null;this.e=md()}
function Ym(a,b,c){var d=b.a,e=d.toString();if(!(e in a.c)){var f=a.d.ja(d.a),g=b.b(a),h=g.style;h.maxWidth="none";var m,n;0<c?(m=yc("DIV"),n=m.style,n.overflow="hidden",n.width=f+"px",n.height=f+"px",h.position="absolute",h.left=-c+"px",h.top=-c+"px",h.width=f+2*c+"px",h.height=f+2*c+"px",m.appendChild(g)):(h.width=f+"px",h.height=f+"px",m=g,n=h);n.position="absolute";n.left=(d.x-a.b.x)*f+"px";n.top=(a.b.y-d.y)*f+"px";null===a.a&&(a.a=document.createDocumentFragment());a.a.appendChild(m);a.c[e]=
b}}function Zm(a){null!==a.a&&(a.target.appendChild(a.a),a.a=null)}function an(a,b,c){var d=Kk(a.d,b,a.b.a,c);b=[];for(var e in a.c)c=a.c[e],d.contains(c.a)||b.push(c);var f,d=0;for(f=b.length;d<f;++d)c=b[d],e=c.a.toString(),Dc(c.b(a)),delete a.c[e]}function $m(a,b){cl(b,a.e)||(xd(a.target,b),nd(a.e,b))};function bn(a,b){el.call(this,0,b);this.a=yc("DIV");this.a.className="ol-unselectable";var c=this.a.style;c.position="absolute";c.width="100%";c.height="100%";Cc(a,this.a,0);this.c=!0}u(bn,el);bn.prototype.Jc=function(a){if(a instanceof jl)a=new Vm(this,a);else if(a instanceof L)a=new Wm(this,a);else return null;return a};
bn.prototype.gd=function(a){if(null===a)this.c&&(Xc(this.a,!1),this.c=!1);else{var b;b=function(a,b){Cc(this.a,a,b)};var c=a.ad,d,e,f,g;d=0;for(e=c.length;d<e;++d)g=c[d],f=g.layer,f=gl(this,f),b.call(this,f.target,d),1==g.Ya&&f.d(a,g);b=a.Ed;for(var h in this.b)h in b||(f=this.b[h],Dc(f.target));this.c||(Xc(this.a,!0),this.c=!0);fl(a);il(this,a);hl(a)}};function cn(){}l=cn.prototype;l.Lc=ba();l.oc=ba();l.Mc=ba();l.ke=ba();l.tc=ba();l.pc=ba();l.qc=ba();l.rc=ba();l.sc=ba();l.Ob=ba();l.kb=ba();l.Ia=ba();l.bc=ba();l.ua=ba();function dn(){this.h=kd();this.c=void 0;this.a=kd();this.d=void 0;this.b=kd();this.f=void 0;this.e=kd();this.i=void 0;this.g=kd()}
function en(a,b,c,d,e){var f=!1;s(b)&&b!==a.c&&(f=a.a,od(f),f[12]=b,f[13]=b,f[14]=b,f[15]=1,a.c=b,f=!0);if(s(c)&&c!==a.d){f=a.b;od(f);f[0]=c;f[5]=c;f[10]=c;f[15]=1;var g=-0.5*c+0.5;f[12]=g;f[13]=g;f[14]=g;f[15]=1;a.d=c;f=!0}s(d)&&d!==a.f&&(f=Math.cos(d),g=Math.sin(d),ld(a.e,0.213+0.787*f-0.213*g,0.213-0.213*f+0.143*g,0.213-0.213*f-0.787*g,0,0.715-0.715*f-0.715*g,0.715+0.285*f+0.14*g,0.715-0.715*f+0.715*g,0,0.072-0.072*f+0.928*g,0.072-0.072*f-0.283*g,0.072+0.928*f+0.072*g,0,0,0,0,1),a.f=d,f=!0);s(e)&&
e!==a.i&&(ld(a.g,0.213+0.787*e,0.213-0.213*e,0.213-0.213*e,0,0.715-0.715*e,0.715+0.285*e,0.715-0.715*e,0,0.072-0.072*e,0.072-0.072*e,0.072+0.928*e,0,0,0,0,1),a.i=e,f=!0);f&&(f=a.h,od(f),s(c)&&pd(f,a.b,f),s(b)&&pd(f,a.a,f),s(e)&&pd(f,a.g,f),s(d)&&pd(f,a.e,f));return a.h};function fn(a){this.a=a}function gn(a){this.a=a}u(gn,fn);gn.prototype.G=ca(35632);function hn(a){this.a=a}u(hn,fn);hn.prototype.G=ca(35633);function jn(){this.a="precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor\x3dtexture2D(h,a);gl_FragColor.rgb\x3d(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a\x3dtexColor.a*g;}"}u(jn,gn);ga(jn);function kn(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"}u(kn,hn);ga(kn);
function ln(a,b){this.h=a.getUniformLocation(b,"f");this.d=a.getUniformLocation(b,"g");this.e=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.b=a.getUniformLocation(b,"h");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function mn(){this.a="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor\x3dtexture2D(g,a);gl_FragColor.rgb\x3dtexColor.rgb;gl_FragColor.a\x3dtexColor.a*f;}"}u(mn,gn);ga(mn);function nn(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"}u(nn,hn);ga(nn);
function on(a,b){this.d=a.getUniformLocation(b,"f");this.e=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.b=a.getUniformLocation(b,"g");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function pn(a){this.a=s(a)?a:[]}function qn(a,b,c){if(b!=c){var d=a.a,e=d.length,f;for(f=0;f<e;f+=2)if(b<=d[f]){d.splice(f,0,b,c);rn(a);return}d.push(b,c);rn(a)}}pn.prototype.clear=function(){this.a.length=0};function rn(a){a=a.a;var b=a.length,c=0,d;for(d=0;d<b;d+=2)a[d]!=a[d+1]&&(0<c&&a[c-2]<=a[d]&&a[d]<=a[c-1]?a[c-1]=Math.max(a[c-1],a[d+1]):(a[c++]=a[d],a[c++]=a[d+1]));a.length=c}function sn(a,b){var c=a.a,d=c.length,e;for(e=0;e<d;e+=2)b.call(void 0,c[e],c[e+1])}
pn.prototype.ka=function(){return 0===this.a.length};function tn(a,b,c){var d=a.a,e=d.length,f;for(f=0;f<e;f+=2)if(!(c<d[f]||d[f+1]<b)){if(d[f]>c)break;if(b<d[f])if(c==d[f])break;else if(c<d[f+1]){d[f]=Math.max(d[f],c);break}else d.splice(f,2),f-=2,e-=2;else if(b==d[f])if(c<d[f+1]){d[f]=c;break}else if(c==d[f+1]){d.splice(f,2);break}else d.splice(f,2),f-=2,e-=2;else if(c<d[f+1]){d.splice(f,2,d[f],b,c,d[f+1]);break}else if(c==d[f+1]){d[f+1]=b;break}else d[f+1]=b}rn(a)};function un(a,b,c){this.c=s(a)?a:[];this.a=[];this.b=new pn;a=s(b)?b:this.c.length;a<this.c.length&&qn(this.b,a,this.c.length);this.e=this.f=null;this.d=s(c)?c:35044}un.prototype.add=function(a){var b=a.length,c;a:{c=this.b.a;var d=c.length,e=-1,f,g,h;for(g=0;g<d;g+=2){h=c[g+1]-c[g];if(h==b){c=c[g];break a}h>b&&(-1==e||h<f)&&(e=c[g],f=h)}c=e}tn(this.b,c,c+b);for(d=0;d<b;++d)this.c[c+d]=a[d];a=0;for(d=this.a.length;a<d;++a)qn(this.a[a],c,c+b);return c};
un.prototype.Qa=function(){var a=this.b.a,b=a.length,c=0,d;for(d=0;d<b;d+=2)c+=a[d+1]-a[d];return this.c.length-c};un.prototype.remove=function(a,b){var c,d;qn(this.b,b,b+a);c=0;for(d=this.a.length;c<d;++c)tn(this.a[c],b,b+a)};function vn(a,b){Qk.call(this,a,b);this.J=new un([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.h=this.va=null;this.g=void 0;this.u=kd();this.B=md();this.Y=new dn;this.l=this.i=null}u(vn,Qk);
function wn(a,b,c){var d=a.e.d;if(s(a.g)&&a.g==c)d.bindFramebuffer(36160,a.h);else{b.tb.push(ya(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))},d,a.h,a.va));b=d.createTexture();d.bindTexture(3553,b);d.texImage2D(3553,0,6408,c,c,0,6408,5121,null);d.texParameteri(3553,10240,9729);d.texParameteri(3553,10241,9729);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.va=b;a.h=e;a.g=c}}
function xn(a,b,c,d){a=a.a;ue(a.ha,b)&&y(a,new ti(b,a,new cn,d,null,c))}vn.prototype.n=function(){this.h=this.va=null;this.g=void 0};function yn(a,b){vn.call(this,a,b);this.c=null}u(yn,vn);function zn(a,b){var c=b.e(),d=a.e.d,e=d.createTexture();d.bindTexture(3553,e);d.texImage2D(3553,0,6408,6408,5121,c);d.texParameteri(3553,10242,33071);d.texParameteri(3553,10243,33071);d.texParameteri(3553,10241,9729);d.texParameteri(3553,10240,9729);return e}yn.prototype.f=function(a,b,c,d){var e=this.a;return e.a.fd(b.extent,b.view2DState.resolution,b.view2DState.rotation,a,function(a){return c.call(d,a,e)})};
yn.prototype.d=function(a){var b=this.e.d,c=a.view2DState,d=c.center,e=c.resolution,f=c.rotation,g=this.c,h=this.va,m=this.a.a,n=a.U;n[0]||n[1]||(c=m.Xb(a.extent,e,a.pixelRatio,c.projection),null!==c&&(n=c.state,0==n?(oe(c,"change",this.t,!1,this),Gk(c)):2==n&&(g=c,h=zn(this,c),null===this.va||a.tb.push(ya(function(a,b){a.isContextLost()||a.deleteTexture(b)},b,this.va)))));null!==g&&(b=this.e.e.f,An(this,b.width,b.height,d,e,f,g.v()),d=this.u,od(d),rd(d,1,-1),qd(d,0,-1),this.c=g,this.va=h,Tk(a.attributions,
g.h),Uk(a,m))};function An(a,b,c,d,e,f,g){b*=e;c*=e;a=a.B;od(a);rd(a,2/b,2/c);sd(a,-f);qd(a,g[0]-d[0],g[1]-d[1]);rd(a,(g[2]-g[0])/2,(g[3]-g[1])/2);qd(a,1,1)};function Bn(){this.a="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor\x3dtexture2D(e,a);}"}u(Bn,gn);ga(Bn);function Cn(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position\x3dvec4(b*d.xy+d.zw,0.,1.);a\x3dc;}"}u(Cn,hn);ga(Cn);function Dn(a,b){this.b=a.getUniformLocation(b,"e");this.d=a.getUniformLocation(b,"d");this.a=a.getAttribLocation(b,"b");this.c=a.getAttribLocation(b,"c")};function En(a,b){vn.call(this,a,b);this.R=Bn.mb();this.Z=Cn.mb();this.c=null;this.C=new un([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.w=this.b=null;this.o=-1}u(En,vn);En.prototype.F=function(){var a=this.e.e,b=a.c,c=sa(this.C),d=a.a[c];Bb(d.ee.a,d.Kc);b.isContextLost()||b.deleteBuffer(d.buffer);delete a.a[c];En.H.F.call(this)};En.prototype.n=function(){En.H.n.call(this);this.c=null};
En.prototype.d=function(a){var b=this.e,c=b.e,d=b.d,e=a.view2DState,f=e.projection,g=this.a,h=g.a,m=Pk(h,f),n=jg(m.a,e.resolution,0),p=m.ea(n),q=h.uc(n,a.pixelRatio,f),r=q/m.ja(n),v=p/r,z=h.Rc(),B=e.center,A;p==e.resolution?(B=Xk(B,p,a.size),A=Hg(B,p,e.rotation,a.size)):A=a.extent;p=Lk(m,A,p);if(null!==this.b&&this.b.a==p.a&&(this.b.b==p.b&&this.b.d==p.d&&this.b.c==p.c)&&this.o==h.c)v=this.w;else{var E=[p.d-p.a+1,p.c-p.b+1],E=Math.max(E[0]*q,E[1]*q),C=Math.pow(2,Math.ceil(Math.log(E)/Math.LN2)),E=
v*C,M=m.rb(n),Q=M[0]+p.a*q*v,v=M[1]+p.b*q*v,v=[Q,v,Q+E,v+E];wn(this,a,C);d.viewport(0,0,C,C);d.clearColor(0,0,0,0);d.clear(16384);d.disable(3042);C=Fn(c,this.R,this.Z);c.Nd(C);null===this.c&&(this.c=new Dn(d,C));Gn(c,this.C);d.enableVertexAttribArray(this.c.a);d.vertexAttribPointer(this.c.a,2,5126,!1,16,0);d.enableVertexAttribArray(this.c.c);d.vertexAttribPointer(this.c.c,2,5126,!1,16,8);d.uniform1i(this.c.b,0);c={};c[n]={};var ha=xa(h.ud,h,c,Wk(function(a){return null!==a&&2==a.state&&Hn(b.c,a.d())},
h,r,f)),R=g.ga();s(R)||(R=!0);var C=!0,Q=ug(),qa=new Pb(0,0,0,0),Ea,Ta,Wa;for(Ta=p.a;Ta<=p.d;++Ta)for(Wa=p.b;Wa<=p.c;++Wa){M=h.Rb(n,Ta,Wa,r,f);Ea=M.state;if(2==Ea){if(Hn(b.c,M.d())){c[n][M.a.toString()]=M;continue}}else if(4==Ea||3==Ea&&!R)continue;C=!1;Ea=m.Pc(M.a,ha,null,qa,Q);Ea||(M=m.Uc(M.a,qa,Q),null===M||ha(n+1,M))}ha=xb(fc(c),Number);Hb(ha);var R=new Float32Array(4),ia,ab,Va,bd,qa=0;for(Ta=ha.length;qa<Ta;++qa)for(ab in Va=c[ha[qa]],Va)M=Va[ab],ia=Jk(m,M.a,Q),Wa=2*(ia[2]-ia[0])/E,Ea=2*(ia[3]-
ia[1])/E,bd=2*(ia[0]-v[0])/E-1,ia=2*(ia[1]-v[1])/E-1,jd(R,Wa,Ea,bd,ia),d.uniform4fv(this.c.d,R),In(b,M,q,z*r),d.drawArrays(5,0,4);C?(this.b=p,this.w=v,this.o=h.c):(this.w=this.b=null,this.o=-1,a.ya=!0)}Vk(a.Fc,h,n,p);var hc=b.g;Yk(a,h,m,r,f,A,n,g.ca(),function(a){var c;(c=2!=a.state)||(c=Hn(b.c,a.d()))||(c=a.d()in hc.b);c||Xj(hc,[a,Nk(m,a.a),m.ea(a.a.a),q,z*r])},this);Sk(a,h);Uk(a,h);d=this.u;od(d);qd(d,(B[0]-v[0])/(v[2]-v[0]),(B[1]-v[1])/(v[3]-v[1]));0!==e.rotation&&sd(d,e.rotation);rd(d,a.size[0]*
e.resolution/(v[2]-v[0]),a.size[1]*e.resolution/(v[3]-v[1]));qd(d,-0.5,-0.5)};function Jn(){this.K=0;this.b={};this.c=this.a=null}l=Jn.prototype;l.clear=function(){this.K=0;this.b={};this.c=this.a=null};function Hn(a,b){return a.b.hasOwnProperty(b)}l.forEach=function(a,b){for(var c=this.a;null!==c;)a.call(b,c.Kb,c.$c,this),c=c.Ca};l.get=function(a){a=this.b[a];if(a===this.c)return a.Kb;a===this.a?(this.a=this.a.Ca,this.a.sb=null):(a.Ca.sb=a.sb,a.sb.Ca=a.Ca);a.Ca=null;a.sb=this.c;this.c=this.c.Ca=a;return a.Kb};l.Qa=k("K");
l.S=function(){var a=Array(this.K),b=0,c;for(c=this.c;null!==c;c=c.sb)a[b++]=c.$c;return a};l.Ra=function(){var a=Array(this.K),b=0,c;for(c=this.c;null!==c;c=c.sb)a[b++]=c.Kb;return a};l.pop=function(){var a=this.a;delete this.b[a.$c];null!==a.Ca&&(a.Ca.sb=null);this.a=a.Ca;null===this.a&&(this.c=null);--this.K;return a.Kb};function Kn(a,b,c){c={$c:b,Ca:null,sb:a.c,Kb:c};null===a.c?a.a=c:a.c.Ca=c;a.c=c;a.b[b]=c;++a.K};function Ln(a,b){this.f=a;this.c=b;this.a={};this.d={};this.b={};this.e=null;x(this.f,"webglcontextlost",this.Qh,!1,this);x(this.f,"webglcontextrestored",this.Rh,!1,this)}
function Gn(a,b){var c=a.c,d=b.c,e=sa(b);if(e in a.a)e=a.a[e],c.bindBuffer(34962,e.buffer),sn(e.Kc,function(a,b){var e=d.slice(a,b);c.bufferSubData(34962,a,new Float32Array(e))}),e.Kc.clear();else{var f=c.createBuffer();c.bindBuffer(34962,f);c.bufferData(34962,new Float32Array(d),b.d);var g=new pn;b.a.push(g);a.a[e]={ee:b,buffer:f,Kc:g}}}l=Ln.prototype;
l.F=function(){bc(this.a,function(a){Bb(a.ee.a,a.Kc)});var a=this.c;a.isContextLost()||(bc(this.a,function(b){a.deleteBuffer(b.buffer)}),bc(this.b,function(b){a.deleteProgram(b)}),bc(this.d,function(b){a.deleteShader(b)}))};l.Ph=k("c");function Mn(a,b){var c=sa(b);if(c in a.d)return a.d[c];var d=a.c,e=d.createShader(b.G());d.shaderSource(e,b.a);d.compileShader(e);return a.d[c]=e}
function Fn(a,b,c){var d=sa(b)+"/"+sa(c);if(d in a.b)return a.b[d];var e=a.c,f=e.createProgram();e.attachShader(f,Mn(a,b));e.attachShader(f,Mn(a,c));e.linkProgram(f);return a.b[d]=f}l.Qh=function(){ic(this.a);ic(this.d);ic(this.b);this.e=null};l.Rh=ba();l.Nd=function(a){if(a==this.e)return!1;this.c.useProgram(a);this.e=a;return!0};function Nn(a,b){el.call(this,0,b);this.a=yc("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Cc(a,this.a,0);this.t=0;this.n=td();this.i=!0;this.d=zd(this.a,{antialias:!0,depth:!1,Hf:!0,preserveDrawingBuffer:!1,stencil:!0});this.e=new Ln(this.a,this.d);x(this.a,"webglcontextlost",this.nh,!1,this);x(this.a,"webglcontextrestored",this.oh,!1,this);this.c=new Jn;this.l=null;this.g=new Uj(xa(function(a){var b=a[1];a=a[2];var e=b[0]-this.l[0],b=b[1]-this.l[1];
return 65536*Math.log(a)+Math.sqrt(e*e+b*b)/a},this),function(a){return a[0].d()});this.o=xa(function(){if(!this.g.ka()){Zj(this.g);var a=Vj(this.g);In(this,a[0],a[3],a[4])}},this);this.h=0;On(this)}u(Nn,el);
function In(a,b,c,d){var e=a.d,f=b.d();if(Hn(a.c,f))a=a.c.get(f),e.bindTexture(3553,a.va),9729!=a.Be&&(e.texParameteri(3553,10240,9729),a.Be=9729),9729!=a.Ce&&(e.texParameteri(3553,10240,9729),a.Ce=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.n.canvas,m=a.n;a.t!=c?(h.width=c,h.height=c,a.t=c):m.clearRect(0,0,c,c);m.drawImage(b.b(),d,d,c,c,0,0,c,c);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,0,6408,6408,5121,b.b());e.texParameteri(3553,10240,9729);e.texParameteri(3553,
10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);Kn(a.c,f,{va:g,Be:9729,Ce:9729})}}l=Nn.prototype;l.Jc=function(a){return a instanceof jl?new yn(this,a):a instanceof L?new En(this,a):null};function Pn(a,b,c){var d=a.f;ue(d.ha,b)&&y(d,new ti(b,d,new cn,c,null,a.e))}l.F=function(){var a=this.d;a.isContextLost()||this.c.forEach(function(b){null===b||a.deleteTexture(b.va)});Pd(this.e);Nn.H.F.call(this)};
l.Gf=function(a,b){for(var c=this.d,d;1024<this.c.Qa()-this.h;){d=this.c.a.Kb;if(null===d)if(+this.c.a.$c==b.index)break;else--this.h;else c.deleteTexture(d.va);this.c.pop()}};l.nh=function(a){a.preventDefault();this.c.clear();this.h=0;bc(this.b,function(a){a.n()})};l.oh=function(){On(this);this.f.N()};function On(a){a=a.d;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
l.gd=function(a){var b=this.e,c=this.d;if(c.isContextLost())return!1;if(null===a)return this.i&&(Xc(this.a,!1),this.i=!1),!1;this.l=a.focus;Kn(this.c,(-a.index).toString(),null);++this.h;var d=[],e=a.ad,f=a.view2DState.resolution,g,h,m;g=0;for(h=e.length;g<h;++g)m=e[g],m.visible&&(f>=m.minResolution&&f<m.maxResolution)&&1==m.Ya&&d.push(m);g=0;for(h=d.length;g<h;++g)m=d[g],e=gl(this,m.layer),e.d(a,m);g=a.size[0]*a.pixelRatio;h=a.size[1]*a.pixelRatio;if(this.a.width!=g||this.a.height!=h)this.a.width=
g,this.a.height=h;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.a.width,this.a.height);Pn(this,"precompose",a);g=0;for(h=d.length;g<h;++g){m=d[g];c=e=gl(this,m.layer);e=a;f=b;xn(c,"precompose",f,e);Gn(f,c.J);var n=f.c,p=m.brightness||1!=m.contrast||m.hue||1!=m.saturation,q=void 0,r=void 0;p?(q=jn.mb(),r=kn.mb()):(q=mn.mb(),r=nn.mb());q=Fn(f,q,r);r=void 0;p?null===c.i?(r=new ln(n,q),c.i=r):r=c.i:null===c.l?(r=new on(n,q),c.l=r):r=c.l;f.Nd(q)&&
(n.enableVertexAttribArray(r.a),n.vertexAttribPointer(r.a,2,5126,!1,16,0),n.enableVertexAttribArray(r.c),n.vertexAttribPointer(r.c,2,5126,!1,16,8),n.uniform1i(r.b,0));n.uniformMatrix4fv(r.f,!1,c.u);n.uniformMatrix4fv(r.e,!1,c.B);p&&n.uniformMatrix4fv(r.h,!1,en(c.Y,m.brightness,m.contrast,m.hue,m.saturation));n.uniform1f(r.d,m.opacity);n.bindTexture(3553,c.va);n.drawArrays(5,0,4);xn(c,"postcompose",f,e)}this.i||(Xc(this.a,!0),this.i=!0);fl(a);1024<this.c.Qa()-this.h&&a.tb.push(xa(this.Gf,this));this.g.ka()||
(a.tb.push(this.o),a.ya=!0);Pn(this,"postcompose",a);il(this,a);hl(a)};var Qn=["canvas","webgl","dom"];
function O(a){Me.call(this);var b=Rn(a);this.tf=s(a.pixelRatio)?a.pixelRatio:Ad;this.sf=b.ol3Logo;this.w=new yj(this.ji,void 0,this);Od(this,this.w);this.md=kd();this.uf=kd();this.pd=0;this.l=this.J=this.Z=this.d=null;this.b=vc("DIV","ol-viewport");this.b.style.position="relative";this.b.style.overflow="hidden";this.b.style.width="100%";this.b.style.height="100%";this.b.style.msTouchAction="none";Hd&&(this.b.className="ol-touch");this.Ma=vc("DIV","ol-overlaycontainer");this.b.appendChild(this.Ma);
this.B=vc("DIV","ol-overlaycontainer-stopevent");x(this.B,["click","dblclick","mousedown","touchstart","MSPointerDown",Xf,"mousewheel"],Rd);this.b.appendChild(this.B);a=new Pf(this);x(a,ec($f),this.Le,!1,this);Od(this,a);this.wa=b.keyboardEventTarget;this.u=new Ij;x(this.u,"key",this.we,!1,this);Od(this,this.u);a=new Qj(this.b);x(a,"mousewheel",this.we,!1,this);Od(this,a);this.g=b.controls;this.od=b.deviceOptions;this.h=b.interactions;this.i=b.overlays;this.ca=new b.ki(this.b,this);Od(this,this.ca);
this.vf=new Ej;x(this.vf,"resize",this.o,!1,this);this.R=null;this.C=[];this.jb=[];this.ec=new ak(xa(this.Xf,this),xa(this.zg,this));this.cc={};x(this,Qe("layergroup"),this.jg,!1,this);x(this,Qe("view"),this.Ag,!1,this);x(this,Qe("size"),this.xg,!1,this);x(this,Qe("target"),this.yg,!1,this);this.Q(b.ui);this.g.forEach(function(a){a.setMap(this)},this);x(this.g,"add",function(a){a.element.setMap(this)},!1,this);x(this.g,"remove",function(a){a.element.setMap(null)},!1,this);this.h.forEach(function(a){a.setMap(this)},
this);x(this.h,"add",function(a){a.element.setMap(this)},!1,this);x(this.h,"remove",function(a){a.element.setMap(null)},!1,this);this.i.forEach(function(a){a.setMap(this)},this);x(this.i,"add",function(a){a.element.setMap(this)},!1,this);x(this.i,"remove",function(a){a.element.setMap(null)},!1,this)}u(O,Me);l=O.prototype;l.ae=function(a){this.g.push(a)};l.be=function(a){this.h.push(a)};l.ce=function(a){this.bb().Wb().push(a)};l.de=function(a){this.i.push(a)};
l.na=function(a){this.N();Array.prototype.push.apply(this.C,arguments)};l.F=function(){Dc(this.b);O.H.F.call(this)};l.dd=function(a,b,c,d,e){if(null!==this.d){a=this.pa(a);a:{var f=this.ca,g=this.d;c=s(c)?c:null;d=s(d)?d:Ae;e=s(e)?e:null;var h=f.f.bb().Sc(),m=g.view2DState.resolution,n;for(n=h.length-1;0<=n;--n){var p=h[n],q=p.layer;if(p.visible&&(m>=p.minResolution&&m<p.maxResolution)&&d.call(e,q)&&(p=gl(f,q).f(a,g,b,c))){b=p;break a}}b=void 0}return b}};l.yd=function(a){return this.pa(this.Qc(a))};
l.Qc=function(a){if(s(a.changedTouches)){a=a.changedTouches.item(0);var b=Sc(this.b);return[a.clientX-b.x,a.clientY-b.y]}a=Rc(a,this.b);return[a.x,a.y]};l.Vb=function(){return this.get("target")};O.prototype.getTarget=O.prototype.Vb;l=O.prototype;l.pa=function(a){var b=this.d;if(null===b)return null;a=a.slice();return dl(b.We,a,a)};l.ne=k("g");l.se=k("i");l.qe=k("h");l.bb=function(){return this.get("layergroup")};O.prototype.getLayerGroup=O.prototype.bb;O.prototype.Ya=function(){var a=this.bb();if(s(a))return a.Wb()};
O.prototype.f=function(a){var b=this.d;if(null===b)return null;a=a.slice(0,2);return dl(b.he,a,a)};O.prototype.e=function(){return this.get("size")};O.prototype.getSize=O.prototype.e;O.prototype.a=function(){return this.get("view")};O.prototype.getView=O.prototype.a;l=O.prototype;l.ve=k("b");l.Xf=function(a,b,c,d){var e=this.d;if(!(null!==e&&b in e.dc&&e.dc[b][a.a.toString()]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};
l.we=function(a,b){var c=new Nf(b||a.type,this,a);this.Le(c)};l.Le=function(a){if(null!==this.d){this.R=a.coordinate;a.b=this.d;var b=this.h.a,c;if(!1!==y(this,a))for(c=b.length-1;0<=c&&b[c].Ea(a);c--);}};
l.ug=function(){var a=this.d,b=this.ec;if(!b.ka()){var c=16,d=c,e=0;if(null!==a){var e=a.U,f=this.od;e[0]&&(c=!1===f.loadTilesWhileAnimating?0:8,d=2);e[1]&&(c=!1===f.loadTilesWhileInteracting?0:8,d=2);e=dc(a.dc)}c*=e;d*=e;if(b.d<c){Zj(b);c=Math.min(c-b.d,d,b.Qa());for(d=0;d<c;++d)e=Vj(b)[0],oe(e,"change",b.h,!1,b),0==e.state&&(e.state=1,e.e=[oe(e.c,"error",e.l,!1,e),oe(e.c,"load",e.t,!1,e)],e.n(e,e.i));b.d+=c}}b=this.jb;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};l.xg=function(){this.N()};
l.yg=function(){var a=this.Vb(),a=s(a)?rc(a):null;Pj(this.u);null===a?Dc(this.b):(a.appendChild(this.b),Jj(this.u,null===this.wa?a:this.wa));this.o()};l.zg=function(){this.N()};l.Bg=function(){this.N()};l.Ag=function(){null!==this.J&&(re(this.J),this.J=null);var a=this.a();null!=a&&(this.J=x(a,"propertychange",this.Bg,!1,this));this.N()};l.kg=function(){this.N()};l.lg=function(){this.N()};
l.jg=function(){if(null!==this.l){for(var a=this.l.length,b=0;b<a;++b)re(this.l[b]);this.l=null}a=this.bb();null!=a&&(this.l=[x(a,"propertychange",this.lg,!1,this),x(a,"change",this.kg,!1,this)]);this.N()};l.df=function(){var a=this.w;zj(a);a.je()};l.N=function(){null!=this.w.V||this.w.start()};l.$e=function(a){if(s(this.g.remove(a)))return a};l.af=function(a){var b;s(this.h.remove(a))&&(b=a);return b};l.bf=function(a){return this.bb().Wb().remove(a)};l.cf=function(a){if(s(this.i.remove(a)))return a};
l.ji=function(a){var b,c,d,e=this.e();b=this.a();var f=s(b)?this.a().T():void 0,g=null;if(s(e)&&0<e[0]&&0<e[1]&&s(f)&&f.Id()){var g=Db(b.l),h=this.bb().Sc(),m={};b=0;for(c=h.length;b<c;++b)m[sa(h[b].layer)]=h[b];d=vh(f);g={ya:!1,attributions:{},he:this.md,extent:null,focus:null===this.R?d.center:this.R,index:this.pd++,Ed:m,ad:h,Hd:{},pixelRatio:this.tf,We:this.uf,tb:[],size:e,cc:this.cc,oi:this.ec,time:a,Fc:{},view2DState:d,U:g,dc:{}};this.sf&&(g.Hd["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]=
"http://ol3js.org/")}a=this.C;b=e=0;for(c=a.length;b<c;++b)f=a[b],f(this,g)&&(a[e++]=f);a.length=e;null!==g&&(g.extent=Hg(d.center,d.resolution,d.rotation,g.size));this.d=g;this.ca.gd(g);null!==g&&(g.ya&&this.N(),Array.prototype.push.apply(this.jb,g.tb),0!==this.C.length||(g.U[0]||g.U[1]||this.Z&&Cg(g.extent,this.Z))||(y(this,new df("moveend",this,g)),this.Z=yg(g.extent)));y(this,new df("postrender",this,g));b=d=this.ug;this&&(b=xa(d,this));pa(ea.setImmediate)?ea.setImmediate(b):(Cj||(Cj=Dj()),Cj(b))};
l.Td=function(a){this.A("layergroup",a)};O.prototype.setLayerGroup=O.prototype.Td;O.prototype.n=function(a){this.A("size",a)};O.prototype.setSize=O.prototype.n;O.prototype.ga=function(a){this.A("target",a)};O.prototype.setTarget=O.prototype.ga;O.prototype.La=function(a){this.A("view",a)};O.prototype.setView=O.prototype.La;O.prototype.wb=function(a){a=sa(a).toString();this.cc[a]=!0;this.N()};
O.prototype.o=function(){var a=this.Vb(),a=s(a)?rc(a):null;null===a?this.n(void 0):(a=Zc(a),this.n([a.width,a.height]))};O.prototype.fc=function(a){a=sa(a).toString();delete this.cc[a];this.N()};
function Rn(a){var b=null;s(a.keyboardEventTarget)&&(b=na(a.keyboardEventTarget)?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d=s(a.ol3Logo)?a.ol3Logo:!0,e=a.layers instanceof vk?a.layers:new vk({layers:a.layers});c.layergroup=e;c.target=a.target;c.view=s(a.view)?a.view:new G;var e=el,f;s(a.renderer)?la(a.renderer)?f=a.renderer:na(a.renderer)&&(f=[a.renderer]):f=Qn;var g,h;g=0;for(h=f.length;g<h;++g){var m=f[g];if("canvas"==m){if(Dd){e=Sm;break}}else if("dom"==m){e=
bn;break}else if("webgl"==m&&Kd){e=Nn;break}}f=s(a.controls)?la(a.controls)?new D(Db(a.controls)):a.controls:fk();g=s(a.deviceOptions)?a.deviceOptions:{};h=s(a.interactions)?la(a.interactions)?new D(Db(a.interactions)):a.interactions:rk();a=s(a.overlays)?la(a.overlays)?new D(Db(a.overlays)):a.overlays:new D;return{controls:f,deviceOptions:g,interactions:h,keyboardEventTarget:b,ol3Logo:d,overlays:a,ki:e,ui:c}}Ck();function Sn(a,b){Qd.call(this,a);this.feature=b}u(Sn,Qd);
function Tn(a){Hh.call(this);this.w=null;this.C=s(a.source)?a.source:null;this.u=s(a.features)?a.features:null;this.R=s(a.snapTolerance)?a.snapTolerance:12;this.J=s(a.minPointsPerRing)?a.minPointsPerRing:3;var b=this.n=a.type,c;if("Point"===b||"MultiPoint"===b)c=Un;else if("LineString"===b||"MultiLineString"===b)c=Vn;else if("Polygon"===b||"MultiPolygon"===b)c=Wn;this.a=c;this.d=this.i=this.l=this.e=this.f=null;this.Y=4;this.o=new Ri({style:s(a.style)?a.style:Xn()});this.B=a.geometryName}u(Tn,Hh);
function Xn(){var a=Qi();return function(b){return a[b.L().G()]}}Tn.prototype.setMap=function(a){null===a&&Yn(this);this.o.setMap(a);Tn.H.setMap.call(this,a)};Tn.prototype.Ea=function(a){var b;b=a.map;if(Fc(document,b.b)&&"none"!=b.b.style.display){var c=b.e();null==c||0>=c[0]||0>=c[1]?b=!1:(b=b.a(),b=s(b)&&b.Id()?!0:!1)}else b=!1;if(!b)return!0;b=!0;a.type===Yf?b=Zn(this,a):a.type===Sf&&(b=!1);return Tn.H.Ea.call(this,a)&&b};Tn.prototype.gb=function(a){this.w=a.pixel;return!0};
Tn.prototype.hb=function(a){var b=this.w,c=a.pixel,d=b[0]-c[0],b=b[1]-c[1],c=!0;if(d*d+b*b<=this.Y){Zn(this,a);if(null===this.f)$n(this,a);else if(this.a===Un||ao(this,a)){a=Yn(this);var e,d=a.L();this.a===Un?e=d.D():this.a===Vn?(e=d.D(),e.pop(),d.O(e)):this.a===Wn&&(this.d[0].pop(),this.d[0].push(this.d[0][0]),d.O(this.d),e=d.D());"MultiPoint"===this.n?a.Wa(new pm([e])):"MultiLineString"===this.n?a.Wa(new mm([e])):"MultiPolygon"===this.n&&a.Wa(new qm([e]));null===this.u||this.u.push(a);null===this.C||
this.C.Fa(a);y(this,new Sn("drawend",a))}else e=a.coordinate,a=this.e.L(),this.a===Vn?(this.f=e.slice(),d=a.D(),d.push(e.slice()),a.O(d)):this.a===Wn&&(this.d[0].push(e.slice()),a.O(this.d)),bo(this);c=!1}return c};
function Zn(a,b){if(a.a===Un&&null===a.f)$n(a,b);else if(null!==a.f){var c=b.coordinate,d=a.e.L(),e,f;a.a===Un?(f=d.D(),f[0]=c[0],f[1]=c[1],d.O(f)):(a.a===Vn?e=d.D():a.a===Wn&&(e=a.d[0]),ao(a,b)&&(c=a.f.slice()),a.l.L().O(c),f=e[e.length-1],f[0]=c[0],f[1]=c[1],a.a===Vn?d.O(e):a.a===Wn&&(a.i.L().O(e),d.O(a.d)));bo(a)}return!0}
function ao(a,b){var c=!1;if(null!==a.e){var d=a.e.L(),e=!1,f=[a.f];a.a===Vn?e=2<d.D().length:a.a===Wn&&(e=d.D()[0].length>a.J,f=[a.d[0][0],a.d[0][a.d[0].length-2]]);if(e)for(var d=b.map,e=0,g=f.length;e<g;e++){var h=f[e],m=d.f(h),n=b.pixel,c=n[0]-m[0],m=n[1]-m[1];if(c=Math.sqrt(c*c+m*m)<=a.R){a.f=h;break}}}return c}
function $n(a,b){var c=b.coordinate;a.f=c;var d;a.a===Un?d=new hi(c.slice()):(a.l=new I(new hi(c.slice())),a.a===Vn?d=new km([c.slice(),c.slice()]):a.a===Wn&&(a.i=new I(new km([c.slice(),c.slice()])),a.d=[[c.slice(),c.slice()]],d=new H(a.d)));a.e=new I;s(a.B)&&a.e.d(a.B);a.e.Wa(d);bo(a);y(a,new Sn("drawstart",a.e))}function Yn(a){a.f=null;var b=a.e;null!==b&&(a.e=null,a.l=null,a.i=null,a.o.a.clear());return b}
function bo(a){var b=[a.e];null===a.i||b.push(a.i);null===a.l||b.push(a.l);a.o.Dc(new D(b))}var Un="Point",Vn="LineString",Wn="Polygon";var co=new Sg(6378137);function P(a){Me.call(this);a=s(a)?a:{};this.a=null;this.f=sh;this.d=void 0;x(this,Qe("projection"),this.$g,!1,this);x(this,Qe("tracking"),this.ah,!1,this);s(a.projection)&&this.i(qh(a.projection));s(a.trackingOptions)&&this.l(a.trackingOptions);this.b(s(a.tracking)?a.tracking:!1)}u(P,Me);l=P.prototype;l.F=function(){this.b(!1);P.H.F.call(this)};l.$g=function(){var a=this.h();null!=a&&(this.f=$g(qh("EPSG:4326"),a),null===this.a||this.A("position",this.f(this.a)))};
l.ah=function(){if(Fd){var a=this.g();a&&!s(this.d)?this.d=ea.navigator.geolocation.watchPosition(xa(this.di,this),xa(this.ei,this),this.e()):!a&&s(this.d)&&(ea.navigator.geolocation.clearWatch(this.d),this.d=void 0)}};
l.di=function(a){a=a.coords;this.A("accuracy",a.accuracy);this.A("altitude",null===a.altitude?void 0:a.altitude);this.A("altitudeAccuracy",null===a.altitudeAccuracy?void 0:a.altitudeAccuracy);this.A("heading",null===a.heading?void 0:Zb(a.heading));null===this.a?this.a=[a.longitude,a.latitude]:(this.a[0]=a.longitude,this.a[1]=a.latitude);var b=this.f(this.a);this.A("position",b);this.A("speed",null===a.speed?void 0:a.speed);a=si(co,this.a,a.accuracy);a.xb(this.f);this.A("accuracyGeometry",a);this.k()};
l.ei=function(a){a.type="error";y(this,a)};l.vd=function(){return this.get("accuracy")};P.prototype.getAccuracy=P.prototype.vd;P.prototype.n=function(){return this.get("accuracyGeometry")||null};P.prototype.getAccuracyGeometry=P.prototype.n;P.prototype.o=function(){return this.get("altitude")};P.prototype.getAltitude=P.prototype.o;P.prototype.w=function(){return this.get("altitudeAccuracy")};P.prototype.getAltitudeAccuracy=P.prototype.w;P.prototype.B=function(){return this.get("heading")};
P.prototype.getHeading=P.prototype.B;P.prototype.C=function(){return this.get("position")};P.prototype.getPosition=P.prototype.C;P.prototype.h=function(){return this.get("projection")};P.prototype.getProjection=P.prototype.h;P.prototype.u=function(){return this.get("speed")};P.prototype.getSpeed=P.prototype.u;P.prototype.g=function(){return this.get("tracking")};P.prototype.getTracking=P.prototype.g;P.prototype.e=function(){return this.get("trackingOptions")};P.prototype.getTrackingOptions=P.prototype.e;
P.prototype.i=function(a){this.A("projection",a)};P.prototype.setProjection=P.prototype.i;P.prototype.b=function(a){this.A("tracking",a)};P.prototype.setTracking=P.prototype.b;P.prototype.l=function(a){this.A("trackingOptions",a)};P.prototype.setTrackingOptions=P.prototype.l;function eo(a,b,c,d,e){Tj.call(this,a,b);this.i=c;this.c=new Image;null!==d&&(this.c.crossOrigin=d);this.f={};this.e=null;this.n=e}u(eo,Tj);eo.prototype.b=function(a){if(s(a)){var b=sa(a);if(b in this.f)return this.f[b];a=gc(this.f)?this.c:this.c.cloneNode(!1);return this.f[b]=a}return this.c};eo.prototype.d=k("i");eo.prototype.l=function(){this.state=3;wb(this.e,re);this.e=null;y(this,"change")};
eo.prototype.t=function(){s(this.c.naturalWidth)||(this.c.naturalWidth=this.c.width,this.c.naturalHeight=this.c.height);this.state=this.c.naturalWidth&&this.c.naturalHeight?2:4;wb(this.e,re);this.e=null;y(this,"change")};function S(a){Me.call(this);this.n=s(a.insertFirst)?a.insertFirst:!0;this.u=s(a.stopEvent)?a.stopEvent:!0;this.o=s(a.offsetX)?a.offsetX:0;this.w=s(a.offsetY)?a.offsetY:0;this.b=yc("DIV");this.b.style.position="absolute";this.a={Ic:"",bd:"",hd:"",ld:"",visible:!0};this.f=null;x(this,Qe("element"),this.dg,!1,this);x(this,Qe("map"),this.pg,!1,this);x(this,Qe("position"),this.sg,!1,this);x(this,Qe("positioning"),this.tg,!1,this);s(a.element)&&this.jd(a.element);s(a.position)&&this.i(a.position);s(a.positioning)&&
this.l(a.positioning)}u(S,Me);S.prototype.h=function(){return this.get("element")};S.prototype.getElement=S.prototype.h;S.prototype.d=function(){return this.get("map")};S.prototype.getMap=S.prototype.d;S.prototype.g=function(){return this.get("position")};S.prototype.getPosition=S.prototype.g;S.prototype.e=function(){return this.get("positioning")};S.prototype.getPositioning=S.prototype.e;l=S.prototype;l.dg=function(){Ac(this.b);var a=this.h();null!=a&&zc(this.b,a)};
l.pg=function(){null!==this.f&&(Dc(this.b),re(this.f),this.f=null);var a=this.d();null!=a&&(this.f=x(a,"postrender",this.dh,!1,this),fo(this),a=this.u?a.B:a.Ma,this.n?Cc(a,this.b,0):zc(a,this.b))};l.dh=function(){fo(this)};l.sg=function(){fo(this)};l.tg=function(){fo(this)};l.jd=function(a){this.A("element",a)};S.prototype.setElement=S.prototype.jd;S.prototype.setMap=function(a){this.A("map",a)};S.prototype.setMap=S.prototype.setMap;S.prototype.i=function(a){this.A("position",a)};
S.prototype.setPosition=S.prototype.i;S.prototype.l=function(a){this.A("positioning",a)};S.prototype.setPositioning=S.prototype.l;
function fo(a){var b=a.d(),c=a.g();if(s(b)&&null!==b.d&&s(c)){var c=b.f(c),d=b.e(),b=a.b.style,e=a.e();if("bottom-right"==e||"center-right"==e||"top-right"==e){""!==a.a.bd&&(a.a.bd=b.left="");var f=Math.round(d[0]-c[0])+"px";a.a.hd!=f&&(a.a.hd=b.right=f)}else{""!==a.a.hd&&(a.a.hd=b.right="");f=-a.o;if("bottom-center"==e||"center-center"==e||"top-center"==e)f+=Uc(a.b).width/2;f=Math.round(c[0]-f)+"px";a.a.bd!=f&&(a.a.bd=b.left=f)}if("bottom-left"==e||"bottom-center"==e||"bottom-right"==e)""!==a.a.ld&&
(a.a.ld=b.top=""),c=Math.round(d[1]-c[1])+"px",a.a.Ic!=c&&(a.a.Ic=b.bottom=c);else{""!==a.a.Ic&&(a.a.Ic=b.bottom="");d=-a.w;if("center-left"==e||"center-center"==e||"center-right"==e)d+=Uc(a.b).height/2;c=Math.round(c[1]-d)+"px";a.a.ld!=c&&(a.a.ld=b.top=c)}a.a.visible||(Xc(a.b,!0),a.a.visible=!0)}else a.a.visible&&(Xc(a.b,!1),a.a.visible=!1)};var go=cb?"webkitfullscreenchange":bb?"mozfullscreenchange":$a?"MSFullscreenChange":"fullscreenchange";function ho(){var a=oc().a,b=a.body;return!!(b.webkitRequestFullscreen||b.mozRequestFullScreen&&a.mozFullScreenEnabled||b.msRequestFullscreen&&a.msFullscreenEnabled||b.requestFullscreen&&a.fullscreenEnabled)}
function io(a){a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen?a.msRequestFullscreen():a.requestFullscreen&&a.requestFullscreen()}function jo(){var a=oc().a;return!!(a.webkitIsFullScreen||a.mozFullScreen||a.msFullscreenElement||a.fullscreenElement)};function ko(a){a=s(a)?a:{};this.e=s(a.className)?a.className:"ol-full-screen";var b=vc("SPAN",{role:"tooltip"},s(a.tipLabel)?a.tipLabel:"Toggle full-screen"),c=vc("BUTTON",{"class":this.e+"-"+jo()+" ol-has-tooltip"});c.appendChild(b);b=new Gf(c);Od(this,b);x(b,sf,this.f,!1,this);x(c,["mouseout",Wd],function(){this.blur()},!1);x(ea.document,go,this.g,!1,this);b=this.e+" ol-unselectable ol-control"+(ho()?"":"ol-unsupported");c=vc("DIV",b,c);J.call(this,{element:c,target:a.target});this.i=s(a.keys)?
a.keys:!1}u(ko,J);ko.prototype.f=function(a){ho()&&(a.a.preventDefault(),a=this.b,null!==a&&(jo()?(a=oc().a,a.webkitCancelFullScreen?a.webkitCancelFullScreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.msExitFullscreen?a.msExitFullscreen():a.exitFullscreen&&a.exitFullscreen()):(a=a.Vb(),a=rc(a),this.i?a.mozRequestFullScreenWithKeys?a.mozRequestFullScreenWithKeys():a.webkitRequestFullscreen?a.webkitRequestFullscreen():io(a):io(a))))};
ko.prototype.g=function(){var a=this.e+"-true",b=this.e+"-false",c=Ec(this.element),d=this.b;jo()?Wb(c,b,a):Wb(c,a,b);null===d||d.o()};function T(a){a=s(a)?a:{};var b=vc("DIV",{"class":s(a.className)?a.className:"ol-mouse-position"});J.call(this,{element:b,target:a.target});x(this,Qe("projection"),this.J,!1,this);s(a.coordinateFormat)&&this.o(a.coordinateFormat);s(a.projection)&&this.n(qh(a.projection));this.R=s(a.undefinedHTML)?a.undefinedHTML:"";this.w=b.innerHTML;this.i=this.f=this.e=null}u(T,J);
T.prototype.d=function(a){a=a.b;null===a?this.e=null:this.e!=a.view2DState.projection&&(this.e=a.view2DState.projection,this.f=null);lo(this,this.i)};T.prototype.J=function(){this.f=null};T.prototype.g=function(){return this.get("coordinateFormat")};T.prototype.getCoordinateFormat=T.prototype.g;T.prototype.l=function(){return this.get("projection")};T.prototype.getProjection=T.prototype.l;T.prototype.B=function(a){a=Rc(a,this.b.b);this.i=[a.x,a.y];lo(this,this.i)};
T.prototype.C=function(){lo(this,null);this.i=null};T.prototype.setMap=function(a){T.H.setMap.call(this,a);null!==a&&(a=a.b,this.h.push(x(a,"mousemove",this.B,!1,this),x(a,"mouseout",this.C,!1,this)))};T.prototype.o=function(a){this.A("coordinateFormat",a)};T.prototype.setCoordinateFormat=T.prototype.o;T.prototype.n=function(a){this.A("projection",a)};T.prototype.setProjection=T.prototype.n;
function lo(a,b){var c=a.R;if(null!==b&&null!==a.e){if(null===a.f){var d=a.l();a.f=s(d)?$g(a.e,d):sh}d=a.b.pa(b);null!==d&&(a.f(d,d),c=a.g(),c=s(c)?c(d):d.toString())}s(a.w)&&c==a.w||(a.element.innerHTML=c,a.w=c)};function mo(a){a=s(a)?a:{};var b=s(a.className)?a.className:"ol-scale-line";this.l=vc("DIV",{"class":b+"-inner"});this.o=vc("DIV",{"class":b+" ol-unselectable"},this.l);this.w=null;this.n=s(a.minWidth)?a.minWidth:64;this.f=!1;this.C=void 0;this.B="";this.e=null;J.call(this,{element:this.o,target:a.target});x(this,Qe("units"),this.J,!1,this);this.i(a.units||"metric")}u(mo,J);var no=[1,2,5];mo.prototype.g=function(){return this.get("units")};mo.prototype.getUnits=mo.prototype.g;
mo.prototype.d=function(a){a=a.b;null===a?this.w=null:this.w=a.view2DState;oo(this)};mo.prototype.J=function(){oo(this)};mo.prototype.i=function(a){this.A("units",a)};mo.prototype.setUnits=mo.prototype.i;
function oo(a){var b=a.w;if(null===b)a.f&&(Xc(a.o,!1),a.f=!1);else{var c=b.center,d=b.projection,b=d.d(b.resolution,c),e=d.Ja,f=a.g();"degrees"!=e||"metric"!=f&&"imperial"!=f?"ft"!=e&&"m"!=e||"degrees"!=f?a.e=null:(null===a.e&&(a.e=$g(d,qh("EPSG:4326"))),c=Math.cos(Zb(a.e(c)[1])),d=Ug.radius,"ft"==e&&(d/=0.3048),b*=180/(Math.PI*c*d)):(a.e=null,c=Math.cos(Zb(c[1])),b*=Math.PI*c*Ug.radius/180);c=a.n*b;e="";"degrees"==f?c<1/60?(e="\u2033",b*=3600):1>c?(e="\u2032",b*=60):e="\u00b0":"imperial"==f?0.9144>
c?(e="in",b/=0.0254):1609.344>c?(e="ft",b/=0.3048):(e="mi",b/=1609.344):"nautical"==f?(b/=1852,e="nm"):"metric"==f?1>c?(e="mm",b*=1E3):1E3>c?e="m":(e="km",b/=1E3):"us"==f&&(0.9144>c?(e="in",b*=39.37):1609.344>c?(e="ft",b/=0.30480061):(e="mi",b/=1609.3472));for(var f=3*Math.floor(Math.log(a.n*b)/Math.log(10)),g,h;;){g=no[f%3]*Math.pow(10,Math.floor(f/3));h=Math.round(g/b);if(h>=a.n)break;++f}g=g+e;a.B!=g&&(a.l.innerHTML=g,a.B=g);a.C!=h&&(a.l.style.width=h+"px",a.C=h);a.f||(Xc(a.o,!0),a.f=!0)}};function po(a){Ld.call(this);this.c=a;this.a={}}u(po,Ld);var qo=[];po.prototype.sa=function(a,b,c,d,e){la(b)||(qo[0]=b,b=qo);for(var f=0;f<b.length;f++){var g=x(a,b[f],c||this,d||!1,e||this.c||this);this.a[g.key]=g}return this};
po.prototype.Vd=function(a,b,c,d,e){if(la(b))for(var f=0;f<b.length;f++)this.Vd(a,b[f],c,d,e);else{a:if(e=e||this.c||this,d=!!d,c=ke(c||this),ce(a))a=a.ha.a[b],b=-1,a&&(b=Ge(a,c,d,e)),e=-1<b?a[b]:null;else{if(a=qe(a,b,d))for(b=0;b<a.length;b++)if(!a[b].ib&&a[b].Ta==c&&a[b].capture==d&&a[b].Db==e){e=a[b];break a}e=null}e&&(re(e),delete this.a[e.key])}return this};function ro(a){bc(a.a,re);a.a={}}po.prototype.F=function(){po.H.F.call(this);ro(this)};
po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function so(a,b,c){He.call(this);this.target=a;this.handle=b||a;this.c=c||new Jc(NaN,NaN,NaN,NaN);this.b=qc(a);this.a=new po(this);Od(this,this.a);x(this.handle,["touchstart","mousedown"],this.lf,!1,this)}u(so,He);var to=$a||bb&&ob("1.9.3");l=so.prototype;l.clientX=0;l.clientY=0;l.screenX=0;l.screenY=0;l.mf=0;l.nf=0;l.Sb=0;l.Tb=0;l.le=!0;l.zb=!1;l.ze=0;l.Gg=0;l.Cg=!1;l.Xd=!1;
l.F=function(){so.H.F.call(this);pe(this.handle,["touchstart","mousedown"],this.lf,!1,this);ro(this.a);to&&this.b.releaseCapture();this.handle=this.target=null};function uo(a){s(a.e)||(a.e=Yc(a.target));return a.e}
l.lf=function(a){var b="mousedown"==a.type;if(!this.le||this.zb||b&&!ae(a))y(this,"earlycancel");else{vo(a);if(0==this.ze)if(y(this,new wo("start",this,a.clientX,a.clientY,a)))this.zb=!0,a.preventDefault();else return;else a.preventDefault();var b=this.b,c=b.documentElement,d=!to;this.a.sa(b,["touchmove","mousemove"],this.qg,d);this.a.sa(b,["touchend","mouseup"],this.Nc,d);to?(c.setCapture(!1),this.a.sa(c,"losecapture",this.Nc)):this.a.sa(b?b.parentWindow||b.defaultView:window,"blur",this.Nc);$a&&
this.Cg&&this.a.sa(b,"dragstart",Sd);this.f&&this.a.sa(this.f,"scroll",this.Wh,d);this.clientX=this.mf=a.clientX;this.clientY=this.nf=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;this.Xd?(a=this.target,b=a.offsetLeft,c=a.offsetParent,c||"fixed"!=Lc(a,"position")||(c=qc(a).documentElement),c?(bb?(d=cd(c),b+=d.left):$a&&8<=qb&&(d=cd(c),b-=d.left),a=Yc(c)?c.clientWidth-(b+a.offsetWidth):b):a=b):a=this.target.offsetLeft;this.Sb=a;this.Tb=this.target.offsetTop;this.d=Gc(oc(this.b));this.Gg=
za()}};l.Nc=function(a,b){ro(this.a);to&&this.b.releaseCapture();if(this.zb){vo(a);this.zb=!1;var c=xo(this,this.Sb),d=yo(this,this.Tb);y(this,new wo("end",this,a.clientX,a.clientY,a,c,d,b||"touchcancel"==a.type))}else y(this,"earlycancel")};function vo(a){var b=a.type;"touchstart"==b||"touchmove"==b?Zd(a,a.M.targetTouches[0],a.c):"touchend"!=b&&"touchcancel"!=b||Zd(a,a.M.changedTouches[0],a.c)}
l.qg=function(a){if(this.le){vo(a);var b=(this.Xd&&uo(this)?-1:1)*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.zb){var d=this.mf-this.clientX,e=this.nf-this.clientY;if(d*d+e*e>this.ze)if(y(this,new wo("start",this,a.clientX,a.clientY,a)))this.zb=!0;else{this.Xa||this.Nc(a);return}}c=zo(this,b,c);b=c.x;c=c.y;this.zb&&y(this,new wo("beforedrag",this,a.clientX,a.clientY,a,b,c))&&(Ao(this,a,b,c),
a.preventDefault())}};function zo(a,b,c){var d=Gc(oc(a.b));b+=d.x-a.d.x;c+=d.y-a.d.y;a.d=d;a.Sb+=b;a.Tb+=c;b=xo(a,a.Sb);a=yo(a,a.Tb);return new $b(b,a)}l.Wh=function(a){var b=zo(this,0,0);a.clientX=this.clientX;a.clientY=this.clientY;Ao(this,a,b.x,b.y)};function Ao(a,b,c,d){a.Xd&&uo(a)?a.target.style.right=c+"px":a.target.style.left=c+"px";a.target.style.top=d+"px";y(a,new wo("drag",a,b.clientX,b.clientY,b,c,d))}
function xo(a,b){var c=a.c,d=isNaN(c.left)?null:c.left,c=isNaN(c.width)?0:c.width;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}function yo(a,b){var c=a.c,d=isNaN(c.top)?null:c.top,c=isNaN(c.height)?0:c.height;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}function wo(a,b,c,d,e,f,g,h){Qd.call(this,a);this.clientX=c;this.clientY=d;this.d=e;this.left=s(f)?f:b.Sb;this.top=s(g)?g:b.Tb;this.b=b;this.a=!!h}u(wo,Qd);function Bo(a){a=s(a)?a:{};this.e=void 0;this.g=Co;this.i=!1;var b=s(a.className)?a.className:"ol-zoomslider";a=vc("DIV",[b+"-thumb","ol-unselectable"]);b=vc("DIV",[b,"ol-unselectable"],a);this.f=new so(a);Od(this,this.f);x(this.f,["drag","end"],this.n,void 0,this);x(b,"click",this.l,!1,this);x(a,"click",Rd);J.call(this,{element:b})}u(Bo,J);var Co=0;Bo.prototype.setMap=function(a){Bo.H.setMap.call(this,a);null===a||a.N()};
Bo.prototype.d=function(a){if(null!==a.b){if(!this.i){var b=this.element,c=Ec(b),b=Zc(b),d;d=Qc(c);var e=Uc(c);d=new Jc(d.x,d.y,e.width,e.height);var e=ad(c,"margin"),f=cd(c),c=b.width-e.left-e.right-f.left-f.right-d.width;d=b.height-e.top-e.bottom-f.top-f.bottom-d.height;b.width>b.height?(this.g=1,b=new Jc(0,0,c,0)):(this.g=Co,b=new Jc(0,0,0,d));this.f.c=b||new Jc(NaN,NaN,NaN,NaN);this.i=!0}a=a.b.view2DState.resolution;a!==this.e&&(this.e=a,a=-1*(uh(this.b.a().T())(a)-1),b=this.f,c=Ec(this.element),
1==this.g?Mc(c,b.c.left+b.c.width*a):Mc(c,b.c.left,b.c.top+b.c.height*a))}};Bo.prototype.l=function(a){var b=this.b,c=b.a().T();a=Do(this,Eo(this,a.offsetX,a.offsetY));b.na(Ch({resolution:a,duration:200,easing:wh}));a=c.constrainResolution(a);c.d(a)};function Eo(a,b,c){var d=a.f.c,e=0;return e=1===a.g?(b-d.left)/d.width:(c-d.top)/d.height}function Do(a,b){b=-1*(Xb(b,0,1)-1);return th(a.b.a().T())(b)}
Bo.prototype.n=function(a){var b=this.b,c=b.a().T();"drag"===a.type?(a=Do(this,Eo(this,a.left,a.top)),a!==this.e&&(this.e=a,c.d(a))):(b.na(Ch({resolution:this.e,duration:200,easing:wh})),a=c.constrainResolution(this.e),c.d(a))};function Fo(a){a=s(a)?a:{};this.e=s(a.extent)?a.extent:null;var b=s(a.className)?a.className:"ol-zoom-extent",c=vc("SPAN",{role:"tooltip"},s(a.tipLabel)?a.tipLabel:"Fit to extent"),d=vc("BUTTON",{"class":"ol-has-tooltip"});d.appendChild(c);c=new Gf(d);Od(this,c);x(c,sf,this.f,!1,this);x(d,["mouseout",Wd],function(){this.blur()},!1);b=vc("DIV",b+" ol-unselectable ol-control",d);J.call(this,{element:b,target:a.target})}u(Fo,J);
Fo.prototype.f=function(a){a.a.preventDefault();a=this.b;var b=a.a().T(),c=null===this.e?b.h().v():this.e;b.me(c,a.e())};function U(a){Me.call(this);this.d=a;x(this.d,["change","input"],this.g,!1,this);x(this,Qe("value"),this.i,!1,this);x(this,Qe("checked"),this.h,!1,this)}u(U,Me);U.prototype.a=function(){return this.get("checked")};U.prototype.getChecked=U.prototype.a;U.prototype.b=function(){return this.get("value")};U.prototype.getValue=U.prototype.b;U.prototype.f=function(a){this.A("value",a)};U.prototype.setValue=U.prototype.f;U.prototype.e=function(a){this.A("checked",a)};U.prototype.setChecked=U.prototype.e;
U.prototype.g=function(){var a=this.d;"checkbox"===a.type||"radio"===a.type?this.e(a.checked):this.f(a.value)};U.prototype.h=function(){this.d.checked=this.a()};U.prototype.i=function(){this.d.value=this.b()};function Go(){};var Ho;a:if(document.implementation&&document.implementation.createDocument)Ho=document.implementation.createDocument("","",null);else{if("undefined"!=typeof ActiveXObject){var Io=new ActiveXObject("MSXML2.DOMDocument");if(Io){Io.resolveExternals=!1;Io.validateOnParse=!1;try{Io.setProperty("ProhibitDTD",!0),Io.setProperty("MaxXMLSize",2048),Io.setProperty("MaxElementDepth",256)}catch(Jo){}}if(Io){Ho=Io;break a}}throw Error("Your browser does not support creating new documents");}var Ko=Ho;
function Lo(a,b){return Ko.createElementNS(a,b)}function Mo(a,b){null===a&&(a="");return Ko.createNode(1,b,a)}var No=document.implementation&&document.implementation.createDocument?Lo:Mo;function Oo(a){return Po(a,!1,[]).join("")}function Po(a,b,c){if(4==a.nodeType||3==a.nodeType)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;null!==a;a=a.nextSibling)Po(a,b,c);return c}function Qo(a){return a.localName}
function Ro(a){var b=a.localName;return s(b)?b:a.baseName}var So=$a?Ro:Qo;function To(a){return a instanceof Document}function Uo(a){return ra(a)&&9==a.nodeType}var Vo=$a?Uo:To;function Wo(a){return a instanceof Node}function Xo(a){return ra(a)&&s(a.nodeType)}var Yo=$a?Xo:Wo;function Zo(a,b,c){return a.getAttributeNS(b,c)||""}function $o(a,b,c){var d="";a=ap(a,b,c);s(a)&&(d=a.nodeValue);return d}var bp=document.implementation&&document.implementation.createDocument?Zo:$o;
function cp(a,b,c){return a.getAttributeNodeNS(b,c)}function dp(a,b,c){var d=null;a=a.attributes;for(var e,f,g=0,h=a.length;g<h;++g)if(e=a[g],e.namespaceURI==b&&(f=e.prefix?e.prefix+":"+c:c,f==e.nodeName)){d=e;break}return d}var ap=document.implementation&&document.implementation.createDocument?cp:dp;function ep(a,b,c,d){a.setAttributeNS(b,c,d)}function fp(a,b,c,d){null===b?a.setAttribute(c,d):(b=a.ownerDocument.createNode(2,c,b),b.nodeValue=d,a.setAttributeNode(b))}
var gp=document.implementation&&document.implementation.createDocument?ep:fp;function hp(a){return(new DOMParser).parseFromString(a,"application/xml")}function ip(a,b){return function(c,d){var e=a.call(b,c,d);s(e)&&Eb(d[d.length-1],e)}}function jp(a,b){return function(c,d){var e=a.call(b,c,d);s(e)&&d[d.length-1].push(e)}}function kp(a){return function(b,c){var d=a.call(void 0,b,c);s(d)&&(c[c.length-1]=d)}}
function lp(a){return function(b,c){var d=a.call(void 0,b,c);s(d)&&kc(c[c.length-1],s(void 0)?void 0:b.localName).push(d)}}function V(a,b){return function(c,d){var e=a.call(void 0,c,d);s(e)&&(d[d.length-1][s(b)?b:c.localName]=e)}}function W(a){return function(b,c,d){a.call(void 0,b,c,d);d[d.length-1].node.appendChild(b)}}function mp(a){var b,c;return function(d,e,f){if(!s(b)){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=np(d.localName)}op(b,c,e,f)}}
function np(a,b){return function(c,d,e){c=d[d.length-1].node;d=a;s(d)||(d=e);e=b;s(b)||(e=c.namespaceURI);return No(e,d)}}var pp=np();function qp(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}function X(a,b,c){c=s(c)?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}function rp(a,b,c,d){for(b=b.firstElementChild;null!==b;b=b.nextElementSibling){var e=a[b.namespaceURI];s(e)&&(e=e[b.localName],s(e)&&e.call(d,b,c))}}
function Y(a,b,c,d,e){d.push(a);rp(b,c,d,e);return d.pop()}function op(a,b,c,d,e,f){for(var g=(s(e)?e:c).length,h,m,n=0;n<g;++n)h=c[n],s(h)&&(m=b.call(f,h,d,s(e)?e[n]:void 0),s(m)&&a[m.namespaceURI][m.localName].call(f,m,h,d))}function sp(a,b,c,d,e,f){e.push(a);op(b,c,d,e,f,void 0);e.pop()};function tp(){}u(tp,Go);l=tp.prototype;l.G=ca("xml");l.ac=function(a){return Vo(a)?up(this,a):Yo(a)?this.Ze(a):na(a)?(a=hp(a),up(this,a)):null};function up(a,b){var c=vp(a,b);return 0<c.length?c[0]:null}l.ta=function(a){return Vo(a)?vp(this,a):Yo(a)?this.Gb(a):na(a)?(a=hp(a),vp(this,a)):[]};function vp(a,b){var c=[],d;for(d=b.firstChild;null!==d;d=d.nextSibling)1==d.nodeType&&Eb(c,a.Gb(d));return c}
l.Qd=function(a){return Vo(a)?this.h(a):Yo(a)?(a=wp(a,[{}]),s(a)?a:null):na(a)?(a=hp(a),this.h(a)):null};l.ma=function(a){return Vo(a)?this.Ac(a):Yo(a)?this.Bc(a):na(a)?(a=hp(a),this.Ac(a)):null};l.$d=function(a){return this.t(a)};l.Hc=function(a){return this.l(a)};function xp(a){a=Oo(a);return yp(a)}function yp(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return s(a[1])||!1}function zp(a){a=Oo(a);if(a=/^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)){var b=Date.UTC(parseInt(a[1],10),parseInt(a[2],10)-1,parseInt(a[3],10),parseInt(a[4],10),parseInt(a[5],10),parseInt(a[6],10))/1E3;if("Z"!=a[7]){var c="-"==a[8]?-1:1,b=b+60*c*parseInt(a[9],10);s(a[10])&&(b+=3600*c*parseInt(a[10],10))}return b}}
function Ap(a){a=Oo(a);return Bp(a)}function Bp(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function Cp(a){a=Oo(a);return Dp(a)}function Dp(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function Z(a){a=Oo(a);return Ba(a)}function Ep(a,b){a.appendChild(Ko.createTextNode(b.toPrecision()))}function Fp(a,b){a.appendChild(Ko.createTextNode(b.toString()))}function Gp(a,b){a.appendChild(Ko.createTextNode(b))};function Hp(a){a=s(a)?a:{};this.c=a.featureType;this.a=a.featureNS;this.g=a.srsName;this.i=s(a.surface)?a.surface:!1;this.b=s(a.curve)?a.curve:!1;this.d=s(a.multiCurve)?a.multiCurve:!0;this.e=s(a.multiSurface)?a.multiSurface:!0;this.f=s(a.schemaLocation)?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}u(Hp,tp);
function Ip(a,b){var c=So(a),d=b[0],e=w(d,"featureType"),f;if("FeatureCollection"==c)f=Y(null,Jp,a,b);else if("featureMembers"==c||"featureMember"==c){f={};var g={};f[e]="featureMembers"==c?jp(Kp):kp(Kp);g[w(d,"featureNS")]=f;f=Y([],g,a,b)}s(f)||(f=[]);return f}var Jp={"http://www.opengis.net/gml":{featureMember:jp(Ip),featureMembers:kp(Ip)}};function wp(a,b){var c=a.firstElementChild.getAttribute("srsName");b[0].srsName=c;c=Y(null,Lp,a,b);if(null!=c)return c}
function Kp(a,b){var c,d=a.getAttribute("fid")||bp(a,"http://www.opengis.net/gml","id"),e={},f;for(c=a.firstElementChild;null!==c;c=c.nextElementSibling)if(0===c.childNodes.length||1===c.childNodes.length&&3===c.firstChild.nodeType){var g=Oo(c);/^[\s\xa0]*$/.test(g)&&(g=void 0);e[So(c)]=g}else f=So(c),e[f]=wp(c,b);c=new I(e);s(f)&&c.d(f);d&&c.b(d);return c}function Mp(a,b){rp(Np,a,b)}function Op(a,b){rp(Pp,a,b)}function Qp(a,b){rp(Rp,a,b)}function Sp(a,b){rp(Tp,a,b)}function Up(a,b){rp(Vp,a,b)}
function Wp(a,b){var c=Xp(a,b);if(null!=c){var d=new km(null);lm(d,"XYZ",c);return d}}function Yp(a,b){var c=Y([null],Zp,a,b);if(s(c)&&null!==c[0]){var d=new H(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ig(e,c[g]),f.push(e.length);pi(d,"XYZ",e,f);return d}}function $p(a,b){var c=Y([null],aq,a,b);if(s(c)&&null!==c[0]){var d=new H(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ig(e,c[g]),f.push(e.length);pi(d,"XYZ",e,f);return d}}
function bq(a,b){var c=Y([null],cq,a,b);if(s(c)){var d=new km(null);lm(d,"XYZ",c);return d}}function Xp(a,b){return Y(null,dq,a,b)}
function eq(a,b){var c=Oo(a).replace(/^\s*|\s*$/g,""),d=w(b[0],"srsName"),e=a.parentNode.getAttribute("srsDimension"),f="enu";null===d||(f=Yg(qh(d)));c=c.split(/\s+/);d=2;ka(a.getAttribute("srsDimension"))?ka(a.getAttribute("dimension"))?null===e||(d=Dp(e)):d=Dp(a.getAttribute("dimension")):d=Dp(a.getAttribute("srsDimension"));for(var g,h,m=[],n=0,p=c.length;n<p;n+=d)e=parseFloat(c[n]),g=parseFloat(c[n+1]),h=3===d?parseFloat(c[n+2]):0,"en"===f.substr(0,2)?m.push(e,g,h):m.push(g,e,h);return m}
var Lp={"http://www.opengis.net/gml":{Point:kp(function(a,b){var c=Xp(a,b);if(null!=c){var d=new hi(null);ii(d,"XYZ",c);return d}}),MultiPoint:kp(function(a,b){var c=Y([],fq,a,b);if(s(c))return new pm(c)}),LineString:kp(Wp),MultiLineString:kp(function(a,b){var c=Y([],gq,a,b);if(s(c)){var d=new mm(null);om(d,c);return d}}),LinearRing:kp(function(a,b){var c=Xp(a,b);if(s(c)){var d=new fi(null);gi(d,"XYZ",c);return d}}),Polygon:kp(Yp),MultiPolygon:kp(function(a,b){var c=Y([],hq,a,b);if(s(c)){var d=new qm(null);
sm(d,c);return d}}),Surface:kp($p),MultiSurface:kp(function(a,b){var c=Y([],iq,a,b);if(s(c)){var d=new qm(null);sm(d,c);return d}}),Curve:kp(bq),MultiCurve:kp(function(a,b){var c=Y([],jq,a,b);if(s(c)){var d=new mm(null);om(d,c);return d}}),Envelope:kp(function(a,b){var c=Y([null],kq,a,b);return wg(c[1][0],c[1][1],c[2][0],c[2][1])})}},dq={"http://www.opengis.net/gml":{pos:kp(function(a,b){for(var c=Oo(a),d=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*/,e=[],f;f=d.exec(c);)e.push(parseFloat(f[1])),c=c.substr(f[0].length);
if(""===c){c=w(b[0],"srsName");d="enu";null===c||(d=Yg(qh(c)));if("neu"===d)for(c=0,d=e.length;c<d;c+=3)f=e[c],e[c]=e[c+1],e[c+1]=f;c=e.length;2==c&&e.push(0);return 0===c?void 0:e}}),posList:kp(eq)}},Zp={"http://www.opengis.net/gml":{interior:function(a,b){var c=Y(void 0,lq,a,b);s(c)&&b[b.length-1].push(c)},exterior:function(a,b){var c=Y(void 0,lq,a,b);s(c)&&(b[b.length-1][0]=c)}}},fq={"http://www.opengis.net/gml":{pointMember:jp(Mp),pointMembers:jp(Mp)}},gq={"http://www.opengis.net/gml":{lineStringMember:jp(Op),
lineStringMembers:jp(Op)}},jq={"http://www.opengis.net/gml":{curveMember:jp(Qp),curveMembers:jp(Qp)}},iq={"http://www.opengis.net/gml":{surfaceMember:jp(Sp),surfaceMembers:jp(Sp)}},hq={"http://www.opengis.net/gml":{polygonMember:jp(Up),polygonMembers:jp(Up)}},Np={"http://www.opengis.net/gml":{Point:jp(Xp)}},Pp={"http://www.opengis.net/gml":{LineString:jp(Wp)}},Rp={"http://www.opengis.net/gml":{LineString:jp(Wp),Curve:jp(bq)}},Tp={"http://www.opengis.net/gml":{Polygon:jp(Yp),Surface:jp($p)}},Vp={"http://www.opengis.net/gml":{Polygon:jp(Yp)}},
aq={"http://www.opengis.net/gml":{patches:kp(function(a,b){return Y([null],mq,a,b)})}},cq={"http://www.opengis.net/gml":{segments:kp(function(a,b){return Y([null],nq,a,b)})}},kq={"http://www.opengis.net/gml":{lowerCorner:jp(eq),upperCorner:jp(eq)}},mq={"http://www.opengis.net/gml":{PolygonPatch:kp(function(a,b){return Y([null],Zp,a,b)})}},nq={"http://www.opengis.net/gml":{LineStringSegment:kp(function(a,b){return Y([null],dq,a,b)})}},lq={"http://www.opengis.net/gml":{LinearRing:kp(function(a,b){var c=
Y(null,dq,a,b);if(null!=c)return c})}};Hp.prototype.Gb=function(a){return Ip(a,[{featureType:this.c,featureNS:this.a}])};function oq(a,b,c){c=w(c[c.length-1],"srsName");b=b.D();for(var d=b.length,e=Array(d),f,g=0;g<d;++g){f=b[g];var h=e,m=g,n="enu";null!=c&&(n=Yg(qh(c)));h[m]="en"===n.substr(0,2)?f[0]+" "+f[1]:f[1]+" "+f[0]}Gp(a,e.join(" "))}
function pq(a,b,c){var d=w(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",d);d=No(a.namespaceURI,"pos");a.appendChild(d);c=w(c[c.length-1],"srsName");a="enu";null!=c&&(a=Yg(qh(c)));b=b.D();Gp(d,"en"===a.substr(0,2)?b[0]+" "+b[1]:b[1]+" "+b[0])}var qq={"http://www.opengis.net/gml":{lowerCorner:W(Gp),upperCorner:W(Gp)}};function rq(a,b,c){var d=w(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",d);d=No(a.namespaceURI,"posList");a.appendChild(d);oq(d,b,c)}
function sq(a,b){var c=b[b.length-1],d=c.node,e=w(c,"exteriorWritten");s(e)||(c.exteriorWritten=!0);return No(d.namespaceURI,s(e)?"interior":"exterior")}
function tq(a,b,c){var d=w(c[c.length-1],"srsName");"PolygonPatch"!==a.nodeName&&null!=d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.re(),sp({node:a,srsName:d},uq,sq,b,c)):"Surface"===a.nodeName&&(d=No(a.namespaceURI,"patches"),a.appendChild(d),a=No(d.namespaceURI,"PolygonPatch"),d.appendChild(a),tq(a,b,c))}
function vq(a,b,c){var d=w(c[c.length-1],"srsName");"LineStringSegment"!==a.nodeName&&null!=d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=No(a.namespaceURI,"posList"),a.appendChild(d),oq(d,b,c)):"Curve"===a.nodeName&&(d=No(a.namespaceURI,"segments"),a.appendChild(d),a=No(d.namespaceURI,"LineStringSegment"),d.appendChild(a),vq(a,b,c))}
function wq(a,b,c){var d=c[c.length-1],e=w(d,"srsName"),d=w(d,"surface");null!=e&&a.setAttribute("srsName",e);b=b.ue();sp({node:a,srsName:e,surface:d},xq,yq,b,c)}function zq(a,b,c){var d=c[c.length-1],e=w(d,"srsName"),d=w(d,"curve");null!=e&&a.setAttribute("srsName",e);b=b.zd();sp({node:a,srsName:e,curve:d},Aq,yq,b,c)}function Bq(a,b,c){var d=No(a.namespaceURI,"LinearRing");a.appendChild(d);rq(d,b,c)}function Cq(a,b,c){var d=Dq(b,c);s(d)&&(a.appendChild(d),tq(d,b,c))}
function Eq(a,b,c){var d=Dq(b,c);s(d)&&(a.appendChild(d),vq(d,b,c))}function Fq(a,b,c){var d=lc(c[c.length-1]);d.node=a;sp(d,Gq,Dq,[b],c)}function Hq(a,b,c){var d=b.V;s(d)&&a.setAttribute("fid",d);var d=c[c.length-1],e=w(d,"featureNS"),f=b.a;s(d.Hb)||(d.Hb={},d.Hb[e]={});var g=b.W();b=[];var h=[],m;for(m in g){var n=g[m];null!==n&&(b.push(m),h.push(n),m==f?m in d.Hb[e]||(d.Hb[e][m]=W(Fq)):m in d.Hb[e]||(d.Hb[e][m]=W(Gp)))}m=lc(d);m.node=a;sp(m,d.Hb,np(void 0,e),h,c,b)}
var xq={"http://www.opengis.net/gml":{surfaceMember:W(Cq),polygonMember:W(Cq)}},Iq={"http://www.opengis.net/gml":{pointMember:W(function(a,b,c){var d=No(a.namespaceURI,"Point");a.appendChild(d);pq(d,b,c)})}},Aq={"http://www.opengis.net/gml":{lineStringMember:W(Eq),curveMember:W(Eq)}},uq={"http://www.opengis.net/gml":{exterior:W(Bq),interior:W(Bq)}},Gq={"http://www.opengis.net/gml":{Curve:W(vq),MultiCurve:W(zq),Point:W(pq),MultiPoint:W(function(a,b,c){var d=w(c[c.length-1],"srsName");null!=d&&a.setAttribute("srsName",
d);b=b.te();sp({node:a,srsName:d},Iq,np("pointMember"),b,c)}),LineString:W(vq),MultiLineString:W(zq),LinearRing:W(rq),Polygon:W(tq),MultiPolygon:W(wq),Surface:W(tq),MultiSurface:W(wq),Envelope:W(function(a,b,c){var d=w(c[c.length-1],"srsName");s(d)&&a.setAttribute("srsName",d);sp({node:a},qq,pp,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"])})}},Jq={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};
function yq(a,b){return No("http://www.opengis.net/gml",Jq[b[b.length-1].node.nodeName])}function Dq(a,b){var c=b[b.length-1],d=w(c,"multiSurface"),e=w(c,"surface"),f=w(c,"curve"),c=w(c,"multiCurve"),g;la(a)?g="Envelope":(g=a.G(),"MultiPolygon"===g&&!0===d?g="MultiSurface":"Polygon"===g&&!0===e?g="Surface":"LineString"===g&&!0===f?g="Curve":"MultiLineString"===g&&!0===c&&(g="MultiCurve"));return No("http://www.opengis.net/gml",g)}
Hp.prototype.l=function(a){var b=No("http://www.opengis.net/gml","featureMembers");gp(b,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.f);var c=[{srsName:this.g,curve:this.b,surface:this.i,multiSurface:this.e,multiCurve:this.d,featureNS:this.a,featureType:this.c}],d=c[c.length-1],e=w(d,"featureType"),f=w(d,"featureNS"),g={};g[f]={};g[f][e]=W(Hq);d=lc(d);d.node=b;sp(d,g,np(e,f),a,c);return b};function Kq(){}u(Kq,tp);var Lq=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function Mq(a,b,c){a.push(parseFloat(b.getAttribute("lon")),parseFloat(b.getAttribute("lat")));"ele"in c?(a.push(w(c,"ele")),jc(c,"ele")):a.push(0);"time"in c?(a.push(w(c,"time")),jc(c,"time")):a.push(0);return a}function Nq(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);rp(Oq,a,b)}
function Pq(a,b){var c=Y({flatCoordinates:[]},Qq,a,b);if(s(c)){var d=w(c,"flatCoordinates");jc(c,"flatCoordinates");var e=new km(null);lm(e,"XYZM",d);d=new I(e);d.Q(c);return d}}function Rq(a,b){var c=Y({flatCoordinates:[],ends:[]},Sq,a,b);if(s(c)){var d=w(c,"flatCoordinates");jc(c,"flatCoordinates");var e=w(c,"ends");jc(c,"ends");var f=new mm(null);nm(f,"XYZM",d,e);d=new I(f);d.Q(c);return d}}
function Tq(a,b){var c=Y({},Uq,a,b);if(s(c)){var d=Mq([],a,c),d=new hi(d,"XYZM"),d=new I(d);d.Q(c);return d}}
var Vq={rte:Pq,trk:Rq,wpt:Tq},Wq=X(Lq,{rte:jp(Pq),trk:jp(Rq),wpt:jp(Tq)},void 0),Oq=X(Lq,{text:V(Z,"linkText"),type:V(Z,"linkType")},void 0),Qq=X(Lq,{name:V(Z),cmt:V(Z),desc:V(Z),src:V(Z),link:Nq,number:V(Cp),type:V(Z),rtept:function(a,b){var c=Y({},Xq,a,b);s(c)&&Mq(w(b[b.length-1],"flatCoordinates"),a,c)}},void 0),Xq=X(Lq,{ele:V(Ap),time:V(zp)},void 0),Sq=X(Lq,{name:V(Z),cmt:V(Z),desc:V(Z),src:V(Z),link:Nq,number:V(Cp),type:V(Z),trkseg:function(a,b){var c=b[b.length-1];rp(Yq,a,b);w(c,"ends").push(w(c,
"flatCoordinates").length)}},void 0),Yq=X(Lq,{trkpt:function(a,b){var c=Y({},Zq,a,b);s(c)&&Mq(w(b[b.length-1],"flatCoordinates"),a,c)}},void 0),Zq=X(Lq,{ele:V(Ap),time:V(zp)},void 0),Uq=X(Lq,{ele:V(Ap),time:V(zp),magvar:V(Ap),geoidheight:V(Ap),name:V(Z),cmt:V(Z),desc:V(Z),src:V(Z),link:Nq,sym:V(Z),type:V(Z),fix:V(Z),sat:V(Cp),hdop:V(Ap),vdop:V(Ap),pdop:V(Ap),ageofdgpsdata:V(Ap),dgpsid:V(Cp)},void 0);
Kq.prototype.Ze=function(a){if(!(0<=vb(Lq,a.namespaceURI)))return null;var b=Vq[a.localName];if(!s(b))return null;a=b(a,[]);return s(a)?a:null};Kq.prototype.Gb=function(a){return 0<=vb(Lq,a.namespaceURI)?"gpx"==a.localName&&(a=Y([],Wq,a,[]),s(a))?a:[]:[]};Kq.prototype.Ac=function(){return qh("EPSG:4326")};Kq.prototype.Bc=function(){return qh("EPSG:4326")};function $q(a,b,c){a.setAttribute("href",b);b=w(c[c.length-1],"properties");sp({node:a},ar,pp,[w(b,"linkText"),w(b,"linkType")],c,br)}
function cr(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=w(d,"properties");gp(a,null,"lat",b[1]);gp(a,null,"lon",b[0]);switch(w(d,"geometryLayout")){case "XYZM":0!==b[3]&&(f.time=b[3]);case "XYZ":0!==b[2]&&(f.ele=b[2]);break;case "XYM":0!==b[2]&&(f.time=b[2])}b=dr[e];d=qp(f,b);sp({node:a,properties:f},er,pp,d,c,b)}
var br=["text","type"],ar=X(Lq,{text:W(Gp),type:W(Gp)}),fr=X(Lq,"name cmt desc src link number type rtept".split(" ")),gr=X(Lq,{name:W(Gp),cmt:W(Gp),desc:W(Gp),src:W(Gp),link:W($q),number:W(Fp),type:W(Gp),rtept:mp(W(cr))}),hr=X(Lq,"name cmt desc src link number type trkseg".split(" ")),kr=X(Lq,{name:W(Gp),cmt:W(Gp),desc:W(Gp),src:W(Gp),link:W($q),number:W(Fp),type:W(Gp),trkseg:mp(W(function(a,b,c){sp({node:a,geometryLayout:b.b,properties:{}},ir,jr,b.D(),c)}))}),jr=np("trkpt"),ir=X(Lq,{trkpt:W(cr)}),
dr=X(Lq,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),er=X(Lq,{ele:W(Ep),time:W(function(a,b){var c=new Date(1E3*b),c=c.getUTCFullYear()+"-"+Ja(c.getUTCMonth()+1)+"-"+Ja(c.getUTCDate())+"T"+Ja(c.getUTCHours())+":"+Ja(c.getUTCMinutes())+":"+Ja(c.getUTCSeconds())+"Z";a.appendChild(Ko.createTextNode(c))}),magvar:W(Ep),geoidheight:W(Ep),name:W(Gp),cmt:W(Gp),desc:W(Gp),src:W(Gp),link:W($q),sym:W(Gp),type:W(Gp),fix:W(Gp),sat:W(Fp),
hdop:W(Ep),vdop:W(Ep),pdop:W(Ep),ageofdgpsdata:W(Ep),dgpsid:W(Fp)});
X(Lq,{rte:W(function(a,b,c){var d=b.W();a={node:a,properties:d};b=b.L();s(b)&&(a.geometryLayout=b.b,b=b.D(),d.rtept=b);b=fr[c[c.length-1].node.namespaceURI];d=qp(d,b);sp(a,gr,pp,d,c,b)}),trk:W(function(a,b,c){var d=b.W();a={node:a,properties:d};b=b.L();s(b)&&(b=b.zd(),d.trkseg=b);b=hr[c[c.length-1].node.namespaceURI];d=qp(d,b);sp(a,kr,pp,d,c,b)}),wpt:W(function(a,b,c){var d=c[c.length-1],e=b.W();d.properties=e;b=b.L();s(b)&&(d.geometryLayout=b.b,cr(a,b.D(),c))})});function lr(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function mr(){}u(mr,Go);function nr(a){return ra(a)?a:na(a)?(a=Gd?JSON.parse(a):lr(a),s(a)?a:null):null}l=mr.prototype;l.G=ca("json");l.ac=function(a){return or(this,nr(a))};l.ta=function(a){return this.c(nr(a))};l.Qd=function(a){a=nr(a);return pr(a)};l.ma=function(a){return this.d(nr(a))};l.$d=function(a){return qr(a)};l.Hc=function(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(qr(a[c]));return{type:"FeatureCollection",features:b}};function rr(a){a=s(a)?a:{};this.b=qh(a.defaultProjection?a.defaultProjection:"EPSG:4326");this.a=a.geometryName}u(rr,mr);function pr(a){return null===a?null:(0,sr[a.type])(a)}function tr(a){return(0,ur[a.G()])(a)}
var sr={Point:function(a){return new hi(a.coordinates)},LineString:function(a){return new km(a.coordinates)},Polygon:function(a){return new H(a.coordinates)},MultiPoint:function(a){return new pm(a.coordinates)},MultiLineString:function(a){return new mm(a.coordinates)},MultiPolygon:function(a){return new qm(a.coordinates)},GeometryCollection:function(a){a=xb(a.geometries,pr);return new dm(a)}},ur={Point:function(a){return{type:"Point",coordinates:a.D()}},LineString:function(a){return{type:"LineString",
coordinates:a.D()}},Polygon:function(a){return{type:"Polygon",coordinates:a.D()}},MultiPoint:function(a){return{type:"MultiPoint",coordinates:a.D()}},MultiLineString:function(a){return{type:"MultiLineString",coordinates:a.D()}},MultiPolygon:function(a){return{type:"MultiPolygon",coordinates:a.D()}},GeometryCollection:function(a){return{type:"GeometryCollection",geometries:xb(a.a,tr)}},Circle:function(){return{type:"GeometryCollection",geometries:[]}}};
function or(a,b){var c=pr(b.geometry),d=new I;s(a.a)&&d.d(a.a);d.Wa(c);s(b.id)&&d.b(b.id);s(b.properties)&&d.Q(b.properties);return d}rr.prototype.c=function(a){if("Feature"==a.type)return[or(this,a)];if("FeatureCollection"==a.type){var b=[];a=a.features;var c,d;c=0;for(d=a.length;c<d;++c)b.push(or(this,a[c]));return b}return[]};rr.prototype.ma=function(a){a=a.crs;return null!=a?"name"==a.type?qh(a.properties.name):"EPSG"==a.type?qh("EPSG:"+a.properties.code):null:this.b};
function qr(a){var b={type:"Feature"},c=a.V;null!=c&&(b.id=c);c=a.L();null!=c&&(c=tr(c),b.geometry=c);a=a.W();jc(a,"geometry");gc(a)||(b.properties=a);return b};function vr(a){a=wr(a);return xb(a,function(a){return a.b.substring(a.c,a.a)})}function xr(a,b,c,d){this.b=a;this.c=b;this.a=c;this.d=d}function wr(a){for(var b=RegExp("\r\n|\r|\n","g"),c=0,d,e=[];d=b.exec(a);)c=new xr(a,c,d.index,d.index+d[0].length),e.push(c),c=b.lastIndex;c<a.length&&(c=new xr(a,c,a.length,a.length),e.push(c));return e};function yr(){}u(yr,Go);l=yr.prototype;l.G=ca("text");l.ac=function(a){return zr(this,na(a)?a:"")};l.ta=function(a){a=zr(this,na(a)?a:"");return null===a?[]:[a]};l.Qd=function(a){return this.c(na(a)?a:"")};l.ma=function(){return qh("EPSG:4326")};l.$d=function(a){return this.b(a)};l.Hc=function(a){return this.d(a)};function Ar(a){a=s(a)?a:{};this.a=s(a.altitudeMode)?a.altitudeMode:"none"}u(Ar,yr);var Br=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,Cr=/^H.([A-Z]{3}).*?:(.*)/,Dr=/^HFDTE(\d{2})(\d{2})(\d{2})/;
function zr(a,b){var c=a.a,d=vr(b),e={},f=[],g=2E3,h=0,m=1,n,p;n=0;for(p=d.length;n<p;++n){var q=d[n],r;if("B"==q.charAt(0)){if(r=Br.exec(q)){var q=parseInt(r[1],10),v=parseInt(r[2],10),z=parseInt(r[3],10),B=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(B=-B);var A=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(A=-A);f.push(A,B);"none"!=c&&f.push("gps"==c?parseInt(r[11],10):"barometric"==c?parseInt(r[12],10):0);f.push(Date.UTC(g,h,m,q,v,z)/1E3)}}else if("H"==q.charAt(0))if(r=Dr.exec(q))m=
parseInt(r[1],10),h=parseInt(r[2],10)-1,g=2E3+parseInt(r[3],10);else if(r=Cr.exec(q))e[r[1]]=Ba(r[2]),Dr.exec(q)}if(0===f.length)return null;d=new km(null);lm(d,"none"==c?"XYM":"XYZM",f);c=new I(d);c.Q(e);return c};function Er(a){function b(a){return la(a)?a:na(a)?(!(a in d)&&"#"+a in d&&(a="#"+a),b(d[a])):c}a=s(a)?a:{};var c=s(a.defaultStyle)?a.defaultStyle:Fr,d={};this.a=d;this.c=function(){var a=this.get("Style");if(s(a))return a;a=this.get("styleUrl");return s(a)?b(a):c}}u(Er,tp);
var Gr=["http://www.google.com/kml/ext/2.2"],Hr=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],Ir=[255,255,255,1],Jr=new Ii({color:Ir}),Kr=[2,20],Lr=[32,32],Mr=new Zk({anchor:Kr,anchorXUnits:"pixels",anchorYUnits:"pixels",crossOrigin:"anonymous",rotation:0,scale:1,size:Lr,src:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"}),Nr=new Ki({color:Ir,width:1}),Fr=[new Mi({fill:Jr,image:Mr,text:null,
stroke:Nr,zIndex:0})],Or={fraction:"fraction",pixels:"pixels"};function Pr(a){a=Oo(a);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}
function Qr(a){a=Oo(a);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);return""!==a?void 0:b}function Rr(a){var b=Oo(a);return null!=a.baseURI?uj(a.baseURI,Ba(b)).toString():Ba(b)}function Sr(a,b){return Y(null,Tr,a,b)}
function Ur(a,b){var c=Y({j:[],pf:[]},Vr,a,b);if(s(c)){var d=c.j,c=c.pf,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new km(null);lm(c,"XYZM",d);return c}}function Wr(a,b){var c=Y(null,Xr,a,b);if(s(c)){var d=new km(null);lm(d,"XYZ",c);return d}}function Yr(a,b){var c=Y(null,Xr,a,b);if(s(c)){var d=new H(null);pi(d,"XYZ",c,[c.length]);return d}}
function Zr(a,b){var c=Y([],$r,a,b);if(!s(c))return null;if(0===c.length)return new dm(c);var d=!0,e=c[0].G(),f,g,h;g=1;for(h=c.length;g<h;++g)if(f=c[g],f.G()!=e){d=!1;break}if(d){if("Point"==e){f=c[0];d=f.b;e=f.j;g=1;for(h=c.length;g<h;++g)f=c[g],ig(e,f.j);c=new pm(null);Nh(c,d,e);c.k();return c}return"LineString"==e?(f=new mm(null),om(f,c),f):"Polygon"==e?(f=new qm(null),sm(f,c),f):"GeometryCollection"==e?new dm(c):null}return new dm(c)}
function as(a,b){var c=Y(null,Xr,a,b);if(null!=c){var d=new hi(null);ii(d,"XYZ",c);return d}}function bs(a,b){var c=Y([null],cs,a,b);if(null!=c&&null!==c[0]){var d=new H(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ig(e,c[g]),f.push(e.length);pi(d,"XYZ",e,f);return d}}
function ds(a,b){var c=Y({},es,a,b);if(!s(c))return null;var d=w(c,"fillStyle",Jr),e=w(c,"fill");s(e)&&!e&&(d=null);var e=w(c,"imageStyle",Mr),f=w(c,"strokeStyle",Nr),c=w(c,"outline");s(c)&&!c&&(f=null);return[new Mi({fill:d,image:e,stroke:f,text:null,zIndex:void 0})]}
var fs=X(Hr,{value:kp(Z)},void 0),hs=X(Hr,{Data:function(a,b){var c=a.getAttribute("name");if(null!==c){var d=Y(void 0,fs,a,b);s(d)&&(b[b.length-1][c]=d)}},SchemaData:function(a,b){rp(gs,a,b)}},void 0),Tr=X(Hr,{coordinates:kp(Qr)},void 0),cs=X(Hr,{innerBoundaryIs:function(a,b){var c=Y(void 0,is,a,b);s(c)&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=Y(void 0,js,a,b);s(c)&&(b[b.length-1][0]=c)}},void 0),ks=X(Gr,{coord:function(a,b){var c=b[b.length-1].j,d=Oo(a);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?
c.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]),0):c.push(0,0,0,0)}},void 0),Vr=X(Hr,{when:function(a,b){var c=b[b.length-1].pf,d=Oo(a);if(d=/^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(d)){var e=Date.UTC(parseInt(d[1],10),s(d[3])?parseInt(d[3],10)-1:0,s(d[5])?parseInt(d[5],10):1,s(d[7])?parseInt(d[7],10):0,s(d[8])?parseInt(d[8],10):0,s(d[9])?parseInt(d[9],10):0);if(s(d[10])&&"Z"!=d[10]){var f="-"==d[11]?-1:1,e=e+60*f*parseInt(d[12],
10);s(d[13])&&(e+=3600*f*parseInt(d[13],10))}c.push(e)}else c.push(0)}},ks),Xr=X(Hr,{coordinates:kp(Qr)},void 0),ls=X(Hr,{href:V(Rr)},void 0),ms=X(Hr,{Icon:V(function(a,b){var c=Y({},ls,a,b);return s(c)?c:null}),heading:V(Ap),hotSpot:V(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),Ci:Or[b],y:parseFloat(a.getAttribute("y")),Di:Or[c]}}),scale:V(function(a){a=Ap(a);if(s(a))return Math.sqrt(a)})},void 0),is=X(Hr,{LinearRing:kp(Sr)},void 0),
ns=X(Hr,{color:V(Pr),width:V(Ap)},void 0),$r=X(Hr,{LineString:jp(Wr),LinearRing:jp(Yr),MultiGeometry:jp(Zr),Point:jp(as),Polygon:jp(bs)},void 0),os=X(Gr,{Track:jp(Ur)},void 0),js=X(Hr,{LinearRing:kp(Sr)},void 0),ps=X(Hr,{Style:V(ds),key:V(Z),styleUrl:V(function(a){var b=Ba(Oo(a));return null!=a.baseURI?uj(a.baseURI,b).toString():b})},void 0),rs={ExtendedData:function(a,b){rp(hs,a,b)},MultiGeometry:V(Zr,"geometry"),LineString:V(Wr,"geometry"),LinearRing:V(Yr,"geometry"),Point:V(as,"geometry"),Polygon:V(bs,
"geometry"),Style:V(ds),StyleMap:function(a,b){var c=Y(void 0,qs,a,b);if(s(c)){var d=b[b.length-1];la(c)?d.Style=c:na(c)&&(d.styleUrl=c)}},address:V(Z),description:V(Z),name:V(Z),open:V(xp),phoneNumber:V(Z),styleUrl:V(Rr),visibility:V(xp)},ss=X(Gr,{MultiTrack:V(function(a,b){var c=Y([],os,a,b);if(s(c)){var d=new mm(null);om(d,c);return d}},"geometry"),Track:V(Ur,"geometry")},void 0),ts=X(Hr,rs,ss),us=X(Hr,{color:V(Pr),fill:V(xp),outline:V(xp)},void 0),gs=X(Hr,{SimpleData:function(a,b){var c=a.getAttribute("name");
if(null!==c){var d=Z(a);b[b.length-1][c]=d}}},void 0),es=X(Hr,{IconStyle:function(a,b){var c=Y({},ms,a,b);if(s(c)){var d=b[b.length-1],e;e=w(w(c,"Icon",{}),"href");e=s(e)?e:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";var f,g,h,m=w(c,"hotSpot");s(m)?(f=[m.x,m.y],g=m.Ci,h=m.Di):"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"===e?(f=Kr,h=g="pixels"):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e)&&(f=[0.5,0],h=g="fraction");var n,m=w(c,"heading");s(m)&&(n=Zb(m));
var c=w(c,"scale"),p;"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"==e&&(p=Lr);f=new Zk({anchor:f,anchorOrigin:"bottom-left",anchorXUnits:g,anchorYUnits:h,crossOrigin:"anonymous",rotation:n,scale:c,size:p,src:e});d.imageStyle=f}},LineStyle:function(a,b){var c=Y({},ns,a,b);s(c)&&(b[b.length-1].strokeStyle=new Ki({color:w(c,"color",Ir),width:w(c,"width",1)}))},PolyStyle:function(a,b){var c=Y({},us,a,b);if(s(c)){var d=b[b.length-1];d.fillStyle=new Ii({color:w(c,"color",Ir)});var e=w(c,
"fill");s(e)&&(d.fill=e);c=w(c,"outline");s(c)&&(d.outline=c)}}},void 0),qs=X(Hr,{Pair:function(a,b){var c=Y({},ps,a,b);if(s(c)){var d=w(c,"key");s(d)&&"normal"==d&&(d=w(c,"styleUrl"),s(d)&&(b[b.length-1]=d),c=w(c,"Style"),s(c)&&(b[b.length-1]=c))}}},void 0);l=Er.prototype;l.Ye=function(a,b){So(a);var c;c={Folder:ip(this.Ye,this),Placemark:jp(this.Rd,this),Style:xa(this.gi,this),StyleMap:xa(this.fi,this)};c=X(Hr,c,void 0);c=Y([],c,a,b,this);if(s(c))return c};
l.Rd=function(a,b){var c=Y({geometry:null},ts,a,b);if(s(c)){var d=new I,e=a.getAttribute("id");null===e||d.b(e);d.Q(c);d.h(this.c);return d}};l.gi=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=ds(a,b);s(d)&&(c=null!=a.baseURI?uj(a.baseURI,"#"+c).toString():"#"+c,this.a[c]=d)}};l.fi=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=Y(void 0,qs,a,b);s(d)&&(c=null!=a.baseURI?uj(a.baseURI,"#"+c).toString():"#"+c,this.a[c]=d)}};
l.Ze=function(a){if(!(0<=vb(Hr,a.namespaceURI)))return null;a=this.Rd(a,[]);return s(a)?a:null};l.Gb=function(a){if(!(0<=vb(Hr,a.namespaceURI)))return[];var b;b=So(a);if("Document"==b||"Folder"==b)return b=this.Ye(a,[]),s(b)?b:[];if("Placemark"==b)return b=this.Rd(a,[]),s(b)?[b]:[];if("kml"==b){b=[];for(a=a.firstElementChild;null!==a;a=a.nextElementSibling){var c=this.Gb(a);s(c)&&Eb(b,c)}return b}return[]};l.Ac=function(){return qh("EPSG:4326")};l.Bc=function(){return qh("EPSG:4326")};function vs(){}u(vs,tp);function ws(a,b){var c=a.getAttribute("k"),d=a.getAttribute("v");b[b.length-1].Ec[c]=d}
var xs=[null],ys=X(xs,{nd:function(a,b){b[b.length-1].Ub.push(a.getAttribute("ref"))},tag:ws},void 0),As=X(xs,{node:function(a,b){var c=b[b.length-1],d=a.getAttribute("id"),e=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];c.De[d]=e;var f=Y({Ec:{}},zs,a,b);gc(f.Ec)||(e=new hi(e),e=new I(e),e.b(d),e.Q(f.Ec),c.features.push(e))},way:function(a,b){for(var c=a.getAttribute("id"),d=Y({Ub:[],Ec:{}},ys,a,b),e=b[b.length-1],f=[],g=0,h=d.Ub.length;g<h;g++)Eb(f,w(e.De,d.Ub[g]));d.Ub[0]==
d.Ub[d.Ub.length-1]?(g=new H(null),pi(g,"XY",f,[f.length])):(g=new km(null),lm(g,"XY",f));f=new I(g);f.b(c);f.Q(d.Ec);e.features.push(f)}},void 0),zs=X(xs,{tag:ws},void 0);vs.prototype.Gb=function(a){return"osm"==a.localName&&(a=Y({De:{},features:[]},As,a,[]),s(a.features))?a.features:[]};vs.prototype.Ac=function(){return qh("EPSG:4326")};vs.prototype.Bc=function(){return qh("EPSG:4326")};function Bs(a){this.a=qh((s(a)?a:{}).defaultProjection||"EPSG:4326")}u(Bs,mr);function Cs(a,b){var c=[],d,e,f;e=0;for(f=a.length;e<f;++e)d=a[e],0<e&&c.pop(),d=0<=d?b[d]:b[~d].slice().reverse(),c.push.apply(c,d);e=0;for(f=c.length;e<f;++e)c[e]=c[e].slice();return c}function Ds(a,b,c,d){a=a.geometries;var e=[],f,g;f=0;for(g=a.length;f<g;++f)e[f]=Es(a[f],b,c,d);return e}
function Es(a,b,c,d){var e=a.type,f=Fs[e];b="Point"===e||"MultiPoint"===e?f(a,c,d):f(a,b);c=new I;c.Wa(b);s(a.id)&&c.b(a.id);s(a.properties)&&c.Q(a.properties);return c}
Bs.prototype.c=function(a){if("Topology"==a.type){var b,c=null,d=null;s(a.transform)&&(b=a.transform,c=b.scale,d=b.translate);var e=a.arcs;if(s(b)){b=c;var f=d,g,h;g=0;for(h=e.length;g<h;++g)for(var m=e[g],n=b,p=f,q=0,r=0,v=void 0,z=void 0,B=void 0,z=0,B=m.length;z<B;++z)v=m[z],q+=v[0],r+=v[1],v[0]=q,v[1]=r,Gs(v,n,p)}b=[];a=ec(a.objects);f=0;for(g=a.length;f<g;++f)"GeometryCollection"===a[f].type?(h=a[f],b.push.apply(b,Ds(h,e,c,d))):(h=a[f],b.push(Es(h,e,c,d)));return b}return[]};
function Gs(a,b,c){a[0]=a[0]*b[0]+c[0];a[1]=a[1]*b[1]+c[1]}Bs.prototype.ma=k("a");
var Fs={Point:function(a,b,c){a=a.coordinates;null===b||null===c||Gs(a,b,c);return new hi(a)},LineString:function(a,b){var c=Cs(a.arcs,b);return new km(c)},Polygon:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Cs(a.arcs[d],b);return new H(c)},MultiPoint:function(a,b,c){a=a.coordinates;var d,e;if(null!==b&&null!==c)for(d=0,e=a.length;d<e;++d)Gs(a[d],b,c);return new pm(a)},MultiLineString:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Cs(a.arcs[d],b);return new mm(c)},
MultiPolygon:function(a,b){var c=[],d,e,f,g,h,m;h=0;for(m=a.arcs.length;h<m;++h){d=a.arcs[h];e=[];f=0;for(g=d.length;f<g;++f)e[f]=Cs(d[f],b);c[h]=e}return new qm(c)}};function Hs(a){a=s(a)?a:{};this.b=a.featureType;this.a=a.featureNS;this.c=s(a.schemaLocation)?a.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"}u(Hs,tp);Hs.prototype.Gb=function(a){a=Y([],Jp,a,[{featureType:this.b,featureNS:this.a}]);s(a)||(a=[]);return a};Hs.prototype.e=function(a){if(Vo(a))return Is(a);if(Yo(a))return Y({},Js,a,[]);if(na(a))return a=hp(a),Is(a)};
Hs.prototype.d=function(a){if(Vo(a))return Ks(a);if(Yo(a))return Ls(a);if(na(a))return a=hp(a),Ks(a)};function Ks(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return Ls(a)}var Ms={"http://www.opengis.net/gml":{boundedBy:V(wp,"bounds")}};function Ls(a){var b={},c=Dp(a.getAttribute("numberOfFeatures"));b.numberOfFeatures=c;return Y(b,Ms,a,[])}
var Ns={"http://www.opengis.net/wfs":{totalInserted:V(Cp),totalUpdated:V(Cp),totalDeleted:V(Cp)}},Os={"http://www.opengis.net/ogc":{FeatureId:jp(function(a){return a.getAttribute("fid")})}},Ps={"http://www.opengis.net/wfs":{Feature:function(a,b){rp(Os,a,b)}}},Js={"http://www.opengis.net/wfs":{TransactionSummary:V(function(a,b){return Y({},Ns,a,b)},"transactionSummary"),InsertResults:V(function(a,b){return Y([],Ps,a,b)},"insertIds")}};
function Is(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return Y({},Js,a,[])}var Qs={"http://www.opengis.net/wfs":{PropertyName:W(Gp)}};function Rs(a,b){var c=No("http://www.opengis.net/ogc","Filter"),d=No("http://www.opengis.net/ogc","FeatureId");c.appendChild(d);d.setAttribute("fid",b);a.appendChild(c)}
var Ss={"http://www.opengis.net/wfs":{Insert:W(function(a,b,c){var d=c[c.length-1],d=No(w(d,"featureNS"),w(d,"featureType"));a.appendChild(d);Hq(d,b,c)}),Update:W(function(a,b,c){var d=c[c.length-1],e=w(d,"featureType"),f=w(d,"featurePrefix"),f=s(f)?f:"feature",g=w(d,"featureNS");a.setAttribute("typeName",f+":"+e);a.setAttribute("xmlns:"+f,g);e=b.V;if(s(e)){for(var f=b.S(),g=[],h=0,m=f.length;h<m;h++){var n=b.get(f[h]);s(n)&&g.push({name:f[h],value:n})}sp({node:a,srsName:w(d,"srsName")},Ss,np("Property"),
g,c);Rs(a,e)}}),Delete:W(function(a,b,c){var d=c[c.length-1];c=w(d,"featureType");var e=w(d,"featurePrefix"),e=s(e)?e:"feature",d=w(d,"featureNS");a.setAttribute("typeName",e+":"+c);a.setAttribute("xmlns:"+e,d);b=b.V;s(b)&&Rs(a,b)}),Property:W(function(a,b,c){var d=No("http://www.opengis.net/wfs","Name");a.appendChild(d);Gp(d,b.name);null!=b.value&&(d=No("http://www.opengis.net/wfs","Value"),a.appendChild(d),b.value instanceof Jh?Fq(d,b.value,c):Gp(d,b.value))}),Native:W(function(a,b){s(b.vi)&&a.setAttribute("vendorId",
b.vi);s(b.li)&&a.setAttribute("safeToIgnore",b.li);s(b.value)&&Gp(a,b.value)})}},Ts={"http://www.opengis.net/wfs":{Query:W(function(a,b,c){var d=c[c.length-1],e=w(d,"featurePrefix"),f=w(d,"featureNS"),g=w(d,"propertyNames"),h=w(d,"srsName");a.setAttribute("typeName",(s(e)?e+":":"")+b);s(h)&&a.setAttribute("srsName",h);s(f)&&a.setAttribute("xmlns:"+e,f);b=lc(d);b.node=a;sp(b,Qs,np("PropertyName"),g,c);d=w(d,"bbox");s(d)&&(g=No("http://www.opengis.net/ogc","Filter"),b=w(c[c.length-1],"geometryName"),
e=No("http://www.opengis.net/ogc","BBOX"),g.appendChild(e),f=No("http://www.opengis.net/ogc","PropertyName"),Gp(f,b),e.appendChild(f),Fq(e,d,c),a.appendChild(g))})}};
Hs.prototype.f=function(a){var b=No("http://www.opengis.net/wfs","GetFeature");b.setAttribute("service","WFS");b.setAttribute("version","1.1.0");s(a)&&(s(a.handle)&&b.setAttribute("handle",a.handle),s(a.outputFormat)&&b.setAttribute("outputFormat",a.outputFormat),s(a.maxFeatures)&&b.setAttribute("maxFeatures",a.maxFeatures),s(a.resultType)&&b.setAttribute("resultType",a.resultType),s(a.ni)&&b.setAttribute("startIndex",a.ni),s(a.count)&&b.setAttribute("count",a.count));gp(b,"http://www.w3.org/2001/XMLSchema-instance",
"xsi:schemaLocation",this.c);var c=a.featureTypes;a=[{node:b,srsName:a.srsName,featureNS:s(a.featureNS)?a.featureNS:this.a,featurePrefix:a.featurePrefix,geometryName:a.geometryName,bbox:a.bbox,Xe:s(a.Xe)?a.Xe:[]}];var d=lc(a[a.length-1]);d.node=b;sp(d,Ts,np("Query"),c,a);return b};
Hs.prototype.g=function(a,b,c,d){var e=[],f=No("http://www.opengis.net/wfs","Transaction");f.setAttribute("service","WFS");f.setAttribute("version","1.1.0");var g,h;s(d)&&(g=s(d.gmlOptions)?d.gmlOptions:{},s(d.handle)&&f.setAttribute("handle",d.handle));gp(f,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);null!=a&&(h={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},nc(h,g),sp(h,Ss,np("Insert"),a,e));null!=b&&(h={node:f,featureNS:d.featureNS,
featureType:d.featureType,featurePrefix:d.featurePrefix},nc(h,g),sp(h,Ss,np("Update"),b,e));null!=c&&sp({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},Ss,np("Delete"),c,e);s(d.nativeElements)&&sp({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix},Ss,np("Native"),d.nativeElements,e);return f};Hs.prototype.Ac=function(a){for(a=a.firstChild;null!==a;a=a.nextSibling)if(1==a.nodeType)return this.Bc(a);return null};
Hs.prototype.Bc=function(a){a=a.firstElementChild.firstElementChild;if(null!=a)for(a=a.firstElementChild;null!==a;a=a.nextElementSibling)if(0!==a.childNodes.length&&(1!==a.childNodes.length||3!==a.firstChild.nodeType)){var b=[{}];wp(a,b);return qh(b.pop().srsName)}return null};function Us(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};function Vs(){}Vs.prototype.a=function(a){return Vo(a)?Ws(this,a):Yo(a)?Xs(this,a):na(a)?(a=hp(a),Ws(this,a)):null};function Ys(){this.version=void 0}u(Ys,Vs);function Ws(a,b){for(var c=b.firstChild;null!==c;c=c.nextSibling)if(1==c.nodeType)return Xs(a,c);return null}function Xs(a,b){a.version=Ba(b.getAttribute("version"));var c=Y({version:a.version},Zs,b,[]);return s(c)?c:null}function $s(a,b){return Y({},at,a,b)}function bt(a,b){return Y({},ct,a,b)}function dt(a,b){var c=$s(a,b);if(s(c)){var d=[Dp(a.getAttribute("width")),Dp(a.getAttribute("height"))];c.size=d;return c}}function et(a,b){return Y([],ft,a,b)}
var gt=[null,"http://www.opengis.net/wms"],Zs=X(gt,{Service:V(function(a,b){return Y({},ht,a,b)}),Capability:V(function(a,b){return Y({},it,a,b)})},void 0),it=X(gt,{Request:V(function(a,b){return Y({},jt,a,b)}),Exception:V(function(a,b){return Y([],kt,a,b)}),Layer:V(function(a,b){return Y({},lt,a,b)})},void 0),ht=X(gt,{Name:V(Z),Title:V(Z),Abstract:V(Z),KeywordList:V(et),OnlineResource:V(Us),ContactInformation:V(function(a,b){return Y({},mt,a,b)}),Fees:V(Z),AccessConstraints:V(Z),LayerLimit:V(Cp),
MaxWidth:V(Cp),MaxHeight:V(Cp)},void 0),mt=X(gt,{ContactPersonPrimary:V(function(a,b){return Y({},nt,a,b)}),ContactPosition:V(Z),ContactAddress:V(function(a,b){return Y({},ot,a,b)}),ContactVoiceTelephone:V(Z),ContactFacsimileTelephone:V(Z),ContactElectronicMailAddress:V(Z)},void 0),nt=X(gt,{ContactPerson:V(Z),ContactOrganization:V(Z)},void 0),ot=X(gt,{AddressType:V(Z),Address:V(Z),City:V(Z),StateOrProvince:V(Z),PostCode:V(Z),Country:V(Z)},void 0),kt=X(gt,{Format:jp(Z)},void 0),lt=X(gt,{Name:V(Z),
Title:V(Z),Abstract:V(Z),KeywordList:V(et),CRS:lp(Z),EX_GeographicBoundingBox:V(function(a,b){var c=Y({},pt,a,b);if(s(c)){var d=w(c,"westBoundLongitude"),e=w(c,"southBoundLatitude"),f=w(c,"eastBoundLongitude"),c=w(c,"northBoundLatitude");return s(d)&&s(e)&&s(f)&&s(c)?[d,e,f,c]:void 0}}),BoundingBox:lp(function(a){var b=[Bp(a.getAttribute("minx")),Bp(a.getAttribute("miny")),Bp(a.getAttribute("maxx")),Bp(a.getAttribute("maxy"))],c=[Bp(a.getAttribute("resx")),Bp(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),
extent:b,res:c}}),Dimension:lp(function(a){return{name:a.getAttribute("name"),units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:yp(a.getAttribute("multipleValues")),nearestValue:yp(a.getAttribute("nearestValue")),current:yp(a.getAttribute("current")),values:Z(a)}}),Attribution:V(function(a,b){return Y({},qt,a,b)}),AuthorityURL:lp(function(a,b){var c=$s(a,b);if(s(c)){var d=a.getAttribute("name");c.name=d;return c}}),Identifier:lp(Z),
MetadataURL:lp(function(a,b){var c=$s(a,b);if(s(c)){var d=a.getAttribute("type");c.type=d;return c}}),DataURL:lp($s),FeatureListURL:lp($s),Style:lp(function(a,b){return Y({},rt,a,b)}),MinScaleDenominator:V(Ap),MaxScaleDenominator:V(Ap),Layer:lp(function(a,b){var c=b[b.length-1],d=Y({},lt,a,b);if(s(d)){var e=yp(a.getAttribute("queryable"));s(e)||(e=w(c,"queryable"));d.queryable=s(e)?e:!1;e=Dp(a.getAttribute("cascaded"));s(e)||(e=w(c,"cascaded"));d.cascaded=e;e=yp(a.getAttribute("opaque"));s(e)||(e=
w(c,"opaque"));d.opaque=s(e)?e:!1;e=yp(a.getAttribute("noSubsets"));s(e)||(e=w(c,"noSubsets"));d.noSubsets=s(e)?e:!1;e=Bp(a.getAttribute("fixedWidth"));s(e)||(e=w(c,"fixedWidth"));d.fixedWidth=e;e=Bp(a.getAttribute("fixedHeight"));s(e)||(e=w(c,"fixedHeight"));d.fixedHeight=e;wb(["Style","CRS","AuthorityURL"],function(a){s(w(c,a))&&kc(d,a)});wb("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "),function(a){s(w(d,a))||(d[a]=w(c,a))});return d}})},
void 0),qt=X(gt,{Title:V(Z),OnlineResource:V(Us),LogoURL:V(dt)},void 0),pt=X(gt,{westBoundLongitude:V(Ap),eastBoundLongitude:V(Ap),southBoundLatitude:V(Ap),northBoundLatitude:V(Ap)},void 0),jt=X(gt,{GetCapabilities:V(bt),GetMap:V(bt),GetFeatureInfo:V(bt)},void 0),ct=X(gt,{Format:lp(Z),DCPType:lp(function(a,b){return Y({},st,a,b)})},void 0),st=X(gt,{HTTP:V(function(a,b){return Y({},tt,a,b)})},void 0),tt=X(gt,{Get:V($s),Post:V($s)},void 0),rt=X(gt,{Name:V(Z),Title:V(Z),Abstract:V(Z),LegendURL:lp(dt),
StyleSheetURL:V($s),StyleURL:V($s)},void 0),at=X(gt,{Format:V(Z),OnlineResource:V(Us)},void 0),ft=X(gt,{Keyword:jp(Z)},void 0);function ut(a,b){He.call(this);this.a=new po(this);var c=a;b&&(c=qc(a));this.a.sa(c,"dragenter",this.Sh);c!=a&&this.a.sa(c,"dragover",this.Th);this.a.sa(a,"dragover",this.Uh);this.a.sa(a,"drop",this.Vh)}u(ut,He);l=ut.prototype;l.nc=!1;l.F=function(){ut.H.F.call(this);this.a.mc()};l.Sh=function(a){var b=a.M.dataTransfer;(this.nc=!(!b||!(b.types&&(0<=vb(b.types,"Files")||0<=vb(b.types,"public.file-url"))||b.files&&0<b.files.length)))&&a.preventDefault()};
l.Th=function(a){this.nc&&(a.preventDefault(),a.M.dataTransfer.dropEffect="none")};l.Uh=function(a){this.nc&&(a.preventDefault(),a.Sa(),a=a.M.dataTransfer,a.effectAllowed="all",a.dropEffect="copy")};l.Vh=function(a){this.nc&&(a.preventDefault(),a.Sa(),a=new Yd(a.M),a.type="drop",y(this,a))};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function vt(a,b){this.a=[];this.f=a;this.e=b||null}l=vt.prototype;l.lb=!1;l.xc=!1;l.rd=!1;l.Bf=!1;l.Ud=!1;l.sd=0;l.cancel=function(a){if(this.lb)this.b instanceof vt&&this.b.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.sd--,0>=b.sd&&b.cancel())}this.f?this.f.call(this.e,this):this.Ud=!0;this.lb||(a=new wt(this),xt(this),yt(this,!1,a))}};l.ge=function(a,b){this.rd=!1;yt(this,a,b)};function yt(a,b,c){a.lb=!0;a.b=c;a.xc=!b;zt(a)}
function xt(a){if(a.lb){if(!a.Ud)throw new At(a);a.Ud=!1}}function Bt(a){return yb(a.a,function(a){return pa(a[1])})}
function zt(a){a.d&&(a.lb&&Bt(a))&&(ea.clearTimeout(a.d),delete a.d);a.c&&(a.c.sd--,delete a.c);for(var b=a.b,c=!1,d=!1;a.a.length&&!a.rd;){var e=a.a.shift(),f=e[0],g=e[1],e=e[2];if(f=a.xc?g:f)try{var h=f.call(e||a.e,b);s(h)&&(a.xc=a.xc&&(h==b||h instanceof Error),a.b=b=h);b instanceof vt&&(d=!0,a.rd=!0)}catch(m){b=m,a.xc=!0,Bt(a)||(c=!0)}}a.b=b;d&&(d=b,h=xa(a.ge,a,!0),f=xa(a.ge,a,!1),d.a.push([h,f,void 0]),d.lb&&zt(d),b.Bf=!0);c&&(a.d=ea.setTimeout(Ce(b),0))}
function At(a){tb.call(this);this.a=a}u(At,tb);At.prototype.message="Deferred has already fired";At.prototype.name="AlreadyCalledError";function wt(a){tb.call(this);this.a=a}u(wt,tb);wt.prototype.message="Deferred was canceled";wt.prototype.name="CanceledError";function Ct(a,b){tb.call(this,Aa("Error %s: %s",b,Dt(a)));this.code=a}u(Ct,tb);
function Dt(a){switch(a){case 1:return"File or directory not found";case 2:return"Insecure or disallowed operation";case 3:return"Operation aborted";case 4:return"File or directory not readable";case 5:return"Invalid encoding";case 6:return"Cannot modify file or directory";case 7:return"Invalid state";case 8:return"Invalid line-ending specifier";case 9:return"Invalid modification";case 10:return"Quota exceeded";case 11:return"Invalid filetype";case 12:return"File or directory already exists at specified path";
default:return"Unrecognized error"}};function Et(a,b){Qd.call(this,a.type,b);this.a=a}u(Et,Qd);function Ft(){He.call(this);this.Ha=new FileReader;this.Ha.onloadstart=xa(this.a,this);this.Ha.onprogress=xa(this.a,this);this.Ha.onload=xa(this.a,this);this.Ha.onabort=xa(this.a,this);this.Ha.onerror=xa(this.a,this);this.Ha.onloadend=xa(this.a,this)}u(Ft,He);Ft.prototype.getError=function(){return this.Ha.error&&new Ct(this.Ha.error.code,"reading file")};Ft.prototype.a=function(a){y(this,new Et(a,this))};Ft.prototype.F=function(){Ft.H.F.call(this);delete this.Ha};
function Gt(a){var b=new vt;a.addEventListener("loadend",ya(function(a,b){var e=b.Ha.result,f=b.getError();null==e||f?(xt(a),yt(a,!1,f)):(xt(a),yt(a,!0,e));b.mc()},b,a));return b};function Ht(a){a=s(a)?a:{};Dh.call(this);this.d=s(a.formatConstructors)?a.formatConstructors:[];this.e=s(a.reprojectTo)?qh(a.reprojectTo):null;this.b=null;this.a=void 0}u(Ht,Dh);l=Ht.prototype;l.F=function(){s(this.a)&&re(this.a);Ht.H.F.call(this)};l.cg=function(a){a=a.M.dataTransfer.files;var b,c,d;b=0;for(c=a.length;b<c;++b){d=a[b];var e;e=d;var f=new Ft,g=Gt(f);f.Ha.readAsText(e,"");e=g;d=ya(this.wg,d);e.a.push([d,null,this]);e.lb&&zt(e)}};
l.wg=function(a,b){var c=this.h,d=this.e;null===d&&(d=c.a().T().h());var c=this.d,e=[],f,g;f=0;for(g=c.length;f<g;++f){var h=new c[f],m;try{m=h.ta(b)}catch(n){m=null}if(null!==m){var h=h.ma(b),h=rh(h,d),p,q;p=0;for(q=m.length;p<q;++p){var r=m[p],v=r.L();null!=v&&v.xb(h);e.push(r)}}}y(this,new It(Jt,this,a,e,d))};l.Ea=Ae;
l.setMap=function(a){s(this.a)&&(re(this.a),this.a=void 0);null!==this.b&&(Pd(this.b),this.b=null);Ht.H.setMap.call(this,a);null!==a&&(this.b=new ut(a.b),this.a=x(this.b,"drop",this.cg,!1,this))};var Jt="addfeatures";function It(a,b,c,d,e){Qd.call(this,a,b);this.features=d;this.file=c;this.projection=e}u(It,Qd);function Kt(a,b){this.x=a;this.y=b}u(Kt,$b);Kt.prototype.P=function(){return new Kt(this.x,this.y)};Kt.prototype.scale=$b.prototype.scale;Kt.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};Kt.prototype.rotate=function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.y*b+this.x*a;this.x=this.x*b-this.y*a;this.y=c;return this};function Lt(a){a=s(a)?a:{};Hh.call(this);this.f=s(a.condition)?a.condition:dg;this.a=this.d=void 0;this.e=0}u(Lt,Hh);Lt.prototype.ob=function(a){if(fg(a)){var b=a.map,c=b.e();a=a.pixel;a=new Kt(a[0]-c[0]/2,c[1]/2-a[1]);c=Math.atan2(a.y,a.x);a=Math.sqrt(a.x*a.x+a.y*a.y);var d=b.a().T(),e=vh(d);b.N();s(this.d)&&Eh(b,d,e.rotation-(c-this.d));this.d=c;s(this.a)&&Gh(b,d,this.a*(e.resolution/a));s(this.a)&&(this.e=this.a/a);this.a=a}};
Lt.prototype.hb=function(a){if(!fg(a))return!0;a=a.map;var b=a.a();sg(b,-1);var b=b.T(),c=vh(b),d=this.e-1,e=c.rotation,e=b.constrainRotation(e,0);Eh(a,b,e,void 0,void 0);c=c.resolution;c=b.constrainResolution(c,0,d);Gh(a,b,c,void 0,400);this.e=0;return!1};Lt.prototype.gb=function(a){return fg(a)&&this.f(a)?(sg(a.map.a(),1),this.a=this.d=void 0,!0):!1};Lt.prototype.kd=Be;function Mt(a){Hh.call(this);this.B=s(a.deleteCondition)?a.deleteCondition:Ee(cg,bg);this.u=this.d=null;this.w=[0,0];this.a=new Cm;this.f=s(a.pixelTolerance)?a.pixelTolerance:10;this.o=!1;this.e=null;this.i=new Ri({style:s(a.style)?a.style:Nt()});this.n={Point:this.Ai,LineString:this.qf,LinearRing:this.qf,Polygon:this.Bi,MultiPoint:this.yi,MultiLineString:this.xi,MultiPolygon:this.zi,GeometryCollection:this.wi};this.l=a.features;this.l.forEach(this.Ne,this);x(this.l,"add",this.eg,!1,this);x(this.l,
"remove",this.fg,!1,this)}u(Mt,Hh);l=Mt.prototype;l.Ne=function(a){var b=a.L();s(this.n[b.G()])&&this.n[b.G()].call(this,a,b);a=this.h;null===a||Ot(this,this.w,a)};l.setMap=function(a){this.i.setMap(a);Mt.H.setMap.call(this,a)};l.eg=function(a){this.Ne(a.element)};l.fg=function(a){var b=a.element;a=this.a;var c,d=[];Fm(a,b.L().v(),function(a){b===a.feature&&d.push(a)});for(c=d.length-1;0<=c;--c)a.remove(d[c]);null!==this.d&&0===this.l.qb()&&(this.i.cd(this.d),this.d=null)};
l.Ai=function(a,b){var c=b.D(),c={feature:a,geometry:b,X:[c,c]};Jm(this.a,b.v(),c)};l.yi=function(a,b){var c=b.D(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,geometry:b,depth:[e],index:e,X:[d,d]},Jm(this.a,b.v(),d)};l.qf=function(a,b){var c=b.D(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,geometry:b,index:d,X:f},Jm(this.a,tg(f),g)};
l.xi=function(a,b){var c=b.D(),d,e,f,g,h,m,n;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)m=d.slice(e,e+2),n={feature:a,geometry:b,depth:[g],index:e,X:m},Jm(this.a,tg(m),n)};l.Bi=function(a,b){var c=b.D(),d,e,f,g,h,m,n;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)m=d.slice(e,e+2),n={feature:a,geometry:b,depth:[g],index:e,X:m},Jm(this.a,tg(m),n)};
l.zi=function(a,b){var c=b.D(),d,e,f,g,h,m,n,p,q,r;m=0;for(n=c.length;m<n;++m)for(p=c[m],g=0,h=p.length;g<h;++g)for(d=p[g],e=0,f=d.length-1;e<f;++e)q=d.slice(e,e+2),r={feature:a,geometry:b,depth:[g,m],index:e,X:q},Jm(this.a,tg(q),r)};l.wi=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.n[d[c].G()].call(this,a,d[c])};function Pt(a,b){var c=a.d;null===c?(c=new I(new hi(b)),a.d=c,a.i.Ge(c)):c.L().O(b)}
l.gb=function(a){Ot(this,a.pixel,a.map);this.e=[];var b=this.d;if(null!==b){a=[];var b=b.L().D(),c=tg([b]),d=[];Gm(this.a,c,function(a){d.push(a)},void 0);for(var c={},e=0,f=d.length;e<f;++e){var g=d[e],h=g.X;sa(g.feature)in c||(c[sa(g.feature)]=!0);$e(h[0],b)?this.e.push([g,0]):$e(h[1],b)?this.e.push([g,1]):sa(h)in this.u&&a.push([g,b])}for(e=a.length-1;0<=e;--e)this.Dg.apply(this,a[e])}return null!==this.d};
l.ob=function(a){a=a.coordinate;for(var b=0,c=this.e.length;b<c;++b){var d=this.e[b],e=d[0],f=e.depth,g=e.geometry,h=g.D(),m=e.X,d=d[1];switch(g.G()){case "Point":h=a;m[0]=m[1]=a;break;case "MultiPoint":h[e.index]=a;m[0]=m[1]=a;break;case "LineString":h[e.index+d]=a;m[d]=a;break;case "MultiLineString":h[f[0]][e.index+d]=a;m[d]=a;break;case "Polygon":h[f[0]][e.index+d]=a;m[d]=a;break;case "MultiPolygon":h[f[1]][f[0]][e.index+d]=a,m[d]=a}g.O(h);Pt(this,a)}};
l.hb=function(){for(var a,b=this.e.length-1;0<=b;--b)a=this.e[b][0],this.a.update(tg(a.X),a);return!1};
l.Ea=function(a){var b,c=a.map.a();Db(c.l)[1]||a.type!=Yf||(this.w=a.pixel,Ot(this,a.pixel,a.map));if(null!==this.d&&this.o&&this.B(a)){this.d.L();b=this.e;var c={},d=!1,e,f,g,h,m,n,p,q,r;for(m=b.length-1;0<=m;--m)if(g=b[m],q=g[0],h=q.geometry,f=h.D(),r=sa(q.feature),e=p=n=void 0,0===g[1]?(p=q,n=q.index):1==g[1]&&(e=q,n=q.index+1),r in c||(c[r]=[e,p,n]),g=c[r],s(e)&&(g[0]=e),s(p)&&(g[1]=p),s(g[0])&&s(g[1])){e=f;d=!1;p=n-1;switch(h.G()){case "MultiLineString":f[q.depth[0]].splice(n,1);d=!0;break;case "LineString":f.splice(n,
1);d=!0;break;case "MultiPolygon":e=e[q.depth[1]];case "Polygon":e=e[q.depth[0]],4<e.length&&(n==e.length-1&&(n=0),e.splice(n,1),d=!0,0===n&&(e.pop(),e.push(e[0]),p=e.length-1))}d&&(this.a.remove(g[0]),this.a.remove(g[1]),h.O(f),f={depth:q.depth,feature:q.feature,geometry:q.geometry,index:p,X:[g[0].X[0],g[1].X[1]]},Jm(this.a,tg(f.X),f),Qt(this,h,n,q.depth,-1),this.i.cd(this.d),this.d=null)}b=d}return Mt.H.Ea.call(this,a)&&!b};
function Ot(a,b,c){function d(a,b){return bf(e,We(e,a.X))-bf(e,We(e,b.X))}var e=c.pa(b),f=c.pa([b[0]-a.f,b[1]+a.f]),g=c.pa([b[0]+a.f,b[1]-a.f]),f=tg([f,g]),f=Im(a.a,f);if(0<f.length){f.sort(d);var g=f[0].X,h=We(e,g),m=c.f(h);if(Math.sqrt(bf(b,m))<=a.f){b=c.f(g[0]);c=c.f(g[1]);b=bf(m,b);c=bf(m,c);a.o=Math.sqrt(Math.min(b,c))<=a.f;a.o&&(h=b>c?g[1]:g[0]);Pt(a,h);c={};c[sa(g)]=!0;b=1;for(m=f.length;b<m;++b)if(h=f[b].X,$e(g[0],h[0])&&$e(g[1],h[1])||$e(g[0],h[1])&&$e(g[1],h[0]))c[sa(h)]=!0;else break;a.u=
c;return}}null!==a.d&&(a.i.cd(a.d),a.d=null)}
l.Dg=function(a,b){var c=a.X,d=a.feature,e=a.geometry,f=a.depth,g=a.index,h;switch(e.G()){case "MultiLineString":h=e.D();h[f[0]].splice(g+1,0,b);break;case "Polygon":h=e.D();h[f[0]].splice(g+1,0,b);break;case "MultiPolygon":h=e.D();h[f[1]][f[0]].splice(g+1,0,b);break;case "LineString":h=e.D();h.splice(g+1,0,b);break;default:return}e.O(h);h=this.a;h.remove(a);Qt(this,e,g,f,1);var m={X:[c[0],b],feature:d,geometry:e,depth:f,index:g};Jm(h,tg(m.X),m);this.e.push([m,1]);c={X:[b,c[1]],feature:d,geometry:e,
depth:f,index:g+1};Jm(h,tg(c.X),c);this.e.push([c,0])};l.kd=Be;function Qt(a,b,c,d,e){Fm(a.a,b.v(),function(a){a.geometry===b&&((!s(d)||Jb(a.depth,d))&&a.index>c)&&(a.index+=e)})}function Nt(){var a=Qi();return function(){return a.Point}};function Rt(a){Dh.call(this);a=s(a)?a:{};this.e=s(a.condition)?a.condition:bg;this.d=s(a.addCondition)?a.addCondition:ze;this.f=s(a.removeCondition)?a.removeCondition:ze;this.g=s(a.toggleCondition)?a.toggleCondition:dg;var b;if(s(a.layers))if(pa(a.layers))b=a.layers;else{var c=a.layers;b=function(a){return 0<=vb(c,a)}}else b=Ae;this.b=b;this.a=new Ri({style:s(a.style)?a.style:St()});a=this.a.a;x(a,"add",this.lh,!1,this);x(a,"remove",this.ii,!1,this)}u(Rt,Dh);l=Rt.prototype;l.mh=function(){return this.a.a};
l.Ea=function(a){if(!this.e(a))return!0;var b=this.d(a),c=this.f(a),d=this.g(a),e=a.map,f=this.a.a;b||c||d?e.dd(a.pixel,function(a){var e=vb(f.a,a);-1==e?(b||d)&&f.push(a):(c||d)&&f.Cc(e)},void 0,this.b):(a=e.dd(a.pixel,aa(),void 0,this.b),s(a)&&1==f.qb()&&f.wd(0)==a||(0!==f.qb()&&f.clear(),s(a)&&f.push(a)));return!1};l.setMap=function(a){var b=this.h,c=this.a.a;null===b||c.forEach(b.fc,b);Rt.H.setMap.call(this,a);this.a.setMap(a);null===a||c.forEach(a.wb,a)};
function St(){var a=Qi();Eb(a.Polygon,a.LineString);Eb(a.GeometryCollection,a.LineString);return function(b){return a[b.L().G()]}}l.lh=function(a){a=a.element;var b=this.h;null===b||b.wb(a)};l.ii=function(a){a=a.element;var b=this.h;null===b||b.fc(a)};function $(a){a=s(a)?a:{};N.call(this,a);this.ca=null;x(this,Qe("gradient"),this.md,!1,this);this.fc(s(a.gradient)?a.gradient:Tt);var b=Ut(s(a.radius)?a.radius:8,s(a.blur)?a.blur:15,s(a.shadow)?a.shadow:250),c=Array(256),d=s(a.weight)?a.weight:"weight",e;e=na(d)?function(a){return a.get(d)}:d;this.ga(function(a){a=e(a);a=s(a)?Xb(a,0,1):1;var d=255*a|0,h=c[d];s(h)||(h=[new Mi({image:new Zk({opacity:a,src:b})})],c[d]=h);return h});this.A("renderOrder",null);x(this,"render",this.od,!1,this)}u($,N);
var Tt=["#00f","#0ff","#0f0","#ff0","#f00"];function Ut(a,b,c){var d=a+b+1,e=2*d,e=td(e,e);e.shadowOffsetX=e.shadowOffsetY=c;e.shadowBlur=b;e.shadowColor="#000";e.beginPath();b=d-c;e.arc(b,b,a,0,2*Math.PI,!0);e.fill();return e.canvas.toDataURL()}$.prototype.Ma=function(){return this.get("gradient")};$.prototype.getGradient=$.prototype.Ma;
$.prototype.md=function(){for(var a=this.Ma(),b=td(1,256),c=b.createLinearGradient(0,0,1,256),d=1/(a.length-1),e=0,f=a.length;e<f;++e)c.addColorStop(e*d,a[e]);b.fillStyle=c;b.fillRect(0,0,1,256);this.ca=b.getImageData(0,0,1,256).data};$.prototype.od=function(a){a=a.context;var b=a.canvas,b=a.getImageData(0,0,b.width,b.height),c=b.data,d,e,f;d=0;for(e=c.length;d<e;d+=4)if(f=4*c[d+3])c[d]=this.ca[f],c[d+1]=this.ca[f+1],c[d+2]=this.ca[f+2];a.putImageData(b,0,0)};
$.prototype.fc=function(a){this.A("gradient",a)};$.prototype.setGradient=$.prototype.fc;function Vt(a){return[a]};var Wt=new function(a,b){this.b=a;this.d=b;this.e=this.b*(1-this.d);this.a=2*b-b*b;this.c=Math.sqrt(this.a)}(6377397.155,1/299.15281285);function Xt(a){Xg.call(this,{code:a.code,extent:a.extent,global:!1,units:"m"})}u(Xt,Xg);var Yt=Zb(169028.66/3600),Zt=Math.sin(Yt);Math.log(Math.tan(Math.PI/4+Math.asin(Zt/Math.sqrt(1+Wt.a*Math.pow(Math.cos(Yt),4)/(1-Wt.a)))/2));Math.log(Math.tan(Math.PI/4+Yt/2));Math.log((1+Wt.c*Zt)/(1-Wt.c*Zt));Xt.prototype.d=aa();function $t(){Xt.call(this,{code:"EPSG:2056",extent:au})}u($t,Xt);var au=[2485869.5728,1076443.1884,2837076.5648,1299941.7864];
function bu(){Xt.call(this,{code:"EPSG:21781",extent:cu})}u(bu,Xt);var cu=[485869.5728,76443.1884,837076.5648,299941.7864];function du(a,b){var c=b||{},d=c.document||document,e=yc("SCRIPT"),f={gf:e,Ib:void 0},g=new vt(eu,f),h=null,m=null!=c.timeout?c.timeout:5E3;0<m&&(h=window.setTimeout(function(){fu(e,!0);var b=new gu(hu,"Timeout reached for loading script "+a);xt(g);yt(g,!1,b)},m),f.Ib=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(fu(e,c.Ef||!1,h),xt(g),yt(g,!0,null))};e.onerror=function(){fu(e,!0,h);var b=new gu(iu,"Error while loading script "+a);xt(g);
yt(g,!1,b)};sc(e,{type:"text/javascript",charset:"UTF-8",src:a});ju(d).appendChild(e);return g}function ju(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function eu(){if(this&&this.gf){var a=this.gf;a&&"SCRIPT"==a.tagName&&fu(a,!0,this.Ib)}}function fu(a,b,c){null!=c&&ea.clearTimeout(c);a.onload=fa;a.onerror=fa;a.onreadystatechange=fa;b&&window.setTimeout(function(){Dc(a)},0)}var iu=0,hu=1;
function gu(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);tb.call(this,c);this.code=a}u(gu,tb);function ku(a,b){this.c=new ej(a);this.a=b?b:"callback";this.Ib=5E3}var lu=0;function mu(a,b,c){var d=b||null;b="_"+(lu++).toString(36)+za().toString(36);ea._callbacks_||(ea._callbacks_={});var e=a.c.P();if(d)for(var f in d)d.hasOwnProperty&&!d.hasOwnProperty(f)||rj(e,f,d[f]);c&&(ea._callbacks_[b]=nu(b,c),rj(e,a.a,"_callbacks_."+b));a=du(e.toString(),{timeout:a.Ib,Ef:!0});a.a.push([null,ou(b),void 0]);a.lb&&zt(a)}ku.prototype.cancel=function(a){a&&(a.Ff&&a.Ff.cancel(),a.V&&pu(a.V,!1))};
function ou(a){return function(){pu(a,!1)}}function nu(a,b){return function(c){pu(a,!0);b.apply(void 0,arguments)}}function pu(a,b){ea._callbacks_[a]&&(b?delete ea._callbacks_[a]:ea._callbacks_[a]=fa)};function qu(a){return function(b){return null===b?void 0:a.replace("{z}",b.a.toString()).replace("{x}",b.x.toString()).replace("{y}",b.y.toString()).replace("{-y}",function(){return((1<<b.a)-b.y-1).toString()})}}function ru(a){return su(xb(a,qu))}function su(a){return 1===a.length?a[0]:function(b,c,d){return null===b?void 0:a[Yb((b.x<<b.a)+b.y,a.length)](b,c,d)}}function tu(){}function uu(a,b){var c=new Lb(0,0,0);return function(d,e,f){return null===d?void 0:b(a(d,f,c),e,f)}}
function vu(a){var b=[],c=/\{(\d)-(\d)\}/.exec(a)||/\{([a-z])-([a-z])\}/.exec(a);if(c){var d=c[2].charCodeAt(0),e;for(e=c[1].charCodeAt(0);e<=d;++e)b.push(a.replace(c[0],String.fromCharCode(e)))}else b.push(a);return b};function wu(a){Jn.call(this);this.d=s(a)?a:2048}u(wu,Jn);function xu(a,b){for(var c,d;a.Qa()>a.d&&!(c=a.a.Kb,d=c.a.a.toString(),d in b&&b[d].contains(c.a));)a.pop()};function yu(a){Ok.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,tileGrid:a.tileGrid});this.tileUrlFunction=s(a.tileUrlFunction)?a.tileUrlFunction:tu;this.crossOrigin=s(a.crossOrigin)?a.crossOrigin:null;this.d=new wu;this.tileLoadFunction=s(a.tileLoadFunction)?a.tileLoadFunction:zu;this.tileClass=s(a.tileClass)?a.tileClass:eo}u(yu,Ok);function zu(a,b){a.b().src=b}l=yu.prototype;l.Kd=function(){return this.d.Qa()>this.d.d};
l.Oe=function(a){xu(this.d,a)};l.Rb=function(a,b,c,d,e){var f=this.nb(a,b,c);if(Hn(this.d,f))return this.d.get(f);a=new Lb(a,b,c);d=this.tileUrlFunction(a,d,e);d=new this.tileClass(a,s(d)?0:4,s(d)?d:"",this.crossOrigin,this.tileLoadFunction);Kn(this.d,f,d);return d};l.zc=function(a){this.d.clear();this.tileUrlFunction=a;this.k()};l.of=function(a,b,c){a=this.nb(a,b,c);Hn(this.d,a)&&this.d.get(a)};function Au(a){var b=Array(a.maxZoom+1),c,d=2*zk/256;for(c=0;c<=a.maxZoom;++c)b[c]=d/Math.pow(2,c);Hk.call(this,{minZoom:a.minZoom,origin:[-zk,zk],resolutions:b,tileSize:256})}u(Au,Hk);
Au.prototype.c=function(a){a=s(a)?a:{};var b=this.minZoom,c=this.maxZoom,d=s(a.wrapX)?a.wrapX:!0,e=new Lb(0,0,0),f=null;if(s(a.extent)){var f=Array(c+1),g;for(g=0;g<=c;++g)f[g]=g<b?null:Kk(this,a.extent,g)}return function(a,g,n){g=a.a;if(g<b||c<g)return null;var p=Math.pow(2,g),q=a.x;if(d)q=Yb(q,p);else if(0>q||p<=q)return null;a=a.y;return a<-p||-1<a||null!==f&&(e.a=g,e.x=q,e.y=a,!f[g].contains(e))?null:Mb(g,q,-a-1,n)}};
Au.prototype.Uc=function(a,b){return a.a<this.maxZoom?Qb(2*a.x,2*(a.x+1),2*a.y,2*(a.y+1),b):null};Au.prototype.Pc=function(a,b,c,d){d=Qb(0,a.x,0,a.y,d);for(a=a.a-1;a>=this.minZoom;--a)if(d.a=d.d>>=1,d.b=d.c>>=1,b.call(c,a,d))return!0;return!1};function Bu(a){yu.call(this,{crossOrigin:"anonymous",opaque:!0,projection:qh("EPSG:3857"),state:0,tileLoadFunction:a.tileLoadFunction});this.b=s(a.culture)?a.culture:"en-us";var b=new ej((rb?"https:":"http:")+"//dev.virtualearth.net/REST/v1/Imagery/Metadata/"+a.imagerySet);mu(new ku(b,"jsonp"),{include:"ImageryProviders",key:a.key},xa(this.e,this))}u(Bu,yu);var Cu=new Rb({html:'\x3ca class\x3d"ol-attribution-bing-tos" target\x3d"_blank" href\x3d"http://www.microsoft.com/maps/product/terms.html"\x3eTerms of Use\x3c/a\x3e'});
Bu.prototype.e=function(a){if(200!=a.statusCode||"OK"!=a.statusDescription||"ValidCredentials"!=a.authenticationResultCode||1!=a.resourceSets.length||1!=a.resourceSets[0].resources.length)tk(this,2);else{var b=a.brandLogoUri,c=a.resourceSets[0].resources[0],d=new Au({minZoom:c.zoomMin,maxZoom:c.zoomMax,tileSize:c.imageWidth});this.tileGrid=d;var e=this.b;this.tileUrlFunction=uu(d.c(),su(xb(c.imageUrlSubdomains,function(a){var b=c.imageUrl.replace("{subdomain}",a).replace("{culture}",e);return function(a){return null===
a?void 0:b.replace("{quadkey}",Ob(a))}})));if(c.imageryProviders){var f=$g(qh("EPSG:4326"),this.n);a=xb(c.imageryProviders,function(a){var b=a.attribution,c={};wb(a.coverageAreas,function(a){var b=a.zoomMin,e=a.zoomMax;a=a.bbox;a=Rg([a[1],a[0],a[3],a[2]],f);var g,h;for(g=b;g<=e;++g)h=g.toString(),b=Kk(d,a,g),h in c?c[h].push(b):c[h]=[b]});return new Rb({html:b,tileRanges:c})});a.push(Cu);this.h=a}this.w=b;tk(this,1)}};function Du(a,b,c){if(pa(a))c&&(a=xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:ea.setTimeout(a,b||0)};function Eu(){}Eu.prototype.a=null;function Fu(a){var b;(b=a.a)||(b={},Gu(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Hu;function Iu(){}u(Iu,Eu);function Ju(a){return(a=Gu(a))?new ActiveXObject(a):new XMLHttpRequest}function Gu(a){if(!a.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.c}Hu=new Iu;function Ku(a){He.call(this);this.B=new Vi;this.i=a||null;this.a=!1;this.g=this.I=null;this.C=this.n="";this.b=0;this.e="";this.c=this.w=this.t=this.l=!1;this.h=0;this.d=null;this.f=Lu;this.o=this.J=!1}u(Ku,He);var Lu="",Mu=/^https?$/i,Nu=["POST","PUT"];
function Ou(a,b){if(a.I)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+a.n+"; newUri\x3d"+b);a.n=b;a.e="";a.b=0;a.C="GET";a.l=!1;a.a=!0;a.I=a.i?Ju(a.i):Ju(Hu);a.g=a.i?Fu(a.i):Fu(Hu);a.I.onreadystatechange=xa(a.u,a);try{a.w=!0,a.I.open("GET",b,!0),a.w=!1}catch(c){Pu(a,c);return}var d=a.B.P(),e=zb(d.S(),Qu),f=ea.FormData&&!1;!(0<=vb(Nu,"GET"))||(e||f)||Wi(d,"Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");Ui(d,function(a,b){this.I.setRequestHeader(b,a)},
a);a.f&&(a.I.responseType=a.f);"withCredentials"in a.I&&(a.I.withCredentials=a.J);try{Ru(a),0<a.h&&(a.o=$a&&ob(9)&&oa(a.I.timeout)&&s(a.I.ontimeout),a.o?(a.I.timeout=a.h,a.I.ontimeout=xa(a.Ib,a)):a.d=Du(a.Ib,a.h,a)),a.t=!0,a.I.send(""),a.t=!1}catch(g){Pu(a,g)}}function Qu(a){return"content-type"==a.toLowerCase()}
Ku.prototype.Ib=function(){"undefined"!=typeof da&&this.I&&(this.e="Timed out after "+this.h+"ms, aborting",this.b=8,y(this,"timeout"),this.I&&this.a&&(this.a=!1,this.c=!0,this.I.abort(),this.c=!1,this.b=8,y(this,"complete"),y(this,"abort"),Su(this)))};function Pu(a,b){a.a=!1;a.I&&(a.c=!0,a.I.abort(),a.c=!1);a.e=b;a.b=5;Tu(a);Su(a)}function Tu(a){a.l||(a.l=!0,y(a,"complete"),y(a,"error"))}Ku.prototype.F=function(){this.I&&(this.a&&(this.a=!1,this.c=!0,this.I.abort(),this.c=!1),Su(this,!0));Ku.H.F.call(this)};
Ku.prototype.u=function(){if(!this.Xa&&this.a&&"undefined"!=typeof da&&(!this.g[1]||4!=Uu(this)||2!=Vu(this)))if(this.t&&4==Uu(this))Du(this.u,0,this);else if(y(this,"readystatechange"),4==Uu(this)){this.a=!1;try{if(Wu(this))y(this,"complete"),y(this,"success");else{this.b=6;var a;try{a=2<Uu(this)?this.I.statusText:""}catch(b){a=""}this.e=a+" ["+Vu(this)+"]";Tu(this)}}finally{Su(this)}}};
function Su(a,b){if(a.I){Ru(a);var c=a.I,d=a.g[0]?fa:null;a.I=null;a.g=null;b||y(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function Ru(a){a.I&&a.o&&(a.I.ontimeout=null);oa(a.d)&&(ea.clearTimeout(a.d),a.d=null)}
function Wu(a){var b=Vu(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=$i(String(a.n))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Mu.test(a?a.toLowerCase():"");c=b}return c}function Uu(a){return a.I?a.I.readyState:0}function Vu(a){try{return 2<Uu(a)?a.I.status:-1}catch(b){return-1}}function Xu(a){try{return a.I?a.I.responseText:""}catch(b){return""}}
function Yu(a){try{if(!a.I)return null;if("response"in a.I)return a.I.response;switch(a.f){case Lu:case "text":return a.I.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.I)return a.I.mozResponseArrayBuffer}return null}catch(b){return null}};function Zu(a){Mm.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection});this.format=a.format}u(Zu,Mm);
function $u(a,b,c,d){var e=new Ku;e.f="binary"==a.format.G()&&Bd?"arraybuffer":"text";x(e,"complete",function(a){a=a.target;if(Wu(a)){var b=this.format.G(),e;if("binary"==b&&Bd)e=Yu(a);else if("json"==b)e=Xu(a);else if("text"==b)e=Xu(a);else if("xml"==b){if(!$a)try{e=a.I?a.I.responseXML:null}catch(m){e=null}null!=e||(e=hp(Xu(a)))}null!=e?c.call(d,this.b(e)):tk(this,2)}else tk(this,2);Pd(a)},!1,a);Ou(e,b)}
Zu.prototype.b=function(a){var b=this.format,c=b.ta(a);a=b.ma(a);b=this.n;if(null!==b&&null!==a&&a!==b&&(a.Ja!=b.Ja||$g(a,b)!==ih)){a=rh(a,b);var d,b=0;for(d=c.length;b<d;++b){var e=c[b].L();null!=e&&e.xb(a)}}return c};function av(a){Zu.call(this,{attributions:a.attributions,extent:a.extent,format:a.format,logo:a.logo,projection:a.projection});s(a.arrayBuffer)&&this.xa(this.b(a.arrayBuffer));s(a.doc)&&this.xa(this.b(a.doc));s(a.node)&&this.xa(this.b(a.node));s(a.object)&&this.xa(this.b(a.object));s(a.text)&&this.xa(this.b(a.text));if(s(a.url)||s(a.urls))if(tk(this,0),s(a.url)&&$u(this,a.url,function(a){this.xa(a);tk(this,1)},this),s(a.urls)){a=a.urls;var b,c;b=0;for(c=a.length;b<c;++b)$u(this,a[b],function(a){this.xa(a);
tk(this,1)},this)}}u(av,Zu);function bv(a){a=s(a)?a:{};av.call(this,{attributions:a.attributions,doc:a.doc,extent:a.extent,format:new Kq,logo:a.logo,node:a.node,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}u(bv,av);function cv(a){a=s(a)?a:{};av.call(this,{attributions:a.attributions,extent:a.extent,format:new rr({defaultProjection:a.defaultProjection}),logo:a.logo,object:a.object,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}u(cv,av);function dv(a){a=s(a)?a:{};av.call(this,{format:new Ar({altitudeMode:a.altitudeMode}),projection:a.projection,text:a.text,url:a.url,urls:a.urls})}u(dv,av);function ev(a,b,c,d,e){Ek.call(this,a,b,c,2,d);this.a=e}u(ev,Ek);ev.prototype.e=k("a");function fv(a){Bl.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,resolutions:a.resolutions,state:a.state});this.o=a.canvasFunction;this.g=null;this.l=0;this.u=s(a.ratio)?a.ratio:1.5}u(fv,Bl);fv.prototype.Xb=function(a,b,c,d){b=Cl(this,b);var e=this.g;if(null!==e&&this.l==this.c&&e.d==b&&e.b==c&&Ag(e.v(),a))return e;a=a.slice();Pg(a,this.u);d=this.o(a,b,c,[Kg(a)/b*c,Ig(a)/b*c],d);null===d||(e=new ev(a,b,c,this.h,d));this.g=e;this.l=this.c;return e};function gv(a){var b=s(a.attributions)?a.attributions:null,c=s(a.crossOrigin)?a.crossOrigin:null,d=a.imageExtent,e=(d[3]-d[1])/a.imageSize[1],f=a.url,g=qh(a.projection);Bl.call(this,{attributions:b,extent:a.extent,logo:a.logo,projection:g,resolutions:[e]});this.b=new Fk(d,e,1,b,f,c)}u(gv,Bl);gv.prototype.Xb=function(a){return Lg(a,this.b.v())?this.b:null};function hv(a){this.d=a.source;this.ph=s(a.style)?Pi(a.style):Oi;this.B=kd();this.b=td();this.e=[0,0];this.f=null;fv.call(this,{attributions:a.attributions,canvasFunction:xa(this.Cf,this),extent:a.extent,logo:a.logo,projection:a.projection,ratio:a.ratio,resolutions:a.resolutions,state:this.d.i});x(this.d,"change",this.sh,void 0,this)}u(hv,fv);l=hv.prototype;
l.Cf=function(a,b,c,d){var e=new Vl(b/(2*c),a,b),f=!1;this.d.Oc(a,b,function(a){var d;if(!(d=f))if(d=this.ph(a,b),null!=d){var m=b*b/(4*c*c),n,p,q=!1;n=0;for(p=d.length;n<p;++n)q=um(e,a,d[n],m,a,this.rh,this)||q;d=q}else d=!1;f=d},this);Zl(e);if(f)return null;this.e[0]!=d[0]||this.e[1]!=d[1]?(this.b.canvas.width=d[0],this.b.canvas.height=d[1],this.e[0]=d[0],this.e[1]=d[1]):this.b.clearRect(0,0,d[0],d[1]);d=bl(this.B,d[0]/2,d[1]/2,c/b,-c/b,0,-Gg(a)[0],-Gg(a)[1]);Wl(e,this.b,a,c,d,0,{});this.f=e;return this.b.canvas};
l.fd=function(a,b,c,d,e){return null===this.f?void 0:Yl(this.f,a,b,0,d,{},function(a,b){return e(b)})};l.qh=k("d");l.rh=function(){this.k()};l.sh=function(){tk(this,this.d.i)};function iv(a){a=s(a)?a:{};Bl.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.R=s(a.crossOrigin)?a.crossOrigin:null;this.e=a.url;this.d=a.params;this.f=!0;jv(this);this.C=a.serverType;this.Y=s(a.hidpi)?a.hidpi:!0;this.b=null;this.g=[0,0];this.l=null;this.u=NaN;this.B=0;this.o=s(a.ratio)?a.ratio:1.5}u(iv,Bl);l=iv.prototype;
l.th=function(a,b,c,d){if(s(this.e)&&null!==this.b&&b==this.u&&(c===this.l||(c.Ja!=this.l.Ja?0:$g(c,this.l)===ih))){var e=this.b.v(),f=this.b.b,g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:w(this.d,"LAYERS")};nc(g,this.d,d);b/=f;d=Math.floor((e[3]-a[1])/b);g[this.f?"I":"X"]=Math.floor((a[0]-e[0])/b);g[this.f?"J":"Y"]=d;return kv(this,e,this.g,f,c,g)}};l.uh=k("d");
l.Xb=function(a,b,c,d){if(!s(this.e))return null;b=Cl(this,b);1==c||this.Y&&s(this.C)||(c=1);var e=this.b;if(null!==e&&this.B==this.c&&e.d==b&&e.b==c&&Ag(e.v(),a))return e;e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};nc(e,this.d);a=a.slice();var f=(a[0]+a[2])/2,g=(a[1]+a[3])/2;if(1!=this.o){var h=this.o*Kg(a)/2,m=this.o*Ig(a)/2;a[0]=f-h;a[1]=g-m;a[2]=f+h;a[3]=g+m}var h=b/c,m=Math.ceil(Kg(a)/h),n=Math.ceil(Ig(a)/h);a[0]=f-h*m/2;a[2]=f+h*m/2;a[1]=g-h*n/2;a[3]=
g+h*n/2;this.g[0]=m;this.g[1]=n;e=kv(this,a,this.g,c,d,e);this.b=new Fk(a,b,c,this.h,e,this.R);this.l=d;this.u=b;this.B=this.c;return this.b};
function kv(a,b,c,d,e,f){f[a.f?"CRS":"SRS"]=e.a;"STYLES"in a.d||(f.STYLES=new String(""));if(1!=d)switch(a.C){case "geoserver":f.FORMAT_OPTIONS="dpi:"+(90*d+0.5|0);break;case "mapserver":f.MAP_RESOLUTION=90*d;break;case "carmentaserver":case "qgis":f.DPI=90*d}f.WIDTH=c[0];f.HEIGHT=c[1];c=e.e;f.BBOX=(a.f&&"ne"==c.substr(0,2)?[b[1],b[0],b[3],b[2]]:b).join(",");return bj(dj([a.e],f))}l.vh=k("e");l.wh=function(a){a!=this.e&&(this.e=a,this.b=null,this.k())};
l.xh=function(a){nc(this.d,a);jv(this);this.b=null;this.k()};function jv(a){a.f=0<=Ka(w(a.d,"VERSION","1.3.0"),"1.3")};function lv(a){a=s(a)?a:{};av.call(this,{attributions:a.attributions,doc:a.doc,extent:a.extent,format:new Er({defaultStyle:a.defaultStyle}),logo:a.logo,node:a.node,projection:a.projection,text:a.text,url:a.url,urls:a.urls})}u(lv,av);function mv(a,b,c){return function(d,e,f){return c(a,b,d,e,f)}}function nv(){};function ov(a){Bl.call(this,{extent:a.extent,projection:a.projection,resolutions:a.resolutions});this.l=s(a.crossOrigin)?a.crossOrigin:null;this.b=s(a.displayDpi)?a.displayDpi:96;this.f=s(a.url)?mv(a.url,s(a.params)?a.params:{},xa(this.u,this)):nv;this.o=s(a.hidpi)?a.hidpi:!0;this.g=s(a.metersPerUnit)?a.metersPerUnit:1;this.e=s(a.ratio)?a.ratio:1;this.B=s(a.useOverlay)?a.useOverlay:!1;this.d=null}u(ov,Bl);
ov.prototype.Xb=function(a,b,c,d){b=Cl(this,b);c=this.o?c:1;var e=this.d;if(null!==e&&e.d==b&&e.b==c&&Ag(e.v(),a))return e;1!=this.e&&(a=a.slice(),Pg(a,this.e));d=this.f(a,[Kg(a)/b*c,Ig(a)/b*c],d);return this.d=e=s(d)?new Fk(a,b,c,this.h,d,this.l):null};
ov.prototype.u=function(a,b,c,d){var e;e=this.g;var f=Kg(c),g=Ig(c),h=d[0],m=d[1],n=0.0254/this.b;e=m*f>h*g?f*e/(h*n):g*e/(m*n);c=Gg(c);d={OPERATION:this.B?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.MapGuide source",CLIP:"1",SETDISPLAYDPI:this.b,SETDISPLAYWIDTH:Math.round(d[0]),SETDISPLAYHEIGHT:Math.round(d[1]),SETVIEWSCALE:e,SETVIEWCENTERX:c[0],SETVIEWCENTERY:c[1]};nc(d,b);return bj(dj([a],d))};function pv(a){var b=s(a.projection)?a.projection:"EPSG:3857",c=new Au({maxZoom:s(a.maxZoom)?a.maxZoom:18});yu.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,extent:a.extent,logo:a.logo,projection:b,tileGrid:c,tileLoadFunction:a.tileLoadFunction,tileUrlFunction:tu});this.e=c.c({extent:a.extent,wrapX:a.wrapX});s(a.tileUrlFunction)?this.zc(a.tileUrlFunction):s(a.urls)?this.zc(ru(a.urls)):s(a.url)&&this.b(a.url)}u(pv,yu);pv.prototype.zc=function(a){pv.H.zc.call(this,uu(this.e,a))};
pv.prototype.b=function(a){this.zc(ru(vu(a)))};function qv(a){a=s(a)?a:{};var b=rb?"https:":"http:";pv.call(this,{attributions:s(a.attributions)?a.attributions:rv,crossOrigin:s(a.crossOrigin)?a.crossOrigin:"anonymous",opaque:!0,maxZoom:a.maxZoom,tileLoadFunction:a.tileLoadFunction,url:s(a.url)?a.url:b+"//{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}u(qv,pv);
var sv=new Rb({html:'Data \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://www.openstreetmap.org/copyright"\x3eODbL\x3c/a\x3e'}),tv=new Rb({html:'Tiles \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://creativecommons.org/licenses/by-sa/2.0/"\x3eCC BY-SA\x3c/a\x3e'}),rv=[tv,sv];function uv(a){a=s(a)?a:{};var b=vv[a.layer];pv.call(this,{attributions:b.attributions,crossOrigin:"anonymous",logo:"//developer.mapquest.com/content/osm/mq_logo.png",maxZoom:b.maxZoom,opaque:!0,tileLoadFunction:a.tileLoadFunction,url:(rb?"https:":"http:")+"//otile{1-4}-s.mqcdn.com/tiles/1.0.0/"+a.layer+"/{z}/{x}/{y}.jpg"})}u(uv,pv);
var wv=new Rb({html:'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'}),vv={osm:{maxZoom:28,attributions:[wv,sv]},sat:{maxZoom:18,attributions:[wv,new Rb({html:"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]},hyb:{maxZoom:18,attributions:[wv,sv]}};function xv(a){a=s(a)?a:{};av.call(this,{attributions:a.attributions,doc:a.doc,extent:a.extent,format:new vs,logo:a.logo,node:a.node,projection:a.projection,reprojectTo:a.reprojectTo,text:a.text,url:a.url})}u(xv,av);function yv(a){Zu.call(this,{attributions:a.attributions,extent:a.extent,format:a.format,logo:a.logo,projection:a.projection});this.t=new Cm;this.u=a.loader;this.B=s(a.strategy)?a.strategy:Vt;this.l={}}u(yv,Zu);yv.prototype.xa=function(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c){var e=a[c],f=e.V;f in this.l||(b.push(e),this.l[f]=!0)}yv.H.xa.call(this,b)};
yv.prototype.Gd=function(a,b,c){var d=this.t;a=this.B(a,b);var e,f;e=0;for(f=a.length;e<f;++e){var g=a[e];Gm(d,g,function(a){return Ag(a.extent,g)},void 0)||(this.u.call(this,g,b,c),Jm(d,g,{extent:g.slice()}))}};var zv={terrain:{Aa:"jpg",opaque:!0},"terrain-background":{Aa:"jpg",opaque:!0},"terrain-labels":{Aa:"png",opaque:!1},"terrain-lines":{Aa:"png",opaque:!1},"toner-background":{Aa:"png",opaque:!0},toner:{Aa:"png",opaque:!0},"toner-hybrid":{Aa:"png",opaque:!1},"toner-labels":{Aa:"png",opaque:!1},"toner-lines":{Aa:"png",opaque:!1},"toner-lite":{Aa:"png",opaque:!0},watercolor:{Aa:"jpg",opaque:!0}},Av={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:3,maxZoom:16}};
function Bv(a){var b=a.layer.indexOf("-"),b=-1==b?a.layer:a.layer.slice(0,b),c=zv[a.layer],d=rb?"https:":"http:";pv.call(this,{attributions:Cv,crossOrigin:"anonymous",maxZoom:Av[b].maxZoom,opaque:c.opaque,tileLoadFunction:a.tileLoadFunction,url:s(a.url)?a.url:d+"//{a-d}.tile.stamen.com/"+a.layer+"/{z}/{x}/{y}."+c.Aa})}u(Bv,pv);
var Cv=[new Rb({html:'Map tiles by \x3ca href\x3d"http://stamen.com/"\x3eStamen Design\x3c/a\x3e, under \x3ca href\x3d"http://creativecommons.org/licenses/by/3.0/"\x3eCC BY 3.0\x3c/a\x3e.'}),sv];function Dv(a,b){Tj.call(this,a,2);this.f=a;this.e=b.ja(a.a);this.c={}}u(Dv,Tj);Dv.prototype.b=function(a){a=s(a)?sa(a):-1;if(a in this.c)return this.c[a];var b=this.e,c=td(b,b);c.strokeStyle="black";c.strokeRect(0.5,0.5,b+0.5,b+0.5);c.fillStyle="black";c.textAlign="center";c.textBaseline="middle";c.font="24px sans-serif";c.fillText(this.f.toString(),b/2,b/2);return this.c[a]=c.canvas};
function Ev(a){Ok.call(this,{extent:a.extent,opaque:!1,projection:a.projection,tileGrid:a.tileGrid});this.b=new wu}u(Ev,Ok);Ev.prototype.Kd=function(){return this.b.Qa()>this.b.d};Ev.prototype.Oe=function(a){xu(this.b,a)};Ev.prototype.Rb=function(a,b,c){var d=this.nb(a,b,c);if(Hn(this.b,d))return this.b.get(d);a=new Dv(new Lb(a,b,c),this.tileGrid);Kn(this.b,d,a);return a};function Fv(a){yu.call(this,{crossOrigin:a.crossOrigin,projection:qh("EPSG:3857"),state:0,tileLoadFunction:a.tileLoadFunction});mu(new ku(a.url),void 0,xa(this.b,this))}u(Fv,yu);
Fv.prototype.b=function(a){var b=qh("EPSG:4326"),c;if(s(a.bounds)){var d=$g(b,this.n);this.J=c=Rg(a.bounds,d)}var e=a.minzoom||0,d=a.maxzoom||22,f=new Au({maxZoom:d,minZoom:e});this.tileGrid=f;this.tileUrlFunction=uu(f.c({extent:c}),ru(a.tiles));if(s(a.attribution)){b=s(c)?c:b.v();c={};for(var g;e<=d;++e)g=e.toString(),c[g]=[Kk(f,b,e)];this.h=[new Rb({html:a.attribution,tileRanges:c})]}tk(this,1)};function Gv(a){Zu.call(this,{attributions:a.attributions,extent:a.extent,format:a.format,logo:a.logo,projection:a.projection});var b=a.tileGrid;this.u=a.tileGrid;this.l=tu;this.B=b.c({extent:a.extent});this.t={};s(a.tileUrlFunction)?(this.l=a.tileUrlFunction,this.k()):s(a.urls)?(this.l=ru(a.urls),this.k()):s(a.url)&&(this.l=ru(vu(a.url)),this.k())}u(Gv,Zu);Gv.prototype.clear=function(){ic(this.t)};
Gv.prototype.Oc=function(a,b,c,d){var e=this.u,f=this.t;b=jg(e.a,b,0);a=Kk(e,a,b);for(var g,e=a.a;e<=a.d;++e)for(g=a.b;g<=a.c;++g){var h=f[b+"/"+e+"/"+g];if(s(h)){var m,n;m=0;for(n=h.length;m<n;++m){var p=c.call(d,h[m]);if(p)return p}}}};Gv.prototype.Ga=function(){var a=this.t,b=[],c;for(c in a)Eb(b,a[c]);return b};
Gv.prototype.Gd=function(a,b,c){var d=this.B,e=this.u,f=this.l,g=this.t;b=jg(e.a,b,0);a=Kk(e,a,b);var e=new Lb(b,0,0),h,m;for(h=a.a;h<=a.d;++h)for(m=a.b;m<=a.c;++m){var n=b+"/"+h+"/"+m;if(!(n in g)){e.a=b;e.x=h;e.y=m;d(e,c,e);var p=f(e,1,c);s(p)&&(g[n]=[],$u(this,p,ya(function(a,b){g[a]=b;tk(this,1)},n),this))}}};function Hv(a){a=s(a)?a:{};var b=s(a.params)?a.params:{};yu.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,extent:a.extent,logo:a.logo,opaque:!w(b,"TRANSPARENT",!0),projection:a.projection,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,tileUrlFunction:xa(this.Ah,this)});var c=a.urls;!s(c)&&s(a.url)&&(c=vu(a.url));this.t=c;this.f=s(a.gutter)?a.gutter:0;this.b=b;this.g=NaN;this.e=!0;this.l=a.serverType;this.u=s(a.hidpi)?a.hidpi:!0;this.o="";Iv(this);this.B=ug();Jv(this)}
u(Hv,yu);l=Hv.prototype;
l.yh=function(a,b,c,d){var e=this.g;if(!isNaN(this.g)){var f=this.tileGrid;null===f&&(f=Pk(this,c));b=Mk(f,a[0],a[1],b,!1,void 0);if(!(f.a.length<=b.a)){var g=f.ea(b.a),h=Jk(f,b,this.B),f=f.ja(b.a),m=this.f;0!==m&&(f+=2*m,h=xg(h,g*m,h));1!=e&&(f=f*e+0.5|0);m={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:w(this.b,"LAYERS")};nc(m,this.b,d);d=Math.floor((h[3]-a[1])/(g/e));m[this.e?"I":"X"]=Math.floor((a[0]-h[0])/(g/e));m[this.e?"J":"Y"]=d;return Kv(this,
b,f,h,e,c,m)}}};l.Rc=k("f");l.nb=function(a,b,c){return this.o+Hv.H.nb.call(this,a,b,c)};l.zh=k("b");
function Kv(a,b,c,d,e,f,g){var h=a.t;if(s(h)&&0!=h.length){g.WIDTH=c;g.HEIGHT=c;g[a.e?"CRS":"SRS"]=f.a;"STYLES"in a.b||(g.STYLES=new String(""));if(1!=e)switch(a.l){case "geoserver":g.FORMAT_OPTIONS="dpi:"+(90*e+0.5|0);break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e}c=f.e;a.e&&"ne"==c.substr(0,2)&&(c=d[0],d[0]=d[1],d[1]=c,c=d[2],d[2]=d[3],d[3]=c);g.BBOX=d.join(",");return bj(dj([1==h.length?h[0]:h[Yb((b.x<<b.a)+b.y,a.t.length)]],g))}}
l.uc=function(a,b,c){a=Hv.H.uc.call(this,a,b,c);return 1!=b&&this.u&&s(this.l)?a*b+0.5|0:a};l.Yf=k("t");function Iv(a){var b=0,c=[],d;for(d in a.b)c[b++]=d+"-"+a.b[d];a.o=c.join("/")}
l.Ah=function(a,b,c){var d=this.tileGrid;null===d&&(d=Pk(this,c));if(!(d.a.length<=a.a)){1==b||this.u&&s(this.l)||(b=1);var e=d.ea(a.a),f=Jk(d,a,this.B),d=d.ja(a.a),g=this.f;0!==g&&(d+=2*g,f=xg(f,e*g,f));e=this.v();if(null===e||Lg(f,e)&&!Qg(f,e))return 1!=b&&(d=d*b+0.5|0),e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0},nc(e,this.b),this.g=b,Kv(this,a,d,f,b,c,e)}};l.Bh=function(a){nc(this.b,a);Iv(this);Jv(this);this.k()};
function Jv(a){a.e=0<=Ka(w(a.b,"VERSION","1.3.0"),"1.3")};function Lv(a){a=s(a)?a:{};av.call(this,{attributions:a.attributions,extent:a.extent,format:new Bs({defaultProjection:a.defaultProjection}),logo:a.logo,object:a.object,projection:a.projection,text:a.text,url:a.url})}u(Lv,av);function Mv(a){this.d=a.matrixIds;Hk.call(this,{origin:a.origin,origins:a.origins,resolutions:a.resolutions,tileSize:a.tileSize,tileSizes:a.tileSizes})}u(Mv,Hk);Mv.prototype.g=k("d");
function Nv(a){var b=[],c=[],d=[],e=[],f=qh(a.supportedCRS).f();Hb(a.matrixIds,function(a,b){return b.scaleDenominator-a.scaleDenominator});wb(a.matrixIds,function(a){c.push(a.identifier);d.push(a.topLeftCorner);b.push(2.8E-4*a.scaleDenominator/f);e.push(a.tileWidth)});return new Mv({origins:d,resolutions:b,matrixIds:c,tileSizes:e})};var Ov="KVP";
function Pv(a){function b(a){a=e==Ov?bj(dj([a],g)):a.replace(/\{(\w+?)\}/g,function(a,b){return b in g?g[b]:a});return function(b){if(null!==b){var c={TileMatrix:f.d[b.a],TileCol:b.x,TileRow:b.y};nc(c,h);b=a;return b=e==Ov?bj(dj([b],c)):b.replace(/\{(\w+?)\}/g,function(a,b){return c[b]})}}}var c=s(a.version)?a.version:"1.0.0",d=s(a.format)?a.format:"image/jpeg";this.b=s(a.dimensions)?a.dimensions:{};this.e="";Qv(this);var e=s(a.requestEncoding)?a.requestEncoding:Ov,f=a.tileGrid,g={Layer:a.layer,style:a.style,
Style:a.style,TileMatrixSet:a.matrixSet};e==Ov&&nc(g,{Service:"WMTS",Request:"GetTile",Version:c,Format:d});var h=this.b,c=tu,d=a.urls;!s(d)&&s(a.url)&&(d=vu(a.url));s(d)&&(c=su(xb(d,b)));var m=ug(),n=new Lb(0,0,0),c=uu(function(b,c){if(f.a.length<=b.a)return null;var d=b.x,e=-b.y-1,g=Jk(f,b),h=c.v(),A=s(a.extent)?a.extent:h;null!==A&&(c.l&&A[0]===h[0]&&A[2]===h[2])&&(g=Math.ceil(Kg(A)/Kg(g)),d=Yb(d,g),n.a=b.a,n.x=d,n.y=b.y,g=Jk(f,n,m));return!Lg(g,A)||Qg(g,A)?null:new Lb(b.a,d,e)},c);yu.call(this,
{attributions:a.attributions,crossOrigin:a.crossOrigin,extent:a.extent,logo:a.logo,projection:a.projection,tileGrid:f,tileLoadFunction:a.tileLoadFunction,tileUrlFunction:c})}u(Pv,yu);Pv.prototype.f=k("b");Pv.prototype.nb=function(a,b,c){return this.e+Pv.H.nb.call(this,a,b,c)};function Qv(a){var b=0,c=[],d;for(d in a.b)c[b++]=d+"-"+a.b[d];a.e=c.join("/")}Pv.prototype.g=function(a){nc(this.b,a);Qv(this);this.k()};function Rv(a){var b=s(a)?a:b;Hk.call(this,{origin:[0,0],resolutions:b.resolutions})}u(Rv,Hk);Rv.prototype.c=function(a){a=s(a)?a:{};var b=this.minZoom,c=this.maxZoom,d=new Lb(0,0,0),e=null;if(s(a.extent)){var e=Array(c+1),f;for(f=0;f<=c;++f)e[f]=f<b?null:Kk(this,a.extent,f)}return function(a,f,m){f=a.a;if(f<b||c<f)return null;var n=Math.pow(2,f),p=a.x;if(0>p||n<=p)return null;a=a.y;return a<-n||-1<a||null!==e&&(d.a=f,d.x=p,d.y=-a-1,!e[f].contains(d))?null:Mb(f,p,-a-1,m)}};function Sv(a){a=s(a)?a:{};var b=a.size,c=b[0],d=b[1],e=[],f=256;switch(s(a.tierSizeCalculation)?a.tierSizeCalculation:"default"){case "default":for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),f+=f;break;case "truncated":for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),c>>=1,d>>=1}e.push([1,1]);e.reverse();for(var f=[1],g=[0],d=1,c=e.length;d<c;d++)f.push(1<<d),g.push(e[d-1][0]*e[d-1][1]+g[d-1]);f.reverse();var f=new Rv({resolutions:f}),h=a.url,b=uu(f.c({extent:[0,0,b[0],b[1]]}),function(a){return null===
a?void 0:h+"TileGroup"+((a.x+a.y*e[a.a][0]+g[a.a])/256|0)+"/"+a.a+"-"+a.x+"-"+a.y+".jpg"});yu.call(this,{attributions:a.attributions,crossOrigin:a.crossOrigin,logo:a.logo,tileClass:Tv,tileGrid:f,tileUrlFunction:b})}u(Sv,yu);function Tv(a,b,c,d,e){eo.call(this,a,b,c,d,e);this.h={}}u(Tv,eo);
Tv.prototype.b=function(a){var b=s(a)?sa(a).toString():"";if(b in this.h)return this.h[b];a=Tv.H.b.call(this,a);if(2==this.state){if(256==a.width&&256==a.height)return this.h[b]=a;var c=td(256,256);c.drawImage(a,0,0);return this.h[b]=c.canvas}return a};function Uv(a){a=s(a)?a:{};this.a=a.font;this.b=a.rotation;this.d=a.scale;this.f=a.text;this.h=a.textAlign;this.g=a.textBaseline;this.c=s(a.fill)?a.fill:null;this.e=s(a.stroke)?a.stroke:null;this.i=s(a.offsetX)?a.offsetX:0;this.l=s(a.offsetY)?a.offsetY:0}l=Uv.prototype;l.Kf=k("a");l.Kh=k("c");l.Lh=k("b");l.Mh=k("d");l.Nh=k("e");l.Oh=k("f");l.Vf=k("h");l.Wf=k("g");t("ol.Attribution",Rb);t("ol.BrowserFeature.DEVICE_PIXEL_RATIO",Ad);t("ol.BrowserFeature.HAS_CANVAS",Dd);t("ol.BrowserFeature.HAS_DEVICE_ORIENTATION",Ed);t("ol.BrowserFeature.HAS_GEOLOCATION",Fd);t("ol.BrowserFeature.HAS_TOUCH",Hd);t("ol.BrowserFeature.HAS_WEBGL",Kd);t("ol.Collection",D);D.prototype.bindTo=D.prototype.da;D.prototype.clear=D.prototype.clear;D.prototype.clear=D.prototype.clear;D.prototype.dispatchChangeEvent=D.prototype.k;D.prototype.extend=D.prototype.Ee;D.prototype.extend=D.prototype.Ee;
D.prototype.forEach=D.prototype.forEach;D.prototype.forEach=D.prototype.forEach;D.prototype.get=D.prototype.get;D.prototype.getArray=D.prototype.Fe;D.prototype.getArray=D.prototype.Fe;D.prototype.getAt=D.prototype.wd;D.prototype.getAt=D.prototype.wd;D.prototype.getKeys=D.prototype.S;D.prototype.getLength=D.prototype.qb;D.prototype.getLength=D.prototype.qb;D.prototype.getProperties=D.prototype.W;D.prototype.insertAt=D.prototype.yc;D.prototype.insertAt=D.prototype.yc;D.prototype.notify=D.prototype.aa;
D.prototype.on=D.prototype.p;D.prototype.once=D.prototype.q;D.prototype.pop=D.prototype.pop;D.prototype.pop=D.prototype.pop;D.prototype.push=D.prototype.push;D.prototype.push=D.prototype.push;D.prototype.remove=D.prototype.remove;D.prototype.remove=D.prototype.remove;D.prototype.removeAt=D.prototype.Cc;D.prototype.removeAt=D.prototype.Cc;D.prototype.set=D.prototype.A;D.prototype.setAt=D.prototype.hf;D.prototype.setAt=D.prototype.hf;D.prototype.setValues=D.prototype.Q;D.prototype.un=D.prototype.r;
D.prototype.unByKey=D.prototype.s;D.prototype.unbind=D.prototype.ba;D.prototype.unbindAll=D.prototype.fa;Te.prototype.element=Te.prototype.element;Te.prototype.element=Te.prototype.element;t("ol.DeviceOrientation",F);F.prototype.bindTo=F.prototype.da;F.prototype.dispatchChangeEvent=F.prototype.k;F.prototype.get=F.prototype.get;F.prototype.getAlpha=F.prototype.e;F.prototype.getAlpha=F.prototype.e;F.prototype.getBeta=F.prototype.f;F.prototype.getBeta=F.prototype.f;F.prototype.getGamma=F.prototype.h;
F.prototype.getGamma=F.prototype.h;F.prototype.getHeading=F.prototype.g;F.prototype.getHeading=F.prototype.g;F.prototype.getKeys=F.prototype.S;F.prototype.getProperties=F.prototype.W;F.prototype.getTracking=F.prototype.d;F.prototype.getTracking=F.prototype.d;F.prototype.notify=F.prototype.aa;F.prototype.on=F.prototype.p;F.prototype.once=F.prototype.q;F.prototype.set=F.prototype.A;F.prototype.setTracking=F.prototype.b;F.prototype.setTracking=F.prototype.b;F.prototype.setValues=F.prototype.Q;
F.prototype.un=F.prototype.r;F.prototype.unByKey=F.prototype.s;F.prototype.unbind=F.prototype.ba;F.prototype.unbindAll=F.prototype.fa;xi.prototype.coordinate=xi.prototype.coordinate;Sn.prototype.feature=Sn.prototype.feature;t("ol.Feature",I);I.prototype.bindTo=I.prototype.da;I.prototype.dispatchChangeEvent=I.prototype.k;I.prototype.get=I.prototype.get;I.prototype.getGeometry=I.prototype.L;I.prototype.getGeometry=I.prototype.L;I.prototype.getGeometryName=I.prototype.oe;
I.prototype.getGeometryName=I.prototype.oe;I.prototype.getId=I.prototype.pe;I.prototype.getId=I.prototype.pe;I.prototype.getKeys=I.prototype.S;I.prototype.getProperties=I.prototype.W;I.prototype.getStyle=I.prototype.Je;I.prototype.getStyle=I.prototype.Je;I.prototype.getStyleFunction=I.prototype.Ke;I.prototype.getStyleFunction=I.prototype.Ke;I.prototype.notify=I.prototype.aa;I.prototype.on=I.prototype.p;I.prototype.once=I.prototype.q;I.prototype.set=I.prototype.A;I.prototype.setGeometry=I.prototype.Wa;
I.prototype.setGeometry=I.prototype.Wa;I.prototype.setGeometryName=I.prototype.d;I.prototype.setGeometryName=I.prototype.d;I.prototype.setId=I.prototype.b;I.prototype.setId=I.prototype.b;I.prototype.setStyle=I.prototype.h;I.prototype.setStyle=I.prototype.h;I.prototype.setValues=I.prototype.Q;I.prototype.un=I.prototype.r;I.prototype.unByKey=I.prototype.s;I.prototype.unbind=I.prototype.ba;I.prototype.unbindAll=I.prototype.fa;t("ol.FeatureOverlay",Ri);Ri.prototype.addFeature=Ri.prototype.Ge;
Ri.prototype.getFeatures=Ri.prototype.Vg;Ri.prototype.getStyle=Ri.prototype.Wg;Ri.prototype.getStyleFunction=Ri.prototype.Xg;Ri.prototype.removeFeature=Ri.prototype.cd;Ri.prototype.setFeatures=Ri.prototype.Dc;Ri.prototype.setMap=Ri.prototype.setMap;Ri.prototype.setStyle=Ri.prototype.Zg;t("ol.Geolocation",P);P.prototype.bindTo=P.prototype.da;P.prototype.dispatchChangeEvent=P.prototype.k;P.prototype.get=P.prototype.get;P.prototype.getAccuracy=P.prototype.vd;P.prototype.getAccuracy=P.prototype.vd;
P.prototype.getAccuracyGeometry=P.prototype.n;P.prototype.getAccuracyGeometry=P.prototype.n;P.prototype.getAltitude=P.prototype.o;P.prototype.getAltitude=P.prototype.o;P.prototype.getAltitudeAccuracy=P.prototype.w;P.prototype.getAltitudeAccuracy=P.prototype.w;P.prototype.getHeading=P.prototype.B;P.prototype.getHeading=P.prototype.B;P.prototype.getKeys=P.prototype.S;P.prototype.getPosition=P.prototype.C;P.prototype.getPosition=P.prototype.C;P.prototype.getProjection=P.prototype.h;
P.prototype.getProjection=P.prototype.h;P.prototype.getProperties=P.prototype.W;P.prototype.getSpeed=P.prototype.u;P.prototype.getSpeed=P.prototype.u;P.prototype.getTracking=P.prototype.g;P.prototype.getTracking=P.prototype.g;P.prototype.getTrackingOptions=P.prototype.e;P.prototype.getTrackingOptions=P.prototype.e;P.prototype.notify=P.prototype.aa;P.prototype.on=P.prototype.p;P.prototype.once=P.prototype.q;P.prototype.set=P.prototype.A;P.prototype.setProjection=P.prototype.i;
P.prototype.setProjection=P.prototype.i;P.prototype.setTracking=P.prototype.b;P.prototype.setTracking=P.prototype.b;P.prototype.setTrackingOptions=P.prototype.l;P.prototype.setTrackingOptions=P.prototype.l;P.prototype.setValues=P.prototype.Q;P.prototype.un=P.prototype.r;P.prototype.unByKey=P.prototype.s;P.prototype.unbind=P.prototype.ba;P.prototype.unbindAll=P.prototype.fa;eo.prototype.getImage=eo.prototype.b;eo.prototype.getTileCoord=eo.prototype.g;t("ol.Kinetic",gk);t("ol.Map",O);
O.prototype.addControl=O.prototype.ae;O.prototype.addControl=O.prototype.ae;O.prototype.addInteraction=O.prototype.be;O.prototype.addInteraction=O.prototype.be;O.prototype.addLayer=O.prototype.ce;O.prototype.addLayer=O.prototype.ce;O.prototype.addOverlay=O.prototype.de;O.prototype.addOverlay=O.prototype.de;O.prototype.beforeRender=O.prototype.na;O.prototype.beforeRender=O.prototype.na;O.prototype.bindTo=O.prototype.da;O.prototype.dispatchChangeEvent=O.prototype.k;
O.prototype.forEachFeatureAtPixel=O.prototype.dd;O.prototype.forEachFeatureAtPixel=O.prototype.dd;O.prototype.get=O.prototype.get;O.prototype.getControls=O.prototype.ne;O.prototype.getControls=O.prototype.ne;O.prototype.getCoordinateFromPixel=O.prototype.pa;O.prototype.getCoordinateFromPixel=O.prototype.pa;O.prototype.getEventCoordinate=O.prototype.yd;O.prototype.getEventCoordinate=O.prototype.yd;O.prototype.getEventPixel=O.prototype.Qc;O.prototype.getEventPixel=O.prototype.Qc;
O.prototype.getInteractions=O.prototype.qe;O.prototype.getInteractions=O.prototype.qe;O.prototype.getKeys=O.prototype.S;O.prototype.getLayerGroup=O.prototype.bb;O.prototype.getLayerGroup=O.prototype.bb;O.prototype.getLayers=O.prototype.Ya;O.prototype.getLayers=O.prototype.Ya;O.prototype.getOverlays=O.prototype.se;O.prototype.getOverlays=O.prototype.se;O.prototype.getPixelFromCoordinate=O.prototype.f;O.prototype.getPixelFromCoordinate=O.prototype.f;O.prototype.getProperties=O.prototype.W;
O.prototype.getSize=O.prototype.e;O.prototype.getSize=O.prototype.e;O.prototype.getTarget=O.prototype.Vb;O.prototype.getTarget=O.prototype.Vb;O.prototype.getView=O.prototype.a;O.prototype.getView=O.prototype.a;O.prototype.getViewport=O.prototype.ve;O.prototype.getViewport=O.prototype.ve;O.prototype.notify=O.prototype.aa;O.prototype.on=O.prototype.p;O.prototype.once=O.prototype.q;O.prototype.removeControl=O.prototype.$e;O.prototype.removeControl=O.prototype.$e;O.prototype.removeInteraction=O.prototype.af;
O.prototype.removeInteraction=O.prototype.af;O.prototype.removeLayer=O.prototype.bf;O.prototype.removeLayer=O.prototype.bf;O.prototype.removeOverlay=O.prototype.cf;O.prototype.removeOverlay=O.prototype.cf;O.prototype.render=O.prototype.N;O.prototype.render=O.prototype.N;O.prototype.renderSync=O.prototype.df;O.prototype.renderSync=O.prototype.df;O.prototype.set=O.prototype.A;O.prototype.setLayerGroup=O.prototype.Td;O.prototype.setLayerGroup=O.prototype.Td;O.prototype.setSize=O.prototype.n;
O.prototype.setSize=O.prototype.n;O.prototype.setTarget=O.prototype.ga;O.prototype.setTarget=O.prototype.ga;O.prototype.setValues=O.prototype.Q;O.prototype.setView=O.prototype.La;O.prototype.setView=O.prototype.La;O.prototype.un=O.prototype.r;O.prototype.unByKey=O.prototype.s;O.prototype.unbind=O.prototype.ba;O.prototype.unbindAll=O.prototype.fa;O.prototype.updateSize=O.prototype.o;O.prototype.updateSize=O.prototype.o;Nf.prototype.coordinate=Nf.prototype.coordinate;Nf.prototype.originalEvent=Nf.prototype.originalEvent;
Nf.prototype.pixel=Nf.prototype.pixel;Nf.prototype.preventDefault=Nf.prototype.preventDefault;Nf.prototype.stopPropagation=Nf.prototype.Sa;Of.prototype.coordinate=Of.prototype.coordinate;Of.prototype.originalEvent=Of.prototype.originalEvent;Of.prototype.pixel=Of.prototype.pixel;Of.prototype.preventDefault=Of.prototype.preventDefault;Of.prototype.stopPropagation=Of.prototype.Sa;t("ol.Object",Me);Me.prototype.bindTo=Me.prototype.da;Me.prototype.dispatchChangeEvent=Me.prototype.k;Me.prototype.get=Me.prototype.get;
Me.prototype.getKeys=Me.prototype.S;Me.prototype.getProperties=Me.prototype.W;Me.prototype.notify=Me.prototype.aa;Me.prototype.on=Me.prototype.p;Me.prototype.once=Me.prototype.q;Me.prototype.set=Me.prototype.A;Me.prototype.setValues=Me.prototype.Q;Me.prototype.un=Me.prototype.r;Me.prototype.unByKey=Me.prototype.s;Me.prototype.unbind=Me.prototype.ba;Me.prototype.unbindAll=Me.prototype.fa;Ke.prototype.key=Ke.prototype.key;t("ol.Observable",Je);Je.prototype.dispatchChangeEvent=Je.prototype.k;
Je.prototype.on=Je.prototype.p;Je.prototype.once=Je.prototype.q;Je.prototype.un=Je.prototype.r;Je.prototype.unByKey=Je.prototype.s;t("ol.Overlay",S);S.prototype.bindTo=S.prototype.da;S.prototype.dispatchChangeEvent=S.prototype.k;S.prototype.get=S.prototype.get;S.prototype.getElement=S.prototype.h;S.prototype.getElement=S.prototype.h;S.prototype.getKeys=S.prototype.S;S.prototype.getMap=S.prototype.d;S.prototype.getMap=S.prototype.d;S.prototype.getPosition=S.prototype.g;S.prototype.getPosition=S.prototype.g;
S.prototype.getPositioning=S.prototype.e;S.prototype.getPositioning=S.prototype.e;S.prototype.getProperties=S.prototype.W;S.prototype.notify=S.prototype.aa;S.prototype.on=S.prototype.p;S.prototype.once=S.prototype.q;S.prototype.set=S.prototype.A;S.prototype.setElement=S.prototype.jd;S.prototype.setElement=S.prototype.jd;S.prototype.setMap=S.prototype.setMap;S.prototype.setMap=S.prototype.setMap;S.prototype.setPosition=S.prototype.i;S.prototype.setPosition=S.prototype.i;
S.prototype.setPositioning=S.prototype.l;S.prototype.setPositioning=S.prototype.l;S.prototype.setValues=S.prototype.Q;S.prototype.un=S.prototype.r;S.prototype.unByKey=S.prototype.s;S.prototype.unbind=S.prototype.ba;S.prototype.unbindAll=S.prototype.fa;Tj.prototype.getTileCoord=Tj.prototype.g;Lb.prototype.getZXY=Lb.prototype.c;rg.prototype.dispatchChangeEvent=rg.prototype.k;rg.prototype.on=rg.prototype.p;rg.prototype.once=rg.prototype.q;rg.prototype.un=rg.prototype.r;rg.prototype.unByKey=rg.prototype.s;
t("ol.View2D",G);G.prototype.calculateExtent=G.prototype.C;G.prototype.centerOn=G.prototype.Df;G.prototype.constrainCenter=G.prototype.g;G.prototype.constrainResolution=G.prototype.constrainResolution;G.prototype.constrainRotation=G.prototype.constrainRotation;G.prototype.dispatchChangeEvent=G.prototype.k;G.prototype.fitExtent=G.prototype.me;G.prototype.fitGeometry=G.prototype.If;G.prototype.getCenter=G.prototype.a;G.prototype.getProjection=G.prototype.h;G.prototype.getResolution=G.prototype.b;
G.prototype.getResolutionForExtent=G.prototype.i;G.prototype.getRotation=G.prototype.e;G.prototype.getView2D=G.prototype.T;G.prototype.getZoom=G.prototype.$f;G.prototype.on=G.prototype.p;G.prototype.once=G.prototype.q;G.prototype.rotate=G.prototype.rotate;G.prototype.setCenter=G.prototype.Da;G.prototype.setProjection=G.prototype.B;G.prototype.setResolution=G.prototype.d;G.prototype.setRotation=G.prototype.n;G.prototype.setZoom=G.prototype.J;G.prototype.un=G.prototype.r;G.prototype.unByKey=G.prototype.s;
t("ol.animation.bounce",function(a){var b=a.resolution,c=s(a.start)?a.start:za(),d=s(a.duration)?a.duration:1E3,e=s(a.easing)?a.easing:zh;return function(a,g){if(g.time<c)return g.ya=!0,g.U[0]+=1,!0;if(g.time<c+d){var h=e((g.time-c)/d),m=b-g.view2DState.resolution;g.ya=!0;g.view2DState.resolution+=h*m;g.U[0]+=1;return!0}return!1}});t("ol.animation.pan",Ah);t("ol.animation.rotate",Bh);t("ol.animation.zoom",Ch);t("ol.color.asArray",function(a){return la(a)?a:Ei(a)});t("ol.color.asString",Ci);
t("ol.control.Attribution",bk);bk.prototype.bindTo=bk.prototype.da;bk.prototype.dispatchChangeEvent=bk.prototype.k;bk.prototype.get=bk.prototype.get;bk.prototype.getKeys=bk.prototype.S;bk.prototype.getMap=bk.prototype.a;bk.prototype.getMap=bk.prototype.a;bk.prototype.getProperties=bk.prototype.W;bk.prototype.notify=bk.prototype.aa;bk.prototype.on=bk.prototype.p;bk.prototype.once=bk.prototype.q;bk.prototype.set=bk.prototype.A;bk.prototype.setMap=bk.prototype.setMap;bk.prototype.setMap=bk.prototype.setMap;
bk.prototype.setValues=bk.prototype.Q;bk.prototype.un=bk.prototype.r;bk.prototype.unByKey=bk.prototype.s;bk.prototype.unbind=bk.prototype.ba;bk.prototype.unbindAll=bk.prototype.fa;t("ol.control.Control",J);J.prototype.bindTo=J.prototype.da;J.prototype.dispatchChangeEvent=J.prototype.k;J.prototype.get=J.prototype.get;J.prototype.getKeys=J.prototype.S;J.prototype.getMap=J.prototype.a;J.prototype.getMap=J.prototype.a;J.prototype.getProperties=J.prototype.W;J.prototype.notify=J.prototype.aa;
J.prototype.on=J.prototype.p;J.prototype.once=J.prototype.q;J.prototype.set=J.prototype.A;J.prototype.setMap=J.prototype.setMap;J.prototype.setMap=J.prototype.setMap;J.prototype.setValues=J.prototype.Q;J.prototype.un=J.prototype.r;J.prototype.unByKey=J.prototype.s;J.prototype.unbind=J.prototype.ba;J.prototype.unbindAll=J.prototype.fa;t("ol.control.FullScreen",ko);ko.prototype.bindTo=ko.prototype.da;ko.prototype.dispatchChangeEvent=ko.prototype.k;ko.prototype.get=ko.prototype.get;
ko.prototype.getKeys=ko.prototype.S;ko.prototype.getMap=ko.prototype.a;ko.prototype.getMap=ko.prototype.a;ko.prototype.getProperties=ko.prototype.W;ko.prototype.notify=ko.prototype.aa;ko.prototype.on=ko.prototype.p;ko.prototype.once=ko.prototype.q;ko.prototype.set=ko.prototype.A;ko.prototype.setMap=ko.prototype.setMap;ko.prototype.setMap=ko.prototype.setMap;ko.prototype.setValues=ko.prototype.Q;ko.prototype.un=ko.prototype.r;ko.prototype.unByKey=ko.prototype.s;ko.prototype.unbind=ko.prototype.ba;
ko.prototype.unbindAll=ko.prototype.fa;t("ol.control.Logo",ck);ck.prototype.bindTo=ck.prototype.da;ck.prototype.dispatchChangeEvent=ck.prototype.k;ck.prototype.get=ck.prototype.get;ck.prototype.getKeys=ck.prototype.S;ck.prototype.getMap=ck.prototype.a;ck.prototype.getMap=ck.prototype.a;ck.prototype.getProperties=ck.prototype.W;ck.prototype.notify=ck.prototype.aa;ck.prototype.on=ck.prototype.p;ck.prototype.once=ck.prototype.q;ck.prototype.set=ck.prototype.A;ck.prototype.setMap=ck.prototype.setMap;
ck.prototype.setMap=ck.prototype.setMap;ck.prototype.setValues=ck.prototype.Q;ck.prototype.un=ck.prototype.r;ck.prototype.unByKey=ck.prototype.s;ck.prototype.unbind=ck.prototype.ba;ck.prototype.unbindAll=ck.prototype.fa;t("ol.control.MousePosition",T);T.prototype.bindTo=T.prototype.da;T.prototype.dispatchChangeEvent=T.prototype.k;T.prototype.get=T.prototype.get;T.prototype.getCoordinateFormat=T.prototype.g;T.prototype.getCoordinateFormat=T.prototype.g;T.prototype.getKeys=T.prototype.S;
T.prototype.getMap=T.prototype.a;T.prototype.getMap=T.prototype.a;T.prototype.getProjection=T.prototype.l;T.prototype.getProjection=T.prototype.l;T.prototype.getProperties=T.prototype.W;T.prototype.notify=T.prototype.aa;T.prototype.on=T.prototype.p;T.prototype.once=T.prototype.q;T.prototype.set=T.prototype.A;T.prototype.setCoordinateFormat=T.prototype.o;T.prototype.setCoordinateFormat=T.prototype.o;T.prototype.setMap=T.prototype.setMap;T.prototype.setMap=T.prototype.setMap;
T.prototype.setProjection=T.prototype.n;T.prototype.setProjection=T.prototype.n;T.prototype.setValues=T.prototype.Q;T.prototype.un=T.prototype.r;T.prototype.unByKey=T.prototype.s;T.prototype.unbind=T.prototype.ba;T.prototype.unbindAll=T.prototype.fa;t("ol.control.Rotate",dk);dk.prototype.bindTo=dk.prototype.da;dk.prototype.dispatchChangeEvent=dk.prototype.k;dk.prototype.get=dk.prototype.get;dk.prototype.getKeys=dk.prototype.S;dk.prototype.getMap=dk.prototype.a;dk.prototype.getMap=dk.prototype.a;
dk.prototype.getProperties=dk.prototype.W;dk.prototype.notify=dk.prototype.aa;dk.prototype.on=dk.prototype.p;dk.prototype.once=dk.prototype.q;dk.prototype.set=dk.prototype.A;dk.prototype.setMap=dk.prototype.setMap;dk.prototype.setMap=dk.prototype.setMap;dk.prototype.setValues=dk.prototype.Q;dk.prototype.un=dk.prototype.r;dk.prototype.unByKey=dk.prototype.s;dk.prototype.unbind=dk.prototype.ba;dk.prototype.unbindAll=dk.prototype.fa;t("ol.control.ScaleLine",mo);mo.prototype.bindTo=mo.prototype.da;
mo.prototype.dispatchChangeEvent=mo.prototype.k;mo.prototype.get=mo.prototype.get;mo.prototype.getKeys=mo.prototype.S;mo.prototype.getMap=mo.prototype.a;mo.prototype.getMap=mo.prototype.a;mo.prototype.getProperties=mo.prototype.W;mo.prototype.getUnits=mo.prototype.g;mo.prototype.getUnits=mo.prototype.g;mo.prototype.notify=mo.prototype.aa;mo.prototype.on=mo.prototype.p;mo.prototype.once=mo.prototype.q;mo.prototype.set=mo.prototype.A;mo.prototype.setMap=mo.prototype.setMap;mo.prototype.setMap=mo.prototype.setMap;
mo.prototype.setUnits=mo.prototype.i;mo.prototype.setUnits=mo.prototype.i;mo.prototype.setValues=mo.prototype.Q;mo.prototype.un=mo.prototype.r;mo.prototype.unByKey=mo.prototype.s;mo.prototype.unbind=mo.prototype.ba;mo.prototype.unbindAll=mo.prototype.fa;t("ol.control.Zoom",ek);ek.prototype.bindTo=ek.prototype.da;ek.prototype.dispatchChangeEvent=ek.prototype.k;ek.prototype.get=ek.prototype.get;ek.prototype.getKeys=ek.prototype.S;ek.prototype.getMap=ek.prototype.a;ek.prototype.getMap=ek.prototype.a;
ek.prototype.getProperties=ek.prototype.W;ek.prototype.notify=ek.prototype.aa;ek.prototype.on=ek.prototype.p;ek.prototype.once=ek.prototype.q;ek.prototype.set=ek.prototype.A;ek.prototype.setMap=ek.prototype.setMap;ek.prototype.setMap=ek.prototype.setMap;ek.prototype.setValues=ek.prototype.Q;ek.prototype.un=ek.prototype.r;ek.prototype.unByKey=ek.prototype.s;ek.prototype.unbind=ek.prototype.ba;ek.prototype.unbindAll=ek.prototype.fa;t("ol.control.ZoomSlider",Bo);Bo.prototype.bindTo=Bo.prototype.da;
Bo.prototype.dispatchChangeEvent=Bo.prototype.k;Bo.prototype.get=Bo.prototype.get;Bo.prototype.getKeys=Bo.prototype.S;Bo.prototype.getMap=Bo.prototype.a;Bo.prototype.getMap=Bo.prototype.a;Bo.prototype.getProperties=Bo.prototype.W;Bo.prototype.notify=Bo.prototype.aa;Bo.prototype.on=Bo.prototype.p;Bo.prototype.once=Bo.prototype.q;Bo.prototype.set=Bo.prototype.A;Bo.prototype.setValues=Bo.prototype.Q;Bo.prototype.un=Bo.prototype.r;Bo.prototype.unByKey=Bo.prototype.s;Bo.prototype.unbind=Bo.prototype.ba;
Bo.prototype.unbindAll=Bo.prototype.fa;t("ol.control.ZoomToExtent",Fo);Fo.prototype.bindTo=Fo.prototype.da;Fo.prototype.dispatchChangeEvent=Fo.prototype.k;Fo.prototype.get=Fo.prototype.get;Fo.prototype.getKeys=Fo.prototype.S;Fo.prototype.getMap=Fo.prototype.a;Fo.prototype.getMap=Fo.prototype.a;Fo.prototype.getProperties=Fo.prototype.W;Fo.prototype.notify=Fo.prototype.aa;Fo.prototype.on=Fo.prototype.p;Fo.prototype.once=Fo.prototype.q;Fo.prototype.set=Fo.prototype.A;Fo.prototype.setMap=Fo.prototype.setMap;
Fo.prototype.setMap=Fo.prototype.setMap;Fo.prototype.setValues=Fo.prototype.Q;Fo.prototype.un=Fo.prototype.r;Fo.prototype.unByKey=Fo.prototype.s;Fo.prototype.unbind=Fo.prototype.ba;Fo.prototype.unbindAll=Fo.prototype.fa;t("ol.control.defaults",fk);t("ol.coordinate.add",Ve);t("ol.coordinate.createStringXY",function(a){return function(b){return cf(b,a)}});t("ol.coordinate.format",Ye);t("ol.coordinate.fromProjectedArray",function(a,b){var c=b.charAt(0);return"n"===c||"s"===c?[a[1],a[0]]:a});
t("ol.coordinate.rotate",af);t("ol.coordinate.toStringHDMS",function(a){return s(a)?Xe(a[1],"NS")+" "+Xe(a[0],"EW"):""});t("ol.coordinate.toStringXY",cf);t("ol.dom.Input",U);U.prototype.bindTo=U.prototype.da;U.prototype.dispatchChangeEvent=U.prototype.k;U.prototype.get=U.prototype.get;U.prototype.getChecked=U.prototype.a;U.prototype.getChecked=U.prototype.a;U.prototype.getKeys=U.prototype.S;U.prototype.getProperties=U.prototype.W;U.prototype.getValue=U.prototype.b;U.prototype.getValue=U.prototype.b;
U.prototype.notify=U.prototype.aa;U.prototype.on=U.prototype.p;U.prototype.once=U.prototype.q;U.prototype.set=U.prototype.A;U.prototype.setChecked=U.prototype.e;U.prototype.setChecked=U.prototype.e;U.prototype.setValue=U.prototype.f;U.prototype.setValue=U.prototype.f;U.prototype.setValues=U.prototype.Q;U.prototype.un=U.prototype.r;U.prototype.unByKey=U.prototype.s;U.prototype.unbind=U.prototype.ba;U.prototype.unbindAll=U.prototype.fa;
t("ol.easing.bounce",function(a){a<1/2.75?a*=7.5625*a:a<2/2.75?(a-=1.5/2.75,a=7.5625*a*a+0.75):a<2.5/2.75?(a-=2.25/2.75,a=7.5625*a*a+0.9375):(a-=2.625/2.75,a=7.5625*a*a+0.984375);return a});t("ol.easing.easeIn",function(a){return a*a*a});t("ol.easing.easeOut",wh);t("ol.easing.elastic",function(a){return Math.pow(2,-10*a)*Math.sin((a-0.075)*2*Math.PI/0.3)+1});t("ol.easing.inAndOut",xh);t("ol.easing.linear",yh);t("ol.easing.upAndDown",zh);
t("ol.events.condition.altKeyOnly",function(a){a=a.a;return a.ra&&!a.Zb&&!a.fb});t("ol.events.condition.altShiftKeysOnly",ag);t("ol.events.condition.always",Ae);t("ol.events.condition.never",ze);t("ol.events.condition.noModifierKeys",cg);t("ol.events.condition.platformModifierKeyOnly",function(a){a=a.a;return!a.ra&&a.Zb&&!a.fb});t("ol.events.condition.shiftKeyOnly",dg);t("ol.events.condition.targetNotEditable",eg);t("ol.extent.applyTransform",Rg);t("ol.extent.boundingExtent",tg);
t("ol.extent.buffer",xg);t("ol.extent.containsCoordinate",function(a,b){return a[0]<=b[0]&&b[0]<=a[2]&&a[1]<=b[1]&&b[1]<=a[3]});t("ol.extent.containsExtent",Ag);t("ol.extent.createEmpty",ug);t("ol.extent.equals",Cg);t("ol.extent.extend",Dg);t("ol.extent.getBottomLeft",Fg);t("ol.extent.getBottomRight",function(a){return[a[2],a[1]]});t("ol.extent.getCenter",Gg);t("ol.extent.getHeight",Ig);t("ol.extent.getSize",function(a){return[a[2]-a[0],a[3]-a[1]]});t("ol.extent.getTopLeft",Jg);
t("ol.extent.getTopRight",function(a){return[a[2],a[3]]});t("ol.extent.getWidth",Kg);t("ol.extent.intersects",Lg);t("ol.extent.isEmpty",Mg);t("ol.format.GML",Hp);Hp.prototype.readFeatures=Hp.prototype.ta;Hp.prototype.writeFeatures=Hp.prototype.Hc;t("ol.format.GPX",Kq);Kq.prototype.readFeature=Kq.prototype.ac;Kq.prototype.readFeatures=Kq.prototype.ta;Kq.prototype.readProjection=Kq.prototype.ma;Kq.prototype.writeFeatures=Kq.prototype.Hc;t("ol.format.GeoJSON",rr);rr.prototype.readFeature=rr.prototype.ac;
rr.prototype.readFeatures=rr.prototype.ta;rr.prototype.readGeometry=rr.prototype.Qd;rr.prototype.readProjection=rr.prototype.ma;rr.prototype.writeFeature=rr.prototype.$d;rr.prototype.writeFeatures=rr.prototype.Hc;t("ol.format.IGC",Ar);Ar.prototype.readFeature=Ar.prototype.ac;Ar.prototype.readFeatures=Ar.prototype.ta;Ar.prototype.readProjection=Ar.prototype.ma;t("ol.format.KML",Er);Er.prototype.readFeature=Er.prototype.ac;Er.prototype.readFeatures=Er.prototype.ta;Er.prototype.readProjection=Er.prototype.ma;
t("ol.format.OSMXML",vs);vs.prototype.readFeatures=vs.prototype.ta;vs.prototype.readProjection=vs.prototype.ma;t("ol.format.TopoJSON",Bs);Bs.prototype.readFeatures=Bs.prototype.ta;Bs.prototype.readProjection=Bs.prototype.ma;t("ol.format.WFS",Hs);Hs.prototype.readFeatureCollectionMetadata=Hs.prototype.d;Hs.prototype.readFeatures=Hs.prototype.ta;Hs.prototype.readProjection=Hs.prototype.ma;Hs.prototype.readTransactionResponse=Hs.prototype.e;Hs.prototype.writeGetFeature=Hs.prototype.f;
Hs.prototype.writeTransaction=Hs.prototype.g;t("ol.format.WMSCapabilities",Ys);Ys.prototype.read=Ys.prototype.a;t("ol.geom.Circle",bm);bm.prototype.clone=bm.prototype.P;bm.prototype.dispatchChangeEvent=bm.prototype.k;bm.prototype.getCenter=bm.prototype.Jd;bm.prototype.getClosestPoint=bm.prototype.e;bm.prototype.getExtent=bm.prototype.v;bm.prototype.getFirstCoordinate=bm.prototype.$a;bm.prototype.getLastCoordinate=bm.prototype.ab;bm.prototype.getLayout=bm.prototype.cb;bm.prototype.getRadius=bm.prototype.Me;
bm.prototype.getSimplifiedGeometry=bm.prototype.ia;bm.prototype.getType=bm.prototype.G;bm.prototype.on=bm.prototype.p;bm.prototype.once=bm.prototype.q;bm.prototype.setCenter=bm.prototype.eh;bm.prototype.setCenterAndRadius=bm.prototype.jf;bm.prototype.setRadius=bm.prototype.mi;bm.prototype.transform=bm.prototype.transform;bm.prototype.un=bm.prototype.r;bm.prototype.unByKey=bm.prototype.s;t("ol.geom.Geometry",Jh);Jh.prototype.applyTransform=Jh.prototype.xb;Jh.prototype.dispatchChangeEvent=Jh.prototype.k;
Jh.prototype.getClosestPoint=Jh.prototype.e;Jh.prototype.getExtent=Jh.prototype.v;Jh.prototype.on=Jh.prototype.p;Jh.prototype.once=Jh.prototype.q;Jh.prototype.transform=Jh.prototype.transform;Jh.prototype.un=Jh.prototype.r;Jh.prototype.unByKey=Jh.prototype.s;t("ol.geom.GeometryCollection",dm);dm.prototype.clone=dm.prototype.P;dm.prototype.dispatchChangeEvent=dm.prototype.k;dm.prototype.getClosestPoint=dm.prototype.e;dm.prototype.getExtent=dm.prototype.v;dm.prototype.getGeometries=dm.prototype.Lf;
dm.prototype.getSimplifiedGeometry=dm.prototype.ia;dm.prototype.getType=dm.prototype.G;dm.prototype.on=dm.prototype.p;dm.prototype.once=dm.prototype.q;dm.prototype.setGeometries=dm.prototype.kf;dm.prototype.transform=dm.prototype.transform;dm.prototype.un=dm.prototype.r;dm.prototype.unByKey=dm.prototype.s;t("ol.geom.LineString",km);km.prototype.appendCoordinate=km.prototype.wf;km.prototype.clone=km.prototype.P;km.prototype.dispatchChangeEvent=km.prototype.k;km.prototype.getClosestPoint=km.prototype.e;
km.prototype.getCoordinateAtM=km.prototype.fh;km.prototype.getCoordinates=km.prototype.D;km.prototype.getExtent=km.prototype.v;km.prototype.getFirstCoordinate=km.prototype.$a;km.prototype.getLastCoordinate=km.prototype.ab;km.prototype.getLayout=km.prototype.cb;km.prototype.getLength=km.prototype.gh;km.prototype.getSimplifiedGeometry=km.prototype.ia;km.prototype.getType=km.prototype.G;km.prototype.on=km.prototype.p;km.prototype.once=km.prototype.q;km.prototype.setCoordinates=km.prototype.O;
km.prototype.transform=km.prototype.transform;km.prototype.un=km.prototype.r;km.prototype.unByKey=km.prototype.s;t("ol.geom.LinearRing",fi);fi.prototype.clone=fi.prototype.P;fi.prototype.dispatchChangeEvent=fi.prototype.k;fi.prototype.getArea=fi.prototype.hh;fi.prototype.getClosestPoint=fi.prototype.e;fi.prototype.getCoordinates=fi.prototype.D;fi.prototype.getExtent=fi.prototype.v;fi.prototype.getFirstCoordinate=fi.prototype.$a;fi.prototype.getLastCoordinate=fi.prototype.ab;
fi.prototype.getLayout=fi.prototype.cb;fi.prototype.getSimplifiedGeometry=fi.prototype.ia;fi.prototype.getType=fi.prototype.G;fi.prototype.on=fi.prototype.p;fi.prototype.once=fi.prototype.q;fi.prototype.setCoordinates=fi.prototype.O;fi.prototype.transform=fi.prototype.transform;fi.prototype.un=fi.prototype.r;fi.prototype.unByKey=fi.prototype.s;t("ol.geom.MultiLineString",mm);mm.prototype.appendLineString=mm.prototype.xf;mm.prototype.clone=mm.prototype.P;mm.prototype.dispatchChangeEvent=mm.prototype.k;
mm.prototype.getClosestPoint=mm.prototype.e;mm.prototype.getCoordinateAtM=mm.prototype.ih;mm.prototype.getCoordinates=mm.prototype.D;mm.prototype.getExtent=mm.prototype.v;mm.prototype.getFirstCoordinate=mm.prototype.$a;mm.prototype.getLastCoordinate=mm.prototype.ab;mm.prototype.getLayout=mm.prototype.cb;mm.prototype.getLineString=mm.prototype.Qf;mm.prototype.getLineStrings=mm.prototype.zd;mm.prototype.getSimplifiedGeometry=mm.prototype.ia;mm.prototype.getType=mm.prototype.G;mm.prototype.on=mm.prototype.p;
mm.prototype.once=mm.prototype.q;mm.prototype.setCoordinates=mm.prototype.O;mm.prototype.transform=mm.prototype.transform;mm.prototype.un=mm.prototype.r;mm.prototype.unByKey=mm.prototype.s;t("ol.geom.MultiPoint",pm);pm.prototype.appendPoint=pm.prototype.zf;pm.prototype.clone=pm.prototype.P;pm.prototype.dispatchChangeEvent=pm.prototype.k;pm.prototype.getClosestPoint=pm.prototype.e;pm.prototype.getCoordinates=pm.prototype.D;pm.prototype.getExtent=pm.prototype.v;pm.prototype.getFirstCoordinate=pm.prototype.$a;
pm.prototype.getLastCoordinate=pm.prototype.ab;pm.prototype.getLayout=pm.prototype.cb;pm.prototype.getPoint=pm.prototype.Tf;pm.prototype.getPoints=pm.prototype.te;pm.prototype.getSimplifiedGeometry=pm.prototype.ia;pm.prototype.getType=pm.prototype.G;pm.prototype.on=pm.prototype.p;pm.prototype.once=pm.prototype.q;pm.prototype.setCoordinates=pm.prototype.O;pm.prototype.transform=pm.prototype.transform;pm.prototype.un=pm.prototype.r;pm.prototype.unByKey=pm.prototype.s;t("ol.geom.MultiPolygon",qm);
qm.prototype.appendPolygon=qm.prototype.Af;qm.prototype.clone=qm.prototype.P;qm.prototype.dispatchChangeEvent=qm.prototype.k;qm.prototype.getArea=qm.prototype.jh;qm.prototype.getClosestPoint=qm.prototype.e;qm.prototype.getCoordinates=qm.prototype.D;qm.prototype.getExtent=qm.prototype.v;qm.prototype.getFirstCoordinate=qm.prototype.$a;qm.prototype.getInteriorPoints=qm.prototype.Nf;qm.prototype.getLastCoordinate=qm.prototype.ab;qm.prototype.getLayout=qm.prototype.cb;qm.prototype.getPolygon=qm.prototype.Uf;
qm.prototype.getPolygons=qm.prototype.ue;qm.prototype.getSimplifiedGeometry=qm.prototype.ia;qm.prototype.getType=qm.prototype.G;qm.prototype.on=qm.prototype.p;qm.prototype.once=qm.prototype.q;qm.prototype.setCoordinates=qm.prototype.O;qm.prototype.transform=qm.prototype.transform;qm.prototype.un=qm.prototype.r;qm.prototype.unByKey=qm.prototype.s;t("ol.geom.Point",hi);hi.prototype.clone=hi.prototype.P;hi.prototype.dispatchChangeEvent=hi.prototype.k;hi.prototype.getClosestPoint=hi.prototype.e;
hi.prototype.getCoordinates=hi.prototype.D;hi.prototype.getFirstCoordinate=hi.prototype.$a;hi.prototype.getLastCoordinate=hi.prototype.ab;hi.prototype.getLayout=hi.prototype.cb;hi.prototype.getSimplifiedGeometry=hi.prototype.ia;hi.prototype.getType=hi.prototype.G;hi.prototype.on=hi.prototype.p;hi.prototype.once=hi.prototype.q;hi.prototype.setCoordinates=hi.prototype.O;hi.prototype.transform=hi.prototype.transform;hi.prototype.un=hi.prototype.r;hi.prototype.unByKey=hi.prototype.s;
t("ol.geom.Polygon",H);H.prototype.appendLinearRing=H.prototype.yf;H.prototype.clone=H.prototype.P;H.prototype.dispatchChangeEvent=H.prototype.k;H.prototype.getArea=H.prototype.kh;H.prototype.getClosestPoint=H.prototype.e;H.prototype.getCoordinates=H.prototype.D;H.prototype.getExtent=H.prototype.v;H.prototype.getFirstCoordinate=H.prototype.$a;H.prototype.getInteriorPoint=H.prototype.Mf;H.prototype.getLastCoordinate=H.prototype.ab;H.prototype.getLayout=H.prototype.cb;H.prototype.getLinearRing=H.prototype.Rf;
H.prototype.getLinearRings=H.prototype.re;H.prototype.getSimplifiedGeometry=H.prototype.ia;H.prototype.getType=H.prototype.G;H.prototype.on=H.prototype.p;H.prototype.once=H.prototype.q;H.prototype.setCoordinates=H.prototype.O;H.prototype.transform=H.prototype.transform;H.prototype.un=H.prototype.r;H.prototype.unByKey=H.prototype.s;t("ol.geom.Polygon.circular",si);t("ol.geom.SimpleGeometry",Lh);Lh.prototype.dispatchChangeEvent=Lh.prototype.k;Lh.prototype.getClosestPoint=Lh.prototype.e;
Lh.prototype.getExtent=Lh.prototype.v;Lh.prototype.getFirstCoordinate=Lh.prototype.$a;Lh.prototype.getLastCoordinate=Lh.prototype.ab;Lh.prototype.getLayout=Lh.prototype.cb;Lh.prototype.getSimplifiedGeometry=Lh.prototype.ia;Lh.prototype.on=Lh.prototype.p;Lh.prototype.once=Lh.prototype.q;Lh.prototype.transform=Lh.prototype.transform;Lh.prototype.un=Lh.prototype.r;Lh.prototype.unByKey=Lh.prototype.s;t("ol.inherits",u);t("ol.interaction.DoubleClickZoom",ik);ik.prototype.dispatchChangeEvent=ik.prototype.k;
ik.prototype.on=ik.prototype.p;ik.prototype.once=ik.prototype.q;ik.prototype.un=ik.prototype.r;ik.prototype.unByKey=ik.prototype.s;t("ol.interaction.DragAndDrop",Ht);Ht.prototype.dispatchChangeEvent=Ht.prototype.k;Ht.prototype.on=Ht.prototype.p;Ht.prototype.once=Ht.prototype.q;Ht.prototype.un=Ht.prototype.r;Ht.prototype.unByKey=Ht.prototype.s;It.prototype.features=It.prototype.features;It.prototype.file=It.prototype.file;It.prototype.projection=It.prototype.projection;t("ol.interaction.DragBox",yi);
yi.prototype.dispatchChangeEvent=yi.prototype.k;yi.prototype.getGeometry=yi.prototype.L;yi.prototype.on=yi.prototype.p;yi.prototype.once=yi.prototype.q;yi.prototype.un=yi.prototype.r;yi.prototype.unByKey=yi.prototype.s;t("ol.interaction.DragPan",jk);jk.prototype.dispatchChangeEvent=jk.prototype.k;jk.prototype.on=jk.prototype.p;jk.prototype.once=jk.prototype.q;jk.prototype.un=jk.prototype.r;jk.prototype.unByKey=jk.prototype.s;t("ol.interaction.DragRotate",kk);kk.prototype.dispatchChangeEvent=kk.prototype.k;
kk.prototype.on=kk.prototype.p;kk.prototype.once=kk.prototype.q;kk.prototype.un=kk.prototype.r;kk.prototype.unByKey=kk.prototype.s;t("ol.interaction.DragRotateAndZoom",Lt);Lt.prototype.dispatchChangeEvent=Lt.prototype.k;Lt.prototype.on=Lt.prototype.p;Lt.prototype.once=Lt.prototype.q;Lt.prototype.un=Lt.prototype.r;Lt.prototype.unByKey=Lt.prototype.s;t("ol.interaction.DragZoom",lk);lk.prototype.dispatchChangeEvent=lk.prototype.k;lk.prototype.getGeometry=lk.prototype.L;lk.prototype.on=lk.prototype.p;
lk.prototype.once=lk.prototype.q;lk.prototype.un=lk.prototype.r;lk.prototype.unByKey=lk.prototype.s;t("ol.interaction.Draw",Tn);Tn.prototype.dispatchChangeEvent=Tn.prototype.k;Tn.prototype.on=Tn.prototype.p;Tn.prototype.once=Tn.prototype.q;Tn.prototype.un=Tn.prototype.r;Tn.prototype.unByKey=Tn.prototype.s;Dh.prototype.dispatchChangeEvent=Dh.prototype.k;Dh.prototype.on=Dh.prototype.p;Dh.prototype.once=Dh.prototype.q;Dh.prototype.un=Dh.prototype.r;Dh.prototype.unByKey=Dh.prototype.s;
t("ol.interaction.KeyboardPan",mk);mk.prototype.dispatchChangeEvent=mk.prototype.k;mk.prototype.on=mk.prototype.p;mk.prototype.once=mk.prototype.q;mk.prototype.un=mk.prototype.r;mk.prototype.unByKey=mk.prototype.s;t("ol.interaction.KeyboardZoom",nk);nk.prototype.dispatchChangeEvent=nk.prototype.k;nk.prototype.on=nk.prototype.p;nk.prototype.once=nk.prototype.q;nk.prototype.un=nk.prototype.r;nk.prototype.unByKey=nk.prototype.s;t("ol.interaction.Modify",Mt);Mt.prototype.dispatchChangeEvent=Mt.prototype.k;
Mt.prototype.on=Mt.prototype.p;Mt.prototype.once=Mt.prototype.q;Mt.prototype.un=Mt.prototype.r;Mt.prototype.unByKey=Mt.prototype.s;t("ol.interaction.MouseWheelZoom",ok);ok.prototype.dispatchChangeEvent=ok.prototype.k;ok.prototype.on=ok.prototype.p;ok.prototype.once=ok.prototype.q;ok.prototype.un=ok.prototype.r;ok.prototype.unByKey=ok.prototype.s;t("ol.interaction.PinchRotate",pk);pk.prototype.dispatchChangeEvent=pk.prototype.k;pk.prototype.on=pk.prototype.p;pk.prototype.once=pk.prototype.q;
pk.prototype.un=pk.prototype.r;pk.prototype.unByKey=pk.prototype.s;t("ol.interaction.PinchZoom",qk);qk.prototype.dispatchChangeEvent=qk.prototype.k;qk.prototype.on=qk.prototype.p;qk.prototype.once=qk.prototype.q;qk.prototype.un=qk.prototype.r;qk.prototype.unByKey=qk.prototype.s;Hh.prototype.dispatchChangeEvent=Hh.prototype.k;Hh.prototype.on=Hh.prototype.p;Hh.prototype.once=Hh.prototype.q;Hh.prototype.un=Hh.prototype.r;Hh.prototype.unByKey=Hh.prototype.s;t("ol.interaction.Select",Rt);
Rt.prototype.dispatchChangeEvent=Rt.prototype.k;Rt.prototype.getFeatures=Rt.prototype.mh;Rt.prototype.on=Rt.prototype.p;Rt.prototype.once=Rt.prototype.q;Rt.prototype.setMap=Rt.prototype.setMap;Rt.prototype.un=Rt.prototype.r;Rt.prototype.unByKey=Rt.prototype.s;t("ol.interaction.defaults",rk);K.prototype.dispatchChangeEvent=K.prototype.k;K.prototype.getBrightness=K.prototype.d;K.prototype.getContrast=K.prototype.e;K.prototype.getHue=K.prototype.f;K.prototype.getMaxResolution=K.prototype.h;
K.prototype.getMinResolution=K.prototype.g;K.prototype.getOpacity=K.prototype.l;K.prototype.getSaturation=K.prototype.i;K.prototype.getVisible=K.prototype.b;K.prototype.on=K.prototype.p;K.prototype.once=K.prototype.q;K.prototype.setBrightness=K.prototype.n;K.prototype.setContrast=K.prototype.o;K.prototype.setHue=K.prototype.w;K.prototype.setMaxResolution=K.prototype.u;K.prototype.setMinResolution=K.prototype.B;K.prototype.setOpacity=K.prototype.C;K.prototype.setSaturation=K.prototype.J;
K.prototype.setVisible=K.prototype.R;K.prototype.un=K.prototype.r;K.prototype.unByKey=K.prototype.s;t("ol.layer.Group",vk);vk.prototype.dispatchChangeEvent=vk.prototype.k;vk.prototype.getBrightness=vk.prototype.d;vk.prototype.getContrast=vk.prototype.e;vk.prototype.getHue=vk.prototype.f;vk.prototype.getMaxResolution=vk.prototype.h;vk.prototype.getMinResolution=vk.prototype.g;vk.prototype.getOpacity=vk.prototype.l;vk.prototype.getSaturation=vk.prototype.i;vk.prototype.getVisible=vk.prototype.b;
vk.prototype.on=vk.prototype.p;vk.prototype.once=vk.prototype.q;vk.prototype.setBrightness=vk.prototype.n;vk.prototype.setContrast=vk.prototype.o;vk.prototype.setHue=vk.prototype.w;vk.prototype.setMaxResolution=vk.prototype.u;vk.prototype.setMinResolution=vk.prototype.B;vk.prototype.setOpacity=vk.prototype.C;vk.prototype.setSaturation=vk.prototype.J;vk.prototype.setVisible=vk.prototype.R;vk.prototype.un=vk.prototype.r;vk.prototype.unByKey=vk.prototype.s;t("ol.layer.Heatmap",$);
$.prototype.dispatchChangeEvent=$.prototype.k;$.prototype.getBrightness=$.prototype.d;$.prototype.getContrast=$.prototype.e;$.prototype.getHue=$.prototype.f;$.prototype.getMaxResolution=$.prototype.h;$.prototype.getMinResolution=$.prototype.g;$.prototype.getOpacity=$.prototype.l;$.prototype.getSaturation=$.prototype.i;$.prototype.getSource=$.prototype.Z;$.prototype.getStyle=$.prototype.wb;$.prototype.getStyleFunction=$.prototype.ec;$.prototype.getVisible=$.prototype.b;$.prototype.on=$.prototype.p;
$.prototype.once=$.prototype.q;$.prototype.setBrightness=$.prototype.n;$.prototype.setContrast=$.prototype.o;$.prototype.setHue=$.prototype.w;$.prototype.setMaxResolution=$.prototype.u;$.prototype.setMinResolution=$.prototype.B;$.prototype.setOpacity=$.prototype.C;$.prototype.setSaturation=$.prototype.J;$.prototype.setStyle=$.prototype.ga;$.prototype.setVisible=$.prototype.R;$.prototype.un=$.prototype.r;$.prototype.unByKey=$.prototype.s;t("ol.layer.Image",jl);jl.prototype.dispatchChangeEvent=jl.prototype.k;
jl.prototype.getBrightness=jl.prototype.d;jl.prototype.getContrast=jl.prototype.e;jl.prototype.getHue=jl.prototype.f;jl.prototype.getMaxResolution=jl.prototype.h;jl.prototype.getMinResolution=jl.prototype.g;jl.prototype.getOpacity=jl.prototype.l;jl.prototype.getSaturation=jl.prototype.i;jl.prototype.getSource=jl.prototype.Z;jl.prototype.getVisible=jl.prototype.b;jl.prototype.on=jl.prototype.p;jl.prototype.once=jl.prototype.q;jl.prototype.setBrightness=jl.prototype.n;jl.prototype.setContrast=jl.prototype.o;
jl.prototype.setHue=jl.prototype.w;jl.prototype.setMaxResolution=jl.prototype.u;jl.prototype.setMinResolution=jl.prototype.B;jl.prototype.setOpacity=jl.prototype.C;jl.prototype.setSaturation=jl.prototype.J;jl.prototype.setVisible=jl.prototype.R;jl.prototype.un=jl.prototype.r;jl.prototype.unByKey=jl.prototype.s;t("ol.layer.Layer",Dk);Dk.prototype.dispatchChangeEvent=Dk.prototype.k;Dk.prototype.getBrightness=Dk.prototype.d;Dk.prototype.getContrast=Dk.prototype.e;Dk.prototype.getHue=Dk.prototype.f;
Dk.prototype.getMaxResolution=Dk.prototype.h;Dk.prototype.getMinResolution=Dk.prototype.g;Dk.prototype.getOpacity=Dk.prototype.l;Dk.prototype.getSaturation=Dk.prototype.i;Dk.prototype.getSource=Dk.prototype.Z;Dk.prototype.getVisible=Dk.prototype.b;Dk.prototype.on=Dk.prototype.p;Dk.prototype.once=Dk.prototype.q;Dk.prototype.setBrightness=Dk.prototype.n;Dk.prototype.setContrast=Dk.prototype.o;Dk.prototype.setHue=Dk.prototype.w;Dk.prototype.setMaxResolution=Dk.prototype.u;
Dk.prototype.setMinResolution=Dk.prototype.B;Dk.prototype.setOpacity=Dk.prototype.C;Dk.prototype.setSaturation=Dk.prototype.J;Dk.prototype.setVisible=Dk.prototype.R;Dk.prototype.un=Dk.prototype.r;Dk.prototype.unByKey=Dk.prototype.s;t("ol.layer.Tile",L);L.prototype.dispatchChangeEvent=L.prototype.k;L.prototype.getBrightness=L.prototype.d;L.prototype.getContrast=L.prototype.e;L.prototype.getHue=L.prototype.f;L.prototype.getMaxResolution=L.prototype.h;L.prototype.getMinResolution=L.prototype.g;
L.prototype.getOpacity=L.prototype.l;L.prototype.getSaturation=L.prototype.i;L.prototype.getSource=L.prototype.Z;L.prototype.getVisible=L.prototype.b;L.prototype.on=L.prototype.p;L.prototype.once=L.prototype.q;L.prototype.setBrightness=L.prototype.n;L.prototype.setContrast=L.prototype.o;L.prototype.setHue=L.prototype.w;L.prototype.setMaxResolution=L.prototype.u;L.prototype.setMinResolution=L.prototype.B;L.prototype.setOpacity=L.prototype.C;L.prototype.setSaturation=L.prototype.J;
L.prototype.setVisible=L.prototype.R;L.prototype.un=L.prototype.r;L.prototype.unByKey=L.prototype.s;t("ol.layer.Vector",N);N.prototype.dispatchChangeEvent=N.prototype.k;N.prototype.getBrightness=N.prototype.d;N.prototype.getContrast=N.prototype.e;N.prototype.getHue=N.prototype.f;N.prototype.getMaxResolution=N.prototype.h;N.prototype.getMinResolution=N.prototype.g;N.prototype.getOpacity=N.prototype.l;N.prototype.getSaturation=N.prototype.i;N.prototype.getSource=N.prototype.Z;N.prototype.getStyle=N.prototype.wb;
N.prototype.getStyleFunction=N.prototype.ec;N.prototype.getVisible=N.prototype.b;N.prototype.on=N.prototype.p;N.prototype.once=N.prototype.q;N.prototype.setBrightness=N.prototype.n;N.prototype.setContrast=N.prototype.o;N.prototype.setHue=N.prototype.w;N.prototype.setMaxResolution=N.prototype.u;N.prototype.setMinResolution=N.prototype.B;N.prototype.setOpacity=N.prototype.C;N.prototype.setSaturation=N.prototype.J;N.prototype.setStyle=N.prototype.ga;N.prototype.setVisible=N.prototype.R;
N.prototype.un=N.prototype.r;N.prototype.unByKey=N.prototype.s;t("ol.loadingstrategy.all",function(){return[[-Infinity,-Infinity,Infinity,Infinity]]});t("ol.loadingstrategy.bbox",Vt);t("ol.loadingstrategy.createTile",function(a){return function(b,c){var d=jg(a.a,c,0),e=Kk(a,b,d),f=[],d=new Lb(d,0,0);for(d.x=e.a;d.x<=e.d;++d.x)for(d.y=e.b;d.y<=e.c;++d.y)f.push(Jk(a,d));return f}});t("ol.proj.CH",Xt);Xt.prototype.getCode=Xt.prototype.c;Xt.prototype.getExtent=Xt.prototype.v;Xt.prototype.getUnits=Xt.prototype.b;
t("ol.proj.EPSG2056",$t);$t.prototype.getCode=$t.prototype.c;$t.prototype.getExtent=$t.prototype.v;$t.prototype.getUnits=$t.prototype.b;t("ol.proj.EPSG21781",bu);bu.prototype.getCode=bu.prototype.c;bu.prototype.getExtent=bu.prototype.v;bu.prototype.getUnits=bu.prototype.b;t("ol.proj.EPSG3857",xk);xk.prototype.getCode=xk.prototype.c;xk.prototype.getExtent=xk.prototype.v;xk.prototype.getUnits=xk.prototype.b;t("ol.proj.EPSG4326",Ak);Ak.prototype.getCode=Ak.prototype.c;Ak.prototype.getExtent=Ak.prototype.v;
Ak.prototype.getUnits=Ak.prototype.b;t("ol.proj.METERS_PER_UNIT[undefined]",Vg[void 0]);t("ol.proj.Projection",Xg);Xg.prototype.getCode=Xg.prototype.c;Xg.prototype.getExtent=Xg.prototype.v;Xg.prototype.getUnits=Xg.prototype.b;t("ol.proj.addProjection",oh);t("ol.proj.common.add",Ck);t("ol.proj.configureProj4jsProjection",function(a){return ah(a)});t("ol.proj.get",qh);t("ol.proj.getTransform",rh);t("ol.proj.getTransformFromProjections",$g);t("ol.proj.transform",function(a,b,c){return rh(b,c)(a)});
t("ol.proj.transformWithProjections",function(a,b,c){return $g(b,c)(a)});ti.prototype.context=ti.prototype.context;ti.prototype.frameState=ti.prototype.frameState;ti.prototype.glContext=ti.prototype.glContext;ti.prototype.vectorContext=ti.prototype.vectorContext;kl.prototype.drawAsync=kl.prototype.Lc;kl.prototype.drawCircleGeometry=kl.prototype.oc;kl.prototype.drawFeature=kl.prototype.Mc;kl.prototype.drawLineStringGeometry=kl.prototype.pc;kl.prototype.drawMultiLineStringGeometry=kl.prototype.qc;
kl.prototype.drawMultiPointGeometry=kl.prototype.rc;kl.prototype.drawMultiPolygonGeometry=kl.prototype.sc;kl.prototype.drawPointGeometry=kl.prototype.tc;kl.prototype.drawPolygonGeometry=kl.prototype.Ob;kl.prototype.setFillStrokeStyle=kl.prototype.Ia;kl.prototype.setImageStyle=kl.prototype.bc;kl.prototype.setTextStyle=kl.prototype.ua;t("ol.source.BingMaps",Bu);Bu.prototype.dispatchChangeEvent=Bu.prototype.k;Bu.prototype.getState=Bu.prototype.a;Bu.prototype.getTileGrid=Bu.prototype.qa;
Bu.prototype.on=Bu.prototype.p;Bu.prototype.once=Bu.prototype.q;Bu.prototype.un=Bu.prototype.r;Bu.prototype.unByKey=Bu.prototype.s;t("ol.source.BingMaps.TOS_ATTRIBUTION",Cu);Zu.prototype.addFeature=Zu.prototype.Fa;Zu.prototype.addFeatures=Zu.prototype.Na;Zu.prototype.dispatchChangeEvent=Zu.prototype.k;Zu.prototype.forEachFeature=Zu.prototype.Oa;Zu.prototype.forEachFeatureInExtent=Zu.prototype.oa;Zu.prototype.getClosestFeatureToCoordinate=Zu.prototype.Pa;Zu.prototype.getExtent=Zu.prototype.v;
Zu.prototype.getFeatures=Zu.prototype.Ga;Zu.prototype.getFeaturesAtCoordinate=Zu.prototype.Ba;Zu.prototype.getState=Zu.prototype.a;Zu.prototype.on=Zu.prototype.p;Zu.prototype.once=Zu.prototype.q;Zu.prototype.readFeatures=Zu.prototype.b;Zu.prototype.removeFeature=Zu.prototype.Ua;Zu.prototype.un=Zu.prototype.r;Zu.prototype.unByKey=Zu.prototype.s;t("ol.source.GPX",bv);bv.prototype.addFeature=bv.prototype.Fa;bv.prototype.addFeatures=bv.prototype.Na;bv.prototype.dispatchChangeEvent=bv.prototype.k;
bv.prototype.forEachFeature=bv.prototype.Oa;bv.prototype.forEachFeatureInExtent=bv.prototype.oa;bv.prototype.getClosestFeatureToCoordinate=bv.prototype.Pa;bv.prototype.getExtent=bv.prototype.v;bv.prototype.getFeatures=bv.prototype.Ga;bv.prototype.getFeaturesAtCoordinate=bv.prototype.Ba;bv.prototype.getState=bv.prototype.a;bv.prototype.on=bv.prototype.p;bv.prototype.once=bv.prototype.q;bv.prototype.readFeatures=bv.prototype.b;bv.prototype.removeFeature=bv.prototype.Ua;bv.prototype.un=bv.prototype.r;
bv.prototype.unByKey=bv.prototype.s;t("ol.source.GeoJSON",cv);cv.prototype.addFeature=cv.prototype.Fa;cv.prototype.addFeatures=cv.prototype.Na;cv.prototype.dispatchChangeEvent=cv.prototype.k;cv.prototype.forEachFeature=cv.prototype.Oa;cv.prototype.forEachFeatureInExtent=cv.prototype.oa;cv.prototype.getClosestFeatureToCoordinate=cv.prototype.Pa;cv.prototype.getExtent=cv.prototype.v;cv.prototype.getFeatures=cv.prototype.Ga;cv.prototype.getFeaturesAtCoordinate=cv.prototype.Ba;cv.prototype.getState=cv.prototype.a;
cv.prototype.on=cv.prototype.p;cv.prototype.once=cv.prototype.q;cv.prototype.readFeatures=cv.prototype.b;cv.prototype.removeFeature=cv.prototype.Ua;cv.prototype.un=cv.prototype.r;cv.prototype.unByKey=cv.prototype.s;t("ol.source.IGC",dv);dv.prototype.addFeature=dv.prototype.Fa;dv.prototype.addFeatures=dv.prototype.Na;dv.prototype.dispatchChangeEvent=dv.prototype.k;dv.prototype.forEachFeature=dv.prototype.Oa;dv.prototype.forEachFeatureInExtent=dv.prototype.oa;
dv.prototype.getClosestFeatureToCoordinate=dv.prototype.Pa;dv.prototype.getExtent=dv.prototype.v;dv.prototype.getFeatures=dv.prototype.Ga;dv.prototype.getFeaturesAtCoordinate=dv.prototype.Ba;dv.prototype.getState=dv.prototype.a;dv.prototype.on=dv.prototype.p;dv.prototype.once=dv.prototype.q;dv.prototype.readFeatures=dv.prototype.b;dv.prototype.removeFeature=dv.prototype.Ua;dv.prototype.un=dv.prototype.r;dv.prototype.unByKey=dv.prototype.s;Bl.prototype.dispatchChangeEvent=Bl.prototype.k;
Bl.prototype.getState=Bl.prototype.a;Bl.prototype.on=Bl.prototype.p;Bl.prototype.once=Bl.prototype.q;Bl.prototype.un=Bl.prototype.r;Bl.prototype.unByKey=Bl.prototype.s;t("ol.source.ImageCanvas",fv);fv.prototype.dispatchChangeEvent=fv.prototype.k;fv.prototype.getState=fv.prototype.a;fv.prototype.on=fv.prototype.p;fv.prototype.once=fv.prototype.q;fv.prototype.un=fv.prototype.r;fv.prototype.unByKey=fv.prototype.s;t("ol.source.ImageStatic",gv);gv.prototype.dispatchChangeEvent=gv.prototype.k;
gv.prototype.getState=gv.prototype.a;gv.prototype.on=gv.prototype.p;gv.prototype.once=gv.prototype.q;gv.prototype.un=gv.prototype.r;gv.prototype.unByKey=gv.prototype.s;t("ol.source.ImageVector",hv);hv.prototype.dispatchChangeEvent=hv.prototype.k;hv.prototype.getSource=hv.prototype.qh;hv.prototype.getState=hv.prototype.a;hv.prototype.on=hv.prototype.p;hv.prototype.once=hv.prototype.q;hv.prototype.un=hv.prototype.r;hv.prototype.unByKey=hv.prototype.s;t("ol.source.ImageWMS",iv);
iv.prototype.dispatchChangeEvent=iv.prototype.k;iv.prototype.getGetFeatureInfoUrl=iv.prototype.th;iv.prototype.getParams=iv.prototype.uh;iv.prototype.getState=iv.prototype.a;iv.prototype.getUrl=iv.prototype.vh;iv.prototype.on=iv.prototype.p;iv.prototype.once=iv.prototype.q;iv.prototype.setUrl=iv.prototype.wh;iv.prototype.un=iv.prototype.r;iv.prototype.unByKey=iv.prototype.s;iv.prototype.updateParams=iv.prototype.xh;t("ol.source.KML",lv);lv.prototype.addFeature=lv.prototype.Fa;
lv.prototype.addFeatures=lv.prototype.Na;lv.prototype.dispatchChangeEvent=lv.prototype.k;lv.prototype.forEachFeature=lv.prototype.Oa;lv.prototype.forEachFeatureInExtent=lv.prototype.oa;lv.prototype.getClosestFeatureToCoordinate=lv.prototype.Pa;lv.prototype.getExtent=lv.prototype.v;lv.prototype.getFeatures=lv.prototype.Ga;lv.prototype.getFeaturesAtCoordinate=lv.prototype.Ba;lv.prototype.getState=lv.prototype.a;lv.prototype.on=lv.prototype.p;lv.prototype.once=lv.prototype.q;
lv.prototype.readFeatures=lv.prototype.b;lv.prototype.removeFeature=lv.prototype.Ua;lv.prototype.un=lv.prototype.r;lv.prototype.unByKey=lv.prototype.s;t("ol.source.MapGuide",ov);ov.prototype.dispatchChangeEvent=ov.prototype.k;ov.prototype.getState=ov.prototype.a;ov.prototype.on=ov.prototype.p;ov.prototype.once=ov.prototype.q;ov.prototype.un=ov.prototype.r;ov.prototype.unByKey=ov.prototype.s;t("ol.source.MapQuest",uv);uv.prototype.dispatchChangeEvent=uv.prototype.k;uv.prototype.getState=uv.prototype.a;
uv.prototype.getTileGrid=uv.prototype.qa;uv.prototype.on=uv.prototype.p;uv.prototype.once=uv.prototype.q;uv.prototype.setUrl=uv.prototype.b;uv.prototype.un=uv.prototype.r;uv.prototype.unByKey=uv.prototype.s;t("ol.source.OSM",qv);qv.prototype.dispatchChangeEvent=qv.prototype.k;qv.prototype.getState=qv.prototype.a;qv.prototype.getTileGrid=qv.prototype.qa;qv.prototype.on=qv.prototype.p;qv.prototype.once=qv.prototype.q;qv.prototype.setUrl=qv.prototype.b;qv.prototype.un=qv.prototype.r;
qv.prototype.unByKey=qv.prototype.s;t("ol.source.OSM.DATA_ATTRIBUTION",sv);t("ol.source.OSM.TILE_ATTRIBUTION",tv);t("ol.source.OSMXML",xv);xv.prototype.addFeature=xv.prototype.Fa;xv.prototype.addFeatures=xv.prototype.Na;xv.prototype.dispatchChangeEvent=xv.prototype.k;xv.prototype.forEachFeature=xv.prototype.Oa;xv.prototype.forEachFeatureInExtent=xv.prototype.oa;xv.prototype.getClosestFeatureToCoordinate=xv.prototype.Pa;xv.prototype.getExtent=xv.prototype.v;xv.prototype.getFeatures=xv.prototype.Ga;
xv.prototype.getFeaturesAtCoordinate=xv.prototype.Ba;xv.prototype.getState=xv.prototype.a;xv.prototype.on=xv.prototype.p;xv.prototype.once=xv.prototype.q;xv.prototype.readFeatures=xv.prototype.b;xv.prototype.removeFeature=xv.prototype.Ua;xv.prototype.un=xv.prototype.r;xv.prototype.unByKey=xv.prototype.s;t("ol.source.ServerVector",yv);yv.prototype.addFeature=yv.prototype.Fa;yv.prototype.addFeatures=yv.prototype.Na;yv.prototype.dispatchChangeEvent=yv.prototype.k;yv.prototype.forEachFeature=yv.prototype.Oa;
yv.prototype.forEachFeatureInExtent=yv.prototype.oa;yv.prototype.getClosestFeatureToCoordinate=yv.prototype.Pa;yv.prototype.getExtent=yv.prototype.v;yv.prototype.getFeatures=yv.prototype.Ga;yv.prototype.getFeaturesAtCoordinate=yv.prototype.Ba;yv.prototype.getState=yv.prototype.a;yv.prototype.on=yv.prototype.p;yv.prototype.once=yv.prototype.q;yv.prototype.readFeatures=yv.prototype.b;yv.prototype.removeFeature=yv.prototype.Ua;yv.prototype.un=yv.prototype.r;yv.prototype.unByKey=yv.prototype.s;
sk.prototype.dispatchChangeEvent=sk.prototype.k;sk.prototype.getState=sk.prototype.a;sk.prototype.on=sk.prototype.p;sk.prototype.once=sk.prototype.q;sk.prototype.un=sk.prototype.r;sk.prototype.unByKey=sk.prototype.s;t("ol.source.Stamen",Bv);Bv.prototype.dispatchChangeEvent=Bv.prototype.k;Bv.prototype.getState=Bv.prototype.a;Bv.prototype.getTileGrid=Bv.prototype.qa;Bv.prototype.on=Bv.prototype.p;Bv.prototype.once=Bv.prototype.q;Bv.prototype.setUrl=Bv.prototype.b;Bv.prototype.un=Bv.prototype.r;
Bv.prototype.unByKey=Bv.prototype.s;t("ol.source.StaticVector",av);av.prototype.addFeature=av.prototype.Fa;av.prototype.addFeatures=av.prototype.Na;av.prototype.dispatchChangeEvent=av.prototype.k;av.prototype.forEachFeature=av.prototype.Oa;av.prototype.forEachFeatureInExtent=av.prototype.oa;av.prototype.getClosestFeatureToCoordinate=av.prototype.Pa;av.prototype.getExtent=av.prototype.v;av.prototype.getFeatures=av.prototype.Ga;av.prototype.getFeaturesAtCoordinate=av.prototype.Ba;
av.prototype.getState=av.prototype.a;av.prototype.on=av.prototype.p;av.prototype.once=av.prototype.q;av.prototype.readFeatures=av.prototype.b;av.prototype.removeFeature=av.prototype.Ua;av.prototype.un=av.prototype.r;av.prototype.unByKey=av.prototype.s;Ok.prototype.dispatchChangeEvent=Ok.prototype.k;Ok.prototype.getState=Ok.prototype.a;Ok.prototype.getTileGrid=Ok.prototype.qa;Ok.prototype.on=Ok.prototype.p;Ok.prototype.once=Ok.prototype.q;Ok.prototype.un=Ok.prototype.r;Ok.prototype.unByKey=Ok.prototype.s;
t("ol.source.TileDebug",Ev);Ev.prototype.dispatchChangeEvent=Ev.prototype.k;Ev.prototype.getState=Ev.prototype.a;Ev.prototype.getTileGrid=Ev.prototype.qa;Ev.prototype.on=Ev.prototype.p;Ev.prototype.once=Ev.prototype.q;Ev.prototype.un=Ev.prototype.r;Ev.prototype.unByKey=Ev.prototype.s;t("ol.source.TileImage",yu);yu.prototype.dispatchChangeEvent=yu.prototype.k;yu.prototype.getState=yu.prototype.a;yu.prototype.getTileGrid=yu.prototype.qa;yu.prototype.on=yu.prototype.p;yu.prototype.once=yu.prototype.q;
yu.prototype.un=yu.prototype.r;yu.prototype.unByKey=yu.prototype.s;t("ol.source.TileJSON",Fv);Fv.prototype.dispatchChangeEvent=Fv.prototype.k;Fv.prototype.getState=Fv.prototype.a;Fv.prototype.getTileGrid=Fv.prototype.qa;Fv.prototype.on=Fv.prototype.p;Fv.prototype.once=Fv.prototype.q;Fv.prototype.un=Fv.prototype.r;Fv.prototype.unByKey=Fv.prototype.s;t("ol.source.TileVector",Gv);Gv.prototype.dispatchChangeEvent=Gv.prototype.k;Gv.prototype.getFeaturesAtCoordinate=Gv.prototype.Ba;
Gv.prototype.getState=Gv.prototype.a;Gv.prototype.on=Gv.prototype.p;Gv.prototype.once=Gv.prototype.q;Gv.prototype.readFeatures=Gv.prototype.b;Gv.prototype.un=Gv.prototype.r;Gv.prototype.unByKey=Gv.prototype.s;t("ol.source.TileWMS",Hv);Hv.prototype.dispatchChangeEvent=Hv.prototype.k;Hv.prototype.getGetFeatureInfoUrl=Hv.prototype.yh;Hv.prototype.getParams=Hv.prototype.zh;Hv.prototype.getState=Hv.prototype.a;Hv.prototype.getTileGrid=Hv.prototype.qa;Hv.prototype.getUrls=Hv.prototype.Yf;
Hv.prototype.on=Hv.prototype.p;Hv.prototype.once=Hv.prototype.q;Hv.prototype.un=Hv.prototype.r;Hv.prototype.unByKey=Hv.prototype.s;Hv.prototype.updateParams=Hv.prototype.Bh;t("ol.source.TopoJSON",Lv);Lv.prototype.addFeature=Lv.prototype.Fa;Lv.prototype.addFeatures=Lv.prototype.Na;Lv.prototype.dispatchChangeEvent=Lv.prototype.k;Lv.prototype.forEachFeature=Lv.prototype.Oa;Lv.prototype.forEachFeatureInExtent=Lv.prototype.oa;Lv.prototype.getClosestFeatureToCoordinate=Lv.prototype.Pa;
Lv.prototype.getExtent=Lv.prototype.v;Lv.prototype.getFeatures=Lv.prototype.Ga;Lv.prototype.getFeaturesAtCoordinate=Lv.prototype.Ba;Lv.prototype.getState=Lv.prototype.a;Lv.prototype.on=Lv.prototype.p;Lv.prototype.once=Lv.prototype.q;Lv.prototype.readFeatures=Lv.prototype.b;Lv.prototype.removeFeature=Lv.prototype.Ua;Lv.prototype.un=Lv.prototype.r;Lv.prototype.unByKey=Lv.prototype.s;t("ol.source.Vector",Mm);Mm.prototype.addFeature=Mm.prototype.Fa;Mm.prototype.addFeatures=Mm.prototype.Na;
Mm.prototype.dispatchChangeEvent=Mm.prototype.k;Mm.prototype.forEachFeature=Mm.prototype.Oa;Mm.prototype.forEachFeatureInExtent=Mm.prototype.oa;Mm.prototype.getClosestFeatureToCoordinate=Mm.prototype.Pa;Mm.prototype.getExtent=Mm.prototype.v;Mm.prototype.getFeatures=Mm.prototype.Ga;Mm.prototype.getFeaturesAtCoordinate=Mm.prototype.Ba;Mm.prototype.getState=Mm.prototype.a;Mm.prototype.on=Mm.prototype.p;Mm.prototype.once=Mm.prototype.q;Mm.prototype.removeFeature=Mm.prototype.Ua;Mm.prototype.un=Mm.prototype.r;
Mm.prototype.unByKey=Mm.prototype.s;Om.prototype.feature=Om.prototype.feature;t("ol.source.WMTS",Pv);Pv.prototype.dispatchChangeEvent=Pv.prototype.k;Pv.prototype.getDimensions=Pv.prototype.f;Pv.prototype.getState=Pv.prototype.a;Pv.prototype.getTileGrid=Pv.prototype.qa;Pv.prototype.on=Pv.prototype.p;Pv.prototype.once=Pv.prototype.q;Pv.prototype.un=Pv.prototype.r;Pv.prototype.unByKey=Pv.prototype.s;Pv.prototype.updateDimensions=Pv.prototype.g;
t("ol.source.WMTS.optionsFromCapabilities",function(a,b){var c=zb(a.contents.layers,function(a){return a.identifier==b}),d=c.tileMatrixSetLinks[0].tileMatrixSet,e=c.formats[0],f=Ab(c.styles,function(a){return a.isDefault});0>f&&(f=0);var f=c.styles[f].identifier,g={};wb(c.dimensions,function(a){var b=a.identifier,c=a["default"];s(c)||(c=a.values[0]);g[b]=c});var h=a.contents.tileMatrixSets[d],m=Nv(h),h=qh(h.supportedCRS),n=a.operationsMetadata.GetTile.dcp.http.get,p,q;switch(fc(n[0].constraints.GetEncoding.allowedValues)[0]){case "REST":case "RESTful":q=
"REST";p=c.resourceUrls.tile[e];break;case "KVP":q=Ov,p=[],wb(n,function(a){a.constraints.GetEncoding.allowedValues.hasOwnProperty(Ov)&&p.push(a.url)})}return{urls:p,layer:b,matrixSet:d,format:e,projection:h,requestEncoding:q,tileGrid:m,style:f,dimensions:g}});t("ol.source.XYZ",pv);pv.prototype.dispatchChangeEvent=pv.prototype.k;pv.prototype.getState=pv.prototype.a;pv.prototype.getTileGrid=pv.prototype.qa;pv.prototype.on=pv.prototype.p;pv.prototype.once=pv.prototype.q;pv.prototype.setUrl=pv.prototype.b;
pv.prototype.un=pv.prototype.r;pv.prototype.unByKey=pv.prototype.s;t("ol.source.Zoomify",Sv);Sv.prototype.dispatchChangeEvent=Sv.prototype.k;Sv.prototype.getState=Sv.prototype.a;Sv.prototype.getTileGrid=Sv.prototype.qa;Sv.prototype.on=Sv.prototype.p;Sv.prototype.once=Sv.prototype.q;Sv.prototype.un=Sv.prototype.r;Sv.prototype.unByKey=Sv.prototype.s;t("ol.sphere.WGS84",co);t("ol.style.Circle",Li);Li.prototype.getAnchor=Li.prototype.Pb;Li.prototype.getAnchor=Li.prototype.Pb;Li.prototype.getFill=Li.prototype.Qe;
Li.prototype.getFill=Li.prototype.Qe;Li.prototype.getImage=Li.prototype.Yb;Li.prototype.getImage=Li.prototype.Yb;Li.prototype.getRadius=Li.prototype.Re;Li.prototype.getRadius=Li.prototype.Re;Li.prototype.getRotation=Li.prototype.h;Li.prototype.getScale=Li.prototype.g;Li.prototype.getSize=Li.prototype.Eb;Li.prototype.getSize=Li.prototype.Eb;Li.prototype.getStroke=Li.prototype.Se;Li.prototype.getStroke=Li.prototype.Se;t("ol.style.Fill",Ii);Ii.prototype.getColor=Ii.prototype.c;t("ol.style.Icon",Zk);
Zk.prototype.getAnchor=Zk.prototype.Pb;Zk.prototype.getImage=Zk.prototype.Yb;Zk.prototype.getRotation=Zk.prototype.h;Zk.prototype.getScale=Zk.prototype.g;Zk.prototype.getSize=Zk.prototype.Eb;Zk.prototype.getSrc=Zk.prototype.Ch;Ji.prototype.getRotation=Ji.prototype.h;Ji.prototype.getScale=Ji.prototype.g;t("ol.style.Stroke",Ki);Ki.prototype.getColor=Ki.prototype.Dh;Ki.prototype.getLineCap=Ki.prototype.Of;Ki.prototype.getLineDash=Ki.prototype.Eh;Ki.prototype.getLineJoin=Ki.prototype.Pf;
Ki.prototype.getMiterLimit=Ki.prototype.Sf;Ki.prototype.getWidth=Ki.prototype.Fh;t("ol.style.Style",Mi);Mi.prototype.getFill=Mi.prototype.Gh;Mi.prototype.getImage=Mi.prototype.Hh;Mi.prototype.getStroke=Mi.prototype.Ih;Mi.prototype.getText=Mi.prototype.Jh;Mi.prototype.getZIndex=Mi.prototype.Zf;t("ol.style.Text",Uv);Uv.prototype.getFill=Uv.prototype.Kh;Uv.prototype.getFont=Uv.prototype.Kf;Uv.prototype.getRotation=Uv.prototype.Lh;Uv.prototype.getScale=Uv.prototype.Mh;Uv.prototype.getStroke=Uv.prototype.Nh;
Uv.prototype.getText=Uv.prototype.Oh;Uv.prototype.getTextAlign=Uv.prototype.Vf;Uv.prototype.getTextBaseline=Uv.prototype.Wf;t("ol.tilegrid.TileGrid",Hk);Hk.prototype.getMinZoom=Hk.prototype.Tc;Hk.prototype.getOrigin=Hk.prototype.rb;Hk.prototype.getResolution=Hk.prototype.ea;Hk.prototype.getTileSize=Hk.prototype.ja;t("ol.tilegrid.WMTS",Mv);Mv.prototype.getMatrixIds=Mv.prototype.g;Mv.prototype.getMinZoom=Mv.prototype.Tc;Mv.prototype.getOrigin=Mv.prototype.rb;Mv.prototype.getResolution=Mv.prototype.ea;
Mv.prototype.getTileSize=Mv.prototype.ja;t("ol.tilegrid.XYZ",Au);Au.prototype.getMinZoom=Au.prototype.Tc;Au.prototype.getOrigin=Au.prototype.rb;Au.prototype.getResolution=Au.prototype.ea;Au.prototype.getTileSize=Au.prototype.ja;t("ol.tilegrid.Zoomify",Rv);Rv.prototype.getMinZoom=Rv.prototype.Tc;Rv.prototype.getOrigin=Rv.prototype.rb;Rv.prototype.getResolution=Rv.prototype.ea;Rv.prototype.getTileSize=Rv.prototype.ja;t("ol.webgl.Context",Ln);Ln.prototype.getGL=Ln.prototype.Ph;
Ln.prototype.useProgram=Ln.prototype.Nd;})();
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//














;
