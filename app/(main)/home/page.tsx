import RightSidebar from "./RightSidebar";
import DocumentTable from "./DocumentTable";
import PopularSection from "./PopularSection";

export default function HomePage() {
  const items = [
    { title: "The book is an essential...", img: "/images/book1.png" },
    { title: "The book is an essential...", img: "/images/book2.png" },
    { title: "The book is an essential...", img: "/images/book3.png" },
    { title: "The book is an essential...", img: "/images/book4.png" },
    { title: "The book is an essential...", img: "/images/book5.png" },
    { title: "The book is an essential...", img: "/images/book6.png" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f2e8ff] via-[#f4f4fc] to-[#f4f8ff] text-gray-800">
      {/* Sidebar */}

      {/* Main content */}
      <main className="flex-1 p-12 space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-2xl p-6 shadow flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Hi, Irham Muhammad Shidiq</h2>
            <p className="text-sm">The library serves as a welcoming home for knowledge seekers</p>
          </div>
          <button className="bg-white text-indigo-600 px-4 py-2 text-sm rounded-lg font-medium hover:bg-gray-100">
            Learn more
          </button>
        </div>

        {/* Popular */}
        <PopularSection />

        {/* Ongoing */}
        <DocumentTable />
      </main>

      {/* RIGHT SIDEBAR fixed */}
      <div className="relative w-80 hidden xl:block">
        <div className="fixed right-0 top-14 h-screen w-80 border-l bg-white overflow-hidden">
          <div className="h-full">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}