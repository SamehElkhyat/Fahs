import React, { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "كيف أطلب فاحص معتمد؟",
      answer: "يمكنك طلب فاحص معتمد من خلال تعبئة النموذج في موقعنا أو الاتصال بنا مباشرة. سيتم تحديد موعد الفحص حسب جدولك المناسب."
    },
    {
      question: "ما هي خطوات الفحص؟",
      answer: "تشمل خطوات الفحص: تحديد موعد الفحص، زيارة الموقع، فحص جميع الأنظمة والمكونات، توثيق النتائج، وتقديم تقرير مفصل."
    },
    {
      question: "كم يستغرق الفحص؟",
      answer: "يستغرق الفحص عادةً من 2-4 ساعات، اعتماداً على حجم العقار ونوعه وتعقيد الأنظمة المراد فحصها."
    },
    {
      question: "هل يغطي الفحص جميع أنواع العقارات؟",
      answer: "نعم، نقدم خدمات فحص لجميع أنواع العقارات بما في ذلك المنازل، الشقق، الفلل، والمباني التجارية."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#27420F] mb-12">الأسئلة الشائعة</h2>
        <div className="max-w-3xl mx-auto bg-[#F2F7F3] p-10">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-right bg-white p-4 rounded-lg shadow-sm flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-[#27420F]">
                  {index + 1}. {item.question}
                </span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg
                    className="w-6 h-6 text-[#27420F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-white mt-2 p-4 rounded-lg shadow-sm border-t-2 border-[#27420F]/10">
                  <p className="text-gray-600 text-right">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection; 