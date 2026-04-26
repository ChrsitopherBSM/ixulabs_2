'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black px-12 py-20 border-t border-zinc-100">
      
      {/* 1. SECCIÓN SUPERIOR: Info y Links Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
        {/* Izquierda: Texto de Marca */}
        <div className="max-w-sm">
          <h3 className="text-xl font-medium mb-4">Go Further.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Lightship builds all-electric travel trailers for modern explorers. 
            Powered by innovation and driven by freedom, we’re redefining the 
            future of outdoor adventure.
          </p>
        </div>

        {/* Derecha: Menú Gigante */}
        <div className="flex flex-col text-4xl font-medium tracking-tighter gap-4">
          <Link href="#" className="border-b border-zinc-100 pb-4 hover:translate-x-2 transition-transform">AE.1</Link>
          <Link href="#" className="border-b border-zinc-100 pb-4 hover:translate-x-2 transition-transform">Technology</Link>
          <Link href="#" className="border-b border-zinc-100 pb-4 hover:translate-x-2 transition-transform">Experience</Link>
          <Link href="#" className="border-b border-zinc-100 pb-4 hover:translate-x-2 transition-transform">Buy it now</Link>
        </div>
      </div>

      {/* 2. SECCIÓN MEDIA: Newsletter y Links Secundarios */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        
        {/* Newsletter */}
        <div className="lg:col-span-5">
          <p className="text-[10px] font-bold tracking-widest uppercase mb-6">Newsletter</p>
          <form className="flex flex-wrap gap-4">
            <input 
              type="text" 
              placeholder="Zip code" 
              className="flex-1 min-w-[120px] border border-zinc-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <div className="flex-grow flex border border-zinc-200 rounded-full overflow-hidden">
              <input 
                type="email" 
                placeholder="name@email.com" 
                className="flex-grow px-6 py-3 text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                Register <span>→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Links Columnas */}
        <div className="lg:col-span-2 text-xs flex flex-col gap-3 font-medium">
          <Link href="#" className="hover:opacity-60 transition-opacity">Company</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Events</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Contact</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Specs</Link>
        </div>

        <div className="lg:col-span-2 text-xs flex flex-col gap-3 font-medium">
          <Link href="#" className="hover:opacity-60 transition-opacity">Journal</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Careers</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Press & Media</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">FAQ</Link>
        </div>

        {/* Redes Sociales */}
        <div className="lg:col-span-3 flex justify-end gap-6 text-lg">
          <Link href="#" className="hover:opacity-50">Instagram</Link>
          <Link href="#" className="hover:opacity-50">Facebook</Link>
          <Link href="#" className="hover:opacity-50">LinkedIn</Link>
          <Link href="#" className="hover:opacity-50">X</Link>
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: Disclaimer y Legal */}
      <div className="pt-10 border-t border-zinc-100">
        <p className="text-[10px] text-zinc-400 leading-relaxed max-w-5xl mb-12">
          (1) "Starting at" payments are estimates only. For example, a purchase price of $157,500 with a 20% down payment ($31,500) financed at 6.74% APR for 240 months results in a monthly payment of $977. Your actual payment, down payment, and interest rate will vary based on credit approval, lender requirements, and final vehicle configuration. Advertised rates and terms are subject to change without notice. Monthly payment excludes tax, title, registration, and any applicable dealer or documentation fees.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-400 tracking-widest uppercase">
          <p>© Copyright 2026, Lightship.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}