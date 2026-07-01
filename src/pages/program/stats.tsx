const stats = [
  { label: "Education Projects", value: "📚 50+" },
  { label: "Legal Cases Supported", value: "⚖️ 200+" },
  { label: "Volunteers Engaged", value: "🤝 150+" },
  { label: "Families Assisted", value: "❤️ 5,000+" },
];

export default function Stats() {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-xs uppercase tracking-widest font-bold text-green-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}