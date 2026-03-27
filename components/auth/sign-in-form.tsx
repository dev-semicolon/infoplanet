"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        title: "로그인 성공!",
        description: "대시보드로 이동합니다.",
      })
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70">
          이메일
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-white/70">
            비밀번호
          </label>
          <a href="#" className="text-sm text-white hover:underline">
            비밀번호 찾기
          </a>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
          placeholder="••••••••"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-blue-purple hover:opacity-90 text-white border-none enhanced-card"
      >
        {isSubmitting ? "로그인 중..." : "로그인"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
