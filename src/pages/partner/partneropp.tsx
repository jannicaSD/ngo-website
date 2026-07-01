import { Church, BriefcaseBusiness, Building2, BookOpenText, Gavel, Stethoscope } from "lucide-react";

export function PartnerOpportunities() {
  const opportunities = [
    { title: "Churches", icon: Church, list: ["Community outreach", "Leadership development", "Volunteer mobilization", "Faith-based initiatives"] },
    { title: "NGOs", icon: BriefcaseBusiness, list: ["Joint humanitarian projects", "Community development", "Research", "Advocacy"] },
    { title: "Corporate Partners", icon: Building2, list: ["CSR Programs", "Employee volunteering", "Project sponsorship", "Community investment"] },
    { title: "Educational Institutions", icon: BookOpenText, list: ["Student internships", "Research collaboration", "Leadership development", "Professional training"] },
    { title: "Legal Professionals", icon: Gavel, list: ["Legal aid", "Human rights advocacy", "Community legal education", "Policy dialogue"] },
    { title: "Healthcare Organizations", icon: Stethoscope, list: ["Medical outreach", "Health awareness", "Community wellness", "Emergency response"] },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Partnership Opportunities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-lg hover:border-green-200 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <opp.icon className="text-green-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{opp.title}</h4>
              </div>
              <ul className="space-y-3">
                {opp.list.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerOpportunities;