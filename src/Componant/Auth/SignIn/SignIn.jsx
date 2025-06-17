import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/images/logo.png"; // غير اسم الصورة لاسم مختصر

function SignIn() {
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
      <form className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 p-6 bg-white ">
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">
          تسجيل دخول
        </h1>

        {/* Group of Inputs */}
        <div
          dir="rtl"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl lg:w-full md:flex flex-col "
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
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
              className="p-2 border active:border-[var(--primary-color)] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
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
            <Link to="/resetpassword" className="text-[var(--secondary-color)] underline-none flex items-center gap-2">
            هل نسيت كلمه المرور؟
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[var(--primary-color)] w-full text-white px-6 py-2 rounded hover:bg-black transition"
        >
            تسجيل الدخول
        </button>

        <p className="text-sm">
          ليس لديك حساب{" "}
          <Link
            to="/signup"
            className="text-[var(--secondary-color)] underline"
          >
            إنشاء حساب
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
