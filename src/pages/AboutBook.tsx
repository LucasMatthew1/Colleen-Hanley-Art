import { usePageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { content } from "@/config/content";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import FloatingBoaz from "@/components/FloatingBoaz";

const AboutBook = () => {
  usePageMeta({
    title: `About the Book | ${content.book.title}`,
    description: content.book.blurb,
  });

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30 overflow-x-hidden bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 bg-primary text-white overflow-hidden">
          {/* Subtle paper grain handled by global CSS, but adding a local texture for depth */}
          <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-10 mix-blend-multiply pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal 
                x={-40} 
                duration="hero" 
                className="flex justify-center lg:justify-end order-2 lg:order-1"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-accent rounded-none blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
                  <div className="relative p-3 border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                    <img 
                      src={content.book.coverImage} 
                      alt={content.book.title}
                      className="relative w-full max-w-[420px] h-auto grayscale-0 contrast-110"
                    />
                  </div>
                </div>
              </Reveal>

              <div className="order-1 lg:order-2 space-y-8">
                <Reveal delay={0.1}>
                  <span className="inline-block px-6 py-2 bg-accent text-slate-950 text-xs font-bold tracking-widest uppercase mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Original Story
                  </span>
                </Reveal>
                <Reveal delay={0.2} as="h1" className="text-4xl md:text-5xl lg:text-8xl font-display leading-[0.9] mb-4 uppercase tracking-tighter">
                  {content.book.title}
                </Reveal>

                <Reveal delay={0.3} className="text-xl md:text-2xl text-white/80 mb-12 max-w-xl leading-relaxed font-sans italic border-l-4 border-accent pl-8">
                  "{content.book.blurb}"
                </Reveal>
                <Reveal delay={0.4}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-slate-900 font-bold rounded-none px-10 h-20 text-xl group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 border-2 border-black uppercase tracking-widest"
                  >
                    <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <ShoppingCart size={28} weight="bold" />
                      Buy the Book
                    </a>
                  </Button>
                </Reveal>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-32 bg-background clip-wave" />
        </section>

        {/* Characters Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <Reveal as="div" className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-display text-primary mb-6 uppercase tracking-tighter">Meet the Adventurers</h2>
              <div className="w-32 h-1.5 bg-accent mx-auto" />
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
              {content.book.characters.map((character, index) => (
                <StaggerItem key={character.name} className="group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-12 w-full max-w-[400px]">
                      <div className="relative p-4 border-2 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-700 group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                        <img 
                          src={character.image} 
                          alt={character.name}
                          className="w-full aspect-square object-cover grayscale-0 transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Character Badge */}
                      <div className={cn(
                        "absolute -bottom-4 -right-4 px-8 py-3 font-display text-xl shadow-lg border-2 border-black uppercase tracking-tighter transform -rotate-2 group-hover:rotate-0 transition-transform",
                        index === 0 ? "bg-primary text-white" : "bg-accent text-slate-900"
                      )}>
                        {index === 0 ? "The Surfer" : "The Wise Guide"}
                      </div>
                    </div>
                    
                    <div className="text-center max-w-md">
                      <h3 className="text-4xl md:text-5xl font-display text-primary mb-6 uppercase tracking-tighter">{character.name}</h3>
                      <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-sans italic">
                        {character.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Closing Call to Action */}
        <section className="py-32 bg-primary text-white relative overflow-hidden border-t-8 border-accent">
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal duration={1.2}>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-12 max-w-3xl mx-auto leading-none">
                Ready to ride the waves <br className="hidden md:block" /> with Nami and Boaz?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-slate-900 rounded-none px-12 h-20 text-xl font-bold uppercase tracking-widest border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer">
                  Get Your Copy Today <ArrowRight className="ml-2" />
                </a>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutBook;
