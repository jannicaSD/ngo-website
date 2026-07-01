import { Users, Scale, BookOpen, HeartPulse, HandHeart, Zap, Church } from "lucide-react";

export function VolunteerOpportunities() {
  const opportunities = [
    { title: "Community Outreach", icon: Users, desc: "Support local initiatives that improve the lives of vulnerable communities." },
    { title: "Legal Assistance", icon: Scale, desc: "Assist legal professionals in promoting awareness and supporting human rights." },
    { title: "Education Programs", icon: BookOpen, desc: "Mentor children, assist with literacy, and support educational workshops." },
    { title: "Healthcare Outreach", icon: HeartPulse, desc: "Organize medical camps and health awareness campaigns." },
    { title: "Humanitarian Relief", icon: HandHeart, desc: "Assist during emergency response and food distribution." },
    { title: "Youth Leadership", icon: Zap, desc: "Guide and mentor young leaders through training and engagement." },
    { title: "Church Engagement", icon: Church, desc: "Work alongside churches to strengthen community partnerships." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">Available Roles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp, i) => (
            <div 
              key={i} 
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-green-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <opp.icon className="text-green-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{opp.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{opp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}