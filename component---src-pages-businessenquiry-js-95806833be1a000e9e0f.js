(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(41),a(78),a(158),a(33);var n,r=a(7),i=a.n(r),l=(a(74),a(52),a(174),a(0)),c=a.n(l),o=a(156),s=a(155),m={apiKey:"AIzaSyDAbCzfPN7WgBidmiHoU4oweLQk8J3a7bI",authDomain:"new-tech-engineering.firebaseapp.com",databaseURL:"https://new-tech-engineering.firebaseio.com",projectId:"new-tech-engineering",storageBucket:"new-tech-engineering.appspot.com",messagingSenderId:"866536837658"},u=function(e){return n||(e.initializeApp(m),n=e,e)};var d=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState({data:Object.assign({},a.state.data,(t={},t[e.target.name]=e.target.value,t))})},a.handleSubmit=function(e){e.preventDefault(),a.state.firebase.database().ref().child("messages").push(a.state.data);var t=document.getElementById("msg");t.innerText="Success! We'll get back to you shortly.",t.style.display="block",a.setState({data:{}})},a.state={firebase:null,data:{}},a}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=Promise.all([a.e(3),a.e(14)]).then(a.t.bind(null,342,7)),n=Promise.all([a.e(3),a.e(15)]).then(a.bind(null,343));Promise.all([t,n]).then(function(t){console.log(t);var a=u(t[0]);e.setState({firebase:a})})},n.render=function(){return c.a.createElement(o.a,null,c.a.createElement(s.a,{title:"Business Enquiry"}),c.a.createElement("div",{className:"container be-container","data-aos":"fade-up"},c.a.createElement("div",{className:"row d-flex"},c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("div",{className:"well well-sm",style:{marginTop:"30px"}},c.a.createElement("form",{className:"form-horizontal",name:"contact",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),c.a.createElement("input",{type:"hidden",name:"bot-field"}),c.a.createElement("fieldset",null,c.a.createElement("legend",{className:"text-center"},"Business Enquiry"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-md-3 control-label",for:"name"},"Name"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{id:"name",name:"name",type:"text",onChange:this.handleChange,placeholder:"Your name",className:"form-control",required:!0}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-md-3 control-label",for:"email"},"Your E-mail"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Your email",onChange:this.handleChange,className:"form-control",required:!0}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-md-3 control-label",for:"phone"},"Your Contact Number"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{id:"phone",name:"phone",type:"number",placeholder:"Your Phone",onChange:this.handleChange,className:"form-control",required:!0}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-md-3 control-label",for:"address"},"Your Address"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{id:"address",name:"address",type:"text",placeholder:"Your Address",onChange:this.handleChange,className:"form-control"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"col-md-3 control-label",for:"message"},"Your message"),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("textarea",{className:"form-control",id:"message",name:"message",placeholder:"Please enter your message here...",onChange:this.handleChange,rows:"5",required:!0}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"col-md-12 text-right"},c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Submit")))),c.a.createElement("h4",{id:"msg",style:{display:"none"}},"Success!")))))))},t}(l.Component);t.default=d},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(145),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(150),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},153:function(e,t,a){e.exports=a.p+"static/logo-f77883157cc3c546a7aed56f0c6b515a.png"},154:function(e,t){e.exports={common:{name:"New Tech Engineering",address:[{value:"Plot No.- 522, Lakhanpur Housing Society, Vikas Nagar, Kanpur (UP), India"}],email:[{value:"contact@newtechpackaging.in"},{value:"anuragshukla87@yahoo.in"}],contact:[{name:"Mr. Anurag Shukla",value:"9935443041"},{name:"Mrs. Archna Shukla",value:"8948099022"},{name:"Landline",value:"05122580416"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com/company/newtech-engineering"},{name:"TradeIndia",url:"https://www.tradeindia.com/Seller-3349669-Newtech-engineering/"},{name:"IndiaMart",url:"https://www.indiamart.com/new-tech-engineering/"}]}}},155:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(169),s=a.n(o),m=a(146);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title;e.url;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(e.site.siteMetadata.keywords.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("html",{lang:"en"}),i.a.createElement("title",{itemProp:"name",lang:"en"},c),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),i.a.createElement("meta",{property:"og:title",content:c}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:url",content:e.site.siteMetadata.url}),i.a.createElement("meta",{property:"og:site_name",content:c}),i.a.createElement("meta",{itemProp:"name",content:c}),i.a.createElement("meta",{itemProp:"description",content:n}),i.a.createElement("meta",{name:"twitter:url",content:e.site.siteMetadata.url}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image:alt",content:c}),i.a.createElement("meta",{name:"google-site-verification",content:"hbA8jcJ2voBJxpDHRj74y0jsS2eF20sgApqcb2SlOtI"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="3725218355"},156:function(e,t,a){"use strict";a(158);var n=a(7),r=a.n(n),i=a(159),l=a(0),c=a.n(l),o=a(146),s=a(344),m=a(340),u=a(341),d=(a(153),function(){return c.a.createElement(s.a,{inverse:!0,collapseOnSelect:!0},c.a.createElement(s.a.Header,null,c.a.createElement(s.a.Brand,null,c.a.createElement(o.Link,{to:"/"},"New Tech Engineering")),c.a.createElement(s.a.Toggle,null)),c.a.createElement(s.a.Collapse,null,c.a.createElement(m.a,{pullRight:!0},c.a.createElement(u.a,{eventKey:1,href:"#"},c.a.createElement(o.Link,{to:"/",activeClassName:"active"},"Home")),c.a.createElement(u.a,{eventKey:2},c.a.createElement(o.Link,{to:"/products",activeClassName:"active"},"Products")),c.a.createElement(u.a,{eventKey:3,href:"#"},c.a.createElement(o.Link,{to:"/applications",activeClassName:"active"},"Applications")),c.a.createElement(u.a,{eventKey:4,href:"#"},c.a.createElement(o.Link,{to:"/clients",activeClassName:"active"},"Clients")),c.a.createElement(u.a,{eventKey:5,href:"#"},c.a.createElement(o.Link,{to:"/businessenquiry",activeClassName:"active"},"Business Enquiry")))))}),p=a(166),g=a.n(p),h=(a(167),a(161),a(168),a(154).common),f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){g.a.init({duration:800})},a.render=function(){var e=this.props.children;return c.a.createElement(o.StaticQuery,{query:"1044757290",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{siteTitle:t.site.siteMetadata.title}),c.a.createElement("div",null,e,c.a.createElement("footer",null,c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row mb-flex"},c.a.createElement("div",{class:"col-xs-12 col-md-4"},c.a.createElement("div",{class:"widget",style:{height:"100%"}},c.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59169.346355760936!2d79.01735087781636!3d22.046376400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39f2923d0201%3A0xe7b5479dcd759a3c!2sNEW+TECH+ENGINEERING!5e0!3m2!1sen!2sin!4v1552234090977",allowfullscreen:!0,frameborder:"0",width:"100",height:"250",style:{width:"100%",height:"100%"}}))),c.a.createElement("div",{class:"col-xs-12 col-md-4"},c.a.createElement("div",{class:"widget"},c.a.createElement("h5",{class:"widgetheading"},"Social Media"),c.a.createElement("ul",{class:"link-list"},h.social.map(function(e){return c.a.createElement("li",null,c.a.createElement("a",{href:e.url}," ",e.name," "))})))),c.a.createElement("div",{class:"col-xs-12 col-md-4"},c.a.createElement("div",{class:"widget"},c.a.createElement("h5",{class:"widgetheading"},"Get in touch with us"),c.a.createElement("address",null,c.a.createElement("strong",null," ",h.name," "),c.a.createElement("br",null),h.address.map(function(e){return c.a.createElement("p",null," ",e.value," ")})),c.a.createElement("p",null,h.contact.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{class:"icon-phone"})," ",e.name," - ",e.value," ",c.a.createElement("br",null)," ")}),c.a.createElement("br",null),h.email.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{class:"icon-envelope-alt"})," ",e.value," ",c.a.createElement("br",null)," ")})))))),c.a.createElement("div",{id:"sub-footer"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-6 col-centered text-center"},c.a.createElement("div",{class:"copyright"},c.a.createElement("p",null,c.a.createElement("span",null,"© ",h.name," - All right reserved."))))))))))},data:i})},t}(l.Component);t.a=f},159:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur"}}}}},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(51),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,a){},162:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur",description:"New Tech Engineering, established in the year 1996 by the most promising leaders of the group, in order to manufacture quality packaging/packing machines, with strict quality control. The growth of\n    the packing industry is far behind the overall economic growth where came the need of a custom built packaging machines to improve upon the\n    prevailing packing standards. \n    We are equipped with strong R&D and strict quality control measures and ready to take any challenge. The company has well qualified\n    enthusiastic sales & service team to take care of customer's requirement.\n    Manufacturers & exporters of Pouch Packing Machines, Pouch Packaging Machines, Form Fill & Seal machines, Powder Packing & Liquid filling machines, fully pneumatic collar type, semi-pneumatic collar type, sugar type, Packing of Free flowing & Non-sticky course in India.",author:"@newtechengineering",url:"https://newtechengineering.netlify.com",keywords:["new tech engineering kanpur","newtech engineering kanpur","new tech. engineering kanpur","new tech engineering ","new tech kanpur","new tech","new tech machines kanpur","new tech packaging kanpur","new tech packaging machines kanpur","kanpur","packaging","machines","packaging machines","new tech engineering kanpur"]}}}}},174:function(e,t,a){var n=a(26),r=a(34);a(175)("keys",function(){return function(e){return r(n(e))}})},175:function(e,t,a){var n=a(11),r=a(16),i=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-businessenquiry-js-95806833be1a000e9e0f.js.map