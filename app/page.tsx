import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrustSection } from "@/components/trust-section"
import { IntegrationSection } from "@/components/integration-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

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
