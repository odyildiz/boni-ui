import{r as l,u as N,R as E,j as t}from"./index-D2IM6ZdY.js";import{g as T}from"./Gallery-B1vOcegy.js";const L=[{id:5,nameTr:"Nude",nameEn:"Nude"},{id:6,nameTr:"TestTr",nameEn:"TestEn"},{id:7,nameTr:"testTr2",nameEn:"testEn2"},{id:8,nameTr:"testTr3",nameEn:"testEn3"},{id:9,nameTr:"testTr4",nameEn:"testEn4"},{id:10,nameTr:"testTr5",nameEn:"testEn5"},{id:11,nameTr:"testTr6",nameEn:"testEn6"}],k={labels:L},M=()=>{const[o,h]=l.useState(null),[j,m]=l.useState([]),[C,u]=l.useState(0),[x,f]=l.useState(!0),[n,w]=l.useState(null),{language:p}=N(),g=E.useRef(null),v=3;l.useEffect(()=>{b()},[n]);const b=()=>{u(e=>{const a=e*v,d=a+v,i=T.photos.filter(s=>!(s.labelIds.length==1&&s.labelIds.includes(5))&&(n?s.labelIds.includes(n):!0)),c=i.slice(a,d);return c.length>0?(m(e===0?c:s=>[...s,...c]),d>=i.length&&f(!1),e+1):(c.length===0&&n&&m([]),e)})};l.useEffect(()=>{const e=g.current;if(!e)return;const a=()=>{const{scrollLeft:i,scrollWidth:c,clientWidth:s}=e;c-(i+s)<300&&x&&b()},d=i=>{e.scrollLeft+=i.deltaY,a()};return e.addEventListener("wheel",d,{passive:!1}),e.addEventListener("scroll",a),()=>{e.removeEventListener("wheel",d),e.removeEventListener("scroll",a)}},[x]);function r(e){return e[p]}const y=e=>{u(0),w(e===n?null:e),f(!0)};return t.jsxs("div",{className:"h-screen flex flex-col px-2 md:px-4 overflow-hidden",children:[t.jsx("div",{className:"py-4 overflow-x-auto hide-scrollbar",children:t.jsx("div",{className:"inline-flex gap-4 px-4",children:k.labels.filter(e=>e.id!=5).map(e=>t.jsx("button",{onClick:()=>y(e.id),className:`px-6 py-2 rounded-full transition-colors border ${n===e.id?"bg-white text-black border-white":"bg-black/20 text-white hover:bg-black/40 border-gray-400/50"}`,children:p==="en"?e.nameEn:e.nameTr},e.id))})}),t.jsx("div",{ref:g,className:"flex-1 overflow-x-auto hide-scrollbar",children:t.jsx("div",{className:"inline-flex gap-4 md:gap-8 px-2 md:px-4 h-full items-center",children:j.map(e=>t.jsxs("div",{className:"min-w-[90vw] md:min-w-[300px] h-[80vh] md:h-[calc(100vh-12rem)] cursor-pointer flex-shrink-0 py-2 md:py-4",onClick:()=>h(e),children:[t.jsxs("div",{className:"relative group h-[90%] border border-gray-200/10 rounded-lg overflow-hidden",children:[t.jsx("img",{src:e.url,alt:r(e.title),className:"w-full h-full object-cover md:object-contain group-hover:opacity-90 transition-opacity"}),t.jsx("div",{className:"absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden flex items-center justify-center",children:t.jsxs("p",{className:"text-sm text-center",children:[r(e.description).split(" ").slice(0,10).join(" "),"..."]})})]}),t.jsx("p",{className:"mt-2 text-gray-600 text-center h-[10%] flex items-center justify-center text-sm md:text-base",children:r(e.title)})]},e.id))})}),o&&t.jsx("div",{className:"fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",onClick:()=>h(null),children:t.jsxs("div",{className:"max-w-7xl max-h-[90vh] flex flex-col md:flex-row gap-8 bg-white/5 p-4 md:p-8 rounded-lg w-full md:w-auto",onClick:e=>e.stopPropagation(),children:[t.jsx("div",{className:"flex-1 min-h-0",children:t.jsx("img",{src:o.url,alt:r(o.title),className:"w-full h-full object-contain"})}),t.jsxs("div",{className:"w-full md:w-80 text-white max-h-[30vh] md:max-h-[80vh] overflow-y-auto",children:[t.jsx("h2",{className:"text-2xl font-light mb-4",children:r(o.title)}),t.jsx("p",{className:"text-gray-300 leading-relaxed",children:r(o.description)})]})]})})]})};export{M as default};
