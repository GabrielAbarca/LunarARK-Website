import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShinyText from "../../TextAnimations/ShinyText/ShinyText.jsx";
import CartIcon from "../Icons/CartIcon.jsx";
import GlobeIcon from "../Icons/GlobeIcon.jsx";
import { cn } from "../../lib/utils";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-4xl md:text-7xl font-gugi text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white mb-8 tracking-wider"
        >
          Become The Ultimate Survivor
          <motion.span 
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          />
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <ShinyText
            text="A new era of ARK Survival Evolved servers, join us on our journey!"
            disabled={false}
            speed={3}
            className="text-sm md:text-lg text-gray-300 font-montserrat tracking-wide"
          />
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center"
        >
          <Link 
            to="/servers" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-neon-blue/50 rounded-lg text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,255,213,0.3)] transition-all duration-300"
          >
            <GlobeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <p className="font-bold tracking-wider uppercase">Browse Servers</p>
          </Link>
          
          <a
            href="https://lunarark-50x-ase.tebex.io/category/ranks"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-neon-green/50 rounded-lg text-neon-green hover:bg-neon-green/10 hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,254,140,0.3)] transition-all duration-300"
          >
            <CartIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <p className="font-bold tracking-wider uppercase">View Bundles</p>
          </a>
        </motion.section>
      </div>
    </main>
  );
}
