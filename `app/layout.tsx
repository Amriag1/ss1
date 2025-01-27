import "./globals.css"
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] })

export const metadata = {
  title: "مختبرات ثقة الطبية - فحص الأمراض الجنسية",
  description: "احصل على فحص شامل للأمراض الجنسية بسرية تامة ونتائج دقيقة وسريعة",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}
