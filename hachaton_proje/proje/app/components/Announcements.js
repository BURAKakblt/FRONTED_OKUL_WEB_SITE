'use client';

import { useState } from 'react';

const announcements = [
  { date: '25 Mar', title: 'Ders Devamlılığına İlişkin Önemli Hatırlatma' },
  { date: '19 Mar', title: '2025 YÖK Üstün Başarı Ödülleri için başvurular başlıyor' },
  { date: '18 Mar', title: 'İŞKUR Gençlik Programı Yedek Adayların Birim Çalışma Dağılım Listeleri' },
  { date: '13 Mar', title: '"Mühendislikte Sürdürülebilir Çözümler" Sempozyumu' },
  { date: '05 Mar', title: 'Sözleşmeli Bilişim Personeli Yazılı Ve Sözlü Sınavına Girmeye Hak Kazanan Adaylara İlişkin Duyuru' },
];

export default function Announcements() {
  const [year, setYear] = useState('2025');
  const [month, setMonth] = useState('Mart');

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">HFTTF DUTYURULAR</h1>
      <div className="flex gap-2 mb-4">
        <select
          className="border border-black p-2 rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option className="text-black">2025</option>
          <option className="text-black">2024</option>
        </select>
        <select
          className="border border-black p-2 rounded"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option>Mart</option>
          <option>Şubat</option>
        </select>
      </div>
      <div className="space-y-4">
        {announcements.map((ann, index) => (
          <div key={index} className="flex items-center gap-4 border-b border-black pb-2">
            <div className="arkaplanRenk3 text-white p-2 rounded text-center w-14">
              <span className="block text-lg font-bold">{ann.date.split(' ')[0]}</span>
              <span className="block text-sm">{ann.date.split(' ')[1]}</span>
            </div>
            <p className="text-lg text-black">{ann.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}