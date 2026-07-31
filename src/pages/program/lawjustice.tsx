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
    <section id="law-justice" className="py-24 px-6 bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 text-white overflow-hidden relative border-y border-emerald-900/40">
      
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/15 text-green-400 font-bold uppercase tracking-[0.25em] text-xs border border-green-500/30 mb-6">
            Core Identity
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Defending Justice. <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-amber-300">
              Protecting Human Rights.
            </span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-6 space-y-6 text-lg font-light text-gray-300 leading-relaxed">
            <p className="text-xl text-white font-normal">
              Parakletus provides expert legal support, advocacy, and guidance for vulnerable individuals and religious minority communities.
            </p>
            <p>
              Inspired by our commitment to dignity, integrity, and service, we stand with those seeking justice while promoting peaceful dialogue and lawful solutions to complex constitutional challenges.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {principles.map((principle, i) => (
              <div 
                key={i} 
                className="bg-emerald-950/60 backdrop-blur-md border border-emerald-800/60 p-8 rounded-3xl hover:border-green-400 hover:bg-emerald-900/80 transition-all flex flex-col items-center text-center shadow-lg group"
              >
                <principle.icon className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold tracking-wide text-gray-200">{principle.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-6 bg-emerald-950/40 backdrop-blur-md border border-emerald-800/50 rounded-2xl hover:border-green-400 hover:bg-emerald-900/60 transition-all text-center shadow-md"
            >
              <s.icon className="text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
              <span className="font-medium text-xs text-gray-300 group-hover:text-white">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto bg-emerald-950/50 backdrop-blur-md border border-emerald-800/50 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-10 text-center">
            Our Impact Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/80 border border-emerald-700 text-green-300 flex items-center justify-center font-bold text-sm mb-3 shadow-sm">
                  {i + 1}
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}