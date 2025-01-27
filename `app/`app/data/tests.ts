import { Circle, WormIcon as Virus } from 'lucide-react'

export interface Test {
  id: number
  nameAr: string
  nameEn: string
  description: string
  symptoms: string
  transmission: string
  importance: string
  type: "bacteria" | "virus" | "fungus"
}

export const tests: Test[] = [
  {
    id: 1,
    nameAr: "المايكوبلازما التناسلية",
    nameEn: "Mycoplasma Genitalium",
    description: "بكتيريا تسبب التهابات في الجهاز التناسلي",
    symptoms: "قد لا تظهر أعراض. إن وجدت، فقد تشمل حرقة عند التبول أو إفرازات غير طبيعية.",
    transmission: "تنتقل عن طريق الاتصال الجنسي غير المحمي.",
    importance: "الفحص مهم حتى بدون أعراض لتجنب المضاعفات مثل العقم.",
    type: "bacteria",
  },
  {
    id: 2,
    nameAr: "داء المشعرات",
    nameEn: "Trichomoniasis",
    description: "عدوى طفيلية تصيب الجهاز التناسلي",
    symptoms: "إفرازات مهبلية أو من القضيب ذات رائحة كريهة، حكة وتهيج في المنطقة التناسلية.",
    transmission: "تنتقل عن طريق الاتصال الجنسي غير المحمي.",
    importance: "الفحص ضروري لتجنب المضاعفات وانتقال العدوى للشريك.",
    type: "bacteria",
  }
]
