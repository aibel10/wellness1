"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "15551234567"; // ← Replace with your actual WhatsApp number (no + or spaces)
const WHATSAPP_MESSAGE = "Hi! I'd like to book a free wellness consultation.";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span
        className={`
          hidden md:flex items-center bg-white text-dark text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-gray-100
          transition-all duration-300 whitespace-nowrap
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Chat with us!
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 animation-delay-300" />

        {/* Main button */}
        <div
          className={`
            relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl
            transition-all duration-300
            ${hovered ? "scale-110 shadow-[0_8px_30px_rgba(37,211,102,0.5)]" : "shadow-[0_4px_20px_rgba(37,211,102,0.35)]"}
          `}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.184.591 4.23 1.619 5.99L4 29l8.278-1.588A11.95 11.95 0 0 0 16.003 28C22.63 28 28 22.628 28 16.003 28 9.373 22.63 3 16.003 3zm0 21.83a9.826 9.826 0 0 1-4.983-1.357l-.357-.21-3.705.711.742-3.605-.232-.37A9.798 9.798 0 0 1 6.17 15c0-5.424 4.41-9.83 9.833-9.83 5.424 0 9.832 4.406 9.832 9.83 0 5.425-4.408 9.83-9.832 9.83zm5.388-7.38c-.295-.148-1.748-.862-2.019-.96-.272-.099-.47-.148-.668.148-.198.296-.767.96-.94 1.158-.172.197-.345.222-.64.074-.295-.148-1.247-.459-2.374-1.464-.877-.78-1.47-1.744-1.642-2.04-.172-.296-.018-.456.13-.603.132-.132.295-.346.443-.519.148-.173.197-.296.296-.494.099-.197.05-.37-.025-.518-.074-.148-.668-1.61-.915-2.204-.24-.578-.485-.5-.668-.51l-.568-.01c-.197 0-.518.074-.79.37s-1.038 1.016-1.038 2.477c0 1.462 1.063 2.875 1.211 3.073.148.197 2.09 3.19 5.063 4.476.708.306 1.26.488 1.69.625.71.226 1.356.194 1.866.118.569-.085 1.748-.714 1.995-1.404.246-.69.246-1.281.172-1.404-.074-.123-.272-.197-.568-.345z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
