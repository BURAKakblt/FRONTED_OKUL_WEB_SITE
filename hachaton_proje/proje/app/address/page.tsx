

import React from "react";
import { MapPin } from "lucide-react";

const Address = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Adres</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        Manisa Celal Bayar Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi
      </p>
      
      <a
        href="https://www.google.com/maps/place/Hasan+Ferdi+Turgutlu+Teknoloji+Fak%C3%BCltesi/@38.495129,27.705769,15z"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 flex flex-col items-center p-6"
      >
        <MapPin size={48} className="text-red-500 mb-2" />
        <p className="text-lg font-semibold text-gray-800">Haritada Görüntüle</p>
      </a>
      
      <p className="text-lg font-semibold text-gray-800 mt-4">
        Hasan Ferdi Turgutlu Teknoloji Fakültesi
      </p>
    </div>
  );
};

export default Address;