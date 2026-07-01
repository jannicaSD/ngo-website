import { BookOpen, Stethoscope, HandHelping, Scale, Heart, Users, ShieldCheck, Sun } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Education", desc: "Empowering minds through scholarships and learning resources." },
  { icon: Stethoscope, title: "Healthcare", desc: "Providing medical camps and sustainable wellness initiatives." },
  { icon: HandHelping, title: "Community Dev", desc: "Building resilience through agriculture and infrastructure." },
  { icon: Heart, title: "Humanitarian", desc: "Immediate emergency food and shelter support." },
  { icon: Scale, title: "Law & Justice", desc: "Advocating for legal awareness and human rights." },
  { icon: Users, title: "Empowerment", desc: "Vocational training and leadership development." },
  { icon: ShieldCheck, title: "Youth Mentorship", desc: "Career guidance and spiritual mentorship." },
  { icon: Sun, title: "Spiritual Dev", desc: "Faith-based discipleship and counseling." },
];

export default function ProgramsSection() {
  return (
    // FIX: Set 'pt-0' to remove the excessive gap from the section above
    <section className="pt-0 pb-24 px-6 max-w-7xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4">What We Do</h2>
        <p className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Core Programs</p>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg font-light">
          We provide Christ-centered, practical solutions designed to create sustainable transformation in vulnerable communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <div 
            key={i} 
            className="group p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <p.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">{p.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}