"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryOptions = [
  "Video",
  "Doctor",
  "Nutritionist",
  "Engineer",
  "Corporate Worker",
] as const;

type Category = (typeof categoryOptions)[number];

type StudentTestimonial = {
  name: string;
  program: string;
  outcome: string;
  image: string;
  label: "TESTIMONIAL" | "SUCCESS STORY";
};

const testimonials: Record<Category, StudentTestimonial[]> = {
  Video: [
    {
      name: "Aarohi",
      program: "Holistic Wellness Coach",
      outcome: "Built a confident coaching practice",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Kavya Menon",
      program: "Health & Lifestyle Coach",
      outcome: "Launched her first paid workshop",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Rahul",
      program: "Nutrition Coaching Student",
      outcome: "Shifted into client-facing wellness work",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Mira",
      program: "Mind-Body Wellness",
      outcome: "Created a daily client routine system",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
  ],
  Doctor: [
    {
      name: "Dr. Neha",
      program: "Integrative Wellness Coach",
      outcome: "Added preventive care coaching",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Dr. Arjun",
      program: "Health & Wellness Coach",
      outcome: "Designed a patient education program",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Dr. Rhea",
      program: "Lifestyle Medicine Track",
      outcome: "Brought coaching into clinic visits",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Dr. Ishan",
      program: "Wellness Certification",
      outcome: "Moved from advice to guided action",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
  ],
  Nutritionist: [
    {
      name: "Pooja",
      program: "Nutrition & Habit Coaching",
      outcome: "Turned meal plans into habit systems",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Sameera",
      program: "Gut Health Coaching",
      outcome: "Built a signature consult framework",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Ananya",
      program: "Wellness Coach Certification",
      outcome: "Started group coaching online",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Nikhil",
      program: "Performance Nutrition",
      outcome: "Added behavior coaching to practice",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
  ],
  Engineer: [
    {
      name: "Naveen",
      program: "Health & Wellness Coach",
      outcome: "Changed career without losing structure",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Aditya",
      program: "Corporate Wellness Track",
      outcome: "Built coaching around busy workdays",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Sneha",
      program: "Lifestyle Coach Certification",
      outcome: "Created a wellness side practice",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Vikram",
      program: "Stress & Recovery Coaching",
      outcome: "Helped teams improve energy routines",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
  ],
  "Corporate Worker": [
    {
      name: "Munmum",
      program: "Health & Wellness Coach",
      outcome: "Moved from corporate work to coaching",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Manisha Pandey",
      program: "Corporate Job to Wellness Coach",
      outcome: "Started client sessions after certification",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
    {
      name: "Ritu",
      program: "Health & Wellness Coach",
      outcome: "Created a credible coaching identity",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Naveen",
      program: "Health & Wellness Coach",
      outcome: "Built a wellness career path",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
      label: "SUCCESS STORY",
    },
    {
      name: "Aditi",
      program: "Lifestyle Coaching Student",
      outcome: "Started weekend wellness cohorts",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500&auto=format&fit=crop",
      label: "TESTIMONIAL",
    },
  ],
};

export function StudentTestimonialsSection({
  fullPage = false,
}: {
  fullPage?: boolean;
}) {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Corporate Worker");

  return (
    <section
      id="testimonials"
      className={cn(
        "relative overflow-hidden bg-[#faf9f6] text-[#242220]",
        fullPage
          ? "min-h-screen py-14 sm:py-16 md:py-20"
          : "scroll-mt-24 py-14 sm:py-16 md:py-20",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 text-center">
        <h2 className="font-serif text-[2.35rem] font-medium leading-tight tracking-normal text-[#252321] sm:text-5xl md:text-6xl">
          What Our Students Say
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categoryOptions.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f29a08]/40 sm:text-base",
                  isActive
                    ? "bg-[#f29a08] text-white shadow-[0_12px_24px_rgba(242,154,8,0.24)]"
                    : "bg-white text-[#55514d] shadow-[0_10px_24px_rgba(27,24,20,0.04)] hover:bg-[#fff7eb] hover:text-[#242220]",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 w-screen overflow-hidden">
        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max snap-x snap-mandatory gap-7 px-5 pb-3 sm:px-10 lg:px-[max(3.5rem,calc((100vw-84rem)/2))]">
            {testimonials[activeCategory].map((testimonial) => (
              <StudentVideoCard
                key={`${activeCategory}-${testimonial.name}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentVideoCard({
  testimonial,
}: {
  testimonial: StudentTestimonial;
}) {
  return (
    <article className="w-80 shrink-0 snap-center overflow-hidden rounded-[10px] border border-[#f29a08] bg-white shadow-[0_8px_22px_rgba(34,31,26,0.06)] sm:w-[25rem]">
      <div className="relative h-[13.75rem] overflow-hidden bg-[#fffaf1] sm:h-[14.75rem]">
        <div className="absolute inset-x-0 top-0 z-20 h-2 bg-black" />
        <div className="absolute inset-x-0 top-2 z-10 h-7 bg-[#f29a08]" />
        <span className="absolute left-3 top-2.5 z-20 font-serif text-xs font-semibold italic text-white/85">
          WellnessCoach
        </span>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,154,8,0.08),transparent_38%),radial-gradient(circle_at_20%_74%,rgba(242,154,8,0.9)_0_64px,transparent_65px)]" />
        <div
          className={cn(
            "absolute inset-x-3 top-9 select-none text-center font-serif font-bold leading-none tracking-normal text-[#f29a08] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]",
            testimonial.label === "SUCCESS STORY"
              ? "text-[1.85rem] sm:text-[2.1rem]"
              : "text-[2.1rem] sm:text-[2.35rem]",
          )}
        >
          {testimonial.label}
        </div>
        <div className="absolute inset-x-0 top-14 select-none text-center font-serif text-[3.1rem] font-black leading-none text-[#f29a08]/5 sm:text-[3.6rem]">
          TESTIMONIAL
        </div>

        <div className="absolute bottom-0 left-5 z-10 h-[8.8rem] w-[8.8rem] overflow-hidden rounded-t-full border-[3px] border-[#f29a08] bg-[#f8c461] sm:h-[9.8rem] sm:w-[9.8rem]">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} testimonial`}
            fill
            sizes="170px"
            className="object-cover object-top"
          />
        </div>

        <div className="absolute bottom-10 left-[46%] right-4 z-10 text-center">
          <p className="font-serif text-xl font-semibold leading-tight text-[#9f6c02] sm:text-2xl">
            {testimonial.name}
          </p>
          <p className="mt-1 text-[0.78rem] font-semibold uppercase leading-tight tracking-normal text-[#302b26]">
            {testimonial.program}
          </p>
          <p className="mt-1 text-[0.72rem] leading-tight text-[#5f5850]">
            {testimonial.outcome}
          </p>
        </div>

        <div className="absolute bottom-3 right-4 z-20 flex text-white">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
            />
          ))}
        </div>

        <button
          type="button"
          aria-label={`Play ${testimonial.name} testimonial`}
          className="absolute left-1/2 top-1/2 z-30 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/60 text-white shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:h-[4.7rem] sm:w-[7.2rem]"
        >
          <Play className="ml-1 h-9 w-9 fill-current" />
        </button>
      </div>

      <div className="flex h-14 items-center justify-center border-t-[7px] border-black bg-[#fdfdfc] px-5 sm:h-16">
        <h3 className="truncate font-serif text-xl font-medium text-[#3d3935] sm:text-2xl">
          {testimonial.name}
        </h3>
      </div>
    </article>
  );
}
