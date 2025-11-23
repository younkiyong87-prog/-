import React from 'react';
import { Database, TrendingUp, ShieldCheck, Stethoscope } from 'lucide-react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    title: "데이터 기반 상권 분석",
    description: "빅데이터를 활용한 최적의 입지 선정과 예상 매출 시뮬레이션으로 실패 확률을 제로화합니다.",
    icon: Database
  },
  {
    title: "통합 마케팅 솔루션",
    description: "본사 전담 마케팅팀이 브랜드 블로그, 키워드 광고, 유튜브까지 모든 채널을 통합 관리합니다.",
    icon: TrendingUp
  },
  {
    title: "표준화된 진료 매뉴얼",
    description: "60년 임상 노하우가 담긴 질환별 처방 매뉴얼과 환자 상담 스크립트를 제공합니다.",
    icon: Stethoscope
  },
  {
    title: "법무/세무/노무 케어",
    description: "복잡한 행정 업무는 전문가 그룹에게 맡기고, 원장님은 오직 환자 치료에만 전념하세요.",
    icon: ShieldCheck
  }
];

export const Solutions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-teo-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">Teo Solution</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            성공하는 병원에는<br/>
            <span className="text-teo-gold">특별한 시스템</span>이 있습니다.
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            터한의원 네트워크는 단순한 간판 공유가 아닙니다.<br/>
            병원 경영의 A부터 Z까지, 완벽하게 구축된 <strong>MSO(병원경영지원) 시스템</strong>을 그대로 이식해 드립니다.
          </p>
          <div className="h-1 w-20 bg-teo-gold rounded-full mb-8"></div>
          
          <ul className="space-y-6">
            {FEATURES.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teo-green border border-teo-gold/30 flex items-center justify-center mt-1">
                  <feature.icon className="w-6 h-6 text-teo-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-teo-gold/20 rounded-lg blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop" 
            alt="Doctor Consulting" 
            className="relative rounded-lg shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-8 -left-8 bg-white text-teo-green p-6 rounded shadow-xl max-w-xs hidden md:block">
            <p className="text-4xl font-bold font-serif mb-1 text-teo-gold">98.5%</p>
            <p className="font-bold">가맹점 재계약률</p>
            <p className="text-xs text-gray-500 mt-2">업계 최고 수준의 만족도를 자랑합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};