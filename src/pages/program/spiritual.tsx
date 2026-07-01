import { BookOpenText, Sparkles, Users, Heart, BookCheck, Coffee } from "lucide-react";

export default function Spiritual() {
  const activities = [
    { icon: BookOpenText, title: "Bible Studies" },
    { icon: Sparkles, title: "Prayer Meetings" },
    { icon: Heart, title: "Christian Leadership" },
    { icon: BookCheck, title: "Discipleship" },
    { icon: Users, title: "Faith Workshops" },
    { icon: Coffee, title: "Community Fellowship" },
  ];

  return (
    // pt-0 removes the top gap for seamless integration
    <section id="spiritual" className="pt-0 pb-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-green-700 font-bold uppercase tracking-[0.2em] text-xs">
              Spiritual Development
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Growing in Faith <br /> & Character
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Spiritual development is central to our mission. Through biblical teaching, discipleship, and prayer, we encourage individuals to live lives of integrity, compassion, and service.
            </p>
            
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 relative overflow-hidden">
              <p className="font-semibold text-green-900 italic leading-relaxed">
                "Our initiatives aim to cultivate hearts committed to serving others, grounded in the timeless values of biblical leadership."
              </p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activities.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-green-700 flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-bold text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}