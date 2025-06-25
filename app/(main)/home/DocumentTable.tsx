const documents = [
  { id: "VB001", title: "Thông báo nghỉ lễ Quốc khánh", date: "2025-06-20", status: "Đã ký" },
  { id: "VB002", title: "Kế hoạch đào tạo quý III", date: "2025-06-15", status: "Chờ duyệt" },
  { id: "VB003", title: "Công văn gửi phòng tài chính", date: "2025-06-10", status: "Đã gửi" },
];

export default function DocumentTable() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Danh sách công văn</h3>
        <a href="#" className="text-sm text-indigo-600 hover:underline">Xem tất cả</a>
      </div>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Mã VB</th>
              <th className="px-4 py-2">Tiêu đề</th>
              <th className="px-4 py-2">Ngày</th>
              <th className="px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{doc.id}</td>
                <td className="px-4 py-2">{doc.title}</td>
                <td className="px-4 py-2">{doc.date}</td>
                <td className="px-4 py-2">{doc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
