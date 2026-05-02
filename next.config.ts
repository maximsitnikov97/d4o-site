import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output упрощает Docker-деплой: .next/standalone/ содержит
  // минимальный server.js + только нужные node_modules.
  output: "standalone",
};

export default nextConfig;
