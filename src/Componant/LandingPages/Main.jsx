import React from "react";
import house3d from "../../assests/images/house3d.png";
import Section2 from "./Section2";

export default function Main() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-[#F9F7F1]">
      {/* خلفية خضراء مائلة للديسكتوب */}
      <div
        className="hidden md:block absolute top-0 left-0 h-full w-3/5 z-10"
        style={{
          background: "#27420F",
          clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)",
          backgroundColor: "#27420F",
        }}
      />
      {/* خلفية خضراء علوية للجوال */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-[180px] bg-[#27420F] z-10 rounded-b-[60vw]" />
      {/* محتوى الصفحة */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between container mx-auto px-3 xs:px-4 pt-8 md:pt-16 pb-4 md:pb-8 min-h-[70vh]">
        {/* النص */}
        <div className=" w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-8 order-2 md:order-1 mt-4 md:mt-0">
          <div className="  max-w-lg w-full text-center md:text-left space-y-5 md:space-y-6">
            <h1 className="text-start text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-[#27420F] leading-relaxed">
              سلامة عقارك تبدأ بفحص دقيق مع أفضل المهندسين
              <br />
              بالمملكة العربية السعودية.
            </h1>
            <p className="text-start text-[#27420F]/80 text-sm xs:text-base md:text-lg">
              نساعدك على كشف العيوب الخفية وتقييم حالة العقار بدقة.
              <br />
              لضمان استثمار آمن وقرارات عقارية مبنية على معلومات موثوقة.
            </p>
            <button className="flex justify-end items-end bg-[#b17f45] hover:bg-[#8e6636] text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition duration-300 w-full md:w-fit">
              احجز استشارة الآن
            </button>
          </div>
        </div>
        {/* صورة المنزل */}
        <div className="w-full md:w-1/2 flex justify-center items-end relative mb-4 md:mb-0 order-1 md:order-2">
          <img
            loading="lazy"
            src={house3d}
            alt="3D House"
            className="w-[160px] xs:w-[200px] sm:w-[260px] md:w-[420px] drop-shadow-2xl z-20 transition-all duration-300 mx-auto"
            style={{ filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.18))" }}
          />
          {/* ظل أسفل المنزل */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 sm:w-2/3 h-4 md:h-8 bg-black/20 blur-md rounded-full z-10" />
        </div>
      </div>
      {/* مربع البحث في الأسفل بالمنتصف */}
      <div className="relative z-30 flex justify-center w-full pb-6 md:pb-12 px-2">
        <form className="bg-white rounded-xl shadow-lg px-2 xs:px-4 py-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-2xl mx-auto">
          <select className="flex-1 p-2 md:p-3 rounded border border-gray-200 text-right text-gray-700 bg-white text-sm md:text-base">
            <option>نوع الطلب</option>
            <option>فلل</option>
            <option>شقق</option>
            <option>أراضي</option>
          </select>
          <select className="flex-1 p-2 md:p-3 rounded border border-gray-200 text-right text-gray-700 bg-white text-sm md:text-base">
            <option>الموقع</option>
            <option>الرياض</option>
            <option>جدة</option>
            <option>الدمام</option>
          </select>
          <select className="flex-1 p-2 md:p-3 rounded border border-gray-200 text-right text-gray-700 bg-white text-sm md:text-base">
            <option>السعر</option>
            <option>الكل</option>
            <option>أقل من مليون</option>
            <option>1-2 مليون</option>
            <option>أكثر من 2 مليون</option>
          </select>
          <button
            type="submit"
            className="bg-[#b17f45] hover:bg-[#8e6636] text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-lg text-sm md:text-base transition duration-300 min-w-[70px] md:min-w-[80px] w-full sm:w-fit"
          >
            بحث
          </button>
        </form>
      </div>
    </div>
  );
}
