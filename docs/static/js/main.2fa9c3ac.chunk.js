(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),i=n(2),s=n(11),u=n(9),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})};d.protoType={setCategories:o.a.func.isRequired};var l=n(12),b=n(6),p=n.n(b),m=n(10),f=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=HQYcz1cE4MrSnWH5veByJYYTwqBXu7zz"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,e.abrupt("return",r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsxs)("p",{children:[" ",t," "]})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{className:"animate__animated animate__bounce animate__fadeIn",children:[" Filtro : ",t," "]}),r&&Object(j.jsx)("p",{className:"animate__animated animate__bounce animate__flash",children:" Loading... "}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(O,Object(l.a)({},e),e.id)}))})]})},x=(n(7),function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:" GitExpertApp "}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e,t){return Object(j.jsx)(h,{category:e},t)}))})]})});r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))},7:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.2fa9c3ac.chunk.js.map