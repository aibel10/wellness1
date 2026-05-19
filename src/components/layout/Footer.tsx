import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white text-dark/80 relative overflow-hidden border-t border-beige">
      <div className="container max-w-screen-xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Quote */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-3xl font-semibold text-dark">
              Wellness<span className="text-sage italic">Coach</span>
            </span>
          </Link>
          <p className="font-serif italic text-lg text-dark/60 leading-relaxed border-l-2 border-sage/50 pl-4">
            &quot;Helping busy professionals achieve balance, energy, confidence, and sustainable wellness.&quot;
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-sans font-semibold tracking-wider uppercase text-sm mb-6 text-dark">Explore</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="#about" className="hover:text-sage transition-colors">About Me</Link></li>
            <li><Link href="#services" className="hover:text-sage transition-colors">Services</Link></li>
            <li><Link href="#blog" className="hover:text-sage transition-colors">Blog</Link></li>
            <li><Link href="#testimonials" className="hover:text-sage transition-colors">Success Stories</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans font-semibold tracking-wider uppercase text-sm mb-6 text-dark">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <Mail className="w-4 h-4 mr-3 mt-0.5 text-sage" />
              <span>hello@wellnesscoach.com</span>
            </li>
            <li className="flex items-start">
              <Phone className="w-4 h-4 mr-3 mt-0.5 text-sage" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-0.5 text-sage" />
              <span>123 Serenity Lane,<br/>Mindful City, CA 90210</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="font-sans font-semibold tracking-wider uppercase text-sm mb-6 text-dark">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for weekly mindfulness and wellness tips.</p>
          <form className="flex mb-8">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-cream border border-beige rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-sage w-full text-dark placeholder:text-dark/40"
            />
            <button className="bg-sage hover:bg-sage/90 text-white rounded-r-full px-4 py-2 text-sm font-medium transition-colors">
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-cream rounded-full hover:bg-sage hover:text-white transition-all text-dark">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="p-2 bg-cream rounded-full hover:bg-sage hover:text-white transition-all text-dark">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="p-2 bg-cream rounded-full hover:bg-sage hover:text-white transition-all text-dark">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
      <div className="container max-w-screen-xl mx-auto px-6 mt-16 pt-8 border-t border-beige text-sm text-center text-dark/50">
        © {new Date().getFullYear()} Wellness Coach. All rights reserved.
      </div>
    </footer>
  );
}
