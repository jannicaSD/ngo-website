import { 
  Scale, 
  Gavel, 
  FileText, 
  BookOpen, 
  UserCheck, 
  ShieldAlert, 
  // Added these new icons to replace the emojis
  Handshake, 
  ShieldCheck, 
  ScrollText 
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

  // Replacing emojis with proper Icon components
  const principles = [
    { icon: Scale, title: "Justice" },
    { icon: Handshake, title: "Equality" },
    { icon: ShieldCheck, title: "Human Dignity" },
    { icon: ScrollText, title: "Rule of Law" },
  ];

  const process = ["Listen", "Assessment", "Guidance", "Support", "Advocacy"];

  return (
    <section id="law-justice" className="py-32 bg-[#0a1a10] text-white px-6 overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-green-400 font-bold uppercase tracking-[0.3em] text-xs">Core Identity</span>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-8 tracking-tight leading-tight">
            Defending Justice.<br/> 
            <span className="text-green-500">Protecting Human Rights.</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-6 space-y-8 text-lg font-light text-green-100 leading-relaxed">
            <p className="text-xl">Parakletus provides expert legal support, advocacy, and guidance for vulnerable individuals and religious minority communities.</p>
            <p>Inspired by our commitment to dignity, integrity, and service, we stand with those seeking justice while promoting peaceful dialogue and lawful solutions to complex constitutional challenges.</p>
          </div>
          
          {/* Principles Grid using Lucide Icons */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {principles.map((principle, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.07] transition-all flex flex-col items-center text-center">
                <principle.icon className="text-green-500 mb-4" size={40} strokeWidth={1.5} />
                <span className="font-bold tracking-wide">{principle.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32">
          {services.map((s, i) => (
            <div key={i} className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-green-500/50 transition-all text-center">
              <s.icon className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
              <span className="font-medium text-sm text-green-50">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest text-green-500 mb-12 text-center">Our Impact Process</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <span className="text-xs font-semibold text-green-100 uppercase tracking-wider">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}