"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MarketingIntegrationHub } from "./marketing-integration-hub"

// 카운터 애니메이션 Hook
function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    let startTime: number | null = null
    const startValue = 0
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // easeOutQuart easing function
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(startValue + (end - startValue) * easeProgress))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])
  
  return count
}

// 통계 카운터 컴포넌트
function StatCounter({ number, label, desc }: { number: string, label: string, desc: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  // 숫자 파싱 (콤마 제거 후 파싱)
  const parseNumber = (str: string) => {
    const cleaned = str.replace(/,/g, '') // 콤마 제거
    const match = cleaned.match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }
  
  const targetNumber = parseNumber(number)
  const currentCount = useCountUp(targetNumber, 2000, isVisible)
  
  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])
  
  // 숫자 포맷팅
  const formatNumber = () => {
    if (number.includes("-")) {
      // 범위 표시 (80-90%)
      return `${Math.floor(currentCount)}-${Math.floor(currentCount + 10)}%`
    } else if (number.includes("+")) {
      // 천 단위 콤마와 + 표시
      return `${Math.floor(currentCount).toLocaleString()}+`
    } else if (number.includes("%")) {
      // 소수점 한 자리까지 표시
      return `${currentCount.toFixed(1)}%`
    }
    return currentCount.toFixed(1)
  }
  
  return (
    <div ref={ref} className="text-center bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all group">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
        {isVisible ? formatNumber() : number.replace(/[\d.,]/g, '0')}
      </div>
      <div className="text-base md:text-lg font-semibold text-gray-800 mb-1">{label}</div>
      <div className="text-xs md:text-sm text-gray-500">{desc}</div>
    </div>
  )
}

