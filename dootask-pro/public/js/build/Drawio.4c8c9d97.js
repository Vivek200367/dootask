import{m as s}from"./vuex.cc7cb26e.js";import{I as m}from"./IFrame.2cb1a224.js";import{n as l,l as r}from"./app.267f43a2.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.23ec637c.js";import"./@babel.49d8906a.js";import"./localforage.ecf499ce.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.1da2501e.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawio-content"},[i("IFrame",{ref:"frame",staticClass:"drawio-iframe",attrs:{src:t.url},on:{"on-message":t.onMessage}}),t.loadIng?i("div",{staticClass:"drawio-loading"},[i("Loading")],1):t._e()],1)},d=[];const u={name:"Drawio",components:{IFrame:m},props:{value:{type:Object,default:function(){return{}}},title:{type:String,default:""},readOnly:{type:Boolean,default:!1}},data(){return{loadIng:!0,url:null,bakData:""}},created(){let t=r;switch(r){case"zh-CHT":t="zh-tw";break}let e=this.readOnly?1:0,i=this.readOnly?0:1,n=this.themeName==="dark"?"dark":"kennedy",a=`?title=${this.title?encodeURIComponent(this.title):""}&chrome=${i}&lightbox=${e}&ui=${n}&lang=${t}&offline=1&pwa=0&embed=1&noLangIcon=1&noExitBtn=1&noSaveBtn=1&saveAndExit=0&spin=1&proto=json`;this.$Electron?this.url=$A.originUrl(`drawio/webapp/index.html${a}`):this.url=$A.mainUrl(`drawio/webapp/${a}`)},mounted(){window.addEventListener("message",this.handleMessage)},beforeDestroy(){window.removeEventListener("message",this.handleMessage)},watch:{value:{handler(t){this.bakData!=$A.jsonStringify(t)&&(this.bakData=$A.jsonStringify(t),this.updateContent())},deep:!0}},computed:{...s(["themeName"])},methods:{formatZoom(t){return t+"%"},updateContent(){this.$refs.frame.postMessage(JSON.stringify({action:"load",autosave:1,xml:this.value.xml}))},onMessage(t){switch(t.event){case"init":this.loadIng=!1,this.updateContent();break;case"load":typeof this.value.xml=="undefined"&&this.$refs.frame.postMessage(JSON.stringify({action:"template"}));break;case"autosave":const e={xml:t.xml};this.bakData=$A.jsonStringify(e),this.$emit("input",e);break;case"save":this.$emit("saveData");break}}}},o={};var c=l(u,p,d,!1,h,"39021859",null,null);function h(t){for(let e in o)this[e]=o[e]}var X=function(){return c.exports}();export{X as default};
