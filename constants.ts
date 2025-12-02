import { BarChartDataPoint, ChartDataPoint, TabItem } from './types';

export const COLORS = {
  bg: '#FDFCF8',
  primary: '#FF8FAB', // Salmon
  secondary: '#264653', // Deep Teal
  accent: '#2A9D8F', // Water Blue
  warn: '#E76F51',
  korea: '#9CA3AF', // Gray-400
  indonesia: '#FF8FAB',
  indonesiaTexture: '#2A9D8F',
};

export const TABS: TabItem[] = [
  { id: 'keyword', label: '🔥 Hot Keyword (PDRN)' },
  { id: 'ingredient', label: '💧 Rising Ingredient' },
  { id: 'category', label: '🧴 Category Strategy' },
  { id: 'picks', label: "🏆 Editor's Picks" },
];

export const KEYWORD_CHART_DATA: BarChartDataPoint[] = [
  { name: 'Anti-aging', Korea: 90, Indonesia: 30 },
  { name: 'Moisture', Korea: 85, Indonesia: 60 },
  { name: 'Acne Scar', Korea: 40, Indonesia: 95 },
  { name: 'Glass Skin', Korea: 60, Indonesia: 90 },
];

export const INGREDIENT_CHART_DATA: ChartDataPoint[] = [
  { subject: 'Moisture', A: 90, B: 95, fullMark: 100 },
  { subject: 'Oiliness', A: 80, B: 20, fullMark: 100 },
  { subject: 'Cooling', A: 20, B: 90, fullMark: 100 },
  { subject: 'Lightness', A: 30, B: 95, fullMark: 100 },
  { subject: 'Lasting', A: 85, B: 70, fullMark: 100 },
];
