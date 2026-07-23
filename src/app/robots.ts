import type { MetadataRoute } from "next";

const siteUrl = "https://www.chanayaw.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tokens"],
    },

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
