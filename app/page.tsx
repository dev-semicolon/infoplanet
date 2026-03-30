import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrustSection } from "@/components/trust-section"
import { IntegrationSection } from "@/components/integration-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "인포플래닛 - 리워드 광고 마케팅 플랫폼",
  description: "브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션. 성과를 만드는 광고, 수익을 만드는 플랫폼. 리워드 서베이, 인앱 리워드, SNS 마케팅, 바이럴 마케팅 솔루션 제공.",
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* 밝은 배경 레이어 */}
      <div className="absolute inset-0 bg-white" />
      
      {/* 부드러운 그라데이션 오브 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-200 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-200 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[280px] h-[280px] md:w-[550px] md:h-[550px] bg-blue-200 rounded-full blur-[100px] md:blur-[150px]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <HeroSection />
        
        <FeaturesSection />
        
        <TrustSection />
        
        <IntegrationSection />
        
        <ContactSection />
        
        <Footer />
        <Toaster />
      </div>
    </main>
  )
}
