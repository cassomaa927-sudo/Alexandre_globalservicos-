"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepCharcoal/50 to-deepCharcoal z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
          Connecting Businesses and <span className="text-gold">Digital Solutions.</span>
        </h1>
        <p className="text-softBeige/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Alexandre Global Serviços is a premium digital marketplace connecting businesses, 
          professionals and modern digital services in one ecosystem.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-gold text-deepCharcoal px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Explore Services
          </button>
          <button className="border border-gold text-gold px-8 py-3 rounded-full font-bold hover:bg-gold/10 transition-colors">
            Become a Partner
          </button>
        </div>
      </motion.div>
    </section>
  );
}
