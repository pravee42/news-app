var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{F as o,R as i,g as c,a as m,t as d,e as p,S as u,E as g,u as h,B as E,T as w,L as f,b,c as v,d as y}from"./vendor.dd1619f6.js";const x="692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com";function k(e){const[t,a]=o.exports.useState(!1),[n,l]=o.exports.useState(""),[r,s]=o.exports.useState(""),[p,u]=o.exports.useState(""),[g,h]=o.exports.useState(""),[E,w]=o.exports.useState(""),[f,b]=o.exports.useState(!1),[v,y]=o.exports.useState(!1),x=async()=>{await y(!v).then((()=>f(";dfjhg")))},k=async e=>{a(!0);let t={email:e.profileObj.email,name:e.profileObj.name,password:e.profileObj.googleId,avatar:e.profileObj.imageUrl};await m.post("https://newsapi-abipravi.herokuapp.com/auth",t).then((t=>{a(!1),console.log(t),localStorage.setItem("user",e.profileObj.email),localStorage.setItem("avatar",e.profileObj.imageUrl),localStorage.setItem("name",e.profileObj.name),window.location.reload()}),(e=>{a(!1),d.error("User Does not Exists Please register or continue without Login")}))},N=async e=>{a(!0);let t={email:e.profileObj.email,name:e.profileObj.name,password:e.profileObj.googleId,avatar:e.profileObj.imageUrl};await m.post("https://newsapi-abipravi.herokuapp.com/auth/createuser/",t).then((e=>{a(!1),d.success("User Created Sucessfully now you can login")}),(e=>{a(!1),d.info("User Already Exists Click Login or use the App without login"),console.log(e)})),a(!1),localStorage.setItem("user",e.profileObj.email),localStorage.setItem("avatar",e.profileObj.imageUrl),localStorage.setItem("name",e.profileObj.name)};return i.createElement(i.Fragment,null,i.createElement("div",null,!1===t?i.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center"}},i.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",padding:"20px",alignItems:"center",overflowX:"hidden"}},!1===v&&i.createElement(i.Fragment,null,i.createElement("h4",{style:{fontSize:15},className:"alert alert-info"},"You Have Not Logged In please login with your google account here"),i.createElement("div",{className:"d-flex flex-row gap-1"},i.createElement(c.exports.GoogleLogin,{clientId:e.authid,onSuccess:k,render:e=>i.createElement("button",{onClick:e.onClick,disabled:e.disabled,class:"bi bi-google btn btn-dark"}),theme:"dark",icon:"false",onFailure:k})),i.createElement("button",{className:"btn btn-outline-dark",style:{marginTop:20},onClick:async()=>{localStorage.setItem("user","loginlater"),localStorage.setItem("avatar","/assets/avatar.fca47385.png"),localStorage.setItem("name","User"),window.location.href=`${window.location.host}/home`,window.location.reload()}},"Continue Without Login"))),i.createElement("div",{className:"d-flex flex-row justify-content-center align-middle",style:{flexWrap:"wrap"}},i.createElement("div",null,!0===v&&i.createElement(c.exports.GoogleLogin,{clientId:e.authid,onSuccess:N,render:e=>i.createElement("h3",{onClick:e.onClick,disabled:e.disabled,class:"bi bi-google btn btn-dark h-0"}," ","  Register With Google"),theme:"dark",icon:"false",className:"btn btn-outline-primary",buttonText:"Register With Google Account",onFailure:N})),i.createElement("div",null,v&&i.createElement("div",{className:"d-grid gap-2",style:{margin:20,height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}},i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"email",class:"form-control",onChange:e=>{h(e.target.value)},id:"floatingInput",placeholder:"name@example.com"}),i.createElement("label",{for:"floatingInput"},"Email address")),i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"text",class:"form-control",onChange:e=>{u(e.target.value)},id:"floatingInput",placeholder:"user name"}),i.createElement("label",{for:"floatingInput"},"Name")),i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"password",class:"form-control",onChange:e=>{l(e.target.value)},id:"floatingInput",placeholder:"password"}),i.createElement("label",{for:"floatingInput"},"Password")),i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"password",class:"form-control",onChange:e=>{s(e.target.value)},id:"floatingInput",placeholder:"password"}),i.createElement("label",{for:"floatingInput"},"Retype Password")),!0===f&&i.createElement("div",{class:"alert alert-danger",role:"alert"},"Password Does not match"),i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"url",class:"form-control",onChange:e=>{w(e.target.value)},id:"floatingInput",placeholder:"https:www.avatar.com/useravatar"}),i.createElement("label",{for:"floatingInput"},"Avatar Image")),i.createElement("button",{className:"btn btn-outline-success",onClick:async()=>{if(n===r){a(!0);let e={email:g,name:p,password:n,avatar:E};await m.post("https://newsapi-abipravi.herokuapp.com/auth/createuser/",e).then((e=>{a(!1),d.success("User Created Sucessfully now you can login")}),(e=>{a(!1),d.info("User Already Exists We are logging you in"),console.log(e)})),a(!1),localStorage.setItem("user",g),localStorage.setItem("avatar",E),localStorage.setItem("name",p),window.location.reload()}else b(!0)}},"Submit"),i.createElement("p",{className:"btn btn-dark p-2",onClick:x},"Back to Login")))),!1===v&&i.createElement("div",null,i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"url",class:"form-control",onChange:e=>{h(e.target.value)},id:"floatingInput",placeholder:"Email Id"}),i.createElement("label",{for:"floatingInput"},"Email Address")),i.createElement("div",{class:"form-floating mb-3"},i.createElement("input",{type:"password",class:"form-control",onChange:e=>{l(e.target.value)},id:"floatingInput",placeholder:"Password"}),i.createElement("label",{for:"floatingInput"},"Password")),i.createElement("button",{className:"btn btn-outline-success",onClick:async()=>{a(!0);let e={email:g,name:p,password:n};await m.post("https://newsapi-abipravi.herokuapp.com/auth",e).then((e=>{a(!1),console.log(e),localStorage.setItem("user",g),localStorage.setItem("avatar","/assets/avatar.fca47385.png"),localStorage.setItem("name",p),window.location.reload()}),(e=>{a(!1),d.error("User Does not Exists Please register or continue without Login")}))}},"Login"),i.createElement("button",{className:"btn btn-danger",style:{margin:5},onClick:async()=>{await d.error("Sorry we cannot recover your password for some security reasons."),await d.info("Try using your google account login instead or create a new account and try contacting us we will transfer your data to the newly created account",{delay:5e3})}},"Forget Password"),i.createElement("div",{className:"d-flex gap-1 align-middle justify-content-center p-2"},i.createElement("p",{className:"badge bg-danger"},"Dont have account:"),i.createElement("a",{href:"#",className:"breadcrumb-item",onClick:x},"Register?")))):i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading...")))))}function N(e){const t=async(e,t,a)=>{let n=localStorage.getItem("user"),l=await{email:n,news:e,source:t,image:a};await m.post("https://newsapi-abipravi.herokuapp.com/bookmark/",l).then((e=>{d.success("Added to Bookmarked")}),(e=>console.log(l,"error")))};let a;const n=async()=>{await localStorage.setItem("user","loginlater"),await localStorage.setItem("avatar","https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"),await localStorage.setItem("name","User"),await sessionStorage.removeItem("news")};return i.createElement(i.Fragment,null,i.createElement("div",{className:"newsCard border border-light align-left shadow-sm p-3 mb-5 bg-body rounded "},i.createElement("img",{src:e.image,lazy:"true",alt:"loading error",style:{maxHeight:100,width:150},className:"img-thumbnail"}),i.createElement("div",{className:"news"},e.shortnews&&i.createElement("h6",{className:"heading "},e.news),!e.shortnews&&i.createElement("h6",{className:"heading"},e.news),i.createElement("p",{className:"summary text-muted"},e.shortnews),i.createElement("div",{className:"align-center",style:{width:"100%"}},i.createElement("a",{className:"btn btn-outline-primary float-start",rel:"noreferrer",href:e.link,target:"_blank"},"Source"),"loginlater"===localStorage.getItem("user")&&i.createElement("svg",{onClick:()=>t(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",width:"30",height:"35","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",fill:"#0d6efd",className:"bi bi-bookmark-plus-fill float-end",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"})),"loginlater"!==localStorage.getItem("user")&&i.createElement("svg",{onClick:()=>t(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",width:"30",height:"35",fill:"#0d6efd",className:"bi bi-bookmark-plus-fill float-end",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"})),i.createElement("svg",{onClick:()=>(async(e,t,n)=>{let l=await{news:e,source:t,image:n};await m.post("https://newsapi-abipravi.herokuapp.com/share/post",l).then((e=>a=e.data.id),(e=>{console.log(e)})),await d.success("Link Copied to clipboard"),await console.log(a,"id"),await navigator.clipboard.writeText(`https://${window.location.host}/share/${window.btoa(a)}`)})(e.news,e.link,e.image),xmlns:"http://www.w3.org/2000/svg",style:{marginRight:20},width:"20",height:"35",fill:"#0d6efd",className:"bi bi-share-fill float-end",viewBox:"0 0 16 16"},i.createElement("path",{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}))),i.createElement("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},i.createElement("div",{className:"modal-dialog"},i.createElement("div",{className:"modal-content"},i.createElement("div",{className:"modal-header"},i.createElement("h5",{className:"modal-title",id:"staticBackdropLabel"},"Login to add news to bookmark"),i.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal",onClick:n,"aria-label":"Close"})),i.createElement(k,{clintId:x})," ",i.createElement("div",{className:"modal-footer"},i.createElement("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",onClick:n},"Close"))))))))}function S(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/news").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map(((e,t)=>i.createElement(N,{key:t,image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function _(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/tech").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{Name:"spinner-border text-primary",role:"status"},i.createElement("span",{Name:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function C(){const[e,t]=o.exports.useState([]),[a,n]=o.exports.useState([]),[l,r]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/search/education zee news").then((e=>t(e.data))).then((e=>console.error(e))),await m.get("https://newsapi-abipravi.herokuapp.com/search/education exams").then((e=>{n(e.data)})),await m.get("https://newsapi-abipravi.herokuapp.com/search/education times of india").then((e=>{r(e.data)}))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))),l.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))),a.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function I(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/sports").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function j(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/sports/latest").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function L(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{class:"spinner-border text-primary",role:"status"},i.createElement("span",{class:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function B(){const[e,t]=o.exports.useState(""),[a,n]=o.exports.useState(""),[l,r]=o.exports.useState(localStorage.getItem("name")),[s,c]=o.exports.useState(localStorage.getItem("user")),[m,u]=o.exports.useState(!1);return i.createElement("div",null,!1===m?i.createElement("div",{style:{margin:10,display:"flex",flexDirection:"column",height:"100vh",width:"100%",justifyContent:"center",alignItems:"center",overflowX:"hidden"}},i.createElement("div",{style:{width:"50%",margin:10}}),i.createElement("div",{style:{padding:10,border:"1px solid blue",marginTop:10,display:"flex",flexDirection:"column",height:"60vh",width:"50%",justifyContent:"space-between"}},i.createElement("p",{style:{fontSize:30,fontWeight:400}},"Feed Back Form"),i.createElement("input",{type:"text",value:l,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Name",onChange:e=>{r(e.target.value)}}),i.createElement("input",{type:"email",onChange:e=>{c(e.target.value)},value:s,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Email Address"}),i.createElement("input",{type:"text",value:e,className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Subject",onChange:e=>{t(e.target.value)}}),i.createElement("textarea",{value:a,onChange:e=>n(e.target.value),className:"inputs border border-success rounded-2 shadow-sm",placeholder:"Message","aria-label":"With textarea"}),i.createElement("div",{style:{margin:10}},i.createElement("button",{onClick:async t=>{t.preventDefault();let n={subject:e,message:a,name:l,gmailid:s};u(!0),await p.send("service_d77dv6o","template_42dykej",n,"user_xP3wFo8GpIigDLn6mfB95").then((e=>{u(!1),d.success("Feedback Sent")}),(e=>{d.error("error sending feedback")}))},className:"btn btn-outline-primary"},"Send FeedBack Mail")))):i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))))}function D(e){return i.createElement(i.Fragment,null,i.createElement("div",{className:"newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded "},i.createElement("img",{src:e.image,lazy:!0,alt:"Loading error",style:{maxHeight:150},className:"img-thumbnail"}),i.createElement("div",{className:"news"},e.shortnews&&i.createElement("h6",{className:"heading "},e.news),!e.shortnews&&i.createElement("h6",{className:"heading"},e.news),i.createElement("p",{className:"summary text-muted"},e.shortnews),i.createElement("div",{className:"d-flex justify-content-start d-grid gap-3",style:{width:"50%"}},i.createElement("a",{className:"btn btn-outline-primary",rel:"noreferrer",href:e.link,target:"_blank"},"Source"),i.createElement("button",{onClick:()=>(async e=>{const t=`https://newsapi-abipravi.herokuapp.com/bookmark/delete/${e}`;await m.delete(t).then((e=>{window.location.reload(),d.error("Bookmark Deleted")}),(e=>console.log(e)))})(e.bkid),className:"btn btn-danger space"},"Delete Bookmark")))))}function $(){const[e,t]=o.exports.useState([]),[a,n]=o.exports.useState(!1),l=`https://newsapi-abipravi.herokuapp.com/bookmark/get/${localStorage.getItem("user")}`,r=async()=>{n(!0),await m.get(l).then((e=>t(e.data)),(e=>console.log("error",e))),n(!1)};return o.exports.useEffect((async()=>{await r()}),[]),i.createElement("div",null,a?i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))):0!==e.length?e.map((e=>i.createElement(D,{news:e.news,image:e.image,link:e.source,bkid:e.id,reload:r}))):i.createElement("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}},i.createElement("h4",null,"No Bookmarks Added")))}function M(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business/economy").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function O(){const[e,t]=o.exports.useState([]);return o.exports.useEffect((()=>{(async()=>{await m.get("https://newsapi-abipravi.herokuapp.com/business/market").then((e=>t(e.data))).then((e=>console.error(e)))})()}),[]),i.createElement("div",null,0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews}))))}function P(){const[e,t]=o.exports.useState([]),[a,n]=o.exports.useState([]);return i.createElement("div",null,i.createElement("div",{className:"searchtop"},i.createElement("input",{type:"text",className:"search_textbox inputs",placeholder:"search",onChange:e=>n(e.target.value)}),i.createElement("button",{value:"Search",className:"btn btn-primary search_button",onClick:async()=>{await m.get(`https://newsapi-abipravi.herokuapp.com/search/${a}`).then((e=>t(e.data))).then((e=>console.error(e)))}})),i.createElement("div",{style:{height:"80vh",overflowY:"scroll"}},0===e.length&&i.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",padding:"100px"}},i.createElement("div",{className:"spinner-border text-primary",role:"status"},i.createElement("span",{className:"visually-hidden"},"Loading..."))),e.map((e=>i.createElement(N,{image:e.image,news:e.news,link:e.link,shortnews:e.shortnews})))))}function F(e){const t=()=>i.createElement("div",null,i.createElement("a",{href:"/login"},"Login to add the news to Bookmark"));o.exports.useEffect((()=>{document.title=e.news}),[]);return i.createElement(i.Fragment,null,i.createElement("link",{rel:"icon",href:e.image}),i.createElement("div",{className:"newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded"},i.createElement("img",{src:e.image,lazy:!0,alt:"Loading error",style:{maxHeight:100,width:150},className:"img-thumbnail"}),i.createElement("div",{className:"news"},e.shortnews&&i.createElement("h6",{className:"heading "},e.news),!e.shortnews&&i.createElement("h6",{className:"heading"},e.news),i.createElement("p",{className:"summary text-muted"},e.shortnews),i.createElement("div",{className:"d-flex justify-content-start d-grid gap-3",style:{width:"50%"}},i.createElement("a",{className:"btn btn-outline-primary",rel:"noreferrer",href:e.source,target:"_blank"},"Source"),i.createElement("button",{onClick:()=>(async(e,a,n)=>{console.log(e,a,n);let l=localStorage.getItem("user");if(null===l||"loginlater"===l)d.info(t);else{let t=await{email:l,news:e,source:a,image:n};await m.post("https://newsapi-abipravi.herokuapp.com/bookmark/",t).then((e=>{d.success("Added to Bookmarked")}),(e=>console.log(t,"error")))}})(e.news,e.link,e.image),className:"btn btn-outline-primary space"},"Add to Bookmark")))))}const z=()=>{const[e,t]=o.exports.useState([]);return o.exports.useEffect((async()=>{await(async()=>{const e=await window.location.pathname.slice(7);await m.get(`https://newsapi-abipravi.herokuapp.com/share/${window.atob(e)}`).then((e=>{t(e.data)}))})()}),[]),i.createElement("div",null,i.createElement("div",{className:"container"},e.map((e=>i.createElement(F,{news:e.news,image:e.image,source:e.source})))))};u.use([g]);var A="_weatherContainer_874xk_1",U="_loading_874xk_17",H="_iconWeather_874xk_35";var R="_dailyList_11a9n_1",T="_dailyContainer_11a9n_29",W="_nextArrow_11a9n_39",V="_dailyItem_11a9n_91",G="_tempContainer_11a9n_121",Y="_temp_11a9n_121",X="_temp_max_11a9n_145",q="_icon_11a9n_153",J="_details_11a9n_161",K="_pop_11a9n_173";const Q=e=>{const[t,a]=o.exports.useState(0),n=e.data[0].map(((e,n)=>i.createElement("li",{key:n,onClick:e=>((e,t)=>{a(t)})(0,n),className:V},i.createElement("span",null,e.date.toUTCString().slice(0,7)),i.createElement("div",{className:G},i.createElement("img",{className:q,src:e.icon}),i.createElement("div",{className:Y},i.createElement("span",{className:X},e.tempMax),i.createElement("span",null,e.tempMin)),i.createElement("div",{style:t==n?{display:"flex"}:{display:"none"},className:J},i.createElement("span",null,e.main),i.createElement("span",null,i.createElement("svg",{className:K,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tint",className:`${K} svg-inline--fa fa-tint fa-w-11`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},i.createElement("path",{fill:"currentColor",d:"M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"})),e.pop))))));return i.createElement("div",{className:T},i.createElement("svg",{onClick:e=>{const t=document.getElementById("daily");t.scrollLeft=t.scrollLeft-=153},className:W,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",className:`${W} svg-inline--fa fa-angle-right fa-w-8`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},i.createElement("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"})),i.createElement("ul",{id:"daily",className:R},n),i.createElement("svg",{onClick:e=>{const t=document.getElementById("daily");t.scrollLeft=t.scrollLeft+=153},className:W,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angle-right",className:`${W} svg-inline--fa fa-angle-right fa-w-8`,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},i.createElement("path",{fill:"currentColor",d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"})))};var Z="_backdropContainer_1e9od_1",ee="_modalContainer_1e9od_47",te="_icon_temp_1e9od_79",ae="_temp_1e9od_93",ne="_feels_like_1e9od_101",le="_main_1e9od_115",re="_details_1e9od_125",se="_detailsItem_1e9od_139",oe="_desc_1e9od_155",ie="_data_1e9od_163",ce="_closeModal_1e9od_171",me="_closeBackdrop_1e9od_179";const de=e=>{const[t,a]=o.exports.useState(!1),n=t?`${ee} ${ce}`:`${ee}`,l=t?`${Z} ${me}`:`${Z}`;return i.createElement(i.Fragment,null,i.createElement("div",{className:l,onClick:t=>{t.stopPropagation(),a(!0),setTimeout((()=>{e.onClose()}),200)}}),i.createElement("div",{className:n,onClick:e=>{e.stopPropagation()}},void 0!==e.weatherData.city&&i.createElement("p",null,`${e.weatherData.city}, ${e.weatherData.region}`),i.createElement("div",{className:te},i.createElement("img",{src:e.weatherData.current.icon}),i.createElement("span",{className:ae},e.weatherData.current.temp),i.createElement("div",{className:ne},i.createElement("span",{className:le},e.weatherData.current.main),i.createElement("span",null,e.weatherData.current.feelsLike))),i.createElement("div",{className:re},i.createElement("div",{className:se},i.createElement("span",{className:oe},"UVI"),i.createElement("span",{className:ie},e.weatherData.current.uvi)),i.createElement("div",{className:se},i.createElement("span",{className:oe},"WIND"),i.createElement("span",{className:ie},e.weatherData.current.wind)),i.createElement("div",{className:se},i.createElement("span",{className:oe},"HUMIDITY"),i.createElement("span",{className:ie},e.weatherData.current.humidity)),i.createElement("div",{className:se},i.createElement("span",{className:oe},"VISIBILITY"),i.createElement("span",{className:ie},e.weatherData.current.visibility)),i.createElement("div",{className:se},i.createElement("span",{className:oe},"PRESSURE"),i.createElement("span",{className:ie},e.weatherData.current.pressure))),i.createElement(Q,{data:e.weatherData.daily})))};var pe="_spinner_97e9d_1";const ue=e=>i.createElement("div",{className:pe}),ge=e=>{const[t,a]=o.exports.useState(!1),[n,l,r,s]=(()=>{const[e,t]=o.exports.useState(),[a,n]=o.exports.useState(),[l,r]=o.exports.useState(!1),[s,i]=o.exports.useState(),[c,d]=o.exports.useState();o.exports.useEffect((()=>{navigator.geolocation.getCurrentPosition?p():navigator.geolocation.getCurrentPosition((function(e){i(e),d(e),p()}))}),[]);const p=()=>{navigator.geolocation.getCurrentPosition((function(e){i(e.coords.latitude),d(e.coords.longitude)})),u()};o.exports.useEffect((()=>{u()}),[s,c]);const u=async()=>{const e={params:{appid:"e73e3e1472bef79936f769710fc14f92",lat:s,lon:c,exclude:"minutely,hourly",units:"metric"}};try{r(!0);const a=await m.get("https://api.openweathermap.org/data/2.5/onecall",e),l={lat:s,lon:c,current:{icon:`http://openweathermap.org/img/wn/${a.data.current.weather[0].icon}@2x.png`,temp:`${Math.round(a.data.current.temp).toString()}°C`,main:a.data.current.weather[0].main,feelsLike:`Feels like ${Math.round(a.data.current.feels_like).toString()}°C`,uvi:a.data.current.uvi,wind:`${Math.round(3.6*a.data.current.wind_speed)}  km/h`,humidity:`${a.data.current.humidity}%`,visibility:a.data.current.visibility/1e3+" km",pressure:`${a.data.current.pressure} mb`},daily:[a.data.daily.map((e=>({date:new Date(1e3*e.dt),pop:`${Math.round(100*e.pop)}%`,tempMin:`${Math.round(e.temp.min)} °C`,tempMax:`${Math.round(e.temp.max)} °C`,icon:`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,main:e.weather[0].main})))]};t(l),n(null),r(!1)}catch(a){n(a),r(!1)}};return[u,l,e,a]})();o.exports.useEffect((()=>{n()}),[r,t]);return i.createElement(i.Fragment,null,t&&i.createElement(de,{onClose:()=>{a(!1)},weatherData:r,error:s,loading:l}),l?i.createElement("div",{className:U},i.createElement(ue,null)):s?i.createElement("p",{className:U},"Loading"):i.createElement("div",{className:A,onClick:e=>{e.stopPropagation(),a(!0)}},i.createElement("img",{className:H,lazy:!0,src:r&&r.current.icon}),i.createElement("span",null,r&&r.current.temp)))};function he(){const[e,c]=o.exports.useState(!1),[p,u]=o.exports.useState(window.location.pathname),[g,y]=o.exports.useState("");function N(){c(!e)}o.exports.useEffect((()=>{y(localStorage.getItem("user"))}),[localStorage.getItem("user")]);const D=h({onSwipedRight:()=>c(!e),onSwipedLeft:()=>c(!e)});i.useEffect((()=>{(()=>{let e=window.location.pathname;u("/sports"===e?"/sports/latest":"")})()}),[window.location.pathname]);return i.createElement("div",{className:"cursor_custom"},i.createElement(E,null,i.createElement("div",null,i.createElement(w,null),g?i.createElement("div",{style:{overflow:"hidden",height:"100vh"}},i.createElement("div",(F=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&s(e,a,t[a]);return e})({},D),t(F,a({className:"App",style:{display:"flex",height:"100vh"}}))),i.createElement("div",{className:!0===e?"open":"closed"},!1===e?i.createElement("div",{style:{position:"absolute"}},i.createElement("div",{style:{margin:10,padding:3,border:"1px solid blue",borderRadius:100,width:"fit-content"},className:"avatar_div"},i.createElement("img",{src:localStorage.getItem("avatar"),onClick:N,lazy:!0,className:"avatar_img",alt:"avatar"})),i.createElement(ge,null)):i.createElement("div",null),!0===e&&i.createElement(i.Fragment,null,i.createElement("img",{src:"/assets/x.a74543e0.svg",onClick:N,alt:"close menu icon",style:{width:"auto",height:"5%"}}),i.createElement("div",{className:"container_sidebar ",onClick:N},i.createElement("div",null,i.createElement("ul",{className:"list-group"},i.createElement("li",null,i.createElement("p",{className:"btn btn-primary"},"Welcome  Back  ",i.createElement("span",{className:"h6",onClick:N},localStorage.getItem("name")))),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/search"},"Search News")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/home"},"Home")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/tech"},"Tech News")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/sports"},"Sports News")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/education"},"Educational News")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/business"},"Business News")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/economy"},"Economy")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/market"},"Share Market")),i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/contact"},"Feed Back Form")),"loginlater"===g?i.createElement("i",null):i.createElement("li",null,i.createElement(f,{className:"btn btn-primary",to:"/bookmark"},"My Bookmarks")),i.createElement("li",null,i.createElement("button",{className:"btn btn-primary",onClick:e=>{localStorage.clear(),window.location.reload()}},"Logout"))))))),i.createElement("div",{className:"main"},p&&i.createElement("div",{className:"url"},i.createElement("p",null,"Go to",i.createElement(f,{to:p,className:"link1"},p))),i.createElement("div",{className:"news-container"},sessionStorage.getItem("news")&&d.info((async()=>{let e=await sessionStorage.getItem("news"),t=await{email:localStorage.getItem("user"),news:e.news,source:e.source,image:e.image};return await m.post("https://newsapi-abipravi.herokuapp.com/bookmark/",t).then((e=>{sessionStorage.removeItem("news")})),i.createElement("p",null,"News Added to the bookmard")})),i.createElement(b,null,i.createElement(v,{exact:!0,path:"/home"},i.createElement(S,null)),i.createElement(v,{exact:!0,path:"/tech"},i.createElement(_,null)),i.createElement(v,{path:"/share"},i.createElement(z,null)),i.createElement(v,{path:"/education"},i.createElement(C,null)),i.createElement(v,{path:"/login"},i.createElement(k,null)),i.createElement(v,{exact:!0,path:"/googleauth"},i.createElement(k,null)),i.createElement(v,{exact:!0,path:"/sports"},i.createElement(I,null)),i.createElement(v,{exact:!0,path:"/sports/latest"},i.createElement(j,null)),i.createElement(v,{exact:!0,path:"/business"},i.createElement(L,null)),i.createElement(v,{exact:!0,path:"/contact"},i.createElement(B,null)),i.createElement(v,{exact:!0,path:"/bookmark"},i.createElement($,null)),i.createElement(v,{exact:!0,path:"/economy"},i.createElement(M,null)),i.createElement(v,{exact:!0,path:"/market"},i.createElement(O,null)),i.createElement(v,{exact:!0,path:"/search"},i.createElement(P,null)),i.createElement(v,{exact:!0,path:"/"},i.createElement(S,null))))))):i.createElement(k,{authid:x}))));var F}y.render(i.createElement(i.StrictMode,null,i.createElement(he,null)),document.getElementById("root"));
