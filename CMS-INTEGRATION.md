# CMS Integration Guide

This document explains how to integrate a Content Management System (CMS) for news articles in the future.

## Current Implementation

Currently, news articles are stored in a static data file:
- **File**: `/src/lib/data/news-articles.ts`
- **Type**: TypeScript file with hardcoded article data
- **Used by**: 
  - Home page news section: `/src/components/home/news-section.tsx`
  - News listing page: `/src/app/news/page.tsx`
  - Individual article pages: `/src/app/news/[slug]/page.tsx`

## Data Structure

```typescript
interface NewsArticle {
  id: string;           // Unique identifier (slug)
  title: string;        // Article title
  subtitle?: string;    // Optional subtitle
  excerpt: string;      // Short description for listing pages
  content: string;      // Full HTML content
  imageUrl: string;     // Featured image path
  publishedAt: string;  // ISO date string
  readTime: string;     // e.g., "5 min read"
  category: string;     // e.g., "National Team", "Results"
  author?: string;      // Optional author name
  tags?: string[];      // Optional tags array
}
```

## CMS Integration Options

### Option 1: Strapi (Recommended)
[Strapi](https://strapi.io/) is an open-source headless CMS built with Node.js.

**Benefits:**
- Self-hosted (full control)
- Built-in media library
- Role-based access control
- REST & GraphQL APIs
- Easy to customize

**Integration Steps:**
1. Install Strapi: `npx create-strapi-app@latest cms`
2. Create "Article" content type matching our NewsArticle interface
3. Replace static functions in `/src/lib/data/news-articles.ts` with API calls
4. Example API call:
   ```typescript
   export const getAllArticles = async (): Promise<NewsArticle[]> => {
     const res = await fetch('http://localhost:1337/api/articles?populate=*');
     const data = await res.json();
     return data.data.map(transformStrapiArticle);
   };
   ```

### Option 2: Sanity.io
[Sanity](https://www.sanity.io/) is a hosted headless CMS with a powerful content studio.

**Benefits:**
- Hosted (less maintenance)
- Real-time collaboration
- Powerful query language (GROQ)
- Free tier available

**Integration Steps:**
1. Install Sanity: `npm install @sanity/client`
2. Create schema matching NewsArticle
3. Replace static functions with Sanity queries
4. Example:
   ```typescript
   import { createClient } from '@sanity/client';
   
   const client = createClient({
     projectId: 'your-project-id',
     dataset: 'production',
     apiVersion: '2024-01-01',
     useCdn: true,
   });
   
   export const getAllArticles = async (): Promise<NewsArticle[]> => {
     return await client.fetch(`*[_type == "article"] | order(publishedAt desc)`);
   };
   ```

### Option 3: WordPress with WPGraphQL
Use WordPress as a headless CMS with GraphQL API.

**Benefits:**
- Familiar interface for non-technical users
- Massive plugin ecosystem
- Can reuse existing WordPress sites

### Option 4: Custom CMS with Prisma
Build a custom CMS using the existing Prisma database.

**Benefits:**
- Full control
- No external dependencies
- Already have database schema

**Implementation:**
1. Update Prisma schema (already exists as `NewsPost` model)
2. Create admin routes: `/admin/news`
3. Build CRUD interface with React Hook Form + Zod
4. Replace static functions with Prisma queries:
   ```typescript
   export const getAllArticles = async (): Promise<NewsArticle[]> => {
     return await prisma.newsPost.findMany({
       orderBy: { publishedAt: 'desc' }
     });
   };
   ```

## Migration Steps (Any CMS)

1. **Update the interface file** (`/src/lib/data/news-articles.ts`):
   - Change functions from synchronous to async
   - Replace static data with API/database calls
   - Keep the same function signatures

2. **Update consuming components**:
   - Make components async (Server Components)
   - Or use client-side fetching with SWR/React Query

3. **Add loading states** for better UX

4. **Implement caching**:
   - Next.js cache: `revalidate` option
   - Or use SWR/React Query for client-side caching

5. **Add error handling** for failed API calls

## Example: Converting to Async (Server Components)

**Before (Static):**
```typescript
export function NewsSection() {
  const allArticles = getRecentArticles(4);
  // ...
}
```

**After (CMS):**
```typescript
export async function NewsSection() {
  const allArticles = await getRecentArticles(4);
  // ...
}
```

## Images Management

Currently images are stored in `/public/news/`. When integrating a CMS:

1. **Keep local storage**: Upload images to `/public/news/` and store paths in CMS
2. **Use CMS media library**: Let CMS handle image uploads and use their URLs
3. **Use cloud storage**: Upload to AWS S3/Cloudinary and store URLs in CMS

## Recommended Workflow

1. **Phase 1**: Add Prisma-based admin panel for news management
2. **Phase 2**: Add rich text editor (TipTap or Lexical)
3. **Phase 3**: Consider Strapi/Sanity if more features needed

## Environment Variables Needed

When integrating a CMS, add to `.env`:

```env
# For Strapi
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token

# For Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token

# For WordPress
WORDPRESS_API_URL=https://your-site.com/graphql
```

## Testing Strategy

1. Create mock CMS responses
2. Test with static data first
3. Use CMS staging environment
4. Test image uploads
5. Test error handling (network failures)

## Next Steps

1. Choose a CMS solution based on client needs
2. Set up CMS instance (local or hosted)
3. Create content types matching NewsArticle interface
4. Update `/src/lib/data/news-articles.ts` with CMS integration
5. Test thoroughly before removing static data
6. Train client on using CMS

