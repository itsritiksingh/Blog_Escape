(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(92)},45:function(e,t,a){},46:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=(a(45),a(1)),m=a(12),i=a(3),s=(a(46),a(7)),u=a.n(s),d=a(4),E=a(6);a(63);function g(e){var t=e.type,a=e.children,n=e.position,r=e.display,c=e.style,o=Object(E.a)(e,["type","children","position","display","style"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",Object.assign({className:"alert ".concat(t," ").concat(n)},o,{style:Object(d.a)({display:r?"block":"none"},c)}),a))}a(64);var p=function(e){var t=e.children;return Object(n.useEffect)((function(){var e=document.querySelectorAll("._adminSide .link"),t=document.querySelector("._adminSide");e.forEach((function(e){e.addEventListener("mouseup",(function(){e.children[0].classList.toggle("active")}))}));var a=document.querySelector("._mainNav_menu");return a.addEventListener("mouseup",(function(){t.classList.toggle("active")})),function(){a.removeEventListener("mouseup",(function(){})),e.forEach((function(e){e.addEventListener("mouseup",(function(){e.children[0].classList.toggle("active")}))}))}}),[]),l.a.createElement("div",{className:"_mainNav"},l.a.createElement("div",{className:"_mainNav_menu"},"\u2630"),l.a.createElement("div",{className:"_mainNav_child"},t))},h=function(e){var t=e.children,a=e.style;return l.a.createElement("div",{className:"_adminSide active",style:a},t)};a(65);function f(e){var t=e.type,a=e.children,n=e.style,r=Object(E.a)(e,["type","children","style"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",Object.assign({},r,{className:"basic ".concat(t),style:n}),a))}a(66),a(67);a(68),a(69),a(70),a(75);var b=function(e){var t=e.children,a=e.style;return Object(n.useEffect)((function(){var e=function(e){document.querySelectorAll("nav ul li a").forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),e.target.classList.contains("logo")||e.target.classList.add("active")},t=document.querySelector("nav.NavbarResponsive ul");return document.querySelector("nav.NavbarResponsive ul li.menu").addEventListener("click",(function(){document.querySelector("nav.NavbarResponsive ul").classList.toggle("drop")})),t.addEventListener("mouseover",e),t.addEventListener("click",e),function(){t.removeEventListener("mouseover",(function(){})),t.removeEventListener("click",(function(){}))}}),[]),l.a.createElement("nav",{className:"NavbarResponsive",style:a},l.a.createElement("ul",null,l.a.createElement("li",{className:"menu"}," \u2630"),t))};a(76);a(77);function y(e){var t=e.value,a=e.type,n=e.style,r=Object(E.a)(e,["value","type","style"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",Object.assign({},r,{className:"round ".concat(a),style:n}),t))}a(78);a(79);var v=function(e){var t=e.style,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"gridNav",style:t},l.a.createElement("ul",null,a)))},N=(a(80),function(e){var t=e.height,a=e.children,n=e.style,r=e.backgroundImage;return l.a.createElement("header",{style:Object(d.a)({height:t,backgroundImage:r},n)},a)}),x=(a(81),function(e){var t=e.children,a=e.className,n=e.style,r=Object(E.a)(e,["children","className","style"]);return l.a.createElement("div",Object.assign({},r,{className:"row ".concat(a||""),style:n}),t)}),w=function(e){var t=e.children,a=e.className,n=e.style,r=Object(E.a)(e,["children","className","style"]);return l.a.createElement("div",Object.assign({},r,{className:"column ".concat(a||""),style:n}),t)},O=(a(82),function(e){var t=e.style,a=e.children,n=e.padding,r=e.margin,c=e.textAlign;return l.a.createElement("div",{className:"_container",style:Object(d.a)({textAlign:c,padding:n,margin:r},t)},a)}),j=a(14),k=(a(83),function(e){var t=e.style,a=e.className,n=e.children,r=e.align;return l.a.createElement("div",Object(j.a)({className:"Typography",style:Object(d.a)({},t,{},{textAlign:r})},"className",a),n)}),I=(a(84),function(e){return Object(n.useEffect)((function(){var t=document.querySelectorAll(".hoverCard");if(e.expand)document.querySelectorAll(".hovercard.expand").forEach((function(e){e.addEventListener("mouseover",(function(){return e.style.transform="scale(1.1,1.1)"})),e.addEventListener("mouseout",(function(){return e.style.transform="scale(1,1)"}))}));else if(e.translateUp){document.querySelectorAll(".hovercard.translateUp").forEach((function(e){e.addEventListener("mouseover",(function(){return e.style.transform="translateY(8px)"})),e.addEventListener("mouseout",(function(){return e.style.transform="translateY(-8px)"}))}))}else if(e.translateDown){document.querySelectorAll(".hovercard.translateDown").forEach((function(e){e.addEventListener("mouseover",(function(){return e.style.transform="translateY(-8px)"})),e.addEventListener("mouseout",(function(){return e.style.transform="translateY(+8px)"}))}))}else if(e.shrink){document.querySelectorAll(".hovercard.shrink").forEach((function(e){e.addEventListener("mouseover",(function(){return e.style.transform="scale(0.9,0.9)"})),e.addEventListener("mouseout",(function(){return e.style.transform="scale(1,1)"}))}))}return t.forEach((function(e){return e.removeEventListener("mouseover",(function(){e.removeEventListener("mouseout")}))}))}),[e]),l.a.createElement("div",{onClick:e.onClick,className:e.expand?"hovercard expand":e.translateUp?"hovercard translateUp":e.translateDown?"hovercard translateDown":"hovercard shrink",style:Object(d.a)({backgroundImage:e.backgroundImage},e.style)},e.children)}),C=function(e){var t=e.height,a=e.width,n=e.style;return l.a.createElement("div",{style:Object(d.a)({height:t,width:a},n)})},A=(a(85),function(e){var t=e.children,a=e.display,r=e.setDisplay,c=e.style;return Object(n.useEffect)((function(){document.body.style.backgroundColor=a?"grey":"white"})),Object(n.useEffect)((function(){return window.addEventListener("mousedown",(function(e){var t=document.querySelector(".modal");e.target===t&&r(!1)})),function(){window.removeEventListener("mousedown",(function(){document.body.style.backgroundColor="white"}))}}),[]),l.a.createElement("div",{className:"modal",style:Object(d.a)({display:a?"block":"none"},c)},t)}),S=function(e){var t=e.color,a=e.width,n=e.style;return l.a.createElement("div",{style:Object(d.a)({backgroundColor:t||"black",width:a||"90%"},{height:"1px"},{},n)})},T=(a(86),a(87),function(e){var t=e.children,a=e.method,n=e.onSubmit,r=e.action,c=e.style;return l.a.createElement("form",{method:a,onSubmit:n,action:r,style:c},t)}),D=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(i.a)(c,2),s=m[0],d=m[1];return Object(n.useEffect)((function(){u.a.get("/getFeaturedBlog").then((function(e){r(e.data)})),u.a.get("/getRecent").then((function(e){d(e.data)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{height:"70vh",backgroundImage:"linear-gradient(100deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.04)) , url('http://uploads.webflow.com/560425adca8e085154729773/5614eb8fe8da77e53e25f7fc_photo-1439189741837-58720e8d82d5.jpg')"},l.a.createElement(b,{style:{backgroundColor:"transparent"}},l.a.createElement("li",{className:"logo"},l.a.createElement("a",{href:"/"},"Escape")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"/categories"},"CATEGORIES"))),l.a.createElement(x,null,l.a.createElement(w,{style:{margin:"auto",textAlign:"center"},className:"column-60"},l.a.createElement(k,{className:"display-3",style:{color:"white",margin:"3rem 0"}},"Let's do it together."),l.a.createElement(k,{className:"p lead",style:{color:"white",margin:"1.5rem 0"}},"We travel the world in search of stories. Come along for the ride."),l.a.createElement(f,{style:{backgroundColor:"orange",marginTop:"1.5rem"}},"View Latest Posts")))),l.a.createElement(v,{style:{backgroundColor:"white",color:"black"}},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/nature"},"Nature")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/photography"},"PhotoGraphy")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/relaxation"},"Relaxation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/vacation"},"Vacation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/travel"},"Travel")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/categories/adventure"},"Adventure"))),l.a.createElement(O,{padding:"0.5rem",textAlign:"center"},l.a.createElement(k,{className:"h3"},"Featured Posts"),l.a.createElement(O,{style:{padding:".5rem 0",margin:"auto"}},l.a.createElement(O,null,l.a.createElement(x,null,a&&a.map((function(e){return l.a.createElement(w,null,l.a.createElement(o.b,{to:"/posts/".concat(e._id)},l.a.createElement(I,{translateDown:!0,backgroundImage:"url(".concat(e.headerImg,")"),style:{padding:0}},l.a.createElement(O,{padding:"1rem",textAlign:"left"},l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px",style:{backgroundColor:"orange",display:"inline-block",width:"auto"}},l.a.createElement(k,{className:"small"},e.category.toUpperCase())),l.a.createElement(O,{margin:" 4rem 0 15px 0",padding:"5px 10px"},l.a.createElement(k,{className:"h5",style:{color:"white"}},e.title)),l.a.createElement(S,{color:"grey",width:"100%",style:{margin:"5px 0"}}),l.a.createElement(O,{padding:"0"},l.a.createElement(x,null,l.a.createElement(w,null,e.authorName),l.a.createElement(w,{className:"column-offset-33"},e.DateTime)))))))}))))),l.a.createElement(C,{height:"2rem",width:"100%"}),l.a.createElement(k,{className:"h3"},"Recents Posts"),s&&function(e){for(var t=[],a=[],n=0;n<e.length;n+=3)t.push(e.slice(n,n+3).map((function(e){return l.a.createElement(w,null,l.a.createElement(o.b,{to:"/posts/".concat(e._id)},l.a.createElement(I,{translateDown:!0,backgroundImage:"url(".concat(e.headerImg,")"),style:{padding:0}},l.a.createElement(O,{padding:"1rem",textAlign:"left"},l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px",style:{width:"auto",backgroundColor:"orange",display:"inline-block"}},l.a.createElement(k,{className:"small"},e.category)),l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px"},l.a.createElement(k,{className:"h5",style:{color:"white"}},e.title)),l.a.createElement(S,{color:"grey",width:"100%",style:{margin:"5px 0"}}),l.a.createElement(O,{padding:"0",flex:!0,justifyContent:"space-between",style:{color:"white"}},l.a.createElement(x,null,l.a.createElement(w,{className:"column-33"},l.a.createElement(k,{className:"small"},e.authorName)),l.a.createElement(w,{className:"column-33 column-offset-25"},l.a.createElement(k,{className:"small"},e.DateTime))))))))})));return console.log(t),a.push(t.map((function(e){return l.a.createElement(x,{style:{margin:"3rem 0"},className:"row-no-padding"},e)}))),a}(s)),l.a.createElement(O,{style:{backgroundImage:"linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2))"}}))},_=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(null),s=Object(i.a)(m,2),d=s[0],E=s[1];return Object(n.useEffect)((function(){c(e.location.pathname.slice(e.location.pathname.lastIndexOf("/")+1))}),[]),Object(n.useEffect)((function(){console.log(r),u.a.get("/getBlogById",{params:{_id:r}}).then((function(e){E(e.data)}))}),[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{height:"70vh",backgroundImage:d&&"url(".concat(d[0].headerImg,")")},l.a.createElement(b,{style:{backgroundColor:"transparent"}},l.a.createElement("li",{className:"logo"},l.a.createElement(o.b,{href:"/"},"Escape")),l.a.createElement("li",null,l.a.createElement(o.b,{href:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement(o.b,{href:"/categories"},"CATEGORIES")),l.a.createElement("li",null,l.a.createElement(o.b,{href:"/about"},"ABOUT")),l.a.createElement("li",null,l.a.createElement(o.b,{href:"/contact"},"CONTACT")))),l.a.createElement(O,{textAlign:"center",padding:"5rem"},l.a.createElement(k,{className:"display-4"},d&&d[1].title),l.a.createElement(k,{className:"lead"},d&&d[1].DateTime),l.a.createElement(S,{width:"60%",style:{margin:"auto"}}),l.a.createElement(O,{textAlign:"center",padding:"5rem 0"},l.a.createElement(k,null,l.a.createElement("div",{dangerouslySetInnerHTML:d&&{__html:d[0].body}})),l.a.createElement(C,{style:{margin:"2rem 0"}}),l.a.createElement(k,{className:"h3"},"How To Create A Readable Blog?"),l.a.createElement(C,{style:{margin:"2rem 0"}}),l.a.createElement(k,{style:{lineHeight:"1.5em"}},"Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do."))))},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{height:"70vh",backgroundImage:"linear-gradient(100deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.04)) , url('http://uploads.webflow.com/560425adca8e085154729773/5614eb8fe8da77e53e25f7fc_photo-1439189741837-58720e8d82d5.jpg')"},l.a.createElement(b,{style:{backgroundColor:"transparent"}},l.a.createElement("li",{className:"logo"},l.a.createElement("a",{href:"/"},"Escape")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"/categories"},"CATEGORIES"))),l.a.createElement(x,{className:"row-center",style:{height:"65%"}},l.a.createElement(k,{className:"display-2",style:{color:"white"}},"Categories"))),l.a.createElement(O,{padding:"5rem"},l.a.createElement(x,null,l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/nature"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed199343713a5819b372_photo-1433890070408-084b6b305d72.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Nature")))),l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/photography"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed0ae8da77e53e25f843_photo-1416949929422-a1d9c8fe84af.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Photography")))),l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/relaxation"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed3b20fa552c1b077720_photo-1436916154952-3aeb6d98001a.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Relaxation"))))),l.a.createElement(x,null,l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/vacation"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed69e8da77e53e25f859_photo-1440558899941-2b58b4b0e6ad.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Vacation")))),l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/travel"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed459343713a5819b380_photo-1437846972679-9e6e537be46e.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Travel")))),l.a.createElement(w,null,l.a.createElement(o.b,{to:"./categories/adventure"},l.a.createElement(I,{translateDown:!0,style:{padding:"7rem 0",textAlign:"center",backgroundImage:"url('https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ed85e8da77e53e25f85e_photo-1436285122087-89584a1d9398.jpg')"}},l.a.createElement(k,{className:"h1",style:{color:"white"}},"Adventure")))))))},L=a(19),R=a.n(L),B=function(e){var t=e.blogDetail,a=Object(n.useRef)(null),r=Object(n.useState)(null),c=Object(i.a)(r,2),o=c[0],m=c[1];function s(e){m(Object(d.a)({},o,{},Object(j.a)({},e.target.name,e.target.value)))}return Object(n.useEffect)((function(){}),[o]),l.a.createElement(T,{method:"post",action:"/updateBlog"},l.a.createElement("input",{type:"hidden",name:"_id",value:t[1]._id}),l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"title",placeholder:"Title",id:"name",value:t[1].title,onChange:function(e){t[1].title=e.target.value,s(e)}}),l.a.createElement("label",{htmlFor:"datetime"},"Datetime"),l.a.createElement("input",{type:"date",name:"DateTime",placeholder:"Title",id:"datetime",value:t[1].DateTime,onChange:function(e){t[1].DateTime=e.target.value,s(e)}}),l.a.createElement("label",{htmlFor:"author"},"Author"),l.a.createElement("input",{type:"text",name:"authorName",placeholder:"Author",id:"author",value:t[1].authorName,onChange:function(e){t[1].authorName=e.target.value,s(e)}}),l.a.createElement("label",{htmlFor:"headerImg"},"Header Image"),l.a.createElement("input",{type:"text",name:"headerImg",id:"headerImg",placeholder:"Header Image Url",value:t[0].headerImg,onChange:function(e){t[0].headerImg=e.target.value,s(e)}}),l.a.createElement("label",{htmlFor:"category"},"category"),l.a.createElement("select",{name:"category",id:"category",value:t[1].category,onChange:function(e){t[1].category=e.target.value,s(e)}},l.a.createElement("option",{value:"nature",defaultValue:!0},"Nature"),l.a.createElement("option",{value:"relaxation"},"Relaxation"),l.a.createElement("option",{value:"adventure"},"Adventure"),l.a.createElement("option",{value:"travel"},"Travel"),l.a.createElement("option",{value:"Vacation"},"Vacation"),l.a.createElement("option",{value:"photography"},"Photograhy")),l.a.createElement("label",{htmlFor:"body"},"body"),l.a.createElement(R.a,{ref:a,tabIndex:1,name:"body",value:t[0].body,onChange:function(e){t[0].body=e,m(Object(d.a)({},o,{},{body:e}))}}),l.a.createElement("label",{htmlFor:"featied"},"Is Featured"),l.a.createElement("select",{name:"featured",id:"Featured",value:t[1].featured,onChange:function(e){t[1].title=e.target.value,s(e)}},l.a.createElement("option",{value:"true"},"True"),l.a.createElement("option",{value:"false",defaultValue:!0},"False")),l.a.createElement(y,{value:"submit",type:"success",onClick:function(){u.a.post("/updateBlog",{formData:o}).then((function(e){return document.forms[0].reset()}))}}))},q=a(39),V=a(37),H=(a(91),function(e){var t=e.category,a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)(!1),s=Object(i.a)(m,2),d=s[0],E=s[1],p=Object(n.useState)([]),h=Object(i.a)(p,2),f=h[0],b=h[1];return Object(n.useEffect)((function(){u.a.get("/getBlogByCategory",{params:{category:t}}).then((function(e){o(e.data)}))}),[t]),l.a.createElement(l.a.Fragment,null,0==f.length?null:l.a.createElement(g,{display:f.length,type:"danger",onClick:function(){E(!0)},position:"bottomRight",style:{width:"5rem"}},l.a.createElement(V.a,{icon:"trash-alt",size:"sm"})),c?function(e){if(e){for(var t=[],a=[],n=0;n<e.length;n+=3)t.push(e.slice(n,n+3).map((function(e){return l.a.createElement(w,{onClick:function(t){t.currentTarget.children[0].className.includes("hovercard")&&(t.currentTarget.children[0].classList.toggle("borderRed"),f.includes(e._id)?f.splice(f.indexOf(e._id),1):f.push(e._id),b(Object(q.a)(f)))}},l.a.createElement(I,{translateDown:!0,backgroundImage:"url(".concat(e.headerImg,")"),style:{padding:0}},l.a.createElement(O,{padding:"1rem",textAlign:"left"},l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px",style:{width:"auto",backgroundColor:"orange",display:"inline-block"}},l.a.createElement(k,{className:"small"},e.category)),l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px"},l.a.createElement(k,{className:"h5",style:{color:"white"}},e.title)),l.a.createElement(S,{color:"grey",width:"100%",style:{margin:"5px 0"}}),l.a.createElement(O,{padding:"0",flex:!0,justifyContent:"space-between",style:{color:"white"}},l.a.createElement(x,null,l.a.createElement(w,{className:"column-33"},l.a.createElement(k,{className:"small"},e.authorName)),l.a.createElement(w,{className:"column-33 column-offset-25"},l.a.createElement(k,{className:"small"},e.DateTime)))))))}))),a.push(t.map((function(e){return l.a.createElement(x,{className:"row-no-padding"},e)})));return a}}(c):null,l.a.createElement(A,{display:d,setDisplay:E},l.a.createElement(O,{style:{width:"40%",backgroundColor:"white"},padding:"5rem 2.5rem 0 2.5rem"},l.a.createElement(k,{className:"h3"},"Do you want to delete ".concat(f.length," blogs"),l.a.createElement(C,{height:"10rem"}),l.a.createElement(x,null,l.a.createElement(w,{className:"column-offset-40"},l.a.createElement(y,{type:"danger",value:"Delete",onClick:function(){var e={_id:f};u.a.get("/deleteBlogId",{params:e}).then((function(e){return console.log(e.data),window.location.reload()}))}})),l.a.createElement(w,null,l.a.createElement(y,{type:"info",value:"Cancel",onClick:function(){return E(!1)}})))))))}),U=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],d=Object(n.useState)(null),E=Object(i.a)(d,2),g=E[0],f=E[1],b=Object(n.useState)(null),v=Object(i.a)(b,2),N=v[0],j=v[1],C=Object(n.useState)(null),A=Object(i.a)(C,2),D=(A[0],A[1]),_=Object(n.useState)(null),F=Object(i.a)(_,2),L=F[0],q=F[1];function V(e){return l.a.createElement(m.a,{to:"/admin"})}return Object(n.useEffect)((function(){u.a.get("http://localhost:5000/getBlogByCategory",{params:{category:c}}).then((function(e){j(e.data)}))}),[c]),Object(n.useEffect)((function(){var t=e.location.pathname;"/admin"==t?f("insert"):t.includes("/admin/update-")?(f("update"),s(t.slice(t.lastIndexOf("-")+1))):t.includes("/admin/delete-")?(f("delete"),s(t.slice(t.lastIndexOf("-")+1))):t.includes("/admin/update/")&&(D(t.slice(t.lastIndexOf("/")+1)),u.a.get("/getBlogById",{params:{_id:t.slice(t.lastIndexOf("/")+1)}}).then((function(e){q(e.data)})),f("updateById"))}),[e.location]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null,l.a.createElement(o.b,{to:"/"},"Escape"),l.a.createElement(h,null,l.a.createElement("div",{className:"category"},l.a.createElement("div",{className:"link"},l.a.createElement(o.b,{to:"/admin"},"Insert a Blog"))),l.a.createElement("div",{className:"link"},"Update",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-nature"},"Nature")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-relaxation"},"Relaxation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-adventure"},"Adventure")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-vacation"},"Vacation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-travel"},"Travel")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/update-photography"},"Photograhy")))),l.a.createElement("div",{className:"link"},"Delete",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-nature"},"Nature")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-relaxation"},"Relaxation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-adventure"},"Adventure")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-vacation"},"Vacation")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-travel"},"Travel")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/admin/delete-photography"},"Photograhy")))))),l.a.createElement(O,null,g&&"insert"===g?l.a.createElement(T,{method:"post",action:"/insertBlog"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"title",placeholder:"Title",id:"name"}),l.a.createElement("label",{htmlFor:"datetime"},"Datetime"),l.a.createElement("input",{type:"date",name:"DateTime",placeholder:"Title",id:"datetime"}),l.a.createElement("label",{htmlFor:"author"},"Author"),l.a.createElement("input",{type:"text",name:"authorName",placeholder:"Author",id:"author"}),l.a.createElement("label",{htmlFor:"headerImg"},"Header Image"),l.a.createElement("input",{type:"text",name:"headerImg",id:"headerImg",placeholder:"Header Image Url"}),l.a.createElement("label",{htmlFor:"category"},"category"),l.a.createElement("select",{name:"category",id:"category"},l.a.createElement("option",{value:"nature",defaultValue:!0},"Nature"),l.a.createElement("option",{value:"relaxation"},"Relaxation"),l.a.createElement("option",{value:"adventure"},"Adventure"),l.a.createElement("option",{value:"travel"},"Travel"),l.a.createElement("option",{value:"Vacation"},"Vacation"),l.a.createElement("option",{value:"photography"},"Photograhy")),l.a.createElement("label",{htmlFor:"body"},"body"),l.a.createElement(R.a,{ref:t,tabIndex:1,name:"body"}),l.a.createElement("label",{htmlFor:"featied"},"Is Featured"),l.a.createElement("select",{name:"featured",id:"Featured"},l.a.createElement("option",{value:"true"},"True"),l.a.createElement("option",{value:"false",defaultValue:!0},"False")),l.a.createElement(y,{value:"submit",type:"success",onClick:V})):"update"===g?function(e){if(e){for(var t=[],a=[],n=0;n<e.length;n+=3)t.push(e.slice(n,n+3).map((function(e){return l.a.createElement(w,null,l.a.createElement(o.b,{to:"/admin/update/".concat(e._id)},l.a.createElement(I,{translateDown:!0,backgroundImage:"url(".concat(e.headerImg,")"),style:{padding:0}},l.a.createElement(O,{padding:"1rem",textAlign:"left"},l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px",style:{width:"auto",backgroundColor:"orange",display:"inline-block"}},l.a.createElement(k,{className:"small"},e.category)),l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px"},l.a.createElement(k,{className:"h5",style:{color:"white"}},e.title)),l.a.createElement(S,{color:"grey",width:"100%",style:{margin:"5px 0"}}),l.a.createElement(O,{padding:"0",flex:!0,justifyContent:"space-between",style:{color:"white"}},l.a.createElement(x,null,l.a.createElement(w,{className:"column-33"},l.a.createElement(k,{className:"small"},e.authorName)),l.a.createElement(w,{className:"column-33 column-offset-25"},l.a.createElement(k,{className:"small"},e.DateTime))))))))}))),a.push(t.map((function(e){return l.a.createElement(x,{className:"row-no-padding"},e)})));return a}}(N):"updateById"===g?L?l.a.createElement(B,{blogDetail:L}):null:"delete"===g&&c?l.a.createElement(H,{category:c}):null))},P=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(null),s=Object(i.a)(m,2),d=s[0],E=s[1];return Object(n.useEffect)((function(){c(e.location.pathname.slice(e.location.pathname.lastIndexOf("/")+1))}),[e]),Object(n.useEffect)((function(){u.a.get("/getBlogByCategory",{params:{category:r}}).then((function(e){console.log(e.data),E(e.data)}))}),[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{height:"60vh",backgroundImage:"linear-gradient(100deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.04)) , url('http://uploads.webflow.com/560425adca8e085154729773/5614eb8fe8da77e53e25f7fc_photo-1439189741837-58720e8d82d5.jpg')"},l.a.createElement(b,{style:{backgroundColor:"transparent"}},l.a.createElement("li",{className:"logo"},l.a.createElement("a",{href:"/"},"Escape")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"/categories"},"CATEGORIES"))),l.a.createElement(x,{className:"row-center",style:{paddingTop:"8rem"}},l.a.createElement(k,{className:"h5"},"Showing all posts in")),l.a.createElement(x,{className:"row-center"},l.a.createElement(k,{className:"display-2",style:{color:"white"}},r&&r.toUpperCase()))),l.a.createElement(O,{padding:"5rem"},d&&function(e){for(var t=[],a=[],n=0;n<e.length;n+=3)t.push(e.slice(n,n+3).map((function(e){return l.a.createElement(w,{className:"column-33"},l.a.createElement(o.b,{to:"/posts/".concat(e._id)},l.a.createElement(I,{translateDown:!0,backgroundImage:"url(".concat(e.headerImg,")"),style:{padding:0}},l.a.createElement(O,{padding:"1rem",textAlign:"left"},l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px",style:{width:"auto",backgroundColor:"orange",display:"inline-block"}},l.a.createElement(k,{className:"small"},e.category)),l.a.createElement(O,{margin:" 0 0 15px 0",padding:"5px 10px"},l.a.createElement(k,{className:"h5",style:{color:"white"}},e.title)),l.a.createElement(S,{color:"grey",width:"100%",style:{margin:"5px 0"}}),l.a.createElement(O,{padding:"0",flex:!0,justifyContent:"space-between",style:{color:"white"}},l.a.createElement(x,null,l.a.createElement(w,{className:"column-33"},l.a.createElement(k,{className:"small"},e.authorName)),l.a.createElement(w,{className:"column-33 column-offset-25"},l.a.createElement(k,{className:"small"},e.DateTime))))))))}))),a.push(t.map((function(e){return l.a.createElement(x,{className:"row-no-padding"},e)})));return a}(d)))},z=a(16),M=a(38);z.b.add(M.a);var G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(m.b,{exact:!0,path:"/",component:D}),l.a.createElement(m.b,{exact:!0,path:"/categories",component:F}),l.a.createElement(m.b,{path:"/categories",component:P}),l.a.createElement(m.b,{path:"/posts",component:_}),l.a.createElement(m.b,{path:"/admin",component:U})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.16f19638.chunk.js.map