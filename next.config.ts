import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-tunasabana.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  headers: async () => [
    {
      // Cache static assets aggressively (fonts, icons, images)
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      // Cache static pages with stale-while-revalidate
      source: "/(|serenatas|serenatas/:path*|contacto|tunos|musica|galeria)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400, stale-while-revalidate=604800",
        },
      ],
    },
  ],
};

export default nextConfig;
