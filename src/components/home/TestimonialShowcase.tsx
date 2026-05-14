"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "The interface is so intuitive, it almost feels like it can read my mind. A true paradigm shift.",
    name: "Sarah Jenkins",
    role: "CTO, TechNova",
  },
  {
    quote: "We scaled our operations 10x without a single hiccup. The engineering behind this is pure magic.",
    name: "Marcus Aurelius",
    role: "VP Engineering, Stack",
  },
  {
    quote: "Every micro-interaction is perfectly tuned. It's rare to see a product with this level of polish.",
    name: "Elena Rodriguez",
    role: "Design Lead, Creative",
  },
  {
    quote: "It's not just a tool, it's an experience. Our team's productivity skyrocketed after adoption.",
    name: "David Chen",
    role: "Founder, StartupX",
  },
];

export function TestimonialShowcase() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Loved by visionaries</h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] flex-shrink-0 mx-4 glass-dark rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col h-full justify-between gap-8">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
