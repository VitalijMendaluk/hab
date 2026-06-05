# TikTok на максимум — Командний центр учня

## Як замінити посилання

Всі посилання зберігаються в одному файлі: `config/links.ts`

Відкрий файл і заміни значення:
```ts
STEP_1_ROADMAP: "https://твоє-посилання.com",
STEP_5_SALES_SCRIPTS: "https://...",
GOOGLE_DRIVE: "https://drive.google.com/...",
LESSON_1: "https://...",
// і так далі
```

## Деплой на Vercel

1. Встанови залежності:
```bash
npm install
```

2. Перевір локально:
```bash
npm run dev
```

3. Задеплой через Vercel CLI:
```bash
npx vercel
```

Або:
- Запушь репозиторій на GitHub
- Зайди на [vercel.com](https://vercel.com) → Import Project
- Вибери репо → Deploy

## Структура проекту

```
├── app/
│   ├── layout.tsx       # Мета-теги, шрифти
│   ├── page.tsx         # Головна сторінка
│   └── globals.css      # Глобальні стилі
├── components/
│   ├── Header.tsx       # Хедер з прогрес-баром
│   ├── StepCard.tsx     # Картки 5 кроків
│   └── LessonCard.tsx   # Картки уроків
├── config/
│   └── links.ts         # ← ВСІ ПОСИЛАННЯ ТУТ
└── README.md
```

## Технології

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (анімації)
- Lucide React (іконки)
- localStorage (збереження прогресу)
