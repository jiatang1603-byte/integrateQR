import React, { useState } from "react";
import { 
  UserCheck, 
  ClipboardCheck, 
  MessageSquareMore, 
  QrCode, 
  ExternalLink, 
  ChevronRight, 
  Share2,
  Info,
  Building2
} from "lucide-react";
import { LANDING_LINKS } from "./data";
import ClockWidget from "./components/ClockWidget";
import FestiveWidget from "./components/FestiveWidget";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showShareQr, setShowShareQr] = useState(false);

  // Map icon names to Lucide icon components with beautiful organic color styles matching the Natural Tones Design HTML
  const renderIcon = (iconName: string, linkId: string) => {
    let iconBgClass = "bg-[#CAD2C5] text-[#2F3E46]";
    if (linkId === "satisfaction") {
      iconBgClass = "bg-[#84A59D] text-white";
    } else if (linkId === "line-official") {
      iconBgClass = "bg-[#52796F] text-white";
    }

    // Enlarged Icon Dimensions (h-8 w-8 instead of h-6 w-6)
    const iconClass = "h-8 w-8";

    return (
      <div className={`${iconBgClass} w-18 h-18 rounded-[1.25rem] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0`}>
        {iconName === "UserCheck" && <UserCheck className={iconClass} />}
        {iconName === "ClipboardCheck" && <ClipboardCheck className={iconClass} />}
        {iconName === "MessageSquareMore" && <MessageSquareMore className={iconClass} />}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-natural-cream flex flex-col antialiased relative overflow-x-hidden">
      
      {/* Decorative Natural Tones Ambient Blurs */}
      <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] bg-[#E9EED9] rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#D8E2DC] rounded-full opacity-35 blur-3xl pointer-events-none" />

      {/* Top Banner Status Bar - Desktop and Mobile */}
      <div className="z-20 w-full bg-[#354F52] text-slate-200 text-xs py-3 px-6 flex items-center justify-between border-b border-[#2F3E46]/30">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#84A59D] animate-ping inline-block" />
          <span className="font-semibold text-white tracking-wide">佳堂廠區接待入口選單</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline text-[#CAD2C5]">大廳主入口自助系統</span>
        </div>
        <div className="flex items-center gap-3 text-slate-200/90 font-mono text-[10px] tracking-widest">
          <span>PORTAL: ONLINE</span>
          <span className="h-3 w-px bg-white/20" />
          <span>v2.5</span>
        </div>
      </div>

      {/* Main Container - Scaled up max-width from max-w-4xl to max-w-5xl for luxurious width */}
      <main className="z-10 flex-1 max-w-5xl w-full mx-auto px-6 py-10 md:py-16 flex flex-col gap-8 md:gap-10">
        
        {/* Company Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-natural-border pb-8">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-[1.25rem] bg-[#52796F] flex items-center justify-center text-white shadow-lg shrink-0">
              <Building2 className="h-8 w-8 text-[#E6EBE0]" />
            </div>
            <div>
              <div className="flex items-center gap-3.5 flex-wrap">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#354F52] sm:text-4xl">
                  佳堂實業股份有限公司
                </h1>
                <span className="text-[11px] font-mono font-bold tracking-widest bg-[#E6EBE0] border border-[#CAD2C5] text-[#2F3E46] px-2.5 py-1 rounded-sm">
                  JIATANG INDUSTRIAL
                </span>
              </div>
              <p className="text-sm md:text-base text-natural-light-green font-semibold mt-1.5">
                歡迎光臨佳堂廠區。請使用手機掃描或點擊下方大型選單，即可快速開啟對應服務表單。
              </p>
            </div>
          </div>

          <button
            id="share-qr-btn"
            onClick={() => setShowShareQr(!showShareQr)}
            className={`cursor-pointer inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl border transition-all hover:scale-105 active:scale-95 shrink-0 ${
              showShareQr 
              ? "bg-[#354F52] border-[#354F52] text-white shadow-md" 
              : "bg-white border-natural-border text-natural-dark-green hover:bg-[#F7F9F4] shadow-sm"
            }`}
          >
            <QrCode className="h-4.5 w-4.5" />
            <span>{showShareQr ? "隱藏分享條碼" : "分享本頁連結"}</span>
          </button>
        </div>

        {/* Share QR Code Drawer */}
        <AnimatePresence>
          {showShareQr && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-white border border-[#E6EBE0] rounded-[2rem] p-8 shadow-md flex flex-col md:flex-row items-center gap-8"
            >
              <div className="bg-[#F7F9F4] border border-[#CAD2C5]/30 p-5 rounded-2xl shrink-0 shadow-inner">
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#354F52]" fill="currentColor">
                  {/* Outer border markers */}
                  <rect x="0" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="5" y="5" width="15" height="15" />
                  
                  <rect x="75" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="80" y="5" width="15" height="15" />

                  <rect x="0" y="75" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="5" y="80" width="15" height="15" />

                  {/* Random pixels simulating real-time link code */}
                  <rect x="35" y="0" width="10" height="10" />
                  <rect x="55" y="5" width="10" height="5" />
                  <rect x="45" y="15" width="15" height="15" />
                  <rect x="30" y="45" width="10" height="10" />
                  <rect x="15" y="45" width="10" height="20" />
                  <rect x="45" y="35" width="20" height="10" />
                  <rect x="75" y="35" width="15" height="15" />
                  <rect x="35" y="60" width="30" height="10" />
                  <rect x="80" y="60" width="15" height="15" />
                  <rect x="70" y="80" width="25" height="15" />
                  <rect x="45" y="80" width="15" height="10" />
                </svg>
              </div>
              <div className="space-y-3 flex-1 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#354F52] bg-[#E9EED9] px-3.5 py-1 rounded-md border border-[#CAD2C5]">
                  <Share2 className="h-3 w-3" /> 隨行人員・自助登入
                </span>
                <h4 className="text-lg font-bold text-natural-slate">將此入口分享給隨行夥伴</h4>
                <p className="text-sm text-[#84A59D] leading-relaxed max-w-md">
                  若有其他同行訪客或外包廠商，請直接用手機相機鏡頭對準此處掃碼，即可快速進入相同的點選導向選單，無需重複搜尋或手動輸入網址。
                </p>
                <div className="bg-[#F7F9F4] border border-[#E6EBE0] px-4 py-2.5 rounded-xl flex items-center justify-between text-xs text-[#52796F] font-mono mt-1 break-all select-all shadow-inner">
                  <span>https://ais-dev-hl24yzgeeztro4kswkr7gi-167241582896.asia-east1.run.app</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real-time Clock Dashboard */}
        <ClockWidget />

        {/* Dragon Boat Festival Greetings Widget */}
        <FestiveWidget />

        {/* Selected Instructions Label block */}
        <div className="text-center sm:text-left mt-2">
          <h3 className="text-base font-bold text-[#354F52] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
            <Info className="h-5 w-5 text-[#84A59D]" />
            請選擇下方對應卡片進入表單
          </h3>
          <p className="text-xs md:text-sm text-natural-light-green mt-1">
            點選大卡片將於新分頁開啟對應連結。完表後可隨時返回本入口選單。
          </p>
        </div>

        {/* ENLARGED LINKS GRID SYSTEM - Scaled up spacing to gap-8 and elegant sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LANDING_LINKS.map((link) => (
            <a
              id={`card-link-${link.id}`}
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between p-8 md:p-10 bg-white border border-[#E6EBE0] rounded-[2.5rem] transition-all duration-300 hover:shadow-xl hover:border-[#CAD2C5] hover:scale-[1.02] active:scale-[0.98] ${link.accentColor}`}
            >
              <div>
                {/* Badge & Beautiful Enlarged Rounded Icon block */}
                <div className="flex items-center justify-between gap-2 mb-8">
                  {renderIcon(link.icon, link.id)}
                  
                  {link.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E9EED9] border border-[#CAD2C5]/40 text-[#354F52] shadow-3xs tracking-wider">
                      {link.badge}
                    </span>
                  )}
                </div>

                {/* Card Title Content - Enlarged text sizes */}
                <h4 className="text-xl md:text-2xl font-extrabold text-[#354F52] tracking-tight group-hover:text-[#52796F] transition-colors leading-tight">
                  {link.title}
                </h4>
                <p className="text-xs font-mono text-[#84A59D] mt-1.5 font-bold uppercase tracking-widest">
                  {link.subtitle}
                </p>
                <p className="text-sm text-natural-slate/85 leading-relaxed mt-4 pt-4 border-t border-[#E6EBE0]/50">
                  {link.description}
                </p>
              </div>

              {/* Bottom Action Footer with elegant alignment and scaled text */}
              <div className="border-t border-[#E6EBE0] mt-8 pt-5 flex items-center justify-between text-xs md:text-sm font-bold">
                <span className={`text-[12px] md:text-xs ${link.textColor} group-hover:underline underline-offset-4 flex items-center gap-1.5`}>
                  開啟外部連結
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </span>
                <div className="h-10 w-10 rounded-full bg-[#F7F9F4] border border-[#E6EBE0] flex items-center justify-center text-[#CAD2C5] group-hover:bg-[#52796F] group-hover:text-white group-hover:border-[#52796F] transition-all duration-300 shadow-3xs">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Dragon vessel waveform background vector inside main */}
        <div className="w-full flex justify-center opacity-[0.06] mt-4 select-none pointer-events-none">
          <svg width="800" height="80" viewBox="0 0 800 100" className="w-full">
            <path d="M0 80 C 100 80, 150 20, 200 80 C 250 140, 300 80, 400 80 C 500 80, 550 20, 600 80 C 650 140, 700 80, 800 80" stroke="#52796F" strokeWidth="3" fill="none" />
            <path d="M0 90 C 100 90, 150 30, 200 90 C 250 150, 300 90, 400 90 C 500 90, 550 30, 600 90 C 650 150, 700 90, 800 90" stroke="#52796F" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

      </main>

      {/* Footer Branding Section */}
      <footer className="w-full bg-white border-t border-[#E6EBE0] mt-16 py-12 px-6 text-center z-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#84A59D] rounded-full"></span>
            <span className="text-xs font-semibold text-[#84A59D] tracking-widest uppercase">Dragon Boat Festival Greetings</span>
            <span className="w-1.5 h-1.5 bg-[#84A59D] rounded-full"></span>
          </div>
          <p className="text-xs md:text-sm text-[#84A59D] font-bold italic">
            祝您端午安康 · 闔家吉祥順心
          </p>
          <div className="h-4" />
          <p className="text-xs md:text-sm text-[#84A59D]/75 font-semibold">
            © 2026 佳堂實業股份有限公司 JIATANG INDUSTRIAL CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] md:text-xs text-[#CAD2C5] tracking-wider">
            系統支援 / 自助登入口 • 建議搭配智慧型手機之主流 Chrome & Safari 瀏覽器以獲得極佳掃描與完表操作體驗
          </p>
        </div>
      </footer>
    </div>
  );
}
