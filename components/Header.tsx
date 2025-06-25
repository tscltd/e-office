// components/Header.tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-primary">e-Office</h1>
      <a href="/login" className="text-sm text-primary hover:underline">Đăng nhập</a>

    </header>
  );
}
