"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Web Design", desc: "Interfaces elegantes e modernas." },
  { title: "Web Development", desc: "Código robusto e escalável." },
  { title: "Branding", desc: "Identidade visual de luxo." },
  { title: "AI Solutions", desc: "Inovação com inteligência artificial." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-white text-center mb-16">
        Nossos <span className="text-gold">Serviços</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-softBeige/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
