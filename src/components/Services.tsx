
import React from 'react';
import { FileSpreadsheet, Building2, FileText, Search, Shield, Truck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Expurgos de Grãos',
    description: 'Serviços especializados para controle de pragas em grãos armazenados, com metodologias eficientes e seguras.',
    icon: Shield,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Controle de Roedores',
    description: 'Soluções eficazes para eliminar e prevenir a infestação de roedores em unidades armazenadoras.',
    icon: Shield,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Gestão da Qualidade Sistema DATAGRAN',
    description: 'Sistema de gestão completo para monitoramento e controle da qualidade dos grãos armazenados.',
    icon: FileSpreadsheet,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'BPO Quali-Operacional',
    description: 'Terceirização de processos operacionais com foco na qualidade para unidades armazenadoras.',
    icon: Building2,
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Consultoria Técnica',
    description: 'Orientação especializada no planejamento e ampliações de unidades armazenadoras.',
    icon: FileText,
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Venda de Equipamentos',
    description: 'Fornecimento de equipamentos de qualidade como sondas pneumáticas, aparelhos recirculadores, lonas para expurgo e pulverizadores.',
    icon: Truck,
    delay: '0.5s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para pós-colheita
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados para atender às necessidades específicas do seu armazenamento de grãos, 
            garantindo qualidade e eficiência.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-corporate-lightBlue/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-corporate-lightBlue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-black hover:bg-neutral-800 text-green-500 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
