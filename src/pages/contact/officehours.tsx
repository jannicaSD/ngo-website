import Link from "next/link";
import { 
  MapPin, Phone, Mail, Clock, AlertTriangle, Send, 
  Facebook, Linkedin, Youtube, Instagram, ChevronDown,
  Scale, GraduationCap, Heart, Users, Handshake, HeartHandshake, ShieldCheck
} from "lucide-react";

export default function officehours() {
  const departments = [
    { name: "Legal Advocacy", icon: Scale, desc: "Constitutional & human rights support" },
    { name: "Education Programs", icon: GraduationCap, desc: "Scholarships & literacy coordination" },
    { name: "Healthcare Programs", icon: Heart, desc: "Medical camps & family care initiatives" },
    { name: "Community Development", icon: Users, desc: "Sustainable growth & local infrastructure" },
    { name: "Volunteer Coordination", icon: HeartHandshake, desc: "Mobilizing change-makers across Pakistan" },
    { name: "Partnerships", icon: Handshake, desc: "Church alliances & organizational relations" },
    { name: "Donor Relations", icon: ShieldCheck, desc: "Transparency & strategic fund stewardship" },
  ];

  return (
    <div className="bg-[#05100a] text-white min-h-screen font-sans overflow-x-hidden">
      {/* 5. FIND US (MAP & DIRECTION INFORMATION) */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-8 rounded-[2rem] overflow-hidden min-h-[350px] bg-white/5 relative border border-white/10 shadow-inner">
          {/* Professional Simulated High-End Map Container */}
          <div className="absolute inset-0 bg-[#0b1c11] flex flex-col items-center justify-center p-8 text-center">
            <MapPin size={48} className="text-green-500 animate-pulse mb-4" strokeWidth={1} />
            <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed mb-4">
              Integrated Map Infrastructure. Place your map embed coordinate scripts or map component plugins inside this wrapper layout.
            </p>
            <span className="text-[10px] font-mono uppercase bg-white/5 px-3 py-1 rounded text-gray-500 border border-white/5">
              Google Maps Framework Connected
            </span>
          </div>
        </div>
        
        <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Find Our Presence</h3>
              <p className="text-xs font-mono text-green-500 uppercase tracking-wider">Office Location Details</p>
            </div>
            
            <div className="space-y-4 font-light text-sm text-gray-300 leading-relaxed">
              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Directions Info</h5>
                <p>Located securely within accessible transport vectors in Punjab. Connect directly with management workflows prior to planning high-profile site delegations.</p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h5 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Parking Information</h5>
                <p>Dedicated secure parameter layout space parking is available contextually for official stakeholders and scheduled partner delegations.</p>
              </div>
            </div>
          </div>

          {/* 6. CONNECT WITH US (SOCIAL ARCHITECTURE) */}
          <div className="border-t border-white/5 pt-6 mt-8">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Connect Socially</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-gray-400 hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/20 transition-all">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            {/* Newsletter Minimal Framework */}
            <div className="space-y-2">
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Email Newsletter</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Join email ecosystem" className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500" />
                <button className="px-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium">Join</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEED IMMEDIATE HELP (BENTO SYSTEM) */}
      <section id="immediate-help" className="py-24 bg-[#030a06] border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-green-500 font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">Crisis & Partnership Management</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Need Immediate Support?</h2>
            <p className="text-sm text-gray-400 mt-2 font-light">If you require legal guidance, humanitarian support, or explicit project coordination information, select a clear path below.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Request Legal Assistance", path: "/legal-intake", color: "border-red-500/20 hover:border-red-500/50 hover:bg-red-500/5" },
              { title: "Become a Volunteer", path: "/volunteer", color: "border-green-500/20 hover:border-green-500/50 hover:bg-green-500/5" },
              { title: "Partner With Us", path: "/partner", color: "border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/5" },
              { title: "Donate Today", path: "/donate", color: "border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5" },
            ].map((box, i) => (
              <Link href={box.path} key={i} className={`p-8 bg-white/[0.01] border rounded-2xl flex flex-col justify-between h-40 transition-all active:scale-[0.98] ${box.color}`}>
                <span className="text-xs text-gray-500 font-mono tracking-wider font-semibold">0{i + 1} // Route</span>
                <span className="text-lg font-bold text-white tracking-tight">{box.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
}