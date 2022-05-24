import{h as g,s as k}from"./user.7a03029a.js";import{_ as y,o as _,p as D,K as l,V as n,q as c,J as p,M as d,G as L,Y as S,L as r}from"./index.19c7010c.js";const V=t=>g.get(`posts/list/${t}`,{params:{uid:"n"}}),z=t=>g.request("delete",`posts/${t}`),B={data(){return{pictureShow:!1,initData:[],page:1,total:0,limit:10,headerStyle:{"background-color":"rgba(0,0,0,0.05)"},pictureIndex:0,contentDialog:!1,content:""}},mounted(){this.getList()},computed:{pictureList(){return this.initData.map(t=>t.img)}},methods:{clickRemoveGame(t){z(t).then(({code:o})=>{o===0&&(this.getList(),k("\u5220\u9664\u6210\u529F"))})},showContentDialog(t){this.content=t,this.contentDialog=!0},timeFormat(t){return t.replace(/T/g," ").replace(/\.[\d]{6}Z/g,"")},pictureShowF(t){this.pictureIndex=t,this.pictureShow=!0},getList(){V(this.page.toString()).then(({data:t})=>{this.initData=t.postList,this.limit=t.limit,this.total=t.total})}}},I={class:"bg-fff p-10"},N={class:"flex"},F=d("\u67E5\u770B"),T={class:"flex"},G={class:"mt-10 flex",style:{"justify-content":"right"}};function U(t,o,q,M,i,s){const a=r("el-table-column"),h=r("el-avatar"),f=r("el-image"),u=r("el-button"),w=r("el-popconfirm"),v=r("el-table"),b=r("el-image-viewer"),x=r("el-dialog"),C=r("el-pagination");return _(),D("div",I,[l(v,{data:i.initData,class:"mt-10",border:"","header-cell-style":i.headerStyle},{default:n(()=>[l(a,{prop:"id",label:"\u5E16\u5B50ID",width:"80"}),l(a,{label:"\u53D1\u5E03\u8005",width:"120"},{default:n(e=>[c("div",N,[l(h,{size:26,src:e.row.avatar},null,8,["src"]),c("div",null,p(e.row.name),1)])]),_:1}),l(a,{label:"\u56FE\u7247",width:"100"},{default:n(e=>[l(f,{style:{width:"50px",height:"30px"},src:e.row.img,fit:"cover",onClick:m=>s.pictureShowF(e.$index)},null,8,["src","onClick"])]),_:1}),l(a,{prop:"title",label:"\u5E16\u5B50\u540D\u79F0","min-width":"160"}),l(a,{prop:"theme",label:"\u5E16\u5B50\u4E3B\u9898","min-width":"160"}),l(a,{label:"\u53D1\u5E03\u65F6\u95F4","min-width":"160"},{default:n(e=>[d(p(s.timeFormat(e.row.created_at)),1)]),_:1}),l(a,{prop:"views",label:"\u6D4F\u89C8\u6B21\u6570",width:"100"}),l(a,{label:"\u8BE6\u60C5",width:"90"},{default:n(e=>[l(u,{type:"primary",size:"small",onClick:m=>s.showContentDialog(e.row.content)},{default:n(()=>[F]),_:2},1032,["onClick"])]),_:1}),l(a,{label:"\u64CD\u4F5C"},{default:n(e=>[c("div",T,[l(w,{title:"\u786E\u8BA4\u4E0B\u67B6\u8BE5\u5E16\u5B50?",confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",onConfirm:m=>s.clickRemoveGame(e.row.id)},{reference:n(()=>[l(u,{type:"danger",size:"small",disabled:e.row.status==0},{default:n(()=>[d(p(e.row.status==1?"\u4E0B\u67B6":"\u5DF2\u4E0B\u67B6"),1)]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])])]),_:1})]),_:1},8,["data","header-cell-style"]),i.pictureShow?(_(),L(b,{key:0,teleported:"","initial-index":i.pictureIndex,"hide-on-click-modal":"","url-list":s.pictureList,onClose:o[0]||(o[0]=e=>i.pictureShow=!1)},null,8,["initial-index","url-list"])):S("",!0),l(x,{title:"\u5E16\u5B50\u8BE6\u60C5","append-to-body":"",modelValue:i.contentDialog,"onUpdate:modelValue":o[1]||(o[1]=e=>i.contentDialog=e)},{default:n(()=>[d(p(i.content),1)]),_:1},8,["modelValue"]),c("div",G,[l(C,{background:"",layout:"total,prev, pager, next","page-size":i.limit,"onUpdate:page-size":o[2]||(o[2]=e=>i.limit=e),"current-page":i.page,"onUpdate:current-page":o[3]||(o[3]=e=>i.page=e),onCurrentChange:s.getList,onPrevClick:s.getList,onNextClick:s.getList,total:i.total},null,8,["page-size","current-page","onCurrentChange","onPrevClick","onNextClick","total"])])])}var j=y(B,[["render",U]]);export{j as default};
