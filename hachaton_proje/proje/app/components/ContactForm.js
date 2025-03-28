
const ContactForm = () => {
    return (
      <div className="w-full md:w-1/3 p-6">
        <h2 className="text-lg font-bold mb-4 text-black">Soru ve Öneri</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black placeholder-black">isim-soyisim *</label>
            <input type="text text-black" className="w-full border border-black p-4 rounded text-black placeholder-black" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black placeholder-black">E-posta *</label>
            <input type="email" className="w-full  border-black border p-4  rounded text-black placeholder-black" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black placeholder-black">İleti: *</label>
            <textarea className="w-full border-black border p-4 rounded h-24 text-black placeholder-black" required />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            GÖNDER
          </button>
        </form>
      </div>

      
    );
  };
  
  export default ContactForm;
  