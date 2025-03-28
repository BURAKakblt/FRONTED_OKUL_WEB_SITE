
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white arkaplanNav py-8 text-center">
      {}
      <nav className="mb-4">
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <Link href="/about" className="hover:underline">
              Hakkında
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              İletişim
            </Link>
          </li>
          <li>
            <Link href="/address" className="hover:underline">
              Adres
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:underline">
              Gizlilik Politikası
            </Link>
          </li>
        </ul>
      </nav>

      {}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.facebook.com/hfttf/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <Facebook size={24} />
        </a>
        <a href="https://x.com/mcbu1992/status/1098495031248330752?lang=gl" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <Twitter size={24} />
        </a>
        <a href="https://www.instagram.com/mcbuhftteknoloji?igsh=MXMzMjlvZGU3YzYweA==" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <Instagram size={24} />
        </a>
        <a href="https://youtu.be/T7-EKH7slPI?si=DvL8NUXJWBAKTWwX" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <Youtube size={24} />
        </a>
        <a href="https://www.linkedin.com/school/mcbu1992/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <Linkedin size={24} />
        </a>
      </div>

      {}
      <p className="text-sm text-gray-400">Hasan Ferdi Turgutlu Teknoloji Fakültesi {new Date().getFullYear()} </p>
    </footer>
  );
};

export default Footer;
