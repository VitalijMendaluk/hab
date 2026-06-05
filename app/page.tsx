"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Map, Video, Calendar, BookOpen, MessageCircle, FolderOpen } from "lucide-react";
import Header from "@/components/Header";
import StepCard from "@/components/StepCard";
import LessonCard from "@/components/LessonCard";
import { LINKS } from "@/config/links";

const STEPS = [
  {
    stepLabel: "Крок 1 — зараз",
    icon: Map,
    title: "Роадмап 30 днів",
    description: "Отримай персональний план під свою нішу",
    link: LINKS.STEP_1_ROADMAP,
  },
  {
    stepLabel: "Крок 2 — після роадмапу",
    icon: Video,
    title: "Генератор сценарію",
    description: "Створи сценарій першого відео за 2 хвилини",
    link: LINKS.STEP_2_SCENARIO,
  },
  {
    stepLabel: "Крок 3 — планування",
    icon: Calendar,
    title: "Контент-план з гачками",
    description: "30 днів постів — просто бери і знімай",
    link: LINKS.STEP_3_CONTENT_PLAN,
  },
  {
    stepLabel: "Крок 4 — завжди",
    icon: BookOpen,
    title: "База знань TikTok",
    description: "Задай будь-яке питання — відповідь за 10 секунд",
    link: LINKS.STEP_4_KNOWLEDGE_BASE,
  },
  {
    stepLabel: "Крок 5 — продажі",
    icon: MessageCircle,
    title: "Скрипти продажу",
    description: "Готові фрази для продажу в переписці",
    link: LINKS.STEP_5_SALES_SCRIPTS,
  },
];

const LESSONS = [
  { number: 1, title: "Упаковка профілю", link: LINKS.LESSON_1 },
  { number: 2, title: "Перше відео — з чого почати", link: LINKS.LESSON_2 },
  { number: 3, title: "Робота на камеру", link: LINKS.LESSON_3 },
  { number: 4, title: "Гачки які чіпляють", link: LINKS.LESSON_4 },
  { number: 5, title: "Хештеги та описи", link: LINKS.LESSON_5 },
  { number: 6, title: "Час публікації", link: LINKS.LESSON_6 },
  { number: 7, title: "Аналітика TikTok", link: LINKS.LESSON_7 },
  { number: 8, title: "Алгоритм TikTok", link: LINKS.LESSON_8 },
  { number: 9, title: "Типи контенту", link: LINKS.LESSON_9 },
  { number: 10, title: "Сторітелінг у відео", link: LINKS.LESSON_10 },
  { number: 11, title: "Тренди та звуки", link: LINKS.LESSON_11 },
  { number: 12, title: "Дуети та реакції", link: LINKS.LESSON_12 },
  { number: 13, title: "TikTok Live", link: LINKS.LESSON_13 },
  { number: 14, title: "Продажі через Direct", link: LINKS.LESSON_14 },
  { number: 15, title: "Побудова воронки", link: LINKS.LESSON_15 },
  { number: 16, title: "Робота з запереченнями", link: LINKS.LESSON_16 },
  { number: 17, title: "Масштабування", link: LINKS.LESSON_17 },
  { number: 18, title: "Делегування контенту", link: LINKS.LESSON_18 },
  { number: 19, title: "TikTok + Instagram", link: LINKS.LESSON_19 },
  { number: 20, title: "Системна робота", link: LINKS.LESSON_20 },
];

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(Array(5).fill(false));
  const [watchedLessons, setWatchedLessons] = useState<boolean[]>(Array(20).fill(false));

  useEffect(() => {
    try {
      const savedSteps = localStorage.getItem("hub_steps");
      const savedLessons = localStorage.getItem("hub_lessons");
      if (savedSteps) setCompletedSteps(JSON.parse(savedSteps));
      if (savedLessons) setWatchedLessons(JSON.parse(savedLessons));
    } catch {}
  }, []);

  const toggleStep = (i: number) => {
    setCompletedSteps((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      localStorage.setItem("hub_steps", JSON.stringify(next));
      return next;
    });
  };

  const toggleLesson = (i: number) => {
    setWatchedLessons((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      localStorage.setItem("hub_lessons", JSON.stringify(next));
      return next;
    });
  };

  const stepsCompleted = completedSteps.filter(Boolean).length;
  const lessonsWatched = watchedLessons.filter(Boolean).length;

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <Header stepsCompleted={stepsCompleted} lessonsWatched={lessonsWatched} />

      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">

        {/* ── Section 1: Steps ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #7C3AED, #EC4899)" }} />
            <div>
              <h2 className="text-2xl font-bold text-white">5 кроків до результату</h2>
              <p className="text-gray-400 text-sm">Виконано {stepsCompleted} з 5 кроків</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <StepCard
                key={i}
                index={i}
                stepLabel={step.stepLabel}
                icon={step.icon}
                title={step.title}
                description={step.description}
                link={step.link}
                completed={completedSteps[i]}
                onToggle={() => toggleStep(i)}
              />
            ))}
          </div>
        </section>

        {/* ── Section 2: Lessons ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #EC4899, #7C3AED)" }} />
              <div>
                <h2 className="text-2xl font-bold text-white">20 відеоуроків</h2>
                <p className="text-gray-400 text-sm">Переглянуто {lessonsWatched} з 20 уроків</p>
              </div>
            </div>

            {/* Mini progress */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #EC4899, #7C3AED)" }}
                  animate={{ width: `${(lessonsWatched / 20) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-pink-400 text-sm font-semibold">
                {Math.round((lessonsWatched / 20) * 100)}%
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LESSONS.map((lesson, i) => (
              <LessonCard
                key={i}
                index={i}
                number={lesson.number}
                title={lesson.title}
                link={lesson.link}
                watched={watchedLessons[i]}
                onToggle={() => toggleLesson(i)}
              />
            ))}
          </div>
        </section>

        {/* ── Section 3: Extra Materials ── */}
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
              {/* Glow */}
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

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p className="font-semibold text-gray-400">TikTok на максимум © 2024</p>
        <p className="mt-1">Розроблено з ❤️ для учнів курсу</p>
      </footer>
    </main>
  );
}
