import { BookOpen, GraduationCap, Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function Edu() {
  const offerings = [
    { icon: BookOpen, title: "School Support" },
    { icon: GraduationCap, title: "Scholarships" },
    { icon: Target, title: "Literacy Programs" },
    { icon: Lightbulb, title: "Skills Development" },
    { icon: Users, title: "Career Guidance" },
    { icon: TrendingUp, title: "Student Mentorship" },
  ];

  return (
    <section id="education" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Education for a <br /> Better Future
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Education is one of the strongest tools for breaking the cycle of poverty. Parakletus supports children, youth, and disadvantaged communities through targeted academic resources and mentorship.
              </p>
              
              <div className="relative pl-6 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 rounded-full" />
                <p className="font-medium text-gray-900 italic">
                  "Our goal is to equip individuals with the knowledge, confidence, and values that prepare them for meaningful, self-sustaining futures."
                </p>
              </div>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <item.icon size={22} />
                </div>
                <span className="font-semibold text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters Callout */}
        <div className="mt-24 bg-gray-900 rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/40 to-transparent" />
           <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Why It Matters</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Education builds confidence, creates systemic opportunities, and empowers entire communities to thrive for generations. We are committed to removing barriers to learning.
            </p>
           </div>
        </div>
      </div>
    </section>
  );
}