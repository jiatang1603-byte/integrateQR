import React, { useState } from "react";
import { Sparkles, X, Gift, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FestiveWidget() {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* =========================================================
          4 DELIGHTFUL HANGING ORNAMENTS (左右立體擺動吊飾)
          Scatter-hung on page edges *without card borders* (移除主體外框)
          ========================================================= */}
      
      {/* Ornament 1: Cute Rice Dumpling (可愛波波粽吊飾) - Top Left Margin Gutter */}
      <motion.div
        initial={{ opacity: 0, y: -45, rotate: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotate: [-6, 6, -6] 
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          opacity: { duration: 0.8 },
          y: { duration: 0.7, type: "spring", stiffness: 55 }
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute left-1 sm:left-4 xl:left-8 top-16 z-30 pointer-events-none flex flex-col items-center select-none scale-75 sm:scale-90 md:scale-100"
      >
        {/* Delicate golden rope thread */}
        <div className="w-0.5 h-16 bg-amber-600/70 shadow-xs" />
        
        {/* Red Traditional Chinese Knot */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500 drop-shadow-xs shrink-0 -my-0.5" fill="currentColor">
          <circle cx="12" cy="6" r="2.5" />
          <path d="M12,4 L7,9 L12,14 L17,9 Z" />
          <circle cx="9.5" cy="9" r="1.5" />
          <circle cx="14.5" cy="9" r="1.5" />
        </svg>

        {/* Small gold bead */}
        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full border border-yellow-500/30 shrink-0" />

        {/* FREE-HANGING CUTEST RICE DUMPLING SVG (No container box frame) */}
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 drop-shadow-xl select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle drop shadow shape */}
          <ellipse cx="50" cy="85" rx="28" ry="6" fill="black" fillOpacity="0.25" />
          
          {/* Main rounded chubby triangular body */}
          <path
            d="M50,15 C68,15 85,55 82,75 C80,85 20,85 18,75 C15,55 32,15 50,15 Z"
            fill="url(#dumplingGrad)"
          />
          
          {/* Green wraps (bamboo leaf) */}
          <path d="M18,75 C25,50 45,65 50,83 C35,85 22,82 18,75 Z" fill="#047857" opacity="0.9" />
          <path d="M82,75 C75,50 55,65 50,83 C65,85 78,82 82,75 Z" fill="#065F46" opacity="0.95" />
          
          {/* Tying ribbon golden belt */}
          <path d="M26,62 Q50,68 74,62" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Cheerful sparkly facial features */}
          <circle cx="34" cy="54" r="6.5" fill="#FB7185" opacity="0.9" />
          <circle cx="66" cy="54" r="6.5" fill="#FB7185" opacity="0.9" />
          <circle cx="40" cy="46" r="6.5" fill="#1E293B" />
          <circle cx="38" cy="44" r="2.2" fill="white" />
          <circle cx="60" cy="46" r="6.5" fill="#1E293B" />
          <circle cx="58" cy="44" r="2.2" fill="white" />
          
          {/* Smile and hair decoration */}
          <path d="M46,54 Q50,58 54,54" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M46,24 Q50,21 54,24" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />

          <defs>
            <linearGradient id="dumplingGrad" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="45%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>

        {/* Lower ribbon segment */}
        <div className="w-0.5 h-6 bg-amber-600/70" />

        {/* Swinging red tassel */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-3.5 h-1.5 bg-red-600 rounded-sm shadow-xs" />
          <div className="w-2.5 h-10 bg-red-500 rounded-b-md opacity-90 shadow-sm" />
        </div>
      </motion.div>


      {/* Ornament 2: Traditional Fragrant Lucky Sachet (五彩避邪香包) - Top Right Gutter */}
      <motion.div
        initial={{ opacity: 0, y: -45, rotate: 15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotate: [5, -5, 5] 
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
          opacity: { duration: 0.8 },
          y: { duration: 0.7, type: "spring", stiffness: 55 }
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute right-1 sm:right-4 xl:right-8 top-20 z-30 pointer-events-none flex flex-col items-center select-none scale-75 sm:scale-90 md:scale-100"
      >
        {/* Reddish gold hanging thread */}
        <div className="w-0.5 h-16 bg-red-500/50 shadow-xs" />

        {/* Jade bead ring */}
        <div className="w-4 h-4 rounded-full border border-emerald-500/40 bg-emerald-300 flex items-center justify-center shrink-0 -my-0.5 shadow-xs">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>

        {/* FREE-HANGING LUCKY EMBROIDERED SACHET SVG (No container box frame) */}
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 drop-shadow-xl select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle drop shadow */}
          <ellipse cx="50" cy="85" rx="25" ry="5" fill="black" fillOpacity="0.2" />
          
          {/* Traditional bell-like sachet vector */}
          <path d="M20,68 L50,12 L80,68 Q50,78 20,68 Z" fill="url(#sachetColorGrad)" />
          
          {/* Elegant floral centerpiece patterns */}
          <circle cx="50" cy="50" r="12" fill="#FBBF24" opacity="0.9" />
          <circle cx="50" cy="50" r="6" fill="#F59E0B" />
          <path d="M50,33 L50,67 M33,50 L67,50" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
          <circle cx="34" cy="38" r="3" fill="#FFFFFF" opacity="0.8" />
          <circle cx="66" cy="38" r="3" fill="#FFFFFF" opacity="0.8" />

          <defs>
            <linearGradient id="sachetColorGrad" x1="20" y1="12" x2="80" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hanging rope cord */}
        <div className="w-0.5 h-8 bg-amber-600/70" />

        {/* Triple classic ribbon tassels */}
        <div className="flex gap-1 shrink-0">
          <div className="w-1.5 h-8 bg-yellow-400 rounded-b-md opacity-90 shadow-2xs" />
          <div className="w-1.5 h-10 bg-red-500 rounded-b-md opacity-95 shadow-2xs" />
          <div className="w-1.5 h-8 bg-yellow-400 rounded-b-md opacity-90 shadow-2xs" />
        </div>
      </motion.div>


      {/* Ornament 3: Lucky Golden-Red Dragon Boat (招喜小龍舟) - Lower Left Space */}
      <motion.div
        initial={{ opacity: 0, y: -45, rotate: -12 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotate: [-5, 5, -5] 
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
          opacity: { duration: 0.8 },
          y: { duration: 0.7, type: "spring", stiffness: 55 }
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute left-2 sm:left-6 xl:left-14 top-80 z-30 pointer-events-none hidden md:flex flex-col items-center select-none"
      >
        {/* Soft blue string hanging down */}
        <div className="w-0.5 h-20 bg-sky-500/60 shadow-xs" />

        {/* Tiny wooden lantern disk */}
        <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-amber-300 shrink-0 shadow-3xs" />

        {/* FREE-HANGING EXQUISITE DRAGON BOAT SVG (No outer box frame) */}
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 drop-shadow-xl select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Splashy waves vector */}
          <path d="M10,80 C30,76 70,76 90,80" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          
          {/* Mini wooden hull structure */}
          <path d="M15,64 C35,76 65,76 85,64 L80,54 C65,60 35,60 20,54 Z" fill="#D97706" />
          <path d="M30,62 Q40,68 50,62 Q60,68 70,62" stroke="#FBBF24" strokeWidth="2.5" />
          
          {/* Dragon Head with Spark Eyes */}
          <path d="M12,62 C7,60 4,49 14,43 C19,40 24,47 27,52 Z" fill="#EF4444" />
          <path d="M13,38 Q15,24 21,27" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="45" r="3" fill="white" />
          <circle cx="11.5" cy="44" r="1.3" fill="#1E293B" />
          
          {/* Cute Oars */}
          <path d="M42,66 L35,82" stroke="#92400E" strokeWidth="2.5" />
          <path d="M58,66 L51,82" stroke="#92400E" strokeWidth="2.5" />
        </svg>

        {/* Lower thread */}
        <div className="w-0.5 h-10 bg-sky-500/60" />

        {/* Jade bead and single dangling silk tail */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-3 h-3 rounded-full bg-emerald-400 border border-white shrink-0" />
          <div className="w-2 h-10 bg-teal-500 rounded-b-md opacity-90 shadow-2xs" />
        </div>
      </motion.div>


      {/* Ornament 4: Aromatic Protective Mugwort Bunch (避邪香草串) - Lower Right Space */}
      <motion.div
        initial={{ opacity: 0, y: -45, rotate: 12 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotate: [4, -4, 4] 
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 4.2, ease: "easeInOut" },
          opacity: { duration: 0.8 },
          y: { duration: 0.7, type: "spring", stiffness: 55 }
        }}
        style={{ transformOrigin: "top center" }}
        className="absolute right-2 sm:right-6 xl:right-14 top-80 z-30 pointer-events-none hidden md:flex flex-col items-center select-none"
      >
        {/* Emerald green hanging rope thread */}
        <div className="w-0.5 h-20 bg-emerald-600/60 shadow-xs" />

        {/* Coral red stone sphere */}
        <div className="w-2.5 h-2.5 bg-rose-500 rounded-full shrink-0 shadow-3xs" />

        {/* FREE-HANGING MUGWORT BLESSING BLADES SVG (No outer box frame) */}
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 drop-shadow-xl select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elegantly woven emerald green mugwort blades & leaves */}
          <path d="M22,80 C15,50 16,25 35,10 C28,34 26,60 22,80 Z" fill="#047857" />
          <path d="M22,80 C26,56 42,30 60,18 C45,36 32,58 22,80 Z" fill="#065F46" opacity="0.85" />
          <path d="M38,82 L55,62 L52,84 Z" fill="#10B981" />
          
          {/* Golden safe-guardian knot tied around */}
          <circle cx="22" cy="74" r="3.5" fill="#FBBF24" />
          <path d="M12,68 Q22,74 32,68" stroke="#FBBF24" strokeWidth="2.5" />
        </svg>

        {/* Bottom thread string */}
        <div className="w-0.5 h-12 bg-[#047857]/60" />

        {/* Golden-Emerald double silk tassels */}
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2 h-10 bg-yellow-400 rounded-b-md opacity-90 shadow-2xs" />
          <div className="w-2 h-10 bg-emerald-600 rounded-b-md opacity-90 shadow-2xs" />
        </div>
      </motion.div>


      {/* =========================================================
          RESTORED CENTRAL ACCORDION GREEN ANNOUNCEMENT BOARD
          (中央綠色帶有公告文字的背景板子)
          ========================================================= */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active-festive"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="relative overflow-hidden w-full bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 md:p-8 shadow-md border border-emerald-600/40 font-sans"
            >
              {/* Traditional background decorations: Cloud pattern simulation and ambient lights */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-28 h-28 bg-teal-500/10 rounded-full blur-lg pointer-events-none" />

              {/* Secure Close/Minimize Button */}
              <button
                id="close-festive-btn"
                onClick={handleToggle}
                className="absolute top-3 right-3 p-1.5 rounded-xl bg-black/15 hover:bg-black/30 text-emerald-100 hover:text-white transition-all cursor-pointer shadow-xs"
                title="暫時隱藏此節慶佈告"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Banner Core Layout */}
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row w-full justify-center md:justify-start">
                  
                  {/* Left Side Festive Accent Badge Icon Block */}
                  <div className="relative shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15 select-none shadow-inner">
                    <Gift className="h-6 w-6 text-yellow-300 animate-pulse" />
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="h-4 w-4 fill-amber-300 text-amber-300" />
                    </div>
                  </div>

                  {/* Message and Announcement Headers */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/10 px-3 py-0.5 rounded-full text-xs font-bold text-emerald-100 tracking-wide uppercase">
                        <Volume2 className="h-3.5 w-3.5 text-yellow-300 inline" /> 端午佳節安全公告
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-white tracking-normal mt-1 flex items-center justify-center md:justify-start gap-1">
                      五月五過端陽 • 佳堂實業祝您端午安康！
                    </h3>
                    
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-normal">
                      迎端午接祥瑞，感謝您的參訪。本站為廠區專用自助入口，請參考下方功能卡片引導，快速辦理廠區業務。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="inactive-festive"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex justify-center"
            >
              <button
                id="open-festive-btn"
                onClick={handleToggle}
                className="cursor-pointer text-xs font-bold px-5 py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full hover:bg-emerald-100/80 hover:shadow-xs transition-all flex items-center gap-1.5 shadow-3xs"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                <span>開啟端午佳節特殊祝賀與公告板面</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
