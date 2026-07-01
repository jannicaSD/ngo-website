import { ShieldCheck, Target, Building2, PieChart, Bell, ChevronRight } from "lucide-react";

export function DonationFAQ() {
  const faqs = [
    { 
      q: "Is my donation secure?", 
      a: "Yes. We use industry-standard encryption to ensure your payment information is protected at all times.", 
      icon: ShieldCheck 
    },
    { 
      q: "Can I support a specific program?", 
      a: "Absolutely. You can choose any of our initiatives, from Education to Healthcare, on the donation form.", 
      icon: Target 
    },
    { 
      q: "Can businesses donate?", 
      a: "Yes, we welcome corporate partnerships and offer tailored social responsibility programs for businesses.", 
      icon: Building2 
    },
    { 
      q: "How will my donation be used?", 
      a: "We are committed to full transparency. Every gift is tracked and used directly for the programs you support.", 
      icon: PieChart 
    },
    { 
      q: "Can I receive updates?", 
      a: "Yes! By signing up, you will receive our impact reports and progress updates on the programs you support.", 
      icon: Bell 
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <faq.icon className="text-green-600" size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}