export function FinalCallToAction() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Together, We Can Build <br className="hidden md:block" />
          a Better Future
        </h2>
        
        {/* Mission Statement */}
        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
          Whether you choose to volunteer your time, partner your expertise, or donate 
          your resources, you become part of a mission that protects human dignity, 
          promotes justice, and creates lasting opportunities for communities across Pakistan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-900/50">
            Become a Volunteer
          </button>
          <button className="px-8 py-5 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-2xl transition-all">
            Partner With Us
          </button>
          <button className="px-8 py-5 bg-transparent border-2 border-gray-700 hover:border-green-600 hover:text-green-500 text-white font-bold rounded-2xl transition-all">
            Donate Today
          </button>
        </div>
      </div>
    </section>
  );
}