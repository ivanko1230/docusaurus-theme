(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{110:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),n=t.n(r),l=t(102),m=t(104),c=t(55),s=t.n(c);function i({sidebar:e}){return 0===e.items.length?null:n.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:s.a.sidebarItemTitle},e.title),n.a.createElement("ul",{className:s.a.sidebarItemList},e.items.map((e=>n.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},n.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))))))}},114:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(102),m=t(105),c=t(23),s=t(104),i=t(119),o=t(107),u=t(56),g=t.n(u);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:u,isBlogPostPage:E=!1}=e,{date:b,permalink:p,tags:h,readingTime:v}=r,{author:N,title:k,image:f,keywords:w}=t,_=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,I=t.author_image_url||t.authorImageURL,T=Object(o.a)(f,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,w&&w.length&&n.a.createElement("meta",{name:"keywords",content:w.join(",")}),f&&n.a.createElement("meta",{property:"og:image",content:T}),f&&n.a.createElement("meta",{name:"twitter:image",content:T}),f&&n.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`})),n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2",a=b.substring(0,10).split("-"),t=a[0],r=d[parseInt(a[1],10)-1],m=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},E?k:n.a.createElement(s.a,{to:p},k)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:g.a.blogPostDate},r," ",m,", ",t," ",v&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},I&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:_,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:I,alt:N})),n.a.createElement("div",{className:"avatar__intro"},N&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},N)),n.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.MDXProvider,{components:i.a},a)),(h.length>0||u)&&n.a.createElement("footer",{className:"row margin-vert--lg"},h.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),h.map((({label:e,permalink:a})=>n.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e)))),u&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:r.permalink,"aria-label":`Read more about ${k}`},n.a.createElement("strong",null,"Read More"))))))}},81:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(109),m=t(114),c=t(104),s=t(110);a.default=function(e){const{metadata:a,items:t,sidebar:r}=e,{allTagsPath:i,name:o,count:u}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`,wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,u," ",function(e,a){return e>1?`${a}s`:a}(u,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:i},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>n.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null)))))))))}}}]);