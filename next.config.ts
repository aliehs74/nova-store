import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compiler: { styledComponents: true },
  partialPrefetching: true,
};

export default createNextIntlPlugin("./src/requests/locale.ts")(nextConfig);
