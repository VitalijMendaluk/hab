"use client";

import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface StepCardProps {
  index: number;
  stepLabel: string;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  completed: boolean;
  onToggle: () => void;
  price?: string;
}

export default function StepCard({
  index,
  stepLabel,
  icon: Icon,
  title,
  description,
  link,
  completed,
  onToggle,
  price,
}: StepCardProps) {
  const isPlaceholder = link === "PLACEHOLDER";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`relative flex flex-col rounded-2xl p-5 border transition-all duration-300 ${
        completed
          ? "opacity-60 border-purple-500/60 bg-purple-500/5"
          : "border-white/10 bg-white/5 hover:border-purple-500/40"
      }`}
    >
      {/* Top row: label + checkbox */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
          {stepLabel}
        </span>
        <button
          onClick={onToggle}
          className="transition-transform hover:scale-110 focus:outline-none"
          title={completed ? "Позначити як невиконане" : "Позначити як виконане"}
        >
          {completed ? (
            <CheckCircle2 className="w-6 h-6 text-purple-400" />
          ) : (
            <div className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-purple-400 transition-colors" />
          )}
        </button>
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "linear-gradient(135deg, #7C3AED22, #EC489922)" }}
      >
        <Icon className="w-6 h-6" style={{ color: "#9F67FF" }} />
      </div>

      {/* Title + description — flex-1 pushes bottom section down */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-base mb-1 leading-snug">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Price + button — always at bottom */}
      <div className="mt-5 space-y-3">
        {/* Price row — always rendered to keep alignment; hidden if no price */}
        <div className="h-6 flex items-center gap-2">
          {price && (
            <>
              <span className="text-gray-500 line-through text-sm font-medium">{price}</span>
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
              >
                Безкоштовно
              </span>
            </>
          )}
        </div>

        {/* Button */}
        {isPlaceholder ? (
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm cursor-not-allowed opacity-50"
            style={{ background: "linear-gradient(135deg, #3B3B3B, #555)" }}
          >
            Скоро →
          </span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: completed
                ? "linear-gradient(135deg, #5B21B6, #9D174D)"
                : "linear-gradient(135deg, #7C3AED, #EC4899)",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
            }}
          >
            Відкрити →
          </a>
        )}
      </div>

      {completed && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-purple-500/40" />
      )}
    </motion.div>
  );
}
