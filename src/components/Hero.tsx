
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

// Importing gallery images for the hero background
const heroBackgroundImages = [
  '/lovable-uploads/e0c0c6b4-cdb1-4a52-b142-f3773128fdf8.png',
  '/lovable-uploads/8fa37de1-6a6b-43fe-83be-ff14f62ecedf.png',
  '/lovable-uploads/4f3efc2c-c029-4c3f-9fe5-132c25a1c215.png',
  '/lovable-uploads/06309693-8dc0-4fa7-a0b2-4dfc4bc86fbd.png',
  '/lovable-uploads/ae29b8b0-9b97-4d09-bfc0-065e91a441c0.png'
];

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === heroBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
      {/* Background images carousel */}
      {heroBackgroundImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-10' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <img src="/lovable-uploads/068190b2-c34b-4c2b-bdbd-44eb0f472585.png" alt="GRANEX CONTROL" className="h-20 mx-auto mb-6" />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            SERVIÇOS DE CONTROLE DE PRAGAS E DE QUALIDADE EM PÓS COLHEITA DE GRÃOS
          </h1>
          
          <p className="text-lg text-green-200 mb-10 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Entre em contato conosco e solicite um orçamento para soluções especializadas para o seu armazenamento de grãos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5542991022044" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary">
              Nossos serviços
            </a>
            <a href="#gallery" className="hidden sm:flex items-center justify-center border border-green-500/40 bg-black/20 hover:bg-black/30 text-white px-6 py-3 rounded-md transition-all">
              <span>Ver galeria</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
