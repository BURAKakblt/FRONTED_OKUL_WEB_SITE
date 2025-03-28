export default function ResearchProjects() {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen arkaplanRenk2 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          BİLİMSEL ARAŞTIRMA PROJELERİ
        </h2>
  
        <div className="flex flex-wrap items-center justify-center w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
          {/* Sol Taraf (Yazılar) */}
          <div className="w-full md:w-1/3 text-center md:text-left p-4">
            <p className="text-xl font-bold text-blue-700">2024 YILI</p>
            <p className="text-4xl font-bold text-orange-600">1.553+ Proje</p>
            <div className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 inline-block">
              323.188.731 + Yıllık Proje Bütçesi
            </div>
          </div>
  
          {/* Orta Kısım (Görsel) */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="images/tubitak-ofisus.jpg"
              alt="Bilimsel Araştırma"
              className="w-48 h-48 object-contain"
            />
          </div>
  
          {/* Sağ Taraf (Yazılar) */}
          <div className="w-full md:w-1/3 text-center md:text-left p-4">
            <ul className="list-disc list-inside text-gray-700">
              <li>Strateji ve Bütçe Başkanlığı Projeleri</li>
              <li>Bilimsel Araştırma Projeleri</li>
              <li>TÜBİTAK Projeleri</li>
              <li>TÜSEB Projeleri</li>
              <li>TENMAK Projeleri</li>
              <li>AB Projeleri</li>
              <li>Diğer Uluslararası Projeler</li>
            </ul>
          </div>
        </div>
  
        {/* Detaylı Bilgi Butonu */}
        <button className="mt-6 arkaplanRenk3 text-white px-6 py-2 rounded-md bg-#385170 hover:bg-blue-600">
          Ayrıntılı Bilgi
        </button>
      </div>
    );
  }
  