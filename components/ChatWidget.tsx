"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão Flutuante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <span className="text-deepCharcoal text-2xl">💬</span>
      </button>

      {/* Janela de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 h-96 glass-card rounded-2xl p-6 border border-gold/30 flex flex-col"
          >
            <h3 className="text-white font-bold mb-4">Atendimento VIP</h3>
            <div className="flex-1 overflow-y-auto text-softBeige/80 text-sm">
              Olá! Sou o assistente virtual da Alexandre Global. Como posso ajudar você hoje? 🚀
            </div>
            <input 
              type="text" 
              placeholder="Digite sua mensagem..." 
              className="mt-4 w-full bg-deepCharcoal/50 border border-gold/20 rounded-lg p-2 text-white placeholder-softBeige/50"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
