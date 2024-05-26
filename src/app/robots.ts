import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    host: process.env.NEXT_PUBLIC_DOMAIN,
  };
}
