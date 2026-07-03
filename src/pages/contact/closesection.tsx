export default function ClosingSection() {
  return (
    <footer className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-1 bg-green-600 mx-auto mb-8 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          Serving Communities with <br />Justice, Compassion, and Hope
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto font-light text-lg">
          We believe meaningful relationships begin with conversation. Whether you are an individual, church, organization, volunteer, or donor, we look forward to working together to build stronger communities and create lasting change across Pakistan.
        </p>
        
        <div className="mt-12 flex justify-center gap-6 text-sm text-slate-400">
          <span>© 2026 Parakletus</span>
          <span>•</span>
          <span>Registered NGO</span>
          <span>•</span>
          <span>Punjab, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}