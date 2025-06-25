const items = [
  { title: "The book is an essential...", gradient: "from-pink-100 to-purple-200" },
  { title: "The book is an essential...", gradient: "from-yellow-100 to-orange-200" },
  { title: "The book is an essential...", gradient: "from-green-100 to-lime-200" },
  { title: "The book is an essential...", gradient: "from-blue-100 to-indigo-200" },
];

export default function PopularSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Popular</h3>
        <a href="#" className="text-sm text-indigo-600 hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow p-4 hover:shadow-md transition bg-gradient-to-br ${item.gradient}`}
          >
            <div className="h-32 rounded-lg bg-white/30 mb-3"></div>
            <p className="text-sm font-medium text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
