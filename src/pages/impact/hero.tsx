import Link from "next/link";

export default function ImpactHero() {
  return (
    // Increased pt-32 to push content down away from the Navbar
    <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 overflow-hidden bg-gray-950">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950 -z-0" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Pre-title Label: Adjusted spacing */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold uppercase tracking-[0.25em] text-[10px]">
            Our Impact
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
          Creating Lasting Change <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            in Communities
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Every program, partnership, and act of compassion contributes to
          transforming lives. Our impact reflects our unwavering commitment to
          justice, dignity, and sustainable development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#program"
            className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.3)] text-center"
          >
            View Our Programs
          </Link>

          <Link
            href="/annual-report.pdf"
            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all text-center"
          >
            Download Annual Report
          </Link>
        </div>
      </div>
    </section>
  );
}