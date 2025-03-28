"use client";

import Image from "next/image";

const links = [
  { title:"HFTTF - Mail", img: "/images/3.jpg", link: "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=22&ct=1711006274&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d699545d9-a2e3-c716-98f7-6d648a835e84&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c" },
  { title: "Lisans Programları", img: "/images/1.jpg", link: "http://localhost:3000/bolum" },
  { title: "Lisansüstü Programlar", img: "/images/2.jpg", link: "http://localhost:3000/bolum" },
  { title: "Akademik Takvim", img: "/images/4.jpg", link: "http://ogrenciisleri.mcbu.edu.tr/egitim-ogretim/akademik-takvim.5431.tr.html" },
  { title: "HFTTF Class", img: "/images/5.jpg", link: "http://ogrenciisleri.mcbu.edu.tr/" },
  { title: "Akademik Veri Yönetim Sistemi", img: "/images/6.jpg", link: "https://obsapp.mcbu.edu.tr/" },
];

export default function QuickLinks() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Hızlı Bağlantılar</h2>
        <a href="#" className="text-gray-500 hover:text-black text-sm">
          tüm bağlantılar →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}  
            target="_blank"    
            rel="noopener noreferrer"  
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <div className="w-20 h-20 mb-2">
              <Image src={link.img} alt={link.title} width={80} height={80} />
            </div>
            <span className="text-sm font-medium text-black">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}