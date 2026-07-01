import { CheckCircle2 } from "lucide-react";

export function WhyJoinUs() {
  const benefits = [
    "Create meaningful impact",
    "Develop leadership skills",
    "Build professional experience",
    "Work alongside dedicated professionals",
    "Strengthen communities",
    "Live out your faith through service"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Why Join Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <CheckCircle2 className="text-green-600" size={20} />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}