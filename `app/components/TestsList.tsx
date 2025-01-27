"use client"

import { useState } from "react"
import { tests } from "../data/tests"
import { Shield, Clock, Search, Zap, Microscope, UserCheck, Headphones, ChevronLeft, TestTube, Beaker, FlaskRoundIcon as Flask, Hourglass, BugIcon as Bacteria, WormIcon as Virus, Sprout } from 'lucide-react'
import Modal from "./Modal"
import Image from "next/image"

export default function TestsList() {
  const [selectedTest, setSelectedTest] = useState<(typeof tests)[0] | null>(null)

  const getPathogenImage = (type: "bacteria" | "virus" | "fungus") => {
    switch (type) {
      case "bacteria":
        return Math.random() > 0.5
          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacteria-Zp77ZPQ0d9OzZXSb0Ndc51pT0nbh9s.png"
          : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacteria-2-YvJufoBtYF0bu5XsuI5vM1GhlFMVoe.png"
      case "virus":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coronavirus-w3ly3VC4AiatWpuaJF9VzmhYy5hk3u.png"
      default:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacteria-2-YvJufoBtYF0bu5XsuI5vM1GhlFMVoe.png"
    }
  }

  const getGradientColor = (type: "bacteria" | "virus" | "fungus") => {
    switch (type) {
      case "bacteria":
        return "from-blue-50 to-blue-100"
      case "virus":
        return "from-red-50 to-red-100"
      case "fungus":
        return "from-green-50 to-green-100"
      default:
        return "from-gray-50 to-gray-100"
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#F0F8FF] to-white">
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#F0F8FF] px-6 py-3 text-3xl font-bold text-[#67C8F3] rounded-full border-2 border-[#67C8F3]">
                باقة الأمراض المنقولة جنسياً تشمل
              </span>
            </div>
          </div>
          <p className="text-gray-600 underline">
            مجموعة شاملة من ٢٠ تحليل للكشف عن الأمراض المنقولة جنسياً باستخدام أحدث التقنيات
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {tests.map((test) => (
            <div
              key={test.id}
              className={`bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                test.type === "bacteria"
                  ? "bg-blue-50"
                  : test.type === "virus"
                  ? "bg-red-50"
                  : test.type === "fungus"
                  ? "bg-green-50"
                  : ""
              }`}
            >
              <div className="border-r-4 border-[#7DBB4F] pr-3 flex justify-between items-start h-full">
                <div className="flex items-start">
                  <div className="ml-2 mt-1">
                    <Image
                      src={getPathogenImage(test.type) || "/placeholder.svg"}
                      alt={test.type}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#67C8F3] mb-1">{test.nameAr}</h3>
                    <p className="text-xs text-gray-500">{test.nameEn}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTest(test)}
                  className="text-[#FF6B6B] hover:text-[#FF8787] transition-colors flex items-center text-xs font-semibold"
                >
                  <span className="ml-1">تفاصيل</span>
                  <ChevronLeft size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Test Requirements Section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#67C8F3] via-[#7DBB4F] to-[#67C8F3] opacity-50 rounded-lg"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-lg border-4 border-[#67C8F3]">
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t-2 border-[#7DBB4F]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 py-3 text-3xl font-bold text-[#67C8F3] rounded-full border-2 border-[#67C8F3]">
                  متطلبات التحليل
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blood Sample Requirements */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center mb-4">
                  <TestTube className="w-8 h-8 text-red-500 ml-3" />
                  <h3 className="text-xl font-bold">عينة الدم</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Hourglass className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>لا يتطلب صيام</span>
                  </li>
                  <li className="flex items-center">
                    <Flask className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>كمية العينة: 5 مل</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>وقت النتيجة: 5-7 أيام</span>
                  </li>
                </ul>
              </div>

              {/* Urine Sample Requirements */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-center mb-4">
                  <Beaker className="w-8 h-8 text-yellow-500 ml-3" />
                  <h3 className="text-xl font-bold">عينة البول</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Flask className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>عينة البول الأولى في الصباح</span>
                  </li>
                  <li className="flex items-center">
                    <Microscope className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>في وعاء معقم خاص</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 ml-2 text-[#7DBB4F]" />
                    <span>وقت النتيجة: 5-7 أيام</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Shield, title: "خصوصية تامة", description: "نضمن سرية معلوماتك الشخصية" },
            { icon: Clock, title: "نتائج سريعة", description: "نتائج دقيقة خلال وقت قصير" },
            { icon: Search, title: "دقة عالية", description: "باستخدام أحدث التقنيات العالمية" },
            { icon: Zap, title: "تقنيات متطورة", description: "نستخدم أحدث التقنيات في مجال التحاليل الطبية" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#67C8F3]"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#7DBB4F]" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#67C8F3] mb-4">لماذا تختارنا؟</h2>
          <p className="text-gray-600">نقدم خدمات تحليل عالية الجودة مع مجموعة من المميزات الفريدة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Microsc
