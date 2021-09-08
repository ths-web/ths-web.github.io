import{c as e,a as s,o as n,b as a,d as t,e as i,w as r,r as p,f as o,g as d}from"./vendor.32d1eb70.js";let c;const l={},h=function(e,s){if(!s||0===s.length)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(s.map((e=>{if((e=`/${e}`)in l)return;l[e]=!0;const s=e.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=s?"stylesheet":c,s||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),s?new Promise(((e,s)=>{a.addEventListener("load",e),a.addEventListener("error",s)})):void 0}))).then((()=>e()))},u=[{path:"/",component:()=>h((()=>import("./toppage.3b861587.js")),["assets/toppage.3b861587.js","assets/vendor.32d1eb70.js"])},{path:"/company",component:()=>h((()=>import("./company.365cc220.js")),["assets/company.365cc220.js","assets/vendor.32d1eb70.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:{template:"<div>NotFound</div>"}}],v=e({history:s(),routes:u}),m={},b={id:"hpb-header"},f=t('<div id="hpb-headerMain"><h1>株式会社同花順</h1></div><div id="hpb-headerLogo"><a href="https://ths-web.co.jp/index.html">株式会社同花順</a></div><div id="hpb-headerExtra1"><p class="tel"><span>TEL. </span>03-6479-3143</p><p class="address">〒136-0073　東京都江東区北砂１－３－４９－４０４</p></div>',3);m.render=function(e,s){return n(),a("div",b,[f])};const j={},E={id:"hpb-nav"},w=i("h3",{class:"hpb-c-index"},"ナビゲーション",-1),_={id:"nav-toppage"},y=i("span",{class:"ja"},"トップページ",-1),T=i("span",{class:"en"},"TOP PAGE",-1),C={id:"nav-company"},L=i("span",{class:"ja"},"会社概要test",-1),P=i("span",{class:"en"},"COMPANY",-1),g={id:"nav-concept"},A=i("span",{class:"ja"},"経営理念",-1),N=i("span",{class:"en"},"CONCEPT",-1),O=t('<li id="nav-service"><a href="https://ths-web.co.jp/business.html"><span class="ja">業務内容</span><span class="en">BUSINESS</span></a></li><li id="nav-news"><a href="https://ths-web.co.jp/product.html"><span class="ja">製品情報</span><span class="en">PRODUCT</span></a></li><li id="nav-recruit"><a href="https://ths-web.co.jp/recruit.html"><span class="ja">採用情報</span><span class="en">RECRUIT</span></a></li><li id="nav-contact"><a href="https://ths-web.co.jp/contact.html"><span class="ja">お問い合わせ</span><span class="en">CONTACT US</span></a></li>',4);j.render=function(e,s){const t=p("router-link");return n(),a("div",E,[w,i("ul",null,[i("li",_,[i(t,{to:"/"},{default:r((()=>[y,T])),_:1})]),i("li",C,[i(t,{to:"/company"},{default:r((()=>[L,P])),_:1})]),i("li",g,[i(t,{to:"/concept"},{default:r((()=>[A,N])),_:1})]),O])])};const x={},R={id:"hpb-aside"},S=t('<h3 class="hpb-c-index">バナースペース</h3><div id="banner"><ul><li><a href="https://ths-web.co.jp/service.html" id="banner-service">サービス／製品一覧</a></li><li><a href="https://ths-web.co.jp/recruit.html" id="banner-recruit">採用情報</a></li><li><a href="https://ths-web.co.jp/access.html" id="banner-access">アクセス</a></li></ul></div><div id="companyinfo"><h3>株式会社同花順</h3><p> 〒 136-0073<br> 東京都江東区北砂１－３－４９－４０４<br></p><p>TEL 03-6479-3143<br></p></div>',3);x.render=function(e,s){return n(),a("div",R,[S])};const k={},F={id:"hpb-footer"},I=i("div",{id:"hpb-footerMain"},[i("p",null," copyright©2015 ths-web Co., Ltd. all rights reserved. ")],-1),M=i("div",{id:"hpb-footerExtra1"},[i("h3",{class:"hpb-c-index"},"サブナビゲーション"),i("ul",null,[i("li",null,[i("a",{href:"https://ths-web.co.jp/pm.html"},"個人情報保護方針")])])],-1);k.render=function(e,s){return n(),a("div",F,[I,M])};var U=o({name:"App",components:{Header:m,Navi:j,Aside:x,Footer:k}});const D={id:"hpb-container"},$={id:"hpb-inner"};U.render=function(e,s,t,r,o,d){const c=p("Header"),l=p("router-view"),h=p("Navi"),u=p("Aside"),v=p("Footer");return n(),a("div",D,[i(c),i("div",$,[i(l),i(h),i(u)]),i(v)])};const H=d(U);H.use(v),H.mount("#app");