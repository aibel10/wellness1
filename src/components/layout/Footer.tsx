import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 relative overflow-hidden text-white border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col md:flex-row items-start justify-between gap-12">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">the future.</span>
          </h2>
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-xl md:text-3xl font-medium text-white/80 group-hover:text-white transition-colors">
              Start a project
            </span>
            <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl tracking-tighter text-white">
                Tally<span className="text-blue-500">Solutions.</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-sm text-lg leading-relaxed">
              We design and build the most advanced digital experiences on the web.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Socials</h3>
            <ul className="space-y-4 text-white/60">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    {link} <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Legal</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} TallySolutions. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Designed with precision.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
