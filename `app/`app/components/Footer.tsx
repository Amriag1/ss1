import { Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">ساعات العمل</h3>
            <div className="flex items-center justify-center md:justify-end mb-2">
              <Clock className="w-5 h-5 ml-2 text-[#7DBB4F]" />
              <span>السبت - الخميس</span>
            </div>
            <p>8:00 صباحاً - 9:00 مساءً</p>
            <div className="flex items-center justify-center md:justify-end mt-2">
              <Clock className="w-5 h-5 ml-2 text-[#7DBB4F]" />
              <span>الجمعة</span>
            </div>
            <p>4:00 مساءً - 9:00 مساءً</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">تواصل معنا</h3>
            <div className="flex items-center justify-center mb-2">
              <Phone className="w-5 h-5 ml-2 text-[#7DBB4F]" />
              <span>920022632</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 ml-2 text-[#7DBB4F]" />
              <span>mail@trustmedlab.com</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">سياسة الخصوصية</h3>
            <p>نلتزم بحماية خصوصية عملائنا وسرية معلوماتهم الشخصية</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
