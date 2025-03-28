
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full arkaplanNav shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Sol tarafa logo ve isim */}
        <Link href="/" className="text-2xl font-bold text-white flex items-center space-x-4">
          {/* Logo'yu sola kaydırıp, biraz boşluk bırakıyoruz */}
          <div className="ml-4">
            <Image 
              src="/images/mcbu.png"
              width={50}
              height={50}
              alt="Logo"
              className="rounded-lg" /* Opsiyonel: Köşeleri yuvarlama */
            />
          </div>
          <span>Hasan Ferdi Turgutlu Teknoloji Fakültesi</span>
        </Link>

        {/* Menü */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-blue-600">Anasayfa</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">Okulumuz</Link></li>
          <li><Link href="/bolum" className="hover:text-blue-600">Bölümler</Link></li>
          <li><Link href="/misyon" className="hover:text-blue-600">Misyonumuz</Link></li>
          <li><Link href="/vizyon" className="hover:text-blue-600">Vizyonumuz</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
