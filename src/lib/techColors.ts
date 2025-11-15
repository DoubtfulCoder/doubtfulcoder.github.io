// Category-based tech color system
// All languages share one color. Other categories use one color per category.

type Category =
  | "Language"
  | "Web"
  | "Mobile"
  | "Data & AI"
  | "Cloud"
  | "Dev Tools"
  | "Default";

// Tailwind background colors per category (update here to tweak palette)
const categoryColors: Record<Category, string> = {
  Language: "bg-amber-600",
  Web: "bg-blue-600",
  Mobile: "bg-emerald-600",
  "Data & AI": "bg-violet-600",
  Cloud: "bg-sky-600",
  "Dev Tools": "bg-slate-600",
  Default: "bg-zinc-600",
};

// Normalize a tech label for matching (case-insensitive, trim, collapse dots)
const norm = (s: string) => s.trim().toLowerCase();

// Languages: one color across all
const languages = new Set<string>([
  // Core languages spotted across the repo
  "javascript",
  "typescript",
  "python",
  "java",
  "kotlin",
  "sql",
  "html",
  "css",
  // A few common extras
  "c#",
  "go",
  "rust",
  "php",
]);

// Map known technologies to categories (normalized keys)
const techToCategory: Record<string, Category> = {
  // Web (frontend, backend, styling, web tooling)
  "react": "Web",
  "react.js": "Web",
  "reactjs": "Web",
  "express": "Web",
  "node.js": "Web",
  "nodejs": "Web",
  "html": "Web",
  "css": "Web",
  "firebase": "Web",
  "flask": "Web",
  "gatsby": "Web",
  "gatsby.js": "Web",
  "bootstrap": "Web",
  "tailwind": "Web",
  "tailwind css": "Web",
  "spring boot": "Web",
  "java spring boot": "Web",
  "redux": "Web",
  "graphql": "Web",
  "html canvas": "Web",

  // Mobile
  "android studio": "Mobile",
  "react native": "Mobile",
  "jetpack compose": "Mobile",
  "hilt": "Mobile",
  "tensorflow lite": "Mobile", // appears in a mobile app context

  // Data & AI
  "machine learning": "Data & AI",
  "tensorflow": "Data & AI",
  "pytorch": "Data & AI",
  "numpy": "Data & AI",
  "numPy": "Data & AI", // safeguard (will be normalized anyway)
  "pandas": "Data & AI",
  "scikit-learn": "Data & AI",
  "scikit learn": "Data & AI",
  "nlp": "Data & AI",
  "llms": "Data & AI",
  "matplotlib": "Data & AI",
  "seaborn": "Data & AI",
  "huggingface": "Data & AI",
  "hugging face": "Data & AI",
  "opencv": "Data & AI",
  "ai": "Data & AI",
  "transformers": "Data & AI",
  "bert": "Data & AI",
  "layoutlm": "Data & AI",
  "document ai": "Data & AI",
  "gemini": "Data & AI",

  // Cloud
  "google cloud": "Cloud",
  "gcp": "Cloud",
  "aws": "Cloud",
  "ecs fargate": "Cloud",
  "fargate": "Cloud",
  "lambda": "Cloud",
  "bigquery": "Cloud",

  // Dev Tools (platforms, infra, dbs, tooling)
  "git": "Dev Tools",
  "linux": "Dev Tools",
  "docker": "Dev Tools",
  "postgresql": "Dev Tools",
  "postgres": "Dev Tools",
  "jira": "Dev Tools",
  "sentry": "Dev Tools",
};

// Determine the category for a given tech name
export const getTechCategory = (techName: string): Category => {
  const key = norm(techName);

  // Languages take precedence regardless of other mappings
  if (languages.has(key)) return "Language";

  // TensorFlow Lite: treat specifically as Data & AI if not used in Mobile list
  if (key === "tensorflow lite") return "Data & AI";

  return techToCategory[key] ?? "Default";
};

// Public API used by components: returns a Tailwind background color class
export const getTechColor = (techName: string): string => {
  const category = getTechCategory(techName);
  return categoryColors[category] ?? categoryColors.Default;
};