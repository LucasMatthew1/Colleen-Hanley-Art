import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content } from "@/config/content";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { X, MagnifyingGlassPlus, Envelope, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  usePageMeta({
    title: "Art Gallery | Colleen Hanley Art",
    description: "Explore the coastal-inspired paintings and artwork by pro surfer and artist Colleen Hanley Prior.",
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % content.gallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + content.gallery.length) % content.gallery.length);
    }
  };

  const selectedItem = selectedImageIndex !== null ? content.gallery[selectedImageIndex] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-32 bg-primary text-white overflow-hidden border-b-8 border-black">
        <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-10 mix-blend-multiply pointer-events-none" />
        
        <div className="container px-6 mx-auto relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto space-y-6">
            <div className="space-y-4 mb-6">
              <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">Art Gallery</h1>
            </div>
            <div className="h-1.5 w-32 bg-accent mx-auto" />
            <p className="text-xl md:text-2xl text-accent font-display uppercase italic tracking-tight leading-tight">
              "A collection of ocean-inspired paintings, capturing the energy, speed, and freedom of the surf."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-background">
        <div className="container px-6 mx-auto">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {content.gallery.map((item, index) => (
              <StaggerItem key={item.id} className="group relative">
                <div 
                  className="relative aspect-[4/5] overflow-hidden border-2 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-500 hover:shadow-none hover:translate-x-2 hover:translate-y-2"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-0 contrast-110 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center text-white backdrop-blur-sm">
                    <MagnifyingGlassPlus size={48} className="mb-6 text-accent" />
                    <h3 className="text-3xl font-display mb-2 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-sm text-accent uppercase font-bold tracking-widest mb-8">{item.category}</p>
                    <Button 
                      variant="outline" 
                      className="rounded-none border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest px-6"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link to={`/contact?subject=Inquiry: ${item.title}`}>
                        Inquire About This Piece
                      </Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-32 bg-accent relative overflow-hidden border-y-8 border-black">
        <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-20 mix-blend-multiply pointer-events-none" />
        
        <div className="container px-6 mx-auto relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display text-primary mb-8 uppercase tracking-tighter leading-none">Commission a Custom Piece</h2>
            <p className="text-slate-900 max-w-3xl mx-auto mb-12 text-xl md:text-2xl font-sans italic leading-relaxed">
              Looking for something specific? Colleen works with clients globally to create bespoke ocean art 
              that fits your space and spirit perfectly.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-12 py-8 text-xl uppercase tracking-widest border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Link to="/contact">
                Let's Talk Art <Envelope className="ml-2" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X size={40} weight="bold" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
              onClick={prevImage}
            >
              <CaretLeft size={64} weight="bold" />
            </button>
            <button 
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]"
              onClick={nextImage}
            >
              <CaretRight size={64} weight="bold" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-2 bg-white border-4 border-black shadow-2xl mb-8">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-[70dvh] object-contain grayscale-0 contrast-110"
                />
              </div>
              <div className="text-center text-white max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display mb-2 uppercase tracking-tighter">{selectedItem.title}</h2>
                <p className="text-accent uppercase font-bold tracking-widest mb-8">{selectedItem.category}</p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-slate-900 rounded-none px-10 h-16 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
                  asChild
                >
                  <Link to={`/contact?subject=Inquiry: ${selectedItem.title}`} onClick={closeLightbox}>
                    Inquire About This Piece
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
