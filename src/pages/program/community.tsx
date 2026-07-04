import { Sprout, Droplets, Hammer, Users, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

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
    <section id="community" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT COLUMN: Sticky on Desktop, Static on Mobile */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <span className="text-green-700 font-bold uppercase tracking-[0.2em] text-xs">
              Community Development
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building Strong <br /> Communities
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Healthy communities grow through unity, opportunity, and sustainable development. 
              Parakletus partners with local groups to improve living conditions, strengthen 
              families, and encourage long-term social growth.
            </p>

            <button className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all active:scale-95 flex items-center gap-3">
              Explore Our Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* FOCUS AREAS GRID */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-default group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <area.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{area.title}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1 font-semibold">Initiative</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}