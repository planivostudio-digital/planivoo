// Single source of truth for every Planivo product.
// To add a future product, add an object here — no markup changes required.

export const products = [
  {
    id: "daily-planner",
    name: "Daily Planner",
    shortDescription: "For your everyday life.",
    description:
      "A simple daily planning system designed to help you focus on what matters today.",
    status: "available",
    statusLabel: "Available · Free",
    badge: "FREE · START HERE",
    tone: "brass",
    ctaLabel: "Get Daily Planner — Free",
    forWho: "My Day",
    features: [
      "Plan your priorities",
      "Organize your day",
      "Focus on what matters",
      "Reflect and reset",
      "Simple and distraction-free",
    ],
  },
  {
    id: "ultimate-life-planner",
    name: "Ultimate Life Planner",
    shortDescription: "For goals, routines, priorities and the bigger picture.",
    description:
      "A complete system for mapping your goals, routines and priorities across every season of life.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    forWho: "My Life",
    features: ["Yearly & quarterly goals", "Weekly routines", "Life-area check-ins", "Priority mapping"],
  },
  {
    id: "student-os",
    name: "Student OS",
    shortDescription: "Your complete system for studying, assignments, exams and academic life.",
    description:
      "Your complete system for studying, assignments, exams and academic life.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    forWho: "My Studies",
    features: ["Assignment tracker", "Exam countdowns", "Study session planning", "Semester overview"],
  },
  {
    id: "health-fitness-planner",
    name: "Health & Fitness Planner",
    shortDescription: "Build routines, track progress and stay consistent.",
    description: "Build routines, track progress and stay consistent.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    forWho: "My Health",
    features: ["Workout logs", "Habit streaks", "Meal planning", "Weekly reflection"],
  },
  {
    id: "adhd-planner",
    name: "ADHD Planner",
    shortDescription:
      "A simple planning system designed around reducing overwhelm and making tasks easier to approach.",
    description:
      "A simple planning system designed around reducing overwhelm and making tasks easier to approach.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    forWho: "My Focus",
    features: ["Task breakdown", "Low-friction layouts", "Gentle time blocks", "Momentum tracking"],
  },
  {
    id: "goal-habit-planner",
    name: "Goal & Habit Planner",
    shortDescription: "Turn intentions into consistent, trackable habits.",
    description: "Turn intentions into consistent, trackable habits.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    features: ["Habit trackers", "Goal breakdowns", "Streak visualizations"],
  },
  {
    id: "finance-planner",
    name: "Finance Planner",
    shortDescription: "A calm system for budgeting and financial clarity.",
    description: "A calm system for budgeting and financial clarity.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    features: ["Monthly budgets", "Savings goals", "Expense reflection"],
  },
  {
    id: "study-planner",
    name: "Study Planner",
    shortDescription: "Focused planning for exams, revision and coursework.",
    description: "Focused planning for exams, revision and coursework.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    tone: "taupe",
    features: ["Revision schedules", "Subject tracking", "Focus sessions"],
  },
];

// Featured subset shown in the Ecosystem grid on the homepage.
export const featuredProductIds = [
  "daily-planner",
  "ultimate-life-planner",
  "student-os",
  "health-fitness-planner",
  "adhd-planner",
];

export const discoveryOptions = products
  .filter((p) => p.forWho)
  .map((p) => ({ id: p.id, label: p.forWho, product: p.name }));

export const journalArticles = [
  {
    id: "plan-your-day-effectively",
    title: "How to Plan Your Day Effectively",
    excerpt: "A simple framework for structuring your day around what actually matters.",
  },
  {
    id: "build-a-system-that-works",
    title: "How to Build a Planning System That Actually Works",
    excerpt: "Why most planning systems fail — and how to design one that sticks.",
  },
  {
    id: "digital-vs-paper",
    title: "Digital Planning vs. Paper Planning",
    excerpt: "The real tradeoffs, and how to choose the right medium for your habits.",
  },
  {
    id: "organize-your-life",
    title: "How to Organize Your Life",
    excerpt: "A calm, practical approach to bringing order to a busy life.",
  },
  {
    id: "simple-systems-for-focus",
    title: "Simple Systems for Better Focus",
    excerpt: "Small structural changes that reduce overwhelm and protect your attention.",
  },
];
