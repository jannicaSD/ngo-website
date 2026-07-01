import { FileText, PieChart, ShieldCheck, ArrowRight } from "lucide-react";

export default function TransparencyCommitment() {
  const resources = [
    { title: "Annual Reports", icon: FileText, desc: "Comprehensive overview of our yearly impact." },
    { title: "Financial Reports", icon: PieChart, desc: "Detailed breakdown of fund utilization." },
    { title: "Governance", icon: ShieldCheck, desc: "Our policies and ethical standards." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Commitment Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Commitment to Transparency</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Every contribution is managed with integrity, accountability, and responsible stewardship. 
            Parakletus is committed to transparent financial management and the ethical use of 
            every donation to maximize community impact.
          </p>
        </div>

        {/* Resource Links */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <a 
              key={i} 
              href="#" 
              className="group p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-green-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                <res.icon className="text-green-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{res.title}</h4>
              <p className="text-sm text-gray-500 font-light mb-6 flex-grow">{res.desc}</p>
              <div className="flex items-center text-green-600 font-bold text-sm gap-2">
                Download PDF <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}