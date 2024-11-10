import{s as X,a as Te,x as U,u as Ve,g as We,b as Ae,y as He,z as fe,n as be,c as st}from"../chunks/scheduler.CfYsyzRB.js";import{S as le,i as ne,y as Ze,m as ue,z as xe,a as k,d as g,A as pe,g as V,h as f,k as y,l as T,B as et,u as M,v as j,w as H,x as q,e as v,t as D,s as E,c as b,b as I,f as $,o as p,j as K,C as qe,D as tt,E as ce,F as at}from"../chunks/index.DqLG0vjb.js";import{b as ot}from"../chunks/entry.KRxUCQaT.js";import{p as rt}from"../chunks/stores.Do8d-I1U.js";function ke(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Ne(a,e){const s={},t={},n={$$scope:1};let l=a.length;for(;l--;){const o=a[l],i=e[l];if(i){for(const r in o)r in i||(t[r]=1);for(const r in i)n[r]||(s[r]=i[r],n[r]=1);a[l]=i}else for(const r in o)n[r]=1}for(const o in t)o in s||(s[o]=void 0);return s}function lt(a){return typeof a=="object"&&a!==null?a:{}}async function it(a){const{callbackUrl:e=window.location.href}={},l=(await(await fetch(`${ot??""}/auth/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({callbackUrl:e})})).json()).url??e;window.location.href=l,l.includes("#")&&window.location.reload()}/**
 * @license lucide-svelte v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Fe(a,e,s){const t=a.slice();return t[10]=e[s][0],t[11]=e[s][1],t}function ye(a){let e,s=[a[11]],t={};for(let n=0;n<s.length;n+=1)t=U(t,s[n]);return{c(){e=Ze(a[10]),this.h()},l(n){e=xe(n,a[10],{}),k(e).forEach(g),this.h()},h(){pe(e,t)},m(n,l){V(n,e,l)},p(n,l){pe(e,t=Ne(s,[l&32&&n[11]]))},d(n){n&&g(e)}}}function Je(a){let e=a[10],s,t=a[10]&&ye(a);return{c(){t&&t.c(),s=ue()},l(n){t&&t.l(n),s=ue()},m(n,l){t&&t.m(n,l),V(n,s,l)},p(n,l){n[10]?e?X(e,n[10])?(t.d(1),t=ye(n),e=n[10],t.c(),t.m(s.parentNode,s)):t.p(n,l):(t=ye(n),e=n[10],t.c(),t.m(s.parentNode,s)):e&&(t.d(1),t=null,e=n[10])},d(n){n&&g(s),t&&t.d(n)}}}function ct(a){let e,s,t,n,l,o=ke(a[5]),i=[];for(let c=0;c<o.length;c+=1)i[c]=Je(Fe(a,o,c));const r=a[9].default,u=Te(r,a,a[8],null);let m=[Ue,a[6],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":t=a[4]?Number(a[3])*24/Number(a[2]):a[3]},{class:n=`lucide-icon lucide lucide-${a[0]} ${a[7].class??""}`}],d={};for(let c=0;c<m.length;c+=1)d=U(d,m[c]);return{c(){e=Ze("svg");for(let c=0;c<i.length;c+=1)i[c].c();s=ue(),u&&u.c(),this.h()},l(c){e=xe(c,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var h=k(e);for(let _=0;_<i.length;_+=1)i[_].l(h);s=ue(),u&&u.l(h),h.forEach(g),this.h()},h(){pe(e,d)},m(c,h){V(c,e,h);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(e,null);f(e,s),u&&u.m(e,null),l=!0},p(c,[h]){if(h&32){o=ke(c[5]);let _;for(_=0;_<o.length;_+=1){const W=Fe(c,o,_);i[_]?i[_].p(W,h):(i[_]=Je(W),i[_].c(),i[_].m(e,s))}for(;_<i.length;_+=1)i[_].d(1);i.length=o.length}u&&u.p&&(!l||h&256)&&Ve(u,r,c,c[8],l?Ae(r,c[8],h,null):We(c[8]),null),pe(e,d=Ne(m,[Ue,h&64&&c[6],(!l||h&4)&&{width:c[2]},(!l||h&4)&&{height:c[2]},(!l||h&2)&&{stroke:c[1]},(!l||h&28&&t!==(t=c[4]?Number(c[3])*24/Number(c[2]):c[3]))&&{"stroke-width":t},(!l||h&129&&n!==(n=`lucide-icon lucide lucide-${c[0]} ${c[7].class??""}`))&&{class:n}]))},i(c){l||(y(u,c),l=!0)},o(c){T(u,c),l=!1},d(c){c&&g(e),et(i,c),u&&u.d(c)}}}function ft(a,e,s){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=He(e,t),{$$slots:l={},$$scope:o}=e,{name:i}=e,{color:r="currentColor"}=e,{size:u=24}=e,{strokeWidth:m=2}=e,{absoluteStrokeWidth:d=!1}=e,{iconNode:c}=e;return a.$$set=h=>{s(7,e=U(U({},e),fe(h))),s(6,n=He(e,t)),"name"in h&&s(0,i=h.name),"color"in h&&s(1,r=h.color),"size"in h&&s(2,u=h.size),"strokeWidth"in h&&s(3,m=h.strokeWidth),"absoluteStrokeWidth"in h&&s(4,d=h.absoluteStrokeWidth),"iconNode"in h&&s(5,c=h.iconNode),"$$scope"in h&&s(8,o=h.$$scope)},e=fe(e),[i,r,u,m,d,c,n,e,o,l]}class nt extends le{constructor(e){super(),ne(this,e,ft,ct,X,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function ut(a){let e;const s=a[2].default,t=Te(s,a,a[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,l){t&&t.m(n,l),e=!0},p(n,l){t&&t.p&&(!e||l&8)&&Ve(t,s,n,n[3],e?Ae(s,n[3],l,null):We(n[3]),null)},i(n){e||(y(t,n),e=!0)},o(n){T(t,n),e=!1},d(n){t&&t.d(n)}}}function dt(a){let e,s;const t=[{name:"log-out"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[ut]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)n=U(n,t[l]);return e=new nt({props:n}),{c(){M(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,o){H(e,l,o),s=!0},p(l,[o]){const i=o&3?Ne(t,[t[0],o&2&&lt(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){s||(y(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){q(e,l)}}}function ht(a,e,s){let{$$slots:t={},$$scope:n}=e;const l=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];return a.$$set=o=>{s(1,e=U(U({},e),fe(o))),"$$scope"in o&&s(3,n=o.$$scope)},e=fe(e),[l,e,t,n]}class mt extends le{constructor(e){super(),ne(this,e,ht,dt,X,{})}}function gt(a){let e;const s=a[2].default,t=Te(s,a,a[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,l){t&&t.m(n,l),e=!0},p(n,l){t&&t.p&&(!e||l&8)&&Ve(t,s,n,n[3],e?Ae(s,n[3],l,null):We(n[3]),null)},i(n){e||(y(t,n),e=!0)},o(n){T(t,n),e=!1},d(n){t&&t.d(n)}}}function _t(a){let e,s;const t=[{name:"search"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[gt]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)n=U(n,t[l]);return e=new nt({props:n}),{c(){M(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,o){H(e,l,o),s=!0},p(l,[o]){const i=o&3?Ne(t,[t[0],o&2&&lt(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){s||(y(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){q(e,l)}}}function vt(a,e,s){let{$$slots:t={},$$scope:n}=e;const l=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];return a.$$set=o=>{s(1,e=U(U({},e),fe(o))),"$$scope"in o&&s(3,n=o.$$scope)},e=fe(e),[l,e,t,n]}class bt extends le{constructor(e){super(),ne(this,e,vt,_t,X,{})}}function pt(a){let e;switch(a.getDay()){case 0:e="Sun";break;case 1:e="Mon";break;case 2:e="Tue";break;case 3:e="Wed";break;case 4:e="Thu";break;case 5:e="Fri";break;case 6:e="Sat";break;default:e="???"}return e}function kt(a){let e;switch(a.getMonth()){case 0:e="January";break;case 1:e="February";break;case 2:e="March";break;case 3:e="April";break;case 4:e="May";break;case 5:e="June";break;case 6:e="July";break;case 7:e="August";break;case 8:e="September";break;case 9:e="October";break;case 10:e="November";break;case 11:e="December";break;default:e="???"}return e}function we(a){return`${pt(a)} ${a.getDate()} ${kt(a)} ${a.getFullYear()}`}function wt(a){let e,s,t,n,l,o=we(a[1])+"",i;return{c(){e=v("div"),s=v("p"),t=D(a[0]),n=E(),l=v("p"),i=D(o),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=k(e);s=b(u,"P",{});var m=k(s);t=I(m,a[0]),m.forEach(g),n=$(u),l=b(u,"P",{class:!0});var d=k(l);i=I(d,o),d.forEach(g),u.forEach(g),this.h()},h(){p(l,"class","text-theme-gray"),p(e,"class","border-2 border-solid border-theme-gray rounded flex flex-row justify-between w-full p-1")},m(r,u){V(r,e,u),f(e,s),f(s,t),f(e,n),f(e,l),f(l,i)},p(r,[u]){u&1&&K(t,r[0]),u&2&&o!==(o=we(r[1])+"")&&K(i,o)},i:be,o:be,d(r){r&&g(e)}}}function Nt(a,e,s){let{title:t}=e,{lentTill:n=new Date}=e;return a.$$set=l=>{"title"in l&&s(0,t=l.title),"lentTill"in l&&s(1,n=l.lentTill)},[t,n]}class Oe extends le{constructor(e){super(),ne(this,e,Nt,wt,X,{title:0,lentTill:1})}}function Et(a){let e,s,t,n,l,o,i;return{c(){e=v("div"),s=v("p"),t=D(a[0]),n=E(),l=v("p"),o=D("by "),i=D(a[1]),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=k(e);s=b(u,"P",{});var m=k(s);t=I(m,a[0]),m.forEach(g),n=$(u),l=b(u,"P",{class:!0});var d=k(l);o=I(d,"by "),i=I(d,a[1]),d.forEach(g),u.forEach(g),this.h()},h(){p(l,"class","pl-1.5 text-theme-gray"),p(e,"class","border-2 border-solid border-theme-gray rounded flex flex-row w-full p-1")},m(r,u){V(r,e,u),f(e,s),f(s,t),f(e,n),f(e,l),f(l,o),f(l,i)},p(r,[u]){u&1&&K(t,r[0]),u&2&&K(i,r[1])},i:be,o:be,d(r){r&&g(e)}}}function $t(a,e,s){let{title:t}=e,{leader:n}=e;return a.$$set=l=>{"title"in l&&s(0,t=l.title),"leader"in l&&s(1,n=l.leader)},[t,n]}class Re extends le{constructor(e){super(),ne(this,e,$t,Et,X,{title:0,leader:1})}}function Ke(a,e,s){const t=a.slice();return t[5]=e[s],t}function Xe(a){let e,s,t=a[2].length===0&&Ye(),n=ke(a[2]),l=[];for(let o=0;o<n.length;o+=1)l[o]=Ge(Ke(a,n,o));return{c(){e=v("div"),t&&t.c(),s=E();for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var i=k(e);t&&t.l(i),s=$(i);for(let r=0;r<l.length;r+=1)l[r].l(i);i.forEach(g),this.h()},h(){p(e,"class","border-theme-gray border-2 p-4 flex flex-col")},m(o,i){V(o,e,i),t&&t.m(e,null),f(e,s);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(o,i){if(o[2].length===0?t||(t=Ye(),t.c(),t.m(e,s)):t&&(t.d(1),t=null),i&4){n=ke(o[2]);let r;for(r=0;r<n.length;r+=1){const u=Ke(o,n,r);l[r]?l[r].p(u,i):(l[r]=Ge(u),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&g(e),t&&t.d(),et(l,o)}}}function Ye(a){let e,s="No results found.";return{c(){e=v("p"),e.textContent=s},l(t){e=b(t,"P",{"data-svelte-h":!0}),ce(e)!=="svelte-1pifa0h"&&(e.textContent=s)},m(t,n){V(t,e,n)},d(t){t&&g(e)}}}function Ge(a){let e,s,t=a[5].title+"",n,l,o,i,r=a[5].numberPages+"",u,m,d,c,h=we(new Date(a[5].publicationDate))+"",_,W,C,A,F=a[5].isbn13+"",L,se;return{c(){e=v("div"),s=v("p"),n=D(t),l=E(),o=v("p"),i=D("Pages: "),u=D(r),m=E(),d=v("p"),c=D("Published: "),_=D(h),W=E(),C=v("p"),A=D("ISBN: "),L=D(F),se=E(),this.h()},l(P){e=b(P,"DIV",{class:!0});var w=k(e);s=b(w,"P",{class:!0});var z=k(s);n=I(z,t),z.forEach(g),l=$(w),o=b(w,"P",{class:!0});var ae=k(o);i=I(ae,"Pages: "),u=I(ae,r),ae.forEach(g),m=$(w),d=b(w,"P",{class:!0});var Y=k(d);c=I(Y,"Published: "),_=I(Y,h),Y.forEach(g),W=$(w),C=b(w,"P",{class:!0});var S=k(C);A=I(S,"ISBN: "),L=I(S,F),S.forEach(g),se=$(w),w.forEach(g),this.h()},h(){p(s,"class","bold title svelte-3qwki1"),p(o,"class","pages svelte-3qwki1"),p(d,"class","date svelte-3qwki1"),p(C,"class","isbn svelte-3qwki1"),p(e,"class","border-b-2 border-theme-gray py-4 book-grid svelte-3qwki1")},m(P,w){V(P,e,w),f(e,s),f(s,n),f(e,l),f(e,o),f(o,i),f(o,u),f(e,m),f(e,d),f(d,c),f(d,_),f(e,W),f(e,C),f(C,A),f(C,L),f(e,se)},p(P,w){w&4&&t!==(t=P[5].title+"")&&K(n,t),w&4&&r!==(r=P[5].numberPages+"")&&K(u,r),w&4&&h!==(h=we(new Date(P[5].publicationDate))+"")&&K(_,h),w&4&&F!==(F=P[5].isbn13+"")&&K(L,F)},d(P){P&&g(e)}}}function Ct(a){let e,s,t,n,l,o,i,r,u;n=new bt({props:{class:"text-theme-gray"}});let m=a[1]!==""&&Xe(a);return{c(){e=v("div"),s=v("input"),t=E(),M(n.$$.fragment),l=E(),m&&m.c(),o=ue(),this.h()},l(d){e=b(d,"DIV",{class:!0});var c=k(e);s=b(c,"INPUT",{placeholder:!0,class:!0}),t=$(c),j(n.$$.fragment,c),c.forEach(g),l=$(d),m&&m.l(d),o=ue(),this.h()},h(){p(s,"placeholder",a[0]),p(s,"class","flex-grow appearance-none outline-none"),p(e,"class","flex flex-row gap-2 border-2 border-solid border-theme-gray p-1 rounded")},m(d,c){V(d,e,c),f(e,s),qe(s,a[1]),f(e,t),H(n,e,null),V(d,l,c),m&&m.m(d,c),V(d,o,c),i=!0,r||(u=tt(s,"input",a[4]),r=!0)},p(d,[c]){(!i||c&1)&&p(s,"placeholder",d[0]),c&2&&s.value!==d[1]&&qe(s,d[1]),d[1]!==""?m?m.p(d,c):(m=Xe(d),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(d){i||(y(n.$$.fragment,d),i=!0)},o(d){T(n.$$.fragment,d),i=!1},d(d){d&&(g(e),g(l),g(o)),q(n),m&&m.d(d),r=!1,u()}}}function Pt(a,e,s){let t,{placeholder:n=""}=e,{items:l=[]}=e,o="";function i(){o=this.value,s(1,o)}return a.$$set=r=>{"placeholder"in r&&s(0,n=r.placeholder),"items"in r&&s(3,l=r.items)},a.$$.update=()=>{a.$$.dirty&10&&s(2,t=l.filter(r=>r.title.toLowerCase().includes(o.toLowerCase())).slice(0,10))},[n,o,t,l,i]}class Qe extends le{constructor(e){super(),ne(this,e,Pt,Ct,X,{placeholder:0,items:3})}}function St(a){let e,s,t,n,l,o="🌴",i,r,u,m,d="😊",c,h,_,W,C,A,F,L,se="Log out",P,w,z,ae=`Books
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink"></div>`,Y,S,O,Ee,G,$e,Q,Ce,R,Z,Le=`Courses
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink"></div>`,Pe,B,x,Se,ee,De,te,he,Ie,ze;return A=new mt({props:{class:"inline"}}),O=new Qe({props:{placeholder:"Search your favorite book or topic",items:a[0].data.books}}),G=new Oe({props:{title:"Book 1"}}),Q=new Oe({props:{title:"Book 2"}}),x=new Qe({props:{placeholder:"Search for courses"}}),ee=new Re({props:{title:"Course 1",leader:"Kati"}}),te=new Re({props:{title:"Course 2",leader:"Nico"}}),{c(){e=E(),s=v("div"),t=v("div"),n=v("h1"),l=v("span"),l.textContent=o,i=D(`
      Welcome `),r=D(a[2]),u=E(),m=v("span"),m.textContent=d,c=E(),h=v("nav"),_=v("ul"),W=v("li"),C=v("button"),M(A.$$.fragment),F=E(),L=v("span"),L.textContent=se,P=E(),w=v("div"),z=v("h2"),z.innerHTML=ae,Y=E(),S=v("div"),M(O.$$.fragment),Ee=E(),M(G.$$.fragment),$e=E(),M(Q.$$.fragment),Ce=E(),R=v("div"),Z=v("h2"),Z.innerHTML=Le,Pe=E(),B=v("div"),M(x.$$.fragment),Se=E(),M(ee.$$.fragment),De=E(),M(te.$$.fragment),this.h()},l(N){at("svelte-py60oj",document.head).forEach(g),e=$(N),s=b(N,"DIV",{class:!0});var J=k(s);t=b(J,"DIV",{class:!0});var me=k(t);n=b(me,"H1",{class:!0});var oe=k(n);l=b(oe,"SPAN",{class:!0,"data-svelte-h":!0}),ce(l)!=="svelte-1m3el5n"&&(l.textContent=o),i=I(oe,`
      Welcome `),r=I(oe,a[2]),u=$(oe),m=b(oe,"SPAN",{class:!0,"data-svelte-h":!0}),ce(m)!=="svelte-1r7nd9y"&&(m.textContent=d),oe.forEach(g),c=$(me),h=b(me,"NAV",{});var Be=k(h);_=b(Be,"UL",{class:!0});var Me=k(_);W=b(Me,"LI",{});var je=k(W);C=b(je,"BUTTON",{});var ge=k(C);j(A.$$.fragment,ge),F=$(ge),L=b(ge,"SPAN",{"data-svelte-h":!0}),ce(L)!=="svelte-1n5zo4k"&&(L.textContent=se),ge.forEach(g),je.forEach(g),Me.forEach(g),Be.forEach(g),me.forEach(g),P=$(J),w=b(J,"DIV",{class:!0});var _e=k(w);z=b(_e,"H2",{class:!0,"data-svelte-h":!0}),ce(z)!=="svelte-15zirpm"&&(z.innerHTML=ae),Y=$(_e),S=b(_e,"DIV",{class:!0});var re=k(S);j(O.$$.fragment,re),Ee=$(re),j(G.$$.fragment,re),$e=$(re),j(Q.$$.fragment,re),re.forEach(g),_e.forEach(g),Ce=$(J),R=b(J,"DIV",{class:!0});var ve=k(R);Z=b(ve,"H2",{class:!0,"data-svelte-h":!0}),ce(Z)!=="svelte-2onzpe"&&(Z.innerHTML=Le),Pe=$(ve),B=b(ve,"DIV",{class:!0});var ie=k(B);j(x.$$.fragment,ie),Se=$(ie),j(ee.$$.fragment,ie),De=$(ie),j(te.$$.fragment,ie),ie.forEach(g),ve.forEach(g),J.forEach(g),this.h()},h(){document.title="Kindergarten Bookstore",p(l,"class","text-4xl"),p(m,"class","text-4xl"),p(n,"class","flex items-center gap-2"),p(_,"class","flex flex-row gap-2"),p(t,"class","text-theme-gray flex items-center gap-2 px-4 justify-between w-full"),p(z,"class","relative text-lg text-theme-gray w-fit pb-2"),p(S,"class","flex flex-col gap-2"),p(w,"class","flex flex-col gap-2 px-4"),p(Z,"class","relative text-lg text-theme-gray w-fit pb-2"),p(B,"class","flex flex-col gap-2"),p(R,"class","flex flex-col gap-2 px-4"),p(s,"class","flex flex-col gap-8 p-2")},m(N,de){V(N,e,de),V(N,s,de),f(s,t),f(t,n),f(n,l),f(n,i),f(n,r),f(n,u),f(n,m),f(t,c),f(t,h),f(h,_),f(_,W),f(W,C),H(A,C,null),f(C,F),f(C,L),f(s,P),f(s,w),f(w,z),f(w,Y),f(w,S),H(O,S,null),f(S,Ee),H(G,S,null),f(S,$e),H(Q,S,null),f(s,Ce),f(s,R),f(R,Z),f(R,Pe),f(R,B),H(x,B,null),f(B,Se),H(ee,B,null),f(B,De),H(te,B,null),he=!0,Ie||(ze=tt(C,"click",a[1]),Ie=!0)},p(N,[de]){const J={};de&1&&(J.items=N[0].data.books),O.$set(J)},i(N){he||(y(A.$$.fragment,N),y(O.$$.fragment,N),y(G.$$.fragment,N),y(Q.$$.fragment,N),y(x.$$.fragment,N),y(ee.$$.fragment,N),y(te.$$.fragment,N),he=!0)},o(N){T(A.$$.fragment,N),T(O.$$.fragment,N),T(G.$$.fragment,N),T(Q.$$.fragment,N),T(x.$$.fragment,N),T(ee.$$.fragment,N),T(te.$$.fragment,N),he=!1},d(N){N&&(g(e),g(s)),q(A),q(O),q(G),q(Q),q(x),q(ee),q(te),Ie=!1,ze()}}}function Dt(a,e,s){var o,i;let t;st(a,rt,r=>s(0,t=r));function n(){it()}let l=(i=(o=t.data.session)==null?void 0:o.user)==null?void 0:i.name;return[t,n,l]}class Wt extends le{constructor(e){super(),ne(this,e,Dt,St,X,{})}}export{Wt as component};
