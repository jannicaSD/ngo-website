import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50 to-white pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
          Join the Mission
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Become the Hands and <br />
          <span className="text-green-600">Feet of Hope</span>
        </h1>

        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Volunteers are at the heart of Parakletus. By sharing your time, skills, and 
          compassion, you can help protect human dignity, strengthen communities, 
          and create lasting change through faith-driven service.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 px-10 py-5 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            Become a Volunteer <ArrowRight size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:border-green-600 hover:text-green-700 transition-all">
            Contact Us <Mail size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;