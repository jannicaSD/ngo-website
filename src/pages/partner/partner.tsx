import { Target, TrendingUp, Users } from "lucide-react";

export function WhyPartner() {
  const benefits = [
    { title: "Expand Impact", text: "Scale your reach and multiply the effectiveness of your social initiatives." },
    { title: "Share Expertise", text: "Exchange knowledge and best practices to foster innovation in development." },
    { title: "Build Sustainability", text: "Create long-term programs that remain effective for years to come." },
    { title: "Social Responsibility", text: "Strengthen your organization's commitment to ethical and social causes." },
    { title: "Promote Justice", text: "Work toward equality and human rights in underserved communities." },
    { title: "Strengthen Communities", text: "Empower local populations through collective action and resource sharing." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Why Partner With Parakletus?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}