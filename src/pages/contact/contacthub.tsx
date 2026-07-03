import { MapPin, Send, Mail, Globe, Phone, Users } from "lucide-react";

export default function ContactHub() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* LEFT: FORM */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all" />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all" />
              <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all text-slate-500">
                <option>Choose Department</option>
                <option>Legal Assistance</option>
                <option>Volunteer</option>
                <option>Donation</option>
              </select>
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all" />
            <textarea rows={4} placeholder="Your Message" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-600 outline-none transition-all" />
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all w-full md:w-auto">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT: DEPARTMENTS & MAP */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Departments */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Our Departments</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Legal Advocacy", "Education", "Healthcare", "Community", "Volunteering", "Partnerships", "Donor Relations", "Admin"].map((dept) => (
                <span key={dept} className="text-sm text-slate-600 hover:text-green-700 cursor-pointer transition-colors border-b border-transparent hover:border-green-600 pb-1">
                  {dept}
                </span>
              ))}
            </div>
          </div>

          {/* Map/Find Us */}
          <div className="bg-slate-100 rounded-3xl h-48 flex items-center justify-center border border-slate-200">
            <span className="text-slate-400 flex items-center gap-2 font-medium">
              <MapPin size={20} /> View on Google Maps
            </span>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              {[Mail, Globe, Phone, Users].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}