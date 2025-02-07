import{a as d,b as x,u as m,j as e}from"./index-Ct4jtFXp.js";function p(){const{items:a,removeFromCart:c,updateQuantity:r,getTotalPrice:n,emptyCart:i}=d(),l=x(),{getLocalizedText:t,getLocalizedPath:o}=m();return e.jsxs("div",{className:"container mx-auto p-4",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h1",{className:"text-2xl font-bold",children:t("cart.title")})}),a.length===0?e.jsx("p",{children:t("cart.empty")}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"space-y-4",children:a.map(s=>e.jsxs("div",{className:"flex items-center gap-4 border p-4 rounded",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-24 h-24 object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold",children:s.name}),e.jsxs("p",{className:"text-lg",children:["$",s.price.toFixed(2)]}),e.jsx("div",{className:"flex items-center gap-4 mt-2",children:e.jsxs("div",{className:"flex items-center border border-[#C8B6A6] rounded",children:[e.jsx("button",{onClick:()=>r(s.id,-1),className:"px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors",children:"-"}),e.jsx("span",{className:"px-3 py-1 text-gray-700 border-x border-[#C8B6A6]",children:s.quantity}),e.jsx("button",{onClick:()=>r(s.id,1),className:"px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors",children:"+"})]})})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-semibold text-lg mb-2",children:["$",(s.price*s.quantity).toFixed(2)]}),e.jsx("button",{onClick:()=>c(s.id),className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors",children:t("cart.remove")})]})]},s.id))}),e.jsxs("div",{className:"mt-8 border-t pt-4",children:[e.jsxs("p",{className:"text-xl font-bold mb-4",children:[t("cart.total"),": $",n().toFixed(2)]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>l(o("/shipment")),className:"bg-[#C8B6A6] text-white px-8 py-2 rounded hover:bg-[#A4907C] transition-colors",children:t("cart.proceedToShipment")}),e.jsx("button",{onClick:i,className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors",children:t("cart.emptyCart")})]})]})]})]})}export{p as default};
