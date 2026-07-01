import { Stethoscope, Activity, HeartPulse, Users, Brain, Baby } from "lucide-react";

export default function HealthcareS() {
  const services = [
    { icon: Stethoscope, title: "Medical Camps" },
    { icon: Activity, title: "Health Awareness" },
    { icon: HeartPulse, title: "Emergency Support" },
    { icon: Users, title: "Community Outreach" },
    { icon: Brain, title: "Mental Well-being" },
    { icon: Baby, title: "Family Health" },
  ];

  return (
    // Changed py-24 to py-32 for consistency; pt-0 ensures no gap at the top
    <section id="healthcare" className="pt-0 pb-32 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 order-1">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Healthcare
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight tracking-tight">
              Caring for <br /> Every Life
            </h2>
            
            <div className="mt-8 space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Good health is essential for thriving communities. Parakletus supports individuals and families by promoting wellness, preventive care, and critical health awareness across vulnerable regions.
              </p>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-600" />
                <p className="font-semibold text-gray-900 leading-relaxed">
                  "Our mission is to bridge the gap in medical accessibility, ensuring that families in vulnerable situations receive the essential care they deserve."
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-bold text-gray-900">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}