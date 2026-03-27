"use client"

import { Button } from "@/components/ui/button"

export function SocialLogin() {
  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Google로 계속하기
      </Button>

      <Button
        variant="outline"
        className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
          />
        </svg>
        Facebook으로 계속하기
      </Button>

      <Button
        variant="outline"
        className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.92 14.57c-.26.32-.55.56-.87.75-.3.18-.64.33-1.04.43-.39.1-.82.16-1.28.16-.47 0-.9-.06-1.29-.16-.39-.11-.73-.25-1.04-.43-.31-.19-.6-.42-.87-.75-.26-.32-.47-.71-.62-1.17h-1.46v-.4h1.38c-.01-.13-.02-.26-.02-.4 0-.14.01-.28.02-.4H9.75v-.4h1.28c.1-.37.26-.7.48-.99.26-.32.55-.56.87-.75.3-.18.64-.33 1.04-.43.39-.1.82-.16 1.28-.16.47 0 .9.06 1.29.16.39.11.73.25 1.04.43.31.19.6.42.87.75.21.29.38.62.48.99h1.28v.4h-1.38c.01.13.02.26.02.4 0 .14-.01.28-.02.4h1.46v.4h-1.37c-.15.46-.36.85-.63 1.17zM13.45 14c.28 0 .54-.05.77-.16.24-.1.44-.24.61-.4.17-.17.3-.36.39-.59.09-.22.14-.45.14-.69h-3.82c0 .24.05.47.14.69.09.22.22.42.39.59.17.17.37.3.61.4.23.11.49.16.77.16zm1.91-3.67c-.17-.17-.37-.3-.61-.4-.23-.11-.49-.16-.77-.16s-.54.05-.77.16c-.24.1-.44.24-.61.4-.17.17-.3.36-.39.59-.09.22-.14.45-.14.69h3.82c0-.24-.05-.47-.14-.69-.09-.22-.22-.42-.39-.59z"
          />
        </svg>
        Apple로 계속하기
      </Button>
    </div>
  )
}
