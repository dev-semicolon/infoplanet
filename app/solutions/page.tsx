import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, TrendingUp, Users, BarChart3, CheckCircle } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "awareness",
      title: "브랜드 인지도",
      description: "타겟 오디언스에게 브랜드를 효과적으로 노출하고 인지도를 높이는 솔루션입니다.",
      icon: Target,
      benefits: [
        "타겟 오디언스에 정확한 도달",
        "브랜드 메시지 효과적 전달",
        "참여 유도를 통한 인지도 향상",
        "데이터 기반 캠페인 최적화"
      ],
      caseStudy: {
        title: "국내 대형 전자기업",
        result: "리워드 캠페인으로 신제품 인지도 45% 증가, 구매 의향 32% 상승"
      }
    },
    {
      id: "acquisition",
      title: "사용자 획득",
      description: "고품질 사용자를 효율적으로 유치하고 앱 설치 및 회원 가입을 증가시키는 솔루션입니다.",
      icon: Users,
      benefits: [
        "비용 효율적인 사용자 유치",
        "고품질 사용자 타겟팅",
        "설치 후 참여 유도",
        "LTV 최적화 전략"
      ],
      caseStudy: {
        title: "핀테크 스타트업",
        result: "사용자 획득 비용 40% 절감, 앱 설치 후 활성화율 65% 달성"
      }
    },
    {
      id: "leads",
      title: "리드 생성",
      description: "잠재 고객의 관심을 유도하고 고품질 리드를 생성하는 맞춤형 솔루션입니다.",
      icon: TrendingUp,
      benefits: [
        "타겟팅된 리드 생성",
        "리드 품질 향상",
        "전환율 최적화",
        "리드 데이터 인사이트"
      ],
      caseStudy: {
        title: "B2B 소프트웨어 기업",
        result: "리드 생성 비용 35% 절감, 영업 기회 전환율 28% 증가"
      }
    },
    {
      id: "retention",
      title: "고객 유지",
      description: "기존 고객의 참여도를 높이고 장기적인 충성도를 구축하는 솔루션입니다.",
      icon: BarChart3,
      benefits: [
        "사용자 이탈 방지",
        "재참여 유도 전략",
        "충성도 프로그램 구축",
        "고객 생애 가치 증대"
      ],
      caseStudy: {
        title: "대형 이커머스 플랫폼",
        result: "고객 유지율 38% 향상, 반복 구매율 45% 증가"
      }
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
              <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm">솔루션</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white">
                비즈니스 목표 달성을 위한 솔루션
              </h1>
              <p className="text-xl text-white/70 text-balance max-w-3xl mx-auto">
                인포플래닛은 귀사의 마케팅 목표에 맞는 맞춤형 리워드 솔루션을 제공합니다
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              {solutions.map((solution) => (
                <Card 
                  key={solution.id} 
                  className="border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-white">{solution.title}</h2>
                    <p className="text-white/70 mb-6">{solution.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-white/90">주요 이점</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                            <span className="text-white/70">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-white/90 mb-2">성공 사례: {solution.caseStudy.title}</h4>
                      <p className="text-sm text-white/70">{solution.caseStudy.result}</p>
                    </div>
                    
                    <Button className="bg-white/10 hover:bg-white/20 text-white border-white/10">
                      자세히 알아보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 glass-morphism mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">맞춤형 솔루션 접근 방식</h2>
                  <p className="text-white/70 mb-6">
                    인포플래닛은 귀사의 비즈니스 목표와 요구사항을 깊이 이해하고 최적의 리워드 마케팅 전략을 설계합니다.
                    데이터 기반 접근 방식으로 지속적인 최적화와 성과 향상을 보장합니다.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white/90 mb-1">비즈니스 분석</h3>
                        <p className="text-sm text-white/70">귀사의 목표, 타겟 오디언스, 시장 상황을 심층 분석</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white/90 mb-1">전략 설계</h3>
                        <p className="text-sm text-white/70">맞춤형 리워드 전략 및 캠페인 구조 개발</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white/90 mb-1">구현 및 실행</h3>
                        <p className="text-sm text-white/70">기술 통합 및 캠페인 론칭</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white/90 mb-1">최적화 및 확장</h3>
                        <p className="text-sm text-white/70">데이터 분석을 통한 지속적인 개선 및 성과 확대</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src="/placeholder.svg?height=400&width=400&text=Solution+Approach" 
                      alt="맞춤형 솔루션 접근 방식" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-white">98.5%</div>
                    <div className="text-sm text-white/70">고객 만족도</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">귀사에 적합한 솔루션을 찾아보세요</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {solutions.map((solution) => (
                  <Button
                    key={solution.id}
                    variant="outline"
                    className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    {solution.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">무료 컨설팅 받기</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              인포플래닛의 전문가가 귀사의 비즈니스 목표에 맞는 최적의 리워드 마케팅 솔루션을 제안해 드립니다
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
            >
              무료 컨설팅 예약하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        
        <Footer />
        <Toaster />
      </div>
    </main>
  )
}
