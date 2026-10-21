import React from "react";
import { content } from "@/config/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import WaveDivider from "@/components/WaveDivider";
import { usePageMeta } from "@/lib/seo";
import FloatingBoaz from "@/components/FloatingBoaz";
import { cn } from "@/lib/utils";

const AboutAuthor = () => {
  usePageMeta({
    title: `About ${content.author.name} | Colleen Hanley Art`,
    description: `Discover the story of ${content.author.name}, a pro surfer turned coastal artist inspired by the waves of the Carolinas, Costa Rica, and the mountains of Idaho.`,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans overflow-x-clip">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Section className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-10 mix-blend-multiply pointer-events-none" />
          
          <Container className="relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal hero className="order-2 lg:order-1 text-center lg:text-left space-y-6">
                <div className="inline-block px-4 py-1.5 bg-accent text-slate-950 rounded-none text-xs md:text-sm font-bold tracking-widest uppercase mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  The Artist's Journey
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-[0.85] uppercase tracking-tighter">
                  Colleen <br className="hidden lg:block" /> Hanley Prior
                </h1>
                <p className="text-xl md:text-3xl text-accent font-display uppercase italic max-w-xl mx-auto lg:mx-0 leading-tight">
                  "A professional surfer turned coastal artist, Colleen's story is written in the salt spray and painted with the colors of the ocean."
                </p>
              </Reveal>
              
              <Reveal hero delay={0.2} x={20} className="order-1 lg:order-2">
                <div className="relative max-w-md mx-auto lg:ml-auto">
                  <div className="relative p-4 border-4 border-black bg-white shadow-[24px_24px_0px_0px_rgba(0,0,0,0.5)] transform rotate-3">
                    <img 
                      src={content.author.photo} 
                      alt={content.author.name}
                      className="object-cover w-full h-auto grayscale-0 contrast-110 -rotate-3"
                    />
                  </div>

                  <div className="absolute -bottom-12 -left-12 drop-shadow-2xl z-20">
                    <FloatingBoaz className="scale-75 md:scale-100" size={160} variant="sketch" />
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-background clip-wave" />
        </Section>

        {/* The Story Section */}
        <Section className="bg-background relative py-32 md:py-48">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                <Reveal x={-32} as="h2" className="font-display text-5xl md:text-7xl text-primary mb-8 leading-[0.9] uppercase tracking-tighter">
                  A Life Shaped <br /> by the Tide
                </Reveal>
                <div className="h-2 w-32 bg-accent" />
                <Reveal x={-32} delay={0.1} className="text-foreground/80 italic text-2xl md:text-3xl font-sans border-l-8 border-accent pl-8 py-2">
                  "The ocean became her babysitter and as long as she can remember, she was playing amongst the waves."
                </Reveal>
              </div>
              
              <div className="lg:col-span-7">
                <Reveal className="space-y-10 text-xl md:text-2xl text-foreground/70 leading-relaxed font-sans first-letter:text-7xl first-letter:font-display first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  {content.author.bio}
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>

        {/* Journey Timeline/Highlights */}
        <Section className="bg-primary text-white relative py-32 overflow-hidden border-y-8 border-black">
          <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-10 mix-blend-multiply pointer-events-none" />
          
          <Container className="relative z-10">
            <Reveal as="h2" className="font-display text-5xl md:text-8xl text-accent mb-24 text-center uppercase tracking-tighter">
              Creative Journey
            </Reveal>
            
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "The Carolinas",
                  description: "Where it all began. The coastal beaches were Colleen's playground, teaching her the rhythm and power of the sea from a young age.",
                  tag: "Roots",
                  image: "/assets/gallery/art4.jpg"
                },
                {
                  title: "Costa Rica",
                  description: "The place where her artistic voice truly found its color. The vibrant energy of the tropics inspires her most soulful work.",
                  tag: "Inspiration",
                  image: "/assets/gallery/art1.jpg"
                },
                {
                  title: "Western Mountains",
                  description: "Trading ocean swells for snowy peaks. In Idaho, she finds a new kind of freedom 'surfing' the slopes with her family.",
                  tag: "Adventure",
                  image: "/assets/hero.jpg"
                }
              ].map((loc, idx) => (
                <StaggerItem key={idx} className="group">
                  <div className="bg-white p-6 border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden mb-8 border-2 border-black">
                      <img 
                        src={loc.image} 
                        alt={loc.title}
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-slate-950 font-bold px-4 py-1 text-xs uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {loc.tag}
                      </div>
                    </div>
                    <h3 className="font-display text-3xl text-primary mb-4 uppercase tracking-tighter leading-none">{loc.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-sans italic">
                      {loc.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutAuthor;
