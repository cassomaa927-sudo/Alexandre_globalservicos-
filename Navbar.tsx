"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      className="fixed w-full z-50 p-4"
    >
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gold font-serif text-2xl font-bold">
          Alexandre Global
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-softBeige">
          {["Início", "Serviços", "Profissionais", "Sobre"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gold transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <button className="bg-gold text-deepCharcoal px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Entrar
        </button>
      </div>
    </motion.nav>
  );
}

