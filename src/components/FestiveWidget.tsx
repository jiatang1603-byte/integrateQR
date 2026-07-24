import React, { useState } from "react";
import { Sparkles, X, Star, Volume2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Gentle speech bubble quotes for soft starlight touch feedback
const STAR_QUOTES = [
  "璀璨星光 • 佳堂歡迎您蒞臨 ✨",
  "典雅順心 • 祝您今日萬事如意 🌟",
  "祥瑞星芒 • 出入平安 💎",
  "柔光熠熠 • 萬事勝意 💫",
  "品質至上 • 佳堂與您同行 🌙",
  "柔和星芒 • 指引廠區方向 ✨",
  "光輝溫潤 • 佳堂實業竭誠服務 🌸",
  "優雅流金 • 祝您業務蒸蒸日上 📈"
];

export default function FestiveWidget() {
  const [isActive, setIsActive] = useState(true);
  const [quote, setQuote] = useState("");

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const triggerQuote = () => {
    const randomQuote = STAR_QUOTES[Math.floor(Math.random() * STAR_QUOTES.length)];
    setQuote(randomQuote);
    setTimeout(() => {
      setQuote("");
    }, 3200);
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="active-festive"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="relative overflow-hidden w-full bg-gradient-to-r from-[#122036] via-[#162742] to-[#111D30] text-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#E2CA78]/30 font-sans"
          >
            {/* Background Starlight Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Top Champagne Gold Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E2CA78]/80 to-transparent" />
              
              {/* Corner Glowing Starlight Motifs */}
              <div className="absolute -top-3 -right-3 text-[#E2CA78]/20 animate-pulse">
                <Star className="w-20 h-20 fill-[#E2CA78]/10" />
              </div>
              <div className="absolute top-3 right-12 text-[#E2CA78]/30">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              <div className="absolute bottom-2 left-1/3 text-sky-200/20">
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Ambient Blurs */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E2CA78]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Close/Minimize Button */}
            <button
              id="close-festive-btn"
              onClick={handleToggle}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10 z-20"
              title="暫時隱藏此訊息板面"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Banner Core Layout */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between relative z-10">
              <div className="flex items-center gap-3.5 text-center md:text-left flex-col md:flex-row w-full justify-center md:justify-start">
                
                {/* Left Side Icon Shield with Interactive Sparkle */}
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerQuote}
                  className="relative shrink-0 w-12 h-12 bg-gradient-to-br from-[#E2CA78]/25 to-sky-500/15 rounded-xl flex items-center justify-center border border-[#E2CA78]/40 select-none shadow-inner cursor-pointer group"
                  title="點擊體驗星光問候"
                >
                  <ShieldCheck className="h-6 w-6 text-[#E5D28A]" />
                  <Sparkles className="h-3.5 w-3.5 text-amber-200 absolute -top-1 -right-1 animate-pulse" />
                </motion.div>

                {/* Message Headers */}
                <div className="space-y-1 z-10">
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-[#E2CA78]/15 border border-[#E2CA78]/30 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#E5D28A] tracking-wider uppercase">
                      <Volume2 className="h-3 w-3 text-[#E5D28A] inline" /> 廠區入廠與安全指引
                    </span>

                    <AnimatePresence>
                      {quote && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="inline-flex items-center gap-1 bg-[#1A2D4A] border border-[#E2CA78]/50 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#F5E8B8] shadow-xs"
                        >
                          <Sparkles className="w-3 h-3 text-[#E2CA78]" />
                          {quote}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] tracking-tight mt-0.5 flex items-center justify-center md:justify-start gap-1.5">
                    佳堂實業 • 尊榮接待與訪客自助系統
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-xl">
                    歡迎光臨佳堂。請選擇下方服務卡片點擊進入對應表單辦理登記。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive-festive"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="flex justify-center"
          >
            <button
              id="open-festive-btn"
              onClick={handleToggle}
              className="cursor-pointer text-xs font-semibold px-4 py-2 bg-[#14233A] text-[#E5D28A] border border-[#E2CA78]/35 rounded-full hover:bg-[#1C2F4D] transition-all flex items-center gap-2 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#E2CA78] animate-pulse" />
              <span>顯示告示面板</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
