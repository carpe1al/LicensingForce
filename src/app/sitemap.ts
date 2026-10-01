import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/solutions", "/compliance", "/management-program", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.7,
  }));
}
