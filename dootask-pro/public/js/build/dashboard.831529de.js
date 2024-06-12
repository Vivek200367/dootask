import{m as l,a as c}from"./vuex.cc7cb26e.js";import{T as d,n as u}from"./app.267f43a2.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.23ec637c.js";import"./@babel.49d8906a.js";import"./localforage.ecf499ce.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.1da2501e.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var _=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-dashboard"},[s("PageTitle",{attrs:{title:t.$L("\u4EEA\u8868\u76D8")}}),t.warningMsg?s("Alert",{staticClass:"dashboard-warning",attrs:{type:"warning","show-icon":""}},[s("span",{on:{click:function(o){return t.goForward({name:"manage-setting-license"})}}},[t._v(t._s(t.warningMsg))])]):t._e(),s("div",{staticClass:"dashboard-wrapper",style:t.wrapperStyle},[s("div",{staticClass:"dashboard-hello"},[t._v(t._s(t.$L("\u6B22\u8FCE\u60A8\uFF0C"+t.userInfo.nickname)))]),s("div",{staticClass:"dashboard-desc"},[t._v(" "+t._s(t.$L("\u4EE5\u4E0B\u662F\u4F60\u5F53\u524D\u7684\u4EFB\u52A1\u7EDF\u8BA1\u6570\u636E"))+" "),s("transition",{attrs:{name:"dashboard-load"}},[t.loadDashboardTasks?s("div",{staticClass:"dashboard-load"},[s("Loading")],1):t._e()])],1),s("ul",{staticClass:"dashboard-block"},[s("li",{on:{click:function(o){return t.scrollTo("today")}}},[s("div",{staticClass:"block-title"},[t._v(t._s(t.getTitle("today")))]),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.dashboardTask.today_count))]),s("i",{staticClass:"taskfont"},[t._v("\uE6F4")])])]),s("li",{on:{click:function(o){return t.scrollTo("overdue")}}},[s("div",{staticClass:"block-title"},[t._v(t._s(t.getTitle("overdue")))]),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.dashboardTask.overdue_count))]),s("i",{staticClass:"taskfont"},[t._v("\uE603")])])]),s("li",{on:{click:function(o){return t.scrollTo("all")}}},[s("div",{staticClass:"block-title"},[t._v(t._s(t.getTitle("all")))]),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.dashboardTask.all_count))]),s("i",{staticClass:"taskfont"},[t._v("\uE6F9")])])])]),s("Scrollbar",{staticClass:"dashboard-list"},[t._l(t.columns,function(o){return o.list.length>0?[s("div",{ref:`type_${o.type}`,refInFor:!0,staticClass:"dashboard-ref"}),s("div",{staticClass:"dashboard-title"},[t._v(t._s(o.title))]),s("ul",{staticClass:"dashboard-ul"},t._l(o.list,function(a,n){return s("li",{key:n,class:{complete:a.complete_at},style:a.color?{backgroundColor:a.color}:{},on:{click:function(r){return t.openTask(a)}}},[a.p_name?s("em",{staticClass:"priority-color",style:{backgroundColor:a.p_color}}):t._e(),s("div",{staticClass:"item-select",on:{click:function(r){return r.stopPropagation(),t.openMenu(r,a)}}},[s("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(a.complete_at?"&#xe627;":"&#xe625;")}})]),s("div",{staticClass:"item-title"},[a.flow_item_name?s("span",{class:a.flow_item_status,on:{click:function(r){return r.stopPropagation(),t.openMenu(r,a)}}},[t._v(t._s(a.flow_item_name))]):t._e(),a.sub_top===!0?s("span",[t._v(t._s(t.$L("\u5B50\u4EFB\u52A1")))]):t._e(),a.sub_my&&a.sub_my.length>0?s("span",[t._v("+"+t._s(a.sub_my.length))]):t._e(),t._v(" "+t._s(a.name)+" ")]),a.desc?s("div",{staticClass:"item-icon"},[s("i",{staticClass:"taskfont"},[t._v("\uE71A")])]):t._e(),a.sub_num>0?s("div",{staticClass:"item-icon"},[s("i",{staticClass:"taskfont"},[t._v("\uE71F")]),s("em",[t._v(t._s(a.sub_complete)+"/"+t._s(a.sub_num))])]):t._e(),a.end_at?s("ETooltip",{attrs:{disabled:t.$isEEUiApp||t.windowTouch,content:a.end_at,placement:"right"}},[s("div",{class:["item-icon",a.today?"today":"",a.overdue?"overdue":""]},[s("i",{staticClass:"taskfont"},[t._v("\uE71D")]),s("em",[t._v(t._s(t.expiresFormat(a.end_at)))])])]):t._e()],1)}),0)]:t._e()})],2)],1)],1)},p=[];const h={components:{TaskMenu:d},data(){return{nowTime:$A.Time(),nowInter:null,licenseTimer:null,loadIng:0,dashboard:"today",warningMsg:""}},activated(){this.$store.dispatch("getTaskForDashboard",600),this.loadInterval(!0),this.loadLicense(!0)},deactivated(){this.$store.dispatch("forgetTaskCompleteTemp",!0),this.loadInterval(!1),this.loadLicense(!1)},computed:{...l(["userInfo","userIsAdmin","cacheTasks","taskCompleteTemps","loadDashboardTasks"]),...c(["dashboardTask","assistTask","transforTasks"]),routeName(){return this.$route.name},columns(){const t=[];return["today","overdue","all"].some(e=>{let s=this.transforTasks(this.dashboardTask[e]);t.push({type:e,title:this.getTitle(e),list:s.sort((o,a)=>$A.Date(o.end_at||"2099-12-31 23:59:59")-$A.Date(a.end_at||"2099-12-31 23:59:59"))})}),t.push({type:"assist",title:this.getTitle("assist"),list:this.assistTask.sort((e,s)=>$A.Date(e.end_at||"2099-12-31 23:59:59")-$A.Date(s.end_at||"2099-12-31 23:59:59"))}),t},total(){const{dashboardTask:t}=this;return t.today_count+t.overdue_count+t.all_count},wrapperStyle({warningMsg:t}){return t?{"max-height":"calc(100% - 50px)"}:null}},watch:{windowActive(t){this.routeName==="manage-dashboard"&&(this.loadInterval(t),this.loadLicense(t),t&&this.$store.dispatch("getTaskForDashboard",600))}},methods:{getTitle(t){switch(t){case"today":return this.$L("\u4ECA\u65E5\u5230\u671F");case"overdue":return this.$L("\u8D85\u671F\u4EFB\u52A1");case"all":return this.$L("\u5F85\u5B8C\u6210\u4EFB\u52A1");case"assist":return this.$L("\u534F\u52A9\u7684\u4EFB\u52A1");default:return""}},scrollTo(t){let e=this.$refs[`type_${t}`];e&&$A.scrollToView(e[0],{behavior:"smooth",inline:"end"})},openTask(t){this.$store.dispatch("openTask",t)},openMenu(t,e){this.$store.state.taskOperation={event:t,task:e}},expiresFormat(t){return $A.countDownFormat(t,this.nowTime)},loadInterval(t){this.nowInter&&(clearInterval(this.nowInter),this.nowInter=null),t!==!1&&(this.nowInter=setInterval(e=>{this.nowTime=$A.Time()},1e3))},loadLicense(t){this.licenseTimer&&(clearTimeout(this.licenseTimer),this.licenseTimer=null),!(t===!1||!this.userIsAdmin)&&(this.licenseTimer=setTimeout(e=>{this.$store.dispatch("call",{url:"system/license",data:{type:"get"}}).then(({data:s})=>{this.warningMsg=s.error.length>0?s.error[0]:""}).catch(s=>{this.warningMsg=""})},1500))}}},i={};var m=u(h,_,p,!1,v,null,null,null);function v(t){for(let e in i)this[e]=i[e]}var Y=function(){return m.exports}();export{Y as default};
