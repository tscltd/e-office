'use client';
import React, { useState } from 'react';

const programs = [
  { name: '🎨 Mỹ thuật - Painting Art', value: 'painting' },
  { name: '🎵 Âm nhạc - Music Program', value: 'music' },
  { name: '📘 Anh văn thiếu nhi - English Program', value: 'english' }
];

export default function RegistrationPage() {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    program: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        'https://music-vote-tsc-default-rtdb.firebaseio.com/artkey/registrations.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString()
          })
        }
      );
      if (response.ok) {
        alert('🎉 Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.');
        setForm({
          fullName: '',
          age: '',
          phone: '',
          email: '',
          program: '',
          note: ''
        });
      } else {
        alert('❗Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (err) {
      console.error(err);
      alert('⛔ Không thể kết nối. Kiểm tra mạng hoặc thử lại sau.');
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-14 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo/1.png"
              alt="Art Key Logo"
              className="h-20 object-contain"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-[#EF4036] mb-2">Đăng ký khóa học</h1>
          <p className="text-gray-600 text-lg">Lựa chọn chương trình phù hợp cho bé yêu</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và tên học viên</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tuổi</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                min="3"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Số điện thoại phụ huynh</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email (nếu có)</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Chương trình đăng ký</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              >
                <option value="" className='text-gray-700'>-- Chọn chương trình --</option>
                {programs.map((p) => (
                  <option className='text-gray-700' key={p.value} value={p.value}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Ghi chú (nếu có)</label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#EF4036] outline-none transition text-gray-700"
              placeholder="Ví dụ: Ưu tiên học chiều, đã học piano 1 năm..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#EF4036] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#d8382f] transition relative"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Đang gửi...
                </span>
              ) : (
                'Gửi đăng ký'
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
