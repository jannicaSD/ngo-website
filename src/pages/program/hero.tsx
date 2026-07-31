import Link from 'next/link';

export default function Hero() {
 return (
    // Added pt-[140px] to push content down below the fixed navbar
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden pt-[140px] pb-20">
      
      {/* Background Image - Referencing image_084ebd.jpg */}
      <div className="absolute inset-0 bg-gray-950">
        <img 
          src="/images/image_084ebd.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-40" 
        />
        {/* Dark overlay with a subtle warm gold-green tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Transforming Lives Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-amber-400">
              Faith, Justice & Service
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Parakletus delivers sustainable programs that protect human dignity, empower vulnerable families, and inspire hope through Christian service.
          </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/program"
            className="px-8 py-4 font-bold text-white transition-all bg-green-600 rounded-xl hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/50 active:scale-95"
          >
            Explore Programs
          </Link>
          <Link 
            href="/volunteer"
            className="px-8 py-4 font-bold text-white transition-all border border-amber-400/40 bg-white/5 backdrop-blur-md hover:bg-amber-400/10 hover:border-amber-400/70 active:scale-95 rounded-xl"
          >
            Become a Volunteer
          </Link>
          <Link 
            href="/partner"
            className="px-8 py-4 font-bold text-white transition-all border border-green-500/40 bg-white/5 backdrop-blur-md hover:bg-green-500/10 hover:border-green-500/70 active:scale-95 rounded-xl"
          >
            Partner With Us
          </Link>
        </div>
      </div>
      
    </section>
  );
}