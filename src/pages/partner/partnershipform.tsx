export function PartnershipForm() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Partnership Inquiry</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Organization Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500" />
            <input type="text" placeholder="Contact Person" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500" />
            <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500" />
          </div>
          <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-500 outline-none focus:border-green-500">
            <option>Partnership Interest...</option>
            <option>Corporate Sponsorship</option>
            <option>Joint Project</option>
            <option>Church/NGO Collaboration</option>
          </select>
          <textarea rows={4} placeholder="How can we collaborate?" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500" />
          <button className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            Become a Partner
          </button>
        </form>
      </div>
    </section>
  );
}