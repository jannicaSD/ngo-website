export default function Leadership() {
  const leaders = ["Executive Director", "Board Members", "Program Managers", "Legal Advisors"];
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Leadership</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-16">
          Led by dedicated professionals, legal experts, and pastors who ensure every program reflects our mission of integrity and excellence.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {leaders.map((role) => (
            <div key={role} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-green-500 transition">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4" />
              <h4 className="font-bold">{role}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}