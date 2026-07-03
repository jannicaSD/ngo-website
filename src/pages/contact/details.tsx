import Link from "next/link";
import { 
  MapPin, Phone, Mail, Clock, AlertTriangle, Send, 
  Facebook, Linkedin, Youtube, Instagram, ChevronDown,
  Scale, GraduationCap, Heart, Users, Handshake, HeartHandshake, ShieldCheck
} from "lucide-react";

export default function Details() {
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

 
      {/* 8. CLOSING STATEMENT STATEMENT BLOCK */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-t from-[#020704] to-[#030a06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs tracking-[0.3em] font-bold uppercase text-green-500 font-mono">Serving Communities with Justice, Compassion, and Hope</span>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            We believe meaningful relationships begin with conversation. Whether you are an individual, church, organization, volunteer, or donor, we look forward to working together to build stronger communities and create lasting change across Pakistan.
          </p>
          <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mt-8" />
        </div>
      </section>

    </div>
  );
}