import React, { useState } from "react";
import { 
  UserCheck, 
  ClipboardCheck, 
  QrCode, 
  ExternalLink, 
  ChevronRight, 
  Share2,
  Info,
  Waves,
  Phone,
  Printer,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { LANDING_LINKS } from "./data";
import ClockWidget from "./components/ClockWidget";
import FestiveWidget from "./components/FestiveWidget";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";

export default function App() {
  const [showShareQr, setShowShareQr] = useState(false);

  // Map icon names to Lucide icon components with beautiful organic water world color tones
  const renderIcon = (iconName: string, linkId: string) => {
    let iconBgClass = "bg-[#CCFBF1] text-[#0F766E]"; // Soft teal bg for general items
    if (linkId === "satisfaction") {
      iconBgClass = "bg-[#E0F2FE] text-[#0369A1]"; // Sky blue bg for feedback
    }

    const iconClass = "h-8 w-8";

    return (
      <div className={`${iconBgClass} w-18 h-18 rounded-[1.25rem] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0`}>
        {iconName === "UserCheck" && <UserCheck className={iconClass} />}
        {iconName === "ClipboardCheck" && <ClipboardCheck className={iconClass} />}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#EBF5FF] via-[#E2F7F5] to-[#F0FDFA] flex flex-col antialiased relative overflow-x-hidden">
      
      {/* Luminous Interactive Atmosphere Blurs - Fresh Bright Ocean Water feel */}
      <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] bg-[#93C5FD]/35 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#99F6E4]/30 rounded-full opacity-35 blur-3xl pointer-events-none" />

      {/* Floating background bubbles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400/10 backdrop-blur-3xs"
            style={{
              width: `${Math.random() * 24 + 10}px`,
              height: `${Math.random() * 24 + 10}px`,
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 90 + 5}%`,
              backgroundColor: i % 2 === 0 ? "rgba(186, 230, 253, 0.25)" : "rgba(204, 251, 241, 0.2)"
            }}
            animate={{
              y: [0, -90, 0],
              x: [0, Math.random() * 24 - 12, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: Math.random() * 10 + 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top Banner Status Bar - Deep Teal Blue Sea Header */}
      <div className="z-20 w-full bg-[#115E59] text-teal-100 text-xs py-3 px-6 flex items-center justify-between border-b border-[#0F766E]/20 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2DD4BF] animate-ping inline-block" />
          <span className="font-semibold text-white tracking-wide">佳堂廠區接待入口自助選單</span>
          <span className="hidden sm:inline text-teal-300/40">|</span>
          <span className="hidden sm:inline text-[#CCFBF1]">大廳主入口自助系統 • 海底水世界主題</span>
        </div>
        <div className="flex items-center gap-3 text-teal-200/90 font-mono text-[10px] tracking-widest">
          <span>PORTAL: ONLINE</span>
          <span className="h-3 w-px bg-white/20" />
          <span>v2.6</span>
        </div>
      </div>

      {/* Main Container - max-w-5xl for luxurious width */}
      <main className="z-10 flex-1 max-w-5xl w-full mx-auto px-6 py-10 md:py-16 flex flex-col gap-8 md:gap-10 relative">
        
        {/* Company Header Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-cyan-150 pb-8">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-[1.25rem] bg-[#0D9488] flex items-center justify-center text-white shadow-md shrink-0">
              <Waves className="h-8 w-8 text-[#E0F2FE] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-3.5 flex-wrap">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#0F766E] sm:text-4xl">
                  佳堂實業股份有限公司
                </h1>
                <span className="text-[11px] font-mono font-bold tracking-widest bg-cyan-100 border border-cyan-200 text-cyan-800 px-2.5 py-1 rounded-sm">
                  JIATANG INDUSTRIAL
                </span>
              </div>
              <p className="text-sm md:text-base text-cyan-700 font-semibold mt-1.5">
                歡迎光臨佳堂廠區。請使用手機掃描或點擊下方大型選單，即可快速開啟對應服務表單。
              </p>
            </div>
          </div>

          <button
            id="share-qr-btn"
            onClick={() => setShowShareQr(!showShareQr)}
            className={`cursor-pointer inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl border transition-all hover:scale-105 active:scale-95 shrink-0 ${
              showShareQr 
              ? "bg-[#0F766E] border-[#0F766E] text-white shadow-md" 
              : "bg-white border-cyan-100 text-cyan-800 hover:bg-cyan-50 shadow-sm"
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
              className="overflow-hidden bg-white/95 backdrop-blur-md border border-cyan-150 rounded-[2rem] p-8 shadow-md flex flex-col md:flex-row items-center gap-8"
            >
              <div className="bg-sky-50/50 border border-cyan-100 p-5 rounded-2xl shrink-0 shadow-inner flex items-center justify-center">
                {/* Real-time Generated QR Code */}
                <QRCodeSVG 
                  value="https://jiatang1603-byte.github.io/integrateQR/" 
                  size={128} 
                  fgColor="#0E7490" 
                  level="H"
                  includeMargin={false}
                />
              </div>
              <div className="space-y-3 flex-1 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-850 bg-cyan-50 px-3.5 py-1 rounded-md border border-cyan-100">
                  <Share2 className="h-3 w-3 text-cyan-750" /> 隨行人員・自助登入
                </span>
                <h4 className="text-lg font-bold text-slate-800">將此入口分享給隨行夥伴</h4>
                <p className="text-sm text-cyan-700 leading-relaxed max-w-md">
                  若有其他同行訪客或外包廠商，請直接用手機相機鏡頭對準此處掃碼，即可快速進入相同的點選導向選單，無需重複搜尋或手動輸入網址。
                </p>
                <div className="bg-sky-50 border border-cyan-100/60 px-4 py-2.5 rounded-xl flex items-center justify-between text-xs text-cyan-800 font-mono mt-1 break-all select-all shadow-inner">
                  <span>https://jiatang1603-byte.github.io/integrateQR/</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real-time Clock Dashboard */}
        <ClockWidget />

        {/* Outer components, Marine animals from FestiveWidget loaded here */}
        <FestiveWidget />

        {/* Selected Instructions Label block */}
        <div className="text-center sm:text-left mt-2">
          <h3 className="text-base font-bold text-teal-900 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
            <Info className="h-5 w-5 text-cyan-600" />
            請選擇下方對應卡片進入表單
          </h3>
          <p className="text-xs md:text-sm text-cyan-700 mt-1">
            點選大卡片將於新分頁開啟對應連結。完成表單後可隨時返回本入口選單。
          </p>
        </div>

        {/* ENLARGED LINKS GRID SYSTEM - Clean, Bright Ocean Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto w-full gap-8 z-10">
          {LANDING_LINKS.map((link) => (
            <a
              id={`card-link-${link.id}`}
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between p-8 md:p-10 bg-white/95 backdrop-blur-md border border-cyan-100/70 rounded-[2.5rem] transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100/50 hover:border-cyan-300 hover:scale-[1.02] active:scale-[0.98]`}
            >
              <div>
                {/* Badge & Beautiful Rounded Icon block */}
                <div className="flex items-center justify-between gap-2 mb-8">
                  {renderIcon(link.icon, link.id)}
                  
                  {link.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-800 shadow-3xs tracking-wider">
                      {link.badge}
                    </span>
                  )}
                </div>

                {/* Card Title Content - Enlarged text sizes */}
                <h4 className="text-xl md:text-2xl font-extrabold text-teal-950 tracking-tight group-hover:text-cyan-800 transition-colors leading-tight">
                  {link.title}
                </h4>
                <p className="text-xs font-mono text-cyan-600 mt-1.5 font-bold uppercase tracking-widest">
                  {link.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-cyan-100/40">
                  {link.description}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="border-t border-cyan-100/40 mt-8 pt-5 flex items-center justify-between text-xs md:text-sm font-bold">
                <span className={`text-[12px] md:text-xs text-cyan-600 group-hover:underline underline-offset-4 flex items-center gap-1.5`}>
                  開啟外部連結
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </span>
                <div className="h-10 w-10 rounded-full bg-cyan-50 border border-cyan-100/50 flex items-center justify-center text-cyan-400 group-hover:bg-[#0D9488] group-hover:text-white group-hover:border-[#0D9488] transition-all duration-300 shadow-3xs">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Luminous sea-wave background vector inside main */}
        <div className="w-full flex justify-center opacity-15 mt-6 select-none pointer-events-none">
          <svg width="800" height="80" viewBox="0 0 800 100" className="w-full text-cyan-500" fill="currentColor">
            <path d="M0 50 Q 200 20, 400 50 T 800 50 L 800 100 L 0 100 Z" fill="url(#waveGrad)" opacity="0.4" />
            <path d="M0 65 Q 200 45, 400 65 T 800 65 L 800 100 L 0 100 Z" fill="url(#waveGrad)" opacity="0.6" />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </main>

      {/* Footer Branding Section & Factory Contact Grid */}
      <footer className="w-full bg-white/95 backdrop-blur-md border-t border-cyan-100 mt-20 py-12 px-6 z-10 relative overflow-hidden">
        {/* Soft glowing footer gradient anchor */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-cyan-200/20 blur-xl rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-left">
          
          {/* Logo / Company Identity */}
          <div className="space-y-3 max-w-sm">
            <span className="inline-flex items-center gap-1 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-700">
              🫧 佳堂實業 • 廠區自助系統
            </span>
            <h4 className="text-xl font-extrabold text-cyan-900 tracking-tight">
              佳堂實業股份有限公司
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              本站為廠區多功能接待入口。歡迎各界貴賓、配合廠商與訪客蒞臨指教。請使用上方功能卡片自助辦理登記手續，共同維護安全且高效率的廠區環境。
            </p>
          </div>

          {/* New Factory Information Grid (工廠資訊) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-slate-600 bg-cyan-50/50 p-5 rounded-2xl border border-cyan-100/60 w-full md:w-auto">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">電話</p>
                <p className="font-semibold text-slate-700">07-6986168</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                <Printer className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">傳真</p>
                <p className="font-semibold text-slate-700">07-6988398</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:col-span-2">
              <span className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">工廠地址</p>
                <p className="font-semibold text-slate-700">高雄市茄萣區大業路61號</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:col-span-2">
              <span className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">營業時間</p>
                <p className="font-semibold text-slate-700">每日 9:00 ~ 18:00 (週二公休)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower legal line */}
        <div className="max-w-5xl mx-auto border-t border-slate-100 mt-8 pt-8 text-center space-y-2">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 佳堂實業股份有限公司 JIATANG INDUSTRIAL CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-slate-450 text-slate-400">
            系統支援 / 自助登入口 • 建議搭配智慧型手機之主流 Chrome & Safari 瀏覽器以獲得極佳完表操作體驗
          </p>
        </div>
      </footer>
    </div>
  );
}
