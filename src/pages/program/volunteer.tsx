import { Target, Award, Users, HeartHandshake, Zap, Briefcase } from "lucide-react";

export default function Volunteer() {
  const roles = [
    "Education Support", "Community Outreach", "Legal Assistance", 
    "Media & Communications", "Healthcare Camps", "Event Management", 
    "Fundraising", "Administration", "Research", "Church Partnership"
  ];

  const benefits = [
    { title: "Professional Experience", icon: Briefcase },
    { title: "Leadership Development", icon: Target },
    { title: "Community Impact", icon: HeartHandshake },
    { title: "Networking & Growth", icon: Users },
    { title: "Skills Training", icon: Zap },
    { title: "Official Certification", icon: Award },
  ];

  return (
    // pt-0 removes the top gap, aligning this section flush with the one above.
    <section id="volunteer" className="pt-0 pb-32 bg-gray-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Aligned with Parakletus branding */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-500 font-bold uppercase tracking-[0.3em] text-xs">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-6 tracking-tight">
            Make a Difference <br /> Through Service
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Volunteers are the heart of Parakletus. Join a community dedicated to meaningful change through compassion, commitment, and action.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="mb-24">
          <h3 className="text-center text-green-500 font-bold uppercase tracking-[0.2em] text-xs mb-10">
            Open Volunteer Roles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {roles.map((role) => (
              <div 
                key={role} 
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-medium hover:bg-green-600 transition-all duration-300 cursor-default hover:border-green-500"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="flex items-center gap-5 p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors group"
            >
              <div className="text-green-500 group-hover:scale-110 transition-transform">
                <benefit.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-gray-200">{benefit.title}</span>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.3)]">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}