"use strict";var precacheConfig=[["/pique/index.html","f45d0ae76acf5275b27507c97cc36f7d"],["/pique/static/css/main.640a533b.css","ea4d422c34ba05e593c2a17420070f49"],["/pique/static/js/main.1c693218.js","35e716ec3faffa755f82f84ecea01e04"],["/pique/static/media/aboutus.f040d55a.svg","f040d55a7684626d39651de1fa5c4851"],["/pique/static/media/bg.f52a79da.svg","f52a79da7f1cafd9c655a85bd76dd69a"],["/pique/static/media/codesnippets.ad6de119.png","ad6de119e8f52133a3092ece88b9603a"],["/pique/static/media/footerBg.ed40b771.svg","ed40b771702495153b0036c1d47fa9c6"],["/pique/static/media/landingBg.9784be75.svg","9784be75974548dbf09987ee2342000e"],["/pique/static/media/navBg.bdb48d9c.svg","bdb48d9c51f59ca701865da9f520c1d0"],["/pique/static/media/portfolio.86e9b3fb.png","86e9b3fbd15d814142a54e8534a8cb67"],["/pique/static/media/screens.3033811e.svg","3033811ef2597050d6efa44b666976ed"],["/pique/static/media/speedReader.6b6b7503.png","6b6b7503d9f53b63035249f0657af2d3"],["/pique/static/media/spellingAnalyser.28af3fc9.png","28af3fc96cacb4371a45dd6f2baca4d3"],["/pique/static/media/todo.493e1010.png","493e10102f671ba45a17dbd94ad1b3b1"],["/pique/static/media/typingPracticer.e6d49e6e.png","e6d49e6e489ec2b59d9d1e65007e896b"],["/pique/static/media/ux.2e971047.svg","2e971047022d3bc08679666713206035"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/pique/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});