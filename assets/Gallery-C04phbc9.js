import{r as l,u as o,j as e}from"./index-Bvon9Esv.js";const c=[{id:2,url:"https://images.unsplash.com/photo-1470093851219-69951fcbb533",title:{tr:"Sokak Yaşamı",en:"Street Life"},description:{tr:"Farklı kültürlerin ve günlük yaşamın güzel bir kaos içinde kesiştiği şehir sokaklarının canlı enerjisini yakalıyor.",en:"Capturing the vibrant energy of city streets, where diverse cultures and daily life intersect in beautiful chaos."}},{id:1,url:"https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",title:{tr:"Şehir Manzarası",en:"Urban Landscape"},description:{tr:"Altın saatte şehir siluetinin muhteşem bir görünümü, modern mimariyi ve şehir planlamasını en iyi şekilde sergiliyor.",en:"A stunning view of the city skyline at golden hour, showcasing modern architecture and urban planning at its finest."}},{id:3,url:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",title:{tr:"Doğanın Yolu",en:"Nature"},description:{tr:"Eski ağaçların arasından kıvrılan huzurlu bir orman patikası, gezginleri doğanın gizli hazinelerini keşfetmeye davet ediyor.",en:"A serene forest trail winding through ancient trees, inviting wanderers to explore nature hidden treasures."}},{id:4,url:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e",title:{tr:"Dağ Manzarası",en:"Mountain View"},description:{tr:"Sabah sisini delen görkemli dağ zirveleri, doğal güzelliğin nefes kesen bir panoramasını oluşturuyor.",en:"Majestic mountain peaks piercing through morning mist, creating a breathtaking panorama of natural beauty."}},{id:6,url:"https://live.staticflickr.com/5470/25293649679_f13733a03a_b.jpg",title:{tr:"Mantar Altında Yaşam",en:"Life Under the Mushroom"},description:{tr:"Mantar Altında YaşamMantar Altında Yaşam",en:"Life Under the MushroomLife Under the MushroomLife Under the Mushroom"}}],d={photos:c},m=()=>{const[i,n]=l.useState(null),{getLocalizedText:r,language:s}=o();function t(a){return a[s]}return e.jsxs("div",{className:"pt-24 px-4 max-w-7xl mx-auto",children:[e.jsx("h1",{className:"text-4xl font-light mb-8",children:r("nav.gallery")}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.photos.map(a=>e.jsxs("div",{className:"cursor-pointer",onClick:()=>n(a),children:[e.jsxs("div",{className:"aspect-square bg-gray-100 relative group",children:[e.jsx("img",{src:a.url,alt:t(a.title),className:"w-full h-full object-cover group-hover:opacity-90 transition-opacity"}),e.jsx("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden",children:e.jsxs("p",{className:"text-sm",children:[t(a.description).split(" ").slice(0,10).join(" "),"..."]})})]}),e.jsx("p",{className:"mt-2 text-gray-600",children:t(a.title)})]},a.id))}),i&&e.jsx("div",{className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",onClick:()=>n(null),children:e.jsxs("div",{className:"max-w-7xl max-h-[90vh] flex flex-col md:flex-row gap-8 bg-white/10 p-4 md:p-8 rounded-lg w-full md:w-auto",onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"flex-1 min-h-0",children:e.jsx("img",{src:i.url,alt:t(i.title),className:"w-full h-full object-contain"})}),e.jsxs("div",{className:"w-full md:w-80 text-white max-h-[30vh] md:max-h-[80vh] overflow-y-auto",children:[e.jsx("h2",{className:"text-2xl font-light mb-4",children:t(i.title)}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:t(i.description)})]})]})})]})};export{m as default};
