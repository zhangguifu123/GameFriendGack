var C=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var g=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&g(e,a,t[a]);if(d)for(var a of d(t))v.call(t,a)&&g(e,a,t[a]);return e},c=(e,t)=>y(e,k(t));import{h as m,s as D}from"./user.7a03029a.js";import{_ as w,o as N,p as z,q as _,K as o,V as u,M as V,J as B,L as i}from"./index.19c7010c.js";const L=e=>m.get(`tip/list/${e}`),S=(e,t)=>m.request("put",`tip/${e}`,{data:t}),T={data(){return{headerStyle:{"background-color":"rgba(0,0,0,0.05)"},data:[],total:0,limit:10,page:1}},mounted(){this.page=1,this.getData(!0)},methods:{handle(e){S(e.id,c(p({},e),{status:"1"})).then(({data:t})=>{console.log(t),D("\u5904\u7406\u6210\u529F"),this.getData()})},timeFormat(e){return e.replace(/T/g," ").replace(/\.[\d]{6}Z/g,"")},getData(){L(this.page).then(({data:e})=>{this.data=e.tipList.map(t=>c(p({},t),{created_at:this.timeFormat(t.created_at)})),this.total=e.total,this.limit=e.limit})}}},q={class:"bg-fff p-10"},F={class:"mt-10 mb-10 flex",style:{"justify-content":"right"}};function M(e,t,a,P,r,s){const n=i("el-table-column"),h=i("el-button"),b=i("el-table"),f=i("el-pagination");return N(),z("div",q,[_("div",null,[o(b,{data:r.data,"header-cell-style":r.headerStyle,border:""},{default:u(()=>[o(n,{prop:"id",label:"\u7F16\u53F7"}),o(n,{prop:"user_name",label:"\u7528\u6237"}),o(n,{prop:"content",label:"\u53CD\u9988\u5185\u5BB9"}),o(n,{prop:"created_at",label:"\u53CD\u9988\u65F6\u95F4"}),o(n,{label:"\u5904\u7406\u53CD\u9988"},{default:u(l=>[o(h,{size:"small",disabled:l.row.status=="1",type:l.row.status=="1"?"success":"primary",onClick:U=>s.handle(l.row)},{default:u(()=>[V(B(l.row.status=="1"?"\u5DF2\u5904\u7406":"\u5F85\u5904\u7406"),1)]),_:2},1032,["disabled","type","onClick"])]),_:1})]),_:1},8,["data","header-cell-style"]),_("div",F,[o(f,{background:"",layout:"total,prev, pager, next","page-size":r.limit,"onUpdate:page-size":t[0]||(t[0]=l=>r.limit=l),"current-page":r.page,"onUpdate:current-page":t[1]||(t[1]=l=>r.page=l),total:r.total,onCurrentChange:s.getData,onPrevClick:s.getData,onNextClick:s.getData},null,8,["page-size","current-page","total","onCurrentChange","onPrevClick","onNextClick"])])])])}var K=w(T,[["render",M]]);export{K as default};