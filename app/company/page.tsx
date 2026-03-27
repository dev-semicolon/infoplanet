import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Clock, Globe, Award } from "lucide-react"

export default function CompanyPage() {
  const teamMembers = [
    {
      name: "김성민",
      role: "CEO & 공동창업자",
      bio: "10년 이상의 마케팅 기술 경험을 가진 비전 리더. 이전에 주요 광고 기술 회사에서 임원으로 근무.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "이지원",
      role: "CTO & 공동창업자",
      bio: "15년 경력의 소프트웨어 엔지니어링 전문가. 대규모 기술 인프라 및 데이터 시스템 설계 경험 보유.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "박현우",
      role: "CMO",
      bio: "디지털 마케팅 전략 전문가로 글로벌 브랜드의 성공적인 마케팅 캠페인을 이끈 경험 보유.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "정미영",
      role: "COO",
      bio: "운영 효율성 및 비즈니스 프로세스 최적화 전문가. 대기업에서의 풍부한 운영 경험 보유.",
      image: "/placeholder-user.jpg"
    }
  ]

  const milestones = [
    {
      year: "2018",
      title: "회사 설립",
      description: "인포플래닛 설립 및 초기 제품 개발 시작"
    },
    {
      year: "2019",
      title: "첫 번째 제품 출시",
      description: "리워드 서베이 플랫폼 베타 버전 출시 및 초기 고객 확보"
    },
    {
      year: "2020",
      title: "시리즈 A 투자 유치",
      description: "주요 VC로부터 100억 원 규모의 시리즈 A 투자 유치"
    },
    {
      year: "2021",
      title: "기업 고객 확장",
      description: "국내 대기업 10개사와 파트너십 체결 및 제품 라인업 확장"
    },
    {
      year: "2022",
      title: "해외 진출",
      description: "동남아시아 시장 진출 및 글로벌 확장 시작"
    },
    {
      year: "2023",
      title: "시리즈 B 투자 유치",
      description: "300억 원 규모의 시리즈 B 투자 유치 및 기업 가치 1조 원 달성"
    },
    {
      year: "2024",
      title: "엔터프라이즈 솔루션 출시",
      description: "대기업을 위한 맞춤형 엔터프라이즈 리워드 마케팅 솔루션 출시"
    }
  ]

  const values = [
    {
      title: "투명성",
      description: "모든 비즈니스 관계에서 정직과 투명성을 최우선으로 합니다.",
      icon: Globe
    },
    {
      title: "혁신",
      description: "끊임없는 혁신을 통해 마케팅 기술의 미래를 선도합니다.",
      icon: Award
    },
    {
      title: "고객 중심",
      description: "고객의 성공이 우리의 성공입니다. 항상 고객의 목소리에 귀 기울입니다.",
      icon: Users
    },
    {
      title: "데이터 기반",
      description: "모든 의사결정과 전략은 정확한 데이터 분석을 기반으로 합니다.",
      icon: Clock
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
              <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm">회사 소개</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-white">
                혁신적인 리워드 마케팅의 선두주자
              </h1>
              <p className="text-xl text-white/70 text-balance max-w-3xl mx-auto">
                인포플래닛은 투명성과 혁신을 바탕으로 기업과 사용자 모두에게 가치를 제공하는 리워드 마케팅 플랫폼을 개발합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">우리의 이야기</h2>
                <p className="text-white/70 mb-4">
                  인포플래닛은 2018년 김성민과 이지원에 의해 설립되었습니다. 두 창업자는 기존 리워드 마케팅 시장의 불투명성과 비효율성을 해결하고자 하는 공통된 비전을 가지고 있었습니다.
                </p>
                <p className="text-white/70 mb-4">
                  우리는 투명한 수익 공유 모델과 고급 기술력을 바탕으로 빠르게 성장하여, 현재 국내 주요 대기업들과 파트너십을 맺고 있으며 동남아시아 시장으로 확장하고 있습니다.
                </p>
                <p className="text-white/70 mb-6">
                  인포플래닛의 목표는 리워드 마케팅 산업의 표준을 재정의하고, 기업과 사용자 모두에게 가치 있는 경험을 제공하는 것입니다.
                </p>
                <Button
                  className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
                >
                  더 알아보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img 
                    src="/placeholder.svg?height=300&width=500&text=Company+Story" 
                    alt="인포플래닛 스토리" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 section-alt-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">핵심 가치</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                인포플래닛의 모든 결정과 행동을 이끄는 핵심 가치입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="border-white/10 bg-white/10 backdrop-blur-xl shadow-lg text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
{/*         
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">리더십 팀</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                인포플래닛의 비전을 실현하는 경험 많은 리더들을 소개합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="border-white/10 bg-white/10 backdrop-blur-xl shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-white/5">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-white/90 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-white/70">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        
        <section className="py-16 section-alt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">성장의 여정</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                인포플래닛의 주요 성장 이정표를 소개합니다
              </p>
            </div>
            
            <div className="relative">
              {/* 타임라인 라인 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-white mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-white/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-12 h-12 rounded-full bg-white/10 border-4 border-white/30 z-10"></div>
                    </div>
                    
                    <div className="hidden md:block w-full md:w-1/2 p-4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 glass-morphism text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                함께 성장할 준비가 되셨나요?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                인포플래닛과 함께 리워드 마케팅의 미래를 만들어가세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 border-none shadow-md"
                >
                  채용 정보 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xl"
                >
                  문의하기
                </Button>
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