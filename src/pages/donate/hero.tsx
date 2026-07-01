export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Give Hope. <span className="text-green-600">Create Change.</span>
        </h1>
        <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
          Your generosity provides education, legal support, healthcare, and community programs that transform lives and strengthen communities across Pakistan.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-10 py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-200">Donate Now</button>
          <button className="px-10 py-5 bg-white text-gray-900 border border-gray-200 font-bold rounded-2xl hover:border-gray-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
}