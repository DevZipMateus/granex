import React from 'react';
import { Check } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-corporate-lightBlue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Armazenamento de grãos" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="/lovable-uploads/458cb505-88a0-4651-8b45-55d11f1f2f18.jpg" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-lightBlue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Eficiência</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Comprometimento com resultados</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Excelência em serviços de controle de pragas e qualidade em pós colheita
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A GRANEX CONTROL é especializada em serviços de controle de pragas e gestão da qualidade para pós colheita de grãos.
              Nossa equipe técnica está em constante capacitação para oferecer soluções inovadoras, garantindo tranquilidade e segurança 
              para o armazenamento do seu produto.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossos serviços abrangem desde o controle de pragas até consultoria técnica para ampliações de unidades,
              sempre visando a máxima eficiência e qualidade dos grãos armazenados.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Qualificada</h4>
                  <p className="text-gray-600">Profissionais especializados e em constante atualização</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada cliente recebe atenção individualizada para suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Utilizamos as mais modernas ferramentas e técnicas do mercado</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-black hover:bg-neutral-800 text-green-500 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Conheça Nossos Diferenciais</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;