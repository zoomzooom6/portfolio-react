(this["webpackJsonptony-portfolio"]=this["webpackJsonptony-portfolio"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(6),i=c.n(a),s=(c(11),c(2)),o=(c(12),c.p+"static/media/Avatar.9ff9b95d.jpg"),l=c(0);var j=function(){return Object(l.jsxs)("section",{className:"my-2",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"about",children:"A little about me"}),Object(l.jsx)("img",{src:o,className:"my-1",style:{width:"15%"},alt:"profile avater"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{className:"my-2",children:"Just a little bit about me. Placeholder text for now."})})]})};var h=function(e){var t=e.categories,c=void 0===t?[]:t,n=e.setCurrentCategory,a=e.currentCategory;return Object(r.useEffect)((function(){document.title="Tony Huang - "+a.name}),[a]),Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{style:{margin:"10px",textAlign:"left"},children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("span",{children:"Tony Huang"})})}),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:c.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n(e)},children:e.name})},e.name)}))})})]})},b=c.p+"static/media/CodeQuiz.9151ab9c.jpg",d=c.p+"static/media/MealThyme.cd3731cb.jpg",m=c.p+"static/media/WeatherDashboard.4d57e624.jpg",u=c.p+"static/media/WindowShopper.4dcd64ca.jpg",O=c.p+"static/media/WorkDayScheduler.42e6b5cc.jpg",x=c.p+"static/media/ReadmeGenerator.a945fa86.jpg";var p=function(){var e=[{name:"Weather Dashboard",src:m,git:"https://github.com/zoomzooom6/Weather_Dashboard",live:"https://zoomzooom6.github.io/Weather_Dashboard/"},{name:"Code Quiz",src:b,git:"https://github.com/zoomzooom6/Code_Quiz",live:"https://zoomzooom6.github.io/Code_Quiz/"},{name:"Workday Scheduler",src:O,git:"https://github.com/zoomzooom6/Workday_Scheduler",live:"https://zoomzooom6.github.io/Workday_Scheduler/"},{name:"README Generator",src:x,git:"https://github.com/zoomzooom6/README_Generator",live:"https://github.com/zoomzooom6/README_Generator"},{name:"Meal Thyme",src:d,git:"https://github.com/uoftgroup7/mealThyme/",live:"https://uoftgroup7.github.io/mealThyme/"},{name:"Window Shopper",src:u,git:"https://github.com/Gr0upFour/projectTwo",live:"https://project2-window-shopper.herokuapp.com/"}];return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("a",{href:e.git,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("h3",{children:e.name})}),Object(l.jsx)("img",{src:e.src,style:{width:"25%"},alt:e.name}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:e.live,target:"_blank",rel:"noreferrer",children:"Webpage"})})]})}))})})},g=c(3),f=c(5);var v=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1],h=c.name,b=c.email,d=c.message;function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||n(Object(f.a)(Object(f.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))}function u(e){e.preventDefault(),console.log(c),j("Your message has been sent. Thank you!")}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Contact Me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:u,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",defaultValue:h,onBlur:m,name:"name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",defaultValue:b,onBlur:m,name:"email"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",defaultValue:d,onBlur:m,rows:"5"})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",onClick:u,children:"Submit"})]})]})};var y=function(){return Object(l.jsxs)("section",{children:[Object(l.jsxs)("h3",{children:["Download my ",Object(l.jsx)("a",{href:"https://drive.google.com/file/d/19fiP8DLc2sCzUdBivEgkhXhJH9E5tqAg/view?usp=sharing",children:"resume"})]}),Object(l.jsx)("h3",{children:"My proficiences"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"HTML"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"CSS"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"JavaScript"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"Node.js"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"Express.js"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"React"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"SQL, mySQL2"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"noSQL, MongoDB"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:"README Generation"})})]})]})};var z=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("a",{href:"https://www.linkedin.com/in/tonyhsiaotunghuang/",class:"fa fa-linkedin",rel:"noreferrer",target:"_blank"}),Object(l.jsx)("a",{href:"https://github.com/zoomzooom6",class:"fa fa-github",rel:"noreferrer",target:"_blank"}),Object(l.jsx)("a",{href:"https://twitter.com/thth107",class:"fa fa-twitter",rel:"noreferrer",target:"_blank"})]})})};var w=function(){var e=Object(r.useState)([{name:"About Me"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}]),t=Object(s.a)(e,1)[0],c=Object(r.useState)(t[0]),n=Object(s.a)(c,2),a=n[0],i=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{categories:t,setCurrentCategory:i,currentCategory:a}),Object(l.jsx)("main",{children:function(){switch(a.name){case"Contact":return Object(l.jsx)(v,{});case"Portfolio":return Object(l.jsx)(p,{});case"Resume":return Object(l.jsx)(y,{});default:return Object(l.jsx)(j,{})}}()}),Object(l.jsx)(z,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),C()}},[[14,1,2]]]);
//# sourceMappingURL=main.3509c9cc.chunk.js.map