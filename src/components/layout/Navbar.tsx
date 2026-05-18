"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, Info, Sparkles, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

export function Navbar() {
  const [activePath, setActivePath] = useState<string>("#");

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      
      {/* Sleek Top Title Bar - Sleeker & Thinner Height */}
      <div className="w-full bg-dark/95 backdrop-blur-md text-white px-6 py-2.5 md:py-3 flex items-center justify-between shadow-md relative z-20">
        <Link href="/" className="flex items-center gap-1 transition-opacity hover:opacity-80">
          <span className="font-serif text-base md:text-lg italic font-bold tracking-wide">WellnessCoach</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-4">
          {/* Social Icons - Sleek Circular Glass Buttons */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/80 hover:text-white hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8H7v3h2v9h3v-9h3.657L16 8h-4V6.707C12 5.929 12.308 5 13.5 5H16V2h-3.5C9.5 2 9 3.5 9 5.5V8z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/80 hover:text-white hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/80 hover:text-white hover:scale-105 active:scale-95 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v12h5v-12zm7.982 0h-4.968v12h4.969v-6.397c0-3.419 4.452-3.701 4.452 0v6.397h4.97v-7.397c0-5.748-6.602-5.569-9.423-1.026v-1.577z"/>
              </svg>
            </a>
          </div>

          <Link 
            href="#contact" 
            className="text-[10px] md:text-xs font-semibold bg-sage hover:bg-sage/90 text-white px-3.5 py-1 md:px-4 md:py-1.5 rounded-full transition-all active:scale-95 shadow-sm"
          >
            Book Free Call
          </Link>
        </div>
      </div>

      {/* Compact Liquid Glass Navbar - Optimized for Perfect Sizing & Content Fitting */}
      <div className="w-fit max-w-[94%] mt-2 md:mt-2.5 px-1 relative z-10">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center justify-center py-1 md:py-1.2 bg-white/20 backdrop-blur-xl border border-white/35 shadow-[0_8px_32px_0_rgba(138,163,153,0.1)] rounded-full px-1"
          style={{
            boxShadow: "0 8px 32px 0 rgba(138, 163, 153, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Internal Horizontal Navigation Buttons */}
          <div className="flex items-center gap-1 p-0.5 w-full justify-center">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActivePath(item.href)}
                  className="relative px-3 py-1 md:px-5 md:py-1.5 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                >
                  {isActive && (
                    <motion.div
                      layoutId="liquid-glass-active"
                      className="absolute inset-0 bg-sage/90 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(138,163,153,0.25)] z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-dark/70 hover:text-dark'}`}>
                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    
                    {/* Render text for active item on mobile or always on desktop to avoid cramped navbar */}
                    <AnimatePresence>
                      {isActive ? (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="inline text-[10px] md:text-sm font-semibold whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      ) : (
                        <span className="hidden md:inline">{item.name}</span>
                      )}
                    </AnimatePresence>
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>

    </div>
  );
}
