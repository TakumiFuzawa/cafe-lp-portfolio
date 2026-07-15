import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ヒーロー画像はLCP対策で品質を落として配信する(next/image の quality prop 用)
    qualities: [60, 75],
  },
};

export default nextConfig;
