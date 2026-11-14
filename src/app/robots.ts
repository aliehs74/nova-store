import type { MetadataRoute } from "next";
import siteUrl from "@/shared/site";

const robots = (): MetadataRoute.Robots =>
  siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", siteUrl).href,
      }
    : { rules: { userAgent: "*", disallow: "/" } };

export default robots;
