import Image from 'next/image';
import WhoWeAreImage from '../../../public/whoweare.jpg';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Visual Container */}
        <div className="relative group">
          {/* Decorative background element */}
          <div className="absolute -inset-4 bg-green-50 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6" />
          
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <Image
              src={WhoWeAreImage}
              alt="Parakletus volunteers working with community members"
              fill
              className="rounded-3xl shadow-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-0.5 bg-green-600" />
            <span className="text-green-600 uppercase tracking-[0.3em] font-bold text-[11px]">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Building Stronger Communities Through Faith and Service
          </h2>

          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              Parakletus is a Christian faith-based nonprofit organization dedicated to serving vulnerable communities through education, healthcare, humanitarian assistance, and legal advocacy.
            </p>
            <p className="text-gray-900 font-medium">
              Guided by biblical values, we work alongside churches, community leaders, and partners to create sustainable solutions that restore hope and strengthen lives.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-green-200 transition-colors">
              <h3 className="font-extrabold text-4xl text-green-700 mb-1">10+</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Years of Service</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-green-200 transition-colors">
              <h3 className="font-extrabold text-4xl text-gray-900 mb-1">5k+</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}