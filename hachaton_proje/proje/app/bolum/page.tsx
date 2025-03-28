import image from "next/image";


export default function Bolum() {
    const testimonials = [
        {
        
          baskan: "Doç. Dr. Fatih YÜCALAR",
          dersAdi: "Yazılım Mühendisliği",
          tanitim:
            "Yazılım Mühendisliği, teknoloji çağının temelini oluşturan bir mühendislik dalıdır. Bilgisayar yazılımlarının tasarımı, geliştirilmesi, test edilmesi ve bakımı ile ilgilenir. ",
          foto: "/images/musharof.jpg",
        },
        {
          baskan: "Prof. Dr. Mustafa AYDIN",
          dersAdi: "Makine Mühendisliği",
          tanitim:
            "Makine Mühendisliği, insanlık tarihindeki en köklü ve geniş mühendislik dallarından biridir. Tasarım, analiz, üretim ve enerji sistemleri üzerinde odaklanarak mekanik çözümler sunar. .",
          foto: "/images/devid.jpg",
        },
        {
          baskan: "Prof. Dr.Eşref BAYSAL",
          dersAdi: "Enerji Sistemleri Mühendisliği",
          tanitim:
            "Enerji Sistemleri Mühendisliği, dünyanın enerji ihtiyaçlarına yenilikçi, verimli ve sürdürülebilir çözümler geliştiren disiplinler arası bir mühendislik dalıdır. ",
          foto: "/images/lethium.jpg",
        },
        {
          baskan: "Prof. Dr. İbrahim Fadıl SOYKÖK",
          dersAdi: "Mekatronik Mühendisliği",
          tanitim:
            "Mekatronik Mühendisliği; makine, elektronik, bilgisayar ve kontrol mühendisliğini bir araya getiren disiplinler arası bir mühendislik dalıdır. ",
          foto: "/images/lethium.jpg",
        },
        {
          baskan: "Doç.Dr. Kıvanç BAŞARAN",
          dersAdi: "Elektrik-Elektronik Mühendisliği",
          tanitim:
            "Elektrik-Elektronik Mühendisliği, teknolojinin kalbinde yer alan ve modern dünyayı şekillendiren bir mühendislik dalıdır. ",
          foto: "/images/lethium.jpg",
        },
      ];
    

    return (
        

      <section className="py-8 bg-gray-100 mt-8 w-screen h-screen">
  
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-20 justify-items-center items-center m-auto">
  <h2 className="text-2xl font-bold font-italic text-center mb-8 text-black">
    Bölümlerimiz
  </h2>
    {testimonials.map((testimonial, index) => (
      <div
        className="bg-white shadow-lg rounded-lg p-6 w-11/12 sm:w-80 text-center"
        key={index}
      >

        <h4 className="font-bold text-lg">{testimonial.dersAdi}</h4>
        <p className="italic text-gray-600 my-4">{testimonial.tanitim}</p>
        <p className="text-sm text-gray-500">{testimonial.baskan}</p>
      </div>
    ))}
  </div>
</section>

      
    );
  }