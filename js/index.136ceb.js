(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="cfokbnjo.gbbttAnpoubhf/ef";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
function em2(){var c="lpoubluAgbbtt.npoubhf/ef";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-580.png':'images/eingesetztes-bild-290.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-986-1.png':'images/eingesetztes-bild-493-1.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-374-1.png':'images/eingesetztes-bild-187-1.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-462.png':'images/eingesetztes-bild-231.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-788-2.png':'images/eingesetztes-bild-394-2.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-298-1.png':'images/eingesetztes-bild-149-1.png');}else{var a='data-src';var e=document.querySelector('.js6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-432.png':'images/eingesetztes-bild-216.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/eingesetztes-bild-622.png':'images/eingesetztes-bild-311.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-252.png':'images/eingesetztes-bild-126.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-64.png':'images/eingesetztes-bild-32.png');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-44.png':'images/eingesetztes-bild-22.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-44.png':'images/eingesetztes-bild-22.png');
var e=document.querySelector('.js5');e.setAttribute('src',(dpi>1)?'images/eingesetztes-bild-44.png':'images/eingesetztes-bild-22.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js6');ldsrcset('.js22 source');ldsrc('.js7');ldsrcset('.js23 source');$('.c12').Stickyfill();
var cs=new ConsentBanner('datenschutzerklarung.html',undefined,0,'faass-montage.de');cs.start(1);
});