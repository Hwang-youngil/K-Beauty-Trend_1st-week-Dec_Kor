import React from 'react';
import { COLORS } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: COLORS.primary }}
          >
            K
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight" style={{ color: COLORS.secondary }}>
              K-Beauty Insight Bridge
            </h1>
            <p className="text-xs text-gray-500">인도네시아 시장 분석 | 2025년 12월 1주차</p>
          </div>
        </div>
        <div 
          className="text-xs font-medium text-white px-3 py-1 rounded-full hidden sm:block"
          style={{ backgroundColor: COLORS.secondary }}
        >
          For ID Brand Owners
        </div>
      </div>
    </header>
  );
};
