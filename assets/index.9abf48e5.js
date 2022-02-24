var he=Object.defineProperty,pe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ne=(t,r,a)=>r in t?he(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,T=(t,r)=>{for(var a in r||(r={}))me.call(r,a)&&ne(t,a,r[a]);if(ae)for(var a of ae(r))fe.call(r,a)&&ne(t,a,r[a]);return t},L=(t,r)=>pe(t,ge(r));import{r as i,j as e,W as Z,a as n,R as w,t as j,N as ee,C as W,b as K,c as U,F as D,d as ve,e as ye,f as we,V as Ce,B as xe,g as se,h as q,i as E,A as be,S as Se,u as V,k as A,l as J,m as c,n as k,L as $,M as F,o as Ie,p as Q,q as z,s as S,T as Ee,v as X,D as oe,w as ke,O as le,x as Oe,y as Ne,z as O,E as Pe,G as Te}from"./vendor.44e452d4.js";const Le=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}};Le();const N=i.exports.createContext({user:null,walletId:null,isAuth:!1,loading:!1}),De=t=>{const[r,a]=i.exports.useState(""),[o,s]=i.exports.useState(null),[l,h]=i.exports.useState(!1),[g,f]=i.exports.useState(!1);return e(N.Provider,{value:{user:o,setUser:s,walletId:r,setWalletId:a,isAuth:l,setIsAuth:h,loading:g,setLoading:f},children:t.children})};let te;if(window.ethereum)console.log("MetaMask is installed!"),te=new Z(window.ethereum);else{console.log("MetaMask is NOT installed!");const t=new Z.providers.HttpProvider("https://polygon-rpc.com",{chainId:137,name:"matic"});te=new Z(t)}var Ae=te;const re=(t,r)=>n(w.Fragment,{children:[e("span",{children:t||""}),e("br",{}),e("span",{children:r||""})]});function $e(t){var a;let r=(a=JSON.parse(localStorage.getItem("walletDisabled")))!=null?a:!1;console.log(r),window.ethereum&&(Ae.eth.getAccounts().then(o=>{r||t(o[0]||"")}).catch(console.log),window.ethereum.on("accountsChanged",o=>{var l;((l=JSON.parse(localStorage.getItem("walletDisabled")))!=null?l:!1)||t(o[0]||"")}))}async function He(t){localStorage.setItem("walletDisabled",!0),t("")}async function Re(t){if(!window.ethereum){j.error(re("Provider Error","MetaMask is NOT installed!"),{position:j.POSITION.BOTTOM_RIGHT,autoClose:5e3,toastId:"providerError",closeOnClick:!0,pauseOnHover:!1,draggable:!1});return}localStorage.setItem("walletDisabled",!1);try{const r=await window.ethereum.request({method:"eth_requestAccounts"});t(r[0]||"")}catch(r){console.log(r)}}const Me=()=>{const{user:t,setUser:r,isAuth:a,setIsAuth:o,setLoading:s}=i.exports.useContext(N),{walletId:l,setWalletId:h}=i.exports.useContext(N),g=()=>{localStorage.removeItem("token"),o(!1),r(null),s(!1)};return i.exports.useEffect(()=>$e(h),[]),e("header",{children:e(ee,{children:n(W,{children:[e(K.LinkContainer,{to:a?"/dashboard":"/",children:e(ee.Brand,{children:"DVoting"})}),e(ee.Toggle,{"aria-controls":"basic-navbar-nav"}),n(U,{className:"ml-auto",children:[t?e(D,{children:n(ve,{children:[t.name,e(K.LinkContainer,{to:"#",onClick:g,children:n(U.Link,{children:[e(ye,{})," Logout"]})})]})}):n(D,{children:[e(K.LinkContainer,{to:"/login",children:n(U.Link,{children:[e(we,{})," Log In"]})}),e(K.LinkContainer,{to:"/signup",children:n(U.Link,{children:[e(Ce,{})," SignUp"]})})]}),l===""?n(U.Link,{onClick:()=>Re(h),children:[e(xe,{size:20})," Connect Wallet"]}):e(se,{title:l.slice(0,4)+"..."+l.slice(-4),children:e(se.Item,{onClick:()=>He(h),children:"Disconnect"})})]})]})})})},_=({children:t})=>e(W,{children:e(q,{className:"justify-content-md-center",children:e(E,{xs:12,md:6,children:t})})}),B=({variant:t,children:r})=>e(be,{variant:t,children:r});B.defaultProps={variant:"info"};const G=()=>e(Se,{animation:"border",role:"status",style:{width:"4vh",height:"4vh",margin:"25vh auto",display:"block",color:"black"}}),qe=()=>{const{isAuth:t,setIsAuth:r,loading:a,setLoading:o}=i.exports.useContext(N),s=V();return w.useEffect(()=>{o(!0),r("token"in localStorage),t&&s("/dashboard",{replace:!0}),o(!1)},[t]),e(D,{children:a?e(G,{}):e(D,{children:e("div",{children:"Voting App - Client..."})})})},H="https://dvoting-server.vercel.app/api",Be=async t=>{try{const r={headers:{"Content-Type":"application/json"}},a=await A.post(`${H}/users/login`,t,r);return localStorage.setItem("token",a.data.token),a.data}catch(r){throw r}},Fe=async()=>{const t=localStorage.getItem("token"),r={headers:{"Content-type":"application/json",Authorization:`Bearer ${t}`}};try{const{data:a}=await A.get(`${H}/users/profile`,r);return L(T({},a),{error:!1})}catch(a){return console.log(a.response),L(T({},a),{error:!0})}},Ge=async t=>{try{const r={headers:{"Content-Type":"application/json"}},a=await A.post(`${H}/users`,t,r);return localStorage.setItem("token",a.data.token),a.data}catch(r){throw r}},Ve=async t=>{try{const r=localStorage.getItem("token"),a={headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}},o=await A.put(`${H}/users/verify`,t,a);return localStorage.setItem("token",o.data.token),o.data}catch(r){throw r}},ie=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await A.put(`${H}/users/profile`,t,r)).data}catch(r){throw r}},je=()=>{const[t,r]=i.exports.useState(""),[a,o]=i.exports.useState(""),[s,l]=i.exports.useState(!1),h=J(),g=V(),f=h.search?h.search.split("=")[1]:"/",{isAuth:p,setIsAuth:v,loading:d,setLoading:u}=i.exports.useContext(N);return i.exports.useEffect(()=>{v("token"in localStorage),p&&(u(!1),g("/dashboard",{replace:!0}))},[p]),e(D,{children:d?e(G,{}):e(D,{children:e("div",{children:n(_,{children:[e("h1",{children:"Login"}),s&&e(B,{variant:"danger",children:s}),n(c,{onSubmit:async I=>{I.preventDefault(),u(!0);try{await Be({email:t,password:a}),v("token"in localStorage)}catch(x){console.log(x),x.response&&x.response.data.message?l(x.response.data.message):l(x.message)}u(!1)},onReset:I=>{I.preventDefault(),r(""),o("")},children:[n(c.Group,{controlId:"email",children:[e(c.Label,{children:"Email Address"}),e(c.Control,{type:"email",placeholder:"Enter email",value:t,required:!0,onChange:I=>{l(!1),r(I.target.value)}})]}),n(c.Group,{controlId:"password",children:[e(c.Label,{children:"Password"}),e(c.Control,{type:"password",placeholder:"Enter password",value:a,required:!0,onChange:I=>{l(!1),o(I.target.value)}})]}),n(q,{className:"py-3",children:[e(E,{children:e(k,{type:"submit",variant:"primary",children:"Sign In"})}),e(E,{children:e(k,{type:"reset",variant:"primary",children:"Reset"})})]}),n(q,{children:[n(E,{children:["New User?"," ",e($,{to:f?`/signup?redirect=${f}`:"/signup",children:"Register Here"})]}),n(E,{children:["Forgot Password?"," ",e($,{to:f?`/forgotpassword?redirect=${f}`:"/forgotpassword",children:"Click here"})]})]})]})]})})})})},ze=()=>{const[t,r]=i.exports.useState(""),[a,o]=i.exports.useState(""),[s,l]=i.exports.useState(""),[h,g]=i.exports.useState(""),[f,p]=i.exports.useState("voter"),[v,d]=i.exports.useState(!1),u=J(),C=V(),R=u.search?u.search.split("=")[1]:"/",{isAuth:I,setIsAuth:x,loading:m,setLoading:y}=i.exports.useContext(N);return i.exports.useEffect(()=>{x("token"in localStorage),I&&(y(!1),C("/dashboard",{replace:!0}))},[I]),e(D,{children:m?e(G,{}):e(D,{children:e("div",{children:n(_,{children:[e("h1",{children:"SignUp"}),v&&e(B,{variant:"danger",children:v}),n(c,{onSubmit:async P=>{P.preventDefault(),y(!0);try{await Ge({username:a,email:s,password:h,name:t,userType:f}),x("token"in localStorage)}catch(b){console.log(b),b.response&&b.response.data.message?d(b.response.data.message):d(b.message)}y(!1)},onReset:P=>{P.preventDefault(),r(""),o(""),l(""),g(""),p("voter")},children:[n(c.Group,{controlId:"name",children:[e(c.Label,{children:"Name"}),e(c.Control,{type:"text",placeholder:"Enter name",value:t,required:!0,onChange:P=>{d(!1),r(P.target.value)}})]}),n(c.Group,{controlId:"username",children:[e(c.Label,{children:"Username"}),e(c.Control,{type:"text",placeholder:"Enter username",value:a,required:!0,onChange:P=>{d(!1),o(P.target.value)}})]}),n(c.Group,{controlId:"email",children:[e(c.Label,{children:"Email Address"}),e(c.Control,{type:"email",placeholder:"Enter email",value:s,required:!0,onChange:P=>{d(!1),l(P.target.value)}})]}),n(c.Group,{controlId:"password",children:[e(c.Label,{children:"Password"}),e(c.Control,{type:"password",placeholder:"Enter password",value:h,required:!0,onChange:P=>{d(!1),g(P.target.value)}})]}),n(q,{className:"py-3",children:[e(E,{children:e(k,{type:"submit",variant:"primary",children:"Sign Up"})}),e(E,{children:e(k,{type:"reset",variant:"primary",children:"Reset"})})]}),e(q,{children:n(E,{children:["Already registered?"," ",e($,{to:R?`/login?redirect=${R}`:"/signup",children:"Login Here"})]})})]})]})})})})},Ue=async t=>{const r=localStorage.getItem("token"),a={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}},o=t._id;try{const{data:s}=await A.get(`${H}/organisers?user=${o}`,a);return L(T({},s),{error:!1})}catch(s){return console.log(s),L(T({},s),{error:!0})}},_e=async t=>{const r=localStorage.getItem("token"),a={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}};try{const{data:o}=await A.delete(`${H}/organisers/${t}`,a);return L(T({},o),{error:!1})}catch(o){return console.log(o),L(T({},o),{error:!0})}};async function We(t){const r=localStorage.getItem("token"),a={headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`}};try{const{data:o}=await A.post(`${H}/organisers`,t,a);return console.log(o),o}catch(o){return console.log(o),L(T({},o.response),{error:!0})}}const Ke=t=>{const{show:r,setShow:a,setRedirect:o}=t,[s,l]=w.useState({organisationName:""}),h=p=>{l(L(T({},s),{[p.target.name]:p.target.value}))},g=async p=>{if(p.preventDefault(),!f())return;const v=await We(s);if(v.error){console.log(v),j.error(re(`error ${v.status}`,`${v.data&&v.data.message||v.statusText}`),{position:j.POSITION.BOTTOM_RIGHT});return}a(!1),o("/org")},f=()=>s.organisationName.length<4?(j.error(re("Organiser Name","must be at least 4 characters long"),{position:j.POSITION.BOTTOM_RIGHT}),!1):!0;return n(F,{size:"lg",show:r,onHide:()=>a(!1),"aria-labelledby":"createOrganiserModal",children:[e(F.Header,{closeButton:!0,children:e(F.Title,{id:"createOrganiserModal",children:"Create Organiser"})}),e(F.Body,{children:n(c,{children:[e(Ie,{label:"Organiser name",className:"mb-3",children:e(c.Control,{type:"text",name:"organisationName",value:s.organisationName,onChange:h,required:!0})}),e(k,{className:"text-center",variant:"primary",type:"submit",onClick:g,children:"Create"})]})})]})},Je=async(t,r)=>{const a=localStorage.getItem("token"),o={headers:{"Content-type":"application/json",Authorization:`Bearer ${a}`}},s=L(T({},t),{organiser:r,registrationLink:"https://dvoting.github.io"});console.log(s);try{const{data:l}=await A.post(`${H}/elections`,s,o);return l}catch(l){throw console.log(l),l}};async function Y(t){try{const{data:r}=await A.get(`${H}/elections?${t}`);return console.log(t,r),r.docs}catch(r){return console.log(r),null}}async function Qe(t){try{const{data:r}=await A.get(`${H}/voters/${t}`);return console.log(r),r}catch(r){return console.log(r),null}}const Xe=()=>{const{user:t,loading:r,setLoading:a}=w.useContext(N),[o,s]=w.useState(!1),[l,h]=w.useState(null),[g,f]=w.useState([]),[p,v]=w.useState([]),[d,u]=w.useState([]),[C,R]=w.useState([]),[I,x]=w.useState(null);return w.useEffect(()=>{a(t===null),console.log(t)},[t]),w.useEffect(async()=>{t&&h(await Qe(t.uniqueVoterId))},[t]),w.useEffect(async()=>{if(l&&l.invitations.length>0){const m=`ids=${l.invitations.join(",")}`;f(await Y(m))}},[l]),w.useEffect(async()=>{if(t){const m=`appliedVoter=${t.uniqueVoterId}`;v(await Y(m))}},[t]),w.useEffect(async()=>{if(t){const m=`approvedVoter=${t.uniqueVoterId}`;u(await Y(m))}},[t]),w.useEffect(async()=>{if(t){const m=`appearedVoter=${t.uniqueVoterId}`;R(await Y(m))}},[t]),I?e(Q,{replace:!0,to:I}):e(w.Fragment,{children:r?e(G,{}):e(w.Fragment,{children:e(W,{children:n(q,{children:[n(E,{md:12,lg:4,children:[e(z,{children:t&&n(w.Fragment,{children:[e(z.Header,{children:"User Profile"}),n(S,{variant:"flush",children:[n(S.Item,{children:["Username: ",t.username]}),n(S.Item,{children:["Name: ",t.name]}),n(S.Item,{children:["E-mail: ",t.email," ",t.emailVerified?e("span",{className:"text-success",children:"verified"}):e($,{to:"/verifyEmail",children:"verify"})]}),n(S.Item,{children:["UVID: ",t.uniqueVoterId]}),l&&n(S.Item,{children:["Wallet:"," ",l.hasWallet?e("span",{className:"text-success",children:"assigned"}):e($,{to:"#",children:"generate"})]}),e(S.Item,{children:e($,{to:"/changePassword",children:"Change Password"})})]})]})}),e(z,{style:{marginTop:"5%",marginBottom:"5%"},children:t&&n(S,{variant:"flush",children:[t.userType==="voter"&&n(w.Fragment,{children:[e(S.Item,{onClick:()=>s(!0),style:{cursor:"pointer"},children:"Register an Organisation"}),e(Ke,{show:o,setShow:s,setRedirect:x})]}),t.userType==="organiser"&&e($,{to:"/org",children:e(S.Item,{children:"Manage Organizations"})})]})})]}),e(E,{md:12,lg:8,children:n(z,{children:[e(z.Header,{children:"Elections"}),e(z.Body,{children:l&&n(Ee,{defaultActiveKey:"invited",className:"mb-3",children:[e(X,{eventKey:"invited",title:"Invited",children:g.length>0?e(S,{variant:"flush",children:g.map(m=>e($,{to:"#",children:e(S.Item,{children:m.title})},m._id))}):e(w.Fragment,{children:"Nothing here... "})}),e(X,{eventKey:"approved",title:"Approved",children:d.length>0?e(S,{variant:"flush",children:d.map(m=>e($,{to:"#",children:e(S.Item,{children:m.title})},m._id))}):e(w.Fragment,{children:"Nothing here... "})}),e(X,{eventKey:"applied",title:"Applied",children:p.length>0?e(S,{variant:"flush",children:p.map(m=>e($,{to:"#",children:e(S.Item,{children:m.title})},m._id))}):e(w.Fragment,{children:"Nothing here... "})}),e(X,{eventKey:"appeared",title:"Appeared",children:C.length>0?e(S,{variant:"flush",children:C.map(m=>e($,{to:"#",children:e(S.Item,{children:m.title})},m._id))}):e(w.Fragment,{children:"Nothing here... "})})]})})]})})]})})})})},Ye=[{name:"Email not entered",value:"1"},{name:"OTP sent from server",value:"2"},{name:"Change password",value:"3"}],Ze=[{name:"Email not pressed",value:"1"},{name:"OTP sent from server",value:"2"}],ce=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await A.put(`${H}/otp`,t,r)).data}catch(r){throw r}},de=async t=>{try{const r={headers:{"Content-Type":"application/json"}};return(await A.patch(`${H}/otp/verify`,t,r)).data}catch(r){throw r}},et=()=>{const{user:t,loading:r,setLoading:a,setUser:o}=i.exports.useContext(N),[s,l]=i.exports.useState("fetching..."),[h,g]=i.exports.useState(""),[f,p]=i.exports.useState(Ze[0].value),[v,d]=i.exports.useState(!1),[u,C]=i.exports.useState(!1),R=V();return i.exports.useEffect(()=>{a(!0),t&&(l(t.email),a(!1),t.emailVerified&&R("/dashboard",{replace:!0}))},[t]),e(D,{children:r?e(G,{}):e("div",{children:n(_,{children:[e("h1",{children:"Verify Email"}),u&&e(B,{variant:"success",children:u}),v&&e(B,{variant:"danger",children:v}),e(c,{onSubmit:async x=>{switch(x.preventDefault(),d(!1),C(!1),f){case"1":a(!0);const m="OTP for e-mail Verification";try{await ce({email:s,purpose:m}),p("2")}catch(y){console.log(y),y.response&&y.response.data.message?d(y.response.data.message):d(y.message)}a(!1);break;case"2":a(!0);try{await de({email:s,otp:h});const y=await Ve({email:s});C("Email has been verified"),o(y),R("/dashboard",{replace:!0})}catch(y){console.log(y),y.response&&y.response.data.message?d(y.response.data.message):d(y.message)}a(!1);break}},children:e(q,{className:"py-3",children:n(E,{children:[n(c.Group,{controlId:"email",children:[e(c.Label,{children:"Email Address"}),e(c.Control,{type:"email",placeholder:"Enter your email",value:s,disabled:!0,required:!0})]}),f==="2"&&n(c.Group,{controlId:"otp",children:[e(c.Label,{children:"OTP"}),e(c.Control,{type:"text",placeholder:"Enter OTP received on email",value:h,required:!0,onChange:x=>{d(!1),g(x.target.value)}})]}),e(q,{className:"py-3",children:e(E,{children:e(k,{type:"submit",variant:"primary",children:f=="1"?"Send OTP":"Verify Email"})})})]})})})]})})})},tt=()=>{const[t,r]=i.exports.useState("fetching..."),[a,o]=i.exports.useState(""),[s,l]=i.exports.useState(""),[h,g]=i.exports.useState(!1),[f,p]=i.exports.useState(!1),v=V(),{loading:d,user:u,setLoading:C}=i.exports.useContext(N);return i.exports.useEffect(()=>{C(!0),u&&(r(u.email),C(!1))},[u]),e(D,{children:d?e(G,{}):e("div",{children:n(_,{children:[e("h1",{children:"Change Password"}),f&&e(B,{variant:"success",children:f}),h&&e(B,{variant:"danger",children:h}),n(c,{onSubmit:async x=>{if(x.preventDefault(),g(!1),p(!1),a!==s){g("Passwords don't match");return}try{C(!0),await ie({email:t,password:a}),C(!1),p("Password changed.. Redirecting to dashboard"),setTimeout(()=>{v("/dashboard",{replace:!0})},[1e3])}catch(m){console.log(m),m.response&&m.response.data.message?g(m.response.data.message):g(m.message)}},onReset:async x=>{x.preventDefault(),o(""),l(""),g(!1),p(!1)},children:[n(c.Group,{controlId:"password",children:[e(c.Label,{children:"Password"}),e(c.Control,{type:"password",placeholder:"Enter new Password",value:a,required:!0,onChange:x=>{g(!1),o(x.target.value)}})]}),n(c.Group,{controlId:"confirmPassword",children:[e(c.Label,{children:"Confirm Password"}),e(c.Control,{type:"password",placeholder:"Confirm your new Password",value:s,required:!0,onChange:x=>{g(!1),l(x.target.value)}})]}),n(q,{className:"py-3",children:[e(E,{children:e(k,{type:"submit",variant:"primary",children:"Change Password"})}),e(E,{children:e(k,{type:"reset",variant:"primary",children:"Reset"})})]})]})]})})})},rt=t=>{const{isOpen:r,setIsOpen:a,handleDelete:o,_id:s}=t,l=()=>a(!1);return n(F,{show:r,onHide:l,centered:!0,children:[e(F.Header,{closeButton:!0,children:e(F.Title,{children:"Confirm Delete"})}),n(F.Body,{children:[e("p",{children:"Are you sure you want to delete ?"}),e("h4",{children:s})]}),n(F.Footer,{children:[e(k,{variant:"secondary",onClick:l,children:"Cancel"}),e(k,{variant:"danger",onClick:o,children:"Delete"})]})]})},at=()=>{const[t,r]=i.exports.useState(null),[a,o]=i.exports.useState(!1),[s,l]=i.exports.useState(null),{user:h}=i.exports.useContext(N),g=V();if(i.exports.useEffect(()=>{(async()=>{if(h){const d=await Ue(h);if(d.error)return;r(d.docs)}})()},[h,a]),!t)return n("div",{children:[e("h1",{children:"Manage My Organizations"}),e(G,{})]});const f=(d,u)=>{g(`/org/${d}/create-election`,{state:u})},p=d=>{l(d),o(d)},v=async d=>{if(console.log("delete called"),(await _e(d)).error){alert("Some error occured");return}o(!1)};return n("div",{children:[e(rt,{isOpen:a,setIsOpen:o,_id:s,handleDelete:()=>v(s)}),e("h1",{children:"Manage My Organizations"}),t.length===0?e("h3",{children:"No Organizations found!!"}):e(S,{as:"ol",numbered:!0,className:"",children:t==null?void 0:t.map(d=>{const{organisationName:u,_id:C}=d;return n(S.Item,{as:"li",className:"d-flex flex-row",children:[n($,{to:`/org/${C}`,style:{textDecoration:"none"},className:"flex-grow-1 px-3",children:[u,n("p",{children:["ID: ",C]})]}),e(k,{className:"align-self-center",onClick:()=>f(C,u),children:"Create Election"}),e("p",{className:"align-self-center text-danger m-3",style:{cursor:"pointer"},onClick:()=>p(C),children:"Delete"})]},C)})})]})},nt=()=>{let r=J().pathname.split("/")[2];return console.log(r),n("div",{children:["Election Details Page",e("h1",{children:r})]})};const st=()=>{const t=J();let r=t.pathname.split("/")[2],a=t.state;const[o,s]=i.exports.useState({title:"",openTimestamp:new Date,closeTimestamp:new Date}),[l,h]=i.exports.useState(null),[g,f]=i.exports.useState(null);i.exports.useContext(N);const p=async d=>{d.preventDefault();try{const u=await Je(o,r),{_id:C}=u;h(`/elections/${C}`)}catch(u){console.log(u.response),f(u.response.data)}},v=d=>{d.preventDefault(),h(`/org/${r}`)};return l?e(Q,{to:l,replace:!0}):n("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"70vh"},children:[e("h2",{className:"my-5",children:"Create an Election"}),n(c,{onSubmit:p,onReset:v,className:"bg-light rounded px-4 py-4",style:{background:"pink",minWidth:"40%"},children:[n(c.Group,{className:"my-4",controlId:"electionTitle",children:[e(c.Label,{children:"Title"}),e(c.Control,{type:"text",placeholder:"Enter election title",value:o.title,onChange:d=>{s(u=>L(T({},u),{title:d.target.value}))}})]}),n(c.Group,{className:"my-4",controlId:"organizer",children:[e(c.Label,{children:"Organization Name"}),e(c.Control,{type:"text",value:a,disabled:!0})]}),n("div",{className:"my-4",children:[e("label",{children:"Election Start Time"}),e("br",{}),e(oe,{className:"w-100",onChange:d=>{s(u=>L(T({},u),{openTimestamp:d}))},value:o.openTimestamp,minDate:new Date,required:!0})]}),n("div",{className:"my-4",children:[e("label",{children:"Election End Time"}),e("br",{}),e(oe,{className:"w-100",onChange:d=>{s(u=>L(T({},u),{closeTimestamp:d}))},value:o.closeTimestamp,minDate:o.openTimestamp})]}),e("br",{}),n("div",{className:"d-flex justify-content-center",children:[e(k,{variant:"secondary",type:"reset",className:"mx-4 px-3",children:"Discard"}),e(k,{variant:"success",type:"submit",className:"mx-4 px-4",children:"Save"})]})]}),g&&e(B,{variant:"danger",children:g})]})},ot=()=>{const[t,r]=i.exports.useState(""),[a,o]=i.exports.useState(""),[s,l]=i.exports.useState(""),[h,g]=i.exports.useState(""),[f,p]=i.exports.useState(!1),[v,d]=i.exports.useState(!1),[u,C]=i.exports.useState(Ye[0].value),R=V(),{isAuth:I,setIsAuth:x,loading:m,setLoading:y}=i.exports.useContext(N);return i.exports.useEffect(()=>{x("token"in localStorage),I&&(y(!1),R("/dashboard",{replace:!0}))},[I]),e(D,{children:m?e(G,{}):e(D,{children:e("div",{children:n(_,{children:[e("h1",{children:"Forgot Password"}),v&&e(B,{variant:"success",children:v}),f&&e(B,{variant:"danger",children:f}),n(c,{onSubmit:async M=>{if(M.preventDefault(),p(!1),d(!1),s!==h){p("Passwords don't match");return}switch(u){case"1":y(!0);const P="OTP for Forgot Password";try{await ce({email:t,purpose:P}),C("2")}catch(b){console.log(b),b.response&&b.response.data.message?p(b.response.data.message):p(b.message)}y(!1);break;case"2":y(!0);try{await de({email:t,otp:a}),C("3")}catch(b){console.log(b),b.response&&b.response.data.message?p(b.response.data.message):p(b.message)}y(!1);break;case"3":y(!0);try{await ie({email:t,password:s}),d("Password has been changed")}catch(b){console.log(b),b.response&&b.response.data.message?p(b.response.data.message):p(b.message)}y(!1);break}},children:[(u==="1"||u==="2")&&n(c.Group,{controlId:"email",children:[e(c.Label,{children:"Email Address"}),e(c.Control,{type:"email",placeholder:"Enter your email",value:t,required:!0,onChange:M=>{p(!1),r(M.target.value)}})]}),u==="2"&&n(c.Group,{controlId:"otp",children:[e(c.Label,{children:"OTP"}),e(c.Control,{type:"text",placeholder:"Enter OTP received on email",value:a,required:!0,onChange:M=>{p(!1),o(M.target.value)}})]}),u==="3"&&n(c.Group,{controlId:"password",children:[e(c.Label,{children:"Password"}),e(c.Control,{type:"password",placeholder:"Enter new Password",value:s,required:!0,onChange:M=>{p(!1),l(M.target.value)}})]}),u==="3"&&n(c.Group,{controlId:"confirmPassword",children:[e(c.Label,{children:"Confirm Password"}),e(c.Control,{type:"password",placeholder:"Confirm your new Password",value:h,required:!0,onChange:M=>{p(!1),g(M.target.value)}})]}),e(q,{className:"py-3",children:e(E,{children:e(k,{type:"submit",variant:"primary",children:u=="1"?"Send OTP":u=="2"?"Confirm OTP":"Change Password"})})})]})]})})})})};var lt="/assets/fourOfour.e2f25f95.jpeg";const it=()=>{const{loading:t,isAuth:r,setIsAuth:a}=i.exports.useContext(N);return i.exports.useEffect(()=>{a("token"in localStorage)}),e("div",{children:t?e(G,{}):n(D,{children:[n($,{to:r?"/dashboard":"/",children:[e(ke,{}),"Go back to the home page"]}),e("img",{src:lt})]})})},ct=()=>{const{user:t,setUser:r,setIsAuth:a,setLoading:o}=i.exports.useContext(N),s=localStorage.getItem("token"),[l,h]=i.exports.useState(!1);return i.exports.useEffect(()=>{(async()=>{if(s&&!t){const g=await Fe();g.error?(a(!1),o(!1),h(!0)):(r(g),a(!0))}})()},[s]),l?(localStorage.removeItem("token"),e(Q,{to:"/"})):(console.log("via private route"),s?e(le,{}):e(Q,{to:"/login"}))},dt=()=>(console.log("Organizer route"),e(le,{})),ut=()=>e("div",{children:"Dummy Route"}),ht=()=>n(Oe,{children:[e("main",{className:"App py-3 bg-gray",children:n(W,{children:[e(Me,{}),n(Ne,{children:[e(O,{path:"*",element:e(it,{})}),e(O,{exact:!0,path:"/",element:e(qe,{})}),e(O,{path:"/login",element:e(je,{})}),e(O,{path:"/signup",element:e(ze,{})}),e(O,{path:"/forgotpassword",element:e(ot,{})}),n(O,{path:"/",element:e(ct,{}),children:[e(O,{exact:!0,path:"/dashboard",element:e(Xe,{})}),e(O,{exact:!0,path:"/elections/:id",element:e(nt,{})}),e(O,{exact:!0,path:"/verifyEmail",element:e(et,{})}),e(O,{exact:!0,path:"/changePassword",element:e(tt,{})}),n(O,{path:"/org",element:e(dt,{}),children:[e(O,{path:"/org",element:e(at,{})}),e(O,{path:"/org/:id",element:e(ut,{})}),e(O,{path:"/org/:id/create-election",element:e(st,{})})]})]})]})]})}),e(Pe,{style:{width:"25em"}})]});Te.render(e(De,{children:e(ht,{})}),document.getElementById("root"));
