import React, { useState, useEffect } from "react";
import { Clock, Calendar, ShieldCheck } from "lucide-react";

export default function ClockWidget() {
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
    if (hour < 5) return "清晨平安";
    if (hour < 11) return "早安，歡迎光臨";
    if (hour < 13) return "午安，歡迎光臨";
    if (hour < 18) return "下午好，歡迎光臨";
    return "晚安，歡迎光臨";
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-xs gap-4 w-full">
      {/* Left side: Welcome greetings */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200/50 shrink-0">
          <ShieldCheck className="h-5 w-5 text-emerald-600 animate-pulse-soft" />
        </div>
        <div>
          <div className="text-xs text-slate-400 font-medium tracking-wider uppercase">
            佳堂廠區安全入口
          </div>
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">
            {getGreeting(time)}
          </h2>
        </div>
      </div>

      {/* Right side: Current Clock with Mono-spacing for steady layout */}
      <div className="flex items-center gap-4 text-xs select-none bg-slate-50 border border-slate-150 rounded-xl px-4 py-2 w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-medium whitespace-nowrap">
            {formatDate(time)} ( {getWeekDay(time)} )
          </span>
        </div>
        
        {/* Separator line on desktop */}
        <div className="hidden md:block h-4 w-px bg-slate-200" />

        <div className="flex items-center gap-1.5 text-slate-600">
          <Clock className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-mono font-semibold tracking-wider tabular-nums text-slate-700">
            {formatTime(time)}
          </span>
        </div>
      </div>
    </div>
  );
}
