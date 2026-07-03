export default function ImmediateHelp() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Help?</h2>
        <p className="text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          If you require legal guidance, humanitarian support, or information about our programs, our team is ready to connect you with the appropriate department.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="px-6 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all">Request Legal Assistance</button>
          <button className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all">Become a Volunteer</button>
          <button className="px-6 py-4 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">Partner With Us</button>
          <button className="px-6 py-4 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">Donate Today</button>
        </div>
      </div>
    </section>
  );
}