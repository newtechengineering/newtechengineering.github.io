(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,a){"use strict";a.r(t);a(157);var n=a(7),r=a.n(n),c=a(0),i=a.n(c),l=a(206),o=a(155),s=a(154),u=a(277).clients,d=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(s.a,{title:"Our Clients"}),i.a.createElement("div",{className:"container ","data-aos":"fade-up"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("h1",null,"Our Clients"),i.a.createElement(l.a,{striped:!0,bordered:!0,condensed:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Client"),i.a.createElement("td",null,"Place(s)"),i.a.createElement("td",null,"Product(s)"))),i.a.createElement("tbody",null,u.map(function(e){return i.a.createElement("tr",null,i.a.createElement("td",null," ",e.name," "),i.a.createElement("td",null," ",e.place," "),i.a.createElement("td",null," ",e.product," "))})))),i.a.createElement("div",{className:"col-lg-6 pos-sticky"},i.a.createElement("h1",null,"Our Reach"),i.a.createElement("div",{style:{position:"relative",height:"740px",overflow:"hidden",right:"0px"}},i.a.createElement("iframe",{src:"https://www.google.com/maps/d/embed?mid=1qKbE-cmcWO2xzrO53d5c012IrUUndvr6",width:"580",height:"780",style:{position:"absolute",top:"-50px",border:"none"}})))))},t}(c.Component);t.default=d},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(145),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(150),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},153:function(e,t){e.exports={common:{name:"New Tech Engineering",address:[{value:"Plot No.- 522, Lakhanpur Housing Society, Vikas Nagar, Kanpur (UP), India"}],email:[{value:"contact@newtechpackaging.in"},{value:"anuragshukla87@yahoo.in"}],contact:[{name:"Mr. Anurag Shukla",value:"9935443041"},{name:"Mrs. Archna Shukla",value:"8948099022"},{name:"Landline",value:"05122580416"}],social:[{name:"LinkedIn",url:"https://www.linkedin.com/company/newtech-engineering"},{name:"TradeIndia",url:"https://www.tradeindia.com/Seller-3349669-Newtech-engineering/"},{name:"IndiaMart",url:"https://www.indiamart.com/new-tech-engineering/"}]}}},154:function(e,t,a){"use strict";var n=a(161),r=a(0),c=a.n(r),i=a(4),l=a.n(i),o=a(168),s=a.n(o),u=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;e.url;return c.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(e.site.siteMetadata.keywords.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},c.a.createElement("html",{lang:"en"}),c.a.createElement("title",{itemProp:"name",lang:"en"},l),c.a.createElement("meta",{name:"description",content:n}),c.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),c.a.createElement("meta",{property:"og:title",content:l}),c.a.createElement("meta",{property:"og:description",content:n}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:url",content:e.site.siteMetadata.url}),c.a.createElement("meta",{property:"og:site_name",content:l}),c.a.createElement("meta",{itemProp:"name",content:l}),c.a.createElement("meta",{itemProp:"description",content:n}),c.a.createElement("meta",{name:"twitter:url",content:e.site.siteMetadata.url}),c.a.createElement("meta",{name:"twitter:title",content:l}),c.a.createElement("meta",{name:"twitter:description",content:n}),c.a.createElement("meta",{name:"twitter:image:alt",content:l}),c.a.createElement("meta",{name:"google-site-verification",content:"hbA8jcJ2voBJxpDHRj74y0jsS2eF20sgApqcb2SlOtI"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="3725218355"},155:function(e,t,a){"use strict";a(157);var n=a(7),r=a.n(n),c=a(158),i=a(0),l=a.n(i),o=a(146),s=a(340),u=a(336),d=a(337),m=function(){return l.a.createElement(s.a,{inverse:!0,collapseOnSelect:!0},l.a.createElement(s.a.Header,null,l.a.createElement(s.a.Brand,null,l.a.createElement(o.Link,{to:"/"},"New Tech Engineering"),l.a.createElement("br",null),l.a.createElement("p",{className:"tagline text-center"},"Automating new trends in packaging...")),l.a.createElement(s.a.Toggle,null)),l.a.createElement(s.a.Collapse,null,l.a.createElement(u.a,{pullRight:!0},l.a.createElement(d.a,{eventKey:1,href:"#"},l.a.createElement(o.Link,{to:"/",activeClassName:"active"},"Home")),l.a.createElement(d.a,{eventKey:2},l.a.createElement(o.Link,{to:"/products",activeClassName:"active"},"Products")),l.a.createElement(d.a,{eventKey:3,href:"#"},l.a.createElement(o.Link,{to:"/applications",activeClassName:"active"},"Applications")),l.a.createElement(d.a,{eventKey:4,href:"#"},l.a.createElement(o.Link,{to:"/clients",activeClassName:"active"},"Clients")),l.a.createElement(d.a,{eventKey:5,href:"#"},l.a.createElement(o.Link,{to:"/businessenquiry",activeClassName:"active"},"Business Enquiry")))))},p=a(165),h=a.n(p),g=(a(166),a(160),a(167),a(153).common),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){h.a.init({duration:800})},a.render=function(){var e=this.props.children;return l.a.createElement(o.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{siteTitle:t.site.siteMetadata.title}),l.a.createElement("div",null,e,l.a.createElement("footer",null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row mb-flex"},l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget",style:{height:"100%"}},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59169.346355760936!2d79.01735087781636!3d22.046376400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39f2923d0201%3A0xe7b5479dcd759a3c!2sNEW+TECH+ENGINEERING!5e0!3m2!1sen!2sin!4v1552234090977",allowfullscreen:!0,frameborder:"0",width:"100",height:"250",style:{width:"100%",height:"100%"}}))),l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget"},l.a.createElement("h5",{class:"widgetheading"},"Social Media"),l.a.createElement("ul",{class:"link-list"},g.social.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url}," ",e.name," "))})))),l.a.createElement("div",{class:"col-xs-12 col-md-4"},l.a.createElement("div",{class:"widget"},l.a.createElement("h5",{class:"widgetheading"},"Get in touch with us"),l.a.createElement("address",null,l.a.createElement("strong",null," ",g.name," "),l.a.createElement("br",null),g.address.map(function(e){return l.a.createElement("p",null," ",e.value," ")})),l.a.createElement("p",null,g.contact.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{class:"icon-phone"})," ",e.name," - ",e.value," ",l.a.createElement("br",null)," ")}),l.a.createElement("br",null),g.email.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{class:"icon-envelope-alt"})," ",e.value," ",l.a.createElement("br",null)," ")})))))),l.a.createElement("div",{id:"sub-footer"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 col-centered text-center"},l.a.createElement("div",{class:"copyright"},l.a.createElement("p",null,l.a.createElement("span",null,"© ",g.name," - All right reserved."))))))))))},data:c})},t}(i.Component);t.a=E},158:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur"}}}}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(51),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"New Tech Engineering, Kanpur",description:"New Tech Engineering, established in the year 1996 by the most promising leaders of the group, in order to manufacture quality packaging/packing machines, with strict quality control. The growth of\n    the packing industry is far behind the overall economic growth where came the need of a custom built packaging machines to improve upon the\n    prevailing packing standards. \n    We are equipped with strong R&D and strict quality control measures and ready to take any challenge. The company has well qualified\n    enthusiastic sales & service team to take care of customer's requirement.\n    Manufacturers & exporters of Pouch Packing Machines, Pouch Packaging Machines, Form Fill & Seal machines, Powder Packing & Liquid filling machines, fully pneumatic collar type, semi-pneumatic collar type, sugar type, Packing of Free flowing & Non-sticky course in India.",author:"@newtechengineering",url:"https://newtechengineering.netlify.com",keywords:["new tech engineering kanpur","newtech engineering kanpur","new tech. engineering kanpur","new tech engineering ","new tech kanpur","new tech","new tech machines kanpur","new tech packaging kanpur","new tech packaging machines kanpur","kanpur","packaging","machines","packaging machines","new tech engineering kanpur"]}}}}},206:function(e,t,a){"use strict";var n=a(147),r=a(148),c=a(149),i=a(151),l=a.n(i),o=a(0),s=a.n(o),u=a(4),d=a.n(u),m=a(152),p={striped:d.a.bool,bordered:d.a.bool,condensed:d.a.bool,hover:d.a.bool,responsive:d.a.bool},h=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.striped,c=t.bordered,i=t.condensed,o=t.hover,u=t.responsive,d=t.className,p=Object(r.a)(t,["striped","bordered","condensed","hover","responsive","className"]),h=Object(m.f)(p),g=h[0],E=h[1],v=Object(n.a)({},Object(m.d)(g),((e={})[Object(m.e)(g,"striped")]=a,e[Object(m.e)(g,"bordered")]=c,e[Object(m.e)(g,"condensed")]=i,e[Object(m.e)(g,"hover")]=o,e)),y=s.a.createElement("table",Object(n.a)({},E,{className:l()(d,v)}));return u?s.a.createElement("div",{className:Object(m.e)(g,"responsive")},y):y},t}(s.a.Component);h.propTypes=p,h.defaultProps={bordered:!1,condensed:!1,hover:!1,responsive:!1,striped:!1},t.a=Object(m.a)("table",h)},277:function(e,t){e.exports={clients:[{name:"M/S RSPL Limited",place:"Alwar, Aurangabad, Roorkee, Sahibabad, Sagar, Patna, Bhognipur, Rania, Rania Umran, Chaubepur",product:"Ghari Detergent"},{name:"M/S Shubham Goldiee Masale Pvt. Ltd.",place:"Kanpur",product:"Goldiee Masale"},{name:"M/S Spipick Foods LLP",place:"Kanpur",product:"Goldiee Masale"},{name:"M/S Patanjali Ayurved Pvt. Ltd.",place:"Haridwar",product:"Patanjali  Ayurved"},{name:"M/S Swastha Aahar Pvt. Ltd.",place:"Haryana",product:"Patanjali Product"},{name:"M/S Marutii Quality Products Pvt. Ltd.",place:"Guwahati",product:"Patanjali Product"},{name:"M/S Divya Pharmacy Unit",place:"Haridwar",product:"Patanjali Product"},{name:"M/S Gold Mohor Products Pvt. Ltd.",place:"Mumbai, Jaipur, Rajnand Gaun, Ranchi",product:"Gold Mohor Detergent"},{name:"M/S Meera Gramoudyog Sansthan",place:"Jaipur",product:"Solar Detergent"},{name:"M/S Nakshtra Udyog",place:"Jaipur",product:"Solar Detergent"},{name:"M/S Shiv Gramoudyog Sansthan",place:"Kanpur",product:"More Detergent"},{name:"M/S Kamal Gramoudyog Sansthan",place:"Kanpur",product:"Vidisha Detergent"},{name:"M/S Shree Durga Gramoudyog Sansthan",place:"Kanpur",product:"Vidisha Detergent"},{name:"M/S Kwality Soap Chemical Pvt. Ltd.",place:"Nepal",product:"Detergent"},{name:"M/S Shiv Shakti Soap Pvt. Ltd.",place:"Nepal",product:"Detergent"},{name:"M/S Sulakshan Soap Factory",place:"Batala, Punjab",product:"Detergent"},{name:"M/S Lucknow Gramoudyog Sansthan",place:"Lucknow",product:"Guide Detergent"},{name:"M/S Daya Khadi Gramoudyog Sansthan",place:"Lucknow",product:"Parakh Detergent"},{name:"M/S V.S Chemicals",place:"Bareily",product:"Teacher Detergent"},{name:"M/S Ratan Gramoudyog Sansthan",place:"Unnao",product:"Rajratan Detergent"},{name:"M/S Mohini Tea Leaves Pvt. Ltd.",place:"Kanpur",product:"MohiniTea"},{name:"M/S Kapila Krishi Udyog Ltd.",place:"Kanpur",product:"--"},{name:"M/S Khandelwal Agro Industries",place:"Bareily",product:"Zinc"},{name:"M/S Dinesh Soap & Household Industries Pvt. Ltd.",place:"Nepal",product:"Detergent Powder"},{name:"M/S Aroma Chemical Industries",place:"Nepal",product:"Detergent"},{name:"M/S Aloka Manufacturing Pvt. Ltd.",place:"Jharkhand",product:"Detergent Powder"},{name:"M/S Shanti Nath Detergents",place:"West Bengal",product:"Safed Detergent"},{name:"M/S Ashoka Gramoudyog Sansthan",place:"Kanpur",product:"OCM Detergent"},{name:"M/S Nepal Lever",place:"Nepal",product:"Wheel Detergent Powder"}]}}}]);
//# sourceMappingURL=component---src-pages-clients-js-b8d48faff38eea068a76.js.map