(this["webpackJsonpcredit-card-form"]=this["webpackJsonpcredit-card-form"]||[]).push([[0],{27:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(10),i=a.n(r),o=a(3),s=a(2),d=a(13),l=Object(d.a)({"@import":['url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap")'],"@global":{"*, *:before, *:after":{fontFamily:'"Source Sans Pro", sans-serif',boxSizing:"inherit",fontSize:16},html:{backgroundColor:"#ddeefc",boxSizing:"border-box"},"input, select":{outline:"none",padding:"14px 8px 14px 8px",borderRadius:5,border:"1px solid #c9c9c9",width:"100%",marginBottom:13,transition:"border 0.4s","&:hover, &:focus":{transition:"border 0.4s",borderColor:"#3d9cff"}},label:{userSelect:"none"}},submitButton:{backgroundColor:"#2364d2",outline:"none",width:"100%",padding:"14px 8px 14px 8px",color:"white",borderRadius:5,boxShadow:"0 4px 8px 0 rgba(35, 100, 210, 0.2), 0 6px 20px 0 rgba(35, 100, 210, 0.19)",marginTop:20,userSelect:"none",cursor:"pointer",border:"2px solid #2364d2",transition:"all .2s ease-out","&:hover":{backgroundColor:"#b3cfff",color:"black"},"&:active":{backgroundColor:"#0043b5",color:"white"}},mainContainer:{width:"100%"},centerContainer:{display:"table",margin:"0 auto"},formContainer:{backgroundColor:"white",width:550,padding:30,paddingTop:160,borderRadius:10,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},row:{display:"flex",alignItems:"flex-start"},col:{flex:"auto"},inputGroup:{display:"flex",alignItems:"flex-start",flexWrap:"wrap","& > input, & > select":{flex:"1",marginRight:10},"& > label":{fontSize:14,marginBottom:5,fontWeight:500,color:"#1a3b5d",width:"100%",display:"block"}},expGroup:{marginRight:30},creditCardContainer:{width:"100%",fontFamily:'"Source Code Pro", monospace'},creditCardItem:{borderRadius:20,height:270,width:430,position:"relative",marginRight:"auto",marginLeft:"auto",marginBottom:-130,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",padding:"20px 25px",background:"linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/assets/images/".concat(Math.floor(25*Math.random())+1,".jpeg')")},creditCardItemBack:{padding:0,paddingTop:25},chip:{width:60,height:"100%",borderRadius:10},logo:{width:85,float:"right",maxWidth:"100%",objectFit:"contain",maxHeight:"100%",objectPosition:"top right",height:45},cardNumberRow:{marginTop:50,color:"white"},cardNumberItem:{fontSize:22,margin:2,font:"inherit"},cardNumberSpace:{marginRight:34},cardLabel:{fontSize:13,opacity:.7},expiress:{float:"right"},cvv:{float:"right"},cardText:{color:"white",fontFamily:'"Source Code Pro", monospace !important',display:"inline-block"},magneticBar:{width:"100%",height:50,backgroundColor:"black",opacity:.8},cvvWrapper:{padding:"20px 25px",marginTop:20},cvvContainer:{width:"100%",height:40,backgroundColor:"white",borderRadius:5,lineHeight:"40px",textAlign:"right",paddingRight:10},logoBack:{marginTop:25},cardCvv:{color:"black"},hidden:{display:"none"},cardHolderContainer:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:310},fadeOutUp:{animation:"$fade-out-up .2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"},"@keyframes fade-out-up":{"0%":{transform:"translate3d(0,0,0)"},"100%":{transform:"translate3d(0,-10px,0)",opacity:0}},fadeInUp:{animation:"$fade-in-up .2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"},"@keyframes fade-in-up":{"0%":{transform:"translate3d(0,10px,0)",opacity:0},"100%":{transform:"translate3d(0,0,0)",opacity:1}},fadeInRotate:{opacity:0,animation:"$fade-in-rotate 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"},"@keyframes fade-in-rotate":{"0%":{transform:"translateX(15px) rotate(45deg);",transformOrigin:"center",opacity:0},"100%":{opacity:1,transform:"translateX(0px) rotate(0deg);",transformOrigin:"center"}},fadeOutRotate:{opacity:0,animation:"$fade-out-rotate 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"},"@keyframes fade-out-rotate":{"0%":{opacity:1,transform:"translateX(0px) rotate(0deg);",transformOrigin:"center"},"100%":{transform:"translateX(-15px) rotate(45deg);",transformOrigin:"center",opacity:0}},pointer:{position:"absolute",zIndex:3,borderRadius:5,left:0,top:0,width:"100%",height:"100%",transition:"all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85)",opacity:0,pointerEvents:"none",overflow:"hidden",border:"2px solid rgba(255, 255, 255, 0.65)","&:after":{content:'""',position:"absolute",top:0,left:0,width:"100%",background:"rgb(8, 20, 47)",height:"100%",borderRadius:5,filter:"blur(25px)",opacity:.5}},pointerActive:{opacity:1}}),u=a(7),m=a(0),h=function(e){var t=Object.assign({},e);return Object(m.jsx)(u.a,Object(o.a)({format:"#### #### #### ####"},t))},p=a(12),b=a.n(p),j=function(e){var t=e.cvv,a=e.logoPath,n=l();return Object(m.jsxs)("div",{className:"".concat(n.creditCardItem," ").concat(n.creditCardItemBack),children:[Object(m.jsx)("div",{className:n.magneticBar}),Object(m.jsxs)("div",{className:n.cvvWrapper,children:[Object(m.jsx)("div",{className:n.row,children:Object(m.jsx)("div",{className:n.col,children:Object(m.jsx)("label",{className:"".concat(n.cardText," ").concat(n.cvv),children:"CVV"})})}),Object(m.jsx)("div",{className:n.row,children:Object(m.jsx)("div",{className:n.col,children:Object(m.jsx)("div",{className:n.cvvContainer,children:Array.from({length:t.split("").filter((function(e){return" "!==e})).length}).fill("*").map((function(e,t){return Object(m.jsx)("span",{className:"".concat(n.cardText," ").concat(n.cardCvv),children:e},t)}))})})}),Object(m.jsx)("div",{className:n.row,children:Object(m.jsx)("div",{className:"".concat(n.col," ").concat(n.logoBack),children:Object(m.jsx)("img",{src:a,alt:"logo",className:n.logo})})})]})]})};var f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current},x=function(e){var t=e.expiress,a=l(),c=f(t),r=function(){return{month:(t.month||"MM").split(""),year:(t.year.slice(-2)||"YY").split("")}},i=function(){return c?{month:(c.month||"MM").split(""),year:(c.year.slice(-2)||"YY").split("")}:{month:"MM",year:"YY"}},o=Object(n.useCallback)((function(e){if("month"===e){var t=document.querySelector("#prev-month"),n=document.querySelector("#cur-month"),c=function(){t.classList.remove(a.fadeOutUp),n.classList.remove(a.fadeInUp)},r=function(){t.classList.add(a.hidden),n.classList.add(a.fadeInUp),n.classList.remove(a.hidden),n.addEventListener("animationend",c)};return t.classList.add(a.fadeOutUp),t.classList.remove(a.hidden),n.classList.add(a.hidden),t.addEventListener("animationend",r),function(){t.removeEventListener("animationend",r),n.removeEventListener("animationend",c)}}if("year"===e){var i=document.querySelector("#prev-year"),o=document.querySelector("#cur-year"),s=function(){i.classList.remove(a.fadeOutUp),o.classList.remove(a.fadeInUp)},d=function(){i.classList.add(a.hidden),o.classList.add(a.fadeInUp),o.classList.remove(a.hidden),o.addEventListener("animationend",s)};return i.classList.add(a.fadeOutUp),i.classList.remove(a.hidden),o.classList.add(a.hidden),i.addEventListener("animationend",d),function(){i.removeEventListener("animationend",d),o.removeEventListener("animationend",s)}}}),[a.fadeInUp,a.fadeOutUp,a.hidden]);return Object(n.useEffect)((function(){t&&c&&(t.month!==c.month&&o("month"),t.year!==c.year&&o("year"))}),[o,t,c]),Object(m.jsx)(n.Fragment,{children:Object(m.jsxs)("span",{className:"".concat(a.expiress),children:[Object(m.jsx)("span",{id:"cur-month",className:a.cardText,children:r().month}),Object(m.jsx)("span",{id:"prev-month",className:"".concat(a.cardText," ").concat(a.hidden),children:i().month}),Object(m.jsx)("span",{className:a.cardText,children:"/"}),Object(m.jsx)("span",{id:"cur-year",className:a.cardText,children:r().year}),Object(m.jsx)("span",{id:"prev-year",className:"".concat(a.cardText," ").concat(a.hidden),children:i().year})]})})},g=function(e){var t=e.holder,a=l(),c=f(t),r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],d=i[1],u=Object(n.useState)(!1),h=Object(s.a)(u,2),p=h[0],b=h[1],j=Object(n.useCallback)((function(e){if("empty"===e){var n=document.querySelector("#empty-holder");return n.classList.remove(a.hidden),void n.classList.add(a.fadeInUp)}var c=document.querySelector("#hd-".concat(t.length-1));("add"===e&&c.classList.add(a.fadeInRotate),"remove"===e)&&(p&&(console.log(t.length),document.querySelector("#hd-".concat(t.length)).classList.add(a.fadeOutRotate)))}),[a.fadeInRotate,a.fadeInUp,a.fadeOutRotate,a.hidden,t.length,p]);return Object(n.useEffect)((function(){t?t.length>c.length?j("add"):j("remove"):j("empty")}),[j,t,c]),Object(n.useEffect)((function(){t&&t.length<c.length&&(d(c.slice(-1)),b(!0)),t||d("")}),[t,c]),Object(m.jsx)("div",{className:a.cardHolderContainer,children:t?Object(m.jsxs)(m.Fragment,{children:[(t?t.toUpperCase().split(""):"FULL NAME".split("")).map((function(e,t){return Object(m.jsx)("span",{id:"hd-".concat(t),className:a.cardText,children:" "===e?Object(m.jsx)(m.Fragment,{children:"\xa0"}):e},t)})),p&&Object(m.jsx)("span",{id:"hd-".concat(t.length),className:a.cardText,onAnimationEnd:function(e){var t=e.target;t.classList.remove(a.fadeInRotate),t.classList.remove(a.fadeOutRotate),b(!1)},children:" "===o?Object(m.jsx)(m.Fragment,{children:"\xa0"}):o.toUpperCase()})]}):Object(m.jsx)("span",{id:"empty-holder",className:a.cardText,children:"FULL NAME"})})},v=function(e){var t=e.number,a=l(),c=f(t),r=function(e){var t="#### #### #### ####".split("");return e&&e.split("").forEach((function(e,a){4!==a&&9!==a&&14!==a&&" "!==e&&(t[a]=a>=5&&a<=13?"*":e)})),t},i=Object(n.useCallback)((function(e){var t=document.querySelector("#cur-cn-".concat(e)),n=document.querySelector("#prev-cn-".concat(e)),c=function(){n.classList.remove(a.fadeOutUp),t.classList.remove(a.fadeInUp)},r=function(){n.classList.add(a.hidden),t.classList.remove(a.hidden),t.classList.add(a.fadeInUp),t.addEventListener("animationend",c)};return t.classList.add(a.hidden),n.classList.remove(a.hidden),n.classList.add(a.fadeOutUp),n.addEventListener("animationend",r),function(){n.removeEventListener("animationend",r),t.removeEventListener("animationend",c)}}),[a.fadeInUp,a.fadeOutUp,a.hidden]);Object(n.useEffect)((function(){if(t&&c){var e=t.split(""),a=c.split("");e.forEach((function(e,t){e!==a[t]&&i(t)}))}else(t&&!c||!t&&c)&&i(0)}),[i,t,c]);var o=r(c);return r(t).map((function(e,t){return Object(m.jsx)(n.Fragment,{children:" "===e?Object(m.jsx)("span",{className:"".concat(a.cardText," ").concat(a.cardNumberSpace),children:e}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{id:"cur-cn-".concat(t),className:"\n\t\t\t\t\t\t\t\t\t\t".concat(a.cardText," \n\t\t\t\t\t\t\t\t\t\t").concat(" "===e?a.cardNumberSpace:a.cardNumberItem," \n\t\t\t\t\t\t\t\t\t\t").concat(a.hidden),children:e}),Object(m.jsx)("span",{id:"prev-cn-".concat(t),className:"\n\t\t\t\t\t\t\t\t\t\t".concat(a.cardText,"\n\t\t\t\t\t\t\t\t\t\t").concat(" "===e?a.cardNumberSpace:a.cardNumberItem),children:o[t]})]})},t)}))},O=function(e){var t=e.number,a=e.holder,n=e.expiress,c=e.logoPath,r=e.point,i=l();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:i.row,children:[Object(m.jsx)("div",{className:i.col,children:Object(m.jsx)("img",{src:"/assets/images/chip.png",alt:"chip",className:i.chip})}),Object(m.jsx)("div",{className:i.col,children:Object(m.jsx)("img",{src:c,alt:"logo",className:i.logo})})]}),Object(m.jsx)("div",{className:"".concat(i.row," ").concat(i.cardNumberRow," ").concat(i.focus),onClick:r,children:Object(m.jsx)("div",{className:i.col,children:Object(m.jsx)(v,{number:t})})}),Object(m.jsxs)("div",{className:"".concat(i.row," ").concat(i.cardNumberRow),children:[Object(m.jsx)("div",{className:i.col,children:Object(m.jsx)("span",{className:i.cardLabel,children:"Card Holder"})}),Object(m.jsx)("div",{className:"".concat(i.col),children:Object(m.jsx)("span",{className:"".concat(i.cardLabel," ").concat(i.expiress),children:"Expiress"})})]}),Object(m.jsxs)("div",{className:"".concat(i.row),children:[Object(m.jsx)("div",{className:i.col,onClick:r,children:Object(m.jsx)(g,{holder:a})}),Object(m.jsx)("div",{className:"".concat(i.col),onClick:r,children:Object(m.jsx)(x,{expiress:n})})]})]})},N=function(e){var t=e.children,a=l(),r=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useState)(null),d=Object(s.a)(o,2),u=d[0],h=d[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),j=b[0],f=b[1];Object(n.useEffect)((function(){u||h({top:0,bottom:0,width:i.current.offsetWidth,height:i.current.offsetHeight});var e=function(){j&&(f(!1),h({top:0,bottom:0,width:i.current.offsetWidth,height:i.current.offsetHeight}))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[j,u]);var x=function(e){e.stopPropagation(),e.preventDefault();var t=e.currentTarget;f(!0),h({width:"".concat(t.offsetWidth+10,"px"),height:"".concat(t.offsetHeight+10,"px"),transform:"translateX(".concat(t.offsetLeft-5,"px) translateY(").concat(t.offsetTop-5,"px)")})},g=c.a.Children.map(t,(function(e){return c.a.isValidElement(e)?c.a.cloneElement(e,{point:x}):e}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:a.creditCardItem,ref:i,children:[Object(m.jsx)("div",{className:"".concat(a.pointer," ").concat(j&&a.pointerActive),style:u,ref:r}),g]})})},y=function(e){var t=e.number,a=e.holder,n=e.expiress,c=e.cvv,r=e.isFlipped,i=e.logoPath,o=l();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:o.creditCardContainer,children:Object(m.jsxs)(b.a,{isFlipped:r,children:[Object(m.jsx)(N,{children:Object(m.jsx)(O,{number:t,holder:a,expiress:n,logoPath:i})}),Object(m.jsx)(j,{cvv:c,logoPath:i})]})})})},w=function(e){var t=Object.assign({},e);return Object(m.jsx)(u.a,Object(o.a)({format:"####"},t))},C=function(e){return(e=""+e).length>=2?e:"0"+e};function L(e){var t="/assets/images/",a=new RegExp("^4");return null!=e.match(a)?t+"visa.png":(a=new RegExp("^5[1-5]"),null!=e.match(a)?t+"mastercard.png":(a=new RegExp("^3[47]"),null!=e.match(a)?t+"amex.png":(a=new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"),null!=e.match(a)?t+"discover.png":(a=new RegExp("^36"),null!=e.match(a)?t+"dinersclub.png":(a=new RegExp("^30[0-5]"),null!=e.match(a)?t+"dinersclub.png":(a=new RegExp("^35(2[89]|[3-8][0-9])"),null!=e.match(a)?t+"jcb.png":(a=new RegExp("^(4026|417500|4508|4844|491(3|7))"),null!=e.match(a)?t+"visa.png":(a=new RegExp("^9792"),null!=e.match(a)?t+"troy.png":t+"visa.png"))))))))}var S=function(){var e=l(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),u=d[0],p=d[1],b=Object(n.useState)(""),j=Object(s.a)(b,2),f=j[0],x=j[1],g=Object(n.useState)({month:"",year:""}),v=Object(s.a)(g,2),O=v[0],N=v[1],S=Object(n.useState)(!1),E=Object(s.a)(S,2),R=E[0],k=E[1],F=Object(n.useState)(L(c)),I=Object(s.a)(F,2),U=I[0],T=I[1];return Object(n.useEffect)((function(){c&&T(L(c))}),[c]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:e.mainContainer,children:Object(m.jsxs)("div",{className:e.centerContainer,children:[Object(m.jsx)("div",{className:e.row,children:Object(m.jsx)("div",{className:e.col,children:Object(m.jsx)(y,{number:c,holder:u,expiress:O,cvv:f,isFlipped:R,logoPath:U})})}),Object(m.jsx)("div",{className:e.row,children:Object(m.jsx)("div",{className:e.col,children:Object(m.jsxs)("form",{className:e.formContainer,onSubmit:function(e){return e.preventDefault()},children:[Object(m.jsx)("label",{htmlFor:"cardNumber",children:"Card Number"}),Object(m.jsx)(h,{id:"cardNumber",title:"Card Number",value:c,onChange:function(e){return r(e.target.value)},onFocus:function(){return k(!1)}}),Object(m.jsx)("label",{children:"Card Holders"}),Object(m.jsx)("input",{type:"text",id:"cardHolders",title:"Card Holders",value:u,onChange:function(e){return p(e.target.value)},onFocus:function(){return k(!1)}}),Object(m.jsxs)("div",{className:e.row,children:[Object(m.jsx)("div",{className:e.col,children:Object(m.jsxs)("div",{className:"".concat(e.inputGroup," ").concat(e.expGroup),children:[Object(m.jsx)("label",{htmlFor:"expMonth",children:"Expiration Date"}),Object(m.jsxs)("select",{id:"expMonth",title:"Expiration month",value:O.month,onChange:function(e){return N(Object(o.a)(Object(o.a)({},O),{},{month:e.target.value}))},onFocus:function(){return k(!1)},children:[Object(m.jsx)("option",{disabled:!0,value:"",children:"Month"}),Array.from({length:12}).fill(0).map((function(e,t){return Object(m.jsx)("option",{value:C(t+1),children:C(t+1)},t)}))]}),Object(m.jsxs)("select",{id:"expYear",title:"Expiration year",value:O.year,onChange:function(e){return N(Object(o.a)(Object(o.a)({},O),{},{year:e.target.value}))},onFocus:function(){return k(!1)},children:[Object(m.jsx)("option",{disabled:!0,value:"",children:"Year"}),Array.from({length:12}).fill(0).map((function(e,t){return Object(m.jsx)("option",{value:(new Date).getFullYear()+t,children:(new Date).getFullYear()+t},t)}))]})]})}),Object(m.jsx)("div",{className:e.col,children:Object(m.jsxs)("div",{className:e.inputGroup,children:[Object(m.jsx)("label",{htmlFor:"cvv",children:"CVV"}),Object(m.jsx)(w,{id:"cvv",title:"CVV",onChange:function(e){return x(e.target.value)},onFocus:function(){return k(!0)}})]})})]}),Object(m.jsx)("button",{className:e.submitButton,children:"Submit"})]})})})]})})})};var E=function(){return Object(m.jsx)(S,{})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.69bb6ee2.chunk.js.map