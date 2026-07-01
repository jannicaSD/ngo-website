export function ProfessionalDonationForm() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 shadow-xl shadow-green-50/50 p-8 md:p-12 rounded-3xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Secure Donation</h2>
          <p className="text-gray-500 mb-8 font-light">Your support creates immediate, lasting impact.</p>

          <form className="space-y-6">
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-green-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-green-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>

            {/* Financial Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Donation Amount (PKR)</label>
                <input type="number" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-green-500 outline-none transition-all" placeholder="0.00" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Program</label>
                <select className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-green-500 outline-none transition-all text-gray-700">
                  <option>General Fund</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Humanitarian Relief</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Payment Method</label>
              <div className="grid grid-cols-3 gap-4">
                {["Credit Card", "Bank Transfer", "EasyPaisa"].map((method) => (
                  <button key={method} type="button" className="p-3 text-xs font-bold border border-gray-200 rounded-xl hover:border-green-500 hover:text-green-600 transition-all">
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Message & Submit */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message (Optional)</label>
              <textarea rows={3} className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-green-500 outline-none transition-all" placeholder="Your note of encouragement..." />
            </div>

            <button className="w-full py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              Donate Securely
            </button>
            
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
              🔒 128-bit SSL Encrypted Connection
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}