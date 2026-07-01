import { Zap, Compass, Mic2, HeartHandshake, BookOpen, Users } from "lucide-react";

export default function Youth() {
  const activities = [
    { icon: Zap, title: "Leadership Camps" },
    { icon: Compass, title: "Career Guidance" },
    { icon: Mic2, title: "Youth Conferences" },
    { icon: HeartHandshake, title: "Volunteer Projects" },
    { icon: BookOpen, title: "Mentorship Programs" },
    { icon: Users, title: "Community Service" },
  ];

  return (
    // pt-0 removes the top gap so it sits flush with the section above
    <section id="youth" className="pt-0 pb-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side: Updated to Parakletus Green theme */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {activities.map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-green-600 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className="mb-4 text-green-600 group-hover:text-white transition-colors">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-white text-center text-sm tracking-wide">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Youth Development
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Developing <br /> Tomorrow's Leaders
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Young people are the future of every community. Through leadership training, education, mentorship, and faith-based values, Parakletus equips youth to become responsible leaders and active citizens.
            </p>
            
            <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Our Vision
              </h4>
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "We don't just prepare youth for the future; we provide them the platform to build it today."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}