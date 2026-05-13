"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spotlight } from "@/components/aceternity/spotlight";
import Marquee from "@/components/magicui/marquee";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  "Microsoft",
  "AWS",
  "Tally Solutions",
  "Google Cloud",
  "IBM",
  "Oracle",
  "Salesforce",
];

export function HomePage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      // Services Animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Products Animation
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Aceternity Spotlight */}
        <section
          ref={heroRef}
          className="relative h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden"
        >
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 mt-32 md:mt-0">
            <h1 className="hero-text text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Expert Tally Solutions <br /> for Modern Business.
            </h1>
            <p className="hero-text mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Empower your enterprise with seamless accounting, inventory, and compliance solutions. We provide end-to-end TallyPrime customization, integration, and training.
            </p>
            <div className="hero-text mt-8 flex justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-neutral-200">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-white border-white hover:bg-white hover:text-black">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Marquee with MagicUI */}
        <section className="py-12 border-y bg-background overflow-hidden flex flex-col items-center justify-center relative">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Trusted by Industry Leaders</p>
          <Marquee className="[--duration:20s]">
            {partners.map((partner) => (
              <div
                key={partner}
                className="mx-4 flex items-center justify-center px-8 py-4 bg-muted/30 rounded-xl border"
              >
                <span className="text-lg font-bold text-foreground/80">{partner}</span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-24 bg-background">
          <div className="container px-4 max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We offer comprehensive solutions tailored to your specific industry requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Tally Customization", desc: "Tailor TallyPrime to fit your unique workflow and business logic perfectly." },
                { title: "Implementation", desc: "Seamless deployment of Tally software across your organization." },
                { title: "Corporate Training", desc: "Expert training sessions to maximize your team's productivity." },
                { title: "AMC & Support", desc: "24/7 dedicated support and annual maintenance contracts." },
              ].map((service, idx) => (
                <Card key={idx} className="service-card border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" ref={productsRef} className="py-24 bg-muted/30">
          <div className="container px-4 max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">TallyPrime Editions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Choose the right software for your business scale and needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Silver",
                  price: "Single User",
                  desc: "Ideal for standalone PCs. Complete accounting & inventory.",
                  features: ["Single User License", "Accounting & Inventory", "GST Ready", "Basic Reporting"]
                },
                {
                  title: "Gold",
                  price: "Multi User",
                  desc: "Perfect for multiple users on a Local Area Network.",
                  features: ["Unlimited Users on LAN", "Advanced Inventory", "Payroll Management", "Priority Support"]
                },
                {
                  title: "Server",
                  price: "Enterprise",
                  desc: "High concurrency, security, and monitoring for large enterprises.",
                  features: ["High Performance", "Advanced Security", "Concurrent Operations", "Server Monitoring"]
                }
              ].map((product, idx) => (
                <Card key={idx} className="product-card flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-xl font-semibold text-foreground mt-2">{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-6">{product.desc}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
