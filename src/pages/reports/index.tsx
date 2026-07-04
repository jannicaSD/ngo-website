import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { FileText, Download, ShieldCheck, BarChart3, BookOpen } from "lucide-react";

const reports = [
  { year: "2025", size: "4.2 MB", desc: "A comprehensive review of our impact, legal successes, and community growth." },
  { year: "2024", size: "3.8 MB", desc: "Detailed breakdown of our operational milestones and financial stewardship." },
  { year: "2023", size: "3.5 MB", desc: "Highlighting our foundational programs and initial community partnerships." },
];

const documents = [
  { icon: BarChart3, title: "Financial Statements" },
  { icon: ShieldCheck, title: "Audited Reports" },
  { icon: BookOpen, title: "Governance & Policy" },
  { icon: FileText, title: "Strategic Plans" },
];

export default function AnnualReports() {
  return (
    <>
      <Navbar />
      
      {/* WRAPPER FIX: Added pt-24 to prevent Navbar overlap */}
      <main className="pt-24 bg-slate-50"> 
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* HEADER */}
            <div className="text-center mb-20">
              <span className="text-green-700 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Transparency</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Annual Reports</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Our commitment to responsible stewardship, measurable impact, and total transparency.
              </p>
            </div>

            {/* REPORT CARDS */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {reports.map((report) => (
                <div key={report.year} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-20 bg-green-50 rounded-lg mb-6 border border-green-100 flex items-center justify-center">
                    <FileText className="text-green-700" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Annual Report {report.year}</h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed h-12">{report.desc}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{report.size}</span>
                    <button className="flex items-center gap-2 text-green-700 font-bold text-sm hover:translate-x-1 transition-transform">
                      Download <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* FINANCIAL TRANSPARENCY GRID */}
            <div className="mb-24">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Governance & Financial Transparency</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {documents.map((doc, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col items-center text-center hover:border-green-600 hover:shadow-md transition-all cursor-pointer group">
                    <doc.icon className="text-green-700 mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <span className="font-semibold text-slate-700 text-sm">{doc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY TRANSPARENCY MATTERS */}
            <div className="bg-slate-900 rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 blur-[120px] rounded-full" />
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Why Transparency Matters</h3>
              <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed text-lg relative z-10">
                Parakletus is committed to using every donation responsibly. We publish our reports to demonstrate 
                accountability, celebrate progress, and share how our resources create lasting community impact 
                across Pakistan.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}