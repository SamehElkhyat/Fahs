import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#27420F] mb-12">اتصل بنا</h2>
        <div className="max-w-5xl mx-auto bg-[#F2F7F3] p-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-right text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#27420F]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-right text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#27420F]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-right text-gray-700 mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#27420F]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-right text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#27420F]"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#27420F] text-white px-8 py-3 rounded-lg hover:bg-[#1a2c0a] transition-colors duration-200"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="order-1 md:order-2 text-right">
              <h3 className="text-2xl font-semibold text-[#27420F] mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div>
                    <h4 className="font-semibold text-gray-800">العنوان</h4>
                    <p className="text-gray-600">المملكة العربية السعودية، الرياض</p>
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#27420F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div>
                    <h4 className="font-semibold text-gray-800">البريد الإلكتروني</h4>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#27420F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div>
                    <h4 className="font-semibold text-gray-800">رقم الجوال</h4>
                    <p className="text-gray-600">+966 50 000 0000</p>
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#27420F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;