import React, { useState } from "react";
import { Sparkles, X, Gift, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Speech bubble quotes for touch feedback
const JELLY_QUOTES_A = [
  "咕嚕咕嚕... 🫧",
  "好癢喔！別摸我嘛~",
  "捏捏波光水母，整天都順心！",
  "歡迎來到佳堂海底水世界！"
];

const JELLY_QUOTES_B = [
  "呼姆呼姆... 🪼",
  "我是發亮的小水母～",
  "海中漂浮，怡然自得！",
  "點我一下，送您一串泡泡！"
];

const TURTLE_QUOTES_A = [
  "慢工出細活，祝您事業穩健！🐢",
  "海龜出沒，大吉大利！",
  "平安出入，行車平安哦！",
  "祥瑞到訪！佳堂歡迎您！"
];

const TURTLE_QUOTES_B = [
  "慢慢游，總會到達終點的 🐢",
  "佳堂實業祝您平安順遂！",
  "海底風景真美麗，您說是不是？",
  "安全第一，廠區步行請小心！"
];

const STARFISH_QUOTES_A = [
  "你今天也是最閃亮的一顆星！✨",
  "啾咪~ 給你滿滿的正能量！",
  "海星報喜，萬事如意！",
  "今天心情也是亮晶晶的！"
];

const STARFISH_QUOTES_B = [
  "粉紅五角海星參上！💎",
  "快樂其實很簡單～",
  "為您點亮幸運之星！⭐",
  "天天開心，心想事成！"
];

const FISH_QUOTES_A = [
  "魚躍龍門，業務發發發！🐠",
  "游啊游~ 幸福跟著你走！",
  "財源廣進，水到渠成！",
  "歡迎光臨佳堂實業！"
];

const FISH_QUOTES_B = [
  "咻一下～游過來打招呼！🐡",
  "今天也是活力滿滿的一天！",
  "產品優良，服務至上！",
  "祝您今天順心愉快！"
];

interface Creature {
  id: string;
  type: "jelly" | "turtle" | "star" | "fish";
  label: string;
  className: string;
  quotes: string[];
  durationX: number;
  durationY: number;
  durationRotate: number;
  delay: number;
  scaleClass: string;
  renderSVG: (id: string, clicks: number) => React.ReactNode;
}

export default function FestiveWidget() {
  const [isActive, setIsActive] = useState(true);
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [speech, setSpeech] = useState<Record<string, string>>({});

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const triggerCreature = (id: string, quotes: string[]) => {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeech((prev) => ({ ...prev, [id]: randomQuote }));
    setTimeout(() => {
      setSpeech((prev) => ({ ...prev, [id]: "" }));
    }, 3000);
  };

  // 8 diverse and lovely free-floating creatures list (increased quantity & no hanging lines)
  const creatures: Creature[] = [
    {
      id: "jelly-a",
      type: "jelly",
      label: "粉嫩小水母",
      className: "absolute left-2 sm:left-4 xl:left-8 top-32 z-30",
      quotes: JELLY_QUOTES_A,
      durationX: 5.5,
      durationY: 4.0,
      durationRotate: 4.8,
      delay: 0,
      scaleClass: "scale-90 sm:scale-100",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 110" className="w-16 h-16 drop-shadow-lg">
          <path d="M15,55 C15,22 85,22 85,55 C85,60 72,64 50,64 C28,64 15,60 15,55 Z" fill="url(#jellyA)" />
          <ellipse cx="50" cy="40" rx="16" ry="10" fill="#FFF" opacity="0.45" className="animate-pulse" />
          <circle cx="36" cy="47" r="5" fill="#1E293B" />
          <circle cx="34" cy="45" r="1.8" fill="#FFF" />
          <circle cx="64" cy="47" r="5" fill="#1E293B" />
          <circle cx="62" cy="45" r="1.8" fill="#FFF" />
          <circle cx="28" cy="51" r="5" fill="#FDA4AF" opacity="0.9" />
          <circle cx="72" cy="51" r="5" fill="#FDA4AF" opacity="0.9" />
          <path d="M46,50 Q50,54 54,50" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M15,55 Q25,62 35,55 Q45,62 55,55 Q65,62 75,55 Q85,62 85,55" stroke="#EC4899" strokeWidth="2.5" fill="none" />
          <path d="M25,58 C20,75 35,90 28,105" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M40,59 C45,80 35,92 45,108" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M60,59 C55,80 65,92 55,108" stroke="#34D399" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M75,58 C80,75 65,90 72,105" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="jellyA" x1="50" y1="20" x2="50" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="70%" stopColor="#F472B6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "jelly-b",
      type: "jelly",
      label: "幻藍晶瑩水母",
      className: "absolute right-2 sm:right-4 xl:right-10 top-[450px] z-30",
      quotes: JELLY_QUOTES_B,
      durationX: 6.2,
      durationY: 4.8,
      durationRotate: 5.5,
      delay: 0.4,
      scaleClass: "scale-85 sm:scale-95",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 110" className="w-14 h-14 drop-shadow-md">
          <path d="M15,55 C15,22 85,22 85,55 C85,60 72,64 50,64 C28,64 15,60 15,55 Z" fill="url(#jellyB)" />
          <ellipse cx="50" cy="40" rx="14" ry="8" fill="#FFF" opacity="0.5" className="animate-pulse" />
          <circle cx="38" cy="48" r="4.5" fill="#1E293B" />
          <circle cx="62" cy="48" r="4.5" fill="#1E293B" />
          <circle cx="30" cy="52" r="4" fill="#67E8F9" opacity="0.85" />
          <circle cx="70" cy="52" r="4" fill="#67E8F9" opacity="0.85" />
          <path d="M47,52 Q50,55 53,52" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M15,55 Q50,62 85,55" stroke="#22D3EE" strokeWidth="2" fill="none" />
          <path d="M30,59 C25,75 40,88 35,102" stroke="#67E8F9" strokeWidth="2.5" fill="none" />
          <path d="M50,59 C45,78 55,94 48,106" stroke="#A7F3D0" strokeWidth="2.5" fill="none" />
          <path d="M70,59 C65,75 60,90 65,102" stroke="#F472B6" strokeWidth="2.5" fill="none" />
          <defs>
            <linearGradient id="jellyB" x1="50" y1="20" x2="50" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F472B6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "turtle-a",
      type: "turtle",
      label: "祥瑞金背海龜",
      className: "absolute right-2 sm:right-6 xl:right-10 top-28 z-30",
      quotes: TURTLE_QUOTES_A,
      durationX: 6.8,
      durationY: 4.4,
      durationRotate: 5.0,
      delay: 0.2,
      scaleClass: "scale-90 sm:scale-100",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-lg">
          <ellipse cx="50" cy="50" rx="35" ry="28" fill="#0D9488" stroke="#115E59" strokeWidth="3" />
          <path d="M50,22 L62,35 L62,65 L50,78 L38,65 L38,35 Z" fill="#2DD4BF" opacity="0.85" />
          <path d="M50,22 L50,78 M38,35 L62,35 M38,65 L62,65" stroke="#115E59" strokeWidth="2" />
          <path d="M22,35 C5,20 10,48 20,45" fill="#2DD4BF" stroke="#115E59" strokeWidth="2" />
          <path d="M78,35 C95,20 90,48 80,45" fill="#2DD4BF" stroke="#115E59" strokeWidth="2" />
          <path d="M28,68 C15,75 22,88 28,82" fill="#2DD4BF" stroke="#115E59" strokeWidth="1.5" />
          <path d="M72,68 C85,75 78,88 72,82" fill="#2DD4BF" stroke="#115E59" strokeWidth="1.5" />
          <path d="M50,78 L50,88 L46,84 Z" fill="#2DD4BF" />
          <circle cx="50" cy="20" r="13" fill="#2DD4BF" stroke="#115E59" strokeWidth="2.5" />
          <circle cx="44" cy="17" r="2.5" fill="#1E293B" />
          <circle cx="56" cy="17" r="2.5" fill="#1E293B" />
          <circle cx="43" cy="16" r="0.8" fill="white" />
          <circle cx="55" cy="16" r="0.8" fill="white" />
          <circle cx="39" cy="22" r="2.5" fill="#FB7185" opacity="0.8" />
          <circle cx="61" cy="22" r="2.5" fill="#FB7185" opacity="0.8" />
          <path d="M47,23 Q50,26 53,23" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      id: "turtle-b",
      type: "turtle",
      label: "幸運小青龜",
      className: "absolute left-3 sm:left-6 xl:left-12 top-[680px] z-30",
      quotes: TURTLE_QUOTES_B,
      durationX: 7.5,
      durationY: 5.0,
      durationRotate: 5.8,
      delay: 0.6,
      scaleClass: "scale-85 sm:scale-95",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-md">
          <ellipse cx="50" cy="50" rx="34" ry="27" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
          <path d="M50,24 L60,36 L60,64 L50,76 L40,64 L40,36 Z" fill="#34D399" opacity="0.8" />
          <path d="M24,36 C8,22 12,47 21,44" fill="#34D399" stroke="#047857" strokeWidth="1.8" />
          <path d="M76,36 C92,22 88,47 79,44" fill="#34D399" stroke="#047857" strokeWidth="1.8" />
          <circle cx="50" cy="21" r="12" fill="#34D399" stroke="#047857" strokeWidth="2" />
          <circle cx="45" cy="18" r="2.2" fill="#1E293B" />
          <circle cx="55" cy="18" r="2.2" fill="#1E293B" />
          <circle cx="41" cy="22" r="2" fill="#F43F5E" opacity="0.75" />
          <circle cx="59" cy="22" r="2" fill="#F43F5E" opacity="0.75" />
          <path d="M47,23 Q50,25 53,23" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      id: "star-a",
      type: "star",
      label: "暖金小星曼",
      className: "absolute left-2 sm:left-4 xl:left-10 top-[260px] sm:top-[300px] z-30",
      quotes: STARFISH_QUOTES_A,
      durationX: 5.8,
      durationY: 4.2,
      durationRotate: 5.2,
      delay: 0.1,
      scaleClass: "scale-90 sm:scale-100",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-md">
          <path
            d="M50,5 Q60,35 90,40 Q62,55 70,88 Q50,70 30,88 Q38,55 10,40 Q40,35 50,5 Z"
            fill="url(#starA)"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="25" r="2" fill="#FFF" opacity="0.75" />
          <circle cx="50" cy="65" r="2" fill="#FFF" opacity="0.75" />
          <circle cx="41" cy="45" r="5" fill="#1E293B" />
          <circle cx="39" cy="43" r="1.8" fill="white" />
          <circle cx="59" cy="45" r="5" fill="#1E293B" />
          <circle cx="57" cy="43" r="1.8" fill="white" />
          <circle cx="34" cy="50" r="4.5" fill="#FB7185" opacity="0.9" />
          <circle cx="66" cy="50" r="4.5" fill="#FB7185" opacity="0.9" />
          <path d="M47,50 Q50,54 53,50" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="starA" x1="50" y1="5" x2="50" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="60%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "star-b",
      type: "star",
      label: "蜜糖粉紅星",
      className: "absolute right-3 sm:right-6 xl:right-14 top-[640px] z-30",
      quotes: STARFISH_QUOTES_B,
      durationX: 6.5,
      durationY: 4.6,
      durationRotate: 6.0,
      delay: 0.5,
      scaleClass: "scale-85 sm:scale-95",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-13 h-13 drop-shadow-md">
          <path
            d="M50,5 Q60,35 90,40 Q62,55 70,88 Q50,70 30,88 Q38,55 10,40 Q40,35 50,5 Z"
            fill="url(#starB)"
            stroke="#BE185D"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="41" cy="46" r="4.5" fill="#1E293B" />
          <circle cx="59" cy="46" r="4.5" fill="#1E293B" />
          <circle cx="34" cy="51" r="4" fill="#FDA4AF" opacity="0.85" />
          <circle cx="66" cy="51" r="4" fill="#FDA4AF" opacity="0.85" />
          <path d="M48,51 Q50,54 52,51" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="starB" x1="50" y1="5" x2="50" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "fish-a",
      type: "fish",
      label: "活力尼莫",
      className: "absolute right-3 sm:right-5 xl:right-10 top-[280px] sm:top-[320px] z-30",
      quotes: FISH_QUOTES_A,
      durationX: 6.0,
      durationY: 4.2,
      durationRotate: 5.0,
      delay: 0.3,
      scaleClass: "scale-90 sm:scale-100",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-lg">
          <path d="M72,50 C88,32 94,68 72,50 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
          <path d="M75,50 C84,38 88,62 75,50 Z" fill="#FFF" />
          <ellipse cx="44" cy="50" rx="28" ry="22" fill="#FB923C" stroke="#EA580C" strokeWidth="2.5" />
          <path d="M38,29 C34,42 34,58 38,71 L45,70 C41,58 41,42 45,30 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
          <path d="M56,31 C52,42 52,58 56,69 L61,67 C57,58 57,42 61,33 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="26" cy="45" r="6" fill="#1E293B" />
          <circle cx="24" cy="43" r="2.2" fill="#FFFFFF" />
          <circle cx="20" cy="53" r="4" fill="#FDA4AF" opacity="0.85" />
          <path d="M12,50 Q16,53 14,58 Q11,54 12,50" fill="#EA580C" />
          <path d="M42,54 C46,62 38,68 40,56 Z" fill="#FFF" stroke="#1E293B" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: "fish-b",
      type: "fish",
      label: "金黃熱帶魚",
      className: "absolute left-4 sm:left-6 xl:left-14 top-[490px] z-30",
      quotes: FISH_QUOTES_B,
      durationX: 7.0,
      durationY: 4.8,
      durationRotate: 5.4,
      delay: 0.7,
      scaleClass: "scale-85 sm:scale-95",
      renderSVG: (id, clickCount) => (
        <svg viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-md">
          <path d="M70,50 C85,35 90,65 70,50 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="44" cy="50" rx="26" ry="20" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          <path d="M38,32 C34,44 34,56 38,68 L43,67 C40,56 40,44 43,33 Z" fill="#FFFFFF" stroke="#B45309" strokeWidth="1" />
          <circle cx="28" cy="46" r="5" fill="#1E293B" />
          <circle cx="26" cy="44" r="1.8" fill="#FFFFFF" />
          <circle cx="21" cy="52" r="3" fill="#FDA4AF" opacity="0.8" />
          <path d="M14,50 Q17,52 16,56 Z" fill="#D97706" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* =========================================================
          8 FLOATING INTERACTIVE OCEAN ANIMALS (悠游游水生物，自然飄浮)
          Floating without lines, highly responsive to click/touch with bubble speak
          ========================================================= */}
      {creatures.map((item) => {
        const isSpeaking = !!speech[item.id];
        const clickCount = clicks[item.id] || 0;

        return (
          <motion.div
            key={item.id}
            drag
            dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              // Gentle float horizontal drift (悠游)
              x: [0, 8, -8, 0],
              // Gentle float vertical drift (飄浮)
              y: [0, -12, 10, 0],
              // Tiny rotational tilt sway
              rotate: [-5, 5, -5]
            }}
            transition={{
              x: { repeat: Infinity, duration: item.durationX, ease: "easeInOut", delay: item.delay },
              y: { repeat: Infinity, duration: item.durationY, ease: "easeInOut", delay: item.delay + 0.2 },
              rotate: { repeat: Infinity, duration: item.durationRotate, ease: "easeInOut" },
              opacity: { duration: 0.6 }
            }}
            onClick={() => triggerCreature(item.id, item.quotes)}
            className={`${item.className} ${item.scaleClass} select-none cursor-pointer`}
          >
            <div className="relative flex flex-col items-center">
              
              {/* Dynamic cute speech bubble */}
              <AnimatePresence>
                {isSpeaking && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: -16 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="absolute bottom-full mb-2 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-cyan-400/80 px-4 py-2.5 rounded-2xl text-xs font-bold text-teal-900 shadow-lg whitespace-nowrap z-40 select-none text-center pointer-events-none"
                  >
                    {speech[item.id]}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-cyan-50 border-r-2 border-b-2 border-cyan-400/80 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bouncy creature animation wrapper on hover/tap */}
              <motion.div
                animate={{ scale: clickCount % 2 === 0 ? 1 : 1.15 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="flex items-center justify-center"
              >
                {item.renderSVG(item.id, clickCount)}
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* =========================================================
          AQUATIC-GREEN CENTRAL ANNOUNCEMENT BOARD
          ========================================================= */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active-festive"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="relative overflow-hidden w-full bg-gradient-to-r from-[#0F766E] via-[#0D9488] to-[#14B8A6] text-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#2DD4BF]/40 font-sans"
            >
              {/* Traditional background decorations: Cloud-water waves patterns and bubble particle blurs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none animate-pulse" />
              <div className="absolute bottom-0 left-1/4 w-28 h-28 bg-[#2DD4BF]/15 rounded-full blur-lg pointer-events-none animate-bounce" style={{ animationDuration: "8s" }} />

              {/* Decorative Seaweed SVGs in background */}
              <svg className="absolute bottom-0 right-10 w-24 h-24 text-teal-300/10 pointer-events-none" viewBox="0 0 100 100">
                <path d="M30,100 Q40,60 20,20 Q10,60 30,100" fill="currentColor" />
                <path d="M60,100 Q50,50 70,10 V100" fill="currentColor" />
              </svg>

              {/* Secure Close/Minimize Button */}
              <button
                id="close-festive-btn"
                onClick={handleToggle}
                className="absolute top-3 right-3 p-1.5 rounded-xl bg-black/15 hover:bg-black/30 text-teal-100 hover:text-white transition-all cursor-pointer shadow-xs"
                title="暫時隱藏此節慶佈告"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Banner Core Layout */}
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row w-full justify-center md:justify-start">
                  
                  {/* Left Side Organic Sea Badge Icon Block */}
                  <div className="relative shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15 select-none shadow-inner">
                    <Gift className="h-6 w-6 text-yellow-300 animate-pulse" />
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="h-4 w-4 fill-amber-300 text-amber-300" />
                    </div>
                  </div>

                  {/* Message and Announcement Headers */}
                  <div className="space-y-1.5 z-10">
                    <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/10 px-3 py-0.5 rounded-full text-xs font-bold text-teal-50 tracking-wide uppercase">
                        <Volume2 className="h-3.5 w-3.5 text-yellow-300 inline" /> 廠區安全與佳節公告
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-white tracking-normal mt-1 flex items-center justify-center md:justify-start gap-1">
                      歡迎探訪海底水世界 • 佳堂實業祝您事事順心！
                    </h3>
                    
                    <p className="text-xs md:text-sm text-teal-50 leading-relaxed font-normal">
                      歡迎光臨佳堂。本站為廠區專用自助入口，您可以點選周圍浮動悠游的海底可愛小生物進行觸碰互動，並參考下方功能卡片指引。
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
                className="cursor-pointer text-xs font-bold px-5 py-2.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-full hover:bg-teal-100/80 hover:shadow-xs transition-all flex items-center gap-1.5 shadow-3xs"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                <span>開啟海底特殊主題與公告板面</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
