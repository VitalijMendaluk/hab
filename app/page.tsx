"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Map, Video, BookOpen, Camera, MessageCircle, FolderOpen } from "lucide-react";
import Header from "@/components/Header";
import StepCard from "@/components/StepCard";
import { LINKS } from "@/config/links";

const EXTRA_MATERIALS = [
  { title: "Базові знання", link: LINKS.EXTRA_1_BASE },
  { title: "Аналіз та оформлення профілю", link: LINKS.EXTRA_2_PROFILE },
  { title: "Долаємо страх камери", link: LINKS.EXTRA_3_CAMERA },
  { title: "Контент-план", link: LINKS.EXTRA_4_CONTENT_PLAN },
  { title: "Монтаж відео", link: LINKS.EXTRA_5_EDITING },
  { title: "Публікація та аналітика", link: LINKS.EXTRA_6_ANALYTICS },
  { title: "Алгоритми TikTok", link: LINKS.EXTRA_7_ALGORITHM },
];

const BONUSES = [
  {
    stepLabel: "Бонус 1",
    icon: Map,
    title: "Контент-план на 30 днів",
    description: "Отримай персональний план під свою нішу",
    link: LINKS.BONUS_1_ROADMAP,
  },
  {
    stepLabel: "Бонус 2",
    icon: Video,
    title: "Генератор сценарію для твого відео",
    description: "Створи сценарій першого відео за 2 хвилини",
    link: LINKS.BONUS_2_SCENARIO,
  },
  {
    stepLabel: "Бонус 3",
    icon: BookOpen,
    title: "База знань",
    description: "Задай будь-яке питання — відповідь за 10 секунд",
    link: LINKS.BONUS_3_KNOWLEDGE_BASE,
  },
  {
    stepLabel: "Бонус 4",
    icon: Camera,
    title: "Долання страху камери",
    description: "Практичні техніки для впевненої роботи на камеру",
    link: LINKS.BONUS_4_CAMERA_FEAR,
  },
  {
    stepLabel: "Бонус 5",
    icon: MessageCircle,
    title: "Скрипт продажів",
    description: "Готові фрази для продажу в переписці",
    link: LINKS.BONUS_5_SALES_SCRIPT,
  },
];

export default function Home() {
  const [completedBonuses, setCompletedBonuses] = useState<boolean[]>(Array(5).fill(false));

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hub_bonuses");
      if (saved) setCompletedBonuses(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleBonus = (i: number) => {
    setCompletedBonuses((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      localStorage.setItem("hub_bonuses", JSON.stringify(next));
      return next;
    });
  };

  const bonusesCompleted = completedBonuses.filter(Boolean).length;

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <Header bonusesCompleted={bonusesCompleted} />

      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">

        {/* ── Bonuses ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #7C3AED, #EC4899)" }} />
            <div>
              <h2 className="text-2xl font-bold text-white">Бонуси</h2>
              <p className="text-gray-400 text-sm">Виконано {bonusesCompleted} з 5</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BONUSES.map((bonus, i) => (
              <StepCard
                key={i}
                index={i}
                stepLabel={bonus.stepLabel}
                icon={bonus.icon}
                title={bonus.title}
                description={bonus.description}
                link={bonus.link}
                completed={completedBonuses[i]}
                onToggle={() => toggleBonus(i)}
              />
            ))}
          </div>
        </section>

        {/* ── Extra Materials ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #7C3AED, #EC4899)" }} />
            <h2 className="text-2xl font-bold text-white">Додаткові матеріали</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXTRA_MATERIALS.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-center gap-4 rounded-2xl p-5 border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED22, #EC489922)" }}
                >
                  <FolderOpen className="w-5 h-5" style={{ color: "#9F67FF" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm leading-tight">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Google Диск</p>
                </div>
                <span className="shrink-0 text-purple-400 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p className="font-semibold text-gray-400">TikTok на максимум © 2024</p>
        <p className="mt-1">Розроблено з ❤️ для учнів курсу</p>
      </footer>
    </main>
  );
}
