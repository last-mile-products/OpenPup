import type { NextConfig } from "next";

// Static export so `out/` can be deployed to Firebase Hosting (classic).
// next/image must stay unoptimized because there is no image optimizer on Hosting.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
