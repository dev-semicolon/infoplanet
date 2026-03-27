import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, FileText, Video, Download, ExternalLink, Clock } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      id: "guides",
      title: "가이드 및 튜토리얼",
      description: "인포플래닛 플랫폼을 최대한 활용하는 방법을 배울 수 있는 상세한 가이드와 튜토리얼입니다.",
      icon: BookOpen,
      items: [
        {
          title: "시작하기 가이드",
          description: "인포플래닛 플랫폼 사용을 시작하는 방법에 대한 단계별 안내",
          type: "가이드",
          time: "10분"
        },
        {
          title: "리워드 캠페인 설정하기",
          description: "효과적인 리워드 캠페인을 설계하고 구현하는 방법",
          type: "튜토리얼",
          time: "15분"
        },
        {
          title: "분석 대시보드 활용하기",
          description: "데이터 분석 도구를 사용하여 캠페인 성과를 측정하는 방법",
          type: "가이드",
          time: "12분"
        }
      ]
    },
    {
      id: "whitepapers",
      title: "백서 및 연구 자료",
      description: "리워드 마케팅의 효과, 업계 동향 및 모범 사례에 대한 심층 연구 자료입니다.",
      icon: FileText,
      items: [
        {
          title: "리워드 마케팅의 ROI 극대화",
          description: "리워드 마케팅 투자 수익률을 높이기 위한 전략적 접근 방식",
          type: "백서",
          time: "20분"
        },
        {
          title: "2024 리워드 마케팅 트렌드 보고서",
          description: "최신 업계 동향 및 미래 전망에 대한 포괄적인 분석",
          type: "연구 보고서",
          time: "25분"
        },
        {
          title: "사용자 참여 최적화 전략",
          description: "사용자 행동 데이터를 활용한 참여 전략 개발 방법",
          type: "백서",
          time: "18분"
        }
      ]
    },
    {
      id: "webinars",
      title: "웨비나 및 동영상",
      description: "전문가가 진행하는 웨비나와 교육 동영상으로 리워드 마케팅에 대한 인사이트를 얻으세요.",
      icon: Video,
      items: [
        {
          title: "성공적인 리워드 프로그램의 핵심 요소",
          description: "업계 전문가가 공유하는 성공적인 리워드 프로그램의 비밀",
          type: "웨비나",
          time: "45분"
        },
        {
          title: "데이터 기반 리워드 전략 개발",
          description: "데이터 분석을 통한 효과적인 리워드 전략 수립 방법",
          type: "웨비나",
          time: "50분"
        },
        {
          title: "고객 충성도 프로그램 설계 마스터클래스",
          description: "장기적인 고객 관계 구축을 위한 충성도 프로그램 설계 방법",
          type: "마스터클래스",
          time: "60분"
        }
      ]
    },
    {
      id: "tools",
      title: "도구 및 템플릿",
      description: "리워드 마케팅 전략 계획 및 실행을 위한 실용적인 도구와 템플릿입니다.",
      icon: Download,
      items: [
        {
          title: "리워드 캠페인 계획 템플릿",
          description: "효과적인 리워드 캠페인 계획을 위한 포괄적인 템플릿",
          type: "템플릿",
          format: "XLSX, PDF"
        },
        {
          title: "ROI 계산기",
          description: "리워드 마케팅 캠페인의 투자 수익률을 계산하는 도구",
          type: "도구",
          format: "온라인 도구"
        },
        {
          title: "사용자 페르소나 워크시트",
          description: "타겟 사용자 그룹을 정의하고 이해하기 위한 워크시트",
          type: "템플릿",
          format: "PDF, DOCX"
        }
      ]
    }
  ]

  const featuredResource = {
    title: "리워드 마케팅 완전 가이드 2024",
    description: "리워드 마케팅의 기초부터 고급 전략까지 모든 것을 다루는 포괄적인 가이드입니다. 이 가이드는 리워드 마케팅을 처음 시작하는 기업부터 기존 프로그램을 최적화하려는 기업까지 모두에게 유용한 정보를 제공합니다.",
    image: "/placeholder.jpg",
    cta: "무료로 다운로드하기"
  }

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
              <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm">리소스</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white">
                리워드 마케팅 지식 센터
              </h1>
              <p className="text-xl text-white/70 text-balance max-w-3xl mx-auto">
                인포플래닛이 제공하는 다양한 리소스로 리워드 마케팅 전략을 강화하세요
              </p>
            </div>
          </div>
        </section>
        
        {/* 추천 리소스 섹션 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 glass-morphism mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-white/20 text-white/90 border-white/30">추천 리소스</Badge>
                  <h2 className="text-3xl font-bold mb-6 text-white">{featuredResource.title}</h2>
                  <p className="text-white/70 mb-6">
                    {featuredResource.description}
                  </p>
                  <Button
                    className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
                  >
                    {featuredResource.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img 
                      src={featuredResource.image} 
                      alt={featuredResource.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* 리소스 카테고리 섹션 */}
            {resources.map((category, index) => (
              <div key={category.id} className="mb-24 last:mb-0">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    <p className="text-white/70">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((item, i) => (
                    <Card 
                      key={i} 
                      className="border-white/10 bg-white/10 backdrop-blur-xl shadow-lg hover:bg-white/15 transition-colors duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <Badge className="bg-white/20 text-white/90 border-white/30">
                            {item.type}
                          </Badge>
                          {item.time && (
                            <div className="flex items-center text-white/60 text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {item.time}
                            </div>
                          )}
                          {item.format && (
                            <div className="text-white/60 text-sm">
                              {item.format}
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-white/70 mb-6 text-sm">{item.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-white flex items-center hover:text-white/90"
                        >
                          보러가기
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 뉴스레터 구독 섹션 */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">최신 리소스 업데이트 받기</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              인포플래닛의 뉴스레터를 구독하고 최신 리워드 마케팅 인사이트, 가이드, 사례 연구를 받아보세요
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="이메일 주소 입력" 
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button
                className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md whitespace-nowrap"
              >
                구독하기
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
        <Toaster />
      </div>
    </main>
  )
}
