(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,a){"use strict";a.r(t);a(157);var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(155),o=a(154),s=a(153).common,m=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(l.a,null,c.a.createElement(o.a,{title:"Our Clients"}),c.a.createElement("div",{className:"container "},c.a.createElement("h3",null,"Contact US"),c.a.createElement("div",{className:"col-lg-6"},s.name)))},t}(i.Component);t.default=m},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(145),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(150),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},153:function(e,t){e.exports={common:{name:"New Tech Engineering",address:[{value:"Plot No.- 522, Lakhanpur Housing Society, Vikas Nagar, Kanpur (UP), India"}],email:[{value:"anuragshukla87@yahoo.in"}],contact:[{name:"Mr. Anurag Shukla",value:"9935443041"},{name:"Mrs. Archna Shukla",value:"8948099022"},{name:"Landline",value:"05122580416"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com/company/newtech-engineering"},{name:"TradeIndia",url:"https://www.tradeindia.com/Seller-3349669-Newtech-engineering/"},{name:"IndiaMart",url:"https://www.indiamart.com/new-tech-engineering/"}]}}},154:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(168),s=a.n(o),m=a(146);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;e.url;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(e.site.siteMetadata.keywords.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},i.a.createElement("html",{lang:"en"}),i.a.createElement("title",{itemProp:"name",lang:"en"},l),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:url",content:e.site.siteMetadata.url}),i.a.createElement("meta",{property:"og:site_name",content:l}),i.a.createElement("meta",{itemProp:"name",content:l}),i.a.createElement("meta",{itemProp:"description",content:n}),i.a.createElement("meta",{name:"twitter:url",content:e.site.siteMetadata.url}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image:alt",content:l}),i.a.createElement("meta",{name:"google-site-verification",content:"hbA8jcJ2voBJxpDHRj74y0jsS2eF20sgApqcb2SlOtI"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="3725218355"},155:function(e,t,a){"use strict";a(157);var n=a(7),r=a.n(n),i=a(158),c=a(0),l=a.n(c),o=a(146),s=a(335),m=a(331),u=a(332),d=function(){return l.a.createElement(s.a,{inverse:!0,collapseOnSelect:!0},l.a.createElement(s.a.Header,null,l.a.createElement(s.a.Brand,null,l.a.createElement(o.Link,{to:"/"},"New Tech Engineering"),l.a.createElement("br",null),l.a.createElement("p",{className:"tagline text-center"},"Automating new trends in packaging...")),l.a.createElement(s.a.Toggle,null)),l.a.createElement(s.a.Collapse,null,l.a.createElement(m.a,{pullRight:!0},l.a.createElement(u.a,{eventKey:1,href:"#"},l.a.createElement(o.Link,{to:"/",activeClassName:"active"},"Home")),l.a.createElement(u.a,{eventKey:2},l.a.createElement(o.Link,{to:"/products",activeClassName:"active"},"Products")),l.a.createElement(u.a,{eventKey:3,href:"#"},l.a.createElement(o.Link,{to:"/applications",activeClassName:"active"},"Applications")),l.a.createElement(u.a,{eventKey:4,href:"#"},l.a.createElement(o.Link,{to:"/clients",activeClassName:"active"},"Clients")),l.a.createElement(u.a,{eventKey:5,href:"#"},l.a.createElement(o.Link,{to:"/businessenquiry",activeClassName:"active"},"Business Enquiry")))))},p=a(165),g=a.n(p),h=(a(166),a(160),a(167),a(153).common),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){g.a.init({duration:800})},a.render=function(){var e=this.props.children;return l.a.createElement(o.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{siteTitle:t.site.siteMetadata.title}),l.a.createElement("div",null,e,l.a.createElement("footer",null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row mb-flex"},l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget",style:{height:"100%"}},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59169.346355760936!2d79.01735087781636!3d22.046376400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39f2923d0201%3A0xe7b5479dcd759a3c!2sNEW+TECH+ENGINEERING!5e0!3m2!1sen!2sin!4v1552234090977",allowfullscreen:!0,frameborder:"0",width:"100",height:"250",style:{width:"100%",height:"100%"}}))),l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget"},l.a.createElement("h5",{class:"widgetheading"},"Social Media"),l.a.createElement("ul",{class:"link-list"},h.social.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url}," ",e.name," "))})))),l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget"},l.a.createElement("h5",{class:"widgetheading"},"Get in touch with us"),l.a.createElement("address",null,l.a.createElement("strong",null," ",h.name," "),l.a.createElement("br",null),h.address.map(function(e){return l.a.createElement("p",null," ",e.value," ")})),l.a.createElement("p",null,h.contact.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{class:"icon-phone"})," ",e.name," - ",e.value," ",l.a.createElement("br",null)," ")}),l.a.createElement("br",null),h.email.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{class:"icon-envelope-alt"})," ",e.value," ",l.a.createElement("br",null)," ")})))))),l.a.createElement("div",{id:"sub-footer"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 col-centered text-center"},l.a.createElement("div",{class:"copyright"},l.a.createElement("p",null,l.a.createElement("span",null,"© ",h.name," - All right reserved."))))))))))},data:i})},t}(c.Component);t.a=E},158:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur"}}}}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(51),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur",description:"New Tech Engineering, established in the year 1996 by the most promising leaders of the group, in order to manufacture quality packaging/packing machines, with strict quality control. The growth of\n    the packing industry is far behind the overall economic growth where came the need of a custom built packaging machines to improve upon the\n    prevailing packing standards. \n    We are equipped with strong R&D and strict quality control measures and ready to take any challenge. The company has well qualified\n    enthusiastic sales & service team to take care of customer's requirement.\n    Manufacturers & exporters of Pouch Packing Machines, Pouch Packaging Machines, Form Fill & Seal machines, Powder Packing & Liquid filling machines, fully pneumatic collar type, semi-pneumatic collar type, sugar type, Packing of Free flowing & Non-sticky course in India.",author:"@newtechengineering",url:"https://newtechengineering.netlify.com",keywords:["new tech engineering kanpur","newtech engineering kanpur","new tech. engineering kanpur","new tech engineering ","new tech kanpur","new tech","new tech machines kanpur","new tech packaging kanpur","new tech packaging machines kanpur","kanpur","packaging","machines","packaging machines","new tech engineering kanpur"]}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-e93d96ee3ee764f6e723.js.map