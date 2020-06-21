(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={enter:"slide_enter__5LvSq",enterActive:"slide_enterActive__2LMGY",exit:"slide_exit__38NfX",exitActive:"slide_exitActive__1GTRF"}},14:function(e,t,n){e.exports={name:"ContactListItem_name__2nyZx",number:"ContactListItem_number__3BDr1",button:"ContactListItem_button__NswJ3"}},15:function(e,t,n){e.exports={searchContainer:"Filter_searchContainer__351pP",label:"Filter_label__2UHpC",input:"Filter_input__2Snus"}},19:function(e,t,n){e.exports={errorMessageContainer:"ErrorMessage_errorMessageContainer__3DOaU",errorMessageText:"ErrorMessage_errorMessageText__33nqw"}},20:function(e,t,n){e.exports={contactList:"ContactList_contactList__3PlKd",item:"ContactList_item__1qdaO"}},21:function(e,t,n){e.exports={container:"PhoneBook_container__NpNSw",logo:"PhoneBook_logo__b-Dyf"}},30:function(e,t,n){e.exports={enter:"slideErr_enter__1DzLt",enterActive:"slideErr_enterActive__1WKVG",exit:"slideErr_exit__23Z5N",exitActive:"slideErr_exitActive__KfWUw"}},35:function(e,t,n){e.exports=n(48)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(7),l=n.n(c),i=n(6),u=n(5),s=n(1),m=n(8),_=n(31),b=Object(u.c)([],(a={},Object(m.a)(a,"phoneBook/ADD_CONTACT",(function(e,t){return[t.payload].concat(Object(_.a)(e))})),Object(m.a)(a,"phoneBook/DELETE_CONTACT",(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),f=Object(u.c)("",Object(m.a)({},"phoneBook/SEARCH_CONTACT",(function(e,t){return t.payload}))),p=Object(u.c)("",Object(m.a)({},"phoneBook/SHOW_NOTIFICATION",(function(e,t){return t.payload}))),h=Object(s.c)({contacts:b,filter:f,notifyText:p}),E=Object(s.c)({phoneBook:h});var C=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),d=Object(u.a)({reducer:E,preloadedState:C});d.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){alert("Something went wrong...")}}(d.getState())}));var O=d,N=n(49),g=n(50),v=n(4),j=function(e){return e.phoneBook.contacts},x=function(e){return e.phoneBook.filter},T=Object(v.a)([j,x],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),y=function(e){return e.phoneBook.notifyText},k=Object(u.b)("phoneBook/ADD_CONTACT"),A=Object(u.b)("phoneBook/DELETE_CONTACT"),S=Object(u.b)("phoneBook/SEARCH_CONTACT"),B=Object(u.b)("phoneBook/SHOW_NOTIFICATION"),w=n(27),D=n(28),F=n(33),L=n(32),I=n(29),M=n(19),H=n.n(M),J=function(){return o.a.createElement("div",{className:H.a.errorMessageContainer},o.a.createElement("p",{className:H.a.errorMessageText},"Contact allready exist!"))},P=n(30),W=n.n(P),q=n(9),R=n.n(q),X=function(e){Object(F.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",err:!1},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=t.target.name.value,a=t.target.number.value,r=e.props.contacts.find((function(t){return t.name===e.state.name})),o={id:Object(I.v4)(),name:n,number:a};""!==n&&""!==a&&(r?e.showErrorMessage():(e.props.addContact(o),e.setState({name:"",number:""})))},e.showErrorMessage=function(){e.setState({err:!0}),setTimeout((function(){e.setState({err:!1})}),2500)},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.err;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,a&&o.a.createElement(N.a,{timeout:250,classNames:W.a},o.a.createElement(J,null))),o.a.createElement("form",{className:R.a.form,onSubmit:this.handleSubmit},o.a.createElement("label",{className:R.a.label},"Name",o.a.createElement("input",{className:R.a.input,type:"text",placeholder:"Enter name",name:"name",value:t,onChange:this.handleChange})),o.a.createElement("label",{className:R.a.label},"Number",o.a.createElement("input",{className:R.a.input,type:"tel",placeholder:"Enter number in format 123-45-67",name:"number",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:n,onChange:this.handleChange})),o.a.createElement("button",{className:R.a.submitBtn,type:"submit"},"Add contact")))}}]),n}(r.Component),G=Object(i.b)((function(e){return{contacts:j(e)}}),(function(e){return{addContact:function(t){return e(k(t))},showNotifyWithMessage:function(t){return e(B(t))}}}))(X),K=n(14),U=n.n(K),V=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:U.a.name},t),o.a.createElement("span",{className:U.a.number},n),o.a.createElement("button",{className:U.a.button,type:"button",onClick:a},"X"))},Y=n(13),Z=n.n(Y),z=n(20),Q=n.n(z),$=function(e){var t=e.contacts,n=e.onDeleteContact;return o.a.createElement(g.a,{component:"ul",className:Q.a.contactList},t.map((function(e){return o.a.createElement(N.a,{key:e.id,timeout:250,classNames:Z.a},o.a.createElement("li",{className:Q.a.item},o.a.createElement(V,Object.assign({},e,{onDeleteContact:function(){return n(e.id)}}))))})))},ee=Object(i.b)((function(e){return{contacts:T(e)}}),(function(e){return{onDeleteContact:function(t){return e(A(t))}}}))($),te=n(15),ne=n.n(te),ae=function(e){var t=e.filterValue,n=e.onChangeFilter;return o.a.createElement("div",{className:ne.a.searchContainer},o.a.createElement("label",{className:ne.a.label},"Find contact by name",o.a.createElement("input",{type:"text",name:"filter",value:t,className:ne.a.input,onChange:function(e){return n(e.target.value)},placeholder:"Search Contact"})))},re=Object(i.b)((function(e){return{filterValue:x(e)}}),(function(e){return{onChangeFilter:function(t){return e(S(t))}}}))(ae),oe=(n(47),n(21)),ce=n.n(oe),le=Object(i.b)((function(e){return{contacts:j(e),notifyText:y(e)}}))((function(e){var t=e.contacts;return o.a.createElement("div",{className:ce.a.container},o.a.createElement(N.a,{in:!0,timeout:500,classNames:"slide",appear:!0},o.a.createElement("h1",{className:ce.a.logo},"Phonebook")),o.a.createElement(G,null),o.a.createElement(g.a,null,t.length>1&&o.a.createElement(N.a,{timeout:250,classNames:Z.a},o.a.createElement(re,null))),o.a.createElement(ee,null))})),ie=function(){return o.a.createElement(le,null)};l.a.render(o.a.createElement(i.a,{store:O},o.a.createElement(ie,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__2FlRX",label:"ContactForm_label__3OT0X",input:"ContactForm_input__h8NDY",submitBtn:"ContactForm_submitBtn__31q8f"}}},[[35,1,2]]]);
//# sourceMappingURL=main.2056dbdf.chunk.js.map