import { SectionTitle } from "@/components/ui/section-title";

const steps = [
  {
    id: 1,
    title: "Filtración",
    description: "El agua pasa por un proceso de filtrado meticuloso que elimina sedimentos, partículas y contaminantes.",
    icon: "🌊",
  },
  {
    id: 2,
    title: "Purificación",
    description: "Mediante ósmosis inversa y luz ultravioleta, garantizamos un agua completamente purificada y libre de microorganismos.",
    icon: "💧",
  },
  {
    id: 3,
    title: "Congelación",
    description: "Congelamos el agua en condiciones controladas, asegurando un hielo transparente, sólido y duradero.",
    icon: "❄️",
  },
  {
    id: 4,
    title: "Empaque",
    description: "Empacamos el hielo bajo estrictas normas de higiene para preservar su calidad y frescura hasta su destino final.",
    icon: "📦",
  },
];

const OurProcess = () => {
  return (
    <section className="py-24 bg-ice-800 text-white">
      <div className="container">
        <SectionTitle 
          title="Nuestro Proceso" 
          subtitle="La excelencia detrás de cada cubo" 
          center 
          className="text-white" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.id} className="text-center relative">
              <div className="w-24 h-24 bg-white text-ice-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-ice-100">{step.description}</p>
              {step.id !== steps.length && (
                <div className="hidden lg:block absolute transform translate-x-full translate-y-12">
                  <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.0607 13.0607C63.6464 12.4749 63.6464 11.5251 63.0607 10.9393L53.5147 1.3934C52.9289 0.807611 51.9792 0.807611 51.3934 1.3934C50.8076 1.97919 50.8076 2.92893 51.3934 3.51472L59.8787 12L51.3934 20.4853C50.8076 21.0711 50.8076 22.0208 51.3934 22.6066C51.9792 23.1924 52.9289 23.1924 53.5147 22.6066L63.0607 13.0607ZM0 13.5H62V10.5H0V13.5Z" fill="#FFFFFF"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>


        
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 border border-ice-600 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Garantía de Calidad</h3>
            <p className="text-ice-100">
              Cada producto pasa por estrictos controles de calidad para garantizar la pureza y claridad de nuestro hielo. 
              Seguimos todas las normativas sanitarias aplicables para ofrecerte siempre el mejor hielo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
