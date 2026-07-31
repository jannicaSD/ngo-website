import {
  BookOpen,
  HelpCircle,
  GraduationCap,
  Users,
  Compass,
  Church,
  BookMarked,
  Heart,
  Scale,
  Home,
  Award,
  ArrowRight,
  Mail,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

export default function Course() {
  const learningApproach = [
    {
      icon: BookOpen,
      title: "Scripture-Centred Learning",
      description: "Every course is rooted in biblical teaching and Christian values."
    },
    {
      icon: HelpCircle,
      title: "Question-Based Study",
      description: "Learning begins with real questions people ask about faith, Scripture, and Christian living."
    },
    {
      icon: GraduationCap,
      title: "Leadership Formation",
      description: "Preparing future Christian leaders to serve churches and communities."
    },
    {
      icon: Users,
      title: "Respectful Dialogue",
      description: "Encouraging thoughtful discussion in a welcoming learning environment."
    },
    {
      icon: Compass,
      title: "Practical Application",
      description: "Helping participants apply biblical principles in everyday life."
    },
    {
      icon: Church,
      title: "Church Partnership",
      description: "Supporting churches through education, discipleship, and leadership development."
    }
  ];

  const learningAreas = [
    {
      category: "Faith Foundations",
      icon: BookMarked,
      topics: [
        "Questions About God and Bible",
        "Understanding the Trinity",
        "God the Father",
        "Chosen by Grace",
        "Assurance of Salvation",
        "Who is Jesus Christ"
      ]
    },
    {
      category: "Biblical Studies",
      icon: BookOpen,
      topics: [
        "The Great Commission",
        "Covenant and Law in the Old Testament",
        "Is the Bible God's Word?",
        "Understanding Baptism",
        "The Beatitudes",
        "Knowing God's Will"
      ]
    },
    {
      category: "Christian Living",
      icon: Heart,
      topics: [
        "Following Jesus Discipleship",
        "Hope on Earth",
        "Christ in Every Age",
        "Hard Questions",
        "Forgiveness and Assurance"
      ]
    },
    {
      category: "Theology & Ethics",
      icon: Scale,
      topics: [
        "Foundations of Christian Ethics",
        "Christian Sacramental Theology",
        "The Human and the Holy",
        "Faith, Confession and Healing"
      ]
    },
    {
      category: "Family & Community",
      icon: Home,
      topics: [
        "Divorce, Faith and Community",
        "Biblical Manhood",
        "Father's Responsibilities",
        "Covenant Not Contract",
        "Poverty, Race and Religion"
      ]
    },
    {
      category: "Leadership Development",
      icon: Award,
      topics: [
        "Leading the First Step",
        "Organisational Change",
        "Church Leadership"
      ]
    }
  ];

  const objectives = [
    { title: "Build Biblical Knowledge", desc: "Helping believers understand Scripture with confidence." },
    { title: "Strengthen Faith", desc: "Supporting spiritual maturity through biblical learning." },
    { title: "Develop Christian Leaders", desc: "Preparing participants for leadership and ministry." },
    { title: "Encourage Critical Thinking", desc: "Creating opportunities to ask meaningful questions." },
    { title: "Equip Churches", desc: "Providing learning resources for local congregations." },
    { title: "Inspire Lifelong Learning", desc: "Encouraging continual spiritual and personal growth." }
  ];

  const audience = [
    { title: "Church Members", subtitle: "Deepen personal study" },
    { title: "Church Leaders", subtitle: "Sharpen ministry execution" },
    { title: "Students & Young Adults", subtitle: "Establish strong foundations" },
    { title: "Christian Volunteers", subtitle: "Serve with biblical insight" }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen font-sans selection:bg-emerald-600 selection:text-white relative overflow-x-hidden">
        
        {/* Subtle Background Accent Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent pointer-events-none -z-10" />

        {/* --- HERO SECTION --- */}
        <section className="relative w-full pt-32 pb-16 md:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200/60 shadow-sm">
                <Sparkles size={13} className="text-emerald-600 shrink-0" /> Bible & Leadership Institute
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Equipping Christians Through <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-green-600">
                Biblical Learning & Leadership
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
              The Parakletus Bible & Leadership Institute exists to strengthen Christian faith through biblical education, discipleship, leadership development, and question-based learning.
            </p>

            <p className="text-xs sm:text-sm text-emerald-800/80 italic max-w-xl mx-auto pt-1 px-4">
              Developing confident Christian leaders to faithfully serve their churches, families, and communities with wisdom and integrity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="#learning-areas" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-emerald-800 transition-all shadow-md shadow-emerald-700/20 group active:scale-95 text-sm cursor-pointer"
              >
                Explore Learning Areas
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a 
                href="#register" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gray-50 text-gray-700 border border-gray-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all active:scale-95 text-sm cursor-pointer"
              >
                <Mail size={16} className="text-emerald-600 shrink-0" />
                Register Interest
              </a>
            </div>
          </div>
        </section>

        {/* --- OUR LEARNING APPROACH --- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Methodology</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Our Learning Approach</h2>
              <p className="text-sm sm:text-base text-gray-600">How we foster deep spiritual maturity and sound theological understanding.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningApproach.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200/80 p-6 sm:p-7 rounded-2xl hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- AVAILABLE LEARNING AREAS --- */}
        <section id="learning-areas" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Curriculum Structure</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Available Learning Areas</h2>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive study paths structured for personal growth and ministry execution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {learningAreas.map((area, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <area.icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{area.category}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {area.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="break-words">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EDUCATIONAL OBJECTIVES --- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">Mission Goals</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Educational Objectives</h2>
              <p className="text-sm sm:text-base text-gray-600">What we aim to build in every participant who steps through our doors.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {objectives.map((obj, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200/80 p-5 sm:p-6 rounded-xl flex items-start gap-4 hover:border-emerald-500/40 hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{obj.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHO CAN JOIN? --- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Community</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Who Can Join?</h2>
              <p className="text-sm sm:text-base text-gray-600">Our programs are open to all believers seeking a deeper, grounded walk with Christ.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audience.map((aud, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200/80 p-6 sm:p-7 rounded-2xl text-center hover:border-emerald-500/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                    {i === 0 && <Users size={24} />}
                    {i === 1 && <Church size={24} />}
                    {i === 2 && <GraduationCap size={24} />}
                    {i === 3 && <Heart size={24} />}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{aud.title}</h3>
                  <p className="text-xs text-emerald-700 uppercase tracking-wider font-semibold">{aud.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION (CTA) --- */}
        <section id="register" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900 text-white rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
                Take The Next Step
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Begin Your Learning Journey
              </h2>
              
              <p className="text-gray-300 font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Whether you are exploring the Christian faith, preparing for leadership, or seeking a deeper understanding of Scripture, the Parakletus Bible & Leadership Institute welcomes you.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                <a 
                  href="#learning-areas" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-900/40 active:scale-95 text-sm cursor-pointer"
                >
                  📖 Explore Learning Areas
                </a>
                <a 
                  href="mailto:contact@parakletus.org" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all active:scale-95 backdrop-blur-md text-sm cursor-pointer"
                >
                  📩 Register Interest
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}