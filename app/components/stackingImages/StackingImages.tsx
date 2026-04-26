'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Datos de ejemplo para las imágenes
const imagesData = [
  { id: 1, src: '/img-stack-1.jpg', title: 'Technology' },
  { id: 2, src: '/img-stack-2.jpg', title: 'AE.1' },
  { id: 3, src: '/img-stack-3.jpg', title: 'Experience' },
  { id: 4, src: '/img-stack-4.jpg', title: 'Adventure' },
];

export default function StackingImages() {
  const containerRef = useRef(null);
  
  // hook useScroll para rastrear el progreso dentro del contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // La animación ocurre mientras el contenedor cruza la pantalla
  });

  return (
    <section ref={containerRef} className="relative bg-white text-black min-h-[400vh]">
      {/* Contenedor Sticky que mantiene la vista fija */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-12 py-24">
        
        {/* Mapeo de imágenes */}
        {imagesData.map((image, index) => {
          
          // Calculamos el rango de scroll para cada imagen
          // Por ejemplo para 4 imagenes: 
          // imagen 1: [0, 0.25]
          // imagen 2: [0.25, 0.5]
          // imagen 3: [0.5, 0.75]
          // imagen 4: [0.75, 1]
          const start = index / imagesData.length;
          const end = (index + 1) / imagesData.length;

          // Transformaciones basadas en el rango calculado
          // La imagen sube desde 100% de la altura de la pantalla (y: '100%') hasta su posición final (y: 0)
          const y = useTransform(scrollYProgress, [start, end], ['100%', '0%']);
          
          // Opcional: Pequeño efecto de escala para dar profundidad al encimarse
          const scale = useTransform(scrollYProgress, [start, end], [1.05, 1]);

          return (
            <motion.div
              key={image.id}
              style={{ y, scale, zIndex: index + 1 }} // El zIndex asegura el stacking correcto
              className="absolute w-[80vw] h-[70vh] rounded-3xl overflow-hidden shadow-2xl origin-bottom"
            >
              <Image 
                src={image.src} 
                alt={image.title} 
                fill 
                className="object-cover" 
                sizes="80vw"
              />
              {/* Overlay de texto opcional similar a tus imágenes de referencia */}
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-sm tracking-widest uppercase opacity-70">✦✦</p>
                <h3 className="text-4xl font-bold tracking-tighter mt-2">{image.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}