"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Map, Video, BookOpen, Camera, MessageCircle, FolderOpen } from "lucide-react";
import Header from "@/components/Header";
import StepCard from "@/components/StepCard";
import { LINKS } from "@/config/links";

const BONUSES = [
  {
    stepLabel: "Бонус 1",
    icon: Map,
    title: "Роадмап на 30 днів",
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
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #7C3AED, #EC4899)" }} />
              <h2 className="text-2xl font-bold text-white">Додаткові матеріали</h2>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 p-8"
              style={{ background: "linear-gradient(135deg, #7C3AED10, #EC489910)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #7C3AED, transparent)", transform: "translate(30%, -30%)" }} />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED30, #EC489930)" }}
                >
                  <FolderOpen className="w-8 h-8" style={{ color: "#9F67FF" }} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Додаткові матеріали</h3>
                  <p className="text-gray-400">Бонусні матеріали, шаблони та ресурси від наставника</p>
                </div>

                <a
                  href={LINKS.GOOGLE_DRIVE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                    boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <FolderOpen className="w-4 h-4" />
                  Відкрити Google Диск
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p className="font-semibold text-gray-400">TikTok на максимум © 2024</p>
        <p className="mt-1">Розроблено з ❤️ для учнів курсу</p>
      </footer>
    </main>
  );
}
