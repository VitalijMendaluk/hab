"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";

interface LessonCardProps {
  index: number;
  number: number;
  title: string;
  link: string;
  watched: boolean;
  onToggle: () => void;
}

export default function LessonCard({
  index,
  number,
  title,
  link,
  watched,
  onToggle,
}: LessonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`relative flex items-center gap-4 rounded-xl p-4 border transition-all duration-300 ${
        watched
          ? "opacity-50 border-purple-500/30 bg-purple-500/5"
          : "border-white/10 bg-white/5 hover:border-purple-500/30 hover:bg-white/8"
      }`}
    >
      {/* Number */}
      <div
        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
        style={{
          background: watched
            ? "linear-gradient(135deg, #5B21B620, #9D174D20)"
            : "linear-gradient(135deg, #7C3AED20, #EC489920)",
          color: watched ? "#9F67FF" : "#9F67FF",
        }}
      >
        {number}
      </div>

      {/* Title */}
      <span className={`flex-1 font-medium text-sm ${watched ? "line-through text-gray-500" : "text-gray-200"}`}>
        {title}
      </span>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            boxShadow: "0 2px 10px rgba(124, 58, 237, 0.3)",
          }}
        >
          <Play className="w-3 h-3" />
          Дивитись
        </a>

        <button
          onClick={onToggle}
          className="transition-transform hover:scale-110 focus:outline-none"
          title={watched ? "Позначити як непереглянуте" : "Позначити як переглянуте"}
        >
          {watched ? (
            <CheckCircle2 className="w-5 h-5 text-purple-400" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-white/20 hover:border-purple-400 transition-colors" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
