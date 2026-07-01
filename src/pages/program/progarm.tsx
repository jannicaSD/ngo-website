import { BookOpen, Stethoscope, Scale, Users, Heart, GraduationCap } from "lucide-react";

const programs = [
  { title: "Education", icon: BookOpen, desc: "Breaking cycles of poverty through scholarships and mentoring." },
  { title: "Healthcare", icon: Stethoscope, desc: "Wellness initiatives and medical outreach." },
  { title: "Law & Justice", icon: Scale, desc: "Human rights advocacy and legal aid." },
  { title: "Community Dev", icon: Users, desc: "Sustainable livelihoods and clean water." },
  { title: "Humanitarian", icon: Heart, desc: "Emergency relief and food distribution." },
  { title: "Women & Youth", icon: GraduationCap, desc: "Leadership and skill development." },
];

export default function Program() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Every initiative responds to community needs with compassion and integrity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <p.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}