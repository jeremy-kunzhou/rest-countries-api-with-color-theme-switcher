(this["webpackJsonprest-countries-api-with-color-theme-switcher"]=this["webpackJsonprest-countries-api-with-color-theme-switcher"]||[]).push([[0],{45:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),s=(n(42),n(43),n(44),n(45),n(5)),o=n(10),l=n(57),u=n(56),j=(n(50),n(22)),d=n(58),h=n(1),b=function(e){var t=e.message;return Object(h.jsxs)("div",{style:{display:"grid",gridTemplateRows:"300px 1fr",placeContent:"center",placeItems:"center"},children:[Object(h.jsx)("span",{className:"fa fa-times fa-3x fa-fw text-primary"}),Object(h.jsx)("p",{children:t})]})},O=function(){return Object(h.jsxs)("div",{style:{display:"grid",gridTemplateRows:"300px 1fr",placeContent:"center",placeItems:"center"},children:[Object(h.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(h.jsx)("p",{children:"Loading . . ."})]})},f="LOGIN_REQUEST",p="LOGIN_SUCCESS",g="LOGIN_FAILURE",x="LOGOUT_REQUEST",m="LOGOUT_SUCCESS",v="LOAD_COUNTRIES",y="LOAD_COUNTRIES_ERROR",w="LOADING_COUNTRIES",N="LOAD_COUNTRY",C="LOAD_COUNTRY_ERROR",k="LOADING_COUNTRY",L=function(e){return fetch(e).then((function(t){if(t.ok)return t.json();var n=new Error;throw n.message="unable to get data from ".concat(e),n}))},_=function(){return{type:w}},S=function(e,t){return{type:v,payload:{region:e,data:t}}},T=function(e){return{type:y,payload:e}},E=function(){return{type:k}},R=function(e){return{type:N,payload:e}},A=function(e){return{type:C,payload:e}},I=function(e){var t=e.country,n=(e.id,Object(s.g)()),r=Object(c.useCallback)((function(e){n.push("/country/".concat(e))}),[n]);return Object(h.jsxs)("div",{className:"country-card",onClick:function(){return r(t.alpha3Code)},children:[Object(h.jsx)("div",{className:"country-card-header",children:Object(h.jsx)("img",{src:"".concat(t.flag),alt:t.name})}),Object(h.jsxs)("div",{className:"country-card-body",children:[Object(h.jsx)("p",{children:t.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Population: "}),t.population]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Region: "}),t.region]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Capital: "}),t.capital]})]})]})},U=function(e){var t=e.countries,n=t.slice(0,8).map((function(e,t){return Object(h.jsx)(I,{country:e,id:0+t},0+t)}));return Object(h.jsx)("div",{className:"countries-section",children:n})},D=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.countries})),n=Object(c.useState)(!1),a=Object(j.a)(n,2),i=a[0],l=a[1],u=Object(s.g)();Object(c.useEffect)((function(){e((function(e,t){return e(_()),L("https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;alpha3Code").then((function(t){return e(S("all",t))})).catch((function(t){return e(T(t.message))}))}))}),[e]);var f=function(t){console.log(t),e(function(e){return function(t,n){var c="https://restcountries.eu/rest/v2/region/".concat(e,"?fields=name;capital;population;region;flag;alpha3Code");return t(_()),L(c).then((function(n){return t(S(e,n))})).catch((function(e){return t(T(e.message))}))}}(t)),l(!1)},p=function(e){var t=e.value;return Object(h.jsx)("li",{onClick:function(){return f(t)},children:Object(h.jsx)("button",{children:t})})},g=function(){var e=["Africa","Americas","Asia","Europe","Oceania"].map((function(e,t){return Object(h.jsx)(p,{value:e},t)}));return Object(h.jsx)("ul",{children:e})};return t.is_loading?Object(h.jsx)(O,{}):t.error?Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(b,{message:t.error}),Object(h.jsx)("div",{style:{display:"flex",placeContent:"center"},children:Object(h.jsx)(d.a,{onClick:function(){return u.push("/")},style:{width:"100px"},children:"Go Home"})})]}):Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsxs)("div",{className:"search-input",children:[Object(h.jsx)("i",{className:"fa fa-search"}),Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault();var n=document.querySelector("#search-country-input").value;e(function(e){return function(t,n){var c="https://restcountries.eu/rest/v2/name/".concat(e,"?fields=name;capital;population;region;flag;alpha3Code");return t(_()),L(c).then((function(n){return t(S("filtered by ".concat(e),n))})).catch((function(e){return t(T(e.message))}))}}(n))},children:Object(h.jsx)("input",{type:"text",id:"search-country-input",placeholder:"Search for a country..."})})]}),Object(h.jsxs)("div",{className:"filter-region",children:[Object(h.jsxs)("div",{className:"filter-box",children:[Object(h.jsx)("p",{className:"filter-content",children:t.region}),Object(h.jsx)("i",{className:"fa ".concat(i?"fa-chevron-down":"fa-chevron-up"),onClick:function(){return l(!i),console.log("toggle dropbox "+i),void document.querySelector(".filter-dropbox").classList.toggle("show")}})]}),Object(h.jsx)("div",{className:"filter-dropbox ".concat(i?"show":""),children:Object(h.jsx)(g,{})})]})]}),Object(h.jsx)(U,{countries:t.countries})]})},F=n(31),G=n(32),B=n(36),M=n(35),W=n(55),P=r.a.createContext({dark:!1,toggle:function(){}}),Q=P;P.Consumer;function Y(e){var t=Object(c.useState)(window.localStorage.getItem("darkTheme")),n=Object(j.a)(t,2),r=n[0],a=n[1];Object(c.useLayoutEffect)((function(){var e=window.localStorage.getItem("darkTheme");"true"===e&&(a(!0),i(H)),e&&"false"!==e||(a(!1),i(q))}),[r]);var i=function(e){document.getElementsByTagName("html")[0].style.cssText=e.join(";")};return Object(h.jsx)(P.Provider,{value:{dark:r,toggle:function(){document.getElementsByTagName("body")[0].style.cssText="transition: background .5s ease",a(!r),window.localStorage.setItem("darkTheme",!r)}},children:e.children})}var q=["--element: hsl(0, 0%, 100%)","--input: hsl(0, 0%, 52%)","--text: hsl(200, 15%, 8%)","--background: hsl(0, 0%, 98%)"],H=["--element: hsl(209, 23%, 22%)","--input: hsl(0, 0%, 100%)","--text: hsl(0, 0%, 100%)","--background: hsl(207, 26%, 17%)"];function J(){var e=Object(c.useContext)(Q),t=e.dark,n=e.toggle;return Object(h.jsxs)("button",{className:"theme-switch",onClick:function(){return n()},children:[Object(h.jsx)("i",{className:"fa ".concat(t?"fa-moon-o":"fa-sun-o")}),Object(h.jsx)("span",{children:"Dark Mode"})]})}var $=function(e){Object(B.a)(n,e);var t=Object(M.a)(n);function n(e){var c;return Object(F.a)(this,n),(c=t.call(this,e)).state={},c}return Object(G.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{children:Object(h.jsxs)(W.a,{children:[Object(h.jsx)("div",{className:"nav-logo-title",children:Object(h.jsx)("p",{children:"Where in the world?"})}),Object(h.jsx)(J,{})]})})}}]),n}(c.Component),z=function(){var e=Object(o.c)((function(e){return e.country})),t=Object(s.h)().country_id,n=Object(o.b)();Object(c.useEffect)((function(){var e;n((e=t,function(t,n){var c="https://restcountries.eu/rest/v2/alpha?codes=".concat(e,"&fields=name;capital;currencies;nativeName;topLevelDomain;population;region;subregion;languages;borders;flag");return t(E()),L(c).then((function(e){if((e=e[0]).borders.length>0){var n=e.borders.join(";"),c="https://restcountries.eu/rest/v2/alpha?codes=".concat(n,"&fields=name");L(c).then((function(n){e.borderList=n,t(R(e))}))}else e.borderList=[];t(R(e))})).catch((function(e){return t(A(e.message))}))}))}),[n,t]);var a=Object(s.g)(),i=function(e){var t=e.items;return t?Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsx)("span",{className:"border-country",children:e.name},t)}))}):Object(h.jsx)(r.a.Fragment,{})};if(e.is_loading)return Object(h.jsx)(O,{});if(e.error)return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(b,{message:e.error}),Object(h.jsx)("div",{style:{display:"flex",placeContent:"center"},children:Object(h.jsx)(d.a,{onClick:function(){return a.push("/")},style:{width:"100px"},children:"Go Home"})})]});var l=e.country;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"detail-header",children:Object(h.jsx)("button",{onClick:function(){a.goBack()},children:Object(h.jsx)("i",{className:"fa fa-long-arrow-left",children:Object(h.jsx)("span",{children:"Back"})})})}),Object(h.jsxs)("div",{className:"detail-section",children:[Object(h.jsx)("div",{className:"country-flag",children:Object(h.jsx)("img",{src:l.flag,alt:l.name})}),Object(h.jsxs)("div",{className:"country-details",children:[Object(h.jsx)("p",{className:"country-name",children:l.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Native Name: "}),l.nativeName]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Top Level Domain: "}),l.topLevelDomain.join("")]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Population: "}),l.population]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Currencies: "}),l.currencies[0].name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Region: "}),l.region]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Languages: "}),l.languages[0].name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Sub Region: "}),l.subregion]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Capital: "}),l.capital]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Border Countries: "}),Object(h.jsx)(i,{items:l.borderList})]})]})]})]})},K=Object(s.i)((function(){var e=Object(o.c)((function(e){return e.auth}));return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)($,{auth:e}),Object(h.jsx)(l.a,{children:Object(h.jsx)(u.a,{classNames:"page",timeout:300,children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/home",component:D}),Object(h.jsx)(s.b,{path:"/country/:country_id",component:z}),Object(h.jsx)(s.a,{to:"/home"})]})})})]})})),V=n(17),X=n(14),Z=n(33),ee=n(34),te=n.n(ee),ne=n(4),ce={displayName:"default_user"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!0,user:ce,errMess:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case p:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",user:t.user});case g:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case x:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case m:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:!1,isAuthenticated:!1,token:"",user:null});default:return e}},ae={is_loading:!1,error:null,countries:[],region:"all"},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!1,countries:t.payload.data,region:t.payload.region});case y:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!1,countries:[],region:"all",error:t.payload});case w:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!0,error:null});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{is_loading:!0,errMessage:null,country:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!1,country:t.payload});case C:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!1,country:null,error:t.payload});case k:return Object(ne.a)(Object(ne.a)({},e),{},{is_loading:!0,error:null});default:return e}},oe=Object(X.d)(Object(X.c)({auth:re,countries:ie,country:se}),Object(X.a)(Z.a,te.a));var le=function(){return Object(h.jsx)(o.a,{store:oe,children:Object(h.jsx)(Y,{children:Object(h.jsx)(V.a,{children:Object(h.jsx)(K,{})})})})},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(le,{})}),document.getElementById("root")),de(),function(){if("serviceWorker"in navigator){if(new URL("/rest-countries-api-with-color-theme-switcher",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/rest-countries-api-with-color-theme-switcher","/service-worker.js");ue?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):je(e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.c254117a.chunk.js.map