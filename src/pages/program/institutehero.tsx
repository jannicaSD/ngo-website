import {
  BookOpen,
  Award,
  HelpCircle,
  Users,
  Globe,
  ArrowRight,
  UserPlus,
} from "lucide-react";

import Link from "next/link";


export default function InstituteHero() {
  const highlights = [
    { title: "Scripture-Centred Learning", icon: <BookOpen className="w-5 h-5 text-green-400" /> },
    { title: "Leadership Development", icon: <Award className="w-5 h-5 text-green-400" /> },
    { title: "Question-Based Study", icon: <HelpCircle className="w-5 h-5 text-green-400" /> },
    { title: "Church Partnership", icon: <Users className="w-5 h-5 text-green-400" /> },
    { title: "Practical Christian Living", icon: <Globe className="w-5 h-5 text-green-400" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-950 text-white py-24 px-6 lg:px-12 border-b border-gray-800">
      {/* Background Subtle Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Top Tag / Subheading */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase border border-green-500/20">
            Equipping Christians Through Biblical Learning & Leadership
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
          Bible & Leadership Institute
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto font-light leading-relaxed mb-12">
          The Parakletus Bible & Leadership Institute provides biblical education, Christian enquiry courses, discipleship, and leadership formation to help believers deepen their understanding of Scripture and confidently live out their faith. Through question-based learning and practical leadership development, the Institute equips individuals to serve their churches and communities with wisdom, integrity, and compassion.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-5 bg-gray-900/60 border border-gray-800/80 rounded-2xl hover:border-green-500/40 transition-all group"
            >
              <div className="p-3 bg-gray-800/80 rounded-xl mb-3 group-hover:bg-green-500/20 transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
      href="/course"
      className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-900/30 flex items-center justify-center gap-2 group"
    >
      Learn More
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
          
          <a
            href="mailto:contact@parakletus.org" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-gray-200 font-bold rounded-2xl border border-gray-800 hover:border-gray-700 transition-all flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4 text-green-400" />
            Register Interest
          </a>
        </div>

      </div>
    </section>


  );
}