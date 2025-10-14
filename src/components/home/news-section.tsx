import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const featuredNews = {
  id: "pbpi-national-championship-2025",
  title: "PBPI National Championship 2025: Registration Now Open",
  excerpt: "Join Indonesia's premier padel tournament featuring the best players from across the archipelago. Registration closes March 15th.",
  imageUrl: "/news/pbpi-championship-2025.svg",
  publishedAt: "2025-01-15",
  readTime: "5 min read",
  category: "Tournament"
};

const newsItems = [
  {
    id: "new-ranking-system",
    title: "New Ranking System Implementation",
    excerpt: "PBPI introduces updated ranking algorithm for fairer player evaluation",
    publishedAt: "2025-01-12",
    readTime: "3 min read",
    category: "Announcement"
  },
  {
    id: "jakarta-open-results",
    title: "Jakarta Open 2025: Final Results",
    excerpt: "Zar Lasahido claims victory in Jakarta Open with impressive performance",
    publishedAt: "2025-01-10",
    readTime: "4 min read",
    category: "Results"
  },
  {
    id: "youth-development-program",
    title: "Youth Development Program Launch",
    excerpt: "New initiative to nurture young padel talent across Indonesia",
    publishedAt: "2025-01-08",
    readTime: "6 min read",
    category: "Development"
  }
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            Latest News
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Recent News
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Get the latest news, announcements, and updates from the Indonesian padel community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 max-w-6xl mx-auto">
          {/* Featured Article - Left Side */}
          <div className="h-full">
            <Card className="bg-white border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={featuredNews.imageUrl}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {featuredNews.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-5 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  {formatDate(featuredNews.publishedAt)}
                  <Clock className="h-3.5 w-3.5 ml-3 mr-1.5" />
                  {featuredNews.readTime}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                  {featuredNews.excerpt}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit text-sm" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* News List - Right Side (3 items stacked) */}
          <div className="flex flex-col space-y-4">
            {newsItems.map((item) => (
              <Card key={item.id} className="bg-white border-gray-200 hover:shadow-md transition-all duration-300 group flex-1">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      {formatDate(item.publishedAt)}
                    </div>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-grow">
                    {item.excerpt}
                  </p>
                  <Link 
                    href={`/news/${item.id}`}
                    className="text-blue-600 hover:text-blue-700 text-xs font-medium inline-flex items-center transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}