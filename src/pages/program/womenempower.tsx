import { Target, Lightbulb, Scale, Users, TrendingUp, HandHeart } from "lucide-react";

export default function WomenEmpower() {
  const initiatives = [
    { icon: Target, title: "Leadership Training" },
    { icon: Lightbulb, title: "Skill Development" },
    { icon: Scale, title: "Legal Rights Awareness" },
    { icon: Users, title: "Women's Workshops" },
    { icon: TrendingUp, title: "Economic Empowerment" },
    { icon: HandHeart, title: "Mentorship" },
  ];

  return (
    <section className="py-24 bg-rose-50/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-8">
            <span className="text-rose-600 font-bold uppercase tracking-[0.2em] text-xs">
              Women Empowerment
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Empowering Women <br /> to Lead Change
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Women are essential to strong families and thriving communities. Parakletus promotes dignity, education, leadership, and equal opportunities by supporting women through training, mentorship, legal awareness, and community engagement.
            </p>
            
            <div className="p-6 bg-white rounded-2xl border border-rose-100 shadow-sm">
              <p className="text-gray-800 font-medium italic">
                "When a woman is empowered, she transforms not just her family, but her entire community."
              </p>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-2 gap-4">
            {initiatives.map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-rose-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <item.icon size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-center text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}