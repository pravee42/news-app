var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{F as i,R as o,g as c,a as m,t as d,e as p,S as u,E as h,u as g,B as w,T as E,L as v,b,c as y,d as f}from"./vendor.dd1619f6.js";const x="692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com";function k(e){const[t,a]=i.exports.useState(!1),n=async e=>{a(!0);let t={email:e.profileObj.email,name:e.profileObj.name,password:e.profileObj.googleId,avatar:e.profileObj.imageUrl};await m.post("https://newsapi-abipravi.herokuapp.com/auth",t).then((t=>{a(!1),console.log(t),localStorage.setItem("user",e.profileObj.email),localStorage.setItem("avatar",e.profileObj.imageUrl),localStorage.setItem("name",e.profileObj.name),window.location.reload()}),(e=>{a(!1),d.error("User Does not Exists Please register or continue without Login")}))},l=async e=>{a(!0);let t={email:e.profileObj.email,name:e.profileObj.name,password:e.profileObj.googleId,avatar:e.profileObj.imageUrl};await m.post("https://newsapi-abipravi.herokuapp.com/auth/createuser/",t).then((e=>{a(!1),d.success("User Created Sucessfully now you can login")}),(e=>{a(!1),d.info("User Already Exists Click Login or use the App without login"),console.log(e)})),a(!1),localStorage.setItem("user",e.profileObj.email),localStorage.setItem("avatar",e.profileObj.imageUrl),localStorage.setItem("name",e.profileObj.name)};return o.createElement(o.Fragment,null,o.createElement("div",null,!1===t?o.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh",width:"100%",justifyContent:"center",alignItems:"center",overflowX:"hidden"}},o.createElement(c.exports.GoogleLogin,{clientId:e.authid,onSuccess:l,theme:"dark",icon:"false",className:"btn btn-outline-primary",buttonText:"Register With Google Account",onFailure:l}),o.createElement("h4",{style:{margin:10}},"You Have Not Logged In please login with your google account here"),o.createElement(c.exports.GoogleLogin,{clientId:e.authid,onSuccess:n,theme:"dark",icon:"false",onFailure:n}),o.createElement("button",{className:"btn btn-outline-primary",style:{marginTop:20},onClick:async()=>{localStorage.setItem("user","loginlater"),localStorage.setItem("avatar","https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"),localStorage.setItem("name","User"),window.location.href=`${window.location.host}/home`,window.location.reload()}},"Continue Without Login")):o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading...")))))}function N(e){const t=async(e,t,a)=>{let n=localStorage.getItem("user"),l=await{email:n,news:e,source:t,image:a};await m.post("https://newsapi-abipravi.herokuapp.com/bookmark/",l).then((e=>{d.success("Added to Bookmarked")}),(e=>console.log(l,"error")))};let a;const n=async()=>{await localStorage.setItem("user","loginlater"),await localStorage.setItem("avatar","https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"),await localStorage.setItem("name","User"),await sessionStorage.removeItem("news")};return o.createElement(o.Fragment,null,o.createElement("div",{className:"newsCard border border-light align-left shadow-sm p-3 mb-5 bg-body rounded "},o.createElement("img",{src:e.image,lazy:"true",alt:"loading error",style:{maxHeight:100,width:150},className:"img-thumbnail"}),o.createElement("div",{className:"news"},e.shortnews&&o.createElement("h6",{className:"heading "},e.news),!e.shortnews&&o.createElement("h6",{className:"heading"},e.news),o.createElement("p",{className:"summary text-muted"},e.shortnews),o.createElement("div",{className:"align-center",style:{width:"100%"}},o.createElement("a",{className:"btn btn-outline-primary float-start",rel:"noreferrer",href:e.link,target:"_blank"},"Source"),"loginlater"===localStorage.getItem("user")&&o.createElement("svg",{onClick:()=>t(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",width:"30",height:"35","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",fill:"#0d6efd",className:"bi bi-bookmark-plus-fill float-end",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"})),"loginlater"!==localStorage.getItem("user")&&o.createElement("svg",{onClick:()=>t(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",width:"30",height:"35",fill:"#0d6efd",className:"bi bi-bookmark-plus-fill float-end",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"})),o.createElement("svg",{onClick:()=>(async(e,t,n)=>{let l=await{news:e,source:t,image:n};await m.post("https://newsapi-abipravi.herokuapp.com/share/post",l).then((e=>a=e.data.id),(e=>{console.log(e)})),await d.success("Link Copied to clipboard"),await console.log(a,"id"),await navigator.clipboard.writeText(`https://${window.location.host}/share/${window.btoa(a)}`)})(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",style:{marginRight:20},width:"20",height:"35",fill:"#0d6efd",className:"bi bi-share-fill float-end",viewBox:"0 0 16 16"},o.createElement("path",{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}))),o.createElement("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},o.createElement("div",{className:"modal-dialog"},o.createElement("div",{className:"modal-content"},o.createElement("div",{className:"modal-header"},o.createElement("h5",{className:"modal-title",id:"staticBackdropLabel"},"Login to add news to bookmark"),o.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal",onClick:n,"aria-label":"Close"})),o.createElement(k,{clintId:x})," ",o.createElement("div",{className:"modal-footer"},o.createElement("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",onClick:n},"Close"))))))))}function _(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/news").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map(((e,t)=>o.createElement(N,{key:t,image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function S(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/tech").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{Name:"spinner-border text-primary",role:"status"},o.createElement("span",{Name:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function C(){const[e,t]=i.exports.useState([]),[a,n]=i.exports.useState([]),[l,r]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/search/education zee news").then((e=>t(e.data))).then((e=>console.error(e))),await m.get("https://newsapi-abipravi.herokuapp.com/search/education exams").then((e=>{n(e.data)})),await m.get("https://newsapi-abipravi.herokuapp.com/search/education times of india").then((e=>{r(e.data)}))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))),l.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))),a.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function I(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/sports").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function j(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("http://newsapi-abipravi.herokuapp.com/sports/latest").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function L(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{class:"spinner-border text-primary",role:"status"},o.createElement("span",{class:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function B(){const[e,t]=i.exports.useState(""),[a,n]=i.exports.useState(""),[l,r]=i.exports.useState(localStorage.getItem("name")),[s,c]=i.exports.useState(localStorage.getItem("user")),[m,d]=i.exports.useState(!1);return o.createElement("div",null,!1===m?o.createElement("div",{style:{margin:10,display:"flex",flexDirection:"column",height:"100vh",width:"100%",justifyContent:"center",alignItems:"center",overflowX:"hidden"}},o.createElement("div",{style:{width:"50%",margin:10}}),o.createElement("div",{style:{padding:10,border:"1px solid blue",marginTop:10,display:"flex",flexDirection:"column",height:"60vh",width:"50%",justifyContent:"space-between"}},o.createElement("p",{style:{fontSize:30,fontWeight:400}},"Feed Back Form"),o.createElement("input",{type:"text",value:l,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Name",onChange:e=>{r(e.target.value)}}),o.createElement("input",{type:"email",onChange:e=>{c(e.target.value)},value:s,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Email Address"}),o.createElement("input",{type:"text",value:e,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Subject",onChange:e=>{t(e.target.value)}}),o.createElement("textarea",{value:a,onChange:e=>n(e.target.value),className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Message","aria-label":"With textarea"}),o.createElement("div",{style:{margin:10}},o.createElement("button",{onClick:async t=>{t.preventDefault();let n={subject:e,message:a,name:l,gmailid:s};d(!0),await p.send("service_d77dv6o","template_42dykej",n,"user_xP3wFo8GpIigDLn6mfB95").then((e=>{d(!1),alert("Feedback Sent")}),(e=>{alert("error sending feedback")}))},className:"btn btn-outline-primary"},"Send FeedBack Mail")))):o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))))}function $(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:"newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded "},o.createElement("img",{src:e.image,lazy:!0,alt:"Loading error",style:{maxHeight:150},className:"img-thumbnail"}),o.createElement("div",{className:"news"},e.shortnews&&o.createElement("h6",{className:"heading "},e.news),!e.shortnews&&o.createElement("h6",{className:"heading"},e.news),o.createElement("p",{className:"summary text-muted"},e.shortnews),o.createElement("div",{className:"d-flex justify-content-start d-grid gap-3",style:{width:"50%"}},o.createElement("a",{className:"btn btn-outline-primary",rel:"noreferrer",href:e.link,target:"_blank"},"Source"),o.createElement("button",{onClick:()=>(async e=>{const t=`https://newsapi-abipravi.herokuapp.com/bookmark/delete/${e}`;await m.delete(t).then((e=>{window.location.reload(),d.error("Bookmark Deleted")}),(e=>console.log(e)))})(e.bkid),className:"btn btn-danger space"},"Delete Bookmark")))))}function D(){const[e,t]=i.exports.useState([]),[a,n]=i.exports.useState(!1),l=`https://newsapi-abipravi.herokuapp.com/bookmark/get/${localStorage.getItem("user")}`,r=async()=>{n(!0),await m.get(l).then((e=>t(e.data)),(e=>console.log("error",e))),n(!1)};return i.exports.useEffect((async()=>{await r()}),[]),o.createElement("div",null,a?o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))):0!==e.length?e.map((e=>o.createElement($,{news:e.news,image:e.image,link:e.source,bkid:e.id,reload:r}))):o.createElement("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}},o.createElement("h4",null,"No Bookmarks Added")))}function M(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business/economy").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function O(){const[e,t]=i.exports.useState([]);return i.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business/market").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),o.createElement("div",null,0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function F(){const[e,t]=i.exports.useState([]),[a,n]=i.exports.useState([]);return o.createElement("div",null,o.createElement("div",{className:"searchtop"},o.createElement("input",{type:"text",className:"search_textbox inputs",placeholder:"search",onChange:e=>n(e.target.value)}),o.createElement("button",{value:"Search",className:"btn btn-primary search_button",onClick:async()=>{await m.get(`https://newsapi-abipravi.herokuapp.com/search/${a}`).then((e=>t(e.data))).then((e=>console.error(e)))}})),o.createElement("div",{style:{height:"80vh",overflowY:"scroll"}},0===e.length&&o.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},o.createElement("div",{className:"spinner-border text-primary",role:"status"},o.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>o.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})))))}function z(e){const t=()=>o.createElement("div",null,o.createElement("a",{href:"/login"},"Login to add the news to Bookmark"));i.exports.useEffect((()=>{document.title=e.news}),[]);return o.createElement(o.Fragment,null,o.createElement("link",{rel:"icon",href:e.image}),o.createElement("div",{className:"newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded"},o.createElement("img",{src:e.image,lazy:!0,alt:"Loading error",style:{maxHeight:100,width:150},className:"img-thumbnail"}),o.createElement("div",{className:"news"},e.shortnews&&o.createElement("h6",{className:"heading "},e.news),!e.shortnews&&o.createElement("h6",{className:"heading"},e.news),o.createElement("p",{className:"summary text-muted"},e.shortnews),o.createElement("div",{className:"d-flex justify-content-start d-grid gap-3",style:{width:"50%"}},o.createElement("a",{className:"btn btn-outline-primary",rel:"noreferrer",href:e.source,target:"_blank"},"Source"),o.createElement("button",{onClick:()=>(async(e,a,n)=>{console.log(e,a,n);let l=localStorage.getItem("user");if(null===l||"loginlater"===l)d.info(t);else{let t=await{email:l,news:e,source:a,image:n};await axios.post("https://newsapi-abipravi.herokuapp.com/bookmark/",t).then((e=>{d.success("Added to Bookmarked")}),(e=>console.log(t,"error")))}})(e.news,e.link,e.image),className:"btn btn-outline-primary space"},"Add to Bookmark")))))}const A=()=>{const[e,t]=i.exports.useState([]);return i.exports.useEffect((async()=>{await(async()=>{const e=await window.location.pathname.slice(7);await m.get(`https://newsapi-abipravi.herokuapp.com/share/${window.atob(e)}`).then((e=>{t(e.data)}))})()}),[]),o.createElement("div",null,o.createElement("div",{className:"container"},e.map((e=>o.createElement(z,{news:e.news,image:e.image,source:e.source})))))};u.use([h]);const U=()=>{const[e,t]=i.exports.useState(),[a,n]=i.exports.useState(),[l,r]=i.exports.useState(!1),[s,o]=i.exports.useState(),[c,d]=i.exports.useState();i.exports.useEffect((()=>{navigator.geolocation.getCurrentPosition((function(e){o(e.coords.latitude),d(e.coords.longitude)}))}),[]),i.exports.useEffect((()=>{p()}),[s,c]);const p=async()=>{const e=await(async()=>{try{return await m.get("http://ip-api.com/json/")}catch(e){console.log(e)}})(),a={params:{appid:"e73e3e1472bef79936f769710fc14f92",lat:s,lon:c,exclude:"minutely,hourly",units:"metric"}};try{r(!0);const l=await m.get("https://api.openweathermap.org/data/2.5/onecall",a),i={city:e.data.city,region:e.data.region,lat:s,lon:c,current:{icon:`http://openweathermap.org/img/wn/${l.data.current.weather[0].icon}@2x.png`,temp:`${Math.round(l.data.current.temp).toString()}°C`,main:l.data.current.weather[0].main,feelsLike:`Feels like ${Math.round(l.data.current.feels_like).toString()}°C`,uvi:l.data.current.uvi,wind:`${Math.round(3.6*l.data.current.wind_speed)}  km/h`,humidity:`${l.data.current.humidity}%`,visibility:l.data.current.visibility/1e3+" km",pressure:`${l.data.current.pressure} mb`},daily:[l.data.daily.map((e=>({date:new Date(1e3*e.dt),pop:`${Math.round(100*e.pop)}%`,tempMin:`${Math.round(e.temp.min)} °C`,tempMax:`${Math.round(e.temp.max)} °C`,icon:`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,main:e.weather[0].main})))]};t(i),n(null),r(!1)}catch(l){n(l),r(!1)}};return[p,l,e,a]};var H="_weatherContainer_874xk_1",P="_loading_874xk_17",T="_iconWeather_874xk_35";var V="_dailyList_11a9n_1",R="_dailyContainer_11a9n_29",W="_nextArrow_11a9n_39",G="_dailyItem_11a9n_91",Y="_tempContainer_11a9n_121",X="_temp_11a9n_121",q="_temp_max_11a9n_145",J="_icon_11a9n_153",K="_details_11a9n_161",Q="_pop_11a9n_173";const Z=e=>{const[t,a]=i.exports.useState(0),n=e.data[0].map(((e,n)=>o.createElement("li",{key:n,onClick:e=>((e,t)=>{a(t)})(0,n),className:G},o.createElement("span",null,e.date.toUTCString().slice(0,7)),o.createElement("div",{className:Y},o.createElement("img",{className:J,src:e.icon}),o.createElement("div",{className:X},o.createElement("span",{className:q},e.tempMax),o.createElement("span",null,e.tempMin)),o.createElement("div",{style:t==n?{display:"flex"}:{display:"none"},className:K},o.createElement("span",null,e.main),o.createElement("span",null,o.createElement("svg",{className:Q,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tint",className:`${Q} svg-inline--fa fa-tint fa-w-11`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},o.createElement("path",{fill:"currentColor",d:"M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"})),e.pop))))));return o.createElement("div",{className:R},o.createElement("svg",{onClick:e=>{const t=document.getElementById("daily");t.scrollLeft=t.scrollLeft-=153},className:W,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",className:`${W} svg-inline--fa fa-angle-right fa-w-8`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"})),o.createElement("ul",{id:"daily",className:V},n),o.createElement("svg",{onClick:e=>{const t=document.getElementById("daily");t.scrollLeft=t.scrollLeft+=153},className:W,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",className:`${W} svg-inline--fa fa-angle-right fa-w-8`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"})))};var ee="_backdropContainer_1e9od_1",te="_modalContainer_1e9od_47",ae="_icon_temp_1e9od_79",ne="_temp_1e9od_93",le="_feels_like_1e9od_101",re="_main_1e9od_115",se="_details_1e9od_125",ie="_detailsItem_1e9od_139",oe="_desc_1e9od_155",ce="_data_1e9od_163",me="_closeModal_1e9od_171",de="_closeBackdrop_1e9od_179";const pe=e=>{const[t,a]=i.exports.useState(!1),n=t?`${te} ${me}`:`${te}`,l=t?`${ee} ${de}`:`${ee}`;return o.createElement(o.Fragment,null,o.createElement("div",{className:l,onClick:t=>{t.stopPropagation(),a(!0),setTimeout((()=>{e.onClose()}),200)}}),o.createElement("div",{className:n,onClick:e=>{e.stopPropagation()}},void 0!==e.weatherData.city&&o.createElement("p",null,`${e.weatherData.city}, ${e.weatherData.region}`),o.createElement("div",{className:ae},o.createElement("img",{src:e.weatherData.current.icon}),o.createElement("span",{className:ne},e.weatherData.current.temp),o.createElement("div",{className:le},o.createElement("span",{className:re},e.weatherData.current.main),o.createElement("span",null,e.weatherData.current.feelsLike))),o.createElement("div",{className:se},o.createElement("div",{className:ie},o.createElement("span",{className:oe},"UVI"),o.createElement("span",{className:ce},e.weatherData.current.uvi)),o.createElement("div",{className:ie},o.createElement("span",{className:oe},"WIND"),o.createElement("span",{className:ce},e.weatherData.current.wind)),o.createElement("div",{className:ie},o.createElement("span",{className:oe},"HUMIDITY"),o.createElement("span",{className:ce},e.weatherData.current.humidity)),o.createElement("div",{className:ie},o.createElement("span",{className:oe},"VISIBILITY"),o.createElement("span",{className:ce},e.weatherData.current.visibility)),o.createElement("div",{className:ie},o.createElement("span",{className:oe},"PRESSURE"),o.createElement("span",{className:ce},e.weatherData.current.pressure))),o.createElement(Z,{data:e.weatherData.daily})))};var ue="_spinner_97e9d_1";const he=e=>o.createElement("div",{className:ue}),ge=e=>{const[t,a]=i.exports.useState(!1),[n,l,r,s]=U();i.exports.useEffect((()=>{(async()=>{await n()})()}),[]),i.exports.useEffect((()=>{const e=setInterval((async()=>{await n()}),18e4);return()=>clearInterval(e)}),[]);return o.createElement(o.Fragment,null,t&&o.createElement(pe,{onClose:()=>{a(!1)},weatherData:r,error:s,loading:l}),l?o.createElement("div",{className:P},o.createElement(he,null)):s?o.createElement("p",{className:P},"0",o.createElement("sup",null,"o"),"c"):o.createElement("div",{className:H,onClick:e=>{e.stopPropagation(),a(!0)}},o.createElement("img",{className:T,src:r&&r.current.icon}),o.createElement("span",null,r&&r.current.temp)))};function we(){const[e,c]=i.exports.useState(!1),[p,u]=i.exports.useState(window.location.pathname),[h,f]=i.exports.useState("");function N(){c(!e)}i.exports.useEffect((()=>{f(localStorage.getItem("user"))}),[localStorage.getItem("user")]);const $=g({onSwipedRight:()=>c(!e),onSwipedLeft:()=>c(!e)});o.useEffect((()=>{(()=>{let e=window.location.pathname;u("/sports"===e?"/sports/latest":"")})()}),[window.location.pathname]);return o.createElement("div",{className:"cursor_custom"},o.createElement(w,null,o.createElement("div",null,o.createElement(E,null),h?o.createElement("div",{style:{overflow:"hidden",height:"100vh"}},o.createElement("div",(z=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&s(e,a,t[a]);return e})({},$),t(z,a({className:"App",style:{display:"flex",height:"100vh"}}))),o.createElement("div",{className:!0===e?"open":"closed"},!1===e?o.createElement("div",{style:{position:"absolute"}},o.createElement("div",{style:{margin:10,padding:3,border:"1px solid blue",borderRadius:100,width:"fit-content"},className:"avatar_div"},o.createElement("img",{src:localStorage.getItem("avatar"),onClick:N,lazy:"true",className:"avatar_img",alt:"avatar"})),o.createElement(ge,null)):o.createElement("div",null),!0===e&&o.createElement(o.Fragment,null,o.createElement("img",{src:"/assets/x.a74543e0.svg",onClick:N,alt:"close menu icon",style:{width:"auto",height:"5%"}}),o.createElement("div",{className:"container_sidebar ",onClick:N},o.createElement("div",null,o.createElement("ul",{className:"list-group"},o.createElement("li",null,o.createElement("p",{className:"btn btn-primary"},"Welcome  Back  ",o.createElement("span",{className:"h6",onClick:N},localStorage.getItem("name")))),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/search"},"Search News")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/home"},"Home")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/tech"},"Tech News")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/sports"},"Sports News")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/education"},"Educational News")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/business"},"Business News")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/economy"},"Economy")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/market"},"Share Market")),o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/contact"},"Feed Back Form")),"loginlater"===h?o.createElement("i",null):o.createElement("li",null,o.createElement(v,{className:"btn btn-primary",to:"/bookmark"},"My Bookmarks"))))))),o.createElement("div",{className:"main"},p&&o.createElement("div",{className:"url"},o.createElement("p",null,"Go to",o.createElement(v,{to:p,className:"link1"},p))),o.createElement("div",{className:"news-container"},sessionStorage.getItem("news")&&d.info((async()=>{let e=await sessionStorage.getItem("news"),t=await{email:localStorage.getItem("user"),news:e.news,source:e.source,image:e.image};return await m.post("https://newsapi-abipravi.herokuapp.com/bookmark/",t).then((e=>{sessionStorage.removeItem("news")})),o.createElement("p",null,"News Added to the bookmard")})),o.createElement(b,null,o.createElement(y,{exact:!0,path:"/home"},o.createElement(_,null)),o.createElement(y,{exact:!0,path:"/tech"},o.createElement(S,null)),o.createElement(y,{path:"/share"},o.createElement(A,null)),o.createElement(y,{path:"/education"},o.createElement(C,null)),o.createElement(y,{path:"/login"},o.createElement(k,null)),o.createElement(y,{exact:!0,path:"/googleauth"},o.createElement(k,null)),o.createElement(y,{exact:!0,path:"/sports"},o.createElement(I,null)),o.createElement(y,{exact:!0,path:"/sports/latest"},o.createElement(j,null)),o.createElement(y,{exact:!0,path:"/business"},o.createElement(L,null)),o.createElement(y,{exact:!0,path:"/contact"},o.createElement(B,null)),o.createElement(y,{exact:!0,path:"/bookmark"},o.createElement(D,null)),o.createElement(y,{exact:!0,path:"/economy"},o.createElement(M,null)),o.createElement(y,{exact:!0,path:"/market"},o.createElement(O,null)),o.createElement(y,{exact:!0,path:"/search"},o.createElement(F,null)),o.createElement(y,{exact:!0,path:"/"},o.createElement(_,null))))))):o.createElement(k,{authid:x}))));var z}f.render(o.createElement(o.StrictMode,null,o.createElement(we,null)),document.getElementById("root"));
