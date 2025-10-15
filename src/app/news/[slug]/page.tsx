import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleById, getAllArticles } from "@/lib/data/news-articles";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleById(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.subtitle}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Published on {formatDate(article.publishedAt)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{article.readTime}</span>
          </div>
          <Button variant="outline" size="sm" className="ml-auto">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Share this article:</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Back to News */}
        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All News
            </Link>
          </Button>
        </div>
      </article>
    </main>
  );
}

// Generate static params for all articles (optional, for static generation)
export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.id,
  }));
}

