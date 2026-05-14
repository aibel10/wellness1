"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const FeatureCard = ({ title, description, highlight }: { title: string, description: string, highlight: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-md rounded-xl border border-white/10 bg-white/5 px-8 py-16 shadow-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mb-8 text-sm text-white/50 leading-relaxed">{description}</p>
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
          {highlight}
        </span>
      </div>
    </div>
  );
};

export function AdvancedFeaturesSection() {
  return (
    <section className="py-32 bg-[#050505] relative flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
          Beyond Ordinary.
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto">
          We push the boundaries of what's possible on the web, combining extreme performance with breathtaking aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 w-full max-w-7xl relative z-10">
        <FeatureCard 
          title="Neural Processing" 
          description="Leverage on-device ML models for instantaneous predictions without compromising user privacy." 
          highlight="AI Ready"
        />
        <FeatureCard 
          title="Infinite Scaling" 
          description="Our edge-native architecture ensures zero latency globally, no matter your traffic." 
          highlight="Global Edge"
        />
        <FeatureCard 
          title="Quantum Security" 
          description="Future-proof encryption protocols keep your data safe against tomorrow's threats." 
          highlight="Encrypted"
        />
      </div>
    </section>
  );
}
