import React from 'react';
import { AlertCircle, TrendingDown, Users, FileWarning } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: TrendingDown,
    title: "불안정한 매출",
    desc: "개원 초기의 반짝 효과 이후, 지속적인 신환 유입 감소와 기존 환자 이탈로 인한 매출 하락."
  },
  {
    icon: FileWarning,
    title: "마케팅의 한계",
    desc: "블로그, SNS, 지역광고... 진료 보기도 바쁜데 마케팅 트렌드를 따라잡기가 너무 벅찹니다."
  },
  {
    icon: Users,
    title: "직원 관리 스트레스",
    desc: "잦은 퇴사, 불친절한 응대, 교육 시스템의 부재로 인해 병원 이미지가 훼손됩니다."
  },
  {
    icon: AlertCircle,
    title: "경영 노하우 부재",
    desc: "임상 실력은 자신 있지만, 세무/노무/행정 등 병원 경영은 전혀 다른 영역입니다."
  }
];

export const PainPoints: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-teo-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">Reality Check</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-teo-green">
          "나홀로 개원, 언제까지 <span className="text-red-500/80 underline decoration-red-200 decoration-4 underline-offset-4">혼자 감당</span>하시겠습니까?"
        </h3>
        <p className="mt-4 text-gray-500">
          많은 원장님들이 진료 외적인 업무로 번아웃을 겪고 계십니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PAIN_POINTS.map((point, idx) => (
          <div key={idx} className="group bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teo-gold/20">
            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:bg-teo-green transition-colors duration-300">
              <point.icon className="w-7 h-7 text-gray-500 group-hover:text-teo-gold transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teo-green">{point.title}</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};