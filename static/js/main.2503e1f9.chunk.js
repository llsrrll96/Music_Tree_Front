(this.webpackJsonpmusictree=this.webpackJsonpmusictree||[]).push([[0],{109:function(e,t,n){},194:function(e,t,n){},240:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(14),s=n.n(i),r=(n(194),n(69)),o=n(15),l=n(62),d=n(302),j=n.p+"static/media/tree.c622d5b2.png",u=(n(109),n(2));var b=function(){return Object(u.jsxs)("div",{className:"flex-container",children:[Object(u.jsx)("div",{className:"tree-img",children:Object(u.jsx)("img",{src:j,alt:""})}),Object(u.jsx)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(u.jsx)(r.b,{to:"/prediction2",children:Object(u.jsx)(l.a,{style:{maxWidth:"300px",minWidth:"300px"},variant:"outlined",children:"Start"})})})]})},h=n(6),m=n(70),O=n.n(m),p=n(308),x=n(79),f=n(118),v=O.a.connect("".concat("http://localhost:5000/prediction")),g=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),r=Object(h.a)(s,2),d=r[0],j=r[1],b=Object(c.useState)(""),m=Object(h.a)(b,2),O=m[0],x=m[1];return d?Object(u.jsx)(o.a,{to:{pathname:"/Result",state:O}}):Object(u.jsxs)("div",{className:"search-flex-container",children:[console.log(e),Object(u.jsx)("div",{className:"search-input-box",children:Object(u.jsxs)("form",{className:"input",noValidate:!0,autoComplete:"off",children:[Object(u.jsx)(p.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper",children:Object(u.jsx)(f.a,{required:!0,id:"lyrics-required",label:"\uac00\uc0ac \uc785\ub825"})}),Object(u.jsxs)(p.a,{className:"search-box",display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper",children:[Object(u.jsx)("div",{className:"search-send-button",children:Object(u.jsx)(l.a,{id:"sendBtn",onClick:function(){i(document.getElementById("lyrics-required").value),console.log(a),v.emit("lyrics_find",{socketId:e,lyricsInput:a}),v.on("answer",(function(e){x(e.song_answer),j(!0)}))},variant:"outlined",color:"primary",children:"\ubcf4\ub0b4\uae30"})}),Object(u.jsx)("div",{className:"search-unknown-button",children:Object(u.jsx)(l.a,{id:"unknownBtn",onClick:function(){},variant:"outlined",color:"secondary",children:"\ubaa8\ub984"})})]})]})})]})},N=O.a.connect("".concat("http://localhost:5000/prediction"));var y=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(h.a)(i,2),r=s[0],b=s[1],m=Object(c.useState)(""),O=Object(h.a)(m,2),f=O[0],v=O[1],y=Object(c.useState)(!0),w=Object(h.a)(y,2),k=w[0],S=w[1],C=Object(c.useState)(!1),q=Object(h.a)(C,2),I=q[0],A=(q[1],Object(c.useState)(!1)),_=Object(h.a)(A,2),P=_[0],E=(_[1],Object(c.useState)("0")),B=Object(h.a)(E,2),D=B[0];function R(){console.log("\uc11c\ubc84 \ub370\uc774\ud130"),N.emit("question",{socketId:N.id}),N.on("response",(function(e){a(e),b(e.question_type),console.log(e),console.log("\ubc84\ud2bc: "+e.question_type)}))}function T(e){return k&&(v(N.id),N.emit("join",{socketId:N.id},(function(){N.on("jresponse",(function(e){console.log("\uc18c\ucf13 "+e.socketId),R(e.socketId)}))})),S(!1)),Object(u.jsx)("div",{className:"question-body",children:Object(u.jsx)(d.a,{container:!0,justify:"center",alignItems:"center",children:Object(u.jsx)(x.a,{component:"div",children:Object(u.jsxs)(p.a,{display:"flex",m:1,border:1,width:300,children:[Object(u.jsx)(p.a,{p:1,bgcolor:"info.main",width:50,textAlign:"center",children:Object(u.jsx)("p",{className:"question-text",children:e.step})}),Object(u.jsx)(p.a,{p:1,children:Object(u.jsx)("p",{className:"question-text",width:1/4,children:e.question_type_name})})]})})})})}B[1],Object(c.useEffect)((function(){console.log(n),T(n),F(r)}));var F=function(e){return e&&e.map((function(e){return Object(u.jsx)(l.a,{onClick:function(){return function(e){var t={btnValue:e,socketId:N.id};N.emit("answer",t),R()}(e)},value:"btn",style:{maxWidth:"300px",minWidth:"300px"},variant:"outlined",children:e})}))};return I?Object(u.jsx)(o.a,{to:{pathname:"/Result",state:D}}):P?Object(u.jsx)(g,{socketId:f}):Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("div",{className:"search-tree-img ",children:Object(u.jsx)("img",{src:j,alt:""})}),Object(u.jsx)("div",{className:"question",children:T(n)}),Object(u.jsx)("div",{className:"flex-container",children:Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:F(n.question_type)})})})]})},w=n(305),k=O.a.connect("".concat("http://localhost:5000/prediction"));var S=function(){var e=Object(c.useState)(!0),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(h.a)(i,2),r=s[0],b=s[1],m=Object(c.useState)([]),O=Object(h.a)(m,2),v=(O[0],O[1]),g=Object(c.useRef)(!1);function N(){a(!0),console.log("\uc11c\ubc84 \ub370\uc774\ud130"),k.emit("question",{socketId:k.id}),k.on("response",(function(e){b(e),v(e.question_type),console.log(e),console.log("\ubc84\ud2bc: "+e.question_type),a(!1),k.off("response")}))}var y=function(e){if(e.preventDefault(),"sendBtn"===e.currentTarget.id){var t=document.getElementById("lyrics-required").value;console.log("\uac00\uc0ac: "+t),t?(k.emit("lyrics_find",{socketId:k.id,lyricsInput:t}),k.on("answer",(function(e){b(e)}))):alert("\uac00\uc0ac\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.")}else k.emit("lyrics_find",{socketId:k.id,lyricsInput:""}),k.on("answer",(function(e){b(e)}))};Object(c.useEffect)((function(){console.log("\ub9c8\uc6b4\ud2b8\ub420\ub54c\ub9cc \uc2e4\ud589\ub41c\ub2e4."),g.current||(g.current=!0,k.emit("join",{socketId:k.id}))}),[]),Object(c.useEffect)((function(){console.log("\ub80c\ub354\ub9c1 \ub420\ub54c\ub9c8\ub2e4 \uc2e4\ud589"),g.current?(console.log("\uc5f0\uacb0\uc131\uacf5\uc2dc \uc2e4\ud589"),N()):console.log("false")}),[]);var S=function(e){return e&&e.map((function(e){return Object(u.jsx)(l.a,{onClick:function(t){return function(e,t){e.preventDefault(),console.log("btn: "+t);var n={btnValue:t,socketId:k.id};k.emit("answer",n),k.on("answer",(function(e){console.log("answer: "+e.result),N(),k.off("answer")}))}(t,e)},value:"btn",style:{maxWidth:"300px",minWidth:"300px"},variant:"outlined",children:e},e)}))};return Object(u.jsxs)("div",{className:"main",children:[console.log("question: "+r),Object(u.jsx)("div",{className:"search-tree-img ",children:Object(u.jsx)("img",{src:j,alt:""})}),n&&Object(u.jsx)(w.a,{}),function(e){return"1"===e.type?Object(u.jsx)("div",{className:"question-body",children:Object(u.jsx)(d.a,{container:!0,justify:"center",alignItems:"center",children:Object(u.jsx)(x.a,{component:"div",children:Object(u.jsxs)(p.a,{display:"flex",m:1,border:1,width:300,children:[Object(u.jsx)(p.a,{p:1,bgcolor:"info.main",width:50,textAlign:"center",children:Object(u.jsx)("p",{className:"question-text",children:e.step})}),Object(u.jsx)(p.a,{p:1,children:Object(u.jsx)("p",{className:"question-text",width:1/4,children:e.question_type_name})})]})})})}):"2"===e.type?(console.log("\uac00\uc0ac"),Object(u.jsx)("div",{className:"search-flex-container",children:Object(u.jsx)("div",{className:"search-input-box",children:Object(u.jsxs)("form",{className:"input",noValidate:!0,autoComplete:"off",children:[Object(u.jsx)(p.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper",children:Object(u.jsx)(f.a,{required:!0,id:"lyrics-required",label:"\uac00\uc0ac \uc785\ub825"})}),Object(u.jsxs)(p.a,{className:"search-box",display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper",children:[Object(u.jsx)("div",{className:"search-send-button",children:Object(u.jsx)(l.a,{id:"sendBtn",onClick:y,variant:"outlined",color:"primary",children:"\ubcf4\ub0b4\uae30"})}),Object(u.jsx)("div",{className:"search-unknown-button",children:Object(u.jsx)(l.a,{id:"unknownBtn",onClick:y,variant:"outlined",color:"secondary",children:"\ubaa8\ub984"})})]})]})})})):"3"===e.type?Object(u.jsx)(o.a,{to:{pathname:"/Result",song:e}}):void 0}(r),Object(u.jsx)("div",{className:"flex-container",children:Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:S(r.question_type)})})})]})},C=n(161);n(240);var q=function(e){var t=e.location.song,n={width:"100%",height:"480px",playerVars:{autoplay:1}};return Object(c.useEffect)((function(){void 0===e.location.song&&e.history.push("/")})),e.location.song?Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"songinfo-border",children:[Object(u.jsxs)("div",{className:"songinfo",children:[Object(u.jsx)("h5",{children:t.title}),Object(u.jsx)("p",{children:t.artist}),Object(u.jsx)("p",{children:t.album}),Object(u.jsx)("p",{children:t.genre}),Object(u.jsx)("p",{children:t.lyrics})]}),Object(u.jsx)("div",{className:"songinfo-wrapper",children:Object(u.jsx)(C.a,{videoId:"-Axm4IYHVYk",opts:n})})]})}):Object(u.jsxs)("div",{children:[alert("\ub2e4\uc2dc \uc2dc\uc791\ud574 \uc8fc\uc138\uc694."),"\ub2e4\uc2dc \uc2dc\uc791\ud574 \uc8fc\uc138\uc694."]})},I=n(25),A=n.n(I),_=n(55),P=n(47),E=n.n(P);n(86);var B=function(e){var t=e.menu;return!0===e.isActive?Object(u.jsx)("div",{className:"sidebar-item active",children:Object(u.jsx)("p",{children:t.name})}):Object(u.jsx)("div",{className:"sidebar-item ",children:Object(u.jsx)("p",{children:t.name})})};var D=function(){var e=Object(o.g)().pathname;return Object(u.jsx)("div",{className:"sidebar",children:[{name:"\ub178\ub798\ucd94\uac00",path:"/admin/add"},{name:"\ub178\ub798\ubaa9\ub85d",path:"/admin"}].map((function(t,n){return Object(u.jsx)(r.b,{to:t.path,children:Object(u.jsx)(B,{menu:t,isActive:e===t.path})},n)}))})},R=n(97),T=n(165),F=n.n(T),V=n(99),M=n.n(V),W=n(7),L=n(306),z=Object(W.a)((function(e){return{root:{color:e.palette.getContrastText(L.a[500]),backgroundColor:L.a[500],"&:hover":{backgroundColor:L.a[700]}}}}))(l.a),G=[{field:"id",headerName:"ID"},{field:"title",headerName:"\uc81c\ubaa9",width:130},{field:"artist",headerName:"\uac00\uc218",width:130},{field:"album",headerName:"\uc568\ubc94",width:130},{field:"ost",headerName:"OST",type:"number",width:100},{field:"rel_date",headerName:"DATE",width:120},{field:"genre",headerName:"\uc7a5\ub974",type:"number",width:90},{field:"group_type",headerName:"\uc720\ud615",type:"number",width:90},{field:"gender",headerName:"\uc131\ubcc4",type:"number",width:90},{field:"feat",headerName:"Feat",width:100},{field:"relevance",headerName:"\uad00\ub828\uc131",width:110,editable:!0},{field:"mood",headerName:"\ubd84\uc704\uae30",width:100,editable:!0},{field:"lyrics",headerName:"\uac00\uc0ac",width:200,editable:!0},{field:"words",headerName:"\uae30\ud0c0",width:100,editable:!0}];var J=function(){var e="localhost",t=Object(c.useState)([]),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),r=Object(h.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)({}),b=Object(h.a)(j,2),m=b[0],O=b[1],p=Object(c.useState)(""),x=Object(h.a)(p,2),f=(x[0],x[1]),v=Object(c.useState)([]),g=Object(h.a)(v,2),N=g[0],y=g[1],w=Object(c.useState)({}),k=Object(h.a)(w,2),S=k[0],C=k[1],q=Object(c.useState)(1),I=Object(h.a)(q,2),P=I[0],B=I[1];Object(c.useEffect)((function(){T(P)}),[]);var T=function(t){function n(){return(n=Object(_.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,E.a.get("http://"+e+":5000/song-info?index="+t).then((function(e){i(e.data),d(!1)}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},V=Object(c.useCallback)((function(e){O(e.model),f(Object.keys(e.model)[0])}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("header",{className:"admini-header",children:"\ub178\ub798 \ubaa9\ub85d"})}),Object(u.jsxs)("div",{className:"admini-main",children:[Object(u.jsx)("div",{className:"admini-sidebar",children:Object(u.jsx)(D,{})}),Object(u.jsxs)("div",{className:"admini-content",children:[Object(u.jsx)("div",{style:{height:600,width:"100%"},children:Object(u.jsx)(R.a,{className:"datagrid",rows:a,columns:G,loading:o,pageSize:100,checkboxSelection:!0,editRowsModel:m,onEditRowModelChange:V,selectionModel:N,onSelectionModelChange:function(e){y(e.selectionModel)},onRowSelected:function(e){C(e)}})}),Object(u.jsxs)("div",{className:"admini-buttons",children:[Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(l.a,{onClick:function(t){t.stopPropagation(),function(t){if(console.log(N),1===(N&&N.length)){function n(){return(n=Object(_.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.post("http://"+e+":5000/admin/modify",t.data).then((function(e){console.log(e.data),alert(e.data.result)})).catch((function(e){console.log("error: ",e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log(t),console.log(t.data),function(){n.apply(this,arguments)}()}else alert("\ud55c \ud589\uc529 \uc218\uc815\ud574 \uc8fc\uc138\uc694")}(S)},color:"primary",variant:"contained",startIcon:Object(u.jsx)(M.a,{}),children:"\uc218\uc815\ud558\uae30"})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(l.a,{onClick:function(t){t.stopPropagation(),function(){if(console.log(N),(N&&N.length)<1||null==N[0])alert("\uc0ad\uc81c\ud560 \ud589\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694");else{function t(){return(t=Object(_.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("http://"+e+":5000/admin/delete",N).then((function(e){console.log(e.data),alert(e.data.result)})).catch((function(e){console.log("error: ",e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}()},color:"secondary",variant:"contained",startIcon:Object(u.jsx)(F.a,{}),children:"\uc0ad\uc81c\ud558\uae30"})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(z,{onClick:function(e){e.stopPropagation(),P>1?(T(P-500),B(P-500)):alert("\ub0b4\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")},color:"purple",variant:"contained",className:"changePageDownbtn",children:"\u25c0 \uc774\uc804 \ud398\uc774\uc9c0"})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(z,{onClick:function(e){e.stopPropagation(),T(P+500),B(P+500)},color:"purple",variant:"contained",className:"changePageUpbtn",children:"\ub2e4\uc74c \ud398\uc774\uc9c0 \u25b6"})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(l.a,{onClick:function(t){t.stopPropagation(),function(){function t(){return(t=Object(_.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,E.a.get("http://"+e+":5000/admin/words").then((function(e){alert(e),d(!1)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("\uac00\uc0ac \ub2e8\uc5b4 \ucd94\ucd9c"),function(){t.apply(this,arguments)}()}()},variant:"contained",children:"\uac00\uc0ac \ub2e8\uc5b4 \ucd94\ucd9c"})})]})]})]})]})},Y=n(268),H=n(307),U=function(e){var t=e.songData;return Object(u.jsx)("div",{className:"App",children:t.map((function(e){return Object(u.jsx)(Y.a,{button:!0,children:Object(u.jsx)(H.a,{primary:e.title,secondary:e.artist})})}))})},K=n(100),Q=n(272),X=n(104),Z=n(56),$=n(267),ee=n(72),te=n(103),ne=n(30),ce=Object(W.a)((function(e){return{root:{color:e.palette.getContrastText(L.a[500]),backgroundColor:K.a[500],"&:hover":{backgroundColor:K.a[700]}}}}))(l.a),ae=Object(ne.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}})),ie=function(){var e="localhost",t=Object(c.useState)(!1),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)([]),r=Object(h.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(!1),b=Object(h.a)(j,2),m=b[0],O=b[1],p=Object(c.useState)(1),x=Object(h.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(1),N=Object(h.a)(g,2),y=N[0],w=N[1],k=ae();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("header",{className:"admini-header",children:"\ub178\ub798 \ucd94\uac00"})}),Object(u.jsxs)("div",{className:"admini-main",children:[Object(u.jsx)("div",{className:"admini-sidebar",children:Object(u.jsx)(D,{})}),Object(u.jsxs)("div",{className:"adminiAdd-content",children:[Object(u.jsxs)("div",{className:"adminiAdd-buttons",children:[Object(u.jsx)("div",{className:"adminiAdd-input",children:Object(u.jsxs)(ee.a,{required:!0,className:k.formControl,children:[Object(u.jsx)(X.a,{id:"demo-simple-select-required-label",children:"\ud398\uc774\uc9c0 (1\ud398\uc774\uc9c0\ub2f9 50\uace1)"}),Object(u.jsxs)(te.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:f,onChange:function(e){v(e.target.value)},children:[Object(u.jsx)(Z.a,{value:1,children:"1"}),Object(u.jsx)(Z.a,{value:2,children:"2"}),Object(u.jsx)(Z.a,{value:3,children:"3"}),Object(u.jsx)(Z.a,{value:4,children:"4"}),Object(u.jsx)(Z.a,{value:5,children:"5"}),Object(u.jsx)(Z.a,{value:6,children:"6"}),Object(u.jsx)(Z.a,{value:7,children:"7"}),Object(u.jsx)(Z.a,{value:8,children:"8"}),Object(u.jsx)(Z.a,{value:9,children:"9"}),Object(u.jsx)(Z.a,{value:10,children:"10"})]}),Object(u.jsx)($.a,{children:"Required"})]})}),Object(u.jsx)("div",{className:"adminiAdd-input",children:Object(u.jsxs)(ee.a,{required:!0,className:k.formControl,children:[Object(u.jsx)(X.a,{id:"demo-simple-select-required-label",children:"\uc7a5\ub974 \uc120\ud0dd"}),Object(u.jsxs)(te.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:y,onChange:function(e){w(e.target.value)},children:[Object(u.jsx)(Z.a,{value:1,children:"\ubc1c\ub77c\ub4dc"}),Object(u.jsx)(Z.a,{value:2,children:"\ub304\uc2a4"}),Object(u.jsx)(Z.a,{value:3,children:"\ub7a9/\ud799\ud569"}),Object(u.jsx)(Z.a,{value:4,children:"R&B"}),Object(u.jsx)(Z.a,{value:5,children:"\uc778\ub514\uc74c\uc545"}),Object(u.jsx)(Z.a,{value:6,children:"\ub85d/\uba54\ud0c8"}),Object(u.jsx)(Z.a,{value:7,children:"\ud2b8\ub85c\ud2b8"}),Object(u.jsx)(Z.a,{value:8,children:"\ud3ec\ud06c/\ube14\ub8e8\uc2a4"})]}),Object(u.jsx)($.a,{children:"Required"})]})}),Object(u.jsx)("div",{className:"adminiAdd-button",children:Object(u.jsx)(ce,{onClick:function(t){t.stopPropagation(),function(){if(a)alert("\ub85c\ub529 \uc911");else{function t(){return(t=Object(_.a)(A.a.mark((function t(n,c){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.next=3,E.a.get("http://"+e+":5000/admin/add1?page="+n+"&grNumber="+c).then((function(e){d(e.data),O(!0),i(!1)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e,n){t.apply(this,arguments)}(f,y)}}()},children:"\ub178\ub798 \uc2a4\ud06c\ub7a9"})}),Object(u.jsx)("div",{className:"adminiAdd-savebutton",children:Object(u.jsx)(l.a,{variant:"contained",color:"primary",startIcon:Object(u.jsx)(M.a,{}),onClick:function(t){t.stopPropagation(),function(){if(m){function t(){return(t=Object(_.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.next=3,E.a.get("http://"+e+":5000/admin/add2").then((function(e){"yes"===e.result&&(alert("\uc800\uc7a5\uc644\ub8cc"),O(!1),i(!1))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}else alert("\uc800\uc7a5\uc2e4\ud328")}()},children:"\uc800\uc7a5\ud558\uae30"})})]}),a&&Object(u.jsx)(Q.a,{}),Object(u.jsx)("div",{className:"adminiAdd-preview",children:o&&o.length>0&&Object(u.jsx)(U,{songData:o})})]})]})]})},se=[{field:"id",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",witdh:90},{field:"fullName",headerName:"Full Name",description:"this is desc",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||""," ")}}],re=[{id:1,lastName:"snow",firstName:"jonh",age:36},{id:2,lastName:"snow2",firstName:"jonh",age:36},{id:3,lastName:"snow3",firstName:"jonh",age:36},{id:4,lastName:"snow4",firstName:"jonh",age:36},{id:5,lastName:"snow5",firstName:"jonh",age:36}],oe=function(){return Object(u.jsx)("div",{className:"Admini-root",style:{height:400,width:"80%"},children:Object(u.jsx)(R.a,{rows:re,columns:se,pageSize:2,checkboxSelection:!0})})},le=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0];t[1];return Object(u.jsxs)("div",{children:[n,Object(u.jsx)("button",{onClick:function(){fetch("http://www.maniadb.com/api/search/metallica/?sr=song&display=10&key=example&v=0.5",{method:"GET",mode:"no-cors",headers:{"Content-Type":"text/xml"}}).then((function(e){var t=(new DOMParser).parseFromString(e,"application/xml");console.log(t)})).catch(console.error)},children:"\uc694\uccad \ubc84\ud2bc"})]})};var de=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:b}),Object(u.jsx)(o.b,{path:"/PredictionB",component:y}),Object(u.jsx)(o.b,{path:"/Prediction2",component:S}),Object(u.jsx)(o.b,{path:"/result",component:q}),Object(u.jsx)(o.b,{path:"/admin/add",component:ie}),Object(u.jsx)(o.b,{path:"/admin",component:J}),Object(u.jsx)(o.b,{path:"/demo",component:oe}),Object(u.jsx)(o.b,{path:"/SearchSong",component:le})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,310)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},ue=function(){return Object(u.jsx)("div",{className:"header-img"})};s.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(ue,{}),Object(u.jsx)(de,{})]}),document.getElementById("root")),je()},86:function(e,t,n){}},[[260,1,2]]]);
//# sourceMappingURL=main.2503e1f9.chunk.js.map