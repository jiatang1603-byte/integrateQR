import React, { useState, useEffect } from "react";
import { Clock, Calendar, ShieldCheck, Sparkles, QrCode, Star } from "lucide-react";

interface ClockWidgetProps {
  showShareQr: boolean;
  onToggleShareQr: () => void;
}

export default function ClockWidget({ showShareQr, onToggleShareQr }: ClockWidgetProps) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("zh-TW", options);
  };

  const getWeekDay = (date: Date) => {
    const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return days[date.getDay()];
  };

  const getGreeting = (date: Date) => {
    const hour = date.getHours();
    if (hour < 5) return "清晨平安，歡迎蒞臨佳堂";
    if (hour < 11) return "早安，歡迎蒞臨佳堂";
    if (hour < 13) return "午安，歡迎蒞臨佳堂";
    if (hour < 18) return "下午好，歡迎蒞臨佳堂";
    return "晚安，歡迎蒞臨佳堂";
  };

  return (
    <div className="relative overflow-hidden bg-[#132238]/90 backdrop-blur-md border border-[#E2CA78]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full text-slate-100 flex flex-col gap-4">
      {/* Background Starlight Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E2CA78]/60 to-transparent" />
        <Star className="w-16 h-16 text-[#E2CA78]/10 fill-[#E2CA78]/5 absolute -top-2 -right-2 animate-pulse" />
        <Sparkles className="w-4 h-4 text-[#E2CA78]/30 absolute top-4 right-10 animate-spin" style={{ animationDuration: "12s" }} />
      </div>

      {/* Top Row: Welcome Message & Share QR Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#20334E] relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-[#E2CA78]/15 flex items-center justify-center text-[#E5D28A] border border-[#E2CA78]/30 shrink-0 shadow-inner">
            <ShieldCheck className="h-5.5 w-5.5 text-[#E5D28A]" />
          </div>
          <div>
            <div className="text-[11px] text-[#E5D28A] font-semibold tracking-wider uppercase flex items-center gap-1.5 opacity-90">
              <Sparkles className="h-3 w-3 text-[#E5D28A]" />
              <span>佳堂廠區安全與接待系統</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[#F8FAFC] tracking-tight mt-0.5">
              歡迎光臨佳堂廠區 • 請選擇下方表單登記
            </h2>
          </div>
        </div>

        {/* Share QR Code Button */}
        <button
          id="share-qr-btn"
          onClick={onToggleShareQr}
          className={`cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all duration-300 hover:scale-102 active:scale-98 shrink-0 backdrop-blur-md shadow-xs ${
            showShareQr 
            ? "bg-[#E2CA78] border-[#E2CA78] text-slate-950 font-bold" 
            : "bg-[#1A2C46] border-[#E2CA78]/40 text-[#E5D28A] hover:bg-[#203656] hover:border-[#E2CA78]/70"
          }`}
        >
          <QrCode className="h-4 w-4 text-[#E5D28A]" />
          <span>{showShareQr ? "收起條碼" : "分享 QR Code"}</span>
        </button>
      </div>

      {/* Bottom Row: Greeting + Realtime Date & Clock */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs relative z-10">
        {/* Dynamic Time Greeting */}
        <div className="flex items-center gap-2 text-slate-300 w-full md:w-auto">
          <span className="w-2 h-2 rounded-full bg-[#E2CA78] animate-pulse shrink-0" />
          <span className="font-semibold text-slate-200">
            {getGreeting(time)}
          </span>
        </div>

        {/* Clock & Date Badge */}
        <div className="flex items-center gap-3 select-none bg-[#0B1524]/80 border border-[#20334E] rounded-xl px-3.5 py-2 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2 text-slate-300">
            <Calendar className="h-3.5 w-3.5 text-[#E5D28A]" />
            <span className="font-medium whitespace-nowrap text-slate-200 text-[11px] sm:text-xs">
              {formatDate(time)} ( {getWeekDay(time)} )
            </span>
          </div>
          
          <div className="h-3.5 w-px bg-[#253956]" />

          <div className="flex items-center gap-1.5 text-[#E5D28A]">
            <Clock className="h-3.5 w-3.5 text-[#E5D28A]" />
            <span className="font-mono font-bold tracking-widest tabular-nums text-[#F5E8B8] text-xs sm:text-sm">
              {formatTime(time)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
