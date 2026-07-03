import { 
  MapPin, Phone, Mail, Clock, AlertTriangle, Send, ChevronDown 
} from "lucide-react";

export default function Contactinfo() {
  return (
    <section id="contact-form" className="py-24 px-6 bg-[#05100a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* 1. CONTACT INFORMATION */}
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              We are ready to assist. Use the channels below for formal inquiries, documentation, or urgent humanitarian support.
            </p>
          </div>

          <div className="space-y-6">
            {/* Location Card */}
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl flex items-start gap-5 transition-all hover:border-green-500/30">
              <div className="p-3 bg-green-600/10 rounded-2xl text-green-500 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Our Headquarters</h4>
                <p className="text-sm text-gray-400">Christian Lawyers & Churches of Pakistan</p>
                <p className="text-sm text-gray-500 font-mono mt-2">Punjab, Pakistan</p>
              </div>
            </div>

            {/* Grid for Phone/Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl">
                <Phone className="text-green-500 mb-4" size={24} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</h4>
                <p className="font-bold text-white">+92 (300) 123-4567</p>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl">
                <Mail className="text-green-500 mb-4" size={24} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                <a href="mailto:info@parakletus.org" className="font-bold text-green-400 hover:underline">info@parakletus.org</a>
              </div>
            </div>

            {/* Alert Box */}
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl flex gap-4">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
              <p className="text-sm text-amber-100/80 leading-relaxed">
                <span className="font-bold text-amber-500 block mb-1">Urgent Assistance</span>
                For critical legal protections, please use our primary phone line during office hours for immediate assessment.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CONTACT FORM */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email Address" placeholder="john@example.com" type="email" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Phone Number" placeholder="+92 300 1234567" />
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Department</label>
                <div className="relative">
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Legal Assistance</option>
                    <option>Volunteer</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            <Input label="Subject" placeholder="How can we assist you?" />
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
              <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all resize-none" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-[0.98]">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Helper component to keep form clean
function Input({ label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all" />
    </div>
  );
}