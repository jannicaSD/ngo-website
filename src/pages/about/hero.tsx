import Image from 'next/image';
import Link from 'next/link';
import AboutHeroImage from '../../../public/about-hero.jpg';

export default function Hero() {
  return (     
    <section className="w-full pt-32 pb-24  relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={AboutHeroImage}
          alt="About Parakletus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Darker Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      {/* Added pt-24 to push content below the fixed header/navbar */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24">
        
        {/* Badge: Added margin to separate from the navbar */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6">
          <span className="uppercase tracking-[0.2em] text-white/90 font-bold text-[10px]">
            About Parakletus
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          Serving Communities with <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Faith & Compassion
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto font-light mb-10">
          Parakletus is a faith-based nonprofit dedicated to transforming lives through education, healthcare, and sustainable development. We empower individuals to thrive.
        </p>

        {/* Buttons: Fixed the "Get Involved" style to be bright and visible */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/program" 
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-green-500 transition-all shadow-lg active:scale-95"
          >
            Explore Programs
          </Link>
          <Link 
            href="/volunteer" 
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all active:scale-95"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}