(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],d=0,v=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={index:0},r=[];function o(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9f90a94b"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0219":function(t,e,a){"use strict";a("60b3")},"2b95":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=a("2877"),n={},c=Object(o["a"])(n,i,r,!1,null,null,null),l=c.exports,d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var m=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("Header"),a("WhatToExpect"),a("ForWho"),a("WhatWillYouLearning"),a("WhoAmi"),a("SignUp"),t._m(0)],1)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"row align-items-center justify-content-center text-center"},[a("div",{staticClass:"col-12"},[a("p",[t._v("2021 TERRA2.in - Todos os direitos reservados.")]),a("p",[t._v("contatoterra2in@gmail.com")])])])])}],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"pt-md-2 pt-sm-0"},[a("Hero")],1)},g=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-md-5 pt-sm-0"},[a("div",{staticClass:"row align-items-center"},[t._m(0),a("div",{staticClass:"col-md-9 col-lg-9 col-xl-8"},[a("nav",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#WhatToExpect",expression:"'#WhatToExpect'"}],staticClass:"navigation"},[t._v("O que esperar")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#ForWho",expression:"'#ForWho'"}],staticClass:"navigation"},[t._v("Pra quem é")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#WhatWillYouLearning",expression:"'#WhatWillYouLearning'"}],staticClass:"navigation"},[t._v("Você vai aprender")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#WhoAmi",expression:"'#WhoAmi'"}],staticClass:"navigation"},[t._v("Quem sou eu")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#SignUp",expression:"'#SignUp'"}],staticClass:"sigin active"},[t._v("Inscreva-se agora")])])])]),a("div",{staticClass:"hero"},[a("section",[t._m(1),a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#SignUp",expression:"'#SignUp'"}],staticClass:"btn btn-primary call-to-action",attrs:{"data-aos":"fade-up","data-aos-offset":"15","data-aos-delay":"350"}},[t._v("INSCREVA-SE AGORA")])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 col-md-3"},[a("h3",{staticClass:"basecamp"},[a("span",[t._v("_init(DEV) ")]),t._v(" "),a("small",[t._v("BASECAMP 1.0.0")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{attrs:{"data-aos":"fade-left","data-aos-offset":"15","data-aos-delay":"250"}},[t._v(" Participe de um basecamp de programação! "),a("br"),a("span",{staticClass:"text-green b"},[t._v("100% gratuito")]),t._v(" e "),a("span",{staticClass:"text-green b"},[t._v("imersivo!")])])}],_={mounted:function(){},methods:{}},C=_,b=Object(o["a"])(C,f,h,!1,null,null,null),w=b.exports,x={name:"Header",props:{msg:String},components:{Hero:w}},E=x,y=Object(o["a"])(E,p,g,!1,null,null,null),S=y.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("Timeline"),a("button",{staticClass:"btn btn-primary call-to-action",attrs:{"data-aos":"fade-up","data-aos-offset":"15","data-aos-delay":"350"}},[t._v("INSCREVA-SE AGORA")])],1)},O=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline-wrapper"},[a("ul",{staticClass:"step"},[t._m(0),t._m(1),t._m(2),t._m(3),a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("14/06")]),t._m(4),a("p",[t._v("mão na massa (ao vivo) ")]),a("div",{domProps:{innerHTML:t._s(t.addGoogleCalendar("20210614T200000Z/20210614T211500Z","Início dos estudos - Basecamp"))}}),t._v(" "),a("p")]),t._m(5),t._m(6)])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("17/05")]),a("div",{staticClass:"bold"},[t._v("Vamos começar!")]),a("p",[a("a",{attrs:{target:"_blank",href:"https://instagram.com/brx.tech"}},[t._v("Acompanhe @brx.tech")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("18/05")]),a("div",{staticClass:"bold"},[t._v("Setup localhost")]),a("p",{staticClass:"highlight"},[t._v("Posts, Stories, Reels, IGTV")]),a("p",[t._v("Tudo para você começar"),a("br"),t._v(" a preparar seu ambiente"),a("br"),t._v(" de desenvolvimento")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("25/05")]),a("div",{staticClass:"bold"},[a("div",{staticClass:"live"}),t._v("Live")]),a("p",[t._v("Mercado de TI")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("09/06")]),a("div",{staticClass:"bold"},[a("div",{staticClass:"live"}),t._v("Live")]),a("p",[t._v("Como ser "),a("span",{staticClass:"highlight"},[t._v("contratado")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bold"},[a("img",{attrs:{src:"/img/rocket.png",width:"34",alt:""}}),t._v(" Let's Code!")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("20/06")]),a("div",{staticClass:"bold"},[t._v("Deploy em "),a("span",{staticClass:"highlight"},[t._v("Produção")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"step-item"},[a("div",{staticClass:"bold date"},[t._v("21/06")]),a("div",{staticClass:"bold"},[t._v("Encerramento")])])}],$=(a("99af"),{mounted:function(){},methods:{addGoogleCalendar:function(t,e){var a="Youtube - https://www.youtube.com/channel/UCSt8qzm-O16EGSPiPMBsoiA<br/>Telegram - https://t.me/joinchat/hdYP3Opo4m5iM2Yx";return'<a target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&text='.concat(e,"&dates=").concat(t,"&details=").concat(a,'&location=123%20Main%20St%2C%20Example%2C%20NY">Add Google Calendário</a>')}}}),k=$,L=Object(o["a"])(k,A,T,!1,null,null,null),P=L.exports,W={components:{Timeline:P}},M=W,N=Object(o["a"])(M,j,O,!1,null,null,null),q=N.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-5",attrs:{id:"WhatToExpect"}},[a("div",{staticClass:"title"},[t._v(" O que esperar do Basecamp? ")]),a("div",{staticClass:"subtitle"},[t._v(" 6 semanas intensas de prática, organizado por um profissional da área há mais de 10 anos ")]),a("div",{staticClass:"boxes"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/live.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("7 dias de pura imersão")]),a("p",[t._v("Ao vivo no youtube")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/chat.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Canal aberto para tirar suas dúvidas")]),a("p",[t._v("Telegram / Slack")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/blogger.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Conteúdo exclusivo")]),a("p",[t._v("vídeos, dicas e desafios")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/certificado-digital.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Um certificado digital")]),a("p",[t._v("após a conclusão e avaliação")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/rocket.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("#Continuidade")]),a("p",[t._v("Mais 2 Basecamps ao longo do ano, do zero ao junior!")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/mentor.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("#Mentoria")]),a("p",[t._v("Vou te acompanhar por 3 meses!")])])])])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row g-0 align-items-center"},[a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"ml-2",attrs:{src:"/img/online-course.png",width:"64"}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("1 curso gratuito!")]),a("p",[t._v("Duas pessoas vão ganhar 1 curso de desenvolvimento na Udemy *")])])]),a("div",{staticClass:"card-footer"},[t._v("* os cursos "),a("b",[t._v("NÃO")]),t._v(" são ministrados por mim")])])])])])])])])])}],V={},H=Object(o["a"])(V,R,I,!1,null,null,null),U=H.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-5 forwho",attrs:{id:"ForWho","data-aos":"fade-right","data-aos-offset":"15","data-aos-delay":"450"}},[a("div",{staticClass:"title"},[t._v(" Pra quem é? ")]),a("div",{staticClass:"subtitle"},[t._v(" O Basecamp _init(DEV) é aplicado para pessoas que: ")]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("p",[a("br"),a("ul",[a("li",[a("SvgLoader",{staticClass:"icon-arrow",attrs:{src:"/svg/right-arrow.svg"}}),t._v(" Querem iniciar sua carreira em tecnologia.")],1),a("li",[a("SvgLoader",{staticClass:"icon-arrow",attrs:{src:"/svg/right-arrow.svg"}}),t._v(" Que já trabalham com TI, mas querem migrar.")],1),a("li",[a("SvgLoader",{staticClass:"icon-arrow",attrs:{src:"/svg/right-arrow.svg"}}),t._v("Querem expandir seus conhecimentos.")],1)])]),a("p"),a("h3",[t._v("Requisitos:")]),a("p"),a("p",[a("ul",[a("li",[a("SvgLoader",{staticClass:"icon-arrow",attrs:{src:"/svg/right-arrow.svg"}}),t._v(" Vontade de aprender")],1),a("li",[a("SvgLoader",{staticClass:"icon-arrow",attrs:{src:"/svg/right-arrow.svg"}}),t._v(" Um computador")],1)])])]),t._m(0)])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("div",{staticClass:"mask"})])}],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},F=[],z=a("1da1"),Y=(a("96cf"),a("4ec9"),new Map),J={name:"SvgLoader",props:{src:{type:String,required:!0}},mounted:function(){var t=this;return Object(z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Y.has(t.src))try{Y.set(t.src,fetch(t.src).then((function(t){return t.text()})))}catch(a){Y["delete"](t.src)}if(!Y.has(t.src)){e.next=5;break}return e.next=4,Y.get(t.src);case 4:t.$el.innerHTML=e.sent;case 5:case"end":return e.stop()}}),e)})))()}},K=J,Q=Object(o["a"])(K,B,F,!1,null,null,null),X=Q.exports,Z={components:{SvgLoader:X}},tt=Z,et=Object(o["a"])(tt,D,G,!1,null,null,null),at=et.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-5 whatwillyoulearning",attrs:{id:"WhatWillYouLearning"}},[a("div",{staticClass:"title"},[t._v(" O que você vai aprender ")]),a("div",{staticClass:"subtitle"},[t._v(" Vai adquirir conhecimentos em "),a("span",{staticClass:"text-green b"},[t._v("JAVASCRIPT PURO, HTML5, CSS3 E GIT")]),t._v(", que é o básico para você começar a programar, antes de mergulhar nos frameworks do mercado (VUE, React e etc..). "),a("br"),t._v('Muitos pulam essa etapa, mas eu recomendo que você "comece pelo começo" '),a("div",{staticClass:"text-center"},[a("br"),a("img",{attrs:{src:"/img/823jfd6vmwv21.jpg",width:"256",alt:""}})])]),a("hr"),a("p",[t._v(" Você usará ferramentas e métodologias que são utilizadas na maioria das empresas de tecnologia,"),a("br"),t._v(" "),a("span",{staticClass:"text-green b"},[t._v("SLACK")]),t._v(" para se comunicar, "),a("span",{staticClass:"text-green b"},[t._v("KANBAN")]),t._v(" que é um framework para "),a("span",{staticClass:"text-green b"},[t._v("gestão ágil")]),t._v(", que visa otimizar o trabalho. ")]),a("hr"),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("p",[a("b",[t._v("INVESTIMENTO")]),t._v(" "),a("span",{staticClass:"price"},[t._v(" R$ 900,00")]),t._v(" R$ 0,00")])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("p",{staticClass:"text-green b"},[t._v("#Javascript #Css3 #Html5 #Git #GitHub #VisualStudioCode #Terminal #Http #ApiRest #Json #Axios #XmlHttpRequest #Deploy #Homologacao #Producao")])]),a("div",{staticClass:"col-sm-12 col-md-12 text-right tech"},[a("img",{attrs:{src:"/img/js.png",width:"54",height:"54",alt:""}}),a("img",{attrs:{src:"/img/html.png",width:"54",height:"54",alt:""}}),a("img",{attrs:{src:"/img/css.png",width:"54",height:"54",alt:""}}),a("img",{attrs:{src:"/img/git.png",width:"54",height:"54",alt:""}})])])])}],rt={components:{SvgLoader:X}},ot=rt,nt=Object(o["a"])(ot,st,it,!1,null,null,null),ct=nt.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-5 whoami",attrs:{id:"WhoAmi"}},[a("div",{staticClass:"title text-right"},[t._v(" Quem sou eu ? ")]),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"mask"})]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("p",[t._v(" Me chamo Bruno Reis, sou desenvolvedor há 15 anos, mas profissionalmente há 10 anos. "),a("br"),t._v(" Passei por empresas, como "),a("b",{staticClass:"text-green"},[t._v("UOL")]),t._v(", atendi clientes como "),a("b",{staticClass:"text-green"},[t._v("Sony, Microsoft, Toyota")]),t._v(" entre outros. E hoje atuo como Frontend e Backend ( Full Stack ) na "),a("b",{staticClass:"text-green"},[t._v("Empiricus")]),t._v(", há 4 anos. ")]),a("p",[t._v(" No tempo livre, tenho estudado "),a("b",{staticClass:"text-green"},[t._v("Machine Learning com Python, IA e Redes Neurais.")]),t._v(" Mas não vivo só nos códigos haha"),a("br"),t._v(" pratico montanhismo, e gosto de me aventurar em produções de vídeos :) "),a("br"),a("a",{attrs:{target:"_blank",href:"https://github.com/nunesdev"}},[t._v("Github")]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://vimeo.com/brunoreiz"}},[t._v("Vimeo")]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://instagram.com/bruno.reiz"}},[t._v("Instagram")])])])])])}],mt={},vt=Object(o["a"])(mt,lt,dt,!1,null,null,null),ut=vt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content pt-5 signup text-center d-flex align-items-center justify-content-center",attrs:{id:"SignUp"}},[t.lead?t._e():a("div",{staticClass:"col"},[a("div",{staticClass:"title"},[t._v(" Inscreva-se agora ")]),a("div",{staticClass:"row align-items-center justify-content-center pt-5"},[a("div",{staticClass:"col-sm-12 col-md-8 col-lg-5"},[a("form",{staticClass:"form-horizontal",attrs:{action:""},on:{submit:t.onSubmit}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Digite seu nome",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Digite seu melhor e-mail",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._m(0)])])])]),t.lead?a("div",{staticClass:"col"},[t._m(1),t._m(2),a("div",{staticClass:"row align-items-center justify-content-center pt-5"},[a("div",{staticClass:"col-6"}),a("div",{staticClass:"col-sm-12 col-md-6"},[a("Timeline")],1)])]):t._e()])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-block btn-primary submit"},[t._v("Liberar Acesso")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._v(" Você já está cadastrado! "),a("br"),t._v("Obrigado! ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subtitle"},[t._v(" Agora é só seguir "),a("a",{staticClass:"link",attrs:{target:"_blank",href:"https://instagram.com/brx.tech"}},[t._v("@brx.tech")]),t._v(" para acompanhar os conteúdos ")])}],ft=(a("b0c0"),a("0d03"),a("260b")),ht=(a("e71f"),{apiKey:"AIzaSyCDcXxd4nDLWhgeSNanaEAlGDAJ9uvh2LU",authDomain:"basecamp-f6a47.firebaseapp.com",projectId:"basecamp-f6a47",storageBucket:"basecamp-f6a47.appspot.com",messagingSenderId:"997614542810",appId:"1:997614542810:web:bc1b673e95291f30712ae3",measurementId:"G-KX6KYFL1FW"});ft["a"].initializeApp(ht);var _t=ft["a"].firestore(),Ct=_t.collection("users"),bt={name:"signup",components:{Timeline:P},data:function(){return{name:null,email:null,lead:!1}},mounted:function(){this.$ls.get("basecamp-lead")&&(this.lead=!0)},methods:{onSubmit:function(t){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.preventDefault(),!e.name||!e.email){a.next=4;break}return a.next=4,Ct.doc().set({username:e.name,email:e.email,date:new Date,approved:!1}).then((function(){e.lead=!0,console.log("Document successfully written!"),e.$ls.set("basecamp-lead","true")}))["catch"]((function(t){console.error("Error writing document: ",t)}));case 4:case"end":return a.stop()}}),a)})))()}}},wt=bt,xt=(a("0219"),Object(o["a"])(wt,pt,gt,!1,null,"44d341e6",null)),Et=xt.exports,yt={name:"Home",components:{Sidebar:q,Header:S,WhatToExpect:U,ForWho:at,WhatWillYouLearning:ct,WhoAmi:ut,SignUp:Et}},St=yt,jt=Object(o["a"])(St,v,u,!1,null,null,null),Ot=jt.exports;s["a"].use(m["a"]);var At=[{path:"/",name:"Home",component:Ot},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Tt=new m["a"]({mode:"history",base:"/",routes:At}),$t=Tt,kt=a("2f62");s["a"].use(kt["a"]);var Lt=new kt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Pt=a("ead5"),Wt=a.n(Pt),Mt=(a("2b95"),a("f5af")),Nt=a.n(Mt),qt=(a("e829"),a("f13c")),Rt=a.n(qt);s["a"].use(Wt.a,{name:"ls"}),Nt.a.init({once:!0}),s["a"].use(Rt.a),s["a"].config.productionTip=!1,new s["a"]({router:$t,store:Lt,render:function(t){return t(l)}}).$mount("#app")},"60b3":function(t,e,a){}});
//# sourceMappingURL=index.0e738d55.js.map