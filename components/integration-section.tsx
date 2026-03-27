"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layers, Cloud, Lock } from "lucide-react"

export function IntegrationSection() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [startTyping, setStartTyping] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)

  const fullCode = `// 인포플래닛 API 통합 예시
const InfoPlanetAPI = require('infoplanet-sdk');

// 기업 인증
const client = new InfoPlanetAPI({
  apiKey: 'your-enterprise-api-key',
  region: 'asia-northeast-2'
});

// 리워드 캠페인 생성
async function createCampaign() {
  const response = await client.campaigns.create({
    name: '2024 여름 프로모션',
    budget: 50000000,
    targetAudience: {
      demographics: ['20-45', 'high-income'],
      interests: ['technology', 'finance']
    },
    rewardStrategy: 'performance-based',
  });
  
  console.log(\`캠페인 생성: \${response.id}\`);
  return response;
}`

  // Intersection Observer로 화면에 보일 때 타이핑 시작
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startTyping) {
          setStartTyping(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (codeRef.current) {
      observer.observe(codeRef.current)
    }
    
    return () => {
      if (codeRef.current) {
        observer.unobserve(codeRef.current)
      }
    }
  }, [startTyping])

  // 타이핑 애니메이션
  useEffect(() => {
    if (!startTyping) return

    let currentIndex = 0
    const typingSpeed = 15 // 밀리초 단위 (숫자가 작을수록 빠름)

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setDisplayedCode(fullCode.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typeInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [startTyping, fullCode])
  const techIntegrations = [
    {
      icon: Code,
      title: "RESTful API",
      description: "강력한 API로 기존 시스템과 원활하게 통합",
    },
    {
      icon: Database,
      title: "데이터 파이프라인",
      description: "실시간 데이터 동기화 및 ETL 프로세스",
    },
    {
      icon: Server,
      title: "서버리스 아키텍처",
      description: "확장 가능한 클라우드 기반 인프라",
    },
    {
      icon: Layers,
      title: "SDK 통합",
      description: "웹, iOS, Android 플랫폼 지원",
    },
    {
      icon: Cloud,
      title: "클라우드 호환성",
      description: "AWS, Azure, GCP 환경 지원",
    },
    {
      icon: Lock,
      title: "엔터프라이즈 보안",
      description: "SOC 2, ISO 27001, GDPR 규정 준수",
    },
  ]

  return (
    <section className="py-12 md:py-24 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 font-medium text-xs md:text-sm tracking-wide">
              기술 통합
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4 md:mb-6 text-gray-900 px-4">
            엔터프라이즈급 기술 인프라
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 text-balance max-w-3xl mx-auto leading-relaxed px-4">
            인포플래닛은 대규모 기업 환경에 최적화된 안정적이고 확장 가능한 기술 스택을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {techIntegrations.map((integration, index) => (
            <Card
              key={index}
              className="group bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 
                  index % 3 === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 
                  'bg-gradient-to-br from-cyan-500 to-blue-500'
                } rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <integration.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{integration.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                기업 시스템과의 원활한 통합
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                인포플래닛의 플랫폼은 귀사의 기존 시스템과 원활하게 통합되도록 설계되었습니다. 
                CRM, ERP, 마케팅 자동화 도구 등 다양한 기업 솔루션과 연동하여 데이터 흐름을 최적화합니다.
              </p>
              <div className="space-y-3 md:space-y-5">
                {[
                  { text: "Salesforce, SAP, Oracle 통합 지원", color: "from-indigo-600 to-purple-600" },
                  { text: "SSO(Single Sign-On) 인증 시스템", color: "from-purple-600 to-pink-600" },
                  { text: "맞춤형 데이터 마이그레이션 지원", color: "from-cyan-600 to-blue-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${item.color} shadow-lg flex-shrink-0`} />
                    <span className="text-sm md:text-base text-gray-900 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={codeRef} className="relative">
              <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-700 shadow-2xl overflow-x-auto">
                <pre className="text-[10px] md:text-xs text-gray-300 font-mono leading-relaxed relative min-w-max">
                  {/* 투명한 전체 코드 - 레이아웃 확보용 */}
                  <code className="invisible">
                    {fullCode}
                  </code>
                  {/* 실제 타이핑되는 코드 - 절대 위치 */}
                  <code className="absolute top-0 left-0 whitespace-pre-wrap break-words">
                    {displayedCode}
                    {!isTypingComplete && (
                      <span className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-indigo-400 ml-0.5 animate-pulse" />
                    )}
                    {isTypingComplete && (
                      <span className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-indigo-400 ml-0.5 animate-blink" />
                    )}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
