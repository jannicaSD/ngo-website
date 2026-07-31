import Link from "next/link";
import {
  Sprout,
  Droplets,
  Hammer,
  Users,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Community() {
  const focusAreas = [
    { icon: Hammer, title: "Community Projects" },
    { icon: HeartHandshake, title: "Livelihood Support" },
    { icon: Droplets, title: "Clean Water Initiatives" },
    { icon: Sprout, title: "Community Training" },
    { icon: Users, title: "Family Support" },
    { icon: ShieldCheck, title: "Capacity Building" },
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-emerald-950 via-green-950 to-gray-950 text-white px-6 relative overflow-hidden border-y border-emerald-900/40">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT COLUMN: Sticky on Desktop, Static on Mobile */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold tracking-widest uppercase border border-green-500/30">
              Community Development
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Building Strong <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Communities
              </span>
            </h2>
            
            <p className="text-lg text-emerald-100/80 leading-relaxed font-light">
              Healthy communities grow through unity, opportunity, and sustainable development. 
              Parakletus partners with local groups to improve living conditions, strengthen 
              families, and encourage long-term social growth.
            </p>

            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition-all active:scale-95 shadow-lg shadow-green-900/40 group"
            >
              Explore Our Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* FOCUS AREAS GRID */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 bg-emerald-950/60 backdrop-blur-md rounded-2xl border border-emerald-800/60 shadow-sm hover:border-green-400 hover:bg-emerald-900/80 transition-all duration-300 cursor-default group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-900/80 text-green-400 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <area.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-100">{area.title}</h4>
                  <p className="text-[10px] text-emerald-300/70 uppercase tracking-[0.2em] mt-1 font-semibold">Initiative</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}