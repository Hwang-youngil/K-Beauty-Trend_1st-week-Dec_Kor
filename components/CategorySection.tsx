import React from 'react';
import { COLORS } from '../constants';

export const CategorySection: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category A: Toner Pad */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="bg-green-50 p-6 border-b border-green-100">
            <h3 className="text-xl font-bold text-green-800">A. 토너 패드 (Toner Pad)</h3>
            <p className="text-green-600 text-sm">진정 & 미백의 퀵 솔루션</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-xs font-bold text-gray-400 block mb-1">KR TREND</span>
              <p className="text-sm text-gray-700">닦토(닦아내기) + 팩토(붙이기) 겸용 대세. 스킨푸드, 메디힐, 다자연 상위권.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold" style={{ color: COLORS.secondary }}>🇮🇩 인도네시아 적용 전략</h4>
              {[
                { title: 'CSM 대체제', desc: '번거로운 스킨팩을 한 장으로 해결.' },
                { title: 'Cooling Effect', desc: '달아오른 피부 온도를 즉각 낮추는 쿨링 기능 강조.' },
                { title: 'Targeting', desc: '어성초(붉은기) / 당근,비타민(칙칙함)으로 라인업 세분화.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold text-xs">{idx + 1}</div>
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-800">{item.title}:</span> {item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category B: Tone Up Sun */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="bg-purple-50 p-6 border-b border-purple-100">
            <h3 className="text-xl font-bold text-purple-800">B. 톤업 선크림 (Tone-Up Sun)</h3>
            <p className="text-purple-600 text-sm">파운데이션 프리 (Skip-Care)</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-xs font-bold text-gray-400 block mb-1">KR TREND</span>
              <p className="text-sm text-gray-700">달바, 닥터지 강세. 핑크/퍼플 톤업 기능으로 자연스러운 보정 인기.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold" style={{ color: COLORS.secondary }}>🇮🇩 인도네시아 적용 전략</h4>
              {[
                { title: 'Skip-Care', desc: '"선크림 하나로 파데 효과까지" (높은 습도 대응).' },
                { title: 'Color Localization', desc: '한국의 핑크 베이스는 회끼(Greyish) 돌 수 있음.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 font-bold text-xs">{idx + 1}</div>
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-800">{item.title}:</span> {item.desc}</p>
                </div>
              ))}
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-700 text-center font-bold">
                🎨 추천 컬러: 피치(Peach) or 베이지(Beige)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
