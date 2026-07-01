import { BookOpen, Scale, HeartPulse, Users, HandHeart, GraduationCap } from "lucide-react";

export function ImpactAreas() {
  const areas = [
    { title: "Education", icon: BookOpen, points: ["Scholarships", "Learning resources", "Skills development"] },
    { title: "Law & Justice", icon: Scale, points: ["Legal awareness", "Human rights advocacy", "Community legal support"] },
    { title: "Healthcare", icon: HeartPulse, points: ["Medical camps", "Health education", "Emergency assistance"] },
    { title: "Community Development", icon: Users, points: ["Livelihood support", "Capacity building", "Community initiatives"] },
    { title: "Humanitarian Relief", icon: HandHeart, points: ["Emergency relief", "Food support", "Essential supplies"] },
    { title: "Empowerment", icon: GraduationCap, points: ["Leadership development", "Vocational training", "Mentorship"] },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">What Your Donation Supports</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-green-200 transition-all">
              <area.icon className="text-green-600 mb-6" size={32} />
              <h4 className="font-bold text-xl text-gray-900 mb-4">{area.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-light">
                {area.points.map((p, idx) => <li key={idx}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactAreas;