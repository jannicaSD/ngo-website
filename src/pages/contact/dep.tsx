import { 
  Scale, GraduationCap, Heart, Users, Handshake, HeartHandshake, ShieldCheck 
} from "lucide-react";

export default function Departments() {
  const departments = [
    { name: "Legal Advocacy", icon: Scale, desc: "Constitutional & human rights support" },
    { name: "Education Programs", icon: GraduationCap, desc: "Scholarships & literacy coordination" },
    { name: "Healthcare Programs", icon: Heart, desc: "Medical camps & family care initiatives" },
    { name: "Community Development", icon: Users, desc: "Sustainable growth & local infrastructure" },
    { name: "Volunteer Coordination", icon: HeartHandshake, desc: "Mobilizing change-makers across Pakistan" },
    { name: "Partnerships", icon: Handshake, desc: "Church alliances & organizational relations" },
    { name: "Donor Relations", icon: ShieldCheck, desc: "Transparency & strategic fund stewardship" },
  ];

  return (
    <section className="py-24 bg-[#030a06] border-y border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-green-500 font-bold uppercase tracking-[0.2em] text-[11px]">Structured Operations</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Core Departments</h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Your communication is routed directly to specialized teams, ensuring your request is handled by the right expert.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-green-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <dept.icon className="text-green-500" size={24} strokeWidth={2} />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">{dept.name}</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{dept.desc}</p>
            </div>
          ))}

          {/* HQ Card - Consistent Styling */}
          <div className="p-8 bg-gradient-to-br from-green-900/10 to-transparent border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <span className="font-bold text-green-500 text-xs tracking-widest">HQ</span>
            </div>
            <h4 className="font-bold text-lg text-white mb-2">Administration</h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Executive oversight, institutional governance, and strategic compliance frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}