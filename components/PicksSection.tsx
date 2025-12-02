import React from 'react';
import { COLORS } from '../constants';
import { AlertTriangle } from 'lucide-react';

export const PicksSection: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-6">
      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.secondary }}>
        🏆 Editor's Pick : 인도네시아 시장 추천
      </h3>
      
      {/* Pick 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 bg-gray-50 rounded-xl h-48 overflow-hidden shadow-inner relative group">
           <img 
             src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" 
             alt="PDRN Serum"
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white text-xs px-2 py-1 rounded" style={{ backgroundColor: COLORS.secondary }}>PICK 1</span>
            <h4 className="text-lg font-bold">아누아(Anua) PDRN 히알루론산 캡슐 세럼</h4>
          </div>
          <p className="text-gray-600 text-sm mb-4">현재 가장 핫한 성분인 PDRN(재생)과 히알루론산(수분)의 결합.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            {[
              { title: '트렌드 적합', desc: '여드름 흉터 + 속건조 동시 해결' },
              { title: '제형 기술', desc: '캡슐 비주얼 + 산뜻한 흡수력' },
              { title: '고기능성', desc: '스마트 캡슐 기술 마케팅' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-2 rounded border border-gray-100">
                <strong className="block mb-1" style={{ color: COLORS.primary }}>{item.title}</strong>
                <span className="text-gray-500 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pick 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 bg-gray-50 rounded-xl h-48 overflow-hidden shadow-inner relative group">
          <img 
             src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800" 
             alt="Tone-up Sunscreen"
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white text-xs px-2 py-1 rounded" style={{ backgroundColor: COLORS.secondary }}>PICK 2</span>
            <h4 className="text-lg font-bold">달바(d'Alba) 비건 톤업 선크림 (퍼플)</h4>
          </div>
          <p className="text-gray-600 text-sm mb-4">비건 인증으로 신뢰도 확보. 칙칙한 피부를 위한 컬러 코렉팅.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            {[
              { title: '신뢰도 (Trust)', desc: '비건 인증 ≈ 할랄 프렌들리' },
              { title: '미백 니즈', desc: '보라색으로 노란기 보정 (Dull Skin)' },
              { title: '글로우(Glow)', desc: '건강해 보이는 광채 피부 표현' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-2 rounded border border-gray-100">
                <strong className="block mb-1" style={{ color: COLORS.primary }}>{item.title}</strong>
                <span className="text-gray-500 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-5 flex items-start gap-4">
        <div className="text-orange-400 mt-1">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h5 className="font-bold text-orange-800">현지화 주의사항 (Critical Check)</h5>
          <p className="text-sm text-orange-700 mt-1 leading-relaxed">
            랭킹 1위 <strong>'에스트라 아토베리어 크림'</strong>은 한국의 겨울철용 고보습 제품입니다. 
            인도네시아의 고온다습한 기후에서는 <strong>"너무 기름지다(Too Oily)"</strong>는 컴플레인이 발생할 수 있습니다. 
            <br />
            <span className="font-semibold underline">→ '나이트 리페어 크림' 혹은 '에어컨 건조 방어용'으로 용도를 한정하여 소구하세요.</span>
          </p>
        </div>
      </div>
    </section>
  );
};