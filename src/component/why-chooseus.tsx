import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Faith-Centered Service", 
  "Community-Based Development", 
  "Sustainable Long-Term Solutions", 
  "Integrity and Transparency", 
  "Experienced Leadership", 
  "Dedicated Volunteers", 
  "Strong Partnerships"
];

export default function WhyChooseUs() {
  return (
    // FIX: Set pt-0 to close the gap between Programs and this section
    <section className="pt-0 pb-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4">Our Values</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">Why Choose Parakletus</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-500 hover:bg-green-50/30 transition-all duration-300 group"
            >
              <div className="text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <p className="font-semibold text-gray-800 group-hover:text-green-900 transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}