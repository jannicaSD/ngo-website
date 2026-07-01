import { ShieldCheck, Heart, Scale, Users, BookOpen } from "lucide-react";

export function WhyGiftMatters() {
  const pillars = [
    { icon: ShieldCheck, text: "Protecting human dignity" },
    { icon: BookOpen, text: "Expanding educational opportunities" },
    { icon: Scale, text: "Providing legal advocacy" },
    { icon: Users, text: "Strengthening vulnerable communities" },
    { icon: Heart, text: "Responding with compassion and integrity" },
  ];

  return (
    <section className="py-24 px-6 bg-green-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.3em] mb-4">
            Our Mission
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Every donation is an <br className="hidden md:block" />
            investment in people.
          </h3>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Your support enables Parakletus to move beyond simple aid, creating 
            sustainable paths for families to thrive and communities to flourish.
          </p>
        </div>

        {/* Impact Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 p-6 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <pillar.icon className="text-green-600" size={20} />
              </div>
              <span className="text-gray-800 font-medium">{pillar.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}