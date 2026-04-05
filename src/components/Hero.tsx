import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/34288a14-269f-45df-bb56-9c9466ae0eab/files/c267fe3c-4630-4482-a4a2-6bb1d0727995.jpg"
          alt="Удаление вмятин без покраски"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          БЕЗ СЛЕДА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Удаляем вмятины без покраски — быстро, незаметно, с гарантией результата
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Получить оценку
        </button>
      </div>
    </div>
  );
}