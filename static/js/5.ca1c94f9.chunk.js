(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{300:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__12UMW",dialogs__items:"Dialogs_dialogs__items__1-9OH",messages:"Dialogs_messages__3iAfy",new__message:"Dialogs_new__message__PNZLV"}},302:function(e,a,s){e.exports={dialog:"DialogItem_dialog__jCvld",active:"DialogItem_active__3_aSe"}},303:function(e,a,s){e.exports={message:"Message_message__1uRZh",author:"Message_author__3Nsut",time:"Message_time__1pNJJ",body:"Message_body__2b47x"}},313:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(300),o=s.n(i),m=s(21),c=s(302),l=s.n(c),g=function(e){var a="/dialogs/".concat(e.id);return n.a.createElement(m.b,{to:a,activeClassName:l.a.active,className:l.a.dialog},e.name)},r=s(303),d=s.n(r),_=function(e){return n.a.createElement("div",{className:d.a.message},n.a.createElement("div",{className:d.a.message__info},n.a.createElement("div",{className:d.a.author},e.author),n.a.createElement("div",{className:d.a.time},e.time)),e.message)},u=s(89),b=s(128),f=s(63),v=s(34),E=Object(f.a)(100),w=Object(b.a)({form:"newMessage"})(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(u.a,{component:v.b,name:"newMessageBody",placeholder:"Enter what you want to say",validate:[f.b,E]}),n.a.createElement("button",null,"Send"))}),p=function(e){return n.a.createElement("div",{className:o.a.new__message},n.a.createElement(w,{onSubmit:function(a){e.sendMessage(a)}}))},M=function(e){var a=e.dialogs.map(function(e){return n.a.createElement(g,{key:e.id,name:e.name,id:e.id})}),s=e.messages.map(function(e){return n.a.createElement(_,{key:e.id,message:e.message,author:e.author,time:e.time})});return n.a.createElement("div",{className:o.a.dialogs},n.a.createElement("div",{className:o.a.dialogs__items},a),n.a.createElement("div",{className:o.a.messages},s,n.a.createElement(p,{sendMessage:e.addMessage})))},N=s(126),h=s(13),j=s(31),y=s(8),O=function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}},x=function(e){return{addMessage:function(a){e(Object(N.b)(a))}}};Object(y.d)(Object(h.b)(O,x),j.a)(M);a.default=Object(y.d)(Object(h.b)(O,x),j.a)(M)}}]);
//# sourceMappingURL=5.ca1c94f9.chunk.js.map