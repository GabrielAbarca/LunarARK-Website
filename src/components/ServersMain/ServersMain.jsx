import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ServersMain() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <main className="w-full pt-32 md:pt-40 pb-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-gugi text-center text-neon-blue mb-16 tracking-wider drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]"
        >
          Lunar ARK Servers
          <motion.span 
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          />
        </motion.h1>
      </div>
    </main>
  );
}
