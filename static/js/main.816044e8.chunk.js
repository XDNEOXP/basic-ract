(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":"1","name":"Xiaomi","price":"2000","img":"1.jpg"},{"id":"2","name":"Samsung","price":"3000","img":"2.jpg"},{"id":"3","name":"Iphone","price":"5000","img":"3.jpg"},{"id":"4","name":"Nokia","price":"2500","img":"4.jpg"}]')},20:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(21),r=c.n(s),i=(c(30),c(5)),j=(c(31),c(9)),l=c(2),o=(c(32),c(10)),b=(c(33),c(0)),u=function(){return Object(b.jsxs)("ul",{className:"NavBar",children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("button",{type:"button",children:"Shop"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/about",children:Object(b.jsx)("button",{type:"button",children:"About"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/contact",children:Object(b.jsx)("button",{type:"button",children:"Contact"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/blog",children:Object(b.jsx)("button",{type:"button",children:"Blog"})})})]})},d=a.a.createContext(),O=function(){var e=Object(l.f)().pathname,t="",c=Object(n.useContext)(d).carts;return"/"===e&&(t="Shop"),"/about"===e&&(t="About"),"/contact"===e&&(t="Contact"),"/blog"===e&&(t="Blog"),e.includes("product")&&(t="Shop"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"Cart",children:[c.length,Object(b.jsx)(o.c,{})]}),Object(b.jsx)("h3",{children:t})]})},h=(c(43),a.a.createContext()),x=function(){var e=Object(n.useContext)(h);return Object(b.jsxs)("div",{className:"Footer",children:[Object(b.jsx)("h5",{children:"Developed By Neo"}),Object(b.jsx)("button",{type:"button",onClick:function(){e.setActiveTheme("green")},className:"footerbtn green",children:"Green"}),Object(b.jsx)("button",{type:"button",onClick:function(){e.setActiveTheme("blue")},className:"footerbtn blue",children:"Blue"})]})},f=c(4),m=c(25),p=function(e,t){var c=[];switch(t.type){case"ADD_TO_CART":return c=[].concat(Object(m.a)(e.carts),[t.id]),localStorage.setItem("carts",JSON.stringify(c)),Object(f.a)(Object(f.a)({},e),{},{carts:c});case"REMOVE_FROM_CART":return(c=e.carts).splice(e.carts.findIndex((function(e){return e===t.id})),1),localStorage.setItemz("carts",JSON.stringify(c)),Object(f.a)(Object(f.a)({},e),{},{carts:c})}},g=function(e){var t=e.children,c=JSON.parse(localStorage.getItem("carts")),a=Object(n.useReducer)(p,{carts:c}),s=Object(i.a)(a,2),r=s[0],j=s[1];return null===r.carts&&(r.carts=[]),Object(b.jsx)(d.Provider,{value:{carts:r.carts,dispatchCart:j},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),t,Object(b.jsx)(x,{})]})})};g.defaultProps={children:""};var v=g,C=c.p+"static/media/profile.468eca3f.png",y=function(e){var t=e.imgSrc,c=e.alt;return Object(b.jsx)("img",{className:"ProductImg",src:t,alt:c})};y.defaultProps={alt:"image"};var N=y,S=function(){return Object(b.jsxs)("div",{className:"as",children:[Object(b.jsx)("p",{children:"About Me"}),Object(b.jsx)(N,{imgSrc:C})]})},A=(c(20),function(e){var t=e.children,c=e.handelClick,n=e.added,a=void 0===n?function(){}:n;return Object(b.jsx)("button",{type:"button",onClick:c,className:a,children:t})}),R=(c(44),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),j=r[0],l=r[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),d=u[0],O=u[1],h=Object(n.useState)({}),x=Object(i.a)(h,2),m=x[0],p=x[1],g=Object(n.useRef)(null);Object(n.useEffect)((function(){g.current.focus()}),[]);return Object(b.jsxs)("div",{className:"Contact",children:[Object(b.jsxs)("div",{className:"formControl",children:[Object(b.jsx)("input",{ref:g,onChange:function(e){!function(e){if(e.length>8)return!0}(e.target.value)?""===e.target.value?p(Object(f.a)(Object(f.a)({},m),{},{subject:null})):p(Object(f.a)(Object(f.a)({},m),{},{subject:"Subject must be more than 8 characters"})):(a(e.target.value),p(Object(f.a)(Object(f.a)({},m),{},{subject:null})))},type:"text",placeholder:"Subject"}),m.subject&&Object(b.jsx)("span",{children:m.subject})]}),Object(b.jsxs)("div",{className:"formControl",children:[Object(b.jsx)("input",{onChange:function(e){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)?""===e.target.value?p(Object(f.a)(Object(f.a)({},m),{},{email:null})):p(Object(f.a)(Object(f.a)({},m),{},{email:"Email is not valid"})):(l(e.target.value),p(Object(f.a)(Object(f.a)({},m),{},{email:null})))},type:"email",placeholder:"Email"}),m.email&&Object(b.jsx)("span",{children:m.email})]}),Object(b.jsx)("div",{className:"formControl",children:Object(b.jsx)("textarea",{onChange:function(e){O(e.target.value)},children:"Your Request Here"})}),Object(b.jsx)("div",{className:"formControl",children:Object(b.jsx)(A,{added:"btn",handelClick:function(){console.log("subject:",c),console.log("email:",j),console.log("description:",d)},children:"Submit"})})]})}),k=c(19),E=c.n(k),I=c(24),T=(c(46),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),j=r[0],l=r[1],o=Object(n.useState)(0),u=Object(i.a)(o,2),d=u[0],O=u[1],h=Object(n.useState)(1),x=Object(i.a)(h,2),f=x[0],m=x[1],p=function(){var e=Object(I.a)(E.a.mark((function e(){var t,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("https://run.mocky.io/v3/37d80d7d-e173-44f0-b5e5-7677638620d6");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c),l(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]),Object(n.useEffect)((function(){O(c.length%3>0?parseInt(c.length/3+1,10):parseInt(c.length/3,8))}),[c]);var g=Object(n.useCallback)((function(e){m(e)}),[]);return Object(b.jsxs)("div",{className:"Blog",children:[Object(b.jsx)("h1",{children:"Posts"}),j&&Object(b.jsx)("div",{children:"Loading..."}),c.length>0&&Object(b.jsx)("ul",{children:c.slice(3*(f-1),3*f).map((function(e){return Object(b.jsxs)("li",{className:"blogItem",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:e.content})]},"post-".concat(e.id))}))}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"Pagination",children:new Array(d).fill(0).map((function(e,t){return Object(b.jsx)("li",{className:f===t+1?"active":"",children:Object(b.jsx)(A,{added:"btn",handelClick:function(){return g(t+1)},children:t+1})})}))})})]})}),_={green:{color:"rgb(34, 196, 34)"},blue:{color:"rgb(50, 50, 231)"}},P=(c(47),{PROJECT_URL:"http://localhost:3000/"}),F=function(e){var t=e.data,c=Object(n.useContext)(h),a=Object(n.useContext)(d),s=a.carts,r=a.dispatchCart,i=s.includes(t.id),l=Object(n.useRef)(null);return Object(n.useEffect)((function(){l.current.classList.add("visible")}),[]),Object(b.jsxs)("li",{className:"ProductItem",ref:l,children:[Object(b.jsx)(j.b,{to:"product/".concat(t.id),children:Object(b.jsx)("h4",{children:t.name})}),Object(b.jsx)(N,{imgSrc:"".concat(P,"assets/images/").concat(t.img),alt:t.name}),Object(b.jsxs)("span",{children:["Price:"," ",t.price,"$"]}),Object(b.jsx)(A,{added:i?"btn added":"btn",handelClick:function(){r(i?{type:"REMOVE_FROM_CART",id:t.id}:{type:"ADD_TO_CART",id:t.id})},style:{backgroundColor:c.theme.color,display:"flex",alignItems:"center",justifyContent:"center"},children:i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{}),"Remove from Cart"]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{}),"Add to Cart"]})})]})},D=function(e){var t=e.data;return Object(b.jsx)("ul",{className:"products",children:t.map((function(e){return Object(b.jsx)(F,{data:e})}))})},w=c(15),B=(c(48),function(){var e=Object(l.g)(),t=w.find((function(t){return t.id===e.id})),c=Object(n.useContext)(d),a=c.carts,s=c.dispatchCart,r=Object(n.useContext)(h),i=a.includes(t.id),j=Object(n.useRef)(null);return Object(n.useEffect)((function(){j.current.classList.add("visible")}),[]),Object(b.jsxs)("div",{className:"ProductDiv",ref:j,children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)(N,{imgSrc:"".concat(P,"assets/images/").concat(t.img),alt:t.name}),Object(b.jsxs)("p",{children:["Price:"," ",t.price]}),Object(b.jsx)(A,{added:i?"btn added":"btn",handelClick:function(){s(i?{type:"REMOVE_FROM_CART",id:t.id}:{type:"ADD_TO_CART",id:t.id})},style:{backgroundColor:r.theme.color,display:"flex",alignItems:"center",justifyContent:"center"},children:i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{}),"Remove from Cart"]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{}),"Add to Cart"]})})]})});var J=function(){var e=Object(n.useState)("green"),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)(h.Provider,{value:{theme:_[c],setActiveTheme:a},children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j.a,{basename:"/basic-ract",children:Object(b.jsx)(v,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(D,{data:w})}),Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(S,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(R,{})}),Object(b.jsx)(l.a,{path:"/blog",children:Object(b.jsx)(T,{})}),Object(b.jsx)(l.a,{path:"/product/:id",children:Object(b.jsx)(B,{})})]})})})})})};r.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.816044e8.chunk.js.map