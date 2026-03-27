"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from "@/components/auth/sign-in-form"
import { SignUpForm } from "@/components/auth/sign-up-form"
import { SocialLogin } from "@/components/auth/social-login"
import { AuthCard } from "@/components/auth/auth-card"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")
  
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
        
        <section className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="border-white/10 bg-white/10 backdrop-blur-xl shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-2 mb-8 bg-white/5 border border-white/10">
                      <TabsTrigger 
                        value="signin" 
                        className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                      >
                        로그인
                      </TabsTrigger>
                      <TabsTrigger 
                        value="signup"
                        className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                      >
                        회원가입
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="signin">
                      <SignInForm />
                    </TabsContent>
                    
                    <TabsContent value="signup">
                      <SignUpForm />
                    </TabsContent>
                  </Tabs>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white/5 text-white/60">또는</span>
                    </div>
                  </div>
                  
                  <SocialLogin />
                </CardContent>
              </Card>
              
              <div className="text-center mt-8">
                <p className="text-white/60 text-sm">
                  {activeTab === "signin" ? 
                    "계정이 없으신가요? " : 
                    "이미 계정이 있으신가요? "}
                  <button 
                    onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                    className="text-white hover:underline"
                  >
                    {activeTab === "signin" ? "회원가입" : "로그인"}
                  </button>
                </p>
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
