import React from 'react';
import { MapPin, PenTool, Hammer, PartyPopper } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    title: "가맹 상담 및 상권 분석",
    desc: "희망 지역 매물 분석 및 예상 매출 산출",
    icon: MapPin
  },
  {
    step: "02",
    title: "가맹 계약 및 임대차 계약",
    desc: "계약 체결 및 인테리어 실측 진행",
    icon: PenTool
  },
  {
    step: "03",
    title: "인테리어 및 개원 준비",
    desc: "병원 인허가, 의료기기 세팅, 직원 채용/교육",
    icon: Hammer
  },
  {
    step: "04",
    title: "최종 점검 및 그랜드 오픈",
    desc: "온/오프라인 마케팅 개시 및 진료 시작",
    icon: PartyPopper
  }
];

export const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-teo-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">Open Process</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-teo-green">
          체계적인 <span className="text-teo-gold">개원 로드맵</span>
        </h3>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((item, idx) => (
            <div key={idx} className="bg-white md:bg-transparent p-6 rounded-lg shadow-md md:shadow-none relative group text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teo-light border-2 border-teo-gold text-teo-green mb-4 group-hover:bg-teo-gold group-hover:text-white transition-colors duration-300 relative z-10 mx-auto md:mx-0">
                <item.icon size={28} />
              </div>
              <div className="mt-4">
                <span className="text-5xl font-serif text-gray-100 font-bold absolute top-4 right-4 md:-top-4 md:right-auto md:left-20 -z-10 group-hover:text-teo-green/10 transition-colors">
                  {item.step}
                </span>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 break-keep">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};