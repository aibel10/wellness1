"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, Quote, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SuccessStoriesPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stories = [
    {
      id: 1,
      name: "Incredible Transformation",
      category: "Weight Loss & Confidence",
      quote: "The personalized coaching completely transformed my approach to health. I went from feeling constantly exhausted to having the energy and confidence to speak in front of hundreds.",
      img: "/results/1.jpg",
    },
    {
      id: 2,
      name: "Reclaiming Health",
      category: "Sustainable Weight Loss",
      quote: "I never thought I could see such incredible changes without extreme diets. The sustainable habits I learned have helped me reclaim my health and feel like myself again.",
      img: "/results/2.jpg",
    },
    {
      id: 3,
      name: "Renewed Vitality",
      category: "Vitality & Wellness",
      quote: "This program was a turning point for me. The holistic approach helped me shed the weight naturally, and I feel more vibrant and alive than I have in years.",
      img: "/results/3.jpg",
    },
    {
      id: 4,
      name: "Radiant Inside & Out",
      category: "Skin Health & Inner Balance",
      quote: "True health starts from within. By balancing my nutrition and managing stress, my skin cleared up completely. I finally have the glowing skin and inner peace I always wanted.",
      img: "/results/4.jpg",
    },
    {
      id: 5,
      name: "A New Chapter",
      category: "Total Lifestyle Reset",
      quote: "The mind-body transformation has been unreal. I've lost the weight, but more importantly, I've gained a new perspective on life, wellness, and my own potential.",
      img: "/results/5.jpg",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark font-sans selection:bg-sage/30">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Header Section */}
        <section className="container px-6 max-w-screen-xl mx-auto mb-16 md:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-sage/30 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-sage mb-6 shadow-sm"
          >
            <Heart className="w-4 h-4 mr-2" />
            Real Results
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-semibold text-dark mb-6"
          >
            Client <span className="italic text-sage">Transformations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark/70 max-w-2xl mx-auto"
          >
            Witness the incredible journeys of individuals who committed to holistic wellness, balanced nutrition, and a healthier lifestyle.
          </motion.p>
        </section>

        {/* Stories Grid */}
        <section className="container px-6 max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-16 md:gap-24">
            {stories.map((story, index) => (
              <motion.div 
                key={story.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-square sm:aspect-square md:aspect-square lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sage/15 border-4 border-white group">
                    {/* Fallback styling in case image is missing while user places it */}
                    <div className="absolute inset-0 bg-sage/5 flex flex-col items-center justify-center text-sage/60 text-sm font-medium text-center p-4">
                      <span>Please place image as</span>
                      <span className="bg-white/80 px-2 py-1 rounded mt-2">public/results/{story.id}.jpg</span>
                    </div>
                    <Image 
                      src={story.img} 
                      alt={`Client transformation ${story.id}`} 
                      fill 
                      className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                      onError={(e) => {
                        // Hide broken image icon if image is not yet placed
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 text-sage mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-2">
                    {story.name}
                  </h3>
                  <p className="text-sm tracking-wider uppercase font-semibold text-sage mb-6">
                    {story.category}
                  </p>
                  <Card className="bg-white/60 backdrop-blur-sm border-beige p-6 md:p-8 rounded-[2rem] relative shadow-lg shadow-sage/5">
                    <Quote className="absolute top-6 left-6 w-8 h-8 text-sage/20" />
                    <p className="text-dark/80 text-lg md:text-xl font-medium leading-relaxed italic relative z-10 pl-10">
                      &quot;{story.quote}&quot;
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="container px-6 max-w-screen-md mx-auto mt-24 text-center">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="bg-sage rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 relative z-10">Ready for Your Own Transformation?</h2>
              <p className="text-white/90 text-lg mb-8 relative z-10">Start your journey today and become our next success story.</p>
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white text-sage hover:bg-cream px-8 py-4 text-base font-bold shadow-xl transition-all hover:-translate-y-1 relative z-10">
                Book a Free Consultation
              </a>
           </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
