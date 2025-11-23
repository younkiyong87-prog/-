import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
            <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Clinic Interior" 
                className="w-full h-full object-cover filter brightness-[0.35] scale-105 animate-[pulse_15s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teo-dark/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/20 text-teo-gold text-sm font-medium mb-8 backdrop-blur-md uppercase tracking-wider">
                    Premium MSO Network
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                원장님은 오직<br />
                <span className="text-teo-gold italic relative inline-block">
                  '진료'
                  <svg className="absolute w-full h-2 bottom-1 left-0 text-teo-gold/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
                </span>에만 집중하세요
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                검증된 성공 데이터와 체계적인 경영 시스템.<br className="hidden md:block"/>
                터한의원 네트워크가 원장님의 든든한 파트너가 되어드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <button 
                    onClick={onCtaClick}
                    className="px-8 py-4 bg-teo-gold text-teo-green text-lg font-bold rounded-sm shadow-xl hover:bg-white hover:text-teo-green hover:-translate-y-1 transition-all duration-300"
                >
                    무료 가맹 상담 신청
                </button>
                <a 
                    href="#revenue"
                    className="px-8 py-4 bg-white/5 border border-white/30 text-white text-lg font-medium rounded-sm hover:bg-white/10 hover:border-teo-gold hover:text-teo-gold transition-all duration-300 backdrop-blur-sm"
                >
                    성공 사례 데이터 확인
                </a>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('pain-points')?.scrollIntoView()}>
            <ArrowDown className="w-8 h-8 text-white/40 hover:text-teo-gold transition-colors" />
        </div>
    </header>
  );
};