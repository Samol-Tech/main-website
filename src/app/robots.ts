import type { MetadataRoute } from "next";

// Generates /robots.txt. Keeps the admin dashboard and its API/auth routes
// out of search engine crawls — none of it is public content, and there's no
// reason for it to show up in search results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: "https://samoltechconsult.name.ng/sitemap.xml",
  };
}
