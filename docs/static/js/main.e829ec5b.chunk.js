(this["webpackJsonpdeploy-me"]=this["webpackJsonpdeploy-me"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),i=n(8),l=(n(25),n(9)),o=n.n(l),j=n(12),d=n(10),h=n(2),u=n(0);var b=function(e){var t=e.lastSearch;return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"brand",children:Object(u.jsx)("h1",{children:"The recipes you love, all in one place!"})}),Object(u.jsxs)("p",{className:"last-search",children:["Showing results for ",Object(u.jsx)("strong",{children:t})]})]})},x=n(19);var O=function(e){var t=e.handleSubmit,n=e.handleChange,c=e.searchString;return Object(u.jsxs)("form",{onSubmit:t,className:"form-horizontal",children:[Object(u.jsx)("input",Object(x.a)({className:"search-bar",placeholder:"Search",type:"text",name:"searchString",required:!0,onChange:n,value:c},"placeholder","Find something yummy...")),Object(u.jsx)("button",{type:"submit",children:"Search"})]})};var p=function(e){var t=e.lastSearch,n=e.recipeData,c=e.handleChange,a=e.handleSubmit,r=e.searchString;return Object(u.jsxs)("div",{className:"recipe-container",children:[Object(u.jsxs)("header",{className:"header-container",children:[Object(u.jsx)(b,{path:"/",lastSearch:t}),Object(u.jsx)(O,{handleChange:c,handleSubmit:a,searchString:r})]}),n.map((function(e,t){return console.log(JSON.stringify(e,null,4)),Object(u.jsx)("div",{className:"item-main-div",children:Object(u.jsxs)(i.b,{className:"item-container",to:"/RecipePage/".concat(e.id),children:[Object(u.jsx)("img",{className:"item-image",src:e.image,alt:e.title}),Object(u.jsx)("h2",{className:"recipe-title",children:e.title})]})},t)})),Object(u.jsx)("footer",{children:"Made by: Drew Wilson, *Copyright 2021*"})]})};function m(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],s=function(){var t=Object(j.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.spoonacular.com/recipes/".concat(e.match.params.RecipePageId,"/information?&parseIngredients&apiKey=").concat("658caf1640f14a9aa3783ec06c80b169"));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,r(c),console.log(JSON.stringify(c,null,4)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();if(Object(c.useEffect)((function(){s()}),[]),void 0===a)return Object(u.jsx)("h1",{children:"loading ..."});if(void 0===a.extendedIngredients)return Object(u.jsx)("h1",{children:"loading ..."});if(void 0===a.extendedIngredients[0])return Object(u.jsx)("h1",{children:"loading ..."});if(void 0===a.extendedIngredients[0].name)return Object(u.jsx)("h1",{children:"loading ..."});if(void 0===a.extendedIngredients[0].amount)return Object(u.jsx)("h1",{children:"loading ..."});if(void 0===a.extendedIngredients[0].unit)return Object(u.jsx)("h1",{children:"loading ..."});var i=a.extendedIngredients,l=function(){i.map((function(e){return Object(u.jsxs)("p",{children:[e.name,": ",e.amount," ",e.unit]})}))};return console.log(i),console.log(l()),Object(u.jsxs)("div",{className:"recipePage",children:[Object(u.jsx)("div",{className:"main-title",children:Object(u.jsx)("h1",{children:a.title})}),Object(u.jsx)("div",{className:"recipe-pic",children:Object(u.jsx)("img",{src:a.image,alt:a.title})}),Object(u.jsxs)("div",{className:"health-options",children:[Object(u.jsxs)("p",{children:["Vegetarian: ","".concat(a.vegetarian)]}),Object(u.jsxs)("p",{children:["Vegan: ","".concat(a.vegan)]}),Object(u.jsxs)("p",{children:["Gluten Free: ","".concat(a.glutenFree)]}),Object(u.jsxs)("p",{children:["Dairy Free: ","".concat(a.dairyFree)]})]}),Object(u.jsxs)("div",{className:"intro",children:[Object(u.jsx)("h3",{children:"Intro:"}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:a.summary}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Ingredients:"}),Object(u.jsx)("div",{className:"ingredients-list",children:Object(u.jsx)("ul",{children:l()})})]}),Object(u.jsxs)("div",{className:"instructions",children:[Object(u.jsx)("h3",{children:"Instructions:"}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:a.instructions}})]})]})}var g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([""]),s=Object(d.a)(r,2),l=s[0],b=s[1],x=Object(c.useState)(""),O=Object(d.a)(x,2),g=O[0],f=O[1],v=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spoonacular.com/recipes/complexSearch?query=".concat(l,"&apiKey=").concat("658caf1640f14a9aa3783ec06c80b169","&number=18"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(JSON.stringify(n.results,null,4)),a(n.results),f(l),b(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();function S(e){b(e.target.value)}function N(e){e.preventDefault(),v(l)}return Object(c.useEffect)((function(){v()}),[]),Object(c.useEffect)((function(){v(l)}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("nav",{className:"homeNav",children:Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{className:"siteName",to:"/",children:"Find-A-Recipe"})})}),Object(u.jsx)("main",{children:Object(u.jsx)(h.c,{children:Object(u.jsxs)("div",{className:"main-container",children:[Object(u.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(u.jsx)(p,{searchString:l,handleSubmit:N,handleChange:S,lastSearch:g,recipeData:n})}}),Object(u.jsx)(h.a,{path:"/RecipePage/:RecipePageId",component:m})]})})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(g,{})})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.e829ec5b.chunk.js.map