import Link from 'next/link';
import { Target, Award, Users, HeartHandshake, Zap, Briefcase, ArrowRight } from "lucide-react";

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
    <section id="volunteer" className="pt-0 pb-32 bg-gray-950 text-white px-6 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase border border-green-500/20 mb-6">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Make a Difference <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Through Service
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Volunteers are the heart of Parakletus. Join a community dedicated to meaningful change through compassion, commitment, and action.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="mb-24">
          <h3 className="text-center text-amber-400 font-bold uppercase tracking-[0.2em] text-xs mb-10">
            Open Volunteer Roles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {roles.map((role) => (
              <div 
                key={role} 
                className="p-4 bg-gray-900/60 border border-gray-800 rounded-xl text-center text-sm font-medium hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300 cursor-default text-gray-300 shadow-sm"
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
              className="flex items-center gap-5 p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-amber-400/30 transition-all group"
            >
              <div className="p-3 bg-gray-800/80 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                <benefit.icon size={22} strokeWidth={1.8} />
              </div>
              <span className="font-semibold text-gray-200">{benefit.title}</span>
            </div>
          ))}
        </div>

        {/* Final CTA (Working Navigation Link) */}
        <div className="text-center">
          <Link 
            href="/volunteer"
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-green-900/30 group"
          >
            Become a Volunteer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}