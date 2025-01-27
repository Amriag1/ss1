import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="py-16 bg-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-[#67C8F3] mb-6 text-center">احجز فحصك الآن</h3>
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-[#7DBB4F] flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> للتواصل: 920022632
            </p>
          </div>
        </div>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#67C8F3] text-center">نموذج الحجز</CardTitle>
            <CardDescription className="text-center">نضمن لك السرية التامة في جميع مراحل الفحص</CardDescription>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDRXp6w9KxagJaT7UPFVvsvSRG7QfyIUadJZYO7dCuBY2DYw/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="mx-auto"
            >
              جاري تحميل النموذج...
            </iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
