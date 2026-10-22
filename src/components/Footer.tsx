import { content } from "@/config/content";
import { InstagramLogo, FacebookLogo, PinterestLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-8 border-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/assets/boaz-logo.png" alt="Logo" className="w-16 h-16 object-contain" />
              <span className="font-display text-2xl tracking-tighter">{content.site.name}</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md mb-6 leading-relaxed font-sans">
              Authentic coastal art and illustrated stories inspired by vintage surf culture and the wisdom of Boaz.
            </p>
            <div className="flex gap-4">
              <a 
                href={content.site.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all border border-white/20"
                aria-label="Instagram"
              >
                <InstagramLogo size={22} weight="bold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 text-white border-b border-accent/30 pb-2">Navigation</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-bold text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about-author" className="hover:text-accent transition-colors">About Me</Link></li>
              <li><Link to="/about-book" className="hover:text-accent transition-colors">About the Book</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Art Gallery</Link></li>
              <li><Link to="/church" className="hover:text-accent transition-colors">About the Church</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg mb-6 text-white border-b border-accent/30 pb-2">Contact Information</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/90 font-sans">
              <li className="flex items-start gap-2">
                <span className="font-bold text-white">E:</span>
                <a href={`mailto:${content.site.email}`} className="hover:text-white transition-colors underline underline-offset-4 decoration-accent/30">{content.site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-white">P:</span>
                <span>{content.site.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-white">A:</span>
                <span>{content.site.address}</span>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-white/10">
               <a 
                 href={content.book.buyUrl} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-xs uppercase tracking-widest font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
               >
                 Purchase the Book &rarr;
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/90">
          <p>&copy; {currentYear} {content.site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
