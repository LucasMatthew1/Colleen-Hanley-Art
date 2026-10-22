import { motion } from "framer-motion";
import { usePageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import FloatingBoaz from "@/components/FloatingBoaz";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { content } from "@/config/content";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ArrowRight, BookOpen, Image as ImageIcon, Envelope, Info } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Index = () => {
  usePageMeta({
    title: "Colleen Hanley Art | Vintage Coastal Art & Children's Stories",
    description: "Explore the vintage-inspired coastal art of Colleen Hanley Prior and her children's book 'Nami and Boaz: The Surfer's Tale'. Authentic surf culture meets storytelling.",
  });

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 bg-primary overflow-hidden">
        {/* Background Texture & Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero.jpg" 
            alt="Vintage Surf Culture" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>

        {/* Floating Boaz decorative element */}
        <div className="absolute top-1/4 -left-12 opacity-20 pointer-events-none transform -rotate-12 hidden lg:block">
          <FloatingBoaz size={300} />
        </div>

        <div className="container relative z-10 px-6 text-center text-white">
          <Reveal delay={0.2} hero>
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl">
                <img src="/assets/boaz-logo.png" alt="Boaz Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.4} hero>
            <div className="space-y-4 mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-display tracking-tighter uppercase leading-[0.9]">
                {content.site.name}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.6} hero>
            <p className="text-xl md:text-3xl font-display text-accent mb-12 max-w-3xl mx-auto tracking-tight uppercase italic">
              "Authentic Coastal Art & Stories from the Freedom of the Surf"
            </p>
          </Reveal>

          <Reveal delay={0.8} hero>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-slate-950 font-bold rounded-none px-10 py-8 text-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <Link to="/about-book">
                  Explore the Book <BookOpen className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none border-2 border-white text-white hover:bg-white/10 px-10 py-8 text-xl font-bold uppercase tracking-widest bg-white/5 backdrop-blur-sm shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                <Link to="/gallery">
                  View My Art <ImageIcon className="ml-2" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Authentic Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-background clip-wave" />
      </section>

      {/* Book Introduction Section */}
      <section className="py-32 bg-background relative border-b border-primary/10">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal x={-20}>
              <div className="relative p-4 border-2 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group">
                <img 
                  src={content.book.coverImage} 
                  alt={content.book.title} 
                  className="relative w-full h-auto grayscale-0 contrast-125 transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute -top-4 -right-4 bg-accent text-slate-950 font-bold px-6 py-2 border-2 border-black rotate-3 text-sm uppercase tracking-widest">
                  Featured Book
                </div>
              </div>
            </Reveal>

            <div className="space-y-8 text-left">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-display text-primary leading-none uppercase tracking-tighter">
                  {content.book.title}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative">
                  <p className="text-2xl text-foreground/80 leading-relaxed font-sans first-letter:text-6xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:text-accent">
                    {content.book.blurb}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer">
                      Purchase the Book <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="text-primary hover:text-black font-bold uppercase tracking-widest text-sm">
                    <Link to="/about-book">
                      Meet the Characters &rarr;
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Showcase */}
      <section className="py-32 bg-accent/5 relative overflow-hidden">
        <div className="container px-6 mx-auto text-center">
          <Reveal className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display text-primary uppercase tracking-tighter mb-4">The World of Nami & Boaz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Meet the brave young surfer and her wise old guide on their coastal adventures.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {content.book.characters.map((char, idx) => (
              <Reveal key={char.name} x={idx === 0 ? -40 : 40} delay={idx * 0.2}>
                <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center group">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-accent shadow-xl transform transition-transform group-hover:scale-105 duration-500">
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-3xl font-display text-primary uppercase mb-4 tracking-tighter">{char.name}</h3>
                  <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                    {char.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Paintings Section */}
      <section className="py-32 bg-background relative">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal className="text-left max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display text-primary uppercase tracking-tighter mb-4">Original Artwork</h2>
              <p className="text-xl text-muted-foreground font-sans">
                A glimpse into Colleen's coastal portfolio, inspired by decades of surfing and observation.
              </p>
            </Reveal>
            <Reveal x={20}>
              <Button asChild variant="outline" className="rounded-none border-2 border-black text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all px-8 py-6">
                <Link to="/gallery">
                  View Full Gallery <ImageIcon className="ml-2" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {content.gallery.slice(0, 3).map((item) => (
              <StaggerItem key={item.id}>
                <Link to="/gallery" className="group block relative overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-white border-t-2 border-black">
                    <h3 className="text-xl font-display text-primary uppercase tracking-tighter mb-1">{item.title}</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">{item.category}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Author Intro Section */}
      <section className="py-32 bg-primary text-white relative">
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <Reveal x={-20}>
                <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-8">Colleen Hanley Prior</h2>
                <p className="text-xl text-white font-sans mb-8 italic border-l-4 border-accent pl-8">
                  "Surfing led her to Costa Rica where she credits her inspiration for most of her artwork. At age 20 she relocated to San Clemente, California where she became increasingly consumed by painting and selling her art."
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-slate-950 font-bold rounded-none px-8 py-6 uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Link to="/about-author">
                      Read Her Full Story
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <Reveal x={40}>
                <div className="relative p-6 border-4 border-accent/30 rounded-none rotate-3 bg-white/5 backdrop-blur-sm">
                  <img 
                    src={content.author.photo} 
                    alt={content.author.name} 
                    className="relative w-full max-w-sm h-auto border-2 border-white shadow-2xl -rotate-3"
                  />
                  <div className="absolute -bottom-10 -left-10 hidden md:block">
                    <FloatingBoaz size={120} variant="sketch" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final Purchase CTA Section */}
      <section className="py-32 bg-accent relative border-t-4 border-black">
        <div className="container px-6 mx-auto text-center relative z-10">
          <Reveal>
            <img src="/assets/boaz-logo.png" alt="Boaz Logo" className="w-32 h-32 mx-auto mb-10 drop-shadow-xl" />
            <h2 className="text-5xl md:text-7xl font-display text-slate-950 uppercase tracking-tighter mb-8 leading-tight">
              Bring the Swell <br className="hidden md:block" /> Into Your Home
            </h2>
            <p className="text-2xl text-slate-900 max-w-2xl mx-auto mb-12 font-sans italic">
              "Discover the swells, speed, and freedom of the surf today."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-8 text-xl font-bold uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer">
                  Buy the Book &rarr;
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

