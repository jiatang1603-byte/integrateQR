/**
 * Data and configurations for the QR Code Landing Page
 */

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  icon: string; // lucide icon name representation
  badge?: string;
  accentColor: string; // Tailwind color class roots
  hoverColor: string;
  textColor: string;
}

export const LANDING_LINKS: LinkItem[] = [
  {
    id: "visitor-reg",
    title: "工廠訪客登記表",
    subtitle: "Factory Visitor Registration",
    description: "外賓、廠商、承包商及訪客進入廠區前，請務必先點此完成個資與安全規範登記。",
    url: "https://jiatang1603-byte.github.io/VRF/",
    icon: "UserCheck",
    badge: "入廠必填",
    accentColor: "border-natural-border bg-white hover:bg-natural-sage-bg hover:border-natural-soft-green text-natural-dark-green",
    hoverColor: "shadow-natural-soft-green/30",
    textColor: "text-natural-green",
  },
  {
    id: "satisfaction",
    title: "服務滿意度調查表",
    subtitle: "Service Satisfaction Survey",
    description: "不論您是洽公或參訪，您的寶貴意見是我們前進的動力，歡迎點此提供回饋。",
    url: "https://jiatang1603-byte.github.io/google-forms/",
    icon: "ClipboardCheck",
    badge: "意見回饋",
    accentColor: "border-natural-border bg-white hover:bg-natural-sage-bg hover:border-natural-light-green/40 text-natural-dark-green",
    hoverColor: "shadow-natural-soft-green/30",
    textColor: "text-natural-light-green",
  },
  {
    id: "line-official",
    title: "官方 LINE 帳號入口",
    subtitle: "Official LINE Contact",
    description: "加入佳堂官方 LINE 帳號，可接收即時廠區須知、緊急聯絡通訊及一對一專人客服服務。",
    url: "https://line.me/R/ti/p/@616hphcx?oat_content=qr#~",
    icon: "MessageSquareMore",
    badge: "官方專屬",
    accentColor: "border-natural-border bg-white hover:bg-natural-sage-bg hover:border-natural-green/45 text-natural-dark-green",
    hoverColor: "shadow-natural-soft-green/30",
    textColor: "text-natural-dark-green",
  }
];

export const WIFI_CONFIG = {
  ssid: "Jiatang_Guest_5G",
  pass: "jiatang1603",
  location: "A 棟大廳、服務櫃檯與守衛室"
};

export const COUNTER_INFO = {
  phone: "04-2345-6789 分機 9 (總機服務)",
  hours: "週一至週五 08:00 - 17:00 (例假日除外)",
  address: "台中市精密機械科技創新園區佳唐路 88 號"
};
