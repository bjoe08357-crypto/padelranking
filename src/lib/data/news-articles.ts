/**
 * News Articles Data
 * 
 * This file contains the news articles data that will be used across the application.
 * In the future, this will be replaced with data from a CMS/database.
 * 
 * For CMS integration:
 * - Replace this static data with API calls to your CMS (e.g., Strapi, Contentful, Sanity)
 * - Or replace with database queries using Prisma ORM
 * - Keep the same TypeScript interface for consistency
 */

export interface NewsArticle {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  readTime: string;
  category: string;
  author?: string;
  tags?: string[];
}

// Full articles with complete content
export const newsArticles: Record<string, NewsArticle> = {
  "national-padel-selection-2025-indonesias-road-to-the-world-asia-cup-doha": {
    id: "national-padel-selection-2025-indonesias-road-to-the-world-asia-cup-doha",
    title: "National Padel Selection 2025: Indonesia's Road to the World Asia Cup Doha",
    subtitle: "Hard Work and Spirit of Athletes Pave the Way to the Global Stage",
    excerpt: "Hard Work and Spirit of Athletes Pave the Way to the Global Stage. The 2025 Indonesian National Padel Selection is more than just a competition—it is a story of hard work, sacrifice, and big dreams preparing athletes for the World Asia Cup Doha 2025, scheduled for October 17–24.",
    imageUrl: "/news/national padel selection.webp",
    publishedAt: "2025-09-23",
    readTime: "5 min read",
    category: "National Team",
    content: `
      <p>The <strong>2025 Indonesian National Padel Selection</strong> is more than just a competition—it is a story of hard work, sacrifice, and big dreams. Every drop of sweat, unyielding spirit, and bond of brotherhood formed throughout the event is proof that padel in Indonesia continues to grow and move forward.</p>
      
      <p>Regardless of the outcome, every athlete competing at the National Selection is a vital part of Indonesia's journey to the <strong>World Asia Cup Doha 2025</strong>, scheduled for <strong>October 17–24</strong>. With the nation's support behind them, Indonesian athletes are ready to bring their spirit and determination to the world stage.</p>
      
      <p>The National Selection process has been rigorous, testing not only the physical abilities of the athletes but also their mental fortitude and strategic thinking. Each match has been a showcase of the incredible talent that exists within Indonesia's padel community.</p>
      
      <p>As we prepare to send our representatives to Doha, the entire nation stands united in support of these dedicated athletes who have worked tirelessly to reach this level of excellence.</p>
    `
  },
  "indonesian-women-padel-athletes-ready-world-asia-cup-doha-2025": {
    id: "indonesian-women-padel-athletes-ready-world-asia-cup-doha-2025",
    title: "Indonesian Women's Padel Athletes Ready to Shine at World Asia Cup Doha 2025",
    subtitle: "National Selection 2025 Marks a New Milestone Towards the Global Stage",
    excerpt: "National Selection 2025 Marks a New Milestone Towards the Global Stage. Indonesia's women's padel athletes have displayed remarkable dedication, serving as inspiration for the next generation to dream bigger.",
    imageUrl: "/news/indonesian women's padel.webp",
    publishedAt: "2025-09-23",
    readTime: "4 min read",
    category: "National Team",
    content: `
      <p>Indonesia's women's padel athletes have displayed remarkable dedication at the <strong>2025 National Selection</strong>, serving not only as a platform for preparation but also as an inspiration for the next generation to dream bigger. Every shot and every step on the court stands as proof of their strength and determination.</p>
      
      <p>This journey now paves the way to the <strong>World Asia Cup Doha 2025</strong>, set to take place on <strong>October 17–24</strong>. With pride and high hopes, the nation looks forward to seeing these athletes shine on the international stage, proving that Indonesian women are ready to compete with the best in the world.</p>
      
      <p>The women's team has shown exceptional skill and teamwork throughout the selection process, demonstrating the growing strength of women's padel in Indonesia. Their dedication to training and continuous improvement has been truly inspiring.</p>
      
      <p>As they prepare to represent Indonesia on the global stage, these athletes carry not just their own dreams, but the aspirations of countless young Indonesian women who see them as role models and pioneers in the sport.</p>
    `
  },
  "beatrice-gumulya-albina-k-womens-open-champions-bali": {
    id: "beatrice-gumulya-albina-k-womens-open-champions-bali",
    title: "Beatrice Gumulya & Albina K. Crowned Women's Open Champions at National Padel Circuit Grand Master Bali",
    subtitle: "Feity Lim & Jessy Rompies Secure Runner-Up",
    excerpt: "Feity Lim & Jessy Rompies Secure Runner-Up. The National Padel Circuit Grand Master Bali concluded with Beatrice Gumulya and Albina K. emerging as champions in the Women's Open Category.",
    imageUrl: "/news/beatrice gumulya.webp",
    publishedAt: "2025-09-16",
    readTime: "4 min read",
    category: "Results",
    content: `
      <p>The <strong>National Padel Circuit Grand Master Bali</strong> concluded with <strong>Beatrice Gumulya and Albina K.</strong> emerging as champions in the <strong>Women's Open Category</strong>. Their commanding performance and composure on court paved the way to a well-deserved title in this prestigious event.</p>
      
      <p>Meanwhile, <strong>Feity Lim and Jessy Rompies</strong> delivered a strong campaign to claim the <strong>Runner-Up</strong> position. The electrifying atmosphere in Bali, driven by passionate fans, made this series truly memorable and set the stage for even more thrilling competitions in the next host city.</p>
      
      <p>The final match was a display of high-level padel, with both teams showcasing exceptional technique and strategy. Beatrice and Albina's victory came after a hard-fought battle that kept spectators on the edge of their seats.</p>
      
      <p>This tournament marks another significant milestone in the development of women's padel in Indonesia, with the level of competition continuing to rise with each event.</p>
    `
  },
  "sunu-wahyu-tijati-eduard-altimires-mens-open-champions-bali-2025": {
    id: "sunu-wahyu-tijati-eduard-altimires-mens-open-champions-bali-2025",
    title: "Sunu Wahyu Tijati & Eduard Altimires Tos Crowned Men's Open Champions at National Padel Circuit Grand Master Bali 2025",
    subtitle: "Giorgio Soemarno & Pol Alsina Escala Secure Runner-Up After a Strong Run",
    excerpt: "Giorgio Soemarno & Pol Alsina Escala Secure Runner-Up After a Strong Run. Their consistency and well-executed strategy carried them to the top podium of this prestigious event.",
    imageUrl: "/news/champion20men.webp",
    publishedAt: "2025-09-16",
    readTime: "4 min read",
    category: "Results",
    content: `
      <p><strong>Sunu Wahyu Tijati and Eduard Altimires Tos</strong> emerged victorious at the <strong>National Padel Circuit Grand Master Bali 2025</strong>, claiming the <strong>Men's Open Championship</strong>. Their consistency and well-executed strategy carried them to the top podium of this prestigious event.</p>
      
      <p><strong>Giorgio Soemarno and Pol Alsina Escala</strong> secured the <strong>Runner-Up</strong> position after a strong run throughout the tournament. The competition was fierce, with both pairs demonstrating exceptional skill and sportsmanship.</p>
      
      <p>The championship match showcased the highest level of padel in Indonesia, with spectacular rallies and tactical brilliance from both teams. Sunu and Eduard's chemistry on court proved to be the deciding factor in several crucial moments.</p>
      
      <p>The success of the National Padel Circuit Grand Master in Bali continues to demonstrate the growing popularity and competitive level of padel across Indonesia, with more exciting tournaments planned for the coming months.</p>
    `
  }
};

// Get all articles as an array (for listing pages)
export const getAllArticles = (): NewsArticle[] => {
  return Object.values(newsArticles).sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
};

// Get a single article by ID
export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles[id];
};

// Get articles by category
export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return getAllArticles().filter(article => article.category === category);
};

// Get recent articles (limit)
export const getRecentArticles = (limit: number = 3): NewsArticle[] => {
  return getAllArticles().slice(0, limit);
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = getAllArticles().map(article => article.category);
  return Array.from(new Set(categories));
};

