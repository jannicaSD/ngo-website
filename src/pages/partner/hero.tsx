import { Handshake, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50/50 blur-[128px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
          Strategic Collaboration
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Building Stronger <br />
          <span className="text-green-600">Communities Together</span>
        </h1>

        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Partnership is at the heart of sustainable community transformation. 
          Together, we can extend hope, protect human dignity, and create 
          opportunities that change lives.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 px-10 py-5 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            <Handshake size={20} /> Become a Partner
          </button>
          <button className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:border-green-600 hover:text-green-700 transition-all">
            Contact Us <Mail size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}