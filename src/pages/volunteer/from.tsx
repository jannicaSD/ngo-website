export function Form() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Volunteer Application</h2>
          <p className="text-gray-500 font-light">Join our mission by filling out the form below. We will get back to you shortly.</p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Full Name</label>
              <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Email Address</label>
              <input type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Phone Number</label>
              <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all" placeholder="+92 300 0000000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Profession</label>
              <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all" placeholder="e.g. Lawyer, Student" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Area of Interest</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all text-gray-600">
              <option>Select an opportunity...</option>
              <option>Community Outreach</option>
              <option>Legal Assistance</option>
              <option>Education Programs</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider text-[10px]">Message</label>
            <textarea rows={4} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none transition-all" placeholder="Tell us why you want to volunteer..." />
          </div>

          <button className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200 mt-8">
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;