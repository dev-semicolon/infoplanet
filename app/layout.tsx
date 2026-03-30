import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://info-planet.co.kr'),
  title: {
    default: "인포플래닛 - 리워드 광고 마케팅 플랫폼",
    template: "%s | 인포플래닛"
  },
  description: "브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션. 성과를 만드는 광고, 수익을 만드는 플랫폼.",
  keywords: [
    "리워드 광고", "마케팅 플랫폼", "인앱 리워드", "바이럴 마케팅", "SNS 마케팅", 
    "로열티 프로그램", "리워드 서베이", "성과형 광고", "모바일 광고", "온라인 마케팅",
    "광고 솔루션", "디지털 마케팅", "퍼포먼스 마케팅", "CPA 광고", "브랜드 마케팅"
  ],
  authors: [{ name: "InfoPlanet", url: "https://info-planet.co.kr" }],
  creator: "InfoPlanet",
  publisher: "InfoPlanet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://info-planet.co.kr",
    siteName: "인포플래닛",
    title: "인포플래닛 - 리워드 광고 마케팅 플랫폼",
    description: "브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션. 성과를 만드는 광고, 수익을 만드는 플랫폼.",
    images: [
      {
        url: "/logos/logo.png",
        width: 512,
        height: 512,
        alt: "인포플래닛 - 리워드 광고 마케팅 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "인포플래닛 - 리워드 광고 마케팅 플랫폼",
    description: "브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션. 성과를 만드는 광고, 수익을 만드는 플랫폼.",
    images: ["/logos/logo.png"],
  },
  verification: {
    other: {
      // 네이버 서치어드바이저 메타태그는 여기에 추가
      // 'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 구조화된 데이터 (JSON-LD) - 네이버/구글 검색 최적화
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '주식회사 인포플래닛',
    alternateName: 'InfoPlanet',
    url: 'https://info-planet.co.kr',
    logo: 'https://info-planet.co.kr/logos/logo.png',
    description: '브랜드와 소비자를 연결하는 미션 기반 리워드 광고 솔루션',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: '경기도',
      addressLocality: '광주시',
      streetAddress: '태전중앙 1길 5, 1동 613호(태전동)',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-2747-7314',
      email: 'contact@info-planet.co.kr',
      contactType: 'Customer Service',
      availableLanguage: ['Korean'],
    },
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: '정덕근',
    },
    sameAs: [
      'https://www.facebook.com/infoplanet',
      'https://www.instagram.com/infoplanet',
      'https://twitter.com/infoplanet',
    ],
  }

  return (
    <html lang="ko" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        {children}
      </body>
    </html>
  )
}
