export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-deepCharcoal py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-gold font-bold mb-4">Alexandre Global</h4>
          <p className="text-softBeige/60 text-sm">
            Conectando negócios e soluções digitais premium com excelência.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Links</h4>
          <ul className="text-softBeige/60 text-sm space-y-2">
            <li>Serviços</li>
            <li>Parceiros</li>
            <li>Contato</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contato</h4>
          <p className="text-softBeige/60 text-sm">Luanda, Angola</p>
          <p className="text-gold text-sm mt-2">info@alexandreglobal.com</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-softBeige/40 text-xs">
        © 2026 Alexandre Global Serviços. Todos os direitos reservados.
      </div>
    </footer>
  );
}
