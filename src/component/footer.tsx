import Link from "next/link";
import Image from "next/image"; // 1. Import Image
import { Mail, Phone, MapPin, ArrowRight, Heart, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b160d] text-white pt-20 pb-8 border-t border-emerald-950 relative overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 relative z-10">

        {/* BRAND COLUMN */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            
            {/* --- ADD YOUR LOGO HERE --- */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/logo1.png"// Update with your image path inside the public folder
                  alt="Parakletus Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-white">
                PARAKLETUS
              </h2>
            </Link>
            {/* -------------------------- */}

          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            A nonprofit organization dedicated to transforming lives through education, healthcare, community development, and biblical leadership training.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-emerald-400 font-medium">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60">
              <ShieldCheck size={14} /> Registered Nonprofit
            </span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                Services
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                Programs & Institute
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Core Programs</h3>
          <ul className="space-y-2.5 text-gray-300 text-sm">
            <li className="hover:text-emerald-400 transition-colors cursor-default">Education Support</li>
            <li className="hover:text-emerald-400 transition-colors cursor-default">Healthcare Camps</li>
            <li className="hover:text-emerald-400 transition-colors cursor-default">Women Empowerment</li>
            <li className="hover:text-emerald-400 transition-colors cursor-default">Youth Development</li>
            <li className="hover:text-emerald-400 transition-colors cursor-default">Disaster Relief</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="mailto:info@parakletus.com" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <span className="truncate">info@parakletus.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+923000000000" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <span>+92 300 0000000</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Pakistan</span>
              </div>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 mt-5">
            <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-gray-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all shadow-sm">
              <Globe size={16} />
            </a>
            <a href="#heart" aria-label="Support Us" className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-gray-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all shadow-sm">
              <Heart size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-emerald-950 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Parakletus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}