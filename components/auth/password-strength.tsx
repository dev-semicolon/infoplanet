import { useState, useEffect } from "react"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!password) {
      setStrength(0)
      setMessage("")
      return
    }

    let score = 0
    
    // Length check
    if (password.length >= 8) score += 1
    if (password.length >= 12) score += 1
    
    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1
    if (/[a-z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    
    // Set strength based on score
    const normalizedScore = Math.min(Math.floor(score / 2), 4)
    setStrength(normalizedScore)
    
    // Set message based on strength
    const messages = [
      "매우 약함",
      "약함",
      "보통",
      "강함",
      "매우 강함"
    ]
    setMessage(messages[normalizedScore])
    
  }, [password])

  const getColorClass = () => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-emerald-500"
    ]
    return colors[strength]
  }

  if (!password) return null

  return (
    <div className="mt-2">
      <div className="flex items-center space-x-2 mb-1">
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getColorClass()} transition-all duration-300`} 
            style={{ width: `${(strength + 1) * 20}%` }}
          />
        </div>
        <span className="text-xs text-white/70">{message}</span>
      </div>
      <p className="text-xs text-white/50">
        안전한 비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다
      </p>
    </div>
  )
}
