(this["webpackJsonpform-table-display"]=this["webpackJsonpform-table-display"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(33),r=(a(42),a(0)),s=a(13),i=a(3),l=a(9),o=a(22),j=a(11),d=a(10);var b=function(e){var t=e.onValChange,a=e.formObject,n=e.onFormSubmit,c=e.onFileChange;return Object(d.jsxs)("div",{className:"row mb-4",children:[Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"number",className:"form-control",placeholder:"page-no",onChange:t,value:a.pageno,name:"pageno"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"date",placeholder:"date",className:"form-control",onChange:t,value:a.date,name:"date"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"time",className:"form-control",placeholder:"time",onChange:t,value:a.time,name:"time"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Title",onChange:t,value:a.Title,name:"Title"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"file",className:"form-control",onChange:c,name:"pdfFile"})}),Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)("input",{type:"submit",onClick:n,className:"btn btn-success"})})]})};var u=function(e){var t=e.tableData;return Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Id"}),Object(d.jsx)("th",{children:"page no"}),Object(d.jsx)("th",{children:"date"}),Object(d.jsx)("th",{children:"time"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"pdf_url"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:e.pageno}),Object(d.jsx)("td",{children:e.date}),Object(d.jsx)("td",{children:e.time}),Object(d.jsx)("td",{children:e.Title}),Object(d.jsx)("td",{children:e.pdf&&Object(d.jsx)("a",{href:e.pdf,target:"_blank",rel:"noopener noreferrer",children:"Link"})})]},t)}))})]})},p=a(28);a(47),a(46),a(44);p.a.apps.length||p.a.initializeApp({apiKey:"AIzaSyCMdoeLXriVDxfUNLszGbAyxLPqughLORU",authDomain:"fir-c8d46.firebaseapp.com",projectId:"fir-c8d46",storageBucket:"fir-c8d46.appspot.com",messagingSenderId:"911114993865",appId:"1:911114993865:web:ab9ba32d706c2007e50d18",measurementId:"G-B3Y00ZV34Z"});var m=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],m=Object(n.useState)({pageno:"",date:"",Title:"",pdf:"",time:""}),f=Object(j.a)(m,2),O=f[0],h=f[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tableData");e&&c(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("tableData",JSON.stringify(a))}),[a]);var x=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!!Object.values(O).every((function(e){return""===e}))){e.next=16;break}if(!O.pdfFile){e.next=12;break}return a=p.a.storage().ref(),n=a.child(O.pdfFile.name),e.next=8,n.put(O.pdfFile);case 8:return e.next=10,n.getDownloadURL();case 10:i=e.sent,O.pdf=i;case 12:c((function(e){return[].concat(Object(s.a)(e),[O])})),h({pageno:"",date:"",Title:"",pdf:"",time:""});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,n,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],n=p.a.storage().ref(),c=n.child(a.name),e.next=5,c.put(a);case 5:return e.next=7,c.getDownloadURL();case 7:s=e.sent,h((function(e){return Object(o.a)(Object(o.a)({},e),{},{pdf:s})}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(b,{onFileChange:g,onValChange:function(e){h((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},formObject:O,onFormSubmit:x}),Object(d.jsx)(u,{tableData:a})]})};var f=function(){return Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h2",{children:"Add files"}),Object(d.jsx)(m,{})]})},O=document.getElementById("root");Object(c.createRoot)(O).render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(f,{})}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ac94a4af.chunk.js.map