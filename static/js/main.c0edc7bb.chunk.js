(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{10:function(e,t,n){e.exports={formInput:"Filter_formInput__1L3iG"}},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(9),c=n.n(r),i=n(11),o=n(3),s=n(4),l=n(5),u=n(7),m=n(6),d=n(20),b=n(0),h=function(e){var t=e.contacts,n=e.handleDelete;return Object(b.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(b.jsxs)("li",{children:[Object(b.jsxs)("p",{children:[a,": ",r]}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},f=n(10),j=n.n(f),p=function(e){var t=e.filter,n=e.handleChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Find contacts by name"}),Object(b.jsx)("input",{id:"filter",name:"filter",type:"text",className:j.a.formInput,onChange:n,value:t})]})},O=n(2),x=n.n(O),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state.name,e.state.number),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:x.a.formMain,onSubmit:this.onSubmit,children:[Object(b.jsxs)("label",{className:x.a.formLabel,children:["Name",Object(b.jsx)("input",{className:x.a.formInput,type:"text",name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"Enter your name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:x.a.formLabel,children:["Number",Object(b.jsx)("input",{className:x.a.formInput,type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,placeholder:"123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",className:x.a.formBtn,children:"Add contact"})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t,n){if(e.state.contacts.some((function(e){return e.name===t})))alert(t+" is already in contacts ");else{var a={id:Object(d.a)(),name:t,number:n};e.setState((function(e){return{contacts:[a].concat(Object(i.a)(e.contacts))}}))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase().trim(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(C,{handleSubmit:this.handleSubmit}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(p,{filter:n,handleChange:this.handleChange}),Object(b.jsx)(h,{contacts:r,handleDelete:this.handleDelete})]})}}]),n}(a.Component);n(17);c.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={formMain:"ContactForm_formMain__1g-NA",formLabel:"ContactForm_formLabel__2eVJE",formInput:"ContactForm_formInput__3R4mv",formBtn:"ContactForm_formBtn__1Fn04"}}},[[18,1,2]]]);
//# sourceMappingURL=main.c0edc7bb.chunk.js.map