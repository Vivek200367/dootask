import{n as S,I as B}from"./app.267f43a2.js";import{I as O}from"./ImgUpload.91168865.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.23ec637c.js";import"./@babel.49d8906a.js";import"./localforage.ecf499ce.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.1da2501e.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var z=function(){var i,a,n,o,r,l,v,_,u,h,$,f,g,y,L,t=this,b=t.$createElement,e=t._self._c||b;return e("div",{staticClass:"approve-details",style:{"z-index":t.modalTransferIndex}},[e("div",{staticClass:"approve-details-nav"},[e("div",{staticClass:"common-nav-back",on:{click:function(s){return t.goBack()}}},[e("i",{staticClass:"taskfont"},[t._v("\uE676")])]),e("h2",[t._v(t._s(t.$L("\u5BA1\u6279\u8BE6\u60C5")))])]),e("div",{ref:"approveDetailsBox",staticClass:"approve-details-box"},[e("h2",{staticClass:"approve-details-title"},[e("span",[t._v(t._s(t.$L(t.datas.proc_def_name||"- -")))]),t.datas.state==0?e("Tag",{attrs:{color:"cyan"}},[t._v(t._s(t.$L("\u5F85\u5BA1\u6279")))]):t._e(),t.datas.state==1?e("Tag",{attrs:{color:"cyan"}},[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D")))]):t._e(),t.datas.state==2?e("Tag",{attrs:{color:"green"}},[t._v(t._s(t.$L("\u5DF2\u901A\u8FC7")))]):t._e(),t.datas.state==3?e("Tag",{attrs:{color:"red"}},[t._v(t._s(t.$L("\u5DF2\u62D2\u7EDD")))]):t._e(),t.datas.state==4?e("Tag",{attrs:{color:"red"}},[t._v(t._s(t.$L("\u5DF2\u64A4\u56DE")))]):t._e()],1),e("h3",{staticClass:"approve-details-subtitle"},[e("Avatar",{attrs:{src:t.datas.userimg,size:"24"}}),e("span",[t._v(t._s(t.datas.start_user_name))])],1),e("h3",{staticClass:"approve-details-subtitle"},[e("span",[t._v(t._s(t.$L("\u63D0\u4EA4\u4E8E"))+" "+t._s(t.datas.start_time))])]),e("Divider"),(t.datas.proc_def_name||"").indexOf("\u8BF7\u5047")!==-1&&(i=t.datas.var)!==null&&i!==void 0&&i.type?e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u5047\u671F\u7C7B\u578B")))]),e("p",[t._v(t._s(t.$L(((a=t.datas.var)===null||a===void 0?void 0:a.type)||"- -")))])]):t._e(),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u5F00\u59CB\u65F6\u95F4")))]),e("div",{staticClass:"time-text"},[e("span",[t._v(t._s(((n=t.datas.var)===null||n===void 0?void 0:n.start_time)||"- -"))]),(o=t.datas.var)!==null&&o!==void 0&&o.start_time?e("span",[t._v("("+t._s(t.getWeekday((r=t.datas.var)===null||r===void 0?void 0:r.start_time))+")")]):t._e()])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u7ED3\u675F\u65F6\u95F4")))]),e("div",{staticClass:"time-text"},[e("span",[t._v(t._s(((l=t.datas.var)===null||l===void 0?void 0:l.end_time)||"- -"))]),(v=t.datas.var)!==null&&v!==void 0&&v.end_time?e("span",[t._v("("+t._s(t.getWeekday((_=t.datas.var)===null||_===void 0?void 0:_.end_time))+")")]):t._e()])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u65F6\u957F"))+"\uFF08"+t._s(t.getTimeDifference((u=t.datas.var)===null||u===void 0?void 0:u.start_time,(h=t.datas.var)===null||h===void 0?void 0:h.end_time).unit)+"\uFF09")]),e("p",[t._v(t._s(($=t.datas.var)!==null&&$!==void 0&&$.start_time?t.getTimeDifference((f=t.datas.var)===null||f===void 0?void 0:f.start_time,(g=t.datas.var)===null||g===void 0?void 0:g.end_time).time:"- -"))])]),e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u4E8B\u7531")))]),e("p",[t._v(t._s(((y=t.datas.var)===null||y===void 0?void 0:y.description)||"- -"))])]),(L=t.datas.var)!==null&&L!==void 0&&L.other?e("div",{staticClass:"approve-details-text"},[e("h4",[t._v(t._s(t.$L("\u56FE\u7247")))]),e("div",{staticClass:"img-body"},t._l(t.datas.var.other.split(","),function(s,d){return e("div",{on:{click:function(c){return t.onViewPicture(s)}}},[e("ImgView",{key:d,staticClass:"img-view",attrs:{src:s}})],1)}),0)]):t._e(),e("Divider"),e("h3",{staticClass:"approve-details-subtitle"},[t._v(t._s(t.$L("\u5BA1\u6279\u8BB0\u5F55")))]),e("Timeline",{staticClass:"approve-record-timeline"},[t._l(t.datas.node_infos,function(s,d){var c,m,p,C,k,w,I,T,x;return[s.type=="starter"?e("TimelineItem",{key:d,attrs:{color:"green"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.data.userimg||t.datas.userimg,size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.data.start_user_name||t.datas.start_user_name))]),e("p",{staticClass:"approve-process-state"},[t._v(t._s(t.$L("\u5DF2\u63D0\u4EA4")))])]),e("div",{staticClass:"approve-process-right"},[parseInt(t.getTimeAgo(s.claim_time))<t.showTimeNum?e("p",[t._v(t._s(t.getTimeAgo(s.claim_time)))]):t._e(),e("p",[t._v(t._s((c=s.claim_time)===null||c===void 0?void 0:c.substr(0,16)))])])],1)]):t._e(),s.type=="approver"&&s._show?e("TimelineItem",{key:d,attrs:{color:s.identitylink?((m=s.identitylink)===null||m===void 0?void 0:m.state)>1?"#f03f3f":"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u5BA1\u6279")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:s.node_user_list&&((p=s.node_user_list[0])===null||p===void 0?void 0:p.userimg)||s.userimg,size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(s.approver))]),s.identitylink?t._e():e("p",{staticClass:"approve-process-state",staticStyle:{color:"#6d6d6d"}},[t._v("\u5F85\u5BA1\u6279")]),s.identitylink?e("p",{staticClass:"approve-process-state"},[s.identitylink.state==0?e("span",{staticStyle:{color:"#496dff"}},[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D")))]):t._e(),s.identitylink.state==1?e("span",[t._v(t._s(t.$L("\u5DF2\u901A\u8FC7")))]):t._e(),s.identitylink.state==2?e("span",{staticStyle:{color:"#f03f3f"}},[t._v(t._s(t.$L("\u5DF2\u62D2\u7EDD")))]):t._e(),s.identitylink.state==3?e("span",{staticStyle:{color:"#f03f3f"}},[t._v(t._s(t.$L("\u5DF2\u64A4\u56DE")))]):t._e()]):t._e()]),e("div",{staticClass:"approve-process-right"},[parseInt(t.getTimeAgo(s.claim_time))<t.showTimeNum?e("p",[t._v(" "+t._s(((C=s.identitylink)===null||C===void 0?void 0:C.state)==0?t.$L("\u5DF2\u7B49\u5F85")+" "+t.getTimeAgo(t.datas.node_infos[d-1].claim_time,2):s.claim_time?t.getTimeAgo(s.claim_time):"")+" ")]):t._e(),e("p",[t._v(t._s((k=s.claim_time)===null||k===void 0?void 0:k.substr(0,16)))])])],1),(w=s.identitylink)!==null&&w!==void 0&&w.comment?e("p",{staticClass:"comment"},[e("span",[t._v("\u201C"+t._s((I=s.identitylink)===null||I===void 0?void 0:I.comment)+"\u201D")])]):t._e()]):t._e(),s.type=="notifier"&&s._show?e("TimelineItem",{key:d,attrs:{color:s.is_finished?"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u6284\u9001")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.$A.mainUrl("images/avatar/default_approval.png"),size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.$L("\u7CFB\u7EDF")))]),e("p",{staticClass:"approve-process-desc"},[t._v(t._s(t.$L("\u81EA\u52A8\u6284\u9001"))+" "),e("span",{staticStyle:{color:"#486fed"}},[t._v(" "+t._s((T=s.node_user_list)===null||T===void 0?void 0:T.map(function(A){return A.name}).join(","))+" "+t._s(t.$L("\u7B49"+((x=s.node_user_list)===null||x===void 0?void 0:x.length)+"\u4EBA"))+" ")])])])],1)]):t._e(),s.aprover_type=="end"?e("TimelineItem",{key:d,staticClass:"finish",attrs:{color:s.is_finished?"green":"#ccc"}},[e("p",{staticClass:"timeline-title"},[t._v(t._s(t.$L("\u7ED3\u675F")))]),e("div",{staticClass:"timeline-body"},[e("Avatar",{attrs:{src:t.$A.mainUrl("images/avatar/default_approval.png"),size:"38"}}),e("div",{staticClass:"approve-process-left"},[e("p",{staticClass:"approve-process-name"},[t._v(t._s(t.$L("\u7CFB\u7EDF")))]),e("p",{staticClass:"approve-process-desc"},[t._v(" "+t._s(t.datas.is_finished?t.$L("\u5DF2\u7ED3\u675F"):t.$L("\u672A\u7ED3\u675F")))])])],1)]):t._e()]})],2),t.datas.global_comment?[e("Divider"),e("h3",{staticClass:"approve-details-subtitle"},[t._v(t._s(t.$L("\u5168\u6587\u8BC4\u8BBA")))]),e("div",{staticClass:"approve-record-comment"},[e("List",{attrs:{split:!1,border:!1}},t._l(t.datas.global_comments,function(s,d){return e("ListItem",{key:d},[e("div",[e("div",{staticClass:"top"},[e("Avatar",{attrs:{src:s.userimg,size:"38"}}),e("div",[e("p",[t._v(t._s(s.nickname))]),e("p",{staticClass:"time"},[t._v(t._s(s.created_at))])]),e("span",[t._v(t._s(t.getTimeAgo(s.created_at)))])],1),e("div",{staticClass:"content"},[t._v(" "+t._s(t.getContent(s.content))+" ")]),e("div",{staticClass:"content",staticStyle:{display:"flex",gap:"10px"}},t._l(t.getPictures(s.content),function(c,m){return e("div",{key:m,on:{click:function(p){return t.onViewPicture(c)}}},[e("ImgView",{staticClass:"img-view",attrs:{src:c}})],1)}),0)])])}),1)],1)]:t._e()],2),e("div",{staticClass:"approve-operation"},[t.isShowAgreeBtn&&!t.loadIng?e("Button",{attrs:{type:"primary"},on:{click:function(s){return t.approve(1)}}},[t._v(t._s(t.$L("\u540C\u610F")))]):t._e(),t.isShowAgreeBtn&&!t.loadIng?e("Button",{attrs:{type:"error"},on:{click:function(s){return t.approve(2)}}},[t._v(t._s(t.$L("\u62D2\u7EDD")))]):t._e(),t.isShowWarningBtn&&!t.loadIng?e("Button",{attrs:{type:"warning"},on:{click:t.revocation}},[t._v(t._s(t.$L("\u64A4\u9500")))]):t._e(),e("Button",{attrs:{type:"primary",loading:t.loadIng>0,ghost:""},on:{click:t.comment}},[t._v("+"+t._s(t.$L("\u6DFB\u52A0\u8BC4\u8BBA")))])],1),t.loadIng>0?e("div",{staticClass:"approve-load"},[e("Loading")],1):t._e(),e("Modal",{staticClass:"page-approve-initiate",attrs:{title:t.$L("\u8BC4\u8BBA"),"mask-closable":!1},model:{value:t.commentShow,callback:function(s){t.commentShow=s},expression:"commentShow"}},[e("Form",{ref:"initiateRef",attrs:{model:t.commentData,rules:t.commentRule,"label-width":"auto"},nativeOn:{submit:function(s){s.preventDefault()}}},[e("FormItem",{attrs:{prop:"content",label:t.$L("\u5185\u5BB9")}},[e("Input",{attrs:{type:"textarea"},model:{value:t.commentData.content,callback:function(s){t.$set(t.commentData,"content",s)},expression:"commentData.content"}})],1),e("FormItem",{attrs:{prop:"pictures",label:t.$L("\u56FE\u7247")}},[e("ImgUpload",{attrs:{num:3,width:2e3,height:2e3,whcut:0},model:{value:t.commentData.pictures,callback:function(s){t.$set(t.commentData,"pictures",s)},expression:"commentData.pictures"}})],1)],1),e("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"default"},on:{click:function(s){t.commentShow=!1}}},[t._v(t._s(t.$L("\u53D6\u6D88")))]),e("Button",{attrs:{type:"primary",loading:t.commentLoad>0},on:{click:t.confirmComment}},[t._v(t._s(t.$L("\u786E\u8BA4")))])],1)],1)],1)},M=[];const P={name:"ApproveDetails",components:{ImgView:B,ImgUpload:O},props:{data:{type:Object,default(){return{}}}},data(){return{datas:{},loadIng:0,showTimeNum:24,modalTransferIndex:window.modalTransferIndex,commentLoad:0,commentShow:!1,commentData:{content:"",pictures:[]},commentRule:{content:{type:"string",required:!0,message:this.$L("\u8BF7\u8F93\u5165\u5185\u5BB9\uFF01"),trigger:"change"}}}},watch:{$route(i,a){i.name=="manage-approve-details"&&this.init()},data:{handler(i,a){i.id&&this.getInfo()},deep:!0}},computed:{isShowAgreeBtn(){return(this.datas.candidate||"").split(",").indexOf(this.userId+"")!=-1&&!this.datas.is_finished},isShowWarningBtn(){var a;let i=this.userId==this.datas.start_user_id&&((a=this.datas)==null?void 0:a.is_finished)!=!0;return(this.datas.node_infos||[]).map(n=>{var o;n.type!="starter"&&n.is_finished==!0&&((o=n.identitylink)==null?void 0:o.userid)!=this.userId&&(i=!1)}),i}},mounted(){this.init()},methods:{init(){this.modalTransferIndex=window.modalTransferIndex=window.modalTransferIndex+1,this.$route.query.id&&this.getInfo()},getTimeAgo(i,a){const o=(new Date-new Date((i+"").replace(/-/g,"/")))/1e3;if(o<60)return a==2?"0"+this.$L("\u5206\u949F"):this.$L("\u521A\u521A");if(o<3600){const r=Math.floor(o/60);return a==2?`${r}${this.$L("\u5206\u949F")}`:`${r} ${this.$L("\u5206\u949F\u524D")}`}else if(o<3600*24){const r=Math.floor(o/3600);return a==2?`${r}${this.$L("\u5C0F\u65F6")}`:`${r} ${this.$L("\u5C0F\u65F6\u524D")}`}else if(o<3600*24*30){const r=Math.floor(o/3600/24);return a==2?`${r+1}${this.$L("\u5929")}`:`${r+1} ${this.$L("\u5929\u524D")}`}else{const r=Math.floor(o/3600/720);return a==2?`${r+1}${this.$L("\u6708")}`:`${r+1} ${this.$L("\u6708\u524D")}`}},getWeekday(i){return["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"][new Date(i).getDay()]},getTimeDifference(i,a){const n=new Date((a+"").replace(/-/g,"/")),o=new Date((i+"").replace(/-/g,"/")),r=(n-o)/1e3;return r<60?{time:r,unit:this.$L("\u79D2")}:r<3600?{time:Math.floor(r/60),unit:this.$L("\u5206\u949F")}:r<3600*24?{time:(n-o)/36e5,unit:this.$L("\u5C0F\u65F6")}:{time:Math.floor(r/3600/24)+1,unit:this.$L("\u5929")}},getInfo(i=!1){this.loadIng++,this.$store.dispatch("call",{method:"get",url:"approve/process/detail",data:{id:this.$route.query.id||this.data.id}}).then(({data:a})=>{var n=!0;a.node_infos=a.node_infos.map(o=>{var r,l;return o._show=n,(((r=o.identitylink)==null?void 0:r.state)==2||((l=o.identitylink)==null?void 0:l.state)==3)&&(n=!1),o}),this.datas=a,i&&this.scrollToBottom()}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng--})},approve(i){$A.modalInput({title:"\u5BA1\u6279",placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1",type:"textarea",okText:i==1?"\u540C\u610F":"\u62D2\u7EDD",okType:i==1?"primary":"error",onOk:a=>i!=1&&!a?"\u8BF7\u8F93\u5165\u5BA1\u6279\u610F\u89C1":new Promise((n,o)=>{this.$store.dispatch("call",{url:"approve/task/complete",data:{task_id:this.datas.task_id,pass:i==1,comment:a}}).then(({msg:r})=>{$A.messageSuccess(r),this.$route.name=="manage-approve-details"||this.$route.name=="manage-messenger"?this.getInfo():this.$emit("approve"),n()}).catch(({msg:r})=>{o(r)})})})},revocation(){$A.modalConfirm({content:"\u4F60\u786E\u5B9A\u8981\u64A4\u9500\u5417\uFF1F",loading:!0,okType:"warning",onOk:()=>new Promise((i,a)=>{this.$store.dispatch("call",{url:"approve/task/withdraw",data:{task_id:this.datas.task_id,proc_inst_id:this.datas.id}}).then(({msg:n})=>{$A.messageSuccess(n),i(),this.$route.name=="manage-approve-details"||this.$route.name=="manage-messenger"?this.getInfo():this.$emit("revocation")}).catch(({msg:n})=>{a(n)})})})},comment(){this.commentData.content="",this.commentData.pictures=[],this.commentShow=!0},confirmComment(){this.commentLoad++,this.$refs.initiateRef.validate(i=>{i?this.$store.dispatch("call",{method:"post",url:"approve/process/addGlobalComment",data:{proc_inst_id:this.$route.query.id||this.data.id,content:JSON.stringify({content:this.commentData.content,pictures:this.commentData.pictures.map(a=>a.path)})}}).then(({msg:a})=>{$A.messageSuccess("\u6DFB\u52A0\u6210\u529F"),this.getInfo(!0),this.commentShow=!1}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.commentLoad--}):this.commentLoad--})},scrollToBottom(){this.$nextTick(()=>{const i=this.$refs.approveDetailsBox;i.scrollTo({top:i.scrollHeight+1e3,behavior:"smooth"})})},getContent(i){try{return JSON.parse(i).content||""}catch{return""}},getPictures(i){try{return JSON.parse(i).pictures||[]}catch{return""}},onViewPicture(i){this.$store.dispatch("previewImage",$A.mainUrl(i))}}},D={};var V=S(P,z,M,!1,N,null,null,null);function N(i){for(let a in D)this[a]=D[a]}var Lt=function(){return V.exports}();export{Lt as default};
