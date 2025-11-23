import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RevenueData } from '../types';

const data: RevenueData[] = [
  { month: '3개월', solo: 1500, teo: 2800 },
  { month: '6개월', solo: 1800, teo: 4500 },
  { month: '9개월', solo: 1900, teo: 6200 },
  { month: '12개월', solo: 2100, teo: 8500 },
  { month: '18개월', solo: 2200, teo: 10500 },
];

export const RevenueChart: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-teo-gold font-sans font-bold tracking-widest text-sm uppercase mb-3">Growth Data</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-teo-green">
          압도적인 <span className="text-teo-gold">매출 성장</span> 차이
        </h3>
        <p className="mt-4 text-gray-600">
          개원 1년 차, 개인 한의원 대비 <strong className="text-teo-green">평균 400% 이상</strong>의 매출 성장을 기록하고 있습니다.
        </p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                tick={{ fill: '#4B5563' }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis 
                tickFormatter={(value) => `${value / 100}억`} 
                tick={{ fill: '#9CA3AF' }} 
                axisLine={false} 
                tickLine={false}
              />
              <Tooltip 
                cursor={{ fill: '#F3F4F6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                formatter={(value: number) => [`${value.toLocaleString()}만원`, '월 평균 매출']}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar 
                dataKey="solo" 
                name="일반 개인 한의원" 
                fill="#E5E7EB" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
              />
              <Bar 
                dataKey="teo" 
                name="터한의원 네트워크" 
                fill="#1B3A2B" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">* 위 데이터는 2023년 기준 가맹점 평균 매출 추이 시뮬레이션입니다.</p>
      </div>
    </div>
  );
};