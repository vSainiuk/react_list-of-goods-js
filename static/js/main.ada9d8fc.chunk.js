(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(4)),a=n.n(o),u=(n(14),n(1)),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="name",h="length";var d=function(){var t=Object(u.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(u.useState)(""),o=Object(r.a)(c,2),d=o[0],g=o[1],p=function(t,e,n){var s=Object(i.a)(t);return e&&s.sort((function(t,n){switch(e){case j:return t.localeCompare(n);case h:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(b,n,d);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button","is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-success",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-warning",{"is-light":!d}),onClick:function(){return g(d?"":"reverse")},children:"Reverse"}),(n||d)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),g("")},children:"Reset"})]}),Object(l.jsx)("ul",{children:p.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ada9d8fc.chunk.js.map