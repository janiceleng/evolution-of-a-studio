(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t),n(50);var a=n(12),i=n.n(a),o=n(0),r=n.n(o),l=n(160),c=n.n(l),s=n(148),u=n(158),d=n.n(u),m=n(167),p=n(153),f=n(144),g=n(147),h=f.b.h1.withConfig({displayName:"_ui__BlogTitle"})(["font-family:'Josefin Sans';text-transform:uppercase;margin-top:60px;"]),x=f.b.p.withConfig({displayName:"_ui__DateText"})(["font-family:'Josefin Sans';font-size:14px;text-transform:uppercase;"]),b=f.b.div.withConfig({displayName:"_ui__PostText"})(["font-family:'Domine';"]),y=f.b.div.withConfig({displayName:"_ui__BlogImgContainer"})(["width:100%;&:not(:first-child){margin-left:30px;}"]),_=f.b.img.withConfig({displayName:"_ui__BlogImg"})([""," &:not(:first-child){margin-left:30px;}",""],"",""),w=f.b.div.withConfig({displayName:"_ui__SocialMediaContainer"})(["display:flex;margin-bottom:30px;& > div{cursor:pointer;color:",";&:hover{color:",";}}& > div:not(:first-child){margin-left:10px;}"],Object(g.get)("theme.colors.lightTeal"),Object(g.get)("theme.colors.darkTeal")),v=n(177),E=n(192),C=n(355),k=n(356),N=n(357),S=n(358),T=n(359),z=n(360),j=n(176),I=n(146);n.d(t,"pageQuery",function(){return O});var B=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.data.markdownRemark),n=d()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,i=a.previous,o=a.next,l=d()(t,"frontmatter.images"),u="https://www.evolutionofastudio.com"+decodeURIComponent(t.fields.slug),f="Apartment inspo from Evolution Of A Studio: "+t.frontmatter.title;return r.a.createElement(m.a,this.props,r.a.createElement(c.a,{title:t.frontmatter.title+" | "+n},r.a.createElement("meta",{name:"description",content:"Practical and clever studio apartment layouts for daily family life... "+t.excerpt})),r.a.createElement(E.a,null),r.a.createElement("div",{style:{position:"relative",zIndex:1}},r.a.createElement(v.a,null),r.a.createElement(v.c,null,r.a.createElement(h,null,t.frontmatter.title),r.a.createElement(x,null,t.frontmatter.date),r.a.createElement(w,null,r.a.createElement(C.a,{url:u,hashtag:"#evolutionofastudio"},r.a.createElement(j.Icon,{name:"facebook"})),r.a.createElement(k.a,{url:u,title:f,hashtags:["evolutionofastudio","nyc","apartment"]},r.a.createElement(j.Icon,{name:"twitter"})),r.a.createElement(N.a,{url:u,subject:f,body:f+": "+u},r.a.createElement(j.Icon,{name:"envelope"})),r.a.createElement(S.a,{url:u},r.a.createElement(j.Icon,{name:"google-plus"})),r.a.createElement(T.a,{url:u,title:f},r.a.createElement(j.Icon,{name:"reddit"})),t.frontmatter.images&&t.frontmatter.images[0]&&r.a.createElement(z.a,{url:u,media:Object(I.withPrefix)(t.frontmatter.images[0].publicURL),description:f+". "+t.excerpt+"..."},r.a.createElement(j.Icon,{name:"pinterest"}))),r.a.createElement(b,{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l&&l.map(function(e,t){var n=e.relativePath,a=e.publicURL;return r.a.createElement(y,{key:a},r.a.createElement(_,{key:n,src:a}))})),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,i&&r.a.createElement(s.b,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),r.a.createElement("li",null,o&&r.a.createElement(s.b,{to:o.fields.slug,rel:"next",style:{textDecoration:"none"}},o.frontmatter.title," →"))))))},t}(r.a.Component),O=(t.default=B,"111291033")},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),o=n(8),r=n.n(o),l=n(145),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(34);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(150),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(35);n.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u});var a=n(144),i=n(146),o={colors:{darkTeal:"darkslategray",lightTeal:"#8BADAD",lightPink:"#E6BCBC",lightYellow:"#E3D69B",eggplant:"#352738",darkEggplant:"#2E2530"}},r="\n  font-family: 'Josefin Sans';\n  font-weight: 600;\n  line-height: 1.1em;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 48px;\n  color: #333;\n  box-shadow: none;\n",l=(a.b.h1.withConfig({displayName:"_style__BlogTitle"})(["",""],r),Object(a.b)(i.Link).withConfig({displayName:"_style__RouterBlogTitle"})(["",""],r)),c=(a.b.h3.withConfig({displayName:"_style__SmallBlogTitle"})(["font-family:'Josefin Sans';text-transform:uppercase;"]),a.b.p.withConfig({displayName:"_style__DateText"})(["font-family:'Josefin Sans';font-size:14px;text-transform:uppercase;margin-top:10px;"])),s=a.b.div.withConfig({displayName:"_style__PostText"})(["font-family:'Domine';font-size:16px;line-height:30px;"]),u=Object(a.b)(i.Link).withConfig({displayName:"_style__Link"})(["text-decoration:none;box-shadow:none;font-family:Josefin Sans;"])},150:function(e,t,n){var a;e.exports=(a=n(169))&&a.default||a},153:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(188),i=n.n(a),o=n(189),r=n.n(o);r.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete r.a.googleFonts;var l=new i.a(r.a),c=l.rhythm;l.scale},167:function(e,t,n){"use strict";var a=n(12),i=n.n(a),o=n(0),r=n.n(o),l=n(146),c=(n(158),n(153),n(144)),s=n(147),u=c.b.div.withConfig({displayName:"_ui__Container"})(["margin:0 auto;width:100%;position:relative;"]),d=c.b.div.withConfig({displayName:"_ui__HeaderContainer"})(["width:100%;background-color:darkslategray;position:sticky;top:0;z-index:10;"]),m=c.b.div.withConfig({displayName:"_ui__Header"})(["display:flex;justify-content:space-between;align-items:center;padding:","px ","px;background-color:darkslategray;z-index:2;width:100%;max-width:1000px;margin:0 auto;height:116px;@media only screen and (max-width:768px){flex-flow:column;}"],45,30),p=Object(c.b)(l.Link).withConfig({displayName:"_ui__Nav"})(["font-family:'Josefin Sans';text-transform:uppercase;text-decoration:none;font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);transition:all 300ms ease;box-shadow:none;&:hover{color:rgba(255,255,255,0.9);transition:all 300ms ease;}&:not(:last-child){margin-right:20px;}"]),f=c.b.a.withConfig({displayName:"_ui__RegularNav"})(["font-family:'Josefin Sans';text-transform:uppercase;text-decoration:none;margin-right:20px;font-size:12px;font-weight:700;color:rgba(255,255,255,0.7);transition:all 300ms ease;cursor:pointer;box-shadow:none;&:hover{color:rgba(255,255,255,0.9);transition:all 300ms ease;}"]),g=Object(c.b)(l.Link).withConfig({displayName:"_ui__SiteTitle"})(["font-family:'Josefin Sans';text-transform:uppercase;font-size:32px;font-size:24px;"," "," text-decoration:none;box-shadow:none;width:100%;color:#fff;@media only screen and (max-width:768px){font-size:20px;text-align:center;}"],"",""),h=c.b.div.withConfig({displayName:"_ui__LinkContainer"})([""]),x=n(151),b=n.n(x),y=n(148),_=n(176);function w(){var e=b()(["\n  margin-right: 0;\n"]);return w=function(){return e},e}function v(){var e=b()(["\n  display: block;\n  margin-bottom: 10px;\n  &:not(:last-child) {\n    margin-right: 0;\n  }\n"]);return v=function(){return e},e}function E(){var e=b()(["\n  border-left: 1px solid white;\n  padding-left: 30px;\n"]);return E=function(){return e},e}function C(){var e=b()(["\n  ","\n  ","\n  text-align: right;\n  @media only screen and (max-width: 768px) {\n    width: 30%;\n  }\n\n"]);return C=function(){return e},e}function k(){var e=b()(["\n  font-size: 14px;\n  margin-bottom: 10px;\n"]);return k=function(){return e},e}var N=c.b.div.withConfig({displayName:"footer__Container"})(["position:relative;z-index:100;width:100%;background-color:",";color:white;font-family:'Josefin Sans';padding:60px 0;font-size:12px;"],Object(s.get)("theme.colors.darkTeal")),S=c.b.div.withConfig({displayName:"footer__Inner"})(["max-width:1000px;margin:0 auto;display:flex;justify-content:space-between;"]),T=c.b.div.withConfig({displayName:"footer__Title"})(["text-transform:uppercase;"," ",""],"","").extend(k()),z=c.b.div.withConfig({displayName:"footer__Text"})(["font-family:'Domine';color:rgba(255,255,255,0.6);font-weight:100;line-height:20px;font-size:11px;"]),j=c.b.div.withConfig({displayName:"footer__Column"})(["width:100%;max-width:30%;padding:0 30px;@media only screen and (max-width:768px){max-width:70%;}"]),I=j.extend(C(),"",""),B=(j.extend(E()),p.extend(v())),O=f.extend(w()),P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(j,null,r.a.createElement(T,null,"About Evolution Of A Studio"),r.a.createElement(z,null,'NYC apartments are notorious for being small. Ours is no exception. We blog about how we transform our studio apartment, as we go about daily life with a baby. We offer practical perspectives, through floorplan diagrams and more. Join us in decluttering our "things" to make space for what truly matters: each other.'),r.a.createElement(z,null)),r.a.createElement(I,null,r.a.createElement(B,{to:"/"},"Home"),r.a.createElement(B,{to:"/blog"},"Blog"),r.a.createElement(B,{to:"/about"},"About"),r.a.createElement(O,{href:"https://instagram.com/evolutionofastudio",target:"_blank"},r.a.createElement(_.Icon,{name:"instagram"})))))},t}(r.a.Component),J=n(160),R=n.n(J),L=(Object(c.b)(l.Link).withConfig({displayName:"main-wrapper__Link"})(["text-decoration:none;color:black;text-transform:uppercase;font-family:'Josefin Sans';"]),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return r.a.createElement("div",null,"hoo"),"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__,r.a.createElement(c.a,{theme:y.e},r.a.createElement(u,null,r.a.createElement(R.a,null,r.a.createElement("meta",{name:"description",content:"Practical and clever studio apartment layouts for daily family life. Floorplan diagrams and small space ideas."}),r.a.createElement("meta",{name:"keywords",content:"studio,apartment,ideas,family"}),r.a.createElement("meta",{httpEquiv:"cache-control",content:"public,max-age=31536000,immutable"})),r.a.createElement(d,null,r.a.createElement(m,null,r.a.createElement(g,{to:"/"},"Evolution Of A Studio"),r.a.createElement(h,null,r.a.createElement(p,{to:"/blog"},"Blog"),r.a.createElement(p,{to:"/about"},"About")))),r.a.createElement("div",null,t),r.a.createElement(P,null)))},t}(r.a.Component));t.a=L},169:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),l=n(37),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},177:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return d}),n.d(t,"g",function(){return m}),n.d(t,"i",function(){return p}),n.d(t,"h",function(){return f}),n.d(t,"j",function(){return g}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return x});var a=n(151),i=n.n(a),o=n(144),r=n(147);function l(){var e=i()(["\n  background: #ccc;\n"]);return l=function(){return e},e}var c=o.b.div.withConfig({displayName:"_ui__BlogSection"})(["max-width:1000px;background-color:white;padding:60px 120px;margin:30px;box-shadow:0px 10px 30px rgba(0,0,0,0.1);margin:0 auto;z-index:11;pointer-events:initial;"," @media only screen and (max-width:768px){width:100%;padding:60px 30px;}"],""),s=o.b.div.withConfig({displayName:"_ui__FeatureSection"})(["max-width:1000px;"," margin:30px;margin:0 auto;"],""),u=o.b.div.withConfig({displayName:"_ui__BlogContainer"})(["margin:90px 0;&:not(:nth-last-child(2)){padding-bottom:90px;border-bottom:1px solid ",";}",""],Object(r.get)("theme.colors.lightTeal"),""),d=(o.b.div.withConfig({displayName:"_ui__Image"})(["background-image:",";background-size:130%;width:150px;height:150px;background-position:center;border-radius:300px;position:relative;"," "," ",""],function(e){return"url("+e.src+")"},"","",""),o.b.div.withConfig({displayName:"_ui__Bg"})(["position:absolute;background:#fefefe;width:100%;top:100px;height:100%;z-index:-1;"])),m=(d.extend(l()),o.b.div.withConfig({displayName:"_ui__HeaderTitle"})(["font-family:'Josefin Sans';text-transform:uppercase;font-size:14px;text-align:center;margin:50px 0;"])),p=o.b.div.withConfig({displayName:"_ui__SmallFeatureContainer"})(["display:flex;justify-content:space-between;"," width:1000px;margin:100px auto;pointer-events:initial;@media only screen and (max-width:768px){display:block;width:100%;}"],""),f=o.b.div.withConfig({displayName:"_ui__SmallFeature"})(["text-align:center;width:100%;position:relative;"," &:not(:first-child){margin-left:60px;}@media only screen and (max-width:768px){margin-bottom:10px;padding:0 30px;&:not(:first-child){margin-left:0px;}}"],""),g=o.b.div.withConfig({displayName:"_ui__SmallFeatureImage"})(["width:100%;height:400px;background-image:",";background-size:contain;background-repeat:no-repeat;transition:all 300ms ease;&:hover{transform:scale(1.1);opacity:0.5;}"," @media only screen and (max-width:768px){"," background-position:center;&:hover{transform:none;}}"],function(e){var t=e.imagePath;return t?"url("+t+")":"url("+n(191)+")"},"",""),h=o.b.div.withConfig({displayName:"_ui__CategoryContainer"})(["margin-bottom:30px;"]),x=o.b.div.withConfig({displayName:"_ui__CategoryText"})(["font-family:'Josefin Sans';font-size:12px;text-transform:uppercase;color:",""],Object(r.get)("theme.colors.lightTeal"))},191:function(e,t,n){e.exports=n.p+"static/palms-6335ffedbeb9d23a393f9874f8d1af4e.jpg"},192:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(151),i=n.n(a),o=n(144),r=n(147);function l(){var e=i()(["\n  height: 300px;\n  background-image: url(",");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return l=function(){return e},e}var c=o.b.div.withConfig({displayName:"_ui__Wrap"})([""," position:relative;z-index:1;"],""),s=o.b.div.withConfig({displayName:"_ui__Banner"})(["height:116px;background-color:",";margin-bottom:-100px;position:sticky;top:116px;"],Object(r.get)("theme.colors.darkTeal")),u=s.extend(l(),n(193))},193:function(e,t,n){e.exports=n.p+"static/window-art-b581ebd94f4243bcece28e64ed3c178d.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ddd66c3a546d52eb4aa8.js.map