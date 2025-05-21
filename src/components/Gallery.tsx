
import React, { useState } from 'react';
import { GalleryHorizontal, Image, ArrowLeft, ArrowRight, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const galleryImages = [
  {
    src: '/lovable-uploads/e0c0c6b4-cdb1-4a52-b142-f3773128fdf8.png',
    alt: 'Trabalhador realizando controle de pragas em silo de grãos',
    caption: 'Expurgo de grãos'
  },
  {
    src: '/lovable-uploads/8fa37de1-6a6b-43fe-83be-ff14f62ecedf.png',
    alt: 'Veículo da Granex Control no campo',
    caption: 'Serviços no campo'
  },
  {
    src: '/lovable-uploads/4f3efc2c-c029-4c3f-9fe5-132c25a1c215.png',
    alt: 'Veículo da Granex Control próximo a um lago',
    caption: 'Atendimento em diversas localidades'
  },
  {
    src: '/lovable-uploads/05adf504-7a01-4663-bcf2-c01b8fae28e2.png',
    alt: 'Veículo da Granex Control em armazém',
    caption: 'Controle em armazéns'
  },
  {
    src: '/lovable-uploads/9ba24d94-8b88-410a-9c0b-775187450abd.png',
    alt: 'Técnico instalando armadilha para controle de roedores',
    caption: 'Controle de roedores'
  },
  {
    src: '/lovable-uploads/06309693-8dc0-4fa7-a0b2-4dfc4bc86fbd.png',
    alt: 'Armazenamento de grãos em silo',
    caption: 'Armazenamento de grãos'
  },
  {
    src: '/lovable-uploads/ae29b8b0-9b97-4d09-bfc0-065e91a441c0.png',
    alt: 'Técnico realizando controle de pragas',
    caption: 'Serviços técnicos'
  },
  {
    src: '/lovable-uploads/6ff27d92-648e-4fd0-9184-5f29bee274e9.png',
    alt: 'Veículo da Granex Control com equipamentos',
    caption: 'Equipamentos especializados'
  },
  {
    src: '/lovable-uploads/a1b29807-2e33-4810-9899-2fbabe15908d.png',
    alt: 'Veículo da Granex Control no pôr do sol',
    caption: 'Compromisso com resultados'
  },
  {
    src: '/lovable-uploads/1ec83655-6409-4c69-9975-4ea4a8b51fd2.png',
    alt: 'Veículo da Granex Control em operação',
    caption: 'Atendimento especializado'
  },
  {
    src: '/lovable-uploads/64ab7764-f912-4060-ad72-568fee0c56df.png',
    alt: 'Veículo da Granex Control no pôr do sol',
    caption: 'Confiabilidade em cada serviço'
  },
  {
    src: '/lovable-uploads/9d08cefd-4959-470e-8cd0-007f21e2e8b8.png',
    alt: 'Veículo da Granex Control em silos de armazenamento',
    caption: 'Gestão de qualidade em silos'
  }
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  const goToNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  };
  
  const goToPrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-16 bg-neutral-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <GalleryHorizontal className="w-6 h-6 text-green-500 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider text-green-600">Nossa Galeria</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Conheça Nossa Atuação
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Imagens dos nossos serviços de controle de pragas e gestão da qualidade em pós colheita de grãos em diversas instalações.
          </p>
        </div>

        {/* Carousel para telas menores */}
        <div className="block md:hidden relative">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <div className="relative aspect-video">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-sm text-center text-neutral-700">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <CarouselPrevious className="pointer-events-auto left-1" />
              <CarouselNext className="pointer-events-auto right-1" />
            </div>
          </Carousel>
        </div>

        {/* Grid para telas maiores */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-video">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm text-center text-neutral-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-600">
            Nossos serviços são realizados por profissionais qualificados com anos de experiência no setor de pós-colheita de grãos.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={closeModal} 
              className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToPrevImage();
            }} 
            className="absolute left-4 md:left-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Imagem anterior"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white text-center">
              <p className="text-sm md:text-base">{galleryImages[selectedImageIndex].caption}</p>
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToNextImage();
            }} 
            className="absolute right-4 md:right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Próxima imagem"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
