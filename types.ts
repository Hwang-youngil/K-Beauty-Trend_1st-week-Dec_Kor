export type TabId = 'keyword' | 'ingredient' | 'category' | 'picks';

export interface TabItem {
  id: TabId;
  label: string;
  icon?: string;
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}

export interface BarChartDataPoint {
  name: string;
  Korea: number;
  Indonesia: number;
}
