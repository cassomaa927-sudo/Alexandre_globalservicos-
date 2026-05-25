"use client";
import { motion } from "framer-motion";

const experts = [
  { name: "Alexandre", role: "Lead Architect", bio: "Especialista em soluções digitais e e-commerce." },
  { name: "Consultor", role: "Business Strategy", bio: "Focado em escalabilidade e crescimento B2B." },
  { name: "Designer", role: "Visual Identity", bio: "Especialista em branding de luxo e estética." },
];

export default function Professionals() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-white text-center mb-16">
        Nossos <span className="text-gold">Especialistas</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experts.map((expert, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl border border-gold/20 text-center"
          >
            <div className="w-24 h-24 bg-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center text-gold text-2xl font-bold">
              {expert.name[0]}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
            <p className="text-gold text-sm font-semibold mb-4">{expert.role}</p>
            <p className="text-softBeige/70 text-sm">{expert.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
