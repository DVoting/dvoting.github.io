var ke=Object.defineProperty,Oe=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var pe=(t,r,n)=>r in t?ke(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,A=(t,r)=>{for(var n in r||(r={}))Ee.call(r,n)&&pe(t,n,r[n]);if(he)for(var n of he(r))Pe.call(r,n)&&pe(t,n,r[n]);return t},D=(t,r)=>Oe(t,Te(r));import{r as c,j as e,W as oe,a,R as g,t as T,N as le,C as Y,b as te,c as Q,F as G,d as Le,e as Ae,f as De,V as $e,B as He,g as me,h as S,i as ge,k as F,A as Be,l as Me,M as Re,m as ze,n as Ge,S as Fe,o as _e,p as qe,q as W,s as O,u as We,v as Ve,w as J,x as $,y as re,z as l,L as _,D as U,E as fe,G as Z,H as k,T as je,I as ae,P as ye,J as ve,K as we,O as Ue,Q as Ke,U as Je,X as be,Y as Xe,Z as xe,_ as Ye,$ as Qe,a0 as L,a1 as Ze,a2 as et}from"./vendor.817745f5.js";const tt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};tt();const E=c.exports.createContext({user:null,walletId:null,isAuth:!1,loading:!1}),rt=t=>{const[r,n]=c.exports.useState(""),[s,o]=c.exports.useState(null),[i,h]=c.exports.useState(!1),[p,v]=c.exports.useState(!1);return e(E.Provider,{value:{user:s,setUser:o,walletId:r,setWalletId:n,isAuth:i,setIsAuth:h,loading:p,setLoading:v},children:t.children})};let ie;if(window.ethereum)console.log("MetaMask is installed!"),ie=new oe(window.ethereum);else{console.log("MetaMask is NOT installed!");const t=new oe.providers.HttpProvider("https://polygon-rpc.com",{chainId:137,name:"matic"});ie=new oe(t)}var X=ie;const K=(t,r)=>a(g.Fragment,{children:[e("span",{children:t||""}),e("br",{}),e("span",{children:r||""})]});function at(t){var n;let r=(n=JSON.parse(localStorage.getItem("walletDisabled")))!=null?n:!1;console.log(r),window.ethereum&&(X.eth.getAccounts().then(s=>{r||t(s[0]||"")}).catch(console.log),window.ethereum.on("accountsChanged",s=>{var i;((i=JSON.parse(localStorage.getItem("walletDisabled")))!=null?i:!1)||t(s[0]||"")}))}async function nt(t){localStorage.setItem("walletDisabled",!0),t("")}async function st(t){if(!window.ethereum){T.error(K("Provider Error","MetaMask is NOT installed!"),{position:T.POSITION.BOTTOM_RIGHT,autoClose:5e3,toastId:"providerError",closeOnClick:!0,pauseOnHover:!1,draggable:!1});return}localStorage.setItem("walletDisabled",!1);try{const r=await window.ethereum.request({method:"eth_requestAccounts"});t(r[0]||"")}catch(r){console.log(r)}}async function ot(t){console.log(t);let[r]=await X.eth.getAccounts();try{return await X.eth.personal.sign(X.utils.keccak256(t),r,null)}catch(n){return T.error(K(n.message.split(":")[0],n.message.split(":")[1]),{position:T.POSITION.BOTTOM_RIGHT,autoClose:5e3,toastId:"signatureError",closeOnClick:!0,pauseOnHover:!1,draggable:!1}),null}}const lt=()=>{const{user:t,setUser:r,isAuth:n,setIsAuth:s,setLoading:o}=c.exports.useContext(E),{walletId:i,setWalletId:h}=c.exports.useContext(E),p=()=>{localStorage.removeItem("token"),s(!1),r(null),o(!1)};return c.exports.useEffect(()=>at(h),[]),e("header",{children:e(le,{children:a(Y,{children:[e(te.LinkContainer,{to:n?"/dashboard":"/",children:e(le.Brand,{children:e("h2",{children:"DVoting"})})}),e(le.Toggle,{"aria-controls":"basic-navbar-nav"}),a(Q,{className:"ml-auto",children:[t?e(G,{children:a(Le,{children:[t.name,e(te.LinkContainer,{to:"#",onClick:p,children:a(Q.Link,{children:[e(Ae,{})," Logout"]})})]})}):a(G,{children:[e(te.LinkContainer,{to:"/login",children:a(Q.Link,{children:[e(De,{})," Log In"]})}),e(te.LinkContainer,{to:"/signup",children:a(Q.Link,{children:[e($e,{})," SignUp"]})})]}),i===""?a(Q.Link,{onClick:()=>st(h),children:[e(He,{size:20})," Connect Wallet"]}):e(me,{title:i.slice(0,4)+"..."+i.slice(-4),children:e(me.Item,{onClick:()=>nt(h),children:"Disconnect"})})]})]})})})},it=()=>a("footer",{className:"text-center",children:["\xA9 2022 |"," ",e("a",{href:"https://github.com/DVoting/dvoting.github.io",children:"D-Voting"})]});var ct="./assets/vote.90a295f2.png";const dt="_root1_zwkyz_1",ut="_root2_zwkyz_5",ht="_root3_zwkyz_11";var ce={root1:dt,root2:ut,root3:ht};const pt=()=>a("div",{className:`${ce.root1} d-flex justify-content-evenly align-items-center py-5`,style:{minHeight:"85vh"},children:[a("div",{className:"",style:{maxWidth:"45%"},children:[a("div",{className:"display-4 fw-bold",children:["Empowering India",e("p",{className:"text-info",children:"Through Blockchain"})]}),a("div",{className:"py-5",children:[e("p",{children:"A De-centralized Voting App which addresses the issue of maintaining anonymity of voters on a public blockchain network, achieving lower latency and affordability in the existing models."}),e(S,{variant:"outline-primary",className:"px-4 py-2",href:"/login",children:"Login"}),e(S,{variant:"info",className:"px-4 py-2 mx-5",href:"/signup",children:"Get Started"})]})]}),e("div",{className:"",style:{maxWidth:"30%"},children:e("img",{src:ct,style:{maxWidth:"100%"}})})]}),de=[{Icon:Be,title:"Safe and Secure",description:"The casted votes are safely and securely stored in the blockchain database, which mitigates any form of manipulation / tampering like the deletion of legitimate votes or the addition of illegitimate votes."},{Icon:Me,title:"Accuracy with Transparency",description:"The casting of votes and tallying of the votes would be a lot quicker while also providing better transparency and accuracy."},{Icon:Re,title:"Privacy OP :)",description:"We do not link your Wallet address and your profile identity, thereby keeping your vote anonymous. Also, you can verify that your vote has been recorded or not using the Transaction Id."}],mt=()=>a("div",{className:ce.root2,children:[e("h1",{className:"fw-bold",children:"Notable Features"}),e(ge,{children:de==null?void 0:de.map((t,r)=>{const{Icon:n,title:s,description:o}=t;return a(F,{className:"rounded-3 d-flex flex-direction-col justify-content-center align-items-center px-3 py-4 mx-4 my-5",children:[e(n,{size:50,className:"m-3"}),a(F.Body,{className:"px-4",children:[e(F.Title,{className:"fw-bold",children:s}),e(F.Text,{style:{textAlign:"justify"},children:o})]})]},r)})})]}),ue=[{Icon:ze,title:"React"},{Icon:Ge,title:"Node.js"},{Icon:Fe,title:"Solidity"},{Icon:_e,title:"Web3"},{Icon:qe,title:"VS Code"}],gt=()=>a("div",{className:ce.root3,children:[e("h2",{className:"fw-bold",children:"Tech Stack"}),e(ge,{children:ue==null?void 0:ue.map((t,r)=>{const{Icon:n,title:s}=t;return a(F,{className:"rounded-pill d-flex flex-direction-col justify-content-center align-items-center mx-4 my-5 shadow-sm",children:[e(n,{size:50,className:"m-3"}),e(F.Body,{className:"",children:e(F.Title,{className:"fw-bold",children:s})})]},r)})})]});var ft="./assets/curve-1.bf7c1ae6.png",yt="./assets/curve-2.d369b78c.png",vt="./assets/curve-3.d6a5c9dd.png";const ee=({children:t})=>e(Y,{children:e(W,{className:"justify-content-md-center",children:e(O,{xs:12,md:6,children:t})})}),V=({variant:t,children:r})=>e(We,{variant:t,children:r});V.defaultProps={variant:"info"};const j=()=>e(Ve,{animation:"border",role:"status",style:{width:"4vh",height:"4vh",margin:"25vh auto",display:"block",color:"black"}}),wt=()=>{const{isAuth:t,setIsAuth:r,loading:n,setLoading:s}=c.exports.useContext(E),o=J();return g.useEffect(()=>{s(!0),r("token"in localStorage),t&&o("/dashboard",{replace:!0}),s(!1)},[t]),e(G,{children:n?e(j,{}):e(G,{children:a("div",{style:{minHeight:"150vh",width:"100%"},children:[e("img",{src:ft,style:{position:"absolute",right:"0px",maxWidth:"60%",zIndex:"-1"}}),e(pt,{}),e("img",{src:yt,style:{position:"absolute",left:"0px",maxWidth:"20%",zIndex:"-1"}}),e(mt,{}),e("img",{src:vt,style:{position:"absolute",right:"0px",maxWidth:"18%",zIndex:"-1"}}),e(gt,{}),e(it,{})]})})})},H="https://dvoting-server.vercel.app/api",bt=async t=>{try{const r={headers:{"Content-Type":"application/json"}},n=await $.post(`${H}/users/login`,t,r);return localStorage.setItem("token",n.data.token),n.data}catch(r){throw r}},xt=async()=>{const t=localStorage.getItem("token"),r={headers:{"Content-type":"application/json",Authorization:`Bearer ${t}`}};try{const{data:n}=await $.get(`${H}/users/profile`,r);return D(A({},n),{error:!1})}catch(n){return console.log(n.response),D(A({},n),{error:!0})}},Ct=async t=>{try{const r={headers:{"Content-Type":"application/json"}},n=await $.post(`${H}/users`,t,r);return localStorage.setItem("token",n.data.token),n.data}catch(r){throw r}},It=async t=>{try{const r=localStorage.getItem("token"),n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}},s=await $.put(`${H}/users/verify`,t,n);return localStorage.setItem("token",s.data.token),s.data}catch(r){throw r}},Ce=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await $.put(`${H}/users/profile`,t,r)).data}catch(r){throw r}},St=()=>{const[t,r]=c.exports.useState(""),[n,s]=c.exports.useState(""),[o,i]=c.exports.useState(!1),h=re(),p=J(),v=h.search?h.search.split("=")[1]:"/",{isAuth:m,setIsAuth:w,loading:d,setLoading:u}=c.exports.useContext(E);return c.exports.useEffect(()=>{w("token"in localStorage),m&&(u(!1),p("/dashboard",{replace:!0}))},[m]),e(G,{children:d?e(j,{}):e(G,{children:e("div",{children:a(ee,{children:[e("h1",{children:"Login"}),o&&e(V,{variant:"danger",children:o}),a(l,{onSubmit:async I=>{I.preventDefault(),u(!0);try{await bt({email:t,password:n}),w("token"in localStorage)}catch(x){console.log(x),x.response&&x.response.data.message?i(x.response.data.message):i(x.message)}u(!1)},onReset:I=>{I.preventDefault(),r(""),s("")},children:[a(l.Group,{controlId:"email",children:[e(l.Label,{children:"Email Address"}),e(l.Control,{type:"email",placeholder:"Enter email",value:t,required:!0,onChange:I=>{i(!1),r(I.target.value)}})]}),a(l.Group,{controlId:"password",children:[e(l.Label,{children:"Password"}),e(l.Control,{type:"password",placeholder:"Enter password",value:n,required:!0,onChange:I=>{i(!1),s(I.target.value)}})]}),a(W,{className:"py-3",children:[e(O,{children:e(S,{type:"submit",variant:"primary",children:"Sign In"})}),e(O,{children:e(S,{type:"reset",variant:"primary",children:"Reset"})})]}),a(W,{children:[a(O,{children:["New User?"," ",e(_,{to:v?`/signup?redirect=${v}`:"/signup",children:"Register Here"})]}),a(O,{children:["Forgot Password?"," ",e(_,{to:v?`/forgotpassword?redirect=${v}`:"/forgotpassword",children:"Click here"})]})]})]})]})})})})},Nt=()=>{const[t,r]=c.exports.useState(""),[n,s]=c.exports.useState(""),[o,i]=c.exports.useState(""),[h,p]=c.exports.useState(""),[v,m]=c.exports.useState("voter"),[w,d]=c.exports.useState(!1),u=re(),y=J(),B=u.search?u.search.split("=")[1]:"/",{isAuth:I,setIsAuth:x,loading:f,setLoading:b}=c.exports.useContext(E);return c.exports.useEffect(()=>{x("token"in localStorage),I&&(b(!1),y("/dashboard",{replace:!0}))},[I]),e(G,{children:f?e(j,{}):e(G,{children:e("div",{children:a(ee,{children:[e("h1",{children:"SignUp"}),w&&e(V,{variant:"danger",children:w}),a(l,{onSubmit:async P=>{P.preventDefault(),b(!0);try{await Ct({username:n,email:o,password:h,name:t,userType:v}),x("token"in localStorage)}catch(C){console.log(C),C.response&&C.response.data.message?d(C.response.data.message):d(C.message)}b(!1)},onReset:P=>{P.preventDefault(),r(""),s(""),i(""),p(""),m("voter")},children:[a(l.Group,{controlId:"name",children:[e(l.Label,{children:"Name"}),e(l.Control,{type:"text",placeholder:"Enter name",value:t,required:!0,onChange:P=>{d(!1),r(P.target.value)}})]}),a(l.Group,{controlId:"username",children:[e(l.Label,{children:"Username"}),e(l.Control,{type:"text",placeholder:"Enter username",value:n,required:!0,onChange:P=>{d(!1),s(P.target.value)}})]}),a(l.Group,{controlId:"email",children:[e(l.Label,{children:"Email Address"}),e(l.Control,{type:"email",placeholder:"Enter email",value:o,required:!0,onChange:P=>{d(!1),i(P.target.value)}})]}),a(l.Group,{controlId:"password",children:[e(l.Label,{children:"Password"}),e(l.Control,{type:"password",placeholder:"Enter password",value:h,required:!0,onChange:P=>{d(!1),p(P.target.value)}})]}),a(W,{className:"py-3",children:[e(O,{children:e(S,{type:"submit",variant:"primary",children:"Sign Up"})}),e(O,{children:e(S,{type:"reset",variant:"primary",children:"Reset"})})]}),e(W,{children:a(O,{children:["Already registered?"," ",e(_,{to:B?`/login?redirect=${B}`:"/signup",children:"Login Here"})]})})]})]})})})})},kt=async t=>{const r=localStorage.getItem("token"),n={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}},s=t._id;try{const{data:o}=await $.get(`${H}/organisers?user=${s}`,n);return D(A({},o),{error:!1})}catch(o){return console.log(o),D(A({},o),{error:!0})}},Ot=async t=>{const r=localStorage.getItem("token"),n={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}};try{const{data:s}=await $.delete(`${H}/organisers/${t}`,n);return D(A({},s),{error:!1})}catch(s){return console.log(s),D(A({},s),{error:!0})}};async function Tt(t){const r=localStorage.getItem("token"),n={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}};try{const{data:s}=await $.post(`${H}/organisers`,t,n);return console.log(s),s}catch(s){return console.log(s),D(A({},s.response),{error:!0})}}const Et=t=>{const{show:r,setShow:n,setRedirect:s}=t,[o,i]=g.useState({organisationName:""}),h=m=>{i(D(A({},o),{[m.target.name]:m.target.value}))},p=async m=>{if(m.preventDefault(),!v())return;const w=await Tt(o);if(w.error){console.log(w),T.error(K(`error ${w.status}`,`${w.data&&w.data.message||w.statusText}`),{position:T.POSITION.BOTTOM_RIGHT});return}n(!1),s("/org")},v=()=>o.organisationName.length<4?(T.error(K("Organiser Name","must be at least 4 characters long"),{position:T.POSITION.BOTTOM_RIGHT}),!1):!0;return a(U,{size:"lg",show:r,onHide:()=>n(!1),"aria-labelledby":"createOrganiserModal",children:[e(U.Header,{closeButton:!0,children:e(U.Title,{id:"createOrganiserModal",children:"Create Organiser"})}),e(U.Body,{children:a(l,{children:[e(fe,{label:"Organiser name",className:"mb-3",children:e(l.Control,{type:"text",name:"organisationName",value:o.organisationName,onChange:h,required:!0})}),e(S,{className:"text-center",variant:"primary",type:"submit",onClick:p,children:"Create"})]})})]})},Pt=async(t,r)=>{const n=localStorage.getItem("token"),s={headers:{"Content-type":"application/json",Authorization:`Bearer ${n}`}},o=D(A({},t),{organiser:r,registrationLink:"https://dvoting.github.io"});console.log(o);try{const{data:i}=await $.post(`${H}/elections`,o,s);return i}catch(i){throw console.log(i),i}};async function ne(t){try{const{data:r}=await $.get(`${H}/elections?${t}`);return console.log(t,r),r.docs}catch(r){return console.log(r),null}}async function Ie(t){try{const{data:r}=await $.get(`${H}/voters/${t}`);return console.log(r),r}catch(r){return console.log(r),null}}async function Lt(t){const r=localStorage.getItem("token"),n={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}};try{const{data:s}=await $.patch(`${H}/voters/wallet`,t,n);return console.log(s),s}catch(s){return console.log(s),D(A({},s.response),{error:!0})}}const At=()=>{const{user:t,loading:r,setLoading:n}=g.useContext(E),[s,o]=g.useState(!1),[i,h]=g.useState(null),[p,v]=g.useState([]),[m,w]=g.useState([]),[d,u]=g.useState([]),[y,B]=g.useState([]),[I,x]=g.useState(null);return g.useEffect(()=>{n(t===null),console.log(t)},[t]),g.useEffect(async()=>{t&&h(await Ie(t.uniqueVoterId))},[t]),g.useEffect(async()=>{if(i&&i.invitations.length>0){const f=`ids=${i.invitations.join(",")}`;v(await ne(f))}},[i]),g.useEffect(async()=>{if(t){const f=`appliedVoter=${t.uniqueVoterId}`;w(await ne(f))}},[t]),g.useEffect(async()=>{if(t){const f=`approvedVoter=${t.uniqueVoterId}`;u(await ne(f))}},[t]),g.useEffect(async()=>{if(t){const f=`appearedVoter=${t.uniqueVoterId}`;B(await ne(f))}},[t]),I?e(Z,{replace:!0,to:I}):r?e(j,{}):e(g.Fragment,{children:e(Y,{children:a(W,{children:[a(O,{md:12,lg:4,children:[e(F,{children:t&&a(g.Fragment,{children:[e(F.Header,{children:"User Profile"}),a(k,{variant:"flush",children:[a(k.Item,{children:["Username: ",t.username]}),a(k.Item,{children:["Name: ",t.name]}),a(k.Item,{children:["E-mail: ",t.email," ",t.emailVerified?e("span",{className:"text-success",children:"verified"}):e(_,{to:"/verifyEmail",children:"verify"})]}),a(k.Item,{children:["UVID: ",t.uniqueVoterId]}),i&&a(k.Item,{children:["Wallet:"," ",i.hasWallet?a(g.Fragment,{children:[e("span",{className:"text-success",children:"assigned"})," | ","Nonce: #",i.nonce]}):e(_,{to:"wallet",children:"generate"})]}),e(k.Item,{children:e(_,{to:"/changePassword",children:"Change Password"})})]})]})}),e(F,{style:{marginTop:"5%",marginBottom:"5%"},children:t&&a(k,{variant:"flush",children:[t.userType==="voter"&&a(g.Fragment,{children:[e(k.Item,{onClick:()=>o(!0),style:{cursor:"pointer"},children:"Register an Organisation"}),e(Et,{show:s,setShow:o,setRedirect:x})]}),t.userType==="organiser"&&e(_,{to:"/org",children:e(k.Item,{children:"Manage Organizations"})})]})})]}),e(O,{md:12,lg:8,children:a(F,{children:[e(F.Header,{children:"Elections"}),e(F.Body,{children:i&&a(je,{defaultActiveKey:"invited",className:"mb-3",children:[e(ae,{eventKey:"invited",title:"Invited",children:p.length>0?e(k,{variant:"flush",children:p.map(f=>e(_,{to:"#",children:e(k.Item,{children:f.title})},f._id))}):e(g.Fragment,{children:"Nothing here... "})}),e(ae,{eventKey:"approved",title:"Approved",children:d.length>0?e(k,{variant:"flush",children:d.map(f=>e(_,{to:"#",children:e(k.Item,{children:f.title})},f._id))}):e(g.Fragment,{children:"Nothing here... "})}),e(ae,{eventKey:"applied",title:"Applied",children:m.length>0?e(k,{variant:"flush",children:m.map(f=>e(_,{to:"#",children:e(k.Item,{children:f.title})},f._id))}):e(g.Fragment,{children:"Nothing here... "})}),e(ae,{eventKey:"appeared",title:"Appeared",children:y.length>0?e(k,{variant:"flush",children:y.map(f=>e(_,{to:"#",children:e(k.Item,{children:f.title})},f._id))}):e(g.Fragment,{children:"Nothing here... "})})]})})]})})]})})})},Dt=()=>{const{loading:t,setLoading:r,user:n}=g.useContext(E),{walletId:s,setWalletId:o}=c.exports.useContext(E),[i,h]=g.useState(null),[p,v]=g.useState(null),[m,w]=g.useState(""),[d,u]=g.useState(null),[y,B]=g.useState(null),[I,x]=g.useState(0),[f,b]=g.useState(!1);g.useEffect(()=>{let q="0",R=!1;document.addEventListener("mousemove",N=>{R=!0;let z=Math.sqrt(N.offsetX*N.offsetX+N.offsetY*N.offsetY);z=Math.round(z)*17%16,q=z.toString(16)}),setInterval(()=>{R=!1},200),setInterval(()=>{w(N=>(I<100&&x(Math.round(N.length/64*100)),N.length<64&&R?N+q:N))},100)},[]),g.useEffect(()=>{r(!n||!p),p&&p.hasWallet&&h("/dashboard"),console.log(n)},[n,p]),g.useEffect(async()=>{n&&v(await Ie(n.uniqueVoterId))},[n]);const se=()=>{if(d)return;let q="";for(let N of m){let z=parseInt(N,16);z=z^Math.floor(Math.random()*16),q+=z.toString(16)}u(q);let R=X.eth.accounts.privateKeyToAccount(q);B(R.address),console.log(R)},M=async(q,R=null)=>{await navigator.clipboard.writeText(q),T.info(K(R,"copied to clipboard"),{position:T.POSITION.BOTTOM_CENTER,autoClose:500,hideProgressBar:!0,toastId:"copyToast"})},P=(q,R)=>{let N=document.createElement("a");N.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(R)),N.setAttribute("download",q),N.style.display="none",document.body.appendChild(N),N.click(),document.body.removeChild(N)},C=async()=>{if(!s){T.error(K("No wallet connected",null),{position:T.POSITION.BOTTOM_RIGHT,autoClose:5e3,toastId:"walletError",closeOnClick:!0,pauseOnHover:!1,draggable:!1});return}let q=JSON.stringify({voter:p._id,address:X.utils.toChecksumAddress(s)}),R=await ot(q);if(!R)return;let N={address:X.utils.toChecksumAddress(s),signature:R};const z=await Lt(N);if(z.error){console.log(z),T.error(K(`error ${z.status}`,`${z.data||z.statusText}`),{position:T.POSITION.BOTTOM_RIGHT});return}T.success(K("Approved Wallet",`${y}`),{position:T.POSITION.BOTTOM_RIGHT}),h("/dashboard")};return i?e(Z,{replace:!0,to:i}):t?e(j,{}):e(g.Fragment,{children:e(Y,{children:a(W,{children:[e(O,{md:12,lg:2}),a(O,{md:12,lg:8,children:[a("p",{children:["Generating Ethereum Wallet...",e("br",{}),"MOVE your mouse around to add some extra randomness..."]}),a(l,{children:[a(fe,{label:"Randomness",className:"mb-3",children:[e(l.Control,{as:"textarea",value:m,disabled:!0,style:{resize:"none",height:"5rem"}}),I===100?e(ye,{variant:"success",now:100,label:"Done"}):e(ye,{now:I,label:`${I}%`})]}),e("div",{className:"d-grid gap-2",children:e(S,{variant:"primary",onClick:()=>se(),disabled:I!==100,children:"Generate Ethereum Wallet"})})]}),e("hr",{}),y&&a(l,{children:[a(l.Group,{className:"mb-3",children:[e(l.Label,{children:"Ethereum address"}),a(ve,{children:[e(l.Control,{type:"text",value:y,onChange:()=>{}}),e(S,{variant:"light",onClick:()=>M(y,"Address"),children:e(we,{})})]})]}),a(l.Group,{className:"mb-3",children:[e(l.Label,{children:"Private key"}),a(ve,{children:[e(l.Control,{type:f?"text":"password",value:d,onChange:()=>{}}),e(S,{variant:"light",onClick:()=>b(!f),children:f?e(Ue,{size:20}):e(Ke,{size:20})}),e(S,{variant:"light",onClick:()=>M(d,"Private key"),children:e(we,{})}),e(S,{variant:"light",onClick:()=>P("key.txt",d),children:e(Je,{})})]})]}),e("hr",{}),e(l.Group,{className:"mb-3",children:s.toLowerCase()===y.toLowerCase()?e(S,{variant:"primary",onClick:async()=>{await C()},children:"Approve Wallet"}):a("p",{className:"alert alert-info",children:["Before proceeding, connect the above wallet by importing it's private key."," ",e("a",{href:"https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account",target:"_blank",rel:"noreferrer",children:"steps"})]})})]})]}),e(O,{md:12,lg:2})]})})})},$t=[{name:"Email not entered",value:"1"},{name:"OTP sent from server",value:"2"},{name:"Change password",value:"3"}],Ht=[{name:"Email not pressed",value:"1"},{name:"OTP sent from server",value:"2"}],Se=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await $.put(`${H}/otp`,t,r)).data}catch(r){throw r}},Ne=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await $.patch(`${H}/otp/verify`,t,r)).data}catch(r){throw r}},Bt=()=>{const{user:t,loading:r,setLoading:n,setUser:s}=c.exports.useContext(E),[o,i]=c.exports.useState("fetching..."),[h,p]=c.exports.useState(""),[v,m]=c.exports.useState(Ht[0].value),[w,d]=c.exports.useState(!1),[u,y]=c.exports.useState(!1),B=J();return c.exports.useEffect(()=>{n(!0),t&&(i(t.email),n(!1),t.emailVerified&&B("/dashboard",{replace:!0}))},[t]),e(G,{children:r?e(j,{}):e("div",{children:a(ee,{children:[e("h1",{children:"Verify Email"}),u&&e(V,{variant:"success",children:u}),w&&e(V,{variant:"danger",children:w}),e(l,{onSubmit:async x=>{switch(x.preventDefault(),d(!1),y(!1),v){case"1":n(!0);const f="OTP for e-mail Verification";try{await Se({email:o,purpose:f}),m("2")}catch(b){console.log(b),b.response&&b.response.data.message?d(b.response.data.message):d(b.message)}n(!1);break;case"2":n(!0);try{await Ne({email:o,otp:h});const b=await It({email:o});y("Email has been verified"),s(b),B("/dashboard",{replace:!0})}catch(b){console.log(b),b.response&&b.response.data.message?d(b.response.data.message):d(b.message)}n(!1);break}},children:e(W,{className:"py-3",children:a(O,{children:[a(l.Group,{controlId:"email",children:[e(l.Label,{children:"Email Address"}),e(l.Control,{type:"email",placeholder:"Enter your email",value:o,disabled:!0,required:!0})]}),v==="2"&&a(l.Group,{controlId:"otp",children:[e(l.Label,{children:"OTP"}),e(l.Control,{type:"text",placeholder:"Enter OTP received on email",value:h,required:!0,onChange:x=>{d(!1),p(x.target.value)}})]}),e(W,{className:"py-3",children:e(O,{children:e(S,{type:"submit",variant:"primary",children:v=="1"?"Send OTP":"Verify Email"})})})]})})})]})})})},Mt=()=>{const[t,r]=c.exports.useState("fetching..."),[n,s]=c.exports.useState(""),[o,i]=c.exports.useState(""),[h,p]=c.exports.useState(!1),[v,m]=c.exports.useState(!1),w=J(),{loading:d,user:u,setLoading:y}=c.exports.useContext(E);return c.exports.useEffect(()=>{y(!0),u&&(r(u.email),y(!1))},[u]),e(G,{children:d?e(j,{}):e("div",{children:a(ee,{children:[e("h1",{children:"Change Password"}),v&&e(V,{variant:"success",children:v}),h&&e(V,{variant:"danger",children:h}),a(l,{onSubmit:async x=>{if(x.preventDefault(),p(!1),m(!1),n!==o){p("Passwords don't match");return}try{y(!0),await Ce({email:t,password:n}),y(!1),m("Password changed.. Redirecting to dashboard"),setTimeout(()=>{w("/dashboard",{replace:!0})},[1e3])}catch(f){console.log(f),f.response&&f.response.data.message?p(f.response.data.message):p(f.message)}},onReset:async x=>{x.preventDefault(),s(""),i(""),p(!1),m(!1)},children:[a(l.Group,{controlId:"password",children:[e(l.Label,{children:"Password"}),e(l.Control,{type:"password",placeholder:"Enter new Password",value:n,required:!0,onChange:x=>{p(!1),s(x.target.value)}})]}),a(l.Group,{controlId:"confirmPassword",children:[e(l.Label,{children:"Confirm Password"}),e(l.Control,{type:"password",placeholder:"Confirm your new Password",value:o,required:!0,onChange:x=>{p(!1),i(x.target.value)}})]}),a(W,{className:"py-3",children:[e(O,{children:e(S,{type:"submit",variant:"primary",children:"Change Password"})}),e(O,{children:e(S,{type:"reset",variant:"primary",children:"Reset"})})]})]})]})})})},Rt=t=>{const{isOpen:r,setIsOpen:n,handleDelete:s,_id:o}=t,i=()=>n(!1);return a(U,{show:r,onHide:i,centered:!0,children:[e(U.Header,{closeButton:!0,children:e(U.Title,{children:"Confirm Delete"})}),a(U.Body,{children:[e("p",{children:"Are you sure you want to delete ?"}),e("h4",{children:o})]}),a(U.Footer,{children:[e(S,{variant:"secondary",onClick:i,children:"Cancel"}),e(S,{variant:"danger",onClick:s,children:"Delete"})]})]})},zt=()=>{const[t,r]=c.exports.useState(null),[n,s]=c.exports.useState(!1),[o,i]=c.exports.useState(null),{user:h}=c.exports.useContext(E),p=J();if(c.exports.useEffect(()=>{(async()=>{if(h){const d=await kt(h);if(d.error)return;r(d.docs)}})()},[h,n]),!t)return a("div",{children:[e("h1",{children:"Manage My Organizations"}),e(j,{})]});const v=(d,u)=>{p(`/org/${d}/create-election`,{state:u})},m=d=>{i(d),s(d)},w=async d=>{if(console.log("delete called"),(await Ot(d)).error){alert("Some error occured");return}s(!1)};return a("div",{children:[e(Rt,{isOpen:n,setIsOpen:s,_id:o,handleDelete:()=>w(o)}),e("h1",{children:"Manage My Organizations"}),t.length===0?e("h3",{children:"No Organizations found!!"}):e(k,{as:"ol",numbered:!0,className:"",children:t==null?void 0:t.map(d=>{const{organisationName:u,_id:y}=d;return a(k.Item,{as:"li",className:"d-flex flex-row",children:[a(_,{to:`/org/${y}`,style:{textDecoration:"none"},className:"flex-grow-1 px-3",children:[u,a("p",{children:["ID: ",y]})]}),e(S,{className:"align-self-center",onClick:()=>v(y,u),children:"Create Election"}),e("p",{className:"align-self-center text-danger m-3",style:{cursor:"pointer"},onClick:()=>m(y),children:"Delete"})]},y)})})]})},Gt=()=>{let r=re().pathname.split("/")[2];return console.log(r),a("div",{children:["Election Details Page",e("h1",{children:r})]})};const Ft=()=>{const t=re();let r=t.pathname.split("/")[2],n=t.state;const[s,o]=c.exports.useState({title:"",openTimestamp:new Date,closeTimestamp:new Date}),[i,h]=c.exports.useState(null),[p,v]=c.exports.useState(null);c.exports.useContext(E);const m=async d=>{d.preventDefault();try{const u=await Pt(s,r),{_id:y}=u;h(`/elections/${y}`)}catch(u){console.log(u.response),v(u.response.data)}},w=d=>{d.preventDefault(),h(`/org/${r}`)};return i?e(Z,{to:i,replace:!0}):a("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"70vh"},children:[e("h2",{className:"my-5",children:"Create an Election"}),a(l,{onSubmit:m,onReset:w,className:"bg-light rounded px-4 py-4",style:{background:"pink",minWidth:"40%"},children:[a(l.Group,{className:"my-4",controlId:"electionTitle",children:[e(l.Label,{children:"Title"}),e(l.Control,{type:"text",placeholder:"Enter election title",value:s.title,onChange:d=>{o(u=>D(A({},u),{title:d.target.value}))}})]}),a(l.Group,{className:"my-4",controlId:"organizer",children:[e(l.Label,{children:"Organization Name"}),e(l.Control,{type:"text",value:n,disabled:!0})]}),a("div",{className:"my-4",children:[e("label",{children:"Election Start Time"}),e("br",{}),e(be,{className:"w-100",onChange:d=>{o(u=>D(A({},u),{openTimestamp:d}))},value:s.openTimestamp,minDate:new Date,required:!0})]}),a("div",{className:"my-4",children:[e("label",{children:"Election End Time"}),e("br",{}),e(be,{className:"w-100",onChange:d=>{o(u=>D(A({},u),{closeTimestamp:d}))},value:s.closeTimestamp,minDate:s.openTimestamp})]}),e("br",{}),a("div",{className:"d-flex justify-content-center",children:[e(S,{variant:"secondary",type:"reset",className:"mx-4 px-3",children:"Discard"}),e(S,{variant:"success",type:"submit",className:"mx-4 px-4",children:"Save"})]})]}),p&&e(V,{variant:"danger",children:p})]})},_t=()=>{const[t,r]=c.exports.useState(""),[n,s]=c.exports.useState(""),[o,i]=c.exports.useState(""),[h,p]=c.exports.useState(""),[v,m]=c.exports.useState(!1),[w,d]=c.exports.useState(!1),[u,y]=c.exports.useState($t[0].value),B=J(),{isAuth:I,setIsAuth:x,loading:f,setLoading:b}=c.exports.useContext(E);return c.exports.useEffect(()=>{x("token"in localStorage),I&&(b(!1),B("/dashboard",{replace:!0}))},[I]),e(G,{children:f?e(j,{}):e(G,{children:e("div",{children:a(ee,{children:[e("h1",{children:"Forgot Password"}),w&&e(V,{variant:"success",children:w}),v&&e(V,{variant:"danger",children:v}),a(l,{onSubmit:async M=>{if(M.preventDefault(),m(!1),d(!1),o!==h){m("Passwords don't match");return}switch(u){case"1":b(!0);const P="OTP for Forgot Password";try{await Se({email:t,purpose:P}),y("2")}catch(C){console.log(C),C.response&&C.response.data.message?m(C.response.data.message):m(C.message)}b(!1);break;case"2":b(!0);try{await Ne({email:t,otp:n}),y("3")}catch(C){console.log(C),C.response&&C.response.data.message?m(C.response.data.message):m(C.message)}b(!1);break;case"3":b(!0);try{await Ce({email:t,password:o}),d("Password has been changed")}catch(C){console.log(C),C.response&&C.response.data.message?m(C.response.data.message):m(C.message)}b(!1);break}},children:[(u==="1"||u==="2")&&a(l.Group,{controlId:"email",children:[e(l.Label,{children:"Email Address"}),e(l.Control,{type:"email",placeholder:"Enter your email",value:t,required:!0,onChange:M=>{m(!1),r(M.target.value)}})]}),u==="2"&&a(l.Group,{controlId:"otp",children:[e(l.Label,{children:"OTP"}),e(l.Control,{type:"text",placeholder:"Enter OTP received on email",value:n,required:!0,onChange:M=>{m(!1),s(M.target.value)}})]}),u==="3"&&a(l.Group,{controlId:"password",children:[e(l.Label,{children:"Password"}),e(l.Control,{type:"password",placeholder:"Enter new Password",value:o,required:!0,onChange:M=>{m(!1),i(M.target.value)}})]}),u==="3"&&a(l.Group,{controlId:"confirmPassword",children:[e(l.Label,{children:"Confirm Password"}),e(l.Control,{type:"password",placeholder:"Confirm your new Password",value:h,required:!0,onChange:M=>{m(!1),p(M.target.value)}})]}),e(W,{className:"py-3",children:e(O,{children:e(S,{type:"submit",variant:"primary",children:u=="1"?"Send OTP":u=="2"?"Confirm OTP":"Change Password"})})})]})]})})})})};var qt="./assets/fourOfour.e2f25f95.jpeg";const Wt=()=>{const{loading:t,isAuth:r,setIsAuth:n}=c.exports.useContext(E);return c.exports.useEffect(()=>{n("token"in localStorage)}),e("div",{children:t?e(j,{}):a(G,{children:[a(_,{to:r?"/dashboard":"/",children:[e(Xe,{}),"Go back to the home page"]}),e("img",{src:qt})]})})},Vt=()=>{const{user:t,setUser:r,setIsAuth:n,setLoading:s}=c.exports.useContext(E),o=localStorage.getItem("token"),[i,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{(async()=>{if(o&&!t){const p=await xt();p.error?(n(!1),s(!1),h(!0)):(r(p),n(!0))}})()},[o]),i?(localStorage.removeItem("token"),e(Z,{to:"/"})):(console.log("via private route"),o?e(xe,{}):e(Z,{to:"/login"}))},jt=()=>(console.log("Organizer route"),e(xe,{})),Ut=()=>e("div",{children:"Dummy Route"}),Kt=()=>a(Ye,{children:[e("main",{className:"App py-3 bg-gray",children:a(Y,{children:[e(lt,{}),a(Qe,{children:[e(L,{path:"*",element:e(Wt,{})}),e(L,{exact:!0,path:"/",element:e(wt,{})}),e(L,{path:"/login",element:e(St,{})}),e(L,{path:"/signup",element:e(Nt,{})}),e(L,{path:"/forgotpassword",element:e(_t,{})}),a(L,{path:"/",element:e(Vt,{}),children:[e(L,{exact:!0,path:"/dashboard",element:e(At,{})}),e(L,{exact:!0,path:"/dashboard/wallet",element:e(Dt,{})}),e(L,{exact:!0,path:"/elections/:id",element:e(Gt,{})}),e(L,{exact:!0,path:"/verifyEmail",element:e(Bt,{})}),e(L,{exact:!0,path:"/changePassword",element:e(Mt,{})}),a(L,{path:"/org",element:e(jt,{}),children:[e(L,{path:"/org",element:e(zt,{})}),e(L,{path:"/org/:id",element:e(Ut,{})}),e(L,{path:"/org/:id/create-election",element:e(Ft,{})})]})]})]})]})}),e(Ze,{style:{width:"30em"}})]});et.render(e(rt,{children:e(Kt,{})}),document.getElementById("root"));