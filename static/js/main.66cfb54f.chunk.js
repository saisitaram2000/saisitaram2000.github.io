(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"name":"Sai Sita Ram Vaddavalli","profilepic":"profilepic.JPG","bio":"my bio","address":{"street":"Vaddavalli vari street,beside vasavi lodge","city":"Piduguralla","state":"AndhraPradesh","zip":"522413"},"contactmessage":"You can contact to me now","phone":"7993498130","email":"saisitaramvaddavalli@gmail.com"}]')},,,,,function(e){e.exports=JSON.parse('[{"education":[{"college":"NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR","branch":"BTECH in COMPUTER SCIENCE AND ENGINEERING","year":"2018-present","location":"DURGAPUR, WESTBENGAL"}],"skillmessage":"MY TECHNICAL SKILLS","skills":[{"name":"C/C++","level":"80%"},{"name":"Javascript","level":"60%"},{"name":"python","level":"40%"},{"name":"DataStructures/Algorithms","level":"60%"},{"name":"OOPS","level":"60%"},{"name":"React","level":"50%"},{"name":"Node.js","level":"50%"},{"name":"MySQL","level":"50%"},{"name":"Jquery","level":"40%"},{"name":"HTML/CSS","level":"50%"},{"name":"Git","level":"50%"}]}]')},function(e,a,t){},function(e){e.exports=JSON.parse('[{"name":"Sai Sita Ram Vaddavalli","description":"A passionate Web developer and Problem solver"}]')},,,function(e){e.exports=JSON.parse('[{"name":"facebook","url":"http://facebook.com/saisitaram.vaddavalli","className":"fa fa-facebook"},{"name":"twitter","url":"https://twitter.com/VaddavalliSSR","className":"fa fa-twitter"},{"name":"linkedin","url":"https://www.linkedin.com/in/saisitaram-vaddavalli-546252196/","className":"fa fa-linkedin"},{"name":"instagram","url":"https://www.instagram.com/saisitaramvaddavalli/","className":"fa fa-instagram"},{"name":"github","url":"http://github.com/saisitaram2000","className":"fa fa-github"}]')},function(e,a,t){e.exports=t.p+"static/media/profilepic.fb2f0bce.JPG"},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(10),r=t.n(c),s=(t(18),t(19),t(2)),i=t(3),m=t(5),o=t(4),u=t(8),d=t(11),E=(t(7),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).networks=function(){return d.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}))},l.state={},l}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I'm ",u[0].name,"."),n.a.createElement("h3",null,u[0].description),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},n.a.createElement(this.networks,null)))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"fa fa-chevron-circle-down"}))))}}]),t}(l.Component)),v=t(1),h=t(12),p=t.n(h),f=(l.Component,t(6)),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).education=function(){return f[0].education.map((function(e){return n.a.createElement("div",{key:e.college},n.a.createElement("h3",null,e.college),n.a.createElement("p",{className:"info"},e.branch," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.year)),n.a.createElement("p",null,e.location))}))},l.skills=function(){return f[0].skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return n.a.createElement("li",{key:e.name},n.a.createElement("span",{style:{width:e.level},className:a}),n.a.createElement("em",null,e.name))}))},l.state={},l}return Object(i.a)(t,[{key:"render",value:function(){return console.log(f[0].education),n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:" education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement(this.education,null))))),n.a.createElement("div",{className:"skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",{id:"skimsg"},f[0].skillmessage),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},n.a.createElement(this.skills,null))))))}}]),t}(l.Component);var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.66cfb54f.chunk.js.map