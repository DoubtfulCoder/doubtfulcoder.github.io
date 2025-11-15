// Tech stack color mapping with predefined colors
const techColors: Record<string, string> = {
  // Frontend Frameworks
  React: "bg-blue-500",
  "Next.js": "bg-black",
  "Vue.js": "bg-green-500",
  Angular: "bg-red-600",
  Svelte: "bg-orange-500",
  
  // Languages
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-600",
  Python: "bg-yellow-500",
  Java: "bg-red-700",
  "C#": "bg-purple-700",
  Go: "bg-blue-400",
  Rust: "bg-orange-600",
  PHP: "bg-indigo-600",
  
  // Mobile
  "React Native": "bg-blue-500",
  Flutter: "bg-blue-400",
  Expo: "bg-gray-800",
  iOS: "bg-gray-600",
  Android: "bg-green-600",
  
  // Backend & APIs
  "Node.js": "bg-green-600",
  Express: "bg-gray-600",
  Django: "bg-green-700",
  FastAPI: "bg-teal-500",
  Laravel: "bg-red-500",
  Rails: "bg-red-600",
  
  // Databases
  PostgreSQL: "bg-blue-700",
  MongoDB: "bg-green-600",
  MySQL: "bg-blue-600",
  Redis: "bg-red-600",
  SQLite: "bg-blue-500",
  Supabase: "bg-green-500",
  Firebase: "bg-yellow-500",
  
  // Cloud & DevOps
  AWS: "bg-orange-500",
  Docker: "bg-blue-600",
  Kubernetes: "bg-blue-700",
  Vercel: "bg-black",
  Netlify: "bg-teal-600",
  Heroku: "bg-purple-600",
  
  // Styling
  Tailwind: "bg-cyan-500",
  "Tailwind CSS": "bg-cyan-500",
  "Material UI": "bg-blue-600",
  "Styled Components": "bg-pink-500",
  Sass: "bg-pink-600",
  CSS: "bg-blue-400",
  
  // State Management & Data
  Redux: "bg-purple-600",
  Zustand: "bg-orange-400",
  Prisma: "bg-indigo-600",
  GraphQL: "bg-pink-600",
  tRPC: "bg-blue-500",
  
  // AI/ML
  OpenAI: "bg-emerald-500",
  TensorFlow: "bg-orange-600",
  PyTorch: "bg-red-500",
  
  // Tools & Services
  Stripe: "bg-purple-600",
  Sanity: "bg-red-500",
  MDX: "bg-yellow-600",
  "Socket.io": "bg-gray-700",
  Grafana: "bg-orange-500",
  Elasticsearch: "bg-yellow-600",
  "Apache Kafka": "bg-gray-700",
  Figma: "bg-purple-500",
  Postman: "bg-orange-400",
  
  // APIs & Services
  "OpenWeatherMap": "bg-orange-500",
  "Spoonacular API": "bg-green-500",
  Leaflet: "bg-green-600",
  "Chart.js": "bg-purple-500",
  Recharts: "bg-purple-500",
};

// Default colors for unknown techs
const defaultColors = [
  "bg-gray-500",
  "bg-slate-500", 
  "bg-zinc-500",
  "bg-neutral-500",
  "bg-stone-500",
];

export const getTechColor = (techName: string): string => {
  // Return predefined color if exists
  if (techColors[techName]) {
    return techColors[techName];
  }
  
  // Generate consistent color for unknown tech using hash
  const hash = techName.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  const colorIndex = Math.abs(hash) % defaultColors.length;
  return defaultColors[colorIndex];
};