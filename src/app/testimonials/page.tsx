import type { Metadata } from "next";
import { StudentTestimonialsSection } from "@/components/home/StudentTestimonialsSection";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description:
    "Watch student success stories from doctors, nutritionists, engineers, and corporate professionals.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <StudentTestimonialsSection fullPage />
    </main>
  );
}
