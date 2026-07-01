import { Heart, Users, Handshake, Mail } from "lucide-react";

export function CallToAction() {
  const actions = [
    { 
      label: "Donate Today", 
      icon: Heart, 
      className: "bg-green-600 text-white hover:bg-green-700 shadow-green-200" 
    },
    { 
      label: "Become a Volunteer", 
      icon: Users, 
      className: "bg-white text-gray-900 border border-gray-200 hover:border-green-600 hover:text-green-700" 
    },
    { 
      label: "Partner With Us", 
      icon: Handshake, 
      className: "bg-white text-gray-900 border border-gray-200 hover:border-green-600 hover:text-green-700" 
    },
    { 
      label: "Contact Us", 
      icon: Mail, 
      className: "bg-white text-gray-900 border border-gray-200 hover:border-green-600 hover:text-green-700" 
    },
  ];

  return (
    <section className="py-32 px-6 bg-white relative">
      {/* Subtle background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Be Part of <span className="text-green-600">Our Impact</span>
        </h2>
        
        <p className="text-xl text-gray-600 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
          Every contribution creates lasting change. Whether you volunteer, donate, 
          partner, or advocate, you become part of a movement transforming lives 
          through compassion and service.
        </p>

        {/* CTA Button Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {actions.map((action, i) => {
            const Icon = action.icon; // Standard practice for dynamic icon components
            return (
              <button 
                key={i} 
                className={`flex items-center justify-center gap-3 py-5 px-6 rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-sm ${action.className}`}
              >
                <Icon size={20} strokeWidth={2.5} />
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}