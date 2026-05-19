import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://antigravitywellness.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add additional URLs here as your site expands
  ];
}
