(function(t){function e(e){for(var a,s,o=e[0],l=e[1],r=e[2],u=0,b=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,r||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},c=[];function s(t){return o.p+"js/"+({sleep:"sleep",tinnitus:"tinnitus"}[t]||t)+"."+{sleep:"71bd6a6d",tinnitus:"e7348ecc"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var r=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",r.name="ChunkLoadError",r.type=a,r.request=c,n[1](r)}i[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pages-showcase/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ef3":function(t,e,n){"use strict";n("428c")},4172:function(t,e,n){"use strict";n("e827")},"428c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={class:"navigation text-end"},c=Object(a["g"])("Home"),s=Object(a["g"])("Sleep"),o=Object(a["g"])("Tinnitus"),l=Object(a["h"])("a",{href:"javascript:void(0)",class:"navigation-link intl"},[Object(a["h"])("i",{class:"fas fa-language"})],-1);function r(t,e){var n=Object(a["v"])("router-link"),r=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",i,[Object(a["h"])(n,{to:"/",class:"navigation-link"},{default:Object(a["E"])((function(){return[c]})),_:1}),Object(a["h"])(n,{to:"/sleep",class:"navigation-link"},{default:Object(a["E"])((function(){return[s]})),_:1}),Object(a["h"])(n,{to:"/tinnitus",class:"navigation-link"},{default:Object(a["E"])((function(){return[o]})),_:1}),l]),Object(a["h"])(r)],64)}n("4172");const u={};u.render=r;var d=u,b=n("9483");Object(b["a"])("".concat("/pages-showcase/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("6c02"),h=n("ade3"),f=(n("caad"),n("6b8a")),m=n.n(f);Object(a["w"])("data-v-d0064484");var j={class:"home container-fluid"},v=Object(a["h"])("div",{class:"text-center mt-5 mb-3"},[Object(a["h"])("img",{src:m.a,class:"logo"})],-1),O=Object(a["h"])("h1",{class:"display-1 title text-center"},"Tinus",-1),g={class:"text-center margin-after"},y=Object(a["g"])(" Watch Video "),w=Object(a["h"])("i",{class:"fas fa-play"},null,-1),x=Object(a["h"])("button",{class:"btn fat btn-primary btn-lg mx-3"},[Object(a["g"])(" How It Works "),Object(a["h"])("i",{class:"fas fa-lightbulb"})],-1),k={class:"d-flex dark-section row m-n1 pb-5"},B={class:"col-12 p-0"},C={class:"container smaller"},T=Object(a["f"])('<div class="row pt-5 mt-3" data-v-d0064484><div class="col-3 position-relative" data-v-d0064484><span class="list-item-wrapper" data-v-d0064484><i class="fas fa-compact-disc fa-spin list-item" data-v-d0064484></i></span></div><div class="col-9" data-v-d0064484><h2 class="item-heading" data-v-d0064484>Music Helps You Fall Asleep</h2><p class="ps-1 item-body" data-v-d0064484> Research proves that music, podcasts and audiobooks can help you fall asleep faster. Especially if you have stress-related sleeping disorders or chronic ear noises. </p></div></div><div class="row py-4" data-v-d0064484><div class="col-3 position-relative" data-v-d0064484><span class="list-item-wrapper" data-v-d0064484><i class="fas fa-headphones list-item wiggle" data-v-d0064484></i></span></div><div class="col-9" data-v-d0064484><h2 class="item-heading" data-v-d0064484>Headphones Wake You Up</h2><p class="ps-1 item-body" data-v-d0064484> Headphones can make you wake up 8x more often throughout the night, according to some sleeping studies. </p></div></div>',2),A={class:"row pb-4"},F={class:"col-3 position-relative"},S={class:"list-item-wrapper"},E={class:"fas fa-volume-up list-item"},I={class:"fas fa-volume-down list-item",style:{"padding-right":"0.375em"}},N={class:"fas fa-volume-mute list-item",style:{"padding-right":"0.125em"}},_=Object(a["h"])("div",{class:"col-9"},[Object(a["h"])("h2",{class:"item-heading"},"Bone Conducting Speakers"),Object(a["h"])("p",{class:"ps-1 item-body"}," Using innovation from diving technology, we can completely isolate the sound without disturbing your partner. ")],-1),M=Object(a["h"])("div",{class:"col-12 text-center"},[Object(a["h"])("button",{class:"btn fat btn-primary btn-lg mx-3 mb-5",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseBuy","aria-expanded":"false","aria-controls":"collapseBuy"}," Get the Tinus Pillow Now ")],-1),P={class:"black row m-n1 p-3 pb-5"},q=Object(a["h"])("h1",{class:"mt-5 text-center"},"Test the Prototype",-1),H=Object(a["g"])(" We're in the second phase of iterating our prototype, and looking for people interested in giving it a go and provide feedback. It's free! We're currently testing in the following cities, click a location to join the waiting list: "),L={class:"my-3"},V=Object(a["g"])(" Not in your city yet? You can "),W=Object(a["g"])(" with your current location and we'll get there as soon as we can! "),R={class:"text-center"},U={class:"w-100"},z=Object(a["g"])(" Send "),D=Object(a["h"])("i",{class:"fas fa-paper-plane"},null,-1),G={class:"d-flex row m-n1 pt-5 mt-5"},Y={class:"col-12 px-0 pt-5",ref:"collapseBuyAfter"},J={class:"pt-5 my-3 feed-row"},Q={class:"w-100 text-center"},$=Object(a["g"])(" See All Sleep Articles "),X={class:"d-flex row m-n1 mt-5 pb-5"},K={class:"col-12 px-0 pb-5",ref:"collapseBuyAfter"},Z={class:"pt-5 my-3 feed-row"},tt={class:"w-100 text-center"},et=Object(a["g"])(" See All Tinnitus Articles "),nt=Object(a["h"])("div",{class:"d-flex darker-section row m-n1 pb-5"},[Object(a["h"])("div",{class:"col-12 p-0"},[Object(a["h"])("div",{class:"container smaller"},[Object(a["h"])("div",{class:"pt-5 mt-3 d-flex"},[Object(a["h"])("a",{href:"/imprint",class:"mx-2"},"Imprint"),Object(a["h"])("a",{href:"/contact",class:"mx-2"},"Contact"),Object(a["h"])("a",{href:"/privacy",class:"mx-2"},"Privacy Policy"),Object(a["h"])("div",{class:"social text-end"},[Object(a["h"])("i",{class:"fab fa-tiktok"}),Object(a["h"])("i",{class:"fab fa-instagram"}),Object(a["h"])("i",{class:"fab fa-facebook"}),Object(a["h"])("i",{class:"fab fa-twitter"})])])])])],-1),at={class:"modal-dialog modal-xl modal-dialog-centered"},it={class:"modal-content"},ct=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["h"])("i",{class:"fas fa-times"})],-1),st={class:"modal-body"},ot={class:"ratio ratio-16x9"},lt={class:"position-fixed top-0 end-0",style:{"z-index":"5"}},rt={ref:"enteredToast",class:"toast hide m-3",role:"alert","aria-live":"assertive","aria-atomic":"true"},ut=Object(a["h"])("div",{class:"toast-header"},[Object(a["h"])("strong",{class:"me-auto"},[Object(a["h"])("i",{class:"fas fa-check green"}),Object(a["g"])(" Success")]),Object(a["h"])("small",null,"just now"),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),dt=Object(a["h"])("div",{class:"toast-body"}," We got your message and will get back soon! ",-1);function bt(t,e,n,i,c,s){var o=Object(a["v"])("feedArticle"),l=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",j,[v,O,Object(a["h"])("div",g,[Object(a["h"])("button",{class:"btn fat btn-primary btn-lg mx-3 my-1","data-bs-toggle":"modal","data-bs-target":"#videoModal",onClick:e[1]||(e[1]=function(t){return s.watchVideo("dQw4w9WgXcQ")})},[y,w]),x]),Object(a["h"])("div",k,[Object(a["h"])("div",B,[Object(a["h"])("div",C,[T,Object(a["h"])("div",A,[Object(a["h"])("div",F,[Object(a["h"])("span",S,[Object(a["F"])(Object(a["h"])("i",E,null,512),[[a["C"],[0,2,4].includes(c.animationFrame)]]),Object(a["F"])(Object(a["h"])("i",I,null,512),[[a["C"],[1,3,5].includes(c.animationFrame)]]),Object(a["F"])(Object(a["h"])("i",N,null,512),[[a["C"],c.animationFrame>5]])])]),_])]),M])]),Object(a["h"])("div",Object(h["a"])({class:"collapse",id:"collapseBuy"},Object(a["z"])("shown.bs.collapse"),e[7]||(e[7]=function(){return s.showBuyCollapse&&s.showBuyCollapse.apply(s,arguments)})),[Object(a["h"])("div",P,[q,Object(a["h"])("div",null,[H,Object(a["h"])("ul",L,[Object(a["h"])("li",null,[Object(a["h"])("a",{href:"javascript:void(0)",onClick:e[2]||(e[2]=function(t){return s.selectCity("Munich")})},"Munich, Germany")])]),V,Object(a["h"])("a",{href:"javascript:void(0)",onClick:e[3]||(e[3]=function(t){return s.selectCity("")})},"apply"),W]),Object(a["h"])("div",R,[Object(a["F"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.cityInput=t}),class:"m-2 buy-input form-control",placeholder:"Location: i.e. Berlin, Germany"},null,512),[[a["B"],c.cityInput],[a["C"],c.showBuyLocation]]),Object(a["F"])(Object(a["h"])("input",{type:"email","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.emailInput=t}),class:"m-2 buy-input form-control",placeholder:"Email: john@example.com"},null,512),[[a["B"],c.emailInput],[a["C"],c.showBuyFields]]),Object(a["F"])(Object(a["h"])("div",U,[Object(a["h"])("button",{class:"btn btn-primary mt-2",onClick:e[6]||(e[6]=function(){return s.sendBuy&&s.sendBuy.apply(s,arguments)})},[z,D])],512),[[a["C"],c.showBuyFields]])])])],16),Object(a["h"])("div",G,[Object(a["h"])("div",Y,[Object(a["h"])("div",J,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(c.sleepArticles,(function(t){return Object(a["q"])(),Object(a["e"])(o,{key:t.url,item:t},null,8,["item"])})),128))]),Object(a["h"])("div",Q,[Object(a["h"])(l,{to:"/sleep",class:"btn fat btn-primary-light btn-lg my-5",type:"button"},{default:Object(a["E"])((function(){return[$]})),_:1})])],512)]),Object(a["h"])("div",X,[Object(a["h"])("div",K,[Object(a["h"])("div",Z,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(c.tinnitusArticles,(function(t){return Object(a["q"])(),Object(a["e"])(o,{key:t.url,item:t},null,8,["item"])})),128))]),Object(a["h"])("div",tt,[Object(a["h"])(l,{to:"/tinnitus",class:"btn fat btn-primary-light btn-lg my-5",type:"button"},{default:Object(a["E"])((function(){return[et]})),_:1})])],512)]),nt]),(Object(a["q"])(),Object(a["e"])(a["b"],{to:"body"},[Object(a["h"])("div",Object(h["a"])({class:"modal fade",id:"videoModal",tabindex:"-1","aria-labelledby":"videoModalLabel","aria-hidden":"true"},Object(a["z"])("hidden.bs.modal"),e[8]||(e[8]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)})),[Object(a["h"])("div",at,[Object(a["h"])("div",it,[ct,Object(a["h"])("div",st,[Object(a["h"])("div",ot,[Object(a["h"])("iframe",{src:c.videoSrc,allow:"autoplay;",allowfullscreen:""},null,8,["src"])])])])])],16),Object(a["h"])("div",lt,[Object(a["h"])("div",rt,[ut,dt],512)])]))],64)}Object(a["w"])(null);n("a4d3"),n("e01a");Object(a["w"])("data-v-0ad9dfd9");var pt={class:"mb-0"},ht={class:"w-100 text-end mb-2 fst-italic"},ft={class:"ps-3"},mt=Object(a["h"])("div",{class:"gradient"},null,-1);function jt(t,e,n,i,c,s){return Object(a["q"])(),Object(a["e"])("div",{class:"article",title:s.url,onClick:e[1]||(e[1]=function(){return s.click&&s.click.apply(s,arguments)})},[Object(a["h"])("h3",pt,Object(a["y"])(s.title),1),Object(a["h"])("span",ht,"–"+Object(a["y"])(s.author),1),Object(a["h"])("p",ft,Object(a["y"])(s.description),1),mt],8,["title"])}Object(a["w"])(null);var vt={props:["item"],computed:{title:function(){return this.item.title},date:function(){return this.item.date},author:function(){return this.item.author},description:function(){return this.item.description},url:function(){return this.item.url}},methods:{click:function(){window.open(this.url,"_blank")}}};n("0ef3");vt.render=jt,vt.__scopeId="data-v-0ad9dfd9";var Ot=vt,gt=n("bc3a"),yt=n.n(gt),wt=(n("d81d"),n("a630"),{stripHtml:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""},fetchRss:function(t,e){var n=this;fetch(t).then((function(t){return t.text()})).then((function(t){return(new window.DOMParser).parseFromString(t,"text/xml")})).then((function(t){var a=Array.from(t.getElementsByTagName("item")).map((function(t){return window.temp1=t,console.log(t),{title:t.getElementsByTagName("title")[0].childNodes[0].nodeValue,date:new Date(t.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue),author:t.getElementsByTagName("dc:creator")[0].childNodes[0].textContent,description:n.stripHtml(t.getElementsByTagName("description")[0].childNodes[0].textContent),url:t.getElementsByTagName("guid")[0].childNodes[0].nodeValue}}));a.sort((function(t,e){return e.date-t.date})),e(a)}))}}),xt={name:"Home",components:{FeedArticle:Ot},data:function(){return{animationFrame:0,animationLength:16,interval:null,videoSrc:"",cityInput:"",emailInput:"",showBuyFields:!1,showBuyLocation:!1,toast:null,sleepArticles:[],tinnitusArticles:[]}},methods:{watchVideo:function(t){this.videoSrc="https://www.youtube.com/embed/".concat(t,"?autoplay=1&modestbranding=1&showinfo=0")},closeModal:function(){this.videoSrc=""},showBuyCollapse:function(){this.$refs.collapseBuyAfter.scrollIntoView({})},selectCity:function(t){var e=this;this.showBuyLocation=""==t,this.showBuyFields=!0,this.cityInput=t,setTimeout((function(){e.showBuyCollapse()}),1)},sendBuy:function(){this.toast.show(),yt.a.post("/api/waitlist",{email:this.emailInput,city:this.cityInput})}},mounted:function(){var t=this;this.interval=setInterval((function(){t.animationFrame=(t.animationFrame+1)%t.animationLength}),600),this.toast=new window.bootstrap.Toast(this.$refs.enteredToast),wt.fetchRss("/pages-showcase/schlafen.rss",(function(e){return t.sleepArticles=e})),wt.fetchRss("/pages-showcase/tinnitus.rss",(function(e){return t.tinnitusArticles=e}))},unmounted:function(){this.interval&&clearInterval(this.interval)}};n("dc4f");xt.render=bt,xt.__scopeId="data-v-d0064484";var kt=xt,Bt=[{path:"/",name:"Home",component:kt},{path:"/sleep",name:"Sleep",component:function(){return n.e("sleep").then(n.bind(null,"36d9"))}},{path:"/tinnitus",name:"Tinnitus",component:function(){return n.e("tinnitus").then(n.bind(null,"10ec"))}}],Ct=Object(p["a"])({history:Object(p["b"])(),routes:Bt}),Tt=Ct;Object(a["d"])(d).use(Tt).mount("#app")},"6b8a":function(t,e,n){t.exports=n.p+"img/logo-big.2cf07a0c.png"},dc4f:function(t,e,n){"use strict";n("fc22")},e827:function(t,e,n){},fc22:function(t,e,n){}});
//# sourceMappingURL=app.09b7cafb.js.map