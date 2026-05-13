import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-background/50">
      <div className="container max-w-screen-2xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-primary">TallySolutions.</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted partner for TallyPrime sales, customization, training, and support across all industries.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Services</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary transition-colors">Tally Customization</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Tally Support</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Tally Training</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Cloud Hosting</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Products</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary transition-colors">TallyPrime Silver</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">TallyPrime Gold</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">TallyPrime Server</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Add-ons</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Email: sales@tallysolutions.test</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: Business Center, Tech Park</li>
          </ul>
        </div>
      </div>
      <div className="container max-w-screen-2xl px-4 mt-12 pt-8 border-t text-sm text-center text-muted-foreground">
        © {new Date().getFullYear()} TallySolutions Partner. All rights reserved.
      </div>
    </footer>
  );
}
