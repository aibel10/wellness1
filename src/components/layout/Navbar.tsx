"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "w-full max-w-4xl px-6 py-3 rounded-full glass-dark shadow-2xl border border-white/10" 
            : "w-full px-2"
        }`}>
          <Link href="/" className="flex items-center space-x-2 relative z-10">
            <span className="font-bold text-xl tracking-tighter text-white">
              Tally<span className="text-blue-500">Solutions.</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {["Services", "Products", "Showcase"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex text-white hover:bg-white/10 rounded-full">
              Sign In
            </Button>
            <Button className="rounded-full bg-white text-black hover:bg-neutral-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
