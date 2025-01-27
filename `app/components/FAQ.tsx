"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "هل الفحوصات سرية؟",
    answer: "نعم، جميع الفحوصات والنتائج سرية تمامًا. نحن نلتزم بأعلى معايير الخصوصية والسرية الطبية.",
  },
  {
    question: "كم تستغرق النتائج؟",
    answer: "عادة ما تكون النتائج جاهزة خلال 5-7 أيام عمل من تاريخ أخذ العينة.",
  },
  {
    question: "هل أحتاج إلى موعد مسبق؟",
    answer:
      "نعم، نوصي بحجز موعد مسبق لضمان خدمة سريعة وفعالة. يمكنك حجز موعد عبر الهاتف أو من خلال نموذج الحجز على موقعنا.",
  },
  {
    question: "هل يجب أن أكون صائمًا قبل الفحص؟",
    answer:
      "لمعظم الفحوصات، لا يلزم الصيام. ومع ذلك، قد تتطلب بعض الفحوصات المحددة الصيام. سنخبرك بأي متطلبات خاصة عند حجز موعدك.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#67C8F3] mb-8">الأسئلة الشائعة</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-right bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-[#7DBB4F]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#67C8F3]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#67C8F3]" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

