'use client';
import Link from 'next/link';
import Image from 'next/image';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black p-6 flex flex-col animate-in fade-in duration-300">
      {/* Header del Menu */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onClose} className="text-2xl p-2">✕</button>
        <div className="flex gap-1 text-sm">✦✦</div>
        <div className="flex gap-6 text-[10px] font-bold tracking-widest uppercase">
          <span>Experience</span>
          <span>Buy it now</span>
        </div>
      </div>

      {/* Grid de Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
        
        {/* Lado Izquierdo: Galería de imágenes */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
            <Image src="/tech-image.jpg" alt="Tech" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold">Technology</p>
              <p className="text-sm opacity-80">Discover the tech within</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden row-span-2">
            <Image src="/ae1-main.jpg" alt="AE1" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold">AE.1</p>
              <p className="text-sm opacity-80">Your American-built adventure vehicle</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
            <Image src="/exp-image.jpg" alt="Experience" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold">Experience</p>
              <p className="text-sm opacity-80">Find your way into an AE.1</p>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Links Gigantes */}
        <div className="lg:col-span-5 flex flex-col justify-between py-10 pl-10 border-l border-gray-100">
          <div className="flex flex-col gap-4">
            {['AE.1', 'Technology', 'Experience', 'Buy it now'].map((item) => (
              <Link key={item} href="#" className="text-6xl font-medium tracking-tighter hover:translate-x-4 transition-transform border-b border-gray-100 pb-4">
                {item}
              </Link>
            ))}
          </div>

          {/* Footer del Menu */}
          <div className="grid grid-cols-2 gap-10 text-[11px] tracking-widest uppercase opacity-60">
            <div className="flex flex-col gap-2">
              <Link href="#">Company</Link>
              <Link href="#">Events</Link>
              <Link href="#">Press & Media</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#">Journal</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Specs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}