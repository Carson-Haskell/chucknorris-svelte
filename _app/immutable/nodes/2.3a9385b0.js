import{s as d,f as E,n as h,i as J}from"../chunks/scheduler.b7db4573.js";import{S as v,i as $,g as p,h as k,k as u,a as g,z as M,f as _,e as j,m as z,j as B,n as A,y as f,o as D,s as C,r as b,x as G,c as w,u as N,v as x,d as S,t as q,w as H}from"../chunks/index.3ce2007a.js";function P(l){let e,n,s,t;return{c(){e=p("img"),this.h()},l(a){e=k(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){E(e.src,n="https://www.seekpng.com/png/detail/110-1104356_chuck-norris-wall-sticker-chuck-norris-png.png")||u(e,"src",n),u(e,"alt","Chuck Norris"),u(e,"class","svelte-mdxf85")},m(a,i){g(a,e,i),s||(t=M(e,"click",function(){J(l[0])&&l[0].apply(this,arguments)}),s=!0)},p(a,[i]){l=a},i:h,o:h,d(a){a&&_(e),s=!1,t()}}}function V(l,e,n){let{onClick:s=()=>{}}=e;return l.$$set=t=>{"onClick"in t&&n(0,s=t.onClick)},[s]}class F extends v{constructor(e){super(),$(this,e,V,P,d,{onClick:0})}}function I(l){let e,n=(l[0]||"Hello, let me tell you a joke...")+"",s;return{c(){e=p("div"),s=z(n),this.h()},l(t){e=k(t,"DIV",{class:!0});var a=B(e);s=A(a,n),a.forEach(_),this.h()},h(){u(e,"class","animate__animated animate__headShake svelte-nnofag")},m(t,a){g(t,e,a),f(e,s)},p(t,a){a&1&&n!==(n=(t[0]||"Hello, let me tell you a joke...")+"")&&D(s,n)},d(t){t&&_(e)}}}function K(l){let e=l[0],n,s=I(l);return{c(){s.c(),n=j()},l(t){s.l(t),n=j()},m(t,a){s.m(t,a),g(t,n,a)},p(t,[a]){a&1&&d(e,e=t[0])?(s.d(1),s=I(t),s.c(),s.m(n.parentNode,n)):s.p(t,a)},i:h,o:h,d(t){t&&_(n),s.d(t)}}}function L(l,e,n){let{joke:s=""}=e;return l.$$set=t=>{"joke"in t&&n(0,s=t.joke)},[s]}class O extends v{constructor(e){super(),$(this,e,L,K,d,{joke:0})}}function Q(l){let e,n,s="Click Chuck Norris to hear a joke!",t,a,i,c,m;return a=new F({props:{onClick:l[1]}}),c=new O({props:{joke:l[0]}}),{c(){e=p("main"),n=p("h1"),n.textContent=s,t=C(),b(a.$$.fragment),i=C(),b(c.$$.fragment),this.h()},l(o){e=k(o,"MAIN",{class:!0});var r=B(e);n=k(r,"H1",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-178uuvl"&&(n.textContent=s),t=w(r),N(a.$$.fragment,r),i=w(r),N(c.$$.fragment,r),r.forEach(_),this.h()},h(){u(n,"class","svelte-lrn9qg"),u(e,"class","svelte-lrn9qg")},m(o,r){g(o,e,r),f(e,n),f(e,t),x(a,e,null),f(e,i),x(c,e,null),m=!0},p(o,[r]){const y={};r&1&&(y.joke=o[0]),c.$set(y)},i(o){m||(S(a.$$.fragment,o),S(c.$$.fragment,o),m=!0)},o(o){q(a.$$.fragment,o),q(c.$$.fragment,o),m=!1},d(o){o&&_(e),H(a),H(c)}}}function R(l,e,n){let s;return[s,async()=>{const i=await(await fetch("https://api.chucknorris.io/jokes/random")).json();n(0,s=i.value)}]}class W extends v{constructor(e){super(),$(this,e,R,Q,d,{})}}export{W as component};
