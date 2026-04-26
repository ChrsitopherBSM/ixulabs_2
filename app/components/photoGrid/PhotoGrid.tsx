'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PhotoGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.4], [300, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.4], [500, 0]);
  const xLeft = useTransform(scrollYProgress, [0, 0.4], [-200, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[180vh] bg-white py-20">
      <div className="sticky top-28 w-full max-w-7xl mx-auto grid grid-cols-12 gap-4 h-[75vh] px-6">
        
        {/* Superior Izquierda */}
        <motion.div style={{ x: xLeft, y: y1 }} className="col-span-4 bg-zinc-200 rounded-3xl h-[45%]" />

        {/* Central Larga */}
        <motion.div style={{ y: y2, scale }} className="col-span-4 row-span-2 bg-zinc-300 rounded-3xl h-full" />

        {/* Superior Derecha */}
        <motion.div style={{ x: xRight, y: y1 }} className="col-span-4 bg-zinc-200 rounded-3xl h-[45%]" />

        {/* Inferior Izquierda */}
        <motion.div style={{ x: xLeft, y: y2 }} className="col-span-4 bg-zinc-100 rounded-3xl h-[50%] mt-[-10%]" />

        {/* Inferior Derecha */}
        <motion.div style={{ x: xRight, y: y2 }} className="col-span-4 bg-zinc-100 rounded-3xl h-[40%] mt-4" />
      </div>
    </section>
  );
}