(this.webpackJsonpnasa_app=this.webpackJsonpnasa_app||[]).push([[0],{65:function(a,e,n){},66:function(a,e,n){},88:function(a,e,n){"use strict";n.r(e);var t=n(9),r=n(0),i=n.n(r),c=n(7),s=n.n(c),m=(n(65),n(31)),l=(n(66),n(49)),u=n.n(l),o=n(126),d=n(120),j=n(127),b=n(128);function h(a){var e=a.setRover;return Object(t.jsx)(d.a,{children:Object(t.jsxs)(j.a,{onChange:function(a){return e(a.target.value)},children:[Object(t.jsx)(b.a,{value:"curiosity",children:"Curiosity"}),Object(t.jsx)(b.a,{value:"opportunity",children:"Opportunity"}),Object(t.jsx)(b.a,{value:"spirit",children:"Spirit"})]})})}function f(a){var e=a.setCamera,n=a.camerasList;return Object(t.jsx)(d.a,{children:Object(t.jsx)(j.a,{onChange:function(a){return e(a.target.value)},children:n.map((function(a){return Object(t.jsx)(b.a,{value:a.name,children:a.fullname})}))})})}var p=n(129);function v(a){var e=a.setSol;return Object(t.jsx)(p.a,{id:"standard-basic",label:"Enter sol",type:"number",onChange:function(a){return e(a.target.value)}})}var O=function(){var a=Object(r.useState)(null),e=Object(m.a)(a,2),n=(e[0],e[1]),i=Object(r.useState)(""),c=Object(m.a)(i,2),s=c[0],l=c[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],p=j[1],O=Object(r.useState)(""),x=Object(m.a)(O,2),C=x[0],g=x[1],y=[];return"curiosity"===s?(y=[]).push({id:1,name:"fhaz",fullname:"Front Hazard Avoidance Camera"},{id:2,name:"rhaz",fullname:"Rear Hazard Avoidance Camera"},{id:3,name:"mast",fullname:"Mast Camera"},{id:4,name:"chemcam",fullname:"Chemistry and Camera Complex"},{id:5,name:"mahli",fullname:"Mars Hand Lens Imager"},{id:6,name:"mardi",fullname:"Mars Descent Imager"},{id:7,name:"navcam",fullname:"Navigation Camera"}):(y=[]).push({id:1,name:"fhaz",fullname:"Front Hazard Avoidance Camera"},{id:2,name:"rhaz",fullname:"Rear Hazard Avoidance Camera"},{id:3,name:"navcam",fullname:"Navigation Camera"},{id:4,name:"pancam",fullname:"Panoramic Camera"},{id:5,name:"minites",fullname:"Miniature Thermal"}),Object(r.useEffect)((function(){u.a.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xPuKdfjH5ud7bdVxmhtgn9iLEyHqxcNFpGoHtyJe").then((function(a){var e=a.data;n(e)}))}),[]),Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(o.a,{maxWidth:"sm",children:Object(t.jsxs)("div",{className:"form__block",children:[Object(t.jsx)(h,{rover:s,setRover:l}),Object(t.jsx)(f,{setCamera:p,camerasList:y}),Object(t.jsx)(v,{setSol:g}),Object(t.jsx)("button",{className:"get__btn",onClick:function(){return console.log(s,C,b)},children:"Get photos"})]})})})};s.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(O,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.f0f57e52.chunk.js.map