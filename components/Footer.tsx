import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teo-dark text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h5 className="font-serif text-2xl font-bold mb-4">Teo<span className="text-teo-gold">Life</span></h5>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
              터한의원 네트워크는 한의학의 본질을 지키며 현대적인 경영 시스템을 더해 최상의 의료 서비스를 제공합니다.
            </p>
          </div>
          <div>
            <h6 className="font-bold mb-4 text-teo-gold">Contact</h6>
            <p className="text-gray-400 text-sm mb-2">가맹 문의: 1588-0000</p>
            <p className="text-gray-400 text-sm mb-2">이메일: franchise@teolife.com</p>
            <p className="text-gray-400 text-sm">서울시 강남구 테헤란로 123 터타워 5층</p>
          </div>
          <div>
            <h6 className="font-bold mb-4 text-teo-gold">Legal</h6>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">가맹 안내서 다운로드</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Teo Life Network. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-teo-gold transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-teo-gold transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};