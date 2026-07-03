import Link from "next/link";
import { MapPin, Clock, Calendar } from "lucide-react";

const events = [
  { title: "Community Legal Awareness Seminar", date: "July 15, 2026", time: "10:00 AM", location: "Lahore HQ" },
  { title: "Leadership Development Workshop", date: "July 22, 2026", time: "09:00 AM", location: "Virtual / Zoom" },
  { title: "Medical Camp", date: "August 05, 2026", time: "08:00 AM", location: "Rural District, Punjab" },
  { title: "Youth Leadership Conference", date: "August 18, 2026", time: "11:00 AM", location: "Islamabad Center" },
];

export default function EventTimeline() {
  return (
    <section id="upcoming-events" className="py-24 px-6 bg-green-50">
      <div className="max-w-4xl mx-auto">
        {/* NGO Style Heading */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-bold tracking-widest uppercase text-[12px] mb-2 block">Our Schedule</span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Upcoming Events</h2>
        </div>

        <div className="relative border-l-2 border-green-200 ml-3 md:ml-6 space-y-12">
          {events.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-4 border-green-600 rounded-full" />
              
              {/* Card - Clean White Surface */}
              <div className="p-8 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                      <span className="flex items-center gap-2"><Calendar size={16} className="text-green-600" /> {event.date}</span>
                      <span className="flex items-center gap-2"><Clock size={16} className="text-green-600" /> {event.time}</span>
                      <span className="flex items-center gap-2"><MapPin size={16} className="text-green-600" /> {event.location}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="#" 
                    className="px-6 py-3 text-sm font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-lg shadow-green-600/20 whitespace-nowrap"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}