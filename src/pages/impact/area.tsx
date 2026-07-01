import { GraduationCap, HeartPulse, Scale, Building2, HandHeart, Users, Zap, BookOpen } from "lucide-react";

export default function AreasOfImpact() {
  const impacts = [
    { icon: GraduationCap, title: "Education", desc: "Creating opportunities through learning & mentorship." },
    { icon: HeartPulse, title: "Healthcare", desc: "Improving wellness through outreach & care." },
    { icon: Scale, title: "Law & Justice", desc: "Protecting rights through legal advocacy." },
    { icon: Building2, title: "Development", desc: "Building stronger, sustainable communities." },
    { icon: HandHeart, title: "Humanitarian", desc: "Emergency relief and rebuilding lives." },
    { icon: Users, title: "Women Empowerment", desc: "Leadership training & vocational support." },
    { icon: Zap, title: "Youth Development", desc: "Investing in future community leaders." },
    { icon: BookOpen, title: "Spiritual", desc: "Growing in faith, character, and service." },
  ];

  return (
    <section className="pt-32 pb-16 bg-gray-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with better breathing room */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-green-500 font-bold uppercase tracking-[0.3em] text-[10px]">Our Core Pillars</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-8 tracking-tight">
            Areas of <span className="text-gray-500">Impact</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            We operate across eight strategic sectors to ensure holistic, sustainable growth for every community we serve.
          </p>
        </div>

        {/* Bento Grid Layout - Balanced Spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                  <item.icon className="text-green-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}