import{j as e,r as n,c as P}from"./index-qn56y2Qj.js";import{B as M}from"./Button-HxdspLZI.js";import{s as q}from"./social-Q9tc5MZF.js";import{F as C,k as A,l as L}from"./index.es-JeIQETDG.js";import{i as T,s as $,M as H}from"./mail-AFKub2nI.js";function B({url:s,icon:l,name:o=null,value:d=null,color:t=null,gradient_color_1:m=null,gradient_color_2:r=null,type:i=1}){return i==1?e.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",className:"flex gap-1 h-full items-center rounded-md hover:bg-slate-50/10 px-1",children:[e.jsx("div",{className:"h-full max-h-4 aspect-square flex mt-1",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:l},className:"icon"})}),d&&e.jsx("span",{className:"text-sm font-link tracking-[0.5px]",children:d})]}):i==2?e.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",className:"flex gap-1 hover:underline",children:[e.jsx("div",{className:"h-full max-h-4 aspect-square flex mt-1",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:l},className:"icon",style:{fill:t}})}),e.jsx("span",{children:o})]}):i==3?e.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",className:"group relative w-[60px] h-[60px] rounded-[60px] cursor-pointer flex justify-center items-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-[0.5s] hover:w-[60px] sm:hover:w-[180px] hover:shadow-[0_10px_25px_rgba(0,0,0,0)]",children:[e.jsx("div",{className:"absolute inset-0 rounded-[50px] opacity-0 transition-all duration-[0.5s] group-hover:opacity-100",style:{background:`linear-gradient(45deg, ${m}, ${r})`}}),e.jsx("div",{className:"absolute top-[10px] w-full h-full rounded-[60px] opacity-0 transition-all duration-[0.5s] -z-1 blur-[15px] group-hover:opacity-[0.5]",style:{background:`linear-gradient(45deg, ${m}, ${r})`}}),e.jsx("div",{dangerouslySetInnerHTML:{__html:l},className:"icon fill-[#777] w-7 aspect-square delay-[0.25s] transition-all group-hover:scale-[1] sm:group-hover:scale-[0] group-hover:w-7 sm:group-hover:w-10 group-hover:fill-white"}),e.jsx("span",{className:"absolute text-white text-[1.1rem] uppercase tracking-[-1px] sm:tracking-[0.1rem] scale-0 transition-all duration-[0.5s] delay-[0s] group-hover:scale-[0] md:group-hover:scale-[1] group-hover:delay-[0.25s]",children:o})]}):"This type is not defined"}function D(){const[s,l]=n.useState(null),[o,d]=n.useState(null),[t,m]=n.useState(null),[r,i]=n.useState(null),[c,j]=n.useState(null),[v,p]=n.useState(""),[N,f]=n.useState(""),[b,x]=n.useState(""),[S,h]=n.useState(""),[y,a]=n.useState(""),[E,w]=n.useState(!1),[F,_]=n.useState(!1);n.useEffect(()=>{s==null&&o==null&&t==null&&r==null&&c==null||k()},[s,o,t,r,c]);const k=()=>{let u=!1;return s?p(""):(u=!0,p("Name is required")),T(o)?f(""):(u=!0,f("Email is invalid")),t?(t==null?void 0:t.length)<10?(u=!0,x("Phone is too short")):x(""):(u=!0,x("Phone is required")),r?(r==null?void 0:r.length)<10?(u=!0,h("Address is too short")):h(""):(u=!0,h("Address is required")),c?(c==null?void 0:c.length)<50?(u=!0,a("Minimum 50 characters")):a(""):(u=!0,a("Message is required")),u};return{name:s||"",setName:l,email:o||"",setEmail:d,phone:t||"",setPhone:m,address:r||"",setAddress:i,message:c||"",setMessage:j,nameError:v,emailError:N,phoneError:b,addressError:S,messageError:y,loading:E,isSent:F,setIsSent:_,handleSubmit:u=>{if(u.preventDefault(),E||k())return;w(!0),$({data:{name:s,email:o,phone:t,address:r,message:c}}).then(I=>{w(!1),I.success&&(l(null),d(null),m(null),i(null),j(null),p(""),f(""),x(""),h(""),a(""),_(!0))})}}}function Y(){const{name:s,setName:l,email:o,setEmail:d,phone:t,setPhone:m,address:r,setAddress:i,message:c,setMessage:j,nameError:v,emailError:p,phoneError:N,addressError:f,messageError:b,loading:x,isSent:S,setIsSent:h,handleSubmit:y}=D();return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:y,className:"flex flex-col w-[600px]  lg:w-full px-8 py-5 gap-3 rounded-lg bg-[#171640]",children:[e.jsx("h3",{className:" text-xl pb-1 sm:pl-3 text-center sm:text-start text-[var(--color1-txt1)]",children:"Send us a message"}),e.jsx(g,{error:v,value:s,onChange:({target:a})=>l(a.value),placeholder:"*Your name"}),e.jsx(g,{error:p,value:o,onChange:({target:a})=>d(a.value),placeholder:"*Your email"}),e.jsx(g,{error:f,value:r,onChange:({target:a})=>i(a.value),placeholder:"*Address home"}),e.jsx(g,{error:N,value:t,onChange:({target:a})=>m(a.value),placeholder:"*Phone Number"}),e.jsx(g,{error:b,value:c,onChange:({target:a})=>j(a.value),placeholder:"*Enter your message",type:"textarea"}),e.jsx("div",{className:"flex text-[#171640] w-full justify-center ",children:e.jsx(M,{style:"5",type:"1",_type:"submit",className:"bg-white  gap-2  items-center "+(x?"cursor-not-allowed opacity-50 hover:opacity-50 hover:bg-white hover:text-black":""),disabled:x,children:x?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:" font-title2",children:"Sending"})," ",e.jsx(C,{className:"text-sm ",icon:L,spin:!0})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:" font-title2",children:"Send"})," ",e.jsx(C,{className:"text-sm ",icon:A})]})})})]}),e.jsx(H,{isVisible:S,onClose:()=>h(!1)})]})}function g({error:s="",value:l="",onChange:o=null,type:d="text",placeholder:t,className:m=""}){const r="py-2 px-4 rounded-md w-full"+m+" "+(s?"border border-red-500":"");let i={value:l,onChange:o,placeholder:t,className:r};return e.jsxs("div",{className:"relative",children:[s&&e.jsxs("span",{className:"absolute top-2 right-2 text-red-400",children:["*",s]}),d=="textarea"?e.jsx("textarea",{...i}):e.jsx("input",{...i})]})}function O({isCol:s=!1}){return e.jsxs("div",{className:P("flex flex-col sm:px-[--padding]  items-center w-full gap-5 font-title2",{"lg:flex-col-reverse":s,"lg:flex-row":!s}),children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-10 items-center justify-center bg",children:[e.jsx("h3",{className:"text-3xl ",children:"Contact Us"}),e.jsx("div",{className:"px-1 sm:px-10",children:e.jsx("div",{className:"container flex flex-col xs:flex-row justify-center items-center gap-1 md:gap-5",children:q.map(({...l})=>e.jsx(B,{type:"3",...l},l.id))})}),e.jsx("div",{className:"pb-10 md:pb-0",children:e.jsxs(M,{to:"/about-us",style:"3",type:"2",className:"mt-2 mr-auto",children:[e.jsx("span",{children:"Do you need more info?"})," ",e.jsx("span",{children:"→"})]})})]}),e.jsx("div",{className:"flex-1 flex w-full justify-center pb-20",children:e.jsx(Y,{})})]})}export{O as S};
