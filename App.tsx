import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { KeywordSection } from './components/KeywordSection';
import { IngredientSection } from './components/IngredientSection';
import { CategorySection } from './components/CategorySection';
import { PicksSection } from './components/PicksSection';
import { MarketDataSection } from './components/MarketDataSection';
import { TABS, COLORS } from './constants';
import { TabId } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('keyword');

  const renderContent = () => {
    switch (activeTab) {
      case 'keyword':
        return <KeywordSection />;
      case 'ingredient':
        return <IngredientSection />;
      case 'category':
        return <CategorySection />;
      case 'picks':
        return <PicksSection />;
      default:
        return <KeywordSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Dashboard Intro */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-2 text-slate-900">👋 이번 주 핵심 인사이트</h2>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            한국의 12월 트렌드는 '홈 더마'와 '겨울 보습'입니다. 하지만 인도네시아는 덥고 습한 환경입니다. 
            한국의 데이터를 인도네시아 현지 사정(기후, 피부 고민, 할랄 이슈)에 맞춰 재해석한 전략 리포트입니다. 
            아래 탭을 눌러 각 분야별 상세 전략을 확인하세요.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-t-lg font-medium text-sm transition-all duration-200 ease-in-out
                  ${isActive ? 'border-b-2 bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-700 hover:bg-gray-50'}
                `}
                style={{
                  borderColor: isActive ? COLORS.primary : 'transparent',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {/* Static Market Data */}
        <MarketDataSection />
      </main>

      <Footer />
      
      {/* Global styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
