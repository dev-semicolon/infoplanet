export function TrustSection() {
  return (
    <section id="news" className="py-12 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 기술 통합 파트너십 - 간결하게 */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-gray-900">기술 통합 파트너십</h3>
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 mb-4 md:mb-6">
              {["AWS", "Google", "Microsoft", "Salesforce", "Oracle", "SAP"].map((partner, index) => (
                <div key={index} className="h-12 md:h-16 flex items-center justify-center rounded-lg md:rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-indigo-300 transition-all group">
                  <span className="text-xs md:text-sm lg:text-base text-gray-700 group-hover:text-indigo-600 font-semibold transition-colors">{partner}</span>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              주요 기업 시스템 및 마케팅 도구와의 원활한 통합을 지원합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
