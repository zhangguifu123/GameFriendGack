import{h as n}from"./user.7a03029a.js";import{_ as i,o as r,p as d,q as s,J as t,ay as l,az as _}from"./index.19c7010c.js";const u=()=>n.get("statistics");const a={data(){return{user:{},game:{},post:{}}},created(){u().then(({data:e})=>{this.game=e.game,this.post=e.post,this.user=e.user})}},c=e=>(l("data-v-0216fdde"),e=e(),_(),e),m={class:"content flex m-10"},p={class:"box"},v=c(()=>s("div",{class:"title"},"\u7528\u6237\u6570\u91CF",-1)),f={class:"box"},h={class:"flex flex-column mb-20"},x=c(()=>s("div",{class:""},"\u6BD4\u8D5B\u6570\u91CF",-1)),b={class:"flex flex-column mb-20"},C=c(()=>s("div",{class:""},"\u6BD4\u8D5B\u5173\u6CE8\u6570\u91CF",-1)),g={class:"box"},S={class:"flex flex-column mb-20"},y=c(()=>s("div",null,"\u5F81\u53CB\u8D34\u6570\u91CF",-1)),I={class:"flex flex-column mb-20"},B=c(()=>s("div",null,"\u5F81\u53CB\u8D34\u70B9\u51FB\u91CF",-1)),k={class:"flex flex-column mb-20"},w=c(()=>s("div",null,"\u5F81\u53CB\u8D34\u6536\u85CF\u6570\u91CF",-1));function D(e,V,q,z,o,E){return r(),d("div",m,[s("div",p,[v,s("div",{ref:"userCount",class:"register number"},t(o.user.userCount),513)]),s("div",f,[s("div",h,[x,s("div",{ref:"orderCount",class:"orderSuccess number mt-10"},t(o.game.gameCount),513)]),s("div",b,[C,s("div",{ref:"orderCount",class:"orderSuccess number mt-10"},t(o.game.gameCollectionCounts),513)])]),s("div",g,[s("div",S,[y,s("div",{ref:"incomeCount",class:"revenue number"},t(o.post.postCount),513)]),s("div",I,[B,s("div",{ref:"incomeCount",class:"revenue number"},t(o.post.postViewCounts),513)]),s("div",k,[w,s("div",{ref:"incomeCount",class:"revenue number"},t(o.post.postCollectionCount),513)])])])}var j=i(a,[["render",D],["__scopeId","data-v-0216fdde"]]);export{j as default};