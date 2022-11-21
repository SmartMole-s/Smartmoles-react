(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[14],{794:function(e,t,a){"use strict";var c=a(7),i=a.n(c),r=a(218),s=a(0),n=a(727),j=a(1);const l=Object(s.forwardRef)(((e,t)=>{let{children:a,title:c="",meta:i,...s}=e;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.a,{children:[Object(j.jsx)("title",{children:`${c} | Minimal-UI`}),i]}),Object(j.jsx)(n.a,{ref:t,...s,children:a})]})}));l.propTypes={children:i.a.node.isRequired,title:i.a.string,meta:i.a.node},t.a=l},795:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(797),i=a(727),r=a(1);function s(e){let{ratio:t,disabledEffect:a=!1,effect:s="blur",onclick:j,sx:l,...o}=e;return t?Object(r.jsx)(i.a,{component:"span",onClick:j,sx:{width:1,lineHeight:0,display:"block",overflow:"hidden",position:"relative",pt:n(t),"& .wrapper":{top:0,left:0,right:0,bottom:0,lineHeight:0,position:"absolute",backgroundSize:"cover !important"},...l},children:Object(r.jsx)(i.a,{component:c.LazyLoadImage,wrapperClassName:"wrapper",effect:a?void 0:s,placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},...o})}):Object(r.jsx)(i.a,{component:"span",sx:{lineHeight:0,display:"block",overflow:"hidden","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"},...l},children:Object(r.jsx)(i.a,{component:c.LazyLoadImage,wrapperClassName:"wrapper",effect:a?void 0:s,placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"},...o})})}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[e]}},802:function(e,t,a){"use strict";var c=a(2),i=a(6),r=a(0),s=a(8),n=a(714),j=a(9),l=a(11),o=a(782),d=a(340),h=a(715);function b(e){return Object(d.a)("MuiCard",e)}Object(h.a)("MuiCard",["root"]);var m=a(1);const p=["className","raised"],x=Object(j.a)(o.a,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),O=r.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiCard"}),{className:r,raised:j=!1}=a,o=Object(i.a)(a,p),d=Object(c.a)({},a,{raised:j}),h=(e=>{const{classes:t}=e;return Object(n.a)({root:["root"]},b,t)})(d);return Object(m.jsx)(x,Object(c.a)({className:Object(s.a)(h.root,r),elevation:j?8:void 0,ref:t,ownerState:d},o))}));t.a=O},817:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return O}));var c=a(27),i=a(9),r=a(34),s=a(728),n=a(727),j=a(795),l=a(1);const o=Object(i.a)("h1")((e=>{let{theme:t}=e;return{top:0,right:0,bottom:0,left:0,zIndex:9,position:"absolute","&:hover":{transition:"all 2s ease",backgroundColor:"transparent"},backgroundColor:Object(r.a)(t.palette.grey[900],.62)}})),d=Object(i.a)("h1")((e=>{let{theme:t}=e;return{...t.typography.h5,top:0,zIndex:10,width:"100%",position:"absolute",padding:t.spacing(3),color:t.palette.common.white,[t.breakpoints.up("lg")]:{padding:t.spacing(4)}}}));function h(e){let{title:t,cover:a,pathname:i}=e;return Object(l.jsx)(s.a,{to:i,color:"inherit",underline:"hover",component:c.b,children:Object(l.jsxs)(n.a,{sx:{position:"relative"},children:[Object(l.jsx)(o,{}),Object(l.jsx)(d,{children:t}),Object(l.jsx)(j.a,{alt:"SmartMole's",src:a,ratio:"16/9"})]})})}var b=a(780),m=a(58);const p=Object(i.a)("div")((e=>{let{theme:t}=e;return{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"linear-gradient(#00000059, #0000008a),url(/static/slider/gallery.jpg)",padding:t.spacing(10,0),[t.breakpoints.up("md")]:{height:560,padding:0}}})),x=Object(i.a)("div")((e=>{let{theme:t}=e;return{textAlign:"center",[t.breakpoints.up("md")]:{textAlign:"left",position:"absolute",bottom:t.spacing(10)}}}));function O(){return Object(l.jsx)(p,{children:Object(l.jsx)(b.a,{component:m.b,sx:{position:"relative",height:"100%"},children:Object(l.jsxs)(x,{children:[Object(l.jsx)(m.d,{text:"SmartMole's",sx:{color:"primary.main"},variants:Object(m.f)().inRight}),Object(l.jsx)("br",{}),Object(l.jsx)(n.a,{sx:{display:"inline-flex",color:"common.white"},children:Object(l.jsx)(m.d,{sx:{typography:"h3"},text:"Foto\u011fraf\xa0Galerisi"})})]})})})}a(802)},946:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var c=a(780),i=a(778),r=a(771),s=a(802),n=a(9),j=a(794),l=a(817),o=a(1);const d=Object(n.a)("div")((e=>{let{theme:t}=e;return{paddingTop:t.spacing(8),[t.breakpoints.up("md")]:{paddingTop:t.spacing(11)}}})),h=Object(n.a)("div")((()=>({"&:hover":{transform:"scale(1.1)",filter:"drop-shadow(2px 4px 6px black)",transition:"all 1s ease",cursor:"pointer"}})));function b(){return Object(o.jsx)(j.a,{title:"Foto\u011fraf",children:Object(o.jsxs)(d,{children:[Object(o.jsx)(l.b,{}),Object(o.jsxs)(c.a,{sx:{my:10},children:[Object(o.jsx)(i.a,{variant:"h3",sx:{my:8,textAlign:"center"},children:"Foto\u011fraf Galerisi"}),Object(o.jsxs)(r.a,{container:!0,spacing:10,children:[Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"growtech-fuari",title:"Growtech Fuar\u0131",cover:"/static/images/growtech/Growtech-2.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"peyzaj-alanlari",title:"Peyzaj Alanlar\u0131",cover:"/static/images/peysage/1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"seralar",title:"Seralar",cover:"/static/images/greenhouse/1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"tarim-alanlari",title:"Tar\u0131m Alanlar\u0131",cover:"/static/images/farm/smartmoles-2.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"aycicegi",title:"Ay\xe7i\xe7e\u011fi",cover:"/static/images/aycicegi/aycicegi1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"bag",title:"Ba\u011f",cover:"/static/images/bag/bag01.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"ceviz",title:"Ceviz",cover:"/static/images/ceviz/ceviz1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"cim",title:"\xc7im",cover:"/static/images/cim/cim01.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"elma",title:"Elma",cover:"/static/images/elma/elm1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"hurma",title:"Hurma",cover:"/static/images/hurma/hurma001.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"kiraz",title:"Kiraz",cover:"/static/images/kiraz/kirazpompa.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"leylandi",title:"Leylandi",cover:"/static/images/leylandi/leylandi.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"misir",title:"M\u0131s\u0131r",cover:"/static/images/misir/misir1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"muz",title:"Muz",cover:"/static/images/muz/muz1.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"yonca",title:"Yonca",cover:"/static/images/yonca/yonca01.jpg"})})})}),Object(o.jsx)(r.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(h,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(l.a,{pathname:"zeytin",title:"Zeytin",cover:"/static/images/zeytin/zeytin01.jpg"})})})})]})]})]})})}}}]);
//# sourceMappingURL=14.247f2cf8.chunk.js.map