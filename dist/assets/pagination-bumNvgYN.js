import{j as e,i as o}from"./index-UvTf3KTY.js";function p({name:t,rol:s,description:l="",photo:a,social:x,type:i=1}){return i==1?e.jsx("div",{className:"bg-[#eaecf8] hover:shadow-2xl hover:bg-white font-bold",children:e.jsxs("div",{className:"flex flex-col gap-3 items-center justify_center pb-5",children:[e.jsxs("div",{className:"relative flex flex-col justify-center items-center w-full h-48",children:[e.jsx("img",{src:"/img/card-team.jpg",style:{clipPath:"polygon(0 0, 100% 0, 100% 50%, 0 80%)"},className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute bottom-2 rounded-full overflow-hidden flex max-w-28 w-full items-center justify-center aspect-square",children:e.jsx("img",{src:a,className:"w-fill h-full object-contain"})})]}),e.jsxs("div",{className:"flex flex-col px-5 items-center gap-4 ",children:[e.jsxs("div",{className:"flex flex-col text-center gap-1",children:[e.jsx("h2",{className:"text-base font-link",children:t}),e.jsx("h3",{className:"text-sm opacity-60",children:s})]}),e.jsx("p",{className:"text-sm font-normal text-center opacity-85",children:l})]}),e.jsx("div",{className:"w-full h-0.5 bg-gray-200 my-2"}),e.jsx("div",{className:"flex items-center justify-center gap-4",children:x.map(({id:r,url:c,color:n,icon:d})=>e.jsx("a",{href:c,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:d},className:"icon h-5",style:{fill:n}})},r))})]})}):i==2?e.jsx("div",{className:"relative font-bold rounded-2xl h-56 flex justify-center",children:e.jsxs("div",{className:"group/team flex flex-col gap-3 items-center justify_center pb-5 relative w-full rounded-2xl transition-all h-full max-w-52",children:[e.jsx("img",{src:a,className:"group-hover/team:opacity-60 group-hover/team:-rotate-12 absolute w-full h-full  rounded-2xl object-cover transition-all"}),e.jsxs("div",{className:" w-full h-full absolute opacity-0 rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px]	group-hover/team:opacity-100 shadow-xl group-hover/team:rotate-6 transition-all delay-75 group-hover/team:delay-150 flex flex-col justify-center items-center",children:[e.jsx("div",{className:"flex flex-col items-center justify-center gap-4 pt-10 p-5 text-white text-center",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h2",{className:"text-xl leading-5",children:t}),e.jsx("span",{className:"opacity-75 text-nowrap tracking-tight",children:s})]})}),e.jsx("div",{className:"w-full h-[1px] bg-gray-100/25 my-2"}),e.jsx("div",{className:"flex items-center justify-center gap-4 pt-2",children:x.map(({id:r,url:c,color:n,icon:d})=>e.jsx("a",{href:c,className:"fill-white hover:fill-[var(--hover-color)]",style:{"--hover-color":n},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:d},className:"icon h-5"})},r))})]})]})}):i==3?e.jsxs("div",{className:"relative group/card bg-white text-black font-content flex flex-col  pb-5 mt-10 hover:mt-0 items-center rounded-lg transition-all ",children:[e.jsx("img",{src:a,className:"absolute bg-[--color1-bg] -top-7 max-w-32 aspect-square -translate-y-10 rounded-md shadow-xl group-hover/card:max-w-36 transition-all duration-200"}),e.jsxs("div",{className:"flex flex-col items-center pt-16 group-hover/card:pt-20 transition-all",children:[e.jsx("h2",{className:"font-title2 text-2xl",children:t}),e.jsx("span",{className:"text-lg opacity-80 -translate-y-1",children:s})]}),e.jsxs("div",{className:"flex flex-col gap-3 items-center  max-h-0 group-hover/card:max-h-48  group-hover/card:px-5 overflow-hidden transition-all duration-200",children:[e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx(m,{num:o.posts,text:"Posts"}),e.jsx(m,{num:o.followers,text:"Followers"}),e.jsx(m,{num:o.likes,text:"Likes"})]}),e.jsxs("div",{className:"flex flex-row gap-5 mb-1",children:[e.jsx(h,{text:"Follow",className:"bg-[--color1-bg] text-white",href:o.facebook_url,target:"_blank",rel:"noreferer"}),e.jsx(h,{text:"Message",className:"bg-white border-solid border border-gray-500",href:o.facebook_url,target:"_blank",rel:"noreferer"})]})]})]}):"The type is not declared"}function h({text:t,className:s,...l}){return e.jsx("a",{className:" py-1 px-4 rounded-md hover:scale-105 transition-all  shadow-sm "+s,...l,children:e.jsx("span",{className:"font-title2 opacity-85 text-lg",children:t})})}function m({num:t,text:s}){return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h3",{className:"font-title2 text-lg",children:t}),e.jsx("span",{className:"text-base opacity-90",children:s})]})}const f=[{id:2,name:"German Castro",rol:"Founder & CEO",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/2.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]},{id:3,name:"Jeison Castro",rol:"Senior Manager",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/3.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]},{id:4,name:"Deivis Castro",rol:"Sales Manager",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/4.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]},{id:5,name:"Diana Castro",rol:"Sales Representative",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/5.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]},{id:6,name:"Jonathan Aquino",rol:"Sales Representative",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/6.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]},{id:7,name:"Cristian Villavicencio",rol:"Advertisament",description:"At GA Castro Construction LLC, roofing is our passion, and quality is our promise. As experts in the field, we are committed to excellence and reliability. We've built our reputation on these principles.",photo:"./team/7.png",social:[{id:1,name:"Facebook",value:"@gacastroconstructionllc",url:"https://www.facebook.com/",color:"#3b5998",icon:"<svg viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>"}]}];export{p as T,f as t};
