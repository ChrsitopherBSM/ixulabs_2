'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ModalProps {
  product: {
    category: string;
    title: string;
    src: string;
    description: string;
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Fondo oscuro traslúcido */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Caja del Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl z-10 p-12"
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"
        >
          ✕
        </button>

        {/* Contenido */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
              {product.category}
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-black max-w-lg">
              {product.title}
            </h2>
          </div>

          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-zinc-100">
            <Image 
              src={product.src} 
              alt={product.title} 
              fill 
              className="object-contain p-4"
            />
          </div>

          <p className="text-zinc-600 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}