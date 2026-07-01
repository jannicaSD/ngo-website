import { MessageSquare, Users2, ShieldAlert, Award, Compass, Eye, HeartHandshake, MapPin } from "lucide-react";

export default function Leadership() {
  const curriculum = [
    { icon: MessageSquare, title: "Communication" },
    { icon: ShieldAlert, title: "Conflict Resolution" },
    { icon: Users2, title: "Team Building" },
    { icon: Award, title: "Public Speaking" },
    { icon: Compass, title: "Strategic Planning" },
    { icon: Eye, title: "Servant Leadership" },
    { icon: HeartHandshake, title: "Ethical Leadership" },
    { icon: MapPin, title: "Community Engagement" },
  ];

  return (
    // Set pt-0 to ensure it sits flush with the previous section
    <section id="leadership" className="pt-0 pb-32 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs">
              Capacity Building
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Raising Ethical <br /> Leaders
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Strong leadership transforms communities. Our development initiatives equip church leaders, volunteers, and professionals with the practical skills and ethical frameworks needed for impactful service.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700">
                <Eye size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Grounded in Servant Leadership</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Core Philosophy</p>
              </div>
            </div>
          </div>

          {/* Training Matrix Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {curriculum.map((item, i) => (
              <div 
                key={i} 
                className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Core Module</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}