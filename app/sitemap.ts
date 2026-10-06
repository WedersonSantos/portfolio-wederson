import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [{ url: siteUrl, priority: 1 }, ...projects.map(project => ({ url: `${siteUrl}/projetos/${project.slug}`, priority: 0.8 }))];
}
