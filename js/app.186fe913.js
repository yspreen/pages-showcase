(function(e){function t(t){for(var n,c,o=t[0],r=t[1],l=t[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},s=[];function c(e){return o.p+"js/"+({sleep:"sleep",tinnitus:"tinnitus"}[e]||e)+"."+{sleep:"066a08bf",tinnitus:"ee80e367"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i=a[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=n);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=c(e);var l=new Error;s=function(t){r.onerror=r.onload=null,clearTimeout(d);var i=a[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,i[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:r})}),12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pages-showcase/",o.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"090c":function(e,t,i){},2744:function(e,t,i){"use strict";i("090c")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),a={class:"navigation text-end"},s=Object(n["h"])("Home"),c=Object(n["h"])("Sleep"),o=Object(n["h"])("Tinnitus"),r=Object(n["i"])("a",{href:"javascript:void(0)",class:"navigation-link intl"},[Object(n["i"])("i",{class:"fas fa-language"})],-1);function l(e,t,i,l,d,u){var b=Object(n["w"])("router-link"),p=Object(n["w"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",a,[Object(n["i"])(b,{to:"/",class:"navigation-link"},{default:Object(n["F"])((function(){return[s]})),_:1}),Object(n["i"])(b,{to:"/sleep",class:"navigation-link"},{default:Object(n["F"])((function(){return[c]})),_:1}),Object(n["i"])(b,{to:"/tinnitus",class:"navigation-link"},{default:Object(n["F"])((function(){return[o]})),_:1}),r]),Object(n["i"])(p)],64)}var d={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0,this.refreshApp()},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},u={mixins:[d]};i("68c6");u.render=l;var b=u,p=i("9483");Object(p["a"])("".concat("/pages-showcase/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});i("d3b7"),i("3ca3"),i("ddb0");var h=i("6c02"),f=i("ade3"),m=(i("caad"),i("6b8a")),v=i.n(m);Object(n["x"])("data-v-395aad64");var j={class:"home container-fluid"},g=Object(n["i"])("div",{class:"text-center"},[Object(n["i"])("img",{src:v.a,class:"logo"})],-1),O=Object(n["i"])("h1",{class:"display-1 title text-center no-cursor"},"Tinus",-1),w={class:"text-center margin-after"},y=Object(n["h"])(" Watch Video "),k=Object(n["i"])("i",{class:"fas fa-play"},null,-1),x=Object(n["h"])(" How It Works "),I=Object(n["i"])("i",{class:"fas fa-lightbulb"},null,-1),C={class:"d-flex dark-section row"},B={class:"col-12 p-0"},S={class:"container smaller"},A=Object(n["g"])('<div class="row" data-v-395aad64><div class="col-3 position-relative" data-v-395aad64><span class="list-item-wrapper" data-v-395aad64><i class="fas fa-compact-disc fa-spin list-item" data-v-395aad64></i></span></div><div class="col-9" data-v-395aad64><h2 class="item-heading" data-v-395aad64>Music Helps You Fall Asleep</h2><p class="item-body" data-v-395aad64> Research proves that music, podcasts and audiobooks can help you fall asleep faster. Especially if you have stress-related sleeping disorders or chronic ear noises. </p></div></div><div class="row" data-v-395aad64><div class="col-3 position-relative" data-v-395aad64><span class="list-item-wrapper" data-v-395aad64><i class="fas fa-headphones list-item wiggle" data-v-395aad64></i></span></div><div class="col-9" data-v-395aad64><h2 class="item-heading" data-v-395aad64>Headphones Wake You Up</h2><p class="item-body" data-v-395aad64> Headphones can make you wake up 8x more often throughout the night, according to some sleeping studies. </p></div></div>',2),E={class:"row"},F={class:"col-3 position-relative"},M={class:"list-item-wrapper"},T={class:"fas fa-volume-up list-item"},L={class:"fas fa-volume-down list-item",style:{"padding-right":"0.375em"}},N={class:"fas fa-volume-mute list-item",style:{"padding-right":"0.125em"}},_=Object(n["i"])("div",{class:"col-9"},[Object(n["i"])("h2",{class:"item-heading"},"Bone Conducting Speakers"),Object(n["i"])("p",{class:"item-body"}," Using innovation from diving technology, we can completely isolate the sound without disturbing your partner. ")],-1),P={class:"col-12 text-center"},W={class:"btn fat btn-primary btn-lg","data-bs-toggle":"collapse","data-bs-target":"#collapseBuy","aria-expanded":"false","aria-controls":"collapseBuy",ref:"collapseBuy"},H={class:"black row collapse-content"},G=Object(n["i"])("h1",{class:"text-center"},"Test the Prototype",-1),V=Object(n["h"])(" We're in the second phase of iterating our prototype, and looking for people interested in giving it a go and provide feedback. It's free! We're currently testing in the following cities, click a location to join the waiting list: "),D={class:""},R=Object(n["h"])(" Not in your city yet? You can "),U=Object(n["h"])(" with your current location and we'll get there as soon as we can! "),q={class:"text-center"},z={class:"w-100"},$=Object(n["h"])(" Send "),Y=Object(n["i"])("i",{class:"fas fa-paper-plane"},null,-1),J={class:"d-flex light-section row",ref:"collapseBuyAfter"},Q={class:"col-12 p-0"},K={class:"container smaller scroll-section"},X={class:"row scrolling-row"},Z={ref:"scrollingImage",class:"col-12 col-sm-6"},ee={class:"col-12 col-sm-6"},te={ref:"howItWorksScroll",class:"item-heading"},ie=Object(n["g"])('<p class="item-body ps-2" data-v-395aad64> Research proves that music, podcasts and audiobooks can help you fall asleep faster. Especially if you have stress-related sleeping disorders or chronic ear noises. </p><h2 class="item-heading" data-v-395aad64>Carbon Plate</h2><p class="item-body ps-2" data-v-395aad64> Headphones can make you wake up 8x more often throughout the night, according to some sleeping studies. </p><h2 class="item-heading" data-v-395aad64>Bone Conduction</h2><p class="item-body ps-2" data-v-395aad64> Using innovation from diving technology, we can completely isolate the sound without disturbing your partner. </p>',5),ne={class:"d-flex dark-section row"},ae={class:"col-12 px-0"},se={class:"feed-row"},ce={class:"w-100 text-center more"},oe=Object(n["h"])(" See All Sleep Articles "),re=Object(n["i"])("i",{class:"far fa-newspaper"},null,-1),le={class:"d-flex dark-section last-section row"},de={class:"col-12 px-0"},ue={class:"feed-row"},be={class:"w-100 text-center more"},pe=Object(n["h"])(" See All Tinnitus Articles "),he=Object(n["i"])("i",{class:"far fa-newspaper"},null,-1),fe=Object(n["i"])("div",{class:"d-flex darker-section row footer"},[Object(n["i"])("div",{class:"col-12 p-0"},[Object(n["i"])("div",{class:"container smaller"},[Object(n["i"])("div",{class:"d-flex"},[Object(n["i"])("a",{href:"/imprint",class:""},"Imprint"),Object(n["i"])("a",{href:"/contact",class:""},"Contact"),Object(n["i"])("a",{href:"/privacy",class:""},"Privacy Policy"),Object(n["i"])("div",{class:"social text-end"},[Object(n["i"])("i",{class:"fab fa-tiktok"}),Object(n["i"])("i",{class:"fab fa-instagram"}),Object(n["i"])("i",{class:"fab fa-facebook"}),Object(n["i"])("i",{class:"fab fa-twitter"})])])])])],-1),me={class:"modal-dialog modal-xl modal-dialog-centered"},ve={class:"modal-content"},je=Object(n["i"])("button",{class:"btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(n["i"])("i",{class:"fas fa-times"})],-1),ge={class:"modal-body"},Oe={class:"ratio ratio-16x9"},we={class:"position-fixed top-0 end-0",style:{"z-index":"5"}},ye={ref:"enteredToast",class:"toast hide",role:"alert","aria-live":"assertive","aria-atomic":"true"},ke=Object(n["i"])("div",{class:"toast-header"},[Object(n["i"])("strong",{class:"me-auto"},[Object(n["i"])("i",{class:"fas fa-check green"}),Object(n["h"])(" Success")]),Object(n["i"])("small",null,"just now"),Object(n["i"])("button",{class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),xe=Object(n["i"])("div",{class:"toast-body"}," We got your message and will get back soon! ",-1);function Ie(e,t,i,a,s,c){var o=Object(n["w"])("feedArticle"),r=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",j,[g,O,Object(n["i"])("div",w,[Object(n["i"])("button",{class:"btn main fat btn-primary btn-lg me-2 mb-2","data-bs-toggle":"modal","data-bs-target":"#videoModal",onClick:t[1]||(t[1]=function(e){return c.watchVideo("dQw4w9WgXcQ")})},[y,k]),Object(n["i"])("button",{class:"btn second fat btn-primary-light btn-lg",onClick:t[2]||(t[2]=function(){return c.howItWorks&&c.howItWorks.apply(c,arguments)})},[x,I])]),Object(n["i"])("div",C,[Object(n["i"])("div",B,[Object(n["i"])("div",S,[A,Object(n["i"])("div",E,[Object(n["i"])("div",F,[Object(n["i"])("span",M,[Object(n["G"])(Object(n["i"])("i",T,null,512),[[n["D"],[0,2,4].includes(s.animationFrame)]]),Object(n["G"])(Object(n["i"])("i",L,null,512),[[n["D"],[1,3,5].includes(s.animationFrame)]]),Object(n["G"])(Object(n["i"])("i",N,null,512),[[n["D"],s.animationFrame>5]])])]),_])]),Object(n["i"])("div",P,[Object(n["i"])("button",W," Get the Tinus Pillow Now ",512)])])]),Object(n["i"])("div",Object(f["a"])({class:"collapse",id:"collapseBuy"},Object(n["A"])("shown.bs.collapse"),t[8]||(t[8]=function(){return c.showBuyCollapse&&c.showBuyCollapse.apply(c,arguments)})),[Object(n["i"])("div",H,[G,Object(n["i"])("div",null,[V,Object(n["i"])("ul",D,[Object(n["i"])("li",null,[Object(n["i"])("a",{href:"javascript:void(0)",onClick:t[3]||(t[3]=function(e){return c.selectCity("Munich")})},"Munich, Germany")])]),R,Object(n["i"])("a",{href:"javascript:void(0)",onClick:t[4]||(t[4]=function(e){return c.selectCity("")})},"apply"),U]),Object(n["i"])("div",q,[Object(n["G"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return s.cityInput=e}),class:"buy-input form-control",placeholder:"Location: i.e. Berlin, Germany"},null,512),[[n["C"],s.cityInput],[n["D"],s.showBuyLocation]]),Object(n["G"])(Object(n["i"])("input",{type:"email","onUpdate:modelValue":t[6]||(t[6]=function(e){return s.emailInput=e}),class:"buy-input form-control",placeholder:"Email: john@example.com"},null,512),[[n["C"],s.emailInput],[n["D"],s.showBuyFields]]),Object(n["G"])(Object(n["i"])("div",z,[Object(n["i"])("button",{class:"btn btn-primary",onClick:t[7]||(t[7]=function(){return c.sendBuy&&c.sendBuy.apply(c,arguments)})},[$,Y])],512),[[n["D"],s.showBuyFields]])])])],16),Object(n["i"])("div",J,[Object(n["i"])("div",Q,[Object(n["i"])("div",K,[Object(n["i"])("div",X,[Object(n["i"])("canvas",Z,null,512),Object(n["i"])("div",ee,[Object(n["i"])("h2",te,"Liquid Layer",512),ie])])])])],512),Object(n["i"])("div",ne,[Object(n["i"])("div",ae,[Object(n["i"])("div",se,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(s.sleepArticles,(function(e){return Object(n["r"])(),Object(n["e"])(o,{key:e.url,item:e},null,8,["item"])})),128))]),Object(n["i"])("div",ce,[Object(n["i"])(r,{to:"/sleep",class:"btn fat btn-secondary btn-lg"},{default:Object(n["F"])((function(){return[oe,re]})),_:1})])])]),Object(n["i"])("div",le,[Object(n["i"])("div",de,[Object(n["i"])("div",ue,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(s.tinnitusArticles,(function(e){return Object(n["r"])(),Object(n["e"])(o,{key:e.url,item:e},null,8,["item"])})),128))]),Object(n["i"])("div",be,[Object(n["i"])(r,{to:"/tinnitus",class:"btn fat btn-secondary btn-lg"},{default:Object(n["F"])((function(){return[pe,he]})),_:1})])])]),fe]),(Object(n["r"])(),Object(n["e"])(n["b"],{to:"body"},[Object(n["i"])("div",Object(f["a"])({class:"modal fade",id:"videoModal",tabindex:"-1","aria-labelledby":"videoModalLabel","aria-hidden":"true"},Object(n["A"])("hidden.bs.modal"),t[9]||(t[9]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)})),[Object(n["i"])("div",me,[Object(n["i"])("div",ve,[je,Object(n["i"])("div",ge,[Object(n["i"])("div",Oe,[Object(n["i"])("iframe",{src:s.videoSrc,allow:"autoplay;",allowfullscreen:""},null,8,["src"])])])])])],16),Object(n["i"])("div",we,[Object(n["i"])("div",ye,[ke,xe],512)])]))],64)}Object(n["x"])(null);i("99af"),i("fb6a");Object(n["x"])("data-v-f1e3241c");var Ce={key:0,class:"cont"},Be={key:1,class:"descr"},Se={key:2,class:"mb-0 head"},Ae={class:"text-end fst-italic author"};function Ee(e,t,i,a,s,c){return Object(n["r"])(),Object(n["e"])("div",{class:["article",{more:c.more}],title:c.url,onClick:t[1]||(t[1]=function(){return c.click&&c.click.apply(c,arguments)})},[c.hasMore?(Object(n["r"])(),Object(n["e"])("div",Ce,"+"+Object(n["z"])(c.more),1)):Object(n["f"])("",!0),c.hasMore?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("div",Be,[Object(n["i"])("img",{src:"https://source.unsplash.com/random/1920x1080?t=".concat(Math.random()),rel:"nofollow",style:{width:"100%"}},null,8,["src"])])),c.hasMore?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("div",Se,[Object(n["h"])(Object(n["z"])(c.title)+" ",1),Object(n["i"])("span",Ae,"–"+Object(n["z"])(c.author),1)]))],10,["title"])}Object(n["x"])(null);i("a4d3"),i("e01a");var Fe={props:["item"],computed:{title:function(){return this.item.title},date:function(){return this.item.date},author:function(){return this.item.author},description:function(){return this.item.description},url:function(){return this.item.url},more:function(){return this.item.more},hasMore:function(){return this.item.more&&!0}},methods:{click:function(){window.open(this.url,"_blank")}}};i("d683");Fe.render=Ee,Fe.__scopeId="data-v-f1e3241c";var Me=Fe,Te=i("bc3a"),Le=i.n(Te),Ne=(i("d81d"),i("a630"),{stripHtml:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},fetchRss:function(e,t){var i=this;fetch(e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var n=Array.from(e.getElementsByTagName("item")).map((function(e){return window.temp1=e,{title:e.getElementsByTagName("title")[0].childNodes[0].nodeValue,date:new Date(e.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue),author:e.getElementsByTagName("dc:creator")[0].childNodes[0].textContent,description:i.stripHtml(e.getElementsByTagName("description")[0].childNodes[0].textContent),url:e.getElementsByTagName("guid")[0].childNodes[0].nodeValue}}));n.sort((function(e,t){return t.date-e.date})),t(n)}))}}),_e=(i("4d90"),i("25f0"),{frameCount:104,html:document.documentElement,canvas:document.getElementById("scroll-image"),context:null,img:new Image,currentFrame:function(e){return"".concat("/pages-showcase/","img/frames/frame").concat(e.toString().padStart(3,"0"),".png")},preloadImages:function(){for(var e=0;e<this.frameCount;e++){var t=new Image;t.src=this.currentFrame(e)}},init:function(e){var t=this;this.canvas=e||this.canvas,this.context=this.canvas.getContext("2d"),this.img.src=this.currentFrame(0),this.canvas.width=790,this.canvas.height=1080,this.img.onload=function(){t.context.drawImage(t.img,0,0)},this.boundScrollListener=this.boundScrollListener||this.scrollListener.bind(this),window.addEventListener("scroll",this.boundScrollListener),this.preloadImages()},deInit:function(){window.removeEventListener("scroll",this.boundScrollListener)},boundScrollListener:null,scrollListener:function(){var e=this,t=(this.canvas.getBoundingClientRect().top+this.canvas.getBoundingClientRect().bottom)/2/window.innerHeight,i=2*(1-t),n=Math.max(0,Math.min(this.frameCount-1,Math.ceil(i*this.frameCount)));requestAnimationFrame((function(){return e.updateImage(n)}))},updateImage:function(e){this.img.src=this.currentFrame(e),this.context.drawImage(this.img,0,0)}}),Pe={name:"Home",components:{FeedArticle:Me},data:function(){return{animationFrame:0,animationLength:16,interval:null,videoSrc:"",cityInput:"",emailInput:"",showBuyFields:!1,showBuyLocation:!1,toast:null,sleepArticles:[],tinnitusArticles:[]}},methods:{watchVideo:function(e){this.videoSrc="https://www.youtube.com/embed/".concat(e,"?autoplay=1&modestbranding=1&showinfo=0")},closeModal:function(){this.videoSrc=""},showBuyCollapse:function(){var e=this;setTimeout((function(){e.$refs.collapseBuy.scrollIntoView({})}),1)},selectCity:function(e){var t=this;this.showBuyLocation=""==e,this.showBuyFields=!0,this.cityInput=e,setTimeout((function(){t.showBuyCollapse()}),1)},sendBuy:function(){this.toast.show(),Le.a.post("/api/waitlist",{email:this.emailInput,city:this.cityInput})},howItWorks:function(){this.$refs.howItWorksScroll.scrollIntoView({})}},mounted:function(){var e=this;this.interval=setInterval((function(){e.animationFrame=(e.animationFrame+1)%e.animationLength}),600),this.toast=new window.bootstrap.Toast(this.$refs.enteredToast),Ne.fetchRss("/pages-showcase/schlafen.rss",(function(t){return e.sleepArticles=[].concat(t.slice(0,5),[{more:5,url:"#/sleep"}])})),Ne.fetchRss("/pages-showcase/tinnitus.rss",(function(t){return e.tinnitusArticles=[].concat(t.slice(0,5),[{more:7,url:"#/tinnitus"}])})),_e.init(this.$refs.scrollingImage)},unmounted:function(){this.interval&&clearInterval(this.interval),_e.deInit()}};i("2744");Pe.render=Ie,Pe.__scopeId="data-v-395aad64";var We=Pe,He=[{path:"/",name:"Home",component:We},{path:"/sleep",name:"Sleep",component:function(){return i.e("sleep").then(i.bind(null,"36d9"))}},{path:"/tinnitus",name:"Tinnitus",component:function(){return i.e("tinnitus").then(i.bind(null,"10ec"))}}],Ge=Object(h["a"])({history:Object(h["b"])(),routes:He}),Ve=Ge;Object(n["d"])(b).use(Ve).mount("#app")},"68c6":function(e,t,i){"use strict";i("6d67")},"6b8a":function(e,t,i){e.exports=i.p+"img/logo-big.2cf07a0c.png"},"6d67":function(e,t,i){},d683:function(e,t,i){"use strict";i("e84c")},e84c:function(e,t,i){}});
//# sourceMappingURL=app.186fe913.js.map