
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">İletişim</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl">
        
        <a
          href="mailto:teknoloji.staj@cbu.edu.tr"
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 w-64"
        >
          <p className="text-xl font-semibold text-gray-700">Staj Birimi e-posta</p>
          <p className="text-blue-500 text-lg mt-2 whitespace-nowrap overflow-hidden">
            teknoloji.staj@cbu.edu.tr
          </p>
        </a>
        <a
          href="mailto:teknoloji.ogrenci@cbu.edu.tr"
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 w-64"
        >
          <p className="text-xl font-semibold text-gray-700">E-posta</p>
          <p className="text-blue-500 text-lg mt-2 whitespace-nowrap overflow-hidden">
            teknoloji.ogrenci@cbu.edu.tr
          </p>
        </a>

        
        <a
          href="tel:+902363141010"
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 w-64"
        >
          <p className="text-xl font-semibold text-gray-700">Telefon</p>
          <p className="text-blue-500 text-lg mt-2">0(236)314 10 10</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
