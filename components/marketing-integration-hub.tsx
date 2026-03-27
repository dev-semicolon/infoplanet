"use client"

import { useRef } from "react"
import Image from "next/image"
import { AnimatedBeam } from "./animated-beam"

export function MarketingIntegrationHub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const centerTopRef = useRef<HTMLDivElement>(null)
  const centerBottomRef = useRef<HTMLDivElement>(null)
  const platform1Ref = useRef<HTMLDivElement>(null)
  const platform2Ref = useRef<HTMLDivElement>(null)
  const platform3Ref = useRef<HTMLDivElement>(null)
  const platform4Ref = useRef<HTMLDivElement>(null)
  const platform5Ref = useRef<HTMLDivElement>(null)
  const platform6Ref = useRef<HTMLDivElement>(null)

  const platforms = [
    { ref: platform1Ref, name: "Naver", image: "/partners/네이버.png", delay: 0, position: { x: -280, y: -150 }, fromRef: centerTopRef },
    { ref: platform2Ref, name: "Google", image: "/partners/구글.png", delay: 0.2, position: { x: -280, y: 0 }, fromRef: centerRef },
    { ref: platform3Ref, name: "Kakao", image: "/partners/카카오톡.png", delay: 0.4, position: { x: -280, y: 150 }, fromRef: centerBottomRef },
    { ref: platform4Ref, name: "Instagram", image: "/partners/인스타그램.png", delay: 0.6, position: { x: 280, y: -150 }, fromRef: centerTopRef },
    { ref: platform5Ref, name: "Facebook", image: "/partners/페이스북.png", delay: 0.8, position: { x: 280, y: 0 }, fromRef: centerRef },
    { ref: platform6Ref, name: "TikTok", image: "/partners/틱톡.png", delay: 1, position: { x: 280, y: 150 }, fromRef: centerBottomRef },
  ]

  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 p-10"
      >
        {/* Center - InfoPlanet Logo */}
        <div className="relative z-10 flex h-24 w-24 items-center justify-center">
          {/* 보이지 않는 빔 출발 포인트들 */}
          <div ref={centerTopRef} className="absolute top-6 left-1/2 w-1 h-1" />
          <div ref={centerRef} className="absolute top-1/2 left-1/2 w-1 h-1" />
          <div ref={centerBottomRef} className="absolute bottom-6 left-1/2 w-1 h-1" />
          
          {/* 실제 로고 */}
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-2xl border-2 border-gray-200 p-3">
            <Image
              src="/logos/logo.png"
              alt="InfoPlanet"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Platform Icons - Left and Right sides */}
        {platforms.map((platform) => {
          return (
            <div
              key={platform.name}
              ref={platform.ref}
              className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-200 hover:scale-110 transition-transform duration-300 p-2"
              style={{
                left: `calc(50% + ${platform.position.x}px - 32px)`,
                top: `calc(50% + ${platform.position.y}px - 32px)`,
              }}
              title={platform.name}
            >
              <Image
                src={platform.image}
                alt={platform.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          )
        })}

        {/* Animated Beams */}
        {platforms.map((platform, index) => (
          <AnimatedBeam
            key={`beam-${index}`}
            containerRef={containerRef}
            fromRef={platform.fromRef}
            toRef={platform.ref}
            duration={3}
            delay={platform.delay}
            pathColor="#e5e7eb"
            pathWidth={2}
            pathOpacity={0.3}
            gradientStartColor="#6366f1"
            gradientStopColor="#a855f7"
          />
        ))}
      </div>

      {/* Caption */}
      <div className="text-center mt-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          모든 마케팅 채널을 <span className="text-indigo-600">하나로 통합</span>
        </h3>
        <p className="text-gray-600">
          인포플래닛이 주요 플랫폼과 실시간으로 연결되어 통합 관리를 제공합니다
        </p>
      </div>
    </div>
  )
}
