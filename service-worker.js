if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>a(e,c),b={module:{uri:c},exports:f,require:n};i[c]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/10/26/驱动开发框架/image-20231027163401069.png",revision:"336aafe2a49af9bc6b6e052ef28a1238"},{url:"2023/10/26/驱动开发框架/index.html",revision:"a8ece260981462c8415c2edf32583aba"},{url:"2023/10/27/按键驱动/index.html",revision:"d3eaa0b16b7f6cb459e2bc113d2e0a96"},{url:"2023/11/01/Linux设备驱动开发/image-20231117114308618.png",revision:"f36bae65bb82e671e1286f02a6726229"},{url:"2023/11/01/Linux设备驱动开发/index.html",revision:"ca03ced941c139378d3fc478ae5af89c"},{url:"2023/11/01/奇奇怪怪的碎碎念/image-20231101210351116.png",revision:"a7a8e883b79428f5a931a2abcc3a2526"},{url:"2023/11/01/奇奇怪怪的碎碎念/index.html",revision:"f5e50f4ed22f3173516833d55e0174a8"},{url:"2023/11/03/异常与中断/image-20231129164249697.png",revision:"dc7ac3eeee7ff34ce660ae09b6bed1d3"},{url:"2023/11/03/异常与中断/image-20231130154431818.png",revision:"434e13c6444d59289a578e25c4e3a1ee"},{url:"2023/11/03/异常与中断/index.html",revision:"6acd3c53777dc27dee1dc595ad719ef9"},{url:"2023/11/04/Linux中断编程/index.html",revision:"56f914b0acb2cd2a4430d40d0e525677"},{url:"2023/11/05/用户线程和内核线程区别/index.html",revision:"84f28b186d7b0956814f1df7550e149d"},{url:"2023/11/05/进程上下文与中断上下文的区别/index.html",revision:"313af46c4b60811d2729014df9f926de"},{url:"2023/11/06/实战1：led驱动/image-20231205173431102.png",revision:"e4ca82cd377dc4291fe54c8d3422199b"},{url:"2023/11/06/实战1：led驱动/index.html",revision:"bb8fdeec3f64956b7a404dcb169cfeb4"},{url:"2023/11/07/在Windows使用VSCode搭建嵌入式Linux开发环境/index.html",revision:"c47afebdd3362bf6aedafb4752302874"},{url:"2023/11/08/IIC/image-20231211210806975.png",revision:"4c4e6a03fb0db471a12c48255e65a74b"},{url:"2023/11/08/IIC/image-20231211211055390.png",revision:"c08790850470a3cc1036aaa9b0eedd83"},{url:"2023/11/08/IIC/image-20231211211114744.png",revision:"4ed24e730d6058e7d81f442e30b7367b"},{url:"2023/11/08/IIC/index.html",revision:"05b372ab76aa78e2e5371c9226e81418"},{url:"2023/11/08/SPI/image-20231211102038775.png",revision:"9165894598322be868f37c3e1124ad55"},{url:"2023/11/08/SPI/index.html",revision:"d227253d7790bd495ff486f3bb42cd48"},{url:"2023/11/11/UART深入剖析/image-20231212102929836.png",revision:"c482b4f0fd3b9c3bdf6b540524ec6dcd"},{url:"2023/11/11/UART深入剖析/index.html",revision:"b6a66a5fe304a593da52c74b2a11b58a"},{url:"2023/11/11/同步与异步/index.html",revision:"59676fa095f6438e9a0bf3837c265f81"},{url:"2023/11/12/TCPUDP详解/image-20231212113845207.png",revision:"32e660ac2ed53a3e670ce95d38ee2120"},{url:"2023/11/12/TCPUDP详解/index.html",revision:"c2bb070c97da8802143f8dd2bc5b0f2e"},{url:"2023/11/13/Linux查找ip的几种方式/index.html",revision:"14858f41e70b0e053df67104d11a66b6"},{url:"2023/11/13/用户态vs内核态/index.html",revision:"8ae0b558700c546483a8997fa09991fc"},{url:"2023/11/14/乐观锁vs悲观锁/index.html",revision:"9db685b3f48fa1311fa437ff58ca4be9"},{url:"2023/11/14/原子操作与CAS浅析/index.html",revision:"2e68cac05a31b85cc0015443c0a9f355"},{url:"2023/11/15/Linux内核组成部分/image-20231212193749133.png",revision:"0d81325898a4c0df8c66586d25a43918"},{url:"2023/11/15/Linux内核组成部分/image-20231212194626121.png",revision:"9aba085ceb4665ca0d66769c23b0ecf1"},{url:"2023/11/15/Linux内核组成部分/image-20231212194627207.png",revision:"9aba085ceb4665ca0d66769c23b0ecf1"},{url:"2023/11/15/Linux内核组成部分/image-20231212194737404.png",revision:"57b9b1d4b42fd85de673f8090fe050ea"},{url:"2023/11/15/Linux内核组成部分/index.html",revision:"964ecbb9a580807e344ec2e40e697c9d"},{url:"2023/11/15/进程vs线程/index.html",revision:"f29302d310ad8db7eb703c0ae3a93806"},{url:"2023/11/16/进程间通信/index.html",revision:"8e8e3945647cc14405cef344bfb1fa68"},{url:"2023/11/17/孤儿进程、僵尸进程、守护进程/index.html",revision:"1026f650657da138253a7981dec5f16f"},{url:"2023/11/17/设备树浅析/index.html",revision:"8e230ceab0904083c2553fef3f3dd930"},{url:"2023/11/18/GDB常用指令/index.html",revision:"142a918420e40c78ecef7cc7b6921e7e"},{url:"2023/11/18/Linux进程管理系统调用/index.html",revision:"3b1895fd65ebda3f2bb4e337dea347c6"},{url:"2023/11/19/uboot浅析/image-20231214112922892.png",revision:"bbdfaa84ba9d2edc82b7d8da1d24c237"},{url:"2023/11/19/uboot浅析/index.html",revision:"a3a425901379f06d355e6ffff36d84b5"},{url:"2023/11/20/嵌入式交叉编译环境和工具的使用/index.html",revision:"738aa7f1d58520f59e1ebf8bf22d96f8"},{url:"2023/11/21/Linux字符设备驱动/index.html",revision:"d2289d90925d2f38819084fc0e3300fa"},{url:"2023/11/23/输入子系统の驱动框架/1bfc2a9fe8d24c16ae8a7aaa288ec607.png",revision:"e1146f2c8d149336576465af5715eb75"},{url:"2023/11/23/输入子系统の驱动框架/939a5edf69694f1dae11c834560af3b5.png",revision:"d106b84fcefb3a436ff8244f91b7ab42"},{url:"2023/11/23/输入子系统の驱动框架/c1537998752a4c6db369213b71a871d0.png",revision:"fe3c0169fbd3a8f01a28dc22f4dca9e1"},{url:"2023/11/23/输入子系统の驱动框架/image-20231216151013767.png",revision:"785c9b9477e6489722f2be39aa2e7f82"},{url:"2023/11/23/输入子系统の驱动框架/image-20231216151707245.png",revision:"0b12c89da39bdab24070167db9d726d5"},{url:"2023/11/23/输入子系统の驱动框架/image-20231216151859600.png",revision:"432456535c3a8d023e6a901e945eacb5"},{url:"2023/11/23/输入子系统の驱动框架/index.html",revision:"1b972547a937ab1085e8909283f0ab10"},{url:"2023/11/25/平台设备驱动模型/index.html",revision:"4ffd267b5be2569afb92857dab4029cc"},{url:"2023/11/26/消息队列/index.html",revision:"0a4fd0748ac2509b135acace9c4b4296"},{url:"2023/11/28/mosquitto安装-配置-使用/index.html",revision:"0257b542ee6c0e90444de4a6a56c8230"},{url:"2023/12/19/字节面试/index.html",revision:"566ff3a1742cad35a367f31e1230549a"},{url:"2023/12/26/海康面试/index.html",revision:"eec8f7fd1e5548a79b45eafbb46323b0"},{url:"2024/01/18/v4l2/123.png",revision:"f85a7eeb9c48224b95f7f9df40af48f9"},{url:"2024/01/18/v4l2/image-20240119142954335.png",revision:"dd195b002efe3d408738d32e47ec1da6"},{url:"2024/01/18/v4l2/index.html",revision:"51e3c6c7630040e76a70da5c81651c69"},{url:"2024/01/29/segmentation fault调试方法/index.html",revision:"8c8cbf7374475acec3988d98b308147a"},{url:"2024/01/31/CAN/image-20240131160007052.png",revision:"97b04c438b54443e07419c39b19db2ff"},{url:"2024/01/31/CAN/image-20240131161504903.png",revision:"b1822257701a68c11ea61b84961b24e9"},{url:"2024/01/31/CAN/image-20240131162514435.png",revision:"45e9f5d7d5ac0fc40e8537a7d3c5ce5c"},{url:"2024/01/31/CAN/image-20240131205446835.png",revision:"1a114a6912e5e3b34e6b7a3688d6506d"},{url:"2024/01/31/CAN/image-20240131205614227.png",revision:"b533ca6c10d0f4e4483cb06cab07092f"},{url:"2024/01/31/CAN/image-20240131205646969.png",revision:"8107f36381f30180492ab8dfa19e5eb5"},{url:"2024/01/31/CAN/image-20240131221909622.png",revision:"5ba73afe3b00dfc643ee046c491b1e24"},{url:"2024/01/31/CAN/image-20240131222018337.png",revision:"c6a137de7d22b6eafb10f9eaddd39bbc"},{url:"2024/01/31/CAN/image-20240131222036452.png",revision:"c33c0450982fe0366f632254f86fceb8"},{url:"2024/01/31/CAN/image-20240131222111351.png",revision:"28a9289e53798ee1e9f0c4adafe8f2c2"},{url:"2024/01/31/CAN/image-20240131222146329.png",revision:"5b11b44e5dac8253340b23deabe593b9"},{url:"2024/01/31/CAN/index.html",revision:"c6563162ff2fe1981baff76f848ff7eb"},{url:"2024/02/02/USB/index.html",revision:"5f32d14955b39a1b03008d287be18e79"},{url:"2024/12/18/malloc和calloc的区别/index.html",revision:"ff65295a0b71f853c251cb1a1fb752e2"},{url:"archives/2023/10/index.html",revision:"1570a0566ac1e2db75f8a351bdbfe66c"},{url:"archives/2023/11/index.html",revision:"1b23af1bd095b3fa3fffdb233a6d7e62"},{url:"archives/2023/11/page/2/index.html",revision:"e1b14cc0b56656c63331389844a5daac"},{url:"archives/2023/11/page/3/index.html",revision:"3747652c2749c8f47bc0018b7c93f7ab"},{url:"archives/2023/11/page/4/index.html",revision:"db955cf8a37d481f9a9bb049b4c2adbb"},{url:"archives/2023/12/index.html",revision:"65ce9addbd4ef9df53a438d02f706ad7"},{url:"archives/2023/index.html",revision:"228079b208f7c7f8d34b46bbea725372"},{url:"archives/2023/page/2/index.html",revision:"add3bb1a6650cfd45c94b0e9c5e6df2e"},{url:"archives/2023/page/3/index.html",revision:"ddd928eac4fe96ec6a06533a0eb9a48f"},{url:"archives/2023/page/4/index.html",revision:"886dd4f84f71087b9243eac9e94c675c"},{url:"archives/2024/01/index.html",revision:"f92777e233f8f4d237cfd46d25f9df3f"},{url:"archives/2024/02/index.html",revision:"f3d00458f3584096ef48fde130bbe1ee"},{url:"archives/2024/12/index.html",revision:"1483e626d2215c0f349deeb3c7c47d3e"},{url:"archives/2024/index.html",revision:"c56fb011200fde525acb6f0f09089d3e"},{url:"archives/index.html",revision:"694b1e2fc23bfafdfe69010003dd8e05"},{url:"archives/page/2/index.html",revision:"d4dd2aeaa65f60a6985f17a687864541"},{url:"archives/page/3/index.html",revision:"8e64c20cc73b89745fddac93410902e8"},{url:"archives/page/4/index.html",revision:"20b187d875cc272bfdc39f481c3ee694"},{url:"categories/index.html",revision:"f69c1bea57464cca09c073054b9da074"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"0120bf5c29592d1d2692813d69a4e86c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"726f1471bce96f366ffcb5c447c3ae50"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"index.html",revision:"338d29cba3529b5672b2948f257d1f9a"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"486b947e65a30918dbe2e091cf4ba7f2"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"023c00263a3e6114f7044b30531e7fe0"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"d3cf6980c3e247575cf21a55944e451b"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"page/2/index.html",revision:"8d41d89c6b062e7875d88fad4bf8feca"},{url:"page/3/index.html",revision:"af368f559e8cac77ac02982e48e9247a"},{url:"page/4/index.html",revision:"b0fa0021271fd83d05529fb4464815e8"},{url:"tags/index.html",revision:"2b0360168a362b856f5a7f045b6d5eef"},{url:"tags/MQTT/index.html",revision:"cc649c7d63c958bbcdcfc87a6fba2c8f"},{url:"tags/本人的碎碎念/index.html",revision:"28dc9a7f37a9a6e0e6ab2356e7e736f0"},{url:"tags/通信协议/index.html",revision:"37f7152ac5752dc1f7c2bf884da9c356"},{url:"tags/面经/index.html",revision:"5d0e534a3f4ca60830499bb4d38c1a3a"},{url:"tags/驱动实战/index.html",revision:"f305dad0b8acf588662209afecd1773b"},{url:"tags/驱动开发/index.html",revision:"6acc5ade2ab53a00f715169e1e268b9c"},{url:"tags/驱动开发/page/2/index.html",revision:"6de37b70e1fb47557a1b2a939ce5c062"},{url:"tags/驱动开发/page/3/index.html",revision:"085a5e9bd1b7df8ba89a548dd118242e"}],{})}));
//# sourceMappingURL=service-worker.js.map
