import type { MetadataRoute } from "next";
import { siteConfig } from '@/lib/config';

const BASE_URL = siteConfig.base_url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
