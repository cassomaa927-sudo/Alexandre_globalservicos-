const services = [
  { title: "Curadoria de Joias", desc: "Exclusividade e design atemporal." },
  { title: "Tecidos Premium", desc: "Seleção fina para alta costura." },
  { title: "Soluções Digitais", desc: "Consultoria estratégica de luxo." },
  { title: "Experiências B2B", desc: "Conexões globais de alto nível." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-gray-900 text-center mb-16 tracking-tight">
          Nossos <span className="text-amber-700 italic">Serviços</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-gray-200 hover:border-amber-700 transition-colors"
            >
              <h3 className="font-serif text-xl text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
