!function(e){function t(t){for(var i,a,d=t[0],l=t[1],s=t[2],u=0,h=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);h.length;)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,d=1;d<n.length;d++){var l=n[d];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={3:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var c=l;o.push([276,0]),n()}({2:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));n(3),n(17),n(26);var i=/iPhone/i,r=/iPod/i,o=/iPad/i,a=/\bAndroid(?:.+)Mobile\b/i,d=/Android/i,l=/\bAndroid(?:.+)SD4930UR\b/i,s=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,c=/Windows Phone/i,u=/\bWindows(?:.+)ARM\b/i,h=/BlackBerry/i,p=/BB10/i,b=/Opera Mini/i,f=/\b(CriOS|Chrome)(?:.+)Mobile/i,v=/Mobile(?:.+)Firefox\b/i;function g(e,t){return e.test(t)}var x={breakpoints:{phoneMinWidth:375,phoneLandscapeMinWidth:576,tabletMinWidth:768,smallDesktopMinWidth:1024,desktopMinWidth:1200,largeDesktopMinWidth:1400},initialWindowWidth:globalThis.innerWidth,isAnimated:!1,isRequestSent:!1,isMobileDevice:function(e){var t=e||("undefined"!==typeof navigator?navigator.userAgent:""),n=t.split("[FBAN");"undefined"!==typeof n[1]&&(t=n[0]),"undefined"!==typeof(n=t.split("Twitter"))[1]&&(t=n[0]);var x={apple:{phone:g(i,t)&&!g(c,t),ipod:g(r,t),tablet:!g(i,t)&&g(o,t)&&!g(c,t),device:(g(i,t)||g(r,t)||g(o,t))&&!g(c,t)},amazon:{phone:g(l,t),tablet:!g(l,t)&&g(s,t),device:g(l,t)||g(s,t)},android:{phone:!g(c,t)&&g(l,t)||!g(c,t)&&g(a,t),tablet:!g(c,t)&&!g(l,t)&&!g(a,t)&&(g(s,t)||g(d,t)),device:!g(c,t)&&(g(l,t)||g(s,t)||g(a,t)||g(d,t))||g(/\bokhttp\b/i,t)},windows:{phone:g(c,t),tablet:g(u,t),device:g(c,t)||g(u,t)},other:{blackberry:g(h,t),blackberry10:g(p,t),opera:g(b,t),firefox:g(v,t),chrome:g(f,t),device:g(h,t)||g(p,t)||g(b,t)||g(v,t)||g(f,t)}};return x.any=x.apple.device||x.android.device||x.windows.device||x.other.device,x.phone=x.apple.phone||x.android.phone||x.windows.phone,x.tablet=x.apple.tablet||x.android.tablet||x.windows.tablet,x}}},276:function(e,t,n){"use strict";n.r(t);n(30)},30:function(e,t,n){"use strict";n(27),n(19),n(20),n(3),n(47),n(29);var i=n(21);var r=n(2);function o(e){return e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight}function a(e){if("string"!==typeof e)return e;var t=e.lastIndexOf(" ");return~t?e.slice(0,t):e}var d=n(6),l=document.querySelector(".reviews-block__slider"),s=l.querySelector(".reviews-block__reviews-list"),c=l.querySelector(".slider__button_prev"),u=l.querySelector(".slider__button_next"),h=globalThis.innerWidth,p={container:s,prevButton:c,nextButton:u,nav:!0,navPosition:"bottom",loop:!0,mouseDrag:!0,swipeAngle:!1,speed:400,responsive:{0:_(1),768:{items:2,fixedWidth:!1,edgePadding:12,gutter:35},1024:{items:3},1200:{gutter:50}}},b=Object(i.a)(p);s.querySelectorAll(".review-card__text").forEach((function(e){e.dataset.cutted="",o(e)&&function(e){var t=e.textContent;e.textContent=t.slice(0,Math.round(e.clientHeight/e.scrollHeight*t.length)+50);for(;o(e);)e.textContent=a(e.textContent);e.textContent=e.textContent.slice(0,e.textContent.length-"\u0427\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e".length-1),e.textContent=e.textContent.trim(),e.textContent=a(e.textContent);var n=t.slice(e.textContent.length);e.textContent+=".. ";var i=e.textContent;e.textContent="",w(e,i,"review-card__remaining-text"),w(e,n,"review-card__hidden-text","hidden"),r=e,d=document.createElement("a"),d.href="#",d.textContent="\u0427\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",d.classList.add("review-card__expand-button","link","link_secondary"),r.appendChild(d);var r,d}(e)}));var f,v,g,x,y=(f=function(){var e;globalThis.innerWidth!==h&&(e={isMobile:!1,isTablet:!1,isDesktop:!1},globalThis.innerWidth<r.a.breakpoints.tabletMinWidth?e.isMobile=!0:globalThis.innerWidth>=r.a.breakpoints.tabletMinWidth&&globalThis.innerWidth<r.a.breakpoints.desktopMinWidth?e.isTablet=!0:e.isDesktop=!0,e).isMobile&&(h=globalThis.innerWidth,p.responsive[0]=_(1),b.destroy(),b=b.rebuild())},v=400,function(){var e=this,t=arguments,n=function(){x=null,g||f.apply(e,t)},i=g&&!x;clearTimeout(x),x=setTimeout(n,v),i&&f.apply(e,t)});function _(e){var t={items:e};return t.fixedWidth=2*Math.round(.74*globalThis.innerWidth/2),t.edgePadding=(globalThis.innerWidth-t.fixedWidth)/2,t.gutter=Math.round(.065*globalThis.innerWidth),t}function w(e,t){var n=document.createElement("span");n.textContent=t;for(var i=arguments.length,r=new Array(i>2?i-2:0),o=2;o<i;o++)r[o-2]=arguments[o];r.forEach((function(e){n.classList.add(e)})),e.appendChild(n)}s.addEventListener("click",(function(e){if(!e.target.classList.contains("review-card__expand-button"))return;e.preventDefault();var t=e.target.closest(".review-card__text"),n=t.querySelector(".review-card__remaining-text"),i=t.querySelector(".review-card__hidden-text");n.textContent=n.textContent.slice(0,n.textContent.lastIndexOf("..")),e.target.classList.add("hidden"),i.classList.remove("hidden"),Object(d.a)(t,!0),delete t.dataset.cutted})),b.events.on("indexChanged",(function(){s.querySelectorAll(".review-card__text:not([data-cutted])").forEach((function(e){e.querySelector(".review-card__remaining-text").textContent+=".. ",e.querySelector(".review-card__hidden-text").classList.add("hidden"),e.querySelector(".review-card__expand-button").classList.remove("hidden"),e.dataset.cutted=""}))})),globalThis.addEventListener("resize",y)},6:function(e,t,n){"use strict";function i(e,t){e.scrollHeight!==e.clientHeight&&(t&&e.addEventListener("transitionend",(function t(){e.style.maxHeight=null,""===e.getAttribute("style")&&e.removeAttribute("style");e.removeEventListener("transitionend",t)})),e.style.maxHeight="".concat(e.scrollHeight,"px"))}n.d(t,"a",(function(){return i}))}});