import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react"

export function Footer() {
  const footerLinks = {
    제품: [
      { name: "리워드 서베이", href: "/products/surveys" },
      { name: "인앱 리워드", href: "/products/in-app" },
      { name: "로열티 프로그램", href: "/products/loyalty" },
      { name: "분석 대시보드", href: "/products/analytics" },
    ],
    솔루션: [
      { name: "브랜드 인지도", href: "/solutions/awareness" },
      { name: "사용자 획득", href: "/solutions/acquisition" },
      { name: "리드 생성", href: "/solutions/leads" },
      { name: "고객 유지", href: "/solutions/retention" },
    ],
    리소스: [
      { name: "문서", href: "/docs" },
      { name: "API 레퍼런스", href: "/api" },
      { name: "사례 연구", href: "/case-studies" },
      { name: "블로그", href: "/blog" },
      { name: "웨비나", href: "/webinars" },
    ],
    회사: [
      { name: "회사 소개", href: "/about" },
      { name: "채용 정보", href: "/careers" },
      { name: "보도 자료", href: "/press" },
      { name: "문의하기", href: "/contact" },
    ],
    법률: [
      { name: "개인정보 처리방침", href: "/privacy" },
      { name: "서비스 이용약관", href: "/terms" },
      { name: "쿠키 정책", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/infoplanet", gradient: "bg-gradient-blue-purple" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/infoplanet", gradient: "bg-gradient-cyan-blue" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/infoplanet", gradient: "bg-gradient-blue-purple" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/infoplanet", gradient: "bg-gradient-purple-pink" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/infoplanet", gradient: "bg-gradient-amber-red" },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">인포플래닛의 최신 소식을 받아보세요</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                리워드 마케팅, 업계 트렌드 및 플랫폼 업데이트에 대한 최신 인사이트를 받아보세요.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="이메일 주소 입력"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 h-14 rounded-xl"
              />
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 h-14 px-8 font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 rounded-xl">
                구독하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logos/long_white_nb.png"
                alt="InfoPlanet"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              브랜드와 참여도 높은 사용자를 의미 있는 상호작용과 가치 있는 리워드를 통해 연결하는 선도적인 리워드 마케팅 플랫폼입니다.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="w-11 h-11 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:scale-110 transition-all duration-300 cursor-pointer group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-5 text-white text-base">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <span className="text-gray-400 hover:text-indigo-400 transition-colors text-sm relative group cursor-pointer inline-block">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6 text-sm text-gray-500 leading-relaxed">
            <div className="flex flex-col space-y-2">
              <span>상호명 | 주식회사 인포플래닛 &emsp; 대표자 | 정덕근 <br/> 사업자등록번호 | 235-81-03562&emsp;사업장소재지 | 경기도 광주시 <br className="block md:hidden"/>태전중앙 1길 5, 1동 613호(태전동)</span>
              <span>연락처 | 010-2747-7314 &emsp; 이메일 | contact@info-planet.co.kr</span>
            </div>
          </div>
          
          <Separator className="bg-gray-800 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">© 주식회사 인포플래닛 | 모든 권리 보유</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
