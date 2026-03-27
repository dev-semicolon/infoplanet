import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] md:h-screen flex flex-col justify-between overflow-hidden pt-24 md:pt-20 pb-8">      
      {/* Shader Art - Background Layer */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[600px] pointer-events-none z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-float-delay-1" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-float-delay-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center md:items-end w-full md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Text Content */}
          <div className="text-left pb-8 md:-ml-8 lg:-ml-16 max-w-5xl lg:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            성과를 만드는 광고, 수익을 만드는 플랫폼,<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              다시 참여하게 만드는 경험
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 leading-relaxed">
            브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션.
            </p>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 px-6 py-5 md:px-12 md:py-7 text-base md:text-lg font-semibold shadow-2xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
              >
                프로젝트 문의하기
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:flex relative z-10 items-center justify-center gap-2 text-gray-400 text-sm pb-4">
        <span>Scroll Down</span>
        <ArrowRight className="h-4 w-4 rotate-90 animate-bounce" />
      </div>
    </section>
  )
}
