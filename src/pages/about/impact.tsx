import { Users, HeartHandshake, FolderKanban, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "Lives Impacted", value: "5,000+" },
  { icon: HeartHandshake, label: "Active Volunteers", value: "200+" },
  { icon: FolderKanban, label: "Programs Delivered", value: "30+" },
  { icon: Globe, label: "Global Partners", value: "100+" },
];

export default function Impact() {
  return (
    // Removed 'py-20' to eliminate top/bottom gaps. 
    // Added 'bg-white' to ensure a clean transition.
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gray-50 border border-transparent transition-all hover:bg-white hover:shadow-2xl hover:border-green-50 group"
            >
              {/* Icon Container - Using a softer shadow */}
              <div className="w-14 h-14 rounded-2xl bg-white text-green-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <stat.icon size={26} strokeWidth={1.5} />
              </div>
              
              {/* Stat Value */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 tracking-tighter">
                {stat.value}
              </h2>
              
              {/* Stat Label */}
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}