export function FeaturesSection() {
  const [isPartnersVisible, setIsPartnersVisible] = useState(false)
  const [isServicesVisible, setIsServicesVisible] = useState(false)
  const [isWhyInfoplanetVisible, setIsWhyInfoplanetVisible] = useState(false)
  const partnersRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const whyInfoplanetRef = useRef<HTMLDivElement>(null)

  // 파트너 로고 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPartnersVisible) {
          setIsPartnersVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (partnersRef.current) {
      observer.observe(partnersRef.current)
    }
    
    return () => {
      if (partnersRef.current) {
        observer.unobserve(partnersRef.current)
      }
    }
  }, [isPartnersVisible])

  // 서비스 카드 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isServicesVisible) {
          setIsServicesVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current)
      }
    }
  }, [isServicesVisible])

  // 왜 인포플래닛인가 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isWhyInfoplanetVisible) {
          setIsWhyInfoplanetVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (whyInfoplanetRef.current) {
      observer.observe(whyInfoplanetRef.current)
    }
    
    return () => {
      if (whyInfoplanetRef.current) {
        observer.unobserve(whyInfoplanetRef.current)
      }
    }
  }, [isWhyInfoplanetVisible])

  return (
    <section id="services" className="py-12 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 숫자 카운터 섹션 */}
        <div id="about" className="mb-12 md:mb-24 scroll-mt-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-200 shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              리워드 광고, 새로운 기준을 만드는 <span className="text-indigo-600">인포플래닛</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              브랜드와 유저를 연결하는 더 나은 방식을 만듭니다.<br className="hidden sm:block" />
              1세대 리워드 광고를 넘어, 기술과 데이터로 만드는 2세대 솔루션입니다.
            </p>
            
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
              <span className="text-sm md:text-base text-gray-500">2,000+ 브랜드가 선택한</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              검증된 파트너
            </div>
            
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <p className="text-gray-900 text-sm md:text-base lg:text-lg">
                캠페인 설계부터 미션 운영, 성과 분석까지<br className="hidden sm:block" />
                원스톱으로 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 마케팅 플랫폼 통합 Hub */}
        <div className="mb-24">
          <MarketingIntegrationHub />
        </div>

        {/* 제휴 파트너사 - 컴팩트한 원형 스타일 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            함께 성장하는 <span className="text-indigo-600">파트너</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            카카오뱅크, 배달의민족, 토스 등 대형 플랫폼과<br className="hidden sm:block" />
            2,000개 이상의 브랜드가 인포플래닛과 함께 성장하고 있습니다.
          </p>

          {/* 겹쳐진 원형 로고들 */}
          <div 
            ref={partnersRef}
            className={`flex items-center justify-center mb-12 md:mb-20 overflow-x-auto px-4 transition-all duration-1000 ${
              isPartnersVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative flex items-center min-w-max" style={{ height: '60px', minHeight: '60px' }}>
              {[
                "/partners/네이버.png",
                "/partners/구글.png",
                "/partners/카카오톡.png",
                "/partners/인스타그램.png",
                "/partners/페이스북.png",
                "/partners/틱톡.png",
                "/partners/배달의민족.png",
                "/partners/OK캐쉬백.png",
                "/partners/신한.png",
                "/partners/에이블리.png",
                "/partners/카카오뱅크.png",
                "/partners/토스.png",
                "/partners/페이코.png",
                "/partners/하나머니.png"
              ].map((imagePath, index) => (
                <div
                  key={index}
                  className={`group relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-2 border-gray-200 hover:border-indigo-400 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 hover:scale-125 hover:z-50 p-1.5 md:p-2 ${
                    isPartnersVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ 
                    marginLeft: index === 0 ? '0' : '-8px',
                    zIndex: 15 - index,
                    transitionDelay: isPartnersVisible ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <Image
                    src={imagePath}
                    alt={`Partner ${index + 1}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              {/* "+More" 인디케이터 */}
              <div 
                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-xs transition-all duration-500 ${
                  isPartnersVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-50'
                }`}
                style={{ 
                  marginLeft: '-8px', 
                  zIndex: 0,
                  transitionDelay: isPartnersVisible ? '700ms' : '0ms'
                }}
              >
                +14
              </div>
            </div>
          </div>
        </div>

        {/* 믿고 맡기는 다양한 마케팅 - 아이앤뷰 스타일 */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 md:mb-16 text-gray-900 px-4">
            믿고 맡기는 <span className="text-indigo-600">다양한 마케팅</span>
          </h2>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "리워드 서베이",
                subtitle: "Survey Marketing",
                description: "사용자 참여를 통해 가치 있는 인사이트를 수집하고 의미 있는 보상을 제공합니다.",
                gradient: "from-indigo-500/20 to-purple-500/20"
              },
              {
                title: "인앱 리워드",
                subtitle: "In-App Rewards",
                description: "모바일 애플리케이션에 리워드 캠페인을 원활하게 통합하여 사용자 참여를 극대화합니다.",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "SNS 마케팅",
                subtitle: "SNS Marketing",
                description: "소셜미디어를 활용한 바이럴 마케팅으로 브랜드 인지도를 높이고 고객과 소통합니다.",
                gradient: "from-pink-500/20 to-rose-500/20"
              },
              {
                title: "바이럴 마케팅",
                subtitle: "Viral Marketing",
                description: "실제 리뷰를 통한 리얼 후기로 콘텐츠를 작성하여 소비자들의 신뢰를 쌓을 수 있습니다.",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "로열티 프로그램",
                subtitle: "Loyalty Program",
                description: "포괄적인 로열티 및 유지 프로그램을 통해 장기적인 고객 관계를 구축합니다.",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "성과 분석",
                subtitle: "Analytics",
                description: "캠페인 성과와 사용자 참여를 추적하는 고급 분석 대시보드를 제공합니다.",
                gradient: "from-amber-500/20 to-orange-500/20"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className={`group relative bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-700 overflow-hidden ${
                  isServicesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isServicesVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <CardContent className="p-6 md:p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pain Points Section - 아이앤뷰 스타일 */}
        <div className="mb-12 md:mb-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-indigo-100">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight px-4">
              온라인 마케팅이 <span className="text-indigo-600">어려우셨던 분들,</span><br className="hidden sm:block" />
              인포플래닛과 함께 <span className="text-indigo-600">해결해보세요.</span>
            </h3>
            <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              수많은 마케팅 고민에 머리 아프실 필요 없습니다.<br className="hidden sm:block" />
              무작정 다 들어가는 마케팅이 아닌, <span className="text-gray-900 font-semibold">필요한 솔루션만을 제안</span>합니다!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { 
                text: "리워드 마케팅을 시작하고 싶은데 어디서부터 해야 할지 모르겠어요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )
              },
              { 
                text: "광고비는 많이 쓰는데 정작 수익은 적게 나와요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                    <path d="M12 8v8m-4-4h8"/>
                  </svg>
                )
              },
              { 
                text: "기존 광고 플랫폼의 불투명한 수익 구조가 불만스러워요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )
              },
              { 
                text: "우리 브랜드에 맞는 맞춤형 솔루션이 필요해요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                    <path d="m4.2 4.2 4.2 4.2m5.6 5.6 4.2 4.2"/>
                    <path d="M1 12h6m6 0h6"/>
                    <path d="m4.2 19.8 4.2-4.2m5.6-5.6 4.2-4.2"/>
                  </svg>
                )
              },
              { 
                text: "실시간으로 캠페인 성과를 확인하고 싶어요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                )
              },
              { 
                text: "전문적인 기술 지원과 컨설팅이 필요해요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              }
            ].map((pain, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* 심플한 아이콘 */}
                <div className="mb-4 md:mb-6 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="scale-75 md:scale-100">
                    {pain.icon}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors text-center">
                  {pain.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 md:pt-8 border-t border-indigo-200">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900 px-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                온라인 마케팅 솔루션 NO.1
              </span>
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 px-4">
              업종에 따른 특성을 파악하여 함께해주시는 광고주분들이<br className="hidden sm:block" />
              <span className="text-gray-900 font-semibold">최고의 효과를 보실 수 있게</span> 인포플래닛이 함께합니다 :)
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 px-8 py-5 md:px-12 md:py-6 text-sm md:text-base font-semibold shadow-2xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              무료 상담 신청하기
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>

        {/* 실적 통계 - 카운터 애니메이션 */}
        <div id="solutions" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20 scroll-mt-20">
          <StatCounter number="80-90%" label="수익 공유율" desc="업계 최고 수준" />
          <StatCounter number="2,000+" label="파트너사" desc="함께 성장하는 기업" />
          <StatCounter number="99.9%" label="시스템 가용성" desc="안정적인 서비스" />
        </div>

        {/* 왜 인포플래닛인가 */}
        <div 
          ref={whyInfoplanetRef}
          className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 mb-12 md:mb-20 border border-gray-200 shadow-lg transition-all duration-1000 ${
            isWhyInfoplanetVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-4">
              왜 <span className="text-indigo-600">인포플래닛</span>을 선택해야 할까요?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "투명한 수익 공유",
                desc: "실제 수익의 80-90%를 투명하게 공유하는 업계 최고 수준의 수익 모델",
                icon: "💰"
              },
              {
                title: "엔터프라이즈급 기술",
                desc: "대기업 수준의 API 및 통합 솔루션으로 안정적인 서비스 제공",
                icon: "🚀"
              },
              {
                title: "전담 지원팀",
                desc: "24시간 기술 지원과 전담 계정 관리자가 함께합니다",
                icon: "👥"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-700 group ${
                  isWhyInfoplanetVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isWhyInfoplanetVisible ? `${(index + 1) * 150}ms` : '0ms'
                }}
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section - 아이앤뷰 스타일 */}
        <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-20 border border-indigo-500 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight px-4">
            인포플래닛과 함께<br />
            <span className="text-indigo-100">
              멈추지 않는 성장
            </span>을 경험하세요.
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            혁신적인 리워드 마케팅으로 귀사의 비즈니스를 한 단계 업그레이드하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-50 border-0 px-8 py-5 md:px-12 md:py-7 text-base md:text-lg font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              회사소개서 다운로드
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 px-8 py-5 md:px-12 md:py-7 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              문의하기
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
