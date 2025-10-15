import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticles } from "@/lib/data/news-articles";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function NewsPage() {
  const allNewsArticles = getAllArticles();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest news, tournaments, and achievements from Indonesia's padel community
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">News</span>
          </nav>
        </div>
      </div>

      {/* Filter Tabs (for future implementation) */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              All News
            </Button>
            <Button variant="outline" className="text-gray-600">
              National Team
            </Button>
            <Button variant="outline" className="text-gray-600">
              Results
            </Button>
            <Button variant="outline" className="text-gray-600">
              Tournaments
            </Button>
            <Button variant="outline" className="text-gray-600">
              Development
            </Button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allNewsArticles.map((article) => (
              <Card 
                key={article.id} 
                className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 flex-grow flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      {formatDate(article.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center transition-colors mt-auto"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination (for future implementation) */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                1
              </Button>
              <Button variant="outline">
                2
              </Button>
              <Button variant="outline">
                3
              </Button>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter and get the latest padel news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "News & Updates | Indonesia Padel Rankings",
  description: "Stay updated with the latest news, tournaments, and achievements from Indonesia's padel community",
};

