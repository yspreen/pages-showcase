(function(e){function t(t){for(var a,c,o=t[0],l=t[1],r=t[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function c(e){return o.p+"js/"+({sleep:"sleep",tinnitus:"tinnitus"}[e]||e)+"."+{sleep:"71bd6a6d",tinnitus:"e7348ecc"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var r=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,n[1](r)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pages-showcase/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ef3":function(e,t,n){"use strict";n("428c")},"428c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={class:"navigation text-end"},s=Object(a["g"])("Home"),c=Object(a["g"])("Sleep"),o=Object(a["g"])("Tinnitus"),l=Object(a["h"])("a",{href:"javascript:void(0)",class:"navigation-link intl"},[Object(a["h"])("i",{class:"fas fa-language"})],-1);function r(e,t,n,r,d,u){var b=Object(a["v"])("router-link"),h=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",i,[Object(a["h"])(b,{to:"/",class:"navigation-link"},{default:Object(a["E"])((function(){return[s]})),_:1}),Object(a["h"])(b,{to:"/sleep",class:"navigation-link"},{default:Object(a["E"])((function(){return[c]})),_:1}),Object(a["h"])(b,{to:"/tinnitus",class:"navigation-link"},{default:Object(a["E"])((function(){return[o]})),_:1}),l]),Object(a["h"])(h)],64)}var d={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0,this.refreshApp()},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},u={mixins:[d]};n("70d0");u.render=r;var b=u,h=n("9483");Object(h["a"])("".concat("/pages-showcase/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("6c02"),f=n("ade3"),m=(n("caad"),n("6b8a")),v=n.n(m);Object(a["w"])("data-v-1d4b166e");var j={class:"home container-fluid"},O=Object(a["h"])("div",{class:"text-center mt-5 mb-3"},[Object(a["h"])("img",{src:v.a,class:"logo"})],-1),g=Object(a["h"])("h1",{class:"display-1 title text-center"},"Tinus",-1),y={class:"text-center margin-after"},w=Object(a["g"])(" Watch Video "),x=Object(a["h"])("i",{class:"fas fa-play"},null,-1),k=Object(a["h"])("button",{class:"btn fat btn-primary btn-lg mx-3"},[Object(a["g"])(" How It Works "),Object(a["h"])("i",{class:"fas fa-lightbulb"})],-1),B={class:"d-flex dark-section row m-n1 pb-5"},C={class:"col-12 p-0"},E={class:"container smaller"},A=Object(a["f"])('<div class="row pt-5 mt-3" data-v-1d4b166e><div class="col-3 position-relative" data-v-1d4b166e><span class="list-item-wrapper" data-v-1d4b166e><i class="fas fa-compact-disc fa-spin list-item" data-v-1d4b166e></i></span></div><div class="col-9" data-v-1d4b166e><h2 class="item-heading" data-v-1d4b166e>Music Helps You Fall Asleep</h2><p class="ps-1 item-body" data-v-1d4b166e> Research proves that music, podcasts and audiobooks can help you fall asleep faster. Especially if you have stress-related sleeping disorders or chronic ear noises. </p></div></div><div class="row py-4" data-v-1d4b166e><div class="col-3 position-relative" data-v-1d4b166e><span class="list-item-wrapper" data-v-1d4b166e><i class="fas fa-headphones list-item wiggle" data-v-1d4b166e></i></span></div><div class="col-9" data-v-1d4b166e><h2 class="item-heading" data-v-1d4b166e>Headphones Wake You Up</h2><p class="ps-1 item-body" data-v-1d4b166e> Headphones can make you wake up 8x more often throughout the night, according to some sleeping studies. </p></div></div>',2),T={class:"row pb-4"},F={class:"col-3 position-relative"},I={class:"list-item-wrapper"},S={class:"fas fa-volume-up list-item"},N={class:"fas fa-volume-down list-item",style:{"padding-right":"0.375em"}},_={class:"fas fa-volume-mute list-item",style:{"padding-right":"0.125em"}},M=Object(a["h"])("div",{class:"col-9"},[Object(a["h"])("h2",{class:"item-heading"},"Bone Conducting Speakers"),Object(a["h"])("p",{class:"ps-1 item-body"}," Using innovation from diving technology, we can completely isolate the sound without disturbing your partner. ")],-1),P={class:"col-12 text-center"},L={class:"btn fat btn-primary btn-lg mx-3 mb-5","data-bs-toggle":"collapse","data-bs-target":"#collapseBuy","aria-expanded":"false","aria-controls":"collapseBuy",ref:"collapseBuy"},q={class:"black row m-n1 p-3 pb-5"},H=Object(a["h"])("h1",{class:"mt-5 text-center"},"Test the Prototype",-1),V=Object(a["g"])(" We're in the second phase of iterating our prototype, and looking for people interested in giving it a go and provide feedback. It's free! We're currently testing in the following cities, click a location to join the waiting list: "),W={class:"my-3"},U=Object(a["g"])(" Not in your city yet? You can "),G=Object(a["g"])(" with your current location and we'll get there as soon as we can! "),R={class:"text-center"},z={class:"w-100"},D=Object(a["g"])(" Send "),Y=Object(a["h"])("i",{class:"fas fa-paper-plane"},null,-1),J={class:"d-flex row m-n1 pt-5 mt-5",ref:"collapseBuyAfter"},Q={class:"col-12 px-0 pt-5"},$={class:"pt-5 my-3 feed-row"},K={class:"w-100 text-center"},X=Object(a["g"])(" See All Sleep Articles "),Z={class:"d-flex row m-n1 mt-5 pb-5"},ee={class:"col-12 px-0 pb-5"},te={class:"pt-5 my-3 feed-row"},ne={class:"w-100 text-center"},ae=Object(a["g"])(" See All Tinnitus Articles "),ie=Object(a["h"])("div",{class:"d-flex darker-section row m-n1 pb-5"},[Object(a["h"])("div",{class:"col-12 p-0"},[Object(a["h"])("div",{class:"container smaller"},[Object(a["h"])("div",{class:"pt-5 mt-3 d-flex"},[Object(a["h"])("a",{href:"/imprint",class:"mx-2"},"Imprint"),Object(a["h"])("a",{href:"/contact",class:"mx-2"},"Contact"),Object(a["h"])("a",{href:"/privacy",class:"mx-2"},"Privacy Policy"),Object(a["h"])("div",{class:"social text-end"},[Object(a["h"])("i",{class:"fab fa-tiktok"}),Object(a["h"])("i",{class:"fab fa-instagram"}),Object(a["h"])("i",{class:"fab fa-facebook"}),Object(a["h"])("i",{class:"fab fa-twitter"})])])])])],-1),se={class:"modal-dialog modal-xl modal-dialog-centered"},ce={class:"modal-content"},oe=Object(a["h"])("button",{class:"btn btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"},[Object(a["h"])("i",{class:"fas fa-times"})],-1),le={class:"modal-body"},re={class:"ratio ratio-16x9"},de={class:"position-fixed top-0 end-0",style:{"z-index":"5"}},ue={ref:"enteredToast",class:"toast hide m-3",role:"alert","aria-live":"assertive","aria-atomic":"true"},be=Object(a["h"])("div",{class:"toast-header"},[Object(a["h"])("strong",{class:"me-auto"},[Object(a["h"])("i",{class:"fas fa-check green"}),Object(a["g"])(" Success")]),Object(a["h"])("small",null,"just now"),Object(a["h"])("button",{class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1),he=Object(a["h"])("div",{class:"toast-body"}," We got your message and will get back soon! ",-1);function pe(e,t,n,i,s,c){var o=Object(a["v"])("feedArticle"),l=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",j,[O,g,Object(a["h"])("div",y,[Object(a["h"])("button",{class:"btn fat btn-primary btn-lg mx-3 my-1","data-bs-toggle":"modal","data-bs-target":"#videoModal",onClick:t[1]||(t[1]=function(e){return c.watchVideo("dQw4w9WgXcQ")})},[w,x]),k]),Object(a["h"])("div",B,[Object(a["h"])("div",C,[Object(a["h"])("div",E,[A,Object(a["h"])("div",T,[Object(a["h"])("div",F,[Object(a["h"])("span",I,[Object(a["F"])(Object(a["h"])("i",S,null,512),[[a["C"],[0,2,4].includes(s.animationFrame)]]),Object(a["F"])(Object(a["h"])("i",N,null,512),[[a["C"],[1,3,5].includes(s.animationFrame)]]),Object(a["F"])(Object(a["h"])("i",_,null,512),[[a["C"],s.animationFrame>5]])])]),M])]),Object(a["h"])("div",P,[Object(a["h"])("button",L," Get the Tinus Pillow Now ",512)])])]),Object(a["h"])("div",Object(f["a"])({class:"collapse",id:"collapseBuy"},Object(a["z"])("shown.bs.collapse"),t[7]||(t[7]=function(){return c.showBuyCollapse&&c.showBuyCollapse.apply(c,arguments)})),[Object(a["h"])("div",q,[H,Object(a["h"])("div",null,[V,Object(a["h"])("ul",W,[Object(a["h"])("li",null,[Object(a["h"])("a",{href:"javascript:void(0)",onClick:t[2]||(t[2]=function(e){return c.selectCity("Munich")})},"Munich, Germany")])]),U,Object(a["h"])("a",{href:"javascript:void(0)",onClick:t[3]||(t[3]=function(e){return c.selectCity("")})},"apply"),G]),Object(a["h"])("div",R,[Object(a["F"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.cityInput=e}),class:"m-2 buy-input form-control",placeholder:"Location: i.e. Berlin, Germany"},null,512),[[a["B"],s.cityInput],[a["C"],s.showBuyLocation]]),Object(a["F"])(Object(a["h"])("input",{type:"email","onUpdate:modelValue":t[5]||(t[5]=function(e){return s.emailInput=e}),class:"m-2 buy-input form-control",placeholder:"Email: john@example.com"},null,512),[[a["B"],s.emailInput],[a["C"],s.showBuyFields]]),Object(a["F"])(Object(a["h"])("div",z,[Object(a["h"])("button",{class:"btn btn-primary mt-2",onClick:t[6]||(t[6]=function(){return c.sendBuy&&c.sendBuy.apply(c,arguments)})},[D,Y])],512),[[a["C"],s.showBuyFields]])])])],16),Object(a["h"])("div",J,[Object(a["h"])("div",Q,[Object(a["h"])("div",$,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(s.sleepArticles,(function(e){return Object(a["q"])(),Object(a["e"])(o,{key:e.url,item:e},null,8,["item"])})),128))]),Object(a["h"])("div",K,[Object(a["h"])(l,{to:"/sleep",class:"btn fat btn-primary-light btn-lg my-5"},{default:Object(a["E"])((function(){return[X]})),_:1})])])],512),Object(a["h"])("div",Z,[Object(a["h"])("div",ee,[Object(a["h"])("div",te,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(s.tinnitusArticles,(function(e){return Object(a["q"])(),Object(a["e"])(o,{key:e.url,item:e},null,8,["item"])})),128))]),Object(a["h"])("div",ne,[Object(a["h"])(l,{to:"/tinnitus",class:"btn fat btn-primary-light btn-lg my-5"},{default:Object(a["E"])((function(){return[ae]})),_:1})])])]),ie]),(Object(a["q"])(),Object(a["e"])(a["b"],{to:"body"},[Object(a["h"])("div",Object(f["a"])({class:"modal fade",id:"videoModal",tabindex:"-1","aria-labelledby":"videoModalLabel","aria-hidden":"true"},Object(a["z"])("hidden.bs.modal"),t[8]||(t[8]=function(){return c.closeModal&&c.closeModal.apply(c,arguments)})),[Object(a["h"])("div",se,[Object(a["h"])("div",ce,[oe,Object(a["h"])("div",le,[Object(a["h"])("div",re,[Object(a["h"])("iframe",{src:s.videoSrc,allow:"autoplay;",allowfullscreen:""},null,8,["src"])])])])])],16),Object(a["h"])("div",de,[Object(a["h"])("div",ue,[be,he],512)])]))],64)}Object(a["w"])(null);n("a4d3"),n("e01a");Object(a["w"])("data-v-0ad9dfd9");var fe={class:"mb-0"},me={class:"w-100 text-end mb-2 fst-italic"},ve={class:"ps-3"},je=Object(a["h"])("div",{class:"gradient"},null,-1);function Oe(e,t,n,i,s,c){return Object(a["q"])(),Object(a["e"])("div",{class:"article",title:c.url,onClick:t[1]||(t[1]=function(){return c.click&&c.click.apply(c,arguments)})},[Object(a["h"])("h3",fe,Object(a["y"])(c.title),1),Object(a["h"])("span",me,"–"+Object(a["y"])(c.author),1),Object(a["h"])("p",ve,Object(a["y"])(c.description),1),je],8,["title"])}Object(a["w"])(null);var ge={props:["item"],computed:{title:function(){return this.item.title},date:function(){return this.item.date},author:function(){return this.item.author},description:function(){return this.item.description},url:function(){return this.item.url}},methods:{click:function(){window.open(this.url,"_blank")}}};n("0ef3");ge.render=Oe,ge.__scopeId="data-v-0ad9dfd9";var ye=ge,we=n("bc3a"),xe=n.n(we),ke=(n("d81d"),n("a630"),{stripHtml:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},fetchRss:function(e,t){var n=this;fetch(e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var a=Array.from(e.getElementsByTagName("item")).map((function(e){return window.temp1=e,{title:e.getElementsByTagName("title")[0].childNodes[0].nodeValue,date:new Date(e.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue),author:e.getElementsByTagName("dc:creator")[0].childNodes[0].textContent,description:n.stripHtml(e.getElementsByTagName("description")[0].childNodes[0].textContent),url:e.getElementsByTagName("guid")[0].childNodes[0].nodeValue}}));a.sort((function(e,t){return t.date-e.date})),t(a)}))}}),Be={name:"Home",components:{FeedArticle:ye},data:function(){return{animationFrame:0,animationLength:16,interval:null,videoSrc:"",cityInput:"",emailInput:"",showBuyFields:!1,showBuyLocation:!1,toast:null,sleepArticles:[],tinnitusArticles:[]}},methods:{watchVideo:function(e){this.videoSrc="https://www.youtube.com/embed/".concat(e,"?autoplay=1&modestbranding=1&showinfo=0")},closeModal:function(){this.videoSrc=""},showBuyCollapse:function(){var e=this;setTimeout((function(){e.$refs.collapseBuy.scrollIntoView({})}),1)},selectCity:function(e){var t=this;this.showBuyLocation=""==e,this.showBuyFields=!0,this.cityInput=e,setTimeout((function(){t.showBuyCollapse()}),1)},sendBuy:function(){this.toast.show(),xe.a.post("/api/waitlist",{email:this.emailInput,city:this.cityInput})}},mounted:function(){var e=this;this.interval=setInterval((function(){e.animationFrame=(e.animationFrame+1)%e.animationLength}),600),this.toast=new window.bootstrap.Toast(this.$refs.enteredToast),ke.fetchRss("/pages-showcase/schlafen.rss",(function(t){return e.sleepArticles=t})),ke.fetchRss("/pages-showcase/tinnitus.rss",(function(t){return e.tinnitusArticles=t}))},unmounted:function(){this.interval&&clearInterval(this.interval)}};n("a687");Be.render=pe,Be.__scopeId="data-v-1d4b166e";var Ce=Be,Ee=[{path:"/",name:"Home",component:Ce},{path:"/sleep",name:"Sleep",component:function(){return n.e("sleep").then(n.bind(null,"36d9"))}},{path:"/tinnitus",name:"Tinnitus",component:function(){return n.e("tinnitus").then(n.bind(null,"10ec"))}}],Ae=Object(p["a"])({history:Object(p["b"])(),routes:Ee}),Te=Ae;Object(a["d"])(b).use(Te).mount("#app")},6646:function(e,t,n){},"6b8a":function(e,t,n){e.exports=n.p+"img/logo-big.2cf07a0c.png"},"70d0":function(e,t,n){"use strict";n("cb36")},a687:function(e,t,n){"use strict";n("6646")},cb36:function(e,t,n){}});
//# sourceMappingURL=app.6b35fc28.js.map