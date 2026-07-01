import { Target, Users, Zap, Award } from "lucide-react";

export function PartnerBenefits() {
  const benefits = [
    { title: "Shared Vision", icon: Target, desc: "Align your mission with ours to drive deeper community impact." },
    { title: "Community Reach", icon: Users, desc: "Access established networks and platforms for collective outreach." },
    { title: "Sustainable Growth", icon: Zap, desc: "Leverage proven systems to create long-term, scalable change." },
    { title: "Public Recognition", icon: Award, desc: "Gain visibility as a leader in humanitarian and social development." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Partner With Us?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-green-200 transition-all">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <b.icon className="text-green-600" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{b.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerBenefits;