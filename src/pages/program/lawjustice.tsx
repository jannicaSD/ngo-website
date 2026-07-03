import { 
  Scale, Gavel, FileText, BookOpen, UserCheck, ShieldAlert, 
  Handshake, ShieldCheck, ScrollText 
} from "lucide-react";

export default function LawJustice() {
  const services = [
    { icon: UserCheck, title: "Legal Consultation" },
    { icon: ShieldAlert, title: "Human Rights Advocacy" },
    { icon: BookOpen, title: "Legal Awareness" },
    { icon: Gavel, title: "Constitutional Education" },
    { icon: FileText, title: "Case Documentation" },
    { icon: Scale, title: "Court Support" },
  ];

  const principles = [
    { icon: Scale, title: "Justice" },
    { icon: Handshake, title: "Equality" },
    { icon: ShieldCheck, title: "Human Dignity" },
    { icon: ScrollText, title: "Rule of Law" },
  ];

  const process = ["Listen", "Assessment", "Guidance", "Support", "Advocacy"];

  return (
    <section id="law-justice" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-green-500 font-bold uppercase tracking-[0.3em] text-[11px]">Core Identity</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight leading-tight">
            Defending Justice. <br/> 
            <span className="text-green-500">Protecting Human Rights.</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-6 space-y-6 text-lg font-light text-slate-300 leading-relaxed">
            <p className="text-xl text-white">Parakletus provides expert legal support, advocacy, and guidance for vulnerable individuals and religious minority communities.</p>
            <p>Inspired by our commitment to dignity, integrity, and service, we stand with those seeking justice while promoting peaceful dialogue and lawful solutions to complex constitutional challenges.</p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {principles.map((principle, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all flex flex-col items-center text-center">
                <principle.icon className="text-green-500 mb-4" size={32} />
                <span className="font-bold tracking-wide">{principle.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {services.map((s, i) => (
            <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/50 transition-all text-center">
              <s.icon className="text-green-500 mx-auto mb-3" size={24} />
              <span className="font-medium text-xs text-slate-300 group-hover:text-white">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-10 text-center">Our Impact Process</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}