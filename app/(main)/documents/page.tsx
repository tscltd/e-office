"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const documents = [
  { id: "VB-001", title: "Quyết định nghỉ lễ", date: "2025-06-25", status: "Đã ký" },
  { id: "VB-002", title: "Thông báo họp giao ban", date: "2025-06-24", status: "Chờ duyệt" },
  { id: "VB-003", title: "Công văn gửi sở GD", date: "2025-06-20", status: "Đã gửi" },
];

export default function DocumentPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý văn bản</h1>
        <Button>Tạo mới</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mã VB</TableHead>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Ngày ban hành</TableHead>
            <TableHead>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.id}</TableCell>
              <TableCell>{doc.title}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>{doc.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
