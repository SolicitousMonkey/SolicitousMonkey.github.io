if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const f=e=>r(e,d),n={module:{uri:d},exports:c,require:f};i[d]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/驱动开发框架/index.html",revision:"bfab3ac0109be3fa5bb87d689a5b1617"},{url:"2023/11/01/奇奇怪怪的碎碎念/image-20231101210351116.png",revision:"a7a8e883b79428f5a931a2abcc3a2526"},{url:"2023/11/01/奇奇怪怪的碎碎念/index.html",revision:"f49d4f6393a067a19e05123983bdcb4d"},{url:"2023/11/07/led驱动/index.html",revision:"9618d546a410dd897a1f950689c3b14e"},{url:"2023/11/10/按键驱动/index.html",revision:"883529ff692f0f8e93697e73fce9c2c9"},{url:"2023/11/17/笔记-Linux设备驱动开发详解/image-20231117114308618.png",revision:"f36bae65bb82e671e1286f02a6726229"},{url:"2023/11/17/笔记-Linux设备驱动开发详解/index.html",revision:"9c8171fe50382ab8e88f587287c92ce5"},{url:"2023/11/29/异常与中断/image-20231129164249697.png",revision:"dc7ac3eeee7ff34ce660ae09b6bed1d3"},{url:"2023/11/29/异常与中断/image-20231130154431818.png",revision:"434e13c6444d59289a578e25c4e3a1ee"},{url:"2023/11/29/异常与中断/index.html",revision:"47a7acfef8a1274fc5a2216d37d4332c"},{url:"2023/12/04/Linux中断编程/index.html",revision:"08458bdff6c82054abc519d666960500"},{url:"2023/12/04/用户线程和内核线程区别/index.html",revision:"6f0ebe3e2f46f7db60473818a62d91a7"},{url:"2023/12/04/进程上下文与中断上下文的区别/index.html",revision:"6073f4886a76852dfe50a580687d6d4a"},{url:"archives/2023/10/index.html",revision:"abd5f12ba79196810f95390fb2ece206"},{url:"archives/2023/11/index.html",revision:"78b7e9266bc78acfe10463bd504eb54f"},{url:"archives/2023/12/index.html",revision:"8179514a640ed7a39e570e9c3095cf54"},{url:"archives/2023/index.html",revision:"2420755aa789a9a5b741c78a19c990db"},{url:"archives/index.html",revision:"eca6496f56d95d8ea4f084061e326fc5"},{url:"categories/index.html",revision:"0d394e34509f09255c7a2c4a9b3085c8"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"0120bf5c29592d1d2692813d69a4e86c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"726f1471bce96f366ffcb5c447c3ae50"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"index.html",revision:"8d053e2124b97df8a28b5766776ad85b"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"486b947e65a30918dbe2e091cf4ba7f2"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"023c00263a3e6114f7044b30531e7fe0"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"d3cf6980c3e247575cf21a55944e451b"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"tags/index.html",revision:"785d5d28d47a96aee6fd07927290fa87"},{url:"tags/本人的碎碎念/index.html",revision:"546759b5cdbcb2a92b71cab6fcdb5d20"},{url:"tags/驱动开发/index.html",revision:"5a30b5e71a444b9a79c69e63f3e860dd"}],{})}));
//# sourceMappingURL=service-worker.js.map
