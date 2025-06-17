import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/images/logo.png"; // غير اسم الصورة لاسم مختصر

function Signup() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gray-100">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white">
        <img
          src={logo}
          alt="logo"
          className="w-4/5 h-auto max-h-[500px] lg:max-h-[600px] object-contain p-4"
        />
      </div>

      {/* Form Section */}
      <form dir="rtl" className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 p-6 bg-white">
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">
          إنشاء حساب
        </h1>
        <div className="w-full flex justify-center">
          <Link
            to="/signupcompany"
            className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded hover:bg-[#8b5f31] transition text-center"
          >
            إنشاء حساب للشركات
          </Link>
        </div>
        {/* Group of Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="text"
              placeholder="البريد الإلكتروني"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>{" "}
          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              اسم المستخدم
            </label>
            <input
              id="username"
              type="text"
              placeholder="اسم المستخدم"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>{" "}
          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="identity"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              رقم الهوية
            </label>
            <input
              id="identity"
              type="text"
              placeholder="رقم الهوية"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>{" "}
          {/* Confirm Password */}
          {/* Phone Number */}
          <div 
          className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              رقم الهاتف
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="رقم الهاتف"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-end"
            />
          </div>
          {/* identity */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              placeholder="كلمة المرور"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              تأكيد كلمة المرور
            </label>
            <input
              id="address"
              type="text"
              placeholder="تأكيد كلمة المرور"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[var(--primary-color)] w-full text-white px-6 py-2 rounded hover:bg-black transition"
        >
          إنشاء حساب
        </button>

        <p className="text-sm">
          هل لديك بالفعل حساب شركات{" "}
          <Link
            to="/signin"
            className="text-[var(--secondary-color)] underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
