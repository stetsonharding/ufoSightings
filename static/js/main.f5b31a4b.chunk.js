(this["webpackJsonpufo-sightings"]=this["webpackJsonpufo-sightings"]||[]).push([[0],{54:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),c=a(23),s=a.n(c),o=a(28),l=a(18),r=a(38),j=(a(52),{apiKey:"".concat("AIzaSyCqU43nuIflopnQYa9BRxZ4lITSKimiOQ0"),authDomain:"ufosightings-8bf2a.firebaseapp.com",databaseURL:"https://ufosightings-8bf2a-default-rtdb.firebaseio.com",projectId:"ufosightings-8bf2a",storageBucket:"ufosightings-8bf2a.appspot.com",messagingSenderId:"37894039486",appId:"1:37894039486:web:8b281f906286bca12f7bef",measurementId:"G-89MW7TVG9P"});r.a.initializeApp(j);var d=r.a,h=a(32),u=(a(54),a(2));function b(){return Object(u.jsx)(o.b,{to:"/ufoSightings",children:Object(u.jsx)("button",{className:"enterButton",children:"Enter"})})}a(63);function O(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"heading_container",children:[Object(u.jsxs)("h1",{className:"ufoHeading",children:["Greetings, ",Object(u.jsx)("span",{children:"Earthling."})]}),Object(u.jsx)("p",{children:"UFO sightings around the united states."}),Object(u.jsx)(b,{})]})})}a(64);function x(){return Object(u.jsx)(h.a,{fluid:!0,className:"landingPage_container",children:Object(u.jsx)(O,{})})}a(65);var p=a(41),f=(a(68),a(29));function v(e){var t=e.lastKey,a=e.setLastKey,i=e.lastState,c=e.setLastState,s=e.setUfoSightings;Object(n.useEffect)((function(){window.scrollTo(0,0)}));return Object(u.jsxs)(h.a,{className:"button_container",children:[Object(u.jsx)(f.a,{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-arrow-left-square-fill previousBtn",viewBox:"0 0 16 16",onClick:function(){var e=[];p.a.database().ref("ufos").orderByChild("state").endBefore(t,i).limitToFirst(12).once("value").then((function(t){t.forEach((function(t){e.push(t.val()),c(t.val().state),a(t.key)})),s(e)}))},children:Object(u.jsx)("path",{d:"M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"})})}),Object(u.jsx)(f.a,{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-arrow-right-square-fill nextBtn",viewBox:"0 0 16 16",onClick:function(){var e=[];p.a.database().ref("ufos").orderByChild("state").startAt(i,t).limitToFirst(12).once("value").then((function(t){t.forEach((function(t){e.push(t.val()),c(t.val().state),a(t.key)})),s(e)})),console.log(t),console.log(i)},children:Object(u.jsx)("path",{d:"M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"})})})]})}a(69);var g=function(e){var t=e.userStateSelection,a=e.setUserStateSelection,n=e.setIsIconShown;return Object(u.jsx)("form",{className:"stateSelection_form",children:Object(u.jsxs)("select",{className:"stateSelection_select",name:"state",id:"state",value:t,onChange:function(e){a(e.target.value),n(!1)},children:[Object(u.jsx)("option",{defaultValue:!0,children:"Select Your State"}),Object(u.jsx)("option",{value:"al",children:"Alabama"}),Object(u.jsx)("option",{value:"ak",children:"Alaska"}),Object(u.jsx)("option",{value:"az",children:"Arizona"}),Object(u.jsx)("option",{value:"ar",children:"Arkansas"}),Object(u.jsx)("option",{value:"ca",children:"California"}),Object(u.jsx)("option",{value:"co",children:"Colorado"}),Object(u.jsx)("option",{value:"ct",children:"Connecticut"}),Object(u.jsx)("option",{value:"de",children:"Delaware"}),Object(u.jsx)("option",{value:"dc",children:"District Of Columbia"}),Object(u.jsx)("option",{value:"fl",children:"Florida"}),Object(u.jsx)("option",{value:"ga",children:"Georgia"}),Object(u.jsx)("option",{value:"hi",children:"Hawaii"}),Object(u.jsx)("option",{value:"id",children:"Idaho"}),Object(u.jsx)("option",{value:"il",children:"Illinois"}),Object(u.jsx)("option",{value:"in",children:"Indiana"}),Object(u.jsx)("option",{value:"ia",children:"Iowa"}),Object(u.jsx)("option",{value:"ks",children:"Kansas"}),Object(u.jsx)("option",{value:"ky",children:"Kentucky"}),Object(u.jsx)("option",{value:"la",children:"Louisiana"}),Object(u.jsx)("option",{value:"me",children:"Maine"}),Object(u.jsx)("option",{value:"md",children:"Maryland"}),Object(u.jsx)("option",{value:"ma",children:"Massachusetts"}),Object(u.jsx)("option",{value:"mi",children:"Michigan"}),Object(u.jsx)("option",{value:"mn",children:"Minnesota"}),Object(u.jsx)("option",{value:"ms",children:"Mississippi"}),Object(u.jsx)("option",{value:"mo",children:"Missouri"}),Object(u.jsx)("option",{value:"mt",children:"Montana"}),Object(u.jsx)("option",{value:"ne",children:"Nebraska"}),Object(u.jsx)("option",{value:"nv",children:"Nevada"}),Object(u.jsx)("option",{value:"nh",children:"New Hampshire"}),Object(u.jsx)("option",{value:"nj",children:"New Jersey"}),Object(u.jsx)("option",{value:"nm",children:"New Mexico"}),Object(u.jsx)("option",{value:"ny",children:"New York"}),Object(u.jsx)("option",{value:"nc",children:"North Carolina"}),Object(u.jsx)("option",{value:"nd",children:"North Dakota"}),Object(u.jsx)("option",{value:"oh",children:"Ohio"}),Object(u.jsx)("option",{value:"ok",children:"Oklahoma"}),Object(u.jsx)("option",{value:"or",children:"Oregon"}),Object(u.jsx)("option",{value:"pa",children:"Pennsylvania"}),Object(u.jsx)("option",{value:"ri",children:"Rhode Island"}),Object(u.jsx)("option",{value:"sc",children:"South Carolina"}),Object(u.jsx)("option",{value:"sd",children:"South Dakota"}),Object(u.jsx)("option",{value:"tn",children:"Tennessee"}),Object(u.jsx)("option",{value:"tx",children:"Texas"}),Object(u.jsx)("option",{value:"ut",children:"Utah"}),Object(u.jsx)("option",{value:"vt",children:"Vermont"}),Object(u.jsx)("option",{value:"va",children:"Virginia"}),Object(u.jsx)("option",{value:"wa",children:"Washington"}),Object(u.jsx)("option",{value:"wv",children:"West Virginia"}),Object(u.jsx)("option",{value:"wi",children:"Wisconsin"}),Object(u.jsx)("option",{value:"wy",children:"Wyoming"})]})})},m=(a(70),a.p+"static/media/GoogleMapIcon.07143ad7.svg"),S=a(36),w=a(27);function y(e){var t=e.ufoSightings,a=e.setIsModalShown,n=e.setLatitude,i=e.setLongitude,c=t.map((function(e,t){return Object(u.jsx)(S.a,{md:6,lg:6,xl:3,className:"UfoCard_ UfoCardContainer mt-5",children:Object(u.jsxs)(w.a.Body,{className:"UfoCard_ cardBody",children:[Object(u.jsxs)(w.a.Subtitle,{className:"mb-3  Subtitle",children:[Object(u.jsx)("span",{className:"span_subTitle"})," ",Object(u.jsx)("p",{children:e.city})]}),Object(u.jsxs)(w.a.Subtitle,{className:"mb-3 shape",children:["Shape: ",e.shape]}),Object(u.jsxs)(w.a.Subtitle,{className:"mb-3 datetime",style:{textTransform:"capitalize"},children:["Date & Time: ",e.datetime]}),Object(u.jsx)(w.a.Text,{className:"ufoCard__ description",children:e.comments}),Object(u.jsxs)("div",{className:"UfoCard__ googleMapContainer",children:[Object(u.jsx)("img",{className:"UfoCard__ googleMapIcon",src:m,alt:"Google map Icon",onClick:function(){return function(e){a(!0),n(e.latitude),i(e.longitude)}(e)}}),Object(u.jsx)("div",{className:"UfoCard__ uponHoverText",children:Object(u.jsx)("p",{children:"View on Google Maps"})})]})]})},t)}));return Object(u.jsx)(h.a,{children:Object(u.jsx)(f.a,{children:c})})}var N=a(26),C=a(47);function k(e){var t=e.onHide,a=e.show,n=e.latitude,i=e.longitude;return Object(u.jsxs)(N.a,{show:a,size:"lg",opacity:!0,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(u.jsx)(N.a.Header,{closeButton:!0,children:Object(u.jsx)(N.a.Title,{id:"contained-modal-title-vcenter",children:"UFO Sighting"})}),Object(u.jsxs)(N.a.Body,{children:[Object(u.jsx)("h4",{children:"Viewing with reported coordinates"}),Object(u.jsx)("iframe",{style:{width:"100%",height:"450px"},title:"UFO Sightings",src:"https://maps.google.com/maps?q=".concat(n,", ").concat(i,"&z=15&output=embed")})]}),Object(u.jsx)(N.a.Footer,{children:Object(u.jsx)(C.a,{onClick:t,children:"Close"})})]})}a(71);var U=function(){return Object(u.jsx)("div",{className:"ufoGiff_Wrapper",children:Object(u.jsxs)("div",{className:"ufoGiff_Container",children:[Object(u.jsx)("iframe",{className:"ufoGiff",title:"hello",src:"https://giphy.com/embed/26BoCVdjSJOWT0Fpu",width:"480",height:"360",frameBorder:"0",allowFullScreen:!0}),Object(u.jsx)("h3",{className:"UfoGiff_heading",children:"Tracking UFOs..."})]})})};var I=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{style:{color:"silver",letterSpacing:"1px",textAlign:"center",paddingTop:"1em",fontFamily:"monospace"},children:"Ufo Sightings"})})},M=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(0),o=Object(l.a)(s,2),r=o[0],j=o[1],d=Object(n.useState)(0),h=Object(l.a)(d,2),b=h[0],O=h[1],x=Object(n.useState)(!0),p=Object(l.a)(x,2),f=p[0],m=p[1],S=e.setUserStateSelection,w=e.userStateSelection,N=e.ufoSightings,C=e.lastState,M=e.setLastState,_=e.lastKey,B=e.setLastKey,T=e.setUfoSightings;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{setUserStateSelection:S,userStateSelection:w,setIsIconShown:m}),f?null:Object(u.jsx)(I,{}),Object(u.jsx)(y,{ufoSightings:N,setIsModalShown:c,setLatitude:j,setLongitude:O}),f?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(U,{})}):Object(u.jsx)(v,{lastKey:_,setLastKey:B,lastState:C,setLastState:M,setUfoSightings:T}),Object(u.jsx)(k,{show:i,onHide:function(){return c(!1)},ufoSightings:N,latitude:r,longitude:b})]})},_=(a(72),a(13));a(73);var B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("empty"),s=Object(l.a)(c,2),o=s[0],r=s[1],j=Object(n.useState)(""),h=Object(l.a)(j,2),b=h[0],O=h[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),v=f[0],g=f[1];return Object(n.useEffect)((function(){var e=[],t=d.database().ref("ufos");try{t.orderByChild("state").equalTo("".concat(o)).limitToFirst(12).once("value").then((function(t){t.forEach((function(t){e.push(t.val()),O(t.val().state),g(t.key)})),i(e)}))}catch(a){console.log(new Error("hello"))}}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"test"}),Object(u.jsxs)(_.c,{children:[Object(u.jsx)(_.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{})}),Object(u.jsx)(_.a,{path:"/ufoSightings",children:Object(u.jsx)(M,{setUserStateSelection:r,userStateSelection:o,ufoSightings:a,setUfoSightings:i,lastKey:v,lastState:b,setLastKey:g,setLastState:O})})]})]})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(B,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f5b31a4b.chunk.js.map