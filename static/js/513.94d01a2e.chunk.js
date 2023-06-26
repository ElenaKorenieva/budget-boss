"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[513],{3795:function(e,s,a){a.d(s,{Z:function(){return N}});var t=a(9439),n=a(2791),r=a(9434),c={modalDiv:"BalanceModal_modalDiv__d8BCE",largeText:"BalanceModal_largeText__2+Edk",littleText:"BalanceModal_littleText__KKvb0"},l=a(184),i=function(){return(0,l.jsx)("div",{className:c.fixedModal,children:(0,l.jsxs)("div",{className:c.modalDiv,children:[(0,l.jsx)("p",{className:c.largeText,children:"Hello! To get started, enter the current balance of your account!"}),(0,l.jsx)("p",{className:c.littleText,children:"You can't spend money until you have it :)"})]})})},o="Balance_balance_title__mxOKl",u="Balance_balance_submit__Wo-7P",m="Balance_balance_value__r0RMn",d="Balance_balance_form__y-ZnM",x=a(5822),h=function(e){var s=e.balanceToUpdate,a=(0,r.I0)();return(0,l.jsx)("button",{type:"button",className:u,onClick:function(){var e=Number(s);console.log(e),e>0?(a((0,x.Hw)({newBalance:e})),setTimeout((function(){a((0,x.nX)())}),200)):alert("The balance must be positive")},children:"Confirm"})},j=a(4289),_=a(1941),b=function(e){return new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:2,useGrouping:"min2",unitDisplay:"short"}).format(e).replace(",",".")},N=function(){var e=(0,r.v9)(j.QM),s=(0,r.v9)(_.Ne),a=0===s?e:s,c=(0,n.useState)("".concat(b(e.toFixed(2))," UAH")),u=(0,t.Z)(c,2),x=u[0],N=u[1];return(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("h2",{className:o,children:"Balance:"}),(0,l.jsx)("input",{className:m,name:"balance",title:"Field must contain only numbers",type:"number",value:x,onChange:function(e){N(e.target.value)},disabled:0!==e,style:{borderRadius:0===e?"22px 0px 0px 22px":"22px",borderRight:0===e?"none":"2px solid #80848F",boxSizing:0===e?"border-box":"content-box,"},placeholder:0===e?"00.00 UAH":"".concat(b(a.toFixed(2))," UAH")}),!e&&(0,l.jsx)(h,{balanceToUpdate:x}),!e&&(0,l.jsx)(i,{})]})}},1513:function(e,s,a){a.r(s),a.d(s,{default:function(){return Fe}});var t=a(9439),n=a(4805),r=a(3795),c=a(2791);var l,i=a.p+"static/media/diagram.68e03afe713740f7b7e7c5db20717faa.svg",o="ReportsLink_reports__OWJSL",u=a(184),m=function(){return(0,u.jsx)("div",{to:"/report",children:(0,u.jsxs)("span",{className:o,width:"24px",height:"24px",children:["Reports",(0,u.jsx)("img",{src:i,alt:"Diagram"})]})})},d=a(1087),x="TransactionsNav_container__UNgNG",h="TransactionsNav_one__UwTja",j="TransactionsNav_two__dYkGa",_=a(9434),b=a(1941),N=a(2088),y=function(){var e=(0,_.I0)(),s=(0,_.v9)(b.d6);return(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("button",{style:{boxShadow:"expenses"===s?"0px 0px 6px #41A350":"none",background:"expenses"!==s?"linear-gradient(278.28deg, #2D2D38 -5.39%, #383847 94.01%)":"#383847",color:"expenses"===s?"#60C470":"#F6F7FB",borderColor:"expenses"===s?"#60C470":"transparent"},onClick:function(){return e((0,N.qi)("expenses"))},type:"button",className:h,children:"Expenses"}),(0,u.jsx)("button",{style:{boxShadow:"incomes"===s?"0px 0px 6px #41A350":"none",background:"incomes"!==s?"linear-gradient(245.22deg, #383847 14.1%, #2D2D38 89.51%)":"#383847",color:"incomes"===s?"#60C470":"#F6F7FB",borderColor:"incomes"===s?"#60C470":"transparent"},onClick:function(){return e((0,N.qi)("incomes"))},type:"button",className:j,children:"Income"})]})},p="HomeBar_bar__xjc9R",f=a(4289),v=function(){var e=(0,_.v9)(f.QM);return(0,u.jsxs)("section",{children:[(0,u.jsxs)("div",{className:p,style:{gap:0===e?"251px":"391px"},children:[(0,u.jsx)(d.OL,{to:"/reports",style:{pointerEvents:0===e?"none":"auto"},children:(0,u.jsx)(m,{})}),(0,u.jsx)(r.Z,{})]}),(0,u.jsx)(y,{})]})},g="TransactionContainer_tab_deskContainer__-+EXK",T="TransactionContainer_sectionContainer__cTzvk",C={summaryWrapper:"TransactionsSummary_summaryWrapper__Qbqbu",summaryBody:"TransactionsSummary_summaryBody__8XgKX",summaryTable:"TransactionsSummary_summaryTable__F5XwZ",summaryTableHeading:"TransactionsSummary_summaryTableHeading__6AAW5",summaryLine:"TransactionsSummary_summaryLine__U8dPH",summaryTableCell:"TransactionsSummary_summaryTableCell__-USY7"},D=function(e){switch(e){case"\u042f\u043d\u0432\u0430\u0440\u044c":return"January";case"\u0424\u0435\u0432\u0440\u0430\u043b\u044c":return"February";case"\u041c\u0430\u0440\u0442":return"March";case"\u0410\u043f\u0440\u0435\u043b\u044c":return"April";case"\u041c\u0430\u0439":return"May";case"\u0418\u044e\u043d\u044c":return"June";case"\u0418\u044e\u043b\u044c":return"July";case"\u0410\u0432\u0433\u0443\u0441\u0442":return"August";case"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":return"September";case"\u041e\u043a\u0442\u044f\u0431\u0440\u044c":return"October";case"\u041d\u043e\u044f\u0431\u0440\u044c":return"November";case"\u0414\u0435\u043a\u0430\u0431\u0440\u044c":return"December"}},S=function(){var e=(0,_.v9)(b.w4),s=(0,_.v9)(b.Lm),a=(0,_.v9)(b.d6),n=(0,c.useState)(s),r=(0,t.Z)(n,2),l=r[0],i=r[1],o=(0,c.useState)(e),m=(0,t.Z)(o,2),d=m[0],x=m[1];(0,c.useEffect)((function(){i(s)}),[s]),(0,c.useEffect)((function(){x(e)}),[e]);var h,j,N=[];"incomes"===a?N=null!==(h=Object.entries(l).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==h?h:[]:N=null!==(j=Object.entries(d).slice(0,(new Date).getMonth()+1).reverse())&&void 0!==j?j:[];return(0,u.jsx)("div",{className:C.summaryWrapper,children:(0,u.jsxs)("table",{className:C.summaryTable,children:[(0,u.jsx)("thead",{className:C.summaryHead,children:(0,u.jsx)("tr",{children:(0,u.jsx)("th",{colSpan:"2",className:C.summaryTableHeading,children:"Summary"})})}),(0,u.jsxs)("tbody",{className:C.summaryBody,children:[N.map((function(e){return"N/A"===e[1]&&(e[1]=0),(0,u.jsxs)("tr",{className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell,children:D(e[0])}),(0,u.jsx)("td",{className:C.summaryTableCell,children:(s=e[1],new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(s).replace(",","."))})]},"".concat(e[0]).concat(e[1]));var s})),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]}),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]}),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]}),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]}),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]}),(0,u.jsxs)("tr",{style:{height:38},className:C.summaryLine,children:[(0,u.jsx)("td",{className:C.summaryTableCell}),(0,u.jsx)("td",{className:C.summaryTableCell})]})]})]})})},w=a(7614),M=a(1951),L=function(e){switch(e.trim()){case"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":return"Products";case"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":return"Alcohol";case"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":return"Entertainment";case"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":return"Health";case"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":return"Transport";case"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":return"Housing";case"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":return"Technics";case"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":return"Communal and communication";case"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":return"Sport and hobby";case"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":return"Education";case"\u041f\u0440\u043e\u0447\u0435\u0435":return"Other";case"\u0417/\u041f":return"Salary";case"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":return"Additional income"}},H="TransactionsList_container__Xc7iz",A="TransactionsList_table__K7Azm",F="TransactionsList_header__i5FZX",k="TransactionsList_header_line__S+Dl8",E="TransactionsList_header_text__uW4rT",O="TransactionsList_header_text_third__91N9-",B="TransactionsList_header_text_fourth__sGl+K",I="TransactionsList_body__WGrty",Z="TransactionsList_body_line__Djhdd",U="TransactionsList_body_item__8oLYC",R="TransactionsList_body_item_second__RDRWX",W="TransactionsList_body_item_red__DtqXq",P="TransactionsList_icon__8SDLI",q="TransactionsList_button__Ysrc7",K=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},X.apply(this,arguments)}function Q(e,s){if(null==e)return{};var a,t,n=function(e,s){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function z(e,s){var a=e.title,t=e.titleId,n=Q(e,K);return c.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:14,height:18,viewBox:"0 0 32 32",ref:s,"aria-labelledby":t},n),void 0===a?c.createElement("title",{id:t},"trashcan"):a?c.createElement("title",{id:t},a):null,l||(l=c.createElement("path",{d:"M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"})))}var J=c.forwardRef(z),G=(a.p,a(5341)),Y=function(e){var s=new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(e).replace(",",".");return s.substring(0,1)+" "+s.substring(1)},V=function(e){var s,a=e.selectedDate,n=(0,c.useState)(!1),r=(0,t.Z)(n,2),l=r[0],i=r[1],o=(0,c.useState)(null),m=(0,t.Z)(o,2),d=m[0],x=m[1],h=(0,c.useState)(null),j=(0,t.Z)(h,2),y=j[0],p=j[1],f=(0,_.v9)(b.d6),v=(0,_.v9)(b.nH),g=(0,_.v9)(b.Dt),T=(0,_.I0)(),C=(s=a,(0,M.default)(Date.parse(s),"yyyy-MM-dd")),D="incomes"===f?v.filter((function(e){return e.date===C})):g.filter((function(e){return e.date===C})),S=function(e,s){p(s),x(e),i((function(e){return!e}))},K=C.slice(5,7),X={month:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][Number(K)-1],amount:Number(y)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:H,children:(0,u.jsxs)("table",{className:A,children:[(0,u.jsx)("thead",{className:F,children:(0,u.jsxs)("tr",{className:k,children:[(0,u.jsx)("th",{className:E,children:"Date"}),(0,u.jsx)("th",{className:E,children:"Description"}),(0,u.jsx)("th",{className:O,children:"Category"}),(0,u.jsx)("th",{className:B,children:"Sum"}),(0,u.jsx)("th",{className:E})]})}),(0,u.jsxs)("tbody",{className:I,children:[D.map((function(e){return(0,u.jsxs)("tr",{className:Z,children:[(0,u.jsx)("td",{className:U,children:e.date}),(0,u.jsx)("td",{className:R,children:e.description}),(0,u.jsx)("td",{className:U,children:L(e.category)}),(0,u.jsx)("td",{style:{color:"incomes"===f?"#60C470":"#FE4566"},className:W,children:"incomes"===f?"".concat(Y(e.amount)," UAH"):"- ".concat(Y(e.amount)," UAH")}),(0,u.jsx)("td",{className:U,children:(0,u.jsx)("button",{type:"button",onClick:function(){return S(e._id,e.amount)},className:q,children:(0,u.jsx)(J,{className:P})})})]},e._id)})),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]}),(0,u.jsxs)("tr",{className:Z,style:{height:38},children:[(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:R}),(0,u.jsx)("td",{className:U}),(0,u.jsx)("td",{className:W}),(0,u.jsx)("td",{})]})]})]})}),l&&(0,u.jsx)(G.Z,{closeModal:S,onSubmit:function(){T((0,N.D0)(X)),T((0,w.Ks)(d)),T((0,N.J7)(d))},title:"Are you sure?"})]})},$="TransactionListMobile_mobileContainer__uE4Bu",ee="TransactionListMobile_mobileList__-SSwa",se="TransactionListMobile_mobileItem__3QJKX",ae="TransactionListMobile_categoryContainer__8jRZM",te="TransactionListMobile_categoryDescription__X4to-",ne="TransactionListMobile_categoryWrapper__BPgQH",re="TransactionListMobile_transactionDate__RSslA",ce="TransactionListMobile_ammountWrapper__XEOsv",le="TransactionListMobile_transactionAmount__jQPoP",ie="TransactionListMobile_button__gJFpl",oe="TransactionListMobile_icon__DyRIm",ue=function(e){var s=new Intl.NumberFormat("ru-RU",{style:"decimal",currency:"UAH",minimumFractionDigits:2,useGrouping:"min2"}).format(e).replace(",",".");return s.substring(0,1)+" "+s.substring(1)},me=function(e){var s,a=e.selectedDate,r=(0,c.useState)(!1),l=(0,t.Z)(r,2),i=l[0],o=l[1],m=(0,c.useState)(null),d=(0,t.Z)(m,2),x=d[0],h=d[1],j=(0,c.useState)(null),y=(0,t.Z)(j,2),p=y[0],f=y[1],v=(0,n.useMediaQuery)({maxWidth:768}),g=(0,_.v9)(b.d6),T=(0,_.v9)(b.nH),C=(0,_.v9)(b.Dt),D=(0,_.I0)(),S=(s=a,(0,M.default)(Date.parse(s),"yyyy-MM-dd")),H="incomes"===g?T.filter((function(e){return e.date===S})):C.filter((function(e){return e.date===S})),A=function(e,s){f(s),h(e),o((function(e){return!e}))},F=S.slice(5,7),k={month:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][Number(F)-1],amount:Number(p)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:$,children:v&&(0,u.jsx)("ul",{className:ee,children:H.map((function(e){return(0,u.jsxs)("li",{className:se,children:[(0,u.jsxs)("div",{className:ae,children:[(0,u.jsx)("p",{className:te,children:e.description}),(0,u.jsxs)("div",{className:ne,children:[(0,u.jsx)("span",{className:re,children:e.date}),(0,u.jsx)("span",{children:L(e.category)})]})]}),(0,u.jsxs)("div",{className:ce,children:[(0,u.jsx)("p",{className:le,style:{color:"incomes"===g?"#60C470":"#FE4566"},children:"incomes"===g?"".concat(ue(e.amount)," UAH"):"- ".concat(ue(e.amount)," UAH")}),(0,u.jsx)("button",{onClick:function(){return A(e._id,e.amount)},className:ie,children:(0,u.jsx)(J,{className:oe})})]})]},e._id)}))})}),i&&(0,u.jsx)(G.Z,{closeModal:A,onSubmit:function(){D((0,N.D0)(k)),D((0,w.Ks)(x)),D((0,N.J7)(x))},title:"Are you sure?"})]})},de=function(e){var s=e.selectedDate,a=(0,n.useMediaQuery)({maxWidth:767});return(0,u.jsx)("section",{className:T,children:a?(0,u.jsx)(me,{selectedDate:s}):(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)(V,{selectedDate:s}),(0,u.jsx)(S,{})]})})},xe=a(782),he=[{value:"Products",label:"Products"},{value:"Alcohol",label:"Alcohol"},{value:"Entertainment",label:"Entertain"},{value:"Health",label:"Health"},{value:"Transport",label:"Transport"},{value:"Housing",label:"Housing"},{value:"Hobbies",label:"Sports, hobbies"},{value:"Technique",label:"Technique"},{value:"Communal",label:"Communal, communication"},{value:"Education",label:"Education"},{value:"Other",label:"Other"}],je=[{value:"Salary",label:"Salary"},{value:"Additional income",label:"Additional Income"}],_e=function(e){var s=e.selectedDate,a=e.modalView,n=(0,c.useState)(null),r=(0,t.Z)(n,2),l=r[0],i=r[1],o=(0,_.v9)(b.d6),m=(0,c.useRef)(null),d=(0,_.I0)(),x=function(e){e.preventDefault();var t=e.target.elements.amount.value,n=e.target.elements.description.value,r=function(e){switch(e.trim()){case"Products":return"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b";case"Alcohol":return"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c";case"Entertainment":return"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f";case"Health":return"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435";case"Transport":return"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442";case"Housing":return"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430";case"Technics":return"\u0422\u0435\u0445\u043d\u0438\u043a\u0430";case"Communal and communication":return"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c";case"Sport and hobby":return"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438";case"Education":return"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435";case"Other":return"\u041f\u0440\u043e\u0447\u0435\u0435";case"Salary":return"\u0417/\u041f";case"Additional income":return"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434"}}(e.target.elements.category.value.toString()),c=function(e){return(0,M.default)(Date.parse(e),"yyyy-MM-dd")}(s),l=c.slice(5,7),u={month:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][Number(l)-1],amount:Number(t)},x={description:n,amount:Number(t),date:c,category:r};d((0,N.mD)(u)),d("expenses"===o?(0,w.ne)(x):(0,w.F8)(x)),m.current.reset(),i(null),a&&a()};return(0,u.jsx)("div",{className:"mobileForm",children:(0,u.jsxs)("form",{ref:m,onSubmit:function(e){return x(e)},className:"form",children:[(0,u.jsx)("input",{type:"text",name:"description",placeholder:"Product description",className:"input",required:!0}),(0,u.jsx)(xe.ZP,{menuShouldBlockScroll:!0,menuShouldScrollIntoView:!1,className:"select-container",classNamePrefix:"select",required:!0,options:"expenses"===o?he:je,placeholder:"Product category",value:l,onChange:function(e){return i(e)},name:"category"}),(0,u.jsx)("input",{type:"number",name:"amount",placeholder:"0.00",className:"input_calc",required:!0}),(0,u.jsxs)("div",{className:"btn_container",children:[(0,u.jsx)("button",{type:"submit",className:"btn_input",children:"Input"}),(0,u.jsx)("button",{type:"reset",className:"btn_clear",children:"Clear"})]})]})})},be=a(9513),Ne=a.n(be),ye=(a(8639),a(736)),pe=function(e){var s=e.selectedDate,a=e.setSelectedDate,t=(0,c.forwardRef)((function(e,s){var a=e.value,t=e.onClick,n=e.onChange;return(0,u.jsx)("input",{value:a,className:"input_date",onClick:t,onChange:n,ref:s,onKeyDown:function(e){e.preventDefault()}})}));return(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(Ne(),{className:"datepicker",dateFormat:"dd.MM.yyyy",selected:s,onChange:function(e){a(e)},locale:ye.Z,maxDate:new Date,calendarClassName:"calendar",customInput:(0,u.jsx)(t,{})})})},fe=a(3548),ve="Home_container__qRlyu",ge="Home_mobWrap__mwq3l",Te="Home_tab_deskWrap__xmUBC",Ce="Home_form_wrap__NjNx+",De="Home_open_modal__RNyVW",Se=a(4164),we=a(3211),Me="MobileTransactionModal_backdrop__KQwBV",Le="MobileTransactionModal_modalWindow__fCYbh",He="MobileTransactionModal_button__USDS3",Ae=function(e){var s=e.onClose,a=e.selectedDate,t=document.querySelector("#modal-root"),n=function(e){"Escape"===e.code&&s()};return(0,c.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}})),(0,Se.createPortal)((0,u.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&s()},className:Me,children:(0,u.jsxs)("div",{className:Le,children:[(0,u.jsx)("button",{onClick:s,className:He,children:(0,u.jsx)("img",{src:we.Z,width:"12",alt:"closeicon"})}),(0,u.jsx)(_e,{selectedDate:a,modalView:s})]})}),t)},Fe=function(){var e=(0,c.useState)(!1),s=(0,t.Z)(e,2),a=s[0],r=s[1],l=(0,n.useMediaQuery)({maxWidth:767}),i=new Date,o=sessionStorage.getItem("date")||i,m=new Date(o),d=m||i,x=(0,c.useState)(d),h=(0,t.Z)(x,2),j=h[0],b=h[1],N=(0,_.I0)();(0,c.useEffect)((function(){N((0,fe.p)()),N((0,fe.o)()),N((0,w.f2)()),N((0,w.nu)())}),[N]);var y=function(e){sessionStorage.setItem("date",JSON.stringify(e.toString())),b(e)},p=function(){r((function(e){return!e}))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{}),(0,u.jsx)("div",{className:ve,children:l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:ge,children:[(0,u.jsx)(pe,{selectedDate:j,setSelectedDate:function(e){return y(e)}}),(0,u.jsx)("button",{type:"button",className:De,onClick:p,children:"Add transaction"}),(0,u.jsx)(de,{selectedDate:j})]}),a&&(0,u.jsx)(Ae,{selectedDate:j,closeModal:p,onClose:p})]}):(0,u.jsxs)("div",{className:Te,children:[(0,u.jsxs)("div",{className:Ce,children:[(0,u.jsx)(pe,{selectedDate:j,setSelectedDate:function(e){return y(e)}}),(0,u.jsx)(_e,{selectedDate:j})]}),(0,u.jsx)(de,{selectedDate:j})]})})]})}},1941:function(e,s,a){a.d(s,{Dt:function(){return r},Lm:function(){return n},Ne:function(){return i},d6:function(){return l},nH:function(){return t},w4:function(){return c}});var t=function(e){return e.transactions.incomes},n=function(e){return e.transactions.incomesStats},r=function(e){return e.transactions.expenses},c=function(e){return e.transactions.expensesStats},l=function(e){return e.transactions.currentTransactionType},i=function(e){return e.transactions.newBalance}}}]);
//# sourceMappingURL=513.94d01a2e.chunk.js.map