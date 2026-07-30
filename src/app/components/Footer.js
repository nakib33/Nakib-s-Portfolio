// app/components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          &copy; 2026 Nakib Uddin Ahmed
        </p>
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <a
            href="https://github.com/nakib33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-500">-</span>
          <a
            href="https://www.linkedin.com/in/nakib33/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-500">-</span>
          <a
            href="mailto:nakibuddin33@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <span className="text-gray-500">-</span>
          <Link
            href="/pages/contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
