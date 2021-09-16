import{c as e,a as n,o as t,b as a,d as s,e as o,w as r,r as i,f as c,g as p}from"./vendor.f7c1375a.js";let d;const l={},u=function(e,n){if(!n||0===n.length)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(n.map((e=>{if((e=`/${e}`)in l)return;l[e]=!0;const n=e.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=n?"stylesheet":d,n||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),n?new Promise(((e,n)=>{a.addEventListener("load",e),a.addEventListener("error",n)})):void 0}))).then((()=>e()))},h=[{path:"/",component:()=>u((()=>import("./toppage.f12aaefe.js")),["assets/toppage.f12aaefe.js","assets/vendor.f7c1375a.js"])},{path:"/company",component:()=>u((()=>import("./company.6bacb1ff.js")),["assets/company.6bacb1ff.js","assets/vendor.f7c1375a.js"])},{path:"/concept",component:()=>u((()=>import("./concept.51118ad9.js")),["assets/concept.51118ad9.js","assets/vendor.f7c1375a.js"])},{path:"/business",component:()=>u((()=>import("./business.1582b2f8.js")),["assets/business.1582b2f8.js","assets/vendor.f7c1375a.js"])},{path:"/product",component:()=>u((()=>import("./product.7343fa95.js")),["assets/product.7343fa95.js","assets/vendor.f7c1375a.js"])},{path:"/recruit",component:()=>u((()=>import("./recruit.e0cde408.js")),["assets/recruit.e0cde408.js","assets/vendor.f7c1375a.js"])},{path:"/contact",component:()=>u((()=>import("./contact.f6f922ff.js")),["assets/contact.f6f922ff.js","assets/vendor.f7c1375a.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:{template:"<div>NotFound</div>"}}],_=e({history:n(),routes:h}),m={},f={id:"hpb-header"},v=s("div",{id:"hpb-headerLogo"},[s("h1",null,"株式会社同花順LOGO")],-1),b=s("div",{id:"hpb-headerExtra1"},[s("p",{class:"tel"},[s("span",null,"TEL. "),o("03-6479-3143")]),s("p",{class:"address"},"〒136-0073　東京都江東区北砂１－３－４９－４０４")],-1);m.render=function(e,n){return t(),a("div",f,[v,b])};const E={},j={id:"hpb-nav"},L=s("h3",{class:"hpb-c-index"},"ナビゲーション",-1),O={id:"nav-toppage"},T=s("span",{class:"ja"},"トップページ",-1),A=s("span",{class:"en"},"TOP PAGE",-1),P={id:"nav-company"},y=s("span",{class:"ja"},"会社概要",-1),I=s("span",{class:"en"},"COMPANY",-1),R={id:"nav-concept"},g=s("span",{class:"ja"},"経営理念",-1),C=s("span",{class:"en"},"CONCEPT",-1),N={id:"nav-service"},D=s("span",{class:"ja"},"業務内容",-1),V=s("span",{class:"en"},"BUSINESS",-1),k={id:"nav-recruit"},w=s("span",{class:"ja"},"採用情報",-1),x=s("span",{class:"en"},"RECRUIT",-1),S={id:"nav-contact"},F=s("span",{class:"ja"},"お問い合わせ",-1),M=s("span",{class:"en"},"CONTACT US",-1);E.render=function(e,n){const o=i("router-link");return t(),a("div",j,[L,s("ul",null,[s("li",O,[s(o,{to:"/"},{default:r((()=>[T,A])),_:1})]),s("li",P,[s(o,{to:"/company"},{default:r((()=>[y,I])),_:1})]),s("li",R,[s(o,{to:"/concept"},{default:r((()=>[g,C])),_:1})]),s("li",N,[s(o,{to:"/business"},{default:r((()=>[D,V])),_:1})]),s("li",k,[s(o,{to:"/recruit"},{default:r((()=>[w,x])),_:1})]),s("li",S,[s(o,{to:"/contact"},{default:r((()=>[F,M])),_:1})])])])};const U={},$={id:"hpb-aside"},G=s("h3",{class:"hpb-c-index"},"バナースペース",-1),H={id:"banner"},q={id:"banner-service"},B=s("span",{class:"ja"},"業務内容1",-1),W={id:"banner-recruit"},Y=s("span",{class:"ja"},"採用情報",-1),z={id:"banner-access"},J=s("span",{class:"ja"},"アクセス",-1),K=s("div",{id:"companyinfo"},[s("h3",null,"株式会社同花順"),s("p",null,[o(" 〒 136-0073"),s("br"),o(" 東京都江東区北砂１－３－４９－４０４"),s("br")]),s("p",null,[o("TEL 03-6479-3143"),s("br")])],-1);U.render=function(e,n){const o=i("router-link");return t(),a("div",$,[G,s("div",H,[s("ul",null,[s("li",q,[s(o,{to:"/business"},{default:r((()=>[B])),_:1})]),s("li",W,[s(o,{to:"/recruit"},{default:r((()=>[Y])),_:1})]),s("li",z,[s(o,{to:"/contact"},{default:r((()=>[J])),_:1})])])]),K])};const Q={},X={id:"hpb-footer"},Z=s("div",{id:"hpb-footerMain"},[s("p",null," copyright©2015 ths-web Co., Ltd. all rights reserved. ")],-1),ee=s("div",{id:"hpb-footerExtra1"},[s("h3",{class:"hpb-c-index"},"サブナビゲーション"),s("ul",null,[s("li",null,[s("a",{href:"https://ths-web.co.jp/pm.html"},"個人情報保護方針")])])],-1);Q.render=function(e,n){return t(),a("div",X,[Z,ee])};var ne=c({name:"App",components:{Header:m,Navi:E,Aside:U,Footer:Q}});const te={id:"hpb-container"},ae={id:"hpb-inner"};ne.render=function(e,n,o,r,c,p){const d=i("Header"),l=i("router-view"),u=i("Navi"),h=i("Aside"),_=i("Footer");return t(),a("div",te,[s(d),s("div",ae,[s(l),s(u),s(h)]),s(_)])};const se=p(ne);se.use(_),se.mount("#app");