(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(1),a=c.n(r),n=c(7),o=c.n(n),l=(c(13),c(14),c(2)),i=c(3),j=c(5),d=c(4),b=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={buttonStyleClass:""},e.createRipple=function(e){var t=e.currentTarget,c=document.createElement("span"),s=Math.max(t.clientWidth,t.clientHeight),r=s/2;c.style.width=c.style.height="".concat(s,"px"),c.style.left="".concat(e.clientX-t.offsetLeft-r,"px"),c.style.top="".concat(e.clientY-t.offsetTop-r,"px"),c.classList.add("ripple");var a=t.getElementsByClassName("ripple")[0];a&&a.remove(),t.appendChild(c)},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this.props,t=e.variant,c=e.disabled,s=e.active,r=e.disableShadow,a=e.color,n=e.size;console.log(this.props);var o=function(e){switch(e){case"text":return"btn--text";case"outline":return"btn--outline";default:return"btn--default"}}(t),l=function(e){switch(e){case"sm":return"btn--sm";case"md":return"btn--md";case"lg":return"btn--lg";default:return"btn--md"}}(n),i=["btn",o,function(e){switch(e){case"primary":return"btn--primary";case"secondary":return"btn--secondary";case"danger":return"btn--danger";default:return"btn--default"}}(a),c?"disabled":"",r?"btn--shadow-disabled":"",s?"active":"",l].join(" ");this.setState({buttonStyleClass:i})}},{key:"render",value:function(){var e=this.createRipple,t=this.props,c=t.startIcon,r=t.endIcon,a=t.text,n=this.state.buttonStyleClass;return c?Object(s.jsx)("button",{className:"btn--icon btn--icon-start ".concat(n),onClick:e,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"material-icons",children:c}),Object(s.jsx)("p",{children:a})]})}):r?Object(s.jsx)("button",{className:"btn--icon btn--icon-end ".concat(n),onClick:e,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:a}),Object(s.jsx)("span",{className:"material-icons",children:r})]})}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{className:"".concat(n),onClick:e,children:a})})}}]),c}(r.Component),u=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Buttons"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button />"}),Object(s.jsx)(b,{text:"Default"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{className:"button-group--grey-header",children:"&:hover, &:focus"}),Object(s.jsx)(b,{text:"Default",active:!0})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button variant=\u201doutline\u201d />"}),Object(s.jsx)(b,{variant:"outline",text:"Default"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"&:hover, &:focus"}),Object(s.jsx)(b,{variant:"outline",text:"Default",active:!0})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button variant=\u201dtext\u201d />"}),Object(s.jsx)(b,{variant:"text",text:"Default",disableShadow:!0})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"&:hover, &:focus"}),Object(s.jsx)(b,{variant:"text",text:"Default",active:!0,disableShadow:!0})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button disableShadow />"}),Object(s.jsx)(b,{color:"primary",text:"Default",disableShadow:!0})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button disabled />"}),Object(s.jsx)(b,{text:"Disabled",disabled:!0})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button variant=\u201dtext\u201d disabled />"}),Object(s.jsx)(b,{variant:"text",text:"Disabled",disabled:!0,disableShadow:!0})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button startIcon=\u201dlocal_grocery_store\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Default",startIcon:"local_grocery_store"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button endIcon=\u201dlocal_grocery_store\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Default",endIcon:"local_grocery_store"})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button size=\u201dsm\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Default",size:"sm"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button size=\u201dmd\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Default",size:"md"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button size=\u201dlg\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Default",size:"lg"})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button color=\u201ddefault\u201d />"}),Object(s.jsx)(b,{color:"default",text:"Default"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button color=\u201dprimary\u201d />"}),Object(s.jsx)(b,{color:"primary",text:"Primary"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button color=\u201dsecondary\u201d />"}),Object(s.jsx)(b,{color:"secondary",text:"Secondary"})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{children:"<Button color=\u201ddanger\u201d />"}),Object(s.jsx)(b,{color:"danger",text:"Danger"})]}),Object(s.jsx)("div",{className:"clear-row"}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{className:"button-group--grey-header",children:"&:hover, &:focus"}),Object(s.jsx)(b,{text:"Default",active:!0})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{className:"button-group--grey-header",children:"&:hover, &:focus"}),Object(s.jsx)(b,{color:"primary",text:"Primary",active:!0})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{className:"button-group--grey-header",children:"&:hover, &:focus"}),Object(s.jsx)(b,{color:"secondary",text:"Secondary",active:!0})]}),Object(s.jsxs)("div",{className:"button-group",children:[Object(s.jsx)("h5",{className:"button-group--grey-header",children:"&:hover, &:focus"}),Object(s.jsx)(b,{color:"danger",text:"Danger",active:!0})]})]})]})})}}]),c}(r.Component);var h=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{}),Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("p",{children:"Tan Thang  @ DevChallenges.io"})})})]})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0617dfda.chunk.js.map