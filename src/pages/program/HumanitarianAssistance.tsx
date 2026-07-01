import { Package, Utensils, Snowflake, AlertTriangle, Users, Home } from "lucide-react";

export default function HumanitarianAssistance() {
  const programs = [
    { icon: Utensils, title: "Food Distribution" },
    { icon: AlertTriangle, title: "Emergency Relief" },
    { icon: Snowflake, title: "Winter Assistance" },
    { icon: Package, title: "Family Care Packages" },
    { icon: Home, title: "Disaster Response" },
    { icon: Users, title: "Community Support" },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Text Side */}
          <div className="flex-1 space-y-6">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Humanitarian Aid
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Helping Communities <br/> in Times of Need
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Parakletus responds to humanitarian needs by providing emergency assistance, relief support, food distribution, and essential supplies for vulnerable families affected by hardship or crisis.
            </p>
            
            {/* Action Box */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-8">
              <p className="text-gray-800 font-semibold mb-2">Ready to support a family in need?</p>
              <button className="text-green-700 font-bold hover:text-green-800 flex items-center gap-2">
                Donate to Relief Fund →
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programs.map((p, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <p.icon size={20} />
                </div>
                <h4 className="font-bold text-gray-900">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}