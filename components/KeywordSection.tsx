import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { KEYWORD_CHART_DATA, COLORS } from '../constants';

export const KeywordSection: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Analysis */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span 
              className="px-3 py-1 bg-opacity-10 rounded-full text-xs font-bold"
              style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}
            >
              KEYWORD
            </span>
            <span className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              #바르는물광_PDRN
            </span>
          </div>
          
          <h3 className="text-lg font-bold mb-4" style={{ color: COLORS.secondary }}>
            한국의 '홈 더마' 열풍, 인도네시아의 기회
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            현재 한국은 피부과 시술(리쥬란 힐러) 효과를 집에서 내는 '연어 DNA(PDRN)' 제품이 올리브영과 화해 랭킹을 장악했습니다. 
            아누아, 메디큐브 등 주요 브랜드가 모두 PDRN 라인을 메인으로 내세우고 있습니다.
          </p>

          <div className="bg-gray-50 rounded-xl p-5 border-l-4" style={{ borderColor: COLORS.primary }}>
            <h4 className="font-bold mb-2" style={{ color: COLORS.secondary }}>
              🇮🇩 인도네시아 현지화 전략 포인트
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold" style={{ color: COLORS.primary }}>✓</span>
                <div>
                  <strong>타겟 고민 전환:</strong><br/>
                  '노화 방지' (KR) → <span className="font-bold" style={{ color: COLORS.primary }}>'여드름 흉터(Bopeng) & 글래스 스킨'</span> (ID)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold" style={{ color: COLORS.primary }}>✓</span>
                <div>
                  <strong>메시지 차별화:</strong><br/>
                  "여드름 흔적을 지우고, 즉각적인 물광을 채운다"는 메시지 소구.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold" style={{ color: COLORS.warn }}>⚠️</span>
                <div>
                  <strong>주의사항 (Halal):</strong><br/>
                  연어 유래 성분이므로 돼지 성분 미포함(Halal) 및 어류 알레르기 안내 필수. 식물성 PDRN(Phyto) 사용 시 비건 강조.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center min-h-[400px]">
          <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 text-center">
            마케팅 키워드 소구 변화 (KR vs ID)
          </h4>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={KEYWORD_CHART_DATA}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                   cursor={{fill: '#f3f4f6'}}
                />
                <Legend />
                <Bar dataKey="Korea" name="한국 (Korea)" fill={COLORS.korea} radius={[4, 4, 0, 0]} />
                <Bar dataKey="Indonesia" name="인도네시아 (ID)" fill={COLORS.indonesia} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            데이터 시각화: 한국 트렌드 대비 인도네시아 추천 소구점 변화
          </p>
        </div>
      </div>
    </section>
  );
};
