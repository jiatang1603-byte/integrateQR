import React, { useState } from "react";
import { 
  UserCheck, 
  ClipboardCheck, 
  ExternalLink, 
  ChevronRight, 
  Share2,
  Info,
  Phone,
  Printer,
  MapPin,
  Clock,
  Sparkles,
  Star
} from "lucide-react";
import { LANDING_LINKS } from "./data";
import ClockWidget from "./components/ClockWidget";
import FestiveWidget from "./components/FestiveWidget";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";

// Import the generated luxury Jiatang hero image banner
import heroBannerImg from "./assets/images/jiatang_hero_banner_1784872553432.jpg";

export default function App() {
  const [showShareQr, setShowShareQr] = useState(false);

  // Render icon inside soft elegant champagne gold containers
  const renderIcon = (iconName: string, linkId: string) => {
    const isSurvey = linkId === "satisfaction";
    const bgClass = isSurvey 
      ? "bg-gradient-to-br from-sky-500/15 to-teal-500/10 border-sky-300/30 text-sky-200" 
      : "bg-gradient-to-br from-[#E2CA78]/20 to-amber-500/10 border-[#E2CA78]/35 text-[#E5D28A]";

    const iconClass = "h-6 w-6";

    return (
      <div className={`${bgClass} w-13 h-13 rounded-xl border flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0 relative z-10`}>
        {iconName === "UserCheck" && <UserCheck className={iconClass} />}
        {iconName === "ClipboardCheck" && <ClipboardCheck className={iconClass} />}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A1422] text-slate-100 flex flex-col antialiased relative overflow-x-hidden font-sans">
      
      {/* Background Luminous Soft Ambient Glows */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#E2CA78]/10 via-sky-500/5 to-transparent rounded-full opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating global starlight background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#E2CA78]/20"
            style={{
              width: `${Math.random() * 2.5 + 2}px`,
              height: `${Math.random() * 2.5 + 2}px`,
              left: `${Math.random() * 96}%`,
              top: `${Math.random() * 95}%`,
              boxShadow: "0 0 6px rgba(226, 202, 120, 0.4)"
            }}
            animate={{
              opacity: [0.15, 0.65, 0.15],
              scale: [0.8, 1.25, 0.8],
              y: [0, -15, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Top Status Bar - Minimalist Compact Header */}
      <div className="z-20 w-full bg-[#0D1828]/90 backdrop-blur-md text-slate-300 text-xs py-2 px-4 sm:px-6 flex items-center justify-between border-b border-[#1E324E]/80 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#E2CA78] animate-pulse inline-block" />
          <span className="font-semibold text-[#E5D28A] tracking-wide">佳堂實業 • 自助服務入口</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">典雅星光色系</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#E5D28A]/80 font-mono text-[10px] tracking-widest">
          <span>JIATANG</span>
          <span className="h-3 w-px bg-white/20" />
          <span>v3.0</span>
        </div>
      </div>

      {/* Interactive Floating Starlight Header Banner */}
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-5 pb-1">
        <FestiveWidget />
      </div>

      {/* Main Container - Narrowed & Refined Layout */}
      <main className="z-10 flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-col gap-5 sm:gap-6 relative">
        
        {/* =========================================================
            HERO MAIN PANEL - Clean Calligraphy Artwork Frame
            ========================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2CA78]/35 shadow-[0_12px_35px_rgba(0,0,0,0.4)] group bg-[#0F1C2E]">
          
          {/* Top Champagne Gold Soft Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E2CA78]/80 to-transparent z-20" />

          {/* Core Artwork Image with clean presentation */}
          <div className="relative w-full overflow-hidden flex items-center justify-center bg-[#070E18]">
            <img 
              src={heroBannerImg} 
              alt="佳堂 Jiatang Luxury Gold Ocean Art" 
              className="w-full h-auto object-cover max-h-[240px] sm:max-h-[300px] md:max-h-[340px] transform transition-transform duration-1000 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Real-time Clock Dashboard MERGED with Welcome Title & Share QR Button */}
        <ClockWidget 
          showShareQr={showShareQr} 
          onToggleShareQr={() => setShowShareQr(!showShareQr)} 
        />

        {/* Share QR Code Drawer */}
        <AnimatePresence>
          {showShareQr && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-[#13233A]/95 backdrop-blur-md border border-[#E2CA78]/35 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center gap-5 text-slate-100 relative"
            >
              {/* Background Starlight Accent inside QR Drawer */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2CA78]/10 rounded-full blur-xl pointer-events-none" />
              <Sparkles className="w-4 h-4 text-[#E2CA78]/40 absolute top-3 right-3 pointer-events-none" />

              <div className="bg-white p-3 rounded-xl shrink-0 shadow-md border border-amber-200 flex items-center justify-center relative z-10">
                <QRCodeSVG 
                  value="https://jiatang1603-byte.github.io/integrateQR/" 
                  size={110} 
                  fgColor="#0C1626" 
                  level="H"
                  includeMargin={false}
                />
              </div>
              <div className="space-y-2 flex-1 text-center sm:text-left relative z-10">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E5D28A] bg-[#E2CA78]/15 px-2.5 py-0.5 rounded-md border border-[#E2CA78]/30">
                  <Share2 className="h-3 w-3 text-[#E5D28A]" /> 掃碼分享
                </span>
                <h4 className="text-base font-bold text-white">將此入口分享給同行夥伴</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  同行訪客或廠商可掃描上方 QR Code，即可直接打開選單完成登記。
                </p>
                <div className="bg-[#09121F] border border-[#20334E] px-3 py-1.5 rounded-lg flex items-center justify-between text-[11px] text-[#E5D28A] font-mono mt-1 break-all select-all shadow-inner">
                  <span>https://jiatang1603-byte.github.io/integrateQR/</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions Header */}
        <div className="text-center sm:text-left mt-0.5">
          <h3 className="text-sm sm:text-base font-bold text-[#E5D28A] tracking-wide flex items-center justify-center sm:justify-start gap-1.5">
            <Info className="h-4 w-4 text-[#E2CA78]" />
            請選擇對應服務卡片進入表單
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            點選卡片將開啟對應外部連結表單。完成填寫後可直接返回本頁。
          </p>
        </div>

        {/* COMPACT LINKS GRID SYSTEM WITH EMBEDDED STARLIGHT BACKGROUND */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 z-10">
          {LANDING_LINKS.map((link) => (
            <a
              id={`card-link-${link.id}`}
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-5 sm:p-6 bg-[#132238]/85 backdrop-blur-md border border-[#253956]/80 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(226,202,120,0.15)] hover:border-[#E2CA78]/70 hover:bg-[#172944] active:scale-[0.99] overflow-hidden"
            >
              {/* EMBEDDED CARD STARLIGHT BACKGROUND DECORATION */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Subtle Champagne Gold Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E2CA78]/20 to-transparent group-hover:via-[#E2CA78]/80 transition-all duration-300" />

                {/* Starlight Motif in Top-Right Corner */}
                <div className="absolute top-3 right-3 text-[#E2CA78]/20 group-hover:text-[#E2CA78]/45 transition-colors duration-300">
                  <Star className="w-12 h-12 fill-[#E2CA78]/5 group-hover:fill-[#E2CA78]/15 animate-pulse" />
                </div>
                <div className="absolute top-5 right-11 text-[#E2CA78]/30 group-hover:text-[#E2CA78]/60 transition-colors duration-300">
                  <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "10s" }} />
                </div>

                {/* Mid & Bottom Decorative Star Particles inside card background */}
                <div className="absolute bottom-10 right-6 text-sky-200/20 group-hover:text-sky-200/40 transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="absolute top-1/2 left-4 w-1 h-1 rounded-full bg-[#E2CA78]/30 group-hover:bg-[#E2CA78]/60 shadow-[0_0_6px_rgba(226,202,120,0.8)]" />
                <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 rounded-full bg-slate-200/20 group-hover:bg-slate-200/50" />

                {/* Ambient Corner Glow Blur */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E2CA78]/5 group-hover:bg-[#E2CA78]/15 rounded-full blur-xl transition-all duration-300" />
              </div>

              {/* Card Foreground Content */}
              <div className="relative z-10">
                {/* Badge & Icon block */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {renderIcon(link.icon, link.id)}
                  
                  {link.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E2CA78]/15 border border-[#E2CA78]/30 text-[#E5D28A] tracking-wide flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-2.5 h-2.5 text-[#E5D28A]" />
                      {link.badge}
                    </span>
                  )}
                </div>

                {/* Card Title Content */}
                <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#E5D28A] transition-colors leading-snug flex items-center gap-1.5">
                  {link.title}
                </h4>
                <p className="text-[11px] font-mono text-[#E2CA78]/90 mt-0.5 font-semibold tracking-wider uppercase">
                  {link.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mt-2.5 pt-2.5 border-t border-[#20334E]">
                  {link.description}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 border-t border-[#20334E] mt-5 pt-3 flex items-center justify-between text-xs font-semibold">
                <span className="text-[#E5D28A]/80 group-hover:text-[#E5D28A] group-hover:underline underline-offset-4 flex items-center gap-1 transition-colors">
                  開啟外部表單
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </span>
                <div className="h-8 w-8 rounded-full bg-[#182A45] border border-[#253956] flex items-center justify-center text-[#E5D28A] group-hover:bg-[#E2CA78] group-hover:text-slate-950 group-hover:border-[#E2CA78] transition-all duration-300 shadow-xs">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </main>

      {/* Footer Branding Section & Factory Contact Grid */}
      <footer className="w-full bg-[#070E18] border-t border-[#1C2E46] mt-12 py-8 px-6 z-10 relative overflow-hidden text-slate-300">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          
          {/* Logo / Company Identity */}
          <div className="space-y-2 max-w-xs">
            <span className="inline-flex items-center gap-1.5 bg-[#E2CA78]/15 border border-[#E2CA78]/30 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#E5D28A]">
              <Sparkles className="w-3 h-3 text-[#E5D28A]" /> 佳堂實業 • 廠區自助系統
            </span>
            <h4 className="text-base font-bold text-white tracking-tight">
              佳堂實業股份有限公司
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              本站為佳堂廠區多功能接待與訪客自助登入口。歡迎各位貴賓、廠商與訪客蒞臨指教。
            </p>
          </div>

          {/* Factory Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 bg-[#0E1A2C]/90 p-4 rounded-xl border border-[#20334E] w-full md:w-auto relative overflow-hidden">
            <Sparkles className="w-4 h-4 text-[#E2CA78]/25 absolute top-2 right-2 pointer-events-none" />

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#E2CA78]/15 border border-[#E2CA78]/30 flex items-center justify-center text-[#E5D28A] shrink-0">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">電話</p>
                <p className="font-semibold text-white">07-6986168</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#E2CA78]/15 border border-[#E2CA78]/30 flex items-center justify-center text-[#E5D28A] shrink-0">
                <Printer className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">傳真</p>
                <p className="font-semibold text-white">07-6988398</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:col-span-2">
              <span className="w-7 h-7 rounded-lg bg-[#E2CA78]/15 border border-[#E2CA78]/30 flex items-center justify-center text-[#E5D28A] shrink-0">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">工廠地址</p>
                <p className="font-semibold text-white">高雄市茄萣區大業路61號</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:col-span-2">
              <span className="w-7 h-7 rounded-lg bg-[#E2CA78]/15 border border-[#E2CA78]/30 flex items-center justify-center text-[#E5D28A] shrink-0">
                <Clock className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">營業時間</p>
                <p className="font-semibold text-white">每日 9:00 ~ 18:00 (週二公休)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower legal line */}
        <div className="max-w-3xl mx-auto border-t border-[#1C2E46] mt-6 pt-5 text-center space-y-1">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 佳堂實業股份有限公司 JIATANG INDUSTRIAL CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-slate-500">
            建議搭配智慧型手機主流 Chrome 或 Safari 瀏覽器獲得最佳操作體驗
          </p>
        </div>
      </footer>
    </div>
  );
}
