(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"T/ZZ":function(e,t,a){var n,r,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},okzv:function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),i=a.n(r),o=a("TJpk"),c=a.n(o),p=a("T/ZZ"),l=a.n(p),m=a("IpnI"),s=a.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,o=r.postNode,p=r.postPath,m=r.postSEO,u="";if(m){var g=o.frontmatter;e=g.title,t=g.description?g.description:o.excerpt,a=g.keywords,g.cover&&(u=g.cover.childImageSharp.fixed.src),n=l()(s.a.siteUrl,s.a.pathPrefix,p)}else e=s.a.siteTitle,t=s.a.siteDescription,u=s.a.siteLogo;u=l()(s.a.siteUrl,s.a.pathPrefix,u);var d=l()(s.a.siteUrl,s.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return m&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:u},description:t}),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:u}),a&&i.a.createElement("meta",{name:"keywords",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:m?n:d}),m?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:u}),i.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:u}))},t}(r.Component);t.a=u},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),c=a("hpys"),p=a("Xhe4"),l=a("okzv"),m=a("FJJU"),s=a("IpnI"),u=a.n(s);t.default=function(){return r.a.createElement(c.a,{hasFooter:!1},r.a.createElement("div",{className:"page-not-found-container"},r.a.createElement(o.a,{title:u.a.pageNotFoundTitle+" - "+u.a.siteTitle}),r.a.createElement(l.a,null),r.a.createElement(p.a,{title:""+u.a.pageNotFoundTitle}),r.a.createElement("div",{className:"main-content container padding-top-3 padding-bottom-3 margin-top-3 margin-bottom-3"},r.a.createElement("p",null,u.a.pageNotFoundContent),r.a.createElement(m.a,{to:"/",className:"btn btn-primary"},u.a.pageNotFoundBtn))))}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-7e1755854d0694b73137.js.map