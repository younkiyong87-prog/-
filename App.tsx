import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { RevenueChart } from './components/RevenueChart';
import { Process } from './components/Process';
import { AiConsultant } from './components/AiConsultant';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const toggleConsultation = () => {
    setIsConsultationOpen(!isConsultationOpen);
  };

  return (
    <div className="relative min-h-screen bg-teo-light overflow-x-hidden">
      <Navbar onConsultClick={toggleConsultation} />
      
      <main>
        <section id="home">
          <Hero onCtaClick={toggleConsultation} />
        </section>

        <section id="pain-points" className="py-20 bg-white">
          <PainPoints />
        </section>

        <section id="solution" className="py-20 bg-teo-dark text-white">
          <Solutions />
        </section>

        <section id="revenue" className="py-20 bg-teo-light">
          <RevenueChart />
        </section>

        <section id="process" className="py-20 bg-white">
          <Process />
        </section>

        <section id="ai-consultant" className="py-20 bg-gradient-to-b from-teo-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-teo-green mb-4">
                궁금한 점이 있으신가요?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                터한의원 AI 컨설턴트에게 가맹 절차, 예상 수익, 브랜드 철학에 대해 물어보세요.
                <br />
                <span className="text-sm text-teo-gold">* 실제 상담 전, AI가 24시간 답변해드립니다.</span>
              </p>
            </div>
            <AiConsultant />
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Button for Consult */}
      <button 
        onClick={toggleConsultation}
        className="fixed bottom-6 right-6 z-40 bg-teo-gold text-teo-green p-4 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Modal/Overlay for direct form - Placeholder */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleConsultation}></div>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 relative z-10 animate-fade-in-up">
            <button onClick={toggleConsultation} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="text-2xl font-serif font-bold text-teo-green mb-2">가맹 상담 신청</h3>
            <p className="text-sm text-gray-500 mb-6">성함과 연락처를 남겨주시면 담당자가 24시간 내 연락드립니다.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('상담 신청이 완료되었습니다.'); toggleConsultation(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">원장님 성함</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teo-gold focus:border-transparent outline-none" placeholder="홍길동" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teo-gold focus:border-transparent outline-none" placeholder="010-1234-5678" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">개원 예정 지역</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-teo-gold focus:border-transparent outline-none" placeholder="서울 강남구" />
              </div>
              <button type="submit" className="w-full bg-teo-green text-white py-3 rounded hover:bg-teo-dark transition-colors font-bold">
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}