import React from 'react';
import { COLORS } from '../constants';

export const MarketDataSection: React.FC = () => {
  return (
    <section className="mt-12 mb-20 animate-fade-in">
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
        <div>
          <h3 className="text-xl font-bold" style={{ color: COLORS.secondary }}>
            📊 Market Ranking Data
          </h3>
          <p className="text-xs text-gray-500 mt-1">실시간 랭킹 스크린샷 (Olive Young / Hwahae / Glowpick)</p>
        </div>
        <span className="text-xs font-bold bg-gray-800 text-white px-3 py-1 rounded-full shadow-sm">Source Check</span>
      </div>

      <div className="space-y-12">
        {/* Olive Young Section */}
        <div>
          <h4 className="text-sm font-bold text-[#89B923] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#89B923]"></span> Olive Young Awards & Ranking
          </h4>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <img 
              src="olive.jpg" 
              alt="Olive Young Ranking" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hwahae Section */}
          <div>
            <h4 className="text-sm font-bold text-[#3EC3C6] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3EC3C6]"></span> Hwahae Ranking
            </h4>
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="hw.jpg" 
                alt="Hwahae Ranking" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>

          {/* Glowpick Section */}
          <div>
            <h4 className="text-sm font-bold text-[#FF485B] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF485B]"></span> Glowpick Ranking
            </h4>
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="glow.jpg" 
                alt="Glowpick Ranking" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};