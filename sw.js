"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"JerryC"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"3607ea8f198f83251bb7ccc0e05cec99",url:"./404.html"},{revision:"4b2967d3cc4ef4ab8e88c9ab2e6f2e06",url:"./about/index.html"},{revision:"7c01aedcc13a67f23104f693cd940936",url:"./archives/2018/06/index.html"},{revision:"c84feda751b433e667a4d4de947f435e",url:"./archives/2018/07/index.html"},{revision:"c85e3a5cadb9e91c3b8747d9ac28d237",url:"./archives/2018/10/index.html"},{revision:"27623ee2562f03d52de7e42392051f3a",url:"./archives/2018/index.html"},{revision:"b753da86fc6402631553c2198c8dde36",url:"./archives/2018/page/2/index.html"},{revision:"262a2cd6410e8bf2fadc09275bfb6fe2",url:"./archives/2019/03/index.html"},{revision:"3fd63ad759a4a2e5f01c2126225c00bf",url:"./archives/2019/04/index.html"},{revision:"8874569a8d54a7dda9bf6a80e6f0946a",url:"./archives/2019/05/index.html"},{revision:"9d7565bfd064b8a3bfc0a73c0a45a08a",url:"./archives/2019/06/index.html"},{revision:"735d0ce63eccadb1e8eb3b56d93ed847",url:"./archives/2019/10/index.html"},{revision:"f20c40e2a3eb68c4576d6c847a7d8865",url:"./archives/2019/11/index.html"},{revision:"688e1247c4705779c812234f060732a5",url:"./archives/2019/index.html"},{revision:"48817ac312313390233fbcb085323b87",url:"./archives/2019/page/2/index.html"},{revision:"48c63c027e1b72b67211cc8a2eb2bab9",url:"./archives/2020/01/index.html"},{revision:"396a052656da89e715bdc7c730a95fb8",url:"./archives/2020/index.html"},{revision:"2d3f5e5362c49eabc0ad63eafb262b09",url:"./archives/index.html"},{revision:"ba622072f4f062cf279f532caf0d5ded",url:"./archives/page/2/index.html"},{revision:"2601031df0b143ef60611141a68f00c9",url:"./archives/page/3/index.html"},{revision:"53f96a81560e05aeaeec8ea70c16cc3d",url:"./butterfly.json"},{revision:"fd0928343d320195bb47ce216e79239e",url:"./categories/Android/index.html"},{revision:"fd6658c99bedd3dd152b7baf6b9a6be2",url:"./categories/Android/第一行代碼/index.html"},{revision:"2c1ee5481a8394ae1ac624d5088bee90",url:"./categories/Butterfly文檔/index.html"},{revision:"20f7a9a45ae71ec24feaf48a37be8de5",url:"./categories/index.html"},{revision:"14b18c25186e5e34353da9192de5f957",url:"./categories/Java/index.html"},{revision:"d5f88fc4d0b03ac38f56040c6d889a44",url:"./categories/Web/index.html"},{revision:"409741ca9d35eb47a7f7e3924735e050",url:"./categories/工具/index.html"},{revision:"21aa63e8986c86f112552e6d2edfe25d",url:"./categories/教程/Hexo/index.html"},{revision:"5c7e51f40ebfabc97b6e988df8eb7630",url:"./categories/教程/index.html"},{revision:"7c6bb1d20c201c6ddcbd7afccfe3ffad",url:"./categories/教程/Windows/index.html"},{revision:"6a48351bf63b0e2a40c5fef3ebbcd493",url:"./categories/軟件推薦/index.html"},{revision:"c36efb66b0ab215fb65c6b606c91fb8e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f5b60271cc460eb45726dced8e26bf12",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"cb5c2fb119b8cc5bfa66b857fa43791e",url:"./link/index.html"},{revision:"c42fa5f2333cd4a8d3692c1144a1e851",url:"./messageboard/index.html"},{revision:"e97378b03da12b8afc1781840552d691",url:"./movies/index.html"},{revision:"c0fbd9ccc84322f50289468f542df338",url:"./music/index.html"},{revision:"8f793edb46bab9595e65c1b2ad5f7cd3",url:"./page/2/index.html"},{revision:"0b820c12e42c4e31985160239762cf5d",url:"./page/3/index.html"},{revision:"5dd8d6aa430160e8d8b4942bcc33dd3b",url:"./photos/2019/index.html"},{revision:"c79cabc481e583191b1a437e4453daf4",url:"./photos/index.html"},{revision:"11f3bd47f90bc0fdbbe849226efe55fa",url:"./posts/125d29fb/index.html"},{revision:"178e2eead3464e0dd5bfa4643427de82",url:"./posts/19f9ade4/index.html"},{revision:"a618fd529d5805df4a6bdd8fd95ca407",url:"./posts/20bbe8ff/index.html"},{revision:"0f93463e90bbc47b211d7ca2163233e4",url:"./posts/21cfbf15/index.html"},{revision:"e9b5e97a7929e6b5ef030ed1c52467b0",url:"./posts/31391d01/index.html"},{revision:"9493e031567be216fed383da6c051595",url:"./posts/44aa2b74/index.html"},{revision:"c42ffdf6c3722c95766a17587178e638",url:"./posts/46be9372/index.html"},{revision:"09b21f92ee8e6c5bc9d5e73d4e17f514",url:"./posts/58a40d07/index.html"},{revision:"facdc07121340d3d92ea5af2f1f158d5",url:"./posts/59b77e20/index.html"},{revision:"a32565eb0f09199479af5f08814f0606",url:"./posts/7029147f/index.html"},{revision:"df876e80e30dff7cde48637bc54630c5",url:"./posts/74006f42/index.html"},{revision:"bb2f0c174b5aa2a843b16d87487b3803",url:"./posts/75c18a/index.html"},{revision:"991afe3a35aa2e620fdeec2f910ba694",url:"./posts/777fb9e9/index.html"},{revision:"0f8b22559b2b112ce29a58d0b6808abb",url:"./posts/845ade13/index.html"},{revision:"c2a735b179fa1ef09d5fa8d441728659",url:"./posts/86e73295/index.html"},{revision:"e486e63efc1e9a822eb26a1adc228cb0",url:"./posts/a4ecdf66/index.html"},{revision:"82bc262d01c2347d6b23bb00dcddaeda",url:"./posts/aa98736e/index.html"},{revision:"7c4e16abb4ea3f48d05b4c34986eee43",url:"./posts/c621cf12/index.html"},{revision:"f93f72bbf8bfab1b7264b1622cd30cd9",url:"./posts/d6615de0/index.html"},{revision:"cc837cd773f18d2db05d19ba4fa6f44e",url:"./posts/d786a301/index.html"},{revision:"1656b8b9e8d926e81d06d8074e1017f9",url:"./posts/d87ce901/index.html"},{revision:"81f354f3010ff2516e0b376eca1f7bba",url:"./posts/dda8c81b/index.html"},{revision:"752c4b15d3f9fc297021e302f47151d2",url:"./posts/e129ca4d/index.html"},{revision:"960b6f4dfac5512a0b70ed930e30849e",url:"./posts/effd323a/index.html"},{revision:"0da7dd0bae19ec0d3c17587b1aff0912",url:"./posts/f5f84b52/index.html"},{revision:"42e312e86a561212a506eb4193cdc7d1",url:"./rss/index.html"},{revision:"a318c1eccb9fa7a8603f5af7c2c47ffe",url:"./tags/9Patch/index.html"},{revision:"f0ff5db09536a887a0f8a202cd956ca8",url:"./tags/Adapter/index.html"},{revision:"4bd6d1bb8808117c15b509f4a84bc0d4",url:"./tags/Android/index.html"},{revision:"3e77d42a4cf6e5bd81facf722ec6f693",url:"./tags/Android/page/2/index.html"},{revision:"384fe8d5dc58e10cb9fec53524c5e4b1",url:"./tags/butterfly/index.html"},{revision:"9cffb175d89f5ebb893a21ffca68b24c",url:"./tags/chrome插件/index.html"},{revision:"9eefe7ed866f54c656987780b630a036",url:"./tags/GitHub-Actions/index.html"},{revision:"26db7aabd53d8acf169d2a9a1ce70f24",url:"./tags/grade/index.html"},{revision:"69fd23d656ee95c5285e1bb7fe1a5c75",url:"./tags/Hexo/index.html"},{revision:"7c9709f0f431d018fc4b002c4d0e48ce",url:"./tags/html/index.html"},{revision:"3daab20e3a99d4d8624d55c66d53e443",url:"./tags/index.html"},{revision:"b7e7fd337cc2e9543d7f872e40eee54b",url:"./tags/Java/index.html"},{revision:"f16ea552733d4fd63efffd98b6f3e420",url:"./tags/JS/index.html"},{revision:"b3767723a14ab13cff8d9ceac9c003b4",url:"./tags/Layout/index.html"},{revision:"bf855a12850f1b94eacef3b06e545744",url:"./tags/ListView/index.html"},{revision:"9ff258b19b0b35d0ae06f74ed02a22dc",url:"./tags/next/index.html"},{revision:"26fe058000d85754aa890d7f8b1b3eb8",url:"./tags/RecyclerView/index.html"},{revision:"174f9c4ef24da6ee6e54ec3d02d892f8",url:"./tags/travis-ci/index.html"},{revision:"86ec50dd3783a04956c48b463011ea8c",url:"./tags/UI/index.html"},{revision:"4fcdc2b4619a2e619004e0fcbf5b4afb",url:"./tags/Visual-Studio-Code/index.html"},{revision:"1c92b8c271f21644c2bdec02a84dc323",url:"./tags/Windows/index.html"},{revision:"33657438e884a1cb680bd8c5bb14bf19",url:"./tags/主題/index.html"},{revision:"1d86edf6780f962f428c93b23abc7e94",url:"./tags/佈局/index.html"},{revision:"fc53a6ff3b0ae6604679d64c8ca7df34",url:"./tags/前端/index.html"},{revision:"71fdbb1372f5307340a834c616a7adec",url:"./tags/圖床/index.html"},{revision:"755dea8c14fd91f6a39b7bb9c15b0028",url:"./tags/工具/index.html"},{revision:"c3b345e13af4ce3a3e2e54e7e1233d42",url:"./tags/性能優化/index.html"},{revision:"a4736ec042933bf452a23ff6c718a0c2",url:"./tags/控件/index.html"},{revision:"d0da9f60294255204c1bef80bf45b452",url:"./tags/插件/index.html"},{revision:"d06f1318840901848e4798f5b4a31fa1",url:"./tags/教程/index.html"},{revision:"7901590b5af9226de2be84b86d6b881f",url:"./tags/第一行代碼/index.html"},{revision:"80e94d60a39105ff43e2c274170f2335",url:"./tags/自動化部署/index.html"},{revision:"50ce855f9ba42454de4efd2bd12928b4",url:"./tags/軟件/index.html"},{revision:"75833e32cbd6d192c84809bac93de9a7",url:"./talk/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();