'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuOverlay from '../menuOverlay/MenuOverlay';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar color si es necesario
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md text-black' : 'bg-transparent text-white'}`}>
        
        {/* IZQUIERDA */}
        <div className="flex items-center flex-1 gap-10">
          <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-1.5 cursor-pointer group">
            <span className={`w-6 h-[1px] transition-all group-hover:w-8 ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`w-6 h-[1px] ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
          </button>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase">
            <Link href="#">AE.1</Link>
            <Link href="#">Technology</Link>
            <Link href="#">Specs</Link>
          </div>
        </div>

        {/* CENTRO */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 text-[10px] mb-1 opacity-80">✦✦</div>
          <h1 className="text-2xl font-bold tracking-[0.4em] uppercase leading-none">LIGHTSHIP</h1>
        </div>

        {/* DERECHA */}
        <div className="flex items-center justify-end flex-1 gap-10 text-[11px] font-medium tracking-[0.2em] uppercase">
          <Link href="#" className="hidden lg:block">Experience</Link>
          <Link href="#" className={`border px-6 py-2 rounded-full transition-all ${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white/60 hover:bg-white hover:text-black'}`}>
            Buy it now
          </Link>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}