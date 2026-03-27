"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Building, Clock, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    company: "",
    message: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "문의가 성공적으로 전송되었습니다!",
        description: "24시간 이내에 답변 드리겠습니다.",
      })
      setFormData({
        name: "",
        position: "",
        email: "",
        company: "",
        message: "",
        phone: "",
      })
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "이메일",
      content: "contact@info-planet.co.kr",
      description: "기업 문의 전용",
      gradient: "bg-gradient-blue-purple",
    },
    // {
    //   icon: Phone,
    //   title: "전화",
    //   content: "+82 2-1234-5678",
    //   description: "평일 오전 9시 ~ 오후 6시",
    //   gradient: "bg-gradient-purple-pink",
    // },
    {
      icon: MapPin,
      title: "본사",
      content: "경기도 광주시",
      description: "태전중앙 1길 5, 1동 613호(태전동)",
      gradient: "bg-gradient-cyan-blue",
    },
  ]

  const enterpriseFeatures = [
    {
      icon: Building,
      title: "전담 계정 관리자",
      description: "귀사의 비즈니스 목표 달성을 위한 전담 지원팀을 배정합니다.",
      gradient: "bg-gradient-blue-purple",
    },
    {
      icon: FileText,
      title: "맞춤형 계약 조건",
      description: "기업 규모와 요구사항에 맞는 유연한 계약 조건을 제공합니다.",
      gradient: "bg-gradient-purple-pink",
    },
    {
      icon: Clock,
      title: "우선 기술 지원",
      description: "24시간 연중무휴 기술 지원 및 1시간 이내 응답을 보장합니다.",
      gradient: "bg-gradient-cyan-blue",
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 relative bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 font-medium text-xs md:text-sm tracking-wide">
              기업 파트너십
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4 md:mb-6 text-gray-900 px-4">
            비즈니스 성장을 위한
            <br />
            전략적 파트너십
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 text-balance max-w-3xl mx-auto leading-relaxed px-4">
            인포플래닛은 귀사의 마케팅 전략을 혁신하고 비즈니스 목표를 달성하는 데 필요한 모든 리소스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">엔터프라이즈 서비스</h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
              인포플래닛의 엔터프라이즈 서비스는 대기업의 복잡한 요구사항을 충족하도록 설계되었습니다. 맞춤형 솔루션과 전담 지원으로 귀사의 비즈니스 성과를 극대화합니다.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {enterpriseFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${
                        index === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 
                        index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 
                        'bg-gradient-to-br from-cyan-500 to-blue-500'
                      } rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 md:mb-2 text-gray-900 text-base md:text-lg">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${
                        index === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 
                        'bg-gradient-to-br from-cyan-500 to-blue-500'
                      } rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 md:mb-2 text-gray-900 text-base md:text-lg">{info.title}</h4>
                        <p className="text-sm md:text-base text-gray-900 font-medium mb-1">{info.content}</p>
                        <p className="text-xs md:text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-6 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">기업 문의</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                    이름 *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 transition-all h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                    직책 *
                  </label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 transition-all h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                    이메일 *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 transition-all h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                    연락처
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 transition-all h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                  회사명 *
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 transition-all h-10 md:h-12 rounded-lg md:rounded-xl text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-700">
                  문의 내용 *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-300 resize-none transition-all rounded-lg md:rounded-xl text-sm md:text-base"
                  placeholder="귀사의 비즈니스 요구사항과 목표에 대해 알려주세요..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 h-12 md:h-14 text-sm md:text-base font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-[1.02] rounded-lg md:rounded-xl"
              >
                {isSubmitting ? (
                  "전송 중..."
                ) : (
                  <>
                    문의하기
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-4 md:mt-6 p-4 md:p-5 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200">
              <p className="text-xs md:text-sm text-gray-500 text-center">
                제출된 정보는 인포플래닛의 개인정보 처리방침에 따라 안전하게 보호됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
