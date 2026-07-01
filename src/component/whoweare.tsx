import Image from 'next/image';
import WhoWeAreImage from '@/public/whoweare.jpg'; // Optional: Use static import

export default function WhoWeAre() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Optimized Image */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src={WhoWeAreImage}
            alt="Parakletus volunteers working with community members"
            fill
            className="rounded-3xl shadow-xl object-cover"
            priority // Use priority for images "above the fold"
          />
        </div>

        {/* Content */}
        <div>

          <span className="text-green-600 uppercase tracking-[3px] font-semibold">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold mt-3 leading-tight">
            Building Stronger Communities Through Faith and Service
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Parakletus exists to bring hope and sustainable transformation to
            vulnerable communities. Inspired by Christian values, we partner with
            individuals, churches, organizations, and local communities to address
            real-life challenges through practical solutions.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our work focuses on empowering children, supporting families,
            strengthening communities, and creating opportunities that improve
            quality of life. Every initiative is guided by integrity, compassion,
            and a commitment to serving with excellence.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-3xl text-green-600">10+</h3>
              <p className="text-gray-600 mt-2">
                Years of Community Service
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-3xl text-green-600">5,000+</h3>
              <p className="text-gray-600 mt-2">
                Lives Impacted
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}