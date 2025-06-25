import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaBook, FaVideo, FaCalendarCheck, FaMoneyCheckAlt, FaBookOpen, FaChartBar, FaArrowUp } from "react-icons/fa";

export default function Sidebar() {
  const menu = [
    { label: "Home", icon: <FaHome /> },
    { label: "Students", icon: <FaUserGraduate /> },
    { label: "Teachers", icon: <FaChalkboardTeacher /> },
    { label: "Courses", icon: <FaBook /> },
    { label: "Live Class", icon: <FaVideo /> },
    { label: "Attendance", icon: <FaCalendarCheck /> },
    { label: "Payments", icon: <FaMoneyCheckAlt /> },
    { label: "Library", icon: <FaBookOpen /> },
    { label: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-xl p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-8 text-indigo-600">SkillSet</h1>
        <nav className="space-y-4 text-sm">
          {menu.map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-3 text-gray-600 hover:text-indigo-500">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        <button className="flex items-center justify-center gap-2 bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg w-full hover:bg-indigo-600">
          <FaArrowUp /> Upgrade
        </button>
      </div>
    </aside>
  );
}
