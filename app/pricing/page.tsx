import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, XCircle, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "스타터",
      description: "소규모 비즈니스와 스타트업을 위한 기본 플랜",
      price: "150만원",
      period: "/월",
      features: [
        { name: "월 10만 리워드 포인트", included: true },
        { name: "기본 리워드 캠페인 2개", included: true },
        { name: "기본 분석 대시보드", included: true },
        { name: "이메일 지원", included: true },
        { name: "API 액세스", included: false },
        { name: "맞춤형 리워드 옵션", included: false },
        { name: "전담 계정 관리자", included: false },
      ],
      popular: false
    },
    {
      name: "비즈니스",
      description: "성장하는 중견기업을 위한 확장 가능한 솔루션",
      price: "450만원",
      period: "/월",
      features: [
        { name: "월 50만 리워드 포인트", included: true },
        { name: "리워드 캠페인 10개", included: true },
        { name: "고급 분석 및 리포팅", included: true },
        { name: "우선 이메일 및 전화 지원", included: true },
        { name: "API 액세스", included: true },
        { name: "맞춤형 리워드 옵션", included: true },
        { name: "전담 계정 관리자", included: false },
      ],
      popular: true
    },
    {
      name: "엔터프라이즈",
      description: "대기업을 위한 맞춤형 엔터프라이즈급 솔루션",
      price: "문의",
      period: "",
      features: [
        { name: "무제한 리워드 포인트", included: true },
        { name: "무제한 리워드 캠페인", included: true },
        { name: "맞춤형 분석 및 리포팅", included: true },
        { name: "24/7 프리미엄 지원", included: true },
        { name: "고급 API 및 통합", included: true },
        { name: "맞춤형 리워드 전략", included: true },
        { name: "전담 계정 관리 팀", included: true },
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: "리워드 포인트란 무엇인가요?",
      answer: "리워드 포인트는 사용자에게 제공하는 인센티브의 단위입니다. 각 포인트는 현금 가치로 환산되며, 다양한 리워드 옵션으로 사용자에게 제공됩니다."
    },
    {
      question: "계약 기간은 어떻게 되나요?",
      answer: "스타터와 비즈니스 플랜은 월간 또는 연간 계약이 가능합니다. 연간 계약 시 20% 할인이 적용됩니다. 엔터프라이즈 플랜은 맞춤형 계약 조건으로 협의 가능합니다."
    },
    {
      question: "플랜을 업그레이드하거나 다운그레이드할 수 있나요?",
      answer: "네, 언제든지 비즈니스 요구사항에 맞게 플랜을 변경할 수 있습니다. 업그레이드는 즉시 적용되며, 다운그레이드는 현재 계약 기간이 끝난 후 적용됩니다."
    },
    {
      question: "맞춤형 리워드 옵션이란 무엇인가요?",
      answer: "맞춤형 리워드 옵션을 통해 귀사의 브랜드에 맞는 고유한 리워드 경험을 설계할 수 있습니다. 여기에는 브랜드 맞춤형 UI, 특별 리워드 유형, 사용자 지정 리워드 규칙 등이 포함됩니다."
    },
    {
      question: "API 통합은 어떻게 작동하나요?",
      answer: "인포플래닛은 RESTful API를 제공하여 귀사의 기존 시스템과 원활하게 통합할 수 있습니다. 자세한 API 문서와 개발자 지원을 제공합니다."
    },
    {
      question: "무료 체험 기간이 있나요?",
      answer: "네, 모든 플랜에 14일 무료 체험 기간을 제공합니다. 엔터프라이즈 플랜은 맞춤형 데모 및 POC(개념 증명)를 제공합니다."
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
              <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm">가격 정책</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white">
                비즈니스 규모에 맞는 투명한 가격 정책
              </h1>
              <p className="text-xl text-white/70 text-balance max-w-3xl mx-auto">
                인포플래닛은 모든 규모의 기업에 맞는 유연한 가격 정책을 제공합니다
              </p>
              
              <div className="flex justify-center mt-8 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                  <div className="flex">
                    <button className="px-6 py-2 rounded-full bg-white/20 text-white">월간 결제</button>
                    <button className="px-6 py-2 rounded-full text-white/70">연간 결제 (20% 할인)</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative border-white/10 bg-white/10 backdrop-blur-xl shadow-lg ${plan.popular ? 'ring-2 ring-white/30' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-white text-slate-900 border-none shadow-sm">인기 플랜</Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70">{plan.period}</span>
                    </div>
                    
                    <Button 
                      className={`w-full mb-8 ${plan.name === "엔터프라이즈" ? 'bg-white text-slate-900' : 'bg-white/20 text-white'} hover:bg-white/30 border-white/10`}
                    >
                      {plan.name === "엔터프라이즈" ? "문의하기" : "시작하기"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? "text-white/70" : "text-white/40"}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 section-alt-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">자주 묻는 질문</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                인포플래닛 가격 정책에 대해 자주 묻는 질문들을 모았습니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="border-white/10 bg-white/10 backdrop-blur-xl shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <HelpCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <h3 className="font-semibold text-white">{faq.question}</h3>
                    </div>
                    <p className="text-white/70 pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/70 mb-6">
                더 궁금한 사항이 있으신가요? 저희 팀이 도와드리겠습니다.
              </p>
              <Button
                className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
              >
                문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 glass-morphism">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">엔터프라이즈 맞춤 솔루션</h2>
                  <p className="text-white/70 mb-6">
                    대규모 기업을 위한 맞춤형 리워드 마케팅 솔루션이 필요하신가요? 인포플래닛의 엔터프라이즈 팀이 귀사의 특별한 요구사항에 맞는 솔루션을 설계해 드립니다.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">맞춤형 계약 조건 및 가격</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">전담 구현 및 지원 팀</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">맞춤형 기능 및 통합 개발</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">전략적 비즈니스 컨설팅</span>
                    </div>
                  </div>
                  
                  <Button
                    className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
                  >
                    엔터프라이즈 상담 신청
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src="/placeholder.svg?height=400&width=400&text=Enterprise+Solutions" 
                      alt="엔터프라이즈 솔루션" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-white/70">SLA 보장</div>
                  </div>
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