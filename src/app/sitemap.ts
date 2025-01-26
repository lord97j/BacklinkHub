import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getSortedPostsData } from '@/lib/posts';
import { getCategories } from '@/lib/data';

const locales = ['en', 'zh'] as const;
const defaultLocale = 'en';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // home
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
        url: 'rules', // rules
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
    {
      url: 'category', // category
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
        url: 'article', // article
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: 'changelog', // changelog
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      },
  ];

  // 获取所有文章并生成路由
  const posts = getSortedPostsData();
  const articleRoutes = posts.map((post) => ({
    url: `article/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 获取所有语言的分类并生成路由
  const categoryRoutes = locales.flatMap(locale => {
    const categories = getCategories(locale);
    return categories.map((category: any) => ({
      url: locale === defaultLocale 
        ? `category/${category.link}`  // 英文版不带语言前缀
        : `${locale}/category/${category.link}`,  // 其他语言带前缀
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  });

  // 合并所有路由
  const allRoutes = [...sitemapRoutes, ...categoryRoutes, ...articleRoutes];

  const sitemapData = allRoutes.map((route) => {
    const routeUrl = route.url === '' ? '' : `/${route.url}`;
    return {
      ...route,
      url: `${siteConfig.base_url}${routeUrl}`,
    };
  });

  return sitemapData;
}
