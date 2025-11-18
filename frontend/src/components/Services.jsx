import React from "react";


const SERVICES = [
{ alt: "Haircut", src: "/images/haircut01.png" },
{ alt: "Shave", src: "/images/shave01.png" },
{ alt: "Hair Dye", src: "/images/hairdyeing01.png" },
{ alt: "Massage", src: "/images/massage01.png" },
{ alt: "Skin Care", src: "/images/skincare02.png" },
];


export default function Services() {
return (
<section className="con-3" id="con-3" aria-label="Services we offer">
<p className="conp" style={{ marginRight: 24, alignSelf: "center" }}>Services offered by us</p>
{SERVICES.map((it, idx) => (
<div className="con-31" key={idx}>
<img className="img31" src={it.src} alt={it.alt} />
</div>
))}
</section>
);
}
