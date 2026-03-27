"use client"

import { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface AuthCardProps {
  children: ReactNode
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border-white/10 glass-morphism enhanced-card">
      <div className="p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white">인포플래닛에 오신 것을 환영합니다</h2>
          <p className="text-white/70 mt-2">계정에 로그인하거나 새 계정을 만들어보세요</p>
        </div>
        {children}
      </div>
    </Card>
  )
}
