import { usePageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import { Church as ChurchIcon } from "@phosphor-icons/react";

const Church = () => {
  usePageMeta({
    title: "About the Church | Colleen Hanley Art",
    description: "Learn more about the church and community that inspires Colleen's art and life.",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Reveal duration={1.2}>
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-accent border-dashed">
                <ChurchIcon size={48} className="text-accent" />
              </div>
              <p className="text-xl font-display text-accent uppercase tracking-[0.2em] mb-2">Colleen Hanley Prior</p>
              <h1 className="text-5xl md:text-6xl font-display text-primary tracking-tighter">About the Church</h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white space-y-6">
                <p className="text-2xl font-display text-primary italic">"Coming Soon"</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are currently confirming the content for this section with Colleen. 
                  This page will feature information about the church and community that 
                  play an important role in Colleen's life and artistic journey.
                </p>
                <div className="pt-8">
                  <div className="h-px bg-primary/10 w-full mb-8" />
                  <p className="text-sm uppercase tracking-widest font-bold text-primary/50">Stay tuned for updates</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Church;
