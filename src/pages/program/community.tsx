import { Sprout, Droplets, Hammer, Users, HeartHandshake, ShieldCheck } from "lucide-react";

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
    <section id="community" className="pt-0 pb-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Community Development
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Building Strong <br /> Communities
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Healthy communities grow through unity, opportunity, and sustainable development. Parakletus partners with local groups to improve living conditions, strengthen families, and encourage long-term social growth.
            </p>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all active:scale-95 flex items-center gap-2">
              Explore Our Projects
            </button>
          </div>

          {/* Focus Areas Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <area.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{area.title}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Initiative</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}