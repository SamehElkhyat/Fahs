import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/images/logo.png";

function VerifyEmail() {
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
              fill="#000000"
              width="54px"
              height="54px"
              viewBox="0 0 1920 1920"
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
                  d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                  fill-rule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--primary-color)] flex flex-col items-center gap-2 text-center  ">
            تحقق من بريدك الإلكتروني{" "}
            <span className=" text-sm text-gray-500">
              لتحقق من بريدك الإلكتروني، يرجى إدخال عنوان بريدك الإلكتروني.{" "}
            </span>
          </h1>
          {/* Group of Inputs */}
          <div className=" md:grid-cols-2 gap-4 w-full max-w-3xl">
            {/* Email */}
            <div dir="ltr" className="flex justify-center gap-5 m-5">
              {[...Array(5)].map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-12 h-14 text-2xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[var(--primary-color)] w-full text-white px-6 py-2 rounded hover:bg-black transition"
          >
            تأكيد
          </button>
          <p className="text-sm flex gap-2">
            لم يصلك الرمز؟ <Link to="/resetpassword" className="text-[var(--secondary-color)] underline-none flex items-center gap-2">اعادة ارسال الرمز</Link>
          </p>

          <p className="text-sm flex gap-2">
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

export default VerifyEmail;
