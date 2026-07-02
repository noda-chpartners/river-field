import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '鑑定メニュー', href: '#menu' },
    { label: '占術', href: '#fortune' },
    { label: 'マスター紹介', href: '#about' },
    { label: '基本情報', href: '#information' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-background-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
        : 'bg-transparent'
        }`}
    >
      <div className="px-6 md:px-10 py-4 flex items-center justify-between w-full">
        <a href="#" className="flex items-center group">
          <img
            src={logo}
            alt="River Field"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground-700 hover:text-accent-400 transition-colors duration-300 text-sm tracking-wider whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-9 h-9 flex items-center justify-center text-foreground-700"
          aria-label="メニュー"
        >
          <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-68 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-background-50/98 backdrop-blur-md px-6 pb-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground-700 hover:text-accent-400 transition-colors duration-300 text-sm tracking-wider py-2 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}