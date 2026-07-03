import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center border-b border-white/5 bg-gradient-to-b from-[#0a1f13] to-[#05100a] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-green-500 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
          We are Here to Listen, Support, and Serve
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
          Contact Us
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Whether you are seeking legal assistance, exploring partnership opportunities, or simply learning more about our work, we welcome your message.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="#contact-form" 
            className="px-8 py-4 font-bold bg-green-600 rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/40 transition-all duration-300 active:scale-95"
          >
            Get in Touch
          </Link>
          <Link 
            href="#immediate-help" 
            className="px-8 py-4 font-bold border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 active:scale-95 rounded-xl"
          >
            Request Assistance
          </Link>
        </div>
      </div>
    </section>
  );
}