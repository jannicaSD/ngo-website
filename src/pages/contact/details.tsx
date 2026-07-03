import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="pt-0 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Office Address */}
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="text-green-700" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Visit Our Office</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Parakletus – Christian Lawyers & Churches of Pakistan<br />
              Registered NGO<br />
              Punjab, Pakistan
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="text-green-700" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
            <p className="text-sm text-slate-600">+92 XXX XXXXXXX</p>
          </div>

          {/* Email */}
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="text-green-700" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <div className="text-sm text-slate-600 space-y-1">
              <a href="mailto:info@parakletus.org" className="block hover:text-green-700 transition-colors">info@parakletus.org</a>
              <a href="mailto:support@parakletus.org" className="block hover:text-green-700 transition-colors">support@parakletus.org</a>
            </div>
          </div>

          {/* Hours & Emergency */}
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-green-700" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
            <p className="text-sm text-slate-600">
              Mon – Fri: 9:00 AM – 5:00 PM
            </p>
          </div>

        </div>

        {/* Emergency Banner */}
        <div className="mt-12 p-8 bg-green-600 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-white shadow-xl shadow-green-600/20">
          <AlertCircle size={48} className="shrink-0" />
          <div>
            <h3 className="font-bold text-xl mb-2">Emergency Assistance</h3>
            <p className="text-green-50 text-sm opacity-90 leading-relaxed">
              For urgent humanitarian or legal matters, please contact our support team during our regular office hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}