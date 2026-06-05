"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  stepsCompleted: number;
  lessonsWatched: number;
}

export default function Header({ stepsCompleted, lessonsWatched }: HeaderProps) {
  const totalProgress = stepsCompleted + lessonsWatched;
  const totalItems = 5 + 20;
  const progressPercent = Math.round((totalProgress / totalItems) * 100);

  return (
    <header className="relative overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Курс активний
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
            <span className="text-white">TIKTOK </span>
            <span style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              НА МАКСИМУМ
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Твій особистий центр управління курсом
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Загальний прогрес</span>
            <span className="text-purple-400 font-semibold">{progressPercent}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Кроків: {stepsCompleted}/5</span>
            <span>Уроків: {lessonsWatched}/20</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
