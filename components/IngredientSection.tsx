import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { INGREDIENT_CHART_DATA, COLORS } from '../constants';

export const IngredientSection: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold mb-4 inline-block">
              INGREDIENT
            </span>
            <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.secondary }}>
              초저분자 히알루론산
            </h3>
            <p className="text-sm text-gray-400 mb-6">Low Molecular Hyaluronic Acid</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                  🇰🇷 한국 상황 (겨울)
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  찬 바람과 히터로 인한 **극건조** 해결이 주 목적. 묵직하고 리치한 제형도 선호됨.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2" style={{ borderColor: COLORS.accent }}>
                <h4 className="font-bold flex items-center gap-2" style={{ color: COLORS.accent }}>
                  🇮🇩 인도네시아 전략 (상시 여름)
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>'속건조(Dehydrated Oily Skin)' 해결사</strong>로 포지셔닝. 
                  겉은 번들거리지만 에어컨으로 인해 속은 마르는 피부 타겟.
                </p>
                <div className="mt-3 bg-blue-50 p-3 rounded-lg text-sm text-blue-800 font-medium">
                  🔑 Key Point: "끈적임 없이 물처럼 터지는(Watery Burst)" 텍스처 강조
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-xl p-4 min-h-[400px]">
              <h4 className="text-center text-sm font-bold text-gray-500 mb-4">
                기후별 이상적인 텍스처 매핑
              </h4>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={INGREDIENT_CHART_DATA}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="한국 겨울 (Rich)"
                      dataKey="A"
                      stroke={COLORS.korea}
                      strokeWidth={2}
                      fill={COLORS.korea}
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="인도네시아 (Watery)"
                      dataKey="B"
                      stroke={COLORS.indonesiaTexture}
                      strokeWidth={2}
                      fill={COLORS.indonesiaTexture}
                      fillOpacity={0.4}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
