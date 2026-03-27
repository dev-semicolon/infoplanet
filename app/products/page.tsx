import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Gift, BarChart3, Users, Star } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: "surveys",
      title: "리워드 서베이",
      description: "사용자 참여를 통해 가치 있는 인사이트를 수집하고 의미 있는 보상을 제공합니다.",
      image: "/mobile-survey-interface-with-rewards.jpg",
      features: [
        "맞춤형 설문조사 디자인",
        "타겟팅된 사용자 세그먼트",
        "실시간 응답 분석",
        "다양한 리워드 옵션"
      ]
    },
    {
      id: "loyalty",
      title: "로열티 프로그램",
      description: "고객 충성도를 높이고 반복 구매를 유도하는 맞춤형 로열티 프로그램을 제공합니다.",
      image: "/loyalty-program-dashboard-interface.jpg",
      features: [
        "포인트 및 티어 시스템",
        "맞춤형 보상 구조",
        "고객 행동 분석",
        "멤버십 관리 도구"
      ]
    },
    {
      id: "notifications",
      title: "리워드 알림",
      description: "사용자 참여를 유도하는 맞춤형 리워드 알림 시스템으로 앱 참여도를 높입니다.",
      image: "/mobile-app-reward-notification-interface.jpg",
      features: [
        "맞춤형 알림 트리거",
        "다양한 리워드 유형",
        "행동 기반 인센티브",
        "실시간 분석 및 최적화"
      ]
    }
  ]

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/gradient-background.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      {/* 장식 요소 - 메인 페이지와 동일한 스타일 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 geometric-pattern opacity-30" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm">제품</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white">
                혁신적인 리워드 마케팅 제품
              </h1>
              <p className="text-xl text-white/70 text-balance max-w-3xl mx-auto">
                인포플래닛의 다양한 제품으로 사용자 참여와 비즈니스 성장을 가속화하세요
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center mb-32 last:mb-0`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-white">85%+</div>
                      <div className="text-sm text-white/70">참여율 증가</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-white">{product.title}</h2>
                  <p className="text-white/70 mb-6 text-lg">{product.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                  >
                    자세히 알아보기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 glass-morphism mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">맞춤형 제품 개발</h2>
                  <p className="text-white/70 mb-6">
                    인포플래닛은 귀사의 특별한 요구사항에 맞는 맞춤형 리워드 마케팅 제품을 개발합니다. 
                    우리의 전문가 팀이 귀사의 비즈니스 목표와 사용자 특성을 분석하여 최적의 솔루션을 제공합니다.
                  </p>
                  <Button
                    className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
                  >
                    맞춤형 제품 문의하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Gift className="h-10 w-10 mx-auto mb-4 text-white/80" />
                      <h3 className="font-semibold text-white mb-2">맞춤형 리워드</h3>
                      <p className="text-sm text-white/70">귀사의 브랜드에 맞는 특별한 리워드 경험</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="h-10 w-10 mx-auto mb-4 text-white/80" />
                      <h3 className="font-semibold text-white mb-2">고급 분석</h3>
                      <p className="text-sm text-white/70">실시간 데이터로 캠페인 성과 최적화</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Users className="h-10 w-10 mx-auto mb-4 text-white/80" />
                      <h3 className="font-semibold text-white mb-2">타겟팅</h3>
                      <p className="text-sm text-white/70">정확한 사용자 세그먼트 타겟팅</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Star className="h-10 w-10 mx-auto mb-4 text-white/80" />
                      <h3 className="font-semibold text-white mb-2">프리미엄 지원</h3>
                      <p className="text-sm text-white/70">전담 지원 팀의 지속적인 서비스</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
        <Toaster />
      </div>
    </main>
  )
}
