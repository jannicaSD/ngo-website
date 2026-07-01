import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F11] text-white pt-20">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest">
            PARAKLETUS
          </h2>

          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            A nonprofit organization dedicated to transforming lives through education,
            healthcare, and community development.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>

          <ul className="space-y-2 text-white/70 text-sm">
            <li>Education Support</li>
            <li>Healthcare Camps</li>
            <li>Women Empowerment</li>
            <li>Youth Development</li>
            <li>Disaster Relief</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-white/70 text-sm">
            Email: info@parakletus.org
          </p>
          <p className="text-white/70 text-sm mt-2">
            Phone: +92 300 0000000
          </p>
          <p className="text-white/70 text-sm mt-2">
            Location: Pakistan
          </p>

          {/* SOCIAL ICONS PLACEHOLDER */}
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 bg-white/10 rounded-full" />
            <div className="w-8 h-8 bg-white/10 rounded-full" />
            <div className="w-8 h-8 bg-white/10 rounded-full" />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-12 py-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Parakletus. All rights reserved.
      </div>

    </footer>
  );
}