export default function LoginForm() {
  return (
    <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4 text-gray-800">
      <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>

      <input
        type="text"
        placeholder="Tên đăng nhập"
        className="w-full border border-gray-300 p-2 rounded placeholder-gray-400"
        required
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full border border-gray-300 p-2 rounded placeholder-gray-400"
        required
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-medium py-2 rounded hover:bg-primary.dark transition"
      >
        Đăng nhập
      </button>

    </form>
  );
}
