"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StorytellingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((text) => {
        if (!text) return;
        
        gsap.fromTo(
          text,
          { opacity: 0.1, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-32">
          {[
            "We believe that every pixel matters. In a world full of noise, clarity is your ultimate competitive advantage.",
            "Our approach combines bleeding-edge technology with timeless design principles to create digital experiences that resonate.",
            "From intricate back-end systems to buttery-smooth front-end interfaces, we craft solutions that scale with your ambition.",
            "This isn't just software. It's a statement.",
          ].map((text, i) => (
            <p
              key={i}
              ref={(el) => { textRefs.current[i] = el; }}
              className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-white/90"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
