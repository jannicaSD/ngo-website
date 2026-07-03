import { Mail, ArrowRight, Bell, Newspaper } from "lucide-react";

const announcements = [
  { title: "New Partnership Announced", date: "July 03, 2026" },
  { title: "Volunteer Registration Open", date: "July 01, 2026" },
  { title: "Annual Report Released", date: "June 28, 2026" },
  { title: "Community Outreach Completed", date: "June 25, 2026" },
  { title: "Legal Awareness Workshop", date: "June 20, 2026" },
];

export default function AnnouncementsAndNewsletter() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* RECENT ANNOUNCEMENTS */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Bell size={22} className="text-green-600" /> Recent Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between hover:border-green-200 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-slate-700 group-hover:text-green-800 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs text-slate-400 font-medium bg-white px-3 py-1 rounded-full border border-slate-100">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="lg:col-span-1">
          <div className="p-8 bg-slate-900 rounded-3xl h-full flex flex-col justify-center text-white shadow-xl">
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Newspaper size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Stay Connected</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Receive updates about our work, events, and community programs directly to your inbox.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:border-green-500 outline-none transition-all"
                />
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98]">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}