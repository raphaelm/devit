webpackJsonp([14],{30:function(e,t,n){n(31),phonon.options({navigator:{defaultPage:"schedule",animatePages:!0,enableBrowserBackButton:!0},i18n:null}),phonon.navigator().start()},31:function(e,t,n){(function(e,o){var a;(function(){"use strict";function i(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function r(e,t,n){var o={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(o=o[/[\d.]+$/.exec(e)])&&(e="Windows "+o),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),e=s(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function l(e,t){var n=-1,o=e?e.length:0;if("number"==typeof o&&o>-1&&o<=S)for(;++n<o;)t(e[n],n,e);else c(e,t)}function s(e){return e=h(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:i(e)}function c(e,t){for(var n in e)P.call(e,n)&&t(e[n],n,e)}function u(e){return null==e?i(e):T.call(e).slice(8,-1)}function f(e,t){var n=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(n)||"object"==n&&!e[t])}function p(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function d(e,t){var n=null;return l(e,function(o,a){n=t(n,o,a,e)}),n}function h(e){return String(e).replace(/^ +| +$/g,"")}function b(e){function t(t){return d(t,function(t,n){var o=n.pattern||p(n);return!t&&(t=RegExp("\\b"+o+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+o+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+o+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(n.label&&!RegExp(o,"i").test(n.label)?n.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),n=n.label||n,t=s(t[0].replace(RegExp(o,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function n(){return this.description||""}var o=g,a=e&&"object"==typeof e&&"String"!=u(e);a&&(o=e,e=null);var i=o.navigator||{},l=i.userAgent||"";e||(e=l);var v,y,x=a||M==m,w=a?!!i.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(T.toString()),S=a?"Object":"ScriptBridgingProxyObject",k=a?"Object":"Environment",P=a&&o.java?"JavaPackage":u(o.java),C=a?"Object":"RuntimeObject",O=/\bJava/.test(P)&&o.java,R=O&&u(o.environment)==k,A=O?"a":"α",L=O?"b":"β",j=o.document||{},D=o.operamini||o.opera,B=E.test(B=a&&D?D["[[Class]]"]:u(D))?B:D=null,N=e,I=[],W=null,F=e==l,H=F&&D&&"function"==typeof D.version&&D.version(),G=function(t){return d(t,function(t,n){return t||RegExp("\\b"+(n.pattern||p(n))+"\\b","i").exec(e)&&(n.label||n)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),X=function(t){return d(t,function(t,n){return t||RegExp("\\b"+(n.pattern||p(n))+"\\b","i").exec(e)&&(n.label||n)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),$=t([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),K=function(t){return d(t,function(t,n,o){return t||(n[$]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)]||RegExp("\\b"+p(o)+"(?:\\b|\\w*\\d)","i").exec(e))&&o})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),U=function(t){return d(t,function(t,n){var o=n.pattern||p(n);return!t&&(t=RegExp("\\b"+o+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(t=r(t,o,n.label||n)),t})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(G&&(G=[G]),K&&!$&&($=t([K])),(v=/\bGoogle TV\b/.exec($))&&($=v[0]),/\bSimulator\b/i.test(e)&&($=($?$+" ":"")+"Simulator"),"Opera Mini"==X&&/\bOPiOS\b/.test(e)&&I.push("running in Turbo/Uncompressed mode"),"IE"==X&&/\blike iPhone OS\b/.test(e)?(v=b(e.replace(/like iPhone OS/,"")),K=v.manufacturer,$=v.product):/^iP/.test($)?(X||(X="Safari"),U="iOS"+((v=/ OS ([\d_]+)/i.exec(e))?" "+v[1].replace(/_/g,"."):"")):"Konqueror"!=X||/buntu/i.test(U)?K&&"Google"!=K&&(/Chrome/.test(X)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test($))||/\bAndroid\b/.test(U)&&/^Chrome/.test(X)&&/\bVersion\//i.test(e)?(X="Android Browser",U=/\bAndroid\b/.test(U)?U:"Android"):"Silk"==X?(/\bMobi/i.test(e)||(U="Android",I.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&I.unshift("accelerated")):"PaleMoon"==X&&(v=/\bFirefox\/([\d.]+)\b/.exec(e))?I.push("identifying as Firefox "+v[1]):"Firefox"==X&&(v=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(U||(U="Firefox OS"),$||($=v[1])):!X||(v=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(X))?(X&&!$&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(v+"/")+8))&&(X=null),(v=$||K||U)&&($||K||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U))&&(X=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(U)?U:v)+" Browser")):"Electron"==X&&(v=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&I.push("Chromium "+v):U="Kubuntu",H||(H=function(t){return d(t,function(t,n){return t||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",p(X),"(?:Firefox|Minefield|NetFront)"])),(v="iCab"==G&&parseFloat(H)>3&&"WebKit"||/\bOpera\b/.test(X)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(e)&&("Mac OS"==U?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(X)&&"NetFront")&&(G=[v]),"IE"==X&&(v=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(X+=" Mobile",U="Windows Phone "+(/\+$/.test(v)?v:v+".x"),I.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(X="IE Mobile",U="Windows Phone 8.x",I.unshift("desktop mode"),H||(H=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=X&&"Trident"==G&&(v=/\brv:([\d.]+)/.exec(e))&&(X&&I.push("identifying as "+X+(H?" "+H:"")),X="IE",H=v[1]),F){if(f(o,"global"))if(O&&(v=O.lang.System,N=v.getProperty("os.arch"),U=U||v.getProperty("os.name")+" "+v.getProperty("os.version")),x&&f(o,"system")&&(v=[o.system])[0]){U||(U=v[0].os||null);try{v[1]=o.require("ringo/engine").version,H=v[1].join("."),X="RingoJS"}catch(e){v[0].global.system==o.system&&(X="Narwhal")}}else"object"==typeof o.process&&!o.process.browser&&(v=o.process)?"object"==typeof v.versions?"string"==typeof v.versions.electron?(I.push("Node "+v.versions.node),X="Electron",H=v.versions.electron):"string"==typeof v.versions.nw&&(I.push("Chromium "+H,"Node "+v.versions.node),X="NW.js",H=v.versions.nw):(X="Node.js",N=v.arch,U=v.platform,H=/[\d.]+/.exec(v.version),H=H?H[0]:"unknown"):R&&(X="Rhino");else u(v=o.runtime)==S?(X="Adobe AIR",U=v.flash.system.Capabilities.os):u(v=o.phantom)==C?(X="PhantomJS",H=(v=v.version||null)&&v.major+"."+v.minor+"."+v.patch):"number"==typeof j.documentMode&&(v=/\bTrident\/(\d+)/i.exec(e))?(H=[H,j.documentMode],(v=+v[1]+4)!=H[1]&&(I.push("IE "+H[1]+" mode"),G&&(G[1]=""),H[1]=v),H="IE"==X?String(H[1].toFixed(1)):H[0]):"number"==typeof j.documentMode&&/^(?:Chrome|Firefox)\b/.test(X)&&(I.push("masking as "+X+" "+H),X="IE",H="11.0",G=["Trident"],U="Windows");U=U&&s(U)}if(H&&(v=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(H)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(F&&i.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(W=/b/i.test(v)?"beta":"alpha",H=H.replace(RegExp(v+"\\+?$"),"")+("beta"==W?L:A)+(/\d+\+?/.exec(v)||"")),"Fennec"==X||"Firefox"==X&&/\b(?:Android|Firefox OS)\b/.test(U))X="Firefox Mobile";else if("Maxthon"==X&&H)H=H.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test($))"Xbox 360"==$&&(U=null),"Xbox 360"==$&&/\bIEMobile\b/.test(e)&&I.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(X)&&(!X||$||/Browser|Mobi/.test(X))||"Windows CE"!=U&&!/Mobi/i.test(e))if("IE"==X&&F)try{null===o.external&&I.unshift("platform preview")}catch(e){I.unshift("embedded")}else(/\bBlackBerry\b/.test($)||/\bBB10\b/.test(e))&&(v=(RegExp($.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||H)?(v=[v,/BB10/.test(e)],U=(v[1]?($=null,K="BlackBerry"):"Device Software")+" "+v[0],H=null):this!=c&&"Wii"!=$&&(F&&D||/Opera/.test(X)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==X&&/\bOS X (?:\d+\.){2,}/.test(U)||"IE"==X&&(U&&!/^Win/.test(U)&&H>5.5||/\bWindows XP\b/.test(U)&&H>8||8==H&&!/\bTrident\b/.test(e)))&&!E.test(v=b.call(c,e.replace(E,"")+";"))&&v.name&&(v="ing as "+v.name+((v=v.version)?" "+v:""),E.test(X)?(/\bIE\b/.test(v)&&"Mac OS"==U&&(U=null),v="identify"+v):(v="mask"+v,X=B?s(B.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(v)&&(U=null),F||(H=null)),G=["Presto"],I.push(v));else X+=" Mobile";(v=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(v=[parseFloat(v.replace(/\.(\d)$/,".0$1")),v],"Safari"==X&&"+"==v[1].slice(-1)?(X="WebKit Nightly",W="alpha",H=v[1].slice(0,-1)):H!=v[1]&&H!=(v[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(H=null),v[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==v[0]&&537.36==v[2]&&parseFloat(v[1])>=28&&"WebKit"==G&&(G=["Blink"]),F&&(w||v[1])?(G&&(G[1]="like Chrome"),v=v[1]||(v=v[0],v<530?1:v<532?2:v<532.05?3:v<533?4:v<534.03?5:v<534.07?6:v<534.1?7:v<534.13?8:v<534.16?9:v<534.24?10:v<534.3?11:v<535.01?12:v<535.02?"13+":v<535.07?15:v<535.11?16:v<535.19?17:v<536.05?18:v<536.1?19:v<537.01?20:v<537.11?"21+":v<537.13?23:v<537.18?24:v<537.24?25:v<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),v=v[0],v=v<400?1:v<500?2:v<526?3:v<533?4:v<534?"4+":v<535?5:v<537?6:v<538?7:v<601?8:"8"),G&&(G[1]+=" "+(v+="number"==typeof v?".x":/[.+]/.test(v)?"":"+")),"Safari"==X&&(!H||parseInt(H)>45)&&(H=v)),"Opera"==X&&(v=/\bzbov|zvav$/.exec(U))?(X+=" ",I.unshift("desktop mode"),"zvav"==v?(X+="Mini",H=null):X+="Mobile",U=U.replace(RegExp(" *"+v+"$"),"")):"Safari"==X&&/\bChrome\b/.exec(G&&G[1])&&(I.unshift("desktop mode"),X="Chrome Mobile",H=null,/\bOS X\b/.test(U)?(K="Apple",U="iOS 4.3+"):U=null),H&&0==H.indexOf(v=/[\d.]+$/.exec(U))&&e.indexOf("/"+v+"-")>-1&&(U=h(U.replace(v,""))),G&&!/\b(?:Avant|Nook)\b/.test(X)&&(/Browser|Lunascape|Maxthon/.test(X)||"Safari"!=X&&/^iOS/.test(U)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(X)&&G[1])&&(v=G[G.length-1])&&I.push(v),I.length&&(I=["("+I.join("; ")+")"]),K&&$&&$.indexOf(K)<0&&I.push("on "+K),$&&I.push((/^on /.test(I[I.length-1])?"":"on ")+$),U&&(v=/ ([\d.+]+)$/.exec(U),y=v&&"/"==U.charAt(U.length-v[0].length-1),U={architecture:32,family:v&&!y?U.replace(v[0],""):U,version:v?v[1]:null,toString:function(){var e=this.version;return this.family+(e&&!y?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(v=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N))&&!/\bi686\b/i.test(N)?(U&&(U.architecture=64,U.family=U.family.replace(RegExp(" *"+v),"")),X&&(/\bWOW64\b/i.test(e)||F&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(e))&&I.unshift("32-bit")):U&&/^OS X/.test(U.family)&&"Chrome"==X&&parseFloat(H)>=39&&(U.architecture=64),e||(e=null);var V={};return V.description=e,V.layout=G&&G[0],V.manufacturer=K,V.name=X,V.prerelease=W,V.product=$,V.ua=e,V.version=X&&H,V.os=U||{architecture:null,family:null,version:null,toString:function(){return"null"}},V.parse=b,V.toString=n,V.version&&I.unshift(H),V.name&&I.unshift(X),U&&X&&(U!=String(U).split(" ")[0]||U!=X.split(" ")[0]&&!$)&&I.push($?"("+U+")":"on "+U),I.length&&(V.description=I.join(" ")),V}var v={function:!0,object:!0},g=v[typeof window]&&window||this,m=g,y=v[typeof t]&&t,x=v[typeof e]&&e&&!e.nodeType&&e,w=y&&x&&"object"==typeof o&&o;!w||w.global!==w&&w.window!==w&&w.self!==w||(g=w);var S=Math.pow(2,53)-1,E=/\bOpera/,M=this,k=Object.prototype,P=k.hasOwnProperty,T=k.toString,C=b();g.platform=C,void 0!==(a=function(){return C}.call(t,n,t,e))&&(e.exports=a)}).call(this),function(t,n){var o={},a=[];o.onReady=function(e){a.push(e)},o.dispatchGlobalReady=function(){for(var e=a.length-1;e>=0;e--)a[e]();a=[],o.dispatchGlobalReady=n},function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:n};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=t.Event.prototype,t.CustomEvent=e}(),o.device=function(e){return{osVersion:e.os.version,os:e.os.family,platform:e,ANDROID:"Android",IOS:"iOS"}}(t.platform),o.browser=function(e){return{name:e.name,version:e.version,platform:e}}(t.platform),o.ajax=function(){var e=function(e){var t=null;try{t=new XMLHttpRequest,"withCredentials"in t&&e&&(t.withCredentials=!0)}catch(e){console.error(e)}return t},n=function(e){var t=null;try{t=JSON.parse(e)}catch(e){t=null}return t},o=function(e){var t,n="";for(t in e)n+=t+"="+e[t]+"&";var o=n.lastIndexOf("&");return-1!==o&&(e=n.substring(0,o)),n};return function(a){var i=a.method,r=a.url,l="boolean"==typeof a.crossDomain&&a.crossDomain,s=a.contentType,c=a.dataType,u=a.data,f=a.timeout,p=a.success,d=a.error,h=a.headers;if("string"!=typeof i)throw new TypeError("method must be a string");if("string"!=typeof r)throw new TypeError("url must be a string");void 0===a.contentType&&(a.contentType="application/x-www-form-urlencoded; charset=UTF-8"),"object"==typeof u&&(u="application/json"===s?JSON.stringify(u):o(u));var b=e(l),v="NO_INTERNET_ACCESS";if(b){if(b.open(i,r,!0),"string"==typeof s&&b.setRequestHeader("Content-type",s),"xml"===c&&b.overrideMimeType&&b.overrideMimeType("application/xml; charset=utf-8"),"object"==typeof h){var g;for(g in h)b.setRequestHeader(g,h[g])}b.onreadystatechange=function(e){if(4===b.readyState){var o=null;"json"===c?null===(o=n(b.responseText))&&(v="JSON_MALFORMED"):o="xml"===c?b.responseXML:b.responseText;"2"===b.status.toString()[0]&&"function"==typeof p?p(o,b):"function"==typeof d&&t.setTimeout(function(){d(o,v,b)},1),b=null}},"number"==typeof f&&(b.timeout=f,b.ontimeout=function(){v="TIMEOUT_EXCEEDED"}),b.send(u)}else"function"==typeof d&&(v="XMLHTTPREQUEST_UNAVAILABLE",d(v));return{cancel:function(){v="REQUEST_CANCELED",b&&b.abort()}}}}(),o.event=function(e){var a=["mousedown","mousemove","mouseup"],i=!1;("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)&&(i=!0,a=["touchstart","touchmove","touchend","touchcancel"]),t.navigator.pointerEnabled?a=["pointerdown","pointermove","pointerup","pointercancel"]:t.navigator.msPointerEnabled&&(a=["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"]);var r={};r.hasTouch=i,r.start=a[0],r.move=a[1],r.end=a[2],r.cancel=void 0===a[3]?null:a[3],r.tap="tap",r.forceTap=!1;var l=document.createElement("div"),s=[{name:"transition",end:"transitionend"},{name:"MozTransition",end:"transitionend"},{name:"msTransition",end:"msTransitionEnd"},{name:"WebkitTransition",end:"webkitTransitionEnd"}],c=[{name:"animation",end:"animationend"},{name:"MozAnimation",end:"animationend"},{name:"msAnimation",end:"msAnimationEnd"},{name:"WebkitAnimation",end:"webkitAnimationEnd"}],u=null,f=null,p=s.length-1;for(p in s)if(l.style[s[p].name]!==n){u=s[p].end;break}var d=c.length-1;for(d in c)if(l.style[c[d].name]!==n){f=c[d].end;break}var h=o.device.osVersion;h&&h.length>2&&(h=o.device.osVersion.substring(0,3)),o.device.os&&"android"===o.device.os.toLowerCase()&&"4.1"===h&&(u="webkitTransitionEnd",f="webkitAnimationEnd"),r.transitionEnd=u,r.animationEnd=f;var b=[],v=function(){function n(e,t){this.el=e,this.callback=t,this.moved=!1,this.startX=0,this.startY=0,this.el.addEventListener(r.start,this,!1)}return n.prototype.start=function(e){this.el.addEventListener(r.move,this,!1),this.el.addEventListener(r.end,this,!1),this.moved=!1,this.startX=e.touches?e.touches[0].clientX:e.clientX,this.startY=e.touches?e.touches[0].clientY:e.clientY},n.prototype.move=function(e){var t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY;(Math.abs(t-this.startX)>10||Math.abs(n-this.startY)>10)&&(this.moved=!0)},n.prototype.end=function(n){if(this.el.removeEventListener(r.move,this,!1),this.el.removeEventListener(r.end,this,!1),null!==r.cancel&&this.el.removeEventListener(r.cancel,this,!1),!this.moved){if(void 0!==e){var o=new t.CustomEvent(this.tap,{detail:{event:"tap",target:this.element},bubbles:!0,cancelable:!0});this.el.dispatchEvent(o)}this.callback(n)}},n.prototype.cancel=function(){this.moved=!1,this.startX=0,this.startY=0},n.prototype.off=function(){this.el.removeEventListener(r.start,this,!1),this.el.removeEventListener(r.move,this,!1),this.el.removeEventListener(r.end,this,!1),null!==r.cancel&&this.el.removeEventListener(r.cancel,this,!1)},n.prototype.handleEvent=function(e){switch(e.type){case r.start:this.start(e);break;case r.move:this.move(e);break;case r.end:this.end(e);break;case r.cancel:this.cancel(e)}},n}();return o.on=function(e,t,n,o){var a=function(e,t,n,o){if(t===r.tap&&(r.hasTouch||r.forceTap)){var a=new v(e,n);return void b.push(a)}t===r.tap&&(t="click"),e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,n,o)};if(void 0===e.length)a(e,t,n,o);else for(var i=0,l=e.length;i<l;i++)a(e[i],t,n,o)},t.on=document.on=NodeList.prototype.on=HTMLElement.prototype.on=function(e,t,n){o.on(this,e,t,n)},o.off=function(e,t,n,o){var a=function(e,t,n,o){if(t!==r.tap||!r.hasTouch&&!r.forceTap)t===r.tap&&(t="click"),e.removeEventListener?e.removeEventListener(t,n,o):e.attachEvent&&e.detachEvent("on"+t,n,o);else for(var a=0,i=b.length;a<i;a++)if(b[a].el===e){b[a].off(),b.splice(a,1);break}};if(void 0===e.length)a(e,t,n,o);else for(var i=0,l=e.length;i<l;i++)a(e[i],t,n,o)},t.off=document.off=NodeList.prototype.off=HTMLElement.prototype.off=function(e,t,n){o.off(this,e,t,n)},r}(t.jQuery),o.tagManager=function(){if("undefined"!=typeof riot){var e=[];return{addTag:function(t,n){t[0].tagName=n,e.push(t[0])},getAll:function(){return e},trigger:function(t,n,o){for(var a=[],i=e.length-1;i>=0;i--)if(e[i].tagName===t){a.push(n);var r=a.concat(o);e[i].trigger.apply(this,r);break}}}}}(),o.options=function(e){var t=!1;"object"==typeof e.i18n&&null!==e.i18n&&(o.i18n(e.i18n),t=!0),e.navigator.useI18n=t,o.navigator(e.navigator)},o.alert=function(e,t,n,a){return o.dialog().alert(e,t,n,a)},o.confirm=function(e,t,n,a,i){return o.dialog().confirm(e,t,n,a,i)},o.prompt=function(e,t,n,a,i){return o.dialog().prompt(e,t,n,a,i)},o.passPrompt=function(e,t,n,a,i){return o.dialog().passPrompt(e,t,n,a,i)},o.indicator=function(e,t){return o.dialog().indicator(e,t)},o.updateLocale=function(e){var t="undefined"!=typeof riot;o.i18n().setPreference(e).getAll(function(e){if(t){for(var n=o.tagManager.getAll(),a=n.length-1;a>=0;a--)n[a].i18n=e;riot.update()}else o.i18n().bind()})},t.phonon=o,e.exports=o}("undefined"!=typeof window?window:this),function(e,t){function n(e){if(u.initCalled)throw new Error("The i18n module has already been instantiated");"string"==typeof e.directory&&(e.directory=-1!==e.directory.indexOf("/",e.directory.length-"/".length)?e.directory:e.directory+"/");var t;for(t in e)u[t]=e[t];void 0!==e.use&&(u.loadJson=!1),u.initCalled=!0}function o(e){if(!u.initCalled)throw new Error("Please, initialize The i18n module using the init method");if("function"!=typeof e)throw new Error("callback must be a function");var t=u.localePreferred?u.localePreferred:u.localeFallback;if(u.loadJson){if(null!==c)return void e(c);var n=new XMLHttpRequest;n.open("GET",u.directory+t+".json",!0),n.overrideMimeType&&n.overrideMimeType("application/json; charset=utf-8");var a=function(){u.localePreferred=null,o(function(t){c=t,e(t)})};n.onreadystatechange=function(){if(4===n.readyState&&(200===n.status||!n.status&&n.responseText.length))try{var t=JSON.parse(n.responseText);c=t,e(c)}catch(e){a()}else if(4===n.readyState&&200!==n.status&&(n.status||!n.responseText.length)){if(!u.localePreferred)throw new Error("The default locale ["+u.directory+u.localeFallback+".json] file is not found");a()}},n.send("")}else{var i=u.use[t];void 0===i&&(i=u.use[u.localeFallback]),e(i)}}function a(e,t){if("string"!=typeof e&&!(e instanceof Array))throw new Error("key must be a string or an array");var n=e instanceof Array;if(u.loadJson&&null!==c)if(n){for(var a=e.length,i=a-1,r={};i>=0;i--)r[e[i]]=c[e[i]];t(r)}else t(c[e]);else o(function(o){if(n){for(var a=e.length,i=a-1,r={};i>=0;i--)r[e[i]]=o[e[i]];t(r)}else t(o[e])})}function i(e,n){var a=e||t,i=n;if(1===arguments.length&&"function"==typeof e&&(a=t,i=e),!f(a))throw new TypeError("Not valid element object "+a);var r=a.querySelectorAll("[data-i18n]");null===c?o(function(e){v(r,e),"function"==typeof i&&i()}):(v(r,c),"function"==typeof i&&i())}function r(e){if("string"!=typeof e)throw new Error("The language must be a string");return u.localePreferred=e,c=null,g}function l(){return u.localePreferred}function s(){return e.navigator.userLanguage||e.navigator.language}var c=null,u={localeFallback:null,localePreferred:e.navigator.userLanguage||e.navigator.language,directory:"./",initCalled:!1,loadJson:!0},f=function(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},p=function(e,t){"textContent"in e?e.textContent=t:e.innerText=t},d=function(e,t){e.innerHTML=t},h=function(e,t){e.value=t},b=function(e,t){e.setAttribute("placeholder",t)},v=function(e,t){for(var n=e.length-1;n>=0;n--)for(var o,a=e[n],i=a.getAttribute("data-i18n").trim(),r=/(?:\s|^)(\w+):\s*(.*?)(?=\s+\w+:|$)/g;o=r.exec(i);){var l=o[1].trim(),s=o[2].trim().replace(",","");if(void 0!==t[s])if("text"===l)p(a,t[s]);else if("html"===l)d(a,t[s]);else if("value"===l)h(a,t[s]);else{if("placeholder"!==l)throw new Error("The property: "+l+" is unknown");b(a,t[s])}else console.error("The value: "+s+" does not exist in the JSON file")}},g={};g.init=n,g.getAll=o,g.get=a,g.bind=i,g.setPreference=r,g.getPreference=l,g.getLocale=s,phonon.i18n=function(e){return"object"==typeof e&&n(e),{getAll:function(e){return o(e),this},get:function(e,t){return a(e,t),this},bind:function(e,t){return i(e,t),this},setPreference:function(e){return r(e),this},getPreference:function(){return l()},getLocale:function(){return s()}}}}(window,document),function(e,t,n){"use strict";function o(t,n){void 0===e.phononDOM[t]&&(e.phononDOM[t]={});var o='var page = window.phononDOM["'+t+'"];';o+=n;var a=document.createElement("script");a.text=o,document.head.appendChild(a).parentNode.removeChild(a)}function a(){if(H.animatePages){var e=this;e.classList.remove("page-sliding"),e.classList.remove("left"),e.off(n.event.animationEnd,a,!1),e.classList.remove("app-active")}u(B),f(N),D=!1}function i(){if(H.animatePages){var e=this;e.classList.remove("page-sliding"),e.classList.remove("right"),e.off(n.event.animationEnd,i,!1),e.classList.remove("app-active")}u(B),f(N),D=!1}function r(t,n,o){var a={detail:{page:n},bubbles:!0,cancelable:!0};void 0!==o&&(a.detail.req=o);var i=new e.CustomEvent(t,a);document.dispatchEvent(i)}function l(e,t,n){for(var o=0,a=t.length;o<a;o++){var i=t[o];i.event===e&&"function"==typeof i.callback&&i.callback(n)}}function s(t){F&&n.tagManager.trigger(t,"create"),r("pagecreated",t);var o=X(t);if(o.activity instanceof G&&"function"==typeof o.activity.onCreateCallback&&o.activity.onCreateCallback(),l("create",o.callbackRegistered),"object"==typeof e.phononDOM[o.name]){var a=e.phononDOM[o.name].onCreate;"function"==typeof a&&a()}}function c(t){var o=X(t);e.setTimeout(function(){if(F&&n.tagManager.trigger(t,"ready"),r("pageopened",t),o.activity instanceof G&&"function"==typeof o.activity.onReadyCallback&&o.activity.onReadyCallback(),l("ready",o.callbackRegistered),"object"==typeof e.phononDOM[o.name]){var a=e.phononDOM[o.name].onReady;"function"==typeof a&&a()}},o.readyDelay)}function u(t){F&&n.tagManager.trigger(t,"transitionend"),r("pagetransitionend",t);var o=X(t);if(o.activity instanceof G&&"function"==typeof o.activity.onTransitionEndCallback&&o.activity.onTransitionEndCallback(),l("transitionend",o.callbackRegistered),"object"==typeof e.phononDOM[o.name]){var a=e.phononDOM[o.name].onTransitionEnd;"function"==typeof a&&a()}}function f(t){F&&n.tagManager.trigger(t,"hidden"),r("pagehidden",t);var o=X(t);if(o.activity instanceof G&&"function"==typeof o.activity.onHiddenCallback&&o.activity.onHiddenCallback(),l("hidden",o.callbackRegistered),"object"==typeof e.phononDOM[o.name]){var a=e.phononDOM[o.name].onHidden;"function"==typeof a&&a()}}function p(t,o){F&&n.tagManager.trigger(t,"tabchanged",o),r("pagetabchanged",t);var a=X(t);if(a.activity instanceof G&&"function"==typeof a.activity.onTabChangedCallback&&a.activity.onTabChangedCallback(o),l("tabchanged",a.callbackRegistered,o),"object"==typeof e.phononDOM[a.name]){var i=e.phononDOM[a.name].onTabChanged;"function"==typeof i&&i(o)}}function d(t,o,a){function i(){r("pageclosed",t),e.location.hash.split("#")[1]!==a&&H.useHash?e.location.hash=a:O(a)}if(!x()){var s=X(t);if(!s.async)return void i();var c={close:i};if(F&&n.tagManager.trigger(t,"close",c),s.activity instanceof G&&"function"==typeof s.activity.onCloseCallback&&s.activity.onCloseCallback(c),l("close",s.callbackRegistered,c),"object"==typeof e.phononDOM[s.name]){var u=e.phononDOM[s.name].onClose;"function"==typeof u&&u(c)}}}function h(t,o){if(void 0!==o){F&&n.tagManager.trigger(t,"hashchanged",o),r("pagehash",t,o);var a=X(t);if(a.activity instanceof G&&"function"==typeof a.activity.onHashChangedCallback&&a.activity.onHashChangedCallback(o),l("hashchanged",a.callbackRegistered,o),"object"==typeof e.phononDOM[a.name]){var i=e.phononDOM[a.name].onHashChanged;"function"==typeof i&&i(o)}}}function b(e,t){"tabchanged"===e&&p(t.page,t.tabNumber)}function v(e,a,i){if(F&&t.compile(function(){H.useI18n?n.i18n().getAll(function(o){n.tagManager.addTag(t.mount(e,{i18n:o}),e),a()}):(n.tagManager.addTag(t.mount(e,{i18n:null}),e),a())}),!F){var r=X(e);if(null!==r.content){if(null===r.nocache||null===r.showloader){!function(e){var t=$(e);r.nocache=!1,r.showloader=!1,"true"===t.getAttribute("data-nocache")&&(r.nocache=!0),"true"===t.getAttribute("data-loader")&&(r.showloader=!0)}(e)}r.showloader&&document.body.classList.add("loading"),g(r.content,function(t){r.showloader&&document.body.classList.remove("loading");var i=$(e),l=document.createElement("div");l.innerHTML=t;var s=l.querySelector(e);if(null===s)throw new Error("Error with "+r.content+" : the template for "+e+" must start with the parent node <"+e+' class="app-page">');for(var c=s.attributes,u=c.length-1;u>=0;u--){var f=c.item(u);"class"!==f.nodeName&&"app-page"!==f.nodeValue&&i.setAttribute(f.nodeName,f.nodeValue)}var p=function(e){var t=e.getElementsByTagName("script");t=Array.prototype.slice.call(t);for(var n=0;n<t.length;n++){var a=t[n].getAttribute("type");"text/javascript"!==a&&null!==a||o(r.name,t[n].innerHTML)}};H.useI18n?n.i18n().bind(s,function(){i.innerHTML=s.innerHTML,p(l),a()}):(i.innerHTML=s.innerHTML,p(l),a())},i)}else a()}}function g(e,t,n){var o=new XMLHttpRequest;o.overrideMimeType&&o.overrideMimeType("text/html; charset=utf-8"),o.onreadystatechange=function(){4===o.readyState&&(200===o.status||!o.status&&o.responseText.length)&&t(o.responseText,H,e)},"string"!=typeof n?(o.open("GET",H.templateRootDirectory+e,!0),o.send("")):(o.open("POST",H.templateRootDirectory+e,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(n))}function m(e,t){t="object"==typeof t?t:{};var n,o={name:e,mounted:!1,async:!1,activity:null,content:null,readyDelay:1,callbackRegistered:[],nocache:null,showloader:null};for(n in t)o[n]=t[n];return o}function y(e,t){t="object"==typeof t?t:{};var n=X(e);if(null===n)return R.push(m(e,t));var o;for(o in t)n[o]=t[o];return!0}function x(){return!(void 0===n.dialog||!n.dialogUtil.closeActive())||(!(void 0===n.popover||!n.popoverUtil.closeActive())||(!(void 0===n.panel||!n.panelUtil.closeActive())||!(void 0===n.sidePanel||!n.sidePanelUtil.closeActive())))}function w(){var e={page:H.defaultPage,params:""};if(A.length>0){for(var t=-1,n=A.length-1;n>=0;n--)if(A[n].page===B){t=n-1;break}t>-1&&(e=A[t],A=A.slice(0,t))}return e}function S(t){var n,t=t||e.event,o=t.target,a="";if("object"==typeof o&&"FORM"==o.nodeName){var i;for(i=o.elements.length-1;i>=0;i--)if(n=o.elements[i],n.name&&"file"!=n.type&&"reset"!=n.type)if("select-multiple"==n.type)for(j=o.elements[i].options.length-1;j>=0;j--)n.options[j].selected&&(a+="&"+n.name+"="+encodeURIComponent(n.options[j].value).replace(/%20/g,"+"));else("submit"!=n.type&&"button"!=n.type||t.target==n)&&("checkbox"!=n.type&&"radio"!=n.type||n.checked)&&(a+="&"+n.name+"="+encodeURIComponent(n.value).replace(/%20/g,"+"))}return a.substr(1)}function E(e){W=!0;var t=e.target,n=null,o=!1,a="";if("submit"==e.type){var i=t.getAttribute("action");if(i.match(new RegExp("^#"+H.hashPrefix)))return e.preventDefault(),n=i.substr(1+H.hashPrefix.length),d(B,n,H.hashPrefix+n),k(n,function(){},S(e)),C(i.substr(1+H.hashPrefix.length))}for(;t&&t!==document;t=t.parentNode){var r=t.getAttribute("data-navigation");if(void 0!==t.href&&-1!==t.href.indexOf("#!")){o=!0;break}if(r){n=r;break}}if((!o||!H.useHash)&&(null!==n||o)){var l=H.defaultPage;if(null!==n)if("$previous-page"===n){var s=w();l=s.page,a=s.params}else l=n;else{var c=t.href.match("/#"+H.hashPrefix+"([A-Za-z0-9-.]+)?(.*)/");c&&(l=c[1],a=c[2])}var u=H.hashPrefix+l;""!==a&&(u=u+"/"+a,u=u.replace("//","/")),d(B,l,u)}}function M(e,t){var o=$(e),r=$(t);r.classList.add("app-active"),H.animatePages?(o.classList.add("page-sliding"),I?(o.classList.add("left"),o.on(n.event.animationEnd,a,!1)):(o.classList.add("right"),o.on(n.event.animationEnd,i,!1))):(o.classList.remove("app-active"),I?a():i());for(var l=r.querySelectorAll(".content"),s=l.length-1;s>=0;s--){var c=l[s];null!==c&&0!==c.scrollTop&&(c.scrollTop=0)}t===H.defaultPage&&(A=[])}function k(e,t,o){if(D&&"function"==typeof t)return t();var a=X(e);L&&(D=!0,N=B,B=e),!a.mounted||a.nocache?v(a.name,function(){if(a.mounted=!0,s(e),c(e),L||n.dispatchGlobalReady(),L&&M(N,e),!L){L=!0;var o=$(e);o.classList.contains("app-active")||o.classList.add("app-active")}"function"==typeof t&&t()},o):(c(e),M(N,e),"function"==typeof t&&t())}function P(e){"string"==typeof e.templateRootDirectory&&""!==e.templateRootDirectory&&(e.templateRootDirectory=-1!==e.templateRootDirectory.indexOf("/",e.templateRootDirectory.length-"/".length)?e.templateRootDirectory:e.templateRootDirectory+"/"),"object"==typeof e.hashPrefix&&(e.hashPrefix="");var t;for(t in e)H[t]=e[t];H.enableBrowserBackButton&&(W=!0);for(var n=document.querySelectorAll("[data-page]"),o=n.length-1;o>=0;o--){var a=n[o];a.classList.contains("app-page")||a.classList.add("app-page"),y(a.tagName.toLowerCase())}}function T(){if(L)throw new Error("The app has been already started");var e="";n.device.os&&(e=n.device.os.toLowerCase());var t="web";"android"===e?t="android":"ios"===e&&(t="ios"),document.body.classList.contains(t)||document.body.classList.add(t),O()}function C(t,n){var o=X(B),a=X(t);if(!a)throw new Error("The following page: "+t+" does not exists");var i=H.hashPrefix+a.name;void 0!==n&&(i=H.hashPrefix+a.name+"/"+n),o.async?d(B,a.name,i):-1===e.location.hash.indexOf(i)&&H.useHash&&(e.location.hash=i)}function O(t,n){var o,a="string"==typeof t?t:e.location.href.split("#")[1]||"",i=a.split("/"),r=i.slice(1,i.length),l=i[0],s=H.hashPrefix.indexOf("/");-1!==s?(l=void 0===i[1]?"":i[1],r=i.slice(2,i.length),o=l.substring(s+1,l.length)):o=l.substring(H.hashPrefix.length,l.length);var c=X(o);if(L||c)!L&&c&&(B=c.name);else if(B=H.defaultPage,c=X(H.defaultPage),H.useHash)return void(e.location.hash=H.hashPrefix+H.defaultPage);if(c){if(x(),c.name===B&&L)return void h(c.name,r);if(L&&!W)return;for(var u=!1,f=A.length-1;f>=0;f--)if(A[f].page===c.name){u=!0;break}if(A.length>0?c.name===H.defaultPage&&(I=!1):I=!0,A.length>1&&A[A.length-2].page===c.name&&(I=!1),!u){var p=r.join("/");A.push({page:c.name,params:p})}"function"!=typeof c.callback||c.mounted||c.callback(c.activity),c.mounted?(k(c.name,null,n),h(c.name,r)):k(c.name,function(){h(c.name,r)},n),H.enableBrowserBackButton||(W=!1)}}e.phononDOM={};var R=[],A=[],L=!1,D=!1,B=null,N=null,I=!0,W=!1,F=void 0!==t,H={defaultPage:null,defaultTemplateExtension:null,hashPrefix:"!",animatePages:!0,templateRootDirectory:"",useI18n:!0,enableBrowserBackButton:!1,useHash:!0},G=function(){function e(e){if("object"==typeof e){var t;for(t in e)void 0!==this[t]&&"constructor"!==this[t]&&(this[t+"Callback"]=e[t])}}return e.prototype.onCreate=function(e){this.onCreateCallback=e},e.prototype.onReady=function(e){this.onReadyCallback=e},e.prototype.onClose=function(e){this.onCloseCallback=function(t){e(t)}},e.prototype.onHidden=function(e){this.onHiddenCallback=e},e.prototype.onTransitionEnd=function(e){this.onTransitionEndCallback=e},e.prototype.onHashChanged=function(e){this.onHashChangedCallback=function(t){e.apply(this,t)}},e.prototype.onTabChanged=function(e){this.onTabChangedCallback=function(t){e(t)}},e}(),X=function(e){for(var t=R.length-1;t>=0;t--)if(R[t].name===e)return R[t];return null},$=function(e){for(var t=document.querySelectorAll("[data-page]"),n=t.length-1,o=null;n>=0;n--){var a=t[n].getAttribute("data-alias");if(t[n].tagName.toLowerCase()===e||a===e){o=t[n];break}}return o};document.on("tap",E),document.on("submit",E),H.useHash&&e.addEventListener("hashchange",O),document.on("backbutton",function(){if(!x()){var e=w();d(B,e.page,H.hashPrefix+e.page+"/"+e.params)}}),n.navigator=function(t){return"object"==typeof t&&P(t),{currentPage:B,previousPage:N,start:T,changePage:function(t,n){W=!0;var o=x()?400:1;e.setTimeout(function(){if("$previous-page"==t){var e=w();e&&(t=e.page,n=e.params)}C(t,n)},o)},on:function(e,t){if("string"!=typeof e.page)throw new Error("Page name must be a string");if(void 0!==e.preventClose&&"boolean"!=typeof e.preventClose)throw new Error("preventClose option must be a boolean");if(void 0!==e.readyDelay&&"number"!=typeof e.readyDelay)throw new Error("readyDelay option must be a number");null!==typeof e.content&&"string"==typeof H.defaultTemplateExtension&&(e.content=e.page+"."+H.defaultTemplateExtension);var n=X(e.page);null!==n||(n=m(e.page)),n.activity="function"==typeof t||"object"==typeof t?new G(t):null,n.callback=t,n.async="boolean"==typeof e.preventClose&&e.preventClose,n.content="string"==typeof e.content?e.content:null,n.readyDelay="number"==typeof e.readyDelay?e.readyDelay:1,y(e.page.toLowerCase(),n)},onPage:function(e){if("string"!=typeof e)throw new Error("PageName must be a string");return y(e,{}),{addEvent:function(t,n){X(e).callbackRegistered.push({event:t,callback:n})}}},callCallback:b}}}("undefined"!=typeof window?window:this,"undefined"!=typeof riot?riot:void 0,phonon)}).call(t,n(32)(e),n(33))},32:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},33:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}},[30]);