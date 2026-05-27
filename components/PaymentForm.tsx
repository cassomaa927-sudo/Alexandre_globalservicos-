import { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Aqui entra a lógica da sua API do Gpayangola futuramente
    console.log("Processando pagamento...");
    
    // Simulação de espera da API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
        Pagamento Gpayangola
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Valor (AOA)</label>
          <input 
            type="number" 
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500/50 outline-none transition"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Número de Telefone</label>
          <input 
            type="text" 
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500/50 outline-none transition"
            placeholder="9XX XXX XXX"
            required
          />
        </div>
</motion.button>
  whileHover={{ scale: !loading ? 1.02 : 1 }}
  whileTap={{ scale: !loading ? 0.98 : 1 }}
  disabled={loading}
  className={`w-full mt-4 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center ${
    loading 
      ? "bg-gray-600 cursor-not-allowed" 
      : "bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 shadow-yellow-500/20"
  }`}
>
  {loading ? (
    <>
      <FiLoader className="animate-spin mr-2 text-xl" />
      Processando...
    </>
  ) : (
    "Confirmar Pagamento"
  )}
</motion.button>   
      </form>
    </motion.div>
  );
};
export default PaymentForm;

