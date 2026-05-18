"use client";

import { useState } from "react";

const PHONE_NUMBER = "tel:+15551234567"; // ← Replace with your actual phone number

export function CallButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={PHONE_NUMBER}
      aria-label="Call us"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 left-6 z-[9999] flex items-center gap-3 group"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-sage animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-sage animate-ping opacity-20 [animation-delay:0.4s]" />

        {/* Button */}
        <div
          className={`
            relative w-14 h-14 rounded-full bg-sage flex items-center justify-center shadow-xl
            transition-all duration-300
            ${hovered ? "scale-110 shadow-[0_8px_30px_rgba(138,163,153,0.6)]" : "shadow-[0_4px_20px_rgba(138,163,153,0.4)]"}
          `}
        >
          {/* Phone SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
          </svg>
        </div>
      </div>

      {/* Tooltip */}
      <span
        className={`
          hidden md:flex items-center bg-white text-dark text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-gray-100
          transition-all duration-300 whitespace-nowrap
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
        `}
      >
        Call us now!
      </span>
    </a>
  );
}
