'use client';
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import ProductModal from '../productModal/ProductModal'; // Nuevo componente

const slides = [
  { 
    id: 1, 
    category: 'TrekDrive', 
    title: 'Twice the Efficiency. All the Freedom.', 
    src: '/car-1.jpg',
    description: 'The TrekDrive™ system is where the intelligence and muscle come together on the AE.1. TrekDrive is designed with intelligent vehicle assist technology delivering self-propulsion and our proprietary smart hitch with two-way force sensing.'
  },
  { 
    id: 2, 
    category: 'CampQuiet', 
    title: 'Quiet Comes Standard.', 
    src: '/car-2.jpg',
    description: 'Enjoy nature without the noise. Our CampQuiet technology ensures all systems run silently, allowing you to experience the outdoors in its purest form.'
  },
  { 
    id: 3, 
    category: 'Aero-Electric', 
    title: 'Built to Win. Designed to Transform.', 
    src: '/car-3.jpg',
    description: 'State-of-the-art aerodynamics meets electric efficiency. Every curve is engineered to reduce drag and maximize your range on the road.'
  }
];

export default function ProductCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<typeof slides[0] | null>(null);

  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current) {
        setMaxScroll(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    calculateBounds();
    window.addEventListener('resize', calculateBounds);
    return () => window.removeEventListener('resize', calculateBounds);
  }, []);

  return (
    <section className="bg-white py-24 px-12 overflow-hidden select-none relative">
      <motion.div 
        ref={containerRef}
        drag="x"
        style={{ x }}
        dragConstraints={{ right: 0, left: -maxScroll }}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-[45vw] h-[60vh] relative rounded-[2rem] overflow-hidden group flex-shrink-0">
            <Image src={slide.src} alt={slide.title} fill className="object-cover" draggable={false} />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">{slide.category}</p>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-medium tracking-tight max-w-[280px]">{slide.title}</h3>
                <button 
                  onClick={() => setSelectedProduct(slide)} // Abre el modal con la data del slide
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal - Se controla con AnimatePresence para el fade-out */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}