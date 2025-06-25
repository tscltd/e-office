import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-muted">
          {children}
        </main>
      </div>
    </div>
  );
}
