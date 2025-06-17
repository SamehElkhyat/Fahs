import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/images/logo.png";

function ResetPassword() {
  return (
    <>
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
        <form className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 p-6 bg-white">
          <div className="p-5 bg-yellow-100 rounded-full">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 9C12.9853 9 15 6.98528 15 4.5C15 2.01472 12.9853 0 10.5 0C8.01475 0 6.00003 2.01472 6.00003 4.5C6.00003 5.38054 6.25294 6.20201 6.69008 6.89574L0.585815 13L3.58292 15.9971L4.99714 14.5829L3.41424 13L5.00003 11.4142L6.58292 12.9971L7.99714 11.5829L6.41424 10L8.10429 8.30995C8.79801 8.74709 9.61949 9 10.5 9ZM10.5 7C11.8807 7 13 5.88071 13 4.5C13 3.11929 11.8807 2 10.5 2C9.11932 2 8.00003 3.11929 8.00003 4.5C8.00003 5.88071 9.11932 7 10.5 7Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--primary-color)] flex flex-col items-center gap-2 text-center  ">
            نسيت كلمة المرور{" "}
            <span className=" text-sm text-gray-500">
              لإعادة تعيين كلمة المرور الخاصة بك، يرجى إدخال عنوان بريدك
              الإلكتروني.{" "}
            </span>
          </h1>
          {/* Group of Inputs */}
          <div className=" md:grid-cols-2 gap-4 w-full max-w-3xl">
            {/* Email */}
            <div dir="rtl" className="flex flex-col">
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
            </div>
          </div>

          <button
            type="submit"
            className="bg-[var(--primary-color)] w-full text-white px-6 py-2 rounded hover:bg-black transition"
          >
            اعادة تعيين كلمة المرور{" "}
          </button>

          <p className="text-sm">
            <Link
              to="/signin"
              className="text-[var(--secondary-color)] underline-none flex items-center gap-2"
            >
              الرجوع لتسجيل الدخول
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
