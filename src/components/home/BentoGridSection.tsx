"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, BarChart3, Cloud, Settings } from "lucide-react";

const features = [
  {
    title: "Seamless Integration",
    description: "Connect your existing tools with our powerful API in minutes.",
    icon: <Zap className="h-6 w-6 text-blue-400" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-900/20 to-transparent",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption protecting your data at every layer.",
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Real-time Analytics",
    description: "Gain actionable insights instantly.",
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Cloud Native",
    description: "Built for scale, deployed globally.",
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Custom Workflows",
    description: "Adapt the platform to your needs.",
    icon: <Settings className="h-6 w-6 text-orange-400" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

export function BentoGridSection() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl"
          >
            A comprehensive suite of features designed to accelerate your growth without compromising on stability or security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 glass-dark p-8 flex flex-col justify-between hover:border-white/20 transition-all ${feature.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
