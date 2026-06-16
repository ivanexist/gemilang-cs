import { MetadataRoute } from "next";
import data from "@/app/json/gcsdata.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gemilangciptasentosa.com";

  // Static routes
  const staticRoutes = ["", "/tentang", "/layanan", "/proyek", "/kontak"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic service routes
  const serviceRoutes = data.services.map((service) => ({
    url: `${baseUrl}/layanan/${service.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes = data.projects.map((project) => ({
    url: `${baseUrl}/proyek/${project.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
