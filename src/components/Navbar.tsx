import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ShoppingCart } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about-author" },
    { name: "About the Book", path: "/about-book" },
    { name: "Art Gallery", path: "/gallery" },
    { name: "About the Church", path: "/church" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3 border-b border-primary/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/boaz-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
          <span className={cn(
            "font-display text-2xl tracking-tighter transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}>
            {content.site.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-widest font-bold transition-all hover:scale-105",
                scrolled 
                  ? (location.pathname === link.path ? "text-brand-orange" : "text-foreground/70 hover:text-primary")
                  : (location.pathname === link.path ? "text-accent" : "text-white/80 hover:text-white")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-slate-950 font-bold rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all px-6">
            <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer">
              Buy the Book
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50",
                  location.pathname === link.path ? "text-brand-orange" : "text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-slate-900 font-medium w-full mt-2">
              <a href={content.book.buyUrl} target="_blank" rel="noopener noreferrer">
                Buy the Book
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
