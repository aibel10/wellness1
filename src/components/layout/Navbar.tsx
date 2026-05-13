"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight text-primary">TallySolutions.</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
          <Link href="#products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
          <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About Us</Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Contact Sales
          </Link>
          <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
