import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as a}from"./assets/vendor-d78ab9e0.js";const e="videoplayer-current-time",l=document.querySelector("iframe"),t=new r(l);t.on("timeupdate",a(m,1e3));function m(o){localStorage.setItem(e,o.seconds)}t.setCurrentTime(JSON.parse(localStorage.getItem(e))||0);
//# sourceMappingURL=commonHelpers2.js.map
