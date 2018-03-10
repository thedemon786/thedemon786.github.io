(function(e,t,n){"use strict";function i(n){if(!r[n]){r[n]=true;e.migrateWarnings.push(n);if(t.console&&console.warn&&!e.migrateMute){}}}function s(t,n,r,s){if(Object.defineProperty){try{Object.defineProperty(t,n,{configurable:true,enumerable:true,get:function(){i(s);return r},set:function(e){i(s);r=e}});return}catch(o){}}e._definePropertyBroken=true;t[n]=r}var r={};e.migrateWarnings=[];e.migrateReset=function(){r={};e.migrateWarnings.length=0};if(document.compatMode==="BackCompat"){i("jQuery is not compatible with Quirks Mode")}var o={},u=e.attr,a=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},f=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,c=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i;s(e,"attrFn",o,"jQuery.attrFn is deprecated");e.attr=function(t,r,s,o){var a=r.toLowerCase(),f=t&&t.nodeType;if(o){i("jQuery.fn.attr( props, pass ) is deprecated");if(t&&!c.test(f)&&e.isFunction(e.fn[r])){return e(t)[r](s)}}if(r==="type"&&s!==n&&l.test(t.nodeName)){i("Can't change the 'type' of an input or button in IE 6/7/8")}if(!e.attrHooks[a]&&h.test(a)){e.attrHooks[a]={get:function(t,r){var i,s=e.prop(t,r);return s===true||typeof s!=="boolean"&&(i=t.getAttributeNode(r))&&i.nodeValue!==false?r.toLowerCase():n},set:function(t,n,r){var i;if(n===false){e.removeAttr(t,r)}else{i=e.propFix[r]||r;if(i in t){t[i]=true}t.setAttribute(r,r.toLowerCase())}return r}};if(p.test(a)){i("jQuery.fn.attr("+a+") may use property instead of attribute")}}return u.call(e,t,r,s)};e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();if(n==="button"){return a.apply(this,arguments)}if(n!=="input"&&n!=="option"){i("property-based jQuery.fn.attr('value') is deprecated")}return t in e?e.value:null},set:function(e,t){var n=(e.nodeName||"").toLowerCase();if(n==="button"){return f.apply(this,arguments)}if(n!=="input"&&n!=="option"){i("property-based jQuery.fn.attr('value', val) is deprecated")}e.value=t}};var d,v,m=e.fn.init,g=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;e.fn.init=function(t,n,r){var s;if(t&&typeof t==="string"&&!e.isPlainObject(n)&&(s=g.exec(t))&&s[1]){if(t.charAt(0)!=="<"){i("$(html) HTML strings must start with '<' character")}if(n&&n.context){n=n.context}if(e.parseHTML){return m.call(this,e.parseHTML(e.trim(t),n,true),n,r)}}return m.apply(this,arguments)};e.fn.init.prototype=e.fn;e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}};d=e.uaMatch(navigator.userAgent);v={};if(d.browser){v[d.browser]=true;v.version=d.version}if(v.chrome){v.webkit=true}else if(v.webkit){v.safari=true}e.browser=v;s(e,"browser",v,"jQuery.browser is deprecated");e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(true,t,this);t.superclass=this;t.fn=t.prototype=this();t.fn.factoryor=t;t.sub=this.sub;t.fn.init=function(i,s){if(s&&s instanceof e&&!(s instanceof t)){s=t(s)}return e.fn.init.call(this,i,s,n)};t.fn.init.prototype=t.fn;var n=t(document);i("jQuery.sub() is deprecated");return t};var y=e.fn.data;e.fn.data=function(t){var r,s,o=this[0];if(o&&t==="events"&&arguments.length===1){r=e.data(o,t);s=e._data(o,t);if((r===n||r===s)&&s!==n){i("Use of jQuery.fn.data('events') is deprecated");return s}}return y.apply(this,arguments)};var b=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack,E=e.buildFragment;e.fn.andSelf=function(){i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");return w.apply(this,arguments)};if(!e.clean){e.clean=function(t,n,r,s){n=n||document;n=!n.nodeType&&n[0]||n;n=n.ownerDocument||n;i("jQuery.clean() is deprecated");var o,u,a,f,l=[];e.merge(l,e.buildFragment(t,n).childNodes);if(r){a=function(e){if(!e.type||b.test(e.type)){return s?s.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)}};for(o=0;(u=l[o])!=null;o++){if(!(e.nodeName(u,"script")&&a(u))){r.appendChild(u);if(typeof u.getElementsByTagName!=="undefined"){f=e.grep(e.merge([],u.getElementsByTagName("script")),a);l.splice.apply(l,[o+1,0].concat(f));o+=f.length}}}}return l}}e.buildFragment=function(t,n,r,o){var u,a="jQuery.buildFragment() is deprecated";n=n||document;n=!n.nodeType&&n[0]||n;n=n.ownerDocument||n;try{u=E.call(e,t,n,r,o)}catch(f){u=E.call(e,t,n.nodeType?[n]:n[0],r,o);i(a)}if(!u.fragment){s(u,"fragment",u,a);s(u,"cacheable",false,a)}return u};var S=e.event.add,x=e.event.remove,T=e.event.trigger,N=e.fn.toggle,C=e.fn.live,k=e.fn.die,L="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",A=new RegExp("\\b(?:"+L+")\\b"),O=/(?:^|\s)hover(\.\S+|)\b/,M=function(t){if(typeof t!="string"||e.event.special.hover){return t}if(O.test(t)){i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return t&&t.replace(O,"mouseenter$1 mouseleave$1")};if(e.event.props&&e.event.props[0]!=="attrChange"){e.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}s(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated");e.event.add=function(e,t,n,r,s){if(e!==document&&A.test(t)){i("AJAX events should be attached to document: "+t)}S.call(this,e,M(t||""),n,r,s)};e.event.remove=function(e,t,n,r,i){x.call(this,e,M(t)||"",n,r,i)};e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);i("jQuery.fn.error() is deprecated");e.splice(0,0,"error");if(arguments.length){return this.bind.apply(this,e)}this.triggerHandler.apply(this,e);return this};e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n)){return N.apply(this,arguments)}i("jQuery.fn.toggle(handler, handler...) is deprecated");var r=arguments,s=t.guid||e.guid++,o=0,u=function(n){var i=(e._data(this,"lastToggle"+t.guid)||0)%o;e._data(this,"lastToggle"+t.guid,i+1);n.preventDefault();return r[i].apply(this,arguments)||false};u.guid=s;while(o<r.length){r[o++].guid=s}return this.click(u)};e.fn.live=function(t,n,r){i("jQuery.fn.live() is deprecated");if(C){return C.apply(this,arguments)}e(this.context).on(t,this.selector,n,r);return this};e.fn.die=function(t,n){i("jQuery.fn.die() is deprecated");if(k){return k.apply(this,arguments)}e(this.context).off(t,this.selector||"**",n);return this};e.event.trigger=function(e,t,n,r){if(!n&!A.test(e)){i("Global events are undocumented and deprecated")}return T.call(this,e,t,n||document,r)};e.each(L.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;if(t!==document){e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,true)});e._data(this,n,e.guid++)}return false},teardown:function(){if(this!==document){e.event.remove(document,n+"."+e._data(this,n))}return false}}})})(jQuery,window)