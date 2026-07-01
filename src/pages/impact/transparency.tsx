import { FileText, ShieldCheck, PieChart } from "lucide-react";

export function Transparency() {
  const documents = [
    { title: "Annual Reports", icon: FileText },
    { title: "Financials", icon: PieChart },
    { title: "Governance", icon: ShieldCheck },
  ];

  return (
    <section className="py-32 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
        
        {/* Commitment Text */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transparency &<br />Accountability
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 font-light">
            We believe trust is earned through responsible stewardship. Our commitment 
            is anchored in ethical leadership and clear, open reporting.
          </p>
          <ul className="space-y-4">
            {[
              "Ethical Leadership", 
              "Financial Accountability", 
              "Transparent Reporting"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500" /> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
          {documents.map((doc, i) => (
            <a 
              key={i} 
              href="#" 
              className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group flex flex-col justify-between aspect-square"
            >
              <doc.icon 
                size={32} 
                className="text-green-600 group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}