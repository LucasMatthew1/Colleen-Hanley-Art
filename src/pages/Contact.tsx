import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { content } from "@/config/content";
import { Reveal } from "@/components/motion";
import { 
  InstagramLogo, 
  Envelope, 
  CheckCircle,
  PaperPlaneTilt,
  Phone,
  MapPin
} from "@phosphor-icons/react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  usePageMeta({
    title: "Contact Colleen Hanley Art | Get in Touch",
    description: "Inquire about coastal art commissions, book events, or just say hello to Colleen Hanley Prior.",
  });

  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subject = params.get("subject");
    if (subject) {
      setMessage(`Hi Colleen, I'm interested in: ${subject}\n\n`);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-32 bg-primary text-white border-b-8 border-black">
        <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <Reveal delay={0.2} hero>
            <h1 className="text-5xl md:text-8xl font-display mb-6 uppercase tracking-tighter leading-none">Get in Touch</h1>
          </Reveal>
          <Reveal delay={0.4} hero>
            <p className="text-accent text-xl md:text-3xl font-display uppercase italic max-w-2xl mx-auto leading-tight">
              "I'd love to hear from you—whether it's about a custom painting or a book event."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 relative z-10">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Left: Contact Info & Socials */}
            <div className="space-y-16">
              <Reveal x={-30}>
                <div className="space-y-8">
                  <h2 className="text-4xl font-display text-primary uppercase tracking-tighter">Contact Information</h2>
                  <div className="h-1.5 w-24 bg-accent" />
                  <p className="text-foreground/70 leading-relaxed text-xl font-sans italic">
                    Have a question about <span className="text-primary font-bold underline decoration-accent">Nami and Boaz</span>? 
                    Interested in a custom commission or gallery placement? 
                    Reach out directly or use the form.
                  </p>
                </div>
              </Reveal>

              <Reveal x={-30} delay={0.2}>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Envelope size={28} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-1 text-accent">Email</h3>
                      <a href={`mailto:${content.site.email}`} className="text-xl text-foreground/70 hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30">{content.site.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Phone size={28} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-1 text-accent">Phone</h3>
                      <p className="text-xl text-foreground/70">{content.site.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <MapPin size={28} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-1 text-accent">Studio Address</h3>
                      <p className="text-xl text-foreground/70">{content.site.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <InstagramLogo size={28} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-1 text-accent">Instagram</h3>
                      <a href={content.site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xl text-foreground/70 hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30">{content.site.instagram}</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Form */}
            <div className="relative">
              <Reveal x={30}>
                <div className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/paper-texture.jpg')] opacity-5 mix-blend-multiply pointer-events-none" />
                  
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10"
                      >
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-xs font-bold text-primary uppercase tracking-widest">Full Name</Label>
                              <Input 
                                id="name" 
                                placeholder="Your Name" 
                                required 
                                className="rounded-none border-2 border-black focus:ring-accent focus:border-accent h-14 bg-slate-50 shadow-inner"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-xs font-bold text-primary uppercase tracking-widest">Email Address</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                placeholder="hello@example.com" 
                                required 
                                className="rounded-none border-2 border-black focus:ring-accent focus:border-accent h-14 bg-slate-50 shadow-inner"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="role-trigger" className="text-xs font-bold text-primary uppercase tracking-widest">I'm a:</Label>
                            <Select required name="role">
                              <SelectTrigger id="role-trigger" aria-label="Select your role" className="rounded-none border-2 border-black focus:ring-accent focus:border-accent h-14 bg-slate-50 shadow-inner">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                              <SelectContent className="rounded-none border-2 border-black">
                                <SelectItem value="parent">Parent</SelectItem>
                                <SelectItem value="school">School / Educator</SelectItem>
                                <SelectItem value="gallery">Gallery Owner</SelectItem>
                                <SelectItem value="press">Press / Media</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-xs font-bold text-primary uppercase tracking-widest">Message</Label>
                            <Textarea 
                              id="message" 
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="How can Colleen help you?" 
                              required 
                              className="rounded-none border-2 border-black focus:ring-accent focus:border-accent min-h-[180px] bg-slate-50 shadow-inner p-4"
                            />
                          </div>

                          <Button 
                            disabled={loading}
                            type="submit" 
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 rounded-none text-xl uppercase tracking-[0.2em] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                          >
                            {loading ? (
                              "Sending..."
                            ) : (
                              <span className="flex items-center justify-center gap-3">
                                Send Message <PaperPlaneTilt size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 space-y-8"
                      >
                        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-accent border-dashed">
                          <CheckCircle size={56} className="text-accent" />
                        </div>
                        <h2 className="text-4xl font-display text-primary uppercase tracking-tighter">Message Sent!</h2>
                        <p className="text-xl text-muted-foreground font-sans italic max-w-sm mx-auto">
                          Thank you for reaching out, Colleen will get back to you as soon as the surf allows.
                        </p>
                        <Button 
                          onClick={() => setSubmitted(false)}
                          variant="ghost" 
                          className="text-primary hover:text-accent font-bold uppercase tracking-widest text-sm"
                        >
                          Send another message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
