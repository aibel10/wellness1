"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Leaf, Wind, Activity, Brain, Star, ArrowRight, Quote, Heart } from "lucide-react";
import Marquee from "@/components/magicui/marquee";

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark font-sans selection:bg-sage/30">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20 pb-12 md:pt-32 md:pb-20">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Wellness Lifestyle" 
              fill 
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-cream/40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
          </motion.div>

          <div className="p-4 max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center mt-2 md:mt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-sage/30 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-sage mb-8 shadow-sm"
            >
              <Heart className="w-4 h-4 mr-2" />
              Holistic Wellness Coaching
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-semibold text-center tracking-tight text-dark mb-6 leading-tight"
            >
              Transform Your <br className="hidden md:block" />
              <span className="italic text-sage">Mind, Body & Lifestyle</span> Naturally
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-dark/90 max-w-2xl text-center mx-auto leading-relaxed font-medium"
            >
              Helping busy professionals achieve balance, energy, confidence, and sustainable wellness through personalized coaching.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-sage text-white hover:bg-sage/90 px-8 py-4 text-base font-medium shadow-xl shadow-sage/20 transition-all hover:-translate-y-1">
                Book Free Consultation
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center rounded-full text-dark border border-dark/10 hover:bg-beige/30 bg-white/50 backdrop-blur-md px-8 py-4 text-base font-medium transition-all hover:-translate-y-1">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FEATURED SERVICES */}
        <section id="services" className="scroll-mt-24 pt-4 pb-8 md:pt-8 md:pb-14 bg-cream relative">
          <div className="container px-6 max-w-screen-xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-sage mb-4">Core Focus Areas</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-dark font-semibold">Comprehensive Wellness</h3>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6 max-w-4xl mx-auto"
            >
              {[
                { title: "Nutrition Coaching", icon: Leaf, desc: "Intuitive eating strategies to nourish your body and build sustainable, healthy habits." },
                { title: "Mindfulness & Meditation", icon: Wind, desc: "Techniques to regulate your nervous system, reduce anxiety, and find deep inner stillness." },
                { title: "Fitness & Lifestyle", icon: Activity, desc: "Mindful movement practices designed to build functional strength and improve energy." },
                { title: "Stress Management", icon: Brain, desc: "Actionable protocols for ambitious professionals to recover from chronic stress and burnout." }
              ].map((svc, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 hover:border-sage/40 hover:shadow-[0_20px_50px_rgba(138,163,153,0.15)] shadow-sm transition-all duration-500 rounded-[2rem] group">
                    <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-center shrink-0 group-hover:bg-sage/10 group-hover:border-sage/20 transition-all duration-300">
                      <svc.icon className="w-8 h-8 text-sage" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-serif font-semibold text-dark mb-1">{svc.title}</h4>
                      <p className="text-dark/80 font-normal leading-relaxed text-sm md:text-base">{svc.desc}</p>
                    </div>
                    <div className="shrink-0 mt-2 md:mt-0 self-end md:self-center">
                      <ArrowRight className="w-6 h-6 text-sage/40 group-hover:text-sage group-hover:translate-x-1.5 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT PREVIEW / MEET OUR COACHES */}
        <section id="about" className="scroll-mt-24 pt-4 pb-8 md:pt-8 md:pb-14 bg-white relative overflow-hidden">
          <div className="container px-6 max-w-screen-xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-sage mb-4">Expert Guidance</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-dark">Meet Our Wellness Coaches</h3>
              <p className="text-dark/70 max-w-xl mx-auto mt-4 text-sm md:text-base font-normal leading-relaxed">
                Our multidisciplinary team of certified specialists is dedicated to guiding you back to your natural state of physical and mental vitality.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {[
                {
                  name: "Dr. Evelyn Harper",
                  role: "Founder & Lead Holistic Coach",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
                  bio: "Dr. Evelyn specializes in metabolic health, intuitive nutrition, and hormone balance. She helps high-performing professionals optimize energy levels naturally.",
                  specialties: ["Metabolic Health", "Nutrition", "Hormones"]
                },
                {
                  name: "Marcus Vance",
                  role: "Mindfulness & Nervous System Coach",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
                  bio: "Marcus teaches evidence-based breathwork and neuro-association protocols to reduce anxiety, combat burnout, and establish emotional resilience.",
                  specialties: ["Breathwork", "Burnout Recovery", "Resilience"]
                },
                {
                  name: "Clara Thorne",
                  role: "Movement Therapy & Somatic Coach",
                  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
                  bio: "Clara focuses on somatic experiencing and flow-state movement programs that heal physical tension, correct posture, and encourage fluid muscle recovery.",
                  specialties: ["Somatic Movement", "Posture", "Flexibility"]
                },
                {
                  name: "Dr. Adrian Sterling",
                  role: "Sleep Science & Rest Expert",
                  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
                  bio: "Dr. Adrian uses chronobiology and circadian optimization models to restore natural sleep patterns, enabling sustainable daily alertness.",
                  specialties: ["Circadian Rhythm", "Sleep Science", "Rest"]
                }
              ].map((coach, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-cream/30 border border-beige hover:border-sage/40 hover:shadow-xl hover:shadow-sage/5 transition-all duration-300 rounded-[2.5rem]">
                    {/* Small Elegant Round Photo */}
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0 relative border-2 border-sage shadow-md">
                      <Image 
                        src={coach.img} 
                        alt={coach.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-sage">{coach.role}</span>
                      <h4 className="text-xl font-serif font-bold text-dark mt-1 mb-2">{coach.name}</h4>
                      <p className="text-dark/80 text-sm font-normal leading-relaxed mb-4">{coach.bio}</p>
                      
                      {/* Specialties Badges */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                        {coach.specialties.map((spec, idx) => (
                          <span key={idx} className="text-[10px] bg-white border border-beige text-dark/70 font-medium px-2.5 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section id="testimonials" className="scroll-mt-24 pt-4 pb-8 md:pt-8 md:pb-14 bg-beige/30 border-y border-beige relative overflow-hidden">
          <div className="container px-6 max-w-screen-xl mx-auto">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               className="text-center mb-6 md:mb-8"
             >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-sage mb-4">Client Success</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-dark">Stories of Transformation</h3>
            </motion.div>
          </div>

          {/* Marquee Wrapper with Horizontal Gradient Masks for a Sleek Premium Fade */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6 md:gap-8 mt-6">
            <Marquee pauseOnHover className="[--duration:40s]">
              {[
                { name: "Sarah Jenkins", role: "Creative Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", quote: "Working with my coach changed my mindset completely. I finally feel in control of my well-being instead of constantly reacting to stress." },
                { name: "Michael Chen", role: "Software Engineer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", quote: "I feel healthier, calmer, and more confident than ever. The 30-day reset program gave me my energy back." },
                { name: "Elena Rodriguez", role: "Entrepreneur", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop", quote: "The coaching experience was life-changing. Learning to integrate mindfulness into my busy schedule transformed everything." },
                { name: "Jessica Lewis", role: "UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", quote: "My productivity soared after I started implementing the stress reduction techniques. I no longer feel drained by 3 PM." },
                { name: "Daniel Roberts", role: "Sales Executive", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", quote: "Finding balance between a high-pressure job and my personal health seemed impossible until I met my coach. An absolute game-changer." },
                { name: "Amanda Foster", role: "Healthcare Administrator", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop", quote: "The sleep protocols worked within a week. I wake up refreshed and have so much more patience with my team." }
              ].map((review, i) => (
                <div key={i} className="w-[280px] sm:w-[350px] md:w-[380px] shrink-0 p-2">
                  <Card className="bg-white border-beige shadow-sm rounded-3xl p-5 md:p-6 relative h-full flex flex-col hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Quote className="absolute top-6 right-6 w-6 h-6 text-beige" />
                    <div className="flex text-sage mb-4 space-x-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-dark/80 font-normal italic mb-4 leading-relaxed flex-1 text-sm md:text-base">&quot;{review.quote}&quot;</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-beige">
                        <Image src={review.img} alt={review.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-dark">{review.name}</h4>
                        <p className="text-[11px] text-dark/50">{review.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {[
                { name: "David Kim", role: "Product Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", quote: "The physical energy gains are real. I used to rely on 4 cups of coffee; now I wake up fully charged just from the sleep and breathwork protocols." },
                { name: "Sophia Martinez", role: "Marketing VP", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", quote: "As a busy executive, finding a coach who understands the demands of high-level stress was a game-changer. Simply phenomenal results." },
                { name: "James O'Connor", role: "Financial Analyst", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", quote: "The nutritional guidance was incredibly practical. No weird diets, just simple, energy-dense foods that fit my packed workday." },
                { name: "Rachel Greene", role: "Freelance Writer", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop", quote: "I completely transformed my relationship with food and movement. The approach is so intuitive and manageable." },
                { name: "Marcus Johnson", role: "Operations Manager", img: "https://images.unsplash.com/photo-1504257432389-523431e1a18f?q=80&w=200&auto=format&fit=crop", quote: "A brilliant approach to combating burnout. The personalized strategies have not only improved my work life but my home life too." },
                { name: "Chloe Dubois", role: "Art Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop", quote: "The mindfulness sessions have given me a new sense of peace and creativity. Highly recommend for anyone feeling overwhelmed." }
              ].map((review, i) => (
                <div key={i} className="w-[280px] sm:w-[350px] md:w-[380px] shrink-0 p-2">
                  <Card className="bg-white border-beige shadow-sm rounded-3xl p-5 md:p-6 relative h-full flex flex-col hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Quote className="absolute top-6 right-6 w-6 h-6 text-beige" />
                    <div className="flex text-sage mb-4 space-x-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-dark/80 font-normal italic mb-4 leading-relaxed flex-1 text-sm md:text-base">&quot;{review.quote}&quot;</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-beige">
                        <Image src={review.img} alt={review.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-dark">{review.name}</h4>
                        <p className="text-[11px] text-dark/50">{review.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Marquee>

            {/* Left and Right Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-cream via-cream/40 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-cream via-cream/40 to-transparent z-10" />
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section id="blog" className="scroll-mt-24 pt-4 pb-8 md:pt-8 md:pb-14 bg-cream">
          <div className="container px-6 max-w-screen-xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex justify-between items-end mb-6 md:mb-8"
            >
              <div>
                <h2 className="text-sm font-semibold tracking-widest uppercase text-sage mb-4">Wellness Journal</h2>
                <h3 className="text-4xl font-serif font-semibold text-dark">Latest Insights</h3>
              </div>
              <Link href="#blog" className="hidden md:inline-flex items-center text-sage font-medium group hover:text-sage/80 transition-colors">
                View all articles <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { date: "Oct 12, 2026", category: "Mindfulness", title: "5 Morning Rituals for Mental Clarity", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" },
                { date: "Oct 05, 2026", category: "Nutrition", title: "Healing Your Gut: The Foundation of Energy", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" },
                { date: "Sep 28, 2026", category: "Stress Reduction", title: "Recognizing and Healing from Burnout", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop" }
              ].map((post, i) => (
                <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative mb-6">
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-sage mb-3 space-x-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-beige"></span>
                    <span className="text-dark/40">{post.date}</span>
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-dark group-hover:text-sage transition-colors mb-4">{post.title}</h4>
                  <span className="text-dark/60 font-medium group-hover:text-sage transition-colors text-sm flex items-center">
                    Read more <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="scroll-mt-32 relative py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2000&auto=format&fit=crop" 
              alt="Calm Nature" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sage/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-dark/20" />
          </div>

          <div className="container relative z-10 px-6 max-w-screen-md mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-semibold text-white mb-4"
            >
              Start Your Wellness Journey Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white mb-6 font-medium"
            >
              Take the first step towards a more balanced, energized, and fulfilled life.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl text-left"
            >
              <h3 className="text-2xl font-serif text-dark font-semibold mb-4">Request a Consultation</h3>
              <div className="space-y-4 mb-4">
                <input type="text" placeholder="Full Name" className="w-full bg-cream border border-beige rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-sage transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-cream border border-beige rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-sage transition-colors" />
              </div>
              <button className="w-full rounded-xl bg-sage hover:bg-sage/90 text-white font-medium py-4 transition-colors">
                Book Free Call
              </button>
            </motion.form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
