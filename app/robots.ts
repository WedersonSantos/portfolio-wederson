import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  const publishable = Boolean(siteUrl) && process.env.VERCEL_ENV !== "preview";
  return { rules: { userAgent: "*", ...(publishable ? { allow: "/" } : { disallow: "/" }) }, ...(publishable ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
